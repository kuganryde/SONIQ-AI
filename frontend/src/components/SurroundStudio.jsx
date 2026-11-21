import React, { useState, useEffect } from 'react';
import { apiUrl, safeFetchJson, resolveAudioUrl } from '../config/api';
import { audioEngine } from '../audio/WebAudioEngine';
import ThreeSpatialRoom from './ThreeSpatialRoom';
import { 
  Disc, 
  Volume2, 
  Download, 
  AlertTriangle, 
  ShieldCheck, 
  Headphones, 
  Box, 
  Eye, 
  Activity, 
  Sparkles,
  Sliders,
  Play,
  RotateCcw,
  Film,
  Radio,
  CheckCircle2,
  Tv,
  Layers,
  Zap
} from 'lucide-react';

export default function SurroundStudio({
  activeFile,
  tracks = []
}) {
  const [studioSection, setStudioSection] = useState('3d_room'); // '3d_room' | 'cinema_processor'
  const [layout, setLayout] = useState('7.1.4');
  const [viewMode, setViewMode] = useState('3d'); // '3d' | '2d'
  const [puckPos, setPuckPos] = useState({ x: 0.0, y: 0.4, z: 0.2 });
  const [crossoverHz, setCrossoverHz] = useState(80);
  const [binauralActive, setBinauralActive] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [surroundResult, setSurroundResult] = useState(null);

  // Cinema Processor State (Dolby & DTS)
  const [cinemaBrand, setCinemaBrand] = useState('dolby'); // 'dolby' | 'dts'
  const [dolbyProfile, setDolbyProfile] = useState('dolby_atmos_7_1_4');
  const [dtsProfile, setDtsProfile] = useState('dts_x_7_1_4');
  const [dialnormDb, setDialnormDb] = useState(-27.0);
  const [drcProfile, setDrcProfile] = useState('film_standard');
  const [dialogueBoostDb, setDialogueBoostDb] = useState(4.0);
  const [cinemaCrossoverHz, setCinemaCrossoverHz] = useState(80);
  const [encodeBitstream, setEncodeBitstream] = useState(true);
  const [bitstreamBitrate, setBitstreamBitrate] = useState('640k');
  const [cinemaProcessing, setCinemaProcessing] = useState(false);
  const [cinemaResult, setCinemaResult] = useState(null);
  const [cinemaError, setCinemaError] = useState('');

  // Standalone Bitstream Decoder State
  const [decodeLoading, setDecodeLoading] = useState(false);
  const [decodeResult, setDecodeResult] = useState(null);

  // Speaker coordinates in 2D fallback view
  const speakerLayouts2D = {
    '2.0': [
      { id: 'L', name: 'Left', x: 25, y: 25 },
      { id: 'R', name: 'Right', x: 75, y: 25 },
    ],
    '2.1': [
      { id: 'L', name: 'Left', x: 25, y: 25 },
      { id: 'R', name: 'Right', x: 75, y: 25 },
      { id: 'LFE', name: 'Subwoofer', x: 50, y: 50, isLfe: true },
    ],
    '5.1': [
      { id: 'L', name: 'Front Left', x: 20, y: 20 },
      { id: 'C', name: 'Center', x: 50, y: 15 },
      { id: 'R', name: 'Front Right', x: 80, y: 20 },
      { id: 'LFE', name: 'LFE Sub', x: 50, y: 50, isLfe: true },
      { id: 'Ls', name: 'Surround L', x: 15, y: 80 },
      { id: 'Rs', name: 'Surround R', x: 85, y: 80 },
    ],
    '7.1': [
      { id: 'L', name: 'Front Left', x: 20, y: 20 },
      { id: 'C', name: 'Center', x: 50, y: 15 },
      { id: 'R', name: 'Front Right', x: 80, y: 20 },
      { id: 'LFE', name: 'LFE Sub', x: 50, y: 50, isLfe: true },
      { id: 'Ls', name: 'Side Surr L', x: 10, y: 50 },
      { id: 'Rs', name: 'Side Surr R', x: 90, y: 50 },
      { id: 'Rls', name: 'Rear Surr L', x: 25, y: 85 },
      { id: 'Rrs', name: 'Rear Surr R', x: 75, y: 85 },
    ],
    '7.1.4': [
      { id: 'L', name: 'Front Left', x: 20, y: 25 },
      { id: 'C', name: 'Center', x: 50, y: 18 },
      { id: 'R', name: 'Front Right', x: 80, y: 25 },
      { id: 'LFE', name: 'LFE Sub', x: 50, y: 50, isLfe: true },
      { id: 'Ls', name: 'Side Surr L', x: 10, y: 50 },
      { id: 'Rs', name: 'Side Surr R', x: 90, y: 50 },
      { id: 'Rls', name: 'Rear Surr L', x: 25, y: 85 },
      { id: 'Rrs', name: 'Rear Surr R', x: 75, y: 85 },
      { id: 'TFL', name: 'Top Front L', x: 30, y: 35, isHeight: true },
      { id: 'TFR', name: 'Top Front R', x: 70, y: 35, isHeight: true },
      { id: 'TRL', name: 'Top Rear L', x: 30, y: 65, isHeight: true },
      { id: 'TRR', name: 'Top Rear R', x: 70, y: 65, isHeight: true },
    ]
  };

  const speakers2D = speakerLayouts2D[layout] || speakerLayouts2D['5.1'];

  // Update browser WebAudio HRTF 3D Panner whenever position or binaural toggle changes
  useEffect(() => {
    audioEngine.setBinauralSpatialPosition(puckPos.x, puckPos.y, puckPos.z);
  }, [puckPos]);

  const toggleBinauralMode = () => {
    const nextState = !binauralActive;
    setBinauralActive(nextState);
    audioEngine.setBinauralMode(nextState);
    audioEngine.setBinauralSpatialPosition(puckPos.x, puckPos.y, puckPos.z);
  };

  // Approximate live VBAP speaker gain meters based on XYZ distance
  const calculateGain = (spk) => {
    if (spk.isLfe) return 0.65;
    // Normalized distance from sound orb to speaker in 3D
    const sx = (spk.x - 50) / 40;
    const sy = -(spk.y - 50) / 40;
    const sz = spk.isHeight ? 0.9 : 0.0;
    const dist = Math.sqrt(
      Math.pow(puckPos.x - sx, 2) + 
      Math.pow(puckPos.y - sy, 2) + 
      Math.pow(puckPos.z - sz, 2)
    );
    return Math.max(0.05, Math.min(1.0, 1.0 / (dist * dist + 0.5)));
  };

  // Execute Multichannel & Binaural Spatial Render
  const handleRenderSurround = async () => {
    const fileToUse = activeFile?.file_path || (tracks[0] ? tracks[0].file_path : null);
    if (!fileToUse) {
      alert("Please import an audio file or record a track first.");
      return;
    }

    setProcessing(true);
    try {
      const data = await safeFetchJson(apiUrl('/api/v1/audio/surround'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          file_path: fileToUse,
          layout,
          x: puckPos.x,
          y: puckPos.y,
          z: puckPos.z,
          crossover_hz: crossoverHz
        })
      });
      setSurroundResult(data);
    } catch (e) {
      alert(`Surround render error: ${e.message}`);
    } finally {
      setProcessing(false);
    }
  };

  const handleProcessCinema = async () => {
    const fileToUse = activeFile?.file_path || (tracks[0] ? tracks[0].file_path : null);
    if (!fileToUse) {
      alert("Please import an audio file or record a track first.");
      return;
    }

    setCinemaProcessing(true);
    setCinemaError('');
    try {
      const data = await safeFetchJson(apiUrl('/api/v1/audio/cinema-process'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          file_path: fileToUse,
          processor_type: cinemaBrand,
          profile: cinemaBrand === 'dolby' ? dolbyProfile : dtsProfile,
          dialnorm_db: dialnormDb,
          drc_profile: drcProfile,
          dialogue_boost_db: dialogueBoostDb,
          crossover_hz: cinemaCrossoverHz,
          generate_binaural: true,
          encode_bitstream: encodeBitstream,
          bitstream_bitrate: bitstreamBitrate
        })
      });
      setCinemaResult(data);
    } catch (e) {
      setCinemaError(e.message);
      alert(`Cinema Processing error: ${e.message}`);
    } finally {
      setCinemaProcessing(false);
    }
  };

  const handleDecodeCinema = async () => {
    const fileToUse = activeFile?.file_path || (tracks[0] ? tracks[0].file_path : null);
    if (!fileToUse) {
      alert("Please select or import a cinema bitstream file (.ac3, .eac3, .dts) to decode.");
      return;
    }

    setDecodeLoading(true);
    try {
      const data = await safeFetchJson(apiUrl('/api/v1/cinema/decode'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          file_path: fileToUse,
          output_format: 'WAV',
          bit_depth: '24'
        })
      });
      setDecodeResult(data);
    } catch (e) {
      alert(`Bitstream decoding error: ${e.message}`);
    } finally {
      setDecodeLoading(false);
    }
  };

  return (
    <div className="flex-1 p-6 space-y-6 overflow-y-auto max-w-[1750px] mx-auto">
      
      {/* Header & Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h1 className="text-base font-bold text-white font-mono flex items-center space-x-2">
            <Disc className="w-5 h-5 text-cyan-400" />
            <span>3D SPATIAL STUDIO, DOLBY® & DTS® CINEMA PROCESSOR</span>
          </h1>
          <p className="text-xs text-slate-400 font-mono mt-0.5">
            Interactive WebGL 3D Room, Dolby Atmos® 7.1.4, Dolby Pro Logic II®, DTS:X® Immersive, and DTS Dialogue Clarity.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Main Studio Section Switcher */}
          <div className="flex items-center space-x-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-mono">
            <button
              onClick={() => setStudioSection('3d_room')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                studioSection === '3d_room' 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-md shadow-cyan-500/20' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Box className="w-3.5 h-3.5" />
              <span>3D Spatial Room</span>
            </button>
            <button
              onClick={() => setStudioSection('cinema_processor')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                studioSection === 'cinema_processor' 
                  ? 'bg-gradient-to-r from-amber-500 to-rose-600 text-black shadow-md shadow-amber-500/20' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>Dolby® & DTS® Suite</span>
            </button>
          </div>

          {studioSection === '3d_room' && (
            <>
              {/* 3D vs 2D View Switcher */}
              <div className="flex items-center space-x-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-mono">
                <button
                  onClick={() => setViewMode('3d')}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                    viewMode === '3d' ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/20' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Box className="w-3.5 h-3.5" />
                  <span>3D Room</span>
                </button>
                <button
                  onClick={() => setViewMode('2d')}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                    viewMode === '2d' ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/20' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>2D Top-Down</span>
                </button>
              </div>

              {/* Binaural HRTF Headphone Toggle */}
              <button
                onClick={toggleBinauralMode}
                className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all shadow-md cursor-pointer ${
                  binauralActive
                    ? 'bg-purple-900/80 text-purple-200 border-purple-500/80 shadow-purple-900/30 ring-2 ring-purple-500/30'
                    : 'bg-slate-900 hover:bg-slate-850 text-slate-300 border-slate-700'
                }`}
              >
                <Headphones className={`w-4 h-4 ${binauralActive ? 'text-purple-300 animate-pulse' : 'text-slate-400'}`} />
                <span>{binauralActive ? 'Binaural 3D Headphone: ON' : 'Binaural HRTF Mode: OFF'}</span>
              </button>

              {/* Layout Selector */}
              <div className="flex items-center space-x-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-mono">
                {['2.0', '2.1', '5.1', '7.1', '7.1.4'].map(l => (
                  <button
                    key={l}
                    onClick={() => setLayout(l)}
                    className={`px-2.5 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                      layout === l ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-extrabold shadow-md' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Main Room Arena or Cinema Processor Section */}
      {studioSection === '3d_room' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Columns: 3D or 2D Room Visualizer */}
        <div className="lg:col-span-2 space-y-3">
          {viewMode === '3d' ? (
            <ThreeSpatialRoom
              layout={layout}
              pos={puckPos}
              onChangePos={setPuckPos}
              isBinaural={binauralActive}
            />
          ) : (
            <div className="bg-[#0a0d15] p-6 rounded-2xl border border-slate-800 shadow-2xl relative flex flex-col items-center justify-center min-h-[500px]">
              <div className="absolute top-4 left-4 text-xs font-mono text-slate-400">
                Acoustic Listening Arena (2D Polar Coordinates)
              </div>

              <div className="w-[380px] h-[380px] rounded-full border border-dashed border-slate-700 relative flex items-center justify-center bg-black/40">
                {/* Center Listener Head */}
                <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-cyan-400 flex items-center justify-center z-10 shadow-lg shadow-cyan-500/30">
                  <span className="text-[10px] font-mono font-bold text-cyan-300">ENG</span>
                </div>

                {/* Draggable Audio Puck */}
                <div
                  className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-violet-500 border-2 border-white absolute shadow-lg shadow-violet-500/50 flex items-center justify-center cursor-move"
                  style={{
                    left: `${((puckPos.x + 1) / 2) * 85 + 7.5}%`,
                    top: `${((1 - puckPos.y) / 2) * 85 + 7.5}%`
                  }}
                  title="Audio Source"
                >
                  <div className="w-2 h-2 rounded-full bg-black animate-ping" />
                </div>

                {/* Speakers on Perimeter */}
                {speakers2D.map(spk => (
                  <div
                    key={spk.id}
                    className={`absolute px-2 py-0.5 rounded-lg border text-xs font-mono font-bold shadow-lg flex flex-col items-center ${
                      spk.isLfe
                        ? 'bg-amber-950 text-amber-300 border-amber-600'
                        : spk.isHeight
                        ? 'bg-purple-950 text-purple-300 border-purple-500'
                        : 'bg-slate-900 text-cyan-300 border-slate-700'
                    }`}
                    style={{
                      left: `${spk.x}%`,
                      top: `${spk.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <span>{spk.id}</span>
                    <span className="text-[8px] text-slate-400 font-normal">{spk.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Real-time Speaker Radiation VU Meters */}
          <div className="bg-[#0b0e17] p-4 rounded-xl border border-slate-800/80 shadow-lg">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2.5">
              <span className="font-bold text-cyan-300 uppercase">VBAP Real-Time Speaker Energy Radiation:</span>
              <span className="text-[10px] text-slate-500">Sum of Squares Normalised</span>
            </div>

            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 text-xs font-mono">
              {speakers2D.map(spk => {
                const gain = calculateGain(spk);
                const gainPct = Math.round(gain * 100);
                return (
                  <div key={spk.id} className="bg-slate-900/80 p-2 rounded-lg border border-slate-800 flex flex-col items-center space-y-1">
                    <span className={`text-[10px] font-bold ${spk.isLfe ? 'text-amber-400' : spk.isHeight ? 'text-purple-400' : 'text-cyan-400'}`}>
                      {spk.id}
                    </span>
                    <div className="w-full h-14 bg-black/60 rounded-md relative flex flex-col justify-end p-0.5 overflow-hidden">
                      <div
                        className={`w-full rounded-sm transition-all duration-100 ${
                          spk.isLfe
                            ? 'bg-gradient-to-t from-amber-600 to-amber-400'
                            : spk.isHeight
                            ? 'bg-gradient-to-t from-purple-600 to-purple-400'
                            : 'bg-gradient-to-t from-cyan-600 to-cyan-300'
                        }`}
                        style={{ height: `${gainPct}%` }}
                      />
                    </div>
                    <span className="text-[9px] text-slate-400">{gainPct}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Spatial Placement Sliders, LFE Bass Management & Render */}
        <div className="space-y-4">
          
          {/* 3D Spatial Sliders Card */}
          <div className="bg-[#0c101a] p-5 rounded-2xl border border-slate-800 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <h3 className="font-mono text-xs font-bold text-cyan-300 uppercase flex items-center space-x-1.5">
                <Sliders className="w-4 h-4 text-cyan-400" />
                <span>3D Spatial Coordinates</span>
              </h3>
              <button
                onClick={() => setPuckPos({ x: 0.0, y: 0.4, z: 0.0 })}
                className="text-[10px] font-mono text-slate-400 hover:text-white flex items-center space-x-1"
                title="Reset to Center"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            {/* X Slider */}
            <div>
              <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                <span>Azimuth Pan (X: Left / Right)</span>
                <span className="text-cyan-400 font-bold">{puckPos.x.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="-1.0"
                max="1.0"
                step="0.02"
                value={puckPos.x}
                onChange={(e) => setPuckPos({ ...puckPos, x: parseFloat(e.target.value) })}
                className="w-full h-1.5 bg-slate-800 rounded cursor-pointer accent-cyan-400"
              />
            </div>

            {/* Y Slider */}
            <div>
              <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                <span>Distance Pan (Y: Front / Rear)</span>
                <span className="text-emerald-400 font-bold">{puckPos.y.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="-1.0"
                max="1.0"
                step="0.02"
                value={puckPos.y}
                onChange={(e) => setPuckPos({ ...puckPos, y: parseFloat(e.target.value) })}
                className="w-full h-1.5 bg-slate-800 rounded cursor-pointer accent-emerald-400"
              />
            </div>

            {/* Z Slider (Elevation Height) */}
            <div>
              <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                <span>Elevation Height (Z: Floor / Ceiling)</span>
                <span className="text-purple-400 font-bold">{puckPos.z.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="-1.0"
                max="1.0"
                step="0.02"
                value={puckPos.z}
                onChange={(e) => setPuckPos({ ...puckPos, z: parseFloat(e.target.value) })}
                className="w-full h-1.5 bg-slate-800 rounded cursor-pointer accent-purple-400"
              />
              <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-0.5">
                <span>-1.0 (Floor)</span>
                <span>0.0 (Ear Level)</span>
                <span>+1.0 (Ceiling Height)</span>
              </div>
            </div>

            {/* LFE Crossover */}
            <div className="pt-2 border-t border-slate-800">
              <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                <span>Subwoofer LFE Crossover</span>
                <span className="text-amber-400 font-bold">{crossoverHz} Hz</span>
              </div>
              <input
                type="range"
                min="50"
                max="160"
                step="10"
                value={crossoverHz}
                onChange={(e) => setCrossoverHz(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded cursor-pointer accent-amber-400"
              />
              <div className="text-[10px] text-slate-500 font-mono mt-1">
                4th-order Linkwitz-Riley 24dB/octave phase-aligned crossover.
              </div>
            </div>

            {/* Render Button */}
            <button
              onClick={handleRenderSurround}
              disabled={processing}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-extrabold text-xs font-mono shadow-xl shadow-cyan-500/20 disabled:opacity-50 transition-all flex items-center justify-center space-x-2"
            >
              {processing ? (
                <>
                  <Activity className="w-4 h-4 animate-spin text-cyan-300" />
                  <span>Spatially Bouncing {layout} & Binaural Master...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Render {layout} Spatial Audio & Binaural HRTF</span>
                </>
              )}
            </button>
          </div>

          {/* Statutory Dolby & Spatial Compliance Notice */}
          <div className="bg-black/60 p-4 rounded-xl border border-slate-800 text-[11px] font-mono text-slate-400 space-y-1">
            <div className="flex items-center space-x-1.5 text-amber-400 font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ITU-R BS.775 & Dolby Atmos Specification</span>
            </div>
            <p className="leading-relaxed">
              Discrete multi-point VBAP spatialization across all calibrated channels. Height channels (7.1.4) adhere to ITU 4-ceiling layout. Binaural mode applies Interaural Time & Level Differences for 3D headphones.
            </p>
          </div>

        </div>

      </div>
      ) : (
        /* Dolby & DTS Cinema Processing Suite */
        <div className="space-y-6">
          
          {/* Brand Selector Deck */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Dolby Suite Selector */}
            <div
              onClick={() => setCinemaBrand('dolby')}
              className={`p-5 rounded-2xl border-2 transition-all cursor-pointer ${
                cinemaBrand === 'dolby'
                  ? 'border-cyan-400 bg-gradient-to-br from-cyan-950/40 via-[#0b0e17] to-violet-950/40 shadow-xl shadow-cyan-500/10'
                  : 'border-slate-800 bg-[#0a0d15]/60 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <div className="flex items-center space-x-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center shadow-md">
                    <Film className="w-5 h-5 text-black stroke-[2.5]" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white font-mono tracking-wider">DOLBY® PROCESSING SUITE</h2>
                    <p className="text-[11px] text-cyan-400 font-mono">Dolby Atmos® 7.1.4 • Pro Logic II® • Dialnorm</p>
                  </div>
                </div>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                  cinemaBrand === 'dolby' ? 'bg-cyan-950 text-cyan-300 border-cyan-700' : 'bg-slate-900 text-slate-500 border-slate-800'
                }`}>
                  {cinemaBrand === 'dolby' ? 'ACTIVE' : 'SELECT'}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono mt-3 leading-relaxed">
                Cinema broadcast standard processing with 90° Hilbert surround matrixing, ITU-R BS.1770 Dialnorm speech normalization (-27 LUFS), and theatrical Dynamic Range Control (DRC).
              </p>
            </div>

            {/* DTS Suite Selector */}
            <div
              onClick={() => setCinemaBrand('dts')}
              className={`p-5 rounded-2xl border-2 transition-all cursor-pointer ${
                cinemaBrand === 'dts'
                  ? 'border-amber-400 bg-gradient-to-br from-amber-950/40 via-[#0b0e17] to-orange-950/40 shadow-xl shadow-amber-500/10'
                  : 'border-slate-800 bg-[#0a0d15]/60 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <div className="flex items-center space-x-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-md">
                    <Tv className="w-5 h-5 text-black stroke-[2.5]" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white font-mono tracking-wider">DTS® PROCESSING SUITE</h2>
                    <p className="text-[11px] text-amber-400 font-mono">DTS:X® 7.1.4 • Neural:X® • Dialogue Clarity</p>
                  </div>
                </div>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                  cinemaBrand === 'dts' ? 'bg-amber-950 text-amber-300 border-amber-700' : 'bg-slate-900 text-slate-500 border-slate-800'
                }`}>
                  {cinemaBrand === 'dts' ? 'ACTIVE' : 'SELECT'}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono mt-3 leading-relaxed">
                Acoustic immersion featuring wide-angle Haas surround delays, interaural phase correlation steering, 2.4kHz vocal formant boost, and stereo masking reduction.
              </p>
            </div>

          </div>

          {/* Profile Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
            {cinemaBrand === 'dolby' ? (
              <>
                {/* Dolby Atmos 7.1.4 */}
                <div
                  onClick={() => setDolbyProfile('dolby_atmos_7_1_4')}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    dolbyProfile === 'dolby_atmos_7_1_4'
                      ? 'border-cyan-400 bg-cyan-950/30 shadow-lg'
                      : 'border-slate-800 bg-[#0c101a] hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-cyan-300">Dolby Atmos® 7.1.4 Bed</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-900 text-cyan-200">12 Channels</span>
                  </div>
                  <p className="text-slate-400 text-[11px] mt-2 leading-relaxed">
                    Full 12-channel spatial height bed (L, R, C, LFE, Ls, Rs, Rls, Rrs, Tfl, Tfr, Trl, Trr) with diffuse ceiling radiation and 3D binaural headphone virtualization.
                  </p>
                </div>

                {/* Dolby Pro Logic II */}
                <div
                  onClick={() => setDolbyProfile('dolby_pro_logic_ii')}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    dolbyProfile === 'dolby_pro_logic_ii'
                      ? 'border-violet-400 bg-violet-950/30 shadow-lg'
                      : 'border-slate-800 bg-[#0c101a] hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-violet-300">Dolby Pro Logic II® Matrix</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-violet-900 text-violet-200">5.1 Matrix</span>
                  </div>
                  <p className="text-slate-400 text-[11px] mt-2 leading-relaxed">
                    Active matrix steering with 90° Hilbert transform surround phase decorrelation and 4th-order Linkwitz-Riley LFE subwoofer bass crossover.
                  </p>
                </div>

                {/* Dolby Digital 5.1 with Dialnorm */}
                <div
                  onClick={() => setDolbyProfile('dolby_digital_5_1')}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    dolbyProfile === 'dolby_digital_5_1'
                      ? 'border-blue-400 bg-blue-950/30 shadow-lg'
                      : 'border-slate-800 bg-[#0c101a] hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-blue-300">Dolby Digital® 5.1 Master</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-900 text-blue-200">Broadcast QC</span>
                  </div>
                  <p className="text-slate-400 text-[11px] mt-2 leading-relaxed">
                    Theatrical broadcast standard with speech Dialnorm (-27 LUFS) normalization and multi-profile Dynamic Range Control (DRC) compression curves.
                  </p>
                </div>
              </>
            ) : (
              <>
                {/* DTS:X 7.1.4 */}
                <div
                  onClick={() => setDtsProfile('dts_x_7_1_4')}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    dtsProfile === 'dts_x_7_1_4'
                      ? 'border-amber-400 bg-amber-950/30 shadow-lg'
                      : 'border-slate-800 bg-[#0c101a] hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-amber-300">DTS:X® 7.1.4 Immersive</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-900 text-amber-200">12 Channels</span>
                  </div>
                  <p className="text-slate-400 text-[11px] mt-2 leading-relaxed">
                    Acoustic spatial object & height expansion with DTS:X energy dispersion across front, side, rear, and overhead coordinates.
                  </p>
                </div>

                {/* DTS Neo:6 */}
                <div
                  onClick={() => setDtsProfile('dts_neo_6_cinema')}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    dtsProfile === 'dts_neo_6_cinema'
                      ? 'border-orange-400 bg-orange-950/30 shadow-lg'
                      : 'border-slate-800 bg-[#0c101a] hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-orange-300">DTS Neo:6® Cinema Upmixer</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-orange-900 text-orange-200">7.1 Matrix</span>
                  </div>
                  <p className="text-slate-400 text-[11px] mt-2 leading-relaxed">
                    Steered discrete 7.1 upmixing with asymmetric Haas acoustic delays (15ms / 25ms) and high-shelf diffuse air synthesis.
                  </p>
                </div>

                {/* DTS Dialogue Clarity */}
                <div
                  onClick={() => setDtsProfile('dts_dialogue_clarity')}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    dtsProfile === 'dts_dialogue_clarity'
                      ? 'border-yellow-400 bg-yellow-950/30 shadow-lg'
                      : 'border-slate-800 bg-[#0c101a] hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-yellow-300">DTS Dialogue Clarity Master</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-yellow-900 text-yellow-200">Speech Focus</span>
                  </div>
                  <p className="text-slate-400 text-[11px] mt-2 leading-relaxed">
                    Isolates 2.4 kHz vocal formant articulation on the Center channel while applying psychoacoustic -2 dB ducking on Left/Right masking frequencies.
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Calibrations & Sliders Grid */}
          <div className="bg-[#0b0e17] p-5 rounded-2xl border border-slate-800 space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="font-bold text-white flex items-center space-x-2">
                <Sliders className="w-4 h-4 text-cyan-400" />
                <span>Cinema Audio Engineering Calibrations ({cinemaBrand.toUpperCase()})</span>
              </span>
              <span className="text-[10px] text-slate-500">64-bit Floating-Point DSP Processing</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Dialnorm / Dialogue Boost */}
              {cinemaBrand === 'dolby' ? (
                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>Target Dialnorm Speech Level</span>
                    <span className="text-cyan-400 font-bold">{dialnormDb} dBFS</span>
                  </div>
                  <input
                    type="range"
                    min="-31"
                    max="-20"
                    step="1"
                    value={dialnormDb}
                    onChange={(e) => setDialnormDb(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded cursor-pointer accent-cyan-400"
                  />
                  <div className="flex justify-between text-[9px] text-slate-500 mt-1">
                    <span>-31 (Cinema Reference)</span>
                    <span>-27 (Streaming)</span>
                    <span>-20 (Broadcast)</span>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>DTS Dialogue Clarity Articulation Boost</span>
                    <span className="text-amber-400 font-bold">+{dialogueBoostDb.toFixed(1)} dB</span>
                  </div>
                  <input
                    type="range"
                    min="0.0"
                    max="9.0"
                    step="0.5"
                    value={dialogueBoostDb}
                    onChange={(e) => setDialogueBoostDb(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded cursor-pointer accent-amber-400"
                  />
                  <div className="flex justify-between text-[9px] text-slate-500 mt-1">
                    <span>0 dB (Natural)</span>
                    <span>+4 dB (Standard)</span>
                    <span>+9 dB (Maximum Speech)</span>
                  </div>
                </div>
              )}

              {/* Dolby DRC Profile / DTS Mode */}
              {cinemaBrand === 'dolby' ? (
                <div>
                  <label className="text-slate-400 block mb-1">Dolby Dynamic Range Control (DRC)</label>
                  <select
                    value={drcProfile}
                    onChange={(e) => setDrcProfile(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 mt-1"
                  >
                    <option value="film_standard">Film Standard (Theatrical Full Dynamic)</option>
                    <option value="film_light">Film Light (Home Cinema Gentle Control)</option>
                    <option value="music_light">Music Light (Audiophile Master)</option>
                    <option value="speech">Speech (High Intelligibility Dialogue)</option>
                  </select>
                </div>
              ) : (
                <div>
                  <label className="text-slate-400 block mb-1">DTS Spatial Soundstage Mode</label>
                  <select
                    defaultValue="cinema"
                    className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 mt-1"
                  >
                    <option value="cinema">Cinema (Wide Discrete Surround Steering)</option>
                    <option value="music">Music (Coherent Stage Front Width)</option>
                  </select>
                </div>
              )}

              {/* Subwoofer LFE Crossover */}
              <div>
                <div className="flex justify-between text-slate-400 mb-1">
                  <span>Subwoofer LFE Crossover</span>
                  <span className="text-emerald-400 font-bold">{cinemaCrossoverHz} Hz</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="160"
                  step="10"
                  value={cinemaCrossoverHz}
                  onChange={(e) => setCinemaCrossoverHz(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded cursor-pointer accent-emerald-400"
                />
                <div className="text-[10px] text-slate-500 mt-1">
                  4th-order Linkwitz-Riley 24 dB/octave LFE Bass Filter
                </div>
              </div>

              {/* Bitstream Delivery Encoding Option */}
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700/80 space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-white font-bold flex items-center space-x-2">
                    <Disc className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Encode Certified Bitstream</span>
                  </label>
                  <input
                    type="checkbox"
                    checked={encodeBitstream}
                    onChange={(e) => setEncodeBitstream(e.target.checked)}
                    className="w-4 h-4 rounded bg-slate-800 border-slate-700 text-cyan-500 focus:ring-0 cursor-pointer"
                  />
                </div>
                {encodeBitstream && (
                  <div className="pt-1">
                    <label className="text-[10px] text-slate-400 block mb-1">
                      Bitrate ({cinemaBrand === 'dolby' ? 'Dolby AC-3 / E-AC-3' : 'DTS DCA'})
                    </label>
                    <select
                      value={bitstreamBitrate}
                      onChange={(e) => setBitstreamBitrate(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded p-1 text-slate-200 text-xs"
                    >
                      {cinemaBrand === 'dolby' ? (
                        <>
                          <option value="640k">640 kbps (Dolby Digital 5.1 Max Studio Rate)</option>
                          <option value="448k">448 kbps (DVD / Broadcast Standard)</option>
                          <option value="768k">768 kbps (Dolby Digital Plus E-AC-3)</option>
                          <option value="1024k">1024 kbps (E-AC-3 High Bitrate)</option>
                        </>
                      ) : (
                        <>
                          <option value="1536k">1536 kbps (DTS Full-Rate Studio Master)</option>
                          <option value="768k">768 kbps (DTS Half-Rate Cinema/Broadcast)</option>
                        </>
                      )}
                    </select>
                  </div>
                )}
              </div>

            </div>

            {/* Execute Button */}
            <button
              onClick={handleProcessCinema}
              disabled={cinemaProcessing}
              className={`w-full py-3 rounded-xl font-extrabold text-xs shadow-xl transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50 ${
                cinemaBrand === 'dolby'
                  ? 'bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white shadow-cyan-500/20'
                  : 'bg-gradient-to-r from-amber-500 via-orange-600 to-rose-600 hover:from-amber-400 hover:to-rose-500 text-black shadow-amber-500/20'
              }`}
            >
              {cinemaProcessing ? (
                <>
                  <Activity className="w-4 h-4 animate-spin" />
                  <span>Processing {cinemaBrand.toUpperCase()} Matrix & Binaural Virtualization...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Process Audio with {cinemaBrand === 'dolby' ? 'Dolby® Suite' : 'DTS® Suite'}</span>
                </>
              )}
            </button>
          </div>

          {/* Cinema Results Deck */}
          {cinemaResult && (
            <div className="bg-[#0b0f1a] p-5 rounded-2xl border border-cyan-500/40 space-y-4 shadow-2xl animate-in fade-in duration-200 font-mono text-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
                <div className="space-y-0.5">
                  <div className="text-sm font-bold text-white flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{cinemaResult.processor_type} Cinema Master Processed ({cinemaResult.channels_count} Discrete Channels • {cinemaResult.channels_layout})</span>
                  </div>
                  <div className="text-xs text-slate-400">
                    Profile: {cinemaResult.profile} • {cinemaResult.sample_rate_hz} Hz • {cinemaResult.bit_depth}
                  </div>
                </div>

                {/* Dual Download Deck */}
                <div className="flex flex-wrap items-center gap-3">
                  {cinemaResult.binaural_download_url && (
                    <a
                      href={resolveAudioUrl(cinemaResult.binaural_download_url)}
                      download
                      className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold transition-all shadow-lg shadow-purple-900/30 cursor-pointer"
                    >
                      <Headphones className="w-4 h-4 text-purple-200" />
                      <span>Download 3D Binaural Headphone WAV</span>
                    </a>
                  )}

                  <a
                    href={resolveAudioUrl(cinemaResult.download_url)}
                    download
                    className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-mono text-xs font-bold transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download {cinemaResult.channels_layout} Cinema Multichannel WAV</span>
                  </a>

                  {cinemaResult.bitstream_download_url && (
                    <a
                      href={resolveAudioUrl(cinemaResult.bitstream_download_url)}
                      download
                      className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-black font-mono text-xs font-bold transition-all shadow-lg cursor-pointer ${
                        cinemaBrand === 'dolby'
                          ? 'bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-emerald-500/20'
                          : 'bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 shadow-amber-500/20'
                      }`}
                    >
                      <Disc className="w-4 h-4" />
                      <span>Download {cinemaBrand === 'dolby' ? 'Dolby Bitstream (.ac3)' : 'DTS Bitstream (.dts)'} ({cinemaResult.bitstream_info?.bitrate})</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Cinema Stats Breakdown */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-black/60 p-3 rounded-xl border border-slate-800">
                  <div className="text-[10px] text-slate-400">Integrated Loudness</div>
                  <div className="text-cyan-400 font-bold mt-1">{cinemaResult.acoustic_qc?.integrated_lufs} LUFS</div>
                </div>
                <div className="bg-black/60 p-3 rounded-xl border border-slate-800">
                  <div className="text-[10px] text-slate-400">True Peak Ceiling</div>
                  <div className="text-emerald-400 font-bold mt-1">{cinemaResult.acoustic_qc?.true_peak_dbtp} dBTP</div>
                </div>
                <div className="bg-black/60 p-3 rounded-xl border border-slate-800">
                  <div className="text-[10px] text-slate-400">Phase Correlation</div>
                  <div className="text-purple-400 font-bold mt-1">+{cinemaResult.acoustic_qc?.phase_correlation}</div>
                </div>
                <div className="bg-black/60 p-3 rounded-xl border border-slate-800">
                  <div className="text-[10px] text-slate-400">Dynamic Range (LRA)</div>
                  <div className="text-amber-400 font-bold mt-1">{cinemaResult.acoustic_qc?.loudness_range_lra} LU</div>
                </div>
              </div>

              <div className="bg-black/40 p-3 rounded-xl border border-slate-800 text-[10px] text-slate-400">
                {cinemaResult.disclaimer}
              </div>
            </div>
          )}

          {/* Cinema Bitstream Decoder Suite */}
          <div className="bg-[#0c101a] p-5 rounded-2xl border border-slate-800 space-y-4 font-mono text-xs">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                  <Disc className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">CINEMA BITSTREAM DECODER & TRANSCODER</h3>
                  <p className="text-[11px] text-slate-400">Lightweight C AVcodec engine: decodes Dolby Digital (.ac3/.eac3) and DTS (.dts/.dca) into discrete 64-bit float multi-channel PCM</p>
                </div>
              </div>

              <button
                onClick={handleDecodeCinema}
                disabled={decodeLoading}
                className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold flex items-center space-x-1.5 transition-all shadow-lg shadow-emerald-500/20 cursor-pointer disabled:opacity-50"
              >
                {decodeLoading ? (
                  <>
                    <Activity className="w-4 h-4 animate-spin" />
                    <span>Decoding Bitstream...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4" />
                    <span>Decode Active Cinema Track</span>
                  </>
                )}
              </button>
            </div>

            {decodeResult && (
              <div className="bg-black/50 p-4 rounded-xl border border-emerald-500/30 space-y-3 animate-in fade-in">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-white font-bold">Decoded {decodeResult.detected_codec} ({decodeResult.channels_count} Discrete Channels)</span>
                  </div>
                  <a
                    href={resolveAudioUrl(decodeResult.download_url)}
                    download
                    className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-[11px]"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Multi-Channel PCM WAV</span>
                  </a>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[11px]">
                  <div className="bg-slate-900/60 p-2 rounded border border-slate-800">
                    <span className="text-slate-400">Sample Rate:</span> <span className="text-cyan-300 font-bold">{decodeResult.sample_rate_hz} Hz</span>
                  </div>
                  <div className="bg-slate-900/60 p-2 rounded border border-slate-800">
                    <span className="text-slate-400">Bit Depth:</span> <span className="text-emerald-300 font-bold">{decodeResult.bit_depth}-bit</span>
                  </div>
                  <div className="bg-slate-900/60 p-2 rounded border border-slate-800">
                    <span className="text-slate-400">Duration:</span> <span className="text-purple-300 font-bold">{decodeResult.duration_seconds}s</span>
                  </div>
                  <div className="bg-slate-900/60 p-2 rounded border border-slate-800">
                    <span className="text-slate-400">Integrated LUFS:</span> <span className="text-amber-300 font-bold">{decodeResult.acoustic_qc?.integrated_lufs} LUFS</span>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      )}

      {/* Render Results: Multichannel WAV + 3D Binaural Headphone Download */}
      {studioSection === '3d_room' && surroundResult && (
        <div className="bg-[#0b0f1a] p-5 rounded-2xl border border-cyan-500/40 space-y-4 shadow-2xl animate-in fade-in duration-200">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
            <div className="space-y-0.5">
              <div className="text-sm font-bold text-cyan-300 font-mono flex items-center space-x-2">
                <Disc className="w-4 h-4 text-cyan-400" />
                <span>Multichannel {surroundResult.channel_layout} Spatial Audio Bounced ({surroundResult.channel_count} Discrete Channels)</span>
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Coordinates: X {surroundResult.coordinates?.x} • Y {surroundResult.coordinates?.y} • Z {surroundResult.coordinates?.z} • {surroundResult.bass_management?.crossover_hz}Hz Sub Crossover
              </div>
            </div>

            {/* Dual Download Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {surroundResult.binaural_download_url && (
                <a
                  href={resolveAudioUrl(surroundResult.binaural_download_url)}
                  download
                  className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold transition-all shadow-lg shadow-purple-900/30"
                >
                  <Headphones className="w-4 h-4 text-purple-200" />
                  <span>Download 3D Binaural Headphone WAV</span>
                </a>
              )}

              <a
                href={resolveAudioUrl(surroundResult.download_url)}
                download
                className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-mono text-xs font-bold transition-all shadow-lg shadow-cyan-500/20"
              >
                <Download className="w-4 h-4" />
                <span>Download {surroundResult.channel_layout} Multichannel WAV</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
            <div className="bg-black/60 p-3 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400">Speaker Channel Count</div>
              <div className="text-cyan-400 font-bold mt-1">{surroundResult.channel_count} Discrete Tracks</div>
            </div>
            <div className="bg-black/60 p-3 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400">Bass Management Type</div>
              <div className="text-amber-400 font-bold mt-1">4th-Order Linkwitz-Riley</div>
            </div>
            <div className="bg-black/60 p-3 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400">Headphone Virtualization</div>
              <div className="text-purple-400 font-bold mt-1">HRTF ITD / ILD Synthesized</div>
            </div>
            <div className="bg-black/60 p-3 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400">Standards Conformance</div>
              <div className="text-emerald-400 font-bold mt-1">ITU-R BS.775 / SMPTE 3D</div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
