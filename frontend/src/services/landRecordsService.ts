import { LandParcel, User } from '../types';

export type ChangeRequestType = 
  | 'MUTATION_SALE' 
  | 'PARTITION' 
  | 'SUCCESSION' 
  | 'NAME_AREA_CORRECTION' 
  | 'DISPUTE_FLAG' 
  | 'LAND_CONVERSION_NA';

export type ChangeRequestStatus = 
  | 'PENDING_ADMIN_APPROVAL' 
  | 'APPROVED_IMPLEMENTED' 
  | 'REJECTED' 
  | 'RETURNED_FOR_INQUIRY';

export interface LandRecordChangeRequest {
  id: string;
  land_identity_id: string;
  change_type: ChangeRequestType;
  state: string;
  district: string;
  tehsil: string;
  anchal?: string;
  mauza: string;
  khata_no: string;
  khesra_no: string;
  current_owner: string;
  proposed_owner: string;
  current_area_acre: number;
  proposed_area_acre: number;
  proposed_khata_no?: string;
  proposed_khesra_no?: string;
  proposed_land_type?: string;
  justification: string;
  field_inspection_report: string;
  officer_user_id: string;
  officer_name: string;
  officer_designation: string;
  officer_emp_code?: string;
  memo_reference_no: string;
  supporting_doc_name?: string;
  status: ChangeRequestStatus;
  submitted_at: string;
  reviewed_at?: string;
  admin_remarks?: string;
  admin_approver_name?: string;
}

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  action: string;
  performed_by: string;
  role: string;
  category: 'RECORD_MUTATION' | 'USER_MANAGEMENT' | 'SYSTEM_MAINTENANCE' | 'SECURITY' | 'APPROVAL';
  details: string;
  target_id?: string;
}

export interface SystemMaintenanceConfig {
  is_maintenance_active: boolean;
  maintenance_message: string;
  maintenance_reason: string;
  estimated_uptime: string;
  emergency_contact: string;
  initiated_by: string;
  initiated_at: string;
}

const MASTER_LAND_RECORDS_KEY = 'bhoomi_master_land_records';
const CHANGE_REQUESTS_KEY = 'bhoomi_land_change_requests';
const AUDIT_LOGS_KEY = 'bhoomi_audit_logs';
const MAINTENANCE_CONFIG_KEY = 'bhoomi_system_maintenance_config';

export const INITIAL_LAND_PARCELS: LandParcel[] = [
  {
    id: 1,
    land_identity_id: "JH-BOK-CHA-KURA-K125-K450-2",
    state: "Jharkhand",
    district: "Bokaro",
    anchal: "Chas",
    halka: "Halka 04",
    mauza: "Kura",
    khata_no: "125",
    khesra_no: "450/2",
    area_acre: 1.85,
    land_type: "Rayati Dhan-2 (Agricultural)",
    owner_name: "Ramesh Sharma",
    created_at: "2024-01-15"
  },
  {
    id: 2,
    land_identity_id: "UP-GAU-DAD-BHAN-P340-PL112-1",
    state: "Uttar Pradesh",
    district: "Gautam Buddha Nagar",
    anchal: "Dadri",
    halka: "Sector 18 Ward",
    mauza: "Bhangel",
    khata_no: "340",
    khesra_no: "112/1",
    area_acre: 0.75,
    land_type: "Abadi / Residential",
    owner_name: "Surendra Kumar Verma",
    created_at: "2024-02-10"
  },
  {
    id: 3,
    land_identity_id: "MH-PUN-HAV-HINJ-G145-P23-B",
    state: "Maharashtra",
    district: "Pune",
    anchal: "Haveli",
    halka: "Hinjawadi Circle",
    mauza: "Hinjawadi",
    khata_no: "Gat 145",
    khesra_no: "23-B",
    area_acre: 2.40,
    land_type: "Commercial / IT Zone",
    owner_name: "Shrikant G. Kulkarni",
    created_at: "2024-03-01"
  },
  {
    id: 4,
    land_identity_id: "BR-PAT-DAN-SHAH-K88-P512",
    state: "Bihar",
    district: "Patna",
    anchal: "Danapur",
    halka: "Shahpur Ward 02",
    mauza: "Shahpur",
    khata_no: "88",
    khesra_no: "512",
    area_acre: 1.20,
    land_type: "Bhith Rayati",
    owner_name: "Devendra Narayan Jha",
    created_at: "2024-04-12"
  },
  {
    id: 5,
    land_identity_id: "KA-BLR-EAS-VRT-S210-P4",
    state: "Karnataka",
    district: "Bengaluru Urban",
    anchal: "Bengaluru East",
    halka: "Varthur Hobli",
    mauza: "Varthur",
    khata_no: "A-Khata 210",
    khesra_no: "Sy No 84/4",
    area_acre: 0.95,
    land_type: "Residential Converted (NA)",
    owner_name: "M. Venkatesh Swamy",
    created_at: "2024-05-20"
  },
  {
    id: 6,
    land_identity_id: "RJ-JAI-SNG-MANS-K45-P108",
    state: "Rajasthan",
    district: "Jaipur",
    anchal: "Sanganer",
    halka: "Mansarovar Circle",
    mauza: "Mansarovar",
    khata_no: "45",
    khesra_no: "108/2",
    area_acre: 3.10,
    land_type: "Barani Agricultural",
    owner_name: "Ramprasad Meena",
    created_at: "2024-06-05"
  }
];

export const INITIAL_CHANGE_REQUESTS: LandRecordChangeRequest[] = [
  {
    id: "REQ-MUT-2026-001",
    land_identity_id: "UP-GAU-DAD-BHAN-P340-PL112-1",
    change_type: "MUTATION_SALE",
    state: "Uttar Pradesh",
    district: "Gautam Buddha Nagar",
    tehsil: "Dadri",
    mauza: "Bhangel",
    khata_no: "340",
    khesra_no: "112/1",
    current_owner: "Surendra Kumar Verma",
    proposed_owner: "Pooja Singhal & Amit Singhal",
    current_area_acre: 0.75,
    proposed_area_acre: 0.75,
    proposed_khata_no: "340/B",
    proposed_khesra_no: "112/1",
    proposed_land_type: "Abadi / Residential",
    justification: "Registered Sale Deed No. 4920/2026 executed at Sub-Registrar Dadri. 30-day public objection notice period completed without any disputes.",
    field_inspection_report: "Halka Lekhpal verified physical possession and boundary pillars on 15-Mar-2026. Spot Panchanama attached. Clear title recommended for mutation.",
    officer_user_id: "USR-OFF-2001",
    officer_name: "Vikramaditya Rao",
    officer_designation: "Tahsildar / Circle Officer",
    officer_emp_code: "UP-REV-OFF-8821",
    memo_reference_no: "DADRI/REV/2026/MUT-8891",
    supporting_doc_name: "Sale_Deed_Registered_Dadri_4920.pdf",
    status: "PENDING_ADMIN_APPROVAL",
    submitted_at: "2026-03-28 11:30 AM"
  },
  {
    id: "REQ-MUT-2026-002",
    land_identity_id: "JH-BOK-CHA-KURA-K125-K450-2",
    change_type: "PARTITION",
    state: "Jharkhand",
    district: "Bokaro",
    anchal: "Chas",
    tehsil: "Chas",
    mauza: "Kura",
    khata_no: "125",
    khesra_no: "450/2",
    current_owner: "Ramesh Sharma",
    proposed_owner: "Ramesh Sharma (0.95 Acre) & Rajesh Sharma (0.90 Acre)",
    current_area_acre: 1.85,
    proposed_area_acre: 1.85,
    proposed_khata_no: "125/1 & 125/2",
    proposed_khesra_no: "450/2-A & 450/2-B",
    proposed_land_type: "Rayati Dhan-2",
    justification: "Family settlement deed and mutual partition (Batwara) agreement registered under Section 89 of CNT Act.",
    field_inspection_report: "Circle Amin completed GIS demarcation and new field map boundaries. No overlap with tribal raiyat lands.",
    officer_user_id: "USR-OFF-2001",
    officer_name: "Vikramaditya Rao",
    officer_designation: "Tahsildar / Circle Officer",
    officer_emp_code: "UP-REV-OFF-8821",
    memo_reference_no: "BOK/CHAS/PART/2026/044",
    supporting_doc_name: "Amin_Partition_Map_Kura_125.pdf",
    status: "PENDING_ADMIN_APPROVAL",
    submitted_at: "2026-03-29 02:15 PM"
  },
  {
    id: "REQ-MUT-2026-003",
    land_identity_id: "MH-PUN-HAV-HINJ-G145-P23-B",
    change_type: "NAME_AREA_CORRECTION",
    state: "Maharashtra",
    district: "Pune",
    anchal: "Haveli",
    tehsil: "Haveli",
    mauza: "Hinjawadi",
    khata_no: "Gat 145",
    khesra_no: "23-B",
    current_owner: "Shrikant G. Kulkarni",
    proposed_owner: "Shrikant Govindrao Kulkarni",
    current_area_acre: 2.40,
    proposed_area_acre: 2.40,
    proposed_khata_no: "Gat 145",
    proposed_khesra_no: "23-B",
    proposed_land_type: "Commercial / IT Zone",
    justification: "Gazette notification spelling rectification and Aadhaar e-KYC name alignment.",
    field_inspection_report: "Talathi verified with 1985 settlement register. Spelling error rectified.",
    officer_user_id: "USR-OFF-2002",
    officer_name: "Ananya Mishra, IAS",
    officer_designation: "Sub-Divisional Magistrate (SDM)",
    officer_emp_code: "IAS-UP-2018-44",
    memo_reference_no: "PUN/HAV/CORR/2026/102",
    supporting_doc_name: "Gazette_Name_Correction_Kulkarni.pdf",
    status: "APPROVED_IMPLEMENTED",
    submitted_at: "2026-03-25 10:00 AM",
    reviewed_at: "2026-03-26 04:30 PM",
    admin_remarks: "Verified against State Gazette. Approved for official 7/12 sync.",
    admin_approver_name: "National DILRMP Administrator"
  }
];

export const INITIAL_AUDIT_LOGS: AuditLogEntry[] = [
  {
    id: "LOG-2026-901",
    timestamp: "2026-03-29 02:15 PM",
    action: "MUTATION_REQUEST_SUBMITTED",
    performed_by: "Vikramaditya Rao (Tahsildar / Circle Officer)",
    role: "REVENUE_OFFICER",
    category: "RECORD_MUTATION",
    details: "Submitted Batwara / Partition request for Khata 125, Kura, Bokaro (JH-BOK-CHA-KURA-K125-K450-2)",
    target_id: "REQ-MUT-2026-002"
  },
  {
    id: "LOG-2026-902",
    timestamp: "2026-03-28 11:30 AM",
    action: "MUTATION_REQUEST_SUBMITTED",
    performed_by: "Vikramaditya Rao (Tahsildar / Circle Officer)",
    role: "REVENUE_OFFICER",
    category: "RECORD_MUTATION",
    details: "Submitted Sale Transfer request for Gata 340, Dadri, UP (UP-GAU-DAD-BHAN-P340-PL112-1)",
    target_id: "REQ-MUT-2026-001"
  },
  {
    id: "LOG-2026-903",
    timestamp: "2026-03-26 04:30 PM",
    action: "RECORD_UPDATE_APPROVED",
    performed_by: "National DILRMP Administrator",
    role: "ADMIN",
    category: "APPROVAL",
    details: "Approved Name Correction request for Gat 145, Hinjawadi, Pune. Live 7/12 Satbara updated.",
    target_id: "REQ-MUT-2026-003"
  }
];

export const DEFAULT_MAINTENANCE_CONFIG: SystemMaintenanceConfig = {
  is_maintenance_active: false,
  maintenance_message: "BhoomiShield National Registry is currently undergoing scheduled DILRMP Server synchronization and database index optimization.",
  maintenance_reason: "Quarterly National Land Governance Database Upgrade & State Portal API Sync",
  estimated_uptime: "Approximately 45 minutes (Restoration at 01:00 AM IST)",
  emergency_contact: "helpdesk@bhoomishield.gov.in | Toll-Free: 1800-BHOOMI (1800-246-664)",
  initiated_by: "National DILRMP Administrator",
  initiated_at: "2026-03-29"
};

// =========================================================================
// SERVICE FUNCTIONS
// =========================================================================

// --- 1. Master Land Records ---
export const getMasterLandRecords = (): LandParcel[] => {
  try {
    const raw = localStorage.getItem(MASTER_LAND_RECORDS_KEY);
    if (!raw) {
      localStorage.setItem(MASTER_LAND_RECORDS_KEY, JSON.stringify(INITIAL_LAND_PARCELS));
      return INITIAL_LAND_PARCELS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_LAND_PARCELS;
  }
};

export const saveMasterLandRecords = (records: LandParcel[]) => {
  try {
    localStorage.setItem(MASTER_LAND_RECORDS_KEY, JSON.stringify(records));
  } catch (e) {
    console.error('Failed to save land records', e);
  }
};

export const addLandParcelRecord = (parcel: Omit<LandParcel, 'id'>): LandParcel => {
  const records = getMasterLandRecords();
  const newId = records.length > 0 ? Math.max(...records.map(r => r.id)) + 1 : 1;
  const newParcel: LandParcel = {
    ...parcel,
    id: newId,
    created_at: new Date().toISOString().split('T')[0]
  };
  records.unshift(newParcel);
  saveMasterLandRecords(records);
  addAuditLog(
    'LAND_PARCEL_CREATED',
    'Admin User',
    'ADMIN',
    'RECORD_MUTATION',
    `Created new land parcel record ${newParcel.land_identity_id} (${newParcel.mauza}, ${newParcel.district})`,
    newParcel.land_identity_id
  );
  return newParcel;
};

export const updateLandParcelRecord = (id: number, updates: Partial<LandParcel>): LandParcel | null => {
  const records = getMasterLandRecords();
  const idx = records.findIndex(r => r.id === id);
  if (idx < 0) return null;
  records[idx] = { ...records[idx], ...updates };
  saveMasterLandRecords(records);
  return records[idx];
};

export const deleteLandParcelRecord = (id: number): boolean => {
  const records = getMasterLandRecords();
  const target = records.find(r => r.id === id);
  const filtered = records.filter(r => r.id !== id);
  saveMasterLandRecords(filtered);
  if (target) {
    addAuditLog(
      'LAND_PARCEL_DELETED',
      'Admin User',
      'ADMIN',
      'RECORD_MUTATION',
      `Deleted land parcel record ${target.land_identity_id}`,
      target.land_identity_id
    );
  }
  return true;
};

// --- 2. Mutation & Change Requests (Tehsildar -> Admin) ---
export const getChangeRequests = (): LandRecordChangeRequest[] => {
  try {
    const raw = localStorage.getItem(CHANGE_REQUESTS_KEY);
    if (!raw) {
      localStorage.setItem(CHANGE_REQUESTS_KEY, JSON.stringify(INITIAL_CHANGE_REQUESTS));
      return INITIAL_CHANGE_REQUESTS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_CHANGE_REQUESTS;
  }
};

export const saveChangeRequests = (requests: LandRecordChangeRequest[]) => {
  try {
    localStorage.setItem(CHANGE_REQUESTS_KEY, JSON.stringify(requests));
  } catch (e) {
    console.error('Failed to save change requests', e);
  }
};

export const createChangeRequest = (
  req: Omit<LandRecordChangeRequest, 'id' | 'status' | 'submitted_at'>
): LandRecordChangeRequest => {
  const requests = getChangeRequests();
  const nextNum = requests.length + 1;
  const newId = `REQ-MUT-${new Date().getFullYear()}-${String(nextNum).padStart(3, '0')}`;
  
  const newRequest: LandRecordChangeRequest = {
    ...req,
    id: newId,
    status: 'PENDING_ADMIN_APPROVAL',
    submitted_at: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })
  };

  requests.unshift(newRequest);
  saveChangeRequests(requests);

  addAuditLog(
    'MUTATION_REQUEST_SUBMITTED',
    `${req.officer_name} (${req.officer_designation})`,
    'REVENUE_OFFICER',
    'RECORD_MUTATION',
    `Submitted ${req.change_type} request for parcel ${req.land_identity_id} (Memo: ${req.memo_reference_no})`,
    newId
  );

  return newRequest;
};

export const reviewChangeRequest = (
  requestId: string,
  decision: 'APPROVED_IMPLEMENTED' | 'REJECTED' | 'RETURNED_FOR_INQUIRY',
  adminRemarks: string,
  adminApproverName: string
): { success: boolean; request: LandRecordChangeRequest | null; message: string } => {
  const requests = getChangeRequests();
  const idx = requests.findIndex(r => r.id === requestId);
  if (idx < 0) return { success: false, request: null, message: 'Request not found' };

  const targetReq = requests[idx];
  targetReq.status = decision;
  targetReq.admin_remarks = adminRemarks;
  targetReq.admin_approver_name = adminApproverName;
  targetReq.reviewed_at = new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });

  // IF APPROVED: Automatically apply the changes to the master land records!
  if (decision === 'APPROVED_IMPLEMENTED') {
    const records = getMasterLandRecords();
    const parcelIdx = records.findIndex(p => p.land_identity_id === targetReq.land_identity_id);
    if (parcelIdx >= 0) {
      records[parcelIdx] = {
        ...records[parcelIdx],
        owner_name: targetReq.proposed_owner || records[parcelIdx].owner_name,
        area_acre: targetReq.proposed_area_acre || records[parcelIdx].area_acre,
        khata_no: targetReq.proposed_khata_no || records[parcelIdx].khata_no,
        khesra_no: targetReq.proposed_khesra_no || records[parcelIdx].khesra_no,
        land_type: targetReq.proposed_land_type || records[parcelIdx].land_type
      };
      saveMasterLandRecords(records);
    }

    addAuditLog(
      'RECORD_UPDATE_APPROVED',
      adminApproverName,
      'ADMIN',
      'APPROVAL',
      `Approved and committed ${targetReq.change_type} for parcel ${targetReq.land_identity_id}. New Owner: ${targetReq.proposed_owner}.`,
      targetReq.id
    );
  } else if (decision === 'REJECTED') {
    addAuditLog(
      'RECORD_UPDATE_REJECTED',
      adminApproverName,
      'ADMIN',
      'APPROVAL',
      `Rejected ${targetReq.change_type} for parcel ${targetReq.land_identity_id}. Remarks: ${adminRemarks}`,
      targetReq.id
    );
  } else {
    addAuditLog(
      'RECORD_UPDATE_RETURNED',
      adminApproverName,
      'ADMIN',
      'APPROVAL',
      `Returned for inquiry ${targetReq.change_type} for parcel ${targetReq.land_identity_id}. Remarks: ${adminRemarks}`,
      targetReq.id
    );
  }

  saveChangeRequests(requests);
  return { 
    success: true, 
    request: targetReq, 
    message: decision === 'APPROVED_IMPLEMENTED' 
      ? 'Record change request APPROVED and live registry successfully updated!' 
      : `Request marked as ${decision}.`
  };
};

// --- 3. Audit Logs ---
export const getAuditLogs = (): AuditLogEntry[] => {
  try {
    const raw = localStorage.getItem(AUDIT_LOGS_KEY);
    if (!raw) {
      localStorage.setItem(AUDIT_LOGS_KEY, JSON.stringify(INITIAL_AUDIT_LOGS));
      return INITIAL_AUDIT_LOGS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_AUDIT_LOGS;
  }
};

export const addAuditLog = (
  action: string,
  performedBy: string,
  role: string,
  category: AuditLogEntry['category'],
  details: string,
  targetId?: string
) => {
  try {
    const logs = getAuditLogs();
    const newLog: AuditLogEntry = {
      id: `LOG-${Date.now().toString().slice(-6)}`,
      timestamp: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
      action,
      performed_by: performedBy,
      role,
      category,
      details,
      target_id: targetId
    };
    logs.unshift(newLog);
    // Keep last 100 logs
    if (logs.length > 100) logs.length = 100;
    localStorage.setItem(AUDIT_LOGS_KEY, JSON.stringify(logs));
  } catch (e) {
    console.error('Failed to append audit log', e);
  }
};

// --- 4. System Maintenance & Shutdown Mode ---
export const getSystemMaintenanceConfig = (): SystemMaintenanceConfig => {
  try {
    const raw = localStorage.getItem(MAINTENANCE_CONFIG_KEY);
    if (!raw) {
      localStorage.setItem(MAINTENANCE_CONFIG_KEY, JSON.stringify(DEFAULT_MAINTENANCE_CONFIG));
      return DEFAULT_MAINTENANCE_CONFIG;
    }
    return JSON.parse(raw);
  } catch {
    return DEFAULT_MAINTENANCE_CONFIG;
  }
};

export const setSystemMaintenanceMode = (
  active: boolean,
  config?: Partial<SystemMaintenanceConfig>,
  adminName = 'National DILRMP Administrator'
): SystemMaintenanceConfig => {
  const current = getSystemMaintenanceConfig();
  const updated: SystemMaintenanceConfig = {
    ...current,
    ...config,
    is_maintenance_active: active,
    initiated_by: adminName,
    initiated_at: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })
  };

  localStorage.setItem(MAINTENANCE_CONFIG_KEY, JSON.stringify(updated));
  localStorage.setItem('bhoomi_maintenance_mode', active ? 'true' : 'false');

  // Trigger storage event so other components and tabs detect immediately
  window.dispatchEvent(new Event('storage'));

  addAuditLog(
    active ? 'SITE_MAINTENANCE_ACTIVATED' : 'SITE_MAINTENANCE_DEACTIVATED',
    adminName,
    'ADMIN',
    'SYSTEM_MAINTENANCE',
    active 
      ? `Admin activated site maintenance shutdown. Reason: ${updated.maintenance_reason}`
      : 'Admin restored live portal operations and deactivated maintenance mode.'
  );

  return updated;
};
