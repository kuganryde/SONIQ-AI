import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TransportBar from './components/TransportBar';
import DAWTimeline from './components/DAWTimeline';
import MixerConsole from './components/MixerConsole';
import AIAgentsConsole from './components/AIAgentsConsole';
import DSPRack from './components/DSPRack';
import SurroundStudio from './components/SurroundStudio';
import SynthesizerStudio from './components/SynthesizerStudio';
import MasteringSuite from './components/MasteringSuite';
import AudioAnalyzer from './components/AudioAnalyzer';
import RecordingStudio from './components/RecordingStudio';
import ExportCenter from './components/ExportCenter';
import QuickFXModal from './components/QuickFXModal';
import QuickFXBanner from './components/QuickFXBanner';
import { audioEngine } from './audio/WebAudioEngine';
import { apiUrl, safeFetchJson, resolveAudioUrl, getApiBase, setApiBaseOverride } from './config/api';

export default function App() {
  const [activeTab, setActiveTab] = useState('studio');
  const [tracks, setTracks] = useState([]);
  const [activeTrackId, setActiveTrackId] = useState(null);
  const [activeFile, setActiveFile] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(120);
  const [loadingDemo, setLoadingDemo] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [quickFXTrack, setQuickFXTrack] = useState(null);
  const [isQuickFXOpen, setIsQuickFXOpen] = useState(false);
  const [showQuickBanner, setShowQuickBanner] = useState(true);

  // Auto-load demo project on initial mount so user has immediate playable audio
  useEffect(() => {
    handleLoadDemo();
  }, []);

  const handleLoadDemo = async () => {
    setLoadingDemo(true);
    setErrorMessage('');
    try {
      const data = await safeFetchJson(apiUrl('/api/v1/projects/demo'));
      setTracks(data.tracks || []);
      setBpm(data.tempo_bpm || 120);
      if (data.tracks && data.tracks.length > 0) {
        setActiveTrackId(data.tracks[0].id);
        setActiveFile({ file_path: data.tracks[0].file_path });
        // Load into Web Audio Engine for low-latency browser playback
        for (const trk of data.tracks) {
          const streamUrl = resolveAudioUrl(trk.download_url);
          await audioEngine.loadTrackAudio(trk.id, streamUrl);
        }
      }
    } catch (e) {
      console.error("Failed to load studio demo project:", e);
      setErrorMessage(`Demo Load Notice: ${e.message}`);
    } finally {
      setLoadingDemo(false);
    }
  };

  const handlePlay = () => {
    audioEngine.playAll();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioEngine.pauseAll();
    setIsPlaying(false);
  };

  const handleStop = () => {
    audioEngine.stopAll();
    setIsPlaying(false);
  };

  const handleUpdateTrack = (trackId, updates) => {
    setTracks(prev => prev.map(t => t.id === trackId ? { ...t, ...updates } : t));
  };

  const handleAddTrack = () => {
    const newId = `Track_${tracks.length + 1}`;
    const newTrack = {
      id: newId,
      name: `Audio Track ${tracks.length + 1}`,
      category: 'Audio',
      color: '#06b6d4',
      volume_db: '0.0 dB',
      volume: 1.0,
      pan: 0.0,
      mute: false,
      solo: false,
      waveform: Array.from({ length: 60 }).map(() => Math.random() * 0.8 + 0.1)
    };
    setTracks(prev => [...prev, newTrack]);
    setActiveTrackId(newId);
  };

  const handleUploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      const data = await safeFetchJson(apiUrl('/api/v1/audio/upload'), { method: 'POST', body: formData });
      
      const newTrack = {
        id: data.file_id,
        name: file.name.replace(/\.[^/.]+$/, ""),
        category: 'Import',
        color: '#8b5cf6',
        file_path: data.file_path,
        download_url: data.download_url,
        volume_db: '0.0 dB',
        volume: 1.0,
        pan: 0.0,
        mute: false,
        solo: false,
        waveform: data.waveform_preview || []
      };

      setTracks(prev => [...prev, newTrack]);
      setActiveTrackId(newTrack.id);
      setActiveFile({ file_path: data.file_path });
      setQuickFXTrack(newTrack);
      setShowQuickBanner(true);
      setIsQuickFXOpen(true);
      await audioEngine.loadTrackAudio(newTrack.id, resolveAudioUrl(data.download_url));
    } catch (e) {
      alert(`Upload error: ${e.message}`);
    }
  };

  const handleApplyEffect = async (trackId, updatedData, mode = 'replace') => {
    if (mode === 'replace') {
      setTracks(prev => prev.map(t => {
        if (t.id === trackId) {
          return {
            ...t,
            name: updatedData.name || t.name,
            file_path: updatedData.file_path,
            download_url: updatedData.download_url
          };
        }
        return t;
      }));
      if (activeTrackId === trackId) {
        setActiveFile({ file_path: updatedData.file_path });
      }
      if (updatedData.download_url) {
        await audioEngine.loadTrackAudio(trackId, resolveAudioUrl(updatedData.download_url));
      }
    } else {
      const newId = `Track_FX_${Date.now()}`;
      const newTrack = {
        id: newId,
        name: updatedData.name || `Track (FX)`,
        category: 'Processed',
        color: '#10b981',
        file_path: updatedData.file_path,
        download_url: updatedData.download_url,
        volume_db: '0.0 dB',
        volume: 1.0,
        pan: 0.0,
        mute: false,
        solo: false,
        waveform: Array.from({ length: 60 }).map(() => Math.random() * 0.8 + 0.1)
      };
      setTracks(prev => [...prev, newTrack]);
      setActiveTrackId(newId);
      setActiveFile({ file_path: updatedData.file_path });
      if (updatedData.download_url) {
        await audioEngine.loadTrackAudio(newId, resolveAudioUrl(updatedData.download_url));
      }
    }
  };

  const handleAddStemTracks = async (stemsList) => {
    const stemColors = {
      vocals: '#ec4899',
      drums: '#f59e0b',
      bass: '#8b5cf6',
      other: '#06b6d4'
    };
    for (const st of stemsList) {
      const stemId = `Stem_${st.stem_name}_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
      const newTrack = {
        id: stemId,
        name: `Stem: ${st.stem_name.toUpperCase()}`,
        category: 'Stem',
        color: stemColors[st.stem_name] || '#10b981',
        file_path: st.file_path,
        download_url: st.download_url,
        volume_db: '0.0 dB',
        volume: 1.0,
        pan: 0.0,
        mute: false,
        solo: false,
        waveform: Array.from({ length: 60 }).map(() => Math.random() * 0.8 + 0.1)
      };
      setTracks(prev => [...prev, newTrack]);
      if (st.download_url) {
        await audioEngine.loadTrackAudio(stemId, resolveAudioUrl(st.download_url));
      }
    }
  };

  const handleAddTrackFromAudio = async (audioData) => {
    const newId = `Synth_${tracks.length + 1}`;
    const newTrack = {
      id: newId,
      name: audioData.name || `Clip ${tracks.length + 1}`,
      category: 'Synth',
      color: '#f59e0b',
      file_path: audioData.file_path,
      download_url: audioData.download_url,
      volume_db: '0.0 dB',
      volume: 1.0,
      pan: 0.0,
      mute: false,
      solo: false,
      waveform: audioData.waveform_preview || []
    };
    setTracks(prev => [...prev, newTrack]);
    setActiveTrackId(newId);
    if (audioData.download_url) {
      await audioEngine.loadTrackAudio(newId, resolveAudioUrl(audioData.download_url));
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#07090e] text-slate-100">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isPlaying={isPlaying}
      />

      {/* Main View Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {activeTab === 'studio' && (
          <>
            {showQuickBanner && tracks.length > 0 && (
              <QuickFXBanner
                track={tracks.find(t => t.id === activeTrackId) || tracks[0]}
                onOpenQuickFX={() => {
                  const sel = tracks.find(t => t.id === activeTrackId) || tracks[0];
                  if (sel) {
                    setQuickFXTrack(sel);
                    setIsQuickFXOpen(true);
                  }
                }}
                onApplyEffect={handleApplyEffect}
                onAddStemTracks={handleAddStemTracks}
                onDismiss={() => setShowQuickBanner(false)}
              />
            )}
            <DAWTimeline
              tracks={tracks}
              onUpdateTrack={handleUpdateTrack}
              onAddTrack={handleAddTrack}
              onUploadFile={handleUploadFile}
              activeTrackId={activeTrackId}
              setActiveTrackId={(id) => {
                setActiveTrackId(id);
                const found = tracks.find(t => t.id === id);
                if (found) setActiveFile({ file_path: found.file_path });
              }}
              onOpenQuickFX={(trackToFX) => {
                setQuickFXTrack(trackToFX);
                setIsQuickFXOpen(true);
              }}
            />
          </>
        )}

        {activeTab === 'mixer' && (
          <MixerConsole
            tracks={tracks}
            onUpdateTrack={handleUpdateTrack}
          />
        )}

        {activeTab === 'ai_agents' && (
          <AIAgentsConsole
            activeFile={activeFile}
            tracks={tracks}
            onRefreshTracks={handleLoadDemo}
          />
        )}

        {activeTab === 'dsp_rack' && (
          <DSPRack
            activeFile={activeFile}
            tracks={tracks}
          />
        )}

        {activeTab === 'surround' && (
          <SurroundStudio
            activeFile={activeFile}
            tracks={tracks}
          />
        )}

        {activeTab === 'synths' && (
          <SynthesizerStudio
            onAddTrackFromAudio={handleAddTrackFromAudio}
          />
        )}

        {activeTab === 'mastering' && (
          <MasteringSuite
            activeFile={activeFile}
            tracks={tracks}
          />
        )}

        {activeTab === 'analysis' && (
          <AudioAnalyzer
            activeFile={activeFile}
            tracks={tracks}
          />
        )}

        {activeTab === 'recording' && (
          <RecordingStudio
            onAddTrackFromAudio={handleAddTrackFromAudio}
          />
        )}

        {activeTab === 'exports' && (
          <ExportCenter
            activeFile={activeFile}
            tracks={tracks}
          />
        )}
      </main>

      {/* Bottom Transport Bar */}
      <TransportBar
        isPlaying={isPlaying}
        onPlay={handlePlay}
        onPause={handlePause}
        onStop={handleStop}
        bpm={bpm}
        setBpm={setBpm}
        onLoadDemo={handleLoadDemo}
        loadingDemo={loadingDemo}
      />

      {/* Instant Effects & Mastering Assistant Modal */}
      <QuickFXModal
        isOpen={isQuickFXOpen}
        onClose={() => setIsQuickFXOpen(false)}
        track={quickFXTrack || tracks.find(t => t.id === activeTrackId) || tracks[0]}
        onApplyEffect={handleApplyEffect}
        onAddStemTracks={handleAddStemTracks}
        onNavigateTab={(tab) => setActiveTab(tab)}
      />
    </div>
  );
}
