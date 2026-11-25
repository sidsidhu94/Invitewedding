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
      window.dispatchEvent(new CustomEvent('play-wedding-music'));
    }
    if (onStartOpen) onStartOpen();
  };

  const triggerOpen = () => {
    if (phase !== 'sealed') return;
    setPhase('unsealing');
    startMusic();

    // Step 1: Break seal & shower ocean teal and warm sand flakes
    setTimeout(() => {
      confetti({
        particleCount: 85,
        spread: 85,
        origin: { y: 0.55 },
        colors: ['#C084FC', '#E9D5FF', '#FAF5FF', '#9333EA', '#7E22CE', '#D8B4FE'],
      });
      setPhase('flap-open');
    }, 250);

    // Step 2: Card rises out of envelope
    setTimeout(() => {
      setPhase('card-rise');
    }, 700);

    // Step 3: Fully open at 2 seconds
    setTimeout(() => {
      setPhase('opened');
      setIsDone(true);
      if (onOpen) onOpen();
    }, 1800);
  };

  // Auto-play music attempt on mount & 2-second auto-open
  useEffect(() => {
    startMusic();

    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 1 ? prev - 1 : 1));
    }, 1000);

    timerRef.current = setTimeout(() => {
      triggerOpen();
    }, 2000);

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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 select-none bg-[#030C1A] overflow-hidden"
          onClick={triggerOpen}
        >
          {/* Deep Dark Violet & Luminous Lavender Halo */}
          <div className="absolute inset-0 bg-gradient-radial from-[#160829] via-[#0B0214] to-[#040008] opacity-98" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] bg-[#C084FC]/15 rounded-full blur-3xl pointer-events-none animate-pulse" />

          {/* Floating Neon Petals */}
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
                  <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#C084FC] to-[#E9D5FF] shadow-[0_0_10px_rgba(192,132,252,0.8)]" />
                ) : p.type === 'mint' ? (
                  <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#D8B4FE] to-white shadow-[0_0_8px_rgba(216,180,254,0.6)]" />
                ) : (
                  <div className="w-full h-full rounded-full bg-[#FAF5FF] shadow-sm" />
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
            className="absolute top-6 right-5 z-40 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#200D3B]/90 text-[#E9D5FF] text-[11px] font-cinzel font-bold tracking-widest uppercase border border-[#C084FC]/60 backdrop-blur-md transition-transform active:scale-95 shadow-[0_0_15px_rgba(192,132,252,0.3)] cursor-pointer"
          >
            <span>Open Now</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C084FC]" />
          </button>

          {/* Top 2-Second Countdown Progress Bar */}
          <div className="absolute top-0 left-0 right-0 z-40">
            <div className="h-1 bg-white/10 w-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, ease: 'linear' }}
                className="h-full bg-gradient-to-r from-[#C084FC] via-[#FAF5FF] to-[#D8B4FE] shadow-[0_0_10px_#C084FC]"
              />
            </div>
            <div className="text-center pt-3 text-[10px] font-cinzel tracking-[0.25em] uppercase text-[#E9D5FF]">
              Opening in <span className="font-bold text-[#C084FC]">{countdown}s</span> • Tap to open
            </div>
          </div>

          {/* Sleek Neon Royal Envelope (Mobile Sized: max 340px) */}
          <div className="relative z-20 w-full max-w-[340px] sm:max-w-[380px] h-[440px] sm:h-[480px] flex items-center justify-center [perspective:1200px]">
            
            {/* Outer Envelope Body */}
            <div className="relative w-full h-[320px] sm:h-[350px] bg-gradient-to-b from-[#240E44] via-[#1A0933] to-[#0E031B] rounded-2xl border-2 border-[#C084FC]/70 shadow-[0_25px_60px_rgba(0,0,0,0.95),_0_0_30px_rgba(192,132,252,0.3)] overflow-hidden flex flex-col justify-between">
              
              {/* Envelope Crease SVGs */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 340 320" preserveAspectRatio="none">
                  <path d="M0,320 L170,175 L340,320 Z" fill="#0E031B" stroke="#C084FC" strokeWidth="0.8" opacity="0.4" />
                  <path d="M0,0 L170,175 L0,320 Z" fill="#1A0933" stroke="#C084FC" strokeWidth="0.6" opacity="0.3" />
                  <path d="M340,0 L170,175 L340,320 Z" fill="#1A0933" stroke="#C084FC" strokeWidth="0.6" opacity="0.3" />
                </svg>
              </div>

              {/* Top Zari Accent */}
              <div className="relative z-10 w-full">
                <KasavuBorder className="w-full h-3" />
              </div>

              {/* Front Text */}
              <div className="relative z-10 text-center px-4 py-6">
                <p className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#C084FC] font-bold">
                  ശുഭ വിവാഹം • Royal Wedding
                </p>
                <h2 className="font-greatvibes text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F3E8FF] to-[#C084FC] font-normal my-2">
                  {weddingData.bride.shortName} <span className="text-[#C084FC] font-serif text-2xl">&</span> {weddingData.groom.shortName}
                </h2>
                <p className="font-garamond italic text-[#E9D5FF] text-xs sm:text-sm">
                  Kannur, Kerala • December 2026
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
                  <path d="M0,0 L170,175 L340,0 Z" fill="#240E44" stroke="#C084FC" strokeWidth="1.5" />
                </svg>
              </motion.div>

              {/* Glowing Neon Seal Medallion */}
              <motion.div
                initial={{ scale: 1, opacity: 1 }}
                animate={{
                  scale: phase === 'flap-open' || phase === 'card-rise' || phase === 'opened' ? 1.4 : 1,
                  opacity: phase === 'flap-open' || phase === 'card-rise' || phase === 'opened' ? 0 : 1,
                }}
                transition={{ duration: 0.4 }}
                className="absolute top-[145px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center pointer-events-none"
              >
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-tr from-[#9333EA] via-[#C084FC] to-[#F3E8FF] p-0.5 shadow-[0_0_25px_rgba(192,132,252,0.8)] flex items-center justify-center">
                  <div className="w-full h-full rounded-full border border-[#FAF5FF]/60 flex items-center justify-center bg-[#1A0933]">
                    <span className="font-cinzel font-black text-xs sm:text-sm text-[#FAF5FF] tracking-wider">
                      S & K
                    </span>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Rising Inner Letterpress Card */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{
                y: phase === 'card-rise' || phase === 'opened' ? -130 : 30,
                opacity: phase === 'card-rise' || phase === 'opened' ? 1 : 0,
              }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute w-[92%] h-[300px] rounded-xl bg-gradient-to-b from-[#240E44] via-[#1A0933] to-[#0E031B] border-2 border-[#C084FC] p-5 text-center shadow-[0_0_30px_rgba(192,132,252,0.4)] z-20 pointer-events-none flex flex-col justify-between"
            >
              <div className="pt-2">
                <span className="font-malayalam text-[11px] uppercase tracking-[0.2em] text-[#E9D5FF] font-bold">
                  ശുഭ വിവാഹം • WEDDING INVITATION
                </span>
                <h3 className="font-malayalam font-bold text-2xl sm:text-3xl text-white my-1">
                  {weddingData.groom.name}
                </h3>
                <span className="font-greatvibes text-2xl text-[#C084FC] italic">&</span>
                <h3 className="font-malayalam font-bold text-2xl sm:text-3xl text-white my-1">
                  {weddingData.bride.name}
                </h3>
                <p className="font-malayalam text-xs text-[#E9D5FF] mt-1">
                  {weddingData.wedding.date}
                </p>
              </div>

              <div className="py-2 border-t border-b border-[#C084FC]/40 text-xs font-cinzel font-bold text-[#E9D5FF]">
                {weddingData.wedding.date}
              </div>

              <p className="font-garamond italic text-[11px] text-[#E9D5FF] pb-2">
                Welcoming you and your family with blessings...
              </p>
            </motion.div>

          </div>

          {/* Bottom Tap Prompt */}
          <div className="absolute bottom-6 left-0 right-0 z-30 text-center pointer-events-none">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C084FC]/10 border border-[#C084FC]/30 text-[#E9D5FF] text-xs font-cinzel tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C084FC]" />
              Tap anywhere to open
            </span>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default KeralaEnvelopeOpening;
