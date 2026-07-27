import React from 'react';

interface DiyaGlowProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const DiyaGlow: React.FC<DiyaGlowProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {/* Background Glow */}
      <div className="absolute inset-0 bg-amber-500/40 rounded-full blur-md animate-pulse-glow" />

      {/* Diya Icon SVG */}
      <svg
        className={`${sizeClasses[size]} text-amber-400 relative z-10 animate-diya drop-shadow-[0_0_10px_rgba(245,158,11,0.8)]`}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Flame */}
        <path
          d="M32 6C32 6 22 20 22 28C22 33.5228 26.4772 38 32 38C37.5228 38 42 33.5228 42 28C42 20 32 6 32 6Z"
          fill="url(#flameGradient)"
        />
        <path
          d="M32 16C32 16 27 24 27 28C27 30.7614 29.2386 33 32 33C34.7614 33 37 30.7614 37 28C37 24 32 16 32 16Z"
          fill="#FFF7ED"
        />

        {/* Diya Base */}
        <path
          d="M12 40C12 40 16 54 32 54C48 54 52 40 52 40H12Z"
          fill="url(#brassGradient)"
          stroke="#F59E0B"
          strokeWidth="2"
        />
        <ellipse cx="32" cy="40" rx="20" ry="3" fill="#B45309" />

        <defs>
          <linearGradient id="flameGradient" x1="32" y1="6" x2="32" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF" />
            <stop offset="0.3" stopColor="#FACC15" />
            <stop offset="0.75" stopColor="#F97316" />
            <stop offset="1" stopColor="#DC2626" />
          </linearGradient>
          <linearGradient id="brassGradient" x1="12" y1="40" x2="52" y2="54" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FBBF24" />
            <stop offset="0.5" stopColor="#D97706" />
            <stop offset="1" stopColor="#78350F" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
