# SONIQ AI: AUTONOMOUS AUDIO ENGINEERING AGENTS

SONIQ AI deploys 10 autonomous agents cooperating across the audio lifecycle:

| Agent # | Designation | Key Responsibilities | Primary Tools |
|---|---|---|---|
| **01** | **Audio Analyst** | Ingest audio, extract format metadata, compute LUFS, true peak, phase correlation, detect clipping and frequency balance | `AudioAnalyzer`, `ffprobe`, `SoundFile` |
| **02** | **Stem Separator** | Isolate audio into discrete aligned stems: Vocals, Drums, Bass, Other | Harmonic-Percussive Source Separation (HPSS), median filter masking |
| **03** | **Audio Restoration** | Repair recordings via spectral subtraction noise reduction, 50/60Hz notch hum filter, and clipping interpolation | Spectral de-noiser, IIR notch, cubic spline |
| **04** | **Mixing Engineer** | Analyze track masking and formulate an editable mix proposal (faders, pan, EQ, dynamic control, reverb sends) | Gain staging rules, masking frequency carve |
| **05** | **Music Arranger** | Detect tempo (BPM), musical key, time signature, segment song sections (Intro, Verse, Chorus, Bridge, Outro) | Energy onset envelope, autocorrelation |
| **06** | **Vocal Engineer** | Vocal tuning, sibilance de-essing (5.5-8 kHz), optical vocal compression, and studio air EQ | Dynamic EQ, Opto-comp, tube warmth |
| **07** | **Mastering Engineer** | Deliver EBU R128 and ITU-R BS.1770 compliant masters (Streaming -14 LUFS, CD -9 LUFS, Broadcast -23 LUFS) | Linear EQ, multiband glue, true-peak limiter |
| **08** | **Surround Sound Engineer** | 5.1 and 7.1 VBAP spatial upmixing, discrete LFE 80Hz crossover routing, and ITU-R BS.775 downmix matrix | Vector-Base Amplitude Panning, Linkwitz-Riley |
| **09** | **Quality Control Engineer** | Pre-export delivery audit: verify clipping, true-peak ceiling, phase correlation, and encoding integrity | Compliance auditor, QC certificate builder |
| **10** | **Production Manager** | Conductor orchestrating the full multi-agent pipeline from natural language production prompts | LLM planner, DAG pipeline executor |
