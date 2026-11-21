import React, { useRef, useState } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Headphones, 
  Circle, 
  Plus, 
  UploadCloud, 
  Scissors, 
  Music,
  Sliders,
  Play,
  Zap,
  Trash2,
  Mic,
  Sparkles,
  FileAudio
} from 'lucide-react';
import { audioEngine } from '../audio/WebAudioEngine';

export default function DAWTimeline({
  tracks = [],
  onUpdateTrack,
  onAddTrack,
  onUploadFile,
  onInsertSoundLogo,
  onClearSession,
  onLoadDemo,
  loadingDemo = false,
  onNavigateTab,
  activeTrackId,
  setActiveTrackId,
  onOpenQuickFX
}) {
  const [zoomLevel, setZoomLevel] = useState(1.0);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      onUploadFile(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDraggingOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      for (let i = 0; i < e.dataTransfer.files.length; i++) {
        const file = e.dataTransfer.files[i];
        if (file.type.startsWith('audio/') || /\.(wav|flac|mp3|aiff|ogg|opus|m4a)$/i.test(file.name)) {
          onUploadFile(file);
        }
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDraggingOver(false);
  };

  return (
    <div 
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`flex-1 flex flex-col bg-[#080a10] border rounded-xl overflow-hidden m-4 shadow-2xl transition-colors duration-200 ${
        isDraggingOver ? 'border-cyan-400 bg-[#09111c]' : 'border-slate-800/80'
      }`}
    >
      
      {/* DAW Toolbar */}
      <div className="bg-[#0f131d] px-4 py-2 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center space-x-2">
          <span className="font-mono font-bold text-slate-300 uppercase tracking-wider text-[11px]">
            Multitrack Session ({tracks.length} Tracks)
          </span>
          <span className="text-[10px] text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800 font-mono">
            Non-Destructive 64-bit
          </span>
        </div>

        <div className="flex items-center space-x-2">
          {tracks.length > 0 && onOpenQuickFX && (
            <button
              onClick={() => {
                const sel = tracks.find(t => t.id === activeTrackId) || tracks[0];
                if (sel) onOpenQuickFX(sel);
              }}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-600/20 hover:from-cyan-500/30 hover:to-blue-600/30 text-cyan-300 border border-cyan-500/40 transition-colors font-bold cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>1-Click Quick FX</span>
            </button>
          )}

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            className="hidden"
            accept=".wav,.flac,.mp3,.aiff,.ogg,.opus,.m4a"
            multiple
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
          >
            <UploadCloud className="w-3.5 h-3.5 text-cyan-400" />
            <span>Import Audio File</span>
          </button>

          <button
            onClick={onAddTrack}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-cyan-600/30 text-cyan-300 border border-cyan-500/50 hover:bg-cyan-600/40 transition-colors cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Audio Track</span>
          </button>

          {onInsertSoundLogo && (
            <button
              onClick={onInsertSoundLogo}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-cyan-950/60 text-cyan-300 border border-cyan-800/60 hover:border-cyan-500/60 transition-colors cursor-pointer font-mono text-[11px]"
              title="Insert official RYDETECH Sonic Ident directly into DAW timeline"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Insert Sound Logo</span>
            </button>
          )}

          {tracks.length > 0 && onClearSession && (
            <button
              onClick={() => {
                if (window.confirm("Clear current session and remove all tracks?")) {
                  onClearSession();
                }
              }}
              className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg bg-rose-950/40 text-rose-300 border border-rose-800/60 hover:bg-rose-900/50 transition-colors cursor-pointer"
              title="Clear DAW Session"
            >
              <Trash2 className="w-3.5 h-3.5 text-rose-400" />
              <span>Clear Session</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Timeline Grid */}
      <div className="flex-1 overflow-y-auto">
        {tracks.length === 0 ? (
          <div className="min-h-[440px] flex flex-col items-center justify-center text-center p-8 m-6 rounded-2xl border-2 border-dashed border-slate-800 bg-[#0a0d15]/60">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-slate-850 to-violet-500/10 border border-slate-700/80 flex items-center justify-center mb-4 shadow-inner">
              <FileAudio className="w-8 h-8 text-cyan-400" />
            </div>

            <h3 className="text-lg font-bold text-slate-100 tracking-wide font-mono">
              Pristine Studio Session
            </h3>
            <p className="text-slate-400 text-xs max-w-lg mt-2 mb-6 font-mono leading-relaxed">
              Drag & drop multitrack stems or audio recordings directly into this workspace, or use the controls below to begin editing.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
              >
                <UploadCloud className="w-4 h-4 text-black stroke-[2.5]" />
                <span>Import Audio File(s)</span>
              </button>

              {onNavigateTab && (
                <button
                  onClick={() => onNavigateTab('recording')}
                  className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 border border-violet-500/40 font-semibold text-xs transition-colors cursor-pointer"
                >
                  <Mic className="w-4 h-4 text-violet-400" />
                  <span>Record from Interface</span>
                </button>
              )}

              <button
                onClick={onAddTrack}
                className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 font-semibold text-xs transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4 text-slate-400" />
                <span>Add Blank Track</span>
              </button>

              {onInsertSoundLogo && (
                <button
                  onClick={onInsertSoundLogo}
                  className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/60 text-cyan-300 border border-cyan-800/80 hover:border-cyan-500 font-semibold text-xs transition-colors cursor-pointer"
                  title="Insert official RYDETECH Sonic Ident directly into DAW timeline"
                >
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Insert RYDETECH Sound Logo</span>
                </button>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center space-x-3 text-xs text-slate-500">
              <span>Need a sample session for testing?</span>
              {onLoadDemo && (
                <button
                  onClick={onLoadDemo}
                  disabled={loadingDemo}
                  className="flex items-center space-x-1.5 text-cyan-400 hover:text-cyan-300 hover:underline font-mono disabled:opacity-50 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                  <span>{loadingDemo ? 'Synthesizing Demo Session...' : 'Load Sample Multitrack Session'}</span>
                </button>
              )}
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-[10px] font-mono text-slate-500">
              <span>WAV, FLAC, MP3, AIFF, OGG, Opus</span>
              <span>•</span>
              <span>64-bit Floating Point Architecture</span>
              <span>•</span>
              <span>PDPA-Compliant Sovereign Storage</span>
            </div>
          </div>
        ) : (
          <div className="divide-y divide-slate-850">
            {tracks.map(track => {
              const isSelected = activeTrackId === track.id;
              return (
                <div
                  key={track.id}
                  onClick={() => setActiveTrackId(track.id)}
                  className={`flex transition-colors cursor-pointer ${
                    isSelected ? 'bg-slate-900/90' : 'bg-[#0a0d14] hover:bg-slate-900/40'
                  }`}
                >
                  {/* Track Header / Inspector Column */}
                  <div className="w-64 p-3 border-r border-slate-800/80 flex flex-col justify-between shrink-0 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: track.color || '#00f2fe' }}
                        />
                        <span className="font-mono text-xs font-bold text-slate-200 truncate">
                          {track.name}
                        </span>
                      </div>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                        {track.category || 'Audio'}
                      </span>
                    </div>

                    {/* Fader & Pan Mini Controls */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span>VOL</span>
                        <span>{track.volume_db ? `${track.volume_db} dB` : '0 dB'}</span>
                      </div>
                      <input
                        type="range"
                        min="0.0"
                        max="1.2"
                        step="0.02"
                        defaultValue={1.0}
                        onChange={(e) => {
                          const v = parseFloat(e.target.value);
                          audioEngine.setTrackVolume(track.id, v);
                          onUpdateTrack(track.id, { volume: v });
                        }}
                        className="w-full h-1 bg-slate-800 rounded cursor-pointer"
                      />
                    </div>

                    {/* Mute / Solo / Rec Arm Buttons */}
                    <div className="flex items-center space-x-1.5 pt-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const newMute = !track.mute;
                          audioEngine.setTrackMute(track.id, newMute);
                          onUpdateTrack(track.id, { mute: newMute });
                        }}
                        className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                          track.mute ? 'bg-amber-500 text-black' : 'bg-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        M
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const newSolo = !track.solo;
                          audioEngine.setTrackSolo(track.id, newSolo);
                          onUpdateTrack(track.id, { solo: newSolo });
                        }}
                        className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                          track.solo ? 'bg-cyan-400 text-black' : 'bg-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        S
                      </button>

                      <button
                        onClick={(e) => e.stopPropagation()}
                        className="p-1 rounded bg-slate-800 text-slate-500 hover:text-rose-400"
                        title="Record Arm"
                      >
                        <Circle className="w-3 h-3 fill-rose-600/40" />
                      </button>

                      {onOpenQuickFX && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenQuickFX(track);
                          }}
                          className="flex items-center space-x-1 px-2 py-0.5 text-[10px] font-bold rounded bg-cyan-950 text-cyan-300 border border-cyan-700 hover:bg-cyan-900 transition-colors ml-auto"
                          title="Instant Effects & Mastering"
                        >
                          <Zap className="w-2.5 h-2.5 text-cyan-400" />
                          <span>FX</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Waveform Clip Lane */}
                  <div className="flex-1 p-3 flex items-center relative overflow-hidden bg-black/30">
                    <div 
                      className="w-full h-16 rounded-lg border border-slate-800/80 relative flex items-center px-2 overflow-hidden"
                      style={{
                        backgroundColor: `${track.color || '#00f2fe'}10`,
                        borderColor: `${track.color || '#00f2fe'}40`
                      }}
                    >
                      {/* Waveform Bars Preview */}
                      <div className="w-full h-full flex items-center space-x-0.5">
                        {(track.waveform || Array.from({ length: 80 }).map((_, i) => Math.sin(i * 0.2) * 0.5 + 0.5)).map((peak, idx) => {
                          const heightPct = Math.max(8, Math.min(95, peak * 100));
                          return (
                            <div
                              key={idx}
                              className="flex-1 rounded-sm"
                              style={{
                                height: `${heightPct}%`,
                                backgroundColor: track.color || '#00f2fe'
                              }}
                            />
                          );
                        })}
                      </div>

                      {/* Clip Name Label */}
                      <div className="absolute top-1 left-2 text-[9px] font-mono text-white/70 bg-black/60 px-1.5 py-0.5 rounded">
                        {track.name}.wav
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
}
