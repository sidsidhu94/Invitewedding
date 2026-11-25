import React from 'react';

/**
 * Authentic Kerala Nilavilakku (Traditional Bronze Temple Lamp) SVG
 * With multi-tier wicks, golden flame glows, and ornate brass carvings
 */
export const NilavilakkuIllustration = ({ className = "w-24 h-36", glowing = true }) => {
  return (
    <svg
      viewBox="0 0 120 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} filter drop-shadow-[0_4px_16px_rgba(212,175,55,0.4)]`}
    >
      <defs>
        {/* Rich Kerala Temple Bronze & Molten Brass Gradient */}
        <linearGradient id="keralaBrassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF3C4" />
          <stop offset="25%" stopColor="#E5C158" />
          <stop offset="55%" stopColor="#C59B27" />
          <stop offset="85%" stopColor="#8A6314" />
          <stop offset="100%" stopColor="#E5C158" />
        </linearGradient>

        {/* Deep Antique Bronze Shadow */}
        <linearGradient id="keralaBronzeDark" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5A3E09" />
          <stop offset="50%" stopColor="#A67C1E" />
          <stop offset="100%" stopColor="#5A3E09" />
        </linearGradient>

        {/* Flickering Holy Flame Gradient */}
        <linearGradient id="flameGrad" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#FF4D00" />
          <stop offset="40%" stopColor="#FF9900" />
          <stop offset="75%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>

        {/* Flame Halo Glow */}
        <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE066" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#FF9900" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FF9900" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Flame Halos */}
      {glowing && (
        <>
          <circle cx="60" cy="22" r="18" fill="url(#flameGlow)" className="animate-pulse" />
          <circle cx="28" cy="46" r="10" fill="url(#flameGlow)" className="animate-pulse" />
          <circle cx="92" cy="46" r="10" fill="url(#flameGlow)" className="animate-pulse" />
        </>
      )}

      {/* TOP FLAME (Main Center Wick) */}
      <g className={glowing ? "animate-[bounce_2s_infinite]" : ""}>
        <path
          d="M60 10 C57 16 54 22 56 26 C57.5 29 62.5 29 64 26 C66 22 63 16 60 10 Z"
          fill="url(#flameGrad)"
        />
        <path
          d="M60 14 C58.5 18 57 22 58.5 25 C59.5 26.5 60.5 26.5 61.5 25 C63 22 61.5 18 60 14 Z"
          fill="#FFFFFF"
          opacity="0.9"
        />
      </g>

      {/* LEFT WICK FLAME */}
      <path
        d="M28 38 C26 42 24 46 25 49 C26 51 30 51 31 49 C32 46 30 42 28 38 Z"
        fill="url(#flameGrad)"
      />

      {/* RIGHT WICK FLAME */}
      <path
        d="M92 38 C90 42 88 46 89 49 C90 51 94 51 95 49 C96 46 94 42 92 38 Z"
        fill="url(#flameGrad)"
      />

      {/* TOP CROWN (Thala) */}
      <path
        d="M60 26 L62 30 L58 30 Z"
        fill="url(#keralaBrassGrad)"
      />
      <ellipse cx="60" cy="31" rx="4" ry="2" fill="url(#keralaBrassGrad)" />

      {/* TOP OIL TRAY (Thattu) */}
      <path
        d="M20 48 Q60 56 100 48 Q98 52 90 54 Q60 60 30 54 Q22 52 20 48 Z"
        fill="url(#keralaBrassGrad)"
        stroke="#8A6314"
        strokeWidth="0.5"
      />
      {/* Tray Inner Rim & Spouts */}
      <ellipse cx="60" cy="48" rx="40" ry="4" fill="url(#keralaBronzeDark)" />
      <ellipse cx="60" cy="47.5" rx="36" ry="2.5" fill="#C59B27" />

      {/* UPPER NECK & RING MOLDINGS */}
      <path
        d="M54 55 Q60 56 66 55 L65 65 Q60 66 55 65 Z"
        fill="url(#keralaBrassGrad)"
      />
      {/* Ring 1 */}
      <ellipse cx="60" cy="65" rx="7" ry="2.5" fill="url(#keralaBrassGrad)" stroke="#8A6314" strokeWidth="0.5" />
      {/* Bead Ornament */}
      <circle cx="60" cy="72" r="6" fill="url(#keralaBrassGrad)" />
      <circle cx="60" cy="72" r="5" fill="url(#keralaBronzeDark)" />
      <circle cx="58" cy="70" r="1.5" fill="#FFF3C4" />
      {/* Ring 2 */}
      <ellipse cx="60" cy="79" rx="8" ry="3" fill="url(#keralaBrassGrad)" stroke="#8A6314" strokeWidth="0.5" />

      {/* CENTRAL STEM (Thandu) */}
      <path
        d="M55 80 L54 118 Q60 120 66 118 L65 80 Z"
        fill="url(#keralaBrassGrad)"
      />
      {/* Fluting highlights on stem */}
      <line x1="58" y1="82" x2="57.5" y2="116" stroke="#FFF3C4" strokeWidth="0.75" opacity="0.8" />
      <line x1="62" y1="82" x2="62.5" y2="116" stroke="#5A3E09" strokeWidth="0.75" opacity="0.6" />

      {/* LOWER NECK MOLDINGS */}
      <ellipse cx="60" cy="119" rx="10" ry="3" fill="url(#keralaBrassGrad)" stroke="#8A6314" strokeWidth="0.5" />
      <ellipse cx="60" cy="125" rx="13" ry="3.5" fill="url(#keralaBronzeDark)" />
      <ellipse cx="60" cy="124" rx="12" ry="2.5" fill="url(#keralaBrassGrad)" />

      {/* PEDESTAL BASE TRAY (Aadhaarathattu / Peetam) */}
      <path
        d="M32 138 Q60 144 88 138 L92 146 Q60 152 28 146 Z"
        fill="url(#keralaBrassGrad)"
        stroke="#8A6314"
        strokeWidth="0.5"
      />
      <ellipse cx="60" cy="138" rx="28" ry="4" fill="url(#keralaBronzeDark)" />

      {/* BOTTOM BELL PEDESTAL (Peetam Base) */}
      <path
        d="M35 146 Q30 162 18 168 Q60 174 102 168 Q90 162 85 146 Z"
        fill="url(#keralaBrassGrad)"
        stroke="#8A6314"
        strokeWidth="0.5"
      />
      {/* Base Rim Flutes & Rings */}
      <ellipse cx="60" cy="168" rx="42" ry="5" fill="url(#keralaBronzeDark)" />
      <ellipse cx="60" cy="166" rx="40" ry="3.5" fill="url(#keralaBrassGrad)" />

      {/* Traditional Base Carvings (Kasavu lotus petal notches) */}
      <path d="M26 166 Q30 160 34 166" stroke="#5A3E09" strokeWidth="1" fill="none" />
      <path d="M38 167 Q42 161 46 167" stroke="#5A3E09" strokeWidth="1" fill="none" />
      <path d="M50 168 Q54 162 58 168" stroke="#5A3E09" strokeWidth="1" fill="none" />
      <path d="M62 168 Q66 162 70 168" stroke="#5A3E09" strokeWidth="1" fill="none" />
      <path d="M74 167 Q78 161 82 167" stroke="#5A3E09" strokeWidth="1" fill="none" />
      <path d="M86 166 Q90 160 94 166" stroke="#5A3E09" strokeWidth="1" fill="none" />

      {/* Auspicious Jewel Tilak on Lamp Base */}
      <ellipse cx="60" cy="155" rx="3.5" ry="3.5" fill="#C084FC" />
      <circle cx="60" cy="155" r="1.5" fill="#FAF5FF" />
    </svg>
  );
};

export default NilavilakkuIllustration;
