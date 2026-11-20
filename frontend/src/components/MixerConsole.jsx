import React from 'react';
import { Sliders, Volume2, ShieldCheck, Activity } from 'lucide-react';
import { audioEngine } from '../audio/WebAudioEngine';

export default function MixerConsole({
  tracks = [],
  onUpdateTrack
}) {
  return (
    <div className="flex-1 flex flex-col bg-[#07090f] p-4 overflow-x-auto">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-base font-bold text-white font-mono flex items-center space-x-2">
            <Sliders className="w-4 h-4 text-cyan-400" />
            <span>STUDIO MIXING CONSOLE (64-BIT DUAL-PRECISION)</span>
          </h2>
          <p className="text-xs text-slate-400 font-mono">
            Direct fader gain staging, rotary pan, inserts, sends, and master summing bus.
          </p>
        </div>
      </div>

      {/* Console Strips Rack */}
      <div className="flex items-stretch space-x-3 pb-6 flex-1 min-h-[500px]">
        {tracks.map((track) => {
          return (
            <div
              key={track.id}
              className="w-36 bg-[#0c101a] border border-slate-800 rounded-xl p-3 flex flex-col justify-between shrink-0 shadow-lg relative"
            >
              {/* Header */}
              <div className="text-center pb-2 border-b border-slate-800/80">
                <div
                  className="w-3 h-1 rounded mx-auto mb-1"
                  style={{ backgroundColor: track.color || '#00f2fe' }}
                />
                <div className="font-mono text-xs font-bold text-slate-100 truncate">
                  {track.name}
                </div>
                <div className="text-[10px] font-mono text-slate-500 uppercase">{track.category}</div>
              </div>

              {/* Inserts / FX Slot Badges */}
              <div className="space-y-1 my-2">
                <div className="text-[8px] font-mono text-slate-500 uppercase">Inserts</div>
                <div className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-cyan-300 border border-slate-800 truncate">
                  1. Parametric EQ
                </div>
                <div className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-violet-300 border border-slate-800 truncate">
                  2. Opto Compressor
                </div>
              </div>

              {/* Pan Pot */}
              <div className="my-2 text-center">
                <div className="text-[9px] font-mono text-slate-400">PAN: {track.pan || 0}</div>
                <input
                  type="range"
                  min="-1.0"
                  max="1.0"
                  step="0.05"
                  defaultValue={track.pan || 0}
                  onChange={(e) => {
                    const p = parseFloat(e.target.value);
                    audioEngine.setTrackPan(track.id, p);
                    onUpdateTrack(track.id, { pan: p });
                  }}
                  className="w-20 h-1 bg-slate-800 rounded cursor-pointer"
                />
              </div>

              {/* Fader & Meter Section */}
              <div className="flex-1 flex justify-center items-center space-x-3 my-4">
                {/* Vertical Fader */}
                <div className="h-44 flex items-center">
                  <input
                    type="range"
                    min="0.0"
                    max="1.2"
                    step="0.01"
                    defaultValue={track.volume || 1.0}
                    onChange={(e) => {
                      const v = parseFloat(e.target.value);
                      audioEngine.setTrackVolume(track.id, v);
                      onUpdateTrack(track.id, { volume: v });
                    }}
                    className="h-36 -rotate-90 w-36 bg-slate-800 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Vertical LED Meter */}
                <div className="w-2.5 h-40 bg-slate-950 rounded border border-slate-850 overflow-hidden flex flex-col-reverse p-0.5">
                  <div className="w-full bg-emerald-400 rounded-sm h-[65%]" />
                </div>
              </div>

              {/* Mute / Solo Buttons */}
              <div className="flex items-center space-x-1.5 pt-2 border-t border-slate-800/80">
                <button
                  onClick={() => {
                    const m = !track.mute;
                    audioEngine.setTrackMute(track.id, m);
                    onUpdateTrack(track.id, { mute: m });
                  }}
                  className={`flex-1 py-1 text-[10px] font-bold rounded ${
                    track.mute ? 'bg-amber-500 text-black' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  MUTE
                </button>
                <button
                  onClick={() => {
                    const s = !track.solo;
                    audioEngine.setTrackSolo(track.id, s);
                    onUpdateTrack(track.id, { solo: s });
                  }}
                  className={`flex-1 py-1 text-[10px] font-bold rounded ${
                    track.solo ? 'bg-cyan-400 text-black' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  SOLO
                </button>
              </div>

              {/* Track Footer */}
              <div className="text-center mt-2 text-[10px] font-mono text-cyan-400 font-bold">
                {track.volume_db || '0.0 dB'}
              </div>
            </div>
          );
        })}

        {/* Master Bus Strip */}
        <div className="w-44 bg-[#111624] border-2 border-cyan-500/40 rounded-xl p-3 flex flex-col justify-between shrink-0 shadow-2xl relative">
          <div className="text-center pb-2 border-b border-cyan-500/30">
            <div className="font-mono text-xs font-black text-cyan-300 tracking-wider">
              MASTER SUM
            </div>
            <div className="text-[10px] font-mono text-slate-400">BUS 1-2 (STEREO)</div>
          </div>

          <div className="space-y-1 my-2">
            <div className="text-[8px] font-mono text-slate-400 uppercase">Master Chain</div>
            <div className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/60 text-emerald-300 border border-emerald-900 truncate">
              True-Peak Limiter
            </div>
            <div className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/60 text-amber-300 border border-amber-900 truncate">
              Tape Saturation
            </div>
          </div>

          {/* Master Fader & Meter */}
          <div className="flex-1 flex justify-center items-center space-x-3 my-4">
            <div className="h-44 flex items-center">
              <input
                type="range"
                min="0.0"
                max="1.2"
                step="0.01"
                defaultValue={0.85}
                onChange={(e) => audioEngine.setMasterVolume(parseFloat(e.target.value))}
                className="h-36 -rotate-90 w-36 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>

            {/* Dual Stereo Meters */}
            <div className="flex space-x-1">
              <div className="w-2.5 h-40 bg-slate-950 rounded border border-slate-800 overflow-hidden flex flex-col-reverse p-0.5">
                <div className="w-full bg-cyan-400 rounded-sm h-[72%]" />
              </div>
              <div className="w-2.5 h-40 bg-slate-950 rounded border border-slate-800 overflow-hidden flex flex-col-reverse p-0.5">
                <div className="w-full bg-cyan-400 rounded-sm h-[70%]" />
              </div>
            </div>
          </div>

          <div className="text-center text-[10px] font-mono text-emerald-400 font-bold">
            -0.1 dBTP CEILING
          </div>
        </div>

      </div>
    </div>
  );
}
