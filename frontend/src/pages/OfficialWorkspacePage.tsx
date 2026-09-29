import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  Building2, ShieldCheck, FileCheck, AlertTriangle, CheckCircle2, 
  XCircle, Clock, MapPin, User, ExternalLink, Search, Filter, 
  RefreshCw, Stamp, Lock, Sparkles, X, Check, Eye, EyeOff, 
  ShieldAlert, KeyRound, ArrowRight, AlertOctagon, Plus, FileText, 
  Landmark, CheckSquare, MessageSquare, Download, Share2, Award
} from 'lucide-react';
import { 
  LandRecordChangeRequest, 
  getChangeRequests, 
  createChangeRequest, 
  getMasterLandRecords, 
  ChangeRequestType 
} from '../services/landRecordsService';
import { 
  generateMutationOrderPDF, 
  generateRecordOfRightsPDF, 
  generateDocumentVerificationCertificatePDF, 
  downloadPDF 
} from '../services/pdfService';
import { LandParcel, UserDocument } from '../types';

interface OfficialWorkspacePageProps {
  onShowToast?: (type: 'success' | 'error' | 'info', title: string, description?: string) => void;
}

export const OfficialWorkspacePage: React.FC<OfficialWorkspacePageProps> = ({ onShowToast }) => {
  const { user, isOfficial, isAdmin, login } = useAuth();
  const navigate = useNavigate();

  // Navigation Tabs for Tehsildar Workspace
  const [activeTab, setActiveTab] = useState<'PARCELS' | 'NEW_REQUEST' | 'MY_REQUESTS' | 'DOCUMENTS' | 'GRIEVANCES'>('PARCELS');

  // Officer Security Authentication Form (If not logged in as officer)
  const [officerLoginId, setOfficerLoginId] = useState('');
  const [officerPassword, setOfficerPassword] = useState('');
  const [showOfficerPass, setShowOfficerPass] = useState(false);
  const [officerAuthError, setOfficerAuthError] = useState('');
  const [officerAuthLoading, setOfficerAuthLoading] = useState(false);

  // Land Parcels under Officer Jurisdiction
  const [parcels, setParcels] = useState<LandParcel[]>([]);
  const [parcelSearch, setParcelSearch] = useState('');
  const [selectedParcelForMutation, setSelectedParcelForMutation] = useState<LandParcel | null>(null);

  // My Submitted Requests & Status
  const [myRequests, setMyRequests] = useState<LandRecordChangeRequest[]>([]);
  const [requestFilter, setRequestFilter] = useState<'ALL' | 'PENDING' | 'APPROVED' | 'REJECTED'>('ALL');

  // New Request Form State
  const [mutationForm, setMutationForm] = useState({
    land_identity_id: '',
    change_type: 'MUTATION_SALE' as ChangeRequestType,
    state: 'Uttar Pradesh',
    district: 'Gautam Buddha Nagar',
    tehsil: 'Dadri',
    mauza: 'Bhangel',
    khata_no: '340',
    khesra_no: '112/1',
    current_owner: 'Surendra Kumar Verma',
    proposed_owner: '',
    current_area_acre: 0.75,
    proposed_area_acre: 0.75,
    proposed_khata_no: '',
    proposed_khesra_no: '',
    proposed_land_type: 'Abadi / Residential',
    justification: '',
    field_inspection_report: '',
    memo_reference_no: '',
    supporting_doc_name: 'Sale_Deed_Registered.pdf'
  });

  // Citizen Uploaded Documents Queue (Mock/Existing)
  const [pendingDocs, setPendingDocs] = useState<UserDocument[]>([
    {
      id: 101,
      document_id: "DOC-2026-993401",
      user_id: "USR-CIT-1002",
      land_identity_id: "UP-GAU-DAD-BHAN-P340-PL112-1",
      title: "Registered Sale Deed (Plot 112/1)",
      document_type: "SALE_DEED",
      state: "Uttar Pradesh",
      district: "Gautam Buddha Nagar",
      khata_khasra_no: "Gata 340 / Plot 112/1",
      issuing_authority: "Dadri Sub-Registrar Office",
      issue_date: "2025-10-18",
      file_name: "Sale_Deed_Dadri_Plot112.pdf",
      file_size_kb: 340,
      file_hash: "d41d8cd98f00b204e9800998ecf8427e9921b78291ac04d1efc5357876a3bdc2",
      verification_status: "PENDING",
      remarks: "Citizen uploaded for official digital seal & Revenue validation.",
      created_at: "2026-03-01",
      citizen_name: "Surendra Kumar Verma"
    },
    {
      id: 102,
      document_id: "DOC-2026-993402",
      user_id: "USR-CIT-1003",
      land_identity_id: "JH-BOK-CHA-KURA-K125-K450-2",
      title: "Khatian Sabik Baseline Settlement Extract",
      document_type: "KHATAUNI_ROR",
      state: "Jharkhand",
      district: "Bokaro",
      khata_khasra_no: "Khata 125 / Plot 450/2",
      issuing_authority: "Chas Settlement Office",
      issue_date: "2025-12-14",
      file_name: "Khatian_Record_Chas.pdf",
      file_size_kb: 410,
      file_hash: "a4f81c9703d15a9bc8f4204d1efc5357876a3bdc20e5c9b2075591bf0946b5a3",
      verification_status: "PENDING",
      remarks: "Requires Patwari / Halka Karamchari field sign-off.",
      created_at: "2026-03-03",
      citizen_name: "Ramesh Sharma"
    }
  ]);

  // Toast helper
  const [toastMsg, setToastMsg] = useState<{ show: boolean; msg: string; type: 'success' | 'error' | 'info' }>({ show: false, msg: '', type: 'info' });

  const triggerToast = (msg: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToastMsg({ show: true, msg, type });
    setTimeout(() => setToastMsg({ show: false, msg: '', type: 'info' }), 3500);
  };

  const loadData = () => {
    setParcels(getMasterLandRecords());
    setMyRequests(getChangeRequests());
  };

  useEffect(() => {
    loadData();
  }, []);

  // Officer Authenticate
  const handleOfficerAuthenticate = async (e: React.FormEvent) => {
    e.preventDefault();
    setOfficerAuthError('');
    if (!officerLoginId.trim()) {
      setOfficerAuthError('Please enter Revenue Officer User ID or Official Email.');
      return;
    }
    if (!officerPassword.trim()) {
      setOfficerAuthError('Please enter Officer Security Passcode.');
      return;
    }

    setOfficerAuthLoading(true);
    const res = await login(officerLoginId.trim(), officerPassword.trim());
    setOfficerAuthLoading(false);

    if (res.success) {
      triggerToast('Officer Authentication Verified! Revenue Authority Desk Unlocked.');
    } else {
      setOfficerAuthError(res.message || 'Invalid officer credentials. Access Denied.');
    }
  };

  // Quick fill helper for Tehsildar persona
  const handleQuickFillTahsildar = () => {
    setOfficerLoginId('tahsildar_dadri');
    setOfficerPassword('Officer@Dadri2026#');
    setOfficerAuthError('');
  };

  // Select parcel to initiate mutation request
  const handleSelectParcelForMutation = (parcel: LandParcel) => {
    setSelectedParcelForMutation(parcel);
    setMutationForm({
      land_identity_id: parcel.land_identity_id,
      change_type: 'MUTATION_SALE',
      state: parcel.state,
      district: parcel.district,
      tehsil: parcel.anchal,
      mauza: parcel.mauza,
      khata_no: parcel.khata_no,
      khesra_no: parcel.khesra_no,
      current_owner: parcel.owner_name || 'Recorded Raiyat',
      proposed_owner: '',
      current_area_acre: parcel.area_acre,
      proposed_area_acre: parcel.area_acre,
      proposed_khata_no: `${parcel.khata_no}/1`,
      proposed_khesra_no: parcel.khesra_no,
      proposed_land_type: parcel.land_type,
      justification: `Application submitted under Section 14 of State Land Revenue Act for formal mutation of Plot ${parcel.khesra_no}.`,
      field_inspection_report: `Halka Karamchari & Circle Amin conducted on-site boundary inspection. Boundary pillars intact and possession verified.`,
      memo_reference_no: `${parcel.anchal.toUpperCase()}/MUT/${new Date().getFullYear()}/${Math.floor(1000 + Math.random() * 9000)}`,
      supporting_doc_name: `Sale_Deed_${parcel.mauza}_Plot${parcel.khesra_no.replace('/', '_')}.pdf`
    });
    setActiveTab('NEW_REQUEST');
  };

  // Submit Mutation / Record Update Request to Admin
  const handleSubmitMutationRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mutationForm.proposed_owner.trim()) {
      triggerToast('Please enter the Proposed New Owner Name.', 'error');
      return;
    }
    if (!mutationForm.justification.trim() || !mutationForm.field_inspection_report.trim()) {
      triggerToast('Please provide officer justification and field inspection notes.', 'error');
      return;
    }

    const newReq = createChangeRequest({
      ...mutationForm,
      officer_user_id: user?.user_id || 'USR-OFF-2001',
      officer_name: user?.full_name || 'Vikramaditya Rao',
      officer_designation: user?.designation || 'Tahsildar / Circle Officer',
      officer_emp_code: user?.employee_id || 'UP-REV-OFF-8821'
    });

    triggerToast(
      `✅ Mutation Request ${newReq.id} submitted to National Admin for approval!`,
      'success'
    );

    loadData();
    setActiveTab('MY_REQUESTS');
  };

  // Filtered parcels
  const filteredParcels = parcels.filter(p => 
    p.land_identity_id.toLowerCase().includes(parcelSearch.toLowerCase()) ||
    p.owner_name?.toLowerCase().includes(parcelSearch.toLowerCase()) ||
    p.mauza.toLowerCase().includes(parcelSearch.toLowerCase()) ||
    p.khata_no.includes(parcelSearch) ||
    p.khesra_no.includes(parcelSearch)
  );

  // Filtered mutation change requests
  const filteredRequests = myRequests.filter(req => {
    if (requestFilter === 'ALL') return true;
    return req.status === requestFilter;
  });

  // PDF Download Handlers
  const handleDownloadRoR = (parcel: LandParcel) => {
    const doc = generateRecordOfRightsPDF(parcel);
    downloadPDF(doc, `Certified_RoR_${parcel.land_identity_id}.pdf`);
    triggerToast(`📄 Certified RoR PDF for ${parcel.land_identity_id} downloaded!`);
  };

  const handleDownloadMutationOrder = (req: LandRecordChangeRequest) => {
    const doc = generateMutationOrderPDF(req);
    downloadPDF(doc, `Mutation_Order_${req.id}.pdf`);
    triggerToast(`📄 Official Mutation Order PDF for ${req.id} downloaded!`);
  };

  const handleAffixSealAndDownload = (docData: UserDocument) => {
    const doc = generateDocumentVerificationCertificatePDF(
      docData,
      user?.full_name || 'Vikramaditya Rao (Tahsildar / Circle Officer)'
    );
    downloadPDF(doc, `Verification_Certificate_${docData.document_id}.pdf`);
    setPendingDocs(prev => prev.map(d => d.id === docData.id ? { ...d, verification_status: 'OFFICIALLY_VERIFIED' } : d));
    triggerToast(`🏛️ Digital Seal Affixed & Certificate PDF for ${docData.document_id} downloaded!`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 font-sans">
      
      {/* Toast Notification */}
      {toastMsg.show && (
        <div className={`fixed bottom-6 right-6 z-50 px-5 py-3.5 rounded-2xl shadow-2xl flex items-center space-x-3 text-sm font-bold text-white transition-all transform translate-y-0 ${
          toastMsg.type === 'error' ? 'bg-rose-600' : toastMsg.type === 'info' ? 'bg-sky-600' : 'bg-emerald-600'
        }`}>
          {toastMsg.type === 'error' ? <AlertTriangle className="w-5 h-5 shrink-0" /> : <CheckCircle2 className="w-5 h-5 shrink-0" />}
          <span>{toastMsg.msg}</span>
        </div>
      )}

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#0d4d2f] via-[#137a4d] to-[#0a3821] p-6 sm:p-8 rounded-3xl border border-emerald-800 text-white shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-400/30 text-emerald-200 text-xs font-bold">
              <Landmark className="w-3.5 h-3.5" />
              <span>Tehsil & Circle Revenue Officer Authority Desk</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Tahsildar Digital Workspace & Mutation Portal
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100/90 max-w-2xl">
              Inspect Tehsil land records, initiate mutation & partition proposals to National Admin, verify citizen deeds, and issue digital RoRs.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <div className="px-4 py-2 bg-emerald-950/80 border border-emerald-700/80 rounded-2xl text-xs font-mono font-bold text-emerald-200">
              OFFICER: {user?.full_name || 'Vikramaditya Rao'} • {user?.jurisdiction_tehsil || 'Dadri'} Circle
            </div>
            <button
              onClick={loadData}
              className="p-2.5 rounded-2xl bg-emerald-900/60 hover:bg-emerald-800 border border-emerald-700 text-emerald-200 transition-colors"
              title="Refresh Registry Data"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* If user is not logged in as Officer/Admin, show Revenue Signature Gate */}
      {!isOfficial && !isAdmin && (
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl max-w-md mx-auto space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-50 text-[#137a4d] border border-emerald-200 mb-2">
              <KeyRound className="w-7 h-7" />
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
              Revenue Officer Signature Clearance
            </h2>
            <p className="text-xs text-slate-500">
              Enter official Tahsildar / Circle Officer credentials to access the revenue mutation desk.
            </p>
          </div>

          {officerAuthError && (
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{officerAuthError}</span>
            </div>
          )}

          <form onSubmit={handleOfficerAuthenticate} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Officer User ID / Email</label>
              <input
                type="text"
                value={officerLoginId}
                onChange={(e) => setOfficerLoginId(e.target.value)}
                placeholder="e.g. tahsildar_dadri or official email"
                required
                className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Security Passcode</label>
              <div className="relative">
                <input
                  type={showOfficerPass ? 'text' : 'password'}
                  value={officerPassword}
                  onChange={(e) => setOfficerPassword(e.target.value)}
                  placeholder="Officer security passcode"
                  required
                  className="w-full p-3 pr-10 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
                />
                <button
                  type="button"
                  onClick={() => setShowOfficerPass(!showOfficerPass)}
                  className="absolute right-3 top-3 text-slate-400"
                >
                  {showOfficerPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={officerAuthLoading}
              className="w-full py-3.5 bg-[#137a4d] hover:bg-[#0f633e] text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center space-x-2"
            >
              {officerAuthLoading ? <span>Authenticating...</span> : <span>Unlock Officer Desk &rarr;</span>}
            </button>
          </form>

          <div className="text-center pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={handleQuickFillTahsildar}
              className="text-[11px] text-[#137a4d] font-bold hover:underline"
            >
              ✨ Click to auto-fill Tahsildar Dadri credentials
            </button>
          </div>
        </div>
      )}

      {/* Authenticated Officer Workspace */}
      {(isOfficial || isAdmin) && (
        <div className="space-y-6">
          
          {/* Navigation Tabs */}
          <div className="flex items-center space-x-2 border-b border-slate-200 dark:border-slate-800 pb-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab('PARCELS')}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center space-x-2 whitespace-nowrap cursor-pointer ${
                activeTab === 'PARCELS'
                  ? 'bg-[#137a4d] text-white shadow-md shadow-[#137a4d]/25'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Landmark className="w-4 h-4" />
              <span>Tehsil Land Records ({parcels.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('NEW_REQUEST')}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center space-x-2 whitespace-nowrap cursor-pointer ${
                activeTab === 'NEW_REQUEST'
                  ? 'bg-[#137a4d] text-white shadow-md shadow-[#137a4d]/25'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Plus className="w-4 h-4" />
              <span>Initiate Record Update Request</span>
            </button>

            <button
              onClick={() => setActiveTab('MY_REQUESTS')}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center space-x-2 whitespace-nowrap cursor-pointer relative ${
                activeTab === 'MY_REQUESTS'
                  ? 'bg-[#137a4d] text-white shadow-md shadow-[#137a4d]/25'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <CheckSquare className="w-4 h-4" />
              <span>Sent Requests & Admin Approvals ({myRequests.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('DOCUMENTS')}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center space-x-2 whitespace-nowrap cursor-pointer ${
                activeTab === 'DOCUMENTS'
                  ? 'bg-[#137a4d] text-white shadow-md shadow-[#137a4d]/25'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <FileCheck className="w-4 h-4" />
              <span>Citizen Deed Verification ({pendingDocs.length})</span>
            </button>
          </div>

          {/* =========================================================================
              TAB 1: TEHSIL LAND RECORDS (BROWSE & INITIATE MUTATION)
             ========================================================================= */}
          {activeTab === 'PARCELS' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-200 dark:border-slate-800">
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                  <input
                    type="text"
                    value={parcelSearch}
                    onChange={(e) => setParcelSearch(e.target.value)}
                    placeholder="Search by Khata, Khesra, ULPIN, or Owner Name..."
                    className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs focus:outline-none focus:border-[#137a4d]"
                  />
                </div>

                <div className="text-xs text-slate-500 font-semibold">
                  Select any parcel below to propose a Mutation / Record Change to Admin.
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredParcels.map(p => (
                  <div
                    key={p.id}
                    className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:border-[#137a4d] transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <span className="font-mono text-[11px] font-bold text-sky-600 dark:text-sky-400">
                          {p.land_identity_id}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-[#137a4d] border border-emerald-200">
                          {p.state}
                        </span>
                      </div>

                      <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                        {p.owner_name}
                      </h3>

                      <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                        <div><strong>Khata No:</strong> {p.khata_no} • <strong>Khesra / Plot:</strong> {p.khesra_no}</div>
                        <div><strong>Recorded Area:</strong> {p.area_acre} Acres ({p.land_type})</div>
                        <div><strong>Mauza & Circle:</strong> {p.mauza}, {p.anchal} ({p.district})</div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                      <button
                        type="button"
                        onClick={() => handleSelectParcelForMutation(p)}
                        className="w-full py-2.5 px-4 bg-emerald-50 hover:bg-[#137a4d] text-[#137a4d] hover:text-white font-bold rounded-xl text-xs border border-emerald-200 transition-all flex items-center justify-center space-x-1.5 cursor-pointer shadow-sm"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Generate Mutation / Update Request</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDownloadRoR(p)}
                        className="w-full py-2 px-4 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-xl text-xs border border-slate-200 dark:border-slate-700 transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                        title="Download Certified Record of Rights PDF"
                      >
                        <Download className="w-3.5 h-3.5 text-[#137a4d]" />
                        <span>Download Certified RoR (PDF)</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =========================================================================
              TAB 2: GENERATE RECORD UPDATE / MUTATION REQUEST (CORE REQUIREMENT)
             ========================================================================= */}
          {activeTab === 'NEW_REQUEST' && (
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#137a4d] mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>Statutory Revenue Record Modification Gateway</span>
                </div>
                <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  Generate Land Record Mutation / Change Request
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  This proposal will be submitted to the National DILRMP Administrator for formal verification & live registry commit.
                </p>
              </div>

              <form onSubmit={handleSubmitMutationRequest} className="space-y-6 text-xs">
                
                {/* 1. Parcel & Change Type Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Land Parcel ULPIN / ID *
                    </label>
                    <input
                      type="text"
                      required
                      value={mutationForm.land_identity_id}
                      onChange={(e) => setMutationForm({ ...mutationForm, land_identity_id: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-mono"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Type of Record Change *
                    </label>
                    <select
                      value={mutationForm.change_type}
                      onChange={(e) => setMutationForm({ ...mutationForm, change_type: e.target.value as any })}
                      className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-bold"
                    >
                      <option value="MUTATION_SALE">Mutation by Registered Sale Deed (Dakhil Kharij)</option>
                      <option value="PARTITION">Partition / Batwara (Sub-division of Plot)</option>
                      <option value="SUCCESSION">Succession / Wirasat (Inheritance Transfer)</option>
                      <option value="NAME_AREA_CORRECTION">Correction of Name / Area / Boundary</option>
                      <option value="DISPUTE_FLAG">Flag Judicial Stay / Court Injunction</option>
                      <option value="LAND_CONVERSION_NA">Non-Agricultural (NA) Land Conversion</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Circle Officer Memo / Case No *
                    </label>
                    <input
                      type="text"
                      required
                      value={mutationForm.memo_reference_no}
                      onChange={(e) => setMutationForm({ ...mutationForm, memo_reference_no: e.target.value })}
                      placeholder="e.g. DADRI/MUT/2026/8991"
                      className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-mono"
                    />
                  </div>
                </div>

                {/* 2. Current Record vs Proposed New Record */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  {/* Left: Current Record State */}
                  <div className="space-y-3">
                    <h4 className="font-extrabold text-slate-700 dark:text-slate-300 text-xs uppercase tracking-wider">
                      Current Land Record State
                    </h4>
                    
                    <div>
                      <label className="block text-slate-500 mb-1">Current Owner Name</label>
                      <input
                        type="text"
                        value={mutationForm.current_owner}
                        onChange={(e) => setMutationForm({ ...mutationForm, current_owner: e.target.value })}
                        className="w-full p-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-slate-500 mb-1">Khata No</label>
                        <input
                          type="text"
                          value={mutationForm.khata_no}
                          onChange={(e) => setMutationForm({ ...mutationForm, khata_no: e.target.value })}
                          className="w-full p-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-500 mb-1">Khesra / Plot No</label>
                        <input
                          type="text"
                          value={mutationForm.khesra_no}
                          onChange={(e) => setMutationForm({ ...mutationForm, khesra_no: e.target.value })}
                          className="w-full p-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-500 mb-1">Recorded Area (Acres)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={mutationForm.current_area_acre}
                        onChange={(e) => setMutationForm({ ...mutationForm, current_area_acre: parseFloat(e.target.value) || 0 })}
                        className="w-full p-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
                      />
                    </div>
                  </div>

                  {/* Right: Proposed New Record State */}
                  <div className="space-y-3">
                    <h4 className="font-extrabold text-emerald-700 dark:text-emerald-400 text-xs uppercase tracking-wider">
                      Proposed Changes (After Mutation Approval)
                    </h4>

                    <div>
                      <label className="block font-bold text-slate-800 dark:text-white mb-1">
                        Proposed New Owner Name(s) *
                      </label>
                      <input
                        type="text"
                        required
                        value={mutationForm.proposed_owner}
                        onChange={(e) => setMutationForm({ ...mutationForm, proposed_owner: e.target.value })}
                        placeholder="e.g. Pooja Singhal & Amit Singhal"
                        className="w-full p-2.5 bg-white dark:bg-slate-800 border border-emerald-300 dark:border-emerald-700 rounded-xl font-bold text-[#137a4d]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-slate-600 dark:text-slate-300 mb-1">Proposed Khata No</label>
                        <input
                          type="text"
                          value={mutationForm.proposed_khata_no}
                          onChange={(e) => setMutationForm({ ...mutationForm, proposed_khata_no: e.target.value })}
                          placeholder="e.g. 340/B"
                          className="w-full p-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-600 dark:text-slate-300 mb-1">Proposed Khesra No</label>
                        <input
                          type="text"
                          value={mutationForm.proposed_khesra_no}
                          onChange={(e) => setMutationForm({ ...mutationForm, proposed_khesra_no: e.target.value })}
                          placeholder="e.g. 112/1-A"
                          className="w-full p-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-600 dark:text-slate-300 mb-1">Proposed Transacted Area (Acres)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={mutationForm.proposed_area_acre}
                        onChange={(e) => setMutationForm({ ...mutationForm, proposed_area_acre: parseFloat(e.target.value) || 0 })}
                        className="w-full p-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Field Verification & Officer Justification */}
                <div className="space-y-4">
                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Tahsildar / Circle Officer Justification *
                    </label>
                    <textarea
                      required
                      rows={2}
                      value={mutationForm.justification}
                      onChange={(e) => setMutationForm({ ...mutationForm, justification: e.target.value })}
                      placeholder="State reason for mutation, sale deed execution details, 30-day notice expiry, etc."
                      className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Halka Lekhpal / Karamchari & Amin Field Inspection Panchanama *
                    </label>
                    <textarea
                      required
                      rows={2}
                      value={mutationForm.field_inspection_report}
                      onChange={(e) => setMutationForm({ ...mutationForm, field_inspection_report: e.target.value })}
                      placeholder="Enter field boundary verification, physical possession confirmation, and raiyat statements..."
                      className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="flex items-center space-x-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 px-6 bg-[#137a4d] hover:bg-[#0f633e] text-white font-extrabold rounded-2xl shadow-md shadow-[#137a4d]/25 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Submit Mutation Request to National Admin for Approval</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('PARCELS')}
                    className="py-3.5 px-6 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 font-bold rounded-2xl"
                  >
                    Cancel
                  </button>
                </div>

              </form>
            </div>
          )}

          {/* =========================================================================
              TAB 3: SENT REQUESTS & REAL-TIME ADMIN APPROVAL TRACKER (CORE REQUIREMENT)
             ========================================================================= */}
          {activeTab === 'MY_REQUESTS' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-200 dark:border-slate-800">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold text-slate-500">Filter By Status:</span>
                  <div className="flex space-x-1.5 text-xs font-bold">
                    {(['ALL', 'PENDING', 'APPROVED', 'REJECTED'] as const).map(tab => (
                      <button
                        key={tab}
                        onClick={() => setRequestFilter(tab)}
                        className={`px-3 py-1.5 rounded-xl transition-all ${
                          requestFilter === tab
                            ? 'bg-[#137a4d] text-white'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-slate-500 font-semibold">
                  Tracking {filteredRequests.length} submitted requests
                </div>
              </div>

              <div className="space-y-4">
                {filteredRequests.map(req => (
                  <div
                    key={req.id}
                    className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-mono text-xs font-bold text-sky-600 dark:text-sky-400">
                            {req.id}
                          </span>
                          <span className="text-slate-400">•</span>
                          <span className="font-extrabold text-sm text-slate-900 dark:text-white">
                            {req.change_type.replace(/_/g, ' ')}
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          Memo: <strong>{req.memo_reference_no}</strong> • Parcel: <span className="font-mono">{req.land_identity_id}</span>
                        </div>
                      </div>

                      <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase ${
                        req.status === 'PENDING_ADMIN_APPROVAL'
                          ? 'bg-amber-100 text-amber-800 border border-amber-300'
                          : req.status === 'APPROVED_IMPLEMENTED'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 animate-pulse'
                          : 'bg-rose-100 text-rose-800 border border-rose-300'
                      }`}>
                        {req.status === 'PENDING_ADMIN_APPROVAL' ? '⏳ Pending Admin Approval' : req.status === 'APPROVED_IMPLEMENTED' ? '✅ Approved & Implemented to Registry' : '❌ Rejected'}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 space-y-1">
                        <div><strong>Previous Raiyat:</strong> {req.current_owner}</div>
                        <div><strong>Proposed Transfer:</strong> <span className="text-[#137a4d] font-bold">{req.proposed_owner}</span></div>
                        <div><strong>Khata / Khesra:</strong> {req.khata_no} / {req.khesra_no} &rarr; {req.proposed_khata_no || req.khata_no} / {req.proposed_khesra_no || req.khesra_no}</div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 space-y-1">
                        <div><strong>Submitted On:</strong> {req.submitted_at}</div>
                        <div><strong>Reviewed On:</strong> {req.reviewed_at || 'Awaiting Admin Action'}</div>
                        <div><strong>Admin Approver:</strong> {req.admin_approver_name || 'In Central Queue'}</div>
                      </div>
                    </div>

                    {req.admin_remarks && (
                      <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300 space-y-1">
                        <strong>Official Admin Remarks & Order:</strong>
                        <p>{req.admin_remarks}</p>
                      </div>
                    )}

                    <div className="pt-2 flex justify-end">
                      <button
                        type="button"
                        onClick={() => handleDownloadMutationOrder(req)}
                        className="py-2 px-4 bg-[#137a4d] hover:bg-[#0f633e] text-white font-bold rounded-xl text-xs flex items-center space-x-1.5 shadow-sm transition-all cursor-pointer"
                        title="Download Official Revenue Record Mutation Order PDF"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download Official Mutation Order (PDF)</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =========================================================================
              TAB 4: CITIZEN DEED VERIFICATION
             ========================================================================= */}
          {activeTab === 'DOCUMENTS' && (
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-4">
                <h3 className="font-extrabold text-sm text-slate-900 dark:text-white mb-3">
                  Citizen Uploaded Deeds & Record of Rights Verification Queue
                </h3>

                <div className="space-y-3">
                  {pendingDocs.map(doc => (
                    <div
                      key={doc.id}
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs"
                    >
                      <div className="space-y-1">
                        <div className="font-extrabold text-slate-900 dark:text-white flex items-center space-x-2">
                          <span>{doc.title}</span>
                          {doc.verification_status === 'OFFICIALLY_VERIFIED' && (
                            <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.2 rounded-full font-bold">
                              ✓ VERIFIED
                            </span>
                          )}
                        </div>
                        <div className="text-slate-500">
                          Applicant: <strong>{doc.citizen_name}</strong> • Parcel: <span className="font-mono">{doc.land_identity_id}</span>
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono">
                          Hash: {doc.file_hash.slice(0, 24)}...
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 shrink-0">
                        <button
                          onClick={() => handleAffixSealAndDownload(doc)}
                          className="px-3.5 py-2 bg-[#137a4d] hover:bg-[#0f633e] text-white font-bold rounded-xl flex items-center space-x-1.5 shadow-sm cursor-pointer"
                          title="Affix Official Digital Stamp & Download Certificate PDF"
                        >
                          <Stamp className="w-3.5 h-3.5" />
                          <span>Affix Digital Seal & Download PDF</span>
                        </button>

                        <button
                          onClick={() => handleAffixSealAndDownload(doc)}
                          className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 dark:text-slate-300 font-bold rounded-xl flex items-center space-x-1 border border-slate-200 dark:border-slate-700 cursor-pointer"
                          title="Download Certificate PDF"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>PDF</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
};
