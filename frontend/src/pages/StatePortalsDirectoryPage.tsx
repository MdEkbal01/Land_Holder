import React, { useState, useEffect } from 'react';
import { Globe, ExternalLink, FileText, Download, ShieldCheck, Search, BookOpen, Building2, CheckCircle2, ChevronRight, Layers, MapPin, Scale, Landmark, Sparkles, Filter, Activity, ArrowUpRight, Cpu } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { PAN_INDIA_MASTER_TREE, ALL_INDIA_STATES, getMasterStateInfo } from '../data/panIndiaMasterLocations';

export interface PortalService {
  name: string;
  code: string;
  desc: string;
}

export interface StatePortalItem {
  id: string;
  state: string;
  portal_name: string;
  english_title: string;
  hindi_title: string;
  zone: string;
  official_url: string;
  cadastral_gis_url?: string;
  mutation_url?: string;
  tax_url?: string;
  court_url?: string;
  term_anchal: string;
  term_record: string;
  term_plot: string;
  term_holding: string;
  category: string;
  description: string;
  services: PortalService[];
}

export const StatePortalsDirectoryPage: React.FC = () => {
  const navigate = useNavigate();
  const [portals, setPortals] = useState<StatePortalItem[]>([]);
  const [activeZone, setActiveZone] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  // Live Simulator State
  const [simState, setSimState] = useState<string>('Jharkhand');
  const [simDistrict, setSimDistrict] = useState<string>('Bokaro');
  const [simAnchal, setSimAnchal] = useState<string>('Chas');
  const [simVillage, setSimVillage] = useState<string>('Kura');
  const [simKhata, setSimKhata] = useState<string>('125');
  const [simPlot, setSimPlot] = useState<string>('450/2');
  const [simResult, setSimResult] = useState<any>(null);
  const [simulating, setSimulating] = useState<boolean>(false);

  useEffect(() => {
    fetch('/api/v1/portals/all')
      .then(res => res.json())
      .then(data => {
        if (data.portals && data.portals.length > 0) {
          setPortals(data.portals);
        }
      })
      .catch(err => console.error("Failed loading state portals registry", err))
      .finally(() => setLoading(false));
  }, []);

  // Update dropdown hierarchy for simulator
  const currentStateInfo = getMasterStateInfo(simState);
  const districtList = Object.keys(currentStateInfo.districts);
  const anchalList = currentStateInfo.districts[simDistrict] ? Object.keys(currentStateInfo.districts[simDistrict]) : [];
  const villageList = (currentStateInfo.districts[simDistrict] && currentStateInfo.districts[simDistrict][simAnchal]) ? currentStateInfo.districts[simDistrict][simAnchal] : [];

  const handleStateChange = (newState: string) => {
    setSimState(newState);
    const info = getMasterStateInfo(newState);
    const dists = Object.keys(info.districts);
    const firstDist = dists[0] || 'Sadar';
    setSimDistrict(firstDist);
    const anchs = info.districts[firstDist] ? Object.keys(info.districts[firstDist]) : [];
    const firstAnchal = anchs[0] || 'Central';
    setSimAnchal(firstAnchal);
    const vills = (info.districts[firstDist] && info.districts[firstDist][firstAnchal]) ? info.districts[firstDist][firstAnchal] : [];
    setSimVillage(vills[0] || 'Main Village');
    setSimResult(null);
  };

  const handleDistrictChange = (newDist: string) => {
    setSimDistrict(newDist);
    const anchs = currentStateInfo.districts[newDist] ? Object.keys(currentStateInfo.districts[newDist]) : [];
    const firstAnchal = anchs[0] || 'Central';
    setSimAnchal(firstAnchal);
    const vills = (currentStateInfo.districts[newDist] && currentStateInfo.districts[newDist][firstAnchal]) ? currentStateInfo.districts[newDist][firstAnchal] : [];
    setSimVillage(vills[0] || 'Main Village');
    setSimResult(null);
  };

  const handleAnchalChange = (newAnchal: string) => {
    setSimAnchal(newAnchal);
    const vills = (currentStateInfo.districts[simDistrict] && currentStateInfo.districts[simDistrict][newAnchal]) ? currentStateInfo.districts[simDistrict][newAnchal] : [];
    setSimVillage(vills[0] || 'Main Village');
    setSimResult(null);
  };

  const handleRunSimulator = () => {
    setSimulating(true);
    fetch(`/api/v1/official/live-search?state=${encodeURIComponent(simState)}&district=${encodeURIComponent(simDistrict)}&anchal=${encodeURIComponent(simAnchal)}&mauza=${encodeURIComponent(simVillage)}&khata=${encodeURIComponent(simKhata)}&khesra=${encodeURIComponent(simPlot)}`)
      .then(res => res.json())
      .then(data => {
        setSimResult(data);
      })
      .catch(err => console.error("Simulator error", err))
      .finally(() => setSimulating(false));
  };

  const zones = ['ALL', 'North', 'South', 'East', 'West', 'Central', 'North-East', 'Union Territory', 'Central & Allied'];

  const filteredPortals = portals.filter(p => {
    const matchesZone = activeZone === 'ALL' || p.zone.toLowerCase().includes(activeZone.toLowerCase()) || (activeZone === 'Central & Allied' && p.category.includes('Central'));
    const matchesSearch = !searchQuery.trim() || 
      p.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.portal_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.english_title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.hindi_title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesZone && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Hero Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-sky-950 text-white p-6 sm:p-10 rounded-3xl border border-sky-800 shadow-2xl space-y-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 text-sky-300 text-xs font-extrabold border border-sky-500/40">
              <Globe className="w-4 h-4 text-sky-400" />
              <span>Digital India Land Records Modernization Programme (DILRMP) • 26 Portals Synchronized</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Pan-India State Land Record & RoR Portals Master Hub
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Unified digital access point connecting all <span className="font-bold text-sky-300">24 State Land Record & Record of Rights (RoR) Portals</span> (Jharbhoomi, UP Bhulekh, Bihar Bhumi, Mahabhumi, Bhoomi Karnataka, AnyRoR, Meebhoomi, Dharani, Jamabandi, Banglarbhumi, etc.) along with the <span className="font-bold text-sky-300">National Bhu-Aadhaar (DILRMP)</span> and <span className="font-bold text-sky-300">e-Courts Land Litigation</span> verification networks.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/bhu-aadhaar"
              className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl shadow-lg transition-all flex items-center space-x-2"
            >
              <Cpu className="w-4 h-4" />
              <span>Bhu-Aadhaar Hub</span>
            </Link>
            <Link
              to="/ecourts"
              className="px-4 py-2.5 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold rounded-xl shadow-lg transition-all flex items-center space-x-2"
            >
              <Scale className="w-4 h-4" />
              <span>e-Courts Verification</span>
            </Link>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800/80">
          <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
            <div className="text-[10px] text-slate-400 font-bold uppercase">State RoR Portals</div>
            <div className="text-xl font-extrabold text-white">24 States</div>
          </div>
          <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
            <div className="text-[10px] text-slate-400 font-bold uppercase">Central Systems</div>
            <div className="text-xl font-extrabold text-sky-400">DILRMP + e-Courts</div>
          </div>
          <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
            <div className="text-[10px] text-slate-400 font-bold uppercase">Districts Indexed</div>
            <div className="text-xl font-extrabold text-emerald-400">797 Districts</div>
          </div>
          <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
            <div className="text-[10px] text-slate-400 font-bold uppercase">Land Identity Format</div>
            <div className="text-xl font-extrabold text-purple-400">14-Digit Bhu-Aadhaar</div>
          </div>
        </div>
      </div>

      {/* Interactive Live State Portal Simulator */}
      <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 bg-sky-500/10 text-sky-500 rounded-xl border border-sky-500/20">
              <Activity className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                Live State Portal Adapter Simulator
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Test real-time data stream extraction, regional nomenclature adaptation, and 14-digit Bhu-Aadhaar ULPIN generation for any village in India.
              </p>
            </div>
          </div>

          <span className="hidden sm:inline-flex text-[10px] font-bold px-2.5 py-1 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 rounded-full border border-emerald-300 dark:border-emerald-800">
            ● 24 State APIs Online
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
              Select State
            </label>
            <select
              value={simState}
              onChange={(e) => handleStateChange(e.target.value)}
              className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500"
            >
              {ALL_INDIA_STATES.map(st => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
              District
            </label>
            <select
              value={simDistrict}
              onChange={(e) => handleDistrictChange(e.target.value)}
              className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500"
            >
              {districtList.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
              {currentStateInfo.term_anchal}
            </label>
            <select
              value={simAnchal}
              onChange={(e) => handleAnchalChange(e.target.value)}
              className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500"
            >
              {anchalList.map(a => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
              Mauza / Village
            </label>
            <select
              value={simVillage}
              onChange={(e) => setSimVillage(e.target.value)}
              className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500"
            >
              {villageList.map(v => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
              {currentStateInfo.term_holding}
            </label>
            <input
              type="text"
              value={simKhata}
              onChange={(e) => setSimKhata(e.target.value)}
              className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-900 dark:text-white"
              placeholder="e.g. 125"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
              {currentStateInfo.term_plot}
            </label>
            <div className="flex space-x-1.5">
              <input
                type="text"
                value={simPlot}
                onChange={(e) => setSimPlot(e.target.value)}
                className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-900 dark:text-white"
                placeholder="e.g. 450/2"
              />
              <button
                onClick={handleRunSimulator}
                disabled={simulating}
                className="px-4 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center shrink-0"
              >
                {simulating ? '...' : 'Query'}
              </button>
            </div>
          </div>
        </div>

        {/* Simulator Output Preview */}
        {simResult && (
          <div className="p-5 bg-slate-900 text-white rounded-2xl border border-sky-800 space-y-4 animate-slide-up">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold uppercase text-sky-400">Live Response Payload</span>
                <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                  <span>{simResult.portal_name}</span>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    {simResult.source_status}
                  </span>
                </h3>
              </div>
              <div className="flex items-center space-x-2">
                <a
                  href={simResult.official_portal_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-sky-400 hover:text-sky-300 underline font-semibold flex items-center space-x-1"
                >
                  <span>Open Official Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <div className="text-slate-400 text-[10px] font-bold">CANONICAL LAND ID</div>
                <div className="font-mono text-sky-300 font-bold truncate">{simResult.land_identity_id}</div>
              </div>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <div className="text-slate-400 text-[10px] font-bold">14-DIGIT BHU-AADHAAR (ULPIN)</div>
                <div className="font-mono text-emerald-300 font-bold">{simResult.bhu_aadhaar_ulpin}</div>
              </div>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <div className="text-slate-400 text-[10px] font-bold">RECORD TERMINOLOGY</div>
                <div className="font-semibold text-slate-200">{simResult.term_record}</div>
              </div>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <div className="text-slate-400 text-[10px] font-bold">GPS CENTROID</div>
                <div className="font-mono text-amber-300">
                  {simResult.centroid_coordinates?.lat.toFixed(4)}° N, {simResult.centroid_coordinates?.lng.toFixed(4)}° E
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => navigate(`/land/${encodeURIComponent(simResult.land_identity_id)}`)}
                className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center space-x-1.5"
              >
                <span>View Full 3D Cadastral Profile</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate(`/search?state=${encodeURIComponent(simState)}&district=${encodeURIComponent(simDistrict)}`)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition-all"
              >
                Search All Parcels in {simDistrict}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Search & Filter Bar */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by state name, portal name (e.g. Bhulekh, AnyRoR, Dharani, Bhoomi, Patta Chitta)..."
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 whitespace-nowrap">
            Showing {filteredPortals.length} of {portals.length} Portals
          </span>
        </div>

        {/* Zone Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          {zones.map(z => (
            <button
              key={z}
              onClick={() => setActiveZone(z)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeZone === z
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {z === 'ALL' ? 'All Portals (26)' : z}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of 26 Portals */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPortals.map(portal => (
          <div
            key={portal.id}
            className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-sky-500/50 transition-all flex flex-col justify-between overflow-hidden group"
          >
            <div className="p-6 space-y-4">
              {/* Card Header */}
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 rounded-full border border-sky-300 dark:border-sky-800">
                      {portal.zone} Zone
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400">
                      {portal.category}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-base text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {portal.portal_name}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {portal.state} • {portal.english_title}
                  </div>
                </div>

                <a
                  href={portal.official_url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-sky-500 rounded-xl transition-all hover:scale-105 shrink-0"
                  title="Open Official Website"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Regional Terms Badge */}
              <div className="bg-slate-50 dark:bg-slate-950/60 p-3 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-[10px] text-slate-500 font-bold uppercase">Record:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{portal.term_record}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] text-slate-500 font-bold uppercase">Sub-District:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{portal.term_anchal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] text-slate-500 font-bold uppercase">Plot Ref:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{portal.term_plot}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                {portal.description}
              </p>

              {/* Sub Services Badges */}
              <div className="space-y-1.5">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Available Online Services
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {portal.services.slice(0, 4).map((srv, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-semibold px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700"
                    >
                      {srv.name}
                    </span>
                  ))}
                  {portal.services.length > 4 && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 text-sky-500">
                      +{portal.services.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <button
                onClick={() => {
                  handleStateChange(portal.state);
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
                className="text-sky-600 dark:text-sky-400 font-bold hover:underline flex items-center space-x-1"
              >
                <span>Simulate In-App</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={portal.official_url}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-bold transition-all shadow flex items-center space-x-1.5"
              >
                <span>Visit Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
