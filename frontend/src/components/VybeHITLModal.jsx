import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Sparkles, 
  Scissors, 
  Type, 
  Palette, 
  Smartphone, 
  Tv, 
  Square, 
  CheckCircle2, 
  Check, 
  Sliders, 
  Play, 
  Pause, 
  RotateCcw, 
  Wand2, 
  Clock, 
  ShieldAlert, 
  DownloadCloud, 
  ArrowRight,
  Edit2
} from 'lucide-react';
import { apiUrl, safeFetchJson, resolveAudioUrl } from '../config/api';

export default function VybeHITLModal({
  isOpen,
  onClose,
  asset,
  onApplyUplift,
  onApplyAndRender
}) {
  const [loading, setLoading] = useState(false);
  const [proposal, setProposal] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  
  // HITL State Controls (User overrides)
  const [pacing, setPacing] = useState('fast');
  const [aspectRatio, setAspectRatio] = useState('9:16');
  const [stylePreset, setStylePreset] = useState('cyberpunk');
  const [cuts, setCuts] = useState([]);
  const [captions, setCaptions] = useState([]);
  const [selectedLut, setSelectedLut] = useState('teal_orange');
  const [hookTitle, setHookTitle] = useState('⚡ NEXT-GEN SOVEREIGN AI');
  const [showSafeZones, setShowSafeZones] = useState(true);
  const [subtitlesEnabled, setSubtitlesEnabled] = useState(true);
  const [captionStyle, setCaptionStyle] = useState('kinetic_cyan');

  // Video Preview Player state
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef(null);

  // Fetch AI detection & analysis proposal when modal opens or asset changes
  const fetchProposal = async (customPacing = pacing, customAspect = aspectRatio, customStyle = stylePreset) => {
    if (!asset || !asset.id) return;
    setLoading(true);
    setErrorMsg('');

    try {
      const data = await safeFetchJson(apiUrl('/api/v1/video/auto-uplift/analyze'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          asset_id: asset.id,
          pacing: customPacing,
          target_aspect_ratio: customAspect,
          style_preset: customStyle
        })
      });

      setProposal(data);
      setCuts(data.cuts || []);
      setCaptions(data.captions || []);
      setSelectedLut(data.effects?.lut || 'teal_orange');
      setHookTitle(data.effects?.overlay_hook || '⚡ NEXT-GEN SOVEREIGN AI');
      setAspectRatio(data.target_aspect_ratio || '9:16');
    } catch (err) {
      console.error('Failed to analyze video for uplift:', err);
      setErrorMsg(`Analysis Notice: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen && asset) {
      fetchProposal(pacing, aspectRatio, stylePreset);
    }
  }, [isOpen, asset]);

  if (!isOpen || !asset) return null;

  // Toggle Cut Keep
  const toggleCutKeep = (cutId) => {
    setCuts(prev => prev.map(c => c.cut_id === cutId ? { ...c, keep: !c.keep } : c));
  };

  // Edit Caption Text
  const updateCaptionText = (capId, newText) => {
    setCaptions(prev => prev.map(c => c.caption_id === capId ? { ...c, text: newText } : c));
  };

  // Toggle Caption Enabled
  const toggleCaptionEnabled = (capId) => {
    setCaptions(prev => prev.map(c => c.caption_id === capId ? { ...c, enabled: !c.enabled } : c));
  };

  const getColorFilter = () => {
    switch (selectedLut) {
      case 'kodak_2383':
        return 'contrast(1.22) saturate(1.25) sepia(0.08) hue-rotate(-8deg)';
      case 'fuji_3513':
        return 'contrast(1.15) saturate(1.18) hue-rotate(6deg) brightness(0.98)';
      case 'teal_orange':
        return 'contrast(1.28) saturate(1.35) hue-rotate(-14deg)';
      case 'cyberpunk_neon':
      case 'cyberpunk':
        return 'contrast(1.35) saturate(1.7) hue-rotate(25deg)';
      case 'noir_silver':
      case 'moody':
        return 'grayscale(1) contrast(1.4) brightness(0.92)';
      case 'vintage_warm':
      case 'vintage':
        return 'sepia(0.45) contrast(1.12) brightness(0.96) saturate(1.1)';
      default:
        return 'none';
    }
  };

  // Find active caption at current time
  const activeCaption = subtitlesEnabled ? captions.find(
    c => c.enabled && currentTime >= c.start_time && currentTime < c.start_time + c.duration
  ) : null;

  const handleApprove = async (andRender = false) => {
    try {
      const applyPayload = {
        project_id: 'proj_vybe_demo',
        asset_id: asset.id,
        approved_cuts: cuts.filter(c => c.keep),
        approved_captions: subtitlesEnabled ? captions.filter(c => c.enabled) : [],
        color_grade: selectedLut,
        aspect_ratio: aspectRatio,
        hook_title: hookTitle,
        include_bgm: true
      };

      const uplifted = await safeFetchJson(apiUrl('/api/v1/video/auto-uplift/apply'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(applyPayload)
      });

      if (andRender && onApplyAndRender) {
        onApplyAndRender(uplifted);
      } else if (onApplyUplift) {
        onApplyUplift(uplifted);
      }
      onClose();
    } catch (err) {
      console.error('Failed to apply uplift:', err);
      setErrorMsg(`Apply Error: ${err.message}`);
    }
  };

  const previewVideoUrl = asset.proxy_stream_url || asset.stream_url;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-5 overflow-y-auto">
      <div className="bg-[#0b0e17] border border-cyan-500/50 max-w-5xl w-full rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[92vh]">
        
        {/* 1. Modal Header */}
        <div className="px-5 py-3.5 border-b border-slate-800 flex items-center justify-between bg-gradient-to-r from-slate-950 via-[#0e1320] to-cyan-950/40">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center text-black font-black shadow-md shadow-cyan-400/20">
              <Sparkles className="w-5 h-5 fill-black" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-mono font-bold text-white text-sm uppercase tracking-wide">
                  Autonomous Video Uplift & AI Editor (HITL)
                </h3>
                <span className="px-1.5 py-0.2 rounded bg-cyan-950 border border-cyan-700/60 text-cyan-300 font-mono text-[9px] font-bold">
                  srv1302021 Sovereign Enclave
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">
                Detected: <span className="text-cyan-300 font-bold">{asset.file_name}</span> ({asset.duration_seconds?.toFixed(1)}s • {asset.width}x{asset.height})
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {errorMsg && (
          <div className="mx-5 mt-3 p-2 rounded bg-red-950/60 border border-red-700 text-red-300 text-xs">
            {errorMsg}
          </div>
        )}

        {/* 2. Main Two-Column HITL Studio */}
        <div className="p-4 overflow-y-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* LEFT: Live Video Monitor & Telemetry (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            <div className="bg-black/90 border border-slate-800 rounded-xl p-2 flex flex-col items-center justify-between shadow-xl">
              <div className="w-full flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-800/80 text-[11px] font-mono text-slate-400">
                <span className="text-cyan-400 font-bold">UPLIFT PREVIEW MONITOR</span>
                <span className="uppercase text-slate-300">{aspectRatio} • LUT: {selectedLut}</span>
              </div>

              {/* Viewport Frame with Aspect Ratio */}
              <div className={`relative ${
                aspectRatio === '9:16' ? 'aspect-[9/16] max-h-[360px]' : aspectRatio === '1:1' ? 'aspect-square max-h-[340px]' : 'aspect-video w-full max-h-[320px]'
              } bg-slate-950 rounded-lg overflow-hidden border border-slate-900 shadow-2xl flex items-center justify-center transition-all duration-300`}>
                <video
                  ref={videoRef}
                  src={resolveAudioUrl(previewVideoUrl)}
                  className="w-full h-full object-contain"
                  style={{ filter: getColorFilter() }}
                  onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
                  playsInline
                  loop
                />

                {/* Top Hook Title Banner */}
                {hookTitle && (
                  <div className="absolute top-3 inset-x-3 flex justify-center pointer-events-none">
                    <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur border border-cyan-500/60 text-[10px] font-mono font-black text-cyan-300 uppercase tracking-wider shadow">
                      {hookTitle}
                    </span>
                  </div>
                )}

                {/* Kinetic Subtitle Overlay Preview */}
                {activeCaption && (
                  <div className="absolute bottom-8 inset-x-3 flex justify-center pointer-events-none animate-in fade-in zoom-in-90 duration-150">
                    <span className={`px-3 py-1 rounded-md text-xs font-black uppercase tracking-wider font-mono shadow-2xl ${
                      captionStyle === 'kinetic_cyan'
                        ? 'bg-cyan-500 text-black border border-cyan-300 ring-2 ring-cyan-400/40'
                        : captionStyle === 'punchy_yellow'
                        ? 'bg-amber-400 text-black border border-amber-300 ring-2 ring-amber-400/40'
                        : 'bg-black/90 text-white border border-slate-600'
                    }`}>
                      {activeCaption.text}
                    </span>
                  </div>
                )}

                {/* TikTok Safe Zones Overlay */}
                {showSafeZones && aspectRatio === '9:16' && (
                  <div className="absolute inset-0 pointer-events-none border border-red-500/40 flex flex-col justify-between p-2 select-none text-[8px] text-red-400 font-mono">
                    <div className="bg-red-950/70 px-1 rounded w-max">TOP SAFE ZONE</div>
                    <div className="bg-red-950/70 px-1 rounded w-max self-end">UI MARGIN</div>
                    <div className="bg-red-950/70 px-1 rounded w-max">BOTTOM CAPTION ZONE</div>
                  </div>
                )}
              </div>

              {/* Monitor Controls */}
              <div className="w-full mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <button
                  onClick={() => {
                    if (videoRef.current) {
                      if (isPlaying) videoRef.current.pause();
                      else videoRef.current.play();
                      setIsPlaying(!isPlaying);
                    }
                  }}
                  className="px-3 py-1 rounded bg-cyan-500 text-black font-bold font-mono flex items-center space-x-1"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5 fill-black" /> : <Play className="w-3.5 h-3.5 fill-black" />}
                  <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
                </button>

                <div className="flex items-center space-x-2 font-mono text-[11px] text-slate-400">
                  <span>{currentTime.toFixed(1)}s / {asset.duration_seconds?.toFixed(1)}s</span>
                  <button
                    onClick={() => setShowSafeZones(!showSafeZones)}
                    className={`px-1.5 py-0.5 rounded border text-[9px] ${
                      showSafeZones ? 'bg-red-950 border-red-700 text-red-300' : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    Safe Zones
                  </button>
                </div>
              </div>
            </div>

            {/* AI Telemetry Card */}
            {proposal && (
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 space-y-1.5 text-xs font-mono">
                <div className="text-cyan-400 font-bold text-[11px] uppercase pb-1 border-b border-slate-800">
                  AI Detection & Acoustic Diagnostics
                </div>
                <div className="grid grid-cols-2 gap-1 text-[10px] text-slate-300">
                  <div>• Silence Trimmed: <span className="text-emerald-400">{proposal.telemetry?.silence_trimmed_sec}s</span></div>
                  <div>• Pacing Cuts: <span className="text-cyan-300">{cuts.filter(c => c.keep).length} active</span></div>
                  <div>• Audio Downmix: <span className="text-slate-200">Broadcast EBU R128</span></div>
                  <div>• Confidence: <span className="text-emerald-400">{Math.round((proposal.confidence_score || 0.95) * 100)}%</span></div>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: Human-in-the-Loop Knobs & Customization (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-3.5">
            
            {/* 1. Quick Cuts & Pacing Mode */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 space-y-2">
              <div className="flex items-center justify-between pb-1 border-b border-slate-800">
                <div className="flex items-center space-x-1.5">
                  <Scissors className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-xs font-bold text-slate-200 font-mono uppercase">1. Pacing & Smart Quick Cuts</span>
                </div>

                <div className="flex items-center space-x-1 bg-slate-950 p-0.5 rounded-lg border border-slate-800 text-[10px] font-mono">
                  {['fast', 'balanced', 'cinematic'].map(p => (
                    <button
                      key={p}
                      onClick={() => {
                        setPacing(p);
                        fetchProposal(p, aspectRatio, stylePreset);
                      }}
                      className={`px-2 py-0.5 rounded uppercase ${
                        pacing === p ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Detected Cuts List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-[140px] overflow-y-auto pr-1">
                {cuts.map(cut => (
                  <div
                    key={cut.cut_id}
                    onClick={() => toggleCutKeep(cut.cut_id)}
                    className={`p-1.5 rounded-lg border text-xs font-mono flex items-center justify-between cursor-pointer transition ${
                      cut.keep 
                        ? 'bg-cyan-950/60 border-cyan-600 text-cyan-200' 
                        : 'bg-slate-950/60 border-slate-800 text-slate-500 line-through opacity-60'
                    }`}
                  >
                    <div className="flex items-center space-x-1.5 truncate">
                      <span className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[9px] ${cut.keep ? 'bg-cyan-500 text-black font-bold' : 'bg-slate-800'}`}>
                        {cut.keep ? <Check className="w-2.5 h-2.5 stroke-[3]" /> : ''}
                      </span>
                      <span className="truncate">{cut.label}</span>
                    </div>
                    <span className="text-[10px] opacity-75">{cut.source_start}s - {cut.source_end}s</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Captions & Kinetic Subtitles */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 space-y-2">
              <div className="flex items-center justify-between pb-1 border-b border-slate-800">
                <div className="flex items-center space-x-1.5">
                  <Type className="w-3.5 h-3.5 text-violet-400" />
                  <span className="text-xs font-bold text-slate-200 font-mono uppercase">2. Kinetic Subtitles & Captions</span>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1 bg-slate-950 p-0.5 rounded-lg border border-slate-800 text-[10px] font-mono">
                    <button
                      onClick={() => setCaptionStyle('kinetic_cyan')}
                      className={`px-1.5 py-0.5 rounded ${captionStyle === 'kinetic_cyan' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400'}`}
                    >
                      Cyan
                    </button>
                    <button
                      onClick={() => setCaptionStyle('punchy_yellow')}
                      className={`px-1.5 py-0.5 rounded ${captionStyle === 'punchy_yellow' ? 'bg-amber-400 text-black font-bold' : 'text-slate-400'}`}
                    >
                      Yellow
                    </button>
                    <button
                      onClick={() => setCaptionStyle('clean_white')}
                      className={`px-1.5 py-0.5 rounded ${captionStyle === 'clean_white' ? 'bg-white text-black font-bold' : 'text-slate-400'}`}
                    >
                      White
                    </button>
                  </div>

                  <button
                    onClick={() => setSubtitlesEnabled(!subtitlesEnabled)}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                      subtitlesEnabled ? 'bg-violet-950 text-violet-300 border border-violet-700' : 'bg-slate-800 text-slate-500'
                    }`}
                  >
                    {subtitlesEnabled ? 'ENABLED' : 'MUTED'}
                  </button>
                </div>
              </div>

              {/* Captions Editable Inputs */}
              <div className="space-y-1.5 max-h-[120px] overflow-y-auto pr-1">
                {captions.map(cap => (
                  <div key={cap.caption_id} className="flex items-center space-x-2 text-xs">
                    <span className="text-[10px] font-mono text-cyan-400 w-12 flex-shrink-0">{cap.start_time}s</span>
                    <input
                      type="text"
                      value={cap.text}
                      disabled={!subtitlesEnabled}
                      onChange={(e) => updateCaptionText(cap.caption_id, e.target.value)}
                      className="flex-1 bg-[#080b11] border border-slate-800 rounded px-2 py-1 text-xs text-slate-200 font-mono focus:border-violet-500 disabled:opacity-40"
                    />
                    <button
                      onClick={() => toggleCaptionEnabled(cap.caption_id)}
                      className={`p-1 rounded text-[10px] ${cap.enabled ? 'text-cyan-400' : 'text-slate-600'}`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Color Grading LUT & Hook Title Overlay */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 space-y-2">
              <div className="flex items-center space-x-1.5 pb-1 border-b border-slate-800">
                <Palette className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-xs font-bold text-slate-200 font-mono uppercase">3. Color Filter & Hook Title</span>
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  { id: 'teal_orange', label: 'Teal & Orange' },
                  { id: 'cyberpunk', label: 'Cyberpunk Neon' },
                  { id: 'moody', label: 'Moody Cinema' },
                  { id: 'vintage', label: 'Vintage 35mm' },
                  { id: 'clean', label: 'Clean Rec.709' }
                ].map(lut => (
                  <button
                    key={lut.id}
                    onClick={() => setSelectedLut(lut.id)}
                    className={`px-2 py-1 rounded text-[11px] font-mono border transition ${
                      selectedLut === lut.id 
                        ? 'bg-amber-950/80 border-amber-500 text-amber-300 font-bold' 
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {lut.label}
                  </button>
                ))}
              </div>

              {/* Hook Title input */}
              <div className="pt-1 flex items-center space-x-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase">Hook:</span>
                <input
                  type="text"
                  value={hookTitle}
                  onChange={(e) => setHookTitle(e.target.value)}
                  placeholder="Hook title banner..."
                  className="flex-1 bg-[#080b11] border border-slate-800 rounded px-2 py-1 text-xs text-slate-200 font-mono focus:border-cyan-500"
                />
              </div>
            </div>

            {/* 4. Social Framing Platform */}
            <div className="flex items-center justify-between bg-slate-900/90 border border-slate-800 rounded-xl p-2.5">
              <span className="text-xs font-mono font-bold text-slate-300">4. TARGET RATIO:</span>
              <div className="flex items-center space-x-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
                <button
                  onClick={() => setAspectRatio('9:16')}
                  className={`px-2.5 py-1 rounded text-xs font-mono flex items-center space-x-1 ${
                    aspectRatio === '9:16' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400'
                  }`}
                >
                  <Smartphone className="w-3 h-3" />
                  <span>9:16 Vertical</span>
                </button>
                <button
                  onClick={() => setAspectRatio('16:9')}
                  className={`px-2.5 py-1 rounded text-xs font-mono flex items-center space-x-1 ${
                    aspectRatio === '16:9' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400'
                  }`}
                >
                  <Tv className="w-3 h-3" />
                  <span>16:9 Cinema</span>
                </button>
                <button
                  onClick={() => setAspectRatio('1:1')}
                  className={`px-2.5 py-1 rounded text-xs font-mono flex items-center space-x-1 ${
                    aspectRatio === '1:1' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400'
                  }`}
                >
                  <Square className="w-3 h-3" />
                  <span>1:1 Square</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 3. Modal Footer Actions (Human Approval) */}
        <div className="px-5 py-3 border-t border-slate-800 bg-[#07090e] flex flex-wrap items-center justify-between gap-2">
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-white text-xs font-mono transition"
          >
            DISCARD / KEEP UNEDITED
          </button>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleApprove(false)}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-black font-mono text-xs font-bold flex items-center space-x-1.5 shadow-lg shadow-cyan-500/25 transition hover:scale-105"
            >
              <Check className="w-4 h-4 stroke-[3]" />
              <span>⚡ APPROVE & APPLY TO TIMELINE</span>
            </button>

            <button
              onClick={() => handleApprove(true)}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-mono text-xs font-bold flex items-center space-x-1.5 shadow-lg shadow-violet-600/30 transition hover:scale-105"
            >
              <DownloadCloud className="w-4 h-4" />
              <span>🚀 UPLIFT & RENDER NOW</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
