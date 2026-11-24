import React, { useState } from 'react';
import { 
  Upload, 
  Film, 
  Music, 
  Image as ImageIcon, 
  Plus, 
  Trash2, 
  Eye, 
  CheckCircle2, 
  Clock, 
  Layers,
  Wand2,
  Sparkles
} from 'lucide-react';
import { apiUrl, safeFetchJson, resolveAudioUrl } from '../config/api';

export default function VybeAssetBin({
  assets = [],
  onUploadSuccess,
  onAddToTimeline,
  onSelectForPreview,
  onOpenUplift
}) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [filterType, setFilterType] = useState('all');

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setUploadError('');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('project_id', 'proj_vybe_demo');

    try {
      const res = await fetch(apiUrl('/api/v1/media/upload'), {
        method: 'POST',
        body: formData
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || 'Upload failed');
      }
      const data = await res.json();
      if (onUploadSuccess) onUploadSuccess(data);
      // Automatically trigger HITL Uplift if uploaded asset is a video
      if (data.media_type === 'video' && onOpenUplift) {
        onOpenUplift(data);
      }
    } catch (err) {
      console.error('Upload failed:', err);
      setUploadError(err.message || 'File upload failed');
    } finally {
      setIsUploading(false);
    }
  };

  const filtered = assets.filter(a => {
    if (filterType === 'video') return a.media_type === 'video';
    if (filterType === 'audio') return a.media_type === 'audio';
    return true;
  });

  return (
    <div className="flex flex-col h-full space-y-3">
      {/* Upload Zone & Filter Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800">
        <label className={`px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-black font-mono text-xs font-bold flex items-center space-x-1.5 cursor-pointer shadow-md shadow-cyan-500/20 transition ${
          isUploading ? 'opacity-50 cursor-not-allowed' : ''
        }`}>
          <Upload className="w-3.5 h-3.5" />
          <span>{isUploading ? 'INGESTING & PROBING...' : 'IMPORT MEDIA'}</span>
          <input
            type="file"
            className="hidden"
            accept="video/*,audio/*,image/*"
            disabled={isUploading}
            onChange={handleFileUpload}
          />
        </label>

        {/* Filter buttons */}
        <div className="flex items-center space-x-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-xs">
          <button
            onClick={() => setFilterType('all')}
            className={`px-2 py-0.5 rounded font-mono ${filterType === 'all' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400'}`}
          >
            ALL
          </button>
          <button
            onClick={() => setFilterType('video')}
            className={`px-2 py-0.5 rounded font-mono ${filterType === 'video' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400'}`}
          >
            VIDEO
          </button>
          <button
            onClick={() => setFilterType('audio')}
            className={`px-2 py-0.5 rounded font-mono ${filterType === 'audio' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400'}`}
          >
            AUDIO
          </button>
        </div>
      </div>

      {uploadError && (
        <div className="p-2 rounded bg-red-950/60 border border-red-700/80 text-red-300 text-xs">
          {uploadError}
        </div>
      )}

      {/* Asset Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 overflow-y-auto max-h-[360px] pr-1">
        {filtered.map((a) => (
          <div
            key={a.id}
            className="bg-slate-900/90 border border-slate-800 hover:border-cyan-500/60 rounded-xl p-2.5 flex flex-col justify-between space-y-2 transition shadow-lg group"
          >
            <div className="flex items-start justify-between space-x-2">
              <div className="flex items-center space-x-2 truncate">
                <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 text-cyan-400">
                  {a.media_type === 'video' ? <Film className="w-4 h-4" /> : <Music className="w-4 h-4" />}
                </div>
                <div className="truncate">
                  <div className="text-xs font-bold text-slate-200 truncate">{a.file_name}</div>
                  <div className="text-[10px] font-mono text-slate-400 flex items-center space-x-1.5">
                    <span>{a.duration_seconds ? `${a.duration_seconds.toFixed(1)}s` : 'N/A'}</span>
                    {a.width && <span>• {a.width}x{a.height}</span>}
                    {a.video_codec && <span className="uppercase text-cyan-400">• {a.video_codec}</span>}
                  </div>
                </div>
              </div>
            </div>

            {/* Badges & Telemetry */}
            <div className="flex flex-wrap items-center gap-1">
              {a.has_proxy === 1 && (
                <span className="px-1.5 py-0.2 bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 font-mono text-[9px] rounded flex items-center space-x-0.5">
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  <span>540p Proxy</span>
                </span>
              )}
              {a.audio_codec && (
                <span className="px-1.5 py-0.2 bg-slate-800 border border-slate-700 text-slate-300 font-mono text-[9px] rounded">
                  Audio: {a.audio_codec.toUpperCase()}
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-1.5 pt-1 border-t border-slate-800/80">
              {a.media_type === 'video' && (
                <button
                  onClick={() => onOpenUplift && onOpenUplift(a)}
                  title="Autonomous Video Uplift & AI Edit (HITL)"
                  className="px-2 py-1 rounded bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-[10px] font-mono font-bold flex items-center space-x-1 shadow transition"
                >
                  <Wand2 className="w-3 h-3" />
                  <span>UPLIFT</span>
                </button>
              )}
              <button
                onClick={() => onSelectForPreview && onSelectForPreview(a)}
                title="Preview in Program Monitor"
                className="flex-1 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono flex items-center justify-center space-x-1 transition"
              >
                <Eye className="w-3 h-3" />
                <span>PREVIEW</span>
              </button>
              <button
                onClick={() => onAddToTimeline && onAddToTimeline(a)}
                title="Insert clip into Multitrack Timeline"
                className="px-2.5 py-1 rounded bg-cyan-950 border border-cyan-700 hover:bg-cyan-500 hover:text-black text-cyan-300 text-xs font-mono flex items-center justify-center space-x-1 transition font-bold"
              >
                <Plus className="w-3 h-3" />
                <span>TIMELINE</span>
              </button>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="col-span-full py-8 text-center text-slate-500 font-mono text-xs">
            No media assets found. Import a file or load the demo showreel.
          </div>
        )}
      </div>
    </div>
  );
}
