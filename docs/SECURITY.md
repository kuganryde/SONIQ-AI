# SONIQ AI: SECURITY & DATA RESIDENCY POLICY

## 1. Non-Destructive Storage Isolation
- Every raw ingested audio file is assigned an immutable read-only storage path.
- Intermediate DSP operations, source separation stems, and mastered outputs write to segregated storage trees (`/storage/processed/`, `/storage/stems/`, `/storage/exports/`).
- Users retain 100% intellectual property ownership of their source and processed recordings.

## 2. Sovereign Local Enclave Processing
- **Host**: `srv1302021` Local Sovereign Enclave.
- **LLM Boundary**: AI agent reasoning is performed entirely on the local Ollama instance (`http://localhost:11434`) using sovereign weights.
- **Zero Third-Party Training**: Private user recordings, vocal takes, and stems are never transmitted to public external cloud APIs or utilized for model training.

## 3. Strict Input Validation & Threat Prevention
- Upload file validation using container and codec probing via `ffprobe`.
- Executable payloads disguised as audio containers are rejected immediately.
- Buffer size and upload volume caps prevent memory exhaustion denial of service attacks.
