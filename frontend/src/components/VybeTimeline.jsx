import React, { useRef, useState } from 'react';
import { 
  Scissors, 
  Trash2, 
  Layers, 
  Film, 
  Volume2, 
  VolumeX, 
  Eye, 
  EyeOff, 
  ZoomIn, 
  ZoomOut, 
  Magnet, 
  Plus, 
  Music,
  Share2,
  ExternalLink
} from 'lucide-react';

export default function VybeTimeline({
  duration = 30.0,
  currentTime = 0.0,
  onSeek,
  videoClips = [],
  audioClips = [],
  overlayClips = [],
  onSplitClip,
  onDeleteClip,
  onAddClip,
  onSendToSoniq
}) {
  const [zoom, setZoom] = useState(25); // Pixels per second
  const [snapping, setSnapping] = useState(true);
  const [selectedClipId, setSelectedClipId] = useState(null);
  const timelineRef = useRef(null);

  const timelineWidth = Math.max(800, duration * zoom);

  const handleTimelineClick = (e) => {
    if (!timelineRef.current) return;
    const rect = timelineRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left + timelineRef.current.scrollLeft;
    let newTime = clickX / zoom;
    if (snapping) {
      // Snap to nearest 0.5s or clip edges
      newTime = Math.round(newTime * 2) / 2;
    }
    newTime = Math.max(0, Math.min(duration, newTime));
    onSeek && onSeek(newTime);
  };

  const formatRulerTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-[#0b0e17] border border-slate-800 rounded-xl p-3 flex flex-col shadow-2xl overflow-hidden select-none">
      {/* Timeline Control Toolbar */}
      <div className="flex flex-wrap items-center justify-between pb-2 mb-2 border-b border-slate-800/80 gap-2">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1 bg-slate-900 border border-slate-800 rounded-lg p-1">
            <button
              onClick={() => onSplitClip && onSplitClip(currentTime)}
              title="Razor Cut: Split clip at playhead"
              className="px-2.5 py-1 rounded bg-slate-800 hover:bg-cyan-500 hover:text-black text-slate-300 font-mono text-xs flex items-center space-x-1.5 transition"
            >
              <Scissors className="w-3.5 h-3.5" />
              <span>SPLIT (C)</span>
            </button>
            <button
              onClick={() => {
                if (selectedClipId && onDeleteClip) onDeleteClip(selectedClipId);
              }}
              disabled={!selectedClipId}
              title="Delete Selected Clip"
              className="px-2 py-1 rounded hover:bg-red-900/60 text-slate-400 hover:text-red-300 disabled:opacity-30 disabled:cursor-not-allowed font-mono text-xs transition"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={() => setSnapping(!snapping)}
            title="Toggle Magnetic Snapping"
            className={`px-2.5 py-1 rounded-lg border text-xs font-mono flex items-center space-x-1 transition ${
              snapping 
                ? 'bg-cyan-950/60 border-cyan-500/60 text-cyan-300 shadow-sm shadow-cyan-500/20' 
                : 'bg-slate-900 border-slate-800 text-slate-400'
            }`}
          >
            <Magnet className="w-3.5 h-3.5" />
            <span>SNAP</span>
          </button>
        </div>

        {/* Zoom & Audio Bridge Actions */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5 bg-slate-900 px-2 py-1 rounded-lg border border-slate-800">
            <ZoomOut className="w-3 h-3 text-slate-400" />
            <input
              type="range"
              min="10"
              max="60"
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="w-16 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <ZoomIn className="w-3 h-3 text-slate-400" />
          </div>

          <button
            onClick={onSendToSoniq}
            title="Transfer multitrack timeline audio to SONIQ DAW for studio mastering & 3D cinema processing"
            className="px-3 py-1 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-mono text-xs font-bold flex items-center space-x-1.5 shadow-md shadow-violet-600/20 transition"
          >
            <Music className="w-3.5 h-3.5" />
            <span>BRIDGE TO SONIQ DAW</span>
            <ExternalLink className="w-3 h-3 opacity-75" />
          </button>
        </div>
      </div>

      {/* Main Multitrack Canvas Layout */}
      <div className="flex w-full overflow-hidden border border-slate-800/80 rounded-lg bg-[#07090e]">
        {/* Track Headers (Left sidebar) */}
        <div className="w-44 flex-shrink-0 border-r border-slate-800 bg-[#090c14] z-10 flex flex-col select-none">
          {/* Header spacer for Ruler */}
          <div className="h-7 border-b border-slate-800 flex items-center px-2 text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold">
            TRACKS
          </div>

          {/* V2 Overlay Header */}
          <div className="h-14 border-b border-slate-800/80 px-2 flex items-center justify-between text-xs">
            <div className="flex items-center space-x-1.5">
              <span className="w-1.5 h-6 rounded-full bg-violet-400" />
              <div>
                <div className="font-mono font-bold text-slate-200 text-[11px]">V2: OVERLAYS</div>
                <div className="text-[9px] text-slate-500">Titles & Stings</div>
              </div>
            </div>
            <Eye className="w-3.5 h-3.5 text-slate-500 hover:text-slate-300 cursor-pointer" />
          </div>

          {/* V1 Video Header */}
          <div className="h-16 border-b border-slate-800/80 px-2 flex items-center justify-between text-xs">
            <div className="flex items-center space-x-1.5">
              <span className="w-1.5 h-8 rounded-full bg-cyan-400" />
              <div>
                <div className="font-mono font-bold text-slate-200 text-[11px]">V1: VIDEO MAIN</div>
                <div className="text-[9px] text-cyan-400/80">Primary Visuals</div>
              </div>
            </div>
            <Eye className="w-3.5 h-3.5 text-cyan-400 cursor-pointer" />
          </div>

          {/* A1 Dialogue Header */}
          <div className="h-14 border-b border-slate-800/80 px-2 flex items-center justify-between text-xs">
            <div className="flex items-center space-x-1.5">
              <span className="w-1.5 h-6 rounded-full bg-emerald-400" />
              <div>
                <div className="font-mono font-bold text-slate-200 text-[11px]">A1: DIALOGUE</div>
                <div className="text-[9px] text-emerald-400/80">Source Audio</div>
              </div>
            </div>
            <Volume2 className="w-3.5 h-3.5 text-emerald-400 cursor-pointer" />
          </div>

          {/* A2 Music Bed Header */}
          <div className="h-14 px-2 flex items-center justify-between text-xs">
            <div className="flex items-center space-x-1.5">
              <span className="w-1.5 h-6 rounded-full bg-amber-400" />
              <div>
                <div className="font-mono font-bold text-slate-200 text-[11px]">A2: MUSIC & FX</div>
                <div className="text-[9px] text-amber-400/80">BGM / Brand Ident</div>
              </div>
            </div>
            <Volume2 className="w-3.5 h-3.5 text-amber-400 cursor-pointer" />
          </div>
        </div>

        {/* Timeline Tracks Lane & Scrub Area */}
        <div 
          ref={timelineRef}
          onClick={handleTimelineClick}
          className="flex-1 overflow-x-auto relative cursor-pointer min-h-[260px] bg-[#07090e]"
        >
          {/* Internal Scalable Grid Canvas */}
          <div style={{ width: `${timelineWidth}px` }} className="relative h-full flex flex-col">
            
            {/* 1. Timecode Ruler */}
            <div className="h-7 border-b border-slate-800 bg-[#0c101a] relative flex items-center">
              {Array.from({ length: Math.ceil(duration) + 1 }).map((_, i) => (
                <div
                  key={i}
                  style={{ left: `${i * zoom}px` }}
                  className="absolute top-0 bottom-0 border-l border-slate-800/60 pl-1 text-[9px] font-mono text-slate-500"
                >
                  {i % 2 === 0 ? formatRulerTime(i) : ''}
                </div>
              ))}
            </div>

            {/* 2. Red Playhead Indicator */}
            <div 
              style={{ left: `${currentTime * zoom}px` }}
              className="absolute top-0 bottom-0 z-30 pointer-events-none transition-all duration-75 flex flex-col items-center"
            >
              <div className="w-3 h-3 bg-red-500 rotate-45 -mt-1 shadow-md shadow-red-500/50" />
              <div className="w-0.5 flex-1 bg-red-500 shadow-sm shadow-red-500" />
            </div>

            {/* Track 1: V2 Overlays */}
            <div className="h-14 border-b border-slate-800/60 relative bg-slate-950/40">
              {overlayClips.map((c) => (
                <div
                  key={c.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedClipId(c.id);
                  }}
                  style={{
                    left: `${c.start_time * zoom}px`,
                    width: `${Math.max(40, c.duration * zoom)}px`
                  }}
                  className={`absolute top-1 bottom-1 rounded-md px-2 flex items-center justify-between border cursor-pointer transition ${
                    selectedClipId === c.id 
                      ? 'bg-violet-900/80 border-violet-400 ring-1 ring-violet-400' 
                      : 'bg-violet-950/60 border-violet-700/60 hover:border-violet-400'
                  }`}
                >
                  <span className="font-mono text-[10px] text-violet-200 truncate font-bold">
                    {c.title || 'Title Overlay'}
                  </span>
                </div>
              ))}
            </div>

            {/* Track 2: V1 Video Clips */}
            <div className="h-16 border-b border-slate-800/60 relative bg-slate-950/50">
              {videoClips.map((c) => (
                <div
                  key={c.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedClipId(c.id);
                  }}
                  style={{
                    left: `${c.start_time * zoom}px`,
                    width: `${Math.max(60, c.duration * zoom)}px`
                  }}
                  className={`absolute top-1 bottom-1 rounded-md overflow-hidden border cursor-pointer transition flex flex-col justify-between p-1 ${
                    selectedClipId === c.id 
                      ? 'bg-cyan-950/90 border-cyan-400 ring-2 ring-cyan-400/60 shadow-lg shadow-cyan-500/20' 
                      : 'bg-slate-900/90 border-cyan-700/60 hover:border-cyan-400'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold text-cyan-200">
                    <span className="truncate">{c.name || 'Video Clip'}</span>
                    <span className="opacity-75">{c.duration.toFixed(1)}s</span>
                  </div>
                  {/* Subtle filmstrip bars */}
                  <div className="w-full h-2 rounded bg-cyan-900/40 flex space-x-1 p-0.5 overflow-hidden">
                    <div className="flex-1 bg-cyan-400/40 rounded-sm" />
                    <div className="flex-1 bg-cyan-400/40 rounded-sm" />
                    <div className="flex-1 bg-cyan-400/40 rounded-sm" />
                  </div>
                </div>
              ))}
            </div>

            {/* Track 3: A1 Dialogue */}
            <div className="h-14 border-b border-slate-800/60 relative bg-slate-950/40">
              {audioClips.map((c) => (
                <div
                  key={c.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedClipId(c.id);
                  }}
                  style={{
                    left: `${c.start_time * zoom}px`,
                    width: `${Math.max(50, c.duration * zoom)}px`
                  }}
                  className={`absolute top-1 bottom-1 rounded-md px-2 flex items-center justify-between border cursor-pointer transition ${
                    selectedClipId === c.id 
                      ? 'bg-emerald-950/90 border-emerald-400 ring-1 ring-emerald-400' 
                      : 'bg-emerald-950/50 border-emerald-700/60 hover:border-emerald-400'
                  }`}
                >
                  <span className="font-mono text-[10px] text-emerald-200 truncate font-bold">
                    {c.name || 'Dialogue Stem'}
                  </span>
                  <span className="text-[9px] font-mono text-emerald-400">{c.duration.toFixed(1)}s</span>
                </div>
              ))}
            </div>

            {/* Track 4: A2 Music & FX */}
            <div className="h-14 relative bg-slate-950/40">
              <div 
                style={{ left: '0px', width: `${Math.min(timelineWidth, 18 * zoom)}px` }}
                className="absolute top-1 bottom-1 rounded-md px-2 flex items-center justify-between border bg-amber-950/40 border-amber-700/50"
              >
                <span className="font-mono text-[10px] text-amber-200 truncate font-bold">
                  BGM: RYDETECH Sonic Ident & Bass Bed
                </span>
                <span className="text-[9px] font-mono text-amber-400">124 BPM</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
