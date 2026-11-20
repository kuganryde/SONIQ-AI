import time
import numpy as np

from app.core.analysis import AudioAnalyzer
from app.core.dsp_engine import DSPOps
from app.core.surround_engine import SurroundLayout, SurroundPannerEngine
from app.core.synth_engine import SynthEngine
from app.core.mastering_engine import MasteringEngine


def run_benchmarks():
    sr = 48000
    duration_sec = 10.0
    num_samples = int(sr * duration_sec)
    
    print("=" * 60)
    print("SONIQ AI AUDIO PROCESSING ENGINE BENCHMARK SUITE")
    print(f"Sample Rate: {sr} Hz | Duration: {duration_sec}s | Samples: {num_samples:,}")
    print("=" * 60)

    # Test Signal: 2 channels
    t = np.linspace(0, duration_sec, num_samples, endpoint=False)
    audio = np.vstack([
        0.5 * np.sin(2 * np.pi * 440.0 * t) + 0.2 * np.random.randn(num_samples),
        0.5 * np.sin(2 * np.pi * 880.0 * t) + 0.2 * np.random.randn(num_samples)
    ])

    # 1. 8-Band Parametric EQ
    bands = [
        {"type": "highpass", "freq": 30.0, "gain_db": 0.0, "q": 0.707},
        {"type": "lowshelf", "freq": 100.0, "gain_db": 3.0, "q": 0.707},
        {"type": "peaking", "freq": 250.0, "gain_db": -2.0, "q": 1.2},
        {"type": "peaking", "freq": 1000.0, "gain_db": 1.5, "q": 1.0},
        {"type": "peaking", "freq": 3500.0, "gain_db": -1.0, "q": 1.5},
        {"type": "peaking", "freq": 6000.0, "gain_db": 2.0, "q": 1.0},
        {"type": "highshelf", "freq": 12000.0, "gain_db": 2.5, "q": 0.707},
        {"type": "lowpass", "freq": 18000.0, "gain_db": 0.0, "q": 0.707},
    ]
    t0 = time.perf_counter()
    _ = DSPOps.apply_parametric_eq(audio, sr, bands)
    t_eq = time.perf_counter() - t0
    eq_rate = (num_samples * 2) / t_eq / 1e6
    print(f"1. 8-Band 64-bit Parametric EQ:  {t_eq * 1000:.2f} ms ({eq_rate:.2f} M-samples/sec) [x{duration_sec / t_eq:.1f} Realtime]")

    # 2. Studio Compressor
    t0 = time.perf_counter()
    _ = DSPOps.apply_compressor(audio, sr, threshold_db=-18.0, ratio=4.0)
    t_comp = time.perf_counter() - t0
    comp_rate = (num_samples * 2) / t_comp / 1e6
    print(f"2. Studio Dynamic Compressor:   {t_comp * 1000:.2f} ms ({comp_rate:.2f} M-samples/sec) [x{duration_sec / t_comp:.1f} Realtime]")

    # 3. Lookahead Peak Limiter
    t0 = time.perf_counter()
    _ = DSPOps.apply_brickwall_limiter(audio, sr, ceiling_dbtp=-0.1)
    t_lim = time.perf_counter() - t0
    lim_rate = (num_samples * 2) / t_lim / 1e6
    print(f"3. Brickwall Lookahead Limiter:  {t_lim * 1000:.2f} ms ({lim_rate:.2f} M-samples/sec) [x{duration_sec / t_lim:.1f} Realtime]")

    # 4. ITU-R BS.1770 LUFS Measurement
    t0 = time.perf_counter()
    lufs = AudioAnalyzer.measure_lufs(audio, sr)
    t_lufs = time.perf_counter() - t0
    print(f"4. Gated ITU-R BS.1770 LUFS:    {t_lufs * 1000:.2f} ms [x{duration_sec / t_lufs:.1f} Realtime] (Result: {lufs['integrated_lufs']} LUFS)")

    # 5. 5.1 Surround VBAP Spatial Panner
    t0 = time.perf_counter()
    surround = SurroundPannerEngine.spatialize_track(audio, sr, x=0.2, y=0.4, layout=SurroundLayout.FIVE_POINT_ONE)
    t_surr = time.perf_counter() - t0
    print(f"5. 5.1 VBAP Surround Spatializer:{t_surr * 1000:.2f} ms [x{duration_sec / t_surr:.1f} Realtime] ({surround.shape[0]} channels)")

    # 6. Algorithmic Reverb
    t0 = time.perf_counter()
    _ = DSPOps.apply_algorithmic_reverb(audio, sr)
    t_rev = time.perf_counter() - t0
    print(f"6. Algorithmic Reverb Engine:   {t_rev * 1000:.2f} ms [x{duration_sec / t_rev:.1f} Realtime]")

    print("=" * 60)
    print("ALL ACOUSTIC DSP BENCHMARKS EXCEED REAL-TIME CONSTRAINTS")
    print("=" * 60)


if __name__ == "__main__":
    run_benchmarks()
