import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'light' | 'dark';

export interface ThemeOption {
  id: ThemeMode;
  name: string;
  nativeName: string;
  icon: string;
  description: string;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'light',
    name: 'Light Mode',
    nativeName: 'लाइट मोड',
    icon: '☀️',
    description: 'Crisp daylight mode'
  },
  {
    id: 'dark',
    name: 'Dark Mode',
    nativeName: 'डार्क मोड',
    icon: '🌙',
    description: 'Classic dark mode'
  }
];

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  toggleDarkMode: () => void;
  isDark: boolean;
  currentThemeInfo: ThemeOption;
  themes: ThemeOption[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('bhoomishield_theme') as ThemeMode;
    if (saved && (saved === 'dark' || saved === 'light')) {
      return saved;
    }
    return 'light'; // Default to clean light mode
  });

  useEffect(() => {
    localStorage.setItem('bhoomishield_theme', theme);
    const root = document.documentElement;

    // Clean up extra theme classes
    root.classList.remove('theme-emerald', 'theme-cyber', 'theme-property', 'theme-light');

    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [theme]);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const currentThemeInfo = THEME_OPTIONS.find((t) => t.id === theme) || THEME_OPTIONS[0];

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        toggleDarkMode: toggleTheme,
        isDark: theme === 'dark',
        currentThemeInfo,
        themes: THEME_OPTIONS
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
