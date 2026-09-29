import React, { useState, useEffect } from 'react';
import { 
  Building2, ShieldCheck, CheckCircle2, UserCheck, Activity, Eye, EyeOff, 
  FileText, Users, Server, AlertTriangle, Power, Clock, ArrowRight, Check, 
  X, Search, Filter, RefreshCw, Plus, Edit2, Trash2, Download, ShieldAlert,
  MapPin, Landmark, FileSpreadsheet, Lock, Sparkles, CheckSquare, MessageSquare
} from 'lucide-react';
import { useAuth, RegisteredUserDetailed } from '../context/AuthContext';
import { 
  LandRecordChangeRequest, 
  getChangeRequests, 
  reviewChangeRequest, 
  getMasterLandRecords, 
  addLandParcelRecord, 
  updateLandParcelRecord, 
  deleteLandParcelRecord, 
  getAuditLogs, 
  AuditLogEntry, 
  getSystemMaintenanceConfig, 
  setSystemMaintenanceMode,
  SystemMaintenanceConfig
} from '../services/landRecordsService';
import { LandParcel } from '../types';
import { 
  generateMutationOrderPDF, 
  generateRecordOfRightsPDF, 
  generateUserDossierPDF, 
  generateAuditReportPDF, 
  downloadPDF 
} from '../services/pdfService';

interface AdminDashboardProps {
  userRole?: string;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = () => {
  const { user, isAdmin, getAllRegisteredUsersDetailed, adminUpdateUser, adminDeleteUser, adminCreateUser, adminToggleUserStatus } = useAuth();

  // Active Tab
  const [activeTab, setActiveTab] = useState<'OVERVIEW' | 'REQUESTS' | 'USERS' | 'LAND_RECORDS' | 'AUDIT_LOGS'>('OVERVIEW');

  // Maintenance Mode State
  const [maintenanceConfig, setMaintenanceConfig] = useState<SystemMaintenanceConfig>(getSystemMaintenanceConfig());
  const [maintenanceReasonInput, setMaintenanceReasonInput] = useState('');
  const [estimatedUptimeInput, setEstimatedUptimeInput] = useState('');
  const [showMaintenanceModal, setShowMaintenanceModal] = useState(false);

  // Tehsildar Change Requests State
  const [changeRequests, setChangeRequests] = useState<LandRecordChangeRequest[]>([]);
  const [selectedRequest, setSelectedRequest] = useState<LandRecordChangeRequest | null>(null);
  const [requestFilter, setRequestFilter] = useState<'ALL' | 'PENDING' | 'APPROVED' | 'REJECTED'>('ALL');
  const [adminRemarks, setAdminRemarks] = useState('');
  const [reviewSuccessMsg, setReviewSuccessMsg] = useState('');

  // User Management State
  const [usersList, setUsersList] = useState<RegisteredUserDetailed[]>([]);
  const [userSearch, setUserSearch] = useState('');
  const [userRoleFilter, setUserRoleFilter] = useState<string>('ALL');
  const [revealedPasswords, setRevealedPasswords] = useState<Record<string, boolean>>({});
  
  // User Modal State
  const [showUserModal, setShowUserModal] = useState(false);
  const [editingUser, setEditingUser] = useState<RegisteredUserDetailed | null>(null);
  const [userForm, setUserForm] = useState({
    full_name: '',
    username: '',
    email: '',
    password: '',
    mobile: '',
    role: 'CITIZEN' as any,
    department: '',
    designation: '',
    employee_id: '',
    jurisdiction_state: 'Uttar Pradesh',
    jurisdiction_district: 'Gautam Buddha Nagar',
    jurisdiction_tehsil: 'Dadri',
    aadhaar_last4: '5412',
    pan_number: 'ABCPS1234F',
    kyc_status: 'AADHAAR_LINKED' as any
  });

  // Land Records State
  const [landRecords, setLandRecords] = useState<LandParcel[]>([]);
  const [parcelSearch, setParcelSearch] = useState('');
  const [selectedStateFilter, setSelectedStateFilter] = useState('ALL');
  const [showParcelModal, setShowParcelModal] = useState(false);
  const [editingParcel, setEditingParcel] = useState<LandParcel | null>(null);
  const [parcelForm, setParcelForm] = useState({
    land_identity_id: '',
    state: 'Uttar Pradesh',
    district: 'Gautam Buddha Nagar',
    anchal: 'Dadri',
    halka: 'Ward 01',
    mauza: 'Bhangel',
    khata_no: '',
    khesra_no: '',
    area_acre: 1.0,
    land_type: 'Abadi / Residential',
    owner_name: ''
  });

  // Audit Logs State
  const [auditLogs, setAuditLogs] = useState<AuditLogEntry[]>([]);
  const [auditSearch, setAuditSearch] = useState('');

  // Toast Notification
  const [toast, setToast] = useState<{ show: boolean; msg: string; type: 'success' | 'error' | 'info' }>({ show: false, msg: '', type: 'info' });

  const showToastMsg = (msg: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToast({ show: true, msg, type });
    setTimeout(() => setToast({ show: false, msg: '', type: 'info' }), 3500);
  };

  // Load All Data
  const refreshAllData = () => {
    setChangeRequests(getChangeRequests());
    setLandRecords(getMasterLandRecords());
    setAuditLogs(getAuditLogs());
    setMaintenanceConfig(getSystemMaintenanceConfig());
    if (getAllRegisteredUsersDetailed) {
      setUsersList(getAllRegisteredUsersDetailed());
    }
  };

  useEffect(() => {
    refreshAllData();
  }, []);

  // 1. Maintenance Mode Toggle
  const handleToggleMaintenance = (targetState: boolean) => {
    const updated = setSystemMaintenanceMode(
      targetState,
      {
        maintenance_reason: maintenanceReasonInput || (targetState ? 'Emergency Infrastructure Maintenance' : 'Operational'),
        estimated_uptime: estimatedUptimeInput || '45 minutes'
      },
      user?.full_name || 'National DILRMP Administrator'
    );
    setMaintenanceConfig(updated);
    setShowMaintenanceModal(false);
    showToastMsg(
      targetState 
        ? '⚠️ System Maintenance Mode ACTIVATED! Public access locked.' 
        : '✅ Maintenance Mode DEACTIVATED. Live portal restored.',
      targetState ? 'error' : 'success'
    );
    refreshAllData();
  };

  // PDF Document Generators
  const handleDownloadMutationOrder = (req: LandRecordChangeRequest) => {
    const doc = generateMutationOrderPDF(req);
    downloadPDF(doc, `Official_Mutation_Order_${req.id}.pdf`);
    showToastMsg(`📄 Official Mutation Order PDF for ${req.id} downloaded!`);
  };

  const handleDownloadRoR = (parcel: LandParcel) => {
    const doc = generateRecordOfRightsPDF(parcel);
    downloadPDF(doc, `Certified_RoR_${parcel.land_identity_id}.pdf`);
    showToastMsg(`📄 Certified Record of Rights (RoR) PDF for ${parcel.land_identity_id} downloaded!`);
  };

  const handleDownloadUserDossier = (userData: RegisteredUserDetailed) => {
    const doc = generateUserDossierPDF(userData);
    downloadPDF(doc, `User_Identity_Dossier_${userData.username}.pdf`);
    showToastMsg(`📄 User Identity Dossier PDF for ${userData.full_name} downloaded!`);
  };

  const handleDownloadAuditReport = () => {
    const doc = generateAuditReportPDF(auditLogs);
    downloadPDF(doc, `National_DILRMP_Audit_Report_${new Date().toISOString().split('T')[0]}.pdf`);
    showToastMsg(`📄 National System Audit Trail PDF Report downloaded!`);
  };

  // 2. Tehsildar Request Approval / Rejection
  const handleReviewRequest = (requestId: string, decision: 'APPROVED_IMPLEMENTED' | 'REJECTED' | 'RETURNED_FOR_INQUIRY') => {
    const res = reviewChangeRequest(
      requestId,
      decision,
      adminRemarks || (decision === 'APPROVED_IMPLEMENTED' ? 'Approved by National Admin. Live registry synced.' : 'Rejected upon verification.'),
      user?.full_name || 'National DILRMP Administrator'
    );

    if (res.success) {
      showToastMsg(res.message, decision === 'APPROVED_IMPLEMENTED' ? 'success' : 'info');
      setReviewSuccessMsg(res.message);
      setAdminRemarks('');
      setSelectedRequest(null);
      refreshAllData();
      setTimeout(() => setReviewSuccessMsg(''), 4000);
    } else {
      showToastMsg('Failed to process request: ' + res.message, 'error');
    }
  };

  // 3. User Password Reveal Toggle
  const toggleRevealPassword = (id: string) => {
    setRevealedPasswords(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // 4. Save User (Create or Update)
  const handleSaveUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userForm.full_name || !userForm.username || !userForm.email) {
      showToastMsg('Please fill in all mandatory fields.', 'error');
      return;
    }

    if (editingUser) {
      adminUpdateUser(editingUser.user_id, {
        ...userForm,
        user_id: editingUser.user_id
      });
      showToastMsg(`User ${userForm.full_name} updated successfully!`);
    } else {
      adminCreateUser(userForm);
      showToastMsg(`New user ${userForm.full_name} created successfully!`);
    }

    setShowUserModal(false);
    setEditingUser(null);
    refreshAllData();
  };

  const handleOpenEditUser = (u: RegisteredUserDetailed) => {
    setEditingUser(u);
    setUserForm({
      full_name: u.full_name,
      username: u.username,
      email: u.email,
      password: u.password || '',
      mobile: u.mobile || '',
      role: u.role,
      department: u.department || '',
      designation: u.designation || '',
      employee_id: u.employee_id || '',
      jurisdiction_state: u.jurisdiction_state || 'Uttar Pradesh',
      jurisdiction_district: u.jurisdiction_district || 'Gautam Buddha Nagar',
      jurisdiction_tehsil: u.jurisdiction_tehsil || 'Dadri',
      aadhaar_last4: u.aadhaar_last4 || '5412',
      pan_number: u.pan_number || 'ABCPS1234F',
      kyc_status: u.kyc_status || 'AADHAAR_LINKED'
    });
    setShowUserModal(true);
  };

  const handleDeleteUser = (userId: string, name: string) => {
    if (window.confirm(`Are you sure you want to permanently delete account for ${name}?`)) {
      adminDeleteUser(userId);
      showToastMsg(`Account for ${name} deleted.`);
      refreshAllData();
    }
  };

  // 5. Save Land Parcel (Create or Update)
  const handleSaveParcel = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parcelForm.khata_no || !parcelForm.khesra_no || !parcelForm.owner_name) {
      showToastMsg('Please fill in Khata, Khesra, and Owner name.', 'error');
      return;
    }

    if (editingParcel) {
      updateLandParcelRecord(editingParcel.id, parcelForm);
      showToastMsg(`Land record ${editingParcel.land_identity_id} updated.`);
    } else {
      const generatedULPIN = `${parcelForm.state.slice(0,2).toUpperCase()}-${parcelForm.district.slice(0,3).toUpperCase()}-${parcelForm.anchal.slice(0,3).toUpperCase()}-K${parcelForm.khata_no}-P${parcelForm.khesra_no.replace('/', '_')}`;
      addLandParcelRecord({
        ...parcelForm,
        land_identity_id: parcelForm.land_identity_id || generatedULPIN
      });
      showToastMsg(`New land parcel record added.`);
    }

    setShowParcelModal(false);
    setEditingParcel(null);
    refreshAllData();
  };

  // Filtered Change Requests
  const filteredRequests = changeRequests.filter(r => {
    if (requestFilter === 'PENDING') return r.status === 'PENDING_ADMIN_APPROVAL';
    if (requestFilter === 'APPROVED') return r.status === 'APPROVED_IMPLEMENTED';
    if (requestFilter === 'REJECTED') return r.status === 'REJECTED' || r.status === 'RETURNED_FOR_INQUIRY';
    return true;
  });

  // Filtered Users
  const filteredUsers = usersList.filter(u => {
    const matchesSearch = 
      u.full_name?.toLowerCase().includes(userSearch.toLowerCase()) ||
      u.email?.toLowerCase().includes(userSearch.toLowerCase()) ||
      u.username?.toLowerCase().includes(userSearch.toLowerCase()) ||
      u.jurisdiction_state?.toLowerCase().includes(userSearch.toLowerCase());
    const matchesRole = userRoleFilter === 'ALL' || u.role === userRoleFilter;
    return matchesSearch && matchesRole;
  });

  // Filtered Land Records
  const filteredLandRecords = landRecords.filter(p => {
    const matchesSearch = 
      p.land_identity_id?.toLowerCase().includes(parcelSearch.toLowerCase()) ||
      p.owner_name?.toLowerCase().includes(parcelSearch.toLowerCase()) ||
      p.mauza?.toLowerCase().includes(parcelSearch.toLowerCase()) ||
      p.khata_no?.includes(parcelSearch) ||
      p.khesra_no?.includes(parcelSearch);
    const matchesState = selectedStateFilter === 'ALL' || p.state === selectedStateFilter;
    return matchesSearch && matchesState;
  });

  // Filtered Audit Logs
  const filteredAuditLogs = auditLogs.filter(l => 
    l.details?.toLowerCase().includes(auditSearch.toLowerCase()) ||
    l.performed_by?.toLowerCase().includes(auditSearch.toLowerCase()) ||
    l.action?.toLowerCase().includes(auditSearch.toLowerCase())
  );

  const pendingCount = changeRequests.filter(r => r.status === 'PENDING_ADMIN_APPROVAL').length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 font-sans">
      
      {/* Toast Notification */}
      {toast.show && (
        <div className={`fixed bottom-6 right-6 z-50 px-5 py-3.5 rounded-2xl shadow-2xl flex items-center space-x-3 text-sm font-bold text-white transition-all transform translate-y-0 ${
          toast.type === 'error' ? 'bg-rose-600' : toast.type === 'info' ? 'bg-sky-600' : 'bg-emerald-600'
        }`}>
          {toast.type === 'error' ? <AlertTriangle className="w-5 h-5 shrink-0" /> : <CheckCircle2 className="w-5 h-5 shrink-0" />}
          <span>{toast.msg}</span>
        </div>
      )}

      {/* Top Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-700 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-emerald-500/5 blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
              <Building2 className="w-3.5 h-3.5" />
              <span>National DILRMP Apex Governance Desk</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Administrator Command Center
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Supervise nationwide land records, verify Tehsildar mutation requests, manage user credentials, and control platform uptime.
            </p>
          </div>

          {/* Quick System Maintenance Switch Button */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                if (maintenanceConfig.is_maintenance_active) {
                  handleToggleMaintenance(false);
                } else {
                  setShowMaintenanceModal(true);
                }
              }}
              className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold flex items-center space-x-2 shadow-lg transition-all cursor-pointer ${
                maintenanceConfig.is_maintenance_active
                  ? 'bg-rose-600 hover:bg-rose-500 text-white animate-pulse border border-rose-400'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600'
              }`}
            >
              <Power className="w-4 h-4" />
              <span>
                {maintenanceConfig.is_maintenance_active ? '🔴 Site Locked (Turn Off)' : '🟢 Site Online (Lockout Mode)'}
              </span>
            </button>

            <button
              onClick={refreshAllData}
              className="p-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-600 transition-colors"
              title="Refresh All Real-time Data"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Maintenance Mode Active Notice inside Admin Banner */}
        {maintenanceConfig.is_maintenance_active && (
          <div className="mt-5 p-3 rounded-2xl bg-rose-500/20 border border-rose-500/50 flex items-center justify-between text-xs text-rose-200">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>
                <strong>MAINTENANCE LOCKDOWN ACTIVE:</strong> {maintenanceConfig.maintenance_reason} (Est: {maintenanceConfig.estimated_uptime})
              </span>
            </div>
            <button
              onClick={() => handleToggleMaintenance(false)}
              className="px-3 py-1 bg-white text-rose-700 font-bold rounded-xl text-[11px] hover:bg-rose-50"
            >
              Restore Public Access
            </button>
          </div>
        )}
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center space-x-2 border-b border-slate-200 dark:border-slate-800 pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('OVERVIEW')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center space-x-2 whitespace-nowrap cursor-pointer ${
            activeTab === 'OVERVIEW'
              ? 'bg-[#137a4d] text-white shadow-md shadow-[#137a4d]/25'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Activity className="w-4 h-4" />
          <span>System Overview</span>
        </button>

        <button
          onClick={() => setActiveTab('REQUESTS')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center space-x-2 whitespace-nowrap cursor-pointer relative ${
            activeTab === 'REQUESTS'
              ? 'bg-[#137a4d] text-white shadow-md shadow-[#137a4d]/25'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <CheckSquare className="w-4 h-4" />
          <span>Tehsildar Mutation Approvals</span>
          {pendingCount > 0 && (
            <span className="bg-rose-500 text-white text-[10px] px-2 py-0.5 rounded-full font-black animate-pulse">
              {pendingCount}
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveTab('USERS')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center space-x-2 whitespace-nowrap cursor-pointer ${
            activeTab === 'USERS'
              ? 'bg-[#137a4d] text-white shadow-md shadow-[#137a4d]/25'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>User & Credential Management ({usersList.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('LAND_RECORDS')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center space-x-2 whitespace-nowrap cursor-pointer ${
            activeTab === 'LAND_RECORDS'
              ? 'bg-[#137a4d] text-white shadow-md shadow-[#137a4d]/25'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Landmark className="w-4 h-4" />
          <span>Master Land Records ({landRecords.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('AUDIT_LOGS')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center space-x-2 whitespace-nowrap cursor-pointer ${
            activeTab === 'AUDIT_LOGS'
              ? 'bg-[#137a4d] text-white shadow-md shadow-[#137a4d]/25'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Security Audit Trail</span>
        </button>
      </div>

      {/* =========================================================================
          TAB 1: SYSTEM OVERVIEW & METRICS
         ========================================================================= */}
      {activeTab === 'OVERVIEW' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-slate-500">
                <span className="text-xs font-bold uppercase tracking-wider">Registered Users</span>
                <Users className="w-5 h-5 text-sky-500" />
              </div>
              <div className="text-3xl font-black text-slate-900 dark:text-white font-mono">
                {usersList.length}
              </div>
              <div className="text-[11px] text-emerald-600 font-semibold flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>All credentials & KYC synchronized</span>
              </div>
            </div>

            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-slate-500">
                <span className="text-xs font-bold uppercase tracking-wider">Pending Tehsildar Requests</span>
                <Clock className="w-5 h-5 text-amber-500" />
              </div>
              <div className="text-3xl font-black text-amber-600 dark:text-amber-400 font-mono">
                {pendingCount}
              </div>
              <div className="text-[11px] text-slate-500">
                Requires National Admin approval
              </div>
            </div>

            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-slate-500">
                <span className="text-xs font-bold uppercase tracking-wider">Master Land Parcels</span>
                <Landmark className="w-5 h-5 text-emerald-500" />
              </div>
              <div className="text-3xl font-black text-slate-900 dark:text-white font-mono">
                {landRecords.length}
              </div>
              <div className="text-[11px] text-slate-500">
                Across 24 State Portals (RoR & Khatian)
              </div>
            </div>

            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-slate-500">
                <span className="text-xs font-bold uppercase tracking-wider">System State</span>
                <Server className="w-5 h-5 text-purple-500" />
              </div>
              <div className="text-xl font-black font-mono">
                {maintenanceConfig.is_maintenance_active ? (
                  <span className="text-rose-600">MAINTENANCE</span>
                ) : (
                  <span className="text-emerald-600">LIVE & ACTIVE</span>
                )}
              </div>
              <div className="text-[11px] text-slate-500">
                Uptime: 99.98% • DILRMP Sync OK
              </div>
            </div>
          </div>

          {/* Quick Actions & Recent Pending Inquiries */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-sm text-slate-900 dark:text-white flex items-center space-x-2">
                  <CheckSquare className="w-4 h-4 text-[#137a4d]" />
                  <span>Pending Tehsildar Mutation Queue</span>
                </h3>
                <button
                  onClick={() => setActiveTab('REQUESTS')}
                  className="text-xs font-bold text-[#137a4d] hover:underline"
                >
                  View All ({changeRequests.length}) &rarr;
                </button>
              </div>

              {changeRequests.filter(r => r.status === 'PENDING_ADMIN_APPROVAL').length === 0 ? (
                <div className="p-8 text-center text-slate-500 text-xs">
                  No pending change requests in queue. All records up to date!
                </div>
              ) : (
                <div className="space-y-3">
                  {changeRequests.filter(r => r.status === 'PENDING_ADMIN_APPROVAL').slice(0, 3).map(req => (
                    <div
                      key={req.id}
                      onClick={() => {
                        setSelectedRequest(req);
                        setActiveTab('REQUESTS');
                      }}
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:border-[#137a4d] transition-all cursor-pointer"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-xs font-extrabold text-slate-900 dark:text-white">
                            {req.change_type.replace('_', ' ')} • {req.land_identity_id}
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5">
                            By {req.officer_name} ({req.officer_designation}) • Memo: {req.memo_reference_no}
                          </div>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                          PENDING
                        </span>
                      </div>
                      <div className="mt-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                        Transfer to: <strong className="text-[#137a4d]">{req.proposed_owner}</strong>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Admin Actions Box */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-purple-500" />
                <span>Administrative Tools & Operations</span>
              </h3>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <button
                  onClick={() => {
                    setShowUserModal(true);
                    setEditingUser(null);
                    setUserForm({
                      full_name: '',
                      username: '',
                      email: '',
                      password: '',
                      mobile: '',
                      role: 'REVENUE_OFFICER',
                      department: 'Revenue & Land Reforms',
                      designation: 'Circle Officer / Tahsildar',
                      employee_id: `OFF-${Date.now().toString().slice(-4)}`,
                      jurisdiction_state: 'Uttar Pradesh',
                      jurisdiction_district: 'Gautam Buddha Nagar',
                      jurisdiction_tehsil: 'Dadri',
                      aadhaar_last4: '5412',
                      pan_number: 'ABCPS1234F',
                      kyc_status: 'VERIFIED'
                    });
                  }}
                  className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-[#137a4d] text-left font-bold text-slate-800 dark:text-slate-200 transition-all flex flex-col justify-between"
                >
                  <Users className="w-5 h-5 text-sky-600 mb-2" />
                  <span>Provision New Tehsildar / Officer</span>
                </button>

                <button
                  onClick={() => {
                    setShowParcelModal(true);
                    setEditingParcel(null);
                  }}
                  className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-[#137a4d] text-left font-bold text-slate-800 dark:text-slate-200 transition-all flex flex-col justify-between"
                >
                  <Plus className="w-5 h-5 text-emerald-600 mb-2" />
                  <span>Add New Master Land Parcel</span>
                </button>

                <button
                  onClick={() => setShowMaintenanceModal(true)}
                  className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-rose-500 text-left font-bold text-slate-800 dark:text-slate-200 transition-all flex flex-col justify-between"
                >
                  <Power className="w-5 h-5 text-rose-600 mb-2" />
                  <span>Configure Site Maintenance / Lockdown</span>
                </button>

                <button
                  onClick={() => setActiveTab('AUDIT_LOGS')}
                  className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-purple-500 text-left font-bold text-slate-800 dark:text-slate-200 transition-all flex flex-col justify-between"
                >
                  <FileText className="w-5 h-5 text-purple-600 mb-2" />
                  <span>View Full Security Audit Log</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 2: TEHSILDAR MUTATION & RECORD UPDATE APPROVALS (CORE REQUIREMENT)
         ========================================================================= */}
      {activeTab === 'REQUESTS' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-slate-500">Filter Status:</span>
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
              Showing {filteredRequests.length} mutation & change requests
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Request List */}
            <div className="lg:col-span-5 space-y-3">
              {filteredRequests.map(req => (
                <div
                  key={req.id}
                  onClick={() => {
                    setSelectedRequest(req);
                    setAdminRemarks(req.admin_remarks || '');
                  }}
                  className={`p-4 rounded-3xl border transition-all cursor-pointer ${
                    selectedRequest?.id === req.id
                      ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-[#137a4d] shadow-md ring-1 ring-[#137a4d]'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-mono text-[11px] font-bold text-sky-600 dark:text-sky-400 block">
                        {req.id}
                      </span>
                      <h4 className="font-extrabold text-sm text-slate-900 dark:text-white mt-0.5">
                        {req.change_type.replace(/_/g, ' ')}
                      </h4>
                    </div>

                    <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase ${
                      req.status === 'PENDING_ADMIN_APPROVAL'
                        ? 'bg-amber-100 text-amber-800 border border-amber-300'
                        : req.status === 'APPROVED_IMPLEMENTED'
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-rose-100 text-rose-800 border border-rose-300'
                    }`}>
                      {req.status === 'PENDING_ADMIN_APPROVAL' ? 'Pending Approval' : req.status === 'APPROVED_IMPLEMENTED' ? 'Approved & Synced' : 'Rejected'}
                    </span>
                  </div>

                  <div className="mt-2 text-xs text-slate-600 dark:text-slate-300 space-y-1">
                    <div><strong>Parcel:</strong> <span className="font-mono">{req.land_identity_id}</span></div>
                    <div><strong>Tehsil:</strong> {req.tehsil || req.anchal}, {req.district} ({req.state})</div>
                    <div><strong>Officer:</strong> {req.officer_name} ({req.officer_designation})</div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-[11px] text-slate-500">
                    <span>Memo: {req.memo_reference_no}</span>
                    <span>{req.submitted_at}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Selected Request Side-by-Side Review */}
            <div className="lg:col-span-7">
              {selectedRequest ? (
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
                  <div className="flex justify-between items-start border-b border-slate-200 dark:border-slate-800 pb-4">
                    <div>
                      <span className="text-xs font-mono text-[#137a4d] font-bold block">
                        {selectedRequest.id} • {selectedRequest.memo_reference_no}
                      </span>
                      <h2 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                        {selectedRequest.change_type.replace(/_/g, ' ')} Review
                      </h2>
                      <p className="text-xs text-slate-500">
                        Submitted by <strong>{selectedRequest.officer_name}</strong> on {selectedRequest.submitted_at}
                      </p>
                    </div>

                    <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase ${
                      selectedRequest.status === 'PENDING_ADMIN_APPROVAL'
                        ? 'bg-amber-100 text-amber-800 border border-amber-300'
                        : selectedRequest.status === 'APPROVED_IMPLEMENTED'
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-rose-100 text-rose-800 border border-rose-300'
                    }`}>
                      {selectedRequest.status.replace(/_/g, ' ')}
                    </span>
                  </div>

                  {/* Side by Side Comparison (Current Record vs Proposed Record) */}
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                      Side-by-Side Land Record Mutation Matrix
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      {/* Current Data */}
                      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
                        <div className="font-bold text-slate-500 uppercase text-[10px]">
                          Current Registered State
                        </div>
                        <div><strong>Owner Name:</strong> {selectedRequest.current_owner}</div>
                        <div><strong>Khata No:</strong> {selectedRequest.khata_no}</div>
                        <div><strong>Khesra / Plot:</strong> {selectedRequest.khesra_no}</div>
                        <div><strong>Recorded Area:</strong> {selectedRequest.current_area_acre} Acres</div>
                        <div><strong>Location:</strong> {selectedRequest.mauza}, {selectedRequest.tehsil}</div>
                      </div>

                      {/* Proposed Changes */}
                      <div className="p-4 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-2">
                        <div className="font-bold text-emerald-700 dark:text-emerald-400 uppercase text-[10px]">
                          Proposed Mutation Changes
                        </div>
                        <div>
                          <strong>New Owner:</strong>{' '}
                          <span className="font-bold text-[#137a4d] dark:text-emerald-300">
                            {selectedRequest.proposed_owner}
                          </span>
                        </div>
                        <div><strong>New Khata No:</strong> {selectedRequest.proposed_khata_no || selectedRequest.khata_no}</div>
                        <div><strong>New Khesra No:</strong> {selectedRequest.proposed_khesra_no || selectedRequest.khesra_no}</div>
                        <div><strong>New Area:</strong> {selectedRequest.proposed_area_acre} Acres</div>
                        <div><strong>Land Classification:</strong> {selectedRequest.proposed_land_type || 'Rayati'}</div>
                      </div>
                    </div>
                  </div>

                  {/* Tehsildar & Patwari Inspection Findings */}
                  <div className="space-y-3">
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-1.5">
                      <div className="font-bold text-slate-900 dark:text-white flex items-center space-x-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-[#137a4d]" />
                        <span>Tehsildar / Circle Officer Justification:</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300">{selectedRequest.justification}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-1.5">
                      <div className="font-bold text-slate-900 dark:text-white flex items-center space-x-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Halka Karamchari & Field Panchanama Report:</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300">{selectedRequest.field_inspection_report}</p>
                    </div>
                  </div>

                  {/* Admin Action Box */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-4">
                    <h4 className="font-bold text-xs text-slate-900 dark:text-white">
                      National Admin Sanction & Remarks:
                    </h4>

                    <textarea
                      value={adminRemarks}
                      onChange={(e) => setAdminRemarks(e.target.value)}
                      placeholder="Enter official executive remarks or statutory orders..."
                      rows={2}
                      className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-white focus:outline-none focus:border-[#137a4d]"
                    />

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => handleDownloadMutationOrder(selectedRequest)}
                        className="py-2.5 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-600 font-bold rounded-xl text-xs flex items-center space-x-1.5 cursor-pointer shadow-sm transition-all"
                      >
                        <Download className="w-4 h-4 text-[#137a4d]" />
                        <span>Download Official Mutation Order (PDF)</span>
                      </button>

                      {selectedRequest.status === 'PENDING_ADMIN_APPROVAL' ? (
                        <div className="flex items-center space-x-2">
                          <button
                            type="button"
                            onClick={() => handleReviewRequest(selectedRequest.id, 'APPROVED_IMPLEMENTED')}
                            className="py-2.5 px-4 bg-[#137a4d] hover:bg-[#0f633e] text-white font-bold rounded-xl text-xs shadow-md shadow-[#137a4d]/25 transition-all flex items-center space-x-1.5 cursor-pointer"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Approve & Implement</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => handleReviewRequest(selectedRequest.id, 'REJECTED')}
                            className="py-2.5 px-3 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold rounded-xl text-xs transition-colors cursor-pointer"
                          >
                            <X className="w-4 h-4" />
                            <span>Reject</span>
                          </button>
                        </div>
                      ) : (
                        <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1.5 rounded-xl">
                          ✓ Reviewed by {selectedRequest.admin_approver_name || 'Admin'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white dark:bg-slate-900 p-12 rounded-3xl border border-slate-200 dark:border-slate-800 text-center text-slate-500 text-xs">
                  Select a Tehsildar mutation request from the left column to view side-by-side changes and log approvals.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 3: USER & CREDENTIAL MANAGEMENT (CORE REQUIREMENT)
         ========================================================================= */}
      {activeTab === 'USERS' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-200 dark:border-slate-800">
            {/* Search & Filter */}
            <div className="flex flex-wrap items-center gap-3 flex-1">
              <div className="relative flex-1 min-w-[220px]">
                <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                <input
                  type="text"
                  value={userSearch}
                  onChange={(e) => setUserSearch(e.target.value)}
                  placeholder="Search user name, email, username, state..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs focus:outline-none focus:border-[#137a4d]"
                />
              </div>

              <select
                value={userRoleFilter}
                onChange={(e) => setUserRoleFilter(e.target.value)}
                className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300"
              >
                <option value="ALL">All Roles</option>
                <option value="CITIZEN">Citizens</option>
                <option value="REVENUE_OFFICER">Revenue Officers / Tehsildars</option>
                <option value="ADMIN">Administrators</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  setEditingUser(null);
                  setUserForm({
                    full_name: '',
                    username: '',
                    email: '',
                    password: 'Citizen@2026#',
                    mobile: '+91 98765 43210',
                    role: 'CITIZEN',
                    department: 'General Public',
                    designation: 'Citizen Landowner',
                    employee_id: '',
                    jurisdiction_state: 'Uttar Pradesh',
                    jurisdiction_district: 'Gautam Buddha Nagar',
                    jurisdiction_tehsil: 'Dadri',
                    aadhaar_last4: '5412',
                    pan_number: 'ABCPS1234F',
                    kyc_status: 'AADHAAR_LINKED'
                  });
                  setShowUserModal(true);
                }}
                className="py-2 px-4 bg-[#137a4d] hover:bg-[#0f633e] text-white font-bold rounded-xl text-xs flex items-center space-x-1.5 shadow-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Add New User / Officer</span>
              </button>
            </div>
          </div>

          {/* User Table with Passwords & Personal Details */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-[11px] font-extrabold uppercase text-slate-500">
                  <tr>
                    <th className="py-3.5 px-4">User / Official</th>
                    <th className="py-3.5 px-4">Role & Dept</th>
                    <th className="py-3.5 px-4">Registered Email</th>
                    <th className="py-3.5 px-4">Password (Secure Eye)</th>
                    <th className="py-3.5 px-4">Jurisdiction</th>
                    <th className="py-3.5 px-4">KYC & Identifiers</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {filteredUsers.map(u => {
                    const isRevealed = revealedPasswords[u.user_id || u.username];
                    return (
                      <tr key={u.user_id || u.username} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                        <td className="py-3.5 px-4">
                          <div className="font-extrabold text-slate-900 dark:text-white">
                            {u.full_name}
                          </div>
                          <div className="text-[11px] text-slate-500 font-mono">
                            @{u.username} • {u.user_id}
                          </div>
                        </td>

                        <td className="py-3.5 px-4">
                          <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${
                            u.role === 'ADMIN'
                              ? 'bg-purple-100 text-purple-700'
                              : u.role === 'REVENUE_OFFICER'
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-sky-100 text-sky-800'
                          }`}>
                            {u.role}
                          </span>
                          <div className="text-[10px] text-slate-500 mt-0.5">
                            {u.designation || u.department || 'N/A'}
                          </div>
                        </td>

                        <td className="py-3.5 px-4">
                          <div className="font-medium text-slate-800 dark:text-slate-200">
                            {u.email}
                          </div>
                          <div className="text-[10px] text-slate-400">
                            {u.mobile || 'No mobile'}
                          </div>
                        </td>

                        {/* Password with Eye Toggle for Admin Inspection */}
                        <td className="py-3.5 px-4">
                          <div className="inline-flex items-center space-x-2 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-xl font-mono text-xs">
                            <span className={isRevealed ? 'text-emerald-700 dark:text-emerald-400 font-bold' : 'text-slate-500'}>
                              {isRevealed ? (u.password || '••••••••') : '••••••••'}
                            </span>
                            <button
                              type="button"
                              onClick={() => toggleRevealPassword(u.user_id || u.username)}
                              className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"
                              title={isRevealed ? 'Hide Password' : 'Show Password'}
                            >
                              {isRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                            </button>
                          </div>
                        </td>

                        <td className="py-3.5 px-4">
                          <div className="text-slate-700 dark:text-slate-300 font-medium">
                            {u.jurisdiction_state || 'All States'}
                          </div>
                          <div className="text-[10px] text-slate-400">
                            {u.jurisdiction_district ? `${u.jurisdiction_district}, ${u.jurisdiction_tehsil || ''}` : 'National'}
                          </div>
                        </td>

                        <td className="py-3.5 px-4">
                          <div className="text-[11px] font-mono text-slate-600 dark:text-slate-300">
                            Aadhaar: XXXX-{u.aadhaar_last4 || '5412'}
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono">
                            PAN: {u.pan_number || 'N/A'}
                          </div>
                        </td>

                        <td className="py-3.5 px-4">
                          <button
                            onClick={() => {
                              adminToggleUserStatus(u.user_id);
                              refreshAllData();
                            }}
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase cursor-pointer ${
                              u.status === 'SUSPENDED'
                                ? 'bg-rose-100 text-rose-700 hover:bg-rose-200'
                                : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                            }`}
                            title="Click to toggle Active / Suspended"
                          >
                            {u.status || 'ACTIVE'}
                          </button>
                        </td>

                        <td className="py-3.5 px-4 text-right space-x-1">
                          <button
                            onClick={() => handleDownloadUserDossier(u)}
                            className="p-1.5 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 rounded-lg transition-colors cursor-pointer"
                            title="Download Official User Identity Dossier PDF"
                          >
                            <Download className="w-3.5 h-3.5 text-[#137a4d]" />
                          </button>
                          <button
                            onClick={() => handleOpenEditUser(u)}
                            className="p-1.5 text-slate-500 hover:text-[#137a4d] hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                            title="Edit User Profile & Credentials"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteUser(u.user_id, u.full_name)}
                            className="p-1.5 text-slate-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/50 rounded-lg transition-colors cursor-pointer"
                            title="Delete User"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 4: MASTER LAND RECORDS (CORE REQUIREMENT)
         ========================================================================= */}
      {activeTab === 'LAND_RECORDS' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-200 dark:border-slate-800">
            <div className="flex flex-wrap items-center gap-3 flex-1">
              <div className="relative flex-1 min-w-[220px]">
                <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                <input
                  type="text"
                  value={parcelSearch}
                  onChange={(e) => setParcelSearch(e.target.value)}
                  placeholder="Search parcel ULPIN, owner name, Khata, Khesra..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs focus:outline-none focus:border-[#137a4d]"
                />
              </div>

              <select
                value={selectedStateFilter}
                onChange={(e) => setSelectedStateFilter(e.target.value)}
                className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300"
              >
                <option value="ALL">All States</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Bihar">Bihar</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Rajasthan">Rajasthan</option>
              </select>
            </div>

            <button
              onClick={() => {
                setEditingParcel(null);
                setParcelForm({
                  land_identity_id: '',
                  state: 'Uttar Pradesh',
                  district: 'Gautam Buddha Nagar',
                  anchal: 'Dadri',
                  halka: 'Sector 18',
                  mauza: 'Bhangel',
                  khata_no: '501',
                  khesra_no: '202/1',
                  area_acre: 1.5,
                  land_type: 'Abadi / Residential',
                  owner_name: ''
                });
                setShowParcelModal(true);
              }}
              className="py-2 px-4 bg-[#137a4d] hover:bg-[#0f633e] text-white font-bold rounded-xl text-xs flex items-center space-x-1.5 shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Add Land Record</span>
            </button>
          </div>

          {/* Land Records Table */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-[11px] font-extrabold uppercase text-slate-500">
                  <tr>
                    <th className="py-3.5 px-4">Parcel ULPIN / ID</th>
                    <th className="py-3.5 px-4">Owner Name</th>
                    <th className="py-3.5 px-4">Khata / Khesra</th>
                    <th className="py-3.5 px-4">Area & Land Type</th>
                    <th className="py-3.5 px-4">Jurisdiction (Tehsil, State)</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {filteredLandRecords.map(p => (
                    <tr key={p.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                      <td className="py-3.5 px-4">
                        <span className="font-mono text-xs font-bold text-sky-600 dark:text-sky-400">
                          {p.land_identity_id}
                        </span>
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="font-extrabold text-slate-900 dark:text-white">
                          {p.owner_name}
                        </div>
                      </td>

                      <td className="py-3.5 px-4 font-mono">
                        Khata: <strong>{p.khata_no}</strong> • Plot: <strong>{p.khesra_no}</strong>
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="font-bold text-emerald-700 dark:text-emerald-400">
                          {p.area_acre} Acres
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {p.land_type}
                        </div>
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="text-slate-800 dark:text-slate-200 font-medium">
                          {p.mauza}, {p.anchal}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {p.district}, {p.state}
                        </div>
                      </td>

                      <td className="py-3.5 px-4 text-right space-x-1">
                        <button
                          onClick={() => handleDownloadRoR(p)}
                          className="p-1.5 text-slate-500 hover:text-[#137a4d] hover:bg-emerald-50 dark:hover:bg-emerald-950/50 rounded-lg transition-colors cursor-pointer"
                          title="Download Certified Record of Rights (RoR) PDF"
                        >
                          <Download className="w-3.5 h-3.5 text-[#137a4d]" />
                        </button>
                        <button
                          onClick={() => {
                            setEditingParcel(p);
                            setParcelForm({
                              land_identity_id: p.land_identity_id,
                              state: p.state,
                              district: p.district,
                              anchal: p.anchal,
                              halka: p.halka,
                              mauza: p.mauza,
                              khata_no: p.khata_no,
                              khesra_no: p.khesra_no,
                              area_acre: p.area_acre,
                              land_type: p.land_type,
                              owner_name: p.owner_name || ''
                            });
                            setShowParcelModal(true);
                          }}
                          className="p-1.5 text-slate-500 hover:text-[#137a4d] hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                          title="Edit Land Parcel"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm(`Delete land parcel ${p.land_identity_id}?`)) {
                              deleteLandParcelRecord(p.id);
                              refreshAllData();
                            }
                          }}
                          className="p-1.5 text-slate-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/50 rounded-lg transition-colors cursor-pointer"
                          title="Delete Parcel"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 5: SECURITY AUDIT TRAIL
         ========================================================================= */}
      {activeTab === 'AUDIT_LOGS' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-200 dark:border-slate-800">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
              <input
                type="text"
                value={auditSearch}
                onChange={(e) => setAuditSearch(e.target.value)}
                placeholder="Search audit trail by officer, action, parcel..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs focus:outline-none focus:border-[#137a4d]"
              />
            </div>

            <div className="flex items-center space-x-3">
              <div className="text-xs text-slate-500 font-mono hidden sm:inline">
                Immutable Logs: {filteredAuditLogs.length}
              </div>
              <button
                type="button"
                onClick={handleDownloadAuditReport}
                className="py-2 px-4 bg-[#137a4d] hover:bg-[#0f633e] text-white font-bold rounded-xl text-xs flex items-center space-x-1.5 shadow-sm transition-all cursor-pointer"
                title="Download Official National Land Governance System Audit Trail PDF"
              >
                <Download className="w-4 h-4" />
                <span>Export Audit Trail (PDF)</span>
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm divide-y divide-slate-100 dark:divide-slate-800">
            {filteredAuditLogs.map(log => (
              <div key={log.id} className="p-4 flex items-start justify-between text-xs hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono font-bold text-sky-600 dark:text-sky-400">
                      {log.id}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-bold uppercase text-slate-600 dark:text-slate-300">
                      {log.category}
                    </span>
                    <span className="text-slate-900 dark:text-white font-bold">
                      {log.action}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    {log.details}
                  </p>
                  <div className="text-[10px] text-slate-400">
                    By {log.performed_by} • Role: {log.role}
                  </div>
                </div>

                <div className="text-[11px] font-mono text-slate-400 shrink-0">
                  {log.timestamp}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL 1: SYSTEM MAINTENANCE & LOCKDOWN CONFIG
         ========================================================================= */}
      {showMaintenanceModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 max-w-lg w-full rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 bg-rose-100 dark:bg-rose-950 text-rose-600 rounded-xl">
                  <Power className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                  Temporary Platform Shutdown / Maintenance
                </h3>
              </div>
              <button
                onClick={() => setShowMaintenanceModal(false)}
                className="p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300">
              When activated, public access will show a scheduled maintenance banner. Administrators retain access to manage records and reactivate when ready.
            </p>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Maintenance Reason / Operational Task
                </label>
                <input
                  type="text"
                  value={maintenanceReasonInput}
                  onChange={(e) => setMaintenanceReasonInput(e.target.value)}
                  placeholder="e.g. DILRMP Central Registry Schema Upgrade & Security Patch"
                  className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Estimated Downtime / Expected Restoration
                </label>
                <input
                  type="text"
                  value={estimatedUptimeInput}
                  onChange={(e) => setEstimatedUptimeInput(e.target.value)}
                  placeholder="e.g. 45 minutes (Expected Online at 01:00 AM IST)"
                  className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
                />
              </div>
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <button
                type="button"
                onClick={() => handleToggleMaintenance(!maintenanceConfig.is_maintenance_active)}
                className="flex-1 py-3 px-4 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl text-xs shadow-md transition-all flex items-center justify-center space-x-2"
              >
                <Power className="w-4 h-4" />
                <span>
                  {maintenanceConfig.is_maintenance_active ? 'Deactivate Maintenance (Restore)' : 'Activate Maintenance Lockdown'}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setShowMaintenanceModal(false)}
                className="py-3 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 font-bold rounded-xl text-xs"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL 2: ADD / EDIT USER & CREDENTIALS
         ========================================================================= */}
      {showUserModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 max-w-xl w-full rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center space-x-2">
                <Users className="w-5 h-5 text-[#137a4d]" />
                <span>{editingUser ? 'Edit User Credentials & Profile' : 'Provision New User / Revenue Officer'}</span>
              </h3>
              <button onClick={() => setShowUserModal(false)} className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-400">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveUser} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Full Legal Name *</label>
                  <input
                    type="text"
                    required
                    value={userForm.full_name}
                    onChange={(e) => setUserForm({ ...userForm, full_name: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Username / User ID *</label>
                  <input
                    type="text"
                    required
                    value={userForm.username}
                    onChange={(e) => setUserForm({ ...userForm, username: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Registered Email *</label>
                  <input
                    type="email"
                    required
                    value={userForm.email}
                    onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Password *</label>
                  <input
                    type="text"
                    required
                    value={userForm.password}
                    onChange={(e) => setUserForm({ ...userForm, password: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-mono"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Account Role *</label>
                  <select
                    value={userForm.role}
                    onChange={(e) => setUserForm({ ...userForm, role: e.target.value as any })}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-bold"
                  >
                    <option value="CITIZEN">Citizen (Landowner)</option>
                    <option value="REVENUE_OFFICER">Revenue Officer / Tehsildar</option>
                    <option value="ADMIN">National DILRMP Administrator</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Mobile Number</label>
                  <input
                    type="text"
                    value={userForm.mobile}
                    onChange={(e) => setUserForm({ ...userForm, mobile: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">State Jurisdiction</label>
                  <input
                    type="text"
                    value={userForm.jurisdiction_state}
                    onChange={(e) => setUserForm({ ...userForm, jurisdiction_state: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">District / Tehsil</label>
                  <input
                    type="text"
                    value={userForm.jurisdiction_district}
                    onChange={(e) => setUserForm({ ...userForm, jurisdiction_district: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 bg-[#137a4d] hover:bg-[#0f633e] text-white font-bold rounded-xl shadow-md"
                >
                  {editingUser ? 'Save User Changes' : 'Provision User Account'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowUserModal(false)}
                  className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL 3: ADD / EDIT MASTER LAND RECORD
         ========================================================================= */}
      {showParcelModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 max-w-xl w-full rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center space-x-2">
                <Landmark className="w-5 h-5 text-[#137a4d]" />
                <span>{editingParcel ? 'Edit Master Land Record' : 'Add New Master Land Parcel'}</span>
              </h3>
              <button onClick={() => setShowParcelModal(false)} className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-400">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveParcel} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Owner Name *</label>
                  <input
                    type="text"
                    required
                    value={parcelForm.owner_name}
                    onChange={(e) => setParcelForm({ ...parcelForm, owner_name: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Khata / Gata No *</label>
                  <input
                    type="text"
                    required
                    value={parcelForm.khata_no}
                    onChange={(e) => setParcelForm({ ...parcelForm, khata_no: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-mono"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Khesra / Plot No *</label>
                  <input
                    type="text"
                    required
                    value={parcelForm.khesra_no}
                    onChange={(e) => setParcelForm({ ...parcelForm, khesra_no: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-mono"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Area (Acres) *</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={parcelForm.area_acre}
                    onChange={(e) => setParcelForm({ ...parcelForm, area_acre: parseFloat(e.target.value) || 0 })}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Land Classification</label>
                  <input
                    type="text"
                    value={parcelForm.land_type}
                    onChange={(e) => setParcelForm({ ...parcelForm, land_type: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">State</label>
                  <input
                    type="text"
                    value={parcelForm.state}
                    onChange={(e) => setParcelForm({ ...parcelForm, state: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">District / Tehsil</label>
                  <input
                    type="text"
                    value={parcelForm.district}
                    onChange={(e) => setParcelForm({ ...parcelForm, district: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 bg-[#137a4d] hover:bg-[#0f633e] text-white font-bold rounded-xl shadow-md"
                >
                  {editingParcel ? 'Save Parcel Changes' : 'Create Master Land Parcel'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowParcelModal(false)}
                  className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
