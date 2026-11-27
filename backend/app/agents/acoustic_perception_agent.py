"""
AGENT 09: Acoustic Perception & Reference Matching (acoustic_perception_agent)
Evaluates original-vs-processed perceptual improvements, detects over-processing,
and compares against optional user-supplied reference tracks to generate guided
engineering recommendations (never blindly cloning references).
"""

import logging
import time
from typing import Any, Dict, List, Optional
import numpy as np

from app.agents.base_agent import BaseAudioAgent
from app.agents.cinema_bass_agent import CinemaBassAgent
from app.agents.contracts import AgentResult, AgentTask, ExecutionStatus
from app.core.analysis import AudioAnalyzer
from app.core.audio_io import AudioIO

logger = logging.getLogger("soniq.perception")


class AcousticPerceptionAgent(BaseAudioAgent):
    """AGENT 09: Perceptual Evaluation, Over-Processing Detector & Reference Matcher."""

    MODEL_VERSION = "acoustic-perception-1.0.0"

    def __init__(self):
        super().__init__(
            agent_id="acoustic_perception_agent",
            agent_name="Acoustic Perception & Reference Matching Agent",
            role="Compare original vs processed audio, detect over-processing, and guide tonal matching against reference tracks",
        )

    def get_deterministic_fallback(self, prompt: str) -> str:
        return "Perceptual evaluation completed across tonal balance, bass tightness, stereo width, dynamic preservation, and over-processing checks."

    @classmethod
    def evaluate_perception(
        cls,
        processed_file: str,
        original_file: Optional[str] = None,
        reference_file: Optional[str] = None,
    ) -> Dict[str, Any]:
        proc_audio, proc_sr = AudioIO.load_audio(processed_file)
        proc_m = AudioAnalyzer.full_audio_analysis(proc_audio, proc_sr)
        proc_lf = CinemaBassAgent.analyze_low_frequency_bands(proc_audio, proc_sr)
        proc_fb = proc_m.get("frequency_balance_pct", {})

        # Stereo width & bass tightness scores
        phase = float(proc_m["phase_correlation"])
        low_phase = float(proc_lf["low_band_phase_correlation"])
        dr_score = int(proc_m["dynamic_range_dr"])

        bass_tightness = "TIGHT_MONOPUNCH" if low_phase >= 0.85 else ("BALANCED" if low_phase >= 0.5 else "LOOSE_WIDE_BASS")
        stereo_evaluation = "NATURAL_WIDE" if 0.35 <= phase <= 0.85 else ("FOCUSED_CENTER" if phase > 0.85 else "OVER_WIDENED_RISK")

        # Over-processing detector
        over_processing_flags: List[str] = []
        if dr_score < 6:
            over_processing_flags.append(f"Dynamic range heavily compressed (DR{dr_score}); consider lowering limiter drive.")
        if proc_m["clipping"]["has_clipping"]:
            over_processing_flags.append("Digital clipping detected in output.")
        if phase < 0.2:
            over_processing_flags.append(f"Low stereo phase correlation ({phase}); risk of mono cancellation.")

        # Original vs Processed comparison
        orig_comparison: Optional[Dict[str, Any]] = None
        if original_file:
            orig_audio, orig_sr = AudioIO.load_audio(original_file)
            orig_m = AudioAnalyzer.full_audio_analysis(orig_audio, orig_sr)
            orig_fb = orig_m.get("frequency_balance_pct", {})
            band_deltas = {
                k: round(float(proc_fb.get(k, 0.0)) - float(orig_fb.get(k, 0.0)), 2)
                for k in proc_fb.keys()
            }
            orig_comparison = {
                "lufs_delta": round(float(proc_m["integrated_lufs"]) - float(orig_m["integrated_lufs"]), 2),
                "dynamic_range_delta": int(proc_m["dynamic_range_dr"]) - int(orig_m["dynamic_range_dr"]),
                "spectral_band_deltas_pct": band_deltas,
                "dynamics_preserved": abs(int(proc_m["dynamic_range_dr"]) - int(orig_m["dynamic_range_dr"])) <= 4,
                "core_midrange_preserved": abs(band_deltas.get("mids_500_2000hz", 0.0)) <= 18.0,
            }

        # Guided Reference Track Matching
        reference_guidance: Optional[Dict[str, Any]] = None
        if reference_file:
            ref_audio, ref_sr = AudioIO.load_audio(reference_file)
            ref_m = AudioAnalyzer.full_audio_analysis(ref_audio, ref_sr)
            ref_fb = ref_m.get("frequency_balance_pct", {})
            recs: List[str] = []
            ref_deltas = {}
            for k in proc_fb.keys():
                delta = round(float(ref_fb.get(k, 0.0)) - float(proc_fb.get(k, 0.0)), 2)
                ref_deltas[k] = delta
            if ref_deltas.get("bass_60_250hz", 0.0) > 5.0:
                recs.append("Reference has fuller bass weight (+1.5 to +2.5 dB low-shelf around 80 Hz recommended).")
            elif ref_deltas.get("bass_60_250hz", 0.0) < -5.0:
                recs.append("Target is bass-heavier than reference (-1.5 dB around 80 Hz recommended for closer match).")
            if ref_deltas.get("presence_brilliance_6k_20khz", 0.0) > 3.0:
                recs.append("Reference has brighter top-end air (+1.5 to +2.5 dB high-shelf at 10 kHz recommended).")
            lufs_gap = round(float(ref_m["integrated_lufs"]) - float(proc_m["integrated_lufs"]), 2)
            if abs(lufs_gap) > 1.5:
                recs.append(f"Reference loudness differs by {lufs_gap:+.1f} LU ({ref_m['integrated_lufs']} vs {proc_m['integrated_lufs']} LUFS).")
            if not recs:
                recs.append("Tonal balance and loudness closely align with the selected reference track.")

            reference_guidance = {
                "reference_file": reference_file,
                "reference_lufs": ref_m["integrated_lufs"],
                "target_lufs": proc_m["integrated_lufs"],
                "spectral_gap_vs_reference_pct": ref_deltas,
                "guided_recommendations": recs,
            }

        return {
            "processed_file": processed_file,
            "perceptual_assessment": {
                "bass_tightness": bass_tightness,
                "low_band_phase_correlation": low_phase,
                "stereo_imaging": stereo_evaluation,
                "dynamic_range_score": f"DR{dr_score}",
                "over_processing_detected": len(over_processing_flags) > 0,
                "over_processing_flags": over_processing_flags,
            },
            "original_vs_processed": orig_comparison,
            "reference_matching": reference_guidance,
        }

    async def execute_task(self, task: AgentTask) -> AgentResult:
        t0 = time.perf_counter()
        try:
            params = task.processing_parameters or {}
            report = self.evaluate_perception(
                processed_file=task.input_file_path,
                original_file=params.get("original_file_path"),
                reference_file=params.get("reference_file_path"),
            )
            return AgentResult(
                task_id=task.task_id,
                agent_id=self.agent_id,
                execution_status=ExecutionStatus.COMPLETED,
                output_file_path=task.input_file_path,
                processing_report=report,
                warnings=report["perceptual_assessment"]["over_processing_flags"],
                execution_time=round(time.perf_counter() - t0, 3),
                hardware_used="CPU",
                model_version=self.MODEL_VERSION,
            )
        except Exception as e:
            logger.exception(f"AcousticPerceptionAgent error: {e}")
            return AgentResult(
                task_id=task.task_id,
                agent_id=self.agent_id,
                execution_status=ExecutionStatus.FAILED,
                errors=[str(e)],
                execution_time=round(time.perf_counter() - t0, 3),
                hardware_used="CPU",
                model_version=self.MODEL_VERSION,
            )
