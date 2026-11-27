"""
SONIQ AI Audio Intelligence — Validated Agent Communication Contracts & Hardware Telemetry.
All specialist agents exchange typed Pydantic AgentTask / AgentResult payloads coordinated
by the central AudioProductionDirector.
"""

from datetime import datetime, timezone
from enum import Enum
import os
from typing import Any, Dict, List, Optional
import uuid
from pydantic import BaseModel, Field


class ProductionMode(str, Enum):
    AUTO = "AUTO"
    STUDIO_PRO = "STUDIO_PRO"
    CINEMA_X = "CINEMA_X"
    MASTER_X = "MASTER_X"
    CUSTOM = "CUSTOM"


class ExecutionStatus(str, Enum):
    QUEUED = "QUEUED"
    RUNNING = "RUNNING"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    REJECTED_BY_QA = "REJECTED_BY_QA"
    CANCELLED = "CANCELLED"


class RetryPolicy(BaseModel):
    max_retries: int = Field(2, ge=0, le=5)
    backoff_seconds: float = Field(1.0, ge=0.0, le=30.0)


class HardwarePreferences(BaseModel):
    prefer_gpu: bool = False
    max_cpu_threads: int = Field(2, ge=1, le=16)
    memory_limit_mb: int = Field(2048, ge=256, le=32768)


class AgentTask(BaseModel):
    task_id: str = Field(default_factory=lambda: f"task_{uuid.uuid4().hex[:10]}")
    project_id: str = "soniq_default"
    agent_id: str
    input_asset_id: str = ""
    input_file_path: str
    processing_profile: str = "default"
    processing_parameters: Dict[str, Any] = Field(default_factory=dict)
    required_output_format: str = "WAV"
    hardware_preferences: HardwarePreferences = Field(default_factory=HardwarePreferences)
    deadline: Optional[str] = None
    retry_policy: RetryPolicy = Field(default_factory=RetryPolicy)


class AgentResult(BaseModel):
    task_id: str
    agent_id: str
    execution_status: ExecutionStatus
    output_asset_ids: List[str] = Field(default_factory=list)
    output_file_path: Optional[str] = None
    processing_report: Dict[str, Any] = Field(default_factory=dict)
    measurements: Dict[str, Any] = Field(default_factory=dict)
    warnings: List[str] = Field(default_factory=list)
    errors: List[str] = Field(default_factory=list)
    execution_time: float = 0.0
    hardware_used: str = "CPU"
    model_version: str = "1.0.0"


class QualityGateCheck(BaseModel):
    name: str
    passed: bool
    measured_value: Any
    threshold: str
    responsible_agent: Optional[str] = None
    detail: str = ""


class QualityGateReport(BaseModel):
    passed: bool
    attempt_number: int = 1
    max_attempts: int = 2
    checks: List[QualityGateCheck] = Field(default_factory=list)
    failed_stage: Optional[str] = None
    corrective_instruction: Dict[str, Any] = Field(default_factory=dict)
    audited_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class HardwareMonitor:
    """Detects live CPU, RAM, and GPU availability without crashing if torch/cuda is absent."""

    @staticmethod
    def detect() -> Dict[str, Any]:
        cpu_cores = os.cpu_count() or 2
        cuda_available = False
        gpu_name = None
        try:
            import torch
            cuda_available = bool(torch.cuda.is_available())
            if cuda_available:
                gpu_name = torch.cuda.get_device_name(0)
        except Exception:
            pass

        mem_total_gb = 0.0
        mem_avail_gb = 0.0
        try:
            mem_info = {}
            with open("/proc/meminfo", encoding="utf-8") as f:
                for line in f:
                    parts = line.split(":")
                    if len(parts) == 2:
                        mem_info[parts[0].strip()] = int(parts[1].split()[0])
            mem_total_gb = round(mem_info.get("MemTotal", 0) / (1024 ** 2), 2)
            mem_avail_gb = round(mem_info.get("MemAvailable", 0) / (1024 ** 2), 2)
        except Exception:
            pass

        return {
            "backend": "CUDA_GPU" if cuda_available else "CPU",
            "cuda_available": cuda_available,
            "gpu_name": gpu_name,
            "cpu_cores": cpu_cores,
            "ram_total_gb": mem_total_gb,
            "ram_available_gb": mem_avail_gb,
        }
