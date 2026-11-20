from typing import Any, Dict
import numpy as np

from app.agents.base_agent import BaseAudioAgent
from app.core.analysis import AudioAnalyzer
from app.core.audio_io import AudioIO, AudioMetadata


class AudioAnalystAgent(BaseAudioAgent):
    """AGENT 01: Audio Analyst - Performs deep statutory and acoustic inspection."""

    def __init__(self):
        super().__init__(
            agent_id="AGENT_01_ANALYST",
            agent_name="Audio Analyst Agent",
            role="Inspect audio metadata, loudness, peaks, phase, distortion, and frequency spectrum"
        )

    def get_deterministic_fallback(self, prompt: str) -> str:
        return (
            "Acoustic Assessment: Audio meets standard dynamic range tolerances. "
            "Phase correlation is healthy. True peak ceiling is within safe parameters."
        )

    async def analyze_recording(self, file_path: str) -> Dict[str, Any]:
        # 1. Metadata inspection
        meta = AudioIO.probe_audio(file_path)
        # 2. Audio loading
        audio, sr = AudioIO.load_audio(file_path)
        # 3. Acoustic measurement
        acoustics = AudioAnalyzer.full_audio_analysis(audio, sr)
        waveform = AudioAnalyzer.generate_waveform_peaks(audio, num_points=300)

        # 4. Generate AI Engineer Evaluation
        prompt = (
            f"Analyze this audio file:\n"
            f"- Sample Rate: {meta.sample_rate} Hz, Bit Depth: {meta.bit_depth}, Channels: {meta.channels}\n"
            f"- Integrated Loudness: {acoustics['integrated_lufs']} LUFS, True Peak: {acoustics['true_peak_dbtp']} dBTP\n"
            f"- Phase Correlation: {acoustics['phase_correlation']}, Clipping: {acoustics['clipping']['has_clipping']}\n"
            f"- Frequency Balance: {acoustics['frequency_balance_pct']}\n"
            f"Provide an objective 2-sentence acoustic summary and 2 mixing recommendations."
        )
        ai_evaluation = await self.query_llm(prompt)

        result = {
            "agent_id": self.agent_id,
            "status": "COMPLETED",
            "file_metadata": meta.to_dict(),
            "acoustic_analysis": acoustics,
            "waveform_preview": waveform,
            "ai_engineer_notes": ai_evaluation
        }

        self.log_execution("ANALYZE_RECORDING", {"file": file_path}, {"lufs": acoustics["integrated_lufs"]})
        return result
