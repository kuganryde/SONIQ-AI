import os
from pathlib import Path
from pydantic import BaseModel

BASE_DIR = Path("/root/soniq-ai")
BACKEND_DIR = BASE_DIR / "backend"
STORAGE_DIR = BACKEND_DIR / "storage"

class Settings(BaseModel):
    APP_NAME: str = "RYDETECH SONIQ AI"
    APP_VERSION: str = "1.0.0"
    BRAND_PARENT: str = "RYDETECH GLOBAL ENTERPRISE"
    HOST: str = "0.0.0.0"
    PORT: int = 8008
    ENVIRONMENT: str = "production"
    
    # Storage Paths
    STORAGE_DIR: Path = STORAGE_DIR
    UPLOAD_DIR: Path = STORAGE_DIR / "uploads"
    PROCESSED_DIR: Path = STORAGE_DIR / "processed"
    STEMS_DIR: Path = STORAGE_DIR / "stems"
    EXPORTS_DIR: Path = STORAGE_DIR / "exports"
    SYNTHS_DIR: Path = STORAGE_DIR / "synths"
    BRAND_DIR: Path = STORAGE_DIR / "brand"
    VIDEO_UPLOAD_DIR: Path = STORAGE_DIR / "video_uploads"
    PROXIES_DIR: Path = STORAGE_DIR / "proxies"
    THUMBNAILS_DIR: Path = STORAGE_DIR / "thumbnails"
    VIDEO_EXPORTS_DIR: Path = STORAGE_DIR / "video_exports"
    
    # Database
    DATABASE_URL: str = f"sqlite:///{STORAGE_DIR}/soniq_ai.db"
    
    # AI Ollama Local Service
    OLLAMA_BASE_URL: str = os.getenv("OLLAMA_BASE_URL", "http://localhost:11434")
    OLLAMA_MODEL: str = os.getenv("OLLAMA_MODEL", "qwen2.5:3b")
    
    # Audio Engineering Limits & Standards
    MAX_UPLOAD_SIZE_BYTES: int = 500 * 1024 * 1024  # 500 MB
    SUPPORTED_IMPORT_FORMATS: list[str] = [
        "wav", "bwf", "aiff", "aif", "flac", "mp3", "aac", "m4a", "ogg", "opus", "alac", "caf", "midi", "mid"
    ]
    SUPPORTED_VIDEO_FORMATS: list[str] = [
        "mp4", "mov", "mkv", "webm", "avi", "flv", "ts", "m4v", "prores"
    ]
    SUPPORTED_IMAGE_FORMATS: list[str] = [
        "jpg", "jpeg", "png", "webp", "gif", "svg", "bmp"
    ]
    SUPPORTED_PROJECT_FORMATS: list[str] = [
        "json", "edl", "otio", "fcpxml"
    ]
    SUPPORTED_SAMPLE_RATES: list[int] = [44100, 48000, 88200, 96000, 176400, 192000]
    SUPPORTED_BIT_DEPTHS: list[str] = ["16", "24", "32f"]
    
    # Sovereign Data Residency & Continuous Git Sync (srv1302021)
    NON_DESTRUCTIVE_STRICT: bool = True

settings = Settings()

# Ensure directories exist
for p in [
    settings.UPLOAD_DIR,
    settings.PROCESSED_DIR,
    settings.STEMS_DIR,
    settings.EXPORTS_DIR,
    settings.SYNTHS_DIR,
    settings.BRAND_DIR,
    settings.VIDEO_UPLOAD_DIR,
    settings.PROXIES_DIR,
    settings.THUMBNAILS_DIR,
    settings.VIDEO_EXPORTS_DIR,
]:
    p.mkdir(parents=True, exist_ok=True)
