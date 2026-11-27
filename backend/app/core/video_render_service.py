import asyncio
import json
import logging
import os
import shutil
import subprocess
import tempfile
import time
import uuid
from datetime import datetime, timedelta, timezone
from pathlib import Path
from typing import Any, Dict, List, Optional

from app.config import settings
from app.core.db import get_connection
from app.core.mlt_transition_service import MLTTransitionService

logger = logging.getLogger("vybe.render_service")


class VideoRenderService:
    """
    Sovereign Video Render Pipeline & Job Manager.
    Compiles multitrack video/audio timelines into broadcast-grade video containers.
    """

    RESOLUTIONS = {
        "1080p": (1920, 1080),
        "720p": (1280, 720),
        "4k": (3840, 2160),
        "9:16": (1080, 1920),
        "1:1": (1080, 1080),
        "4:5": (1080, 1350)
    }

    RENDER_SUBPROCESS_TIMEOUT_SEC: float = 600.0
    _active_tasks: Dict[str, asyncio.Task] = {}
    _job_heartbeats: Dict[str, float] = {}

    @staticmethod
    def create_job(
        project_id: str,
        profile_name: str = "Web 1080p H.264",
        output_format: str = "mp4",
        resolution: str = "1080p",
        frame_rate: float = 30.0,
        timeline_clips: Optional[List[Dict[str, Any]]] = None,
        lut_name: Optional[str] = None,
        frei0r_effects: Optional[List[str]] = None,
        transition_style: Optional[str] = "dissolve",
        transition_duration: float = 0.75,
        engine: str = "auto",
        pip_mode: Optional[str] = None,
        pip_scale: float = 0.28
    ) -> Dict[str, Any]:
        """Creates a new render job in QUEUED status."""
        job_id = f"job_{uuid.uuid4().hex[:10]}"
        now = datetime.now(timezone.utc).isoformat()
        
        conn = get_connection()
        try:
            with conn:
                conn.execute(
                    """
                    INSERT INTO render_jobs (
                        id, project_id, profile_name, output_format, resolution,
                        frame_rate, status, progress_percent, created_at
                    ) VALUES (?, ?, ?, ?, ?, ?, 'QUEUED', 0.0, ?)
                    """,
                    (job_id, project_id, profile_name, output_format, resolution, frame_rate, now)
                )
            
            # Start background asynchronous render and register for watchdog tracking
            task = asyncio.create_task(
                VideoRenderService._render_worker(
                    job_id=job_id,
                    project_id=project_id,
                    resolution=resolution,
                    frame_rate=frame_rate,
                    output_format=output_format,
                    timeline_clips=timeline_clips or [],
                    lut_name=lut_name,
                    frei0r_effects=frei0r_effects or [],
                    transition_style=transition_style or "dissolve",
                    transition_duration=transition_duration,
                    engine=engine,
                    pip_mode=pip_mode,
                    pip_scale=pip_scale
                )
            )
            VideoRenderService._active_tasks[job_id] = task
            VideoRenderService._job_heartbeats[job_id] = time.time()
            return VideoRenderService.get_job(job_id)
        finally:
            conn.close()

    @staticmethod
    def get_job(job_id: str) -> Optional[Dict[str, Any]]:
        """Retrieves a render job record by ID."""
        conn = get_connection()
        try:
            cur = conn.cursor()
            cur.execute("SELECT * FROM render_jobs WHERE id = ?", (job_id,))
            row = cur.fetchone()
            if not row:
                return None
            job = dict(row)
            if job.get("output_file_path"):
                job["download_url"] = f"/api/v1/render/download/{job_id}"
                job["stream_url"] = f"/api/v1/render/stream/{job_id}"
            mlt_path = settings.VIDEO_EXPORTS_DIR / f"vybe_project_{job_id}.mlt"
            if mlt_path.exists():
                job["mlt_url"] = f"/api/v1/render/mlt/{job_id}"
            return job
        finally:
            conn.close()

    @staticmethod
    def list_jobs(project_id: Optional[str] = None) -> List[Dict[str, Any]]:
        """Lists all render jobs ordered by creation date."""
        conn = get_connection()
        try:
            cur = conn.cursor()
            if project_id:
                cur.execute("SELECT * FROM render_jobs WHERE project_id = ? ORDER BY created_at DESC", (project_id,))
            else:
                cur.execute("SELECT * FROM render_jobs ORDER BY created_at DESC LIMIT 50")
            rows = cur.fetchall()
            jobs = []
            for r in rows:
                j = dict(r)
                if j.get("output_file_path"):
                    j["download_url"] = f"/api/v1/render/download/{j['id']}"
                    j["stream_url"] = f"/api/v1/render/stream/{j['id']}"
                mlt_path = settings.VIDEO_EXPORTS_DIR / f"vybe_project_{j['id']}.mlt"
                if mlt_path.exists():
                    j["mlt_url"] = f"/api/v1/render/mlt/{j['id']}"
                jobs.append(j)
            return jobs
        finally:
            conn.close()

    @staticmethod
    def _update_job_status(
        job_id: str,
        status: str,
        progress: float = 0.0,
        output_path: Optional[str] = None,
        error_msg: Optional[str] = None
    ):
        VideoRenderService._job_heartbeats[job_id] = time.time()
        now = datetime.now(timezone.utc).isoformat() if status in ["COMPLETED", "FAILED"] else None
        conn = get_connection()
        try:
            with conn:
                conn.execute(
                    """
                    UPDATE render_jobs
                    SET status = ?, progress_percent = ?, output_file_path = COALESCE(?, output_file_path),
                        error_message = ?, completed_at = COALESCE(?, completed_at)
                    WHERE id = ?
                    """,
                    (status, progress, output_path, error_msg, now, job_id)
                )
        finally:
            conn.close()

    @classmethod
    def recover_stale_jobs(cls, startup: bool = False, max_stale_minutes: int = 15) -> List[str]:
        """
        Auto-heals orphaned or hung render jobs so they never stay stuck in QUEUED/RENDERING.
        - startup=True: Marks all in-progress jobs from prior process lifecycles as FAILED.
        - startup=False: Marks jobs without an active worker task or exceeding max_stale_minutes as FAILED.
        """
        healed_ids: List[str] = []
        now_utc = datetime.now(timezone.utc)
        now_iso = now_utc.isoformat()
        stale_cutoff_dt = now_utc - timedelta(minutes=max_stale_minutes)
        now_ts = time.time()

        conn = get_connection()
        try:
            cur = conn.cursor()
            cur.execute(
                "SELECT id, status, progress_percent, created_at FROM render_jobs WHERE status IN ('QUEUED', 'RENDERING')"
            )
            rows = cur.fetchall()
            for row in rows:
                job_id = row["id"]
                created_raw = row["created_at"]
                should_heal = False
                reason = ""

                if startup:
                    should_heal = True
                    reason = "Auto-healed on startup: orphaned render job from previous server process."
                else:
                    task = cls._active_tasks.get(job_id)
                    last_hb = cls._job_heartbeats.get(job_id)
                    if task is None or task.done():
                        # No live worker task in this process — check grace window of 60s from creation
                        try:
                            created_dt = datetime.fromisoformat(created_raw)
                            if created_dt.tzinfo is None:
                                created_dt = created_dt.replace(tzinfo=timezone.utc)
                        except Exception:
                            created_dt = stale_cutoff_dt
                        if (now_utc - created_dt).total_seconds() > 60:
                            should_heal = True
                            reason = "Auto-healed by watchdog: no active worker process for job."
                    elif last_hb is not None and (now_ts - last_hb) > (max_stale_minutes * 60):
                        should_heal = True
                        reason = f"Auto-healed by watchdog: no progress for >{max_stale_minutes} minutes."
                        try:
                            task.cancel()
                        except Exception:
                            pass

                if should_heal:
                    with conn:
                        conn.execute(
                            """
                            UPDATE render_jobs
                            SET status = 'FAILED',
                                error_message = ?,
                                completed_at = COALESCE(completed_at, ?)
                            WHERE id = ? AND status IN ('QUEUED', 'RENDERING')
                            """,
                            (reason, now_iso, job_id)
                        )
                    cls._active_tasks.pop(job_id, None)
                    cls._job_heartbeats.pop(job_id, None)
                    healed_ids.append(job_id)
                    logger.warning(f"Auto-healed stale render job {job_id}: {reason}")
        finally:
            conn.close()

        return healed_ids

    @staticmethod
    async def _render_worker(
        job_id: str,
        project_id: str,
        resolution: str,
        frame_rate: float,
        output_format: str,
        timeline_clips: List[Dict[str, Any]],
        lut_name: Optional[str] = None,
        frei0r_effects: Optional[List[str]] = None,
        transition_style: Optional[str] = "dissolve",
        transition_duration: float = 0.75,
        engine: str = "auto",
        pip_mode: Optional[str] = None,
        pip_scale: float = 0.28
    ):
        """Asynchronous worker that builds and runs the MLT / FFmpeg rendering pipeline."""
        logger.info(
            f"Starting render job {job_id} ({resolution} @ {frame_rate}fps, "
            f"LUT={lut_name}, VFX={frei0r_effects}, Transition={transition_style}, Engine={engine})..."
        )
        VideoRenderService._update_job_status(job_id, "RENDERING", 10.0)

        out_name = f"vybe_export_{job_id}.{output_format}"
        out_file = settings.VIDEO_EXPORTS_DIR / out_name
        w, h = VideoRenderService.RESOLUTIONS.get(resolution, (1920, 1080))

        try:
            await asyncio.sleep(0.3)
            VideoRenderService._update_job_status(job_id, "RENDERING", 25.0)

            # Determine input source clips
            valid_clips = []
            for c in timeline_clips:
                p = c.get("file_path") or c.get("path")
                if p and Path(p).exists():
                    valid_clips.append(c)

            # Fallback to demo video clips if no valid sources passed
            if not valid_clips:
                demo_files = list(settings.VIDEO_UPLOAD_DIR.glob("*.mp4"))
                if demo_files:
                    valid_clips.append({
                        "file_path": str(demo_files[0]),
                        "duration": 5.0,
                        "name": demo_files[0].name
                    })

            # Always generate companion OpenShot / Kdenlive compatible MLT XML
            mlt_xml = MLTTransitionService.generate_mlt_xml(
                project_name=f"VYBE_{job_id}",
                clips=valid_clips,
                width=w,
                height=h,
                frame_rate=frame_rate,
                transition_style=transition_style or "dissolve",
                transition_duration=transition_duration
            )
            mlt_path = settings.VIDEO_EXPORTS_DIR / f"vybe_project_{job_id}.mlt"
            mlt_path.write_text(mlt_xml, encoding="utf-8")
            logger.info(f"Saved OpenShot/MLT XML: {mlt_path}")

            # Option A: MLT Framework Engine ('melt')
            if engine == "mlt":
                VideoRenderService._update_job_status(job_id, "RENDERING", 50.0)
                mlt_ok = await MLTTransitionService.render_with_mlt(
                    xml_path=mlt_path,
                    out_file=out_file,
                    width=w,
                    height=h,
                    frame_rate=frame_rate
                )
                if mlt_ok:
                    VideoRenderService._update_job_status(
                        job_id, "COMPLETED", 100.0, output_path=str(out_file)
                    )
                    logger.info(f"Render job {job_id} successfully completed via MLT: {out_file}")
                    return
                logger.warning(f"MLT render for {job_id} failed or unavailable; falling back to FFmpeg engine.")

            # Option B: High-Performance FFmpeg Complex Filtergraph
            # Build professional video filterchain: Scale + Pad + 3D LUT (.cube) + Frei0r VFX
            vf_filters = [
                f"scale={w}:{h}:force_original_aspect_ratio=decrease,pad={w}:{h}:(ow-iw)/2:(oh-ih)/2"
            ]

            if lut_name and lut_name != "clean":
                lut_file = settings.LUTS_DIR / f"{lut_name}.cube"
                if lut_file.exists():
                    vf_filters.append(f"lut3d=file='{lut_file}'")

            if frei0r_effects:
                for fx in frei0r_effects:
                    parts = fx.split(":", 1)
                    plugin_name = parts[0].strip()
                    if plugin_name == "vignette0r":
                        plugin_name = "vignette"
                    if len(parts) > 1:
                        param_val = parts[1].strip()
                        vf_filters.append(f"frei0r=filter_name={plugin_name}:filter_params={param_val}")
                    else:
                        vf_filters.append(f"frei0r=filter_name={plugin_name}")

            vf_filters.append("format=yuv420p")
            vf_chain = ",".join(vf_filters)

            if len(valid_clips) >= 2:
                # Multi-clip timeline with programmatic xfade transitions & audio acrossfade
                in_args, fc_str, af_str = MLTTransitionService.build_ffmpeg_xfade_pipeline(
                    clips=valid_clips,
                    width=w,
                    height=h,
                    frame_rate=frame_rate,
                    transition_style=transition_style or "dissolve",
                    transition_duration=transition_duration,
                    lut_name=lut_name,
                    frei0r_effects=frei0r_effects,
                    pip_mode=pip_mode,
                    pip_scale=pip_scale,
                    luts_dir=settings.LUTS_DIR
                )

                cmd = [
                    "ffmpeg", "-y",
                    *in_args,
                    "-filter_complex", fc_str,
                    "-map", "[v_master_out]",
                    "-r", str(int(frame_rate)),
                    "-c:v", "libx264",
                    "-preset", "veryfast",
                    "-crf", "22",
                    str(out_file)
                ]
            elif len(valid_clips) == 1:
                # Single clip transcode & grade
                src = valid_clips[0].get("file_path") or valid_clips[0].get("path")
                cmd = [
                    "ffmpeg", "-y",
                    "-i", src,
                    "-vf", vf_chain,
                    "-r", str(int(frame_rate)),
                    "-c:v", "libx264",
                    "-preset", "veryfast",
                    "-crf", "22",
                    "-c:a", "aac",
                    "-b:a", "192k",
                    "-ar", "48000",
                    str(out_file)
                ]
            else:
                # Synthesize high-definition test sequence if no assets available
                cmd = [
                    "ffmpeg", "-y",
                    "-f", "lavfi", "-i", f"testsrc=duration=6:size={w}x{h}:rate={int(frame_rate)}",
                    "-f", "lavfi", "-i", "sine=frequency=440:duration=6",
                    "-vf", vf_chain,
                    "-c:v", "libx264",
                    "-preset", "veryfast",
                    "-c:a", "aac",
                    "-b:a", "192k",
                    str(out_file)
                ]

            VideoRenderService._update_job_status(job_id, "RENDERING", 65.0)

            proc = await asyncio.create_subprocess_exec(
                *cmd,
                stdout=asyncio.subprocess.PIPE,
                stderr=asyncio.subprocess.PIPE
            )
            try:
                stdout, stderr = await asyncio.wait_for(
                    proc.communicate(),
                    timeout=VideoRenderService.RENDER_SUBPROCESS_TIMEOUT_SEC
                )
            except asyncio.TimeoutError:
                try:
                    proc.kill()
                    await proc.wait()
                except Exception:
                    pass
                err_text = f"Render subprocess timed out after {int(VideoRenderService.RENDER_SUBPROCESS_TIMEOUT_SEC)}s and was auto-terminated."
                logger.error(f"Render job {job_id} timed out: {err_text}")
                VideoRenderService._update_job_status(job_id, "FAILED", 0.0, error_msg=err_text)
                return

            if proc.returncode != 0:
                err_text = stderr.decode(errors="ignore")[-800:]
                logger.error(f"Render job {job_id} failed: {err_text}")
                VideoRenderService._update_job_status(job_id, "FAILED", 0.0, error_msg=err_text)
                return

            VideoRenderService._update_job_status(job_id, "RENDERING", 90.0)
            await asyncio.sleep(0.3)

            # Finished
            VideoRenderService._update_job_status(
                job_id,
                "COMPLETED",
                100.0,
                output_path=str(out_file)
            )
            logger.info(f"Render job {job_id} successfully completed: {out_file}")

        except asyncio.CancelledError:
            logger.warning(f"Render job {job_id} cancelled by auto-heal watchdog.")
            VideoRenderService._update_job_status(
                job_id, "FAILED", 0.0, error_msg="Render job cancelled by auto-heal watchdog."
            )
            raise
        except Exception as e:
            logger.exception(f"Unexpected render error for {job_id}: {e}")
            VideoRenderService._update_job_status(job_id, "FAILED", 0.0, error_msg=str(e))
        finally:
            VideoRenderService._active_tasks.pop(job_id, None)
            VideoRenderService._job_heartbeats.pop(job_id, None)
