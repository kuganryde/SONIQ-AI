import React from 'react';
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
  Radio
} from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, isPlaying }) {
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
    <header className="bg-[#0b0e17] border-b border-slate-800/80 sticky top-0 z-50">
      <div className="max-w-[1920px] mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-4">
        
        {/* Brand */}
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Radio className="w-5 h-5 text-black stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-extrabold tracking-wider text-base text-white font-mono">SONIQ AI</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                PRO v1.0
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono">Autonomous Studio & Surround Engineering</p>
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
                className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
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

        {/* Engine Specs Status Badges */}
        <div className="hidden lg:flex items-center space-x-3 text-[11px] font-mono">
          <div className="flex items-center space-x-1.5 text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/60">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>64-bit Float DSP</span>
          </div>
          <div className="text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-800">
            <span>48k/96k/192k Hz</span>
          </div>
        </div>

      </div>
    </header>
  );
}
