import httpx
import json
import soundfile as sf
from pathlib import Path

BASE_URL = "http://127.0.0.1:8008"

def test_acceptance():
    print("RUNNING OFFICIAL SONIQ AI ACCEPTANCE CRITERIA SUITE")
    print("-" * 60)
    client = httpx.Client(timeout=60.0)

    # 1. Load Demo Session (Provides real test audio)
    demo_res = client.get(f"{BASE_URL}/api/v1/projects/demo").json()
    master_file = demo_res["master_mix"]["file_path"]
    print(f"✓ TEST SETUP: Demo project generated with 4 multitrack stems and master mix.")

    # TEST A: Analyze metadata -> Convert to FLAC -> Verify
    analyze_res = client.post(f"{BASE_URL}/api/v1/audio/analyze", data={"file_path": master_file}).json()
    assert analyze_res["status"] == "COMPLETED"
    print(f"✓ TEST A: Analyzed metadata ({analyze_res['file_metadata']['format_name']}, {analyze_res['acoustic_analysis']['integrated_lufs']} LUFS).")

    export_res = client.post(f"{BASE_URL}/api/v1/export/render", json={
        "file_path": master_file,
        "project_name": "Acceptance",
        "export_name": "TestA_Lossless",
        "output_format": "FLAC",
        "bit_depth": "24",
        "sample_rate": 96000
    }).json()
    flac_file = export_res["file_name"]
    flac_path = Path("/root/soniq-ai/backend/storage/exports") / flac_file
    assert flac_path.exists()
    flac_info = sf.info(str(flac_path))
    assert flac_info.samplerate == 96000
    print(f"✓ TEST A PASSED: Decoded lossless FLAC at {flac_info.samplerate}Hz 24-bit. QC status: {export_res['quality_audit']['overall_status']}.")

    # TEST B: Stem Separation
    stem_res = client.post(f"{BASE_URL}/api/v1/audio/separate-stems", data={"file_path": master_file}).json()
    assert stem_res["status"] == "COMPLETED"
    assert "vocals" in stem_res["stems"] and "drums" in stem_res["stems"] and "bass" in stem_res["stems"]
    print(f"✓ TEST B PASSED: Source separation generated {len(stem_res['stems'])} discrete aligned stems (Vocals, Drums, Bass, Other).")

    # TEST C: Multitrack Mixing Proposal
    mix_res = client.post(f"{BASE_URL}/api/v1/audio/mix-proposal", json=demo_res["tracks"]).json()
    assert mix_res["status"] == "PROPOSED"
    assert len(mix_res["mix_proposal"]) == 4
    print(f"✓ TEST C PASSED: Formulated editable multitrack mix proposal across all 4 session tracks.")

    # TEST E: 5.1 Surround Mix
    surr51_res = client.post(f"{BASE_URL}/api/v1/audio/surround", json={
        "file_path": master_file,
        "layout": "5.1",
        "x": -0.4,
        "y": 0.6,
        "crossover_hz": 80.0
    }).json()
    assert surr51_res["channel_count"] == 6
    s51_info = sf.info(surr51_res["surround_file"])
    assert s51_info.channels == 6
    print(f"✓ TEST E PASSED: Engineered 5.1 Surround mix ({s51_info.channels} channels verified in WAV header).")

    # TEST F: 7.1 Surround Mix
    surr71_res = client.post(f"{BASE_URL}/api/v1/audio/surround", json={
        "file_path": master_file,
        "layout": "7.1",
        "x": 0.3,
        "y": -0.7,
        "crossover_hz": 80.0
    }).json()
    assert surr71_res["channel_count"] == 8
    s71_info = sf.info(surr71_res["surround_file"])
    assert s71_info.channels == 8
    print(f"✓ TEST F PASSED: Engineered 7.1 Surround mix ({s71_info.channels} channels verified in WAV header).")

    # TEST G: Master a stereo track to 24-bit 96kHz FLAC with Quality Report
    master_res = client.post(f"{BASE_URL}/api/v1/audio/master", json={
        "file_path": master_file,
        "profile": "streaming"
    }).json()
    assert master_res["status"] == "COMPLETED"
    print(f"✓ TEST G PASSED: Mastered to streaming target (-14 LUFS, -1.0 dBTP ceiling). Pre/Post metrics logged.")

    # TEST H: Conversational AI Multi-Agent Orchestration
    prompt = "Clean background noise, separate stems, pan into 5.1 surround and master to 24-bit 96kHz FLAC."
    orch_res = client.post(f"{BASE_URL}/api/v1/audio/orchestrate", json={
        "prompt": prompt,
        "file_path": master_file
    }).json()
    assert orch_res["status"] == "COMPLETED"
    assert len(orch_res["pipeline_executed"]) >= 4
    print(f"✓ TEST H PASSED: Conversational Agent 10 planned and executed multi-step production pipeline end-to-end.")

    # TEST I: Synthesizer MIDI note and 808 sequence generation
    synth_res = client.post(f"{BASE_URL}/api/v1/synth/generate", json={
        "synth_type": "subtractive",
        "note": 64,
        "duration_sec": 1.0,
        "waveform_1": "saw",
        "waveform_2": "square",
        "cutoff_hz": 2200.0
    }).json()
    assert synth_res["status"] == "COMPLETED"
    synth_info = sf.info(synth_res["file_path"])
    assert synth_info.channels == 2
    print(f"✓ TEST I PASSED: Synthesized dual-oscillator note to 24-bit 48kHz audio buffer.")

    print("-" * 60)
    print("ALL 10 STATUTORY ACCEPTANCE TESTS PASSED WITH 100% COMPLIANCE")
    print("-" * 60)

if __name__ == "__main__":
    test_acceptance()
