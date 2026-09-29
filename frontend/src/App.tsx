import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { LandingPage } from './pages/LandingPage';
import { AuthPage } from './pages/AuthPage';
import { HomePage } from './pages/HomePage';
import { LandSearchPage } from './pages/LandSearchPage';
import { LandProfilePage } from './pages/LandProfilePage';
import { CheckBeforeYouBuy } from './pages/CheckBeforeYouBuy';
import { MutationTrackerPage } from './pages/MutationTrackerPage';
import { StampDutyCalculatorPage } from './pages/StampDutyCalculatorPage';
import { MyBhoomiVaultPage } from './pages/MyBhoomiVaultPage';
import { ReportVerificationPage } from './pages/ReportVerificationPage';
import { AdminDashboard } from './pages/AdminDashboard';
import { LegalAdvisorPage } from './pages/LegalAdvisorPage';
import { GrievancePage } from './pages/GrievancePage';
import { BhuAadhaarHubPage } from './pages/BhuAadhaarHubPage';
import { ECourtsLitigationPage } from './pages/ECourtsLitigationPage';
import { StatePortalsDirectoryPage } from './pages/StatePortalsDirectoryPage';
import { JharbhoomiDirectoryPage } from './pages/JharbhoomiDirectoryPage';

import { OfficialWorkspacePage } from './pages/OfficialWorkspacePage';
import { MaintenanceBanner } from './components/MaintenanceBanner';

export const AppContent: React.FC = () => {
  const { isAuthenticated, isAdmin, user } = useAuth();
  const [lang, setLang] = useState<'en' | 'hi'>('en');
  const [userRole, setUserRole] = useState<string>('CITIZEN');

  const [isMaintenanceActive, setIsMaintenanceActive] = useState<boolean>(() => {
    return localStorage.getItem('bhoomi_maintenance_mode') === 'true';
  });

  useEffect(() => {
    const checkMaintenance = () => {
      setIsMaintenanceActive(localStorage.getItem('bhoomi_maintenance_mode') === 'true');
    };
    window.addEventListener('storage', checkMaintenance);
    window.addEventListener('focus', checkMaintenance);
    return () => {
      window.removeEventListener('storage', checkMaintenance);
      window.removeEventListener('focus', checkMaintenance);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col transition-colors duration-300 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        <MaintenanceBanner />
        {isAuthenticated && <Navbar />}

        <main className="flex-1">
          <Routes>
            {/* Public Landing & Authentication Routes */}
            <Route path="/" element={isAuthenticated ? <HomePage lang={lang} /> : <LandingPage />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/auth" element={<LandingPage />} />
            <Route path="/search" element={<LandSearchPage lang={lang} />} />
            <Route path="/land/:landIdentityId" element={<LandProfilePage lang={lang} />} />
            <Route path="/legal-advisor" element={<LegalAdvisorPage />} />
            <Route path="/complaints" element={<GrievancePage />} />
            <Route path="/check-buy" element={<CheckBeforeYouBuy />} />
            <Route path="/track-mutation" element={<MutationTrackerPage />} />
            <Route path="/stamp-duty" element={<StampDutyCalculatorPage />} />
            <Route path="/valuation" element={<StampDutyCalculatorPage />} />
            <Route path="/vault" element={<MyBhoomiVaultPage />} />
            <Route path="/verify" element={<ReportVerificationPage />} />
            <Route path="/verify/:reportId" element={<ReportVerificationPage />} />
            
            {/* Administrative & Revenue Officer Desks */}
            <Route path="/admin" element={<AdminDashboard userRole={user?.role || userRole} />} />
            <Route path="/official" element={<OfficialWorkspacePage />} />
            <Route path="/tehsildar" element={<OfficialWorkspacePage />} />
            <Route path="/officer-workspace" element={<OfficialWorkspacePage />} />
            
            {/* National & State Directory Portals */}
            <Route path="/bhu-aadhaar" element={<BhuAadhaarHubPage />} />
            <Route path="/ecourts" element={<ECourtsLitigationPage />} />
            <Route path="/state-portals" element={<StatePortalsDirectoryPage />} />
            <Route path="/jharbhoomi" element={<JharbhoomiDirectoryPage />} />

            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <LanguageProvider>
        <ThemeProvider>
          <AppContent />
        </ThemeProvider>
      </LanguageProvider>
    </AuthProvider>
  );
};

export default App;
