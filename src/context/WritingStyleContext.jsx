import React, { createContext, useContext } from 'react';

export const LAVENDER_VIOLET_STYLE = {
  id: 'lavender-dark-violet',
  name: 'Lavender & Dark Violet',
  badge: 'Imperial Lavender & Violet',
  tagline: 'Deep Imperial Dark Violet with Luminous Soft Lavender & Pearl White Lettering',
  cardBg: 'bg-gradient-to-b from-[#240E44] via-[#1A0933] to-[#0E031B]',
  cardBorder: 'border-2 border-[#C084FC]/80 shadow-[0_25px_65px_rgba(0,0,0,0.95),_0_0_30px_rgba(192,132,252,0.3)]',
  innerRim: 'border border-[#C084FC]/40 bg-[#0B0214]/95',
  cardSurface: 'bg-gradient-to-b from-[#240E44] via-[#1A0933] to-[#0E031B] text-[#FAF5FF]',
  // Typography
  titleGradient: 'text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F3E8FF] to-[#C084FC] drop-shadow-[0_2px_15px_rgba(192,132,252,0.4)]',
  titleSolid: 'text-[#E9D5FF]',
  subtitleScript: 'text-[#C084FC]',
  bodyText: 'text-[#FAF5FF]',
  mutedText: 'text-[#E9D5FF]',
  subtleLabel: 'text-[#D8B4FE]',
  accentBadge: 'bg-[#C084FC]/15 border border-[#C084FC]/50 text-[#F3E8FF]',
  highlightBox: 'bg-gradient-to-r from-[#C084FC]/20 to-[#1A0933] border border-[#C084FC]/80 text-[#FAF5FF]',
  clockIcon: 'text-[#C084FC]',
  divider: 'bg-[#C084FC]/70',
  isLight: false,
};

const WritingStyleContext = createContext(null);

export const WritingStyleProvider = ({ children }) => {
  return (
    <WritingStyleContext.Provider value={{ activeStyle: LAVENDER_VIOLET_STYLE, styleId: 'lavender-dark-violet' }}>
      {children}
    </WritingStyleContext.Provider>
  );
};

export const useWritingStyle = () => {
  const ctx = useContext(WritingStyleContext);
  if (!ctx) {
    return {
      activeStyle: LAVENDER_VIOLET_STYLE,
      styleId: 'lavender-dark-violet',
    };
  }
  return ctx;
};
