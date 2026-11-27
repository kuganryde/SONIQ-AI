import asyncio
import logging
import shutil
import sys
import tempfile
from pathlib import Path
from typing import Any, Dict, List, Optional
import numpy as np
import scipy.signal

from app.agents.base_agent import BaseAudioAgent
from app.config import settings
from app.core.audio_io import AudioIO

logger = logging.getLogger("soniq.stems")


class StemSeparatorAgent(BaseAudioAgent):
    """AGENT 02: Stem Separation Agent - Separates audio into Vocals, Drums, Bass, and Other."""

    # Enforce 1 concurrent neural Demucs job on CPU VPS so RAM stays bounded
    _demucs_semaphore = asyncio.Semaphore(1)

    def __init__(self):
        super().__init__(
            agent_id="AGENT_02_STEM_SEPARATION",
            agent_name="Stem Separation Agent",
            role="Separate multitrack audio into isolated Vocals, Drums, Bass, and Other stems"
        )

    def get_deterministic_fallback(self, prompt: str) -> str:
        return "Source separation completed using spectral median filtering and frequency band isolation."

    @staticmethod
    def _hpss(mono: np.ndarray, sample_rate: int) -> tuple[np.ndarray, np.ndarray]:
        """Harmonic-Percussive Source Separation using 2D median filtering on STFT."""
        n_fft = 2048
        hop_length = 512
        _, _, Zxx = scipy.signal.stft(mono, fs=sample_rate, nperseg=n_fft, noverlap=n_fft - hop_length)
        mag = np.abs(Zxx)
        phase = np.angle(Zxx)

        # Harmonic filter: median across time (horizontal)
        # Percussive filter: median across frequency (vertical)
        from scipy.ndimage import median_filter
        h_mag = median_filter(mag, size=(1, 31))
        p_mag = median_filter(mag, size=(31, 1))

        # Soft masking
        mask_h = (h_mag ** 2) / (h_mag ** 2 + p_mag ** 2 + 1e-12)
        mask_p = (p_mag ** 2) / (h_mag ** 2 + p_mag ** 2 + 1e-12)

        Zh = Zxx * mask_h
        Zp = Zxx * mask_p

        _, harmonic = scipy.signal.istft(Zh, fs=sample_rate, nperseg=n_fft, noverlap=n_fft - hop_length)
        _, percussive = scipy.signal.istft(Zp, fs=sample_rate, nperseg=n_fft, noverlap=n_fft - hop_length)

        # Match input length
        n_len = len(mono)
        harmonic = harmonic[:n_len] if len(harmonic) >= n_len else np.pad(harmonic, (0, n_len - len(harmonic)))
        percussive = percussive[:n_len] if len(percussive) >= n_len else np.pad(percussive, (0, n_len - len(percussive)))

        return harmonic, percussive

    async def _separate_with_demucs(self, file_path: str) -> Optional[Dict[str, Any]]:
        """
        Runs Meta Demucs (htdemucs) in an isolated CPU subprocess behind a 1-job semaphore.
        Subprocess isolation ensures 100% of PyTorch RAM is reclaimed by the OS immediately after completion.
        """
        py_bin = sys.executable or "/root/soniq-ai/venv/bin/python"
        src = Path(file_path)

        async with self._demucs_semaphore:
            with tempfile.TemporaryDirectory(prefix="soniq_demucs_") as tmpdir:
                tmp_out = Path(tmpdir)
                cmd = [
                    py_bin, "-m", "demucs",
                    "-n", "htdemucs",
                    "--device", "cpu",
                    "--jobs", "2",
                    "-o", str(tmp_out),
                    str(src),
                ]
                proc = await asyncio.create_subprocess_exec(
                    *cmd,
                    stdout=asyncio.subprocess.PIPE,
                    stderr=asyncio.subprocess.PIPE,
                )
                try:
                    _, stderr = await asyncio.wait_for(proc.communicate(), timeout=300.0)
                except asyncio.TimeoutError:
                    try:
                        proc.kill()
                        await proc.wait()
                    except Exception:
                        pass
                    logger.warning("Demucs htdemucs timed out after 300s; falling back to HPSS.")
                    return None

                if proc.returncode != 0:
                    logger.warning(f"Demucs failed (rc={proc.returncode}): {stderr.decode(errors='ignore')[-400:]}")
                    return None

                model_dir = tmp_out / "htdemucs" / src.stem
                if not model_dir.exists():
                    return None

                output_files: Dict[str, Any] = {}
                for stem_name in ("vocals", "drums", "bass", "other"):
                    stem_src = model_dir / f"{stem_name}.wav"
                    if not stem_src.exists():
                        continue
                    out_filename = f"{src.stem}_{stem_name}.wav"
                    out_p = settings.STEMS_DIR / out_filename
                    shutil.copy2(stem_src, out_p)
                    stem_audio, sr = AudioIO.load_audio(str(out_p))
                    output_files[stem_name] = {
                        "stem_name": stem_name,
                        "file_path": str(out_p),
                        "download_url": f"/api/v1/audio/download/{out_p.name}",
                        "duration_seconds": round(stem_audio.shape[1] / sr, 3),
                    }

                return output_files if len(output_files) == 4 else None

    async def separate_stems(self, file_path: str, entity_name: str = "track", engine: str = "neural") -> Dict[str, Any]:
        # Try Neural Demucs (htdemucs) first unless fast HPSS mode explicitly requested
        if engine != "fast":
            demucs_stems = await self._separate_with_demucs(file_path)
            if demucs_stems:
                result = {
                    "agent_id": self.agent_id,
                    "status": "COMPLETED",
                    "engine": "Demucs htdemucs (Neural 4-Stem CPU)",
                    "source_file": file_path,
                    "stems": demucs_stems,
                    "isolation_disclaimer": "Neural Demucs htdemucs 4-stem source separation completed locally on sovereign CPU.",
                }
                self.log_execution("SEPARATE_STEMS", {"file": file_path}, {"stems_count": 4, "engine": "demucs"})
                return result

        # Fast deterministic HPSS fallback
        audio, sr = AudioIO.load_audio(file_path)
        channels, num_samples = audio.shape
        mono = np.mean(audio, axis=0)

        # 1. Harmonic vs Percussive separation
        harmonic, percussive = self._hpss(mono, sr)

        # 2. Extract Bass from Harmonic (< 220 Hz lowpass)
        sos_bass = scipy.signal.butter(4, 220.0, btype='low', fs=sr, output='sos')
        bass = scipy.signal.sosfilt(sos_bass, harmonic)

        # 3. Mid/High Harmonic (Remaining)
        sos_hp = scipy.signal.butter(4, 220.0, btype='high', fs=sr, output='sos')
        mid_high_harm = scipy.signal.sosfilt(sos_hp, harmonic)

        # 4. Vocal extraction (Bandpass 300Hz - 3800Hz)
        sos_vocal = scipy.signal.butter(3, [300.0, 3800.0], btype='bandpass', fs=sr, output='sos')
        vocals = scipy.signal.sosfilt(sos_vocal, mid_high_harm)

        # 5. Other instruments (Subtract vocals from mid/high)
        other = mid_high_harm - vocals * 0.75

        # 6. Drums = percussive
        drums = percussive

        # Ensure 2-channel stereo for all stems
        stems_dict = {
            "vocals": np.vstack([vocals, vocals]),
            "drums": np.vstack([drums, drums]),
            "bass": np.vstack([bass, bass]),
            "other": np.vstack([other, other]),
        }

        # Write each stem non-destructively
        output_files = {}
        for stem_name, stem_audio in stems_dict.items():
            out_filename = f"{Path(file_path).stem}_{stem_name}.wav"
            out_p = settings.STEMS_DIR / out_filename
            AudioIO.write_audio(stem_audio, out_p, sample_rate=sr, bit_depth="24", format_type="WAV")
            output_files[stem_name] = {
                "stem_name": stem_name,
                "file_path": str(out_p),
                "download_url": f"/api/v1/audio/download/{out_p.name}",
                "duration_seconds": round(stem_audio.shape[1] / sr, 3)
            }

        result = {
            "agent_id": self.agent_id,
            "status": "COMPLETED",
            "engine": "HPSS Spectral (Fast Fallback)",
            "source_file": file_path,
            "stems": output_files,
            "isolation_disclaimer": "AI source separation provides acoustic stem isolation. Artefacts may be present in complex dense mixes."
        }
        self.log_execution("SEPARATE_STEMS", {"file": file_path}, {"stems_count": len(output_files), "engine": "hpss"})
        return result
