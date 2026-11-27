import React, { createContext, useContext } from 'react';

export const BUTTER_YELLOW_STYLE = {
  id: 'butter-yellow',
  name: 'Butter Yellow & Dark Brown',
  badge: 'Royal Sandal & Butter Ivory',
  tagline: 'Warm Butter Yellow Card with Deep Roasted Coffee Dark Brown Typography',
  cardBg: 'bg-[#FFFDF0]',
  cardBorder: 'border-2 border-[#D97706]/40 shadow-[0_20px_50px_rgba(74,37,8,0.1),_0_0_20px_rgba(217,119,6,0.1)]',
  innerRim: 'border border-[#D97706]/25 bg-[#FFFDF0]',
  cardSurface: 'bg-[#FFFDF0] text-[#2C1405]',
  // Typography
  titleGradient: 'text-transparent bg-clip-text bg-gradient-to-r from-[#2C1405] via-[#4A2508] to-[#783E12]',
  titleSolid: 'text-[#2C1405]',
  subtitleScript: 'text-[#783E12]',
  bodyText: 'text-[#2C1405]',
  mutedText: 'text-[#5C2E0B]',
  subtleLabel: 'text-[#854D0E]',
  accentBadge: 'bg-[#FEF3C7] border border-[#D97706]/35 text-[#4A2508]',
  highlightBox: 'bg-[#FEF9E7] border border-[#D97706]/30 text-[#2C1405]',
  clockIcon: 'text-[#B45309]',
  divider: 'bg-[#D97706]/35',
  isLight: true,
};

const WritingStyleContext = createContext(null);

export const WritingStyleProvider = ({ children }) => {
  return (
    <WritingStyleContext.Provider value={{ activeStyle: BUTTER_YELLOW_STYLE, styleId: 'butter-yellow' }}>
      {children}
    </WritingStyleContext.Provider>
  );
};

export const useWritingStyle = () => {
  const ctx = useContext(WritingStyleContext);
  if (!ctx) {
    return {
      activeStyle: BUTTER_YELLOW_STYLE,
      styleId: 'butter-yellow',
    };
  }
  return ctx;
};
