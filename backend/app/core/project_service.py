import json
import logging
import os
import shutil
import subprocess
import uuid
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, List, Optional

from app.config import settings
from app.core.db import get_connection
from app.core.video_io import VideoIO, VideoMetadata

logger = logging.getLogger("vybe.project_service")


class ProjectService:
    """Manages Project Lifecycles, Media Asset Ingestion, and Sovereign Persistence."""

    @staticmethod
    def create_project(
        name: str,
        aspect_ratio: str = "16:9",
        frame_rate: float = 30.0,
        width: int = 1920,
        height: int = 1080,
        sample_rate_hz: int = 48000,
        tempo_bpm: int = 120,
        time_signature: str = "4/4",
        bit_depth: str = "24"
    ) -> Dict[str, Any]:
        """Creates a new VYBE AI multimedia project."""
        project_id = f"proj_{uuid.uuid4().hex[:10]}"
        now = datetime.now(timezone.utc).isoformat()

        conn = get_connection()
        try:
            with conn:
                conn.execute(
                    """
                    INSERT INTO projects (
                        id, name, tempo_bpm, time_signature, sample_rate_hz, bit_depth,
                        aspect_ratio, frame_rate, width, height, created_at, updated_at
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                    """,
                    (
                        project_id, name, tempo_bpm, time_signature, sample_rate_hz, bit_depth,
                        aspect_ratio, frame_rate, width, height, now, now
                    )
                )
            return ProjectService.get_project(project_id)
        finally:
            conn.close()

    @staticmethod
    def list_projects() -> List[Dict[str, Any]]:
        """Lists all projects ordered by most recently updated."""
        conn = get_connection()
        try:
            cur = conn.cursor()
            cur.execute("SELECT * FROM projects ORDER BY updated_at DESC")
            rows = cur.fetchall()
            return [dict(r) for r in rows]
        finally:
            conn.close()

    @staticmethod
    def get_project(project_id: str) -> Optional[Dict[str, Any]]:
        """Retrieves project details including associated assets and track count."""
        conn = get_connection()
        try:
            cur = conn.cursor()
            cur.execute("SELECT * FROM projects WHERE id = ?", (project_id,))
            row = cur.fetchone()
            if not row:
                return None
            
            proj = dict(row)
            # Fetch associated assets
            cur.execute("SELECT * FROM media_assets WHERE project_id = ? ORDER BY created_at DESC", (project_id,))
            assets = [dict(a) for a in cur.fetchall()]
            for a in assets:
                try:
                    a["waveform_preview"] = json.loads(a.get("waveform_preview", "[]"))
                    a["filmstrip_paths"] = json.loads(a.get("filmstrip_paths", "[]"))
                except Exception:
                    a["waveform_preview"] = []
                    a["filmstrip_paths"] = []
            proj["assets"] = assets
            return proj
        finally:
            conn.close()

    @staticmethod
    def update_project(project_id: str, updates: Dict[str, Any]) -> Optional[Dict[str, Any]]:
        """Updates project attributes (e.g. aspect ratio, resolution, name, tempo)."""
        allowed = {"name", "tempo_bpm", "time_signature", "sample_rate_hz", "bit_depth", "aspect_ratio", "frame_rate", "width", "height"}
        valid_updates = {k: v for k, v in updates.items() if k in allowed}
        if not valid_updates:
            return ProjectService.get_project(project_id)

        valid_updates["updated_at"] = datetime.now(timezone.utc).isoformat()
        set_clause = ", ".join(f"{k} = ?" for k in valid_updates.keys())
        values = list(valid_updates.values()) + [project_id]

        conn = get_connection()
        try:
            with conn:
                conn.execute(f"UPDATE projects SET {set_clause} WHERE id = ?", values)
            return ProjectService.get_project(project_id)
        finally:
            conn.close()

    @staticmethod
    def delete_project(project_id: str) -> bool:
        """Deletes a project and its cascades."""
        conn = get_connection()
        try:
            with conn:
                cur = conn.execute("DELETE FROM projects WHERE id = ?", (project_id,))
                return cur.rowcount > 0
        finally:
            conn.close()

    @staticmethod
    def ingest_asset_file(
        source_file_path: Path,
        original_filename: str,
        project_id: Optional[str] = None
    ) -> Dict[str, Any]:
        """
        Non-destructively imports a media file into VYBE AI.
        Probes metadata, generates poster thumbnail, filmstrip, proxy (if video),
        extracts audio to uncompressed WAV for SONIQ, and saves to database.
        """
        asset_id = f"asset_{uuid.uuid4().hex[:10]}"
        now = datetime.now(timezone.utc).isoformat()
        ext = original_filename.split(".")[-1].lower() if "." in original_filename else ""

        # Determine target immutable storage folder
        if ext in settings.SUPPORTED_IMAGE_FORMATS:
            dest_dir = settings.THUMBNAILS_DIR
        elif ext in settings.SUPPORTED_VIDEO_FORMATS:
            dest_dir = settings.VIDEO_UPLOAD_DIR
        else:
            dest_dir = settings.UPLOAD_DIR

        dest_filename = f"{asset_id}_{original_filename}"
        dest_path = dest_dir / dest_filename
        shutil.copy2(source_file_path, dest_path)

        # 1. Deep ffprobe metadata inspection
        meta = VideoIO.probe_media(dest_path)

        # 2. Thumbnail & Filmstrip generation
        thumb_path = None
        filmstrip = []
        if meta.media_type in ["video", "image"]:
            thumb_file = settings.THUMBNAILS_DIR / f"{asset_id}_thumb.jpg"
            try:
                if meta.media_type == "video":
                    VideoIO.generate_thumbnail(dest_path, thumb_file, timestamp_sec=min(1.0, meta.duration_seconds / 2))
                    filmstrip = VideoIO.generate_filmstrip(
                        dest_path,
                        settings.THUMBNAILS_DIR / f"{asset_id}_strip",
                        meta.duration_seconds,
                        count=8
                    )
                else: # image
                    VideoIO.generate_thumbnail(dest_path, thumb_file, timestamp_sec=0.0)
                thumb_path = str(thumb_file)
            except Exception as e:
                logger.warning(f"Could not generate thumbnail for {dest_filename}: {e}")

        # 3. Fast Proxy Generation for Videos
        proxy_path = None
        has_proxy = 0
        if meta.media_type == "video":
            proxy_file = settings.PROXIES_DIR / f"{asset_id}_proxy_540p.mp4"
            try:
                VideoIO.generate_proxy(dest_path, proxy_file, target_height=540)
                proxy_path = str(proxy_file)
                has_proxy = 1
            except Exception as e:
                logger.warning(f"Proxy generation error for {dest_filename}: {e}")

        # 4. Lossless Audio Extraction to SONIQ Storage (Enables immediate SONIQ DSP/Stems/Surround)
        extracted_audio_path = None
        waveform = []
        if meta.has_audio:
            wav_file = settings.UPLOAD_DIR / f"{asset_id}_audio_stem.wav"
            extracted_audio_path = VideoIO.extract_audio_to_wav(dest_path, wav_file)
            waveform = VideoIO.extract_waveform_peaks(dest_path, num_points=120)

        # 5. Insert Record into media_assets
        conn = get_connection()
        try:
            with conn:
                conn.execute(
                    """
                    INSERT INTO media_assets (
                        id, project_id, file_name, file_path, proxy_path, thumbnail_path,
                        filmstrip_paths, media_type, format_name, duration_seconds, file_size_bytes,
                        width, height, frame_rate, video_codec, audio_codec, audio_channels,
                        audio_sample_rate, waveform_preview, has_proxy, checksum_sha256, created_at
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                    """,
                    (
                        asset_id, project_id, original_filename, str(dest_path), proxy_path, thumb_path,
                        json.dumps(filmstrip), meta.media_type, meta.format_name, meta.duration_seconds,
                        meta.file_size_bytes, meta.width, meta.height, meta.frame_rate, meta.video_codec,
                        meta.audio_codec, meta.audio_channels, meta.audio_sample_rate, json.dumps(waveform),
                        has_proxy, meta.checksum_sha256, now
                    )
                )
            return ProjectService.get_asset(asset_id)
        finally:
            conn.close()

    @staticmethod
    def get_asset(asset_id: str) -> Optional[Dict[str, Any]]:
        """Retrieves media asset details."""
        conn = get_connection()
        try:
            cur = conn.cursor()
            cur.execute("SELECT * FROM media_assets WHERE id = ?", (asset_id,))
            row = cur.fetchone()
            if not row:
                return None
            asset = dict(row)
            try:
                asset["waveform_preview"] = json.loads(asset.get("waveform_preview", "[]"))
                asset["filmstrip_paths"] = json.loads(asset.get("filmstrip_paths", "[]"))
            except Exception:
                asset["waveform_preview"] = []
                asset["filmstrip_paths"] = []
            
            # Add dynamic serving URLs
            asset["stream_url"] = f"/api/v1/media/stream/{asset_id}"
            asset["download_url"] = f"/api/v1/media/download/{asset_id}"
            if asset.get("has_proxy"):
                asset["proxy_stream_url"] = f"/api/v1/media/proxy-stream/{asset_id}"
            if asset.get("thumbnail_path"):
                asset["thumbnail_url"] = f"/api/v1/media/thumbnail/{asset_id}"
            return asset
        finally:
            conn.close()

    @staticmethod
    def list_assets(project_id: Optional[str] = None, media_type: Optional[str] = None) -> List[Dict[str, Any]]:
        """Lists media assets with optional project and media type filtering."""
        conn = get_connection()
        try:
            cur = conn.cursor()
            query = "SELECT * FROM media_assets WHERE 1=1"
            params = []
            if project_id:
                query += " AND project_id = ?"
                params.append(project_id)
            if media_type:
                query += " AND media_type = ?"
                params.append(media_type)
            query += " ORDER BY created_at DESC"
            cur.execute(query, params)
            assets = [dict(r) for r in cur.fetchall()]
            for a in assets:
                try:
                    a["waveform_preview"] = json.loads(a.get("waveform_preview", "[]"))
                    a["filmstrip_paths"] = json.loads(a.get("filmstrip_paths", "[]"))
                except Exception:
                    a["waveform_preview"] = []
                    a["filmstrip_paths"] = []
                a["stream_url"] = f"/api/v1/media/stream/{a['id']}"
                a["download_url"] = f"/api/v1/media/download/{a['id']}"
                if a.get("has_proxy"):
                    a["proxy_stream_url"] = f"/api/v1/media/proxy-stream/{a['id']}"
                if a.get("thumbnail_path"):
                    a["thumbnail_url"] = f"/api/v1/media/thumbnail/{a['id']}"
            return assets
        finally:
            conn.close()

    @staticmethod
    def delete_asset(asset_id: str) -> bool:
        """Deletes asset record from database."""
        conn = get_connection()
        try:
            with conn:
                cur = conn.execute("DELETE FROM media_assets WHERE id = ?", (asset_id,))
                return cur.rowcount > 0
        finally:
            conn.close()

    @staticmethod
    def ensure_demo_media_project() -> Dict[str, Any]:
        """
        Creates or returns a pre-populated VYBE AI demonstration project with real 1080p video,
        audio, and titles ready for immediate playback and editing.
        """
        conn = get_connection()
        try:
            cur = conn.cursor()
            cur.execute("SELECT id FROM projects WHERE id = 'proj_vybe_demo'")
            row = cur.fetchone()
            if row:
                return ProjectService.get_project("proj_vybe_demo")
        finally:
            conn.close()

        # Create demo project
        now = datetime.now(timezone.utc).isoformat()
        conn = get_connection()
        try:
            with conn:
                conn.execute(
                    """
                    INSERT INTO projects (
                        id, name, tempo_bpm, time_signature, sample_rate_hz, bit_depth,
                        aspect_ratio, frame_rate, width, height, created_at, updated_at
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                    """,
                    (
                        "proj_vybe_demo", "VYBE Cinematic Showreel (Demo Project)", 124, "4/4",
                        48000, "24", "16:9", 30.0, 1920, 1080, now, now
                    )
                )
        finally:
            conn.close()

        # Generate 2 demo video clips using FFmpeg
        demo_clips = [
            ("01_Cyberpunk_Intro.mp4", "smptebars=duration=4:size=1920x1080:rate=30", "sine=frequency=220:duration=4"),
            ("02_Studio_Action.mp4", "testsrc=duration=5:size=1920x1080:rate=30", "sine=frequency=440:duration=5")
        ]

        for name, v_filter, a_filter in demo_clips:
            temp_file = Path(settings.STORAGE_DIR) / f"temp_{name}"
            try:
                cmd = [
                    "ffmpeg", "-y",
                    "-f", "lavfi", "-i", v_filter,
                    "-f", "lavfi", "-i", a_filter,
                    "-c:v", "libx264", "-preset", "ultrafast", "-pix_fmt", "yuv420p",
                    "-c:a", "aac", "-b:a", "128k",
                    str(temp_file)
                ]
                subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True)
                ProjectService.ingest_asset_file(temp_file, name, project_id="proj_vybe_demo")
            except Exception as e:
                logger.error(f"Failed to generate demo clip {name}: {e}")
            finally:
                if temp_file.exists():
                    temp_file.unlink()

        return ProjectService.get_project("proj_vybe_demo")
