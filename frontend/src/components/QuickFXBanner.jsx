import React, { useState } from 'react';
import { 
  Zap, 
  Volume2, 
  Mic, 
  ShieldCheck, 
  Layers, 
  Flame, 
  X, 
  Sparkles, 
  Check, 
  Loader2 
} from 'lucide-react';
import { apiUrl, safeFetchJson } from '../config/api';

export default function QuickFXBanner({
  track,
  onOpenQuickFX,
  onApplyEffect,
  onAddStemTracks,
  onDismiss
}) {
  if (!track) return null;

  const [busyPreset, setBusyPreset] = useState(null);

  const handleQuickAction = async (actionType) => {
    if (!track.file_path) return;
    setBusyPreset(actionType);

    try {
      if (actionType === 'master') {
        const data = await safeFetchJson(apiUrl('/api/v1/audio/master'), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            file_path: track.file_path,
            profile: 'streaming',
            custom_target_lufs: -14.0,
            custom_ceiling_dbtp: -1.0
          })
        });
        const dl = data.download_url || '';
        onApplyEffect(track.id, {
          file_path: data.output_file || track.file_path,
          download_url: dl,
          name: `${track.name} (Mastered -14 LUFS)`
        }, 'replace');
      } 
      else if (actionType === 'vocal') {
        const fd = new FormData();
        fd.append('file_path', track.file_path);
        fd.append('target_scale', 'A Minor');
        fd.append('de_ess_db', '4.5');
        const data = await safeFetchJson(apiUrl('/api/v1/audio/vocal-process'), {
          method: 'POST',
          body: fd
        });
        const dl = data.download_url || '';
        onApplyEffect(track.id, {
          file_path: data.processed_file || track.file_path,
          download_url: dl,
          name: `${track.name} (Vocal Polished)`
        }, 'replace');
      }
      else if (actionType === 'denoise') {
        const fd = new FormData();
        fd.append('file_path', track.file_path);
        fd.append('denoise', 'true');
        fd.append('dehum_freq', '50.0');
        fd.append('declip', 'true');
        const data = await safeFetchJson(apiUrl('/api/v1/audio/restore'), {
          method: 'POST',
          body: fd
        });
        const dl = data.download_url || '';
        onApplyEffect(track.id, {
          file_path: data.restored_file || track.file_path,
          download_url: dl,
          name: `${track.name} (Restored & Clean)`
        }, 'replace');
      }
      else if (actionType === 'stems') {
        const fd = new FormData();
        fd.append('file_path', track.file_path);
        const data = await safeFetchJson(apiUrl('/api/v1/audio/separate-stems'), {
          method: 'POST',
          body: fd
        });
        if (data.stems && onAddStemTracks) {
          onAddStemTracks(Object.values(data.stems));
        }
      }
    } catch (e) {
      alert(`Action error: ${e.message}`);
    } finally {
      setBusyPreset(null);
    }
  };

  return (
    <div className="mx-4 mb-2 p-3 bg-gradient-to-r from-[#0d1527] via-[#091e2b] to-[#0d1527] border border-cyan-500/40 rounded-xl shadow-lg flex flex-wrap items-center justify-between gap-3 text-xs font-mono animate-in slide-in-from-top-2 duration-300">
      
      {/* Track info tag */}
      <div className="flex items-center space-x-2.5">
        <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/40">
          <Zap className="w-4 h-4 text-cyan-300 animate-pulse" />
        </div>
        <div>
          <div className="flex items-center space-x-1.5">
            <span className="text-white font-bold truncate max-w-xs">{track.name}</span>
            <span className="text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.2 rounded border border-cyan-800">
              Active File
            </span>
          </div>
          <p className="text-[10px] text-slate-400">
            Apply 1-click sovereign DSP effect or AI mastering:
          </p>
        </div>
      </div>

      {/* 1-Click Action Buttons */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          disabled={!!busyPreset}
          onClick={() => handleQuickAction('master')}
          className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-cyan-600/30 hover:bg-cyan-600/50 text-cyan-200 border border-cyan-500/50 transition-all font-bold disabled:opacity-50"
        >
          {busyPreset === 'master' ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Volume2 className="w-3.5 h-3.5 text-cyan-400" />}
          <span>1-Click Master (-14 LUFS)</span>
        </button>

        <button
          disabled={!!busyPreset}
          onClick={() => handleQuickAction('vocal')}
          className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-pink-600/20 hover:bg-pink-600/40 text-pink-200 border border-pink-500/40 transition-all font-bold disabled:opacity-50"
        >
          {busyPreset === 'vocal' ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Mic className="w-3.5 h-3.5 text-pink-400" />}
          <span>Vocal Polish</span>
        </button>

        <button
          disabled={!!busyPreset}
          onClick={() => handleQuickAction('denoise')}
          className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-200 border border-emerald-500/40 transition-all font-bold disabled:opacity-50"
        >
          {busyPreset === 'denoise' ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />}
          <span>AI De-Noise</span>
        </button>

        <button
          disabled={!!busyPreset}
          onClick={() => handleQuickAction('stems')}
          className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-violet-600/20 hover:bg-violet-600/40 text-violet-200 border border-violet-500/40 transition-all font-bold disabled:opacity-50"
        >
          {busyPreset === 'stems' ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Layers className="w-3.5 h-3.5 text-violet-400" />}
          <span>Split 4 Stems</span>
        </button>

        <button
          onClick={onOpenQuickFX}
          className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-extrabold transition-all shadow-md shadow-cyan-500/20"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>More Effects...</span>
        </button>

        {onDismiss && (
          <button
            onClick={onDismiss}
            className="p-1 rounded text-slate-500 hover:text-slate-300 ml-1 transition-colors"
            title="Dismiss Banner"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

    </div>
  );
}
