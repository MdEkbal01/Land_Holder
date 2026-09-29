import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { SupportedLanguage } from '../i18n/translations';
import { UserProfileModal } from './UserProfileModal';
import { 
  ShieldCheck, Search, Lock, Languages, UserCheck, Scale, 
  ShieldAlert, Menu, X, Globe2, FolderLock, Landmark, Building2,
  LogIn, LogOut, User as UserIcon, ChevronDown, Calculator, Database,
  Sparkles, Compass, FileCheck, Layers, Grid, ArrowRight, ExternalLink, BadgeCheck, FileText,
  Sun, Moon, Settings, Edit3
} from 'lucide-react';

interface NavbarProps {
  lang?: string;
  setLang?: (l: any) => void;
  userRole?: string;
  setUserRole?: (role: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  
  const { user, isAuthenticated, isOfficial, isAdmin, logout } = useAuth();
  const { lang, setLang, t, currentLangInfo, languages } = useLanguage();
  const { theme, toggleTheme, isDark } = useTheme();
  const isEn = lang === 'en';

  const toggleMenuDrawer = () => setMenuDrawerOpen(!menuDrawerOpen);
  const closeMenuDrawer = () => setMenuDrawerOpen(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl text-slate-900 dark:text-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-b border-emerald-100 dark:border-slate-800 transition-colors">
        {/* Top Government Bar */}
        <div className="bg-[#0e4d2f] dark:bg-slate-950 px-4 py-1.5 text-xs text-emerald-100 flex justify-end items-center border-b border-emerald-900/50">
          
          <div className="flex items-center space-x-2.5 shrink-0">
            {/* ☀️ / 🌙 Simple Light & Dark Mode Toggle (Requested) */}
            <button
              onClick={toggleTheme}
              className="flex items-center space-x-1.5 hover:text-white transition-colors text-emerald-200 font-semibold bg-emerald-900/50 dark:bg-slate-800/80 border border-emerald-800/80 dark:border-slate-700 px-2.5 py-1 rounded-lg text-xs cursor-pointer shadow-sm"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun className="w-3.5 h-3.5 text-amber-300" /> : <Moon className="w-3.5 h-3.5 text-sky-300" />}
              <span className="hidden sm:inline">{isDark ? "Light Mode" : "Dark Mode"}</span>
            </button>

            {/* 11 Indian Languages Dropdown Selector */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center space-x-1.5 hover:text-white transition-colors text-emerald-200 font-semibold bg-emerald-900/50 dark:bg-slate-800/80 border border-emerald-800/80 dark:border-slate-700 px-2.5 py-1 rounded-lg text-xs cursor-pointer"
                title="Change Language across 11 Indian Languages"
              >
                <span>{currentLangInfo.flag}</span>
                <span>{currentLangInfo.nativeName}</span>
                <ChevronDown className="w-3 h-3 opacity-70" />
              </button>

              {langDropdownOpen && (
                <div 
                  className="absolute right-0 mt-1 w-56 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50 py-1.5 divide-y divide-slate-800 max-h-80 overflow-y-auto"
                  onMouseLeave={() => setLangDropdownOpen(false)}
                >
                  <div className="px-3 py-1 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    Select Regional Language (11)
                  </div>
                  <div className="py-1">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code as SupportedLanguage);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-slate-800 transition-colors ${
                          lang === l.code ? 'bg-sky-950/80 text-sky-400 font-bold' : 'text-slate-300'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <span>{l.flag}</span>
                          <span>{l.nativeName} ({l.name})</span>
                        </div>
                        {lang === l.code && <span className="text-sky-400">✓</span>}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* User Profile Header Badge (Without Top Bar Logout Button) */}
            {isAuthenticated && user ? (
              <div className="hidden sm:flex items-center space-x-2 bg-emerald-900/50 dark:bg-slate-800/80 px-2.5 py-1 rounded-lg border border-emerald-800/80 dark:border-slate-700 text-emerald-100">
                <button
                  onClick={() => setProfileModalOpen(true)}
                  className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer group"
                  title="Click to view & edit your profile details"
                >
                  <img
                    src={user.avatar_url || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40'}
                    alt={user.full_name}
                    className="w-4 h-4 rounded-full object-cover ring-1 ring-sky-400 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-[11px] font-bold text-white max-w-[120px] truncate">{user.full_name}</span>
                  <Edit3 className="w-2.5 h-2.5 text-sky-400 opacity-70 group-hover:opacity-100" />
                </button>
                <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded uppercase ${
                  isAdmin ? 'bg-purple-950 text-purple-300 border border-purple-800' : isOfficial ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-sky-950 text-sky-400 border border-sky-800'
                }`}>
                  {isAdmin ? 'Admin' : isOfficial ? 'Official' : 'Citizen'}
                </span>
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden sm:flex items-center space-x-1 text-emerald-200 hover:text-white font-semibold bg-emerald-900/50 px-3 py-1 rounded-lg border border-emerald-800/80"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>{isEn ? "Sign In / Register" : "लॉग इन / रजिस्टर"}</span>
              </Link>
            )}
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Top Left: Menu Button & Platform Logo */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            
            {/* Dedicated Top-Left Menu Trigger Button */}
            <button
              onClick={toggleMenuDrawer}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 border cursor-pointer ${
                menuDrawerOpen
                  ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border-emerald-300 shadow-inner'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm'
              }`}
              title="Open Features & Services Menu"
            >
              {menuDrawerOpen ? (
                <X className="w-4 h-4 text-[#137a4d]" />
              ) : (
                <Menu className="w-4 h-4 text-[#137a4d]" />
              )}
              <span className="font-extrabold tracking-wide">{isEn ? "Menu" : "मेनू"}</span>
              <span className="bg-emerald-100 dark:bg-emerald-900/60 text-[#137a4d] dark:text-emerald-300 text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold">
                10+
              </span>
            </button>

            {/* Platform Logo */}
            <Link to="/" onClick={closeMenuDrawer} className="flex items-center space-x-2.5 group">
              <div className="p-2 bg-gradient-to-tr from-[#0e5c38] to-[#137a4d] rounded-xl shadow-lg shadow-emerald-700/20 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-2xl tracking-tight text-slate-900 dark:text-white leading-tight">
                  Bhoomi<span className="text-[#137a4d]">Shield</span>
                </span>
                <span className="text-[10px] font-bold text-[#137a4d] dark:text-emerald-400 tracking-wider uppercase">
                  DILRMP National Layer
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Right Quick Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Quick Land Search Link */}
            <Link
              to="/search"
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all hidden md:flex items-center space-x-2 border ${
                location.pathname === '/search'
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 text-[#137a4d] border-emerald-200 dark:border-emerald-800'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 border-slate-200 dark:border-slate-700'
              }`}
            >
              <Search className="w-4 h-4 text-[#137a4d]" />
              <span>{isEn ? "Land Search" : "भूमि खोज"}</span>
            </Link>

            {/* Quick Vault Link */}
            <Link
              to="/vault"
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all hidden md:flex items-center space-x-2 border ${
                location.pathname === '/vault'
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 text-[#137a4d] border-emerald-200 dark:border-emerald-800'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 border-slate-200 dark:border-slate-700'
              }`}
            >
              <FolderLock className="w-4 h-4 text-[#137a4d]" />
              <span>{isEn ? "My Vault" : "मेरी वॉल्ट"}</span>
            </Link>

            {/* Quick Admin Portal Button (When Admin) */}
            {isAdmin && (
              <Link
                to="/admin"
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all hidden sm:flex items-center space-x-1.5 border shadow-sm ${
                  location.pathname === '/admin'
                    ? 'bg-purple-600 text-white border-purple-700'
                    : 'bg-purple-50 text-purple-700 hover:bg-purple-100 border-purple-200'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Admin Command</span>
              </Link>
            )}

            {/* Quick Tehsildar Desk Button (When Officer) */}
            {isOfficial && !isAdmin && (
              <Link
                to="/official"
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all hidden sm:flex items-center space-x-1.5 border shadow-sm ${
                  location.pathname === '/official'
                    ? 'bg-[#137a4d] text-white border-emerald-700'
                    : 'bg-emerald-50 text-[#137a4d] hover:bg-emerald-100 border-emerald-200'
                }`}
              >
                <Landmark className="w-4 h-4" />
                <span>Tehsildar Desk</span>
              </Link>
            )}

            {/* Account / User Profile Pill */}
            {!isAuthenticated ? (
              <Link
                to="/login"
                className="px-4 py-2 rounded-xl bg-[#137a4d] hover:bg-[#0f633e] text-white text-xs font-bold flex items-center space-x-2 shadow-md shadow-[#137a4d]/25 cursor-pointer"
              >
                <LogIn className="w-4 h-4" />
                <span>{isEn ? "Sign In" : "लॉग इन"}</span>
              </Link>
            ) : (
              <button
                onClick={() => setProfileModalOpen(true)}
                className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-bold flex items-center space-x-2 transition-all cursor-pointer shadow-sm"
                title="Manage Profile & Settings"
              >
                <img
                  src={user?.avatar_url || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40'}
                  alt="Profile"
                  className="w-4 h-4 rounded-full object-cover"
                />
                <span>{user?.full_name?.split(' ')[0] || 'Profile'}</span>
                <Settings className="w-3.5 h-3.5 text-slate-500" />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* 🌟 MEGA MENU DRAWER & FEATURE MODAL (SLIDES FROM LEFT) */}
      {menuDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex justify-start animate-in fade-in duration-200">
          
          {/* Backdrop Click to Close */}
          <div className="fixed inset-0" onClick={closeMenuDrawer}></div>

          {/* Slide-over Content Panel */}
          <div className="relative w-full max-w-md bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 shadow-[20px_0_50px_rgba(0,0,0,0.15)] h-full flex flex-col z-10 overflow-y-auto">
            
            {/* Drawer Header */}
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur z-20">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-[#137a4d] border border-emerald-200 dark:border-emerald-800">
                  <Grid className="w-4 h-4" />
                </div>
                <h2 className="text-sm font-black text-slate-800 dark:text-white tracking-tight uppercase">
                  {isEn ? "Features & Services" : "सेवाएँ एवं मेनू"}
                </h2>
              </div>

              <button
                onClick={closeMenuDrawer}
                className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 transition-colors cursor-pointer"
                title="Close Menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Feature Options List */}
            <div className="p-5 space-y-6 flex-1">
              
              {/* Category 1: National Layer & Land Discovery */}
              <div className="space-y-2">
                <div className="text-[10px] font-bold text-[#137a4d] dark:text-emerald-400 uppercase tracking-wider px-1 mb-1">
                  1. National Layer & Land Discovery
                </div>

                <Link
                  to="/"
                  onClick={closeMenuDrawer}
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-white dark:bg-slate-800/80 hover:bg-emerald-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-[#137a4d] border border-slate-200 dark:border-slate-700 shadow-sm transition-all font-semibold text-xs group"
                >
                  <div className="flex items-center space-x-3">
                    <Globe2 className="w-4 h-4 text-sky-500" />
                    <span>National Portal Overview</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#137a4d] group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  to="/search"
                  onClick={closeMenuDrawer}
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-white dark:bg-slate-800/80 hover:bg-emerald-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-[#137a4d] border border-slate-200 dark:border-slate-700 shadow-sm transition-all font-semibold text-xs group"
                >
                  <div className="flex items-center space-x-3">
                    <Search className="w-4 h-4 text-emerald-500" />
                    <span>Universal Land Search</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#137a4d] group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  to="/check-buy"
                  onClick={closeMenuDrawer}
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-white dark:bg-slate-800/80 hover:bg-emerald-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-[#137a4d] border border-slate-200 dark:border-slate-700 shadow-sm transition-all font-semibold text-xs group"
                >
                  <div className="flex items-center space-x-3">
                    <ShieldCheck className="w-4 h-4 text-amber-500" />
                    <span>Check Before You Buy</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#137a4d] group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  to="/track-mutation"
                  onClick={closeMenuDrawer}
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-white dark:bg-slate-800/80 hover:bg-emerald-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-[#137a4d] border border-slate-200 dark:border-slate-700 shadow-sm transition-all font-semibold text-xs group"
                >
                  <div className="flex items-center space-x-3">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>Live Mutation Tracker</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#137a4d] group-hover:translate-x-0.5 transition-transform" />
                </Link>

                {/* ✅ Stamp Duty & Valuation (Working Route: /stamp-duty & /valuation) */}
                <Link
                  to="/stamp-duty"
                  onClick={closeMenuDrawer}
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-white dark:bg-slate-800/80 hover:bg-emerald-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-[#137a4d] border border-slate-200 dark:border-slate-700 shadow-sm transition-all font-semibold text-xs group"
                >
                  <div className="flex items-center space-x-3">
                    <Calculator className="w-4 h-4 text-amber-500" />
                    <span>Stamp Duty & Valuation</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#137a4d] group-hover:translate-x-0.5 transition-transform" />
                </Link>

                {/* ✅ Report Verification (Working Route: /verify) */}
                <Link
                  to="/verify"
                  onClick={closeMenuDrawer}
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-white dark:bg-slate-800/80 hover:bg-emerald-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-[#137a4d] border border-slate-200 dark:border-slate-700 shadow-sm transition-all font-semibold text-xs group"
                >
                  <div className="flex items-center space-x-3">
                    <FileCheck className="w-4 h-4 text-sky-500" />
                    <span>Report Verification</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#137a4d] group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              {/* Category 2: Citizen Locker & Legal Redressal */}
              <div className="space-y-2">
                <div className="text-[10px] font-bold text-[#137a4d] dark:text-emerald-400 uppercase tracking-wider px-1 mb-1">
                  2. Citizen Locker & Legal Redressal
                </div>

                <Link
                  to="/vault"
                  onClick={closeMenuDrawer}
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-white dark:bg-slate-800/80 hover:bg-emerald-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-[#137a4d] border border-slate-200 dark:border-slate-700 shadow-sm transition-all font-semibold text-xs group"
                >
                  <div className="flex items-center space-x-3">
                    <FolderLock className="w-4 h-4 text-sky-500" />
                    <span>My Bhoomi Vault</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#137a4d] group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  to="/legal-advisor"
                  onClick={closeMenuDrawer}
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-white dark:bg-slate-800/80 hover:bg-emerald-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-[#137a4d] border border-slate-200 dark:border-slate-700 shadow-sm transition-all font-semibold text-xs group"
                >
                  <div className="flex items-center space-x-3">
                    <Scale className="w-4 h-4 text-emerald-500" />
                    <span>AI Legal Advisor</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#137a4d] group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  to="/complaints"
                  onClick={closeMenuDrawer}
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-white dark:bg-slate-800/80 hover:bg-emerald-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-[#137a4d] border border-slate-200 dark:border-slate-700 shadow-sm transition-all font-semibold text-xs group"
                >
                  <div className="flex items-center space-x-3">
                    <ShieldAlert className="w-4 h-4 text-rose-500" />
                    <span>Grievance Portal</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#137a4d] group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              {/* Category 3: Administrative & Revenue Governance */}
              <div className="space-y-2">
                <div className="text-[10px] font-bold text-[#137a4d] dark:text-emerald-400 uppercase tracking-wider px-1 mb-1">
                  3. Administrative & Revenue Desks
                </div>

                <Link
                  to="/admin"
                  onClick={closeMenuDrawer}
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-purple-50/60 dark:bg-purple-950/40 hover:bg-purple-100/80 text-purple-900 dark:text-purple-200 border border-purple-200 dark:border-purple-800 shadow-sm transition-all font-bold text-xs group"
                >
                  <div className="flex items-center space-x-3">
                    <Building2 className="w-4 h-4 text-purple-600" />
                    <span>Admin Command Center</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-purple-500 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  to="/official"
                  onClick={closeMenuDrawer}
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/40 hover:bg-emerald-100/80 text-emerald-900 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800 shadow-sm transition-all font-bold text-xs group"
                >
                  <div className="flex items-center space-x-3">
                    <Landmark className="w-4 h-4 text-[#137a4d]" />
                    <span>Tehsildar & Revenue Officer Desk</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              {/* Clean Light / Dark Theme Switcher inside Drawer */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between px-1">
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400 flex items-center space-x-2">
                  {isDark ? <Moon className="w-4 h-4 text-sky-400" /> : <Sun className="w-4 h-4 text-amber-500" />}
                  <span>Display Theme</span>
                </span>
                <button
                  onClick={toggleTheme}
                  className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700 cursor-pointer transition-colors flex items-center space-x-1.5"
                >
                  <span>{isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}</span>
                </button>
              </div>

            </div>

            {/* Drawer Account & Logout Footer (Proper Website Design) */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur sticky bottom-0 z-20 space-y-3">
              {isAuthenticated && user ? (
                <>
                  {/* User Profile Card */}
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center space-x-3 overflow-hidden">
                      <img
                        src={user.avatar_url || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60'}
                        alt={user.full_name}
                        className="w-9 h-9 rounded-full object-cover ring-2 ring-[#137a4d] shrink-0"
                      />
                      <div className="overflow-hidden">
                        <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                          {user.full_name}
                        </div>
                        <div className="text-[10px] text-slate-500 truncate">
                          {user.email || `@${user.username}`}
                        </div>
                      </div>
                    </div>

                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase shrink-0 ${
                      isAdmin ? 'bg-purple-100 text-purple-700 border border-purple-200' : isOfficial ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' : 'bg-sky-100 text-sky-700 border border-sky-200'
                    }`}>
                      {isAdmin ? 'Admin' : isOfficial ? 'Official' : 'Citizen'}
                    </span>
                  </div>

                  {/* Clean Logout Button */}
                  <button
                    onClick={() => {
                      logout();
                      closeMenuDrawer();
                      navigate('/login');
                    }}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-rose-700 hover:text-rose-800 bg-rose-50 hover:bg-rose-100/80 border border-rose-200 hover:border-rose-300 transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-sm active:scale-[0.99]"
                    title="Sign Out of BhoomiShield"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>{isEn ? "Log Out of Account" : "खाते से लॉग आउट करें"}</span>
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={closeMenuDrawer}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-[#137a4d] hover:bg-[#0f633e] transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-md shadow-[#137a4d]/20"
                >
                  <LogIn className="w-4 h-4" />
                  <span>{isEn ? "Sign In to Your Account" : "अपने खाते में लॉग इन करें"}</span>
                </Link>
              )}

              <div className="text-center text-[10px] text-slate-400 font-medium">
                BhoomiShield National Land Governance Platform • DILRMP Compliant
              </div>
            </div>

          </div>
        </div>
      )}

      {/* User Profile & Account Settings Modal */}
      <UserProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
      />
    </>
  );
};
