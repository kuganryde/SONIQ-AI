import pytest
from pathlib import Path
import numpy as np

from app.core.audio_io import AudioIO
from app.agents.audio_analyst import AudioAnalystAgent
from app.agents.stem_separator import StemSeparatorAgent
from app.agents.audio_restoration import AudioRestorationAgent
from app.agents.mixing_engineer import MixingEngineerAgent
from app.agents.music_arranger import MusicArrangerAgent
from app.agents.vocal_engineer import VocalEngineerAgent
from app.agents.mastering_engineer import MasteringEngineerAgent
from app.agents.surround_engineer import SurroundEngineerAgent
from app.agents.quality_control import QualityControlAgent
from app.agents.production_manager import ProductionManagerAgent
from app.config import settings


@pytest.fixture
def sample_test_file(tmp_path):
    """Generates a test wav file."""
    sr = 48000
    t = np.linspace(0, 1.5, int(sr * 1.5), endpoint=False)
    # 440 Hz + 880 Hz harmonic mix with slight background noise
    sig = 0.4 * np.sin(2 * np.pi * 440.0 * t) + 0.2 * np.sin(2 * np.pi * 880.0 * t)
    noise = np.random.normal(0, 0.01, len(t))
    audio = np.vstack([sig + noise, sig + noise])
    
    out_p = settings.UPLOAD_DIR / "test_fixture.wav"
    AudioIO.write_audio(audio, out_p, sample_rate=sr, bit_depth="24", format_type="WAV")
    return str(out_p)


@pytest.mark.asyncio
async def test_agent_01_analyst(sample_test_file):
    agent = AudioAnalystAgent()
    res = await agent.analyze_recording(sample_test_file)
    assert res["status"] == "COMPLETED"
    assert "integrated_lufs" in res["acoustic_analysis"]


@pytest.mark.asyncio
async def test_agent_02_stem_separator(sample_test_file):
    agent = StemSeparatorAgent()
    res = await agent.separate_stems(sample_test_file)
    assert res["status"] == "COMPLETED"
    assert "vocals" in res["stems"]
    assert "drums" in res["stems"]
    assert "bass" in res["stems"]
    assert "other" in res["stems"]


@pytest.mark.asyncio
async def test_agent_03_restoration(sample_test_file):
    agent = AudioRestorationAgent()
    res = await agent.restore_audio(sample_test_file, denoise=True, dehum_freq=50.0)
    assert res["status"] == "COMPLETED"
    assert Path(res["restored_file"]).exists()


@pytest.mark.asyncio
async def test_agent_04_mixing_proposer():
    agent = MixingEngineerAgent()
    tracks = [
        {"id": "t1", "name": "Lead Vocal", "type": "vocal"},
        {"id": "t2", "name": "Heavy Drums", "type": "drums"},
        {"id": "t3", "name": "Sub Bass", "type": "bass"},
    ]
    res = await agent.propose_mix(tracks)
    assert res["status"] == "PROPOSED"
    assert len(res["mix_proposal"]) == 3


@pytest.mark.asyncio
async def test_agent_07_mastering(sample_test_file):
    agent = MasteringEngineerAgent()
    res = await agent.execute_mastering(sample_test_file, profile_key="streaming")
    assert res["status"] == "COMPLETED"
    assert Path(res["mastered_file"]).exists()


@pytest.mark.asyncio
async def test_agent_08_surround(sample_test_file):
    agent = SurroundEngineerAgent()
    res = await agent.create_surround_mix(sample_test_file, target_layout="5.1")
    assert res["status"] == "COMPLETED"
    assert res["channel_count"] == 6


@pytest.mark.asyncio
async def test_agent_09_qc_audit(sample_test_file):
    agent = QualityControlAgent()
    res = await agent.audit_audio_file(sample_test_file)
    assert res["overall_status"] in ["PASSED", "WARNING"]
    assert res["delivery_ready"] is True


@pytest.mark.asyncio
async def test_agent_10_production_manager(sample_test_file):
    manager = ProductionManagerAgent()
    prompt = "Clean background noise, separate stems, pan into 5.1 surround and master to 24-bit 96kHz FLAC."
    plan = await manager.create_production_plan(prompt, sample_test_file)
    assert plan["total_steps"] >= 4
    
    # Execute autonomous pipeline
    res = await manager.execute_autonomous_pipeline(prompt, sample_test_file)
    assert res["status"] == "COMPLETED"
    assert Path(res["final_delivery_certificate"]["file_name"]).name != ""
