import pytest
from httpx import AsyncClient, ASGITransport
from app.main import app


@pytest.mark.asyncio
async def test_health_endpoint():
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as client:
        resp = await client.get("/api/v1/health")
        assert resp.status_code == 200
        data = resp.json()
        assert data["status"] == "healthy"
        assert len(data["agents_available"]) == 10


@pytest.mark.asyncio
async def test_demo_project_generation():
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as client:
        resp = await client.get("/api/v1/projects/demo")
        assert resp.status_code == 200
        data = resp.json()
        assert data["project_id"] == "PROJ-SONIQ-DEMO"
        assert len(data["tracks"]) == 4
        assert "master_mix" in data


@pytest.mark.asyncio
async def test_synth_generation_endpoint():
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as client:
        payload = {
            "synth_type": "subtractive",
            "note": 60,
            "duration_sec": 1.0,
            "waveform_1": "saw",
            "waveform_2": "square"
        }
        resp = await client.post("/api/v1/synth/generate", json=payload)
        assert resp.status_code == 200
        data = resp.json()
        assert data["status"] == "COMPLETED"
        assert "file_path" in data


@pytest.mark.asyncio
async def test_cinema_process_and_codec_endpoints():
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as client:
        # First generate a quick synth file to test on
        synth_resp = await client.post("/api/v1/synth/generate", json={"synth_type": "subtractive", "duration_sec": 0.5})
        synth_file = synth_resp.json()["file_path"]

        # 1. Cinema process with bitstream generation (Dolby)
        cinema_resp = await client.post("/api/v1/audio/cinema-process", json={
            "file_path": synth_file,
            "processor_type": "dolby",
            "profile": "dolby_atmos_7_1_4",
            "encode_bitstream": True
        })
        assert cinema_resp.status_code == 200
        c_data = cinema_resp.json()
        assert c_data["status"] == "COMPLETED"
        assert c_data["bitstream_file"] is not None
        assert "DOLBY" in c_data["bitstream_file"]

        # 2. Encode to DTS directly
        dts_resp = await client.post("/api/v1/cinema/encode", json={
            "file_path": synth_file,
            "codec": "dts",
            "bitrate": "1536k"
        })
        assert dts_resp.status_code == 200
        dts_data = dts_resp.json()
        assert dts_data["status"] == "ENCODED"
        assert dts_data["file_path"].endswith(".dts")

        # 3. Decode DTS back to WAV
        dec_resp = await client.post("/api/v1/cinema/decode", json={
            "file_path": dts_data["file_path"],
            "output_format": "WAV",
            "bit_depth": "24"
        })
        assert dec_resp.status_code == 200
        dec_data = dec_resp.json()
        assert dec_data["status"] == "DECODED"
        assert dec_data["channels_count"] >= 2
        assert dec_data["file_path"].endswith(".wav")
