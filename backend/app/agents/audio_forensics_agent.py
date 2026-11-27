"""
AGENT 01: Audio Forensics & Diagnostic (audio_forensics_agent)
Performs non-destructive signal-level forensics before processing:
noise floor, clipping, 50/60Hz electrical hum, clicks/pops, silence/dropouts,
phase coherence, 6-band spectral balance, and restoration difficulty scoring.
"""

import logging
import math
import time
from typing import Any, Dict, List
import numpy as np
import scipy.signal

from app.agents.base_agent import BaseAudioAgent
from app.agents.cinema_bass_agent import CinemaBassAgent
from app.agents.contracts import AgentResult, AgentTask, ExecutionStatus
from app.core.analysis import AudioAnalyzer
from app.core.audio_io import AudioIO

logger = logging.getLogger("soniq.forensics")


class AudioForensicsAgent(BaseAudioAgent):
    """AGENT 01: Deep Non-Destructive Audio Forensics & Diagnostic Agent."""

    MODEL_VERSION = "audio-forensics-1.0.0"

    def __init__(self):
        super().__init__(
            agent_id="audio_forensics_agent",
            agent_name="Audio Forensics & Diagnostic Agent",
            role="Diagnose noise, hum, clicks, clipping, phase, spectral balance, and recommend optimal processing",
        )

    def get_deterministic_fallback(self, prompt: str) -> str:
        return "Forensic diagnostic complete: measured noise floor, electrical hum, impulse clicks, clipping, phase, and 6-band spectral response."

    @staticmethod
    def _detect_mains_hum(mono: np.ndarray, sample_rate: int) -> Dict[str, Any]:
        nperseg = min(32768, len(mono))
        freqs, psd = scipy.signal.welch(mono, fs=sample_rate, nperseg=nperseg)
        eps = 1e-15

        def hum_prominence_db(target_hz: float) -> float:
            band = (freqs >= target_hz - 1.5) & (freqs <= target_hz + 1.5)
            neigh = ((freqs >= target_hz - 10.0) & (freqs < target_hz - 3.0)) | (
                (freqs > target_hz + 3.0) & (freqs <= target_hz + 10.0)
            )
            if not np.any(band) or not np.any(neigh):
                return 0.0
            peak = float(np.max(psd[band]))
            bg = float(np.median(psd[neigh])) + eps
            return round(10.0 * math.log10((peak + eps) / bg), 2)

        p50 = hum_prominence_db(50.0)
        p60 = hum_prominence_db(60.0)
        detected_hz = 50.0 if (p50 >= 9.0 and p50 >= p60) else (60.0 if p60 >= 9.0 else 0.0)
        return {
            "hum_detected": detected_hz > 0.0,
            "detected_mains_hz": detected_hz,
            "prominence_50hz_db": p50,
            "prominence_60hz_db": p60,
        }

    @staticmethod
    def _detect_clicks_and_pops(mono: np.ndarray, sample_rate: int) -> Dict[str, Any]:
        # High-pass derivative isolates sharp transient impulses / vinyl crackle / digital clicks
        sos_hp = scipy.signal.butter(2, min(2500.0, sample_rate * 0.45), btype="high", fs=sample_rate, output="sos")
        hp = scipy.signal.sosfilt(sos_hp, mono)
        diff = np.abs(np.diff(hp))
        med = float(np.median(diff)) + 1e-9
        mad = float(np.median(np.abs(diff - med))) + 1e-9
        # Click spikes exceed 14x robust MAD and minimum absolute amplitude
        spike_mask = (diff > med + 14.0 * mad) & (diff > 0.08)
        spike_count = int(np.sum(spike_mask))
        duration = max(0.1, len(mono) / float(sample_rate))
        return {
            "clicks_detected": spike_count > 3,
            "impulse_spike_count": spike_count,
            "spikes_per_second": round(spike_count / duration, 2),
        }

    @staticmethod
    def _detect_noise_and_silence(mono: np.ndarray, sample_rate: int) -> Dict[str, Any]:
        win = max(256, int(0.05 * sample_rate))  # 50ms frames
        n_frames = len(mono) // win
        if n_frames < 1:
            return {"estimated_noise_floor_dbfs": -96.0, "silence_ratio_pct": 0.0, "high_noise_floor": False}
        trimmed = mono[: n_frames * win].reshape(n_frames, win)
        rms_frames = np.sqrt(np.mean(trimmed ** 2, axis=1) + 1e-12)
        db_frames = 20.0 * np.log10(rms_frames)
        noise_floor_db = round(float(np.percentile(db_frames, 10)), 2)
        silence_pct = round(float(np.mean(db_frames < -55.0) * 100.0), 2)
        return {
            "estimated_noise_floor_dbfs": noise_floor_db,
            "silence_ratio_pct": silence_pct,
            "high_noise_floor": noise_floor_db > -45.0,
        }

    @classmethod
    def run_forensics(cls, file_path: str) -> Dict[str, Any]:
        audio, sr = AudioIO.load_audio(file_path)
        channels, num_samples = audio.shape
        duration_sec = round(num_samples / float(sr), 3)
        mono = np.mean(audio, axis=0)

        base_metrics = AudioAnalyzer.full_audio_analysis(audio, sr)
        lf_metrics = CinemaBassAgent.analyze_low_frequency_bands(audio, sr)
        hum_info = cls._detect_mains_hum(mono, sr)
        click_info = cls._detect_clicks_and_pops(mono, sr)
        noise_info = cls._detect_noise_and_silence(mono, sr)

        # Compute Restoration Difficulty Score (0-100)
        difficulty = 10
        issues: List[str] = []
        recommended_chain: List[str] = ["audio_forensics_agent"]

        if base_metrics["clipping"]["has_clipping"]:
            difficulty += 25
            issues.append("Digital clipping detected")
        if hum_info["hum_detected"]:
            difficulty += 15
            issues.append(f"Electrical mains hum at {int(hum_info['detected_mains_hz'])}Hz")
        if click_info["clicks_detected"]:
            difficulty += 15
            issues.append(f"Impulse clicks/pops ({click_info['impulse_spike_count']} spikes)")
        if noise_info["high_noise_floor"]:
            difficulty += 20
            issues.append(f"Elevated noise floor ({noise_info['estimated_noise_floor_dbfs']} dBFS)")
        if base_metrics["phase_correlation"] < 0.25:
            difficulty += 15
            issues.append(f"Low phase coherence ({base_metrics['phase_correlation']})")

        difficulty = min(100, difficulty)

        if issues:
            recommended_chain.append("audio_restoration_agent")
        recommended_chain.extend([
            "studio_enhancement_agent",
            "cinema_bass_agent",
            "mixing_mastering_agent",
            "audio_qa_agent",
            "acoustic_perception_agent",
        ])

        channel_layout = "mono" if channels == 1 else ("stereo" if channels == 2 else (f"{channels}ch_surround" if channels >= 6 else f"{channels}ch"))

        return {
            "source_file": file_path,
            "channel_configuration": {"channels": channels, "layout": channel_layout},
            "technical_specs": {
                "sample_rate_hz": sr,
                "duration_seconds": duration_sec,
                "total_samples": num_samples,
            },
            "metrics": base_metrics,
            "low_frequency_diagnostics": lf_metrics,
            "hum_analysis": hum_info,
            "click_pop_analysis": click_info,
            "noise_and_silence_analysis": noise_info,
            "detected_issues": issues,
            "restoration_difficulty_score": difficulty,
            "recommended_restoration_profile": (
                "ADVANCED_STUDIO" if difficulty >= 60 else ("PROFESSIONAL" if difficulty >= 30 else "CONSERVATIVE")
            ),
            "recommended_processing_chain": recommended_chain,
        }

    async def execute_task(self, task: AgentTask) -> AgentResult:
        t0 = time.perf_counter()
        try:
            report = self.run_forensics(task.input_file_path)
            return AgentResult(
                task_id=task.task_id,
                agent_id=self.agent_id,
                execution_status=ExecutionStatus.COMPLETED,
                output_file_path=task.input_file_path,  # Read-only: never modifies source
                processing_report=report,
                measurements=report["metrics"],
                warnings=report["detected_issues"],
                execution_time=round(time.perf_counter() - t0, 3),
                hardware_used="CPU",
                model_version=self.MODEL_VERSION,
            )
        except Exception as e:
            logger.exception(f"AudioForensicsAgent error: {e}")
            return AgentResult(
                task_id=task.task_id,
                agent_id=self.agent_id,
                execution_status=ExecutionStatus.FAILED,
                errors=[str(e)],
                execution_time=round(time.perf_counter() - t0, 3),
                hardware_used="CPU",
                model_version=self.MODEL_VERSION,
            )
