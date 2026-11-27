import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Sparkles, Check, Copy } from 'lucide-react';
import weddingData from '../data/weddingData';
import MandapIllustration from './decorations/MandapIllustration';
import KasavuBorder from './decorations/KasavuBorder';

const Blessings = () => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `✨ *വിവാഹ ക്ഷണക്കത്ത്: ഷബിൻ & കീർത്തന* ✨\n\n` +
      `🤵 *വരൻ:* ${weddingData.groom.name} (${weddingData.groom.family})\n` +
      `💍 *വധു:* ${weddingData.bride.name} (${weddingData.bride.family})\n\n` +
      `📅 *വിവാഹം (The Wedding):*\n` +
      `• ${weddingData.wedding.date} (${weddingData.wedding.malayalamDate})\n` +
      `• മുഹൂർത്തം: ${weddingData.wedding.muhurtham}\n` +
      `• സ്ഥലം: ${weddingData.wedding.venue}, ${weddingData.wedding.location}\n\n` +
      `🎉 *സൗഹൃദവിരുന്ന് (Reception):*\n` +
      `• ${weddingData.reception.date}\n` +
      `• സമയം: ${weddingData.reception.time}\n` +
      `• സ്ഥലം: ${weddingData.reception.venue}, ${weddingData.reception.location}\n\n` +
      `✨ ${weddingData.compliments} ✨\n\n` +
      `ഡിജിറ്റൽ വിവാഹ ക്ഷണക്കത്ത് കാണുവാൻ താഴെയുള്ള ലിങ്ക് സന്ദർശിക്കുക:\n` +
      `${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleCopyLink = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <section id="blessings" className="py-16 sm:py-24 px-3 sm:px-4 bg-gradient-to-b from-[#FEF9E7] via-[#FFFDF0] to-[#FEF9E7] relative overflow-hidden text-center transition-colors duration-500 pb-28">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[340px] bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[440px] sm:max-w-2xl mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-[#D97706]/40 bg-[#FFFDF0] p-6 sm:p-10 shadow-md space-y-5"
        >
          {/* Top Kasavu Border */}
          <KasavuBorder className="w-full h-2.5" />

          {/* Mandap Ornament */}
          <div className="pt-1">
            <MandapIllustration className="w-24 h-14 mx-auto text-[#B45309] filter drop-shadow-[0_2px_4px_rgba(180,83,9,0.2)]" />
          </div>

          {/* 1. Best Compliments Section (Balanced, Refined Mobile Size) */}
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF3C7] border border-[#D97706]/35 text-[#4A2508] text-[10px] font-cinzel uppercase tracking-[0.2em] font-semibold">
              <Sparkles className="w-3 h-3 text-[#B45309]" />
              With Auspicious Warmth
            </span>
            <h3 className="font-cinzel text-[10px] sm:text-xs text-[#854D0E] tracking-wider uppercase font-semibold pt-1">
              With Best Compliments From
            </h3>
            <p className="font-malayalam text-base sm:text-xl text-[#2C1405] font-bold leading-normal py-1">
              {weddingData.compliments}
            </p>
          </div>

          <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#D97706] to-transparent mx-auto" />

          {/* 2. Pre-filled WhatsApp Share & Copy CTA for Mobile */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
            <button
              onClick={handleShareWhatsApp}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#B45309] to-[#D97706] active:scale-95 text-white font-cinzel font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Share via WhatsApp</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="w-full sm:w-auto px-5 py-3 rounded-full border border-[#D97706]/40 bg-[#FEF3C7] active:scale-95 text-[#4A2508] font-cinzel font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#B45309]" />
                  <span>Copy Link</span>
                </>
              )}
            </button>
          </div>

          <KasavuBorder className="w-full h-2.5" />

        </motion.div>

      </div>
    </section>
  );
};

export default Blessings;
