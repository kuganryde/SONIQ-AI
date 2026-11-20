# SONIQ AI: REST & WEBSOCKET API DOCUMENTATION

Base URL: `http://localhost:8008` (or `/api/v1`)

## 1. Health & Telemetry
- `GET /api/v1/health`: Returns service health, supported audio standards, and active agents.
- `GET /api/v1/projects/demo`: Generates and returns a playable 4-track studio demonstration project.
- `WebSocket /ws/monitoring`: Real-time streaming VU telemetry (Peak, RMS, LUFS, Phase correlation).

## 2. Audio Ingestion & File Download
- `POST /api/v1/audio/upload`: Multipart upload of audio files (WAV, FLAC, MP3, AIFF, OGG, MIDI).
- `GET /api/v1/audio/download/{filename}`: Non-destructive stream/download of source, processed, stem, or export files.

## 3. AI Engineering Agent Endpoints
- `POST /api/v1/audio/analyze`: Trigger Agent 01 (Audio Analyst).
- `POST /api/v1/audio/separate-stems`: Trigger Agent 02 (Stem Separator).
- `POST /api/v1/audio/restore`: Trigger Agent 03 (Audio Restoration).
- `POST /api/v1/audio/mix-proposal`: Trigger Agent 04 (Mixing Engineer).
- `POST /api/v1/audio/arrangement`: Trigger Agent 05 (Music Arranger).
- `POST /api/v1/audio/vocal-process`: Trigger Agent 06 (Vocal Engineer).
- `POST /api/v1/audio/master`: Trigger Agent 07 (Mastering Engineer).
- `POST /api/v1/audio/surround`: Trigger Agent 08 (Surround Sound Engineer).
- `POST /api/v1/audio/qc-audit`: Trigger Agent 09 (Quality Control Engineer).
- `POST /api/v1/audio/orchestrate`: Trigger Agent 10 (Production Manager autonomous pipeline).

## 4. DSP & Sound Synthesis
- `POST /api/v1/dsp/process`: Apply ordered list of DSP blocks (`eq`, `compressor`, `limiter`, `reverb`, `delay`, `saturation`, `widener`).
- `POST /api/v1/synth/generate`: Generate synthesized audio (`subtractive`, `fm`, `drum`, `midi_sequence`).
- `POST /api/v1/export/render`: Bounce final mix or stems with technical QC certificate.
