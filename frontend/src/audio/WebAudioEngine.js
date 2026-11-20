class WebAudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.analyser = null;
    this.tracks = new Map(); // trackId -> { source, gainNode, panNode, buffer, isPlaying }
    this.isPlaying = false;
    this.startTime = 0;
    this.pauseOffset = 0;
    this.mediaRecorder = null;
    this.recordedChunks = [];
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 2048;
      this.analyser.smoothingTimeConstant = 0.85;

      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  async loadTrackAudio(trackId, url) {
    this.init();
    try {
      const resp = await fetch(url);
      const arrayBuf = await resp.arrayBuffer();
      const audioBuf = await this.ctx.decodeAudioData(arrayBuf);
      
      this.tracks.set(trackId, {
        buffer: audioBuf,
        volume: 1.0,
        pan: 0.0,
        mute: false,
        solo: false,
        source: null,
        gainNode: null,
        panNode: null
      });
      return audioBuf;
    } catch (e) {
      console.error(`Failed to load audio for track ${trackId}:`, e);
      return null;
    }
  }

  playAll(offset = 0) {
    this.init();
    this.stopAll();
    this.isPlaying = true;
    this.startTime = this.ctx.currentTime - offset;
    this.pauseOffset = offset;

    const hasSolo = Array.from(this.tracks.values()).some(t => t.solo);

    this.tracks.forEach((track, id) => {
      if (!track.buffer) return;

      const source = this.ctx.createBufferSource();
      source.buffer = track.buffer;

      const gainNode = this.ctx.createGain();
      // Apply solo/mute logic
      const isAudible = hasSolo ? track.solo : !track.mute;
      gainNode.gain.value = isAudible ? track.volume : 0.0;

      // Stereo panner
      let panNode = null;
      if (this.ctx.createStereoPanner) {
        panNode = this.ctx.createStereoPanner();
        panNode.pan.value = track.pan;
        source.connect(panNode);
        panNode.connect(gainNode);
      } else {
        source.connect(gainNode);
      }

      gainNode.connect(this.masterGain);

      const trackOffset = Math.min(offset, track.buffer.duration);
      source.start(0, trackOffset);

      track.source = source;
      track.gainNode = gainNode;
      track.panNode = panNode;
    });
  }

  pauseAll() {
    if (!this.isPlaying) return;
    this.pauseOffset = this.ctx.currentTime - this.startTime;
    this.stopAll();
    this.isPlaying = false;
  }

  stopAll() {
    this.tracks.forEach(track => {
      if (track.source) {
        try {
          track.source.stop();
          track.source.disconnect();
        } catch (_) {}
        track.source = null;
      }
    });
    this.isPlaying = false;
  }

  setTrackVolume(trackId, vol) {
    const track = this.tracks.get(trackId);
    if (track) {
      track.volume = vol;
      if (track.gainNode && !track.mute) {
        track.gainNode.gain.setValueAtTime(vol, this.ctx ? this.ctx.currentTime : 0);
      }
    }
  }

  setTrackPan(trackId, pan) {
    const track = this.tracks.get(trackId);
    if (track) {
      track.pan = Math.max(-1.0, Math.min(1.0, pan));
      if (track.panNode) {
        track.panNode.pan.setValueAtTime(track.pan, this.ctx ? this.ctx.currentTime : 0);
      }
    }
  }

  setTrackMute(trackId, isMuted) {
    const track = this.tracks.get(trackId);
    if (track) {
      track.mute = isMuted;
      this.updateSoloMuteStates();
    }
  }

  setTrackSolo(trackId, isSolo) {
    const track = this.tracks.get(trackId);
    if (track) {
      track.solo = isSolo;
      this.updateSoloMuteStates();
    }
  }

  updateSoloMuteStates() {
    const hasSolo = Array.from(this.tracks.values()).some(t => t.solo);
    this.tracks.forEach(track => {
      if (track.gainNode) {
        const isAudible = hasSolo ? track.solo : !track.mute;
        track.gainNode.gain.setValueAtTime(isAudible ? track.volume : 0.0, this.ctx ? this.ctx.currentTime : 0);
      }
    });
  }

  setMasterVolume(vol) {
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(vol, this.ctx.currentTime);
    }
  }

  getTelemetry() {
    if (!this.analyser) {
      return { peak: -60, rms: -60, fftData: new Uint8Array(64) };
    }
    const timeData = new Float32Array(this.analyser.fftSize);
    this.analyser.getFloatTimeDomainData(timeData);

    let sumSq = 0;
    let peak = 0;
    for (let i = 0; i < timeData.length; i++) {
      const x = Math.abs(timeData[i]);
      if (x > peak) peak = x;
      sumSq += x * x;
    }
    const rms = Math.sqrt(sumSq / timeData.length);
    const peakDb = peak > 1e-4 ? 20 * Math.log10(peak) : -60;
    const rmsDb = rms > 1e-4 ? 20 * Math.log10(rms) : -60;

    const freqData = new Uint8Array(64);
    this.analyser.getByteFrequencyData(freqData);

    return {
      peak: Math.round(peakDb),
      rms: Math.round(rmsDb),
      fftData: freqData
    };
  }

  // Live Microphone Recording
  async startRecording() {
    this.init();
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
    this.recordedChunks = [];
    this.mediaRecorder = new MediaRecorder(stream);
    this.mediaRecorder.ondataavailable = e => {
      if (e.data.size > 0) this.recordedChunks.push(e.data);
    };
    this.mediaRecorder.start();
  }

  async stopRecording() {
    return new Promise(resolve => {
      if (!this.mediaRecorder) return resolve(null);
      this.mediaRecorder.onstop = () => {
        const blob = new Blob(this.recordedChunks, { type: 'audio/wav' });
        resolve(blob);
      };
      this.mediaRecorder.stop();
      this.mediaRecorder.stream.getTracks().forEach(t => t.stop());
    });
  }
}

export const audioEngine = new WebAudioEngine();
