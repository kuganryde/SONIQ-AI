import React, { useState, useEffect } from 'react';
import { 
  Sliders, 
  Layers, 
  Bot, 
  Cpu, 
  Disc, 
  Piano, 
  Volume2, 
  Activity, 
  Mic, 
  DownloadCloud,
  ShieldCheck,
  VolumeX,
  Sparkles,
  Info,
  X,
  CheckCircle2,
  Share2
} from 'lucide-react';
import { audioEngine } from '../audio/WebAudioEngine';
import { apiUrl } from '../config/api';

export default function Navbar({ activeTab, setActiveTab, isPlaying }) {
  const [isSoundLogoPlaying, setIsSoundLogoPlaying] = useState(false);
  const [showBrandModal, setShowBrandModal] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const unsubscribe = audioEngine.onSoundLogoStateChange(playing => {
      setIsSoundLogoPlaying(playing);
    });
    return () => unsubscribe();
  }, []);

  const handlePlaySoundLogo = (e) => {
    e.stopPropagation();
    audioEngine.playBrandSoundLogo();
  };

  const navItems = [
    { id: 'studio', label: 'DAW Studio', icon: Layers },
    { id: 'mixer', label: 'Console Mixer', icon: Sliders },
    { id: 'ai_agents', label: 'AI Agents (10)', icon: Bot, badge: 'AUTO' },
    { id: 'dsp_rack', label: 'DSP Rack', icon: Cpu },
    { id: 'surround', label: 'Surround 5.1/7.1', icon: Disc },
    { id: 'synths', label: 'Synths & MIDI', icon: Piano },
    { id: 'mastering', label: 'Mastering Suite', icon: Volume2 },
    { id: 'analysis', label: 'Acoustic RTA', icon: Activity },
    { id: 'recording', label: 'Live Mic Rec', icon: Mic },
    { id: 'exports', label: 'Export & QC', icon: DownloadCloud },
  ];

  return (
    <>
      <header className="bg-[#0b0e17] border-b border-slate-800/80 sticky top-0 z-50 select-none">
        {/* Subtle acoustic glow line during sound logo playback */}
        {isSoundLogoPlaying && (
          <div className="h-0.5 w-full bg-gradient-to-r from-cyan-400 via-violet-500 to-cyan-400 animate-pulse" />
        )}

        <div className="max-w-[1920px] mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-4">
          
          {/* Sovereign Brand Mark & Sound Logo Trigger */}
          <div className="flex items-center space-x-3.5">
            <button
              onClick={handlePlaySoundLogo}
              title="Click to play official RYDETECH SONIQ Sound Logo (Sonic Ident)"
              className={`group relative w-10 h-10 rounded-xl p-1 bg-gradient-to-br from-slate-900 to-[#0c1222] border transition-all duration-300 flex items-center justify-center cursor-pointer ${
                isSoundLogoPlaying 
                  ? 'border-cyan-400 ring-2 ring-cyan-400/50 shadow-lg shadow-cyan-500/30 scale-105' 
                  : 'border-slate-700/80 hover:border-cyan-500/60 hover:shadow-md hover:shadow-cyan-500/20'
              }`}
            >
              <img 
                src="/rydetech_logo.svg" 
                alt="RYDETECH SONIQ AI Logo" 
                className={`w-7 h-7 object-contain transition-transform duration-300 ${
                  isSoundLogoPlaying ? 'animate-pulse scale-110' : 'group-hover:scale-105'
                }`}
              />
              {/* Sound waves badge indicator */}
              <span className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold ${
                isSoundLogoPlaying 
                  ? 'bg-cyan-400 text-black animate-ping' 
                  : 'bg-slate-800 text-cyan-400 border border-cyan-800/80 group-hover:bg-cyan-950'
              }`}>
                🔊
              </span>
            </button>

            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold tracking-wider text-sm font-sans text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">
                  RYDETECH
                </span>
                <span className="text-slate-600 font-mono text-xs">/</span>
                <span className="font-black tracking-wider text-base text-white font-mono">
                  SONIQ AI
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950/90 text-cyan-400 border border-cyan-800/80">
                  PRO v1.0
                </span>
                
                {/* 1-Click Interactive Sound Logo Button */}
                <button
                  onClick={handlePlaySoundLogo}
                  className={`hidden sm:inline-flex items-center space-x-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono transition-all duration-200 cursor-pointer ${
                    isSoundLogoPlaying
                      ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-black font-bold shadow-md shadow-cyan-500/30'
                      : 'bg-slate-800/90 text-slate-300 border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-300'
                  }`}
                  title="Audition sovereign audio sonic ident"
                >
                  <span className={`inline-block w-1.5 h-1.5 rounded-full ${isSoundLogoPlaying ? 'bg-black animate-ping' : 'bg-cyan-400'}`} />
                  <span>{isSoundLogoPlaying ? 'Playing Sonic Ident...' : 'Play Sound Logo'}</span>
                  {isSoundLogoPlaying && (
                    <span className="flex space-x-0.5 items-end h-2.5">
                      <span className="w-0.5 bg-black h-full animate-[pulse_0.4s_infinite]" />
                      <span className="w-0.5 bg-black h-2/3 animate-[pulse_0.6s_infinite]" />
                      <span className="w-0.5 bg-black h-4/5 animate-[pulse_0.5s_infinite]" />
                    </span>
                  )}
                </button>
              </div>
              
              <div className="flex items-center space-x-2 mt-0.5">
                <p className="text-[10px] text-slate-400 font-mono tracking-tight">
                  Autonomous Studio DAW & Spatial Audio Architecture
                </p>
                <button
                  onClick={() => setShowBrandModal(true)}
                  className="text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer"
                  title="View RYDETECH Brand & Enclave Specifications"
                >
                  <Info className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Tab Switcher */}
          <nav className="flex items-center space-x-1 overflow-x-auto py-1">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-violet-950 text-violet-300 border border-violet-800">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Sovereign Enclave Badges */}
          <div className="hidden lg:flex items-center space-x-2.5 text-[11px] font-mono">
            <div 
              onClick={() => setShowBrandModal(true)}
              className="flex items-center space-x-1.5 text-cyan-400 bg-cyan-950/50 hover:bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-800/60 cursor-pointer transition-colors"
              title="Malaysian Sovereign Enclave Infrastructure"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>srv1302021 : PDPA 2010</span>
            </div>
            <div className="flex items-center space-x-1.5 text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>64-bit Float DSP</span>
            </div>
            <div className="text-slate-400 bg-slate-900/80 px-2 py-1 rounded border border-slate-800 text-[10px]">
              <span>48k/96k/192k</span>
            </div>
          </div>

        </div>
      </header>

      {/* Brand & Sound Logo Specification Modal */}
      {showBrandModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-[#0b0e17] border border-slate-700 max-w-xl w-full rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            
            {/* Header */}
            <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-[#0e1320]">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 p-0.5 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                  <div className="w-full h-full bg-[#07090e] rounded-[10px] flex items-center justify-center">
                    <img src="/rydetech_logo.svg" alt="RYDETECH" className="w-6 h-6 object-contain" />
                  </div>
                </div>
                <div>
                  <h3 className="font-mono font-bold text-white text-base">
                    RYDETECH GLOBAL ENTERPRISE
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono">
                    SONIQ AI Sovereign Studio & Surround Audio Suite
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setShowBrandModal(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 text-xs text-slate-300">
              
              {/* Sound Logo Showcase Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-800/50 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-cyan-300 font-bold uppercase tracking-wider text-[11px] flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Official Sovereign Sound Logo (Sonic Ident)</span>
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 font-mono text-[10px]">
                    EBU R128 (-14.4 LUFS)
                  </span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Synthesized with 64-bit float math: 38Hz–65.4Hz visceral sub-bass pitch glide, Cadd9 analog polyphonic pad swell, crystal FM acoustic bell chimes, and 3D binaural Schroeder spatial dispersion.
                </p>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={handlePlaySoundLogo}
                    className="flex-1 py-2 px-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold font-mono text-xs transition flex items-center justify-center space-x-2 shadow-md shadow-cyan-500/20 cursor-pointer"
                  >
                    <span>{isSoundLogoPlaying ? '🔊 Playing Ident...' : '▶ Audition Sound Logo'}</span>
                  </button>

                  <a
                    href="/rydetech_soniq_sound_logo.wav"
                    download="rydetech_soniq_sound_logo.wav"
                    className="py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs border border-slate-700 flex items-center space-x-1.5 transition cursor-pointer"
                    title="Download pristine 24-bit 48kHz WAV"
                  >
                    <DownloadCloud className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Download WAV</span>
                  </a>
                </div>
              </div>

              {/* Technical Enclave Specifications */}
              <div className="grid grid-cols-2 gap-3 text-[11px] font-mono">
                <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800">
                  <div className="text-slate-500 text-[10px]">SOVEREIGN HOST</div>
                  <div className="text-slate-200 font-bold mt-0.5">srv1302021</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800">
                  <div className="text-slate-500 text-[10px]">DATA RESIDENCY</div>
                  <div className="text-cyan-400 font-bold mt-0.5">Malaysia PDPA 2010</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800">
                  <div className="text-slate-500 text-[10px]">DSP RESOLUTION</div>
                  <div className="text-slate-200 font-bold mt-0.5">64-bit Double IEEE 754</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800">
                  <div className="text-slate-500 text-[10px]">IMMERSIVE SPATIAL</div>
                  <div className="text-slate-200 font-bold mt-0.5">7.1.4 Dolby / DTS:X</div>
                </div>
              </div>

              {/* Legal & Attribution */}
              <div className="pt-2 border-t border-slate-800/80 text-[10px] text-slate-500 font-mono flex items-center justify-between">
                <span>© 2026 RYDETECH GLOBAL ENTERPRISE.</span>
                <span>All Sovereign Rights Reserved.</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
