# SONIQ AI: DATABASE SCHEMA

The persistence layer tracks projects, session takes, tracks, DSP presets, agent execution logs, and export deliveries.

```sql
-- 1. Projects Table
CREATE TABLE projects (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    tempo_bpm INTEGER DEFAULT 120,
    time_signature VARCHAR(16) DEFAULT '4/4',
    sample_rate_hz INTEGER DEFAULT 48000,
    bit_depth VARCHAR(16) DEFAULT '24',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Tracks Table
CREATE TABLE tracks (
    id VARCHAR(64) PRIMARY KEY,
    project_id VARCHAR(64) REFERENCES projects(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(64) DEFAULT 'Audio',
    color_hex VARCHAR(16) DEFAULT '#00f2fe',
    volume_db REAL DEFAULT 0.0,
    pan REAL DEFAULT 0.0,
    mute BOOLEAN DEFAULT FALSE,
    solo BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Audio Clips Table (Non-destructive references)
CREATE TABLE audio_clips (
    id VARCHAR(64) PRIMARY KEY,
    track_id VARCHAR(64) REFERENCES tracks(id) ON DELETE CASCADE,
    file_path TEXT NOT NULL,
    start_time_seconds REAL DEFAULT 0.0,
    duration_seconds REAL NOT NULL,
    is_source_immutable BOOLEAN DEFAULT TRUE,
    checksum_sha256 VARCHAR(64) NOT NULL
);

-- 4. Agent Execution Audit Trail
CREATE TABLE agent_logs (
    id VARCHAR(64) PRIMARY KEY,
    project_id VARCHAR(64) REFERENCES projects(id) ON DELETE CASCADE,
    agent_id VARCHAR(64) NOT NULL,
    action VARCHAR(128) NOT NULL,
    input_payload JSONB NOT NULL,
    output_result JSONB NOT NULL,
    execution_time_ms REAL NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Export Deliveries & QC Certificates
CREATE TABLE export_certificates (
    certificate_id VARCHAR(64) PRIMARY KEY,
    project_id VARCHAR(64) REFERENCES projects(id) ON DELETE CASCADE,
    export_name VARCHAR(255) NOT NULL,
    file_path TEXT NOT NULL,
    format VARCHAR(32) NOT NULL,
    sample_rate_hz INTEGER NOT NULL,
    bit_depth VARCHAR(16) NOT NULL,
    integrated_lufs REAL NOT NULL,
    true_peak_dbtp REAL NOT NULL,
    qc_status VARCHAR(32) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```
