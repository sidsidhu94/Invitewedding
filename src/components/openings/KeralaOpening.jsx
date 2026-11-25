import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Bell } from 'lucide-react';
import confetti from 'canvas-confetti';
import weddingData from '../../data/weddingData';
import NilavilakkuIllustration from '../decorations/NilavilakkuIllustration';
import KasavuBorder from '../decorations/KasavuBorder';

// Fragrant Kerala Jasmine (Pichipoo), Marigold, and Gold Leaf Petals
const KERALA_PETALS = Array.from({ length: 32 }).map((_, i) => ({
  id: i,
  left: (i * 3.3 + ((i * 17) % 11)) % 100,
  duration: 3.2 + ((i * 3) % 3.0),
  delay: ((i * 7) % 10) * 0.09,
  size: 14 + ((i * 4) % 14),
  drift: ((i * 13) % 24) - 12,
  rotateEnd: (i * 80) % 360,
  type: i % 4 === 0 ? 'jasmine' : i % 4 === 1 ? 'marigold' : i % 4 === 2 ? 'kumkum' : 'gold',
}));

const PetalsAnimation = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
    {KERALA_PETALS.map((p) => (
      <motion.div
        key={p.id}
        initial={{ y: -40, x: `${p.left}vw`, opacity: 0, rotate: 0 }}
        animate={{
          y: '105vh',
          x: `${p.left + p.drift}vw`,
          opacity: [0, 0.95, 0.95, 0],
          rotate: p.rotateEnd,
        }}
        transition={{ duration: p.duration, delay: p.delay, ease: 'easeOut', repeat: Infinity }}
        className="absolute top-0 pointer-events-none"
        style={{ width: p.size, height: p.size }}
      >
        {p.type === 'jasmine' ? (
          // Pristine White Kerala Pichipoo (Jasmine)
          <div
            className="w-full h-full rounded-full bg-gradient-to-br from-white via-amber-50 to-sky-50 shadow-md border border-amber-100/80"
            style={{ borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%' }}
          />
        ) : p.type === 'marigold' ? (
          // Vibrant Auspicious Orange Marigold (Thechi / Chendumalli)
          <div
            className="w-full h-full rounded-full bg-gradient-to-tr from-amber-500 via-yellow-400 to-orange-500 shadow-md border border-yellow-200/50"
            style={{ borderRadius: '50% 50% 50% 50%' }}
          />
        ) : p.type === 'kumkum' ? (
          // Royal Kumkum Red Petal
          <div
            className="w-full h-full rounded-full bg-gradient-to-br from-rose-700 via-red-800 to-amber-950 shadow-md"
            style={{ borderRadius: '65% 35% 60% 40% / 40% 60% 40% 60%' }}
          />
        ) : (
          // Shimmering Kasavu Gold Foil Flake
          <div
            className="w-full h-full rounded-full bg-gradient-to-tr from-[#D4AF37] via-[#FFF3C4] to-[#B38A2B] shadow-lg animate-pulse"
            style={{ borderRadius: '70% 30% 60% 40%' }}
          />
        )}
      </motion.div>
    ))}
  </div>
);

export const KeralaOpening = ({ onOpen, onStartOpen }) => {
  const [secondsLeft, setSecondsLeft] = useState(3);
  const [isOpening, setIsOpening] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const timerRef = useRef(null);
  const intervalRef = useRef(null);

  const triggerOpen = () => {
    if (isOpening || isCompleted) return;
    setIsOpening(true);

    // Auspicious sound start on gesture / timeout
    if (typeof window !== 'undefined' && window.__playWeddingMusic) {
      window.__playWeddingMusic();
    }
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('play-wedding-music'));
    }
    if (onStartOpen) onStartOpen();

    // Kerala Temple Celebration Gold & Emerald Confetti Shower
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.52 },
      colors: ['#D4AF37', '#FFF3C4', '#0F382A', '#E5C158', '#8E1616', '#FFFFFF', '#FFB703'],
    });

    // Complete opening transition
    setTimeout(() => {
      setIsCompleted(true);
      if (onOpen) onOpen();
    }, 900);
  };

  // 3-Second Automatic Countdown & Opening
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Auto-trigger exactly at 3 seconds
    timerRef.current = setTimeout(() => {
      triggerOpen();
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {!isCompleted && (
        <motion.div
          key="kerala-auspicious-opening"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden select-none bg-[#03150F] cursor-pointer"
          onClick={triggerOpen}
        >
          {/* Deep Imperial Dark Violet Ambient Backdrop */}
          <div className="absolute inset-0 bg-gradient-radial from-[#240E44] via-[#160829] to-[#0B0214] opacity-98" />

          {/* Gentle Shimmering Ocean & Sand Light Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-gradient-radial from-amber-400/20 via-sky-800/10 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" />

          {/* Cascading Kerala Flower Petals */}
          <PetalsAnimation />

          {/* Traditional Kerala Padippura Wooden Roof Eaves Header (SVG) */}
          <div className="absolute top-0 left-0 right-0 z-30 pointer-events-none">
            {/* Kerala Gopuram / Clay Tile Roof Slope */}
            <div className="h-4 bg-gradient-to-r from-[#2B1704] via-[#5C2E0B] to-[#2B1704] border-b border-[#D4AF37]/40 shadow-xl" />
            <KasavuBorder className="w-full h-3" />

            {/* Hanging Brass Temple Bells & Jasmine Garlands */}
            <div className="flex justify-between px-6 sm:px-16 pt-1 opacity-85">
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-[1.5px] h-6 sm:h-10 bg-gradient-to-b from-[#D4AF37] to-amber-700/60" />
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-tr from-[#C59B27] via-[#FFF3C4] to-[#8A6314] shadow-md flex items-center justify-center border border-amber-300/60">
                    <Bell className="w-2.5 h-2.5 text-[#3A2202]" />
                  </div>
                  {/* Jasmine Bud String */}
                  <div className="flex flex-col items-center gap-1 mt-1">
                    <span className="w-1.5 h-2 rounded-full bg-white shadow-sm" />
                    <span className="w-1.5 h-2 rounded-full bg-amber-50 shadow-sm" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skip / Enter Instant Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              triggerOpen();
            }}
            className="absolute top-8 right-6 z-40 flex items-center gap-2 px-4 py-2 rounded-full bg-[#051C14]/90 hover:bg-[#0F382A] text-amber-200 text-xs tracking-widest uppercase border border-[#D4AF37]/50 backdrop-blur-md transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Enter Wedding</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
          </button>

          {/* Central Sacred Kerala Auspicious Core */}
          <div className="relative z-30 flex flex-col items-center justify-center p-4 max-w-xl w-full text-center">
            
            {/* Auspicious Malayalam Sacred Heading */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-3"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 shadow-inner text-amber-200">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-cinzel text-xs sm:text-sm tracking-[0.3em] uppercase font-bold text-amber-100">
                  ശുഭ വിവാഹം • Mangalyam
                </span>
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              </div>
            </motion.div>

            {/* Couple Wedding Announcement */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-4"
            >
              <h1 className="font-brush text-5xl sm:text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFF3C4] via-[#E5C158] to-[#D4AF37] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] leading-tight">
                {weddingData.bride.shortName || 'Anjusha'} & {weddingData.groom.shortName || 'Sidharth'}
              </h1>
              <p className="font-garamond italic text-amber-100/90 text-sm sm:text-base tracking-widest uppercase mt-1">
                Auspicious Kerala Wedding Invitation
              </p>
            </motion.div>

            {/* Central Sacred Nilavilakku (Traditional Kerala Bronze Lamp) */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative my-2 sm:my-4 flex items-center justify-center"
            >
              {/* Sacred Golden Aura Ring around Lamp */}
              <div className="absolute w-48 h-48 sm:w-60 sm:h-60 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 blur-sm animate-pulse" />
              
              {/* Nilavilakku Component */}
              <NilavilakkuIllustration className="w-28 h-44 sm:w-36 sm:h-56 relative z-10" glowing={true} />
            </motion.div>

            {/* 3-Second Automatic Progress Ring & Countdown Timer */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 flex flex-col items-center gap-2"
            >
              {/* Circular SVG 3s Progress Indicator */}
              <div className="relative w-16 h-16 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 60 60">
                  <circle
                    cx="30"
                    cy="30"
                    r="24"
                    fill="#051C14"
                    stroke="rgba(212, 175, 55, 0.25)"
                    strokeWidth="3"
                  />
                  <motion.circle
                    cx="30"
                    cy="30"
                    r="24"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="3.5"
                    strokeDasharray={2 * Math.PI * 24}
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: 2 * Math.PI * 24 }}
                    transition={{ duration: 3, ease: 'linear' }}
                    strokeLinecap="round"
                  />
                </svg>

                {/* Big Countdown Number */}
                <span className="absolute font-cinzel font-black text-2xl text-amber-200 drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]">
                  {secondsLeft > 0 ? secondsLeft : '✦'}
                </span>
              </div>

              {/* Status Text */}
              <p className="font-cinzel text-xs uppercase tracking-[0.25em] text-amber-200/90 font-medium">
                Opening in <span className="font-bold text-amber-300">{secondsLeft}s</span> • Tap anywhere to open
              </p>
            </motion.div>

          </div>

          {/* Bottom Kasavu Border Footer Eaves */}
          <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
            <KasavuBorder className="w-full h-3" />
            <div className="h-4 bg-gradient-to-r from-[#2B1704] via-[#5C2E0B] to-[#2B1704] border-t border-[#D4AF37]/40 shadow-2xl" />
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default KeralaOpening;
