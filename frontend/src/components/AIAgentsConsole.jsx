import React, { useState } from 'react';
import { apiUrl, safeFetchJson, resolveAudioUrl } from '../config/api';
import { 
  Bot, 
  Send, 
  Sparkles, 
  Wand2, 
  Layers, 
  Volume2, 
  Disc, 
  ShieldCheck, 
  Activity, 
  Sliders, 
  CheckCircle2, 
  AlertCircle,
  Download,
  Play
} from 'lucide-react';

export default function AIAgentsConsole({
  activeFile,
  tracks = [],
  onRefreshTracks
}) {
  const [nlpPrompt, setNlpPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [orchestrationResult, setOrchestrationResult] = useState(null);
  const [activeAgentResult, setActiveAgentResult] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');

  const quickPrompts = [
    "Clean background noise, separate stems, pan into 5.1 surround and master to 24-bit 96kHz FLAC.",
    "Analyze frequency balance and propose an editable multitrack mix.",
    "Tune vocals, apply 6.5kHz de-essing, and master for streaming at -14 LUFS.",
    "De-noise old recording and repair peak clipping."
  ];

  // Natural Language Orchestrator
  const handleOrchestrate = async (promptText) => {
    const textToRun = promptText || nlpPrompt;
    if (!textToRun) return;

    const fileToUse = activeFile?.file_path || (tracks[0] ? tracks[0].file_path : null);
    if (!fileToUse) {
      alert("Please import an audio file or record a track first.");
      return;
    }

    setLoading(true);
    setStatusMessage("Agent 10: Formulating Autonomous Multi-Agent Production Plan...");
    try {
      const data = await safeFetchJson(apiUrl('/api/v1/audio/orchestrate'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: textToRun, file_path: fileToUse })
      });
      setOrchestrationResult(data);
      setStatusMessage("Autonomous Production Pipeline Executed Successfully!");
    } catch (e) {
      setStatusMessage(`Error: ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Direct Agent Trigger
  const handleTriggerAgent = async (agentId, endpoint, payload) => {
    const fileToUse = activeFile?.file_path || (tracks[0] ? tracks[0].file_path : null);
    if (!fileToUse) {
      alert("Please import an audio file or record a track first.");
      return;
    }

    setLoading(true);
    setStatusMessage(`Executing ${agentId}...`);
    try {
      let data;
      if (endpoint === '/api/v1/audio/mix-proposal') {
        data = await safeFetchJson(apiUrl(endpoint), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(tracks)
        });
      } else {
        const formData = new FormData();
        formData.append('file_path', fileToUse);
        data = await safeFetchJson(apiUrl(endpoint), { method: 'POST', body: formData });
      }
      setActiveAgentResult({ agentId, data });
      setStatusMessage(`${agentId} completed successfully!`);
    } catch (e) {
      setStatusMessage(`Error: ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  const agentsList = [
    { id: 'Agent 01: Audio Analyst', role: 'Acoustic inspection, LUFS, True Peak, Phase', endpoint: '/api/v1/audio/analyze', color: 'text-cyan-400', border: 'border-cyan-800' },
    { id: 'Agent 02: Stem Separator', role: 'Harmonic/Percussive stem isolation (Vocals, Drums, Bass, Other)', endpoint: '/api/v1/audio/separate-stems', color: 'text-violet-400', border: 'border-violet-800' },
    { id: 'Agent 03: Audio Restoration', role: 'Spectral de-noise, 50/60Hz notch de-hum, de-clip', endpoint: '/api/v1/audio/restore', color: 'text-emerald-400', border: 'border-emerald-800' },
    { id: 'Agent 04: Mixing Engineer', role: 'Multitrack gain staging, pan, EQ and dynamics proposal', endpoint: '/api/v1/audio/mix-proposal', color: 'text-amber-400', border: 'border-amber-800' },
    { id: 'Agent 05: Music Arranger', role: 'BPM detection, musical key, song sections', endpoint: '/api/v1/audio/arrangement', color: 'text-pink-400', border: 'border-pink-800' },
    { id: 'Agent 06: Vocal Engineer', role: 'Pitch tuning, sibilance de-essing, opto compression', endpoint: '/api/v1/audio/vocal-process', color: 'text-indigo-400', border: 'border-indigo-800' },
    { id: 'Agent 07: Mastering Engineer', role: 'EBU R128 / ITU-R BS.1770 loudness normalizer', endpoint: '/api/v1/audio/master', color: 'text-yellow-400', border: 'border-yellow-800' },
    { id: 'Agent 08: Surround Engineer', role: '5.1 / 7.1 VBAP spatial upmix and LFE crossover', endpoint: '/api/v1/audio/surround', color: 'text-teal-400', border: 'border-teal-800' },
    { id: 'Agent 09: Quality Control', role: 'Pre-flight delivery verification & clipping check', endpoint: '/api/v1/audio/qc-audit', color: 'text-rose-400', border: 'border-rose-800' },
  ];

  return (
    <div className="flex-1 p-6 space-y-6 overflow-y-auto max-w-[1700px] mx-auto">
      
      {/* Hero Banner / Conversational Assistant */}
      <div className="bg-gradient-to-r from-violet-950/60 via-slate-900 to-cyan-950/60 p-6 rounded-2xl border border-slate-800 shadow-2xl space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-violet-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Bot className="w-6 h-6 text-black stroke-[2.5]" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white font-mono flex items-center space-x-2">
              <span>AGENT 10: PRODUCTION MANAGER</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                SOVEREIGN LLM + DETERMINISTIC ACOUSTICS
              </span>
            </h1>
            <p className="text-xs text-slate-400">
              Instruct the multi-agent system in natural language. Formulates production plans and executes them through actual DSP tools.
            </p>
          </div>
        </div>

        {/* Natural Language Prompt Input */}
        <div className="flex gap-2">
          <input
            type="text"
            value={nlpPrompt}
            onChange={(e) => setNlpPrompt(e.target.value)}
            placeholder="e.g. Clean background noise, separate stems, pan into 5.1 surround and master to 24-bit 96kHz FLAC."
            className="flex-1 bg-black/80 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 font-mono"
          />
          <button
            onClick={() => handleOrchestrate(nlpPrompt)}
            disabled={loading}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-black font-extrabold text-xs flex items-center space-x-2 shadow-lg shadow-cyan-500/20 disabled:opacity-50 transition-all shrink-0"
          >
            <Sparkles className="w-4 h-4 fill-black" />
            <span>{loading ? 'Orchestrating...' : 'Execute Autonomous Plan'}</span>
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-[10px] font-mono text-slate-500">Quick Directives:</span>
          {quickPrompts.map((q, idx) => (
            <button
              key={idx}
              onClick={() => {
                setNlpPrompt(q);
                handleOrchestrate(q);
              }}
              className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
            >
              "{q.slice(0, 48)}..."
            </button>
          ))}
        </div>

        {statusMessage && (
          <div className="text-xs font-mono text-cyan-300 bg-cyan-950/40 p-2.5 rounded-lg border border-cyan-800/60 flex items-center space-x-2">
            <Activity className="w-4 h-4 animate-spin text-cyan-400" />
            <span>{statusMessage}</span>
          </div>
        )}
      </div>

      {/* Orchestration Results Display */}
      {orchestrationResult && (
        <div className="bg-[#0b0e17] p-5 rounded-2xl border border-cyan-500/40 space-y-4 shadow-2xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="font-mono text-xs font-bold text-cyan-300 flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Production Plan Execution Complete</span>
            </span>
            <a
              href={resolveAudioUrl(orchestrationResult.download_url)}
              download
              className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold font-mono transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Final Master FLAC</span>
            </a>
          </div>

          {/* Steps Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs font-mono">
            {orchestrationResult.pipeline_executed.map((st, i) => (
              <div key={i} className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 space-y-1">
                <div className="text-[10px] text-cyan-400 font-bold uppercase">Step {st.step}</div>
                <div className="text-white font-semibold">{st.agent}</div>
                <p className="text-[10px] text-slate-400">{st.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Individual Autonomous Agents Grid */}
      <div>
        <h2 className="text-sm font-bold text-white font-mono uppercase tracking-wider mb-3">
          Specialist Autonomous Engineering Agents
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {agentsList.map(agent => (
            <div
              key={agent.id}
              className={`bg-[#0c101a] p-4 rounded-xl border ${agent.border} flex flex-col justify-between space-y-3 shadow-lg`}
            >
              <div>
                <div className={`font-mono text-xs font-bold ${agent.color}`}>
                  {agent.id}
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  {agent.role}
                </p>
              </div>

              <button
                onClick={() => handleTriggerAgent(agent.id, agent.endpoint)}
                disabled={loading}
                className="w-full py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-mono font-medium border border-slate-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Trigger {agent.id.split(':')[0]}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Single Agent Result Card */}
      {activeAgentResult && (
        <div className="bg-black/80 p-4 rounded-xl border border-slate-800 space-y-2">
          <div className="text-xs font-bold text-cyan-400 font-mono">
            {activeAgentResult.agentId} Output
          </div>
          <pre className="text-[11px] font-mono text-slate-300 bg-slate-950 p-3 rounded-lg overflow-x-auto max-h-60">
            {JSON.stringify(activeAgentResult.data, null, 2)}
          </pre>
        </div>
      )}

    </div>
  );
}
