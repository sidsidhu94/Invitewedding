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
          ? 'bg-[#FEF9E7]/95 backdrop-blur-md shadow-sm border-b border-[#D97706]/25 py-2.5'
          : 'bg-transparent py-3 sm:py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Couple Brand Title in Pure Malayalam */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-1.5 group py-1"
        >
          <span className="text-[#B45309] text-xs select-none">✦</span>
          <span className="font-malayalam text-[#2C1405] text-sm sm:text-base font-bold tracking-wide whitespace-nowrap group-hover:text-[#B45309] transition-colors">
            {weddingData.groom.shortName} <span className="font-serif text-[#B45309] font-normal mx-0.5">&amp;</span> {weddingData.bride.shortName}
          </span>
          <span className="text-[#B45309] text-xs select-none">✦</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-xs uppercase tracking-widest text-[#4A2508] hover:text-[#B45309] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D97706] hover:after:w-full after:transition-all after:duration-300 font-cinzel font-semibold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#B45309] focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FEF9E7]/98 backdrop-blur-xl border-b border-[#D97706]/30 px-6 py-5 transition-all shadow-xl">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-xs uppercase tracking-widest text-[#4A2508] hover:text-[#B45309] py-2 border-b border-[#D97706]/15 flex items-center justify-between font-cinzel font-semibold"
              >
                <span>{item.label}</span>
                <span className="text-[#B45309] text-[10px]">✦</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
