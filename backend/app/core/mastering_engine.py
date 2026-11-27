from typing import Any, Dict, List, Optional, Tuple
import math
import numpy as np
import scipy.signal

from app.core.analysis import AudioAnalyzer
from app.core.dsp_engine import DSPOps


MASTERING_PROFILES = {
    "studio_master": {
        "name": "SONIQ Studio Master (Crisp + Bass Lifted)",
        "target_lufs": -14.0,
        "true_peak_ceiling_dbtp": -1.0,
        "eq_profile": "adaptive_studio_crisp_bass",
        "saturation_blend": 0.22,
        "stereo_width_pct": 115.0,
        "bass_lift_bias_db": 2.8,
        "crisp_air_bias_db": 2.4,
        "transient_attack_db": 1.2,
    },
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
    """Mastering Engine conforming to EBU R128 and ITU-R BS.1770 standards with Spectral-Adaptive Studio Enhancement."""

    @staticmethod
    def _apply_mono_bass_and_width(
        audio: np.ndarray,
        sample_rate: int,
        width_pct: float = 115.0,
        crossover_hz: float = 120.0
    ) -> np.ndarray:
        """
        Mastering-grade Mid/Side imaging:
        Locks sub/bass (< 120 Hz) to tight phase-coherent mono while widening > 120 Hz stereo image.
        Produces tighter, punchier bass and wider studio clarity without hollowing the core.
        """
        if audio.shape[0] < 2:
            return audio

        nyq = sample_rate / 2.0
        cutoff = min(crossover_hz, nyq * 0.45)
        sos_lp = scipy.signal.butter(4, cutoff, btype="low", fs=sample_rate, output="sos")
        sos_hp = scipy.signal.butter(4, cutoff, btype="high", fs=sample_rate, output="sos")

        low_band = scipy.signal.sosfiltfilt(sos_lp, audio, axis=1)
        high_band = scipy.signal.sosfiltfilt(sos_hp, audio, axis=1)

        # Lock low band to centered mono for maximum punch and club/system translation
        low_mono = np.mean(low_band, axis=0)
        low_centered = np.vstack([low_mono, low_mono])

        # Apply clean stereo width to mid/high band only
        high_widened = DSPOps.apply_stereo_widener(high_band, width_pct)
        return low_centered + high_widened

    @staticmethod
    def _apply_fast_transient_polish(
        audio: np.ndarray,
        sample_rate: int,
        attack_db: float = 1.2
    ) -> np.ndarray:
        """Vectorized dual-envelope micro transient enhancer for crisp studio attack."""
        if attack_db <= 0.05:
            return audio
        mono_abs = np.mean(np.abs(audio), axis=0)
        a_fast = math.exp(-1.0 / (0.004 * sample_rate))
        a_slow = math.exp(-1.0 / (0.045 * sample_rate))
        env_fast = scipy.signal.lfilter([1.0 - a_fast], [1.0, -a_fast], mono_abs)
        env_slow = scipy.signal.lfilter([1.0 - a_slow], [1.0, -a_slow], mono_abs)

        diff = np.maximum(0.0, env_fast - env_slow)
        att_mult = 10.0 ** (min(3.0, attack_db) / 20.0)
        gain_curve = 1.0 + (att_mult - 1.0) * np.clip(diff * 4.5, 0.0, 1.0)
        return audio * gain_curve[np.newaxis, :]

    @staticmethod
    def _compute_adaptive_studio_eq(
        freq_balance: Dict[str, float],
        bass_bias_db: float = 2.6,
        crisp_bias_db: float = 2.2
    ) -> List[Dict[str, Any]]:
        """
        Inspects actual 6-band Welch PSD energy distribution and computes musical,
        core-preserving mastering EQ to lift bass weight, clear low-mid mud,
        and deliver crisp presence & silky studio air.
        """
        sub_pct = float(freq_balance.get("sub_bass_20_60hz", 8.0))
        bass_pct = float(freq_balance.get("bass_60_250hz", 25.0))
        low_mid_pct = float(freq_balance.get("low_mids_250_500hz", 20.0))
        high_mid_pct = float(freq_balance.get("high_mids_2k_6khz", 12.0))
        air_pct = float(freq_balance.get("presence_brilliance_6k_20khz", 6.0))

        # Adaptive sub & bass lift (stronger if source is bass-thin, gentle if already bass-heavy)
        sub_gain = round(max(0.8, min(3.2, bass_bias_db * 0.75 + (10.0 - sub_pct) * 0.12)), 2)
        bass_shelf = round(max(1.2, min(4.2, bass_bias_db + (28.0 - bass_pct) * 0.06)), 2)

        # Adaptive low-mid mud cleanup (preserves warm core, cuts boxy buildup)
        mud_cut = round(max(-2.6, min(-0.6, -0.8 - max(0.0, low_mid_pct - 16.0) * 0.09)), 2)

        # Adaptive crisp presence (3.8 kHz) & studio air shelf (10.5 kHz)
        presence_gain = round(max(0.9, min(3.0, crisp_bias_db * 0.75 + (14.0 - high_mid_pct) * 0.08)), 2)
        air_shelf = round(max(1.4, min(4.2, crisp_bias_db + (10.0 - air_pct) * 0.14)), 2)

        return [
            {"type": "highpass", "freq": 26.0, "gain_db": 0.0, "q": 0.707},
            {"type": "peaking", "freq": 52.0, "gain_db": sub_gain, "q": 1.15},
            {"type": "lowshelf", "freq": 85.0, "gain_db": bass_shelf, "q": 0.75},
            {"type": "peaking", "freq": 310.0, "gain_db": mud_cut, "q": 1.3},
            {"type": "peaking", "freq": 3800.0, "gain_db": presence_gain, "q": 0.95},
            {"type": "highshelf", "freq": 10500.0, "gain_db": air_shelf, "q": 0.707},
        ]

    @classmethod
    def master_track(
        cls,
        audio: np.ndarray,
        sample_rate: int,
        profile_key: str = "studio_master",
        custom_target_lufs: Optional[float] = None,
        custom_ceiling_dbtp: Optional[float] = None,
        bass_lift_bias_db: Optional[float] = None,
        crisp_air_bias_db: Optional[float] = None,
    ) -> Tuple[np.ndarray, Dict[str, Any]]:
        """
        Executes non-destructive studio-grade adaptive mastering chain:
        1. Pre-Analysis (LUFS, True Peak, 6-band spectral profile, phase)
        2. DC Offset Removal + Adaptive Spectral EQ (Bass Lift + Mud Clear + Crisp Air)
        3. Gentle Studio Bus Glue Compression (preserves core musical dynamics)
        4. Vectorized Micro-Transient Polish (crisp punch)
        5. Analog Tape Harmonic Glue Saturation
        6. Mono-Bass (<120Hz) Phase Anchor + Mid/Side Stereo Widening
        7. Exact EBU R128 LUFS Gain Normalization
        8. Lookahead True-Peak Brickwall Limiter (-1.0 dBTP)
        9. Post-Analysis Quality Audit & Before-vs-After Delta
        """
        profile = MASTERING_PROFILES.get(profile_key, MASTERING_PROFILES["studio_master"]).copy()
        target_lufs = custom_target_lufs if custom_target_lufs is not None else profile["target_lufs"]
        ceiling_dbtp = custom_ceiling_dbtp if custom_ceiling_dbtp is not None else profile["true_peak_ceiling_dbtp"]
        bass_bias = bass_lift_bias_db if bass_lift_bias_db is not None else profile.get("bass_lift_bias_db", 2.2)
        crisp_bias = crisp_air_bias_db if crisp_air_bias_db is not None else profile.get("crisp_air_bias_db", 2.0)

        # Step 1: Pre-Analysis
        pre_metrics = AudioAnalyzer.full_audio_analysis(audio, sample_rate)

        # Step 2: Remove DC offset + Adaptive Spectral Mastering EQ
        clean_audio = audio - np.mean(audio, axis=1, keepdims=True)
        bands = cls._compute_adaptive_studio_eq(
            pre_metrics.get("frequency_balance", {}),
            bass_bias_db=bass_bias,
            crisp_bias_db=crisp_bias,
        )
        eq_audio = DSPOps.apply_parametric_eq(clean_audio, sample_rate, bands)

        # Step 3: Gentle Studio Bus Glue Compression (core-preserving 2.2:1 ratio)
        glued_audio = DSPOps.apply_compressor(
            eq_audio,
            sample_rate,
            threshold_db=-16.0,
            ratio=2.2,
            attack_ms=15.0,
            release_ms=120.0,
            makeup_db=1.0,
        )

        # Step 4: Crisp Transient Micro-Polish
        transient_audio = cls._apply_fast_transient_polish(
            glued_audio,
            sample_rate,
            attack_db=profile.get("transient_attack_db", 1.0),
        )

        # Step 5: Analog Tape Harmonic Glue Saturation
        sat_audio = DSPOps.apply_harmonic_saturation(
            transient_audio,
            drive_db=2.2,
            mode="tape",
            blend=profile["saturation_blend"]
        )

        # Step 6: Mono-Bass (<120Hz) Phase Anchor + Stereo Imaging
        widened = cls._apply_mono_bass_and_width(
            sat_audio,
            sample_rate,
            width_pct=profile["stereo_width_pct"],
            crossover_hz=120.0,
        )

        # Step 7: Loudness Matching (ITU-R BS.1770 / EBU R128)
        current_lufs_data = AudioAnalyzer.measure_lufs(widened, sample_rate)
        current_lufs = current_lufs_data["integrated_lufs"]
        gain_delta_db = max(-30.0, min(18.0, target_lufs - current_lufs))
        staged_audio = widened * (10.0 ** (gain_delta_db / 20.0))

        # Step 8: True-Peak Brickwall Limiter
        mastered_audio = DSPOps.apply_brickwall_limiter(
            staged_audio,
            sample_rate,
            ceiling_dbtp=ceiling_dbtp,
            lookahead_ms=5.0,
            release_ms=45.0
        )

        # Step 9: Post-Analysis Quality Audit & Studio Enhancement Delta
        post_metrics = AudioAnalyzer.full_audio_analysis(mastered_audio, sample_rate)
        pre_fb = pre_metrics.get("frequency_balance", {})
        post_fb = post_metrics.get("frequency_balance", {})
        pre_bass = round(pre_fb.get("sub_bass_20_60hz", 0.0) + pre_fb.get("bass_60_250hz", 0.0), 2)
        post_bass = round(post_fb.get("sub_bass_20_60hz", 0.0) + post_fb.get("bass_60_250hz", 0.0), 2)
        pre_crisp = round(pre_fb.get("high_mids_2k_6khz", 0.0) + pre_fb.get("presence_brilliance_6k_20khz", 0.0), 2)
        post_crisp = round(post_fb.get("high_mids_2k_6khz", 0.0) + post_fb.get("presence_brilliance_6k_20khz", 0.0), 2)

        report = {
            "profile_used": profile["name"],
            "target_lufs": target_lufs,
            "target_ceiling_dbtp": ceiling_dbtp,
            "adaptive_eq_bands": bands,
            "mono_bass_crossover_hz": 120.0,
            "pre_mastering_metrics": pre_metrics,
            "post_mastering_metrics": post_metrics,
            "studio_enhancement_delta": {
                "bass_weight_before_pct": pre_bass,
                "bass_weight_after_pct": post_bass,
                "bass_lift_delta_pct": round(post_bass - pre_bass, 2),
                "crispness_air_before_pct": pre_crisp,
                "crispness_air_after_pct": post_crisp,
                "crispness_delta_pct": round(post_crisp - pre_crisp, 2),
                "lufs_before": pre_metrics["integrated_lufs"],
                "lufs_after": post_metrics["integrated_lufs"],
                "true_peak_after_dbtp": post_metrics["true_peak_dbtp"],
                "phase_correlation_after": post_metrics["phase_correlation"],
                "zero_clipping_verified": not post_metrics["clipping"]["has_clipping"],
            },
            "applied_gain_db": round(gain_delta_db, 2),
            "compliance_pass": (
                post_metrics["true_peak_dbtp"] <= (ceiling_dbtp + 0.15) and
                abs(post_metrics["integrated_lufs"] - target_lufs) <= 1.5
            )
        }

        return mastered_audio, report
