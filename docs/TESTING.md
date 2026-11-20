# SONIQ AI: AUTOMATED TEST SUITE & VERIFICATION

## 1. Running the Automated Test Suite
```bash
cd /root/soniq-ai/backend
PYTHONPATH=. /root/soniq-ai/venv/bin/pytest tests/ -v
```

## 2. Test Coverage Overview
- `tests/test_soniq_core.py`:
  - `test_audio_analysis_metrics`: ITU-R BS.1770-4 LUFS, True-Peak, Phase correlation, Crest Factor.
  - `test_biquad_eq_and_filtering`: RBJ 8-band parametric EQ frequency attenuation.
  - `test_compressor_and_limiter`: Dynamic gain reduction and zero-overshoot limiter ceiling.
  - `test_surround_panning_5_point_1`: 5.1 channel matrix, LFE crossover filtering, and downmix.
  - `test_surround_panning_7_point_1`: 7.1 rear speaker spatial panning.
  - `test_synth_engine_generation`: Subtractive, FM, 808 percussion, and MIDI sequence renderer.
  - `test_mastering_engine_compliance`: Target streaming -14 LUFS matching.
  - `test_export_engine_flac_and_wav`: Lossless FLAC & Broadcast WAV export with QC report.
- `tests/test_ai_agents.py`:
  - Tests Agents 01 through 10, including end-to-end multi-agent pipeline orchestration.
- `tests/test_api.py`:
  - Tests health, demo session generation, and synth generation endpoints.

## 3. Running Audio Processing Benchmarks
```bash
cd /root/soniq-ai/backend
PYTHONPATH=. /root/soniq-ai/venv/bin/python benchmarks/benchmark_suite.py
```
