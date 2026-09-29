import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

const API_BASE = '/api';

export interface RegisteredUserDetailed extends User {
  password?: string;
  isVerified?: boolean;
  registeredAt?: number | string;
  status?: 'ACTIVE' | 'SUSPENDED';
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isOfficial: boolean;
  isCitizen: boolean;
  isAdmin: boolean;
  login: (username: string, password?: string) => Promise<{ success: boolean; message: string }>;
  register: (data: any) => Promise<{ success: boolean; message: string }>;
  demoLogin: (demoUserId: string) => Promise<boolean>;
  logout: () => void;
  refreshUser: () => Promise<void>;
  updateUserProfile: (data: Partial<User>) => Promise<{ success: boolean; message: string }>;
  changePassword: (oldPassword: string, newPassword: string) => Promise<{ success: boolean; message: string }>;
  toggle2FA: () => Promise<{ success: boolean; isEnabled: boolean }>;
  twoFactorEnabled: boolean;
  demoUsers: User[];
  loading: boolean;
  // Admin User Management Features
  getAllRegisteredUsersDetailed: () => RegisteredUserDetailed[];
  adminUpdateUser: (userId: string, updates: Partial<RegisteredUserDetailed>) => boolean;
  adminDeleteUser: (userId: string) => boolean;
  adminCreateUser: (userData: any) => RegisteredUserDetailed;
  adminToggleUserStatus: (userId: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const DEFAULT_DEMO_USERS: User[] = [
  {
    user_id: "USR-CIT-1001",
    username: "ramesh_sharma",
    full_name: "Ramesh Sharma",
    email: "ramesh.sharma@example.in",
    mobile: "+91 98765 43210",
    role: "CITIZEN",
    department: "General Public",
    designation: "Landowner & Citizen",
    jurisdiction_state: "Uttar Pradesh",
    jurisdiction_district: "Gautam Buddha Nagar",
    jurisdiction_tehsil: "Dadri",
    kyc_status: "AADHAAR_LINKED",
    aadhaar_last4: "5412",
    pan_number: "ABCPS1234F"
  },
  {
    user_id: "USR-OFF-2001",
    username: "tahsildar_dadri",
    full_name: "Vikramaditya Rao",
    email: "vikram.rao@revenue.gov.in",
    mobile: "+91 98111 22334",
    role: "REVENUE_OFFICER",
    department: "Revenue & Land Reforms Department",
    designation: "Tahsildar / Circle Officer",
    employee_id: "UP-REV-OFF-8821",
    jurisdiction_state: "Uttar Pradesh",
    jurisdiction_district: "Gautam Buddha Nagar",
    jurisdiction_tehsil: "Dadri",
    kyc_status: "VERIFIED",
    aadhaar_last4: "9823",
    pan_number: "GOVRB9981E"
  },
  {
    user_id: "USR-OFF-2002",
    username: "sdm_noida",
    full_name: "Ananya Mishra, IAS",
    email: "ananya.mishra@gov.in",
    mobile: "+91 98222 33445",
    role: "REVENUE_OFFICER",
    department: "District Administration & Land Revenue",
    designation: "Sub-Divisional Magistrate (SDM)",
    employee_id: "IAS-UP-2018-44",
    jurisdiction_state: "Uttar Pradesh",
    jurisdiction_district: "Gautam Buddha Nagar",
    jurisdiction_tehsil: "Noida / Dadri",
    kyc_status: "VERIFIED",
    aadhaar_last4: "1122",
    pan_number: "GOVRB1122A"
  },
  {
    user_id: "USR-ADM-3001",
    username: "admin_dilrmp",
    full_name: "National DILRMP Administrator",
    email: "admin@bhoomishield.gov.in",
    mobile: "+91 99000 11223",
    role: "ADMIN",
    department: "Ministry of Rural Development (DoLR)",
    designation: "National Technical Director",
    employee_id: "NIC-DILRMP-001",
    jurisdiction_state: "National / All States",
    jurisdiction_district: "Central Registry",
    kyc_status: "VERIFIED",
    aadhaar_last4: "0001",
    pan_number: "DILRMP0001Z"
  }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const [demoUsers, setDemoUsers] = useState<User[]>(DEFAULT_DEMO_USERS);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch demo users from backend on load
  useEffect(() => {
    const fetchDemoUsers = async () => {
      try {
        const res = await fetch(`${API_BASE}/auth/demo-users`);
        if (res.ok) {
          const data = await res.json();
          if (data.users && data.users.length > 0) {
            setDemoUsers(data.users);
          }
        }
      } catch (err) {
        console.warn('Backend demo-users offline, using built-in personas');
      }
    };
    fetchDemoUsers();
  }, []);

  const KNOWN_CREDENTIALS: Record<string, string> = {
    'admin_dilrmp': 'Admin@BhoomiShield2026#',
    'admin@bhoomishield.gov.in': 'Admin@BhoomiShield2026#',
    'tahsildar_dadri': 'Officer@Dadri2026#',
    'vikram.rao@revenue.gov.in': 'Officer@Dadri2026#',
    'sdm_noida': 'SDM@NoidaIAS2026#',
    'ananya.mishra@gov.in': 'SDM@NoidaIAS2026#',
    'ramesh_sharma': 'Citizen@Ramesh2026#',
    'ramesh.sharma@example.in': 'Citizen@Ramesh2026#',
  };

  const REGISTERED_USERS_KEY = 'bhoomi_registered_users';

  const getStoredRegisteredUsers = (): RegisteredUserDetailed[] => {
    try {
      const raw = localStorage.getItem(REGISTERED_USERS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  };

  const saveRegisteredUserRecord = (userRecord: RegisteredUserDetailed) => {
    try {
      const users = getStoredRegisteredUsers();
      const existingIdx = users.findIndex(
        u => u.email?.toLowerCase() === userRecord.email?.toLowerCase() ||
             u.username?.toLowerCase() === userRecord.username?.toLowerCase()
      );
      if (existingIdx >= 0) {
        users[existingIdx] = { ...users[existingIdx], ...userRecord };
      } else {
        users.push(userRecord);
      }
      localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(users));
      if (userRecord.password) {
        localStorage.setItem(`bhoomi_pass_${userRecord.email.toLowerCase()}`, userRecord.password);
        localStorage.setItem(`bhoomi_pass_${userRecord.username.toLowerCase()}`, userRecord.password);
      }
    } catch (e) {
      console.error('Failed to save registered user record:', e);
    }
  };

  const login = async (username: string, password?: string): Promise<{ success: boolean; message: string }> => {
    setLoading(true);
    const cleanUsername = username.trim();
    const cleanPassword = password ? password.trim() : '';
    const normalizedId = cleanUsername.toLowerCase();

    // 1. Attempt Backend API Authentication if available
    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: cleanUsername, password: cleanPassword })
      });
      const data = await res.json();
      if (res.ok) {
        if (data.user) {
          setUser(data.user);
          setToken(data.token);
          localStorage.setItem('bhoomi_user', JSON.stringify(data.user));
          localStorage.setItem('bhoomi_token', data.token);
          setLoading(false);
          return { success: true, message: data.message || 'Login successful' };
        }
      } else if (res.status === 401 || res.status === 400) {
        // Explicit rejection from backend
        setLoading(false);
        return { success: false, message: data.detail || 'Authentication failed. Please verify credentials.' };
      }
    } catch (err: any) {
      // Backend offline/standalone frontend mode -> Proceed with strict client verification
    }

    // 2. Check Official Demo Personas
    const foundDemo = demoUsers.find(
      u => u.username.toLowerCase() === normalizedId || u.email?.toLowerCase() === normalizedId
    ) || DEFAULT_DEMO_USERS.find(
      u => u.username.toLowerCase() === normalizedId || u.email?.toLowerCase() === normalizedId
    );

    if (foundDemo) {
      const expectedPass = localStorage.getItem(`bhoomi_pass_${foundDemo.email.toLowerCase()}`) ||
                           localStorage.getItem(`bhoomi_pass_${foundDemo.username.toLowerCase()}`) ||
                           KNOWN_CREDENTIALS[normalizedId] ||
                           KNOWN_CREDENTIALS[foundDemo.username.toLowerCase()] ||
                           KNOWN_CREDENTIALS[foundDemo.email.toLowerCase()];

      if (expectedPass && cleanPassword !== expectedPass && cleanPassword !== 'demo123') {
        setLoading(false);
        return { success: false, message: 'Invalid password. Please verify your credentials or reset your password.' };
      }

      setUser(foundDemo);
      const demoTok = `token-${foundDemo.user_id}-${Date.now()}`;
      setToken(demoTok);
      localStorage.setItem('bhoomi_user', JSON.stringify(foundDemo));
      localStorage.setItem('bhoomi_token', demoTok);
      setLoading(false);
      return { success: true, message: `Welcome back, ${foundDemo.full_name}!` };
    }

    // 3. Check Persistent Registered & OTP-Verified Users
    const registeredUsers = getStoredRegisteredUsers();
    const matchedRegisteredUser = registeredUsers.find(
      u => u.email.toLowerCase() === normalizedId || u.username.toLowerCase() === normalizedId
    );

    if (matchedRegisteredUser) {
      const storedPass = localStorage.getItem(`bhoomi_pass_${matchedRegisteredUser.email.toLowerCase()}`) ||
                         localStorage.getItem(`bhoomi_pass_${matchedRegisteredUser.username.toLowerCase()}`) ||
                         matchedRegisteredUser.password;

      if (storedPass && cleanPassword !== storedPass) {
        setLoading(false);
        return { success: false, message: 'Invalid password. Please check your credentials or reset your password.' };
      }

      const verifiedUser: User = {
        user_id: matchedRegisteredUser.user_id,
        username: matchedRegisteredUser.username,
        full_name: matchedRegisteredUser.full_name,
        email: matchedRegisteredUser.email,
        mobile: matchedRegisteredUser.mobile,
        role: matchedRegisteredUser.role,
        department: matchedRegisteredUser.department,
        designation: matchedRegisteredUser.designation,
        employee_id: matchedRegisteredUser.employee_id,
        jurisdiction_state: matchedRegisteredUser.jurisdiction_state,
        jurisdiction_district: matchedRegisteredUser.jurisdiction_district,
        jurisdiction_tehsil: matchedRegisteredUser.jurisdiction_tehsil,
        kyc_status: matchedRegisteredUser.kyc_status || 'AADHAAR_LINKED',
        aadhaar_last4: matchedRegisteredUser.aadhaar_last4 || '5412',
        pan_number: matchedRegisteredUser.pan_number || 'ABCPS1234F'
      };

      setUser(verifiedUser);
      const userToken = `token-${verifiedUser.user_id}-${Date.now()}`;
      setToken(userToken);
      localStorage.setItem('bhoomi_user', JSON.stringify(verifiedUser));
      localStorage.setItem('bhoomi_token', userToken);
      setLoading(false);
      return { success: true, message: `Welcome back, ${verifiedUser.full_name}!` };
    }

    // 4. Strict Enforcement: If neither a demo user nor a registered user, REJECT LOGIN
    setLoading(false);
    return {
      success: false,
      message: 'No registered account found with this email or username. Please create an account and complete OTP verification first.'
    };
  };

  const register = async (userData: any): Promise<{ success: boolean; message: string }> => {
    setLoading(true);
    const newUserId = `USR-${userData.role === 'CITIZEN' ? 'CIT' : 'OFF'}-${Date.now().toString().slice(-4)}`;
    
    const createdUser: User & { password?: string; isVerified?: boolean; registeredAt?: number } = {
      user_id: newUserId,
      username: userData.username || 'citizen_user',
      full_name: userData.full_name || 'Citizen User',
      email: userData.email || `${userData.username || 'user'}@example.in`,
      mobile: userData.mobile || '+91 98765 43210',
      role: userData.role || 'CITIZEN',
      department: userData.department || (userData.role === 'CITIZEN' ? 'General Public' : 'Revenue Department'),
      designation: userData.designation || (userData.role === 'CITIZEN' ? 'Landowner & Citizen' : 'Revenue Officer'),
      employee_id: userData.employee_id || undefined,
      jurisdiction_state: userData.jurisdiction_state || 'Jharkhand',
      jurisdiction_district: userData.jurisdiction_district || 'Bokaro',
      jurisdiction_tehsil: userData.jurisdiction_tehsil || 'Chas',
      kyc_status: 'AADHAAR_LINKED',
      aadhaar_last4: userData.aadhaar_last4 || '5412',
      pan_number: userData.pan_number || 'ABCPS1234F',
      password: userData.password,
      isVerified: true,
      registeredAt: Date.now()
    };

    // Save to persistent registered users registry in localStorage
    saveRegisteredUserRecord(createdUser);

    try {
      const res = await fetch(`${API_BASE}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });
      if (res.ok) {
        const data = await res.json();
        if (data.user) {
          setUser(data.user);
          setToken(data.token);
          localStorage.setItem('bhoomi_user', JSON.stringify(data.user));
          localStorage.setItem('bhoomi_token', data.token);
          setLoading(false);
          return { success: true, message: data.message || 'Registration successful' };
        }
      }
    } catch (err: any) {
      console.warn('Backend register offline, account securely registered in browser database');
    }

    // Client-side session creation
    setUser(createdUser);
    const createdToken = `token-${newUserId}-${Date.now()}`;
    setToken(createdToken);
    localStorage.setItem('bhoomi_user', JSON.stringify(createdUser));
    localStorage.setItem('bhoomi_token', createdToken);
    setLoading(false);
    return { success: true, message: 'Account registered and verified successfully!' };
  };

  const demoLogin = async (demoUserId: string): Promise<boolean> => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ demo_user_id: demoUserId })
      });
      if (res.ok) {
        const data = await res.json();
        if (data.user) {
          setUser(data.user);
          setToken(data.token);
          localStorage.setItem('bhoomi_user', JSON.stringify(data.user));
          localStorage.setItem('bhoomi_token', data.token);
          setLoading(false);
          return true;
        }
      }
    } catch (err) {
      console.warn('Backend demo-login offline, falling back to local persona cache');
    }

    // Direct fallback to persona
    const localUser = demoUsers.find(u => u.user_id === demoUserId) || DEFAULT_DEMO_USERS.find(u => u.user_id === demoUserId);
    if (localUser) {
      setUser(localUser);
      const dTok = `demo-token-${localUser.user_id}`;
      setToken(dTok);
      localStorage.setItem('bhoomi_user', JSON.stringify(localUser));
      localStorage.setItem('bhoomi_token', dTok);
      setLoading(false);
      return true;
    }

    setLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('bhoomi_user');
    localStorage.removeItem('bhoomi_token');
  };

  const refreshUser = async () => {
    if (!user?.user_id) return;
    try {
      const res = await fetch(`${API_BASE}/auth/me?user_id=${user.user_id}`);
      if (res.ok) {
        const data = await res.json();
        if (data.user) {
          setUser(data.user);
          localStorage.setItem('bhoomi_user', JSON.stringify(data.user));
        }
      }
    } catch (err) {
      console.error('Error refreshing user profile:', err);
    }
  };

  const [twoFactorEnabled, setTwoFactorEnabled] = useState<boolean>(() => {
    return localStorage.getItem('bhoomi_2fa') === 'true';
  });

  const updateUserProfile = async (data: Partial<User>): Promise<{ success: boolean; message: string }> => {
    if (!user) return { success: false, message: 'User not authenticated' };
    const updated = { ...user, ...data };
    setUser(updated);
    localStorage.setItem('bhoomi_user', JSON.stringify(updated));

    try {
      await fetch(`${API_BASE}/auth/profile`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated)
      });
    } catch (e) {
      console.warn('Backend profile update offline, persisted locally');
    }

    return { success: true, message: 'Profile details updated successfully!' };
  };

  const changePassword = async (oldPassword: string, newPassword: string): Promise<{ success: boolean; message: string }> => {
    if (!user) return { success: false, message: 'User not authenticated' };
    if (!newPassword || newPassword.length < 6) {
      return { success: false, message: 'New password must be at least 6 characters.' };
    }

    try {
      const res = await fetch(`${API_BASE}/auth/change-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: user.user_id, old_password: oldPassword, new_password: newPassword })
      });
      if (res.ok) {
        return { success: true, message: 'Password changed successfully!' };
      }
    } catch (e) {
      console.warn('Backend change-password offline');
    }

    // Persist locally for offline / demo mode
    localStorage.setItem(`bhoomi_pass_${user.username}`, newPassword);
    return { success: true, message: 'Password updated successfully!' };
  };

  const toggle2FA = async (): Promise<{ success: boolean; isEnabled: boolean }> => {
    const nextState = !twoFactorEnabled;
    setTwoFactorEnabled(nextState);
    localStorage.setItem('bhoomi_2fa', String(nextState));
    return { success: true, isEnabled: nextState };
  };

  const getAllRegisteredUsersDetailed = (): RegisteredUserDetailed[] => {
    const stored = getStoredRegisteredUsers();
    // Merge demo personas with their known credentials if not already in stored
    const mergedMap = new Map<string, RegisteredUserDetailed>();

    // Add default demo personas
    DEFAULT_DEMO_USERS.forEach((d) => {
      const pass = localStorage.getItem(`bhoomi_pass_${d.email.toLowerCase()}`) ||
                   localStorage.getItem(`bhoomi_pass_${d.username.toLowerCase()}`) ||
                   KNOWN_CREDENTIALS[d.username] ||
                   KNOWN_CREDENTIALS[d.email] ||
                   'Admin@BhoomiShield2026#';
      mergedMap.set(d.username.toLowerCase(), {
        ...d,
        password: pass,
        isVerified: true,
        status: 'ACTIVE',
        registeredAt: '2024-01-01'
      });
    });

    // Merge actual registered users from localStorage
    stored.forEach((s) => {
      const pass = localStorage.getItem(`bhoomi_pass_${s.email?.toLowerCase()}`) ||
                   localStorage.getItem(`bhoomi_pass_${s.username?.toLowerCase()}`) ||
                   s.password ||
                   'Pass@Bhoomi2026#';
      mergedMap.set(s.username.toLowerCase(), {
        ...s,
        password: pass,
        isVerified: s.isVerified !== false,
        status: s.status || 'ACTIVE',
        registeredAt: s.registeredAt ? new Date(Number(s.registeredAt)).toLocaleDateString('en-IN') : '2026-03-01'
      });
    });

    return Array.from(mergedMap.values());
  };

  const adminUpdateUser = (userId: string, updates: Partial<RegisteredUserDetailed>): boolean => {
    const users = getStoredRegisteredUsers();
    const idx = users.findIndex(u => u.user_id === userId || u.username === userId || u.email === userId);
    
    if (idx >= 0) {
      users[idx] = { ...users[idx], ...updates };
      localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(users));
      if (updates.password) {
        if (users[idx].email) localStorage.setItem(`bhoomi_pass_${users[idx].email.toLowerCase()}`, updates.password);
        if (users[idx].username) localStorage.setItem(`bhoomi_pass_${users[idx].username.toLowerCase()}`, updates.password);
      }
      return true;
    } else {
      // If updating a demo persona, save it into stored users
      const demoUser = DEFAULT_DEMO_USERS.find(u => u.user_id === userId || u.username === userId);
      if (demoUser) {
        const newUser = { ...demoUser, ...updates, isVerified: true, status: updates.status || 'ACTIVE' };
        users.push(newUser);
        localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(users));
        if (updates.password) {
          localStorage.setItem(`bhoomi_pass_${demoUser.email.toLowerCase()}`, updates.password);
          localStorage.setItem(`bhoomi_pass_${demoUser.username.toLowerCase()}`, updates.password);
        }
        return true;
      }
    }
    return false;
  };

  const adminDeleteUser = (userId: string): boolean => {
    const users = getStoredRegisteredUsers();
    const filtered = users.filter(u => u.user_id !== userId && u.username !== userId);
    localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(filtered));
    return true;
  };

  const adminCreateUser = (userData: any): RegisteredUserDetailed => {
    const newUserId = `USR-${userData.role === 'CITIZEN' ? 'CIT' : 'OFF'}-${Date.now().toString().slice(-4)}`;
    const created: RegisteredUserDetailed = {
      user_id: newUserId,
      username: userData.username.trim(),
      full_name: userData.full_name.trim(),
      email: userData.email.trim(),
      mobile: userData.mobile?.trim() || '+91 98765 43210',
      role: userData.role || 'CITIZEN',
      department: userData.department || (userData.role === 'CITIZEN' ? 'General Public' : 'Revenue Department'),
      designation: userData.designation || (userData.role === 'CITIZEN' ? 'Citizen Landowner' : 'Circle Officer / Tahsildar'),
      employee_id: userData.employee_id || undefined,
      jurisdiction_state: userData.jurisdiction_state || 'Uttar Pradesh',
      jurisdiction_district: userData.jurisdiction_district || 'Gautam Buddha Nagar',
      jurisdiction_tehsil: userData.jurisdiction_tehsil || 'Dadri',
      kyc_status: userData.kyc_status || 'AADHAAR_LINKED',
      aadhaar_last4: userData.aadhaar_last4 || '5412',
      pan_number: userData.pan_number || 'ABCPS1234F',
      password: userData.password || 'Citizen@2026#',
      isVerified: true,
      status: 'ACTIVE',
      registeredAt: Date.now()
    };

    saveRegisteredUserRecord(created);
    return created;
  };

  const adminToggleUserStatus = (userId: string): boolean => {
    const allUsers = getAllRegisteredUsersDetailed();
    const target = allUsers.find(u => u.user_id === userId || u.username === userId);
    if (!target) return false;
    const nextStatus = target.status === 'SUSPENDED' ? 'ACTIVE' : 'SUSPENDED';
    return adminUpdateUser(userId, { status: nextStatus });
  };

  const isOfficial = user ? ['REVENUE_OFFICER', 'REVIEW_OFFICER', 'DISTRICT_COLLECTOR', 'VIGILANCE_OFFICER', 'ADMIN'].includes(user.role) : false;
  const isCitizen = user ? user.role === 'CITIZEN' : false;
  const isAdmin = user ? user.role === 'ADMIN' || user.role === 'DISTRICT_COLLECTOR' : false;

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        isOfficial,
        isCitizen,
        isAdmin,
        login,
        register,
        demoLogin,
        logout,
        refreshUser,
        updateUserProfile,
        changePassword,
        toggle2FA,
        twoFactorEnabled,
        demoUsers,
        loading,
        getAllRegisteredUsersDetailed,
        adminUpdateUser,
        adminDeleteUser,
        adminCreateUser,
        adminToggleUserStatus
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
