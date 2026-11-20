from pathlib import Path
from typing import Any, Dict
import numpy as np

from app.agents.base_agent import BaseAudioAgent
from app.config import settings
from app.core.audio_io import AudioIO
from app.core.surround_engine import SurroundLayout, SurroundPannerEngine, SPEAKER_CONFIGS


class SurroundEngineerAgent(BaseAudioAgent):
    """AGENT 08: Surround Sound Engineer Agent - 5.1 / 7.1 Spatial Upmixing and Channel Routing."""

    def __init__(self):
        super().__init__(
            agent_id="AGENT_08_SURROUND",
            agent_name="Surround Sound Engineer Agent",
            role="Convert and position audio into 5.1, 7.1 surround layouts with discrete LFE and speaker calibration"
        )

    def get_deterministic_fallback(self, prompt: str) -> str:
        return "Surround mix engineered: 5.1 SMPTE channel layout, 80Hz LFE crossover, and decorrelated rear ambience."

    async def create_surround_mix(
        self,
        file_path: str,
        target_layout: str = SurroundLayout.FIVE_POINT_ONE,
        crossover_hz: float = 80.0,
        x: float = 0.0,
        y: float = 0.4,
        z: float = 0.0
    ) -> Dict[str, Any]:
        audio, sr = AudioIO.load_audio(file_path)

        # Spatialize with 3D coordinates (Azimuth, Elevation, Distance)
        surround_audio = SurroundPannerEngine.spatialize_track(
            audio,
            sample_rate=sr,
            x=x,
            y=y,
            z=z,
            layout=target_layout,
            crossover_hz=crossover_hz,
            apply_bass_management=True
        )

        out_filename = f"{Path(file_path).stem}_{target_layout.replace('.', '_')}surround.wav"
        out_p = settings.EXPORTS_DIR / out_filename
        AudioIO.write_audio(surround_audio, out_p, sample_rate=sr, bit_depth="24", format_type="WAV")

        # Render Binaural HRTF Stereo version for 3D headphone monitoring
        binaural_audio = SurroundPannerEngine.render_binaural_hrtf(
            surround_audio,
            layout=target_layout,
            sample_rate=sr
        )
        bin_filename = f"{Path(file_path).stem}_{target_layout.replace('.', '_')}_binaural_hrtf.wav"
        bin_p = settings.EXPORTS_DIR / bin_filename
        AudioIO.write_audio(binaural_audio, bin_p, sample_rate=sr, bit_depth="24", format_type="WAV")

        # Speaker channel details
        speakers = SPEAKER_CONFIGS.get(target_layout, SPEAKER_CONFIGS[SurroundLayout.FIVE_POINT_ONE])

        result = {
            "agent_id": self.agent_id,
            "status": "COMPLETED",
            "source_file": file_path,
            "surround_file": str(out_p),
            "download_url": f"/api/v1/audio/download/{out_p.name}",
            "binaural_file": str(bin_p),
            "binaural_download_url": f"/api/v1/audio/download/{bin_p.name}",
            "channel_count": surround_audio.shape[0],
            "channel_layout": target_layout,
            "coordinates": {"x": x, "y": y, "z": z},
            "speakers_configured": speakers,
            "bass_management": {
                "crossover_hz": crossover_hz,
                "lfe_headroom_boost": "+10 dB standard cinema alignment",
                "filter_type": "4th-order Linkwitz-Riley (24 dB/oct)"
            },
            "statutory_disclaimer": (
                "AI-assisted upmixing is an estimated spatial reconstruction conforming to ITU-R BS.775, "
                "not an authentic original multitrack recording."
            )
        }
        self.log_execution("CREATE_SURROUND_MIX", {"file": file_path, "layout": target_layout}, {"channels": surround_audio.shape[0]})
        return result
