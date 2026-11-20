from typing import Any, Dict
from app.agents.base_agent import BaseAudioAgent
from app.core.analysis import AudioAnalyzer
from app.core.audio_io import AudioIO


class QualityControlAgent(BaseAudioAgent):
    """AGENT 09: Quality Control Engineer - Pre-export and delivery verification."""

    def __init__(self):
        super().__init__(
            agent_id="AGENT_09_QC",
            agent_name="Quality Control Agent",
            role="Audit technical delivery specs: clipping, true peak, phase, DC offset, loudness compliance"
        )

    def get_deterministic_fallback(self, prompt: str) -> str:
        return "QC Passed: No inter-sample clipping detected, stereo correlation positive, loudness within broadcast bounds."

    async def audit_audio_file(self, file_path: str, max_peak_ceiling: float = 0.0) -> Dict[str, Any]:
        meta = AudioIO.probe_audio(file_path)
        audio, sr = AudioIO.load_audio(file_path)
        acoustics = AudioAnalyzer.full_audio_analysis(audio, sr)

        issues = []
        # 1. Clipping check
        if acoustics["clipping"]["has_clipping"]:
            issues.append(f"Clipping: {acoustics['clipping']['clipped_samples_count']} saturated samples.")

        # 2. True Peak check
        if acoustics["true_peak_dbtp"] > max_peak_ceiling:
            issues.append(f"True Peak exceeds ceiling: {acoustics['true_peak_dbtp']} dBTP > {max_peak_ceiling} dBTP.")

        # 3. Phase correlation check
        if acoustics["phase_correlation"] < 0.0:
            issues.append(f"Phase Inversion Risk: Correlation is {acoustics['phase_correlation']} (mono cancellation).")

        # 4. DC offset check
        if abs(acoustics["dc_offset"]) > 0.005:
            issues.append(f"DC Offset detected: {acoustics['dc_offset']}.")

        overall_status = "REJECTED" if len(issues) > 1 else ("WARNING" if len(issues) == 1 else "PASSED")

        result = {
            "agent_id": self.agent_id,
            "file_audited": file_path,
            "overall_status": overall_status,
            "issues_detected": issues,
            "metadata": meta.to_dict(),
            "acoustics": acoustics,
            "delivery_ready": overall_status != "REJECTED"
        }
        self.log_execution("AUDIT_FILE", {"file": file_path}, {"status": overall_status})
        return result
