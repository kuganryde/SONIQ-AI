#!/usr/bin/env python3
"""
SONIQ AI — Sovereign Auto-Heal & Repair Watchdog
Monitors soniq-backend, soniq-frontend, soniq-git-autosync, Ollama, and stale render jobs.
Automatically repairs failed services or stuck jobs and sends HTML incident reports via Resend.
"""

import argparse
import json
import os
import subprocess
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

CHECK_INTERVAL_SEC = 120
FAIL_THRESHOLD = 2
ALERT_COOLDOWN_SEC = 900  # 15 min cooldown per repair type
STALE_RENDER_MINUTES = 15
ENV_PATH = Path("/root/.storage_guardian.env")

BACKEND_HEALTH_URL = "http://127.0.0.1:8008/api/v1/health"
BACKEND_RESOURCES_URL = "http://127.0.0.1:8008/api/v1/system/resources"
BACKEND_HEAL_URL = "http://127.0.0.1:8008/api/v1/system/auto-heal"
BACKEND_RENDER_JOBS_URL = "http://127.0.0.1:8008/api/v1/render/jobs"
FRONTEND_URL = "http://127.0.0.1:3030/"
OLLAMA_URL = "http://127.0.0.1:11434/api/tags"


def load_mail_env() -> Dict[str, str]:
    env = {
        "RESEND_API_KEY": os.environ.get("RESEND_API_KEY", ""),
        "RECIPIENT_EMAIL": os.environ.get("RECIPIENT_EMAIL", "rydetechwizsolutions@gmail.com"),
        "SENDER_EMAIL": os.environ.get("SENDER_EMAIL", "RYDETECH SONIQ Watchdog <onboarding@resend.dev>"),
    }
    if ENV_PATH.exists():
        for line in ENV_PATH.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            k, v = line.split("=", 1)
            k = k.strip()
            v = v.strip().strip('"').strip("'")
            if k in env and v:
                env[k] = v
    return env


def send_resend_email(subject: str, html_content: str) -> Tuple[bool, str]:
    env = load_mail_env()
    api_key = env["RESEND_API_KEY"]
    if not api_key:
        return False, "RESEND_API_KEY not configured"

    payload = json.dumps({
        "from": env["SENDER_EMAIL"],
        "to": [env["RECIPIENT_EMAIL"]],
        "subject": subject,
        "html": html_content,
    }).encode("utf-8")

    req = urllib.request.Request(
        "https://api.resend.com/emails",
        data=payload,
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
            "User-Agent": "SONIQ-AutoHeal/1.0",
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            return True, resp.read().decode("utf-8", errors="ignore")
    except urllib.error.HTTPError as e:
        return False, f"HTTP {e.code}: {e.read().decode('utf-8', errors='ignore')}"
    except Exception as e:
        return False, str(e)


def http_get_json(url: str, timeout: float = 8.0) -> Tuple[bool, Any]:
    req = urllib.request.Request(url, method="GET")
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            if resp.status != 200:
                return False, f"HTTP {resp.status}"
            body = resp.read().decode("utf-8", errors="ignore")
            try:
                return True, json.loads(body)
            except Exception:
                return True, body
    except Exception as e:
        return False, str(e)


def http_post_json(url: str, timeout: float = 15.0) -> Tuple[bool, Any]:
    req = urllib.request.Request(url, data=b"{}", headers={"Content-Type": "application/json"}, method="POST")
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            body = resp.read().decode("utf-8", errors="ignore")
            try:
                return resp.status == 200, json.loads(body)
            except Exception:
                return resp.status == 200, body
    except Exception as e:
        return False, str(e)


def run_cmd(cmd: List[str], timeout: int = 30) -> Tuple[int, str, str]:
    try:
        res = subprocess.run(cmd, capture_output=True, text=True, timeout=timeout)
        return res.returncode, res.stdout.strip(), res.stderr.strip()
    except Exception as e:
        return 1, "", str(e)


def get_pm2_status() -> Dict[str, str]:
    code, out, _ = run_cmd(["pm2", "jlist"], timeout=15)
    if code != 0 or not out:
        return {}
    try:
        procs = json.loads(out)
        return {p.get("name", ""): p.get("pm2_env", {}).get("status", "unknown") for p in procs}
    except Exception:
        return {}


class AutoHealWatchdog:
    def __init__(self):
        self.fail_counts: Dict[str, int] = {
            "soniq-backend": 0,
            "soniq-frontend": 0,
            "ollama": 0,
        }
        self.last_alert_ts: Dict[str, float] = {}

    def _should_alert(self, key: str) -> bool:
        now = time.time()
        last = self.last_alert_ts.get(key, 0.0)
        if now - last >= ALERT_COOLDOWN_SEC:
            self.last_alert_ts[key] = now
            return True
        return False

    def _notify_repair(self, title: str, actions: List[str]):
        now_str = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")
        items_html = "".join(f"<li>{a}</li>" for a in actions)
        html = f"""
        <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#111827;">
          <h2 style="color:#0f766e;">SONIQ AI Auto-Heal &amp; Repair Notification</h2>
          <p><strong>Server:</strong> srv1302021 &nbsp;|&nbsp; <strong>Timestamp:</strong> {now_str}</p>
          <p><strong>Event:</strong> {title}</p>
          <ul>{items_html}</ul>
          <p style="font-size:12px;color:#6b7280;">Automated recovery by SONIQ AI Sovereign Watchdog.</p>
        </div>
        """
        ok, info = send_resend_email(f"[SONIQ AI Auto-Heal] {title}", html)
        print(f"[{now_str}] Alert email sent={ok}: {info}", flush=True)

    def run_cycle(self) -> List[str]:
        now_str = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")
        repairs: List[str] = []

        # 1. Check soniq-backend health
        ok_be, be_data = http_get_json(BACKEND_HEALTH_URL)
        if ok_be:
            self.fail_counts["soniq-backend"] = 0
        else:
            self.fail_counts["soniq-backend"] += 1
            print(f"[{now_str}] WARN soniq-backend health check failed ({self.fail_counts['soniq-backend']}/{FAIL_THRESHOLD}): {be_data}", flush=True)
            if self.fail_counts["soniq-backend"] >= FAIL_THRESHOLD:
                code, _, err = run_cmd(["pm2", "restart", "soniq-backend"])
                msg = f"Restarted soniq-backend via PM2 (exit={code}{' err=' + err if err else ''}; trigger: {be_data})"
                print(f"[{now_str}] HEAL {msg}", flush=True)
                repairs.append(msg)
                self.fail_counts["soniq-backend"] = 0

        # 2. Check soniq-frontend
        ok_fe, fe_data = http_get_json(FRONTEND_URL)
        if ok_fe:
            self.fail_counts["soniq-frontend"] = 0
        else:
            self.fail_counts["soniq-frontend"] += 1
            print(f"[{now_str}] WARN soniq-frontend check failed ({self.fail_counts['soniq-frontend']}/{FAIL_THRESHOLD}): {fe_data}", flush=True)
            if self.fail_counts["soniq-frontend"] >= FAIL_THRESHOLD:
                code, _, err = run_cmd(["pm2", "restart", "soniq-frontend"])
                msg = f"Restarted soniq-frontend via PM2 (exit={code}{' err=' + err if err else ''}; trigger: {fe_data})"
                print(f"[{now_str}] HEAL {msg}", flush=True)
                repairs.append(msg)
                self.fail_counts["soniq-frontend"] = 0

        # 3. Check soniq-git-autosync PM2 status
        pm2_map = get_pm2_status()
        sync_status = pm2_map.get("soniq-git-autosync")
        if sync_status and sync_status != "online":
            code, _, err = run_cmd(["pm2", "restart", "soniq-git-autosync"])
            msg = f"Restarted soniq-git-autosync (was '{sync_status}', exit={code})"
            print(f"[{now_str}] HEAL {msg}", flush=True)
            repairs.append(msg)

        # 4. Check Ollama
        ok_ol, ol_data = http_get_json(OLLAMA_URL)
        if ok_ol:
            self.fail_counts["ollama"] = 0
        else:
            self.fail_counts["ollama"] += 1
            print(f"[{now_str}] WARN Ollama check failed ({self.fail_counts['ollama']}/{FAIL_THRESHOLD}): {ol_data}", flush=True)
            if self.fail_counts["ollama"] >= FAIL_THRESHOLD:
                code, _, err = run_cmd(["systemctl", "restart", "ollama"])
                msg = f"Restarted ollama.service via systemd (exit={code}{' err=' + err if err else ''})"
                print(f"[{now_str}] HEAL {msg}", flush=True)
                repairs.append(msg)
                self.fail_counts["ollama"] = 0

        # 5. Check for stale render jobs if backend is healthy
        if ok_be:
            ok_jobs, jobs_payload = http_get_json(BACKEND_RENDER_JOBS_URL)
            if ok_jobs and isinstance(jobs_payload, dict):
                now_dt = datetime.now(timezone.utc)
                stale_found = []
                for job in jobs_payload.get("jobs", []):
                    if job.get("status") in ("QUEUED", "RENDERING"):
                        created_raw = job.get("created_at", "")
                        try:
                            dt = datetime.fromisoformat(created_raw)
                            if dt.tzinfo is None:
                                dt = dt.replace(tzinfo=timezone.utc)
                            age_min = (now_dt - dt).total_seconds() / 60.0
                        except Exception:
                            age_min = STALE_RENDER_MINUTES + 1
                        if age_min >= STALE_RENDER_MINUTES:
                            stale_found.append(job.get("id", "unknown"))
                if stale_found:
                    ok_heal, heal_resp = http_post_json(BACKEND_HEAL_URL)
                    msg = f"Triggered backend auto-heal for stale render jobs {stale_found} (ok={ok_heal}, resp={heal_resp})"
                    print(f"[{now_str}] HEAL {msg}", flush=True)
                    repairs.append(msg)

        if repairs and self._should_alert("repair"):
            self._notify_repair(f"{len(repairs)} Auto-Heal Action(s) Executed", repairs)

        return repairs


def main():
    parser = argparse.ArgumentParser(description="SONIQ AI Sovereign Auto-Heal Watchdog")
    parser.add_argument("--once", action="store_true", help="Run a single check cycle and exit")
    args = parser.parse_args()

    watchdog = AutoHealWatchdog()
    if args.once:
        repairs = watchdog.run_cycle()
        print(json.dumps({"status": "ok", "repairs": repairs}))
        return

    print(f"🛡️ SONIQ AI Auto-Heal Watchdog started (interval={CHECK_INTERVAL_SEC}s, stale_threshold={STALE_RENDER_MINUTES}m).", flush=True)
    while True:
        try:
            watchdog.run_cycle()
        except Exception as e:
            now_str = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")
            print(f"[{now_str}] Watchdog loop error: {e}", file=sys.stderr, flush=True)
        time.sleep(CHECK_INTERVAL_SEC)


if __name__ == "__main__":
    main()
