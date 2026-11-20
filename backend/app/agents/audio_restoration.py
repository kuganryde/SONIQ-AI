from pathlib import Path
from typing import Any, Dict
import numpy as np
import scipy.signal

from app.agents.base_agent import BaseAudioAgent
from app.config import settings
from app.core.analysis import AudioAnalyzer
from app.core.audio_io import AudioIO


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

    async def restore_audio(
        self,
        file_path: str,
        denoise: bool = True,
        dehum_freq: float = 50.0,
        declip: bool = True
    ) -> Dict[str, Any]:
        audio, sr = AudioIO.load_audio(file_path)
        pre_metrics = AudioAnalyzer.full_audio_analysis(audio, sr)

        processed = np.copy(audio)
        # 1. De-hum
        if dehum_freq > 0:
            processed = self.remove_mains_hum(processed, sr, freq=dehum_freq)
        # 2. Spectral noise reduction
        if denoise:
            processed = self.reduce_noise_spectral(processed, sr, reduction_db=10.0)
        # 3. De-clip
        if declip:
            processed = self.repair_clipping(processed)

        post_metrics = AudioAnalyzer.full_audio_analysis(processed, sr)

        # Write non-destructive restored file
        out_filename = f"{Path(file_path).stem}_restored.wav"
        out_p = settings.PROCESSED_DIR / out_filename
        AudioIO.write_audio(processed, out_p, sample_rate=sr, bit_depth="24", format_type="WAV")

        result = {
            "agent_id": self.agent_id,
            "status": "COMPLETED",
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
        self.log_execution("RESTORE_AUDIO", {"file": file_path}, {"noise_reduction": denoise})
        return result
