import React, { useState, useEffect } from 'react';
import { THEMES, FONTS, OPENING_CEREMONIES } from '../data/themeConstants';
import { ThemeContext } from './ThemeContextCore';

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Always force pure Butter Yellow & Dark Brown palette
    localStorage.setItem('wedding-theme-v6', 'butter-yellow');
    return 'butter-yellow';
  });

  const [font, setFont] = useState(() => {
    return localStorage.getItem('wedding-font-v6') || 'marcellus';
  });

  const [ceremony, setCeremony] = useState(() => {
    return localStorage.getItem('wedding-ceremony-v6') || 'kerala';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('wedding-theme-v6', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-font', font);
    localStorage.setItem('wedding-font-v6', font);
  }, [font]);

  useEffect(() => {
    localStorage.setItem('wedding-ceremony-v6', ceremony);
  }, [ceremony]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        font,
        setFont,
        ceremony,
        setCeremony,
        THEMES,
        FONTS,
        OPENING_CEREMONIES,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};


