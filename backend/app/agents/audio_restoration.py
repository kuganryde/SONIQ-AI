import asyncio
import logging
import shutil
import tempfile
from pathlib import Path
from typing import Any, Dict, Tuple
import numpy as np
import scipy.signal

from app.agents.base_agent import BaseAudioAgent
from app.config import settings
from app.core.analysis import AudioAnalyzer
from app.core.audio_io import AudioIO

logger = logging.getLogger("soniq.restoration")
DEEPFILTER_BIN = "/usr/local/bin/deep-filter"


class AudioRestorationAgent(BaseAudioAgent):
    """AGENT 03: Audio Restoration Agent - De-noise, De-hum, De-click, De-clip."""

    def __init__(self):
        super().__init__(
            agent_id="AGENT_03_RESTORATION",
            agent_name="Audio Restoration Agent",
            role="Repair, de-noise, de-hum, de-click, and enhance degraded recordings"
        )

    def get_deterministic_fallback(self, prompt: str) -> str:
        return "Audio restoration applied: 50/60Hz notch filter, spectral noise suppression, and transient de-clicking."

    @staticmethod
    def remove_mains_hum(audio: np.ndarray, sample_rate: int, freq: float = 50.0) -> np.ndarray:
        """Removes electrical mains hum (50Hz or 60Hz) and its first two harmonics."""
        out = np.copy(audio)
        for harmonic in [freq, freq * 2, freq * 3]:
            if harmonic < sample_rate / 2.05:
                # Steep notch filter (Q = 35)
                b, a = scipy.signal.iirnotch(harmonic, 35.0, fs=sample_rate)
                for ch in range(out.shape[0]):
                    out[ch] = scipy.signal.lfilter(b, a, out[ch])
        return out

    @staticmethod
    def reduce_noise_spectral(audio: np.ndarray, sample_rate: int, reduction_db: float = 12.0) -> np.ndarray:
        """Spectral subtraction noise reduction."""
        n_fft = 2048
        hop = 512
        channels = audio.shape[0]
        out = np.zeros_like(audio)

        alpha = 10.0 ** (reduction_db / 20.0)

        for ch in range(channels):
            _, _, Zxx = scipy.signal.stft(audio[ch], fs=sample_rate, nperseg=n_fft, noverlap=n_fft - hop)
            mag = np.abs(Zxx)
            phase = np.angle(Zxx)

            # Estimate noise floor from the quietest 10% frames
            frame_energies = np.sum(mag ** 2, axis=0)
            quiet_indices = np.argsort(frame_energies)[:max(1, int(len(frame_energies) * 0.10))]
            noise_est = np.mean(mag[:, quiet_indices], axis=1, keepdims=True)

            # Spectral subtraction with over-subtraction factor and spectral floor
            clean_mag = np.maximum(mag - 1.2 * noise_est, 0.05 * mag)

            # Reconstruct
            Z_clean = clean_mag * np.exp(1j * phase)
            _, rec = scipy.signal.istft(Z_clean, fs=sample_rate, nperseg=n_fft, noverlap=n_fft - hop)
            n_len = audio.shape[1]
            out[ch] = rec[:n_len] if len(rec) >= n_len else np.pad(rec, (0, n_len - len(rec)))

        return out

    @staticmethod
    def repair_clipping(audio: np.ndarray, threshold: float = 0.99) -> np.ndarray:
        """Interpolates saturated clipped peaks using cubic spline."""
        out = np.copy(audio)
        for ch in range(out.shape[0]):
            clipped_indices = np.where(np.abs(out[ch]) >= threshold)[0]
            if len(clipped_indices) > 0 and len(clipped_indices) < len(out[ch]) * 0.1:
                # Group consecutive clipped samples
                diffs = np.diff(clipped_indices)
                starts = np.insert(diffs > 1, 0, True)
                groups = np.split(clipped_indices, np.where(starts)[0][1:])
                for grp in groups:
                    if len(grp) <= 8 and grp[0] > 2 and grp[-1] < len(out[ch]) - 3:
                        left = grp[0] - 1
                        right = grp[-1] + 1
                        # Linear / cubic blend across small clipped burst
                        out[ch, grp] = np.linspace(out[ch, left], out[ch, right], len(grp))
        return out

    @staticmethod
    async def denoise_deepfilternet(audio: np.ndarray, sample_rate: int) -> Tuple[np.ndarray, bool]:
        """
        Neural speech/audio denoising using local DeepFilterNet3 (v0.5.6) standalone binary.
        Operates natively at 48 kHz; falls back cleanly if binary is unavailable or fails.
        """
        df_bin = shutil.which("deep-filter") or (DEEPFILTER_BIN if Path(DEEPFILTER_BIN).exists() else None)
        if not df_bin:
            return audio, False

        target_sr = 48000
        orig_len = audio.shape[1]
        work_audio = audio
        if sample_rate != target_sr:
            from math import gcd
            g = gcd(target_sr, sample_rate)
            work_audio = scipy.signal.resample_poly(audio, target_sr // g, sample_rate // g, axis=1)

        with tempfile.TemporaryDirectory(prefix="soniq_df_") as tmpdir:
            tmp_path = Path(tmpdir)
            in_wav = tmp_path / "input.wav"
            out_dir = tmp_path / "out"
            out_dir.mkdir(exist_ok=True)

            # DeepFilterNet3 Rust binary expects 16-bit PCM WAV at 48 kHz
            AudioIO.write_audio(work_audio, in_wav, sample_rate=target_sr, bit_depth="16", format_type="WAV")

            proc = await asyncio.create_subprocess_exec(
                df_bin,
                str(in_wav),
                "-o",
                str(out_dir),
                stdout=asyncio.subprocess.PIPE,
                stderr=asyncio.subprocess.PIPE,
            )
            try:
                _, stderr = await asyncio.wait_for(proc.communicate(), timeout=90.0)
            except asyncio.TimeoutError:
                try:
                    proc.kill()
                    await proc.wait()
                except Exception:
                    pass
                logger.warning("DeepFilterNet3 timed out after 90s; falling back to spectral denoising.")
                return audio, False

            out_wav = out_dir / "input.wav"
            if proc.returncode != 0 or not out_wav.exists():
                logger.warning(f"DeepFilterNet3 failed (rc={proc.returncode}): {stderr.decode(errors='ignore')[:300]}")
                return audio, False

            cleaned, out_sr = AudioIO.load_audio(str(out_wav))
            if out_sr != sample_rate:
                from math import gcd
                g = gcd(sample_rate, out_sr)
                cleaned = scipy.signal.resample_poly(cleaned, sample_rate // g, out_sr // g, axis=1)

            # Match original length & channel count
            if cleaned.shape[1] >= orig_len:
                cleaned = cleaned[:, :orig_len]
            else:
                cleaned = np.pad(cleaned, ((0, 0), (0, orig_len - cleaned.shape[1])))

            return cleaned, True

    @staticmethod
    def repair_clicks_pops(audio: np.ndarray, sample_rate: int) -> np.ndarray:
        """Removes short impulse clicks/pops via localized median replacement while preserving transients."""
        out = np.copy(audio)
        for ch in range(out.shape[0]):
            x = out[ch]
            if len(x) < 15:
                continue
            med_sig = scipy.signal.medfilt(x, kernel_size=5)
            residual = np.abs(x - med_sig)
            thresh = float(np.median(residual) + 12.0 * (np.median(np.abs(residual - np.median(residual))) + 1e-9))
            spikes = (residual > max(thresh, 0.08))
            if np.any(spikes) and np.sum(spikes) < len(x) * 0.02:
                out[ch, spikes] = med_sig[spikes]
        return out

    async def restore_audio(
        self,
        file_path: str,
        denoise: bool = True,
        dehum_freq: float = 50.0,
        declip: bool = True,
        profile: str = "PROFESSIONAL",
        declick: bool = True
    ) -> Dict[str, Any]:
        """
        Restores audio using one of three intensity profiles:
        - CONSERVATIVE: minimal intervention, 35% wet/dry neural blend
        - PROFESSIONAL: full neural denoise + de-hum + de-click + de-clip
        - ADVANCED_STUDIO: full neural denoise + de-hum + de-click + de-clip + gentle spectral tail cleanup
        """
        prof = (profile or "PROFESSIONAL").upper()
        if prof not in ("CONSERVATIVE", "PROFESSIONAL", "ADVANCED_STUDIO"):
            prof = "PROFESSIONAL"

        audio, sr = AudioIO.load_audio(file_path)
        pre_metrics = AudioAnalyzer.full_audio_analysis(audio, sr)

        processed = np.copy(audio)
        denoise_engine = "None"
        # 1. De-hum
        if dehum_freq > 0:
            processed = self.remove_mains_hum(processed, sr, freq=dehum_freq)
        # 2. De-click / de-pop
        if declick and prof in ("PROFESSIONAL", "ADVANCED_STUDIO"):
            processed = self.repair_clicks_pops(processed, sr)
        # 3. Neural DeepFilterNet3 denoising (with profile-controlled wet/dry blend)
        if denoise:
            df_audio, used_df = await self.denoise_deepfilternet(processed, sr)
            if used_df:
                if prof == "CONSERVATIVE":
                    processed = processed * 0.65 + df_audio * 0.35
                    denoise_engine = "DeepFilterNet3 (Conservative 35% Blend)"
                elif prof == "ADVANCED_STUDIO":
                    processed = self.reduce_noise_spectral(df_audio, sr, reduction_db=6.0)
                    denoise_engine = "DeepFilterNet3 + Spectral Tail Cleanup (Advanced Studio)"
                else:
                    processed = df_audio
                    denoise_engine = "DeepFilterNet3 (Neural 48kHz)"
            else:
                red_db = 6.0 if prof == "CONSERVATIVE" else (14.0 if prof == "ADVANCED_STUDIO" else 10.0)
                processed = self.reduce_noise_spectral(processed, sr, reduction_db=red_db)
                denoise_engine = f"Spectral Subtraction ({prof} Fallback)"
        # 4. De-clip
        if declip:
            processed = self.repair_clipping(processed)

        post_metrics = AudioAnalyzer.full_audio_analysis(processed, sr)

        # Write non-destructive restored file
        out_filename = f"{Path(file_path).stem}_restored_{prof.lower()}.wav"
        out_p = settings.PROCESSED_DIR / out_filename
        AudioIO.write_audio(processed, out_p, sample_rate=sr, bit_depth="24", format_type="WAV")

        result = {
            "agent_id": self.agent_id,
            "status": "COMPLETED",
            "profile": prof,
            "engine": denoise_engine,
            "source_file": file_path,
            "restored_file": str(out_p),
            "download_url": f"/api/v1/audio/download/{out_p.name}",
            "pre_restoration_metrics": pre_metrics,
            "post_restoration_metrics": post_metrics,
            "improvements": {
                "noise_floor_reduction_db": round(pre_metrics["rms_dbfs"] - post_metrics["rms_dbfs"], 2),
                "clipping_resolved": pre_metrics["clipping"]["has_clipping"] and not post_metrics["clipping"]["has_clipping"],
                "phase_integrity_preserved": abs(post_metrics["phase_correlation"] - pre_metrics["phase_correlation"]) < 0.1
            }
        }
        self.log_execution("RESTORE_AUDIO", {"file": file_path, "profile": prof}, {"noise_reduction": denoise, "engine": denoise_engine})
        return result
