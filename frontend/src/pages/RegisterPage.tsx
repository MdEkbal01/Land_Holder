import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  User as UserIcon, Lock, Mail, MapPin, Eye, EyeOff, 
  ArrowRight, ArrowLeft, RefreshCw, AlertCircle, Sparkles
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { BhoomiLogo } from '../components/BhoomiLogo';
import { sendOtpEmail, verifyOtpCode } from '../services/emailService';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  // Workflow Stage: 'FORM' (Mockup 2) vs 'VERIFY' (Mockup 3)
  const [stage, setStage] = useState<'FORM' | 'VERIFY'>('FORM');

  // Form Fields
  const [fullName, setFullName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [selectedState, setSelectedState] = useState<string>('Jharkhand');

  // Verification State
  const [digits, setDigits] = useState<string[]>(['', '', '', '', '', '']);
  const [generatedOtp, setGeneratedOtp] = useState<string>('');
  const [isEmailJsDelivered, setIsEmailJsDelivered] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(45);
  const [isResending, setIsResending] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Timer countdown for Resend OTP (00:45)
  useEffect(() => {
    if (stage !== 'VERIFY' || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [stage, timeLeft]);

  // Focus first digit when arriving at OTP screen
  useEffect(() => {
    if (stage === 'VERIFY') {
      setTimeout(() => inputRefs.current[0]?.focus(), 100);
    }
  }, [stage]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim() || !username.trim() || !email.trim()) {
      setErrorMessage('Please fill in all details.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    setIsSubmitting(true);

    // Send verification code via EmailJS (Template 1: template_ukp132p)
    const res = await sendOtpEmail({
      toEmail: email.trim(),
      toName: fullName.trim() || username.trim(),
      purpose: 'REGISTRATION'
    });

    setIsSubmitting(false);

    if (res.success) {
      setGeneratedOtp(res.otp);
      setIsEmailJsDelivered(res.deliveredViaEmailJs);
      setTimeLeft(45);
      setStage('VERIFY');
    } else {
      setErrorMessage('Failed to send verification code. Please try again.');
    }
  };

  const handleDigitChange = (index: number, value: string) => {
    const cleanVal = value.replace(/\D/g, '');
    if (!cleanVal && value !== '') return;

    const newDigits = [...digits];

    // Handle full paste
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

  const handleVerifyAndRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = digits.join('');
    if (fullCode.length < 6) {
      setErrorMessage('Please enter all 6 digits of the verification code.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    const otpRes = await verifyOtpCode(email, fullCode, 'REGISTRATION');
    if (!otpRes.isValid) {
      setIsSubmitting(false);
      setErrorMessage(otpRes.message);
      return;
    }

    // Role classification: if official email or designation, set role accordingly
    const isOfficialEmail = email.toLowerCase().includes('.gov.in') || email.toLowerCase().includes('revenue');
    const assignedRole = isOfficialEmail ? 'REVENUE_OFFICER' : 'CITIZEN';

    const userData = {
      username: username.trim(),
      full_name: fullName.trim(),
      email: email.trim(),
      mobile: '+91 98765 43210',
      role: assignedRole,
      department: assignedRole === 'REVENUE_OFFICER' ? 'Revenue & Land Reforms' : 'General Public',
      designation: assignedRole === 'REVENUE_OFFICER' ? 'Revenue Officer / Inspector' : 'Landowner & Citizen',
      jurisdiction_state: selectedState,
      jurisdiction_district: 'Bokaro',
      jurisdiction_tehsil: 'Chas',
      aadhaar_last4: '5412',
      pan_number: 'ABCPS1234F',
      password
    };

    const regRes = await register(userData);
    setIsSubmitting(false);

    if (regRes.success) {
      navigate('/');
    } else {
      setErrorMessage(regRes.message || 'Registration failed.');
    }
  };

  const handleResendOtp = async () => {
    if (timeLeft > 0 || isResending) return;
    setIsResending(true);
    setErrorMessage('');

    const res = await sendOtpEmail({
      toEmail: email.trim(),
      toName: fullName.trim() || username.trim(),
      purpose: 'REGISTRATION'
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



  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // ==========================================
  // VIEW 1: REGISTRATION FORM (MATCHES MOCKUP 2)
  // ==========================================
  if (stage === 'FORM') {
    return (
      <div className="min-h-screen bg-[#f4f7f6] flex items-center justify-center py-6 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-4xl w-full bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[580px]">
          
          {/* LEFT COLUMN: Visual Brand Banner (Matches Mockup 2) */}
          <div className="hidden md:flex md:col-span-5 relative flex-col justify-between p-8 text-white overflow-hidden bg-gradient-to-b from-[#0e5c38] via-[#137a4d] to-[#0a462a]">
            {/* Background Landscape Photo with Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay pointer-events-none"
              style={{ backgroundImage: `url('/landscape_bg.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06331e]/90 via-[#0e5c38]/70 to-[#137a4d]/90 pointer-events-none" />

            {/* Top Logo */}
            <div className="relative z-10">
              <Link to="/" className="inline-block hover:opacity-90 transition-opacity">
                <BhoomiLogo theme="dark" />
              </Link>
            </div>

            {/* Center Content */}
            <div className="relative z-10 my-auto py-6">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight leading-tight text-white drop-shadow-sm">
                Join<br />
                BhoomiShield
              </h2>
              <p className="text-emerald-100/90 text-sm mt-3 font-normal leading-relaxed">
                Create your account and get access to land records, property information and various government services.
              </p>

              {/* 3D Visual Cadastral & Map Art Placeholder */}
              <div className="mt-8 relative w-full h-36 rounded-2xl bg-emerald-900/40 backdrop-blur-md border border-emerald-500/30 p-4 flex items-center justify-around shadow-inner">
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-600/80 flex items-center justify-center text-white font-bold shadow-md">
                    26+
                  </div>
                  <span className="text-[10px] text-emerald-200 mt-1 block font-medium">State Portals</span>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto rounded-xl bg-teal-600/80 flex items-center justify-center text-white font-bold shadow-md">
                    ULPIN
                  </div>
                  <span className="text-[10px] text-emerald-200 mt-1 block font-medium">Bhu-Aadhaar</span>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-500/80 flex items-center justify-center text-white font-bold shadow-md">
                    100%
                  </div>
                  <span className="text-[10px] text-emerald-200 mt-1 block font-medium">Tamper-Proof</span>
                </div>
              </div>
            </div>

            {/* Bottom Tagline */}
            <div className="relative z-10 text-[10px] text-emerald-200/80">
              Digital India Land Records • Modern DPI Platform
            </div>
          </div>

          {/* RIGHT COLUMN: Registration Form (Matches Mockup 2) */}
          <div className="md:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center bg-white">
            
            {/* Top Bar: Back to Home & Mobile Logo */}
            <div className="flex items-center justify-between mb-4">
              <Link
                to="/"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-500 hover:text-[#137a4d] transition-colors group cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#137a4d]" />
                <span>Back to Home</span>
              </Link>

              <div className="md:hidden">
                <Link to="/">
                  <BhoomiLogo theme="light" />
                </Link>
              </div>
            </div>

            {/* Header */}
            <div className="mb-5">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Create Your Account
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fill in the details to get started
              </p>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="space-y-3.5">
              
              {/* Full Name */}
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <UserIcon className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name"
                    required
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#137a4d] focus:ring-2 focus:ring-[#137a4d]/15 transition-all"
                  />
                </div>
              </div>

              {/* Username */}
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <UserIcon className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/\s+/g, '_'))}
                    placeholder="Username"
                    required
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#137a4d] focus:ring-2 focus:ring-[#137a4d]/15 transition-all font-mono"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    required
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#137a4d] focus:ring-2 focus:ring-[#137a4d]/15 transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#137a4d] focus:ring-2 focus:ring-[#137a4d]/15 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    required
                    className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#137a4d] focus:ring-2 focus:ring-[#137a4d]/15 transition-all"
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

              {/* Select Your State Dropdown */}
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#137a4d] focus:ring-2 focus:ring-[#137a4d]/15 transition-all cursor-pointer appearance-none"
                  >
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                    ▼
                  </div>
                </div>
              </div>

              {/* Send Verification Code Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 mt-2 bg-[#137a4d] hover:bg-[#0f633e] text-white font-bold rounded-xl shadow-md shadow-[#137a4d]/25 transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Sending Code...</span>
                  </>
                ) : (
                  <>
                    <span>Send Verification Code</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Bottom Footer Login Link (Matches Mockup 2) */}
            <div className="mt-5 text-center text-xs text-slate-600">
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-bold text-[#137a4d] hover:text-[#0f633e] hover:underline transition-colors"
              >
                Login
              </Link>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW 2: EMAIL VERIFICATION (MATCHES MOCKUP 3)
  // ==========================================
  return (
    <div className="min-h-screen bg-[#f4f7f6] flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6 font-sans">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-slate-100 p-8 sm:p-10 relative">
        
        {/* Top Logo */}
        <div className="mb-6">
          <BhoomiLogo theme="light" />
        </div>

        {/* Center Mail Icon Badge */}
        <div className="text-center mb-6">
          <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 text-[#137a4d] border border-emerald-200/80 mb-4 shadow-sm">
            <Mail className="w-8 h-8" />
            <Sparkles className="w-4 h-4 text-amber-500 absolute -top-1 -right-1" />
          </div>

          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Verify Your Email
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
            We have sent a 6-digit verification code to your registered email address.
          </p>
        </div>

        {/* Error Banner */}
        {errorMessage && (
          <div className="mb-5 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* 6 Digit Boxes */}
        <form onSubmit={handleVerifyAndRegister} className="space-y-6">
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

          {/* Resend Subtext with Timer (Matches Mockup 3) */}
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

          {/* Verify & Create Account Button */}
          <button
            type="submit"
            disabled={isSubmitting || digits.join('').length < 6}
            className="w-full py-3.5 px-4 bg-[#137a4d] hover:bg-[#0f633e] text-white font-bold rounded-xl shadow-md shadow-[#137a4d]/25 transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Verifying & Creating...</span>
              </>
            ) : (
              <>
                <span>Verify & Create Account</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Back Navigation Links */}
        <div className="mt-6 flex items-center justify-between text-xs font-semibold text-slate-600">
          <button
            type="button"
            onClick={() => {
              setStage('FORM');
              setErrorMessage('');
            }}
            className="inline-flex items-center space-x-1.5 hover:text-[#137a4d] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Edit Form</span>
          </button>

          <Link
            to="/"
            className="inline-flex items-center space-x-1 text-slate-500 hover:text-[#137a4d] transition-colors"
          >
            <span>Home &rarr;</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
