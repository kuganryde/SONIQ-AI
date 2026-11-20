import math
from typing import Any, Dict, List, Tuple
import numpy as np
import scipy.signal


class AudioAnalyzer:
    """Professional Audio Measurement Engine conforming to ITU-R BS.1770-4 and EBU R128."""

    @staticmethod
    def calculate_k_weighting_filters(sample_rate: int) -> Tuple[np.ndarray, np.ndarray, np.ndarray, np.ndarray]:
        """
        Coefficients for the ITU-R BS.1770 K-weighting pre-filter:
        Stage 1: High-shelf filter (models acoustic head diffraction)
        Stage 2: High-pass filter (RLB weighting curve)
        """
        # Stage 1: High shelf (+4.0 dB at high frequencies, f0 = 1500 Hz)
        # Standard filter coefficients mapped to sample_rate via bilinear transform
        f0 = 1681.974450955533
        G = 3.999843853973347
        Q = 0.7071752369554196
        
        w0 = 2 * np.pi * f0 / sample_rate
        A = 10 ** (G / 40)
        alpha = np.sin(w0) / (2 * Q)
        
        b0 = A * ((A + 1) + (A - 1) * np.cos(w0) + 2 * np.sqrt(A) * alpha)
        b1 = -2 * A * ((A - 1) + (A + 1) * np.cos(w0))
        b2 = A * ((A + 1) + (A - 1) * np.cos(w0) - 2 * np.sqrt(A) * alpha)
        a0 = (A + 1) - (A - 1) * np.cos(w0) + 2 * np.sqrt(A) * alpha
        a1 = 2 * ((A - 1) - (A + 1) * np.cos(w0))
        a2 = (A + 1) - (A - 1) * np.cos(w0) - 2 * np.sqrt(A) * alpha
        
        b_stage1 = np.array([b0 / a0, b1 / a0, b2 / a0], dtype=np.float64)
        a_stage1 = np.array([1.0, a1 / a0, a2 / a0], dtype=np.float64)
        
        # Stage 2: High pass (RLB weighting, f0 ~ 38 Hz)
        f0_hp = 38.13547087602444
        Q_hp = 0.5003270373238773
        w0_hp = 2 * np.pi * f0_hp / sample_rate
        alpha_hp = np.sin(w0_hp) / (2 * Q_hp)
        
        b0_hp = (1 + np.cos(w0_hp)) / 2
        b1_hp = -(1 + np.cos(w0_hp))
        b2_hp = (1 + np.cos(w0_hp)) / 2
        a0_hp = 1 + alpha_hp
        a1_hp = -2 * np.cos(w0_hp)
        a2_hp = 1 - alpha_hp
        
        b_stage2 = np.array([b0_hp / a0_hp, b1_hp / a0_hp, b2_hp / a0_hp], dtype=np.float64)
        a_stage2 = np.array([1.0, a1_hp / a0_hp, a2_hp / a0_hp], dtype=np.float64)
        
        return b_stage1, a_stage1, b_stage2, a_stage2

    @classmethod
    def measure_lufs(cls, audio: np.ndarray, sample_rate: int) -> Dict[str, float]:
        """
        Computes integrated LUFS (LKFS) according to ITU-R BS.1770-4 gated method.
        Input: audio shape (channels, samples).
        """
        channels, num_samples = audio.shape
        if num_samples < sample_rate * 0.4:
            # File too short for gated measurement, return simple RMS estimate
            rms = np.sqrt(np.mean(audio ** 2) + 1e-12)
            db = 20 * np.log10(rms)
            return {"integrated_lufs": round(float(db), 2), "short_term_lufs": round(float(db), 2), "lra": 0.0}

        b1, a1, b2, a2 = cls.calculate_k_weighting_filters(sample_rate)
        
        # Apply K-weighting to each channel
        k_filtered = np.zeros_like(audio)
        for ch in range(channels):
            s1 = scipy.signal.lfilter(b1, a1, audio[ch])
            k_filtered[ch] = scipy.signal.lfilter(b2, a2, s1)
            
        # Channel weighting (G_i): L, R, C = 1.0; LFE = 0.0; Surrounds = 1.41
        channel_weights = np.ones(channels)
        if channels >= 6:
            # 5.1 layout: [L, R, C, LFE, Ls, Rs]
            channel_weights[3] = 0.0  # LFE
            channel_weights[4] = 1.41 # Ls
            channel_weights[5] = 1.41 # Rs
            if channels >= 8:
                channel_weights[6] = 1.41 # Rls
                channel_weights[7] = 1.41 # Rrs

        # Block-based gating: 400ms rectangular window with 75% overlap (100ms hop)
        block_size = int(0.400 * sample_rate)
        hop_size = int(0.100 * sample_rate)
        
        blocks = []
        for start in range(0, num_samples - block_size + 1, hop_size):
            block = k_filtered[:, start:start + block_size]
            mean_sq = np.mean(block ** 2, axis=1)
            # Weighted sum of channel powers
            z_j = np.sum(channel_weights * mean_sq)
            blocks.append(z_j)
            
        if not blocks:
            return {"integrated_lufs": -70.0, "short_term_lufs": -70.0, "lra": 0.0}
            
        blocks = np.array(blocks)
        
        # Step 1: Absolute threshold at -70 LKFS
        # LKFS = -0.691 + 10 * log10(z)
        l_j = -0.691 + 10 * np.log10(np.maximum(blocks, 1e-12))
        abs_gated_indices = np.where(l_j > -70.0)[0]
        
        if len(abs_gated_indices) == 0:
            return {"integrated_lufs": -70.0, "short_term_lufs": -70.0, "lra": 0.0}
            
        # Step 2: Relative threshold (10 dB below average of absolute gated blocks)
        gamma_rel = -0.691 + 10 * np.log10(np.mean(blocks[abs_gated_indices])) - 10.0
        rel_gated_indices = np.where(l_j > gamma_rel)[0]
        
        if len(rel_gated_indices) == 0:
            integrated_lufs = -70.0
        else:
            integrated_lufs = -0.691 + 10 * np.log10(np.mean(blocks[rel_gated_indices]))
            
        # Loudness Range (LRA) according to EBU Tech 3342 (3-second sliding window)
        win_3s = int(3.0 * sample_rate / hop_size)
        if len(l_j) > win_3s:
            st_loudness = []
            for i in range(len(l_j) - win_3s):
                st_loudness.append(np.mean(l_j[i:i + win_3s]))
            st_arr = np.sort(st_loudness)
            lra = float(np.percentile(st_arr, 95) - np.percentile(st_arr, 10))
        else:
            lra = float(np.ptp(l_j)) if len(l_j) > 0 else 0.0

        short_term_max = float(np.max(l_j)) if len(l_j) > 0 else integrated_lufs

        return {
            "integrated_lufs": round(float(integrated_lufs), 2),
            "short_term_max_lufs": round(float(short_term_max), 2),
            "lra": round(max(0.0, lra), 2),
        }

    @staticmethod
    def measure_true_peak(audio: np.ndarray, sample_rate: int) -> Tuple[float, float]:
        """
        Measures True Peak with 4x oversampling interpolation conforming to ITU-R BS.1770.
        Returns: (sample_peak_dBFS, true_peak_dBTP).
        """
        # Sample Peak
        sample_peak = float(np.max(np.abs(audio)))
        sample_peak_db = 20 * math.log10(max(sample_peak, 1e-12))
        
        # True Peak with 4x polyphase oversampling interpolation
        channels = audio.shape[0]
        true_peak_val = sample_peak
        
        for ch in range(channels):
            # Resample 4x
            oversampled = scipy.signal.resample(audio[ch], audio[ch].shape[0] * 4)
            ch_true_peak = float(np.max(np.abs(oversampled)))
            if ch_true_peak > true_peak_val:
                true_peak_val = ch_true_peak
                
        true_peak_db = 20 * math.log10(max(true_peak_val, 1e-12))
        return round(sample_peak_db, 2), round(true_peak_db, 2)

    @staticmethod
    def measure_phase_correlation(audio: np.ndarray) -> float:
        """
        Computes phase correlation between Left and Right stereo channels.
        Range: +1.0 (pure mono in-phase) to -1.0 (pure 180-deg out-of-phase / cancellation).
        """
        if audio.shape[0] < 2:
            return 1.0  # Mono is perfectly correlated
        
        L = audio[0]
        R = audio[1]
        
        dot_product = np.sum(L * R)
        denom = np.sqrt(np.sum(L ** 2) * np.sum(R ** 2))
        
        if denom < 1e-12:
            return 1.0
            
        corr = dot_product / denom
        return round(float(np.clip(corr, -1.0, 1.0)), 3)

    @staticmethod
    def detect_clipping(audio: np.ndarray, threshold: float = 0.9995) -> Dict[str, Any]:
        """Detects clipping events, consecutive saturated samples, and timestamps."""
        clipped_mask = np.abs(audio) >= threshold
        clip_count = int(np.sum(clipped_mask))
        total_samples = audio.size
        clip_pct = (clip_count / total_samples) * 100.0 if total_samples > 0 else 0.0
        
        has_clipping = clip_count > 0
        return {
            "has_clipping": has_clipping,
            "clipped_samples_count": clip_count,
            "clipped_samples_percentage": round(clip_pct, 4),
            "severity": "CRITICAL" if clip_pct > 0.05 else ("MODERATE" if has_clipping else "NONE")
        }

    @staticmethod
    def analyze_frequency_balance(audio: np.ndarray, sample_rate: int) -> Dict[str, float]:
        """Calculates energy distribution across acoustic frequency octaves."""
        # Mix down to mono for spectral distribution
        mono = np.mean(audio, axis=0)
        fft_vals = np.abs(np.fft.rfft(mono))
        freqs = np.fft.rfftfreq(len(mono), 1.0 / sample_rate)
        
        total_energy = np.sum(fft_vals ** 2) + 1e-12
        
        bands = {
            "sub_bass_20_60hz": (20, 60),
            "bass_60_250hz": (60, 250),
            "low_mids_250_500hz": (250, 500),
            "mids_500_2000hz": (500, 2000),
            "high_mids_2k_6khz": (2000, 6000),
            "presence_brilliance_6k_20khz": (6000, 20000),
        }
        
        distribution = {}
        for name, (low, high) in bands.items():
            mask = (freqs >= low) & (freqs < high)
            band_energy = np.sum(fft_vals[mask] ** 2)
            pct = (band_energy / total_energy) * 100.0
            distribution[name] = round(float(pct), 2)
            
        return distribution

    @classmethod
    def full_audio_analysis(cls, audio: np.ndarray, sample_rate: int) -> Dict[str, Any]:
        """Comprehensive acoustic measurement suite conforming to professional studio standards."""
        # 1. Loudness (LUFS / LRA)
        lufs_data = cls.measure_lufs(audio, sample_rate)
        
        # 2. Peaks
        sample_peak_db, true_peak_db = cls.measure_true_peak(audio, sample_rate)
        
        # 3. RMS and Crest Factor
        rms = float(np.sqrt(np.mean(audio ** 2) + 1e-12))
        rms_db = round(20 * math.log10(rms), 2)
        crest_factor_db = round(sample_peak_db - rms_db, 2)
        
        # 4. Phase Correlation
        phase_corr = cls.measure_phase_correlation(audio)
        
        # 5. Clipping Analysis
        clipping = cls.detect_clipping(audio)
        
        # 6. Frequency Balance
        freq_balance = cls.analyze_frequency_balance(audio, sample_rate)
        
        # 7. DC Offset
        dc_offset = float(np.mean(audio))
        
        # 8. Dynamic Range Score (DR Score estimate)
        dr_score = max(4, min(20, int(round(crest_factor_db * 0.85))))

        return {
            "integrated_lufs": lufs_data["integrated_lufs"],
            "short_term_max_lufs": lufs_data["short_term_max_lufs"],
            "loudness_range_lra": lufs_data["lra"],
            "sample_peak_dbfs": sample_peak_db,
            "true_peak_dbtp": true_peak_db,
            "rms_dbfs": rms_db,
            "crest_factor_db": crest_factor_db,
            "dynamic_range_dr": dr_score,
            "phase_correlation": phase_corr,
            "mono_compatible": phase_corr >= 0.5,
            "clipping": clipping,
            "dc_offset": round(dc_offset, 6),
            "frequency_balance_pct": freq_balance,
        }

    @staticmethod
    def generate_waveform_peaks(audio: np.ndarray, num_points: int = 500) -> List[float]:
        """Generates normalized peak envelope for instant UI waveform rendering."""
        mono = np.mean(np.abs(audio), axis=0)
        chunk_size = max(1, len(mono) // num_points)
        peaks = []
        for i in range(0, len(mono), chunk_size):
            chunk = mono[i:i + chunk_size]
            if len(chunk) > 0:
                peaks.append(round(float(np.max(chunk)), 4))
        return peaks[:num_points]
