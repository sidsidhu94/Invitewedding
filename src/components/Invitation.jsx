import React from 'react';
import { motion } from 'framer-motion';
import weddingData from '../data/weddingData';
import GaneshaHeader from './decorations/GaneshaHeader';
import KasavuBorder from './decorations/KasavuBorder';
import { Phone, Sparkles } from 'lucide-react';
import { useWritingStyle } from '../context/WritingStyleContext';

const Invitation = () => {
  const { activeStyle } = useWritingStyle();
  return (
    <section id="invitation" className="py-16 sm:py-24 px-3 sm:px-4 bg-gradient-to-b from-[#FEF9E7] via-[#FFFDF0] to-[#FEF9E7] relative transition-colors duration-500 overflow-hidden">
      {/* Ambient Warm Honey Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] bg-[#F59E0B]/10 blur-3xl pointer-events-none" />

      <div className="max-w-[440px] sm:max-w-2xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FEF3C7] border border-[#D97706]/40 text-[#4A2508] text-[11px] uppercase tracking-[0.25em] font-cinzel mb-2.5 shadow-sm font-semibold">
              <Sparkles className="w-3 h-3 text-[#B45309]" />
              Wedding Invitation
            </span>
            <h2 className="font-marcellus text-2xl sm:text-4xl font-extrabold text-[#2C1405] tracking-wider uppercase">
              {weddingData.invitationText.eventTitle}
            </h2>
            <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#D97706] to-transparent mx-auto mt-3 shadow-sm" />
          </motion.div>
        </div>

        {/* Master Handheld Kerala Wedding Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`relative rounded-3xl p-2 sm:p-3.5 ${activeStyle.cardBg} ${activeStyle.cardBorder}`}
        >
          {/* Inner Rim */}
          <div className={`rounded-2xl p-1 sm:p-2 shadow-inner ${activeStyle.innerRim}`}>
            
            {/* Card Surface */}
            <div
              className={`relative rounded-xl p-5 sm:p-9 text-center overflow-hidden transition-colors duration-500 ${activeStyle.cardSurface}`}
              style={{
                boxShadow: activeStyle.isLight
                  ? 'inset 0 0 45px rgba(197, 162, 93, 0.15), inset 0 2px 6px rgba(0,0,0,0.06)'
                  : 'inset 0 0 45px rgba(2, 132, 199, 0.08), inset 0 2px 6px rgba(0,0,0,0.4)',
              }}
            >
              {/* Decorative Card Borders */}
              <div className="absolute inset-2 sm:inset-3 border rounded-lg pointer-events-none border-[#D97706]/35" />
              <div className="absolute inset-3.5 sm:inset-4 border border-dashed rounded-md pointer-events-none border-[#D97706]/20" />

              {/* 1. Auspicious Lord Ganesha Header Emblem */}
              <div className="relative z-10 flex flex-col items-center pt-1 pb-3">
                <GaneshaHeader className="w-14 h-14 sm:w-16 sm:h-16 mx-auto text-[#B45309] filter drop-shadow-[0_2px_4px_rgba(180,83,9,0.2)]" />
                <div className={`w-20 h-[1.5px] mt-2 ${activeStyle.divider}`} />
              </div>

              {/* 2. Host Family (Groom's Parents - Protected from awkward wraps) */}
              <div className="relative z-10 my-3 pb-4 border-b border-[#D97706]/25">
                <p className={`font-cinzel text-[10px] uppercase tracking-[0.25em] font-bold mb-1 ${activeStyle.subtleLabel}`}>
                  Invitation From (സ്നേഹപൂർവ്വം ക്ഷണിക്കുന്നത്)
                </p>
                <h3 className="font-malayalam font-bold text-sm sm:text-base md:text-lg tracking-wide leading-relaxed text-[#2C1405] max-w-sm mx-auto">
                  <span className="inline-block whitespace-nowrap">ശ്രീ. പവിത്രൻ കെ</span>
                  <span className="text-[#B45309] font-normal mx-1.5">&amp;</span>
                  <span className="inline-block whitespace-nowrap">ശ്രീമതി. സുമാലിനി വി</span>
                </h3>
                <p className="font-malayalam text-xs sm:text-sm mt-1 max-w-sm mx-auto text-[#5C2E0B]">
                  {weddingData.groom.address}
                </p>
                {weddingData.groom.mobile && (
                  <div className="mt-2.5 flex items-center justify-center">
                    <a
                      href={`tel:${weddingData.groom.mobile}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full font-cinzel text-[11px] font-bold active:scale-95 transition-transform shadow-sm bg-[#FEF3C7] border border-[#D97706]/40 text-[#4A2508]"
                    >
                      <Phone className="w-3 h-3 text-[#B45309]" />
                      <span>Mob: {weddingData.groom.mobile}</span>
                    </a>
                  </div>
                )}
              </div>

              {/* 3. Ceremonial Greeting Text */}
              <div className="relative z-10 my-4 space-y-2">
                <p className={`font-malayalam text-xs sm:text-sm leading-relaxed max-w-md mx-auto ${activeStyle.bodyText}`}>
                  {weddingData.invitationText.invitationLine}
                </p>
                <h4 className={`font-malayalam font-bold text-base sm:text-lg tracking-wider uppercase pt-1 ${activeStyle.titleSolid}`}>
                  {weddingData.invitationText.eventTitle}
                </h4>
              </div>

              {/* 4. Couple Names (Pure Malayalam, No English Subtitles) */}
              <div className="relative z-10 my-4 py-1">
                {/* Groom Name */}
                <div>
                  <h1 className="font-malayalam text-3xl sm:text-5xl text-[#2C1405] font-black leading-tight">
                    {weddingData.groom.name}
                  </h1>
                  <div className={`inline-block px-3 py-1 rounded-full mt-1.5 ${activeStyle.accentBadge}`}>
                    <p className={`font-malayalam text-[11px] sm:text-xs font-semibold ${activeStyle.mutedText}`}>
                      {weddingData.groom.family}
                    </p>
                  </div>
                </div>

                {/* Center Ampersand */}
                <div className="my-2.5 flex items-center justify-center gap-2">
                  <span className={`w-10 sm:w-16 h-[1.5px] ${activeStyle.divider}`} />
                  <span className="font-serif text-2xl sm:text-3xl text-[#B45309] font-normal">&amp;</span>
                  <span className={`w-10 sm:w-16 h-[1.5px] ${activeStyle.divider}`} />
                </div>

                {/* Bride Name */}
                <div>
                  <h1 className="font-malayalam text-3xl sm:text-5xl text-[#2C1405] font-black leading-tight">
                    {weddingData.bride.name}
                  </h1>
                  <div className={`inline-block px-3 py-1 rounded-full mt-1.5 ${activeStyle.accentBadge}`}>
                    <p className={`font-malayalam text-[11px] sm:text-xs font-semibold ${activeStyle.mutedText}`}>
                      {weddingData.bride.family}
                    </p>
                  </div>
                </div>
              </div>

              {/* 5. Kasavu Zari Divider */}
              <div className="my-4 max-w-xs mx-auto">
                <KasavuBorder className="w-full h-2.5" />
              </div>

              {/* 6. Auspicious Compliments (Proportionate size on mobile) */}
              <div className="pt-2">
                <p className="font-cinzel text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold text-[#854D0E]">
                  With Best Compliments From
                </p>
                <p className="font-malayalam font-bold text-sm sm:text-base mt-1 text-[#2C1405] leading-normal">
                  {weddingData.compliments}
                </p>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Invitation;
