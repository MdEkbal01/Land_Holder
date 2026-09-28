import React, { useState } from 'react';
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

export const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [lang, setLang] = useState<'en' | 'hi'>('en');
  const [userRole, setUserRole] = useState<string>('CITIZEN');

  return (
    <Router>
      <div className="min-h-screen flex flex-col transition-colors duration-300 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        {isAuthenticated && <Navbar />}

        <main className="flex-1">
          <Routes>
            {/* Authentication Routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/auth" element={<AuthPage />} />

            {/* Core Application Routes */}
            <Route path="/" element={isAuthenticated ? <HomePage lang={lang} /> : <Navigate to="/login" />} />
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
            <Route path="/admin" element={<AdminDashboard userRole={userRole} />} />
            
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
