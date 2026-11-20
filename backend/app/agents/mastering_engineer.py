from pathlib import Path
from typing import Any, Dict, Optional
import numpy as np

from app.agents.base_agent import BaseAudioAgent
from app.config import settings
from app.core.audio_io import AudioIO
from app.core.mastering_engine import MasteringEngine, MASTERING_PROFILES


class MasteringEngineerAgent(BaseAudioAgent):
    """AGENT 07: Mastering Engineer Agent - Complies with Streaming, CD, Broadcast, and Cinema specs."""

    def __init__(self):
        super().__init__(
            agent_id="AGENT_07_MASTERING",
            agent_name="Mastering Engineer Agent",
            role="Audit final mix, match delivery loudness targets, apply multiband dynamics and peak limiting"
        )

    def get_deterministic_fallback(self, prompt: str) -> str:
        return "Mastering complete: Target -14.0 LUFS matched with -1.0 dBTP ceiling for zero-distortion streaming playback."

    async def execute_mastering(
        self,
        file_path: str,
        profile_key: str = "streaming",
        custom_target_lufs: Optional[float] = None,
        custom_ceiling_dbtp: Optional[float] = None
    ) -> Dict[str, Any]:
        audio, sr = AudioIO.load_audio(file_path)

        mastered_audio, report = MasteringEngine.master_track(
            audio,
            sr,
            profile_key=profile_key,
            custom_target_lufs=custom_target_lufs,
            custom_ceiling_dbtp=custom_ceiling_dbtp
        )

        out_filename = f"{Path(file_path).stem}_mastered_{profile_key}.wav"
        out_p = settings.PROCESSED_DIR / out_filename
        AudioIO.write_audio(mastered_audio, out_p, sample_rate=sr, bit_depth="24", format_type="WAV")

        result = {
            "agent_id": self.agent_id,
            "status": "COMPLETED",
            "source_file": file_path,
            "mastered_file": str(out_p),
            "download_url": f"/api/v1/audio/download/{out_p.name}",
            "mastering_report": report
        }
        self.log_execution("EXECUTE_MASTERING", {"file": file_path, "profile": profile_key}, {"status": "SUCCESS"})
        return result
