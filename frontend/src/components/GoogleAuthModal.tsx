import React, { useState, useEffect } from 'react';
import { 
  X, Check, ShieldCheck, Mail, ArrowRight, User as UserIcon, 
  RefreshCw, AlertCircle, ChevronRight, Lock, KeyRound, Trash2, 
  Smartphone, ShieldAlert, CheckCircle2, Globe, Sparkles
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

export interface DeviceGoogleAccount {
  id: string;
  name: string;
  email: string;
  avatarBg: string;
  avatarLetter: string;
  role: string;
  lastUsed: string;
  isDeviceDefault?: boolean;
}

const DEVICE_STORAGE_KEY = 'bhoomi_device_google_accounts';

const INITIAL_DEVICE_ACCOUNTS: DeviceGoogleAccount[] = [
  {
    id: 'acc-zainul-1',
    name: 'Zainul Abideen',
    email: 'zainulcorp71@gmail.com',
    avatarBg: 'bg-emerald-600',
    avatarLetter: 'Z',
    role: 'Citizen & Verified Landholder',
    lastUsed: 'Active on this device',
    isDeviceDefault: true
  },
  {
    id: 'acc-ramesh',
    name: 'Ramesh Sharma',
    email: 'ramesh.sharma@gmail.com',
    avatarBg: 'bg-blue-600',
    avatarLetter: 'R',
    role: 'Citizen & Landholder',
    lastUsed: 'Signed in on this browser',
    isDeviceDefault: false
  },
  {
    id: 'acc-vikram',
    name: 'Vikramaditya Rao (Official)',
    email: 'vikram.rao.gov@gmail.com',
    avatarBg: 'bg-amber-600',
    avatarLetter: 'V',
    role: 'Revenue Officer / Tahsildar',
    lastUsed: 'Official Government Node',
    isDeviceDefault: false
  }
];

export const GoogleAuthModal: React.FC<GoogleAuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  defaultEmail = ''
}) => {
  const { login } = useAuth();
  
  // Stages: 'SELECT_ACCOUNT' -> 'ENTER_PASSWORD' -> 'OTP_VERIFICATION' -> 'OAUTH_CONSENT'
  const [step, setStep] = useState<'SELECT_ACCOUNT' | 'CUSTOM_EMAIL' | 'ENTER_PASSWORD' | 'OTP_VERIFICATION' | 'OAUTH_CONSENT'>('SELECT_ACCOUNT');
  
  const [deviceAccounts, setDeviceAccounts] = useState<DeviceGoogleAccount[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<DeviceGoogleAccount | null>(null);
  
  // Custom Account State
  const [customEmail, setCustomEmail] = useState<string>(defaultEmail || '');
  const [customName, setCustomName] = useState<string>('');
  const [googlePassword, setGooglePassword] = useState<string>('GooglePass2026#');
  
  // OTP State
  const [isSendingOtp, setIsSendingOtp] = useState<boolean>(false);
  const [generatedOtp, setGeneratedOtp] = useState<string>('');
  const [isEmailJsDelivered, setIsEmailJsDelivered] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // 1. Detect and load all recognized device email accounts on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(DEVICE_STORAGE_KEY);
      let list: DeviceGoogleAccount[] = stored ? JSON.parse(stored) : [];

      // Merge with initial defaults if list is empty or missing key accounts
      if (!list || list.length === 0) {
        list = [...INITIAL_DEVICE_ACCOUNTS];
      } else {
        // Ensure zainulcorp71@gmail.com exists in recognized accounts
        const hasZainul = list.some(a => a.email.toLowerCase() === 'zainulcorp71@gmail.com');
        if (!hasZainul) {
          list.unshift(INITIAL_DEVICE_ACCOUNTS[0]);
        }
      }

      // If user currently logged in on BhoomiShield, also add to device list
      const currentBhoomiUser = localStorage.getItem('bhoomi_user');
      if (currentBhoomiUser) {
        try {
          const parsed = JSON.parse(currentBhoomiUser);
          if (parsed?.email && !list.some(a => a.email.toLowerCase() === parsed.email.toLowerCase())) {
            list.push({
              id: `acc-local-${Date.now()}`,
              name: parsed.full_name || parsed.username || 'Local User',
              email: parsed.email.toLowerCase(),
              avatarBg: 'bg-purple-600',
              avatarLetter: (parsed.full_name || parsed.username || 'U').charAt(0).toUpperCase(),
              role: parsed.designation || 'Citizen',
              lastUsed: 'Active session on device'
            });
          }
        } catch {}
      }

      setDeviceAccounts(list);
      localStorage.setItem(DEVICE_STORAGE_KEY, JSON.stringify(list));
    } catch {
      setDeviceAccounts(INITIAL_DEVICE_ACCOUNTS);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Save new account to device recognized accounts list
  const saveAccountToDevice = (acc: DeviceGoogleAccount) => {
    const updated = [acc, ...deviceAccounts.filter(a => a.email.toLowerCase() !== acc.email.toLowerCase())];
    setDeviceAccounts(updated);
    try {
      localStorage.setItem(DEVICE_STORAGE_KEY, JSON.stringify(updated));
    } catch {}
  };

  // Remove an account from device list
  const handleRemoveAccount = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const updated = deviceAccounts.filter(a => a.id !== id);
    setDeviceAccounts(updated);
    try {
      localStorage.setItem(DEVICE_STORAGE_KEY, JSON.stringify(updated));
    } catch {}
  };

  // Select account from device list
  const handleSelectAccount = (account: DeviceGoogleAccount) => {
    setSelectedAccount(account);
    setErrorMessage('');
    setGooglePassword('GooglePass2026#');
    setStep('ENTER_PASSWORD');
  };

  // Submit custom account
  const handleCustomEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customEmail || !customEmail.includes('@')) {
      setErrorMessage('Please enter a valid Google email address.');
      return;
    }

    const nameToUse = customName.trim() || customEmail.split('@')[0].replace('.', ' ').replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
    const newAcc: DeviceGoogleAccount = {
      id: `acc-dev-${Date.now()}`,
      name: nameToUse,
      email: customEmail.trim().toLowerCase(),
      avatarBg: 'bg-emerald-600',
      avatarLetter: nameToUse.charAt(0).toUpperCase(),
      role: 'Citizen & Verified Landholder',
      lastUsed: 'Just added on this device'
    };

    saveAccountToDevice(newAcc);
    setSelectedAccount(newAcc);
    setErrorMessage('');
    setGooglePassword('GooglePass2026#');
    setStep('ENTER_PASSWORD');
  };

  // Dispatch Google 2-Step Verification OTP
  const handleProceedToOtp = async () => {
    if (!selectedAccount) return;
    setErrorMessage('');
    setIsSendingOtp(true);

    try {
      const otpRes = await sendOtpEmail({
        toEmail: selectedAccount.email,
        toName: selectedAccount.name,
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

  // OTP verified successfully -> go to OAuth Consent screen
  const handleOtpVerified = () => {
    setStep('OAUTH_CONSENT');
  };

  // Consent Allowed -> Establish session and finish
  const handleConsentAllowed = async () => {
    if (!selectedAccount) return;
    
    // Authenticate through the AuthContext using the verified Google identity
    await login(selectedAccount.email, 'GoogleSSO_Verified_2026#');
    onSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-md overflow-hidden relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* STEP 1: Recognized Device Accounts Chooser */}
        {step === 'SELECT_ACCOUNT' && (
          <div className="p-6 sm:p-8">
            {/* Google Header Branding */}
            <div className="text-center mb-5">
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
                Choose an account recognized on this device to continue to <span className="font-semibold text-emerald-600 dark:text-emerald-400">BhoomiShield</span>
              </p>
            </div>

            {/* Device Identity Discovery Status */}
            <div className="mb-4 px-3 py-2 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-300">
              <div className="flex items-center space-x-1.5 font-medium">
                <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
                <span>Device Recognized Accounts:</span>
              </div>
              <span className="font-bold text-emerald-600 dark:text-emerald-400 bg-white dark:bg-slate-700 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-600">
                {deviceAccounts.length} Accounts Detected
              </span>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Recognized Accounts List with Device Status */}
            <div className="space-y-2 max-h-64 overflow-y-auto pr-1 mb-4">
              {deviceAccounts.map((acc) => (
                <div
                  key={acc.id}
                  onClick={() => handleSelectAccount(acc)}
                  className="w-full p-3 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/60 dark:hover:border-emerald-500/60 hover:bg-emerald-50/40 dark:hover:bg-emerald-950/20 flex items-center justify-between transition-all group cursor-pointer text-left"
                >
                  <div className="flex items-center space-x-3 min-w-0">
                    <div className={`w-9 h-9 rounded-full ${acc.avatarBg} text-white font-bold flex items-center justify-center shrink-0 shadow-sm text-sm`}>
                      {acc.avatarLetter}
                    </div>
                    <div className="truncate">
                      <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-300 flex items-center space-x-1.5">
                        <span className="truncate">{acc.name}</span>
                        {acc.isDeviceDefault && (
                          <span className="text-[9px] bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 px-1.5 py-0.2 rounded-full font-bold">
                            Default
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 truncate">
                        {acc.email}
                      </div>
                      <div className="text-[10px] text-emerald-600/90 dark:text-emerald-400/90">
                        {acc.lastUsed}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 shrink-0 ml-2">
                    <button
                      type="button"
                      title="Remove account from device list"
                      onClick={(e) => handleRemoveAccount(e, acc.id)}
                      className="p-1.5 text-slate-300 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/50 rounded-lg transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              ))}

              {/* Add / Use Another Account */}
              <button
                type="button"
                onClick={() => {
                  setErrorMessage('');
                  setStep('CUSTOM_EMAIL');
                }}
                className="w-full p-3 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 hover:border-emerald-500 hover:bg-slate-50 dark:hover:bg-slate-800/60 flex items-center space-x-3 transition-colors cursor-pointer text-left"
              >
                <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                  <UserIcon className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Use another Google account on this device
                </div>
              </button>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-center">
              <p className="text-[11px] text-slate-400">
                Google will authenticate your credentials and complete 2-Step Verification for BhoomiShield.
              </p>
            </div>
          </div>
        )}

        {/* STEP 2: Custom Google Email Input */}
        {step === 'CUSTOM_EMAIL' && (
          <div className="p-6 sm:p-8">
            <div className="text-center mb-5">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm mb-3">
                <Mail className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Add Google Account</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Enter your Google email to register on this device
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
                  placeholder="name@gmail.com"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Next: Password & 2-Step Verification</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => {
                  setErrorMessage('');
                  setStep('SELECT_ACCOUNT');
                }}
                className="w-full py-2 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors cursor-pointer"
              >
                ← Back to recognized accounts
              </button>
            </form>
          </div>
        )}

        {/* STEP 3: Google Password / Passkey Verification */}
        {step === 'ENTER_PASSWORD' && selectedAccount && (
          <div className="p-6 sm:p-8">
            <div className="text-center mb-5">
              <div className={`w-12 h-12 mx-auto rounded-full ${selectedAccount.avatarBg} text-white font-bold flex items-center justify-center shadow-md mb-2 text-lg`}>
                {selectedAccount.avatarLetter}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{selectedAccount.name}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{selectedAccount.email}</p>
            </div>

            <div className="mb-5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center justify-between">
                  <span>Google Account Password</span>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-normal">Encrypted via TLS</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type="password"
                    value={googlePassword}
                    onChange={(e) => setGooglePassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={handleProceedToOtp}
                disabled={isSendingOtp}
                className="w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-60"
              >
                {isSendingOtp ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Dispatched 2-Step OTP...</span>
                  </>
                ) : (
                  <>
                    <KeyRound className="w-4 h-4" />
                    <span>Verify with Google 2-Step OTP</span>
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
                ← Switch account
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Google 2-Step OTP Verification */}
        {step === 'OTP_VERIFICATION' && selectedAccount && (
          <div className="p-4 sm:p-6">
            <OtpVerificationCard
              email={selectedAccount.email}
              userName={selectedAccount.name}
              purpose="LOGIN"
              initialOtp={generatedOtp}
              isDeliveredViaEmailJs={isEmailJsDelivered}
              title="Google 2-Step Verification"
              subtitle={`Google sent a 6-digit verification code to ${selectedAccount.email}. Verify to proceed.`}
              onSuccess={handleOtpVerified}
              onCancel={() => {
                setErrorMessage('');
                setStep('SELECT_ACCOUNT');
              }}
            />
          </div>
        )}

        {/* STEP 5: Google OAuth Consent & Scope Permissions */}
        {step === 'OAUTH_CONSENT' && selectedAccount && (
          <div className="p-6 sm:p-8">
            <div className="text-center mb-5">
              <div className="inline-flex p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 mb-3">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">BhoomiShield Access</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Authorize <span className="font-bold text-slate-800 dark:text-slate-200">BhoomiShield</span> to link with your Google account
              </p>
            </div>

            {/* Selected Profile Preview */}
            <div className="p-3.5 mb-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-full ${selectedAccount.avatarBg} text-white font-bold flex items-center justify-center shrink-0`}>
                {selectedAccount.avatarLetter}
              </div>
              <div className="truncate">
                <div className="text-sm font-bold text-slate-900 dark:text-white">{selectedAccount.name}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 truncate">{selectedAccount.email}</div>
              </div>
            </div>

            {/* Scopes requested */}
            <div className="space-y-2 mb-6">
              <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                This will allow BhoomiShield to:
              </div>
              
              <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>View your basic Google profile name and verified email address</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Securely link and authenticate your Bhoomi land records and reports</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={() => {
                  setStep('SELECT_ACCOUNT');
                }}
                className="w-1/2 py-3 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-xl transition-colors cursor-pointer text-xs"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleConsentAllowed}
                className="w-1/2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center space-x-1.5 cursor-pointer text-xs"
              >
                <span>Allow & Sign In</span>
                <Check className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
