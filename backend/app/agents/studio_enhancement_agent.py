"""
AGENT 03: Studio Enhancement & Tonal Engineering (studio_enhancement_agent)
Provides 7 dedicated audio-category profiles (VOCALS, MUSIC, INSTRUMENTAL, DIALOGUE,
ORCHESTRAL, ELECTRONIC, ACOUSTIC) with surgical EQ, de-essing, dynamics, harmonic warmth,
and stereo width optimization.
"""

import logging
import time
from pathlib import Path
from typing import Any, Dict, List
import numpy as np
import scipy.signal

from app.agents.base_agent import BaseAudioAgent
from app.agents.contracts import AgentResult, AgentTask, ExecutionStatus
from app.config import settings
from app.core.analysis import AudioAnalyzer
from app.core.audio_io import AudioIO
from app.core.dsp_engine import DSPOps
from app.core.mastering_engine import MasteringEngine

logger = logging.getLogger("soniq.studio_enhancement")


STUDIO_CATEGORY_PROFILES: Dict[str, Dict[str, Any]] = {
    "VOCALS": {
        "name": "Lead Vocals & Singing",
        "eq_bands": [
            {"type": "highpass", "freq": 85.0, "gain_db": 0.0, "q": 0.707},
            {"type": "peaking", "freq": 240.0, "gain_db": -1.6, "q": 1.4},
            {"type": "peaking", "freq": 3200.0, "gain_db": 2.4, "q": 1.0},
            {"type": "highshelf", "freq": 10000.0, "gain_db": 2.5, "q": 0.707},
        ],
        "de_ess": True,
        "comp": {"threshold_db": -18.0, "ratio": 3.0, "attack_ms": 10.0, "release_ms": 90.0, "makeup_gain_db": 1.5},
        "saturation_blend": 0.14,
        "stereo_width_pct": 104.0,
        "transient_attack_db": 0.6,
    },
    "MUSIC": {
        "name": "Full Music Mix (Crisp + Lifted Bass)",
        "eq_bands": [
            {"type": "highpass", "freq": 28.0, "gain_db": 0.0, "q": 0.707},
            {"type": "lowshelf", "freq": 80.0, "gain_db": 2.6, "q": 0.75},
            {"type": "peaking", "freq": 310.0, "gain_db": -1.3, "q": 1.3},
            {"type": "peaking", "freq": 3800.0, "gain_db": 1.8, "q": 0.95},
            {"type": "highshelf", "freq": 11000.0, "gain_db": 2.6, "q": 0.707},
        ],
        "de_ess": False,
        "comp": {"threshold_db": -16.0, "ratio": 2.2, "attack_ms": 15.0, "release_ms": 120.0, "makeup_gain_db": 1.0},
        "saturation_blend": 0.20,
        "stereo_width_pct": 114.0,
        "transient_attack_db": 1.1,
    },
    "INSTRUMENTAL": {
        "name": "Instrumental & Backing Track",
        "eq_bands": [
            {"type": "highpass", "freq": 30.0, "gain_db": 0.0, "q": 0.707},
            {"type": "peaking", "freq": 68.0, "gain_db": 2.0, "q": 1.1},
            {"type": "peaking", "freq": 2800.0, "gain_db": 1.4, "q": 1.0},
            {"type": "highshelf", "freq": 12000.0, "gain_db": 2.2, "q": 0.707},
        ],
        "de_ess": False,
        "comp": {"threshold_db": -17.0, "ratio": 2.0, "attack_ms": 18.0, "release_ms": 130.0, "makeup_gain_db": 0.8},
        "saturation_blend": 0.16,
        "stereo_width_pct": 118.0,
        "transient_attack_db": 0.9,
    },
    "DIALOGUE": {
        "name": "Podcast, Voiceover & Film Dialogue",
        "eq_bands": [
            {"type": "highpass", "freq": 95.0, "gain_db": 0.0, "q": 0.707},
            {"type": "peaking", "freq": 180.0, "gain_db": 1.2, "q": 1.1},
            {"type": "peaking", "freq": 420.0, "gain_db": -1.8, "q": 1.5},
            {"type": "peaking", "freq": 2600.0, "gain_db": 2.5, "q": 1.0},
            {"type": "highshelf", "freq": 9500.0, "gain_db": 1.4, "q": 0.707},
        ],
        "de_ess": True,
        "comp": {"threshold_db": -20.0, "ratio": 3.5, "attack_ms": 8.0, "release_ms": 85.0, "makeup_gain_db": 2.0},
        "saturation_blend": 0.06,
        "stereo_width_pct": 100.0,
        "transient_attack_db": 0.0,
    },
    "ORCHESTRAL": {
        "name": "Orchestral & Cinematic Score",
        "eq_bands": [
            {"type": "highpass", "freq": 24.0, "gain_db": 0.0, "q": 0.707},
            {"type": "lowshelf", "freq": 65.0, "gain_db": 1.2, "q": 0.707},
            {"type": "highshelf", "freq": 12000.0, "gain_db": 1.4, "q": 0.707},
        ],
        "de_ess": False,
        "comp": {"threshold_db": -14.0, "ratio": 1.5, "attack_ms": 30.0, "release_ms": 200.0, "makeup_gain_db": 0.5},
        "saturation_blend": 0.08,
        "stereo_width_pct": 108.0,
        "transient_attack_db": 0.4,
    },
    "ELECTRONIC": {
        "name": "Electronic, EDM & Club Production",
        "eq_bands": [
            {"type": "highpass", "freq": 26.0, "gain_db": 0.0, "q": 0.707},
            {"type": "peaking", "freq": 50.0, "gain_db": 2.8, "q": 1.2},
            {"type": "lowshelf", "freq": 85.0, "gain_db": 2.4, "q": 0.8},
            {"type": "peaking", "freq": 320.0, "gain_db": -1.8, "q": 1.3},
            {"type": "peaking", "freq": 4200.0, "gain_db": 2.0, "q": 1.0},
            {"type": "highshelf", "freq": 11500.0, "gain_db": 2.8, "q": 0.707},
        ],
        "de_ess": False,
        "comp": {"threshold_db": -15.0, "ratio": 2.6, "attack_ms": 12.0, "release_ms": 100.0, "makeup_gain_db": 1.2},
        "saturation_blend": 0.24,
        "stereo_width_pct": 120.0,
        "transient_attack_db": 1.5,
    },
    "ACOUSTIC": {
        "name": "Acoustic Instruments & Live Unplugged",
        "eq_bands": [
            {"type": "highpass", "freq": 40.0, "gain_db": 0.0, "q": 0.707},
            {"type": "peaking", "freq": 110.0, "gain_db": 1.4, "q": 1.0},
            {"type": "peaking", "freq": 350.0, "gain_db": -1.5, "q": 1.4},
            {"type": "peaking", "freq": 5000.0, "gain_db": 1.6, "q": 1.1},
            {"type": "highshelf", "freq": 10500.0, "gain_db": 1.8, "q": 0.707},
        ],
        "de_ess": False,
        "comp": {"threshold_db": -18.0, "ratio": 1.8, "attack_ms": 22.0, "release_ms": 150.0, "makeup_gain_db": 0.8},
        "saturation_blend": 0.12,
        "stereo_width_pct": 110.0,
        "transient_attack_db": 0.7,
    },
}


class StudioEnhancementAgent(BaseAudioAgent):
    """AGENT 03: Studio Enhancement & Tonal Engineering Agent."""

    MODEL_VERSION = "studio-enhancement-1.0.0"

    def __init__(self):
        super().__init__(
            agent_id="studio_enhancement_agent",
            agent_name="Studio Enhancement & Tonal Engineering Agent",
            role="Apply category-specific studio tonal sculpting, de-essing, dynamics, harmonics, and stereo imaging",
        )

    def get_deterministic_fallback(self, prompt: str) -> str:
        return "Category-specific studio enhancement applied with tonal EQ, dynamics control, harmonic glue, and mono-bass stereo optimization."

    @staticmethod
    def _apply_de_esser(audio: np.ndarray, sample_rate: int, center_hz: float = 6500.0) -> np.ndarray:
        """Dynamic sibilance control around 5.5kHz–8.5kHz."""
        nyq = sample_rate / 2.0
        lo = min(5200.0, nyq * 0.6)
        hi = min(8800.0, nyq * 0.9)
        if lo >= hi:
            return audio
        sos_bp = scipy.signal.butter(2, [lo, hi], btype="bandpass", fs=sample_rate, output="sos")
        sib = scipy.signal.sosfiltfilt(sos_bp, audio, axis=1)
        rest = audio - sib
        sib_comp = DSPOps.apply_compressor(
            sib, sample_rate, threshold_db=-26.0, ratio=4.0, attack_ms=2.0, release_ms=40.0, makeup_gain_db=0.0
        )
        return rest + sib_comp

    async def execute_task(self, task: AgentTask) -> AgentResult:
        t0 = time.perf_counter()
        try:
            category = (task.processing_profile or "MUSIC").upper()
            if category not in STUDIO_CATEGORY_PROFILES:
                category = "MUSIC"
            cfg = STUDIO_CATEGORY_PROFILES[category]

            audio, sr = AudioIO.load_audio(task.input_file_path)
            pre_metrics = AudioAnalyzer.full_audio_analysis(audio, sr)

            # 1. Category-specific Parametric EQ
            x = DSPOps.apply_parametric_eq(audio, sr, cfg["eq_bands"])
            # 2. De-esser for Vocals/Dialogue
            if cfg["de_ess"]:
                x = self._apply_de_esser(x, sr)
            # 3. Category-calibrated Compression
            x = DSPOps.apply_compressor(x, sr, **cfg["comp"])
            # 4. Vectorized Transient Polish
            if cfg["transient_attack_db"] > 0:
                x = MasteringEngine._apply_fast_transient_polish(x, sr, attack_db=cfg["transient_attack_db"])
            # 5. Harmonic Tape Saturation
            x = DSPOps.apply_harmonic_saturation(x, drive_db=2.0, mode="tape", blend=cfg["saturation_blend"])
            # 6. Mono-Bass (<120Hz) Phase-Locked Stereo Imaging
            x = MasteringEngine._apply_mono_bass_and_width(x, sr, width_pct=cfg["stereo_width_pct"], crossover_hz=120.0)
            # 7. Headroom safety limiter
            x = DSPOps.apply_brickwall_limiter(x, sr, ceiling_dbtp=-1.0, lookahead_ms=5.0, release_ms=45.0)

            post_metrics = AudioAnalyzer.full_audio_analysis(x, sr)
            out_path = settings.PROCESSED_DIR / f"{Path(task.input_file_path).stem}_enhanced_{category.lower()}.wav"
            AudioIO.write_audio(x, out_path, sample_rate=sr, bit_depth="24", format_type="WAV")

            return AgentResult(
                task_id=task.task_id,
                agent_id=self.agent_id,
                execution_status=ExecutionStatus.COMPLETED,
                output_asset_ids=[out_path.name],
                output_file_path=str(out_path),
                processing_report={
                    "category": category,
                    "profile_name": cfg["name"],
                    "de_esser_applied": cfg["de_ess"],
                    "stereo_width_pct": cfg["stereo_width_pct"],
                    "pre_metrics": pre_metrics,
                    "post_metrics": post_metrics,
                },
                measurements=post_metrics,
                execution_time=round(time.perf_counter() - t0, 3),
                hardware_used="CPU",
                model_version=self.MODEL_VERSION,
            )
        except Exception as e:
            logger.exception(f"StudioEnhancementAgent error: {e}")
            return AgentResult(
                task_id=task.task_id,
                agent_id=self.agent_id,
                execution_status=ExecutionStatus.FAILED,
                errors=[str(e)],
                execution_time=round(time.perf_counter() - t0, 3),
                hardware_used="CPU",
                model_version=self.MODEL_VERSION,
            )
