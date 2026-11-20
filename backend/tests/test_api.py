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
