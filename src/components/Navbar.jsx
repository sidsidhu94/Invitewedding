import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import weddingData from '../data/weddingData';
import KasavuBorder from './decorations/KasavuBorder';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Invitation', href: '#invitation' },
    { label: 'Muhurtham', href: '#wedding' },
    { label: 'Countdown', href: '#countdown' },
    { label: 'Reception', href: '#reception' },
    { label: 'Venue', href: '#venue' },
    { label: 'Blessings', href: '#blessings' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#160829]/95 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.8)] border-b border-[#C084FC]/40 py-2.5'
          : 'bg-transparent py-3 sm:py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Monogram Logo with Lavender & Dark Violet Accent */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#C084FC] flex items-center justify-center bg-gradient-to-b from-[#240E44] to-[#0E031B] group-hover:scale-105 transition-all shadow-[0_0_12px_rgba(192,132,252,0.5)]">
            <span className="font-cinzel text-white font-black text-xs sm:text-sm tracking-wider">
              {weddingData.groom.englishShortName?.[0] || 'S'}
              <span className="text-[#C084FC]">&</span>
              {weddingData.bride.englishShortName?.[0] || 'K'}
            </span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-malayalam text-white text-xs sm:text-sm font-bold tracking-wider leading-tight">
              {weddingData.groom.shortName} <span className="text-[#C084FC]">&</span> {weddingData.bride.shortName}
            </span>
            <span className="font-garamond italic text-[10px] sm:text-[11px] text-[#E9D5FF]">
              ശുഭ വിവാഹം • Kerala Wedding
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-xs uppercase tracking-widest text-[#E9D5FF] hover:text-[#C084FC] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C084FC] hover:after:w-full after:transition-all after:duration-300 font-cinzel font-semibold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#C084FC] focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#160829]/98 backdrop-blur-xl border-b border-[#C084FC]/40 px-6 py-5 transition-all shadow-2xl">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-xs uppercase tracking-widest text-[#E9D5FF] hover:text-[#C084FC] py-2 border-b border-[#C084FC]/20 flex items-center justify-between font-cinzel font-semibold"
              >
                <span>{item.label}</span>
                <span className="text-[#C084FC] text-[10px]">✦</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
