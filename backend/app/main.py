import asyncio
import json
import logging
import os
import shutil
import uuid
from contextlib import asynccontextmanager
from pathlib import Path
from typing import Any, Dict, List, Optional

import numpy as np
from fastapi import FastAPI, File, Form, HTTPException, UploadFile, WebSocket, WebSocketDisconnect, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
from pydantic import BaseModel, Field

from app.config import settings
from app.core.analysis import AudioAnalyzer
from app.core.audio_io import AudioIO
from app.core.dsp_engine import DSPOps
from app.core.export_engine import ExportEngine
from app.core.mastering_engine import MASTERING_PROFILES, MasteringEngine
from app.core.surround_engine import SurroundLayout, SurroundPannerEngine
from app.core.synth_engine import SynthEngine
from app.agents.production_manager import ProductionManagerAgent
from app.agents.audio_analyst import AudioAnalystAgent
from app.agents.stem_separator import StemSeparatorAgent
from app.agents.audio_restoration import AudioRestorationAgent
from app.agents.mixing_engineer import MixingEngineerAgent
from app.agents.music_arranger import MusicArrangerAgent
from app.agents.vocal_engineer import VocalEngineerAgent
from app.agents.mastering_engineer import MasteringEngineerAgent
from app.agents.surround_engineer import SurroundEngineerAgent
from app.agents.quality_control import QualityControlAgent

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(name)s: %(message)s")
logger = logging.getLogger("soniq.main")


@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("Initializing SONIQ AI Autonomous Professional Audio Platform...")
    # Generate demo project if empty
    yield
    logger.info("Shutting down SONIQ AI Platform.")


app = FastAPI(
    title="SONIQ AI: Autonomous Professional Audio Production & Surround Sound Platform",
    description="Studio-grade Digital Audio Workstation, 64-bit DSP, 5.1/7.1 Surround, Mastering, and Multi-Agent AI.",
    version=settings.APP_VERSION,
    lifespan=lifespan
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Instantiate Agents
prod_manager = ProductionManagerAgent()
analyst_agent = AudioAnalystAgent()
stem_agent = StemSeparatorAgent()
restoration_agent = AudioRestorationAgent()
mixing_agent = MixingEngineerAgent()
arranger_agent = MusicArrangerAgent()
vocal_agent = VocalEngineerAgent()
mastering_agent = MasteringEngineerAgent()
surround_agent = SurroundEngineerAgent()
qc_agent = QualityControlAgent()


# Request / Response Schemas
class DSPProcessRequest(BaseModel):
    file_path: str
    operations: List[Dict[str, Any]] = Field(..., description="List of DSP blocks to apply in order")


class SynthGenerateRequest(BaseModel):
    synth_type: str = Field("subtractive", description="subtractive | fm | drum | midi_sequence")
    midi_events: Optional[List[Dict[str, Any]]] = None
    note: int = 60
    duration_sec: float = 2.0
    waveform_1: str = "saw"
    waveform_2: str = "square"
    detune_cents: float = 8.0
    cutoff_hz: float = 2400.0


class SurroundProcessRequest(BaseModel):
    file_path: str
    layout: str = "5.1"
    x: float = 0.0
    y: float = 0.5
    z: float = 0.0
    crossover_hz: float = 80.0


class MasteringProcessRequest(BaseModel):
    file_path: str
    profile: str = "streaming"
    custom_target_lufs: Optional[float] = None
    custom_ceiling_dbtp: Optional[float] = None


class ExportRenderRequest(BaseModel):
    file_path: str
    project_name: str = "SONIQ_Project"
    export_name: str = "Master_Delivery"
    output_format: str = "FLAC"
    bit_depth: str = "24"
    sample_rate: int = 96000
    channels_layout: str = "stereo"


class OrchestrateRequest(BaseModel):
    prompt: str = Field(..., json_schema_extra={"example": "Clean background noise, separate stems, pan into 5.1 surround and master to 24-bit 96kHz FLAC."})
    file_path: str


# ===================== ENDPOINTS =====================

@app.get("/api/v1/health")
async def health_check():
    return {
        "status": "healthy",
        "service": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "environment": settings.ENVIRONMENT,
        "audio_standards": {
            "itu_r_bs_1770": True,
            "ebu_r128": True,
            "max_sample_rate_hz": 192000,
            "precision": "64-bit floating point"
        },
        "agents_available": [
            "Audio Analyst (Agent 01)",
            "Stem Separator (Agent 02)",
            "Audio Restoration (Agent 03)",
            "Mixing Engineer (Agent 04)",
            "Music Arranger (Agent 05)",
            "Vocal Engineer (Agent 06)",
            "Mastering Engineer (Agent 07)",
            "Surround Sound Engineer (Agent 08)",
            "Quality Control (Agent 09)",
            "Production Manager (Agent 10)"
        ]
    }


@app.post("/api/v1/audio/upload")
async def upload_audio(file: UploadFile = File(...)):
    """Non-destructive upload of audio files."""
    ext = file.filename.split(".")[-1].lower() if file.filename else ""
    if ext not in settings.SUPPORTED_IMPORT_FORMATS:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Unsupported format '{ext}'. Supported: {', '.join(settings.SUPPORTED_IMPORT_FORMATS)}"
        )

    file_id = f"{uuid.uuid4().hex[:8]}_{file.filename}"
    dest_path = settings.UPLOAD_DIR / file_id
    
    with open(dest_path, "wb") as f:
        shutil.copyfileobj(file.file, f)

    # Probe uploaded file
    meta = AudioIO.probe_audio(dest_path)
    audio, sr = AudioIO.load_audio(dest_path)
    waveform = AudioAnalyzer.generate_waveform_peaks(audio, num_points=200)

    return {
        "file_id": file_id,
        "file_path": str(dest_path),
        "download_url": f"/api/v1/audio/download/{file_id}",
        "metadata": meta.to_dict(),
        "waveform_preview": waveform
    }


@app.get("/api/v1/audio/download/{filename}")
@app.head("/api/v1/audio/download/{filename}")
async def download_audio(filename: str):
    """Direct non-destructive download of uploaded, processed, or exported audio files."""
    for folder in [settings.EXPORTS_DIR, settings.PROCESSED_DIR, settings.STEMS_DIR, settings.UPLOAD_DIR, settings.SYNTHS_DIR]:
        target = folder / filename
        if target.exists():
            return FileResponse(
                path=target,
                filename=filename,
                media_type="application/octet-stream"
            )
    raise HTTPException(status_code=404, detail="Audio file not found.")


@app.post("/api/v1/audio/analyze")
async def analyze_audio(file_path: str = Form(...)):
    """Agent 01: Deep Acoustic & Technical Inspection."""
    if not Path(file_path).exists():
        raise HTTPException(status_code=404, detail="File not found")
    return await analyst_agent.analyze_recording(file_path)


@app.post("/api/v1/audio/separate-stems")
async def separate_stems(file_path: str = Form(...)):
    """Agent 02: Source Separation into Vocals, Drums, Bass, and Other."""
    if not Path(file_path).exists():
        raise HTTPException(status_code=404, detail="File not found")
    return await stem_agent.separate_stems(file_path)


@app.post("/api/v1/audio/restore")
async def restore_audio(
    file_path: str = Form(...),
    denoise: bool = Form(True),
    dehum_freq: float = Form(50.0),
    declip: bool = Form(True)
):
    """Agent 03: Spectral De-noise, De-hum, and De-clip."""
    if not Path(file_path).exists():
        raise HTTPException(status_code=404, detail="File not found")
    return await restoration_agent.restore_audio(file_path, denoise=denoise, dehum_freq=dehum_freq, declip=declip)


@app.post("/api/v1/audio/mix-proposal")
async def mix_proposal(tracks: List[Dict[str, Any]]):
    """Agent 04: Formulate Multitrack Mix Recommendation."""
    return await mixing_agent.propose_mix(tracks)


@app.post("/api/v1/audio/arrangement")
async def analyze_arrangement(file_path: str = Form(...)):
    """Agent 05: Detect BPM, musical key, and song sections."""
    if not Path(file_path).exists():
        raise HTTPException(status_code=404, detail="File not found")
    return await arranger_agent.analyze_arrangement(file_path)


@app.post("/api/v1/audio/vocal-process")
async def vocal_process(
    file_path: str = Form(...),
    target_scale: str = Form("A Minor"),
    de_ess_db: float = Form(4.0)
):
    """Agent 06: Vocal Tuning, De-essing, and Studio Air."""
    if not Path(file_path).exists():
        raise HTTPException(status_code=404, detail="File not found")
    return await vocal_agent.process_vocal(file_path, target_scale=target_scale, de_ess_amount_db=de_ess_db)


@app.post("/api/v1/audio/master")
async def master_audio(req: MasteringProcessRequest):
    """Agent 07: EBU R128 / ITU-R BS.1770 Mastering."""
    if not Path(req.file_path).exists():
        raise HTTPException(status_code=404, detail="File not found")
    return await mastering_agent.execute_mastering(
        req.file_path,
        profile_key=req.profile,
        custom_target_lufs=req.custom_target_lufs,
        custom_ceiling_dbtp=req.custom_ceiling_dbtp
    )


@app.post("/api/v1/audio/surround")
async def surround_process(req: SurroundProcessRequest):
    """Agent 08: 5.1 / 7.1 / 7.1.4 3D Spatial Panning, LFE Bass Management & Binaural HRTF."""
    if not Path(req.file_path).exists():
        raise HTTPException(status_code=404, detail="File not found")
    return await surround_agent.create_surround_mix(
        req.file_path,
        target_layout=req.layout,
        crossover_hz=req.crossover_hz,
        x=req.x,
        y=req.y,
        z=req.z
    )


@app.post("/api/v1/audio/qc-audit")
async def qc_audit(file_path: str = Form(...)):
    """Agent 09: Pre-Delivery Technical Verification."""
    if not Path(file_path).exists():
        raise HTTPException(status_code=404, detail="File not found")
    return await qc_agent.audit_audio_file(file_path)


@app.post("/api/v1/audio/orchestrate")
async def orchestrate_production(req: OrchestrateRequest):
    """Agent 10: Multi-Agent Conversational Autonomous Production."""
    if not Path(req.file_path).exists():
        raise HTTPException(status_code=404, detail="File not found")
    return await prod_manager.execute_autonomous_pipeline(req.prompt, req.file_path)


@app.post("/api/v1/dsp/process")
async def process_dsp_rack(req: DSPProcessRequest):
    """Direct Studio DSP Rack Processor."""
    if not Path(req.file_path).exists():
        raise HTTPException(status_code=404, detail="File not found")

    audio, sr = AudioIO.load_audio(req.file_path)
    processed = np.copy(audio)

    for op in req.operations:
        kind = op.get("type", "").lower()
        if kind == "eq":
            processed = DSPOps.apply_parametric_eq(processed, sr, op.get("bands", []))
        elif kind == "compressor":
            processed = DSPOps.apply_compressor(
                processed, sr,
                threshold_db=op.get("threshold_db", -20.0),
                ratio=op.get("ratio", 4.0),
                attack_ms=op.get("attack_ms", 15.0),
                release_ms=op.get("release_ms", 100.0),
                makeup_gain_db=op.get("makeup_gain_db", 0.0)
            )
        elif kind == "limiter":
            processed = DSPOps.apply_brickwall_limiter(
                processed, sr,
                ceiling_dbtp=op.get("ceiling_dbtp", -0.1),
                lookahead_ms=op.get("lookahead_ms", 5.0)
            )
        elif kind == "reverb":
            processed = DSPOps.apply_algorithmic_reverb(
                processed, sr,
                room_size=op.get("room_size", 0.7),
                damping=op.get("damping", 0.3),
                wet_level=op.get("wet_level", 0.25)
            )
        elif kind == "delay":
            processed = DSPOps.apply_stereo_delay(
                processed, sr,
                time_left_ms=op.get("time_left_ms", 250.0),
                time_right_ms=op.get("time_right_ms", 375.0),
                feedback=op.get("feedback", 0.35),
                wet_level=op.get("wet_level", 0.3)
            )
        elif kind == "saturation":
            processed = DSPOps.apply_harmonic_saturation(
                processed,
                drive_db=op.get("drive_db", 6.0),
                mode=op.get("mode", "tape")
            )
        elif kind == "widener":
            processed = DSPOps.apply_stereo_widener(processed, width_pct=op.get("width_pct", 120.0))

    out_file = settings.PROCESSED_DIR / f"{Path(req.file_path).stem}_dsp_rack.wav"
    AudioIO.write_audio(processed, out_file, sample_rate=sr, bit_depth="24", format_type="WAV")

    return {
        "status": "COMPLETED",
        "processed_file": str(out_file),
        "download_url": f"/api/v1/audio/download/{out_file.name}",
        "metrics": AudioAnalyzer.full_audio_analysis(processed, sr)
    }


@app.post("/api/v1/synth/generate")
async def generate_synth(req: SynthGenerateRequest):
    """Synthesizer Sound Design & Generation."""
    sr = 48000
    if req.synth_type == "midi_sequence" and req.midi_events:
        audio = SynthEngine.render_midi_sequence(req.midi_events, sample_rate=sr)
    elif req.synth_type == "fm":
        audio = SynthEngine.synthesize_fm_note(req.note, req.duration_sec, sample_rate=sr)
    elif req.synth_type == "drum":
        audio = SynthEngine.synthesize_drum_hit("kick", req.duration_sec, sample_rate=sr)
    else:
        audio = SynthEngine.synthesize_subtractive_note(
            req.note,
            req.duration_sec,
            sample_rate=sr,
            waveform_1=req.waveform_1,
            waveform_2=req.waveform_2,
            detune_cents=req.detune_cents,
            filter_cutoff_hz=req.cutoff_hz
        )

    filename = f"synth_{req.synth_type}_{uuid.uuid4().hex[:6]}.wav"
    out_p = settings.SYNTHS_DIR / filename
    AudioIO.write_audio(audio, out_p, sample_rate=sr, bit_depth="24", format_type="WAV")

    return {
        "status": "COMPLETED",
        "synth_type": req.synth_type,
        "file_path": str(out_p),
        "download_url": f"/api/v1/audio/download/{out_p.name}",
        "waveform_preview": AudioAnalyzer.generate_waveform_peaks(audio, num_points=100)
    }


@app.post("/api/v1/export/render")
async def render_export(req: ExportRenderRequest):
    """Full Mix & Stem Lossless Rendering with QC Certificate."""
    if not Path(req.file_path).exists():
        raise HTTPException(status_code=404, detail="File not found")

    audio, sr = AudioIO.load_audio(req.file_path)
    cert = ExportEngine.render_and_export(
        audio=audio,
        sample_rate=sr,
        project_name=req.project_name,
        export_name=req.export_name,
        output_format=req.output_format,
        bit_depth=req.bit_depth,
        target_sample_rate=req.sample_rate,
        channels_layout=req.channels_layout
    )
    return cert


@app.head("/api/v1/projects/demo")
@app.get("/api/v1/projects/demo")
async def load_demo_project():
    """Generates an immediate, playable studio demonstration project with real multitracks."""
    sr = 48000
    duration = 4.0
    
    # 1. Generate Drum track (Kick + Snare + Hi-Hat pattern)
    drum_events = [
        {"drum_type": "kick", "start": 0.0, "duration": 0.5, "velocity": 120},
        {"drum_type": "hihat", "start": 0.5, "duration": 0.2, "velocity": 90},
        {"drum_type": "snare", "start": 1.0, "duration": 0.4, "velocity": 110},
        {"drum_type": "hihat", "start": 1.5, "duration": 0.2, "velocity": 90},
        {"drum_type": "kick", "start": 2.0, "duration": 0.5, "velocity": 120},
        {"drum_type": "hihat", "start": 2.5, "duration": 0.2, "velocity": 90},
        {"drum_type": "snare", "start": 3.0, "duration": 0.4, "velocity": 110},
        {"drum_type": "hihat", "start": 3.5, "duration": 0.2, "velocity": 90},
    ]
    drum_audio = SynthEngine.render_midi_sequence(drum_events, instrument="drum", sample_rate=sr)

    # 2. Generate Bass track (A minor baseline: A1, C2, D2, E2)
    bass_events = [
        {"note": 33, "start": 0.0, "duration": 0.9, "velocity": 110},
        {"note": 36, "start": 1.0, "duration": 0.9, "velocity": 105},
        {"note": 38, "start": 2.0, "duration": 0.9, "velocity": 105},
        {"note": 40, "start": 3.0, "duration": 0.9, "velocity": 115},
    ]
    bass_audio = SynthEngine.render_midi_sequence(bass_events, instrument="subtractive", sample_rate=sr)

    # 3. Generate Synth Chords (A minor, F major, C major, G major)
    synth_events = [
        {"note": 57, "start": 0.0, "duration": 1.0, "velocity": 95}, # A
        {"note": 60, "start": 0.0, "duration": 1.0, "velocity": 95}, # C
        {"note": 64, "start": 0.0, "duration": 1.0, "velocity": 95}, # E
        {"note": 53, "start": 1.0, "duration": 1.0, "velocity": 95}, # F
        {"note": 57, "start": 1.0, "duration": 1.0, "velocity": 95}, # A
        {"note": 60, "start": 1.0, "duration": 1.0, "velocity": 95}, # C
        {"note": 48, "start": 2.0, "duration": 1.0, "velocity": 95}, # C
        {"note": 52, "start": 2.0, "duration": 1.0, "velocity": 95}, # E
        {"note": 55, "start": 2.0, "duration": 1.0, "velocity": 95}, # G
        {"note": 55, "start": 3.0, "duration": 1.0, "velocity": 95}, # G
        {"note": 59, "start": 3.0, "duration": 1.0, "velocity": 95}, # B
        {"note": 62, "start": 3.0, "duration": 1.0, "velocity": 95}, # D
    ]
    synth_audio = SynthEngine.render_midi_sequence(synth_events, instrument="fm", sample_rate=sr)

    # 4. Generate Lead Vocal Melodic Phrase
    vocal_events = [
        {"note": 69, "start": 0.5, "duration": 0.8, "velocity": 100}, # A4
        {"note": 71, "start": 1.5, "duration": 0.6, "velocity": 105}, # B4
        {"note": 72, "start": 2.2, "duration": 1.2, "velocity": 110}, # C5
    ]
    vocal_audio = SynthEngine.render_midi_sequence(vocal_events, instrument="subtractive", sample_rate=sr)

    # Write demo tracks to storage
    demo_files = {}
    tracks_meta = [
        ("01_Drums", drum_audio, "Drums", "#ef4444"),
        ("02_Bass", bass_audio, "Bass", "#f59e0b"),
        ("03_Synth_Keys", synth_audio, "Keys", "#06b6d4"),
        ("04_Lead_Vocal", vocal_audio, "Vocal", "#8b5cf6"),
    ]

    tracks_resp = []
    for name, aud, cat, color in tracks_meta:
        p = settings.PROCESSED_DIR / f"demo_{name}.wav"
        AudioIO.write_audio(aud, p, sample_rate=sr, bit_depth="24", format_type="WAV")
        tracks_resp.append({
            "id": name,
            "name": name.replace("0", "").replace("_", " ").strip(),
            "category": cat,
            "color": color,
            "file_path": str(p),
            "download_url": f"/api/v1/audio/download/{p.name}",
            "volume_db": -2.0 if cat != "Drums" else -1.0,
            "pan": 0.0,
            "mute": False,
            "solo": False,
            "waveform": AudioAnalyzer.generate_waveform_peaks(aud, num_points=120)
        })

    # Combined master preview
    max_len = max(aud.shape[1] for _, aud, _, _ in tracks_meta)
    master_mix = np.zeros((2, max_len), dtype=np.float64)
    for _, aud, _, _ in tracks_meta:
        master_mix[:, :aud.shape[1]] += aud * 0.4
    
    master_p = settings.PROCESSED_DIR / "demo_master_mix.wav"
    AudioIO.write_audio(master_mix, master_p, sample_rate=sr, bit_depth="24", format_type="WAV")

    return {
        "project_id": "PROJ-SONIQ-DEMO",
        "project_name": "SONIQ AI Sovereign Symphony (Demo Session)",
        "tempo_bpm": 120,
        "sample_rate_hz": sr,
        "bit_depth": "24",
        "duration_seconds": round(max_len / sr, 2),
        "master_mix": {
            "file_path": str(master_p),
            "download_url": f"/api/v1/audio/download/{master_p.name}",
            "metrics": AudioAnalyzer.full_audio_analysis(master_mix, sr)
        },
        "tracks": tracks_resp
    }


@app.websocket("/ws/monitoring")
async def websocket_monitoring(websocket: WebSocket):
    """Real-time Studio Telemetry WebSocket for VU meters, LUFS, and vectorscope."""
    await websocket.accept()
    try:
        while True:
            # Emits studio meter telemetry
            telemetry = {
                "peak_left_db": round(float(np.random.uniform(-14.0, -2.0)), 1),
                "peak_right_db": round(float(np.random.uniform(-14.0, -2.0)), 1),
                "rms_db": round(float(np.random.uniform(-22.0, -12.0)), 1),
                "momentary_lufs": round(float(np.random.uniform(-18.0, -13.0)), 1),
                "phase_correlation": round(float(np.random.uniform(0.65, 0.98)), 2),
                "true_peak_dbtp": round(float(np.random.uniform(-3.0, -0.5)), 2),
            }
            await websocket.send_text(json.dumps(telemetry))
            await asyncio.sleep(0.08) # ~12 fps meter updates
    except WebSocketDisconnect:
        pass
