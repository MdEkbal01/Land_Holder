import React, { useState } from 'react';
import { 
  X, Download, Printer, ShieldCheck, CheckCircle2, 
  FileText, Landmark, Building2, QrCode, Sparkles, Stamp 
} from 'lucide-react';
import { downloadPDF } from '../services/pdfService';
import jsPDF from 'jspdf';

interface OfficialPdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  pdfDoc?: jsPDF | null;
  filename?: string;
  children?: React.ReactNode;
}

export const OfficialPdfModal: React.FC<OfficialPdfModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  pdfDoc,
  filename = 'Official_BhoomiShield_Document.pdf',
  children
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    if (pdfDoc) {
      downloadPDF(pdfDoc, filename);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    }
  };

  const handlePrint = () => {
    if (pdfDoc) {
      pdfDoc.autoPrint();
      window.open(pdfDoc.output('bloburl'), '_blank');
    } else {
      window.print();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 font-sans animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 max-w-3xl w-full rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Top Header */}
        <div className="p-5 sm:p-6 bg-[#0e4d2f] text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-white/15 text-white">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-emerald-200 uppercase tracking-widest">
                Government of India • DILRMP Certified
              </div>
              <h3 className="font-extrabold text-base sm:text-lg text-white">
                {title}
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center space-x-1.5 cursor-pointer active:scale-95"
              title="Download PDF to Computer"
            >
              <Download className="w-4 h-4" />
              <span>{downloadSuccess ? 'Downloaded!' : 'Download PDF'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors cursor-pointer"
              title="Print Document"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors cursor-pointer"
              title="Close Preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Certificate Paper Preview Box */}
        <div className="p-6 sm:p-8 overflow-y-auto bg-slate-100 dark:bg-slate-950 flex-1 flex justify-center">
          <div className="max-w-2xl w-full bg-white text-slate-900 shadow-xl border border-slate-200 p-8 rounded-2xl relative space-y-6">
            
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none">
              <ShieldCheck className="w-96 h-96 text-emerald-950" />
            </div>

            {/* Top Emblem and Header */}
            <div className="text-center border-b-2 border-[#137a4d] pb-4 space-y-1">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-[#137a4d] font-black text-lg mb-1">
                B
              </div>
              <h2 className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                Government of India • Ministry of Rural Development
              </h2>
              <h1 className="text-lg font-black text-[#0e4d2f] tracking-tight uppercase">
                {title}
              </h1>
              <p className="text-[11px] text-slate-500 font-medium">
                {subtitle || 'Digital India Land Records Modernization Programme (DILRMP)'}
              </p>
            </div>

            {/* Dynamic Content */}
            <div className="relative z-10 text-xs text-slate-800 space-y-4">
              {children}
            </div>

            {/* Bottom Seal & Attestation */}
            <div className="pt-6 border-t border-slate-200 flex justify-between items-end text-[10px] text-slate-500 relative z-10">
              <div className="space-y-1 font-mono">
                <div>Digital Certificate ID: DILRMP-{Math.random().toString(36).substring(2, 10).toUpperCase()}</div>
                <div>Issued On: {new Date().toLocaleString('en-IN')} IST</div>
                <div>Status: OFFICIALLY CERTIFIED & VERIFIED</div>
              </div>

              <div className="border-2 border-[#137a4d] px-4 py-2 rounded-xl text-center text-[#137a4d] font-bold space-y-0.5">
                <div className="text-[8px] uppercase tracking-wider">DILRMP DIGITAL SEAL</div>
                <div className="text-[11px] font-black">OFFICIALLY SIGNED</div>
                <div className="text-[8px] font-mono">[GOVERNMENT OF INDIA]</div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs">
          <span className="text-slate-500 font-medium">
            Certified official document for legal archives & offline record maintenance.
          </span>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleDownload}
              className="px-5 py-2.5 bg-[#137a4d] hover:bg-[#0f633e] text-white font-bold rounded-xl shadow-md transition-all flex items-center space-x-1.5 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Signed PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 font-bold rounded-xl"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
