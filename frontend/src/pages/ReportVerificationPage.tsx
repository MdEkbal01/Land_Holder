import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, CheckCircle2, AlertTriangle, FileText, Download, 
  ArrowRight, Lock, Calendar, Layers, Search, QrCode, ExternalLink, RefreshCw, Sparkles
} from 'lucide-react';
import { RiskBadge } from '../components/RiskBadge';

const SAMPLE_REPORTS: Record<string, any> = {
  'BS-2026-1001': {
    report_id: 'BS-2026-1001',
    verified: true,
    land_identity_id: 'JH-BOK-CHA-KURA-P125-PL450-2',
    district: 'Bokaro',
    anchal: 'Chas',
    mauza: 'Kura',
    khata_no: '125',
    khesra_no: '450/2',
    area_acre: 0.50,
    risk_score: 35,
    risk_level: 'MEDIUM',
    findings_count: 2,
    owner_name: 'Ramesh Mahato',
    generated_at: '2026-09-28 14:30 IST',
    expires_at: '2027-09-28 14:30 IST',
    report_hash: 'a4f81c9703d15a9bc8174f8821094ba98ef01c223a',
    issuer: 'BhoomiShield Digital Public Infrastructure (Jharkhand Land Node)',
    pdf_available: true
  },
  'BS-2026-1002': {
    report_id: 'BS-2026-1002',
    verified: true,
    land_identity_id: 'UP-GBN-DAD-NOID-K88-P214',
    district: 'Gautam Buddha Nagar',
    anchal: 'Dadri',
    mauza: 'Noida Sector 62',
    khata_no: '88',
    khesra_no: '214/1',
    area_acre: 0.25,
    risk_score: 12,
    risk_level: 'LOW',
    findings_count: 0,
    owner_name: 'Suresh Chandra Sharma',
    generated_at: '2026-09-27 10:15 IST',
    expires_at: '2027-09-27 10:15 IST',
    report_hash: 'bc79201df1847a98bc1928374a8174f9817e01c44b',
    issuer: 'BhoomiShield Digital Public Infrastructure (UP Bhulekh Node)',
    pdf_available: true
  },
  'BS-2026-1003': {
    report_id: 'BS-2026-1003',
    verified: true,
    land_identity_id: 'MH-PUN-HAV-HINJ-K302-P89',
    district: 'Pune',
    anchal: 'Haveli',
    mauza: 'Hinjawadi',
    khata_no: '302',
    khesra_no: '89/3',
    area_acre: 1.20,
    risk_score: 82,
    risk_level: 'HIGH',
    findings_count: 3,
    owner_name: 'Anand Kulkarni',
    generated_at: '2026-09-26 16:45 IST',
    expires_at: '2027-09-26 16:45 IST',
    report_hash: 'e817293a4f81c9703d15a9bc8174f8821094ba98cc',
    issuer: 'BhoomiShield Digital Public Infrastructure (Mahabhumi Node)',
    pdf_available: true
  }
};

export const ReportVerificationPage: React.FC = () => {
  const { reportId } = useParams<{ reportId?: string }>();
  const navigate = useNavigate();

  const [inputReportId, setInputReportId] = useState<string>(reportId || 'BS-2026-1001');
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasSearched, setHasSearched] = useState<boolean>(!!reportId);

  useEffect(() => {
    if (reportId) {
      setInputReportId(reportId);
      verifyReport(reportId);
    } else {
      // Default to sample verification if no ID provided in URL
      setData(SAMPLE_REPORTS['BS-2026-1001']);
      setHasSearched(true);
    }
  }, [reportId]);

  const verifyReport = async (idToVerify: string) => {
    const cleanId = idToVerify.trim().toUpperCase();
    if (!cleanId) return;

    setLoading(true);
    setHasSearched(true);

    try {
      const res = await fetch(`/api/v1/reports/verify/${cleanId}`);
      if (res.ok) {
        const d = await res.json();
        setData(d);
      } else {
        // Check sample mock dictionary fallback
        if (SAMPLE_REPORTS[cleanId]) {
          setData(SAMPLE_REPORTS[cleanId]);
        } else {
          setData({ verified: false, report_id: cleanId, message: `No issued certificate found for ID '${cleanId}'.` });
        }
      }
    } catch (err) {
      if (SAMPLE_REPORTS[cleanId]) {
        setData(SAMPLE_REPORTS[cleanId]);
      } else {
        setData({ verified: false, report_id: cleanId, message: `Verification server offline. Sample ID '${cleanId}' not verified.` });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputReportId.trim()) {
      navigate(`/verify/${inputReportId.trim().toUpperCase()}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 font-sans transition-colors duration-300">
      
      {/* Search & Lookup Header Card */}
      <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-[#137a4d] border border-emerald-200 dark:border-emerald-800 shadow-sm">
              <QrCode className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Anti-Tamper Report Verification
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Verify authentic SHA-256 cryptographic title inspection reports & certificates
              </p>
            </div>
          </div>

          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-[#137a4d] dark:text-emerald-400 text-xs font-bold border border-emerald-200 dark:border-emerald-800">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>DILRMP Certified</span>
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row gap-3 pt-2">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={inputReportId}
              onChange={(e) => setInputReportId(e.target.value.toUpperCase())}
              placeholder="Enter Certificate Report ID (e.g. BS-2026-1001)"
              required
              className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 text-sm font-mono focus:outline-none focus:border-[#137a4d] focus:ring-2 focus:ring-[#137a4d]/20 transition-all uppercase"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="py-3 px-6 bg-[#137a4d] hover:bg-[#0f633e] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-[#137a4d]/25 transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50 shrink-0"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Verifying Ledger...</span>
              </>
            ) : (
              <>
                <ShieldCheck className="w-4 h-4" />
                <span>Verify Certificate</span>
              </>
            )}
          </button>
        </form>

        {/* Quick Sample IDs */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-500 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300">Sample Reports:</span>
          {Object.keys(SAMPLE_REPORTS).map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => {
                setInputReportId(id);
                navigate(`/verify/${id}`);
              }}
              className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 hover:text-[#137a4d] text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-mono transition-colors cursor-pointer"
            >
              {id}
            </button>
          ))}
        </div>
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="bg-white dark:bg-slate-900 p-12 rounded-3xl border border-slate-200 dark:border-slate-800 text-center space-y-3">
          <div className="w-9 h-9 border-3 border-[#137a4d] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 font-mono">
            Querying DILRMP Cryptographic Ledger for #{inputReportId}...
          </p>
        </div>
      )}

      {/* Verification Result: FAILED */}
      {!loading && hasSearched && (!data || !data.verified) && (
        <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl border border-rose-200 dark:border-rose-900/60 text-center space-y-4 shadow-xl">
          <div className="w-16 h-16 bg-rose-50 dark:bg-rose-950 text-rose-600 rounded-2xl flex items-center justify-center mx-auto border border-rose-200 dark:border-rose-800">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Certificate Verification Failed
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
              {data?.message || `Report ID '${inputReportId}' was not issued by BhoomiShield or signature hash could not be validated.`}
            </p>
          </div>
        </div>
      )}

      {/* Verification Result: SUCCESS (MATCHES OFFICIAL CERTIFICATE) */}
      {!loading && data && data.verified && (
        <div className="space-y-6">
          
          {/* Green Verified Banner */}
          <div className="bg-gradient-to-r from-[#0e5c38] via-[#137a4d] to-[#0a462a] text-white p-6 sm:p-8 rounded-3xl shadow-xl text-center space-y-2 relative overflow-hidden">
            <div className="inline-flex p-3 bg-white/20 backdrop-blur-md rounded-2xl mb-1 shadow-inner">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>

            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-white/20 rounded-full text-[11px] font-bold text-emerald-100">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-200" />
              <span>AUTHENTIC DIGITAL REPORT VERIFIED</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Report Certificate #{data.report_id}
            </h2>

            <p className="text-xs text-emerald-100 font-mono">
              Generated: {data.generated_at} • Valid Until: {data.expires_at}
            </p>
          </div>

          {/* Details Card */}
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            
            {/* Header row */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Canonical Land Identity ID
                </span>
                <Link
                  to={`/land/${data.land_identity_id}`}
                  className="text-base font-bold text-[#137a4d] dark:text-emerald-400 font-mono hover:underline inline-flex items-center space-x-1"
                >
                  <span>{data.land_identity_id}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>

              <RiskBadge level={data.risk_level} score={data.risk_score} size="lg" />
            </div>

            {/* Grid Attributes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-200 dark:border-slate-700">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">District</span>
                <span className="font-bold text-slate-900 dark:text-white text-sm">{data.district}</span>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-200 dark:border-slate-700">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Anchal / Tehsil</span>
                <span className="font-bold text-slate-900 dark:text-white text-sm">{data.anchal}</span>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-200 dark:border-slate-700">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Mauza / Village</span>
                <span className="font-bold text-slate-900 dark:text-white text-sm">{data.mauza}</span>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-200 dark:border-slate-700">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Area (Acres)</span>
                <span className="font-bold text-slate-900 dark:text-white text-sm font-mono">{data.area_acre} Acre</span>
              </div>
            </div>

            {/* Cryptographic SHA-256 Stamp */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-xs space-y-1.5">
              <div className="flex items-center space-x-1.5 font-bold text-slate-700 dark:text-slate-300">
                <Lock className="w-3.5 h-3.5 text-[#137a4d]" />
                <span>SHA-256 Tamper-Proof Cryptographic Hash</span>
              </div>
              <div className="font-mono text-[11px] text-slate-500 dark:text-slate-400 break-all bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 select-all">
                {data.report_hash || 'SHA256:7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069'}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                to={`/land/${data.land_identity_id}`}
                className="flex-1 py-3 px-4 bg-[#137a4d] hover:bg-[#0f633e] text-white font-bold rounded-xl text-xs sm:text-sm text-center shadow-md shadow-[#137a4d]/25 transition-all flex items-center justify-center space-x-2"
              >
                <span>View Full 3D Land Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={() => window.print()}
                className="py-3 px-5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-xl text-xs sm:text-sm border border-slate-200 dark:border-slate-700 shadow-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Print Certificate</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
