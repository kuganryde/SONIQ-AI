import pytest
import numpy as np
from pathlib import Path

from app.core.audio_io import AudioIO
from app.core.analysis import AudioAnalyzer
from app.core.dsp_engine import DSPOps, BiquadFilter
from app.core.surround_engine import SurroundLayout, SurroundPannerEngine
from app.core.synth_engine import SynthEngine
from app.core.mastering_engine import MasteringEngine
from app.core.export_engine import ExportEngine
from app.core.cinema_processor import DolbyProcessor, DTSProcessor, DolbyCodec, DTSCodec
from app.config import settings


@pytest.fixture
def synthetic_stereo_audio():
    """Generates 2-second 48kHz stereo test tone (1kHz tone + noise)."""
    sr = 48000
    t = np.linspace(0, 2.0, sr * 2, endpoint=False)
    left = 0.5 * np.sin(2 * np.pi * 1000.0 * t)
    right = 0.5 * np.sin(2 * np.pi * 1000.0 * t + 0.2)
    return np.vstack([left, right]), sr


def test_audio_analysis_metrics(synthetic_stereo_audio):
    audio, sr = synthetic_stereo_audio
    metrics = AudioAnalyzer.full_audio_analysis(audio, sr)
    
    assert "integrated_lufs" in metrics
    assert "true_peak_dbtp" in metrics
    assert "phase_correlation" in metrics
    assert metrics["phase_correlation"] > 0.8
    assert metrics["clipping"]["has_clipping"] is False
    assert metrics["mono_compatible"] is True


def test_biquad_eq_and_filtering(synthetic_stereo_audio):
    audio, sr = synthetic_stereo_audio
    bands = [
        {"type": "highpass", "freq": 100.0, "gain_db": 0.0, "q": 0.707},
        {"type": "peaking", "freq": 1000.0, "gain_db": -6.0, "q": 1.5},
        {"type": "highshelf", "freq": 8000.0, "gain_db": 2.0, "q": 0.707}
    ]
    eq_audio = DSPOps.apply_parametric_eq(audio, sr, bands)
    
    assert eq_audio.shape == audio.shape
    # 1kHz tone attenuated by ~6dB
    orig_1k_power = np.mean(audio ** 2)
    eq_power = np.mean(eq_audio ** 2)
    assert eq_power < orig_1k_power


def test_compressor_and_limiter(synthetic_stereo_audio):
    audio, sr = synthetic_stereo_audio
    # Boost signal to trigger compression
    loud_audio = audio * 2.0
    compressed = DSPOps.apply_compressor(
        loud_audio, sr, threshold_db=-12.0, ratio=4.0, attack_ms=10.0, release_ms=50.0
    )
    # In steady state after attack time, compressor attenuates signal
    steady_comp_rms = np.sqrt(np.mean(compressed[:, 2000:] ** 2))
    steady_loud_rms = np.sqrt(np.mean(loud_audio[:, 2000:] ** 2))
    assert steady_comp_rms < steady_loud_rms

    # Limiter test: ensure peak does not exceed -0.1 dBTP
    limited = DSPOps.apply_brickwall_limiter(loud_audio, sr, ceiling_dbtp=-0.1)
    peak = np.max(np.abs(limited))
    peak_db = 20 * np.log10(peak)
    assert peak_db <= 0.0


def test_surround_panning_5_point_1(synthetic_stereo_audio):
    audio, sr = synthetic_stereo_audio
    surround = SurroundPannerEngine.spatialize_track(
        audio, sr, x=-0.5, y=0.5, z=0.0, layout=SurroundLayout.FIVE_POINT_ONE, crossover_hz=80.0
    )
    # 5.1 has 6 channels: L, R, C, LFE, Ls, Rs
    assert surround.shape[0] == 6
    assert surround.shape[1] == audio.shape[1]
    
    # Left channel should have more energy than right channel due to x = -0.5
    energy_l = np.sum(surround[0] ** 2)
    energy_r = np.sum(surround[1] ** 2)
    assert energy_l > energy_r

    # Test downmix to stereo
    stereo_downmix = SurroundPannerEngine.downmix_to_stereo(surround, layout=SurroundLayout.FIVE_POINT_ONE)
    assert stereo_downmix.shape[0] == 2
    assert stereo_downmix.shape[1] == audio.shape[1]


def test_surround_panning_7_point_1(synthetic_stereo_audio):
    audio, sr = synthetic_stereo_audio
    surround = SurroundPannerEngine.spatialize_track(
        audio, sr, x=0.0, y=-0.8, z=0.0, layout=SurroundLayout.SEVEN_POINT_ONE
    )
    # 7.1 has 8 channels
    assert surround.shape[0] == 8
    
    # Rear speakers should receive strong energy
    rear_l_energy = np.sum(surround[6] ** 2)
    front_c_energy = np.sum(surround[2] ** 2)
    assert rear_l_energy > front_c_energy


def test_synth_engine_generation():
    sr = 48000
    # Subtractive
    sub_note = SynthEngine.synthesize_subtractive_note(60, 0.5, sample_rate=sr)
    assert sub_note.shape == (2, int(0.5 * sr))
    assert np.max(np.abs(sub_note)) > 0.01

    # FM
    fm_note = SynthEngine.synthesize_fm_note(60, 0.5, sample_rate=sr)
    assert fm_note.shape == (2, int(0.5 * sr))

    # Drums
    kick = SynthEngine.synthesize_drum_hit("kick", 0.3, sample_rate=sr)
    assert kick.shape == (2, int(0.3 * sr))

    # MIDI sequence
    events = [
        {"note": 60, "start": 0.0, "duration": 0.3, "velocity": 100},
        {"note": 64, "start": 0.2, "duration": 0.3, "velocity": 100}
    ]
    seq = SynthEngine.render_midi_sequence(events, sample_rate=sr)
    assert seq.shape[0] == 2
    assert seq.shape[1] > int(0.5 * sr)


def test_mastering_engine_compliance(synthetic_stereo_audio):
    audio, sr = synthetic_stereo_audio
    mastered, report = MasteringEngine.master_track(audio, sr, profile_key="streaming")
    
    assert mastered.shape == audio.shape
    assert report["compliance_pass"] is True
    # Target streaming is -14.0 LUFS
    post_lufs = report["post_mastering_metrics"]["integrated_lufs"]
    assert abs(post_lufs - (-14.0)) <= 2.0


def test_export_engine_flac_and_wav(synthetic_stereo_audio, tmp_path):
    audio, sr = synthetic_stereo_audio
    cert = ExportEngine.render_and_export(
        audio=audio,
        sample_rate=sr,
        project_name="TestProject",
        export_name="TestExport",
        output_format="FLAC",
        bit_depth="24"
    )
    assert cert["technical_specifications"]["format"] == "FLAC"
    assert cert["technical_specifications"]["bit_depth"] == "24"
    assert cert["quality_audit"]["passed_clipping_test"] is True


def test_dolby_processing_suite(synthetic_stereo_audio):
    audio, sr = synthetic_stereo_audio
    # Dolby Pro Logic II 5.1
    d51 = DolbyProcessor.apply_pro_logic_ii_matrix(audio, sr, layout=SurroundLayout.FIVE_POINT_ONE)
    assert d51.shape[0] == 6
    assert d51.shape[1] == audio.shape[1]

    # Dolby Atmos 7.1.4
    d714 = DolbyProcessor.apply_pro_logic_ii_matrix(audio, sr, layout=SurroundLayout.SEVEN_POINT_ONE_FOUR)
    assert d714.shape[0] == 12

    # Dialnorm & DRC
    norm, stats = DolbyProcessor.apply_dialnorm_and_drc(d51, sr, target_dialnorm=-27.0, drc_profile="film_standard")
    assert norm.shape == d51.shape
    assert stats["target_dialnorm_db"] == -27.0
    assert "drc_profile" in stats


def test_dts_processing_suite(synthetic_stereo_audio):
    audio, sr = synthetic_stereo_audio
    # DTS Neural:X 7.1.4
    dts714 = DTSProcessor.apply_neural_x_upmix(audio, sr, layout=SurroundLayout.SEVEN_POINT_ONE_FOUR)
    assert dts714.shape[0] == 12

    # DTS Dialogue Clarity
    clear, stats = DTSProcessor.apply_dialogue_clarity(dts714, sr, boost_db=4.0)
    assert clear.shape == dts714.shape
    assert stats["dialogue_boost_db"] == 4.0
    assert stats["center_channel_idx"] == 2


def test_dolby_codec_encode_decode(synthetic_stereo_audio, tmp_path):
    audio, sr = synthetic_stereo_audio
    # Conforming and encoding to AC-3
    ac3_path = tmp_path / "test_dolby.ac3"
    enc_res = DolbyCodec.encode(audio, sr, ac3_path, format_type="ac3", bitrate="640k", dialnorm_db=-27)
    
    assert enc_res["status"] == "ENCODED"
    assert ac3_path.exists()
    assert ac3_path.stat().st_size > 0
    assert enc_res["bitrate"] == "640k"

    # Decoding AC-3
    dec_audio, dec_sr, meta = DolbyCodec.decode(ac3_path)
    assert dec_audio.ndim == 2
    assert dec_sr == 48000
    assert "ac3" in meta.get("codec_name", "").lower()

    # E-AC-3 test
    eac3_path = tmp_path / "test_dolby.eac3"
    enc_eac3 = DolbyCodec.encode(audio, sr, eac3_path, format_type="eac3", bitrate="768k", dialnorm_db=-24)
    assert enc_eac3["status"] == "ENCODED"
    assert eac3_path.exists()


def test_dts_codec_encode_decode(synthetic_stereo_audio, tmp_path):
    audio, sr = synthetic_stereo_audio
    # Encode to DTS
    dts_path = tmp_path / "test_master.dts"
    enc_res = DTSCodec.encode(audio, sr, dts_path, bitrate="1536k")
    
    assert enc_res["status"] == "ENCODED"
    assert dts_path.exists()
    assert dts_path.stat().st_size > 0
    assert enc_res["bitrate"] == "1536k"

    # Decode DTS
    dec_audio, dec_sr, meta = DTSCodec.decode(dts_path)
    assert dec_audio.ndim == 2
    assert dec_sr == 48000
    assert "dts" in meta.get("codec_name", "").lower() or "dca" in meta.get("codec_name", "").lower()
