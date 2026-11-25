import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Calendar, Sparkles, MapPin, Clock } from 'lucide-react';
import weddingData from '../data/weddingData';
import NilavilakkuIllustration from './decorations/NilavilakkuIllustration';
import KasavuBorder from './decorations/KasavuBorder';
import { useWritingStyle } from '../context/WritingStyleContext';

const Hero = () => {
  const [replayKey, setReplayKey] = useState(0);
  const { activeStyle } = useWritingStyle();

  const scrollToInvitation = () => {
    const el = document.querySelector('#invitation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92dvh] flex flex-col justify-center items-center px-4 pt-20 pb-16 overflow-hidden bg-gradient-radial from-[#240E44] via-[#160829] to-[#0B0214] text-center select-none">
      
      {/* Ambient Lavender & Dark Violet Aura Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] bg-gradient-radial from-[#C084FC]/15 via-[#160829]/20 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" />

      {/* Decorative Subtle Background Lamps */}
      <div className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 opacity-60 pointer-events-none">
        <NilavilakkuIllustration className="w-20 h-40" glowing={true} />
      </div>
      <div className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 opacity-60 pointer-events-none">
        <NilavilakkuIllustration className="w-20 h-40" glowing={true} />
      </div>

      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center">
        
        {/* Auspicious Sacred Malayalam Header Emblem */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#C084FC]/50 bg-[#160829]/90 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(192,132,252,0.25)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C084FC]" />
          <span className="font-cinzel text-[#FAF5FF] text-[11px] sm:text-xs tracking-[0.25em] uppercase font-bold">
            ഓം ശ്രീ ഗണേശായ നമഃ • ശുഭ വിവാഹം
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#C084FC]" />
        </motion.div>

        {/* Auspicious Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-garamond italic text-[#E9D5FF] text-sm sm:text-base tracking-[0.2em] uppercase font-medium mb-1"
        >
          Together with their families
        </motion.p>

        {/* Grand Couple Name Entrance (Shining Ocean Teal & Warm Sand & White Gradient) */}
        <div
          key={replayKey}
          onClick={() => setReplayKey((k) => k + 1)}
          className="my-2 cursor-pointer w-full group"
          title="Tap to replay animation"
        >
          {/* Groom Name */}
          <div className="overflow-hidden py-1">
            <motion.h1
              initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={`font-malayalam text-5xl sm:text-7xl md:text-8xl ${activeStyle.titleGradient} leading-tight tracking-normal font-black`}
            >
              {weddingData.groom.name}
            </motion.h1>
            <p className={`font-greatvibes text-2xl sm:text-3xl ${activeStyle.subtitleScript} italic mt-0.5`}>
              {weddingData.groom.englishName}
            </p>
          </div>

          {/* Centered Neon Ampersand Divider */}
          <div className="flex items-center justify-center gap-3 my-2">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className={`w-12 sm:w-20 h-[1.5px] ${activeStyle.divider}`}
            />
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.6 }}
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[#C084FC]/80 bg-[#160829] flex items-center justify-center shadow-[0_0_15px_rgba(192,132,252,0.4)]"
            >
              <span className="font-greatvibes text-2xl sm:text-3xl text-[#FAF5FF] italic pt-0.5">
                &
              </span>
            </motion.div>

            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className={`w-12 sm:w-20 h-[1.5px] ${activeStyle.divider}`}
            />
          </div>

          {/* Bride Name */}
          <div className="overflow-hidden py-1">
            <motion.h1
              initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`font-malayalam text-5xl sm:text-7xl md:text-8xl ${activeStyle.titleGradient} leading-tight tracking-normal font-black`}
            >
              {weddingData.bride.name}
            </motion.h1>
            <p className={`font-greatvibes text-2xl sm:text-3xl ${activeStyle.subtitleScript} italic mt-0.5`}>
              {weddingData.bride.englishName}
            </p>
          </div>
        </div>

        {/* Kasavu Zari Divider */}
        <div className="my-4 w-full max-w-[280px] sm:max-w-sm">
          <KasavuBorder className="w-full h-2.5" />
        </div>

        {/* Auspicious Muhurtham Quick Details Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-full max-w-[340px] sm:max-w-md p-3.5 rounded-2xl bg-[#240E44]/90 border border-[#C084FC]/50 shadow-[0_0_20px_rgba(192,132,252,0.25)] backdrop-blur-md flex flex-col gap-1.5"
        >
          <div className="flex items-center justify-center gap-2 text-[#FAF5FF]">
            <Calendar className="w-4 h-4 text-[#C084FC]" />
            <span className="font-malayalam text-xs sm:text-sm font-bold tracking-wider">
              {weddingData.wedding.date} ({weddingData.wedding.malayalamDate})
            </span>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-xs text-[#E9D5FF] font-malayalam">
            <Clock className="w-3.5 h-3.5 text-[#C084FC] shrink-0" />
            <span>മുഹൂർത്തം: {weddingData.wedding.muhurtham}</span>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-xs text-[#E9D5FF] font-malayalam">
            <MapPin className="w-3.5 h-3.5 text-[#C084FC] shrink-0" />
            <span>സ്ഥലം: {weddingData.wedding.venue}, {weddingData.wedding.location}</span>
          </div>
        </motion.div>

        {/* Animated Mobile Scroll Down Indicator Pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-7 flex flex-col items-center cursor-pointer active:scale-95 transition-transform"
          onClick={scrollToInvitation}
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#C084FC]/15 border border-[#C084FC]/60 text-[#E9D5FF] shadow-[0_0_20px_rgba(192,132,252,0.3)] animate-pulse">
            <span className="font-cinzel text-[11px] uppercase tracking-[0.2em] font-bold">
              Scroll Down to Explore
            </span>
            <ChevronDown className="w-4 h-4 text-[#C084FC] animate-bounce" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
