"""
AGENT 06: Cinema Bass & LFE Engineering (cinema_bass_agent)
Engineers controlled, powerful, phase-coherent studio & cinema low-frequency audio.
"""

import logging
import time
from pathlib import Path
from typing import Any, Dict, Optional, Tuple
import numpy as np
import scipy.signal

from app.agents.base_agent import BaseAudioAgent
from app.agents.contracts import AgentResult, AgentTask, ExecutionStatus
from app.config import settings
from app.core.analysis import AudioAnalyzer
from app.core.audio_io import AudioIO
from app.core.dsp_engine import DSPOps

logger = logging.getLogger("soniq.cinema_bass")


CINEMA_BASS_PRESETS: Dict[str, Dict[str, Any]] = {
    "NATURAL": {
        "name": "Natural Bass Alignment",
        "crossover_hz": 100.0,
        "sub_gain_db": 1.0,
        "weight_gain_db": 1.2,
        "punch_gain_db": 1.0,
        "harmonic_blend": 0.08,
        "sub_comp_threshold_db": -18.0,
        "sub_comp_ratio": 2.0,
        "lfe_gain_db": 0.0,
        "mono_bass_lock": True,
    },
    "STUDIO_BASS": {
        "name": "Studio Bass Lift",
        "crossover_hz": 110.0,
        "sub_gain_db": 2.0,
        "weight_gain_db": 2.6,
        "punch_gain_db": 1.8,
        "harmonic_blend": 0.14,
        "sub_comp_threshold_db": -16.0,
        "sub_comp_ratio": 2.6,
        "lfe_gain_db": 1.5,
        "mono_bass_lock": True,
    },
    "CINEMA_IMPACT": {
        "name": "Cinema Impact & Theatrical LFE",
        "crossover_hz": 85.0,
        "sub_gain_db": 3.2,
        "weight_gain_db": 3.0,
        "punch_gain_db": 2.2,
        "harmonic_blend": 0.18,
        "sub_comp_threshold_db": -15.0,
        "sub_comp_ratio": 3.2,
        "lfe_gain_db": 3.0,
        "mono_bass_lock": True,
    },
    "DEEP_SUB": {
        "name": "Deep Sub Foundation",
        "crossover_hz": 90.0,
        "sub_gain_db": 3.8,
        "weight_gain_db": 2.8,
        "punch_gain_db": 1.4,
        "harmonic_blend": 0.20,
        "sub_comp_threshold_db": -15.0,
        "sub_comp_ratio": 3.5,
        "lfe_gain_db": 2.5,
        "mono_bass_lock": True,
    },
    "CUSTOM": {
        "name": "Custom Bass Engineering",
        "crossover_hz": 100.0,
        "sub_gain_db": 2.0,
        "weight_gain_db": 2.0,
        "punch_gain_db": 1.5,
        "harmonic_blend": 0.12,
        "sub_comp_threshold_db": -16.0,
        "sub_comp_ratio": 2.5,
        "lfe_gain_db": 1.5,
        "mono_bass_lock": True,
    },
}


class CinemaBassAgent(BaseAudioAgent):
    """AGENT 06: Cinema Bass & LFE Engineering Agent."""

    MODEL_VERSION = "cinema-bass-dsp-1.0.0"

    def __init__(self):
        super().__init__(
            agent_id="cinema_bass_agent",
            agent_name="Cinema Bass & LFE Engineering Agent",
            role="Engineer controlled, phase-coherent studio bass lift, harmonic reconstruction, and dedicated LFE tracks",
        )

    def get_deterministic_fallback(self, prompt: str) -> str:
        return "Cinema bass engineering applied: 22Hz infrasonic protection, 4-band sub/bass shaping, mono phase lock, and peak-protected LFE synthesis."

    @staticmethod
    def analyze_low_frequency_bands(audio: np.ndarray, sample_rate: int) -> Dict[str, Any]:
        """Analyzes the 4 dedicated low-frequency bands plus infrasonic (<20Hz) energy."""
        mono = np.mean(audio, axis=0)
        nperseg = min(16384, len(mono))
        freqs, psd = scipy.signal.welch(mono, fs=sample_rate, nperseg=nperseg)
        total = float(np.sum(psd)) + 1e-12

        def band_pct(lo: float, hi: float) -> float:
            mask = (freqs >= lo) & (freqs < hi)
            return round(float(np.sum(psd[mask]) / total) * 100.0, 2)

        # Low-band L/R phase correlation (< 120 Hz) for polarity check
        low_phase_corr = 1.0
        polarity_inverted = False
        if audio.shape[0] >= 2:
            sos_lp = scipy.signal.butter(4, min(120.0, sample_rate * 0.45), btype="low", fs=sample_rate, output="sos")
            low_lr = scipy.signal.sosfiltfilt(sos_lp, audio[:2], axis=1)
            denom = float(np.sqrt(np.sum(low_lr[0] ** 2) * np.sum(low_lr[1] ** 2)) + 1e-12)
            low_phase_corr = round(float(np.sum(low_lr[0] * low_lr[1]) / denom), 4)
            polarity_inverted = low_phase_corr < -0.35

        return {
            "infrasonic_below_20hz_pct": band_pct(1.0, 20.0),
            "deep_sub_20_40hz_pct": band_pct(20.0, 40.0),
            "low_weight_40_60hz_pct": band_pct(40.0, 60.0),
            "punch_body_60_80hz_pct": band_pct(60.0, 80.0),
            "upper_bass_80_120hz_pct": band_pct(80.0, 120.0),
            "low_band_phase_correlation": low_phase_corr,
            "polarity_warning": polarity_inverted,
        }

    @classmethod
    def process_cinema_bass(
        cls,
        audio: np.ndarray,
        sample_rate: int,
        preset_key: str = "STUDIO_BASS",
        overrides: Optional[Dict[str, Any]] = None,
    ) -> Tuple[np.ndarray, np.ndarray, Dict[str, Any]]:
        """
        Executes 64-bit float Cinema Bass & LFE DSP:
        Returns (enhanced_main_audio, dedicated_lfe_channel, report).
        """
        cfg = CINEMA_BASS_PRESETS.get(preset_key.upper(), CINEMA_BASS_PRESETS["STUDIO_BASS"]).copy()
        if overrides:
            for k, v in overrides.items():
                if k in cfg and v is not None:
                    cfg[k] = v

        # Safety clamps: never generate destructive infrasonic boosts or runaway gain
        crossover_hz = max(60.0, min(140.0, float(cfg["crossover_hz"])))
        sub_gain_db = max(-3.0, min(4.5, float(cfg["sub_gain_db"])))
        weight_gain_db = max(-3.0, min(4.5, float(cfg["weight_gain_db"])))
        punch_gain_db = max(-3.0, min(4.0, float(cfg["punch_gain_db"])))
        harmonic_blend = max(0.0, min(0.30, float(cfg["harmonic_blend"])))
        lfe_gain_db = max(-6.0, min(4.0, float(cfg["lfe_gain_db"])))

        pre_lf = cls.analyze_low_frequency_bands(audio, sample_rate)

        # 1. Protective 22Hz highpass (eliminates destructive infrasonic DC/rumble)
        sos_sub_hp = scipy.signal.butter(4, 22.0, btype="high", fs=sample_rate, output="sos")
        safe_audio = scipy.signal.sosfiltfilt(sos_sub_hp, audio, axis=1)

        # 2. Polarity guard on low band if L/R bass is severely inverted
        polarity_corrected = False
        if safe_audio.shape[0] >= 2 and pre_lf["polarity_warning"]:
            sos_lp_fix = scipy.signal.butter(4, crossover_hz, btype="low", fs=sample_rate, output="sos")
            sos_hp_fix = scipy.signal.butter(4, crossover_hz, btype="high", fs=sample_rate, output="sos")
            low_part = scipy.signal.sosfiltfilt(sos_lp_fix, safe_audio[:2], axis=1)
            high_part = scipy.signal.sosfiltfilt(sos_hp_fix, safe_audio[:2], axis=1)
            low_part[1] = -low_part[1]
            safe_audio = np.copy(safe_audio)
            safe_audio[:2] = low_part + high_part
            polarity_corrected = True

        # 3. Crossover split: Low Band (< crossover_hz) vs Mid/High Band (>= crossover_hz)
        sos_lp = scipy.signal.butter(4, crossover_hz, btype="low", fs=sample_rate, output="sos")
        sos_hp = scipy.signal.butter(4, crossover_hz, btype="high", fs=sample_rate, output="sos")
        low_band = scipy.signal.sosfiltfilt(sos_lp, safe_audio, axis=1)
        upper_band = scipy.signal.sosfiltfilt(sos_hp, safe_audio, axis=1)

        # 4. 3-Band Sub/Weight/Punch Surgical Low-End EQ on low_band
        lf_eq_bands = [
            {"type": "peaking", "freq": 34.0, "gain_db": sub_gain_db, "q": 1.2},
            {"type": "peaking", "freq": 52.0, "gain_db": weight_gain_db, "q": 1.1},
            {"type": "peaking", "freq": 75.0, "gain_db": punch_gain_db, "q": 1.2},
        ]
        shaped_low = DSPOps.apply_parametric_eq(low_band, sample_rate, lf_eq_bands)

        # 5. Harmonic Bass Reconstruction (adds clean 2nd/3rd harmonics so bass translates on all speakers)
        if harmonic_blend > 0.0:
            harmonics = np.tanh(shaped_low * 2.2) - shaped_low
            sos_harm_bp = scipy.signal.butter(2, [55.0, min(280.0, sample_rate * 0.45)], btype="bandpass", fs=sample_rate, output="sos")
            clean_harmonics = scipy.signal.sosfiltfilt(sos_harm_bp, harmonics, axis=1)
            shaped_low = shaped_low + clean_harmonics * harmonic_blend

        # 6. Dynamic Bass Control & Sub-Bass Peak Protection
        controlled_low = DSPOps.apply_compressor(
            shaped_low,
            sample_rate,
            threshold_db=float(cfg["sub_comp_threshold_db"]),
            ratio=float(cfg["sub_comp_ratio"]),
            attack_ms=12.0,
            release_ms=90.0,
            makeup_gain_db=0.5,
        )
        controlled_low = DSPOps.apply_brickwall_limiter(
            controlled_low, sample_rate, ceiling_dbtp=-2.5, lookahead_ms=5.0, release_ms=60.0
        )

        # 7. Mono-Bass Phase Alignment (< crossover_hz)
        if cfg.get("mono_bass_lock", True) and controlled_low.shape[0] >= 2:
            mono_low = np.mean(controlled_low, axis=0)
            controlled_low = np.vstack([mono_low for _ in range(controlled_low.shape[0])])

        # 8. Recombine main stereo/multichannel signal with clean headroom protection
        recombined = upper_band + controlled_low
        recombined = DSPOps.apply_brickwall_limiter(
            recombined, sample_rate, ceiling_dbtp=-1.0, lookahead_ms=5.0, release_ms=45.0
        )

        # 9. Dedicated Cinema LFE Channel Synthesis (22Hz - 80Hz bandlimited mono, separate from main bass)
        lfe_cutoff = min(80.0, crossover_hz)
        sos_lfe = scipy.signal.butter(4, [22.0, lfe_cutoff], btype="bandpass", fs=sample_rate, output="sos")
        mono_src = np.mean(controlled_low, axis=0, keepdims=True)
        lfe_channel = scipy.signal.sosfiltfilt(sos_lfe, mono_src, axis=1) * (10.0 ** (lfe_gain_db / 20.0))
        lfe_channel = DSPOps.apply_brickwall_limiter(
            lfe_channel, sample_rate, ceiling_dbtp=-2.0, lookahead_ms=5.0, release_ms=60.0
        )

        post_lf = cls.analyze_low_frequency_bands(recombined, sample_rate)
        report = {
            "preset": preset_key.upper(),
            "preset_name": cfg["name"],
            "crossover_hz": crossover_hz,
            "lfe_cutoff_hz": lfe_cutoff,
            "lfe_gain_db": lfe_gain_db,
            "mono_bass_lock": bool(cfg.get("mono_bass_lock", True)),
            "polarity_corrected": polarity_corrected,
            "harmonic_reconstruction_blend": harmonic_blend,
            "pre_low_frequency_analysis": pre_lf,
            "post_low_frequency_analysis": post_lf,
        }
        return recombined, lfe_channel, report

    async def execute_task(self, task: AgentTask) -> AgentResult:
        t0 = time.perf_counter()
        warnings = []
        try:
            audio, sr = AudioIO.load_audio(task.input_file_path)
            preset = (task.processing_profile or "STUDIO_BASS").upper()
            overrides = task.processing_parameters or {}
            export_lfe = bool(overrides.get("export_lfe_track", False))

            enhanced, lfe_ch, report = self.process_cinema_bass(
                audio, sr, preset_key=preset, overrides=overrides
            )

            stem = Path(task.input_file_path).stem
            out_path = settings.PROCESSED_DIR / f"{stem}_cinema_bass_{preset.lower()}.wav"
            AudioIO.write_audio(enhanced, out_path, sample_rate=sr, bit_depth="24", format_type="WAV")
            output_ids = [out_path.name]

            if export_lfe:
                lfe_path = settings.PROCESSED_DIR / f"{stem}_LFE_dedicated.wav"
                AudioIO.write_audio(lfe_ch, lfe_path, sample_rate=sr, bit_depth="24", format_type="WAV")
                output_ids.append(lfe_path.name)
                report["dedicated_lfe_file"] = str(lfe_path)
                report["dedicated_lfe_download_url"] = f"/api/v1/audio/download/{lfe_path.name}"

            if report["pre_low_frequency_analysis"]["polarity_warning"]:
                warnings.append("Detected inverted low-frequency L/R polarity; automatic phase alignment applied.")

            metrics = AudioAnalyzer.full_audio_analysis(enhanced, sr)
            return AgentResult(
                task_id=task.task_id,
                agent_id=self.agent_id,
                execution_status=ExecutionStatus.COMPLETED,
                output_asset_ids=output_ids,
                output_file_path=str(out_path),
                processing_report=report,
                measurements=metrics,
                warnings=warnings,
                execution_time=round(time.perf_counter() - t0, 3),
                hardware_used="CPU",
                model_version=self.MODEL_VERSION,
            )
        except Exception as e:
            logger.exception(f"CinemaBassAgent error: {e}")
            return AgentResult(
                task_id=task.task_id,
                agent_id=self.agent_id,
                execution_status=ExecutionStatus.FAILED,
                errors=[str(e)],
                execution_time=round(time.perf_counter() - t0, 3),
                hardware_used="CPU",
                model_version=self.MODEL_VERSION,
            )
