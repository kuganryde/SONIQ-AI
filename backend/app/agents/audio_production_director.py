"""
CENTRAL ORCHESTRATOR: Audio Production Director (audio_production_director)
Coordinates specialist audio agents via validated Pydantic contracts, supports 5 production modes
(AUTO, STUDIO_PRO, CINEMA_X, MASTER_X, CUSTOM), tracks job state in SQLite, and enforces bounded
QA self-correction loops. Never mutates original source audio.
"""

from datetime import datetime, timezone
import json
import logging
import time
import uuid
from pathlib import Path
from typing import Any, Dict, List, Optional

from app.agents.audio_analyst import AudioAnalystAgent
from app.agents.audio_qa_agent import AudioQAAgent
from app.agents.audio_restoration import AudioRestorationAgent
from app.agents.cinema_bass_agent import CINEMA_BASS_PRESETS, CinemaBassAgent
from app.agents.contracts import (
    AgentResult,
    AgentTask,
    ExecutionStatus,
    HardwareMonitor,
    ProductionMode,
)
from app.agents.mastering_engineer import MasteringEngineerAgent
from app.agents.stem_separator import StemSeparatorAgent
from app.agents.surround_engineer import SurroundEngineerAgent
from app.core.audio_io import AudioIO
from app.core.db import get_connection
from app.core.export_engine import ExportEngine

logger = logging.getLogger("soniq.director")


def _init_intelligence_table():
    conn = get_connection()
    try:
        with conn:
            conn.execute("""
            CREATE TABLE IF NOT EXISTS audio_intelligence_jobs (
                id TEXT PRIMARY KEY,
                project_id TEXT NOT NULL,
                mode TEXT NOT NULL,
                prompt TEXT,
                source_file TEXT NOT NULL,
                status TEXT NOT NULL,
                qa_passed INTEGER DEFAULT 0,
                qa_attempts INTEGER DEFAULT 0,
                output_file TEXT,
                download_url TEXT,
                hardware_backend TEXT DEFAULT 'CPU',
                execution_time_sec REAL DEFAULT 0.0,
                report_json TEXT,
                created_at TEXT NOT NULL,
                completed_at TEXT
            );
            """)
    finally:
        conn.close()


_init_intelligence_table()


class AudioProductionDirector:
    """Central Multi-Agent Orchestrator for SONIQ AI Audio Intelligence Ecosystem."""

    AGENT_REGISTRY = [
        {"agent_id": "audio_forensics_agent", "number": 1, "name": "Audio Forensics & Diagnostic", "status": "ACTIVE"},
        {"agent_id": "audio_restoration_agent", "number": 2, "name": "AI Audio Restoration (DeepFilterNet3)", "status": "ACTIVE"},
        {"agent_id": "studio_enhancement_agent", "number": 3, "name": "Studio Enhancement & Tonal Engineering", "status": "ACTIVE"},
        {"agent_id": "source_separation_agent", "number": 4, "name": "AI Source Separation (Demucs htdemucs)", "status": "ACTIVE"},
        {"agent_id": "spatial_audio_agent", "number": 5, "name": "5.1 Spatial Audio Engineering", "status": "ACTIVE"},
        {"agent_id": "cinema_bass_agent", "number": 6, "name": "Cinema Bass & LFE Engineering", "status": "ACTIVE"},
        {"agent_id": "mixing_mastering_agent", "number": 7, "name": "Mixing & Mastering (EBU R128)", "status": "ACTIVE"},
        {"agent_id": "audio_qa_agent", "number": 8, "name": "Audio Quality Assurance (Active Gates)", "status": "ACTIVE"},
        {"agent_id": "acoustic_perception_agent", "number": 9, "name": "Acoustic Perception & Reference Matching", "status": "PLANNED_BATCH_2"},
    ]

    def __init__(self):
        self.forensics = AudioAnalystAgent()
        self.restorer = AudioRestorationAgent()
        self.stem_separator = StemSeparatorAgent()
        self.cinema_bass = CinemaBassAgent()
        self.masterer = MasteringEngineerAgent()
        self.spatial = SurroundEngineerAgent()
        self.qa = AudioQAAgent()

    @classmethod
    def get_registry_info(cls) -> Dict[str, Any]:
        return {
            "orchestrator": "audio_production_director",
            "version": "1.0.0",
            "production_modes": [m.value for m in ProductionMode],
            "cinema_bass_presets": list(CINEMA_BASS_PRESETS.keys()),
            "hardware": HardwareMonitor.detect(),
            "agents": cls.AGENT_REGISTRY,
        }

    @staticmethod
    def list_jobs(limit: int = 30) -> List[Dict[str, Any]]:
        conn = get_connection()
        try:
            cur = conn.cursor()
            cur.execute(
                "SELECT id, project_id, mode, prompt, source_file, status, qa_passed, qa_attempts, "
                "output_file, download_url, hardware_backend, execution_time_sec, created_at, completed_at "
                "FROM audio_intelligence_jobs ORDER BY created_at DESC LIMIT ?",
                (limit,),
            )
            return [dict(r) for r in cur.fetchall()]
        finally:
            conn.close()

    @staticmethod
    def _save_job_record(record: Dict[str, Any]):
        conn = get_connection()
        try:
            with conn:
                conn.execute(
                    """
                    INSERT OR REPLACE INTO audio_intelligence_jobs (
                        id, project_id, mode, prompt, source_file, status,
                        qa_passed, qa_attempts, output_file, download_url,
                        hardware_backend, execution_time_sec, report_json, created_at, completed_at
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                    """,
                    (
                        record["id"],
                        record["project_id"],
                        record["mode"],
                        record["prompt"],
                        record["source_file"],
                        record["status"],
                        1 if record.get("qa_passed") else 0,
                        record.get("qa_attempts", 0),
                        record.get("output_file"),
                        record.get("download_url"),
                        record.get("hardware_backend", "CPU"),
                        record.get("execution_time_sec", 0.0),
                        json.dumps(record.get("summary", {})),
                        record["created_at"],
                        record.get("completed_at"),
                    ),
                )
        finally:
            conn.close()

    async def orchestrate(
        self,
        file_path: str,
        mode: ProductionMode = ProductionMode.AUTO,
        prompt: str = "",
        project_id: str = "soniq_default",
        overrides: Optional[Dict[str, Any]] = None,
    ) -> Dict[str, Any]:
        """
        Executes a full, non-destructive, QA-gated multi-agent audio pipeline.
        """
        t0 = time.perf_counter()
        job_id = f"intel_{uuid.uuid4().hex[:10]}"
        created_at = datetime.now(timezone.utc).isoformat()
        hw = HardwareMonitor.detect()
        ov = overrides or {}
        p_lower = (prompt or "").lower()

        if not Path(file_path).exists():
            raise FileNotFoundError(f"Source audio file not found: {file_path}")

        agent_results: List[Dict[str, Any]] = []
        current_file = file_path

        # Resolve mode defaults + user overrides
        if mode == ProductionMode.CINEMA_X:
            default_bass_preset = "CINEMA_IMPACT"
            default_target_lufs = -16.0
            default_ceiling = -1.5
            enable_surround_51 = True
            enable_restore = True
            export_lfe = True
        elif mode == ProductionMode.MASTER_X:
            default_bass_preset = "NATURAL"
            default_target_lufs = -14.0
            default_ceiling = -1.0
            enable_surround_51 = False
            enable_restore = False
            export_lfe = False
        elif mode == ProductionMode.STUDIO_PRO:
            default_bass_preset = "STUDIO_BASS"
            default_target_lufs = -14.0
            default_ceiling = -1.0
            enable_surround_51 = False
            enable_restore = True
            export_lfe = False
        else:  # AUTO or CUSTOM
            default_bass_preset = "CINEMA_IMPACT" if "cinema" in p_lower else ("DEEP_SUB" if "deep" in p_lower else "STUDIO_BASS")
            default_target_lufs = -14.0
            default_ceiling = -1.0
            enable_surround_51 = any(w in p_lower for w in ["5.1", "surround", "spatial", "cinema"])
            enable_restore = True
            export_lfe = enable_surround_51

        bass_preset = str(ov.get("bass_preset") or default_bass_preset).upper()
        target_lufs = float(ov.get("target_lufs", default_target_lufs))
        target_ceiling = float(ov.get("target_ceiling_dbtp", default_ceiling))
        enable_surround_51 = bool(ov.get("enable_surround_51", enable_surround_51))
        enable_restore = bool(ov.get("enable_restore", enable_restore))
        enable_stems = bool(ov.get("enable_stems", any(w in p_lower for w in ["stem", "separate", "isolate"])))
        export_lfe = bool(ov.get("export_lfe_track", export_lfe))
        max_qa_attempts = max(1, min(3, int(ov.get("max_qa_attempts", 2))))
        output_format = str(ov.get("output_format", "FLAC")).upper()

        # ------------------------------------------------------------------
        # STAGE 1: Agent 01 — Audio Forensics & Diagnostic (read-only)
        # ------------------------------------------------------------------
        t_s1 = time.perf_counter()
        forensics_out = await self.forensics.analyze_recording(current_file)
        pre_metrics = forensics_out.get("metrics", {})
        agent_results.append(AgentResult(
            task_id=f"{job_id}_s1",
            agent_id="audio_forensics_agent",
            execution_status=ExecutionStatus.COMPLETED,
            output_file_path=current_file,
            processing_report={"summary": forensics_out.get("summary", "")},
            measurements=pre_metrics,
            execution_time=round(time.perf_counter() - t_s1, 3),
            hardware_used=hw["backend"],
        ).model_dump())

        # ------------------------------------------------------------------
        # STAGE 2: Agent 02 — AI Audio Restoration (DeepFilterNet3 / De-hum / De-clip)
        # ------------------------------------------------------------------
        has_clipping = bool(pre_metrics.get("clipping", {}).get("has_clipping"))
        if enable_restore or has_clipping:
            t_s2 = time.perf_counter()
            explicit_denoise = bool(ov.get("neural_denoise", any(w in p_lower for w in ["noise", "hiss", "voice", "vocal", "speech", "podcast", "denoise", "restore"])))
            restore_out = await self.restorer.restore_audio(
                current_file, denoise=explicit_denoise, dehum_freq=50.0, declip=True
            )
            current_file = restore_out["restored_file"]
            agent_results.append(AgentResult(
                task_id=f"{job_id}_s2",
                agent_id="audio_restoration_agent",
                execution_status=ExecutionStatus.COMPLETED,
                output_asset_ids=[Path(current_file).name],
                output_file_path=current_file,
                processing_report={"engine": restore_out.get("engine"), "improvements": restore_out.get("improvements")},
                measurements=restore_out.get("post_restoration_metrics", {}),
                execution_time=round(time.perf_counter() - t_s2, 3),
                hardware_used=hw["backend"],
            ).model_dump())

        # ------------------------------------------------------------------
        # STAGE 3 (Optional): Agent 04 — AI Source Separation (Demucs htdemucs)
        # ------------------------------------------------------------------
        stems_info = None
        if enable_stems:
            t_s3 = time.perf_counter()
            stems_out = await self.stem_separator.separate_stems(current_file)
            stems_info = stems_out.get("stems")
            agent_results.append(AgentResult(
                task_id=f"{job_id}_s3",
                agent_id="source_separation_agent",
                execution_status=ExecutionStatus.COMPLETED,
                output_asset_ids=[v["file_path"] for v in (stems_info or {}).values()],
                processing_report={"engine": stems_out.get("engine")},
                execution_time=round(time.perf_counter() - t_s3, 3),
                hardware_used=hw["backend"],
            ).model_dump())

        # ------------------------------------------------------------------
        # STAGE 4: Agent 06 — Cinema Bass & LFE Engineering
        # ------------------------------------------------------------------
        bass_input_file = current_file
        bass_params = {
            "crossover_hz": ov.get("crossover_hz"),
            "lfe_gain_db": ov.get("lfe_gain_db"),
            "export_lfe_track": export_lfe,
        }
        bass_task = AgentTask(
            task_id=f"{job_id}_s4_a1",
            project_id=project_id,
            agent_id="cinema_bass_agent",
            input_file_path=bass_input_file,
            processing_profile=bass_preset,
            processing_parameters=bass_params,
        )
        bass_res = await self.cinema_bass.execute_task(bass_task)
        agent_results.append(bass_res.model_dump())
        if bass_res.execution_status == ExecutionStatus.COMPLETED and bass_res.output_file_path:
            current_file = bass_res.output_file_path

        # ------------------------------------------------------------------
        # STAGE 5 + STAGE 7: Agent 07 (Mastering) + Agent 08 (QA Gate with Bounded Retry Loop)
        # ------------------------------------------------------------------
        master_input_file = current_file
        master_ceiling = target_ceiling
        master_lufs = target_lufs
        bass_bias = float(ov.get("bass_lift_bias_db", 2.4))
        crisp_bias = float(ov.get("crisp_air_bias_db", 2.8))

        qa_report_dict: Dict[str, Any] = {}
        qa_passed = False
        qa_attempts = 0
        master_out: Dict[str, Any] = {}

        for attempt in range(1, max_qa_attempts + 1):
            qa_attempts = attempt
            t_m = time.perf_counter()
            master_out = await self.masterer.execute_mastering(
                master_input_file,
                profile_key="studio_master",
                custom_target_lufs=master_lufs,
                custom_ceiling_dbtp=master_ceiling,
                bass_lift_bias_db=bass_bias,
                crisp_air_bias_db=crisp_bias,
            )
            mastered_file = master_out["mastered_file"]
            agent_results.append(AgentResult(
                task_id=f"{job_id}_s5_a{attempt}",
                agent_id="mixing_mastering_agent",
                execution_status=ExecutionStatus.COMPLETED,
                output_asset_ids=[Path(mastered_file).name],
                output_file_path=mastered_file,
                processing_report=master_out.get("mastering_report", {}).get("studio_enhancement_delta", {}),
                execution_time=round(time.perf_counter() - t_m, 3),
                hardware_used=hw["backend"],
            ).model_dump())

            # Optional Stage 6: 5.1 Spatial Audio Engineering
            candidate_file = mastered_file
            expected_ch = 2
            if enable_surround_51:
                t_sp = time.perf_counter()
                spatial_out = await self.spatial.create_surround_mix(mastered_file, target_layout="5.1")
                candidate_file = spatial_out["surround_file"]
                expected_ch = 6
                agent_results.append(AgentResult(
                    task_id=f"{job_id}_s6_a{attempt}",
                    agent_id="spatial_audio_agent",
                    execution_status=ExecutionStatus.COMPLETED,
                    output_asset_ids=[Path(candidate_file).name],
                    output_file_path=candidate_file,
                    processing_report={"layout": "5.1", "routing": "L, R, C, LFE, Ls, Rs (upmixed)"},
                    execution_time=round(time.perf_counter() - t_sp, 3),
                    hardware_used=hw["backend"],
                ).model_dump())

            # Independent QA Gate (Agent 08)
            qa_task = AgentTask(
                task_id=f"{job_id}_qa_a{attempt}",
                project_id=project_id,
                agent_id="audio_qa_agent",
                input_file_path=candidate_file,
                processing_parameters={
                    "original_file_path": file_path,
                    "target_lufs": target_lufs,
                    "target_ceiling_dbtp": target_ceiling,
                    "expected_channels": expected_ch,
                    "attempt_number": attempt,
                    "max_attempts": max_qa_attempts,
                },
            )
            qa_res = await self.qa.execute_task(qa_task)
            agent_results.append(qa_res.model_dump())
            qa_report_dict = qa_res.processing_report
            qa_passed = bool(qa_report_dict.get("passed"))
            current_file = candidate_file

            if qa_passed or attempt >= max_qa_attempts:
                break

            # Apply QA corrective instruction before next attempt
            corr = qa_report_dict.get("corrective_instruction", {})
            logger.warning(f"QA rejected attempt {attempt} for {job_id}; applying correction: {corr}")
            if "custom_ceiling_dbtp" in corr:
                master_ceiling = float(corr["custom_ceiling_dbtp"])
            if "custom_target_lufs" in corr:
                master_lufs = float(corr["custom_target_lufs"])
            if qa_report_dict.get("failed_stage") == "cinema_bass_agent":
                bass_params.update({k: v for k, v in corr.items() if k in ("sub_gain_db", "weight_gain_db", "mono_bass_lock")})
                re_bass = await self.cinema_bass.execute_task(AgentTask(
                    task_id=f"{job_id}_s4_retry{attempt}",
                    project_id=project_id,
                    agent_id="cinema_bass_agent",
                    input_file_path=bass_input_file,
                    processing_profile=bass_preset,
                    processing_parameters=bass_params,
                ))
                agent_results.append(re_bass.model_dump())
                if re_bass.execution_status == ExecutionStatus.COMPLETED and re_bass.output_file_path:
                    master_input_file = re_bass.output_file_path

        # ------------------------------------------------------------------
        # FINAL DELIVERY EXPORT (Lossless 24-bit WAV or FLAC)
        # ------------------------------------------------------------------
        final_audio, final_sr = AudioIO.load_audio(current_file)
        delivery_cert = ExportEngine.render_and_export(
            audio=final_audio,
            sample_rate=final_sr,
            project_name=f"SONIQ_{mode.value}",
            export_name=f"{Path(file_path).stem}_{mode.value.lower()}",
            output_format=output_format if output_format in ("WAV", "FLAC") else "FLAC",
            bit_depth="24",
            channels_layout="5.1" if final_audio.shape[0] == 6 else "stereo",
        )

        elapsed = round(time.perf_counter() - t0, 3)
        completed_at = datetime.now(timezone.utc).isoformat()
        final_status = "COMPLETED" if qa_passed else "COMPLETED_WITH_QA_WARNINGS"

        summary = {
            "mode": mode.value,
            "bass_preset": bass_preset,
            "surround_51": enable_surround_51,
            "studio_enhancement_delta": master_out.get("mastering_report", {}).get("studio_enhancement_delta", {}),
            "qa_passed": qa_passed,
            "qa_attempts": qa_attempts,
        }

        self._save_job_record({
            "id": job_id,
            "project_id": project_id,
            "mode": mode.value,
            "prompt": prompt,
            "source_file": file_path,
            "status": final_status,
            "qa_passed": qa_passed,
            "qa_attempts": qa_attempts,
            "output_file": delivery_cert.get("output_file_path"),
            "download_url": delivery_cert.get("download_path"),
            "hardware_backend": hw["backend"],
            "execution_time_sec": elapsed,
            "summary": summary,
            "created_at": created_at,
            "completed_at": completed_at,
        })

        return {
            "job_id": job_id,
            "status": final_status,
            "mode": mode.value,
            "hardware": hw,
            "execution_time_sec": elapsed,
            "qa_gate_report": qa_report_dict,
            "studio_enhancement_summary": summary["studio_enhancement_delta"],
            "stems": stems_info,
            "agent_results": agent_results,
            "delivery_certificate": delivery_cert,
            "download_url": delivery_cert.get("download_path"),
        }
