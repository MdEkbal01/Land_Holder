import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { 
  ShieldCheck, Lock, User as UserIcon, Mail, Phone, Eye, EyeOff, 
  ArrowRight, KeyRound, Sparkles, Building2, Scale, Landmark, 
  CheckCircle2, AlertCircle, HelpCircle, Shield, ArrowLeft, RefreshCw,
  UserPlus, Compass, Globe, FileCheck
} from 'lucide-react';
import { LoginPage } from './LoginPage';
import { RegisterPage } from './RegisterPage';
import { ForgotPasswordPage } from './ForgotPasswordPage';

export const AuthPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const modeParam = searchParams.get('mode');

  // Active view: 'login' | 'register' | 'forgot'
  const [view, setView] = useState<'login' | 'register' | 'forgot'>(() => {
    if (modeParam === 'register') return 'register';
    if (modeParam === 'forgot') return 'forgot';
    return 'login';
  });

  useEffect(() => {
    if (modeParam === 'register') setView('register');
    else if (modeParam === 'forgot') setView('forgot');
    else if (modeParam === 'login') setView('login');
  }, [modeParam]);

  if (view === 'register') {
    return <RegisterPage />;
  }

  if (view === 'forgot') {
    return <ForgotPasswordPage />;
  }

  return <LoginPage />;
};
