import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_list_projects():
    response = client.get("/api/v1/projects")
    assert response.status_code == 200
    data = response.json()
    assert "projects" in data
    assert "total" in data


def test_get_vybe_demo_project():
    response = client.get("/api/v1/projects/demo/vybe")
    assert response.status_code == 200
    data = response.json()
    assert data["id"] == "proj_vybe_demo"
    assert "VYBE Cinematic Showreel" in data["name"]
    assert "assets" in data
    assert len(data["assets"]) >= 1


def test_create_and_delete_project():
    # 1. Create project
    create_payload = {
        "name": "Integration Test Reel",
        "aspect_ratio": "9:16",
        "frame_rate": 30.0,
        "width": 1080,
        "height": 1920
    }
    create_res = client.post("/api/v1/projects", json=create_payload)
    assert create_res.status_code == 200
    proj_data = create_res.json()
    proj_id = proj_data["id"]
    assert proj_data["name"] == "Integration Test Reel"
    assert proj_data["aspect_ratio"] == "9:16"

    # 2. Get project
    get_res = client.get(f"/api/v1/projects/{proj_id}")
    assert get_res.status_code == 200
    assert get_res.json()["id"] == proj_id

    # 3. Update project
    patch_res = client.patch(f"/api/v1/projects/{proj_id}", json={"name": "Updated Test Reel"})
    assert patch_res.status_code == 200
    assert patch_res.json()["name"] == "Updated Test Reel"

    # 4. Delete project
    del_res = client.delete(f"/api/v1/projects/{proj_id}")
    assert del_res.status_code == 200


def test_ai_director_plan():
    payload = {
        "prompt": "Fast-paced TikTok tech gadget review with punchy 808 bass drops",
        "aspect_ratio": "9:16",
        "target_duration_sec": 24.0,
        "style_preset": "cyberpunk"
    }
    response = client.post("/api/v1/director/plan", json=payload)
    assert response.status_code == 200
    data = response.json()
    assert "scenes" in data
    assert len(data["scenes"]) >= 3
    assert data["aspect_ratio"] == "9:16"
    assert "soundtrack_mood" in data


def test_video_render_pipeline():
    payload = {
        "project_id": "proj_vybe_demo",
        "profile_name": "Web 720p H.264 Test",
        "output_format": "mp4",
        "resolution": "720p",
        "frame_rate": 30.0,
        "clips": []
    }
    response = client.post("/api/v1/render/video", json=payload)
    assert response.status_code == 200
    job = response.json()
    assert "id" in job
    assert job["status"] in ["QUEUED", "RENDERING", "COMPLETED"]

    # Check job lookup
    job_id = job["id"]
    get_job_res = client.get(f"/api/v1/render/jobs/{job_id}")
    assert get_job_res.status_code == 200
    assert get_job_res.json()["id"] == job_id
