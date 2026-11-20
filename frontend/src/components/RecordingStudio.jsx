import React, { useState } from 'react';
import { Mic, Circle, Square, Play, Plus, CheckCircle2, Volume2 } from 'lucide-react';
import { audioEngine } from '../audio/WebAudioEngine';

export default function RecordingStudio({
  onAddTrackFromAudio
}) {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedTakes, setRecordedTakes] = useState([]);
  const [recordingSeconds, setRecordingSeconds] = useState(0);

  const handleStartRecording = async () => {
    try {
      await audioEngine.startRecording();
      setIsRecording(true);
      setRecordingSeconds(0);
      const interval = setInterval(() => {
        setRecordingSeconds(prev => prev + 1);
      }, 1000);
      window._recInterval = interval;
    } catch (e) {
      alert(`Recording error: ${e.message}. Ensure microphone permissions are granted.`);
    }
  };

  const handleStopRecording = async () => {
    if (!isRecording) return;
    clearInterval(window._recInterval);
    setIsRecording(false);
    const blob = await audioEngine.stopRecording();
    if (blob) {
      const takeId = `Take_${recordedTakes.length + 1}`;
      const url = URL.createObjectURL(blob);
      const newTake = {
        id: takeId,
        name: `Microphone_${takeId}`,
        url,
        duration: recordingSeconds,
        blob
      };
      setRecordedTakes(prev => [newTake, ...prev]);
    }
  };

  return (
    <div className="flex-1 p-6 space-y-6 overflow-y-auto max-w-[1700px] mx-auto">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div>
          <h1 className="text-base font-bold text-white font-mono flex items-center space-x-2">
            <Mic className="w-5 h-5 text-rose-500" />
            <span>LIVE MICROPHONE & AUDIO INTERFACE RECORDING STUDIO</span>
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            Low-latency audio capture via MediaDevices and AudioWorklet with non-destructive take comping.
          </p>
        </div>
      </div>

      {/* Recording Control Deck */}
      <div className="bg-[#0b0e17] p-8 rounded-2xl border border-slate-800 shadow-2xl flex flex-col items-center justify-center space-y-6">
        <div className="text-4xl font-mono font-bold text-white tracking-widest">
          {String(Math.floor(recordingSeconds / 60)).padStart(2, '0')}:
          {String(recordingSeconds % 60).padStart(2, '0')}
        </div>

        {/* Big Record Button */}
        <div className="flex items-center space-x-4">
          {!isRecording ? (
            <button
              onClick={handleStartRecording}
              className="px-8 py-3.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-mono font-bold text-sm flex items-center space-x-2 shadow-xl shadow-rose-600/30 transition-all"
            >
              <Circle className="w-5 h-5 fill-current animate-pulse" />
              <span>Start Microphone Recording</span>
            </button>
          ) : (
            <button
              onClick={handleStopRecording}
              className="px-8 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono font-bold text-sm flex items-center space-x-2 border border-slate-700 transition-all"
            >
              <Square className="w-5 h-5 fill-current text-rose-500" />
              <span>Stop & Save Recording Take</span>
            </button>
          )}
        </div>

        <p className="text-xs font-mono text-slate-500">
          Capture 24-bit PCM mono or stereo microphone audio non-destructively.
        </p>
      </div>

      {/* Recorded Takes List */}
      <div className="space-y-3">
        <h3 className="font-mono text-xs font-bold text-slate-300 uppercase">
          Captured Audio Takes ({recordedTakes.length})
        </h3>

        {recordedTakes.length === 0 ? (
          <div className="p-8 text-center bg-[#0c101a] rounded-xl border border-slate-800 text-xs font-mono text-slate-500">
            No microphone takes recorded yet in this session.
          </div>
        ) : (
          <div className="space-y-2">
            {recordedTakes.map(take => (
              <div
                key={take.id}
                className="bg-[#0c101a] p-3 rounded-xl border border-slate-800 flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-950 flex items-center justify-center text-rose-400 font-mono text-xs font-bold border border-rose-800">
                    REC
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-white">{take.name}</div>
                    <div className="text-[10px] font-mono text-slate-400">{take.duration} seconds duration</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <audio src={take.url} controls className="h-8 w-48" />
                  <button
                    onClick={() => {
                      if (onAddTrackFromAudio) {
                        onAddTrackFromAudio({
                          name: take.name,
                          file_path: take.url,
                          category: 'Recording',
                          color: '#f43f5e'
                        });
                      }
                    }}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-cyan-600/30 text-cyan-300 border border-cyan-500/50 hover:bg-cyan-600/40 text-xs font-mono font-bold transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add to DAW Timeline</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
