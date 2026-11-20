from typing import Any, Dict, Optional, Tuple
import numpy as np

from app.core.analysis import AudioAnalyzer
from app.core.dsp_engine import DSPOps


MASTERING_PROFILES = {
    "streaming": {
        "name": "Streaming (Spotify, Apple Music, Tidal)",
        "target_lufs": -14.0,
        "true_peak_ceiling_dbtp": -1.0,
        "eq_profile": "modern_clarity",
        "saturation_blend": 0.25,
        "stereo_width_pct": 110.0,
    },
    "cd": {
        "name": "Commercial CD / Loudness",
        "target_lufs": -9.0,
        "true_peak_ceiling_dbtp": -0.1,
        "eq_profile": "punchy_commercial",
        "saturation_blend": 0.35,
        "stereo_width_pct": 105.0,
    },
    "broadcast": {
        "name": "Broadcast Television & Radio (EBU R128)",
        "target_lufs": -23.0,
        "true_peak_ceiling_dbtp": -1.0,
        "eq_profile": "flat_transparent",
        "saturation_blend": 0.10,
        "stereo_width_pct": 100.0,
    },
    "cinema": {
        "name": "Cinema / Theatrical Post-Production",
        "target_lufs": -27.0,
        "true_peak_ceiling_dbtp": -2.0,
        "eq_profile": "dynamic_theatrical",
        "saturation_blend": 0.05,
        "stereo_width_pct": 100.0,
    },
    "audiophile": {
        "name": "Audiophile Hi-Res / Classical / Jazz",
        "target_lufs": -16.0,
        "true_peak_ceiling_dbtp": -1.0,
        "eq_profile": "warm_analog",
        "saturation_blend": 0.15,
        "stereo_width_pct": 105.0,
    }
}


class MasteringEngine:
    """Mastering Engine conforming to EBU R128 and ITU-R BS.1770 standards."""

    @classmethod
    def master_track(
        cls,
        audio: np.ndarray,
        sample_rate: int,
        profile_key: str = "streaming",
        custom_target_lufs: Optional[float] = None,
        custom_ceiling_dbtp: Optional[float] = None
    ) -> Tuple[np.ndarray, Dict[str, Any]]:
        """
        Executes non-destructive mastering chain:
        1. Pre-Analysis
        2. Surgical EQ & Infrasonic Rumble Filter
        3. Analog Glue Saturation
        4. Stereo Width & Mono-Bass Crossover
        5. Exact LUFS Gain Normalization
        6. Lookahead True-Peak Brickwall Limiter
        7. Post-Analysis Quality Audit
        """
        profile = MASTERING_PROFILES.get(profile_key, MASTERING_PROFILES["streaming"]).copy()
        target_lufs = custom_target_lufs if custom_target_lufs is not None else profile["target_lufs"]
        ceiling_dbtp = custom_ceiling_dbtp if custom_ceiling_dbtp is not None else profile["true_peak_ceiling_dbtp"]

        # Step 1: Pre-Analysis
        pre_metrics = AudioAnalyzer.full_audio_analysis(audio, sample_rate)

        # Step 2: Mastering EQ (Highpass 25Hz rumble filter, Air 12kHz +1.5dB, Low-mid clean 300Hz -0.8dB)
        bands = [
            {"type": "highpass", "freq": 25.0, "gain_db": 0.0, "q": 0.707},
            {"type": "peaking", "freq": 320.0, "gain_db": -0.8, "q": 1.2},
            {"type": "peaking", "freq": 3500.0, "gain_db": 1.0, "q": 0.9},
            {"type": "highshelf", "freq": 12000.0, "gain_db": 1.5, "q": 0.707},
        ]
        eq_audio = DSPOps.apply_parametric_eq(audio, sample_rate, bands)

        # Step 3: Harmonic Glue Saturation
        sat_audio = DSPOps.apply_harmonic_saturation(
            eq_audio,
            drive_db=2.5,
            mode="tape",
            blend=profile["saturation_blend"]
        )

        # Step 4: Stereo Imaging & Mono Bass Anchor
        widened = DSPOps.apply_stereo_widener(sat_audio, profile["stereo_width_pct"])

        # Step 5: Loudness Matching
        # Measure intermediate loudness to compute necessary makeup gain
        current_lufs_data = AudioAnalyzer.measure_lufs(widened, sample_rate)
        current_lufs = current_lufs_data["integrated_lufs"]
        
        # Calculate needed gain delta
        gain_delta_db = target_lufs - current_lufs
        # Cap excessive gain boost to avoid extreme distortion
        gain_delta_db = max(-30.0, min(18.0, gain_delta_db))
        gain_linear = 10.0 ** (gain_delta_db / 20.0)

        staged_audio = widened * gain_linear

        # Step 6: True-Peak Brickwall Limiter
        mastered_audio = DSPOps.apply_brickwall_limiter(
            staged_audio,
            sample_rate,
            ceiling_dbtp=ceiling_dbtp,
            lookahead_ms=5.0,
            release_ms=45.0
        )

        # Step 7: Post-Analysis Quality Audit
        post_metrics = AudioAnalyzer.full_audio_analysis(mastered_audio, sample_rate)

        report = {
            "profile_used": profile["name"],
            "target_lufs": target_lufs,
            "target_ceiling_dbtp": ceiling_dbtp,
            "pre_mastering_metrics": pre_metrics,
            "post_mastering_metrics": post_metrics,
            "applied_gain_db": round(gain_delta_db, 2),
            "compliance_pass": (
                post_metrics["true_peak_dbtp"] <= (ceiling_dbtp + 0.1) and
                abs(post_metrics["integrated_lufs"] - target_lufs) <= 1.5
            )
        }

        return mastered_audio, report
