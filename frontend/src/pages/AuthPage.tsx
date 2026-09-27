import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronDown, PhoneCall, User as UserIcon, Lock, Eye, EyeOff, X, Megaphone } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const { login, demoLogin, register } = useAuth();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  // Modal Form State
  const [username, setUsername] = useState('ramesh_sharma');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('Citizen@Ramesh2026#');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Banner Slider State
  const bannerImages = [
    '/banners/file_00000000396c8211ae11b6d8dd2a75f0.png',
    '/banners/file_000000006bb0820788ed9f7440eb4960.png',
    '/banners/file_00000000b8948211ab42cde276cb03f2.png',
    '/banners/file_00000000cc0c8211855dd28b73389567.png',
    '/banners/file_00000000e9948211bbddf3f2b3a6e183.png'
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 3500); // Slide every 3.5 seconds
    return () => clearInterval(timer);
  }, []);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setLoginError('');
    setIsRegistering(false);
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');

    let result;
    if (isRegistering) {
      result = await register({ username, email, password, role: 'CITIZEN' });
    } else {
      result = await login(username, password);
    }

    setIsLoggingIn(false);

    if (result.success) {
      setShowModal(false);
      navigate('/');
    } else {
      setLoginError(result.message);
    }
  };

  const handleAadhaarSignIn = async () => {
    setIsLoggingIn(true);
    const success = await demoLogin('USR-CIT-1001');
    setIsLoggingIn(false);
    if (success) {
      setShowModal(false);
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 relative">
      {/* Navbar matching the PW theme */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl">
                B
              </div>
              <span className="text-2xl font-bold tracking-tight uppercase">BhoomiShield</span>
            </div>

            <div className="hidden md:flex items-center space-x-1 cursor-pointer hover:bg-gray-50 px-3 py-2 rounded-md transition-colors">
              <span className="text-sm font-semibold">Jharkhand</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>

          <div className="flex-1 max-w-xl px-8 hidden lg:block">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for Khatiyan, Register-II, or Mutation..."
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:border-indigo-500 transition-all shadow-sm"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={handleOpenModal}
              className="bg-[#5a4bda] hover:bg-[#4a3ec4] text-white px-8 py-3 rounded-md text-sm font-bold transition-colors shadow-sm flex items-center space-x-2"
            >
              <span>Login / Register</span>
            </button>
          </div>
        </div>
      </header>

      {/* Project Announcement Note (News Ticker) */}
      <div className="w-full mt-8 bg-gradient-to-r from-amber-50 via-yellow-100 to-amber-50 border-b border-amber-200 py-2.5 shadow-sm z-40 relative overflow-hidden flex items-center">
        <div className="flex-1 overflow-hidden">
          <div className="animate-marquee hover:cursor-pointer flex">
            {[1, 2].map((key) => (
              <div key={key} className="flex items-center space-x-8 px-4 text-sm font-semibold text-amber-900 whitespace-nowrap">
                <span>
                  <span className="font-bold text-amber-700 uppercase tracking-wide mr-2">Welcome to Bhoomi Shield:</span>
                  A unified National Land Governance platform ensuring 100% transparent and tamper-proof land records across India.
                </span>
                <span className="text-amber-400">✦</span>
                <span>
                  Eradicating land scams and unauthorized mutations using AI-driven verification and secure digital vaults.
                </span>
                <span className="text-amber-400">✦</span>
                <span>
                  Replacing manual paperwork with real-time AI Mutation Tracking and instant digital property valuation.
                </span>
                <span className="text-amber-400">✦</span>
                <span>
                  Empowering buyers with 'Check Before You Buy' reports and multilingual AI legal advisory for safe investments.
                </span>
                <span className="text-amber-400">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-Width Image Slider Banner */}
      <div className="w-full mt-6 aspect-[16/10] md:aspect-[21/7] bg-slate-50 shadow-md overflow-hidden relative">
        {bannerImages.map((src, index) => {
          let slideClass = 'translate-x-full opacity-0 z-0 transition-none'; // Default: waiting on right, hidden

          if (index === currentSlide) {
            slideClass = 'translate-x-0 opacity-100 z-20 transition-all duration-1000 ease-in-out'; // Active
          } else if (index === (currentSlide - 1 + bannerImages.length) % bannerImages.length) {
            slideClass = '-translate-x-full opacity-100 z-10 transition-all duration-1000 ease-in-out'; // Previous, moving left
          }

          return (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full ${slideClass}`}
            >
              <img
                src={src}
                alt={`Banner slide ${index + 1}`}
                className="w-full h-full object-cover object-top"
              />
            </div>
          );
        })}

      </div>

      <main className="w-full bg-slate-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-20 space-y-20">
          
          {/* 1. Project Overview - Modern Redesign */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Column - Heading & Intro */}
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center space-x-3 bg-amber-50 border border-amber-200 text-amber-800 font-bold px-4 py-2 rounded-full text-xs uppercase tracking-widest shadow-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                </span>
                <span>DILRMP Initiative</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1]">
                Empowering India through <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-red-500">
                  Secure Digital Governance
                </span>
              </h2>
              
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                <strong className="text-gray-900 font-bold">BhoomiShield</strong> is an advanced, AI-powered unified land governance platform. We are transforming a traditionally opaque system into a highly secure digital ecosystem.
              </p>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden shadow-sm">
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-semibold text-gray-600">
                  Trusted by <span className="text-amber-600 font-bold">10,000+</span> Revenue Officials
                </div>
              </div>
            </div>

            {/* Right Column - Glassmorphic Vision Card */}
            <div className="flex-1 w-full relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-400 to-orange-500 rounded-[2.5rem] transform rotate-3 scale-105 opacity-20 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-700 ease-out"></div>
              
              <div className="bg-white/80 backdrop-blur-xl border border-white/50 rounded-[2.5rem] p-10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-orange-500/30 text-white">
                  <span className="text-3xl">🛡️</span>
                </div>
                
                <h3 className="text-2xl font-extrabold text-gray-900 mb-4">Our Core Mandate</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  To establish a 100% transparent, tamper-proof, and universally accessible digital repository for land records across all States and Union Territories. By integrating cryptographic security, we eradicate unauthorized mutations and property disputes.
                </p>

                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Cryptography Secured
                  </span>
                  <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span> AI Powered
                  </span>
                  <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span> Citizen First
                  </span>
                </div>
              </div>
            </div>
            
          </div>

          {/* 2. Key Metrics / Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-20 -mt-10 mx-4 md:mx-10">
            <div className="bg-white border border-gray-100 rounded-3xl p-8 text-center shadow-lg hover:-translate-y-1 transition-transform">
              <div className="text-5xl font-black text-amber-500 mb-3 drop-shadow-sm">28+</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">States & UTs Covered</div>
            </div>
            <div className="bg-white border border-gray-100 rounded-3xl p-8 text-center shadow-lg hover:-translate-y-1 transition-transform">
              <div className="text-5xl font-black text-indigo-500 mb-3 drop-shadow-sm">15M+</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Digitized Khatians</div>
            </div>
            <div className="bg-white border border-gray-100 rounded-3xl p-8 text-center shadow-lg hover:-translate-y-1 transition-transform">
              <div className="text-5xl font-black text-emerald-500 mb-3 drop-shadow-sm">100%</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Crypto Security</div>
            </div>
            <div className="bg-white border border-gray-100 rounded-3xl p-8 text-center shadow-lg hover:-translate-y-1 transition-transform">
              <div className="text-5xl font-black text-blue-500 mb-3 drop-shadow-sm">24/7</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">AI Legal Advisory</div>
            </div>
          </div>

          {/* 3. Core Technological Pillars */}
          <div className="pt-10">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Core Technological Pillars</h3>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">The foundational modules powering the next generation of land administration and digital citizen services in India.</p>
              <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full mt-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Pillar 1 */}
              <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:border-amber-300 hover:shadow-[0_10px_40px_-15px_rgba(251,191,36,0.3)] transition-all group">
                <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors group-hover:scale-110 transform duration-300">
                  <span className="text-3xl">🔐</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Immutable Digital Vault</h4>
                <p className="text-gray-500 text-sm leading-relaxed text-justify">
                  All land records, including Register-II and plot maps, are stored in a highly secure, tamper-proof digital vault. Every transaction and modification is cryptographically signed and chronologically preserved, ensuring absolute legal sanctity.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:border-blue-300 hover:shadow-[0_10px_40px_-15px_rgba(96,165,250,0.3)] transition-all group">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors group-hover:scale-110 transform duration-300">
                  <span className="text-3xl">⚡</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">AI Mutation Engine</h4>
                <p className="text-gray-500 text-sm leading-relaxed text-justify">
                  An intelligent workflow system that automates the mutation process. It cross-verifies applicant data against legacy records in real-time, significantly reducing manual processing time and eliminating bureaucratic delays.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:border-emerald-300 hover:shadow-[0_10px_40px_-15px_rgba(52,211,153,0.3)] transition-all group">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors group-hover:scale-110 transform duration-300">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Fraud Risk Assessment</h4>
                <p className="text-gray-500 text-sm leading-relaxed text-justify">
                  Before any property transaction, our AI-driven risk engine generates a 'Check Before You Buy' report. It analyzes historical disputes, encumbrances, and ownership chains to flag potential scams and protect citizen investments.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:border-purple-300 hover:shadow-[0_10px_40px_-15px_rgba(167,139,250,0.3)] transition-all group">
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors group-hover:scale-110 transform duration-300">
                  <span className="text-3xl">⚖️</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Multilingual Legal AI</h4>
                <p className="text-gray-500 text-sm leading-relaxed text-justify">
                  Navigating complex land laws like the CNT/SPT Acts is now effortless. Our integrated AI advisory provides real-time, multilingual legal guidance to citizens, ensuring they understand their rights and statutory obligations.
                </p>
              </div>

              {/* Pillar 5 */}
              <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:border-indigo-300 hover:shadow-[0_10px_40px_-15px_rgba(129,140,248,0.3)] transition-all group">
                <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors group-hover:scale-110 transform duration-300">
                  <span className="text-3xl">🆔</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Aadhaar e-KYC Integration</h4>
                <p className="text-gray-500 text-sm leading-relaxed text-justify">
                  Seamless single sign-on (SSO) backed by Aadhaar biometric and OTP-based e-KYC. This ensures that only verified individuals can access or request changes to land records, completely eliminating identity fraud.
                </p>
              </div>

              {/* Pillar 6 */}
              <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:border-rose-300 hover:shadow-[0_10px_40px_-15px_rgba(251,113,133,0.3)] transition-all group">
                <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-100 transition-colors group-hover:scale-110 transform duration-300">
                  <span className="text-3xl">📊</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Official Dashboard & Analytics</h4>
                <p className="text-gray-500 text-sm leading-relaxed text-justify">
                  A dedicated portal for Revenue Officials (Circle Officers, COs) offering macro-level analytics, pending mutation queues, and geographical dispute heatmaps to enhance administrative decision-making.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Ecosystem Call to Action */}
          <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl mt-10">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20 mix-blend-overlay"></div>
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">Join the Digital Governance Revolution</h3>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                Whether you are a citizen looking to verify property, a buyer seeking a risk-free investment, or a revenue official managing land administration, BhoomiShield provides the tools you need.
              </p>
              <button onClick={handleOpenModal} className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-black px-12 py-5 rounded-2xl shadow-[0_0_40px_rgba(245,158,11,0.3)] hover:shadow-[0_0_60px_rgba(245,158,11,0.5)] transition-all transform hover:-translate-y-1 text-lg uppercase tracking-wide">
                Access Portal Now
              </button>
            </div>
          </div>

        </div>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="bg-[#5a4bda] text-white rounded-full px-4 py-2 flex items-center space-x-3 shadow-xl hover:bg-[#4a3ec4] transition-colors">
          <div className="bg-white rounded-full p-2 text-[#5a4bda]">
            <PhoneCall className="w-5 h-5" />
          </div>
          <div className="text-left leading-tight">
            <div className="text-xs font-medium opacity-90">Talk to an expert</div>
            <div className="text-sm font-bold">1800-BHOOMI</div>
          </div>
        </button>
      </div>

      {/* Login Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">

          <div className="bg-white rounded-[32px] shadow-2xl w-full max-w-[460px] p-10 relative animate-in fade-in zoom-in duration-200">

            <button
              onClick={handleCloseModal}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-full p-2 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Emblem Area */}
            <div className="flex flex-col items-center mb-8">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
                alt="Government of India Emblem"
                className="w-16 h-20 object-contain mb-3"
              />
              <h2 className="text-[15px] font-bold text-gray-900 leading-tight">भारत सरकार</h2>
              <h2 className="text-[17px] font-extrabold text-gray-900 tracking-wide uppercase leading-tight">Government of India</h2>
              <p className="text-[11px] font-bold text-gray-500 tracking-widest uppercase mt-1">Land Records Portal</p>
            </div>

            <h1 className="text-[28px] font-extrabold text-center text-[#1a2b3c] mb-8">
              {isRegistering ? 'Register Now' : 'Sign In'}
            </h1>

            <form onSubmit={handleSignIn} className="space-y-5">

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <UserIcon className="h-[22px] w-[22px] text-gray-400" strokeWidth={1.5} />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full pl-12 pr-4 py-[14px] bg-white border border-gray-300 rounded-[16px] text-[15px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-shadow"
                  placeholder="Username"
                  required
                />
              </div>

              {isRegistering && (
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-gray-400 font-bold text-lg">@</span>
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-12 pr-4 py-[14px] bg-white border border-gray-300 rounded-[16px] text-[15px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-shadow"
                    placeholder="Email ID"
                    required={isRegistering}
                  />
                </div>
              )}

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-[22px] w-[22px] text-gray-400" strokeWidth={1.5} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-12 pr-12 py-[14px] bg-white border border-gray-300 rounded-[16px] text-[15px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-shadow"
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-[22px] w-[22px]" strokeWidth={1.5} />
                  ) : (
                    <Eye className="h-[22px] w-[22px]" strokeWidth={1.5} />
                  )}
                </button>
              </div>

              {!isRegistering && (
                <div className="flex justify-end pt-1">
                  <button type="button" className="text-[13px] font-bold text-gray-700 hover:text-gray-900">
                    Forgot Password?
                  </button>
                </div>
              )}

              {loginError && (
                <div className="text-red-500 text-sm font-semibold text-center bg-red-50 py-2 rounded-lg">
                  {loginError}
                </div>
              )}

              <div className="pt-2 pb-1 space-y-4">
                <button
                  type="submit"
                  disabled={isLoggingIn}
                  className="w-full bg-[#009b5a] hover:bg-[#008a50] text-white py-[14px] px-4 rounded-[100px] text-[15px] font-bold tracking-wide uppercase transition-colors shadow-lg shadow-emerald-200 flex justify-center items-center h-[52px]"
                >
                  {isLoggingIn ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    isRegistering ? 'Register' : 'Sign In'
                  )}
                </button>

                {!isRegistering && (
                  <button
                    type="button"
                    onClick={handleAadhaarSignIn}
                    disabled={isLoggingIn}
                    className="w-full bg-white hover:bg-gray-50 text-[#1a2b3c] border border-gray-400 py-[14px] px-4 rounded-[100px] text-[15px] font-semibold transition-colors flex justify-center items-center h-[52px]"
                  >
                    Sign In with Aadhaar
                  </button>
                )}
              </div>

              <div className="text-center mt-8 pt-4">
                <p className="text-[14px] text-gray-600 font-medium">
                  {isRegistering ? (
                    <>Already have an account? <button type="button" onClick={() => setIsRegistering(false)} className="text-[#1a2b3c] font-bold underline decoration-2 underline-offset-4 hover:text-gray-900">Sign In</button></>
                  ) : (
                    <>New User? <button type="button" onClick={() => { setIsRegistering(true); setUsername(''); setPassword(''); }} className="text-[#1a2b3c] font-bold underline decoration-2 underline-offset-4 hover:text-gray-900">Register Now</button></>
                  )}
                </p>
              </div>

            </form>
          </div>
        </div>
      )}
    </div>
  );
};
