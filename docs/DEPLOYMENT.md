# SONIQ AI: PRODUCTION DEPLOYMENT GUIDE

## 1. Prerequisites
- Linux OS (Ubuntu 22.04 / 24.04 LTS tested on `srv1302021`)
- Python 3.11+ / 3.12+ with virtual environment
- Node.js v20+ / v22+
- FFmpeg and libsndfile1 system packages: `apt-get install -y ffmpeg libsndfile1-dev`
- Local Ollama instance running at `http://localhost:11434`

## 2. Service Orchestration with PM2
SONIQ AI backend and frontend can be monitored via PM2:

```bash
# Start Backend FastAPI on Port 8008
cd /root/soniq-ai/backend
/root/soniq-ai/venv/bin/uvicorn app.main:app --host 0.0.0.0 --port 8008

# Start Frontend Vite Server on Port 3030
cd /root/soniq-ai/frontend
npm run preview -- --port 3030 --host 0.0.0.0
```

## 3. Docker Deployment
Use the included `docker-compose.yml`:
```bash
docker compose up -d --build
```
