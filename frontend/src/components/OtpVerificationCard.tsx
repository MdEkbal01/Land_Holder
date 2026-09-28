import React, { useState, useEffect, useRef } from 'react';
import { Mail, Clock, RefreshCw, CheckCircle2, AlertTriangle, ShieldCheck, Copy, Check } from 'lucide-react';
import { verifyOtpCode, sendOtpEmail } from '../services/emailService';

interface OtpVerificationCardProps {
  email: string;
  userName?: string;
  purpose: 'REGISTRATION' | 'LOGIN' | 'FORGOT_PASSWORD';
  initialOtp?: string;
  isDeliveredViaEmailJs?: boolean;
  onSuccess: () => void;
  onCancel?: () => void;
  title?: string;
  subtitle?: string;
}

export const OtpVerificationCard: React.FC<OtpVerificationCardProps> = ({
  email,
  userName = 'Citizen',
  purpose,
  initialOtp = '',
  isDeliveredViaEmailJs = false,
  onSuccess,
  onCancel,
  title = 'Email Verification OTP',
  subtitle
}) => {
  const [digits, setDigits] = useState<string[]>(['', '', '', '', '', '']);
  const [currentOtp, setCurrentOtp] = useState<string>(initialOtp);
  const [isEmailJsDelivered, setIsEmailJsDelivered] = useState<boolean>(isDeliveredViaEmailJs);
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [isResending, setIsResending] = useState<boolean>(false);
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Countdown timer for resend button
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Auto-focus first input on mount
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    // Only accept numbers
    const cleanVal = value.replace(/\D/g, '');
    if (!cleanVal && value !== '') return;

    const newDigits = [...digits];
    
    // Handle paste event where user pastes whole 6-digit code
    if (cleanVal.length > 1) {
      const pastedChars = cleanVal.slice(0, 6).split('');
      for (let i = 0; i < 6; i++) {
        newDigits[i] = pastedChars[i] || '';
      }
      setDigits(newDigits);
      const nextFocus = Math.min(pastedChars.length, 5);
      inputRefs.current[nextFocus]?.focus();
      return;
    }

    newDigits[index] = cleanVal;
    setDigits(newDigits);
    setError('');

    // Auto advance to next box
    if (cleanVal && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const fullCode = digits.join('');
    if (fullCode.length < 6) {
      setError('Please enter all 6 digits of the OTP code.');
      return;
    }

    setIsVerifying(true);
    setError('');

    const result = await verifyOtpCode(email, fullCode, purpose);
    setIsVerifying(false);

    if (result.isValid) {
      onSuccess();
    } else {
      setError(result.message);
    }
  };

  const handleResend = async () => {
    if (timeLeft > 0 || isResending) return;
    setIsResending(true);
    setError('');

    const res = await sendOtpEmail({
      toEmail: email,
      toName: userName,
      purpose
    });

    setIsResending(false);
    if (res.success) {
      setCurrentOtp(res.otp);
      setIsEmailJsDelivered(res.deliveredViaEmailJs);
      setTimeLeft(60);
      setDigits(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();
    } else {
      setError('Failed to resend OTP. Please try again.');
    }
  };

  const handleCopyOtp = () => {
    if (currentOtp) {
      navigator.clipboard.writeText(currentOtp);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const maskedEmail = email.replace(/^(.)(.*)(@.*)$/, (_, first, middle, domain) => {
    return `${first}${'*'.repeat(Math.min(middle.length, 5))}${domain}`;
  });

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl max-w-lg w-full mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-flex p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 mb-3 shadow-inner">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          {subtitle || (
            <>
              Enter the 6-digit security OTP sent via <span className="font-semibold text-emerald-600 dark:text-emerald-400">EmailJS</span> to{' '}
              <span className="font-semibold text-slate-800 dark:text-slate-200">{maskedEmail}</span>
            </>
          )}
        </p>
      </div>

      {/* Live EmailJS Dispatch Notice Banner */}
      <div className="mb-6 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs">
        <div className="flex items-center justify-between text-slate-700 dark:text-slate-300 mb-1.5">
          <div className="flex items-center space-x-1.5 font-medium">
            <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>EmailJS Dispatch Service</span>
          </div>
          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
            isEmailJsDelivered
              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300'
              : 'bg-sky-100 text-sky-800 dark:bg-sky-900/60 dark:text-sky-300'
          }`}>
            {isEmailJsDelivered ? '● EmailJS Delivered' : '● Live OTP Generated'}
          </span>
        </div>

        {/* Quick Copy-Paste Helper */}
        {currentOtp && (
          <div className="mt-2 pt-2 border-t border-slate-200 dark:border-slate-700/60 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-slate-500 dark:text-slate-400">Security OTP Code:</span>
              <span className="font-mono font-bold text-sm tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                {currentOtp}
              </span>
            </div>
            <button
              type="button"
              onClick={handleCopyOtp}
              className="inline-flex items-center space-x-1 px-2.5 py-1 text-[11px] font-semibold text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 bg-white dark:bg-slate-700 rounded-lg border border-slate-300 dark:border-slate-600 transition-colors shadow-sm cursor-pointer"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Copied' : 'Auto Fill'}</span>
            </button>
          </div>
        )}
      </div>

      {/* 6 Digit Input Boxes */}
      <div className="flex justify-center items-center gap-2 sm:gap-3 mb-6">
        {digits.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength={6}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className={`w-11 h-13 sm:w-13 sm:h-15 text-center text-2xl font-bold font-mono rounded-xl border-2 transition-all outline-none ${
              digit
                ? 'border-emerald-500 bg-emerald-50/40 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 shadow-sm'
                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
            }`}
          />
        ))}
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800/80 text-rose-700 dark:text-rose-300 text-xs flex items-center space-x-2">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Actions */}
      <div className="space-y-3">
        <button
          type="button"
          onClick={handleVerify}
          disabled={isVerifying || digits.join('').length < 6}
          className="w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 cursor-pointer"
        >
          {isVerifying ? (
            <>
              <RefreshCw className="w-5 h-5 animate-spin" />
              <span>Verifying Code...</span>
            </>
          ) : (
            <>
              <CheckCircle2 className="w-5 h-5" />
              <span>Verify & Proceed</span>
            </>
          )}
        </button>

        {/* Resend & Timer */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-2 px-1">
          <div className="flex items-center space-x-1">
            <Clock className="w-3.5 h-3.5" />
            <span>Valid for 10 minutes</span>
          </div>

          <button
            type="button"
            onClick={handleResend}
            disabled={timeLeft > 0 || isResending}
            className={`font-semibold transition-colors ${
              timeLeft > 0
                ? 'text-slate-400 dark:text-slate-600 cursor-not-allowed'
                : 'text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer'
            }`}
          >
            {isResending ? 'Sending...' : timeLeft > 0 ? `Resend in ${timeLeft}s` : 'Resend OTP'}
          </button>
        </div>

        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="w-full py-2.5 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors cursor-pointer"
          >
            Cancel & Change Email
          </button>
        )}
      </div>
    </div>
  );
};
