import React, { useState } from 'react';
import { Cpu, ShieldCheck, QrCode, Search, Globe, CheckCircle2, ArrowRight, Download, MapPin, Layers, Sparkles, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ALL_INDIA_STATES, getMasterStateInfo } from '../data/panIndiaMasterLocations';

export const BhuAadhaarHubPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'VERIFY' | 'GENERATE'>('VERIFY');
  const [ulpinInput, setUlpinInput] = useState<string>('20JH4502012589');
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Generate Form
  const [genState, setGenState] = useState<string>('Jharkhand');
  const [genDistrict, setGenDistrict] = useState<string>('Bokaro');
  const [genAnchal, setGenAnchal] = useState<string>('Chas');
  const [genVillage, setGenVillage] = useState<string>('Kura');
  const [genKhata, setGenKhata] = useState<string>('125');
  const [genPlot, setGenPlot] = useState<string>('450/2');
  const [generatedCard, setGeneratedCard] = useState<any>(null);

  const stateInfo = getMasterStateInfo(genState);
  const distList = Object.keys(stateInfo.districts);
  const anchList = stateInfo.districts[genDistrict] ? Object.keys(stateInfo.districts[genDistrict]) : [];
  const villList = (stateInfo.districts[genDistrict] && stateInfo.districts[genDistrict][genAnchal]) ? stateInfo.districts[genDistrict][genAnchal] : [];

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ulpinInput.trim()) return;
    setLoading(true);
    fetch(`/api/v1/bhu-aadhaar/verify/${encodeURIComponent(ulpinInput.trim())}`)
      .then(res => res.json())
      .then(data => {
        setVerificationResult(data);
      })
      .catch(err => console.error("Verification error", err))
      .finally(() => setLoading(false));
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    fetch('/api/v1/bhu-aadhaar/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        state: genState,
        district: genDistrict,
        subdistrict: genAnchal,
        village: genVillage,
        khata_no: genKhata,
        plot_no: genPlot
      })
    })
      .then(res => res.json())
      .then(data => {
        setGeneratedCard(data);
      })
      .catch(err => console.error("Generation error", err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-indigo-800 shadow-2xl space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/40">
          <Cpu className="w-4 h-4 text-indigo-400" />
          <span>Department of Land Resources (DILRMP) • Bhu-Aadhaar National Standard</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
          National Bhu-Aadhaar (ULPIN) Verification & Issuance Hub
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
          The 14-digit alphanumeric <span className="font-bold text-indigo-300">Unique Land Parcel Identification Number (ULPIN / भू-आधार)</span> provides a tamper-proof, geo-referenced digital identity for every surveyed parcel across India based on international EPSG:4326 WGS-84 centroid coordinates.
        </p>

        {/* Tab Buttons */}
        <div className="flex items-center space-x-2 pt-2">
          <button
            onClick={() => setActiveTab('VERIFY')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'VERIFY'
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Verify Existing 14-Digit ULPIN
          </button>
          <button
            onClick={() => setActiveTab('GENERATE')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'GENERATE'
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Generate & Issue Bhu-Aadhaar Card
          </button>
        </div>
      </div>

      {/* Verify Tab */}
      {activeTab === 'VERIFY' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md">
            <form onSubmit={handleVerify} className="space-y-4">
              <label className="block text-xs font-extrabold text-slate-800 dark:text-slate-200">
                Enter 14-Character Bhu-Aadhaar (ULPIN) Number:
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={ulpinInput}
                    onChange={(e) => setUlpinInput(e.target.value.toUpperCase())}
                    placeholder="e.g. 20JH4502012589"
                    maxLength={14}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 shrink-0"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>{loading ? 'Verifying...' : 'Verify on National DILRMP Node'}</span>
                </button>
              </div>
            </form>
          </div>

          {/* Verification Result Card */}
          {verificationResult && (
            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-6 sm:p-8 rounded-3xl border border-indigo-700 shadow-2xl space-y-6 animate-slide-up">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-indigo-800/80 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-2xl border border-emerald-500/30">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase text-indigo-400">Authentic DILRMP Record</span>
                    <h2 className="text-xl font-mono font-extrabold text-white">{verificationResult.ulpin}</h2>
                  </div>
                </div>

                <span className="text-xs font-bold px-3 py-1 bg-emerald-950 text-emerald-300 rounded-full border border-emerald-800">
                  ● {verificationResult.status}
                </span>
              </div>

              {/* Anatomy of ULPIN */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-indigo-300 uppercase">ULPIN Anatomy Breakdown:</div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-slate-950 p-2.5 rounded-xl border border-indigo-900">
                    <span className="text-[10px] text-slate-400 block font-bold">STATE LGD (2 DIGITS)</span>
                    <span className="font-mono text-emerald-400 font-extrabold text-sm">{verificationResult.state_lgd_code}</span>
                    <span className="text-[10px] text-slate-300 block">{verificationResult.state}</span>
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded-xl border border-indigo-900">
                    <span className="text-[10px] text-slate-400 block font-bold">GEO-HASH (10 CHARS)</span>
                    <span className="font-mono text-sky-400 font-extrabold text-sm">{verificationResult.ulpin.slice(2, 12)}</span>
                    <span className="text-[10px] text-slate-300 block">Centroid Grid Code</span>
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded-xl border border-indigo-900">
                    <span className="text-[10px] text-slate-400 block font-bold">CHECKSUM (2 CHARS)</span>
                    <span className="font-mono text-amber-400 font-extrabold text-sm">{verificationResult.ulpin.slice(12, 14)}</span>
                    <span className="text-[10px] text-slate-300 block">Cryptographic Check</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 font-bold block">CENTROID LATITUDE</span>
                  <span className="font-mono text-white font-bold">{verificationResult.centroid_lat.toFixed(6)}° N</span>
                </div>
                <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 font-bold block">CENTROID LONGITUDE</span>
                  <span className="font-mono text-white font-bold">{verificationResult.centroid_lng.toFixed(6)}° E</span>
                </div>
                <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 font-bold block">VERIFICATION NODE</span>
                  <span className="text-slate-200 font-semibold">{verificationResult.authority}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Generate Tab */}
      {activeTab === 'GENERATE' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
            <h2 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-indigo-500" />
              <span>Issue New Bhu-Aadhaar Card from Administrative Hierarchy</span>
            </h2>

            <form onSubmit={handleGenerate} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">State</label>
                <select
                  value={genState}
                  onChange={(e) => setGenState(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-900 dark:text-white"
                >
                  {ALL_INDIA_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">District</label>
                <select
                  value={genDistrict}
                  onChange={(e) => setGenDistrict(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-900 dark:text-white"
                >
                  {distList.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">{stateInfo.term_anchal}</label>
                <select
                  value={genAnchal}
                  onChange={(e) => setGenAnchal(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-900 dark:text-white"
                >
                  {anchList.map(a => <option key={a} value={a}>{a}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Mauza / Village</label>
                <select
                  value={genVillage}
                  onChange={(e) => setGenVillage(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-900 dark:text-white"
                >
                  {villList.map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">{stateInfo.term_holding}</label>
                <input
                  type="text"
                  value={genKhata}
                  onChange={(e) => setGenKhata(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-900 dark:text-white"
                  placeholder="e.g. 125"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">{stateInfo.term_plot}</label>
                <input
                  type="text"
                  value={genPlot}
                  onChange={(e) => setGenPlot(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-900 dark:text-white"
                  placeholder="e.g. 450/2"
                />
              </div>

              <div className="sm:col-span-2 lg:col-span-3 pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2"
                >
                  <Cpu className="w-4 h-4" />
                  <span>{loading ? 'Computing Centroid...' : 'Generate 14-Digit Bhu-Aadhaar Certificate'}</span>
                </button>
              </div>
            </form>
          </div>

          {/* Generated Bhu-Aadhaar Card */}
          {generatedCard && (
            <div className="bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 text-white p-6 sm:p-8 rounded-3xl border border-indigo-500 shadow-2xl space-y-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-between border-b border-indigo-700 pb-3">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-indigo-600 rounded-xl">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-300 block">
                      GOVERNMENT OF INDIA • DILRMP
                    </span>
                    <h3 className="font-extrabold text-sm text-white">BHU-AADHAAR IDENTIFICATION CARD</h3>
                  </div>
                </div>

                <span className="text-[10px] font-mono font-bold bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded border border-indigo-800">
                  {generatedCard.state_lgd_code}
                </span>
              </div>

              <div className="text-center py-4 bg-slate-950/80 rounded-2xl border border-indigo-800/80 space-y-1">
                <div className="text-[10px] uppercase font-bold text-slate-400">14-Digit Canonical ULPIN</div>
                <div className="text-2xl sm:text-3xl font-mono font-extrabold text-indigo-300 tracking-wider">
                  {generatedCard.ulpin}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 block font-bold">STATE & DISTRICT</span>
                  <span className="font-bold text-slate-200">{generatedCard.state}, {generatedCard.district}</span>
                </div>
                <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 block font-bold">SUBDISTRICT & MAUZA</span>
                  <span className="font-bold text-slate-200">{generatedCard.subdistrict} ({generatedCard.village})</span>
                </div>
                <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 block font-bold">HOLDING / PLOT</span>
                  <span className="font-mono text-sky-300 font-bold">Khata {generatedCard.khata_no} • Plot {generatedCard.plot_no}</span>
                </div>
                <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 block font-bold">CENTROID COORDINATES</span>
                  <span className="font-mono text-amber-300 font-bold">{generatedCard.centroid_lat.toFixed(4)}°N, {generatedCard.centroid_lng.toFixed(4)}°E</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-indigo-800 text-[11px] text-slate-400">
                <span>Standard: {generatedCard.standard}</span>
                <span className="text-emerald-400 font-bold">● Digitally Certified</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
