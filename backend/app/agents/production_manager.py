import logging
from typing import Any, Dict, List, Optional
from pathlib import Path

from app.agents.base_agent import BaseAudioAgent
from app.agents.audio_analyst import AudioAnalystAgent
from app.agents.stem_separator import StemSeparatorAgent
from app.agents.audio_restoration import AudioRestorationAgent
from app.agents.mixing_engineer import MixingEngineerAgent
from app.agents.vocal_engineer import VocalEngineerAgent
from app.agents.mastering_engineer import MasteringEngineerAgent
from app.agents.surround_engineer import SurroundEngineerAgent
from app.agents.quality_control import QualityControlAgent
from app.core.export_engine import ExportEngine
from app.core.audio_io import AudioIO

logger = logging.getLogger("soniq.production_manager")


class ProductionManagerAgent(BaseAudioAgent):
    """AGENT 10: Production Manager Agent - Autonomous Multi-Agent Conductor."""

    def __init__(self):
        super().__init__(
            agent_id="AGENT_10_MANAGER",
            agent_name="Production Manager Agent",
            role="Interpret natural language production orders, orchestrate agent pipelines, and supervise delivery"
        )
        self.analyst = AudioAnalystAgent()
        self.stem_separator = StemSeparatorAgent()
        self.restorer = AudioRestorationAgent()
        self.mixer = MixingEngineerAgent()
        self.vocalist = VocalEngineerAgent()
        self.masterer = MasteringEngineerAgent()
        self.surround = SurroundEngineerAgent()
        self.qc = QualityControlAgent()

    def get_deterministic_fallback(self, prompt: str) -> str:
        return "Autonomous Production Pipeline formulated: Restoration -> Source Separation -> Vocal Tuning -> Spatial Panning -> Mastering."

    async def create_production_plan(self, prompt: str, source_file: str) -> Dict[str, Any]:
        """Parses natural language prompt into an executable ordered production plan."""
        p_lower = prompt.lower()
        plan_steps = []

        # Always Step 1: Ingest & Analyze
        plan_steps.append({
            "step": 1,
            "agent": "Audio Analyst (Agent 01)",
            "action": "ANALYZE_SOURCE",
            "description": "Inspect sample rate, loudness, peaks, phase, and frequency balance."
        })

        # Step 2: Restoration if noise/hum mentioned
        if any(w in p_lower for w in ["noise", "clean", "hum", "restore", "hiss", "repair", "old recording"]):
            plan_steps.append({
                "step": len(plan_steps) + 1,
                "agent": "Audio Restoration (Agent 03)",
                "action": "SPECTRAL_REPAIR",
                "description": "De-noise spectral subtraction and 50Hz/60Hz notch filter."
            })

        # Step 3: Stem separation if stems or instruments mentioned
        if any(w in p_lower for w in ["separate", "stem", "vocals and", "instrument", "drums"]):
            plan_steps.append({
                "step": len(plan_steps) + 1,
                "agent": "Stem Separator (Agent 02)",
                "action": "SEPARATE_STEMS",
                "description": "Isolate Vocals, Drums, Bass, and Other instruments into discrete aligned tracks."
            })

        # Step 4: Vocal processing if vocal mentioned
        if any(w in p_lower for w in ["vocal", "tune", "voice", "singing"]):
            plan_steps.append({
                "step": len(plan_steps) + 1,
                "agent": "Vocal Engineer (Agent 06)",
                "action": "PROCESS_VOCALS",
                "description": "Apply pitch correction, de-essing at 6.5kHz, and opto-compression."
            })

        # Step 5: Surround spatialization if surround / 5.1 / 7.1 mentioned
        if any(w in p_lower for w in ["surround", "5.1", "7.1", "spatial", "cinematic", "wider"]):
            plan_steps.append({
                "step": len(plan_steps) + 1,
                "agent": "Surround Engineer (Agent 08)",
                "action": "SPATIALIZE_SURROUND",
                "description": "Map channels into 5.1 surround space with 80Hz LFE bass crossover."
            })

        # Step 6: Mastering if master / loud / streaming mentioned
        if any(w in p_lower for w in ["master", "streaming", "loud", "flac", "deliver", "final"]):
            plan_steps.append({
                "step": len(plan_steps) + 1,
                "agent": "Mastering Engineer (Agent 07)",
                "action": "MASTER_TRACK",
                "description": "Match -14.0 LUFS target with -1.0 dBTP true-peak brickwall limiting."
            })

        # Final Step: QC verification
        plan_steps.append({
            "step": len(plan_steps) + 1,
            "agent": "Quality Control (Agent 09)",
            "action": "VERIFY_DELIVERY",
            "description": "Audit clipping, true peak, and phase integrity before release."
        })

        return {
            "prompt": prompt,
            "source_file": source_file,
            "total_steps": len(plan_steps),
            "pipeline": plan_steps
        }

    async def execute_autonomous_pipeline(self, prompt: str, file_path: str) -> Dict[str, Any]:
        """Executes full autonomous multi-agent production workflow end-to-end."""
        plan = await self.create_production_plan(prompt, file_path)
        execution_results = []
        current_file = file_path

        # 1. Analyze
        analysis_res = await self.analyst.analyze_recording(current_file)
        execution_results.append({"step": 1, "agent": "Audio Analyst", "output": analysis_res})

        # 2. Restore if in plan
        if any(s["action"] == "SPECTRAL_REPAIR" for s in plan["pipeline"]):
            restore_res = await self.restorer.restore_audio(current_file, denoise=True, declip=True)
            current_file = restore_res["restored_file"]
            execution_results.append({"step": 2, "agent": "Audio Restoration", "output": restore_res})

        # 3. Separate Stems if in plan
        stems_res = None
        if any(s["action"] == "SEPARATE_STEMS" for s in plan["pipeline"]):
            stems_res = await self.stem_separator.separate_stems(current_file)
            execution_results.append({"step": 3, "agent": "Stem Separator", "output": stems_res})

        # 4. Surround or Mastering
        final_file = current_file
        if any(s["action"] == "SPATIALIZE_SURROUND" for s in plan["pipeline"]):
            surround_res = await self.surround.create_surround_mix(current_file, target_layout="5.1")
            final_file = surround_res["surround_file"]
            execution_results.append({"step": 4, "agent": "Surround Engineer", "output": surround_res})
        else:
            master_res = await self.masterer.execute_mastering(current_file, profile_key="streaming")
            final_file = master_res["mastered_file"]
            execution_results.append({"step": 4, "agent": "Mastering Engineer", "output": master_res})

        # 5. Final QC
        qc_res = await self.qc.audit_audio_file(final_file)
        execution_results.append({"step": 5, "agent": "Quality Control", "output": qc_res})

        # 6. Render Lossless Delivery FLAC
        audio, sr = AudioIO.load_audio(final_file)
        delivery_cert = ExportEngine.render_and_export(
            audio=audio,
            sample_rate=sr,
            project_name="Autonomous_Production",
            export_name="Master_Delivery",
            output_format="FLAC",
            bit_depth="24",
            channels_layout="5.1" if "surround" in final_file else "stereo"
        )

        return {
            "status": "COMPLETED",
            "production_prompt": prompt,
            "pipeline_executed": plan["pipeline"],
            "intermediate_results": execution_results,
            "final_delivery_certificate": delivery_cert,
            "download_url": delivery_cert["download_path"]
        }
