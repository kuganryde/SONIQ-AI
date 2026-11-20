from pathlib import Path
from typing import Any, Dict, List
import numpy as np
import scipy.signal

from app.agents.base_agent import BaseAudioAgent
from app.config import settings
from app.core.audio_io import AudioIO


class StemSeparatorAgent(BaseAudioAgent):
    """AGENT 02: Stem Separation Agent - Separates audio into Vocals, Drums, Bass, and Other."""

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

    async def separate_stems(self, file_path: str, entity_name: str = "track") -> Dict[str, Any]:
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
            "source_file": file_path,
            "stems": output_files,
            "isolation_disclaimer": "AI source separation provides acoustic stem isolation. Artefacts may be present in complex dense mixes."
        }
        self.log_execution("SEPARATE_STEMS", {"file": file_path}, {"stems_count": len(output_files)})
        return result
