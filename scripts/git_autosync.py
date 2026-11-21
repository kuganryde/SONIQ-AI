#!/usr/bin/env python3
"""
SONIQ AI — Autonomous Git Sync Daemon
Monitors /root/soniq-ai workspace and automatically commits and pushes all edits to GitHub.
"""

import datetime
import os
import subprocess
import sys
import time
from pathlib import Path

REPO_DIR = Path("/root/soniq-ai")
CHECK_INTERVAL_SECONDS = 15
LOCK_TIMEOUT_SECONDS = 60


def run_git(args, cwd=REPO_DIR, check=False):
    """Executes a git command and returns (returncode, stdout, stderr)."""
    res = subprocess.run(
        ["git"] + args,
        cwd=str(cwd),
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
    )
    if check and res.returncode != 0:
        raise RuntimeError(f"Git command failed: {' '.join(args)}\nError: {res.stderr}")
    return res.returncode, res.stdout.strip(), res.stderr.strip()


def check_and_sync():
    """Checks for edits, stages them, commits, and pushes to origin/main."""
    index_lock = REPO_DIR / ".git" / "index.lock"
    if index_lock.exists():
        # Check if stale lock (> 60s)
        try:
            age = time.time() - index_lock.stat().st_mtime
            if age > LOCK_TIMEOUT_SECONDS:
                print(f"[{datetime.datetime.utcnow().isoformat()}] Removing stale .git/index.lock (age: {age:.1f}s)")
                index_lock.unlink()
            else:
                return
        except Exception:
            return

    # 1. Check if git status has any untracked or modified files
    code, status_out, _ = run_git(["status", "--porcelain"])
    if code != 0:
        return

    if status_out:
        # Changes detected!
        run_git(["add", "-A"])
        
        # Check staged changes
        code, staged_files, _ = run_git(["diff", "--cached", "--name-only"])
        if staged_files:
            files_list = [f.strip() for f in staged_files.splitlines() if f.strip()]
            num_files = len(files_list)
            
            if num_files <= 3:
                files_summary = ", ".join(files_list)
            else:
                files_summary = f"{files_list[0]}, {files_list[1]} and {num_files - 2} other file(s)"
            
            now_str = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")
            commit_msg = f"auto(sync): update {files_summary} [{now_str}]"
            
            commit_code, commit_out, commit_err = run_git(["commit", "-m", commit_msg])
            if commit_code == 0:
                print(f"[{now_str}] 📝 Committed: {commit_msg}", flush=True)
            else:
                print(f"[{now_str}] ⚠️ Commit failed: {commit_err}", flush=True)

    # 2. Check if we have unpushed commits against origin/main
    code, unpushed_count, _ = run_git(["rev-list", "--count", "origin/main..HEAD"])
    if code == 0 and unpushed_count and int(unpushed_count) > 0:
        now_str = datetime.datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S UTC")
        print(f"[{now_str}] 🚀 Pushing {unpushed_count} commit(s) to GitHub (origin/main)...", flush=True)
        push_code, push_out, push_err = run_git(["push", "origin", "main"])
        if push_code == 0:
            print(f"[{now_str}] ✅ Successfully pushed to GitHub!", flush=True)
        else:
            print(f"[{now_str}] ❌ Push failed: {push_err}", flush=True)


def main():
    print(f"⚡ SONIQ AI Autonomous Git Sync Daemon started. Polling every {CHECK_INTERVAL_SECONDS}s...", flush=True)
    while True:
        try:
            check_and_sync()
        except Exception as e:
            print(f"[{datetime.datetime.utcnow().isoformat()}] Error during git sync: {e}", file=sys.stderr, flush=True)
        time.sleep(CHECK_INTERVAL_SECONDS)


if __name__ == "__main__":
    main()
