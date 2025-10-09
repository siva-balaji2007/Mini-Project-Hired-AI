import React from 'react';

interface BeamBackgroundProps {
  className?: string;
}

const BeamBackground: React.FC<BeamBackgroundProps> = ({ className = '' }) => {
  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Animated beam lines */}
      <div className="absolute inset-0">
        {/* Horizontal beams */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse delay-1000" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent animate-pulse delay-500" />

        {/* Diagonal beams */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent animate-pulse delay-300" />
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/8 to-transparent animate-pulse delay-700" />
          <div className="absolute top-0 left-1/2 w-px h-2/3 bg-gradient-to-b from-transparent via-white/12 to-transparent animate-pulse delay-1200" />
        </div>

        {/* Moving light beams */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-full w-1/3 h-px bg-gradient-to-r from-white/0 via-white/30 to-white/0 animate-beam-horizontal" />
          <div className="absolute top-2/3 -right-full w-1/3 h-px bg-gradient-to-l from-white/0 via-white/25 to-white/0 animate-beam-horizontal-reverse" />
          <div className="absolute top-1/2 -left-full w-px h-1/3 bg-gradient-to-b from-white/0 via-white/20 to-white/0 animate-beam-vertical" />
          <div className="absolute bottom-1/4 -right-full w-px h-1/3 bg-gradient-to-t from-white/0 via-white/15 to-white/0 animate-beam-vertical-reverse" />
        </div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>
    </div>
  );
};

export default BeamBackground;
