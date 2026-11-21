import React, { useState } from 'react';
import { apiUrl, safeFetchJson, resolveAudioUrl } from '../config/api';
import { audioEngine } from '../audio/WebAudioEngine';
import { Piano, Disc, Sparkles, Download, Volume2, Play, ShieldCheck, Radio } from 'lucide-react';

export default function SynthesizerStudio({
  onAddTrackFromAudio
}) {
  const [synthType, setSynthType] = useState('subtractive');
  const [note, setNote] = useState(60); // Middle C
  const [durationSec, setDurationSec] = useState(1.5);
  const [waveform1, setWaveform1] = useState('saw');
  const [waveform2, setWaveform2] = useState('square');
  const [detuneCents, setDetuneCents] = useState(8);
  const [cutoffHz, setCutoffHz] = useState(2400);

  // Sound Logo State
  const [logoSampleRate, setLogoSampleRate] = useState(48000);
  const [logoDuration, setLogoDuration] = useState(3.2);

  // Drum step sequencer state (16 steps for 4 instruments)
  const [drumSteps, setDrumSteps] = useState({
    kick:  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    snare: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    hihat: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    clap:  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
  });

  const [generating, setGenerating] = useState(false);
  const [synthResult, setSynthResult] = useState(null);

  const pianoKeys = [
    { note: 60, name: 'C4', isBlack: false },
    { note: 61, name: 'C#4', isBlack: true },
    { note: 62, name: 'D4', isBlack: false },
    { note: 63, name: 'D#4', isBlack: true },
    { note: 64, name: 'E4', isBlack: false },
    { note: 65, name: 'F4', isBlack: false },
    { note: 66, name: 'F#4', isBlack: true },
    { note: 67, name: 'G4', isBlack: false },
    { note: 68, name: 'G#4', isBlack: true },
    { note: 69, name: 'A4', isBlack: false },
    { note: 70, name: 'A#4', isBlack: true },
    { note: 71, name: 'B4', isBlack: false },
    { note: 72, name: 'C5', isBlack: false },
  ];

  const handleSynthesize = async (overrideType) => {
    setGenerating(true);
    const typeToUse = overrideType || synthType;
    try {
      let payload = {
        synth_type: typeToUse,
        note,
        duration_sec: durationSec,
        waveform_1: waveform1,
        waveform_2: waveform2,
        detune_cents: detuneCents,
        cutoff_hz: cutoffHz
      };

      if (typeToUse === 'drum_pattern') {
        const events = [];
        const stepDuration = 0.125; // 16th notes at 120 BPM
        Object.entries(drumSteps).forEach(([dType, steps]) => {
          steps.forEach((active, sIdx) => {
            if (active) {
              events.push({
                drum_type: dType,
                start: sIdx * stepDuration,
                duration: 0.3,
                velocity: 110
              });
            }
          });
        });
        payload = {
          synth_type: 'midi_sequence',
          midi_events: events
        };
      }

      const data = await safeFetchJson(apiUrl('/api/v1/synth/generate'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      setSynthResult(data);

      if (onAddTrackFromAudio) {
        onAddTrackFromAudio(data);
      }
    } catch (e) {
      alert(`Synthesis error: ${e.message}`);
    } finally {
      setGenerating(false);
    }
  };

  const toggleDrumStep = (dType, stepIdx) => {
    setDrumSteps(prev => {
      const arr = [...prev[dType]];
      arr[stepIdx] = arr[stepIdx] ? 0 : 1;
      return { ...prev, [dType]: arr };
    });
  };

  const handleGenerateBrandSoundLogo = async () => {
    setGenerating(true);
    try {
      const data = await safeFetchJson(apiUrl('/api/v1/brand/sound-logo/generate'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sample_rate: logoSampleRate,
          duration_sec: logoDuration
        })
      });
      setSynthResult(data);
      if (onAddTrackFromAudio) {
        onAddTrackFromAudio(data);
      }
    } catch (e) {
      alert(`Sound logo synthesis error: ${e.message}`);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="flex-1 p-6 space-y-6 overflow-y-auto max-w-[1700px] mx-auto">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div>
          <h1 className="text-base font-bold text-white font-mono flex items-center space-x-2">
            <Piano className="w-5 h-5 text-cyan-400" />
            <span>SYNTHESIZERS & SOUND DESIGN LAB</span>
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            Dual-Oscillator Subtractive Synth, 4-Operator FM Synthesis, and 808/909 Electronic Drum Sequencer.
          </p>
        </div>

        <div className="flex space-x-2 bg-slate-900 p-1 rounded-xl border border-slate-800 font-mono text-xs font-bold">
          <button
            onClick={() => setSynthType('subtractive')}
            className={`px-3 py-1 rounded-lg ${synthType === 'subtractive' ? 'bg-cyan-500 text-black' : 'text-slate-400 hover:text-white'}`}
          >
            SUBTRACTIVE
          </button>
          <button
            onClick={() => setSynthType('fm')}
            className={`px-3 py-1 rounded-lg ${synthType === 'fm' ? 'bg-cyan-500 text-black' : 'text-slate-400 hover:text-white'}`}
          >
            FM SYNTH
          </button>
          <button
            onClick={() => setSynthType('drum_pattern')}
            className={`px-3 py-1 rounded-lg ${synthType === 'drum_pattern' ? 'bg-cyan-500 text-black' : 'text-slate-400 hover:text-white'}`}
          >
            808 DRUM MACHINE
          </button>
          <button
            onClick={() => setSynthType('sound_logo')}
            className={`px-3 py-1 rounded-lg flex items-center space-x-1.5 transition-all ${synthType === 'sound_logo' ? 'bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-bold shadow-md shadow-cyan-500/20' : 'text-cyan-400 hover:text-white border border-cyan-800/40'}`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOUND LOGO</span>
          </button>
        </div>
      </div>

      {synthType === 'sound_logo' ? (
        <div className="space-y-6">
          {/* Main Sound Logo Card */}
          <div className="bg-[#0b0e17] p-6 rounded-2xl border border-cyan-800/60 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-800">
              <div className="flex items-center space-x-3.5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 p-0.5 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                  <div className="w-full h-full bg-[#07090e] rounded-[10px] flex items-center justify-center">
                    <img src="/rydetech_logo.svg" alt="RYDETECH Brand Logo" className="w-8 h-8 object-contain" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className="text-base font-bold text-white font-mono">
                      RYDETECH SONIQ AI — Official Sound Logo (Sonic Ident)
                    </h2>
                    <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800 font-mono text-[10px]">
                      Sovereign Ident
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Multi-harmonic acoustic branding mnemonic engineered for cinema trailers, broadcasts, and sovereign audio pipelines.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => audioEngine.playBrandSoundLogo()}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-700/60 hover:border-cyan-400 font-mono text-xs font-bold transition flex items-center space-x-2 cursor-pointer shadow-md"
                >
                  <Volume2 className="w-4 h-4 text-cyan-400" />
                  <span>Audition Sonic Ident</span>
                </button>

                <button
                  onClick={handleGenerateBrandSoundLogo}
                  disabled={generating}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-mono text-xs font-bold transition flex items-center space-x-2 shadow-lg shadow-cyan-500/25 disabled:opacity-50 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-black stroke-[2.5]" />
                  <span>{generating ? 'Synthesizing...' : 'Synthesize to DAW Timeline'}</span>
                </button>
              </div>
            </div>

            {/* Architecture Decomposition */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mt-6">
              <div className="p-3.5 rounded-xl bg-[#0e1320] border border-slate-800/80 space-y-1.5">
                <div className="text-[10px] font-mono font-bold text-cyan-400 uppercase">Stage 01 • Sub Foundation</div>
                <div className="text-xs font-bold text-white font-mono">Sub-Bass Glide</div>
                <p className="text-[11px] text-slate-400">
                  38Hz to 65.4Hz (C2) pitch glide with soft-clipping tape saturation.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0e1320] border border-slate-800/80 space-y-1.5">
                <div className="text-[10px] font-mono font-bold text-violet-400 uppercase">Stage 02 • Harmonic Core</div>
                <div className="text-xs font-bold text-white font-mono">Cadd9 Poly Swell</div>
                <p className="text-[11px] text-slate-400">
                  C3, G3, C4, E4, G4, D5 chord with ±7 cents chorus detuning.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0e1320] border border-slate-800/80 space-y-1.5">
                <div className="text-[10px] font-mono font-bold text-emerald-400 uppercase">Stage 03 • Acoustic Motion</div>
                <div className="text-xs font-bold text-white font-mono">Resonant Ladder Filter</div>
                <p className="text-[11px] text-slate-400">
                  4-pole dynamic low-pass sweep opening from 300Hz to 6.5kHz.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0e1320] border border-slate-800/80 space-y-1.5">
                <div className="text-[10px] font-mono font-bold text-amber-400 uppercase">Stage 04 • Crystalline Chime</div>
                <div className="text-xs font-bold text-white font-mono">FM Glass Ident</div>
                <p className="text-[11px] text-slate-400">
                  Dual carrier C6/G6 + C7 ping with decaying FM index and stereo ping delays.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0e1320] border border-slate-800/80 space-y-1.5">
                <div className="text-[10px] font-mono font-bold text-rose-400 uppercase">Stage 05 • Spatial Depth</div>
                <div className="text-xs font-bold text-white font-mono">Schroeder 3D Diffusion</div>
                <p className="text-[11px] text-slate-400">
                  Smooth diffuse decay tail resolving to complete digital silence at 3.2s.
                </p>
              </div>
            </div>

            {/* Custom Synthesis Parameters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-800/80">
              <div className="bg-[#0e1320] p-4 rounded-xl border border-slate-800 font-mono text-xs space-y-2">
                <label className="text-slate-400 font-bold text-[11px]">Sampling Resolution</label>
                <div className="grid grid-cols-3 gap-2">
                  {[44100, 48000, 96000].map(sr => (
                    <button
                      key={sr}
                      onClick={() => setLogoSampleRate(sr)}
                      className={`py-1.5 px-2 rounded-lg text-center text-xs transition cursor-pointer ${
                        logoSampleRate === sr
                          ? 'bg-cyan-500 text-black font-bold shadow'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
                      }`}
                    >
                      {sr === 44100 ? '44.1k' : sr === 48000 ? '48k' : '96k'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-[#0e1320] p-4 rounded-xl border border-slate-800 font-mono text-xs space-y-2">
                <div className="flex justify-between text-slate-400 font-bold text-[11px]">
                  <span>Duration</span>
                  <span className="text-cyan-400 font-mono">{logoDuration}s</span>
                </div>
                <input
                  type="range"
                  min="2.0"
                  max="6.0"
                  step="0.2"
                  value={logoDuration}
                  onChange={(e) => setLogoDuration(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded cursor-pointer mt-2"
                />
              </div>

              <div className="bg-[#0e1320] p-4 rounded-xl border border-slate-800 font-mono text-xs flex flex-col justify-between">
                <div className="text-[11px] text-slate-400">
                  Broadcast Spec: EBU R128 (-14.4 LUFS) • True-Peak -1.0 dBTP
                </div>
                <div className="flex items-center space-x-2 text-[10px] text-emerald-400 mt-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Sovereign Enclave Certified (srv1302021)</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      ) : (
        <>
          {/* Piano Roll Keyboard */}
      <div className="bg-[#0b0e17] p-5 rounded-2xl border border-slate-800 shadow-xl space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-cyan-300">
            Virtual Keyboard (Click to Trigger Note: {note})
          </span>
          <span className="text-[10px] font-mono text-slate-400">MIDI C4 - C5</span>
        </div>

        {/* Interactive Piano Keys */}
        <div className="h-32 bg-black/60 rounded-xl border border-slate-800 flex p-2 relative overflow-hidden select-none">
          {pianoKeys.map((k) => (
            <div
              key={k.note}
              onClick={() => {
                setNote(k.note);
                handleSynthesize(synthType);
              }}
              className={`flex-1 rounded-b-md flex flex-col justify-end p-1 cursor-pointer transition-all ${
                k.isBlack
                  ? 'bg-slate-950 text-slate-500 h-[65%] border border-slate-800 hover:bg-slate-800 -mx-2 z-10'
                  : 'bg-slate-200 text-black h-full border border-slate-300 hover:bg-white z-0'
              } ${note === k.note ? 'ring-2 ring-cyan-400' : ''}`}
            >
              <span className="text-[8px] font-mono font-bold text-center">{k.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Synthesis Controls vs 808 Sequencer */}
      {synthType !== 'drum_pattern' ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-[#0c101a] p-4 rounded-xl border border-slate-800 space-y-3 font-mono text-xs">
            <span className="text-xs font-bold text-cyan-400">Oscillator 1 & 2</span>
            <div>
              <label className="text-[10px] text-slate-400">Waveform 1</label>
              <select
                value={waveform1}
                onChange={(e) => setWaveform1(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded p-1 text-slate-200 mt-1"
              >
                <option value="saw">Sawtooth</option>
                <option value="square">Square / Pulse</option>
                <option value="triangle">Triangle</option>
                <option value="sine">Sine</option>
              </select>
            </div>
            <div>
              <label className="text-[10px] text-slate-400">Waveform 2</label>
              <select
                value={waveform2}
                onChange={(e) => setWaveform2(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded p-1 text-slate-200 mt-1"
              >
                <option value="square">Square / Pulse</option>
                <option value="saw">Sawtooth</option>
                <option value="sine">Sine</option>
                <option value="triangle">Triangle</option>
              </select>
            </div>
          </div>

          <div className="bg-[#0c101a] p-4 rounded-xl border border-slate-800 space-y-3 font-mono text-xs">
            <span className="text-xs font-bold text-violet-400">Filter Cutoff & Detune</span>
            <div>
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>Cutoff: {cutoffHz} Hz</span>
              </div>
              <input
                type="range"
                min="100"
                max="8000"
                step="50"
                value={cutoffHz}
                onChange={(e) => setCutoffHz(parseInt(e.target.value))}
                className="w-full h-1 bg-slate-800 rounded cursor-pointer mt-2"
              />
            </div>
            <div>
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>Detune: {detuneCents} cents</span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                value={detuneCents}
                onChange={(e) => setDetuneCents(parseInt(e.target.value))}
                className="w-full h-1 bg-slate-800 rounded cursor-pointer mt-2"
              />
            </div>
          </div>

          <div className="bg-[#0c101a] p-4 rounded-xl border border-slate-800 space-y-3 font-mono text-xs">
            <span className="text-xs font-bold text-emerald-400">Duration & Articulation</span>
            <div>
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>Note Length: {durationSec}s</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="4.0"
                step="0.1"
                value={durationSec}
                onChange={(e) => setDurationSec(parseFloat(e.target.value))}
                className="w-full h-1 bg-slate-800 rounded cursor-pointer mt-2"
              />
            </div>
          </div>

          <div className="bg-[#0c101a] p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
            <div className="font-mono text-xs text-slate-400">
              Generate 64-bit synthesized audio buffer and import to DAW timeline.
            </div>
            <button
              onClick={() => handleSynthesize(synthType)}
              disabled={generating}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-black font-extrabold text-xs shadow-lg font-mono disabled:opacity-50"
            >
              {generating ? 'Rendering Oscillator...' : 'Synthesize Note to Audio'}
            </button>
          </div>
        </div>
      ) : (
        /* 16-Step Drum Machine Grid */
        <div className="bg-[#0c101a] p-5 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-mono font-bold text-amber-300">
              808 Step Sequencer (16-Step Pattern @ 120 BPM)
            </span>
            <button
              onClick={() => handleSynthesize('drum_pattern')}
              disabled={generating}
              className="px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-mono text-xs font-bold shadow-md shadow-amber-500/20 disabled:opacity-50"
            >
              {generating ? 'Bouncing Beats...' : 'Render Drum Pattern to Track'}
            </button>
          </div>

          <div className="space-y-2">
            {['kick', 'snare', 'hihat', 'clap'].map(dType => (
              <div key={dType} className="flex items-center space-x-2">
                <span className="w-16 text-[10px] font-mono uppercase font-bold text-slate-300">
                  {dType}
                </span>
                <div className="flex-1 grid grid-cols-16 gap-1">
                  {drumSteps[dType].map((val, stepIdx) => (
                    <button
                      key={stepIdx}
                      onClick={() => toggleDrumStep(dType, stepIdx)}
                      className={`h-7 rounded text-[9px] font-mono font-bold transition-all ${
                        val
                          ? 'bg-amber-400 text-black shadow-sm shadow-amber-500/40'
                          : (stepIdx % 4 === 0 ? 'bg-slate-800 text-slate-500' : 'bg-slate-900 text-slate-600')
                      }`}
                    >
                      {stepIdx + 1}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      </>
      )}

      {/* Render Result Preview */}
      {synthResult && (
        <div className="bg-black/80 p-4 rounded-xl border border-cyan-500/40 flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-xs font-bold text-cyan-300 font-mono">
              Synthesized Audio Rendered Successfully
            </div>
            <div className="text-[10px] text-slate-400 font-mono">
              24-bit 48kHz Stereo PCM • Clip added to session
            </div>
          </div>
          <a
            href={resolveAudioUrl(synthResult.download_url)}
            download
            className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-mono text-xs font-bold transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Synth Clip WAV</span>
          </a>
        </div>
      )}

    </div>
  );
}
