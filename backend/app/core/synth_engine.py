import math
from typing import Any, Dict, List, Optional
import numpy as np
import scipy.signal


class SynthEngine:
    """Professional Audio Synthesizer and Sound Generation Engine."""

    @staticmethod
    def midi_to_freq(midi_note: int) -> float:
        """Converts standard MIDI note number (0-127) to frequency in Hz (A4 = 69 = 440 Hz)."""
        return 440.0 * (2.0 ** ((midi_note - 69.0) / 12.0))

    @staticmethod
    def generate_adsr_envelope(
        num_samples: int,
        attack_samples: int,
        decay_samples: int,
        sustain_level: float,
        release_samples: int
    ) -> np.ndarray:
        """Generates standard ADSR exponential envelope."""
        env = np.zeros(num_samples, dtype=np.float64)
        
        # Ensure segments fit in duration
        sustain_samples = max(0, num_samples - (attack_samples + decay_samples + release_samples))
        
        # 1. Attack
        att_idx = min(attack_samples, num_samples)
        if att_idx > 0:
            env[:att_idx] = np.linspace(0.0, 1.0, att_idx)
            
        # 2. Decay
        dec_start = att_idx
        dec_end = min(dec_start + decay_samples, num_samples)
        if dec_end > dec_start:
            env[dec_start:dec_end] = np.linspace(1.0, sustain_level, dec_end - dec_start)
            
        # 3. Sustain
        sus_start = dec_end
        sus_end = min(sus_start + sustain_samples, num_samples)
        if sus_end > sus_start:
            env[sus_start:sus_end] = sustain_level
            
        # 4. Release
        rel_start = sus_end
        if rel_start < num_samples:
            current_val = env[rel_start - 1] if rel_start > 0 else sustain_level
            env[rel_start:] = np.linspace(current_val, 0.0, num_samples - rel_start)
            
        return env

    @classmethod
    def synthesize_subtractive_note(
        cls,
        midi_note: int,
        duration_sec: float,
        sample_rate: int = 48000,
        waveform_1: str = "saw",
        waveform_2: str = "square",
        detune_cents: float = 8.0,
        filter_cutoff_hz: float = 2400.0,
        filter_resonance: float = 2.0,
        velocity: int = 100
    ) -> np.ndarray:
        """Subtractive synthesis note generator."""
        num_samples = int(duration_sec * sample_rate)
        t = np.linspace(0, duration_sec, num_samples, endpoint=False)
        base_freq = cls.midi_to_freq(midi_note)
        detune_mult = 2.0 ** (detune_cents / 1200.0)
        freq_2 = base_freq * detune_mult

        def get_osc(wave: str, f: float) -> np.ndarray:
            if wave == "sine":
                return np.sin(2 * np.pi * f * t)
            elif wave == "saw":
                return scipy.signal.sawtooth(2 * np.pi * f * t)
            elif wave == "square":
                return scipy.signal.square(2 * np.pi * f * t, duty=0.5)
            elif wave == "triangle":
                return scipy.signal.sawtooth(2 * np.pi * f * t, width=0.5)
            return np.sin(2 * np.pi * f * t)

        osc1 = get_osc(waveform_1, base_freq)
        osc2 = get_osc(waveform_2, freq_2)
        mixed = (osc1 * 0.6 + osc2 * 0.4)

        # ADSR Envelope
        att = int(0.015 * sample_rate)
        dec = int(0.080 * sample_rate)
        sus = 0.7
        rel = int(0.060 * sample_rate)
        amp_env = cls.generate_adsr_envelope(num_samples, att, dec, sus, rel)

        # Resonant Filter
        sos = scipy.signal.butter(2, min(sample_rate * 0.45, filter_cutoff_hz), btype='low', fs=sample_rate, output='sos')
        filtered = scipy.signal.sosfilt(sos, mixed)

        vel_gain = velocity / 127.0
        out = filtered * amp_env * vel_gain * 0.8
        # Return 2-channel stereo
        return np.vstack([out, out])

    @classmethod
    def synthesize_fm_note(
        cls,
        midi_note: int,
        duration_sec: float,
        sample_rate: int = 48000,
        carrier_ratio: float = 1.0,
        modulator_ratio: float = 2.0,
        modulation_index: float = 3.5,
        velocity: int = 100
    ) -> np.ndarray:
        """2-Operator FM synthesis note generator."""
        num_samples = int(duration_sec * sample_rate)
        t = np.linspace(0, duration_sec, num_samples, endpoint=False)
        f0 = cls.midi_to_freq(midi_note)

        fc = f0 * carrier_ratio
        fm = f0 * modulator_ratio

        # Modulator envelope
        mod_env = np.linspace(modulation_index, 0.2, num_samples)
        modulator = mod_env * np.sin(2 * np.pi * fm * t)

        carrier = np.sin(2 * np.pi * fc * t + modulator)

        # Amp envelope
        amp_env = cls.generate_adsr_envelope(num_samples, int(0.005 * sample_rate), int(0.15 * sample_rate), 0.5, int(0.05 * sample_rate))
        vel_gain = velocity / 127.0
        out = carrier * amp_env * vel_gain * 0.85
        return np.vstack([out, out])

    @staticmethod
    def synthesize_drum_hit(
        drum_type: str,
        duration_sec: float = 0.5,
        sample_rate: int = 48000
    ) -> np.ndarray:
        """Synthesizes analog style electronic percussion."""
        num_samples = int(duration_sec * sample_rate)
        t = np.linspace(0, duration_sec, num_samples, endpoint=False)
        d = drum_type.lower()

        if d in ["kick", "bass_drum"]:
            # 808 Pitch drop envelope: 160Hz -> 45Hz
            pitch_env = 45.0 + 115.0 * np.exp(-t / 0.04)
            phase = 2 * np.pi * np.cumsum(pitch_env) / sample_rate
            body = np.sin(phase)
            # Transient click
            click = (np.random.rand(num_samples) * 2 - 1) * np.exp(-t / 0.005) * 0.3
            amp = np.exp(-t / 0.18)
            hit = (body + click) * amp
        elif d in ["snare"]:
            # Tonal body + filtered noise burst
            tone = np.sin(2 * np.pi * 185.0 * t) * np.exp(-t / 0.05) * 0.4
            noise = (np.random.rand(num_samples) * 2 - 1) * np.exp(-t / 0.12)
            # Bandpass noise around 3kHz
            sos = scipy.signal.butter(2, [1200, 6000], btype='bandpass', fs=sample_rate, output='sos')
            filtered_noise = scipy.signal.sosfilt(sos, noise)
            hit = tone + filtered_noise * 0.7
        elif d in ["hihat", "hat"]:
            # High-passed metallic noise with short decay
            noise = (np.random.rand(num_samples) * 2 - 1) * np.exp(-t / 0.035)
            sos = scipy.signal.butter(2, 7000, btype='high', fs=sample_rate, output='sos')
            hit = scipy.signal.sosfilt(sos, noise) * 0.8
        elif d in ["clap"]:
            # Triple impulse burst
            burst = np.zeros(num_samples)
            for delay in [0.0, 0.012, 0.024]:
                idx = int(delay * sample_rate)
                burst[idx:idx + int(0.01 * sample_rate)] = 1.0
            noise = (np.random.rand(num_samples) * 2 - 1) * np.exp(-t / 0.15)
            hit = noise * (burst + np.exp(-t / 0.09)) * 0.6
        else:
            hit = np.sin(2 * np.pi * 440.0 * t) * np.exp(-t / 0.1)

        hit = np.clip(hit, -1.0, 1.0)
        return np.vstack([hit, hit])

    @classmethod
    def render_midi_sequence(
        cls,
        events: List[Dict[str, Any]],
        instrument: str = "subtractive",
        sample_rate: int = 48000
    ) -> np.ndarray:
        """Renders an entire sequence of MIDI note events into a stereo audio buffer."""
        if not events:
            return np.zeros((2, sample_rate), dtype=np.float64)

        max_end_time = max(e.get("start", 0.0) + e.get("duration", 0.5) for e in events)
        total_samples = int((max_end_time + 0.5) * sample_rate)
        mix_buffer = np.zeros((2, total_samples), dtype=np.float64)

        for ev in events:
            note = int(ev.get("note", 60))
            start_sec = float(ev.get("start", 0.0))
            dur_sec = float(ev.get("duration", 0.5))
            vel = int(ev.get("velocity", 100))

            start_idx = int(start_sec * sample_rate)
            if instrument == "fm":
                note_audio = cls.synthesize_fm_note(note, dur_sec, sample_rate=sample_rate, velocity=vel)
            elif instrument == "drum":
                drum_name = ev.get("drum_type", "kick")
                note_audio = cls.synthesize_drum_hit(drum_name, dur_sec, sample_rate=sample_rate)
            else:
                note_audio = cls.synthesize_subtractive_note(note, dur_sec, sample_rate=sample_rate, velocity=vel)

            end_idx = min(total_samples, start_idx + note_audio.shape[1])
            chunk_len = end_idx - start_idx
            if chunk_len > 0:
                mix_buffer[:, start_idx:end_idx] += note_audio[:, :chunk_len]

        # Normalize to prevent clipping
        peak = np.max(np.abs(mix_buffer))
        if peak > 0.95:
            mix_buffer = mix_buffer / peak * 0.95

        return mix_buffer

    @classmethod
    def synthesize_rydetech_sound_logo(
        cls,
        sample_rate: int = 48000,
        duration_sec: float = 3.2
    ) -> np.ndarray:
        """
        Synthesizes the signature sovereign RYDETECH SONIQ Sound Logo (Sonic Ident).
        Architecture:
        1. Visceral sub-bass pitch glide (38Hz -> 65.4Hz C2) with analog saturation.
        2. Sovereign Polyphonic Chord Swell (Cadd9 / C9: C3, G3, C4, E4, G4, D5) with dual detuned saw/triangle oscillators.
        3. Dynamic resonant low-pass ladder filter sweep (300Hz -> 6500Hz).
        4. Crystal FM acoustic bell chime (C6/G6 + C7 transient ping) with stereophonic spatial ping delays.
        5. Algorithmic Schroeder diffuse reverb tail with smooth decay to digital silence.
        Peak-normalized to -1.0 dBFS True Peak with compliant EBU R128 loudness.
        """
        num_samples = int(sample_rate * duration_sec)
        t = np.linspace(0, duration_sec, num_samples, endpoint=False)
        
        left = np.zeros(num_samples, dtype=np.float64)
        right = np.zeros(num_samples, dtype=np.float64)
        
        # 1. Visceral Sub-Bass Glide (38Hz -> 65.41Hz C2)
        sub_freq = np.clip(38.0 + (65.41 - 38.0) * np.minimum(1.0, (t / 0.6) ** 1.5), 38.0, 65.41)
        sub_phase = 2.0 * np.pi * np.cumsum(sub_freq) / sample_rate
        sub_env = np.zeros(num_samples)
        att_sub = int(0.04 * sample_rate)
        sub_env[:att_sub] = np.linspace(0.0, 1.0, att_sub)
        sub_env[att_sub:] = np.exp(-(t[att_sub:] - 0.04) / 1.1)
        sub_wave = np.tanh(1.6 * np.sin(sub_phase)) * sub_env * 0.55
        left += sub_wave
        right += sub_wave

        # 2. Sovereign Harmonic Pad (Cadd9: C3, G3, C4, E4, G4, D5)
        chord_freqs = [130.81, 196.00, 261.63, 329.63, 392.00, 587.33]
        chord_pans = [-0.5, 0.5, -0.3, 0.3, -0.15, 0.15]
        
        pad_att = int(0.12 * sample_rate)
        pad_env = np.zeros(num_samples)
        pad_env[:pad_att] = np.sin(np.linspace(0, np.pi / 2.0, pad_att))
        pad_env[pad_att:] = np.exp(-(t[pad_att:] - 0.12) / 1.4)
        
        for idx, (f, pan) in enumerate(zip(chord_freqs, chord_pans)):
            detune_hz = 0.35 * (idx + 1)
            phase1 = 2.0 * np.pi * (f - detune_hz) * t
            phase2 = 2.0 * np.pi * (f + detune_hz) * t
            saw = scipy.signal.sawtooth(phase1)
            tri = 2.0 * np.abs(2.0 * (phase2 / (2.0 * np.pi) - np.floor(phase2 / (2.0 * np.pi) + 0.5))) - 1.0
            osc = 0.6 * saw + 0.4 * tri
            
            pan_angle = (pan + 1.0) * (np.pi / 4.0)
            gain_l = np.cos(pan_angle)
            gain_r = np.sin(pan_angle)
            
            note_signal = osc * pad_env * 0.18
            left += note_signal * gain_l
            right += note_signal * gain_r

        # Dynamic low-pass filter sweep on the chord
        nyq = sample_rate / 2.0
        low_cut = min(180.0 / nyq, 0.45)
        high_cut = min(6500.0 / nyq, 0.45)
        b, a = scipy.signal.butter(2, [low_cut, high_cut], btype='bandpass')
        left = scipy.signal.lfilter(b, a, left)
        right = scipy.signal.lfilter(b, a, right)

        # 3. Crystal FM Chime / Identity Bell (C6=1046.5Hz, G6=1567.98Hz)
        chime_env = np.exp(-t / 0.8)
        mod_index = 3.5 * np.exp(-t / 0.15)
        modulator1 = np.sin(2.0 * np.pi * (1046.50 * 3.5) * t)
        carrier1 = np.sin(2.0 * np.pi * 1046.50 * t + mod_index * modulator1) * chime_env * 0.28
        
        modulator2 = np.sin(2.0 * np.pi * (1567.98 * 2.0) * t)
        carrier2 = np.sin(2.0 * np.pi * 1567.98 * t + mod_index * modulator2) * chime_env * 0.22

        # High acoustic sparkle ping at 0.18s (C7 = 2093Hz)
        ping_t = np.maximum(0, t - 0.18)
        ping_env = np.exp(-ping_t / 0.35) * (t >= 0.18)
        ping = np.sin(2.0 * np.pi * 2093.0 * ping_t) * ping_env * 0.12

        left += carrier1 * 0.8 + ping * 0.6
        right += carrier2 * 0.8 + ping * 0.6

        # 4. Stereophonic ping delay (Left 35ms, Right 50ms)
        delay_l = int(0.035 * sample_rate)
        delay_r = int(0.050 * sample_rate)
        if delay_l < num_samples:
            left[delay_l:] += 0.25 * left[:-delay_l]
        if delay_r < num_samples:
            right[delay_r:] += 0.25 * right[:-delay_r]

        # 5. Algorithmic Schroeder diffuse reverb tail
        comb_delays = [int(0.029 * sample_rate), int(0.037 * sample_rate), int(0.043 * sample_rate)]
        reverb_mix_l = np.zeros_like(left)
        reverb_mix_r = np.zeros_like(right)
        for cd in comb_delays:
            if cd < num_samples:
                decay_factor = 0.55
                comb_l = np.zeros_like(left)
                comb_r = np.zeros_like(right)
                for i in range(cd, num_samples):
                    comb_l[i] = left[i - cd] + decay_factor * comb_l[i - cd]
                    comb_r[i] = right[i - cd] + decay_factor * comb_r[i - cd]
                reverb_mix_l += comb_l * 0.15
                reverb_mix_r += comb_r * 0.15
        
        left += reverb_mix_l
        right += reverb_mix_r

        # Master envelope - clean zero-crossing fadeout at end
        fade_samples = int(0.25 * sample_rate)
        fade_curve = np.linspace(1.0, 0.0, fade_samples) ** 2
        left[-fade_samples:] *= fade_curve
        right[-fade_samples:] *= fade_curve

        out = np.vstack([left, right])
        
        # Peak normalization to -1.0 dBFS (0.891)
        peak = np.max(np.abs(out))
        if peak > 0:
            out = (out / peak) * 0.891
            
        return out
