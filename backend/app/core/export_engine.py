import json
import logging
import uuid
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, List, Optional
import numpy as np

from app.config import settings
from app.core.analysis import AudioAnalyzer
from app.core.audio_io import AudioIO

logger = logging.getLogger("soniq.export_engine")


class ExportEngine:
    """Professional Audio Export, Format Conversion, and Delivery Engine."""

    @staticmethod
    def render_and_export(
        audio: np.ndarray,
        sample_rate: int,
        project_name: str,
        export_name: str,
        output_format: str = "FLAC",
        bit_depth: str = "24",
        target_sample_rate: Optional[int] = None,
        channels_layout: str = "stereo",
        metadata: Optional[Dict[str, Any]] = None
    ) -> Dict[str, Any]:
        """
        Bounces and exports audio into professional delivery formats.
        Generates an immutable delivery package and technical QC certificate.
        """
        sr = target_sample_rate or sample_rate
        proc_audio = np.copy(audio)

        # Resample if target sample rate differs
        if sr != sample_rate:
            import scipy.signal
            num_samples = int(round(proc_audio.shape[1] * sr / sample_rate))
            resampled = []
            for ch in range(proc_audio.shape[0]):
                resampled.append(scipy.signal.resample(proc_audio[ch], num_samples))
            proc_audio = np.array(resampled, dtype=np.float64)

        # Output filename
        safe_proj = "".join(c for c in project_name if c.isalnum() or c in ("-", "_")).rstrip()
        safe_name = "".join(c for c in export_name if c.isalnum() or c in ("-", "_")).rstrip()
        file_uuid = uuid.uuid4().hex[:8]
        ext = output_format.lower()
        if ext == "bwf":
            ext = "wav"
        filename = f"{safe_proj}_{safe_name}_{sr}Hz_{bit_depth}bit_{file_uuid}.{ext}"
        output_path = settings.EXPORTS_DIR / filename

        # Write audio file
        actual_path = AudioIO.write_audio(
            proc_audio,
            output_path=output_path,
            sample_rate=sr,
            bit_depth=bit_depth,
            format_type=output_format,
            non_destructive=True
        )

        # Deep Quality Control Analysis on the rendered file
        reloaded_audio, reloaded_sr = AudioIO.load_audio(actual_path)
        qc_metrics = AudioAnalyzer.full_audio_analysis(reloaded_audio, reloaded_sr)
        probe_meta = AudioIO.probe_audio(actual_path)

        # Format warnings
        warnings = []
        if output_format.upper() in ["MP3", "AAC", "OGG", "OPUS"]:
            warnings.append(f"Format {output_format} involves lossy perceptual compression. Not bit-transparent.")
        if qc_metrics["clipping"]["has_clipping"]:
            warnings.append(f"Clipping detected: {qc_metrics['clipping']['clipped_samples_count']} samples saturated.")
        if qc_metrics["phase_correlation"] < 0.2:
            warnings.append(f"Low phase correlation ({qc_metrics['phase_correlation']}). Check mono compatibility.")

        # Build Certificate
        certificate = {
            "certificate_id": f"CERT-{uuid.uuid4().hex[:12].upper()}",
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "project_name": project_name,
            "export_name": export_name,
            "file_name": actual_path.name,
            "file_size_bytes": actual_path.stat().st_size,
            "download_path": f"/api/v1/audio/download/{actual_path.name}",
            "technical_specifications": {
                "format": output_format.upper(),
                "codec": probe_meta.codec_name,
                "sample_rate_hz": reloaded_sr,
                "bit_depth": bit_depth,
                "channel_count": reloaded_audio.shape[0],
                "channel_layout": channels_layout,
                "duration_seconds": round(reloaded_audio.shape[1] / reloaded_sr, 3),
                "is_lossless": probe_meta.is_lossless
            },
            "acoustic_measurements": qc_metrics,
            "quality_audit": {
                "passed_clipping_test": not qc_metrics["clipping"]["has_clipping"],
                "passed_true_peak_test": qc_metrics["true_peak_dbtp"] <= 0.0,
                "passed_phase_test": qc_metrics["phase_correlation"] >= 0.0,
                "overall_status": "APPROVED" if len(warnings) == 0 else "PASSED_WITH_WARNINGS"
            },
            "warnings": warnings,
            "metadata_tags": metadata or {}
        }

        # Save QC report alongside audio file
        cert_path = actual_path.with_suffix(".json")
        with open(cert_path, "w", encoding="utf-8") as f:
            json.dump(certificate, f, indent=2)

        return certificate
