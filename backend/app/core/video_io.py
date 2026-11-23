import json
import logging
import os
import hashlib
import subprocess
import uuid
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

import numpy as np
from app.config import settings

logger = logging.getLogger("vybe.video_io")


class VideoMetadata:
    def __init__(
        self,
        file_name: str,
        file_path: str,
        media_type: str, # 'video', 'audio', 'image', 'project'
        format_name: str,
        duration_seconds: float,
        file_size_bytes: int,
        width: int = 0,
        height: int = 0,
        frame_rate: float = 0.0,
        aspect_ratio: str = "16:9",
        video_codec: str = "",
        pixel_format: str = "",
        color_space: str = "",
        audio_codec: str = "",
        audio_channels: int = 0,
        audio_sample_rate: int = 0,
        has_audio: bool = False,
        has_video: bool = False,
        checksum_sha256: str = "",
        raw_probe: Optional[Dict[str, Any]] = None
    ):
        self.file_name = file_name
        self.file_path = file_path
        self.media_type = media_type
        self.format_name = format_name
        self.duration_seconds = duration_seconds
        self.file_size_bytes = file_size_bytes
        self.width = width
        self.height = height
        self.frame_rate = frame_rate
        self.aspect_ratio = aspect_ratio
        self.video_codec = video_codec
        self.pixel_format = pixel_format
        self.color_space = color_space
        self.audio_codec = audio_codec
        self.audio_channels = audio_channels
        self.audio_sample_rate = audio_sample_rate
        self.has_audio = has_audio
        self.has_video = has_video
        self.checksum_sha256 = checksum_sha256
        self.raw_probe = raw_probe or {}

    def to_dict(self) -> Dict[str, Any]:
        return {
            "file_name": self.file_name,
            "file_path": self.file_path,
            "media_type": self.media_type,
            "format_name": self.format_name,
            "duration_seconds": round(self.duration_seconds, 3),
            "file_size_bytes": self.file_size_bytes,
            "width": self.width,
            "height": self.height,
            "frame_rate": round(self.frame_rate, 2),
            "aspect_ratio": self.aspect_ratio,
            "video_codec": self.video_codec,
            "pixel_format": self.pixel_format,
            "color_space": self.color_space,
            "audio_codec": self.audio_codec,
            "audio_channels": self.audio_channels,
            "audio_sample_rate": self.audio_sample_rate,
            "has_audio": self.has_audio,
            "has_video": self.has_video,
            "checksum_sha256": self.checksum_sha256
        }


class VideoIO:
    """Professional Video & Multimedia Ingestion Engine with Sovereign Non-Destructive Pipelines."""

    @staticmethod
    def calculate_sha256(path: Path | str, chunk_size: int = 1024 * 1024) -> str:
        """Calculates cryptographic SHA256 checksum for media asset provenance."""
        p = Path(path)
        sha = hashlib.sha256()
        with open(p, "rb") as f:
            while chunk := f.read(chunk_size):
                sha.update(chunk)
        return sha.hexdigest()

    @staticmethod
    def probe_media(file_path: Path | str) -> VideoMetadata:
        """Deep container and stream inspection via ffprobe."""
        p = Path(file_path)
        if not p.exists():
            raise FileNotFoundError(f"Media file not found: {p}")

        file_size = p.stat().st_size
        checksum = VideoIO.calculate_sha256(p)

        cmd = [
            "ffprobe",
            "-v", "quiet",
            "-print_format", "json",
            "-show_format",
            "-show_streams",
            str(p)
        ]
        res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        if res.returncode != 0:
            raise RuntimeError(f"ffprobe inspection failed: {res.stderr}")

        info = json.loads(res.stdout)
        format_info = info.get("format", {})
        streams = info.get("streams", [])

        video_stream = next((s for s in streams if s.get("codec_type") == "video"), None)
        audio_stream = next((s for s in streams if s.get("codec_type") == "audio"), None)

        ext = p.suffix.lower().lstrip(".")
        if ext in settings.SUPPORTED_IMAGE_FORMATS:
            media_type = "image"
        elif video_stream is not None:
            media_type = "video"
        elif audio_stream is not None:
            media_type = "audio"
        elif ext in settings.SUPPORTED_PROJECT_FORMATS:
            media_type = "project"
        else:
            media_type = "unknown"

        duration = 0.0
        if "duration" in format_info:
            duration = float(format_info["duration"])
        elif video_stream and "duration" in video_stream:
            duration = float(video_stream["duration"])
        elif audio_stream and "duration" in audio_stream:
            duration = float(audio_stream["duration"])

        # Video specifics
        width = 0
        height = 0
        fps = 0.0
        aspect_ratio = "16:9"
        v_codec = ""
        pix_fmt = ""
        color_space = ""

        if video_stream:
            width = int(video_stream.get("width", 0))
            height = int(video_stream.get("height", 0))
            v_codec = video_stream.get("codec_name", "")
            pix_fmt = video_stream.get("pix_fmt", "")
            color_space = video_stream.get("color_space", "")

            # Calculate Aspect Ratio
            if width > 0 and height > 0:
                gcd = np.gcd(width, height)
                rw, rh = width // gcd, height // gcd
                if abs(width / height - 16 / 9) < 0.05:
                    aspect_ratio = "16:9"
                elif abs(width / height - 9 / 16) < 0.05:
                    aspect_ratio = "9:16"
                elif abs(width / height - 1.0) < 0.05:
                    aspect_ratio = "1:1"
                elif abs(width / height - 4 / 5) < 0.05:
                    aspect_ratio = "4:5"
                elif abs(width / height - 21 / 9) < 0.05:
                    aspect_ratio = "21:9"
                else:
                    aspect_ratio = f"{rw}:{rh}"

            # Frame rate parsing (evaluating fractional strings e.g. "30000/1001" or "30/1")
            r_fps = video_stream.get("r_frame_rate", "0/1")
            if "/" in r_fps:
                num, den = r_fps.split("/")
                fps = float(num) / float(den) if float(den) > 0 else 0.0
            else:
                fps = float(r_fps)

        # Audio specifics
        a_codec = ""
        a_channels = 0
        a_sr = 0
        if audio_stream:
            a_codec = audio_stream.get("codec_name", "")
            a_channels = int(audio_stream.get("channels", 0))
            a_sr = int(audio_stream.get("sample_rate", 0))

        return VideoMetadata(
            file_name=p.name,
            file_path=str(p.resolve()),
            media_type=media_type,
            format_name=format_info.get("format_name", ext),
            duration_seconds=duration,
            file_size_bytes=file_size,
            width=width,
            height=height,
            frame_rate=fps,
            aspect_ratio=aspect_ratio,
            video_codec=v_codec,
            pixel_format=pix_fmt,
            color_space=color_space,
            audio_codec=a_codec,
            audio_channels=a_channels,
            audio_sample_rate=a_sr,
            has_audio=audio_stream is not None,
            has_video=video_stream is not None,
            checksum_sha256=checksum,
            raw_probe=info
        )

    @staticmethod
    def generate_thumbnail(
        video_path: Path | str,
        output_path: Path | str,
        timestamp_sec: float = 1.0,
        target_width: int = 480
    ) -> Path:
        """Extracts a crisp poster frame thumbnail using FFmpeg."""
        src = Path(video_path)
        out = Path(output_path)
        out.parent.mkdir(parents=True, exist_ok=True)

        cmd = [
            "ffmpeg", "-y",
            "-ss", str(max(0.0, timestamp_sec)),
            "-i", str(src),
            "-vframes", "1",
            "-vf", f"scale={target_width}:-1",
            "-q:v", "2",
            str(out)
        ]
        res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        if res.returncode != 0:
            # Fallback to timestamp 0.0 if timestamp exceeds duration
            cmd_fallback = [
                "ffmpeg", "-y",
                "-ss", "0.0",
                "-i", str(src),
                "-vframes", "1",
                "-vf", f"scale={target_width}:-1",
                "-q:v", "2",
                str(out)
            ]
            res2 = subprocess.run(cmd_fallback, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
            if res2.returncode != 0:
                raise RuntimeError(f"Thumbnail generation failed: {res2.stderr}")

        return out

    @staticmethod
    def generate_filmstrip(
        video_path: Path | str,
        output_dir: Path | str,
        duration_sec: float,
        count: int = 8,
        thumb_width: int = 160
    ) -> List[str]:
        """Generates multiple sequential frames across the video for hover scrub preview."""
        src = Path(video_path)
        out_dir = Path(output_dir)
        out_dir.mkdir(parents=True, exist_ok=True)

        paths = []
        if duration_sec <= 0:
            duration_sec = 1.0

        timestamps = [round(i * (duration_sec / max(count, 1)), 2) for i in range(count)]
        stem = src.stem

        for idx, ts in enumerate(timestamps):
            frame_name = f"{stem}_strip_{idx:02d}.jpg"
            frame_path = out_dir / frame_name
            try:
                VideoIO.generate_thumbnail(src, frame_path, timestamp_sec=ts, target_width=thumb_width)
                paths.append(str(frame_path))
            except Exception as e:
                logger.warning(f"Could not generate filmstrip frame {idx} at {ts}s: {e}")

        return paths

    @staticmethod
    def generate_proxy(
        video_path: Path | str,
        output_path: Path | str,
        target_height: int = 540,
        crf: int = 24
    ) -> Path:
        """
        Generates a fast, low-latency editing proxy (540p H.264) optimized for smooth browser scrub.
        Includes faststart flag to place MOOV atom at head of file for instantaneous seeking.
        """
        src = Path(video_path)
        out = Path(output_path)
        out.parent.mkdir(parents=True, exist_ok=True)

        # Scale preserving aspect ratio, ensuring even dimensions for H.264 macroblocks (trunc(oh*a/2)*2)
        vf_filter = f"scale=-2:{target_height}"

        cmd = [
            "ffmpeg", "-y",
            "-i", str(src),
            "-vf", vf_filter,
            "-c:v", "libx264",
            "-preset", "veryfast",
            "-crf", str(crf),
            "-pix_fmt", "yuv420p",
            "-c:a", "aac",
            "-b:a", "128k",
            "-ar", "48000",
            "-movflags", "+faststart",
            str(out)
        ]
        res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        if res.returncode != 0:
            raise RuntimeError(f"Proxy generation failed: {res.stderr}")

        return out

    @staticmethod
    def extract_audio_to_wav(
        video_path: Path | str,
        output_wav_path: Path | str,
        sample_rate: int = 48000
    ) -> Optional[Path]:
        """
        Extracts lossless 24-bit PCM WAV audio from video container for SONIQ audio engine processing.
        Returns Path to WAV if audio present, or None if video is silent.
        """
        src = Path(video_path)
        out = Path(output_wav_path)
        out.parent.mkdir(parents=True, exist_ok=True)

        cmd = [
            "ffmpeg", "-y",
            "-i", str(src),
            "-vn",
            "-c:a", "pcm_s24le",
            "-ar", str(sample_rate),
            str(out)
        ]
        res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        if res.returncode != 0 or not out.exists() or out.stat().st_size == 0:
            if out.exists():
                out.unlink()
            return None

        return out

    @staticmethod
    def extract_waveform_peaks(
        media_path: Path | str,
        num_points: int = 120
    ) -> List[float]:
        """Extracts normalized audio waveform peaks [0.0 - 1.0] from video or audio file."""
        src = Path(media_path)
        # Extract audio to temp wav if not already a soundfile compatible format
        temp_wav = Path(settings.STORAGE_DIR) / f"wf_temp_{uuid.uuid4().hex[:8]}.wav"
        try:
            cmd = [
                "ffmpeg", "-y",
                "-i", str(src),
                "-vn",
                "-ac", "1",
                "-ar", "8000",
                "-c:a", "pcm_s16le",
                str(temp_wav)
            ]
            res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            if res.returncode != 0 or not temp_wav.exists() or temp_wav.stat().st_size == 0:
                # Silent or video without audio track
                return [0.0] * num_points

            import soundfile as sf
            data, sr = sf.read(str(temp_wav), dtype="float32")
            if len(data) == 0:
                return [0.0] * num_points

            samples_per_block = max(1, len(data) // num_points)
            peaks = []
            for i in range(num_points):
                chunk = data[i * samples_per_block : (i + 1) * samples_per_block]
                if len(chunk) > 0:
                    peaks.append(round(float(np.max(np.abs(chunk))), 4))
                else:
                    peaks.append(0.0)

            # Normalize to 0.0 - 1.0
            max_val = max(peaks) if peaks else 1.0
            if max_val > 0.001:
                peaks = [round(p / max_val, 4) for p in peaks]

            return peaks
        except Exception as e:
            logger.warning(f"Waveform peak extraction fallback for {src.name}: {e}")
            return [0.0] * num_points
        finally:
            if temp_wav.exists():
                try:
                    temp_wav.unlink()
                except Exception:
                    pass
