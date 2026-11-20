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
