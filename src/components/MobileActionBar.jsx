import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Calendar, Navigation, MessageCircle } from 'lucide-react';
import weddingData from '../data/weddingData';

export const MobileActionBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleAudioState = () => {
      const audio = document.querySelector('audio');
      if (audio) {
        setIsPlaying(!audio.paused);
      }
    };

    window.addEventListener('play-wedding-music', () => setIsPlaying(true));
    const interval = setInterval(handleAudioState, 1000);
    return () => {
      clearInterval(interval);
      window.removeEventListener('play-wedding-music', () => setIsPlaying(true));
    };
  }, []);

  const toggleMusic = () => {
    const audio = document.querySelector('audio');
    if (!audio) return;
    if (audio.paused) {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleAddToCalendar = () => {
    const startTime = "20261220T064500Z";
    const endTime = "20261220T073000Z";
    const title = encodeURIComponent(`വിവാഹം: ഷബിൻ & കീർത്തന`);
    const details = encodeURIComponent(`മുഹൂർത്തം: ${weddingData.wedding.muhurtham}\nസ്ഥലം: ${weddingData.wedding.venue}, ${weddingData.wedding.location}`);
    const location = encodeURIComponent(`${weddingData.wedding.venue}, ${weddingData.wedding.location}`);
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
    window.open(url, '_blank');
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `✨ *വിവാഹ ക്ഷണക്കത്ത്: ഷബിൻ & കീർത്തന* ✨\n\n` +
      `🤵 *വരൻ:* ${weddingData.groom.name}\n` +
      `💍 *വധു:* ${weddingData.bride.name}\n\n` +
      `📅 *വിവാഹം (Wedding):* ${weddingData.wedding.date} (${weddingData.wedding.muhurtham})\n` +
      `📍 *സ്ഥലം:* ${weddingData.wedding.venue}, ${weddingData.wedding.location}\n\n` +
      `🎉 *സൗഹൃദവിരുന്ന് (Reception):* ${weddingData.reception.date} (${weddingData.reception.time})\n` +
      `📍 *സ്ഥലം:* ${weddingData.reception.venue}, ${weddingData.reception.location}\n\n` +
      `✨ ${weddingData.compliments} ✨\n\n` +
      `ക്ഷണക്കത്ത് കാണുവാൻ ലിങ്ക് തുറക്കുക: ${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleOpenMap = () => {
    window.open(weddingData.wedding.mapUrl, '_blank');
  };

  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 px-3 flex justify-center pointer-events-none">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="pointer-events-auto max-w-[390px] w-full bg-[#FEF9E7]/95 backdrop-blur-xl border border-[#D97706]/35 rounded-full px-3 py-2 shadow-[0_10px_35px_rgba(74,37,8,0.15)] flex items-center justify-between gap-1"
      >
        {/* 1. Music Toggle Button with Equalizer */}
        <button
          onClick={toggleMusic}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FEF3C7] border border-[#D97706]/35 text-[#2C1405] text-xs font-cinzel font-bold transition-all active:scale-95 shadow-sm"
          title="Play / Pause Wedding Music"
        >
          {isPlaying ? (
            <div className="flex items-end gap-0.5 h-3">
              <span className="w-0.5 h-2.5 bg-[#B45309] animate-pulse" />
              <span className="w-0.5 h-3.5 bg-[#783E12] animate-bounce" />
              <span className="w-0.5 h-2 bg-[#D97706] animate-pulse" />
            </div>
          ) : (
            <VolumeX className="w-3.5 h-3.5 text-[#783E12]" />
          )}
          <span className="text-[11px] uppercase tracking-wider">{isPlaying ? 'Music' : 'Muted'}</span>
        </button>

        {/* 2. Save Date Button */}
        <button
          onClick={handleAddToCalendar}
          className="p-2 rounded-full text-[#4A2508] hover:bg-black/5 active:scale-95 transition-all flex flex-col items-center"
          title="Add to Calendar"
        >
          <Calendar className="w-4 h-4 text-[#B45309]" />
          <span className="text-[9px] font-cinzel font-semibold text-[#783E12] mt-0.5">Date</span>
        </button>

        {/* 3. Directions Map Button */}
        <button
          onClick={handleOpenMap}
          className="p-2 rounded-full text-[#4A2508] hover:bg-black/5 active:scale-95 transition-all flex flex-col items-center"
          title="Get Directions on Google Maps"
        >
          <Navigation className="w-4 h-4 text-[#B45309]" />
          <span className="text-[9px] font-cinzel font-semibold text-[#783E12] mt-0.5">Maps</span>
        </button>

        {/* 4. WhatsApp Share Button */}
        <button
          onClick={handleShareWhatsApp}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#B45309] to-[#D97706] text-white text-[11px] font-cinzel font-bold uppercase tracking-wider shadow-sm transition-all active:scale-95"
          title="Share on WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white" />
          <span>Share</span>
        </button>
      </motion.div>
    </div>
  );
};

export default MobileActionBar;
