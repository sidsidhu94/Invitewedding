import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Volume2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import weddingData from '../../data/weddingData';
import KasavuBorder from '../decorations/KasavuBorder';

// Fragrant Neon Spark & Petal Particles
const PETALS = Array.from({ length: 24 }).map((_, i) => ({
  id: i,
  left: (i * 4.1 + ((i * 13) % 9)) % 100,
  duration: 2.8 + ((i * 2) % 2.5),
  delay: ((i * 5) % 8) * 0.1,
  size: 12 + ((i * 3) % 12),
  drift: ((i * 9) % 20) - 10,
  rotateEnd: (i * 75) % 360,
  type: i % 3 === 0 ? 'neon' : i % 3 === 1 ? 'mint' : 'white',
}));

export const KeralaEnvelopeOpening = ({ onOpen, onStartOpen }) => {
  const [phase, setPhase] = useState('sealed');
  const [countdown, setCountdown] = useState(2);
  const [isDone, setIsDone] = useState(false);
  const timerRef = useRef(null);

  const startMusic = () => {
    if (typeof window !== 'undefined') {
      if (window.__playWeddingMusic) {
        window.__playWeddingMusic();
      }
      const audio = document.querySelector('audio');
      if (audio) {
        audio.muted = false;
        audio.play().catch(() => {});
      }
      window.dispatchEvent(new CustomEvent('play-wedding-music'));
    }
    if (onStartOpen) onStartOpen();
  };

  const triggerOpen = () => {
    if (phase !== 'sealed') return;
    setPhase('unsealing');
    startMusic();

    // Step 1: Break seal & shower golden flakes
    setTimeout(() => {
      confetti({
        particleCount: 85,
        spread: 85,
        origin: { y: 0.55 },
        colors: ['#FEF08A', '#FDE047', '#F59E0B', '#D97706', '#B45309', '#FFFFFF'],
      });
      setPhase('flap-open');
    }, 250);

    // Step 2: Card rises out of envelope
    setTimeout(() => {
      setPhase('card-rise');
    }, 700);

    // Step 3: Fully open at 1.8 seconds
    setTimeout(() => {
      setPhase('opened');
      setIsDone(true);
      if (onOpen) onOpen();
    }, 1800);
  };

  // Auto-play music attempt on mount & 2.2-second auto-open
  useEffect(() => {
    startMusic();

    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 1 ? prev - 1 : 1));
    }, 1000);

    timerRef.current = setTimeout(() => {
      triggerOpen();
    }, 2200);

    return () => {
      clearInterval(interval);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="kerala-envelope-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 select-none bg-[#FEF9E7] overflow-hidden"
          onClick={triggerOpen}
        >
          {/* Warm Butter Yellow & Honey Amber Halo */}
          <div className="absolute inset-0 bg-gradient-radial from-[#FFFDF0] via-[#FEF9E7] to-[#FDF6D8] opacity-98" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] bg-amber-300/25 rounded-full blur-3xl pointer-events-none animate-pulse" />

          {/* Floating Warm Golden Petals */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
            {PETALS.map((p) => (
              <motion.div
                key={p.id}
                initial={{ y: -30, x: `${p.left}vw`, opacity: 0, rotate: 0 }}
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
                {p.type === 'neon' ? (
                  <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#FDE047] to-[#FEF08A] shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                ) : p.type === 'mint' ? (
                  <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#F59E0B] to-[#FDE047] shadow-[0_0_8px_rgba(217,119,6,0.4)]" />
                ) : (
                  <div className="w-full h-full rounded-full bg-[#FFFDF0] shadow-sm border border-[#D97706]/20" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Top Skip / Quick Enter Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              triggerOpen();
            }}
            className="absolute top-6 right-5 z-40 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFFDF0]/95 text-[#4A2508] text-[11px] font-cinzel font-bold tracking-widest uppercase border border-[#D97706]/40 backdrop-blur-md transition-transform active:scale-95 shadow-sm cursor-pointer"
          >
            <span>Open Now</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#B45309]" />
          </button>

          {/* Top Audio / Music Cue Badge */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-40 text-center pointer-events-none">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF3C7]/95 border border-[#D97706]/40 text-[#4A2508] text-[11px] sm:text-xs font-malayalam shadow-sm">
              <Volume2 className="w-3.5 h-3.5 text-[#B45309] animate-pulse" />
              <span>സംഗീതത്തോടെയുള്ള ക്ഷണക്കത്ത്</span>
            </div>
          </div>

          {/* Royal Butter Yellow Physical Envelope (Mobile Sized: max 340px) */}
          <div className="relative z-20 w-full max-w-[340px] sm:max-w-[380px] h-[440px] sm:h-[480px] flex items-center justify-center [perspective:1200px]">
            
            {/* Outer Envelope Body */}
            <div className="relative w-full h-[320px] sm:h-[350px] bg-gradient-to-b from-[#FEF3C7] via-[#FDE68A] to-[#FCD34D] rounded-2xl border-2 border-[#D97706]/60 shadow-[0_20px_50px_rgba(74,37,8,0.18)] overflow-hidden flex flex-col justify-between">
              
              {/* Envelope Crease SVGs */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 340 320" preserveAspectRatio="none">
                  <path d="M0,320 L170,175 L340,320 Z" fill="#FDE68A" stroke="#D97706" strokeWidth="0.8" opacity="0.4" />
                  <path d="M0,0 L170,175 L0,320 Z" fill="#FEF3C7" stroke="#D97706" strokeWidth="0.6" opacity="0.3" />
                  <path d="M340,0 L170,175 L340,320 Z" fill="#FEF3C7" stroke="#D97706" strokeWidth="0.6" opacity="0.3" />
                </svg>
              </div>

              {/* Top Zari Accent */}
              <div className="relative z-10 w-full">
                <KasavuBorder className="w-full h-3" />
              </div>

              {/* Front Text (Pure Malayalam, No English Subtitles) */}
              <div className="relative z-10 text-center px-4 py-6">
                <p className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#783E12] font-bold">
                  ശുഭ വിവാഹം
                </p>
                <h2 className="font-malayalam text-2xl sm:text-3xl text-[#2C1405] font-extrabold my-2">
                  {weddingData.bride.shortName} <span className="text-[#B45309] font-serif text-xl">&amp;</span> {weddingData.groom.shortName}
                </h2>
                <p className="font-malayalam text-[#5C2E0B] text-xs sm:text-sm">
                  കണ്ണൂർ, കേരളം • ഡിസംബർ 2026
                </p>
              </div>

              {/* Bottom Zari Accent */}
              <div className="relative z-10 w-full">
                <KasavuBorder className="w-full h-3" />
              </div>

              {/* 3D Top Flap */}
              <motion.div
                initial={{ rotateX: 0 }}
                animate={{
                  rotateX: phase === 'flap-open' || phase === 'card-rise' || phase === 'opened' ? -180 : 0,
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'top center', transformStyle: 'preserve-3d' }}
                className="absolute top-0 left-0 right-0 h-[175px] z-25 pointer-events-none"
              >
                <svg className="w-full h-full drop-shadow-md" viewBox="0 0 340 175" preserveAspectRatio="none">
                  <path d="M0,0 L170,175 L340,0 Z" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
                </svg>
              </motion.div>

              {/* Traditional Amber Wax Seal with Malayalam Monogram */}
              <motion.div
                initial={{ scale: 1, opacity: 1 }}
                animate={{
                  scale: phase === 'flap-open' || phase === 'card-rise' || phase === 'opened' ? 1.4 : 1,
                  opacity: phase === 'flap-open' || phase === 'card-rise' || phase === 'opened' ? 0 : 1,
                }}
                transition={{ duration: 0.4 }}
                className="absolute top-[145px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center pointer-events-none"
              >
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-tr from-[#B45309] via-[#D97706] to-[#F59E0B] p-0.5 shadow-lg flex items-center justify-center">
                  <div className="w-full h-full rounded-full border border-[#FEF08A]/80 flex items-center justify-center bg-[#783E12] px-1">
                    <span className="font-malayalam font-bold text-xs sm:text-sm text-[#FEF3C7] tracking-wider whitespace-nowrap leading-none select-none">
                      ഷ &amp; കീ
                    </span>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Rising Inner Letterpress Card (Butter Ivory Cardstock) */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{
                y: phase === 'card-rise' || phase === 'opened' ? -130 : 30,
                opacity: phase === 'card-rise' || phase === 'opened' ? 1 : 0,
              }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute w-[92%] h-[300px] rounded-xl bg-[#FFFDF0] border-2 border-[#D97706]/70 p-5 text-center shadow-[0_15px_40px_rgba(74,37,8,0.18)] z-20 pointer-events-none flex flex-col justify-between"
            >
              <div className="pt-2">
                <span className="font-malayalam text-[11px] uppercase tracking-[0.2em] text-[#783E12] font-bold">
                  ശുഭ വിവാഹം • ക്ഷണക്കത്ത്
                </span>
                <h3 className="font-malayalam font-bold text-xl sm:text-2xl text-[#2C1405] my-1 whitespace-nowrap">
                  {weddingData.groom.name}
                </h3>
                <span className="font-serif text-xl sm:text-2xl text-[#B45309] font-normal">&amp;</span>
                <h3 className="font-malayalam font-bold text-xl sm:text-2xl text-[#2C1405] my-1 whitespace-nowrap">
                  {weddingData.bride.name}
                </h3>
                <p className="font-malayalam text-xs text-[#5C2E0B] mt-1">
                  {weddingData.wedding.date}
                </p>
              </div>

              <div className="py-2 border-t border-b border-[#D97706]/30 text-xs font-cinzel font-bold text-[#4A2508]">
                {weddingData.wedding.date}
              </div>

              <p className="font-garamond italic text-[11px] text-[#783E12] pb-2">
                Welcoming you and your family with blessings...
              </p>
            </motion.div>

          </div>

          {/* Bottom Tap / Open CTA Button */}
          <div className="absolute bottom-6 left-0 right-0 z-40 text-center px-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                triggerOpen();
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#B45309] via-[#D97706] to-[#F59E0B] text-[#FFFDF0] text-xs sm:text-sm font-malayalam font-bold shadow-[0_6px_25px_rgba(180,83,9,0.35)] animate-bounce active:scale-95 cursor-pointer border border-[#FEF08A]/80 hover:scale-105 transition-transform"
            >
              <Sparkles className="w-4 h-4 text-[#FEF08A]" />
              <span>ക്ഷണക്കത്ത് തുറക്കുക • Tap to Open</span>
            </button>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default KeralaEnvelopeOpening;
