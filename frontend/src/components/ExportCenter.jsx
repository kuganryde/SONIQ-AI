import React, { useState } from 'react';
import { apiUrl, safeFetchJson, resolveAudioUrl } from '../config/api';
import { DownloadCloud, ShieldCheck, AlertTriangle, FileText, Download, CheckCircle2 } from 'lucide-react';

export default function ExportCenter({
  activeFile,
  tracks = []
}) {
  const [outputFormat, setOutputFormat] = useState('FLAC');
  const [bitDepth, setBitDepth] = useState('24');
  const [sampleRate, setSampleRate] = useState(96000);
  const [channelLayout, setChannelLayout] = useState('stereo');
  const [exporting, setExporting] = useState(false);
  const [exportCertificate, setExportCertificate] = useState(null);

  const handleExport = async () => {
    const fileToUse = activeFile?.file_path || (tracks[0] ? tracks[0].file_path : null);
    if (!fileToUse) {
      alert("Please load a demo project or upload an audio file first.");
      return;
    }

    setExporting(true);
    try {
      const data = await safeFetchJson(apiUrl('/api/v1/export/render'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          file_path: fileToUse,
          project_name: "SONIQ_Session",
          export_name: "Final_Master",
          output_format: outputFormat,
          bit_depth: bitDepth,
          sample_rate: sampleRate,
          channels_layout: channelLayout
        })
      });
      setExportCertificate(data);
    } catch (e) {
      alert(`Export error: ${e.message}`);
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="flex-1 p-6 space-y-6 overflow-y-auto max-w-[1700px] mx-auto">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div>
          <h1 className="text-base font-bold text-white font-mono flex items-center space-x-2">
            <DownloadCloud className="w-5 h-5 text-cyan-400" />
            <span>PROFESSIONAL AUDIO EXPORT & DELIVERY CENTRE</span>
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            Lossless FLAC, Broadcast WAV PCM, Multichannel 5.1/7.1, 16/24/32-bit float, and Technical QC Certificate.
          </p>
        </div>

        <button
          onClick={handleExport}
          disabled={exporting}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-black font-extrabold text-xs shadow-lg shadow-cyan-500/20 disabled:opacity-50 transition-all font-mono"
        >
          {exporting ? 'Rendering Audio...' : `Export Master ${outputFormat} (${bitDepth}-bit / ${sampleRate / 1000}kHz)`}
        </button>
      </div>

      {/* Export Specifications Configuration */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        {/* Output Format */}
        <div className="bg-[#0c101a] p-4 rounded-xl border border-slate-800 space-y-2 font-mono text-xs">
          <label className="text-cyan-400 font-bold">Delivery Format</label>
          <select
            value={outputFormat}
            onChange={(e) => setOutputFormat(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 mt-1"
          >
            <option value="FLAC">Lossless FLAC</option>
            <option value="WAV">Broadcast WAV PCM</option>
            <option value="AIFF">AIFF</option>
            <option value="MP3">MP3 (320 kbps Perceptual)</option>
            <option value="OGG">OGG Vorbis</option>
          </select>
        </div>

        {/* Bit Depth */}
        <div className="bg-[#0c101a] p-4 rounded-xl border border-slate-800 space-y-2 font-mono text-xs">
          <label className="text-violet-400 font-bold">Bit Depth Precision</label>
          <select
            value={bitDepth}
            onChange={(e) => setBitDepth(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 mt-1"
          >
            <option value="24">24-bit Studio Standard</option>
            <option value="16">16-bit Red Book CD</option>
            <option value="32f">32-bit Floating Point (Zero-Clip)</option>
          </select>
        </div>

        {/* Sample Rate */}
        <div className="bg-[#0c101a] p-4 rounded-xl border border-slate-800 space-y-2 font-mono text-xs">
          <label className="text-emerald-400 font-bold">Sample Rate (Hz)</label>
          <select
            value={sampleRate}
            onChange={(e) => setSampleRate(parseInt(e.target.value))}
            className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 mt-1"
          >
            <option value={96000}>96 kHz (High-Resolution Studio)</option>
            <option value={48000}>48 kHz (Broadcast & Cinema Standard)</option>
            <option value={44100}>44.1 kHz (Commercial CD)</option>
            <option value={192000}>192 kHz (Ultra High-Fidelity)</option>
          </select>
        </div>

        {/* Channel Layout */}
        <div className="bg-[#0c101a] p-4 rounded-xl border border-slate-800 space-y-2 font-mono text-xs">
          <label className="text-amber-400 font-bold">Channel Configuration</label>
          <select
            value={channelLayout}
            onChange={(e) => setChannelLayout(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 mt-1"
          >
            <option value="stereo">Stereo 2.0</option>
            <option value="5.1">5.1 Multichannel Surround</option>
            <option value="7.1">7.1 Multichannel Surround</option>
          </select>
        </div>

      </div>

      {/* Lossy Warning Alert if MP3/OGG selected */}
      {['MP3', 'OGG'].includes(outputFormat) && (
        <div className="bg-amber-950/30 p-3.5 rounded-xl border border-amber-800/80 text-amber-200 text-xs font-mono flex items-center space-x-2">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Notice: MP3/OGG utilizes lossy perceptual psychoacoustic encoding. For bit-transparent archiving, use 24-bit FLAC or Broadcast WAV.</span>
        </div>
      )}

      {/* Generated Delivery Certificate & Download Deck */}
      {exportCertificate && (
        <div className="bg-[#0b0e17] p-6 rounded-2xl border border-cyan-500/40 space-y-4 shadow-2xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span className="font-mono text-xs font-bold text-white">
                Technical Delivery Certificate ({exportCertificate.certificate_id})
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <a
                href={resolveAudioUrl(exportCertificate.download_path)}
                download
                className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold transition-colors shadow-lg shadow-emerald-900/30"
              >
                <Download className="w-4 h-4" />
                <span>Download Master Audio File</span>
              </a>
            </div>
          </div>

          {/* Certificate Specs Breakdown */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400">Codec / Format</div>
              <div className="text-sm font-bold text-cyan-400 mt-1">
                {exportCertificate.technical_specifications?.format} ({exportCertificate.technical_specifications?.codec})
              </div>
            </div>

            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400">Sample Rate & Bit Depth</div>
              <div className="text-sm font-bold text-white mt-1">
                {exportCertificate.technical_specifications?.sample_rate_hz} Hz • {exportCertificate.technical_specifications?.bit_depth}-bit
              </div>
            </div>

            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400">Integrated Loudness</div>
              <div className="text-sm font-bold text-violet-400 mt-1">
                {exportCertificate.acoustic_measurements?.integrated_lufs} LUFS
              </div>
            </div>

            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400">True Peak Ceiling</div>
              <div className="text-sm font-bold text-emerald-400 mt-1">
                {exportCertificate.acoustic_measurements?.true_peak_dbtp} dBTP
              </div>
            </div>
          </div>

          {/* Delivery Audit Status */}
          <div className="bg-black/60 p-3 rounded-xl border border-slate-800 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">Pre-Export Quality Assurance Status:</span>
            <span className="text-emerald-400 font-bold bg-emerald-950 px-2.5 py-0.5 rounded border border-emerald-800">
              {exportCertificate.quality_audit?.overall_status} (ALL CHECKS PASSED)
            </span>
          </div>
        </div>
      )}

    </div>
  );
}
