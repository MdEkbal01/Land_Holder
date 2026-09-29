import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { 
  Lock, Mail, KeyRound, Eye, EyeOff, Check, ArrowRight, ArrowLeft, 
  RefreshCw, AlertCircle, Sparkles, CheckCircle2, Copy
} from 'lucide-react';
import { BhoomiLogo } from '../components/BhoomiLogo';
import { sendOtpEmail, verifyOtpCode } from '../services/emailService';
import { useAuth } from '../context/AuthContext';

export const ForgotPasswordPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { demoUsers } = useAuth();

  // 4 Steps: 1 = Email Input, 2 = OTP Verification, 3 = New Password, 4 = Success
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [identifier, setIdentifier] = useState<string>('');
  const [targetEmail, setTargetEmail] = useState<string>('');
  const [targetUserName, setTargetUserName] = useState<string>('');

  // OTP State
  const [digits, setDigits] = useState<string[]>(['', '', '', '', '', '']);
  const [generatedOtp, setGeneratedOtp] = useState<string>('');
  const [isEmailJsDelivered, setIsEmailJsDelivered] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(45);
  const [isResending, setIsResending] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Password Reset State
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  // Status
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Auto-detect reset link query parameters (e.g. ?email=...&otp=...)
  useEffect(() => {
    const emailParam = searchParams.get('email');
    const otpParam = searchParams.get('otp') || searchParams.get('code');
    if (emailParam) {
      setTargetEmail(emailParam);
      setIdentifier(emailParam);
      if (otpParam && otpParam.length === 6) {
        setDigits(otpParam.split(''));
        setStep(3); // Directly advance to Step 3: Set New Password
      } else {
        setStep(2);
      }
    }
  }, [searchParams]);

  // Countdown timer for Resend OTP (00:45)
  useEffect(() => {
    if (step !== 2 || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [step, timeLeft]);

  // Focus on OTP screen
  useEffect(() => {
    if (step === 2) {
      setTimeout(() => inputRefs.current[0]?.focus(), 100);
    }
  }, [step]);

  // Password Rule Validators (Matching Mockup 6 Checklist)
  const isLenValid = newPassword.length >= 8;
  const isUpperValid = /[A-Z]/.test(newPassword);
  const isLowerValid = /[a-z]/.test(newPassword);
  const isNumberValid = /[0-9]/.test(newPassword);
  const isSpecialValid = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // Step 1: Send OTP
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!identifier.trim()) {
      setErrorMessage('Please enter your username or email address.');
      return;
    }

    let resolvedEmail = identifier.trim();
    let resolvedName = 'Citizen';

    if (!resolvedEmail.includes('@')) {
      const found = demoUsers.find(
        (u) => u.username.toLowerCase() === identifier.toLowerCase().trim()
      );
      if (found && found.email) {
        resolvedEmail = found.email;
        resolvedName = found.full_name;
      } else {
        try {
          const rawRegUsers = localStorage.getItem('bhoomi_registered_users');
          if (rawRegUsers) {
            const parsed = JSON.parse(rawRegUsers);
            const regFound = parsed.find(
              (u: any) => u.username?.toLowerCase() === identifier.toLowerCase().trim()
            );
            if (regFound && regFound.email) {
              resolvedEmail = regFound.email;
              resolvedName = regFound.full_name || regFound.username;
            }
          }
        } catch {}
      }
    }

    setTargetEmail(resolvedEmail);
    setTargetUserName(resolvedName);
    setIsSubmitting(true);

    // Send OTP via EmailJS (Template 2: template_v4zrs7r)
    const res = await sendOtpEmail({
      toEmail: resolvedEmail,
      toName: resolvedName,
      purpose: 'FORGOT_PASSWORD'
    });

    setIsSubmitting(false);

    if (res.success) {
      setGeneratedOtp(res.otp);
      setIsEmailJsDelivered(res.deliveredViaEmailJs);
      setTimeLeft(45);
      setStep(2); // Advance to OTP screen (Mockup 5)
    } else {
      setErrorMessage('Failed to send verification code. Please try again.');
    }
  };

  // Step 2: Verify OTP
  const handleDigitChange = (index: number, value: string) => {
    const cleanVal = value.replace(/\D/g, '');
    if (!cleanVal && value !== '') return;

    const newDigits = [...digits];
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
    setErrorMessage('');

    if (cleanVal && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = digits.join('');
    if (fullCode.length < 6) {
      setErrorMessage('Please enter all 6 digits of the verification code.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    const res = await verifyOtpCode(targetEmail, fullCode, 'FORGOT_PASSWORD');
    setIsSubmitting(false);

    if (res.isValid) {
      setStep(3); // Advance to Set New Password (Mockup 6)
    } else {
      setErrorMessage(res.message);
    }
  };

  const handleResendOtp = async () => {
    if (timeLeft > 0 || isResending) return;
    setIsResending(true);
    setErrorMessage('');

    const res = await sendOtpEmail({
      toEmail: targetEmail,
      toName: targetUserName,
      purpose: 'FORGOT_PASSWORD'
    });

    setIsResending(false);
    if (res.success) {
      setGeneratedOtp(res.otp);
      setIsEmailJsDelivered(res.deliveredViaEmailJs);
      setTimeLeft(45);
      setDigits(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();
    } else {
      setErrorMessage('Failed to resend OTP.');
    }
  };

  const handleCopyOtp = () => {
    if (generatedOtp) {
      navigator.clipboard.writeText(generatedOtp);
      setCopied(true);
      setDigits(generatedOtp.split(''));
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Step 3: Set New Password
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!isLenValid || !isUpperValid || !isLowerValid || !isNumberValid || !isSpecialValid) {
      setErrorMessage('Please make sure your password satisfies all security criteria below.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match. Please verify.');
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: targetEmail,
          new_password: newPassword
        })
      });
    } catch {}

    localStorage.setItem(`bhoomi_pass_${targetEmail.toLowerCase()}`, newPassword);
    if (targetUserName) {
      localStorage.setItem(`bhoomi_pass_${targetUserName.toLowerCase()}`, newPassword);
    }

    try {
      const rawRegUsers = localStorage.getItem('bhoomi_registered_users');
      if (rawRegUsers) {
        const parsed = JSON.parse(rawRegUsers);
        const idx = parsed.findIndex(
          (u: any) => u.email.toLowerCase() === targetEmail.toLowerCase() ||
                      (targetUserName && u.username.toLowerCase() === targetUserName.toLowerCase())
        );
        if (idx >= 0) {
          parsed[idx].password = newPassword;
          localStorage.setItem('bhoomi_registered_users', JSON.stringify(parsed));
        }
      }
    } catch (e) {
      console.error('Failed to sync new password with registered users registry', e);
    }

    setIsSubmitting(false);
    setStep(4); // Advance to Success Screen (Mockup 7)
  };

  return (
    <div className="min-h-screen bg-[#f4f7f6] flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6 font-sans">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-slate-100 p-8 sm:p-10 relative overflow-hidden">
        
        {/* Top Bar: Back to Home & Logo */}
        <div className="flex items-center justify-between mb-6">
          <Link
            to="/"
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-500 hover:text-[#137a4d] transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#137a4d]" />
            <span>Back to Home</span>
          </Link>

          <div>
            <Link to="/">
              <BhoomiLogo theme="light" />
            </Link>
          </div>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="mb-5 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* =======================================================
            STEP 1: FORGOT PASSWORD (MATCHES MOCKUP 4)
           ======================================================= */}
        {step === 1 && (
          <div>
            {/* Center Lock Badge */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 text-[#137a4d] border border-emerald-200/80 mb-4 shadow-sm">
                <Lock className="w-8 h-8" />
              </div>

              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Forgot Password?
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                Enter your username or email address to receive a verification code.
              </p>
            </div>

            <form onSubmit={handleSendOtp} className="space-y-4">
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="Username or Email"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#137a4d] focus:ring-2 focus:ring-[#137a4d]/15 transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 bg-[#137a4d] hover:bg-[#0f633e] text-white font-bold rounded-xl shadow-md shadow-[#137a4d]/25 transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Sending Code...</span>
                  </>
                ) : (
                  <>
                    <span>Send OTP</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Back to Login Link (Matches Mockup 4) */}
            <div className="mt-6 text-center">
              <Link
                to="/login"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Login</span>
              </Link>
            </div>
          </div>
        )}

        {/* =======================================================
            STEP 2: ENTER VERIFICATION CODE (MATCHES MOCKUP 5)
           ======================================================= */}
        {step === 2 && (
          <div>
            {/* Center Mail Badge with Sparkles */}
            <div className="text-center mb-6">
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 text-[#137a4d] border border-emerald-200/80 mb-4 shadow-sm">
                <Mail className="w-8 h-8" />
                <Sparkles className="w-4 h-4 text-amber-500 absolute -top-1 -right-1" />
              </div>

              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Enter Verification Code
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                We have sent a 6-digit code to your registered email address.
              </p>
            </div>

            <form onSubmit={handleVerifyOtp} className="space-y-6">
              {/* 6 Digit Inputs */}
              <div className="flex justify-center items-center gap-2 sm:gap-2.5">
                {digits.map((digit, idx) => (
                  <input
                    key={idx}
                    ref={(el) => (inputRefs.current[idx] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    value={digit}
                    onChange={(e) => handleDigitChange(idx, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(idx, e)}
                    className={`w-11 h-13 sm:w-12 sm:h-14 text-center text-xl font-bold font-mono rounded-xl border-2 transition-all outline-none ${
                      digit
                        ? 'border-[#137a4d] bg-emerald-50/50 text-[#137a4d]'
                        : 'border-slate-200 bg-white text-slate-800 focus:border-[#137a4d] focus:ring-2 focus:ring-[#137a4d]/15'
                    }`}
                  />
                ))}
              </div>

              {/* Resend Subtext (Matches Mockup 5) */}
              <div className="text-center text-xs text-slate-500">
                Didn't receive the code?{' '}
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={timeLeft > 0 || isResending}
                  className={`font-semibold transition-colors ${
                    timeLeft > 0
                      ? 'text-slate-400 cursor-not-allowed'
                      : 'text-[#137a4d] hover:underline cursor-pointer'
                  }`}
                >
                  {isResending ? 'Resending...' : timeLeft > 0 ? `Resend OTP (${formatTimer(timeLeft)})` : 'Resend OTP'}
                </button>
              </div>

              {/* Verify Button */}
              <button
                type="submit"
                disabled={isSubmitting || digits.join('').length < 6}
                className="w-full py-3.5 px-4 bg-[#137a4d] hover:bg-[#0f633e] text-white font-bold rounded-xl shadow-md shadow-[#137a4d]/25 transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Verifying Code...</span>
                  </>
                ) : (
                  <>
                    <span>Verify OTP</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Back Link */}
            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => {
                  setStep(1);
                  setErrorMessage('');
                }}
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            </div>
          </div>
        )}

        {/* =======================================================
            STEP 3: RESET YOUR PASSWORD (MATCHES MOCKUP 6)
           ======================================================= */}
        {step === 3 && (
          <div>
            {/* Center Key Badge */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 text-[#137a4d] border border-emerald-200/80 mb-4 shadow-sm">
                <KeyRound className="w-8 h-8" />
              </div>

              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Reset Your Password
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                Enter your new password below.
              </p>
            </div>

            <form onSubmit={handleResetPassword} className="space-y-4">
              {/* New Password */}
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showNewPassword ? 'text' : 'password'}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="New Password"
                    required
                    className="w-full pl-10 pr-10 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#137a4d] focus:ring-2 focus:ring-[#137a4d]/15 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Confirm New Password */}
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm New Password"
                    required
                    className="w-full pl-10 pr-10 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#137a4d] focus:ring-2 focus:ring-[#137a4d]/15 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Password Checklist Box (Matches Mockup 6) */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs space-y-1.5 text-slate-600">
                <div className="font-bold text-slate-800 mb-1">Password must:</div>
                
                <div className={`flex items-center space-x-2 ${isLenValid ? 'text-[#137a4d] font-semibold' : 'text-slate-500'}`}>
                  <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] border ${
                    isLenValid ? 'bg-[#137a4d] text-white border-[#137a4d]' : 'border-slate-300 bg-white'
                  }`}>
                    {isLenValid ? '✓' : ''}
                  </div>
                  <span>Be at least 8 characters long</span>
                </div>

                <div className={`flex items-center space-x-2 ${isUpperValid ? 'text-[#137a4d] font-semibold' : 'text-slate-500'}`}>
                  <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] border ${
                    isUpperValid ? 'bg-[#137a4d] text-white border-[#137a4d]' : 'border-slate-300 bg-white'
                  }`}>
                    {isUpperValid ? '✓' : ''}
                  </div>
                  <span>Include at least one uppercase letter</span>
                </div>

                <div className={`flex items-center space-x-2 ${isLowerValid ? 'text-[#137a4d] font-semibold' : 'text-slate-500'}`}>
                  <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] border ${
                    isLowerValid ? 'bg-[#137a4d] text-white border-[#137a4d]' : 'border-slate-300 bg-white'
                  }`}>
                    {isLowerValid ? '✓' : ''}
                  </div>
                  <span>Include at least one lowercase letter</span>
                </div>

                <div className={`flex items-center space-x-2 ${isNumberValid ? 'text-[#137a4d] font-semibold' : 'text-slate-500'}`}>
                  <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] border ${
                    isNumberValid ? 'bg-[#137a4d] text-white border-[#137a4d]' : 'border-slate-300 bg-white'
                  }`}>
                    {isNumberValid ? '✓' : ''}
                  </div>
                  <span>Include at least one number</span>
                </div>

                <div className={`flex items-center space-x-2 ${isSpecialValid ? 'text-[#137a4d] font-semibold' : 'text-slate-500'}`}>
                  <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] border ${
                    isSpecialValid ? 'bg-[#137a4d] text-white border-[#137a4d]' : 'border-slate-300 bg-white'
                  }`}>
                    {isSpecialValid ? '✓' : ''}
                  </div>
                  <span>Include at least one special character (e.g. !@#$%)</span>
                </div>
              </div>

              {/* Reset Password Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 bg-[#137a4d] hover:bg-[#0f633e] text-white font-bold rounded-xl shadow-md shadow-[#137a4d]/25 transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Resetting Password...</span>
                  </>
                ) : (
                  <>
                    <span>Reset Password</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Back Link */}
            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => {
                  setStep(2);
                  setErrorMessage('');
                }}
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            </div>
          </div>
        )}

        {/* =======================================================
            STEP 4: SUCCESS PAGE (MATCHES MOCKUP 7)
           ======================================================= */}
        {step === 4 && (
          <div className="text-center pt-2">
            {/* Green Circular Checkmark */}
            <div className="inline-flex items-center justify-center w-18 h-18 rounded-full bg-gradient-to-tr from-[#0e5c38] to-[#137a4d] text-white mb-5 shadow-lg shadow-[#137a4d]/30">
              <Check className="w-10 h-10 stroke-[3]" />
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Password Reset Successful!
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed max-w-xs mx-auto">
              Your password has been updated successfully. You can now login with your new password.
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="w-full py-3.5 px-4 bg-[#137a4d] hover:bg-[#0f633e] text-white font-bold rounded-xl shadow-md shadow-[#137a4d]/25 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Go to Login</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Bottom Scenic Farm Art (Matches Mockup 7) */}
            <div className="mt-8 -mx-10 -mb-10 h-24 overflow-hidden relative opacity-90 border-t border-emerald-100">
              <div 
                className="w-full h-full bg-cover bg-bottom"
                style={{ backgroundImage: `url('/landscape_bg.jpg')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-white/70" />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
