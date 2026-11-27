import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import weddingData from '../data/weddingData';
import KasavuBorder from './decorations/KasavuBorder';

// Robust cross-browser date parser (supports iOS Safari, Chrome, Firefox, Android)
const parseWeddingDate = (dateVal) => {
  if (typeof dateVal === 'number' && !isNaN(dateVal)) return dateVal;
  
  if (typeof dateVal === 'string') {
    // Try standard ISO parse
    const parsed = Date.parse(dateVal);
    if (!isNaN(parsed)) return parsed;

    // Safari fallback: replace dashes with slashes
    const safariFormatted = dateVal.replace(/-/g, '/').replace('T', ' ');
    const safariParsed = Date.parse(safariFormatted);
    if (!isNaN(safariParsed)) return safariParsed;

    // Direct regex extraction: YYYY, MM, DD, HH, mm
    const match = dateVal.match(/(\d{4})[/-](\d{1,2})[/-](\d{1,2})(?:[T\s](\d{1,2}):(\d{1,2}))?/);
    if (match) {
      const year = parseInt(match[1], 10);
      const month = parseInt(match[2], 10) - 1; // 0-indexed month
      const day = parseInt(match[3], 10);
      const hours = match[4] ? parseInt(match[4], 10) : 12;
      const minutes = match[5] ? parseInt(match[5], 10) : 15;
      return new Date(year, month, day, hours, minutes, 0).getTime();
    }
  }

  // Guaranteed fallback: 20 Dec 2026, 12:15 PM IST
  return new Date(2026, 11, 20, 12, 15, 0).getTime();
};

const calculateTimeLeft = () => {
  const targetDate = parseWeddingDate(weddingData?.wedding?.rawDate);
  const now = Date.now();
  const difference = targetDate - now;

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }
  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
};

const Countdown = () => {
  // Initialize immediately with calculated values so there is NEVER a 00 flash
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    // Update immediately on mount
    setTimeLeft(calculateTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Secs', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="py-14 sm:py-20 px-3 sm:px-4 bg-gradient-to-b from-[#FEF9E7] via-[#FFFDF0] to-[#FEF9E7] border-y border-[#D97706]/25 relative transition-colors duration-500 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[250px] bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[440px] sm:max-w-4xl mx-auto text-center relative z-10">
        
        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-1.5 text-[#B45309] text-[11px] sm:text-xs font-cinzel tracking-[0.25em] uppercase mb-1.5 font-bold">
            <Sparkles className="w-3 h-3 text-[#B45309]" />
            <span>Auspicious Vedic Horologue</span>
            <Sparkles className="w-3 h-3 text-[#B45309]" />
          </div>
          <h2 className="font-malayalam text-2xl sm:text-4xl font-extrabold text-[#2C1405] tracking-wide">
            മുഹൂർത്തത്തിലേക്കുള്ള സമയം
          </h2>
          <p className="font-malayalam text-[#5C2E0B] text-xs sm:text-sm mt-1">
            {weddingData.wedding.date} • {weddingData.wedding.muhurtham}
          </p>
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#D97706] to-transparent mx-auto mt-2.5" />
        </motion.div>

        {/* 4 Mobile-Optimized Butter Cream Cards */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-sm sm:max-w-md mx-auto">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-2.5 sm:p-4 rounded-2xl bg-[#FFFDF0] border border-[#D97706]/40 shadow-sm relative group"
            >
              <div className="font-marcellus font-bold text-2xl sm:text-4xl text-[#2C1405] leading-tight">
                {String(unit.value).padStart(2, '0')}
              </div>
              <span className="font-cinzel text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#783E12] font-semibold mt-1">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Countdown;
