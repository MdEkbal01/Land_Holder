import React, { useState } from 'react';
import { 
  X, Check, ShieldCheck, Mail, ArrowRight, User as UserIcon, 
  RefreshCw, AlertCircle, ChevronRight, Lock, KeyRound 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { sendOtpEmail, generateSecureOtp } from '../services/emailService';
import { OtpVerificationCard } from './OtpVerificationCard';

interface GoogleAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  defaultEmail?: string;
}

interface GoogleAccount {
  name: string;
  email: string;
  avatarBg: string;
  avatarLetter: string;
  role: string;
}

const DEFAULT_GOOGLE_ACCOUNTS: GoogleAccount[] = [
  {
    name: 'Zainul Corp',
    email: 'zainulcorp71@fmail.com',
    avatarBg: 'bg-emerald-600',
    avatarLetter: 'Z',
    role: 'Citizen & Landowner'
  },
  {
    name: 'Ramesh Sharma',
    email: 'ramesh.sharma@gmail.com',
    avatarBg: 'bg-blue-600',
    avatarLetter: 'R',
    role: 'Citizen & Verified Landholder'
  },
  {
    name: 'Vikramaditya Rao (Official)',
    email: 'vikram.rao.gov@gmail.com',
    avatarBg: 'bg-amber-600',
    avatarLetter: 'V',
    role: 'Revenue Officer / Tahsildar'
  }
];

export const GoogleAuthModal: React.FC<GoogleAuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  defaultEmail = ''
}) => {
  const { login } = useAuth();
  const [step, setStep] = useState<'SELECT_ACCOUNT' | 'CUSTOM_EMAIL' | 'OTP_VERIFICATION'>('SELECT_ACCOUNT');
  const [selectedAccount, setSelectedAccount] = useState<GoogleAccount | null>(null);
  const [customEmail, setCustomEmail] = useState<string>(defaultEmail);
  const [customName, setCustomName] = useState<string>('');
  const [isSendingOtp, setIsSendingOtp] = useState<boolean>(false);
  const [generatedOtp, setGeneratedOtp] = useState<string>('');
  const [isEmailJsDelivered, setIsEmailJsDelivered] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  if (!isOpen) return null;

  const handleSelectAccount = async (account: GoogleAccount) => {
    setSelectedAccount(account);
    setErrorMessage('');
    setIsSendingOtp(true);

    try {
      const otpRes = await sendOtpEmail({
        toEmail: account.email,
        toName: account.name,
        purpose: 'LOGIN'
      });

      setIsSendingOtp(false);
      setGeneratedOtp(otpRes.otp);
      setIsEmailJsDelivered(otpRes.deliveredViaEmailJs);
      setStep('OTP_VERIFICATION');
    } catch (err) {
      setIsSendingOtp(false);
      setErrorMessage('Failed to send Google verification OTP. Please try again.');
    }
  };

  const handleCustomEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customEmail || !customEmail.includes('@')) {
      setErrorMessage('Please enter a valid Google email address.');
      return;
    }

    const nameToUse = customName.trim() || customEmail.split('@')[0].replace('.', ' ').replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
    const newAcc: GoogleAccount = {
      name: nameToUse,
      email: customEmail.trim().toLowerCase(),
      avatarBg: 'bg-emerald-600',
      avatarLetter: nameToUse.charAt(0).toUpperCase(),
      role: 'Citizen & Verified Landholder'
    };

    setSelectedAccount(newAcc);
    setErrorMessage('');
    setIsSendingOtp(true);

    try {
      const otpRes = await sendOtpEmail({
        toEmail: newAcc.email,
        toName: newAcc.name,
        purpose: 'LOGIN'
      });

      setIsSendingOtp(false);
      setGeneratedOtp(otpRes.otp);
      setIsEmailJsDelivered(otpRes.deliveredViaEmailJs);
      setStep('OTP_VERIFICATION');
    } catch {
      setIsSendingOtp(false);
      setErrorMessage('Failed to send Google verification OTP. Please try again.');
    }
  };

  const handleOtpVerified = async () => {
    if (!selectedAccount) return;
    
    // Authenticate through the AuthContext using the verified Google identity
    await login(selectedAccount.email, 'GoogleSSO_Verified_2026#');
    onSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-md overflow-hidden relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* STEP 1: Account Selection */}
        {step === 'SELECT_ACCOUNT' && (
          <div className="p-6 sm:p-8">
            {/* Google Header Branding */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm mb-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Sign in with Google</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Choose an account to continue to <span className="font-semibold text-emerald-600 dark:text-emerald-400">BhoomiShield</span>
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Accounts List */}
            <div className="space-y-2 mb-4">
              {DEFAULT_GOOGLE_ACCOUNTS.map((acc, idx) => (
                <button
                  key={idx}
                  type="button"
                  disabled={isSendingOtp}
                  onClick={() => handleSelectAccount(acc)}
                  className="w-full p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/60 dark:hover:border-emerald-500/60 hover:bg-emerald-50/40 dark:hover:bg-emerald-950/20 flex items-center justify-between transition-all group cursor-pointer text-left disabled:opacity-60"
                >
                  <div className="flex items-center space-x-3 min-w-0">
                    <div className={`w-10 h-10 rounded-full ${acc.avatarBg} text-white font-bold flex items-center justify-center shrink-0 shadow-sm`}>
                      {acc.avatarLetter}
                    </div>
                    <div className="truncate">
                      <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-300">
                        {acc.name}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 truncate">
                        {acc.email}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-transform group-hover:translate-x-0.5 shrink-0" />
                </button>
              ))}

              {/* Use Another Account Button */}
              <button
                type="button"
                onClick={() => {
                  setErrorMessage('');
                  setStep('CUSTOM_EMAIL');
                }}
                className="w-full p-3.5 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 hover:border-emerald-500 hover:bg-slate-50 dark:hover:bg-slate-800/60 flex items-center space-x-3 transition-colors cursor-pointer text-left"
              >
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                  <UserIcon className="w-5 h-5" />
                </div>
                <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Use another Google account
                </div>
              </button>
            </div>

            {isSendingOtp && (
              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/50 rounded-xl border border-emerald-200 dark:border-emerald-800 flex items-center justify-center space-x-2 text-xs text-emerald-800 dark:text-emerald-300 font-medium">
                <RefreshCw className="w-4 h-4 animate-spin text-emerald-600" />
                <span>Generating Google 2-Step verification OTP...</span>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
              <p className="text-[11px] text-slate-400">
                To continue, Google will verify your identity with 2-Step OTP authentication.
              </p>
            </div>
          </div>
        )}

        {/* STEP 2: Custom Google Email Input */}
        {step === 'CUSTOM_EMAIL' && (
          <div className="p-6 sm:p-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm mb-3">
                <Mail className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Enter your Google Email</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                A 6-digit verification code will be dispatched to this email
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleCustomEmailSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  placeholder="e.g. Zainul Abideen"
                  className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Google Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  value={customEmail}
                  onChange={(e) => setCustomEmail(e.target.value)}
                  placeholder="name@gmail.com or name@fmail.com"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>

              <button
                type="submit"
                disabled={isSendingOtp}
                className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-60"
              >
                {isSendingOtp ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Sending Code...</span>
                  </>
                ) : (
                  <>
                    <span>Continue to Verification</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  setErrorMessage('');
                  setStep('SELECT_ACCOUNT');
                }}
                className="w-full py-2 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors cursor-pointer"
              >
                ← Back to account selection
              </button>
            </form>
          </div>
        )}

        {/* STEP 3: OTP Verification */}
        {step === 'OTP_VERIFICATION' && selectedAccount && (
          <div className="p-4 sm:p-6">
            <OtpVerificationCard
              email={selectedAccount.email}
              userName={selectedAccount.name}
              purpose="LOGIN"
              initialOtp={generatedOtp}
              isDeliveredViaEmailJs={isEmailJsDelivered}
              title="Google 2-Step Verification"
              subtitle={`Verify your identity for ${selectedAccount.email} with the 6-digit Google OTP code.`}
              onSuccess={handleOtpVerified}
              onCancel={() => {
                setErrorMessage('');
                setStep('SELECT_ACCOUNT');
              }}
            />
          </div>
        )}

      </div>
    </div>
  );
};
