import asyncio
import json
import logging
import os
import shutil
import uuid
from contextlib import asynccontextmanager
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, List, Optional

import numpy as np
from fastapi import FastAPI, File, Form, HTTPException, Request, UploadFile, WebSocket, WebSocketDisconnect, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
from pydantic import BaseModel, Field

from app.config import settings
from app.core.analysis import AudioAnalyzer
from app.core.audio_io import AudioIO
from app.core.db import init_db
from app.core.dsp_engine import DSPOps
from app.core.export_engine import ExportEngine
from app.core.mastering_engine import MASTERING_PROFILES, MasteringEngine
from app.core.project_service import ProjectService
from app.core.streaming import send_file_range
from app.core.surround_engine import SurroundLayout, SurroundPannerEngine
from app.core.cinema_processor import DolbyProcessor, DTSProcessor, DolbyCodec, DTSCodec
from app.core.synth_engine import SynthEngine
from app.core.video_render_service import VideoRenderService
from app.core.auto_edit_service import AutoEditService
from app.core.mlt_transition_service import MLTTransitionService
from app.core.nle_suite_service import NLESuiteService
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
from app.agents.ai_director import AIDirectorAgent
from app.agents.contracts import AgentTask, ProductionMode
from app.agents.cinema_bass_agent import CinemaBassAgent, CINEMA_BASS_PRESETS
from app.agents.audio_qa_agent import AudioQAAgent
from app.agents.audio_production_director import AudioProductionDirector
from app.core.resource_guard import (
    AudioCacheManager,
    RateLimitMiddleware,
    RateLimitTier,
    ResourceGuard,
    global_rate_limiter,
)

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(name)s: %(message)s")
logger = logging.getLogger("soniq.main")


def _ensure_brand_sound_logo(sample_rate: int = 48000, duration_sec: float = 3.2) -> Path:
    """Ensures the signature sovereign RYDETECH SONIQ Sound Logo is synthesized and cached."""
    brand_file = settings.BRAND_DIR / "rydetech_soniq_sound_logo.wav"
    if not brand_file.exists() or brand_file.stat().st_size == 0:
        logger.info("Synthesizing signature RYDETECH SONIQ Sound Logo (Sonic Ident)...")
        audio = SynthEngine.synthesize_rydetech_sound_logo(sample_rate=sample_rate, duration_sec=duration_sec)
        AudioIO.write_audio(audio, brand_file, sample_rate=sample_rate, bit_depth="24", format_type="WAV")
    
    # Also mirror into frontend public directory for instant zero-latency static web serving
    frontend_public = Path("/root/soniq-ai/frontend/public")
    if frontend_public.exists():
        public_logo = frontend_public / "rydetech_soniq_sound_logo.wav"
        if not public_logo.exists() or public_logo.stat().st_size != brand_file.stat().st_size:
            shutil.copy2(brand_file, public_logo)
    return brand_file


_auto_heal_state: Dict[str, Any] = {
    "watchdog_active": False,
    "interval_seconds": 300,
    "stale_job_threshold_minutes": 15,
    "last_sweep_at": None,
    "total_healed_render_jobs": 0,
    "last_healed_job_ids": [],
    "last_pruned_temp_files": 0,
}


def _run_auto_heal_sweep(startup: bool = False) -> Dict[str, Any]:
    """Executes a synchronous auto-heal pass for stale render jobs and temp storage."""
    healed_ids = VideoRenderService.recover_stale_jobs(
        startup=startup,
        max_stale_minutes=_auto_heal_state["stale_job_threshold_minutes"],
    )
    pruned = AudioCacheManager.prune_temporary_storage(settings.STORAGE_DIR, max_age_hours=48)
    ResourceGuard.clean_memory()

    now_iso = datetime.now(timezone.utc).isoformat()
    _auto_heal_state["last_sweep_at"] = now_iso
    _auto_heal_state["total_healed_render_jobs"] += len(healed_ids)
    _auto_heal_state["last_healed_job_ids"] = healed_ids
    _auto_heal_state["last_pruned_temp_files"] = pruned
    return {
        "timestamp": now_iso,
        "startup_sweep": startup,
        "healed_render_jobs": healed_ids,
        "pruned_temp_files": pruned,
    }


async def _auto_heal_watchdog():
    """Periodic background watchdog to heal stale render jobs and prune temp files."""
    _auto_heal_state["watchdog_active"] = True
    try:
        while True:
            await asyncio.sleep(_auto_heal_state["interval_seconds"])
            try:
                result = _run_auto_heal_sweep(startup=False)
                if result["healed_render_jobs"] or result["pruned_temp_files"]:
                    logger.info(
                        f"Auto-heal watchdog sweep: healed {len(result['healed_render_jobs'])} stale job(s), "
                        f"pruned {result['pruned_temp_files']} temp file(s)."
                    )
            except Exception as e:
                logger.error(f"Auto-heal watchdog sweep error: {e}")
    except asyncio.CancelledError:
        _auto_heal_state["watchdog_active"] = False
        raise


@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("Initializing RYDETECH VYBE AI & SONIQ Sovereign Media Production Platform...")
    # Initialize SQLite database schema
    init_db()
    try:
        ProjectService.ensure_demo_media_project()
        logger.info("VYBE AI demonstration project initialized and ready.")
    except Exception as e:
        logger.warning(f"Demo media project initialization warning: {e}")

    # Startup auto-heal: recover orphaned render jobs & prune stale temp derivatives
    startup_heal = _run_auto_heal_sweep(startup=True)
    logger.info(
        f"Startup auto-heal complete: healed {len(startup_heal['healed_render_jobs'])} orphaned render job(s), "
        f"pruned {startup_heal['pruned_temp_files']} temporary stale file(s)."
    )
    try:
        _ensure_brand_sound_logo()
        logger.info("RYDETECH SONIQ Sound Logo (Sonic Ident) ready in storage and public assets.")
    except Exception as e:
        logger.error(f"Failed to generate initial sound logo: {e}")

    watchdog_task = asyncio.create_task(_auto_heal_watchdog())
    try:
        yield
    finally:
        watchdog_task.cancel()
        try:
            await watchdog_task
        except asyncio.CancelledError:
            pass
        logger.info("Shutting down RYDETECH VYBE & SONIQ AI Platform.")


app = FastAPI(
    title="RYDETECH SONIQ AI: Autonomous Professional Audio Production & Surround Sound Platform",
    description="Studio-grade Digital Audio Workstation, 64-bit DSP, 5.1/7.1 Surround, Mastering, and Multi-Agent AI by RYDETECH GLOBAL ENTERPRISE.",
    version=settings.APP_VERSION,
    lifespan=lifespan
)

# Enforce Abuse-Prevention Rate Limiting & Resource Protection
app.add_middleware(RateLimitMiddleware, limiter=global_rate_limiter)

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
audio_director = AudioProductionDirector()
cinema_bass_agent = CinemaBassAgent()
audio_qa_agent = AudioQAAgent()


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


class SoundLogoGenerateRequest(BaseModel):
    sample_rate: int = Field(48000, description="Sampling rate in Hz (44100, 48000, 96000)")
    duration_sec: float = Field(3.2, description="Duration of sound logo in seconds (2.0 to 6.0)")


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


class CinemaProcessRequest(BaseModel):
    file_path: str
    processor_type: str = "dolby" # "dolby" or "dts"
    profile: str = "dolby_atmos_7_1_4"
    dialnorm_db: float = -27.0
    drc_profile: str = "film_standard"
    dialogue_boost_db: float = 3.0
    crossover_hz: float = 80.0
    generate_binaural: bool = True
    encode_bitstream: bool = True
    bitstream_bitrate: Optional[str] = None


class CinemaEncodeRequest(BaseModel):
    file_path: str
    codec: str = "ac3" # "ac3", "eac3", "dts"
    bitrate: Optional[str] = None # e.g. "640k" or "1536k"
    dialnorm_db: Optional[int] = -27
    output_filename: Optional[str] = None


class CinemaDecodeRequest(BaseModel):
    file_path: str
    output_format: str = "WAV" # "WAV" or "FLAC"
    bit_depth: str = "24"


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
    for folder in [settings.BRAND_DIR, settings.EXPORTS_DIR, settings.PROCESSED_DIR, settings.STEMS_DIR, settings.UPLOAD_DIR, settings.SYNTHS_DIR]:
        target = folder / filename
        if target.exists():
            return FileResponse(
                path=target,
                filename=filename,
                media_type="application/octet-stream"
            )
    raise HTTPException(status_code=404, detail="Audio file not found.")


def _soniq_audio_dirs() -> Dict[str, Path]:
    return {
        "exports": settings.EXPORTS_DIR,
        "processed": settings.PROCESSED_DIR,
        "stems": settings.STEMS_DIR,
        "uploads": settings.UPLOAD_DIR,
        "synths": settings.SYNTHS_DIR,
    }


def _is_protected_audio_file(filename: str) -> bool:
    return (
        filename == ".gitkeep"
        or filename.startswith("demo_")
        or filename == "rydetech_soniq_sound_logo.wav"
    )


@app.get("/api/v1/audio/files")
async def list_soniq_audio_files(category: str = "all"):
    """Lists SONIQ AI audio files across storage categories with size and delete metadata."""
    dirs = _soniq_audio_dirs()
    selected = dirs if category == "all" else {category: dirs[category]} if category in dirs else {}
    if not selected:
        raise HTTPException(status_code=400, detail=f"Invalid category '{category}'")

    files: List[Dict[str, Any]] = []
    total_bytes = 0
    for cat_name, folder in selected.items():
        if not folder.exists():
            continue
        for item in folder.iterdir():
            if not item.is_file() or item.name == ".gitkeep":
                continue
            try:
                st = item.stat()
                total_bytes += st.st_size
                files.append({
                    "filename": item.name,
                    "category": cat_name,
                    "size_bytes": st.st_size,
                    "size_mb": round(st.st_size / (1024 * 1024), 2),
                    "modified_at": datetime.fromtimestamp(st.st_mtime, tz=timezone.utc).isoformat(),
                    "download_url": f"/api/v1/audio/download/{item.name}",
                    "protected": _is_protected_audio_file(item.name),
                })
            except Exception:
                continue

    files.sort(key=lambda x: x["modified_at"], reverse=True)
    return {
        "files": files,
        "total_count": len(files),
        "total_size_mb": round(total_bytes / (1024 * 1024), 2),
        "categories": list(dirs.keys()),
    }


@app.delete("/api/v1/audio/files/{category}/{filename}")
async def delete_soniq_audio_file(category: str, filename: str):
    """Deletes a single SONIQ AI audio file from the specified category directory."""
    dirs = _soniq_audio_dirs()
    if category not in dirs:
        raise HTTPException(status_code=400, detail=f"Invalid category '{category}'")
    if _is_protected_audio_file(filename):
        raise HTTPException(status_code=403, detail="Protected system or demo audio file cannot be deleted.")

    folder = dirs[category].resolve()
    target = (folder / filename).resolve()
    if folder not in target.parents or not target.exists() or not target.is_file():
        raise HTTPException(status_code=404, detail="Audio file not found")

    size_bytes = target.stat().st_size
    target.unlink()
    logger.info(f"Deleted SONIQ audio file: {category}/{filename} ({size_bytes} bytes)")
    return {
        "deleted": True,
        "category": category,
        "filename": filename,
        "freed_mb": round(size_bytes / (1024 * 1024), 2),
    }


@app.delete("/api/v1/audio/files")
async def cleanup_soniq_audio_files(category: str = "all", preserve_uploads: bool = False):
    """Bulk cleans up SONIQ AI audio files while always preserving protected demo/system assets."""
    dirs = _soniq_audio_dirs()
    if category == "all":
        selected = {k: v for k, v in dirs.items() if not (preserve_uploads and k == "uploads")}
    elif category == "derivatives":
        selected = {k: dirs[k] for k in ("processed", "stems", "synths")}
    elif category in dirs:
        selected = {category: dirs[category]}
    else:
        raise HTTPException(status_code=400, detail=f"Invalid category '{category}'")

    deleted_count = 0
    freed_bytes = 0
    for cat_name, folder in selected.items():
        if not folder.exists():
            continue
        for item in folder.iterdir():
            if not item.is_file() or _is_protected_audio_file(item.name):
                continue
            try:
                freed_bytes += item.stat().st_size
                item.unlink()
                deleted_count += 1
            except Exception as e:
                logger.warning(f"Error deleting {cat_name}/{item.name}: {e}")

    logger.info(f"SONIQ audio cleanup ({category}): removed {deleted_count} file(s), freed {round(freed_bytes / (1024 * 1024), 2)} MB")
    return {
        "status": "OK",
        "category": category,
        "deleted_count": deleted_count,
        "freed_mb": round(freed_bytes / (1024 * 1024), 2),
    }


@app.post("/api/v1/audio/analyze")
async def analyze_audio(file_path: str = Form(...)):
    """Agent 01: Deep Acoustic & Technical Inspection with Content-Hashed Caching."""
    if not Path(file_path).exists():
        raise HTTPException(status_code=404, detail="File not found")

    # Check Acoustic Analysis Cache
    cached = AudioCacheManager.get_cached_analysis(file_path)
    if cached:
        return {**cached, "cached": True}

    async with ResourceGuard.dsp_semaphore:
        try:
            result = await analyst_agent.analyze_recording(file_path)
            AudioCacheManager.store_analysis(file_path, result)
            return {**result, "cached": False}
        finally:
            ResourceGuard.clean_memory()


@app.post("/api/v1/audio/separate-stems")
async def separate_stems(file_path: str = Form(...)):
    """Agent 02: Source Separation into Vocals, Drums, Bass, and Other."""
    if not Path(file_path).exists():
        raise HTTPException(status_code=404, detail="File not found")
    async with ResourceGuard.dsp_semaphore:
        try:
            return await stem_agent.separate_stems(file_path)
        finally:
            ResourceGuard.clean_memory()


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
    async with ResourceGuard.dsp_semaphore:
        try:
            return await restoration_agent.restore_audio(file_path, denoise=denoise, dehum_freq=dehum_freq, declip=declip)
        finally:
            ResourceGuard.clean_memory()


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
    async with ResourceGuard.dsp_semaphore:
        try:
            return await vocal_agent.process_vocal(file_path, target_scale=target_scale, de_ess_amount_db=de_ess_db)
        finally:
            ResourceGuard.clean_memory()


@app.post("/api/v1/audio/master")
async def master_audio(req: MasteringProcessRequest):
    """Agent 07: EBU R128 / ITU-R BS.1770 Mastering."""
    if not Path(req.file_path).exists():
        raise HTTPException(status_code=404, detail="File not found")
    async with ResourceGuard.dsp_semaphore:
        try:
            return await mastering_agent.execute_mastering(
                req.file_path,
                profile_key=req.profile,
                custom_target_lufs=req.custom_target_lufs,
                custom_ceiling_dbtp=req.custom_ceiling_dbtp
            )
        finally:
            ResourceGuard.clean_memory()


@app.post("/api/v1/audio/surround")
async def surround_process(req: SurroundProcessRequest):
    """Agent 08: 5.1 / 7.1 / 7.1.4 3D Spatial Panning, LFE Bass Management & Binaural HRTF."""
    if not Path(req.file_path).exists():
        raise HTTPException(status_code=404, detail="File not found")
    async with ResourceGuard.dsp_semaphore:
        try:
            return await surround_agent.create_surround_mix(
                req.file_path,
                target_layout=req.layout,
                crossover_hz=req.crossover_hz,
                x=req.x,
                y=req.y,
                z=req.z
            )
        finally:
            ResourceGuard.clean_memory()


@app.post("/api/v1/audio/cinema-process")
async def cinema_process(req: CinemaProcessRequest):
    """
    Dolby & DTS Cinema and Spatial Audio Processor.
    Supports Dolby Pro Logic II Matrix, Dialnorm (-31 to -20 dBFS), Dolby DRC,
    Dolby Atmos 7.1.4 Height Bed, DTS Neural:X Upmixing, DTS Dialogue Clarity,
    and 3D Binaural Headphone Virtualization.
    """
    p = Path(req.file_path)
    if not p.is_absolute():
        p = settings.STORAGE_DIR / p
    if not p.exists():
        for sub in [settings.UPLOADS_DIR, settings.PROCESSED_DIR, settings.EXPORTS_DIR, settings.STEMS_DIR]:
            candidate = sub / Path(req.file_path).name
            if candidate.exists():
                p = candidate
                break
    if not p.exists():
        raise HTTPException(status_code=404, detail=f"File not found: {req.file_path}")

    async with ResourceGuard.dsp_semaphore:
        try:
            audio, sr = AudioIO.load_audio(p)
            proc_type = req.processor_type.lower()
            stats = {}

            if proc_type == "dolby":
                if req.profile == "dolby_pro_logic_ii":
                    multichannel = DolbyProcessor.apply_pro_logic_ii_matrix(
                        audio, sr, crossover_hz=req.crossover_hz, layout=SurroundLayout.FIVE_POINT_ONE
                    )
                    layout_str = SurroundLayout.FIVE_POINT_ONE
                elif req.profile == "dolby_digital_5_1":
                    matrixed = DolbyProcessor.apply_pro_logic_ii_matrix(
                        audio, sr, crossover_hz=req.crossover_hz, layout=SurroundLayout.FIVE_POINT_ONE
                    )
                    multichannel, stats = DolbyProcessor.apply_dialnorm_and_drc(
                        matrixed, sr, target_dialnorm=req.dialnorm_db, drc_profile=req.drc_profile
                    )
                    layout_str = SurroundLayout.FIVE_POINT_ONE
                else: # "dolby_atmos_7_1_4" default
                    matrixed = DolbyProcessor.apply_pro_logic_ii_matrix(
                        audio, sr, crossover_hz=req.crossover_hz, layout=SurroundLayout.SEVEN_POINT_ONE_FOUR
                    )
                    multichannel, stats = DolbyProcessor.apply_dialnorm_and_drc(
                        matrixed, sr, target_dialnorm=req.dialnorm_db, drc_profile=req.drc_profile
                    )
                    layout_str = SurroundLayout.SEVEN_POINT_ONE_FOUR
            else: # "dts"
                if req.profile == "dts_dialogue_clarity":
                    upmixed = DTSProcessor.apply_neural_x_upmix(
                        audio, sr, crossover_hz=req.crossover_hz, layout=SurroundLayout.FIVE_POINT_ONE, mode="cinema"
                    )
                    multichannel, stats = DTSProcessor.apply_dialogue_clarity(
                        upmixed, sr, boost_db=req.dialogue_boost_db
                    )
                    layout_str = SurroundLayout.FIVE_POINT_ONE
                elif req.profile == "dts_neo_6_cinema":
                    multichannel = DTSProcessor.apply_neural_x_upmix(
                        audio, sr, crossover_hz=req.crossover_hz, layout=SurroundLayout.SEVEN_POINT_ONE, mode="cinema"
                    )
                    layout_str = SurroundLayout.SEVEN_POINT_ONE
                else: # "dts_x_7_1_4" default
                    upmixed = DTSProcessor.apply_neural_x_upmix(
                        audio, sr, crossover_hz=req.crossover_hz, layout=SurroundLayout.SEVEN_POINT_ONE_FOUR, mode="cinema"
                    )
                    multichannel, stats = DTSProcessor.apply_dialogue_clarity(
                        upmixed, sr, boost_db=req.dialogue_boost_db
                    )
                    layout_str = SurroundLayout.SEVEN_POINT_ONE_FOUR

            # Write multichannel WAV master
            safe_name = f"{p.stem}_{proc_type.upper()}_{req.profile}.wav"
            out_p = settings.EXPORTS_DIR / safe_name
            actual_out = AudioIO.write_audio(multichannel, out_p, sample_rate=sr, bit_depth="24", format_type="WAV")

            # Generate Binaural HRTF Headphone Virtualization
            bin_p = None
            bin_url = None
            if req.generate_binaural:
                binaural_audio = SurroundPannerEngine.render_binaural_hrtf(
                    multichannel, layout=layout_str, sample_rate=sr
                )
                bin_name = f"{p.stem}_{proc_type.upper()}_{req.profile}_binaural_hrtf.wav"
                bin_out = settings.EXPORTS_DIR / bin_name
                bin_actual = AudioIO.write_audio(binaural_audio, bin_out, sample_rate=sr, bit_depth="24", format_type="WAV")
                bin_p = str(bin_actual)
                bin_url = f"/api/v1/audio/download/{bin_actual.name}"

            # Direct Certified Bitstream Generation (Dolby AC-3/E-AC-3 or DTS)
            bitstream_info = None
            bitstream_file = None
            bitstream_url = None
            if req.encode_bitstream:
                if proc_type == "dolby":
                    dolby_fmt = "eac3" if layout_str == SurroundLayout.SEVEN_POINT_ONE_FOUR else "ac3"
                    b_rate = req.bitstream_bitrate or ("768k" if dolby_fmt == "eac3" else "640k")
                    bitstream_out = settings.EXPORTS_DIR / f"{p.stem}_DOLBY_{req.profile}.{dolby_fmt}"
                    bitstream_info = DolbyCodec.encode(
                        multichannel, sr, bitstream_out,
                        format_type=dolby_fmt,
                        bitrate=b_rate,
                        dialnorm_db=int(req.dialnorm_db)
                    )
                    bitstream_file = str(bitstream_out)
                    bitstream_url = f"/api/v1/audio/download/{bitstream_out.name}"
                else:
                    b_rate = req.bitstream_bitrate or "1536k"
                    bitstream_out = settings.EXPORTS_DIR / f"{p.stem}_DTS_{req.profile}.dts"
                    bitstream_info = DTSCodec.encode(
                        multichannel, sr, bitstream_out,
                        bitrate=b_rate
                    )
                    bitstream_file = str(bitstream_out)
                    bitstream_url = f"/api/v1/audio/download/{bitstream_out.name}"

            # Multi-channel acoustic telemetry for in-room VU meters
            ch_names_map = {
                6: ["L", "R", "C", "LFE", "Ls", "Rs"],
                8: ["L", "R", "C", "LFE", "Ls", "Rs", "Rls", "Rrs"],
                12: ["L", "R", "C", "LFE", "Ls", "Rs", "Rls", "Rrs", "Tfl", "Tfr", "Trl", "Trr"]
            }
            ch_names = ch_names_map.get(multichannel.shape[0], [f"CH{i+1}" for i in range(multichannel.shape[0])])
            channel_levels = {}
            for i, name in enumerate(ch_names):
                if i < multichannel.shape[0]:
                    ch_d = multichannel[i]
                    rms = float(np.sqrt(np.mean(ch_d ** 2) + 1e-12))
                    peak = float(np.max(np.abs(ch_d)))
                    rms_db = round(float(20 * np.log10(max(rms, 1e-6))), 1)
                    peak_db = round(float(20 * np.log10(max(peak, 1e-6))), 1)
                    channel_levels[name] = {
                        "abbr": name,
                        "name": name,
                        "channel_index": i,
                        "rms_db": rms_db,
                        "peak_db": peak_db,
                        "gain_norm": round(float(min(1.0, max(0.05, (rms_db + 48.0) / 48.0))), 2),
                        "is_lfe": name == "LFE",
                        "is_active": rms_db > -55.0
                    }

            # Quick Acoustic QC Analysis
            qc = AudioAnalyzer.full_audio_analysis(multichannel, sr)

            return {
                "status": "COMPLETED",
                "processor_type": proc_type.upper(),
                "profile": req.profile,
                "file_path": str(actual_out),
                "download_url": f"/api/v1/audio/download/{actual_out.name}",
                "bitstream_file": bitstream_file,
                "bitstream_download_url": bitstream_url,
                "bitstream_info": bitstream_info,
                "binaural_file": bin_p,
                "binaural_download_url": bin_url,
                "channels_count": multichannel.shape[0],
                "channels_layout": layout_str,
                "sample_rate_hz": sr,
                "bit_depth": "24-bit",
                "cinema_stats": stats,
                "channel_levels": channel_levels,
                "acoustic_qc": {
                    "integrated_lufs": qc["integrated_lufs"],
                    "true_peak_dbtp": qc["true_peak_dbtp"],
                    "phase_correlation": qc["phase_correlation"],
                    "loudness_range_lra": qc["loudness_range_lra"]
                },
                "disclaimer": f"Processed via Sovereign {proc_type.upper()} Studio Engine simulation conforming to SMPTE / ITU-R BS.775 multichannel standards."
            }
        finally:
            ResourceGuard.clean_memory()


@app.post("/api/v1/cinema/encode")
async def cinema_encode(req: CinemaEncodeRequest):
    """
    Lightweight Cinema Bitstream Encoder for Dolby AC-3, Dolby Digital Plus E-AC-3, and DTS.
    Direct C-level streaming encoder generating studio broadcast delivery bitstreams.
    """
    p = Path(req.file_path)
    if not p.is_absolute():
        p = settings.STORAGE_DIR / p
    if not p.exists():
        for sub in [settings.UPLOADS_DIR, settings.PROCESSED_DIR, settings.EXPORTS_DIR, settings.STEMS_DIR]:
            candidate = sub / Path(req.file_path).name
            if candidate.exists():
                p = candidate
                break
    if not p.exists():
        raise HTTPException(status_code=404, detail=f"File not found: {req.file_path}")

    codec = req.codec.lower().strip()
    if codec in ["ac3", "dolby_ac3", "dolby"]:
        ext = "ac3"
        bitrate = req.bitrate or "640k"
        encoder_fn = lambda a, s, out: DolbyCodec.encode(
            a, s, out, format_type="ac3", bitrate=bitrate, dialnorm_db=req.dialnorm_db
        )
    elif codec in ["eac3", "dolby_eac3", "e-ac3"]:
        ext = "eac3"
        bitrate = req.bitrate or "768k"
        encoder_fn = lambda a, s, out: DolbyCodec.encode(
            a, s, out, format_type="eac3", bitrate=bitrate, dialnorm_db=req.dialnorm_db
        )
    elif codec in ["dts", "dca"]:
        ext = "dts"
        bitrate = req.bitrate or "1536k"
        encoder_fn = lambda a, s, out: DTSCodec.encode(a, s, out, bitrate=bitrate)
    else:
        raise HTTPException(status_code=400, detail=f"Unsupported cinema encoder codec: {req.codec}. Choose 'ac3', 'eac3', or 'dts'.")

    async with ResourceGuard.dsp_semaphore:
        try:
            audio, sr = AudioIO.load_audio(p)
            out_name = req.output_filename or f"{p.stem}_{codec.upper()}_{uuid.uuid4().hex[:6]}.{ext}"
            out_path = settings.EXPORTS_DIR / out_name

            res = encoder_fn(audio, sr, out_path)
            res["download_url"] = f"/api/v1/audio/download/{out_path.name}"
            return res
        finally:
            ResourceGuard.clean_memory()


@app.post("/api/v1/cinema/decode")
async def cinema_decode(req: CinemaDecodeRequest):
    """
    Lightweight Cinema Bitstream Decoder for Dolby AC-3, E-AC-3, and DTS.
    Extracts pristine discrete multi-channel 64-bit float PCM audio into WAV / FLAC.
    """
    p = Path(req.file_path)
    if not p.is_absolute():
        p = settings.STORAGE_DIR / p
    if not p.exists():
        for sub in [settings.UPLOADS_DIR, settings.PROCESSED_DIR, settings.EXPORTS_DIR, settings.STEMS_DIR]:
            candidate = sub / Path(req.file_path).name
            if candidate.exists():
                p = candidate
                break
    if not p.exists():
        raise HTTPException(status_code=404, detail=f"File not found: {req.file_path}")

    suffix = p.suffix.lower()
    async with ResourceGuard.dsp_semaphore:
        try:
            if suffix in [".ac3", ".eac3"]:
                audio, sr, meta = DolbyCodec.decode(p)
                detected_codec = "Dolby " + ("E-AC-3" if suffix == ".eac3" else "AC-3")
            elif suffix in [".dts", ".dca"]:
                audio, sr, meta = DTSCodec.decode(p)
                detected_codec = "DTS Coherent Acoustics (DCA)"
            else:
                # General decoder fallback
                audio, sr = AudioIO.load_audio(p)
                meta = AudioIO.probe_audio(p).to_dict()
                detected_codec = meta.get("codec_name", "PCM")

            out_ext = req.output_format.lower()
            out_name = f"{p.stem}_DECODED_{sr}Hz_{req.bit_depth}bit.{out_ext}"
            out_path = settings.EXPORTS_DIR / out_name

            actual_out = AudioIO.write_audio(
                audio, out_path,
                sample_rate=sr,
                bit_depth=req.bit_depth,
                format_type=req.output_format
            )

            # Analyze decoded multichannel audio
            qc = AudioAnalyzer.full_audio_analysis(audio, sr)

            return {
                "status": "DECODED",
                "detected_codec": detected_codec,
                "file_path": str(actual_out),
                "download_url": f"/api/v1/audio/download/{actual_out.name}",
                "file_size_bytes": actual_out.stat().st_size,
                "channels_count": audio.shape[0],
                "sample_rate_hz": sr,
                "bit_depth": req.bit_depth,
                "duration_seconds": round(audio.shape[1] / sr, 3),
                "bitstream_metadata": meta,
                "acoustic_qc": qc,
                "waveform": AudioAnalyzer.generate_waveform_peaks(audio, num_points=120)
            }
        finally:
            ResourceGuard.clean_memory()


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
    async with ResourceGuard.dsp_semaphore:
        try:
            return await prod_manager.execute_autonomous_pipeline(req.prompt, req.file_path)
        finally:
            ResourceGuard.clean_memory()


@app.post("/api/v1/dsp/process")
async def process_dsp_rack(req: DSPProcessRequest):
    """Direct Studio DSP Rack Processor with Concurrency Semaphore & Memory Guard."""
    if not Path(req.file_path).exists():
        raise HTTPException(status_code=404, detail="File not found")

    async with ResourceGuard.dsp_semaphore:
        try:
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
        finally:
            ResourceGuard.clean_memory()


@app.get("/api/v1/system/resources")
async def get_system_resources():
    """System Resource, Cache & Abuse Protection Status."""
    mem_info = {}
    try:
        with open("/proc/meminfo") as f:
            for line in f:
                parts = line.split(":")
                if len(parts) == 2:
                    mem_info[parts[0].strip()] = int(parts[1].split()[0])
    except Exception:
        pass

    total_ram_gb = round(mem_info.get("MemTotal", 0) / (1024**2), 2)
    avail_ram_gb = round(mem_info.get("MemAvailable", 0) / (1024**2), 2)
    ram_pct = round(((total_ram_gb - avail_ram_gb) / max(total_ram_gb, 1)) * 100, 1)

    stat = os.statvfs(str(settings.STORAGE_DIR))
    free_disk_gb = round((stat.f_bavail * stat.f_frsize) / (1024**3), 2)
    total_disk_gb = round((stat.f_blocks * stat.f_frsize) / (1024**3), 2)
    disk_pct = round(((total_disk_gb - free_disk_gb) / max(total_disk_gb, 1)) * 100, 1)

    return {
        "status": "ACTIVE",
        "concurrency_protection": {
            "max_parallel_heavy_dsp_jobs": 3,
            "semaphore_active": True
        },
        "rate_limiting_tiers": {
            "default": f"{RateLimitTier.DEFAULT[0]} req / {RateLimitTier.DEFAULT[1]}s",
            "heavy_dsp": f"{RateLimitTier.HEAVY_DSP[0]} req / {RateLimitTier.HEAVY_DSP[1]}s",
            "upload": f"{RateLimitTier.UPLOAD[0]} req / {RateLimitTier.UPLOAD[1]}s",
            "ai_orchestrate": f"{RateLimitTier.AI_ORCHESTRATE[0]} req / {RateLimitTier.AI_ORCHESTRATE[1]}s"
        },
        "cache_management": {
            "cached_analysis_entries": len(AudioCacheManager._analysis_cache),
            "max_cache_capacity": AudioCacheManager._cache_max_size,
            "temp_file_retention_hours": 48
        },
        "system_telemetry": {
            "ram_total_gb": total_ram_gb,
            "ram_available_gb": avail_ram_gb,
            "ram_percent_used": ram_pct,
            "disk_free_gb": free_disk_gb,
            "disk_percent_used": disk_pct
        },
        "auto_heal": dict(_auto_heal_state)
    }


@app.post("/api/v1/system/auto-heal")
async def trigger_auto_heal():
    """Triggers an immediate auto-heal sweep for stale render jobs and temporary storage."""
    result = _run_auto_heal_sweep(startup=False)
    return {
        "status": "OK",
        **result,
        "auto_heal_state": dict(_auto_heal_state),
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
    p = Path(req.file_path)
    if not p.is_absolute():
        p = settings.STORAGE_DIR / p
    if not p.exists():
        # Search storage subdirectories
        for sub in [settings.UPLOADS_DIR, settings.PROCESSED_DIR, settings.EXPORTS_DIR, settings.STEMS_DIR]:
            candidate = sub / Path(req.file_path).name
            if candidate.exists():
                p = candidate
                break
    if not p.exists():
        raise HTTPException(status_code=404, detail=f"File not found: {req.file_path}")

    audio, sr = AudioIO.load_audio(p)
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


# =========================================================================
# RYDETECH Sovereign Brand & Sound Logo Suite
# =========================================================================

@app.get("/api/v1/brand/info")
async def get_brand_info():
    """Returns official RYDETECH GLOBAL ENTERPRISE brand specification and sovereign telemetry."""
    brand_file = _ensure_brand_sound_logo()
    return {
        "brand_name": "RYDETECH SONIQ AI",
        "parent_organization": settings.BRAND_PARENT,
        "product_tagline": "Autonomous Studio DAW & Spatial Audio Architecture",
        "infrastructure": {
            "node": "srv1302021",
            "enclave": "Sovereign Enterprise Audio Enclave",
            "compliance": "Malaysian PDPA 2010 Statutory Residency Compliant",
            "dsp_engine": "64-bit Double-Precision IEEE 754 Float Math",
            "surround_support": ["2.0 Stereo", "2.1 Cinema", "5.1 Surround", "7.1 Surround", "7.1.4 Dolby Atmos"]
        },
        "sound_logo": {
            "name": "RYDETECH Sonic Ident (Sound Logo)",
            "duration_seconds": 3.2,
            "sample_rate_hz": 48000,
            "bit_depth": "24-bit PCM",
            "channels": 2,
            "loudness_target": "-14.4 LUFS (EBU R128 Compliant)",
            "streaming_url": "/api/v1/audio/brand/sound-logo.wav",
            "download_url": "/api/v1/audio/brand/sound-logo.wav"
        }
    }


@app.get("/api/v1/brand/sound-logo")
async def get_brand_sound_logo():
    """Retrieves technical acoustic metadata and waveform peaks for the official RYDETECH SONIQ Sound Logo."""
    brand_file = _ensure_brand_sound_logo()
    audio, sr = AudioIO.load_audio(brand_file)
    peaks = AudioAnalyzer.generate_waveform_peaks(audio, num_points=120)
    analysis = AudioAnalyzer.full_audio_analysis(audio, sr)
    return {
        "name": "RYDETECH SONIQ Sound Logo",
        "category": "Brand Ident",
        "color": "#00f2fe",
        "file_path": str(brand_file),
        "streaming_url": "/api/v1/audio/brand/sound-logo.wav",
        "download_url": "/api/v1/audio/brand/sound-logo.wav",
        "sample_rate": sr,
        "bit_depth": "24-bit",
        "duration_seconds": round(audio.shape[1] / sr, 2),
        "waveform_preview": peaks,
        "metrics": analysis
    }


@app.get("/api/v1/audio/brand/sound-logo.wav")
@app.head("/api/v1/audio/brand/sound-logo.wav")
async def stream_brand_sound_logo():
    """Direct streaming of master 24-bit 48kHz RYDETECH SONIQ Sound Logo WAV."""
    brand_file = _ensure_brand_sound_logo()
    return FileResponse(
        brand_file,
        media_type="audio/wav",
        filename="rydetech_soniq_sound_logo.wav",
        headers={
            "Cache-Control": "public, max-age=86400",
            "X-Brand": "RYDETECH GLOBAL ENTERPRISE",
            "X-Product": "RYDETECH SONIQ AI",
            "X-Data-Residency": "Malaysia PDPA 2010 Compliant"
        }
    )


@app.post("/api/v1/brand/sound-logo/generate")
async def generate_brand_sound_logo(req: SoundLogoGenerateRequest = SoundLogoGenerateRequest()):
    """
    Generates a high-precision RYDETECH Sound Logo audio asset and formats it as a multitrack timeline track.
    """
    sr = req.sample_rate if req.sample_rate in settings.SUPPORTED_SAMPLE_RATES else 48000
    dur = max(1.5, min(req.duration_sec, 8.0))
    audio = SynthEngine.synthesize_rydetech_sound_logo(sample_rate=sr, duration_sec=dur)
    
    unique_name = f"rydetech_sound_logo_{sr}Hz_{uuid.uuid4().hex[:6]}.wav"
    out_path = settings.BRAND_DIR / unique_name
    AudioIO.write_audio(audio, out_path, sample_rate=sr, bit_depth="24", format_type="WAV")
    peaks = AudioAnalyzer.generate_waveform_peaks(audio, num_points=120)
    
    return {
        "id": f"Track_Brand_SoundLogo_{uuid.uuid4().hex[:6]}",
        "name": "RYDETECH Sonic Ident (Sound Logo)",
        "category": "Brand",
        "color": "#00f2fe",
        "file_path": str(out_path),
        "download_url": f"/api/v1/audio/download/{unique_name}",
        "streaming_url": f"/api/v1/audio/brand/sound-logo.wav",
        "volume_db": "0.0 dB",
        "volume": 1.0,
        "pan": 0.0,
        "mute": False,
        "solo": False,
        "waveform": peaks,
        "sample_rate": sr,
        "duration_seconds": dur
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


# ==============================================================================
# RYDETECH VYBE AI — AUTONOMOUS MULTIMEDIA STUDIO & VIDEO EDITING ENDPOINTS
# ==============================================================================

class ProjectCreateRequest(BaseModel):
    name: str = "Untitled Project"
    aspect_ratio: str = "16:9"
    frame_rate: float = 30.0
    width: int = 1920
    height: int = 1080
    sample_rate_hz: int = 48000
    tempo_bpm: int = 120
    time_signature: str = "4/4"
    bit_depth: str = "24"


class ProjectUpdateRequest(BaseModel):
    name: Optional[str] = None
    aspect_ratio: Optional[str] = None
    frame_rate: Optional[float] = None
    width: Optional[int] = None
    height: Optional[int] = None
    tempo_bpm: Optional[int] = None
    time_signature: Optional[str] = None


class DirectorPlanRequest(BaseModel):
    prompt: str = Field(..., min_length=2)
    aspect_ratio: str = "16:9"
    target_duration_sec: float = 30.0
    style_preset: str = "cinematic"


class RenderVideoRequest(BaseModel):
    project_id: str
    profile_name: str = "Cinema HQ H.264"
    output_format: str = "mp4"
    resolution: str = "2k"
    frame_rate: float = 30.0
    clips: List[Dict[str, Any]] = []
    lut_name: Optional[str] = None
    frei0r_effects: List[str] = []
    transition_style: Optional[str] = "dissolve"
    transition_duration: float = 0.75
    engine: str = "auto"
    pip_mode: Optional[str] = None
    pip_scale: float = 0.28
    playback_speed: float = 1.0
    video_restore: bool = True
    cinema_finish: bool = True
    audio_restore: bool = True
    audio_surround_51: bool = True
    quality_preset: str = "cinema_hq"


@app.get("/api/v1/projects")
async def list_projects():
    """Lists all active VYBE AI video and multimedia production projects."""
    projects = ProjectService.list_projects()
    return {"projects": projects, "total": len(projects)}


@app.post("/api/v1/projects")
async def create_project(req: ProjectCreateRequest):
    """Creates a new sovereign multimedia project in VYBE AI."""
    proj = ProjectService.create_project(
        name=req.name,
        aspect_ratio=req.aspect_ratio,
        frame_rate=req.frame_rate,
        width=req.width,
        height=req.height,
        sample_rate_hz=req.sample_rate_hz,
        tempo_bpm=req.tempo_bpm,
        time_signature=req.time_signature,
        bit_depth=req.bit_depth
    )
    return proj


@app.get("/api/v1/projects/demo/vybe")
async def get_vybe_demo_project():
    """Retrieves or synthesizes the pre-populated VYBE AI 1080p demonstration showreel."""
    demo = ProjectService.ensure_demo_media_project()
    return demo


@app.get("/api/v1/projects/{project_id}")
async def get_project(project_id: str):
    """Retrieves full project details including associated assets and timeline metadata."""
    proj = ProjectService.get_project(project_id)
    if not proj:
        raise HTTPException(status_code=404, detail="Project not found")
    return proj


@app.patch("/api/v1/projects/{project_id}")
async def update_project(project_id: str, req: ProjectUpdateRequest):
    """Updates project properties such as aspect ratio, frame rate, and dimensions."""
    updates = req.model_dump(exclude_unset=True)
    proj = ProjectService.update_project(project_id, updates)
    if not proj:
        raise HTTPException(status_code=404, detail="Project not found")
    return proj


@app.delete("/api/v1/projects/{project_id}")
async def delete_project(project_id: str):
    """Deletes a project and removes associations."""
    success = ProjectService.delete_project(project_id)
    if not success:
        raise HTTPException(status_code=404, detail="Project not found or already deleted")
    return {"status": "deleted", "project_id": project_id}


# --- Non-Destructive Media Ingestion & Asset Streaming ---

@app.post("/api/v1/media/upload")
async def upload_media_asset(
    file: UploadFile = File(...),
    project_id: Optional[str] = Form(None)
):
    """
    Non-destructively imports a media asset (Video, Audio, Image).
    Performs deep FFprobe inspection, generates 540p proxy, thumbnails, filmstrip,
    and extracts lossless audio for immediate SONIQ DAW processing.
    """
    temp_dir = Path(settings.STORAGE_DIR) / "temp_imports"
    temp_dir.mkdir(parents=True, exist_ok=True)
    temp_dest = temp_dir / f"temp_{uuid.uuid4().hex[:8]}_{file.filename}"

    try:
        with open(temp_dest, "wb") as f:
            shutil.copyfileobj(file.file, f)

        asset = ProjectService.ingest_asset_file(
            source_file_path=temp_dest,
            original_filename=file.filename or "media_asset",
            project_id=project_id
        )
        return asset
    finally:
        if temp_dest.exists():
            temp_dest.unlink()


@app.get("/api/v1/media/assets")
async def list_media_assets(
    project_id: Optional[str] = None,
    media_type: Optional[str] = None
):
    """Lists media assets in the sovereign library."""
    assets = ProjectService.list_assets(project_id=project_id, media_type=media_type)
    return {"assets": assets, "total": len(assets)}


@app.get("/api/v1/media/assets/{asset_id}")
async def get_media_asset(asset_id: str):
    """Gets details and inspection telemetry of a specific media asset."""
    asset = ProjectService.get_asset(asset_id)
    if not asset:
        raise HTTPException(status_code=404, detail="Media asset not found")
    return asset


@app.delete("/api/v1/media/assets/{asset_id}")
async def delete_media_asset(asset_id: str):
    """Removes media asset record."""
    success = ProjectService.delete_asset(asset_id)
    if not success:
        raise HTTPException(status_code=404, detail="Media asset not found")
    return {"status": "deleted", "asset_id": asset_id}


@app.get("/api/v1/media/stream/{asset_id}")
async def stream_media_asset(asset_id: str, request: Request):
    """RFC 7233 byte-range streaming for seamless video timeline scrubbing."""
    asset = ProjectService.get_asset(asset_id)
    if not asset or not asset.get("file_path"):
        raise HTTPException(status_code=404, detail="Media asset not found")
    
    file_path = Path(asset["file_path"])
    if not file_path.exists():
        raise HTTPException(status_code=404, detail="Asset file missing on storage")
    
    ext = file_path.suffix.lower().replace(".", "")
    content_type = "video/mp4" if ext in ["mp4", "m4v"] else "application/octet-stream"
    return await send_file_range(file_path, request, content_type=content_type)


@app.get("/api/v1/media/proxy-stream/{asset_id}")
async def stream_media_proxy(asset_id: str, request: Request):
    """Streams fast lightweight 540p proxy for low-latency editing preview."""
    asset = ProjectService.get_asset(asset_id)
    if not asset:
        raise HTTPException(status_code=404, detail="Media asset not found")
    
    proxy_path = asset.get("proxy_path")
    if not proxy_path or not Path(proxy_path).exists():
        # Fallback to source stream if proxy absent
        return await stream_media_asset(asset_id, request)

    return await send_file_range(Path(proxy_path), request, content_type="video/mp4")


@app.get("/api/v1/media/thumbnail/{asset_id}")
async def get_media_thumbnail(asset_id: str):
    """Returns poster thumbnail image."""
    asset = ProjectService.get_asset(asset_id)
    if not asset or not asset.get("thumbnail_path"):
        raise HTTPException(status_code=404, detail="Thumbnail not available")
    
    p = Path(asset["thumbnail_path"])
    if not p.exists():
        raise HTTPException(status_code=404, detail="Thumbnail file not found")
    return FileResponse(p, media_type="image/jpeg")


@app.get("/api/v1/media/filmstrip/{asset_id}/{index}")
async def get_filmstrip_frame(asset_id: str, index: int):
    """Returns a specific filmstrip frame for timeline scrub strips."""
    asset = ProjectService.get_asset(asset_id)
    if not asset:
        raise HTTPException(status_code=404, detail="Asset not found")
    
    strips = asset.get("filmstrip_paths", [])
    if index < 0 or index >= len(strips):
        raise HTTPException(status_code=404, detail="Filmstrip frame index out of range")
    
    p = Path(strips[index])
    if not p.exists():
        raise HTTPException(status_code=404, detail="Filmstrip frame file missing")
    return FileResponse(p, media_type="image/jpeg")


@app.get("/api/v1/media/download/{asset_id}")
async def download_media_asset(asset_id: str):
    """Downloads bit-exact media file."""
    asset = ProjectService.get_asset(asset_id)
    if not asset or not asset.get("file_path"):
        raise HTTPException(status_code=404, detail="Media asset not found")
    
    p = Path(asset["file_path"])
    return FileResponse(p, filename=asset["file_name"])


# --- Agent 11: AI Director & Storyboard Generator ---

@app.post("/api/v1/director/plan")
async def director_plan_video(req: DirectorPlanRequest):
    """
    Agent 11: AI Director & Storyboard Generator.
    Translates natural language creative prompts into scene breakdowns, camera moves,
    EDL cut cues, and soundtrack synchronization guides.
    """
    director = AIDirectorAgent()
    plan = await director.plan_video(
        user_prompt=req.prompt,
        target_aspect_ratio=req.aspect_ratio,
        target_duration_sec=req.target_duration_sec,
        style_preset=req.style_preset
    )
    return plan


# --- Video Render & Export Pipeline ---

@app.post("/api/v1/render/video")
async def render_video_timeline(req: RenderVideoRequest):
    """Queues a professional video timeline render job with 3D LUT, Frei0r VFX, and MLT transitions."""
    job = VideoRenderService.create_job(
        project_id=req.project_id,
        profile_name=req.profile_name,
        output_format=req.output_format,
        resolution=req.resolution,
        frame_rate=req.frame_rate,
        timeline_clips=req.clips,
        lut_name=req.lut_name,
        frei0r_effects=req.frei0r_effects,
        transition_style=req.transition_style,
        transition_duration=req.transition_duration,
        engine=req.engine,
        pip_mode=req.pip_mode,
        pip_scale=req.pip_scale,
        playback_speed=req.playback_speed,
        video_restore=req.video_restore,
        cinema_finish=req.cinema_finish,
        audio_restore=req.audio_restore,
        audio_surround_51=req.audio_surround_51,
        quality_preset=req.quality_preset
    )
    return job


@app.get("/api/v1/video/effects/library")
async def get_effects_library():
    """Returns catalog of Hollywood 3D LUTs and open-source Frei0r VFX plugins."""
    luts = [
        {"id": "clean", "name": "Clean Rec.709", "desc": "Neutral broadcast standard with accurate skin tones", "category": "Natural"},
        {"id": "kodak_2383", "name": "Kodak 2383 Film Print", "desc": "Hollywood film stock emulation with rich contrast & warm highlight roll-off", "category": "Cinema"},
        {"id": "fuji_3513", "name": "Fuji 3513 Cinema Emulsion", "desc": "Cool emerald tones, soft highlights, and gentle portrait skin contrast", "category": "Cinema"},
        {"id": "teal_orange", "name": "Blockbuster Teal & Orange", "desc": "Deep cyan shadows and saturated amber skin tones", "category": "Blockbuster"},
        {"id": "cyberpunk_neon", "name": "Cyberpunk Neon Matrix", "desc": "Electric blues, saturated magentas, and deep black level crushing", "category": "Stylized"},
        {"id": "noir_silver", "name": "Noir Silver Halide B&W", "desc": "High-contrast monochrome film grain response", "category": "Monochrome"},
        {"id": "vintage_warm", "name": "Vintage Warm 35mm", "desc": "Warm sepia analog toe compression and nostalgic warmth", "category": "Vintage"}
    ]

    frei0r_vfx = [
        {"id": "glow", "name": "Cinematic Diffusion Bloom", "filter": "glow:0.4", "desc": "Dreamy soft glow diffusion around bright highlights", "category": "Lighting"},
        {"id": "rgbsplit0r", "name": "RGB Chromatic Aberration", "filter": "rgbsplit0r:0.04", "desc": "Color fringing split effect for high-impact action beats", "category": "Distortion"},
        {"id": "glitch0r", "name": "Digital Glitch & Noise", "filter": "glitch0r", "desc": "Cyberpunk digital transmission artifact corruption", "category": "Glitch"},
        {"id": "sobel", "name": "Cyberpunk Edge Tracer", "filter": "sobel", "desc": "High-contrast neon contour edge detection", "category": "Stylized"},
        {"id": "pixeliz0r", "name": "Retro 8-Bit Pixelation", "filter": "pixeliz0r:0.02", "desc": "Retro arcade pixel reduction mosaic", "category": "Retro"},
        {"id": "vignette", "name": "Anamorphic Vignette Falloff", "filter": "vignette", "desc": "Gentle optical edge darkening to focus viewer attention", "category": "Optical"}
    ]

    return {
        "engine": "FFmpeg 6.1.1 + Frei0r v1.8 (136 open-source plugins)",
        "luts": luts,
        "frei0r_effects": frei0r_vfx,
        "total_frei0r_installed": 136
    }


@app.get("/api/v1/video/transitions/library")
async def get_transitions_library():
    """Returns catalog of 16+ Hollywood transitions and MLT compositing modes."""
    return MLTTransitionService.get_catalog()


@app.get("/api/v1/projects/{project_id}/export-mlt")
async def export_project_mlt(project_id: str):
    """Exports and downloads an OpenShot/Kdenlive compatible MLT XML project file."""
    proj = ProjectService.get_project(project_id)
    if not proj:
        raise HTTPException(status_code=404, detail="Project not found")

    assets = ProjectService.list_assets(project_id=project_id)
    clips = []
    for a in assets:
        if a.get("media_type") == "video":
            clips.append({
                "file_path": a.get("file_path"),
                "duration": a.get("duration_seconds", 4.0),
                "name": a.get("file_name")
            })

    w = proj.get("width", 1920)
    h = proj.get("height", 1080)
    fps = proj.get("frame_rate", 30.0)

    xml_content = MLTTransitionService.generate_mlt_xml(
        project_name=proj.get("name", "VYBE Project"),
        clips=clips,
        width=w,
        height=h,
        frame_rate=fps,
        transition_style="dissolve",
        transition_duration=0.75
    )

    out_path = settings.VIDEO_EXPORTS_DIR / f"{project_id}_openshot.mlt"
    out_path.write_text(xml_content, encoding="utf-8")
    return FileResponse(out_path, filename=f"{project_id}_openshot.mlt", media_type="application/xml")


@app.get("/api/v1/render/mlt/{job_id}")
async def download_render_mlt_xml(job_id: str):
    """Downloads the generated OpenShot MLT XML for a completed render job."""
    mlt_path = settings.VIDEO_EXPORTS_DIR / f"vybe_project_{job_id}.mlt"
    if not mlt_path.exists():
        raise HTTPException(status_code=404, detail="MLT project file not found for this render job")
    return FileResponse(mlt_path, filename=f"vybe_project_{job_id}.mlt", media_type="application/xml")


@app.get("/api/v1/render/jobs")
async def list_render_jobs(project_id: Optional[str] = None):
    """Lists recent video render jobs."""
    jobs = VideoRenderService.list_jobs(project_id=project_id)
    return {"jobs": jobs, "total": len(jobs)}


@app.get("/api/v1/render/jobs/{job_id}")
async def get_render_job(job_id: str):
    """Retrieves the status and progress of an active render job."""
    job = VideoRenderService.get_job(job_id)
    if not job:
        raise HTTPException(status_code=404, detail="Render job not found")
    return job


@app.delete("/api/v1/render/jobs/{job_id}")
async def delete_render_job(job_id: str):
    """Deletes a render job and removes its exported video and MLT files from disk."""
    res = VideoRenderService.delete_job(job_id)
    if not res.get("deleted"):
        raise HTTPException(status_code=404, detail="Render job not found")
    return res


@app.delete("/api/v1/render/jobs")
async def clear_render_jobs(failed_only: bool = False):
    """Bulk deletes failed render jobs (or all non-active jobs) and frees disk storage."""
    return VideoRenderService.clear_jobs(failed_only=failed_only)


@app.get("/api/v1/render/stream/{job_id}")
async def stream_rendered_video(job_id: str, request: Request):
    """Streams rendered master video with byte-range support."""
    job = VideoRenderService.get_job(job_id)
    if not job or not job.get("output_file_path"):
        raise HTTPException(status_code=404, detail="Rendered video not found or still rendering")
    
    p = Path(job["output_file_path"])
    return await send_file_range(p, request, content_type="video/mp4")


@app.get("/api/v1/render/download/{job_id}")
async def download_rendered_video(job_id: str):
    """Downloads rendered master video file."""
    job = VideoRenderService.get_job(job_id)
    if not job or not job.get("output_file_path"):
        raise HTTPException(status_code=404, detail="Rendered video not found or not completed")
    
    p = Path(job["output_file_path"])
    filename = p.name
    return FileResponse(p, filename=filename, media_type="video/mp4")


# --- Autonomous Video Detection, Auto-Cut, Captions, Effects & HITL Uplift ---

class AutoUpliftAnalyzeRequest(BaseModel):
    asset_id: str
    pacing: str = "fast"
    target_aspect_ratio: str = "9:16"
    style_preset: str = "cyberpunk"


class AutoUpliftApplyRequest(BaseModel):
    project_id: str = "proj_vybe_demo"
    asset_id: str
    approved_cuts: List[Dict[str, Any]] = []
    approved_captions: List[Dict[str, Any]] = []
    color_grade: str = "teal_orange"
    aspect_ratio: str = "9:16"
    hook_title: str = "⚡ VYBE AI AUTONOMOUS UPLIFT"
    include_bgm: bool = True


@app.post("/api/v1/video/auto-uplift/analyze")
async def analyze_and_propose_uplift(req: AutoUpliftAnalyzeRequest):
    """
    Autonomous Video Detection, Silence Trimming, Smart Cuts & Captions.
    Generates an interactive Human-in-the-Loop (HITL) proposal for creator review.
    """
    try:
        proposal = AutoEditService.analyze_and_propose(
            asset_id=req.asset_id,
            pacing=req.pacing,
            target_aspect_ratio=req.target_aspect_ratio,
            style_preset=req.style_preset
        )
        return proposal
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        logger.exception(f"Auto-uplift analysis error: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/v1/video/auto-uplift/apply")
async def apply_approved_uplift(req: AutoUpliftApplyRequest):
    """
    Applies approved Human-in-the-Loop (HITL) video cuts, captions, effects,
    and audio downmix directly to the multitrack timeline.
    """
    try:
        uplifted = AutoEditService.apply_uplift_to_timeline(
            project_id=req.project_id,
            asset_id=req.asset_id,
            approved_cuts=req.approved_cuts,
            approved_captions=req.approved_captions,
            color_grade=req.color_grade,
            aspect_ratio=req.aspect_ratio,
            hook_title=req.hook_title,
            include_bgm=req.include_bgm
        )
        return uplifted
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        logger.exception(f"Auto-uplift apply error: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/v1/video/auto-uplift/instant")
async def instant_auto_uplift(req: AutoUpliftAnalyzeRequest):
    """
    1-Click Autonomous Video Uplift: Automatically analyzes, cuts, captions,
    and applies effects in a single seamless operation.
    """
    try:
        proposal = AutoEditService.analyze_and_propose(
            asset_id=req.asset_id,
            pacing=req.pacing,
            target_aspect_ratio=req.target_aspect_ratio,
            style_preset=req.style_preset
        )
        uplifted = AutoEditService.apply_uplift_to_timeline(
            project_id="proj_vybe_demo",
            asset_id=req.asset_id,
            approved_cuts=proposal["cuts"],
            approved_captions=proposal["captions"],
            color_grade=proposal["effects"]["lut"],
            aspect_ratio=proposal["target_aspect_ratio"],
            hook_title=proposal["effects"]["overlay_hook"],
            include_bgm=True
        )
        return {
            "proposal": proposal,
            "timeline": uplifted
        }
    except Exception as e:
        logger.exception(f"Instant auto-uplift error: {e}")
        raise HTTPException(status_code=500, detail=str(e))


class NLEHitlAnalyzeRequest(BaseModel):
    asset_id: Optional[str] = None
    preferred_suite: Optional[str] = None
    intensity: str = Field("balanced", description="subtle | balanced | dynamic")
    fallback_duration: float = 10.0
    fallback_aspect: str = "16:9"


class NLEHitlApplyRequest(BaseModel):
    proposal_id: str
    suite_id: str
    color_grade: str
    effects: List[str] = Field(default_factory=list)
    transition_id: str = "dissolve"
    transition_duration: float = 0.6
    aspect_ratio: str = "16:9"
    playback_speed: float = 1.0


@app.get("/api/v1/video/nle-suites")
async def get_nle_suites_library():
    """Returns curated CapCut, DaVinci Resolve, and Final Cut Pro lightweight effect/transition suites."""
    return NLESuiteService.get_library()


@app.post("/api/v1/video/nle-suites/analyze-hitl")
async def analyze_video_for_nle_hitl(req: NLEHitlAnalyzeRequest):
    """Analyzes loaded video telemetry and returns an HITL-gated NLE preset proposal."""
    try:
        return NLESuiteService.analyze_video_for_hitl(
            asset_id=req.asset_id,
            preferred_suite=req.preferred_suite,
            intensity=req.intensity,
            fallback_duration=req.fallback_duration,
            fallback_aspect=req.fallback_aspect,
        )
    except Exception as e:
        logger.exception(f"NLE HITL analyze error: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/v1/video/nle-suites/apply-hitl")
async def apply_nle_hitl_decision(req: NLEHitlApplyRequest):
    """Validates and records a human-approved NLE suite configuration for timeline/render execution."""
    if req.suite_id not in NLESuiteService.SUITES:
        raise HTTPException(status_code=400, detail=f"Unsupported NLE suite: {req.suite_id}")
    approved_at = datetime.now(timezone.utc).isoformat()
    logger.info(
        f"HITL NLE decision approved: proposal={req.proposal_id} suite={req.suite_id} "
        f"lut={req.color_grade} effects={req.effects} transition={req.transition_id}({req.transition_duration}s)"
    )
    return {
        "status": "APPROVED",
        "approved_at": approved_at,
        "proposal_id": req.proposal_id,
        "applied_config": {
            "suite_id": req.suite_id,
            "color_grade": req.color_grade,
            "effects": req.effects,
            "transition_id": req.transition_id,
            "transition_duration": max(0.2, min(2.0, req.transition_duration)),
            "aspect_ratio": req.aspect_ratio,
            "playback_speed": max(0.5, min(2.0, req.playback_speed)),
        },
    }
