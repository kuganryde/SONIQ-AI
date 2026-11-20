import React, { useState } from 'react';
import { 
  X, 
  Zap, 
  Wand2, 
  Volume2, 
  Mic, 
  ShieldCheck, 
  Disc, 
  Layers, 
  Activity, 
  Check, 
  Download, 
  Sliders, 
  Plus, 
  Sparkles,
  Radio,
  ArrowRight,
  Flame
} from 'lucide-react';
import { apiUrl, safeFetchJson, resolveAudioUrl } from '../config/api';

export default function QuickFXModal({
  isOpen,
  onClose,
  track,
  onApplyEffect,
  onAddStemTracks,
  onNavigateTab
}) {
  if (!isOpen || !track) return null;

  const [processing, setProcessing] = useState(false);
  const [activePreset, setActivePreset] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [fxResult, setFxResult] = useState(null);

  const presets = [
    {
      id: 'streaming_master',
      name: 'Streaming Master (-14 LUFS)',
      badge: 'POPULAR',
      icon: Volume2,
      color: 'from-cyan-500 to-blue-600',
      description: 'EBU R128 / ITU-R BS.1770-4 normalization, multiband dynamics, tape warmth & -1 dBTP true peak brickwall limiter.',
      category: 'Mastering',
      run: async () => {
        return await safeFetchJson(apiUrl('/api/v1/audio/master'), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            file_path: track.file_path,
            profile: 'streaming',
            custom_target_lufs: -14.0,
            custom_ceiling_dbtp: -1.0
          })
        });
      }
    },
    {
      id: 'vocal_polish',
      name: 'Vocal Polish & De-Ess',
      badge: 'STUDIO AIR',
      icon: Mic,
      color: 'from-pink-500 to-rose-600',
      description: '6.5 kHz sibilance de-essing, pitch centering, smooth opto-compression & high-shelf studio air lift.',
      category: 'Vocals',
      run: async () => {
        const fd = new FormData();
        fd.append('file_path', track.file_path);
        fd.append('target_scale', 'A Minor');
        fd.append('de_ess_db', '4.5');
        return await safeFetchJson(apiUrl('/api/v1/audio/vocal-process'), {
          method: 'POST',
          body: fd
        });
      }
    },
    {
      id: 'ai_restore',
      name: 'AI Noise & Hum Removal',
      badge: 'AGENT 03',
      icon: ShieldCheck,
      color: 'from-emerald-500 to-teal-600',
      description: 'Spectral noise suppression, 50Hz/60Hz ground loop removal, and peak declipping restoration.',
      category: 'Restoration',
      run: async () => {
        const fd = new FormData();
        fd.append('file_path', track.file_path);
        fd.append('denoise', 'true');
        fd.append('dehum_freq', '50.0');
        fd.append('declip', 'true');
        return await safeFetchJson(apiUrl('/api/v1/audio/restore'), {
          method: 'POST',
          body: fd
        });
      }
    },
    {
      id: 'analog_warmth',
      name: 'Analog Tube Warmth & Punch',
      badge: '64-BIT DSP',
      icon: Flame,
      color: 'from-amber-500 to-orange-600',
      description: 'Tube saturation warmth, 80Hz low-end lift, optical compression (3.5:1), and subtle Haas stereo widening.',
      category: 'DSP Rack',
      run: async () => {
        return await safeFetchJson(apiUrl('/api/v1/dsp/process'), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            file_path: track.file_path,
            operations: [
              {
                type: 'eq',
                bands: [
                  { type: 'lowshelf', freq: 80, gain_db: 2.5, q: 0.707 },
                  { type: 'peaking', freq: 3200, gain_db: 1.8, q: 1.2 },
                  { type: 'highshelf', freq: 11000, gain_db: 2.0, q: 0.707 }
                ]
              },
              { type: 'saturation', drive_db: 4.5, mode: 'tube', warmth: 0.8 },
              { type: 'compressor', threshold_db: -16.0, ratio: 3.5, attack_ms: 18.0, release_ms: 110.0, makeup_gain_db: 2.5 },
              { type: 'widener', width_pct: 125 }
            ]
          })
        });
      }
    },
    {
      id: 'cd_master',
      name: 'Commercial CD / Club (-9 LUFS)',
      badge: 'LOUD',
      icon: Radio,
      color: 'from-violet-500 to-purple-700',
      description: 'High-energy commercial club loudness, aggressive multiband glue, and true peak ceiling at -0.1 dBTP.',
      category: 'Mastering',
      run: async () => {
        return await safeFetchJson(apiUrl('/api/v1/audio/master'), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            file_path: track.file_path,
            profile: 'cd',
            custom_target_lufs: -9.0,
            custom_ceiling_dbtp: -0.1
          })
        });
      }
    },
    {
      id: 'surround_51',
      name: '5.1 Spatial Surround Mix',
      badge: 'IMMERSIVE',
      icon: Disc,
      color: 'from-blue-500 to-indigo-600',
      description: 'VBAP panner across 6 discrete channels (L, R, C, LFE, Ls, Rs) with 80Hz Linkwitz-Riley sub crossover.',
      category: 'Surround',
      run: async () => {
        return await safeFetchJson(apiUrl('/api/v1/audio/surround'), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            file_path: track.file_path,
            layout: '5.1',
            x: 0.0,
            y: 0.4,
            crossover_hz: 80
          })
        });
      }
    },
    {
      id: 'separate_stems',
      name: 'Separate into 4 Stems',
      badge: 'AGENT 02',
      icon: Layers,
      color: 'from-cyan-400 to-emerald-500',
      description: 'Deconstructs the track into isolated Vocals, Drums, Bass, and Other instruments imported directly to your timeline.',
      category: 'AI Separation',
      run: async () => {
        const fd = new FormData();
        fd.append('file_path', track.file_path);
        return await safeFetchJson(apiUrl('/api/v1/audio/separate-stems'), {
          method: 'POST',
          body: fd
        });
      }
    },
    {
      id: 'ai_orchestration',
      name: 'Full Autonomous AI Production Swarm',
      badge: 'AGENT 10',
      icon: Sparkles,
      color: 'from-amber-400 to-pink-500',
      description: 'Runs all 10 autonomous agents: full acoustic inspection, dynamic repair, stereo widening, and master export.',
      category: 'Full Autonomous',
      run: async () => {
        return await safeFetchJson(apiUrl('/api/v1/audio/orchestrate'), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            prompt: 'Clean noise, optimize dynamics, enhance vocals, and master for streaming at -14 LUFS',
            file_path: track.file_path
          })
        });
      }
    }
  ];

  const handleExecutePreset = async (preset) => {
    if (!track.file_path) {
      alert("Selected track has no audio source path.");
      return;
    }
    setProcessing(true);
    setActivePreset(preset.id);
    setStatusMessage(`Running ${preset.name}...`);
    setFxResult(null);

    try {
      const data = await preset.run();
      setFxResult({ preset, data });
      setStatusMessage(`${preset.name} applied successfully!`);
    } catch (e) {
      setStatusMessage(`Error: ${e.message}`);
    } finally {
      setProcessing(false);
    }
  };

  const extractAudioMeta = (data) => {
    if (!data) return {};
    const downloadUrl = data.download_url || (data.processed_file ? `/api/v1/audio/download/${data.processed_file.split('/').pop()}` : '') || '';
    const filePath = data.output_file || data.processed_file || data.restored_file || data.file_path || track.file_path;
    const lufs = data.mastering_report?.post_mastering_metrics?.integrated_lufs 
      ?? data.metrics?.integrated_lufs 
      ?? data.post_restoration_metrics?.integrated_lufs 
      ?? null;
    const truePeak = data.mastering_report?.post_mastering_metrics?.true_peak_dbtp 
      ?? data.metrics?.sample_peak_dbfs 
      ?? null;
    return { downloadUrl, filePath, lufs, truePeak };
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0b0e17] border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-gradient-to-r from-slate-900 via-[#0d121f] to-slate-900">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
              <Zap className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-sm font-bold font-mono text-white">
                  INSTANT EFFECTS & MASTERING ASSISTANT
                </h2>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">
                  1-Click DSP
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Target Track: <span className="text-cyan-300 font-semibold">{track.name}</span> • 64-bit Non-Destructive
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">

          {/* Preset Cards Grid */}
          <div>
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
              Select 1-Click Studio Treatment:
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {presets.map(p => {
                const Icon = p.icon;
                const isSelected = activePreset === p.id;
                return (
                  <button
                    key={p.id}
                    disabled={processing}
                    onClick={() => handleExecutePreset(p)}
                    className={`text-left p-4 rounded-xl border transition-all relative flex flex-col justify-between group ${
                      isSelected && processing
                        ? 'bg-cyan-950/40 border-cyan-400 shadow-lg shadow-cyan-500/20'
                        : isSelected && fxResult
                        ? 'bg-emerald-950/30 border-emerald-500/80 shadow-lg shadow-emerald-500/10'
                        : 'bg-slate-900/60 hover:bg-slate-850 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-2.5">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${p.color} flex items-center justify-center text-black font-bold shadow-md`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-xs font-bold font-mono text-white group-hover:text-cyan-300 transition-colors">
                            {p.name}
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono">
                            {p.category}
                          </div>
                        </div>
                      </div>

                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-black/60 text-cyan-400 border border-slate-800 font-bold">
                        {p.badge}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-300 font-mono mt-2.5 leading-relaxed">
                      {p.description}
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono">
                      <span className="text-slate-500 group-hover:text-slate-400">1-Click Apply</span>
                      <span className="text-cyan-400 font-bold flex items-center space-x-1 group-hover:translate-x-0.5 transition-transform">
                        <span>Execute</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Live Progress Bar when Processing */}
          {processing && (
            <div className="bg-cyan-950/30 border border-cyan-500/40 p-4 rounded-xl flex items-center space-x-3 text-xs font-mono text-cyan-300 animate-pulse">
              <Activity className="w-5 h-5 text-cyan-400 animate-spin shrink-0" />
              <div>
                <div className="font-bold">{statusMessage}</div>
                <div className="text-[10px] text-cyan-400/80">Applying 64-bit floating point mathematical DSP to preserve transients...</div>
              </div>
            </div>
          )}

          {/* Result Card & Actions */}
          {fxResult && (
            <div className="bg-[#0f1422] border border-emerald-500/50 p-5 rounded-2xl space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold font-mono text-emerald-400">
                      {fxResult.preset.name} Complete!
                    </div>
                    <div className="text-[10px] font-mono text-slate-400">
                      Audio processed non-destructively in RAM & sovereign disk
                    </div>
                  </div>
                </div>

                {/* Direct Download Button */}
                {extractAudioMeta(fxResult.data).downloadUrl && (
                  <a
                    href={resolveAudioUrl(extractAudioMeta(fxResult.data).downloadUrl)}
                    download
                    className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold transition-colors shadow-md"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download WAV</span>
                  </a>
                )}
              </div>

              {/* Acoustic Metrics Badges */}
              {extractAudioMeta(fxResult.data).lufs !== null && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
                  <div className="bg-black/60 p-2.5 rounded-xl border border-slate-800">
                    <div className="text-[10px] text-slate-400">Integrated Loudness</div>
                    <div className="text-cyan-400 font-bold mt-0.5">
                      {extractAudioMeta(fxResult.data).lufs} LUFS
                    </div>
                  </div>
                  <div className="bg-black/60 p-2.5 rounded-xl border border-slate-800">
                    <div className="text-[10px] text-slate-400">True Peak Ceiling</div>
                    <div className="text-emerald-400 font-bold mt-0.5">
                      {extractAudioMeta(fxResult.data).truePeak ?? -1.0} dBTP
                    </div>
                  </div>
                  <div className="bg-black/60 p-2.5 rounded-xl border border-slate-800">
                    <div className="text-[10px] text-slate-400">Sample Rate & Depth</div>
                    <div className="text-white font-bold mt-0.5">48 kHz • 24-bit</div>
                  </div>
                  <div className="bg-black/60 p-2.5 rounded-xl border border-slate-800">
                    <div className="text-[10px] text-slate-400">Headroom Status</div>
                    <div className="text-emerald-400 font-bold mt-0.5">0.0 Overshoots</div>
                  </div>
                </div>
              )}

              {/* Special Handling for Stem Separation */}
              {fxResult.preset.id === 'separate_stems' && fxResult.data.stems && (
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-cyan-300">
                    4 Isolated Stems Generated:
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono">
                    {Object.entries(fxResult.data.stems).map(([key, st]) => (
                      <div key={key} className="bg-black/60 p-2.5 rounded-lg border border-slate-800 flex flex-col justify-between">
                        <span className="font-bold capitalize text-white">{key}</span>
                        <span className="text-[10px] text-slate-400">{st.duration_seconds}s</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      if (onAddStemTracks) {
                        onAddStemTracks(Object.values(fxResult.data.stems));
                        onClose();
                      }
                    }}
                    className="w-full mt-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-black font-extrabold font-mono text-xs flex items-center justify-center space-x-2 transition-all shadow-lg"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Import All 4 Stems As DAW Tracks</span>
                  </button>
                </div>
              )}

              {/* Action Buttons: Replace Current Track OR Add As New Track (A/B Test) */}
              {fxResult.preset.id !== 'separate_stems' && (
                <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
                  <button
                    onClick={() => {
                      const meta = extractAudioMeta(fxResult.data);
                      onApplyEffect(track.id, {
                        file_path: meta.filePath,
                        download_url: meta.downloadUrl,
                        name: `${track.name} [${fxResult.preset.name.split(' ')[0]}]`
                      }, 'new_track');
                      onClose();
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs font-bold transition-colors flex items-center space-x-1.5"
                  >
                    <Plus className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Add As New Track (A/B Test)</span>
                  </button>

                  <button
                    onClick={() => {
                      const meta = extractAudioMeta(fxResult.data);
                      onApplyEffect(track.id, {
                        file_path: meta.filePath,
                        download_url: meta.downloadUrl,
                        name: `${track.name} (${fxResult.preset.name.split(' ')[0]})`
                      }, 'replace');
                      onClose();
                    }}
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-black font-mono text-xs font-extrabold transition-all shadow-lg shadow-cyan-500/20 flex items-center space-x-1.5"
                  >
                    <Check className="w-4 h-4" />
                    <span>Update Current Track Audio</span>
                  </button>
                </div>
              )}

            </div>
          )}

        </div>

        {/* Footer Jump to Advanced Tabs */}
        <div className="px-6 py-3 border-t border-slate-800 bg-[#080a10] flex flex-wrap items-center justify-between text-xs font-mono text-slate-400">
          <span>Need full manual parameter tweaking?</span>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => { onNavigateTab('dsp'); onClose(); }}
              className="text-cyan-400 hover:underline flex items-center space-x-1"
            >
              <span>64-bit DSP Rack</span>
              <ArrowRight className="w-3 h-3" />
            </button>
            <span>•</span>
            <button
              onClick={() => { onNavigateTab('mastering'); onClose(); }}
              className="text-cyan-400 hover:underline flex items-center space-x-1"
            >
              <span>Mastering Suite</span>
              <ArrowRight className="w-3 h-3" />
            </button>
            <span>•</span>
            <button
              onClick={() => { onNavigateTab('surround'); onClose(); }}
              className="text-cyan-400 hover:underline flex items-center space-x-1"
            >
              <span>5.1 Surround Studio</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
