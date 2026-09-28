import React from 'react';
import { Shield, Trees } from 'lucide-react';

interface BhoomiLogoProps {
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'dark' | 'light';
}

export const BhoomiLogo: React.FC<BhoomiLogoProps> = ({ 
  showTagline = true, 
  size = 'md',
  theme = 'light'
}) => {
  const isDark = theme === 'dark';

  return (
    <div className="flex items-center space-x-3">
      {/* Green Emblem Shield with Land Contour Accent */}
      <div className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-800 text-white shadow-md shadow-emerald-700/20 shrink-0 border border-emerald-400/30">
        <Shield className="w-7 h-7 text-white fill-emerald-500/30" />
        <Trees className="w-4 h-4 text-emerald-100 absolute" />
      </div>

      <div>
        <div className="flex items-baseline space-x-0.5">
          <span className={`text-xl sm:text-2xl font-black tracking-tight font-sans ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Bhoomi
          </span>
          <span className="text-xl sm:text-2xl font-black tracking-tight text-[#137a4d]">
            Shield
          </span>
        </div>
        {showTagline && (
          <p className={`text-[10px] sm:text-[11px] font-medium tracking-tight -mt-0.5 ${isDark ? 'text-emerald-300' : 'text-slate-500'}`}>
            Secure Land Information for a Transparent Tomorrow
          </p>
        )}
      </div>
    </div>
  );
};
