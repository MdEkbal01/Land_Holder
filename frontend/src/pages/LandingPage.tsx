import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Search, ChevronDown, PhoneCall, User as UserIcon, Lock, 
  Eye, EyeOff, X, Shield, ShieldCheck, Zap, Scale, 
  Fingerprint, BarChart3, ArrowRight, CheckCircle2, Sparkles
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { login, register } = useAuth();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  // Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('Jharkhand');
  const [stateDropdownOpen, setStateDropdownOpen] = useState(false);

  // Modal Form State
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Banner Slider State (5 Official Digital Governance Banners)
  const bannerImages = [
    '/banners/file_00000000b8948211ab42cde276cb03f2.png',
    '/banners/file_00000000396c8211ae11b6d8dd2a75f0.png',
    '/banners/file_000000006bb0820788ed9f7440eb4960.png',
    '/banners/file_00000000cc0c8211855dd28b73389567.png',
    '/banners/file_00000000e9948211bbddf3f2b3a6e183.png'
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 4000); // Slide every 4 seconds
    return () => clearInterval(timer);
  }, [bannerImages.length]);

  const handleOpenModal = (registerMode = false) => {
    setIsRegistering(registerMode);
    setLoginError('');
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setLoginError('');
    setIsRegistering(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}&state=${encodeURIComponent(selectedState)}`);
    } else {
      navigate(`/search?state=${encodeURIComponent(selectedState)}`);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');

    let result;
    if (isRegistering) {
      // If user wants full registration with OTP, navigate to register page
      if (email && email.includes('@')) {
        navigate(`/register`);
        return;
      }
      result = await register({ 
        username: username.trim(), 
        full_name: fullName.trim() || username.trim(),
        email: email.trim(), 
        password: password.trim(), 
        role: 'CITIZEN',
        jurisdiction_state: selectedState
      });
    } else {
      result = await login(username.trim(), password);
    }

    setIsLoggingIn(false);

    if (result.success) {
      setShowModal(false);
      navigate('/');
    } else {
      setLoginError(result.message);
    }
  };

  const statesList = [
    'Jharkhand', 'Uttar Pradesh', 'Maharashtra', 'Karnataka', 
    'Bihar', 'Rajasthan', 'Madhya Pradesh', 'Gujarat', 'Tamil Nadu'
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 relative">
      {/* Navbar matching the PW Theme */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

          {/* Left Brand Area */}
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-2.5">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-black text-xl shadow-md">
                B
              </div>
              <span className="text-2xl font-black tracking-tight uppercase text-slate-950">
                BhoomiShield
              </span>
            </Link>

            {/* State Dropdown Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setStateDropdownOpen(!stateDropdownOpen)}
                className="hidden md:flex items-center space-x-1.5 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-xl border border-transparent hover:border-gray-200 transition-colors"
              >
                <span className="text-sm font-bold text-slate-700">{selectedState}</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>

              {stateDropdownOpen && (
                <div 
                  className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 py-2 divide-y divide-gray-100 max-h-60 overflow-y-auto"
                  onMouseLeave={() => setStateDropdownOpen(false)}
                >
                  <div className="px-3 py-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    Select Jurisdiction
                  </div>
                  <div className="py-1">
                    {statesList.map((st) => (
                      <button
                        key={st}
                        type="button"
                        onClick={() => {
                          setSelectedState(st);
                          setStateDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 text-xs font-semibold hover:bg-emerald-50 hover:text-emerald-700 transition-colors ${
                          selectedState === st ? 'bg-emerald-50 text-emerald-800 font-bold' : 'text-slate-700'
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Center Search Input */}
          <div className="flex-1 max-w-xl px-8 hidden lg:block">
            <form onSubmit={handleSearchSubmit} className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for Khatiyan, Register-II, or Mutation..."
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all shadow-sm"
              />
            </form>
          </div>

          {/* Right Action: Login / Register Button */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => handleOpenModal(false)}
              className="bg-[#5a4bda] hover:bg-[#4a3ec4] text-white px-7 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md shadow-indigo-500/20 flex items-center space-x-2 cursor-pointer"
            >
              <span>Login / Register</span>
            </button>
          </div>
        </div>
      </header>

      {/* Project Announcement Note (Yellow News Ticker) */}
      <div className="w-full mt-6 bg-gradient-to-r from-amber-50 via-yellow-100 to-amber-50 border-b border-amber-200 py-2.5 shadow-sm z-40 relative overflow-hidden flex items-center">
        <div className="flex-1 overflow-hidden">
          <div className="animate-marquee hover:cursor-pointer flex">
            {[1, 2].map((key) => (
              <div key={key} className="flex items-center space-x-8 px-4 text-sm font-semibold text-amber-900 whitespace-nowrap">
                <span>
                  <span className="font-bold text-amber-700 uppercase tracking-wide mr-2">Welcome to BhoomiShield:</span>
                  A unified National Land Governance platform ensuring 100% transparent and tamper-proof land records across India.
                </span>
                <span className="text-amber-500">✦</span>
                <span>
                  Eradicating land scams and unauthorized mutations using AI-driven verification and secure digital vaults.
                </span>
                <span className="text-amber-500">✦</span>
                <span>
                  Replacing manual paperwork with real-time AI Mutation Tracking and instant digital property valuation.
                </span>
                <span className="text-amber-500">✦</span>
                <span>
                  Empowering buyers with 'Check Before You Buy' reports and multilingual AI legal advisory for safe investments.
                </span>
                <span className="text-amber-500">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-Width Image Slider Banner (Rotating 5 Banners) */}
      <div className="w-full mt-6 aspect-[16/10] md:aspect-[21/7] bg-slate-100 shadow-md overflow-hidden relative">
        {bannerImages.map((src, index) => {
          let slideClass = 'translate-x-full opacity-0 z-0 transition-none';

          if (index === currentSlide) {
            slideClass = 'translate-x-0 opacity-100 z-20 transition-all duration-1000 ease-in-out';
          } else if (index === (currentSlide - 1 + bannerImages.length) % bannerImages.length) {
            slideClass = '-translate-x-full opacity-100 z-10 transition-all duration-1000 ease-in-out';
          }

          return (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full ${slideClass}`}
            >
              <img
                src={src}
                alt={`Digital Governance Banner ${index + 1}`}
                className="w-full h-full object-cover object-top"
              />
            </div>
          );
        })}

        {/* Carousel Indicator Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2">
          {bannerImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                currentSlide === idx ? 'bg-white w-7' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Content Sections */}
      <main className="w-full bg-slate-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
          
          {/* 1. Project Overview - Modern Redesign */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Column - Heading & Intro */}
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center space-x-2.5 bg-amber-50 border border-amber-200 text-amber-800 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                </span>
                <span>DILRMP Initiative</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.15] tracking-tight">
                Empowering India through <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-red-500">
                  Secure Digital Governance
                </span>
              </h2>
              
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                <strong className="text-gray-900 font-bold">BhoomiShield</strong> is an advanced, AI-powered unified land governance platform. We are transforming a traditionally opaque system into a highly secure digital ecosystem.
              </p>

              <div className="flex items-center gap-4 pt-2">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden shadow-sm">
                      <img src={`https://images.unsplash.com/photo-${i === 1 ? '1534528741775-53994a69daeb' : i === 2 ? '1507003211169-0a1dd7228f2d' : i === 3 ? '1500648767791-00dcc994a43e' : '1494790108377-be9c29b29330'}?w=80`} alt="Officer" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-600">
                  Trusted by <span className="text-amber-600 font-bold">10,000+</span> Revenue Officials &amp; Citizens
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => handleOpenModal(false)}
                  className="px-6 py-3 bg-[#137a4d] hover:bg-[#0e5c38] text-white font-bold rounded-xl shadow-md shadow-emerald-700/20 transition-all flex items-center space-x-2 cursor-pointer text-sm"
                >
                  <span>Enter Citizen Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/register"
                  className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-700 font-bold rounded-xl border border-slate-200 transition-all text-sm shadow-sm"
                >
                  Create New Account
                </Link>
              </div>
            </div>

            {/* Right Column - Vision Card */}
            <div className="flex-1 w-full relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-400 to-orange-500 rounded-[2.5rem] transform rotate-2 scale-105 opacity-20 group-hover:rotate-4 transition-transform duration-500 ease-out"></div>
              
              <div className="bg-white/90 backdrop-blur-xl border border-white/60 rounded-[2.5rem] p-8 sm:p-10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] relative z-10 space-y-6">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/25 text-white">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-extrabold text-gray-900">Our Core Mandate</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  To establish a 100% transparent, tamper-proof, and universally accessible digital repository for land records across all States and Union Territories. By integrating cryptographic security, we eradicate unauthorized mutations and property disputes.
                </p>

                <div className="flex flex-wrap gap-2.5 pt-2">
                  <span className="px-3.5 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Cryptography Secured
                  </span>
                  <span className="px-3.5 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span> AI Powered
                  </span>
                  <span className="px-3.5 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span> Citizen First
                  </span>
                </div>
              </div>
            </div>
            
          </div>

          {/* 2. Key Metrics / Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl sm:text-5xl font-black text-amber-500 mb-2">28+</div>
              <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">States &amp; UTs Covered</div>
            </div>
            <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl sm:text-5xl font-black text-indigo-500 mb-2">15M+</div>
              <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Digitized Khatians</div>
            </div>
            <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl sm:text-5xl font-black text-emerald-500 mb-2">100%</div>
              <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Crypto Security</div>
            </div>
            <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl sm:text-5xl font-black text-blue-500 mb-2">24/7</div>
              <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">AI Legal Advisory</div>
            </div>
          </div>

          {/* 3. Core Technological Pillars */}
          <div className="pt-6">
            <div className="text-center mb-14">
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Core Technological Pillars</h3>
              <p className="text-gray-500 max-w-2xl mx-auto text-base">The foundational modules powering the next generation of land administration and digital citizen services in India.</p>
              <div className="w-20 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Pillar 1 */}
              <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:border-amber-300 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 text-amber-600 group-hover:scale-110 transition-transform">
                  <Lock className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Immutable Digital Vault</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  All land records, including Register-II and plot maps, are stored in a highly secure, tamper-proof digital vault. Every transaction and modification is cryptographically signed and chronologically preserved, ensuring absolute legal sanctity.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:border-blue-300 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">AI Mutation Engine</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  An intelligent workflow system that automates the mutation process. It cross-verifies applicant data against legacy records in real-time, significantly reducing manual processing time and eliminating bureaucratic delays.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:border-emerald-300 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Fraud Risk Assessment</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Before any property transaction, our AI-driven risk engine generates a 'Check Before You Buy' report. It analyzes historical disputes, encumbrances, and ownership chains to flag potential scams and protect citizen investments.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:border-purple-300 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform">
                  <Scale className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Multilingual Legal AI</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Navigating complex land laws like the CNT/SPT Acts is now effortless. Our integrated AI advisory provides real-time, multilingual legal guidance to citizens, ensuring they understand their rights and statutory obligations.
                </p>
              </div>

              {/* Pillar 5 */}
              <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:border-indigo-300 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform">
                  <Fingerprint className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Aadhaar e-KYC Integration</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Seamless single sign-on (SSO) backed by Aadhaar biometric and OTP-based e-KYC. This ensures that only verified individuals can access or request changes to land records, completely eliminating identity fraud.
                </p>
              </div>

              {/* Pillar 6 */}
              <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:border-rose-300 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 text-rose-600 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Official Dashboard &amp; Analytics</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  A dedicated portal for Revenue Officials (Circle Officers, COs) offering macro-level analytics, pending mutation queues, and geographical dispute heatmaps to enhance administrative decision-making.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Ecosystem Call to Action */}
          <div className="bg-gray-900 rounded-[2.5rem] p-10 sm:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20 mix-blend-overlay"></div>
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                Join the Digital Governance Revolution
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Experience instant verification, transparent mutations, and secure land transactions across India.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => handleOpenModal(false)}
                  className="bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-10 py-4 rounded-2xl shadow-lg hover:shadow-amber-500/30 transition-all cursor-pointer text-base uppercase tracking-wider"
                >
                  Access Portal Now
                </button>
                <Link
                  to="/register"
                  className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-2xl transition-all text-base"
                >
                  Register Citizen Account
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Floating Action Button (1800-BHOOMI) */}
      <div className="fixed bottom-6 right-6 z-40">
        <a 
          href="tel:1800246664"
          className="bg-[#5a4bda] text-white rounded-full px-4 py-2.5 flex items-center space-x-3 shadow-xl hover:bg-[#4a3ec4] transition-all hover:scale-105"
        >
          <div className="bg-white rounded-full p-2 text-[#5a4bda]">
            <PhoneCall className="w-4 h-4" />
          </div>
          <div className="text-left leading-tight">
            <div className="text-[11px] font-medium opacity-90">Talk to an expert</div>
            <div className="text-sm font-bold tracking-wide">1800-BHOOMI</div>
          </div>
        </a>
      </div>

      {/* Authentication Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-[32px] shadow-2xl w-full max-w-[460px] p-8 sm:p-10 relative animate-in fade-in zoom-in duration-200">

            <button
              onClick={handleCloseModal}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-full p-2 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Emblem Area */}
            <div className="flex flex-col items-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-800 text-white flex items-center justify-center mb-2 shadow-md">
                <Shield className="w-7 h-7" />
              </div>
              <h2 className="text-[15px] font-bold text-gray-900 leading-tight">भारत सरकार</h2>
              <h2 className="text-[16px] font-extrabold text-gray-900 tracking-wide uppercase leading-tight">Government of India</h2>
              <p className="text-[10px] font-bold text-emerald-700 tracking-widest uppercase mt-0.5">Digital Land Records Portal</p>
            </div>

            <h1 className="text-2xl font-extrabold text-center text-[#1a2b3c] mb-6">
              {isRegistering ? 'Create Citizen Account' : 'Sign In'}
            </h1>

            {/* Error Message */}
            {loginError && (
              <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold text-center">
                {loginError}
              </div>
            )}

            <form onSubmit={handleSignIn} className="space-y-4">

              {/* Username / Email */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <UserIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3 bg-white border border-gray-300 rounded-2xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-shadow"
                  placeholder="Username or Email ID"
                  required
                />
              </div>

              {isRegistering && (
                <>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <UserIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="block w-full pl-11 pr-4 py-3 bg-white border border-gray-300 rounded-2xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-shadow"
                      placeholder="Full Name"
                      required
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="text-gray-400 font-bold text-base">@</span>
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full pl-11 pr-4 py-3 bg-white border border-gray-300 rounded-2xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-shadow"
                      placeholder="Email ID"
                      required
                    />
                  </div>
                </>
              )}

              {/* Password */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-11 pr-11 py-3 bg-white border border-gray-300 rounded-2xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-shadow"
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>

              {!isRegistering && (
                <div className="flex justify-between items-center text-xs pt-0.5">
                  <Link 
                    to="/login"
                    onClick={handleCloseModal}
                    className="text-emerald-700 hover:underline font-semibold"
                  >
                    Open Full Login Page &rarr;
                  </Link>
                  <Link
                    to="/forgot-password"
                    onClick={handleCloseModal}
                    className="font-bold text-gray-700 hover:text-gray-900 hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoggingIn}
                  className="w-full bg-[#009b5a] hover:bg-[#008a50] text-white py-3.5 px-4 rounded-2xl text-sm font-bold tracking-wide uppercase transition-all shadow-md shadow-emerald-600/20 flex justify-center items-center cursor-pointer disabled:opacity-60"
                >
                  {isLoggingIn ? 'Authenticating...' : isRegistering ? 'Register Now' : 'Sign In'}
                </button>
              </div>

              <div className="text-center pt-3 text-xs text-gray-600">
                {isRegistering ? (
                  <>
                    Already have an account?{' '}
                    <button 
                      type="button" 
                      onClick={() => setIsRegistering(false)} 
                      className="text-[#137a4d] font-bold underline cursor-pointer"
                    >
                      Sign In
                    </button>
                  </>
                ) : (
                  <>
                    New Citizen User?{' '}
                    <Link
                      to="/register"
                      onClick={handleCloseModal}
                      className="text-[#137a4d] font-bold underline"
                    >
                      Register with OTP Verification
                    </Link>
                  </>
                )}
              </div>

            </form>
          </div>
        </div>
      )}
    </div>
  );
};
