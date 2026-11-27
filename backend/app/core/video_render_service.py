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
        "2k": (2560, 1440),
        "4k": (3840, 2160),
        "9:16": (1080, 1920),
        "1:1": (1080, 1080),
        "4:5": (1080, 1350)
    }

    RENDER_SUBPROCESS_TIMEOUT_SEC: float = 900.0
    _active_tasks: Dict[str, asyncio.Task] = {}
    _job_heartbeats: Dict[str, float] = {}

    @staticmethod
    def create_job(
        project_id: str,
        profile_name: str = "Cinema HQ H.264",
        output_format: str = "mp4",
        resolution: str = "2k",
        frame_rate: float = 30.0,
        timeline_clips: Optional[List[Dict[str, Any]]] = None,
        lut_name: Optional[str] = None,
        frei0r_effects: Optional[List[str]] = None,
        transition_style: Optional[str] = "dissolve",
        transition_duration: float = 0.75,
        engine: str = "auto",
        pip_mode: Optional[str] = None,
        pip_scale: float = 0.28,
        playback_speed: float = 1.0,
        video_restore: bool = True,
        cinema_finish: bool = True,
        audio_restore: bool = True,
        audio_surround_51: bool = True,
        quality_preset: str = "cinema_hq"
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
                    pip_scale=pip_scale,
                    playback_speed=playback_speed,
                    video_restore=video_restore,
                    cinema_finish=cinema_finish,
                    audio_restore=audio_restore,
                    audio_surround_51=audio_surround_51,
                    quality_preset=quality_preset
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
    def _probe_has_audio(file_path: str) -> bool:
        try:
            res = subprocess.run(
                [
                    "ffprobe", "-v", "error", "-select_streams", "a:0",
                    "-show_entries", "stream=codec_type", "-of", "csv=p=0",
                    str(file_path),
                ],
                capture_output=True, text=True, timeout=10
            )
            return "audio" in (res.stdout or "")
        except Exception:
            return False

    @staticmethod
    async def _prepare_restored_audio(
        valid_clips: List[Dict[str, Any]],
        playback_speed: float,
        audio_restore: bool,
        audio_surround_51: bool,
        work_dir: Path,
    ) -> Optional[Path]:
        """
        Extracts timeline audio (honoring clip trims & speed), runs DeepFilterNet3 neural
        restoration when enabled, and masters to EBU R128 + true 5.1 Surround (or stereo).
        """
        clip_wavs: List[Path] = []
        speed = max(0.5, min(2.0, float(playback_speed or 1.0)))

        for idx, c in enumerate(valid_clips):
            src = c.get("file_path") or c.get("path")
            if not src or not Path(src).exists():
                continue
            has_aud = VideoRenderService._probe_has_audio(src)
            seg_wav = work_dir / f"seg_{idx}.wav"
            trim_in = float(c.get("source_in") or 0.0)
            clip_dur = c.get("duration")

            if has_aud:
                cmd = ["ffmpeg", "-y"]
                if trim_in > 0:
                    cmd.extend(["-ss", f"{trim_in:.3f}"])
                cmd.extend(["-i", str(src)])
                if clip_dur and float(clip_dur) > 0:
                    cmd.extend(["-t", f"{float(clip_dur):.3f}"])
                af_parts = []
                if abs(speed - 1.0) > 0.01:
                    af_parts.append(f"atempo={speed:.3f}")
                if af_parts:
                    cmd.extend(["-af", ",".join(af_parts)])
                cmd.extend(["-vn", "-ar", "48000", "-ac", "2", "-c:a", "pcm_s16le", str(seg_wav)])
            else:
                dur_val = max(1.0, float(clip_dur or 4.0) / speed)
                cmd = [
                    "ffmpeg", "-y", "-f", "lavfi",
                    "-i", f"anullsrc=r=48000:cl=stereo:d={dur_val:.3f}",
                    "-c:a", "pcm_s16le", str(seg_wav)
                ]

            proc = await asyncio.create_subprocess_exec(
                *cmd, stdout=asyncio.subprocess.PIPE, stderr=asyncio.subprocess.PIPE
            )
            await asyncio.wait_for(proc.communicate(), timeout=120.0)
            if proc.returncode == 0 and seg_wav.exists():
                clip_wavs.append(seg_wav)

        if not clip_wavs:
            return None

        # Concatenate audio segments into unified 48kHz 16-bit WAV
        if len(clip_wavs) == 1:
            merged_wav = clip_wavs[0]
        else:
            concat_list = work_dir / "audio_concat.txt"
            concat_list.write_text(
                "\n".join(f"file '{p.as_posix()}'" for p in clip_wavs), encoding="utf-8"
            )
            merged_wav = work_dir / "merged_audio.wav"
            proc = await asyncio.create_subprocess_exec(
                "ffmpeg", "-y", "-f", "concat", "-safe", "0", "-i", str(concat_list),
                "-ar", "48000", "-ac", "2", "-c:a", "pcm_s16le", str(merged_wav),
                stdout=asyncio.subprocess.PIPE, stderr=asyncio.subprocess.PIPE
            )
            await asyncio.wait_for(proc.communicate(), timeout=120.0)
            if proc.returncode != 0 or not merged_wav.exists():
                merged_wav = clip_wavs[0]

        # Step 1: DeepFilterNet3 Neural Audio Restoration
        restored_wav = merged_wav
        df_bin = shutil.which("deep-filter") or ("/usr/local/bin/deep-filter" if Path("/usr/local/bin/deep-filter").exists() else None)
        if audio_restore and df_bin:
            df_out_dir = work_dir / "df_out"
            df_out_dir.mkdir(exist_ok=True)
            proc = await asyncio.create_subprocess_exec(
                df_bin, str(merged_wav), "-o", str(df_out_dir),
                stdout=asyncio.subprocess.PIPE, stderr=asyncio.subprocess.PIPE
            )
            try:
                await asyncio.wait_for(proc.communicate(), timeout=120.0)
                candidate = df_out_dir / merged_wav.name
                if proc.returncode == 0 and candidate.exists():
                    restored_wav = candidate
                    logger.info(f"DeepFilterNet3 neural audio restoration applied: {candidate}")
            except asyncio.TimeoutError:
                try:
                    proc.kill()
                    await proc.wait()
                except Exception:
                    pass
                logger.warning("DeepFilterNet3 timed out during video render; continuing with raw audio.")

        # Step 2: EBU R128 Loudness Mastering + True 5.1 Surround Upmix
        master_audio = work_dir / "master_audio.m4a"
        af_chain = ["loudnorm=I=-14:TP=-1.0:LRA=11"]
        if audio_surround_51:
            af_chain.append("surround=chl_out=5.1:level_in=1:level_out=1:lfe=1:lfe_low=128:lfe_high=256")
            ac_args = ["-ac", "6", "-c:a", "aac", "-b:a", "384k", "-ar", "48000"]
        else:
            ac_args = ["-ac", "2", "-c:a", "aac", "-b:a", "256k", "-ar", "48000"]

        proc = await asyncio.create_subprocess_exec(
            "ffmpeg", "-y", "-i", str(restored_wav),
            "-af", ",".join(af_chain),
            *ac_args,
            str(master_audio),
            stdout=asyncio.subprocess.PIPE, stderr=asyncio.subprocess.PIPE
        )
        _, stderr = await asyncio.wait_for(proc.communicate(), timeout=180.0)
        if proc.returncode == 0 and master_audio.exists():
            return master_audio
        logger.warning(f"Audio mastering step warning: {stderr.decode(errors='ignore')[-300:]}")
        return restored_wav

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
        pip_scale: float = 0.28,
        playback_speed: float = 1.0,
        video_restore: bool = True,
        cinema_finish: bool = True,
        audio_restore: bool = True,
        audio_surround_51: bool = True,
        quality_preset: str = "cinema_hq"
    ):
        """Asynchronous worker that builds and runs the Cinema 2K/4K + 5.1 Surround rendering pipeline."""
        logger.info(
            f"Starting render job {job_id} ({resolution} @ {frame_rate}fps, speed={playback_speed}x, "
            f"LUT={lut_name}, VFX={frei0r_effects}, Transition={transition_style}, "
            f"restore_v={video_restore}, cinema={cinema_finish}, restore_a={audio_restore}, 5.1={audio_surround_51}, "
            f"quality={quality_preset})..."
        )
        VideoRenderService._update_job_status(job_id, "RENDERING", 10.0)

        out_name = f"vybe_export_{job_id}.{output_format}"
        out_file = settings.VIDEO_EXPORTS_DIR / out_name
        w, h = VideoRenderService.RESOLUTIONS.get(resolution, (2560, 1440))
        speed = max(0.5, min(2.0, float(playback_speed or 1.0)))

        try:
            await asyncio.sleep(0.2)
            VideoRenderService._update_job_status(job_id, "RENDERING", 20.0)

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

            # Option A: MLT Framework Engine ('melt') when explicitly requested
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

            # Option B: Cinema FFmpeg Pipeline (Lanczos 2K/4K + Restoration + LUT/VFX + DeepFilterNet3 + 5.1 Surround)
            with tempfile.TemporaryDirectory(prefix=f"vybe_render_{job_id}_") as tmp_str:
                work_dir = Path(tmp_str)

                # Step 1: Prepare restored + 5.1 surround mastered audio track
                VideoRenderService._update_job_status(job_id, "RENDERING", 35.0)
                master_audio_path: Optional[Path] = None
                if valid_clips:
                    master_audio_path = await VideoRenderService._prepare_restored_audio(
                        valid_clips=valid_clips,
                        playback_speed=speed,
                        audio_restore=audio_restore,
                        audio_surround_51=audio_surround_51,
                        work_dir=work_dir,
                    )

                # Build post-processing cinema video filterchain
                post_filters: List[str] = []
                if abs(speed - 1.0) > 0.01:
                    post_filters.append(f"setpts=PTS/{speed:.4f}")
                if video_restore:
                    # Temporal/spatial 3D denoising + adaptive detail recovery
                    post_filters.append("hqdn3d=1.8:1.4:4.5:3.5")
                    post_filters.append("unsharp=5:5:0.75:5:5:0.25")
                if cinema_finish:
                    post_filters.append("eq=contrast=1.06:saturation=1.08:gamma=0.98")
                if lut_name and lut_name != "clean":
                    lut_file = settings.LUTS_DIR / f"{lut_name}.cube"
                    if lut_file.exists():
                        post_filters.append(f"lut3d=file='{lut_file}'")
                if frei0r_effects:
                    for fx in frei0r_effects:
                        parts = fx.split(":", 1)
                        plugin_name = parts[0].strip()
                        if plugin_name in ("vignette", "vignette0r"):
                            post_filters.append("vignette=PI/5")
                        elif len(parts) > 1:
                            param_val = parts[1].strip()
                            post_filters.append(f"frei0r=filter_name={plugin_name}:filter_params={param_val}")
                        else:
                            post_filters.append(f"frei0r=filter_name={plugin_name}")
                elif cinema_finish:
                    post_filters.append("vignette=PI/6")

                post_filters.append("format=yuv420p")

                # High-quality encoder flags
                if quality_preset == "hevc_hq":
                    vcodec_args = ["-c:v", "libx265", "-preset", "medium", "-crf", "20", "-tag:v", "hvc1", "-movflags", "+faststart"]
                elif quality_preset == "balanced":
                    vcodec_args = ["-c:v", "libx264", "-preset", "fast", "-crf", "20", "-profile:v", "high", "-movflags", "+faststart"]
                else:  # cinema_hq
                    vcodec_args = ["-c:v", "libx264", "-preset", "medium", "-crf", "18", "-profile:v", "high", "-movflags", "+faststart"]

                VideoRenderService._update_job_status(job_id, "RENDERING", 60.0)

                if len(valid_clips) >= 2:
                    # Multi-clip timeline with xfade transitions + cinema finish + mastered 5.1 audio
                    in_args, fc_str, _ = MLTTransitionService.build_ffmpeg_xfade_pipeline(
                        clips=valid_clips,
                        width=w,
                        height=h,
                        frame_rate=frame_rate,
                        transition_style=transition_style or "dissolve",
                        transition_duration=transition_duration,
                        lut_name=None,
                        frei0r_effects=[],
                        pip_mode=pip_mode,
                        pip_scale=pip_scale,
                        luts_dir=settings.LUTS_DIR
                    )
                    # Upgrade scale to Lanczos and append restoration + cinema finish to [v_master_out]
                    fc_str = fc_str.replace(
                        f"scale={w}:{h}:force_original_aspect_ratio=decrease",
                        f"scale={w}:{h}:flags=lanczos+accurate_rnd+full_chroma_int:force_original_aspect_ratio=decrease"
                    )
                    fc_str = f"{fc_str};[v_master_out]{','.join(post_filters)}[v_cinema_out]"

                    cmd = ["ffmpeg", "-y", *in_args]
                    audio_input_idx = len(valid_clips)
                    if master_audio_path and master_audio_path.exists():
                        cmd.extend(["-i", str(master_audio_path)])
                        cmd.extend(["-filter_complex", fc_str, "-map", "[v_cinema_out]", "-map", f"{audio_input_idx}:a:0"])
                        cmd.extend(["-c:a", "copy", "-shortest"])
                    else:
                        cmd.extend(["-filter_complex", fc_str, "-map", "[v_cinema_out]"])
                    cmd.extend(["-r", str(int(frame_rate)), *vcodec_args, str(out_file)])

                elif len(valid_clips) == 1:
                    c0 = valid_clips[0]
                    src = c0.get("file_path") or c0.get("path")
                    trim_in = float(c0.get("source_in") or 0.0)
                    clip_dur = c0.get("duration")

                    vf_chain = ",".join([
                        f"scale={w}:{h}:flags=lanczos+accurate_rnd+full_chroma_int:force_original_aspect_ratio=decrease",
                        f"pad={w}:{h}:(ow-iw)/2:(oh-ih)/2",
                        *post_filters,
                    ])

                    cmd = ["ffmpeg", "-y"]
                    if trim_in > 0:
                        cmd.extend(["-ss", f"{trim_in:.3f}"])
                    cmd.extend(["-i", str(src)])
                    if clip_dur and float(clip_dur) > 0:
                        cmd.extend(["-t", f"{float(clip_dur):.3f}"])

                    if master_audio_path and master_audio_path.exists():
                        cmd.extend(["-i", str(master_audio_path)])
                        cmd.extend(["-vf", vf_chain, "-map", "0:v:0", "-map", "1:a:0", "-c:a", "copy", "-shortest"])
                    else:
                        cmd.extend(["-vf", vf_chain, "-an"])
                    cmd.extend(["-r", str(int(frame_rate)), *vcodec_args, str(out_file)])

                else:
                    vf_chain = ",".join([
                        f"scale={w}:{h}:flags=lanczos+accurate_rnd+full_chroma_int:force_original_aspect_ratio=decrease",
                        f"pad={w}:{h}:(ow-iw)/2:(oh-ih)/2",
                        *post_filters,
                    ])
                    cmd = [
                        "ffmpeg", "-y",
                        "-f", "lavfi", "-i", f"testsrc=duration=6:size={w}x{h}:rate={int(frame_rate)}",
                        "-f", "lavfi", "-i", "sine=frequency=440:duration=6",
                        "-vf", vf_chain,
                        *vcodec_args,
                        "-c:a", "aac", "-b:a", "384k", "-ac", "6" if audio_surround_51 else "2",
                        str(out_file)
                    ]

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

                VideoRenderService._update_job_status(job_id, "RENDERING", 95.0)
                await asyncio.sleep(0.2)

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
