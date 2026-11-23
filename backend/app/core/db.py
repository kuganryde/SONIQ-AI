import sqlite3
import json
import logging
from pathlib import Path
from typing import Any, Dict, List, Optional
from datetime import datetime, timezone
from app.config import settings

logger = logging.getLogger("vybe.db")

DB_PATH = Path(settings.STORAGE_DIR) / "vybe_studio.db"

def get_connection() -> sqlite3.Connection:
    """Creates a connection to the SQLite database with WAL mode enabled."""
    conn = sqlite3.connect(str(DB_PATH), timeout=20.0)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA journal_mode=WAL;")
    conn.execute("PRAGMA foreign_keys=ON;")
    return conn

def init_db():
    """Initializes tables for Projects, Media Assets, Tracks, Clips, and Render Jobs."""
    conn = get_connection()
    try:
        with conn:
            conn.executescript("""
            CREATE TABLE IF NOT EXISTS projects (
                id TEXT PRIMARY KEY,
                name TEXT NOT NULL,
                tempo_bpm INTEGER DEFAULT 120,
                time_signature TEXT DEFAULT '4/4',
                sample_rate_hz INTEGER DEFAULT 48000,
                bit_depth TEXT DEFAULT '24',
                aspect_ratio TEXT DEFAULT '16:9',
                frame_rate REAL DEFAULT 30.0,
                width INTEGER DEFAULT 1920,
                height INTEGER DEFAULT 1080,
                created_at TEXT NOT NULL,
                updated_at TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS media_assets (
                id TEXT PRIMARY KEY,
                project_id TEXT,
                file_name TEXT NOT NULL,
                file_path TEXT NOT NULL,
                proxy_path TEXT,
                thumbnail_path TEXT,
                filmstrip_paths TEXT, -- JSON array of frame thumbnail paths
                media_type TEXT NOT NULL, -- 'video', 'audio', 'image', 'project'
                format_name TEXT NOT NULL,
                duration_seconds REAL DEFAULT 0.0,
                file_size_bytes INTEGER DEFAULT 0,
                width INTEGER DEFAULT 0,
                height INTEGER DEFAULT 0,
                frame_rate REAL DEFAULT 0.0,
                video_codec TEXT DEFAULT '',
                audio_codec TEXT DEFAULT '',
                audio_channels INTEGER DEFAULT 0,
                audio_sample_rate INTEGER DEFAULT 0,
                waveform_preview TEXT DEFAULT '[]', -- JSON array of floats
                has_proxy INTEGER DEFAULT 0,
                checksum_sha256 TEXT NOT NULL,
                created_at TEXT NOT NULL,
                FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE SET NULL
            );

            CREATE TABLE IF NOT EXISTS tracks (
                id TEXT PRIMARY KEY,
                project_id TEXT NOT NULL,
                name TEXT NOT NULL,
                category TEXT DEFAULT 'Media',
                track_type TEXT DEFAULT 'video', -- 'video', 'audio', 'overlay', 'subtitle'
                track_index INTEGER DEFAULT 0,
                color_hex TEXT DEFAULT '#8b5cf6',
                volume_db REAL DEFAULT 0.0,
                pan REAL DEFAULT 0.0,
                mute INTEGER DEFAULT 0,
                solo INTEGER DEFAULT 0,
                visible INTEGER DEFAULT 1,
                locked INTEGER DEFAULT 0,
                created_at TEXT NOT NULL,
                FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
            );

            CREATE TABLE IF NOT EXISTS clips (
                id TEXT PRIMARY KEY,
                track_id TEXT NOT NULL,
                asset_id TEXT NOT NULL,
                clip_type TEXT DEFAULT 'video', -- 'video', 'audio', 'image', 'title'
                start_time_seconds REAL DEFAULT 0.0,
                duration_seconds REAL NOT NULL,
                source_in_seconds REAL DEFAULT 0.0,
                source_out_seconds REAL NOT NULL,
                speed_multiplier REAL DEFAULT 1.0,
                transform_matrix TEXT DEFAULT '{}', -- JSON object: scale, pos_x, pos_y, opacity
                created_at TEXT NOT NULL,
                FOREIGN KEY (track_id) REFERENCES tracks(id) ON DELETE CASCADE,
                FOREIGN KEY (asset_id) REFERENCES media_assets(id) ON DELETE CASCADE
            );

            CREATE TABLE IF NOT EXISTS render_jobs (
                id TEXT PRIMARY KEY,
                project_id TEXT,
                profile_name TEXT NOT NULL,
                output_format TEXT NOT NULL,
                resolution TEXT NOT NULL,
                frame_rate REAL NOT NULL,
                status TEXT DEFAULT 'QUEUED', -- QUEUED, RENDERING, COMPLETED, FAILED
                progress_percent REAL DEFAULT 0.0,
                output_file_path TEXT,
                error_message TEXT,
                hardware_accelerator TEXT DEFAULT 'CPU_FALLBACK',
                created_at TEXT NOT NULL,
                completed_at TEXT,
                FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE SET NULL
            );
            """)
        logger.info("VYBE SQLite database initialized successfully.")
    finally:
        conn.close()

# Auto-initialize DB on import
init_db()
