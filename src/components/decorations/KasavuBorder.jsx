import React from 'react';

/**
 * Traditional Kerala Kasavu Zari Border Pattern
 * Featuring iconic Gopuram / Chevron motifs seen in Kerala Kasavu Mundu & Sarees
 */
export const KasavuBorder = ({ className = "w-full h-4" }) => {
  return (
    <div className={`overflow-hidden flex items-center justify-center ${className}`}>
      <svg
        className="w-full h-full text-[#D4AF37]"
        viewBox="0 0 600 20"
        preserveAspectRatio="repeat-x"
        fill="currentColor"
      >
        <pattern id="kasavuZari" x="0" y="0" width="30" height="20" patternUnits="userSpaceOnUse">
          {/* Top Lavender Zari Thread */}
          <line x1="0" y1="1" x2="30" y2="1" stroke="#FAF5FF" strokeWidth="1" />
          <line x1="0" y1="3" x2="30" y2="3" stroke="#C084FC" strokeWidth="1" />

          {/* Central Gopuram / Temple Chevron Weave with Lavender Core */}
          <path d="M15 4 L22 14 L8 14 Z" fill="#D8B4FE" />
          <path d="M15 7 L19 13 L11 13 Z" fill="#9333EA" opacity="0.8" />
          <circle cx="15" cy="10" r="1.2" fill="#FAF5FF" />

          {/* Side Diamond Accent */}
          <polygon points="0,9 3,6 6,9 3,12" fill="#C084FC" />
          <polygon points="30,9 27,6 24,9 27,12" fill="#C084FC" />

          {/* Bottom Lavender Zari Thread */}
          <line x1="0" y1="17" x2="30" y2="17" stroke="#C084FC" strokeWidth="1" />
          <line x1="0" y1="19" x2="30" y2="19" stroke="#FAF5FF" strokeWidth="1" />
        </pattern>
        <rect x="0" y="0" width="100%" height="20" fill="url(#kasavuZari)" />
      </svg>
    </div>
  );
};

export default KasavuBorder;
