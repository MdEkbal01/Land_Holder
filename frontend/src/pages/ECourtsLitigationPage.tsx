import React, { useState } from 'react';
import { Scale, Search, ShieldAlert, AlertTriangle, CheckCircle2, FileText, Download, Landmark, ExternalLink, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface CourtCaseItem {
  cnr_number: string;
  case_no: string;
  case_type: string;
  court_name: string;
  petitioner: string;
  respondent: string;
  filing_date: string;
  next_hearing_date: string;
  stage: string;
  stay_order_active: boolean;
  stay_details: string;
  lis_pendens_applicable: boolean;
  lis_pendens_statute: string;
  risk_level: string;
  land_identity_id: string;
  khasra_no: string;
  khata_no: string;
  state: string;
}

export const ECourtsLitigationPage: React.FC = () => {
  const [searchType, setSearchType] = useState<'CNR' | 'CASE_NO' | 'PARTY' | 'KHASRA'>('CNR');
  const [queryInput, setQueryInput] = useState<string>('JHJS010045232024');
  const [searchResults, setSearchResults] = useState<CourtCaseItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searched, setSearched] = useState<boolean>(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!queryInput.trim()) return;
    setLoading(true);
    setSearched(true);

    let url = '/api/v1/ecourts/search?';
    if (searchType === 'CNR') url += `cnr_number=${encodeURIComponent(queryInput.trim())}`;
    else if (searchType === 'CASE_NO') url += `case_no=${encodeURIComponent(queryInput.trim())}`;
    else if (searchType === 'PARTY') url += `party_name=${encodeURIComponent(queryInput.trim())}`;
    else url += `plot_no=${encodeURIComponent(queryInput.trim())}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setSearchResults(data.cases || []);
      })
      .catch(err => console.error("e-Courts search failed", err))
      .finally(() => setLoading(false));
  };

  const sampleQueries = [
    { label: "Bokaro Title Dispute (Stay Active)", type: 'CNR', val: "JHJS010045232024" },
    { label: "Noida SDM Revenue Appeal", type: 'CNR', val: "UPGB010088922025" },
    { label: "Pune Regular Civil Suit", type: 'CNR', val: "MHPU020033122025" },
    { label: "Bengaluru PTCL Stay", type: 'CNR', val: "KABU010077212025" }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-slate-900 via-amber-950 to-slate-950 text-white p-6 sm:p-8 rounded-3xl border border-amber-800 shadow-2xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/40">
              <Scale className="w-4 h-4 text-amber-400" />
              <span>National Judicial Data Grid (NJDG) • e-Courts & Revenue Court Services</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Land & Revenue Litigation Verification Engine
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl">
              Cross-verify land parcels against civil courts, High Courts, and Sub-Divisional / Tehsildar revenue courts. Automatically detects active <span className="text-amber-300 font-bold">Stay Orders</span>, Injunctions, and statutory <span className="text-amber-300 font-bold">Lis Pendens (Sec 52 Transfer of Property Act)</span>.
            </p>
          </div>

          <a
            href="https://ecourts.gov.in"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold rounded-xl shadow-lg transition-all flex items-center space-x-2 shrink-0"
          >
            <span>Visit Official e-Courts</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Search Console */}
      <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => { setSearchType('CNR'); setQueryInput('JHJS010045232024'); }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              searchType === 'CNR'
                ? 'bg-amber-600 text-white shadow-md'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
            }`}
          >
            16-Digit CNR Number
          </button>
          <button
            onClick={() => { setSearchType('CASE_NO'); setQueryInput('TS-45/2024'); }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              searchType === 'CASE_NO'
                ? 'bg-amber-600 text-white shadow-md'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
            }`}
          >
            Case Number
          </button>
          <button
            onClick={() => { setSearchType('PARTY'); setQueryInput('Ramesh Mahato'); }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              searchType === 'PARTY'
                ? 'bg-amber-600 text-white shadow-md'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
            }`}
          >
            Party Name (Petitioner/Respondent)
          </button>
          <button
            onClick={() => { setSearchType('KHASRA'); setQueryInput('450/2'); }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              searchType === 'KHASRA'
                ? 'bg-amber-600 text-white shadow-md'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
            }`}
          >
            Khasra / Plot Number
          </button>
        </div>

        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={queryInput}
              onChange={(e) => setQueryInput(e.target.value)}
              placeholder={
                searchType === 'CNR' ? 'Enter 16-Character CNR Number (e.g. JHJS010045232024)...' :
                searchType === 'CASE_NO' ? 'Enter Case Number (e.g. TS-45/2024 or REV-108/2025)...' :
                searchType === 'PARTY' ? 'Enter Petitioner or Respondent Name...' :
                'Enter Khasra / Survey Number (e.g. 450/2)...'
              }
              className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 shrink-0"
          >
            <Scale className="w-4 h-4" />
            <span>{loading ? 'Searching Courts...' : 'Search NJDG Court Database'}</span>
          </button>
        </form>

        {/* Quick Demo Presets */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
          <span className="text-slate-400 text-[11px] font-bold">Try Sample Cases:</span>
          {sampleQueries.map((s, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSearchType(s.type as any);
                setQueryInput(s.val);
              }}
              className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-amber-500/20 text-slate-700 dark:text-slate-300 hover:text-amber-400 rounded-lg text-[11px] font-mono border border-slate-200 dark:border-slate-700 transition-colors"
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Section */}
      {searched && (
        <div className="space-y-4">
          <h2 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center space-x-2">
            <FileText className="w-5 h-5 text-amber-500" />
            <span>Litigation Search Results ({searchResults.length} Records Found)</span>
          </h2>

          {searchResults.length === 0 ? (
            <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">
                No Active Litigation Records Found
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                No pending title suits, stay orders, or revenue court disputes are registered for query <span className="font-mono text-emerald-500 font-bold">{queryInput}</span>.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {searchResults.map((c, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-3xl border shadow-lg space-y-4 transition-all ${
                    c.stay_order_active
                      ? 'bg-red-950/20 dark:bg-red-950/30 border-red-500/50'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/60 dark:border-slate-800 pb-3">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-slate-900 text-amber-300 rounded border border-slate-700">
                          CNR: {c.cnr_number}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                          c.risk_level === 'CRITICAL' ? 'bg-red-500/20 text-red-400 border border-red-500/40' :
                          c.risk_level === 'HIGH' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40' :
                          'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        }`}>
                          {c.risk_level} LITIGATION RISK
                        </span>
                      </div>
                      <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                        {c.case_no} — {c.case_type}
                      </h3>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                        {c.court_name}
                      </div>
                    </div>

                    {c.stay_order_active && (
                      <div className="flex items-center space-x-1.5 px-3 py-1 bg-red-600/20 text-red-400 rounded-xl border border-red-500 text-xs font-bold shrink-0 animate-pulse">
                        <ShieldAlert className="w-4 h-4" />
                        <span>ACTIVE STAY ORDER</span>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                    <div className="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                      <div className="text-[10px] text-slate-400 font-bold uppercase">Petitioner</div>
                      <div className="font-bold text-slate-800 dark:text-slate-200">{c.petitioner}</div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                      <div className="text-[10px] text-slate-400 font-bold uppercase">Respondent</div>
                      <div className="font-bold text-slate-800 dark:text-slate-200">{c.respondent}</div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                      <div className="text-[10px] text-slate-400 font-bold uppercase">Next Hearing Date</div>
                      <div className="font-bold text-amber-500">{c.next_hearing_date} ({c.stage})</div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                      <div className="text-[10px] text-slate-400 font-bold uppercase">Statute Applied</div>
                      <div className="font-bold text-sky-400">{c.lis_pendens_statute}</div>
                    </div>
                  </div>

                  {/* Stay Details Alert */}
                  {c.stay_order_active && (
                    <div className="p-3.5 bg-red-900/20 border border-red-700/60 rounded-xl text-xs text-red-200 space-y-1">
                      <div className="font-bold flex items-center space-x-1.5 text-red-400">
                        <AlertTriangle className="w-4 h-4" />
                        <span>Judicial Restraint Notice:</span>
                      </div>
                      <p className="leading-relaxed">{c.stay_details}</p>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
                    <span className="text-slate-500">
                      Linked Land Parcel: <span className="font-mono text-sky-400 font-bold">{c.land_identity_id}</span> (Plot {c.khasra_no})
                    </span>

                    <Link
                      to={`/land/${encodeURIComponent(c.land_identity_id)}`}
                      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-sky-400 font-bold rounded-xl border border-sky-800 transition-all flex items-center space-x-1.5"
                    >
                      <span>Inspect Parcel 3D Profile</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
