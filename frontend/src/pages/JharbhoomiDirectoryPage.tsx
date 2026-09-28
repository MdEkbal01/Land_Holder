import React, { useState, useEffect } from 'react';
import { Globe, ExternalLink, FileText, Download, ShieldCheck, Search, BookOpen, Building2, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface ServiceItem {
  id: string;
  title_hi: string;
  title_en: string;
  category: string;
  official_url: string;
  description: string;
}

export interface SOPItem {
  title: string;
  url: string;
  type: string;
}

export interface CircularItem {
  title: string;
  circular_no: string;
  date: string;
  url: string;
}

export const JharbhoomiDirectoryPage: React.FC = () => {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [sops, setSops] = useState<SOPItem[]>([]);
  const [circulars, setCirculars] = useState<CircularItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('/api/v1/official/jharbhoomi-directory')
      .then(res => res.json())
      .then(data => {
        setServices(data.core_services || []);
        setSops(data.sops || []);
        setCirculars(data.circulars || []);
      })
      .catch(err => console.error("Failed loading Jharbhoomi portal data", err))
      .finally(() => setLoading(false));
  }, []);

  const categories = ['ALL', 'Land Records', 'Citizen Services', 'Grievance & Rectification', 'GIS Mapping', 'Tax & Fees', 'Legal & Dispute'];

  const filteredServices = activeCategory === 'ALL'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-indigo-950 text-white p-6 sm:p-8 rounded-3xl border border-sky-800 shadow-2xl space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold border border-sky-500/40">
              <Globe className="w-3.5 h-3.5" />
              <span>Official Government Portal Synchronization Layer</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Jharbhoomi (झारभूमि) Official Portal & Services Directory
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl">
              Complete index of land record portals, Register-II ledgers, Khatian view, Online Lagan payment, eRCMS court cases, Parishodhan corrections, SOP guidelines, and departmental gazettes copied directly from <span className="font-mono text-sky-300">jharbhoomi.jharkhand.gov.in/newhome2</span>.
            </p>
          </div>

          <a
            href="https://jharbhoomi.jharkhand.gov.in/newhome2"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-xl shadow-lg transition-all flex items-center space-x-2 shrink-0"
          >
            <span>Visit Official Jharbhoomi Site</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeCategory === cat
                ? 'bg-sky-600 text-white shadow-md'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {cat === 'ALL' ? 'All Services (15)' : cat}
          </button>
        ))}
      </div>

      {/* Grid of Services */}
      <div className="space-y-4">
        <h2 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center space-x-2">
          <Layers className="w-5 h-5 text-sky-500" />
          <span>Core Land Record Portals & Citizen Services</span>
        </h2>

        {loading ? (
          <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs text-slate-500">
            Loading Jharbhoomi official service index...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredServices.map(service => (
              <div
                key={service.id}
                className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-sky-500/40 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 rounded border border-sky-300 dark:border-sky-800 uppercase">
                      {service.category}
                    </span>
                    <a
                      href={service.official_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-sky-500 transition-colors"
                      title="Open in official portal"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {service.title_hi}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {service.title_en}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <Link
                    to="/search"
                    className="text-sky-600 dark:text-sky-400 font-bold flex items-center space-x-1 hover:underline"
                  >
                    <span>Search in System</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={service.official_url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-300 text-[11px] font-bold rounded-lg transition-colors inline-flex items-center space-x-1"
                  >
                    <span>Official Link</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* SOP Guidelines & PDF Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
          <h2 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-emerald-500" />
            <span>Standard Operating Procedures (SOPs) & Guidelines</span>
          </h2>
          <div className="space-y-2.5">
            {sops.map((sop, idx) => (
              <a
                key={idx}
                href={sop.url}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 border border-slate-200 dark:border-slate-700/60 rounded-xl flex items-center justify-between text-xs transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <FileText className="w-4 h-4 text-emerald-500 shrink-0" />
                  <div>
                    <div className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                      {sop.title}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">Format: {sop.type}</div>
                  </div>
                </div>
                <Download className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Circulars & Gazette Notifications */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
          <h2 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center space-x-2">
            <Building2 className="w-5 h-5 text-amber-500" />
            <span>Departmental Circulars & Notifications</span>
          </h2>
          <div className="space-y-2.5">
            {circulars.map((circ, idx) => (
              <a
                key={idx}
                href={circ.url}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-slate-50 dark:bg-slate-800/60 hover:bg-amber-50 dark:hover:bg-amber-950/30 border border-slate-200 dark:border-slate-700/60 rounded-xl flex items-center justify-between text-xs transition-all group"
              >
                <div className="space-y-0.5">
                  <div className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 line-clamp-1">
                    {circ.title}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    Circular No: {circ.circular_no} • Date: {circ.date}
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-500 transition-colors shrink-0 ml-2" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
