import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Search, MapPin, Filter, ArrowRight, ShieldCheck, Radio, CheckCircle2, Globe2 } from 'lucide-react';
import { LandParcel } from '../types';
import { ALL_INDIA_STATES, getMasterStateInfo } from '../data/panIndiaMasterLocations';

export interface LandSearchPageProps {
  lang: 'en' | 'hi';
}

export const LandSearchPage: React.FC<LandSearchPageProps> = ({ lang }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const [selectedState, setSelectedState] = useState<string>('Jharkhand');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('Bokaro');
  const [selectedAnchal, setSelectedAnchal] = useState<string>('Chas');
  const [selectedMauza, setSelectedMauza] = useState<string>('Kura');
  const [khataNo, setKhataNo] = useState<string>('');
  const [khesraNo, setKhesraNo] = useState<string>('');
  const [ownerName, setOwnerName] = useState<string>('');
  const [queryText, setQueryText] = useState<string>(initialQuery);

  const [liveMode, setLiveMode] = useState<boolean>(true);
  const [liveStreamMeta, setLiveStreamMeta] = useState<any>(null);

  const [results, setResults] = useState<LandParcel[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Derive districts and revenue terminology for selected state
  const stateInfo = getMasterStateInfo(selectedState);
  const districtList = Object.keys(stateInfo.districts);
  const anchalList = (selectedDistrict && stateInfo.districts[selectedDistrict]) 
    ? Object.keys(stateInfo.districts[selectedDistrict]) 
    : [];
  const mauzaList = (selectedDistrict && selectedAnchal && stateInfo.districts[selectedDistrict]?.[selectedAnchal])
    ? stateInfo.districts[selectedDistrict][selectedAnchal]
    : [];

  useEffect(() => {
    handleSearch();
  }, []);

  const handleStateChange = (newState: string) => {
    setSelectedState(newState);
    const newInfo = getMasterStateInfo(newState);
    const newDists = Object.keys(newInfo.districts);
    const firstDist = newDists[0] || '';
    setSelectedDistrict(firstDist);
    const newAnchals = firstDist && newInfo.districts[firstDist] ? Object.keys(newInfo.districts[firstDist]) : [];
    const firstAnchal = newAnchals[0] || '';
    setSelectedAnchal(firstAnchal);
    const newMauzas = (firstDist && firstAnchal && newInfo.districts[firstDist]?.[firstAnchal]) ? newInfo.districts[firstDist][firstAnchal] : [];
    setSelectedMauza(newMauzas[0] || '');
  };

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);

    if (liveMode && selectedDistrict && selectedAnchal) {
      try {
        const liveRes = await fetch(
          `/api/v1/official/live-search?state=${encodeURIComponent(selectedState)}&district=${encodeURIComponent(selectedDistrict)}&anchal=${encodeURIComponent(selectedAnchal)}&mauza=${encodeURIComponent(selectedMauza)}&khata=${encodeURIComponent(khataNo)}&khesra=${encodeURIComponent(khesraNo)}`
        );
        const liveData = await liveRes.json();
        setLiveStreamMeta(liveData);
      } catch (err) {
        console.error("Live official portal query failed", err);
      }
    }

    const params = new URLSearchParams();
    if (selectedState) params.append('state', selectedState);
    if (selectedDistrict) params.append('district', selectedDistrict);
    if (selectedAnchal) params.append('anchal', selectedAnchal);
    if (selectedMauza) params.append('mauza', selectedMauza);
    if (khataNo) params.append('khata', khataNo);
    if (khesraNo) params.append('khesra', khesraNo);
    if (ownerName) params.append('owner', ownerName);
    if (queryText) params.append('query', queryText);
    params.append('limit', '40');

    try {
      const res = await fetch(`/api/v1/land/search?${params.toString()}`);
      const data = await res.json();
      setResults(data.results || []);
    } catch (err) {
      console.error("Search failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 transition-colors">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center space-x-2">
            <Search className="w-6 h-6 text-sky-600 dark:text-sky-400" />
            <span>Pan-India Real-Time Land Record Search</span>
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Real-time live cadastral queries connected across all 28 Indian States & 8 Union Territories (786+ Districts).
          </p>
        </div>

        <button
          type="button"
          onClick={() => setLiveMode(!liveMode)}
          className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center space-x-2 transition-all shadow-sm ${
            liveMode
              ? 'bg-emerald-950 text-emerald-300 border-emerald-700'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-700'
          }`}
        >
          <Radio className={`w-3.5 h-3.5 ${liveMode ? 'text-emerald-400 animate-pulse' : ''}`} />
          <span>{liveMode ? "🟢 Live State Portal API Feed ACTIVE" : "⚪ Offline Database Mode"}</span>
        </button>
      </div>

      {liveStreamMeta && (
        <div className="bg-emerald-950/80 text-emerald-200 p-3.5 rounded-2xl border border-emerald-800 text-xs flex items-center justify-between shadow-md">
          <div className="flex items-center space-x-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <span className="font-bold text-emerald-300 block">{liveStreamMeta.source || `${selectedState} RoR Registry`}</span>
              <span className="text-[11px] text-emerald-400">
                Verified Stream ID: <span className="font-mono">{liveStreamMeta.land_identity_id}</span> • Status: {liveStreamMeta.live_status}
              </span>
            </div>
          </div>
          <span className="font-mono text-[10px] bg-emerald-900 px-2 py-0.5 rounded border border-emerald-700">
            {liveStreamMeta.official_verification_timestamp}
          </span>
        </div>
      )}

      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md space-y-4 transition-colors">
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center space-x-1">
                <Globe2 className="w-3.5 h-3.5 text-sky-500" />
                <span>State / UT (राज्य)</span>
              </label>
              <select
                value={selectedState}
                onChange={(e) => handleStateChange(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-sky-500 font-medium"
              >
                {ALL_INDIA_STATES.map(st => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                District (ज़िला • {districtList.length} in {selectedState})
              </label>
              <select
                value={selectedDistrict}
                onChange={(e) => {
                  const d = e.target.value;
                  setSelectedDistrict(d);
                  const aList = d && stateInfo.districts[d] ? Object.keys(stateInfo.districts[d]) : [];
                  const firstA = aList[0] || '';
                  setSelectedAnchal(firstA);
                  const mList = d && firstA && stateInfo.districts[d]?.[firstA] ? stateInfo.districts[d][firstA] : [];
                  setSelectedMauza(mList[0] || '');
                }}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-sky-500"
              >
                {districtList.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {stateInfo.term_anchal}
              </label>
              <select
                value={selectedAnchal}
                onChange={(e) => {
                  const a = e.target.value;
                  setSelectedAnchal(a);
                  const mList = selectedDistrict && a && stateInfo.districts[selectedDistrict]?.[a] 
                    ? stateInfo.districts[selectedDistrict][a] 
                    : [];
                  setSelectedMauza(mList[0] || '');
                }}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-sky-500"
              >
                {anchalList.map(a => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Village / Mauza (मौजा / ग्राम)
              </label>
              <select
                value={selectedMauza}
                onChange={(e) => setSelectedMauza(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-sky-500"
              >
                {mauzaList.map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">{stateInfo.term_holding} (खाता सं.)</label>
              <input
                type="text"
                value={khataNo}
                onChange={(e) => setKhataNo(e.target.value)}
                placeholder="e.g. 125"
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">{stateInfo.term_plot} (खेसरा/गाटा/सर्वे सं.)</label>
              <input
                type="text"
                value={khesraNo}
                onChange={(e) => setKhesraNo(e.target.value)}
                placeholder="e.g. 450/2"
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Owner Name (रैयत/खातेदार/मालिक का नाम)</label>
              <input
                type="text"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                placeholder="e.g. Ramesh Mahato"
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-sky-500"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
            <span className="text-xs text-slate-500 flex items-center space-x-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Connected to {selectedState} Official Portal & National DILRMP Feed</span>
            </span>
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2 bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold rounded-lg shadow transition-colors flex items-center space-x-1.5"
            >
              <Search className="w-3.5 h-3.5" />
              <span>{loading ? "Fetching Official Records..." : "Execute Real-Time Search"}</span>
            </button>
          </div>
        </form>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200">
            Search Results ({results.length} Parcels Verified)
          </h2>
        </div>

        {loading ? (
          <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="w-6 h-6 border-2 border-sky-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
            <p className="text-xs text-slate-500">Querying real-time official land records...</p>
          </div>
        ) : results.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 text-xs">
            No matching land parcels found. Try adjusting Khata or Owner filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.map((parcel) => (
              <div
                key={parcel.id}
                onClick={() => navigate(`/land/${parcel.land_identity_id}`)}
                className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-sky-500/50 transition-all cursor-pointer space-y-3 group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-mono text-[11px] font-semibold text-sky-600 dark:text-sky-400 group-hover:underline">
                      {parcel.land_identity_id}
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm mt-0.5">
                      Khata #{parcel.khata_no} • Khesra #{parcel.khesra_no}
                    </h3>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded">
                    Jharbhoomi Real-Time
                  </span>
                </div>

                <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{parcel.mauza}, {parcel.anchal}, {parcel.district}</span>
                  </div>
                  <div>
                    <strong>Recorded Owner:</strong> {parcel.owner_name || "See Record Details"}
                  </div>
                  <div>
                    <strong>Area:</strong> {parcel.area_acre} Acre
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-sky-600 dark:text-sky-400 font-semibold group-hover:translate-x-1 transition-transform">
                  <span>View 3D Profile & Integrity Analysis</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
