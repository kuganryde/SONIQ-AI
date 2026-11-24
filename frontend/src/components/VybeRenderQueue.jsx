import React, { useState, useEffect } from 'react';
import { 
  DownloadCloud, 
  Film, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Play, 
  Cpu, 
  Layers,
  Sparkles
} from 'lucide-react';
import { apiUrl, safeFetchJson } from '../config/api';

export default function VybeRenderQueue({
  currentResolution = '1080p',
  currentAspectRatio = '16:9',
  timelineClips = [],
  selectedLut = 'clean',
  activeFrei0rEffects = [],
  selectedTransition = 'dissolve',
  transitionDuration = 0.75,
  renderEngine = 'auto',
  onSelectRenderEngine,
  pipMode = 'single'
}) {
  const [resolution, setResolution] = useState(currentResolution);
  const [profile, setProfile] = useState('Web 1080p H.264');
  const [frameRate, setFrameRate] = useState(30.0);
  const [outputFormat, setOutputFormat] = useState('mp4');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchJobs = async () => {
    try {
      const data = await safeFetchJson(apiUrl('/api/v1/render/jobs'));
      setJobs(data.jobs || []);
    } catch (e) {
      console.error('Failed to fetch render jobs:', e);
    }
  };

  useEffect(() => {
    fetchJobs();
    const interval = setInterval(fetchJobs, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleStartRender = async () => {
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const payload = {
        project_id: 'proj_vybe_demo',
        profile_name: profile,
        output_format: outputFormat,
        resolution: resolution,
        frame_rate: frameRate,
        clips: timelineClips,
        lut_name: selectedLut || 'clean',
        frei0r_effects: activeFrei0rEffects || [],
        transition_style: selectedTransition || 'dissolve',
        transition_duration: transitionDuration || 0.75,
        engine: renderEngine || 'auto',
        pip_mode: pipMode !== 'single' ? pipMode : null
      };

      const res = await safeFetchJson(apiUrl('/api/v1/render/video'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      await fetchJobs();
    } catch (err) {
      console.error('Render initiation error:', err);
      setErrorMsg(err.message || 'Render initiation failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col h-full space-y-4">
      {/* 1. Export Render Configuration */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 space-y-3">
        <div className="flex items-center justify-between pb-1 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <Film className="w-4 h-4 text-cyan-400" />
            <h4 className="text-xs font-bold text-slate-200 uppercase font-mono">
              Dual Broadcast Render Engine (FFmpeg & MLT)
            </h4>
          </div>
          <div className="flex items-center space-x-1.5">
            <a
              href={apiUrl('/api/v1/projects/proj_vybe_demo/export-mlt')}
              download="vybe_project_openshot.mlt"
              className="px-2 py-0.5 rounded bg-violet-950/80 border border-violet-700/60 text-violet-300 font-mono text-[10px] font-bold hover:bg-violet-900 transition flex items-center space-x-1"
            >
              <span>EXPORT OPENSHOT .MLT</span>
            </a>
            <span className="text-[10px] font-mono text-cyan-400 font-bold bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/80">
              melt 7.22.0 + FFmpeg 6.1
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs">
          {/* Resolution Picker */}
          <div>
            <label className="text-[10px] font-mono text-slate-400 block mb-1">RESOLUTION</label>
            <select
              value={resolution}
              onChange={(e) => setResolution(e.target.value)}
              className="w-full bg-[#080b11] border border-slate-800 rounded-lg p-1.5 text-xs text-slate-200 font-mono focus:border-cyan-500"
            >
              <option value="1080p">1080p Full HD (1920x1080)</option>
              <option value="720p">720p HD (1280x720)</option>
              <option value="4k">4K Ultra HD (3840x2160)</option>
              <option value="9:16">9:16 Vertical (1080x1920)</option>
              <option value="1:1">1:1 Square (1080x1080)</option>
            </select>
          </div>

          {/* Profile / Codec */}
          <div>
            <label className="text-[10px] font-mono text-slate-400 block mb-1">ENCODING PROFILE</label>
            <select
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
              className="w-full bg-[#080b11] border border-slate-800 rounded-lg p-1.5 text-xs text-slate-200 font-mono focus:border-cyan-500"
            >
              <option value="Web 1080p H.264">Universal H.264 / AAC (Web & Social)</option>
              <option value="HEVC High Efficiency">H.265 / HEVC High Efficiency</option>
              <option value="ProRes 422 Master">Apple ProRes 422 Studio Master</option>
              <option value="AV1 Next-Gen">AV1 Sovereign Open Codec</option>
            </select>
          </div>

          {/* Frame Rate */}
          <div>
            <label className="text-[10px] font-mono text-slate-400 block mb-1">FRAME RATE</label>
            <select
              value={frameRate}
              onChange={(e) => setFrameRate(Number(e.target.value))}
              className="w-full bg-[#080b11] border border-slate-800 rounded-lg p-1.5 text-xs text-slate-200 font-mono focus:border-cyan-500"
            >
              <option value={24}>24.0 fps (Cinema Standard)</option>
              <option value={30}>30.0 fps (Broadcast & Web)</option>
              <option value={60}>60.0 fps (High Smoothness)</option>
            </select>
          </div>

          {/* Render Engine Selector */}
          <div>
            <label className="text-[10px] font-mono text-slate-400 block mb-1">RENDER ENGINE</label>
            <select
              value={renderEngine}
              onChange={(e) => onSelectRenderEngine && onSelectRenderEngine(e.target.value)}
              className="w-full bg-[#080b11] border border-slate-800 rounded-lg p-1.5 text-xs text-slate-200 font-mono focus:border-amber-500"
            >
              <option value="auto">Auto Adaptive (FFmpeg + MLT)</option>
              <option value="ffmpeg">FFmpeg FilterComplex (Fast)</option>
              <option value="mlt">MLT Framework (melt / OpenShot)</option>
            </select>
          </div>
        </div>

        {/* Active Look & VFX Pipeline Telemetry */}
        <div className="flex flex-wrap items-center justify-between p-2 rounded-lg bg-black/40 border border-slate-800 text-[11px] font-mono gap-1">
          <div className="flex items-center space-x-2">
            <span className="text-slate-400">3D LUT:</span>
            <span className="px-1.5 py-0.5 rounded bg-violet-950/80 border border-violet-700/60 text-violet-300 font-bold uppercase">
              {selectedLut || 'None'}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-slate-400">Frei0r VFX:</span>
            <span className="px-1.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-700/60 text-cyan-300 font-bold">
              {activeFrei0rEffects.length > 0 ? `${activeFrei0rEffects.length} active` : '0 active'}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-slate-400">Transition:</span>
            <span className="px-1.5 py-0.5 rounded bg-amber-950/80 border border-amber-700/60 text-amber-300 font-bold uppercase">
              {selectedTransition} ({transitionDuration}s)
            </span>
          </div>
        </div>

        <button
          onClick={handleStartRender}
          disabled={isSubmitting}
          className={`w-full py-2 rounded-lg bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 text-black font-mono text-xs font-bold flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/20 hover:scale-[1.01] transition ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <DownloadCloud className="w-4 h-4" />
          <span>{isSubmitting ? 'QUEUEING RENDER PIPELINE...' : 'RENDER MASTER VIDEO'}</span>
        </button>
      </div>

      {errorMsg && (
        <div className="p-2 rounded bg-red-950/60 border border-red-700/80 text-red-300 text-xs">
          {errorMsg}
        </div>
      )}

      {/* 2. Active Render Jobs Queue */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 space-y-2">
        <h4 className="text-xs font-bold text-slate-300 font-mono uppercase pb-1 border-b border-slate-800">
          Render Jobs & Output Library ({jobs.length})
        </h4>

        <div className="space-y-2 max-h-[260px] overflow-y-auto pr-1">
          {jobs.map((j) => (
            <div
              key={j.id}
              className="bg-[#0b0e17] border border-slate-800/80 rounded-lg p-2.5 flex flex-col space-y-1.5"
            >
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2 truncate">
                  <span className="font-mono font-bold text-slate-200">{j.id}</span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {j.resolution} • {j.profile_name}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                    j.status === 'COMPLETED' 
                      ? 'bg-emerald-950 text-emerald-300 border border-emerald-700/60' 
                      : j.status === 'RENDERING' 
                      ? 'bg-cyan-950 text-cyan-300 border border-cyan-700/60 animate-pulse'
                      : 'bg-slate-800 text-slate-400'
                  }`}>
                    {j.status}
                  </span>

                  {j.download_url && (
                    <a
                      href={apiUrl(j.download_url)}
                      download
                      className="px-2 py-0.5 rounded bg-cyan-500 hover:bg-cyan-400 text-black text-[10px] font-mono font-bold flex items-center space-x-1 transition"
                    >
                      <DownloadCloud className="w-3 h-3" />
                      <span>DOWNLOAD</span>
                    </a>
                  )}

                  {j.status === 'COMPLETED' && (
                    <a
                      href={apiUrl(`/api/v1/render/mlt/${j.id}`)}
                      download={`vybe_${j.id}.mlt`}
                      title="Download OpenShot/Kdenlive MLT Project XML"
                      className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] font-mono transition"
                    >
                      <span>MLT</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-300 ${
                    j.status === 'COMPLETED' ? 'bg-emerald-400' : 'bg-cyan-400'
                  }`}
                  style={{ width: `${j.progress_percent || (j.status === 'COMPLETED' ? 100 : 20)}%` }}
                />
              </div>
            </div>
          ))}

          {jobs.length === 0 && (
            <div className="py-6 text-center text-slate-500 font-mono text-xs">
              No render jobs in queue. Configure settings above and click Render Master Video.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
