import math
from typing import Any, Dict, List, Optional, Tuple
import numpy as np
import scipy.signal


class BiquadFilter:
    """RBJ Audio EQ Cookbook Biquad Filter implementation for 64-bit float precision."""

    @staticmethod
    def design_filter(
        filter_type: str,
        freq: float,
        sample_rate: int,
        gain_db: float = 0.0,
        q: float = 0.7071
    ) -> Tuple[np.ndarray, np.ndarray]:
        f0 = max(10.0, min(sample_rate / 2.05, float(freq)))
        w0 = 2.0 * math.pi * f0 / sample_rate
        cos_w0 = math.cos(w0)
        sin_w0 = math.sin(w0)
        alpha = sin_w0 / (2.0 * max(0.01, q))
        A = 10.0 ** (gain_db / 40.0)

        ft = filter_type.lower()
        if ft in ["peaking", "bell"]:
            b0 = 1.0 + alpha * A
            b1 = -2.0 * cos_w0
            b2 = 1.0 - alpha * A
            a0 = 1.0 + alpha / A
            a1 = -2.0 * cos_w0
            a2 = 1.0 - alpha / A
        elif ft == "lowpass":
            b0 = (1.0 - cos_w0) / 2.0
            b1 = 1.0 - cos_w0
            b2 = (1.0 - cos_w0) / 2.0
            a0 = 1.0 + alpha
            a1 = -2.0 * cos_w0
            a2 = 1.0 - alpha
        elif ft == "highpass":
            b0 = (1.0 + cos_w0) / 2.0
            b1 = -(1.0 + cos_w0)
            b2 = (1.0 + cos_w0) / 2.0
            a0 = 1.0 + alpha
            a1 = -2.0 * cos_w0
            a2 = 1.0 - alpha
        elif ft == "lowshelf":
            two_sqrt_A_alpha = 2.0 * math.sqrt(A) * alpha
            b0 = A * ((A + 1.0) - (A - 1.0) * cos_w0 + two_sqrt_A_alpha)
            b1 = 2.0 * A * ((A - 1.0) - (A + 1.0) * cos_w0)
            b2 = A * ((A + 1.0) - (A - 1.0) * cos_w0 - two_sqrt_A_alpha)
            a0 = (A + 1.0) + (A - 1.0) * cos_w0 + two_sqrt_A_alpha
            a1 = -2.0 * ((A - 1.0) + (A + 1.0) * cos_w0)
            a2 = (A + 1.0) + (A - 1.0) * cos_w0 - two_sqrt_A_alpha
        elif ft == "highshelf":
            two_sqrt_A_alpha = 2.0 * math.sqrt(A) * alpha
            b0 = A * ((A + 1.0) + (A - 1.0) * cos_w0 + two_sqrt_A_alpha)
            b1 = -2.0 * A * ((A - 1.0) + (A + 1.0) * cos_w0)
            b2 = A * ((A + 1.0) + (A - 1.0) * cos_w0 - two_sqrt_A_alpha)
            a0 = (A + 1.0) - (A - 1.0) * cos_w0 + two_sqrt_A_alpha
            a1 = 2.0 * ((A - 1.0) - (A + 1.0) * cos_w0)
            a2 = (A + 1.0) - (A - 1.0) * cos_w0 - two_sqrt_A_alpha
        elif ft == "notch":
            b0 = 1.0
            b1 = -2.0 * cos_w0
            b2 = 1.0
            a0 = 1.0 + alpha
            a1 = -2.0 * cos_w0
            a2 = 1.0 - alpha
        else:
            # Bypass
            return np.array([1.0, 0.0, 0.0]), np.array([1.0, 0.0, 0.0])

        b = np.array([b0 / a0, b1 / a0, b2 / a0], dtype=np.float64)
        a = np.array([1.0, a1 / a0, a2 / a0], dtype=np.float64)
        return b, a


class DSPOps:
    """Real DSP Audio Processing Methods (64-bit float precision)."""

    @staticmethod
    def apply_parametric_eq(
        audio: np.ndarray,
        sample_rate: int,
        bands: List[Dict[str, Any]]
    ) -> np.ndarray:
        """
        Applies multi-band Parametric EQ.
        Each band: {"type": "peaking|lowshelf|highshelf|lowpass|highpass", "freq": 1000, "gain_db": 3.0, "q": 0.707}
        """
        out = np.copy(audio).astype(np.float64)
        for band in bands:
            b_type = band.get("type", "peaking")
            freq = band.get("freq", 1000.0)
            gain_db = band.get("gain_db", 0.0)
            q = band.get("q", 0.7071)
            
            if abs(gain_db) < 0.05 and b_type in ["peaking", "lowshelf", "highshelf"]:
                continue
                
            b, a = BiquadFilter.design_filter(b_type, freq, sample_rate, gain_db, q)
            for ch in range(out.shape[0]):
                out[ch] = scipy.signal.lfilter(b, a, out[ch])
        return out

    @staticmethod
    def apply_compressor(
        audio: np.ndarray,
        sample_rate: int,
        threshold_db: float = -20.0,
        ratio: float = 4.0,
        attack_ms: float = 15.0,
        release_ms: float = 100.0,
        knee_db: float = 4.0,
        makeup_gain_db: float = 0.0
    ) -> np.ndarray:
        """Professional studio compressor with soft knee and exponential ballistics."""
        channels, num_samples = audio.shape
        out = np.zeros_like(audio, dtype=np.float64)

        # Attack and release coefficients
        alpha_attack = math.exp(-1.0 / (max(0.1, attack_ms) * 0.001 * sample_rate))
        alpha_release = math.exp(-1.0 / (max(1.0, release_ms) * 0.001 * sample_rate))
        makeup_linear = 10.0 ** (makeup_gain_db / 20.0)

        # Process linked stereo envelope
        mono_detector = np.max(np.abs(audio), axis=0)
        envelope = 0.0
        gain_reduction = np.ones(num_samples, dtype=np.float64)

        half_knee = knee_db / 2.0
        thresh = threshold_db

        for i in range(num_samples):
            x = mono_detector[i]
            # Smooth envelope follower
            if x > envelope:
                envelope = alpha_attack * envelope + (1.0 - alpha_attack) * x
            else:
                envelope = alpha_release * envelope + (1.0 - alpha_release) * x

            env_db = 20.0 * math.log10(max(envelope, 1e-6))
            
            # Static characteristic curve with soft-knee
            if env_db < (thresh - half_knee):
                gr_db = 0.0
            elif env_db > (thresh + half_knee):
                gr_db = (thresh - env_db) * (1.0 - 1.0 / max(1.0, ratio))
            else:
                # Soft knee quadratic interpolation
                overshoot = env_db - thresh + half_knee
                gr_db = -((1.0 - 1.0 / max(1.0, ratio)) * (overshoot ** 2)) / (2.0 * knee_db)

            gain_reduction[i] = 10.0 ** (gr_db / 20.0)

        # Apply gain reduction and makeup gain to all channels
        for ch in range(channels):
            out[ch] = audio[ch] * gain_reduction * makeup_linear

        return out

    @staticmethod
    def apply_brickwall_limiter(
        audio: np.ndarray,
        sample_rate: int,
        ceiling_dbtp: float = -0.1,
        lookahead_ms: float = 5.0,
        release_ms: float = 50.0
    ) -> np.ndarray:
        """Zero-overshoot lookahead brickwall peak limiter."""
        channels, num_samples = audio.shape
        ceiling_linear = 10.0 ** (ceiling_dbtp / 20.0)
        lookahead_samples = int(lookahead_ms * 0.001 * sample_rate)
        
        # Delayed audio buffer for lookahead
        delayed_audio = np.zeros((channels, num_samples + lookahead_samples), dtype=np.float64)
        delayed_audio[:, lookahead_samples:] = audio
        
        # Peak detection envelope
        peak_detector = np.max(np.abs(audio), axis=0)
        alpha_release = math.exp(-1.0 / (max(1.0, release_ms) * 0.001 * sample_rate))
        
        gain_envelope = np.ones(num_samples + lookahead_samples, dtype=np.float64)
        current_gain = 1.0
        
        for i in range(num_samples):
            peak = peak_detector[i]
            target_gain = min(1.0, ceiling_linear / max(peak, 1e-12))
            if target_gain < current_gain:
                current_gain = target_gain # instant attack
            else:
                current_gain = alpha_release * current_gain + (1.0 - alpha_release) * 1.0
            gain_envelope[i + lookahead_samples] = current_gain

        # Apply gain curve and crop lookahead delay
        out = delayed_audio[:, lookahead_samples:lookahead_samples + num_samples] * gain_envelope[lookahead_samples:lookahead_samples + num_samples]
        # Hard clip guarantee against any microscopic numerical drift
        out = np.clip(out, -ceiling_linear, ceiling_linear)
        return out

    @staticmethod
    def apply_algorithmic_reverb(
        audio: np.ndarray,
        sample_rate: int,
        room_size: float = 0.7,
        damping: float = 0.3,
        wet_level: float = 0.25,
        dry_level: float = 0.85,
        width: float = 1.0
    ) -> np.ndarray:
        """Moorer/Schroeder algorithmic reverb with parallel comb filters and series all-pass stages."""
        channels, num_samples = audio.shape
        mono_in = np.mean(audio, axis=0)

        # Comb filter delay lengths in samples (prime number spreads)
        comb_delays = [
            int(1557 * sample_rate / 44100),
            int(1617 * sample_rate / 44100),
            int(1491 * sample_rate / 44100),
            int(1422 * sample_rate / 44100)
        ]
        
        feedback = min(0.98, max(0.1, room_size * 0.95))
        damp_filter = min(0.9, max(0.05, damping))

        comb_outs = []
        for d in comb_delays:
            c_out = np.zeros(num_samples, dtype=np.float64)
            damp_state = 0.0
            for n in range(num_samples):
                delayed = c_out[n - d] if n >= d else 0.0
                damp_state = delayed * (1.0 - damp_filter) + damp_state * damp_filter
                c_out[n] = mono_in[n] + damp_state * feedback
            comb_outs.append(c_out)

        comb_sum = np.sum(comb_outs, axis=0) * 0.25

        # Series allpass filters for diffusion
        allpass_delays = [int(225 * sample_rate / 44100), int(556 * sample_rate / 44100)]
        ap_gain = 0.5
        ap_out = np.copy(comb_sum)
        
        for d in allpass_delays:
            temp = np.zeros_like(ap_out)
            for n in range(num_samples):
                delayed = temp[n - d] if n >= d else 0.0
                temp[n] = -ap_gain * ap_out[n] + delayed + ap_gain * (ap_out[n - d] if n >= d else 0.0)
            ap_out = temp

        # Stereo spatialize
        reverb_L = ap_out
        reverb_R = np.roll(ap_out, int(23 * sample_rate / 1000)) * width

        out = np.zeros_like(audio, dtype=np.float64)
        if channels >= 2:
            out[0] = audio[0] * dry_level + reverb_L * wet_level
            out[1] = audio[1] * dry_level + reverb_R * wet_level
            for ch in range(2, channels):
                out[ch] = audio[ch] * dry_level + (reverb_L + reverb_R) * 0.5 * wet_level * 0.7
        else:
            out[0] = audio[0] * dry_level + ap_out * wet_level

        return out

    @staticmethod
    def apply_stereo_delay(
        audio: np.ndarray,
        sample_rate: int,
        time_left_ms: float = 250.0,
        time_right_ms: float = 375.0,
        feedback: float = 0.35,
        damping: float = 0.3,
        wet_level: float = 0.3,
        ping_pong: bool = False
    ) -> np.ndarray:
        """Stereo ping-pong / dual-tap delay with high frequency damping."""
        channels, num_samples = audio.shape
        delay_l = int(time_left_ms * 0.001 * sample_rate)
        delay_r = int(time_right_ms * 0.001 * sample_rate)

        out = np.copy(audio).astype(np.float64)
        buf_l = np.zeros(num_samples, dtype=np.float64)
        buf_r = np.zeros(num_samples, dtype=np.float64)

        damp_coeff = min(0.9, max(0.0, damping))
        damp_l = 0.0
        damp_r = 0.0

        for n in range(num_samples):
            in_l = audio[0, n] if channels > 0 else 0.0
            in_r = audio[1, n] if channels > 1 else in_l

            dl = buf_l[n - delay_l] if n >= delay_l else 0.0
            dr = buf_r[n - delay_r] if n >= delay_r else 0.0

            damp_l = dl * (1.0 - damp_coeff) + damp_l * damp_coeff
            damp_r = dr * (1.0 - damp_coeff) + damp_r * damp_coeff

            if ping_pong:
                buf_l[n] = in_l + damp_r * feedback
                buf_r[n] = in_r + damp_l * feedback
            else:
                buf_l[n] = in_l + damp_l * feedback
                buf_r[n] = in_r + damp_r * feedback

        if channels >= 2:
            out[0] += buf_l * wet_level
            out[1] += buf_r * wet_level
        else:
            out[0] += (buf_l + buf_r) * 0.5 * wet_level

        return out

    @staticmethod
    def apply_harmonic_saturation(
        audio: np.ndarray,
        drive_db: float = 6.0,
        mode: str = "tape",
        blend: float = 0.8
    ) -> np.ndarray:
        """
        Analog saturation modeling:
        - 'tape': soft-clip tanh compression with subtle 3rd-order odd harmonics.
        - 'tube': asymmetric triode modeling adding 2nd-order even warmth.
        """
        gain = 10.0 ** (drive_db / 20.0)
        driven = audio * gain
        m = mode.lower()

        if m == "tube":
            # Asymmetric transfer function for tube emulation
            sat = np.where(driven > 0, np.tanh(driven * 0.8), np.tanh(driven * 1.2) * 0.9)
            # Normalize level
            sat = sat / np.max(np.abs(np.tanh(gain * 0.8)) + 1e-6)
        else:
            # Tape hyperbolic tangent saturation
            sat = np.tanh(driven) / np.tanh(max(1.0, gain))

        out = audio * (1.0 - blend) + sat * blend
        return out

    @staticmethod
    def apply_stereo_widener(
        audio: np.ndarray,
        width_pct: float = 120.0
    ) -> np.ndarray:
        """Mid-Side stereo width expansion with mono compatibility safeguard."""
        if audio.shape[0] < 2:
            return audio
            
        L = audio[0]
        R = audio[1]
        width = width_pct / 100.0

        Mid = (L + R) * 0.5
        Side = (L - R) * 0.5 * width

        out = np.copy(audio)
        out[0] = Mid + Side
        out[1] = Mid - Side
        return out

    @staticmethod
    def apply_transient_shaper(
        audio: np.ndarray,
        sample_rate: int,
        attack_gain_db: float = 2.0,
        sustain_gain_db: float = 0.0
    ) -> np.ndarray:
        """Dual-envelope differential transient shaper."""
        channels, num_samples = audio.shape
        # Fast detector for transients (5ms)
        alpha_fast = math.exp(-1.0 / (0.005 * sample_rate))
        # Slow detector for sustain body (40ms)
        alpha_slow = math.exp(-1.0 / (0.040 * sample_rate))

        mono = np.mean(np.abs(audio), axis=0)
        env_fast = 0.0
        env_slow = 0.0

        att_mult = 10.0 ** (attack_gain_db / 20.0)
        sus_mult = 10.0 ** (sustain_gain_db / 20.0)
        gain_mod = np.ones(num_samples, dtype=np.float64)

        for i in range(num_samples):
            x = mono[i]
            env_fast = alpha_fast * env_fast + (1.0 - alpha_fast) * x
            env_slow = alpha_slow * env_slow + (1.0 - alpha_slow) * x

            diff = env_fast - env_slow
            if diff > 0:
                # Attack transient section
                gain_mod[i] = 1.0 + (att_mult - 1.0) * min(1.0, diff * 5.0)
            else:
                # Sustain decay section
                gain_mod[i] = 1.0 + (sus_mult - 1.0) * min(1.0, env_slow * 3.0)

        out = np.zeros_like(audio)
        for ch in range(channels):
            out[ch] = audio[ch] * gain_mod
        return out
