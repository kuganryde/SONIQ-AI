"""
AGENT 08: Audio Quality Assurance (audio_qa_agent)
Independently validates processed audio against technical quality gates and generates
targeted corrective instructions for bounded orchestrator retry loops.
"""

import logging
import time
from typing import Any, Dict, List, Optional
import numpy as np

from app.agents.base_agent import BaseAudioAgent
from app.agents.cinema_bass_agent import CinemaBassAgent
from app.agents.contracts import (
    AgentResult,
    AgentTask,
    ExecutionStatus,
    QualityGateCheck,
    QualityGateReport,
)
from app.core.analysis import AudioAnalyzer
from app.core.audio_io import AudioIO

logger = logging.getLogger("soniq.audio_qa")


class AudioQAAgent(BaseAudioAgent):
    """AGENT 08: Independent Audio Quality Assurance & Automated Gatekeeper."""

    MODEL_VERSION = "audio-qa-gates-1.0.0"

    def __init__(self):
        super().__init__(
            agent_id="audio_qa_agent",
            agent_name="Audio Quality Assurance Agent",
            role="Independently audit processed audio, enforce technical gates, and issue corrective instructions",
        )

    def get_deterministic_fallback(self, prompt: str) -> str:
        return "Independent QA audit executed across clipping, true peak, loudness, phase, duration, and LFE integrity."

    @classmethod
    def evaluate_quality_gates(
        cls,
        processed_file: str,
        original_file: Optional[str] = None,
        target_lufs: float = -14.0,
        target_ceiling_dbtp: float = -1.0,
        expected_channels: Optional[int] = None,
        attempt_number: int = 1,
        max_attempts: int = 2,
    ) -> QualityGateReport:
        """
        Runs independent signal-level quality checks.
        Never self-certifies without measuring actual decoded samples.
        """
        audio, sr = AudioIO.load_audio(processed_file)
        metrics = AudioAnalyzer.full_audio_analysis(audio, sr)
        lf_metrics = CinemaBassAgent.analyze_low_frequency_bands(audio, sr)

        checks: List[QualityGateCheck] = []
        failed_stage: Optional[str] = None
        corrective: Dict[str, Any] = {}

        # Gate 1: Zero hard clipping
        has_clip = bool(metrics["clipping"]["has_clipping"])
        checks.append(QualityGateCheck(
            name="zero_clipping",
            passed=not has_clip,
            measured_value=metrics["clipping"]["clipped_samples_count"],
            threshold="0 clipped samples",
            responsible_agent="mixing_mastering_agent" if has_clip else None,
            detail="Clean unclipped waveform" if not has_clip else "Detected digital clipping samples",
        ))
        if has_clip and not failed_stage:
            failed_stage = "mixing_mastering_agent"
            corrective = {"custom_ceiling_dbtp": min(-1.5, target_ceiling_dbtp - 0.5), "reason": "clipping_detected"}

        # Gate 2: True Peak within ceiling (+0.25 dB tolerance for codec/filter ripples)
        tp = float(metrics["true_peak_dbtp"])
        tp_ok = tp <= (target_ceiling_dbtp + 0.25)
        checks.append(QualityGateCheck(
            name="true_peak_ceiling",
            passed=tp_ok,
            measured_value=tp,
            threshold=f"<= {target_ceiling_dbtp + 0.25:.2f} dBTP",
            responsible_agent="mixing_mastering_agent" if not tp_ok else None,
            detail=f"True peak measured at {tp} dBTP",
        ))
        if not tp_ok and not failed_stage:
            failed_stage = "mixing_mastering_agent"
            corrective = {"custom_ceiling_dbtp": round(target_ceiling_dbtp - 0.5, 2), "reason": "true_peak_exceeded"}

        # Gate 3: Loudness accuracy (+/- 2.0 LU tolerance)
        lufs = float(metrics["integrated_lufs"])
        lufs_ok = abs(lufs - target_lufs) <= 2.0
        checks.append(QualityGateCheck(
            name="loudness_target",
            passed=lufs_ok,
            measured_value=lufs,
            threshold=f"{target_lufs:.1f} LUFS (+/- 2.0 LU)",
            responsible_agent="mixing_mastering_agent" if not lufs_ok else None,
            detail=f"Integrated loudness {lufs} LUFS vs target {target_lufs} LUFS",
        ))
        if not lufs_ok and not failed_stage:
            failed_stage = "mixing_mastering_agent"
            corrective = {"custom_target_lufs": target_lufs, "reason": "loudness_drift"}

        # Gate 4: Phase coherence (stereo/multichannel)
        phase = float(metrics["phase_correlation"])
        phase_ok = phase >= 0.15
        checks.append(QualityGateCheck(
            name="phase_coherence",
            passed=phase_ok,
            measured_value=phase,
            threshold=">= 0.15",
            responsible_agent="cinema_bass_agent" if not phase_ok else None,
            detail=f"Phase correlation {phase}",
        ))
        if not phase_ok and not failed_stage:
            failed_stage = "cinema_bass_agent"
            corrective = {"mono_bass_lock": True, "stereo_width_pct": 100.0, "reason": "phase_cancellation_risk"}

        # Gate 5: Infrasonic LFE/Sub protection (< 20Hz must stay < 8% total energy)
        infra_pct = float(lf_metrics["infrasonic_below_20hz_pct"])
        infra_ok = infra_pct < 8.0
        checks.append(QualityGateCheck(
            name="infrasonic_headroom_integrity",
            passed=infra_ok,
            measured_value=infra_pct,
            threshold="< 8.0% energy below 20 Hz",
            responsible_agent="cinema_bass_agent" if not infra_ok else None,
            detail=f"Sub-20Hz energy is {infra_pct}%",
        ))
        if not infra_ok and not failed_stage:
            failed_stage = "cinema_bass_agent"
            corrective = {"sub_gain_db": 1.0, "weight_gain_db": 1.5, "reason": "excessive_infrasonic_buildup"}

        # Gate 6: Channel layout validation
        ch_count = int(audio.shape[0])
        ch_ok = expected_channels is None or ch_count == expected_channels
        checks.append(QualityGateCheck(
            name="channel_mapping",
            passed=ch_ok,
            measured_value=ch_count,
            threshold=f"{expected_channels} channels" if expected_channels else "valid layout",
            responsible_agent="spatial_audio_agent" if not ch_ok else None,
            detail=f"Output contains {ch_count} channel(s)",
        ))

        # Gate 7: Duration consistency against original source (if provided)
        if original_file:
            orig_audio, orig_sr = AudioIO.load_audio(original_file)
            dur_orig = orig_audio.shape[1] / float(orig_sr)
            dur_proc = audio.shape[1] / float(sr)
            dur_diff = abs(dur_proc - dur_orig)
            dur_ok = dur_diff <= 0.35
            checks.append(QualityGateCheck(
                name="duration_consistency",
                passed=dur_ok,
                measured_value=round(dur_diff, 4),
                threshold="<= 0.35s drift",
                responsible_agent="audio_restoration_agent" if not dur_ok else None,
                detail=f"Original {dur_orig:.2f}s vs Processed {dur_proc:.2f}s",
            ))

        all_passed = all(c.passed for c in checks)
        return QualityGateReport(
            passed=all_passed,
            attempt_number=attempt_number,
            max_attempts=max_attempts,
            checks=checks,
            failed_stage=None if all_passed else failed_stage,
            corrective_instruction={} if all_passed else corrective,
        )

    async def execute_task(self, task: AgentTask) -> AgentResult:
        t0 = time.perf_counter()
        try:
            params = task.processing_parameters or {}
            report = self.evaluate_quality_gates(
                processed_file=task.input_file_path,
                original_file=params.get("original_file_path"),
                target_lufs=float(params.get("target_lufs", -14.0)),
                target_ceiling_dbtp=float(params.get("target_ceiling_dbtp", -1.0)),
                expected_channels=params.get("expected_channels"),
                attempt_number=int(params.get("attempt_number", 1)),
                max_attempts=int(params.get("max_attempts", 2)),
            )
            status = ExecutionStatus.COMPLETED if report.passed else ExecutionStatus.REJECTED_BY_QA
            return AgentResult(
                task_id=task.task_id,
                agent_id=self.agent_id,
                execution_status=status,
                output_asset_ids=[task.input_asset_id] if task.input_asset_id else [],
                output_file_path=task.input_file_path,
                processing_report=report.model_dump(),
                measurements={c.name: c.measured_value for c in report.checks},
                warnings=[] if report.passed else [f"QA gate rejected stage '{report.failed_stage}': {report.corrective_instruction}"],
                execution_time=round(time.perf_counter() - t0, 3),
                hardware_used="CPU",
                model_version=self.MODEL_VERSION,
            )
        except Exception as e:
            logger.exception(f"AudioQAAgent error: {e}")
            return AgentResult(
                task_id=task.task_id,
                agent_id=self.agent_id,
                execution_status=ExecutionStatus.FAILED,
                errors=[str(e)],
                execution_time=round(time.perf_counter() - t0, 3),
                hardware_used="CPU",
                model_version=self.MODEL_VERSION,
            )
