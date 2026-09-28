import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { 
  User as UserIcon, Lock, Eye, EyeOff, ArrowRight, ShieldCheck, 
  MapPin, AlertCircle, RefreshCw, Sparkles, Check
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { BhoomiLogo } from '../components/BhoomiLogo';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirect') || '/';

  const { login, demoLogin, loading } = useAuth();

  // Form State
  const [identifier, setIdentifier] = useState<string>('ramesh_sharma');
  const [password, setPassword] = useState<string>('Citizen@Ramesh2026#');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showQuickFill, setShowQuickFill] = useState<boolean>(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier.trim()) {
      setErrorMessage('Please enter your username or email address.');
      return;
    }
    if (!password) {
      setErrorMessage('Please enter your account password.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    const res = await login(identifier, password);
    setIsSubmitting(false);

    if (res.success) {
      // If official, navigate to admin or intended page; if citizen, navigate to home
      navigate(redirectTo);
    } else {
      setErrorMessage(res.message || 'Invalid username or password.');
    }
  };

  const handleGoogleSignIn = async () => {
    setIsSubmitting(true);
    // Simulate seamless Google SSO login
    const success = await demoLogin('USR-CIT-1001');
    setIsSubmitting(false);
    if (success) {
      navigate(redirectTo);
    }
  };

  const handleQuickFillPersona = (user: string, pass: string) => {
    setIdentifier(user);
    setPassword(pass);
    setErrorMessage('');
    setShowQuickFill(false);
  };

  return (
    <div className="min-h-screen bg-[#f4f7f6] flex items-center justify-center py-6 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[580px]">
        
        {/* LEFT COLUMN: Visual Brand Banner (Matches Mockup 1) */}
        <div className="hidden md:flex md:col-span-5 relative flex-col justify-between p-8 text-white overflow-hidden bg-gradient-to-b from-[#0e5c38] via-[#137a4d] to-[#0a462a]">
          {/* Background Landscape Photo with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay pointer-events-none"
            style={{ backgroundImage: `url('/landscape_bg.jpg')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06331e]/90 via-[#0e5c38]/70 to-[#137a4d]/90 pointer-events-none" />

          {/* Top Logo */}
          <div className="relative z-10">
            <BhoomiLogo theme="dark" />
          </div>

          {/* Center Visual Content */}
          <div className="relative z-10 my-auto py-6">
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight leading-tight text-white drop-shadow-sm">
              Verify.<br />
              Explore.<br />
              Protect.
            </h2>
            <p className="text-emerald-100/90 text-sm mt-3 font-normal leading-relaxed">
              Reliable land-related information at your fingertips.
            </p>

            {/* Visual Cadastral & Pin Graphics Representation */}
            <div className="mt-8 relative w-full h-36 rounded-2xl bg-emerald-900/40 backdrop-blur-md border border-emerald-500/30 p-3.5 flex items-center justify-between shadow-inner overflow-hidden">
              <div className="space-y-1.5 z-10">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-bold text-emerald-200 uppercase tracking-wider">
                    DILRMP Live Registry
                  </span>
                </div>
                <div className="text-xs font-semibold text-white">Chas, Bokaro • Plot 450/2</div>
                <div className="text-[10px] text-emerald-200">Khatian & Register-II Verified</div>
              </div>

              <div className="relative flex items-center justify-center shrink-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg border border-emerald-300/40">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-md">
                  <MapPin className="w-3.5 h-3.5 fill-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Security Note */}
          <div className="relative z-10 text-[10px] text-emerald-200/80">
            Digital India Land Records • Single Unified Gateway
          </div>
        </div>

        {/* RIGHT COLUMN: Login Form (Matches Mockup 1) */}
        <div className="md:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center bg-white">
          
          {/* Mobile Logo Header */}
          <div className="md:hidden mb-6">
            <BhoomiLogo theme="light" />
          </div>

          {/* Welcome Heading */}
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Welcome Back
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Login to your BhoomiShield account to continue
            </p>
          </div>

          {/* Error Banner */}
          {errorMessage && (
            <div className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center space-x-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            
            {/* Input 1: Username or Email */}
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <UserIcon className="w-4 h-4" />
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

            {/* Input 2: Password */}
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
                  className="w-full pl-10 pr-10 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#137a4d] focus:ring-2 focus:ring-[#137a4d]/15 transition-all"
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

            {/* Remember Me & Forgot Password Row */}
            <div className="flex items-center justify-between text-xs pt-0.5">
              <label className="flex items-center space-x-2 text-slate-600 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-[#137a4d] focus:ring-[#137a4d]/20 accent-[#137a4d]"
                />
                <span>Remember me</span>
              </label>

              <Link
                to="/forgot-password"
                className="font-semibold text-[#137a4d] hover:text-[#0f633e] hover:underline transition-colors"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-4 bg-[#137a4d] hover:bg-[#0f633e] text-white font-bold rounded-xl shadow-md shadow-[#137a4d]/25 transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Logging in...</span>
                </>
              ) : (
                <>
                  <span>Login</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* OR Divider */}
          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-white text-slate-400 uppercase font-semibold">OR</span>
            </div>
          </div>

          {/* Continue with Google Button */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={isSubmitting}
            className="w-full py-3 px-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold rounded-xl transition-colors flex items-center justify-center space-x-3 cursor-pointer shadow-sm disabled:opacity-50"
          >
            {/* Google 'G' Icon */}
            <svg className="w-4 h-4" viewBox="0 0 24 24">
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
            <span className="text-xs sm:text-sm">Continue with Google</span>
          </button>

          {/* Quick Demo Helper (Toggleable) */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setShowQuickFill(!showQuickFill)}
              className="text-[11px] text-slate-500 hover:text-[#137a4d] flex items-center space-x-1 cursor-pointer font-medium"
            >
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>Need test credentials? (Click to view personas)</span>
            </button>

            {showQuickFill && (
              <div className="flex items-center space-x-1.5 text-[10px]">
                <button
                  type="button"
                  onClick={() => handleQuickFillPersona('ramesh_sharma', 'Citizen@Ramesh2026#')}
                  className="px-2 py-0.5 rounded bg-emerald-50 text-[#137a4d] font-bold border border-emerald-200 hover:bg-emerald-100 cursor-pointer"
                >
                  Citizen
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickFillPersona('tahsildar_dadri', 'Officer@Dadri2026#')}
                  className="px-2 py-0.5 rounded bg-sky-50 text-sky-700 font-bold border border-sky-200 hover:bg-sky-100 cursor-pointer"
                >
                  Official
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickFillPersona('admin_dilrmp', 'Admin@BhoomiShield2026#')}
                  className="px-2 py-0.5 rounded bg-purple-50 text-purple-700 font-bold border border-purple-200 hover:bg-purple-100 cursor-pointer"
                >
                  Admin
                </button>
              </div>
            )}
          </div>

          {/* Bottom Footer Registration Link (Matches Mockup 1) */}
          <div className="mt-6 text-center text-xs text-slate-600">
            Don't have an account?{' '}
            <Link
              to="/register"
              className="font-bold text-[#137a4d] hover:text-[#0f633e] hover:underline transition-colors"
            >
              Register Now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
