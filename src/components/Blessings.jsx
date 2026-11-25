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
    <section id="blessings" className="py-16 sm:py-24 px-3 sm:px-4 bg-gradient-to-b from-[#0B0214] via-[#160829] to-[#040008] relative overflow-hidden text-center transition-colors duration-500 pb-28">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[340px] bg-[#C084FC]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[440px] sm:max-w-2xl mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-[#C084FC]/50 bg-gradient-to-b from-[#240E44] via-[#1A0933] to-[#0E031B] p-6 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.9)] space-y-6"
        >
          {/* Top Kasavu Border */}
          <KasavuBorder className="w-full h-2.5" />

          {/* Mandap Ornament */}
          <div className="pt-1">
            <MandapIllustration className="w-24 h-14 mx-auto text-[#C084FC] filter drop-shadow-[0_0_8px_rgba(192,132,252,0.4)]" />
          </div>

          {/* 1. Best Compliments Section */}
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C084FC]/15 border border-[#C084FC]/40 text-[#FAF5FF] text-[11px] font-cinzel uppercase tracking-[0.25em] font-semibold">
              <Sparkles className="w-3 h-3 text-[#C084FC]" />
              With Auspicious Warmth
            </span>
            <h3 className="font-malayalam text-xs text-[#D8B4FE] tracking-wider font-semibold pt-1.5">
              With Best Compliments From
            </h3>
            <p className="font-malayalam text-2xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F3E8FF] to-[#C084FC] font-bold leading-tight drop-shadow-md py-2">
              {weddingData.compliments}
            </p>
          </div>

          <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#C084FC] to-transparent mx-auto" />

          {/* 2. Pre-filled WhatsApp Share & Copy CTA for Mobile */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
            <button
              onClick={handleShareWhatsApp}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#9333EA] to-[#C084FC] active:scale-95 text-white font-cinzel font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(192,132,252,0.4)] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Share via WhatsApp</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="w-full sm:w-auto px-5 py-3 rounded-full border border-[#C084FC]/50 bg-[#160829] active:scale-95 text-[#E9D5FF] font-cinzel font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#C084FC]" />
                  <span className="text-[#C084FC] font-bold">Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#E9D5FF]" />
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
