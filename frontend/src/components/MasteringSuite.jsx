import React, { useState } from 'react';
import { apiUrl, safeFetchJson, resolveAudioUrl } from '../config/api';
import { Volume2, Sparkles, ShieldCheck, Download, CheckCircle2 } from 'lucide-react';

export default function MasteringSuite({
  activeFile,
  tracks = []
}) {
  const [profile, setProfile] = useState('streaming');
  const [customLufs, setCustomLufs] = useState(-14.0);
  const [customCeiling, setCustomCeiling] = useState(-1.0);
  const [mastering, setMastering] = useState(false);
  const [masterResult, setMasterResult] = useState(null);

  const profiles = [
    { id: 'streaming', name: 'Streaming (Spotify, Apple, Tidal)', lufs: -14.0, ceiling: -1.0, color: 'text-cyan-400' },
    { id: 'cd', name: 'Commercial CD / Club Loudness', lufs: -9.0, ceiling: -0.1, color: 'text-violet-400' },
    { id: 'broadcast', name: 'Broadcast TV/Radio (EBU R128)', lufs: -23.0, ceiling: -1.0, color: 'text-emerald-400' },
    { id: 'cinema', name: 'Cinema / Theatrical Standard', lufs: -27.0, ceiling: -2.0, color: 'text-amber-400' },
    { id: 'audiophile', name: 'Audiophile Hi-Res / Classical', lufs: -16.0, ceiling: -1.0, color: 'text-pink-400' }
  ];

  const handleExecuteMaster = async () => {
    const fileToUse = activeFile?.file_path || (tracks[0] ? tracks[0].file_path : null);
    if (!fileToUse) {
      alert("Please import an audio file or record a track first.");
      return;
    }

    setMastering(true);
    try {
      const data = await safeFetchJson(apiUrl('/api/v1/audio/master'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          file_path: fileToUse,
          profile,
          custom_target_lufs: customLufs,
          custom_ceiling_dbtp: customCeiling
        })
      });
      setMasterResult(data);
    } catch (e) {
      alert(`Mastering error: ${e.message}`);
    } finally {
      setMastering(false);
    }
  };

  return (
    <div className="flex-1 p-6 space-y-6 overflow-y-auto max-w-[1700px] mx-auto">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div>
          <h1 className="text-base font-bold text-white font-mono flex items-center space-x-2">
            <Volume2 className="w-5 h-5 text-cyan-400" />
            <span>STATUTORY MASTERING SUITE (EBU R128 / ITU-R BS.1770-4)</span>
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            Target loudness normalisation, multiband dynamic control, tape saturation, and zero-overshoot true-peak brickwall limiting.
          </p>
        </div>

        <button
          onClick={handleExecuteMaster}
          disabled={mastering}
          className="px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-black font-extrabold text-xs shadow-lg shadow-cyan-500/20 disabled:opacity-50 transition-all font-mono"
        >
          {mastering ? 'Mastering in Progress...' : 'Execute Full Mastering Chain'}
        </button>
      </div>

      {/* Target Profiles Selection */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {profiles.map((p) => {
          const isSelected = profile === p.id;
          return (
            <div
              key={p.id}
              onClick={() => {
                setProfile(p.id);
                setCustomLufs(p.lufs);
                setCustomCeiling(p.ceiling);
              }}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                isSelected
                  ? 'bg-slate-900 border-cyan-400 shadow-md shadow-cyan-500/10'
                  : 'bg-[#0c101a] border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className={`font-mono text-xs font-bold ${p.color}`}>{p.name}</div>
              <div className="mt-2 space-y-1 font-mono text-[11px]">
                <div className="text-white font-semibold">Target: {p.lufs} LUFS</div>
                <div className="text-slate-400">Ceiling: {p.ceiling} dBTP</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Precision Sliders */}
      <div className="bg-[#0b0e17] p-5 rounded-2xl border border-slate-800 space-y-4">
        <h3 className="font-mono text-xs font-bold text-cyan-300 uppercase">
          Mastering Target Parameters
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
              <span>Integrated Loudness Target (LUFS)</span>
              <span className="text-white font-bold">{customLufs} LUFS</span>
            </div>
            <input
              type="range"
              min="-30.0"
              max="-6.0"
              step="0.5"
              value={customLufs}
              onChange={(e) => setCustomLufs(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
              <span>True-Peak Limiter Ceiling (dBTP)</span>
              <span className="text-white font-bold">{customCeiling} dBTP</span>
            </div>
            <input
              type="range"
              min="-3.0"
              max="0.0"
              step="0.1"
              value={customCeiling}
              onChange={(e) => setCustomCeiling(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Before vs After Mastering Audit Report */}
      {masterResult && (
        <div className="bg-[#0b0e17] p-5 rounded-2xl border border-cyan-500/40 space-y-4 shadow-2xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span className="font-mono text-xs font-bold text-white">
                Mastering Audit Report ({masterResult.mastering_report?.profile_used})
              </span>
            </div>
            <a
              href={resolveAudioUrl(masterResult.download_url)}
              download
              className="flex items-center space-x-1.5 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Mastered WAV</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400">Integrated Loudness</div>
              <div className="text-sm font-bold text-white mt-1">
                {masterResult.mastering_report?.pre_mastering_metrics?.integrated_lufs} →{' '}
                <span className="text-cyan-400">
                  {masterResult.mastering_report?.post_mastering_metrics?.integrated_lufs} LUFS
                </span>
              </div>
            </div>

            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400">True Peak</div>
              <div className="text-sm font-bold text-white mt-1">
                {masterResult.mastering_report?.pre_mastering_metrics?.true_peak_dbtp} →{' '}
                <span className="text-emerald-400">
                  {masterResult.mastering_report?.post_mastering_metrics?.true_peak_dbtp} dBTP
                </span>
              </div>
            </div>

            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400">Loudness Range (LRA)</div>
              <div className="text-sm font-bold text-violet-400 mt-1">
                {masterResult.mastering_report?.post_mastering_metrics?.loudness_range_lra} LU
              </div>
            </div>

            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400">Applied Gain Adjustment</div>
              <div className="text-sm font-bold text-amber-400 mt-1">
                {masterResult.mastering_report?.applied_gain_db} dB
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
