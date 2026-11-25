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
    <section id="invitation" className="py-16 sm:py-24 px-3 sm:px-4 bg-gradient-to-b from-[#0B0214] via-[#160829] to-[#0B0214] relative transition-colors duration-500 overflow-hidden">
      {/* Ambient Neon Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] bg-[#C084FC]/10 blur-3xl pointer-events-none" />

      <div className="max-w-[440px] sm:max-w-2xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C084FC]/15 border border-[#C084FC]/40 text-[#E9D5FF] text-[11px] uppercase tracking-[0.25em] font-cinzel mb-2.5 shadow-inner font-semibold">
              <Sparkles className="w-3 h-3 text-[#C084FC]" />
              Wedding Invitation
            </span>
            <h2 className="font-marcellus text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F3E8FF] to-[#C084FC] tracking-wider uppercase">
              {weddingData.invitationText.eventTitle}
            </h2>
            <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#C084FC] to-transparent mx-auto mt-3 shadow-[0_0_8px_rgba(192,132,252,0.6)]" />
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
              <div className={`absolute inset-2 sm:inset-3 border rounded-lg pointer-events-none ${activeStyle.isLight ? 'border-[#C5A25D]/40' : 'border-[#C084FC]/30'}`} />
              <div className={`absolute inset-3.5 sm:inset-4 border border-dashed rounded-md pointer-events-none ${activeStyle.isLight ? 'border-[#C5A25D]/25' : 'border-[#C084FC]/20'}`} />

              {/* 1. Auspicious Lord Ganesha Header Emblem */}
              <div className="relative z-10 flex flex-col items-center pt-1 pb-3">
                <GaneshaHeader className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto ${activeStyle.isLight ? 'text-[#8C6B28]' : 'text-[#C084FC]'} filter drop-shadow-[0_0_10px_rgba(192,132,252,0.5)]`} />
                <div className={`w-20 h-[1.5px] mt-2 ${activeStyle.divider}`} />
              </div>

              {/* 2. Host Family (Groom's Parents) */}
              <div className={`relative z-10 my-3 pb-4 border-b ${activeStyle.isLight ? 'border-[#C5A25D]/30' : 'border-[#C084FC]/25'}`}>
                <p className={`font-cinzel text-[10px] uppercase tracking-[0.25em] font-bold mb-1 ${activeStyle.subtleLabel}`}>
                  Invitation From (സ്നേഹപൂർവ്വം ക്ഷണിക്കുന്നത്)
                </p>
                <h3 className={`font-malayalam font-bold text-lg sm:text-xl tracking-wide leading-snug ${activeStyle.bodyText}`}>
                  {weddingData.groom.parents}
                </h3>
                <p className={`font-malayalam text-xs sm:text-sm mt-1 max-w-sm mx-auto ${activeStyle.mutedText}`}>
                  {weddingData.groom.address}
                </p>
                {weddingData.groom.mobile && (
                  <div className="mt-2.5 flex items-center justify-center">
                    <a
                      href={`tel:${weddingData.groom.mobile}`}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full font-cinzel text-[11px] font-bold active:scale-95 transition-transform shadow-sm ${activeStyle.accentBadge}`}
                    >
                      <Phone className="w-3 h-3" />
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

              {/* 4. Couple Names */}
              <div className="relative z-10 my-5 py-1">
                {/* Groom Name */}
                <div>
                  <h1 className={`font-malayalam text-3xl sm:text-5xl ${activeStyle.titleGradient} font-black leading-tight`}>
                    {weddingData.groom.name}
                  </h1>
                  <p className={`font-greatvibes text-xl ${activeStyle.subtitleScript} italic`}>
                    {weddingData.groom.englishName}
                  </p>
                  <div className={`inline-block px-3 py-1 rounded-full mt-1 ${activeStyle.accentBadge}`}>
                    <p className={`font-malayalam text-[11px] sm:text-xs font-medium ${activeStyle.mutedText}`}>
                      {weddingData.groom.family}
                    </p>
                  </div>
                </div>

                {/* Center Ampersand */}
                <div className="my-3 flex items-center justify-center gap-2">
                  <span className={`w-10 sm:w-16 h-[1.5px] ${activeStyle.divider}`} />
                  <span className={`font-greatvibes text-2xl sm:text-3xl italic ${activeStyle.subtitleScript}`}>&</span>
                  <span className={`w-10 sm:w-16 h-[1.5px] ${activeStyle.divider}`} />
                </div>

                {/* Bride Name */}
                <div>
                  <h1 className={`font-malayalam text-3xl sm:text-5xl ${activeStyle.titleGradient} font-black leading-tight`}>
                    {weddingData.bride.name}
                  </h1>
                  <p className={`font-greatvibes text-xl ${activeStyle.subtitleScript} italic`}>
                    {weddingData.bride.englishName}
                  </p>
                  <div className={`inline-block px-3 py-1 rounded-full mt-1 ${activeStyle.accentBadge}`}>
                    <p className={`font-malayalam text-[11px] sm:text-xs font-medium ${activeStyle.mutedText}`}>
                      {weddingData.bride.family}
                    </p>
                  </div>
                </div>
              </div>

              {/* 5. Kasavu Zari Divider */}
              <div className="my-4 max-w-xs mx-auto">
                <KasavuBorder className="w-full h-2.5" />
              </div>

              {/* 6. Auspicious Compliments */}
              <div className="pt-1">
                <p className={`font-cinzel text-[10px] uppercase tracking-[0.25em] font-bold ${activeStyle.subtleLabel}`}>
                  With Best Compliments From
                </p>
                <p className={`font-greatvibes text-3xl sm:text-4xl mt-0.5 ${activeStyle.titleSolid}`}>
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
