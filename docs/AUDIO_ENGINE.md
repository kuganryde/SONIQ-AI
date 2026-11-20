# SONIQ AI: AUDIO ENGINE SPECIFICATION

## 1. Non-Destructive Ingestion & Decoding Pipeline
- **Formats Supported**: WAV, BWF, AIFF, FLAC, MP3, AAC, M4A, OGG, OPUS, ALAC, CAF, MIDI, stems.
- **Decoding Mechanism**: `soundfile` with `libsndfile1` backend for lossless PCM/FLAC; `ffmpeg` audio extraction subprocess for compressed codecs.
- **Memory Representation**: Canonical NumPy array shape `(channels, samples)` in 64-bit IEEE 754 floating point precision (`np.float64`) normalized to $[-1.0, 1.0]$.
- **Immutability Principle**: Raw uploaded files are stored read-only in `/storage/uploads/`. Every operation generates a newly versioned file in `/storage/processed/` with unique UUID tracking. Source files are never overwritten.

## 2. Statutory Loudness & True-Peak Measurement
### ITU-R BS.1770-4 / EBU R128 Implementation
1. **K-Weighting Pre-Filter**:
   - Stage 1: High-shelf filter (+4.0 dB boost above 1.5 kHz) simulating acoustic head diffraction.
   - Stage 2: High-pass RLB weighting filter ($f_0 \approx 38\text{ Hz}$).
2. **Channel Weighting Coefficients ($G_i$)**:
   - Left, Right, Center: $1.0\text{ (0 dB)}$
   - LFE: $0.0\text{ (Excluded)}$
   - Surround Left, Surround Right, Rear Left, Rear Right: $1.41\text{ (+1.5 dB)}$
3. **Gating Algorithm**:
   - 400ms rectangular window with 75% overlap (100ms hop).
   - Absolute threshold gate: $-70.0\text{ LKFS}$.
   - Relative threshold gate: $-10.0\text{ dB}$ below average of un-gated blocks.
   - $L_k = -0.691 + 10 \log_{10} \left( \sum G_i \cdot z_i \right)$.

### True Peak (dBTP) with 4x Polyphase Oversampling
- In accordance with ITU-R BS.1770 Annex 2, inter-sample peaks are detected by 4x interpolation oversampling using polyphase filtering.
