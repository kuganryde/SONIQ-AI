import asyncio
import gc
import hashlib
import logging
import os
import shutil
import time
from collections import defaultdict, deque
from pathlib import Path
from typing import Any, Dict, Optional, Tuple
from fastapi import Request, Response
from fastapi.responses import JSONResponse
from starlette.middleware.base import BaseHTTPMiddleware

logger = logging.getLogger("soniq.resources")


class RateLimitTier:
    """Configurable rate limiting tiers (max_requests, window_seconds)."""
    DEFAULT = (120, 60)         # 120 req / 60s for general browsing/telemetry
    HEAVY_DSP = (15, 60)        # 15 req / 60s for DSP, mastering, spatial bounces
    UPLOAD = (10, 60)           # 10 uploads / 60s
    AI_ORCHESTRATE = (8, 60)    # 8 calls / 60s for local Ollama LLM queries


class RateLimiter:
    """
    High-performance in-memory sliding-window rate limiter.
    Zero external dependencies, automatic stale entry eviction, proxy-aware IP extraction.
    """
    def __init__(self):
        # ip -> tier -> deque of timestamps
        self.records: Dict[str, Dict[str, deque]] = defaultdict(lambda: defaultdict(deque))
        self.last_cleanup = time.time()
        self.lock = asyncio.Lock()

    def get_client_ip(self, request: Request) -> str:
        # Check standard reverse proxy headers
        forwarded_for = request.headers.get("x-forwarded-for")
        if forwarded_for:
            # First IP in list is original client
            return forwarded_for.split(",")[0].strip()
        real_ip = request.headers.get("x-real-ip")
        if real_ip:
            return real_ip.strip()
        if request.client and request.client.host:
            return request.client.host
        return "127.0.0.1"

    async def is_allowed(self, ip: str, tier_name: str, max_requests: int, window_sec: int) -> Tuple[bool, int, int]:
        """
        Returns:
            (is_allowed: bool, remaining_requests: int, retry_after_sec: int)
        """
        async with self.lock:
            now = time.time()

            # Evict stale entries across all IPs every 300s
            if now - self.last_cleanup > 300:
                self._sweep_stale_entries(now)
                self.last_cleanup = now

            window_start = now - window_sec
            q = self.records[ip][tier_name]

            # Remove timestamps outside current sliding window
            while q and q[0] <= window_start:
                q.popleft()

            if len(q) >= max_requests:
                earliest = q[0]
                retry_after = max(1, int(window_sec - (now - earliest)))
                return False, 0, retry_after

            # Record this request
            q.append(now)
            remaining = max_requests - len(q)
            return True, remaining, 0

    def _sweep_stale_entries(self, now: float):
        """Removes inactive IPs to prevent memory footprint growth."""
        dead_ips = []
        for ip, tiers in self.records.items():
            active_tiers = {}
            for t_name, q in tiers.items():
                while q and q[0] <= now - 120:
                    q.popleft()
                if q:
                    active_tiers[t_name] = q
            if active_tiers:
                self.records[ip] = active_tiers
            else:
                dead_ips.append(ip)
        for ip in dead_ips:
            del self.records[ip]


class RateLimitMiddleware(BaseHTTPMiddleware):
    """FastAPI Middleware to enforce endpoint tier rate limiting."""
    def __init__(self, app, limiter: RateLimiter):
        super().__init__(app)
        self.limiter = limiter

    async def dispatch(self, request: Request, call_next):
        # Whitelist CORS preflight OPTIONS, static assets, and health checks
        if request.method == "OPTIONS":
            return await call_next(request)

        path = request.url.path
        if path.endswith("/health") or path.startswith("/assets") or path == "/favicon.ico":
            return await call_next(request)

        # Categorize tier by endpoint sensitivity
        if "/audio/upload" in path:
            tier_name, (max_req, win_sec) = "upload", RateLimitTier.UPLOAD
        elif "/audio/orchestrate" in path:
            tier_name, (max_req, win_sec) = "ai_orchestrate", RateLimitTier.AI_ORCHESTRATE
        elif any(ep in path for ep in ["/audio/master", "/audio/surround", "/dsp/process", "/audio/separate-stems", "/audio/restore", "/audio/vocal-process"]):
            tier_name, (max_req, win_sec) = "heavy_dsp", RateLimitTier.HEAVY_DSP
        else:
            tier_name, (max_req, win_sec) = "default", RateLimitTier.DEFAULT

        client_ip = self.limiter.get_client_ip(request)
        allowed, remaining, retry_after = await self.limiter.is_allowed(client_ip, tier_name, max_req, win_sec)

        if not allowed:
            logger.warning(f"Rate limit exceeded: IP {client_ip} on {tier_name} ({path})")
            return JSONResponse(
                status_code=429,
                content={
                    "detail": f"Rate limit exceeded for tier '{tier_name}'. Maximum {max_req} requests per {win_sec}s.",
                    "tier": tier_name,
                    "retry_after_seconds": retry_after
                },
                headers={
                    "Retry-After": str(retry_after),
                    "X-RateLimit-Limit": str(max_req),
                    "X-RateLimit-Remaining": "0"
                }
            )

        response = await call_next(request)
        response.headers["X-RateLimit-Limit"] = str(max_req)
        response.headers["X-RateLimit-Remaining"] = str(remaining)
        return response


class ResourceGuard:
    """
    Manages CPU concurrency & RAM headroom for 64-bit audio operations.
    Prevents thread thrashing and Out-Of-Memory exceptions on multi-track sessions.
    """
    # Restrict simultaneous heavy CPU/FFT jobs to 3 workers (leaves CPU core for OS/API)
    dsp_semaphore = asyncio.Semaphore(3)

    @staticmethod
    def clean_memory():
        """Explicitly reclaims Python reference cycles and invokes garbage collection."""
        gc.collect()


class AudioCacheManager:
    """
    LRU and content-hashed cache for acoustic analysis and rendered DSP segments.
    Prevents redundant recalculation of expensive 4x polyphase True-Peak and gated LUFS.
    """
    _analysis_cache: Dict[str, Dict[str, Any]] = {}
    _cache_max_size: int = 500

    @classmethod
    def get_file_signature(cls, file_path: str) -> str:
        """Generates quick signature based on file path, mtime, and size without loading entire file into RAM."""
        try:
            p = Path(file_path)
            stat = p.stat()
            raw = f"{p.name}_{stat.st_size}_{stat.st_mtime}"
            return hashlib.md5(raw.encode()).hexdigest()
        except Exception:
            return file_path

    @classmethod
    def get_cached_analysis(cls, file_path: str) -> Optional[Dict[str, Any]]:
        sig = cls.get_file_signature(file_path)
        return cls._analysis_cache.get(sig)

    @classmethod
    def store_analysis(cls, file_path: str, data: Dict[str, Any]):
        if len(cls._analysis_cache) >= cls._cache_max_size:
            # Evict oldest 20%
            keys = list(cls._analysis_cache.keys())
            for k in keys[:100]:
                del cls._analysis_cache[k]
        sig = cls.get_file_signature(file_path)
        cls._analysis_cache[sig] = data

    @classmethod
    def prune_temporary_storage(cls, storage_dir: Path, max_age_hours: int = 48) -> int:
        """
        Removes temporary derivatives older than max_age_hours in processed/, stems/, synths/.
        STRICTLY PRESERVES uploads/ (source original audio recordings remain immutable).
        """
        pruned_count = 0
        cutoff = time.time() - (max_age_hours * 3600)
        target_dirs = [
            storage_dir / "processed",
            storage_dir / "stems",
            storage_dir / "synths",
            storage_dir / "temp_imports",
        ]

        for d in target_dirs:
            if not d.exists():
                continue
            for item in d.glob("*"):
                # Do not delete demo files or gitkeeps
                if item.name.startswith("demo_") or item.name == ".gitkeep":
                    continue
                try:
                    if item.is_file() and item.stat().st_mtime < cutoff:
                        item.unlink()
                        pruned_count += 1
                except Exception as e:
                    logger.warning(f"Error pruning temporary file {item}: {e}")

        logger.info(f"Temporary audio storage pruned: {pruned_count} files removed.")
        return pruned_count


# Global singleton instances
global_rate_limiter = RateLimiter()
