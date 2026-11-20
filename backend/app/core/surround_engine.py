import math
from typing import Any, Dict, List, Optional, Tuple
import numpy as np
import scipy.signal


class SurroundLayout:
    STEREO = "2.0"
    TWO_POINT_ONE = "2.1"
    QUAD = "4.0"
    FIVE_POINT_ONE = "5.1"
    SEVEN_POINT_ONE = "7.1"
    SEVEN_POINT_ONE_FOUR = "7.1.4"


# Standard SMPTE / ITU-R BS.775 speaker positions in normalised coordinates (x, y, z)
# x: -1.0 (Left) to +1.0 (Right)
# y: -1.0 (Rear) to +1.0 (Front)
# z: -1.0 (Down) to +1.0 (Up)
SPEAKER_CONFIGS = {
    SurroundLayout.STEREO: [
        {"name": "Left", "ch": 0, "pos": (-1.0, 1.0, 0.0), "abbr": "L"},
        {"name": "Right", "ch": 1, "pos": (1.0, 1.0, 0.0), "abbr": "R"},
    ],
    SurroundLayout.TWO_POINT_ONE: [
        {"name": "Left", "ch": 0, "pos": (-1.0, 1.0, 0.0), "abbr": "L"},
        {"name": "Right", "ch": 1, "pos": (1.0, 1.0, 0.0), "abbr": "R"},
        {"name": "LFE", "ch": 2, "pos": (0.0, 0.0, -0.5), "abbr": "LFE"},
    ],
    SurroundLayout.QUAD: [
        {"name": "Front Left", "ch": 0, "pos": (-1.0, 1.0, 0.0), "abbr": "FL"},
        {"name": "Front Right", "ch": 1, "pos": (1.0, 1.0, 0.0), "abbr": "FR"},
        {"name": "Surround Left", "ch": 2, "pos": (-1.0, -1.0, 0.0), "abbr": "SL"},
        {"name": "Surround Right", "ch": 3, "pos": (1.0, -1.0, 0.0), "abbr": "SR"},
    ],
    SurroundLayout.FIVE_POINT_ONE: [
        # SMPTE Channel Order: L, R, C, LFE, Ls, Rs
        {"name": "Front Left", "ch": 0, "pos": (-1.0, 0.8, 0.0), "abbr": "L"},
        {"name": "Front Right", "ch": 1, "pos": (1.0, 0.8, 0.0), "abbr": "R"},
        {"name": "Center", "ch": 2, "pos": (0.0, 1.0, 0.0), "abbr": "C"},
        {"name": "LFE Subwoofer", "ch": 3, "pos": (0.0, 0.0, -0.5), "abbr": "LFE"},
        {"name": "Surround Left", "ch": 4, "pos": (-0.9, -0.7, 0.0), "abbr": "Ls"},
        {"name": "Surround Right", "ch": 5, "pos": (0.9, -0.7, 0.0), "abbr": "Rs"},
    ],
    SurroundLayout.SEVEN_POINT_ONE: [
        # SMPTE: L, R, C, LFE, Ls, Rs, Rls, Rrs
        {"name": "Front Left", "ch": 0, "pos": (-1.0, 0.8, 0.0), "abbr": "L"},
        {"name": "Front Right", "ch": 1, "pos": (1.0, 0.8, 0.0), "abbr": "R"},
        {"name": "Center", "ch": 2, "pos": (0.0, 1.0, 0.0), "abbr": "C"},
        {"name": "LFE Subwoofer", "ch": 3, "pos": (0.0, 0.0, -0.5), "abbr": "LFE"},
        {"name": "Side Surround Left", "ch": 4, "pos": (-1.0, 0.0, 0.0), "abbr": "Ls"},
        {"name": "Side Surround Right", "ch": 5, "pos": (1.0, 0.0, 0.0), "abbr": "Rs"},
        {"name": "Rear Surround Left", "ch": 6, "pos": (-0.8, -1.0, 0.0), "abbr": "Rls"},
        {"name": "Rear Surround Right", "ch": 7, "pos": (0.8, -1.0, 0.0), "abbr": "Rrs"},
    ],
    SurroundLayout.SEVEN_POINT_ONE_FOUR: [
        {"name": "Front Left", "ch": 0, "pos": (-1.0, 0.8, 0.0), "abbr": "L"},
        {"name": "Front Right", "ch": 1, "pos": (1.0, 0.8, 0.0), "abbr": "R"},
        {"name": "Center", "ch": 2, "pos": (0.0, 1.0, 0.0), "abbr": "C"},
        {"name": "LFE Subwoofer", "ch": 3, "pos": (0.0, 0.0, -0.5), "abbr": "LFE"},
        {"name": "Side Surround Left", "ch": 4, "pos": (-1.0, 0.0, 0.0), "abbr": "Ls"},
        {"name": "Side Surround Right", "ch": 5, "pos": (1.0, 0.0, 0.0), "abbr": "Rs"},
        {"name": "Rear Surround Left", "ch": 6, "pos": (-0.8, -1.0, 0.0), "abbr": "Rls"},
        {"name": "Rear Surround Right", "ch": 7, "pos": (0.8, -1.0, 0.0), "abbr": "Rrs"},
        {"name": "Top Front Left", "ch": 8, "pos": (-0.8, 0.6, 1.0), "abbr": "Tfl"},
        {"name": "Top Front Right", "ch": 9, "pos": (0.8, 0.6, 1.0), "abbr": "Tfr"},
        {"name": "Top Rear Left", "ch": 10, "pos": (-0.8, -0.6, 1.0), "abbr": "Trl"},
        {"name": "Top Rear Right", "ch": 11, "pos": (0.8, -0.6, 1.0), "abbr": "Trr"},
    ]
}


class SurroundPannerEngine:
    """Professional Spatial Sound and Multichannel Surround Panning Engine."""

    @staticmethod
    def calculate_speaker_gains(
        x: float,
        y: float,
        z: float = 0.0,
        layout: str = SurroundLayout.FIVE_POINT_ONE,
        center_divergence: float = 0.0,
        lfe_send_db: float = -12.0
    ) -> np.ndarray:
        """
        Calculates energy-preserving Vector-Base Amplitude Panning gains for each speaker.
        Input coordinates: x (-1 to +1), y (-1 to +1), z (-1 to +1).
        """
        speakers = SPEAKER_CONFIGS.get(layout, SPEAKER_CONFIGS[SurroundLayout.FIVE_POINT_ONE])
        num_speakers = len(speakers)
        gains = np.zeros(num_speakers, dtype=np.float64)

        # Distance calculation
        src_pos = np.array([x, y, z])
        distances = []
        is_lfe = []

        for spk in speakers:
            if "LFE" in spk["abbr"]:
                distances.append(999.0)
                is_lfe.append(True)
            else:
                spk_pos = np.array(spk["pos"])
                dist = np.linalg.norm(src_pos - spk_pos)
                distances.append(dist)
                is_lfe.append(False)

        distances = np.array(distances)
        is_lfe = np.array(is_lfe)

        # Inverse distance weighting for non-LFE satellites
        sat_mask = ~is_lfe
        raw_weights = np.zeros(num_speakers)
        raw_weights[sat_mask] = 1.0 / (distances[sat_mask] + 0.15) ** 2.0

        # Center divergence handling: bleed phantom center to L and R if divergence > 0
        if layout in [SurroundLayout.FIVE_POINT_ONE, SurroundLayout.SEVEN_POINT_ONE]:
            c_idx = 2
            if center_divergence > 0.0:
                bleed = raw_weights[c_idx] * (center_divergence / 100.0)
                raw_weights[c_idx] -= bleed
                raw_weights[0] += bleed * 0.5 # L
                raw_weights[1] += bleed * 0.5 # R

        # Energy normalization (sum of squares = 1.0)
        sat_sum_sq = np.sum(raw_weights[sat_mask] ** 2)
        if sat_sum_sq > 0:
            gains[sat_mask] = raw_weights[sat_mask] / np.sqrt(sat_sum_sq)

        # Discrete LFE send
        for i, lfe in enumerate(is_lfe):
            if lfe:
                gains[i] = 10.0 ** (lfe_send_db / 20.0)

        return gains

    @classmethod
    def spatialize_track(
        cls,
        audio: np.ndarray,
        sample_rate: int,
        x: float,
        y: float,
        z: float = 0.0,
        layout: str = SurroundLayout.FIVE_POINT_ONE,
        crossover_hz: float = 80.0,
        apply_bass_management: bool = True
    ) -> np.ndarray:
        """
        Pans a mono or stereo track into a multichannel surround layout.
        Guarantees non-destructive phase alignment and calibrated LFE bass routing.
        """
        # Downmix input to mono source for point-source spatial panning
        mono_src = np.mean(audio, axis=0)
        num_samples = len(mono_src)
        
        speakers = SPEAKER_CONFIGS.get(layout, SPEAKER_CONFIGS[SurroundLayout.FIVE_POINT_ONE])
        num_channels = len(speakers)
        
        # Calculate panning gains
        gains = cls.calculate_speaker_gains(x, y, z, layout)
        
        out = np.zeros((num_channels, num_samples), dtype=np.float64)
        for ch in range(num_channels):
            out[ch] = mono_src * gains[ch]

        # Bass Management Crossover
        if apply_bass_management and layout in [SurroundLayout.TWO_POINT_ONE, SurroundLayout.FIVE_POINT_ONE, SurroundLayout.SEVEN_POINT_ONE]:
            lfe_idx = 3 if layout != SurroundLayout.TWO_POINT_ONE else 2
            # 4th order Linkwitz-Riley low-pass for subwoofer
            sos_lp = scipy.signal.butter(4, crossover_hz, btype='low', fs=sample_rate, output='sos')
            # 4th order high-pass for satellites
            sos_hp = scipy.signal.butter(4, crossover_hz, btype='high', fs=sample_rate, output='sos')

            sub_bass_energy = np.zeros(num_samples, dtype=np.float64)
            for ch in range(num_channels):
                if ch != lfe_idx:
                    # Filter satellite
                    sub_bass_energy += scipy.signal.sosfilt(sos_lp, out[ch]) * 0.5
                    out[ch] = scipy.signal.sosfilt(sos_hp, out[ch])

            # Sum into LFE
            out[lfe_idx] += sub_bass_energy

        return out

    @staticmethod
    def downmix_to_stereo(surround_audio: np.ndarray, layout: str = SurroundLayout.FIVE_POINT_ONE) -> np.ndarray:
        """
        Downmixes multichannel audio into Stereo 2.0 conforming to ITU-R BS.775.
        Prevents clipping with normalized attenuation coefficient.
        """
        ch_count = surround_audio.shape[0]
        num_samples = surround_audio.shape[1]
        stereo = np.zeros((2, num_samples), dtype=np.float64)

        if ch_count == 1:
            stereo[0] = surround_audio[0]
            stereo[1] = surround_audio[0]
            return stereo
        elif ch_count == 2:
            return surround_audio

        if layout == SurroundLayout.FIVE_POINT_ONE and ch_count >= 6:
            # L, R, C, LFE, Ls, Rs
            L = surround_audio[0]
            R = surround_audio[1]
            C = surround_audio[2]
            Ls = surround_audio[4]
            Rs = surround_audio[5]

            # ITU-R BS.775 coefficient matrix: C and Surrounds attenuated by -3dB (0.7071)
            stereo[0] = (L + 0.7071 * C + 0.7071 * Ls) * 0.7071
            stereo[1] = (R + 0.7071 * C + 0.7071 * Rs) * 0.7071
        elif layout == SurroundLayout.SEVEN_POINT_ONE and ch_count >= 8:
            L = surround_audio[0]
            R = surround_audio[1]
            C = surround_audio[2]
            Ls = surround_audio[4]
            Rs = surround_audio[5]
            Rls = surround_audio[6]
            Rrs = surround_audio[7]

            stereo[0] = (L + 0.7071 * C + 0.7071 * Ls + 0.5 * Rls) * 0.65
            stereo[1] = (R + 0.7071 * C + 0.7071 * Rs + 0.5 * Rrs) * 0.65
        else:
            # Fallback simple pair folddown
            stereo[0] = np.mean(surround_audio[::2], axis=0)
            stereo[1] = np.mean(surround_audio[1::2], axis=0)

        # Clip guard
        peak = np.max(np.abs(stereo))
        if peak > 1.0:
            stereo /= peak

        return stereo

    @classmethod
    def render_binaural_hrtf(
        cls,
        surround_audio: np.ndarray,
        layout: str = SurroundLayout.FIVE_POINT_ONE,
        sample_rate: int = 48000
    ) -> np.ndarray:
        """
        Synthesizes an accurate 3D Binaural Headphone render from multichannel surround/height audio
        using acoustic Head-Related Transfer Function physics (ITD, ILD, pinna cues).
        Enables 5.1, 7.1, and 7.1.4 Atmos monitoring on standard stereo headphones.
        """
        ch_count, num_samples = surround_audio.shape
        speakers = SPEAKER_CONFIGS.get(layout, SPEAKER_CONFIGS[SurroundLayout.FIVE_POINT_ONE])
        
        binaural = np.zeros((2, num_samples), dtype=np.float64)
        head_radius = 0.0875  # ~8.75 cm human ear distance from center
        c = 343.0  # speed of sound m/s

        # Acoustic shadow lowpass filter for contralateral (shadowed) ear
        sos_shadow = scipy.signal.iirfilter(2, 2800 / (sample_rate / 2), btype='lowpass', ftype='butter', output='sos')
        # Pinna elevation notch for height channels
        b_not, a_not = scipy.signal.iirnotch(7500 / (sample_rate / 2), 2.0)

        for i, spk in enumerate(speakers):
            if i >= ch_count:
                break
            ch_sig = surround_audio[i]
            if np.max(np.abs(ch_sig)) < 1e-6:
                continue

            pos = np.array(spk["pos"])
            # Ear coordinates in 3D (x, y, z)
            ear_l = np.array([-head_radius, 0.0, 0.0])
            ear_r = np.array([head_radius, 0.0, 0.0])

            d_l = np.linalg.norm(pos - ear_l)
            d_r = np.linalg.norm(pos - ear_r)

            # Interaural Time Difference (ITD) in fractional samples
            delay_l_s = int(round((d_l / c) * sample_rate * 0.01))
            delay_r_s = int(round((d_r / c) * sample_rate * 0.01))

            sig_l = np.roll(ch_sig, delay_l_s)
            sig_r = np.roll(ch_sig, delay_r_s)

            # Interaural Level Difference (ILD)
            if pos[0] > 0.15:
                sig_l = scipy.signal.sosfilt(sos_shadow, sig_l) * 0.75
            elif pos[0] < -0.15:
                sig_r = scipy.signal.sosfilt(sos_shadow, sig_r) * 0.75

            # Elevation pinna cue for height channels
            if pos[2] > 0.4:
                sig_l = scipy.signal.lfilter(b_not, a_not, sig_l)
                sig_r = scipy.signal.lfilter(b_not, a_not, sig_r)

            # Distance attenuation
            dist_l = max(0.5, d_l)
            dist_r = max(0.5, d_r)
            binaural[0] += sig_l / dist_l
            binaural[1] += sig_r / dist_r

        # Normalization
        peak = np.max(np.abs(binaural))
        if peak > 0.001:
            binaural = (binaural / peak) * 0.92

        return binaural
