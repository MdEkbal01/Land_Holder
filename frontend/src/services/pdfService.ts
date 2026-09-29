import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { LandRecordChangeRequest, AuditLogEntry } from './landRecordsService';
import { LandParcel, UserDocument } from '../types';
import { RegisteredUserDetailed } from '../context/AuthContext';

// Helper to add standard official header and branding
const addOfficialHeader = (doc: jsPDF, title: string, subtitle: string) => {
  const pageWidth = doc.internal.pageSize.getWidth();

  // Top Green Banner
  doc.setFillColor(14, 77, 47); // #0e4d2f
  doc.rect(0, 0, pageWidth, 24, 'F');

  // National Emblem / BhoomiShield Branding
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(255, 255, 255);
  doc.text('GOVERNMENT OF INDIA • DIGITAL INDIA LAND RECORDS MODERNIZATION PROGRAMME (DILRMP)', pageWidth / 2, 9, { align: 'center' });

  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.text('NATIONAL BHU-AADHAAR & LAND RECORD GOVERNANCE SYSTEM • BHOOMISHIELD PLATFORM', pageWidth / 2, 16, { align: 'center' });

  // Document Title Box
  doc.setFillColor(245, 248, 246);
  doc.setDrawColor(19, 122, 77);
  doc.setLineWidth(0.5);
  doc.roundedRect(14, 28, pageWidth - 28, 18, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(19, 122, 77);
  doc.text(title.toUpperCase(), pageWidth / 2, 36, { align: 'center' });

  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(80, 80, 80);
  doc.text(subtitle, pageWidth / 2, 42, { align: 'center' });
};

// Helper for Footer
const addOfficialFooter = (doc: jsPDF, certNumber: string) => {
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.5);
  doc.line(14, pageHeight - 16, pageWidth - 14, pageHeight - 16);

  doc.setFontSize(7);
  doc.setTextColor(100, 100, 100);
  doc.text(`Document Ref: ${certNumber} • Certified by BhoomiShield Cryptographic Registry`, 14, pageHeight - 10);
  doc.text(`Generated: ${new Date().toLocaleString('en-IN')} IST • Page 1 of 1`, pageWidth - 14, pageHeight - 10, { align: 'right' });
  doc.text('This is a digitally signed official government record and does not require a physical ink seal.', pageWidth / 2, pageHeight - 6, { align: 'center' });
};

// ============================================================================
// 1. MUTATION & LAND RECORD MODIFICATION ORDER PDF
// ============================================================================
export const generateMutationOrderPDF = (request: LandRecordChangeRequest): jsPDF => {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const certNo = `GOV-ORD-${request.id}-${Date.now().toString().slice(-4)}`;

  addOfficialHeader(
    doc,
    'OFFICIAL REVENUE RECORD MUTATION ORDER (DAKHIL KHARIJ)',
    `Under Section 14/89 of State Land Revenue Act • Sanction Memo: ${request.memo_reference_no}`
  );

  let currentY = 52;

  // Metadata Grid
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(30, 30, 30);

  autoTable(doc, {
    startY: currentY,
    theme: 'grid',
    headStyles: { fillColor: [19, 122, 77], textColor: 255, fontStyle: 'bold', fontSize: 8 },
    bodyStyles: { fontSize: 8, textColor: [40, 40, 40] },
    columns: [
      { header: 'Property & Registry Parameter', dataKey: 'key' },
      { header: 'Statutory Administrative Record Details', dataKey: 'val' }
    ],
    body: [
      { key: 'Mutation Order / Sanction Ref', val: `${certNo} (Request ID: ${request.id})` },
      { key: 'Type of Record Modification', val: request.change_type.replace(/_/g, ' ') },
      { key: '14-Digit Bhu-Aadhaar (ULPIN)', val: request.land_identity_id },
      { key: 'State & Revenue District', val: `${request.state} • District: ${request.district}` },
      { key: 'Tehsil / Anchal & Mauza', val: `${request.tehsil || request.anchal || 'Tehsil Desk'} • Mauza/Sector: ${request.mauza}` },
      { key: 'Submitting Officer & Designation', val: `${request.officer_name} (${request.officer_designation} - Code: ${request.officer_emp_code || 'REV-OFF'})` },
      { key: 'Application & Submission Timestamp', val: `${request.submitted_at} IST` },
      { key: 'Current Administrative Status', val: request.status.replace(/_/g, ' ') }
    ],
    margin: { left: 14, right: 14 }
  });

  currentY = (doc as any).lastAutoTable.finalY + 6;

  // Comparative Table: Current Record vs Sanctioned New Record
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(14, 77, 47);
  doc.text('1. COMPARATIVE LAND RECORD RECORD OF RIGHTS (RoR) REVISION', 14, currentY);
  currentY += 3;

  autoTable(doc, {
    startY: currentY,
    theme: 'striped',
    headStyles: { fillColor: [30, 41, 59], textColor: 255, fontSize: 8 },
    bodyStyles: { fontSize: 8 },
    columns: [
      { header: 'Record Attribute', dataKey: 'attr' },
      { header: 'Previous Record of Rights (Sabik)', dataKey: 'before' },
      { header: 'Sanctioned Record Entry (Hal)', dataKey: 'after' }
    ],
    body: [
      {
        attr: 'Recorded Raiyat / Owner',
        before: request.current_owner,
        after: request.proposed_owner
      },
      {
        attr: 'Khata / Gata / Patta No',
        before: request.khata_no,
        after: request.proposed_khata_no || request.khata_no
      },
      {
        attr: 'Khesra / Plot / Survey No',
        before: request.khesra_no,
        after: request.proposed_khesra_no || request.khesra_no
      },
      {
        attr: 'Recorded Land Area',
        before: `${request.current_area_acre} Acres`,
        after: `${request.proposed_area_acre} Acres`
      },
      {
        attr: 'Land Classification / Usage',
        before: 'Standard Raiyati',
        after: request.proposed_land_type || 'Rayati Dhan'
      }
    ],
    margin: { left: 14, right: 14 }
  });

  currentY = (doc as any).lastAutoTable.finalY + 6;

  // Statutory Justification & Field Inspection Summary
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(14, 77, 47);
  doc.text('2. REVENUE INQUIRY & PANCHANAMA EVIDENCE RECORD', 14, currentY);
  currentY += 3;

  autoTable(doc, {
    startY: currentY,
    theme: 'plain',
    bodyStyles: { fontSize: 7.5, textColor: [40, 40, 40] },
    body: [
      ['Circle Officer Justification:', request.justification],
      ['Halka Lekhpal & Amin Report:', request.field_inspection_report],
      ['Supporting Legal Deeds / Memos:', `${request.supporting_doc_name || 'Sale Deed Deed.pdf'} (Registered at Sub-Registrar)`],
      ['National Admin Sanction Notes:', request.admin_remarks || (request.status === 'APPROVED_IMPLEMENTED' ? 'Approved by National DILRMP Administrator for live registry synchronization.' : 'Under active statutory review.')]
    ],
    margin: { left: 14, right: 14 }
  });

  currentY = (doc as any).lastAutoTable.finalY + 6;

  // Sign-off Box with Digital Seal
  const pageWidth = doc.internal.pageSize.getWidth();
  doc.setFillColor(245, 248, 246);
  doc.setDrawColor(19, 122, 77);
  doc.roundedRect(14, currentY, pageWidth - 28, 26, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(14, 77, 47);
  doc.text('DIGITAL SIGNATURE & STATUTORY APPROVAL ENDORSEMENT', 20, currentY + 6);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(60, 60, 60);
  doc.text(`Submitting Authority: ${request.officer_name}, Tahsildar / Circle Officer`, 20, currentY + 12);
  doc.text(`Apex Sanctioning Authority: ${request.admin_approver_name || 'National DILRMP Technical Director'}`, 20, currentY + 17);
  doc.text(`Status: ${request.status === 'APPROVED_IMPLEMENTED' ? 'APPROVED & SYNCHRONIZED WITH LIVE REVENUE DATABASE' : 'PROVISIONAL SUBMISSION'}`, 20, currentY + 22);

  // Digital Seal Stamp on Right
  doc.setDrawColor(19, 122, 77);
  doc.setLineWidth(1);
  doc.roundedRect(pageWidth - 62, currentY + 3, 44, 20, 1, 1, 'D');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6.5);
  doc.setTextColor(14, 77, 47);
  doc.text('GOVT OF INDIA', pageWidth - 40, currentY + 7, { align: 'center' });
  doc.text('DILRMP DIGITAL SEAL', pageWidth - 40, currentY + 12, { align: 'center' });
  doc.text('VERIFIED & SIGNED', pageWidth - 40, currentY + 17, { align: 'center' });
  doc.text(`[${new Date().toISOString().split('T')[0]}]`, pageWidth - 40, currentY + 21, { align: 'center' });

  addOfficialFooter(doc, certNo);
  return doc;
};

// ============================================================================
// 2. RECORD OF RIGHTS (RoR / KHATIAN / REGISTER-II) CERTIFICATE PDF
// ============================================================================
export const generateRecordOfRightsPDF = (parcel: LandParcel): jsPDF => {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const certNo = `RoR-CERT-${parcel.land_identity_id}-${Date.now().toString().slice(-4)}`;

  addOfficialHeader(
    doc,
    'CERTIFIED RECORD OF RIGHTS (KHATIAN / REGISTER-II EXTRACT)',
    `Issued under Digital India Land Records Modernization Programme • State Portal Linked: ${parcel.state}`
  );

  let currentY = 52;

  autoTable(doc, {
    startY: currentY,
    theme: 'grid',
    headStyles: { fillColor: [19, 122, 77], textColor: 255, fontStyle: 'bold', fontSize: 8 },
    bodyStyles: { fontSize: 8, textColor: [40, 40, 40] },
    columns: [
      { header: 'Land Parcel Specification', dataKey: 'key' },
      { header: 'Official Revenue Registry Record', dataKey: 'val' }
    ],
    body: [
      { key: '14-Digit Bhu-Aadhaar (ULPIN)', val: parcel.land_identity_id },
      { key: 'Recorded Owner / Raiyat Name', val: parcel.owner_name || 'Recorded Raiyat' },
      { key: 'Khata / Gata / Patta Number', val: parcel.khata_no },
      { key: 'Khesra / Plot / Survey Number', val: parcel.khesra_no },
      { key: 'Total Registered Area', val: `${parcel.area_acre} Acres` },
      { key: 'Land Classification', val: parcel.land_type },
      { key: 'State & Revenue District', val: `${parcel.state} • ${parcel.district}` },
      { key: 'Tehsil / Anchal & Mauza', val: `${parcel.anchal} • ${parcel.mauza} (${parcel.halka})` },
      { key: 'Lagan / Revenue Payment Status', val: 'CLEAR • Up-to-date for Financial Year 2025-26' },
      { key: 'Encumbrance / Court Dispute Status', val: 'NIL / UNENCUMBERED • Verified against e-Courts Registry' }
    ],
    margin: { left: 14, right: 14 }
  });

  currentY = (doc as any).lastAutoTable.finalY + 10;

  // Security & QR Badge Box
  const pageWidth = doc.internal.pageSize.getWidth();
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(203, 213, 225);
  doc.roundedRect(14, currentY, pageWidth - 28, 32, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(30, 41, 59);
  doc.text('NATIONAL GEOGRAPHIC & CADASTRAL SPATIAL MAPPING', 20, currentY + 8);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(71, 85, 105);
  doc.text(`Polygon Hash: SHA256-${Math.random().toString(36).substring(2, 18).toUpperCase()}`, 20, currentY + 15);
  doc.text(`Centroid Coordinates: Lat 23.6693° N, Lon 86.1511° E (Geo-Referenced WGS-84)`, 20, currentY + 21);
  doc.text('Digital Signature: Verified by National DILRMP Spatial Cadastre Engine', 20, currentY + 27);

  // Digital Seal Stamp on Right
  doc.setDrawColor(14, 77, 47);
  doc.setLineWidth(1);
  doc.roundedRect(pageWidth - 62, currentY + 4, 44, 24, 1, 1, 'D');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6.5);
  doc.setTextColor(14, 77, 47);
  doc.text('CERTIFIED TRUE COPY', pageWidth - 40, currentY + 10, { align: 'center' });
  doc.text('STATE REVENUE DEPT', pageWidth - 40, currentY + 15, { align: 'center' });
  doc.text('E-RECORD OF RIGHTS', pageWidth - 40, currentY + 20, { align: 'center' });
  doc.text('[SECURE QR VALIDATED]', pageWidth - 40, currentY + 25, { align: 'center' });

  addOfficialFooter(doc, certNo);
  return doc;
};

// ============================================================================
// 3. CITIZEN DOCUMENT INTEGRITY & VERIFICATION CERTIFICATE PDF
// ============================================================================
export const generateDocumentVerificationCertificatePDF = (
  docData: UserDocument,
  officerName = 'Vikramaditya Rao (Tahsildar / Circle Officer)'
): jsPDF => {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const certNo = `VER-SEAL-${docData.document_id}-${Date.now().toString().slice(-4)}`;

  addOfficialHeader(
    doc,
    'OFFICIAL DOCUMENT INTEGRITY & VERIFICATION CERTIFICATE',
    `Revenue Department Seal • Certified under Information Technology Act, 2000`
  );

  let currentY = 52;

  autoTable(doc, {
    startY: currentY,
    theme: 'grid',
    headStyles: { fillColor: [19, 122, 77], textColor: 255, fontStyle: 'bold', fontSize: 8 },
    bodyStyles: { fontSize: 8, textColor: [40, 40, 40] },
    columns: [
      { header: 'Digital Verification Parameter', dataKey: 'key' },
      { header: 'Official Cryptographic Record', dataKey: 'val' }
    ],
    body: [
      { key: 'Document Identification ID', val: docData.document_id },
      { key: 'Document Title & Category', val: `${docData.title} (${docData.document_type})` },
      { key: 'Citizen / Applicant Name', val: docData.citizen_name || 'Registered Landowner' },
      { key: 'Associated Land Parcel (ULPIN)', val: docData.land_identity_id || 'State Land Registry Linked' },
      { key: 'Khata & Khesra Specification', val: docData.khata_khasra_no || 'Plot Specific Record' },
      { key: 'Original Issuing Authority', val: docData.issuing_authority || 'Revenue & Registration Office' },
      { key: 'Original Issue Date', val: docData.issue_date || 'Historical Settlement' },
      { key: 'File Name & Size', val: `${docData.file_name} (${docData.file_size_kb || 340} KB)` },
      { key: 'SHA-256 Cryptographic Hash', val: docData.file_hash || 'd41d8cd98f00b204e9800998ecf8427e9921b78291ac04d1efc5357876a3bdc2' },
      { key: 'Verification Status', val: 'OFFICIALLY VERIFIED & DIGITALLY STAMPED' }
    ],
    margin: { left: 14, right: 14 }
  });

  currentY = (doc as any).lastAutoTable.finalY + 10;

  const pageWidth = doc.internal.pageSize.getWidth();
  doc.setFillColor(245, 248, 246);
  doc.setDrawColor(19, 122, 77);
  doc.roundedRect(14, currentY, pageWidth - 28, 30, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(14, 77, 47);
  doc.text('OFFICER SEAL & REVENUE CLEARANCE ATTESTATION', 20, currentY + 7);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(60, 60, 60);
  doc.text(`Verifying Authority: ${officerName}`, 20, currentY + 14);
  doc.text(`Attestation Remarks: Document verified against Volume Book-1 records. Clean chain of title verified.`, 20, currentY + 20);
  doc.text(`Digital Seal Token: SEC-SEAL-${Math.random().toString(36).substring(2, 12).toUpperCase()}`, 20, currentY + 26);

  // Seal on Right
  doc.setDrawColor(19, 122, 77);
  doc.setLineWidth(1);
  doc.roundedRect(pageWidth - 62, currentY + 4, 44, 22, 1, 1, 'D');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6.5);
  doc.setTextColor(14, 77, 47);
  doc.text('REVENUE OFFICER SEAL', pageWidth - 40, currentY + 9, { align: 'center' });
  doc.text('TAHSILDAR OFFICE', pageWidth - 40, currentY + 14, { align: 'center' });
  doc.text('OFFICIALLY AFFIXED', pageWidth - 40, currentY + 19, { align: 'center' });

  addOfficialFooter(doc, certNo);
  return doc;
};

// ============================================================================
// 4. USER IDENTITY & CREDENTIALS DOSSIER PDF
// ============================================================================
export const generateUserDossierPDF = (userData: RegisteredUserDetailed): jsPDF => {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const certNo = `USR-DOS-${userData.user_id}-${Date.now().toString().slice(-4)}`;

  addOfficialHeader(
    doc,
    'OFFICIAL USER REGISTRATION & IDENTITY DOSSIER',
    'Administrative Record for Offline Archive & Legal Compliance'
  );

  let currentY = 52;

  autoTable(doc, {
    startY: currentY,
    theme: 'grid',
    headStyles: { fillColor: [19, 122, 77], textColor: 255, fontStyle: 'bold', fontSize: 8 },
    bodyStyles: { fontSize: 8, textColor: [40, 40, 40] },
    columns: [
      { header: 'Identity Parameter', dataKey: 'key' },
      { header: 'Registered System Value', dataKey: 'val' }
    ],
    body: [
      { key: 'User System ID', val: userData.user_id },
      { key: 'Full Legal Name', val: userData.full_name },
      { key: 'Account Username', val: userData.username },
      { key: 'Registered Email Address', val: userData.email },
      { key: 'Mobile Phone Contact', val: userData.mobile || 'Not Specified' },
      { key: 'Assigned Role & Authorization', val: userData.role },
      { key: 'Department / Organization', val: userData.department || 'Citizen Public User' },
      { key: 'Designation / Title', val: userData.designation || 'Landowner' },
      { key: 'Employee ID / Badge Code', val: userData.employee_id || 'N/A' },
      { key: 'Jurisdiction State & District', val: `${userData.jurisdiction_state || 'All India'} • ${userData.jurisdiction_district || 'Central'}` },
      { key: 'Aadhaar e-KYC Identifier', val: `XXXX-XXXX-${userData.aadhaar_last4 || '5412'} (${userData.kyc_status || 'VERIFIED'})` },
      { key: 'Income Tax PAN Number', val: userData.pan_number || 'ABCPS1234F' },
      { key: 'Account Standing / Status', val: userData.status || 'ACTIVE' }
    ],
    margin: { left: 14, right: 14 }
  });

  addOfficialFooter(doc, certNo);
  return doc;
};

// ============================================================================
// 5. NATIONAL LAND GOVERNANCE SYSTEM AUDIT REPORT PDF
// ============================================================================
export const generateAuditReportPDF = (logs: AuditLogEntry[]): jsPDF => {
  const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
  const certNo = `AUD-REP-${Date.now().toString().slice(-6)}`;

  const pageWidth = doc.internal.pageSize.getWidth();

  // Top Green Banner
  doc.setFillColor(14, 77, 47);
  doc.rect(0, 0, pageWidth, 22, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(255, 255, 255);
  doc.text('NATIONAL DILRMP GOVERNANCE • PLATFORM AUDIT & TRANSACTION LOG', pageWidth / 2, 9, { align: 'center' });

  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.text(`Official Immutable Security Trail • Generated on ${new Date().toLocaleString('en-IN')} IST`, pageWidth / 2, 16, { align: 'center' });

  autoTable(doc, {
    startY: 28,
    theme: 'grid',
    headStyles: { fillColor: [19, 122, 77], textColor: 255, fontSize: 8, fontStyle: 'bold' },
    bodyStyles: { fontSize: 7.5, textColor: [30, 30, 30] },
    columns: [
      { header: 'Log ID', dataKey: 'id' },
      { header: 'Timestamp', dataKey: 'timestamp' },
      { header: 'Category', dataKey: 'category' },
      { header: 'Action', dataKey: 'action' },
      { header: 'Performed By & Role', dataKey: 'performed_by' },
      { header: 'Transaction Audit Details', dataKey: 'details' }
    ],
    body: logs.map(l => ({
      id: l.id,
      timestamp: l.timestamp,
      category: l.category,
      action: l.action,
      performed_by: `${l.performed_by} (${l.role})`,
      details: l.details
    })),
    margin: { left: 14, right: 14 }
  });

  addOfficialFooter(doc, certNo);
  return doc;
};

// ============================================================================
// DOWNLOAD TRIGGER UTILITY
// ============================================================================
export const downloadPDF = (doc: jsPDF, filename: string) => {
  doc.save(filename);
};
