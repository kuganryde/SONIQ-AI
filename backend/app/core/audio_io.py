import json
import logging
import os
import shutil
import subprocess
import uuid
from pathlib import Path
from typing import Any, Dict, Optional, Tuple

import numpy as np
import soundfile as sf
from app.config import settings

logger = logging.getLogger("soniq.audio_io")


class AudioMetadata:
    def __init__(
        self,
        format_name: str,
        codec_name: str,
        sample_rate: int,
        channels: int,
        channel_layout: str,
        bit_depth: str,
        bit_rate: int,
        duration_seconds: float,
        num_samples: int,
        file_size_bytes: int,
        is_lossless: bool,
    ):
        self.format_name = format_name
        self.codec_name = codec_name
        self.sample_rate = sample_rate
        self.channels = channels
        self.channel_layout = channel_layout
        self.bit_depth = bit_depth
        self.bit_rate = bit_rate
        self.duration_seconds = duration_seconds
        self.num_samples = num_samples
        self.file_size_bytes = file_size_bytes
        self.is_lossless = is_lossless

    def to_dict(self) -> Dict[str, Any]:
        return {
            "format_name": self.format_name,
            "codec_name": self.codec_name,
            "sample_rate": self.sample_rate,
            "channels": self.channels,
            "channel_layout": self.channel_layout,
            "bit_depth": self.bit_depth,
            "bit_rate": self.bit_rate,
            "duration_seconds": round(self.duration_seconds, 4),
            "num_samples": self.num_samples,
            "file_size_bytes": self.file_size_bytes,
            "is_lossless": self.is_lossless,
        }


class AudioIO:
    """Professional Audio I/O Engine with strict non-destructive editing guarantees."""

    @staticmethod
    def probe_audio(file_path: Path | str) -> AudioMetadata:
        """Inspects technical audio metadata via ffprobe and soundfile."""
        path = Path(file_path)
        if not path.exists():
            raise FileNotFoundError(f"Audio file not found: {path}")

        file_size = path.stat().st_size
        
        # Run ffprobe for deep container analysis
        cmd = [
            "ffprobe",
            "-v", "quiet",
            "-print_format", "json",
            "-show_format",
            "-show_streams",
            str(path)
        ]
        res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        if res.returncode != 0:
            raise RuntimeError(f"ffprobe failed to inspect {path}: {res.stderr}")

        info = json.loads(res.stdout)
        audio_stream = next((s for s in info.get("streams", []) if s.get("codec_type") == "audio"), None)
        if not audio_stream:
            raise ValueError(f"No audio stream detected in file: {path.name}")

        format_info = info.get("format", {})
        codec = audio_stream.get("codec_name", "unknown").lower()
        sample_rate = int(audio_stream.get("sample_rate", 44100))
        channels = int(audio_stream.get("channels", 2))
        layout = audio_stream.get("channel_layout", "stereo" if channels == 2 else ("mono" if channels == 1 else f"{channels}.0"))
        
        # Bit depth detection
        sample_fmt = audio_stream.get("sample_fmt", "")
        bits_raw = audio_stream.get("bits_per_raw_sample") or audio_stream.get("bits_per_sample")
        if bits_raw and int(bits_raw) > 0:
            bit_depth = f"{bits_raw}"
        elif "flt" in sample_fmt or "dbl" in sample_fmt:
            bit_depth = "32f"
        elif "s32" in sample_fmt:
            bit_depth = "32"
        elif "s16" in sample_fmt:
            bit_depth = "16"
        elif "s24" in sample_fmt:
            bit_depth = "24"
        else:
            bit_depth = "24"

        duration = float(audio_stream.get("duration") or format_info.get("duration", 0.0))
        bit_rate = int(format_info.get("bit_rate") or audio_stream.get("bit_rate", 0))
        format_name = format_info.get("format_name", path.suffix.replace(".", "")).upper()
        
        # Lossless categorization
        lossless_codecs = ["pcm_s16le", "pcm_s24le", "pcm_s32le", "pcm_f32le", "pcm_f64le", "flac", "alac", "wavpack"]
        is_lossless = any(c in codec for c in lossless_codecs) or path.suffix.lower() in [".wav", ".flac", ".aif", ".aiff", ".bwf"]

        num_samples = int(duration * sample_rate)

        return AudioMetadata(
            format_name=format_name,
            codec_name=codec,
            sample_rate=sample_rate,
            channels=channels,
            channel_layout=layout,
            bit_depth=bit_depth,
            bit_rate=bit_rate,
            duration_seconds=duration,
            num_samples=num_samples,
            file_size_bytes=file_size,
            is_lossless=is_lossless,
        )

    @staticmethod
    def load_audio(
        file_path: Path | str,
        target_sr: Optional[int] = None,
        mono: bool = False
    ) -> Tuple[np.ndarray, int]:
        """
        Loads audio into a 64-bit float NumPy array normalized to [-1.0, 1.0].
        Returns: (audio_data, sample_rate).
        Shape: (channels, samples).
        """
        path = Path(file_path)
        if not path.exists():
            raise FileNotFoundError(f"File not found: {path}")

        try:
            # First attempt soundfile (fast, zero distortion)
            data, sr = sf.read(str(path), dtype="float64", always_2d=True)
            # data shape from sf is (samples, channels) -> transpose to (channels, samples)
            data = data.T
        except Exception:
            # Fallback to ffmpeg for exotic codecs (mp3, aac, m4a, wma, etc.)
            intermediate_wav = Path(settings.STORAGE_DIR / f"temp_{uuid.uuid4().hex[:8]}.wav")
            try:
                cmd = ["ffmpeg", "-y", "-i", str(path), "-c:a", "pcm_f32le", str(intermediate_wav)]
                subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True)
                data, sr = sf.read(str(intermediate_wav), dtype="float64", always_2d=True)
                data = data.T
            finally:
                if intermediate_wav.exists():
                    intermediate_wav.unlink()

        # Channel handling
        if mono and data.shape[0] > 1:
            data = np.mean(data, axis=0, keepdims=True)

        # Resampling if requested using streaming polyphase filter
        if target_sr and target_sr != sr:
            import scipy.signal
            import math
            gcd = math.gcd(int(target_sr), int(sr))
            up = int(target_sr) // gcd
            down = int(sr) // gcd
            data = scipy.signal.resample_poly(data, up, down, axis=1)
            sr = target_sr

        return data, sr

    @staticmethod
    def write_audio(
        audio: np.ndarray,
        output_path: Path | str,
        sample_rate: int = 48000,
        bit_depth: str = "24",
        format_type: str = "WAV",
        non_destructive: bool = True
    ) -> Path:
        """
        Writes multi-channel float audio to disk with specified format and bit depth.
        Preserves original recordings: never silently overwrites an existing file if non_destructive=True.
        """
        out_p = Path(output_path)
        if non_destructive and out_p.exists():
            stem = out_p.stem
            out_p = out_p.with_name(f"{stem}_{uuid.uuid4().hex[:6]}{out_p.suffix}")

        out_p.parent.mkdir(parents=True, exist_ok=True)

        # Transpose audio to (samples, channels) for soundfile
        if audio.ndim == 1:
            data_to_write = audio[:, np.newaxis]
        elif audio.shape[0] <= 16 and audio.shape[1] > audio.shape[0]:
            # shape is (channels, samples)
            data_to_write = audio.T
        else:
            data_to_write = audio

        # Subtype mapping
        fmt = format_type.upper()
        if fmt == "WAV":
            if bit_depth == "16":
                subtype = "PCM_16"
            elif bit_depth == "32" or bit_depth == "32f":
                subtype = "FLOAT"
            else:
                subtype = "PCM_24"
            sf.write(str(out_p), data_to_write, sample_rate, subtype=subtype, format="WAV")
        elif fmt == "FLAC":
            subtype = "PCM_16" if bit_depth == "16" else "PCM_24"
            sf.write(str(out_p), data_to_write, sample_rate, subtype=subtype, format="FLAC")
        elif fmt == "AIFF":
            subtype = "PCM_16" if bit_depth == "16" else ("FLOAT" if "32" in bit_depth else "PCM_24")
            sf.write(str(out_p), data_to_write, sample_rate, subtype=subtype, format="AIFF")
        elif fmt in ["MP3", "AAC", "OGG", "OPUS"]:
            # Write temp WAV and convert via ffmpeg with strict quality parameters
            temp_wav = out_p.with_suffix(".tmp.wav")
            sf.write(str(temp_wav), data_to_write, sample_rate, subtype="PCM_24", format="WAV")
            try:
                cmd = ["ffmpeg", "-y", "-i", str(temp_wav)]
                if fmt == "MP3":
                    cmd.extend(["-ac", "2", "-c:a", "libmp3lame", "-b:a", "320k"])
                elif fmt == "AAC":
                    cmd.extend(["-c:a", "aac", "-b:a", "320k"])
                elif fmt == "OGG":
                    cmd.extend(["-c:a", "libvorbis", "-q:a", "8"])
                elif fmt == "OPUS":
                    cmd.extend(["-c:a", "libopus", "-b:a", "256k"])
                cmd.append(str(out_p))
                subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True)
            finally:
                if temp_wav.exists():
                    temp_wav.unlink()
        else:
            # Default fallback to 24-bit WAV
            sf.write(str(out_p), data_to_write, sample_rate, subtype="PCM_24", format="WAV")

        return out_p
