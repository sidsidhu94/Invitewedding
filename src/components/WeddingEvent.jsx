import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation, Sparkles } from 'lucide-react';
import weddingData from '../data/weddingData';
import WeddingRingIllustration from './decorations/WeddingRingIllustration';
import KasavuBorder from './decorations/KasavuBorder';
import { useWritingStyle } from '../context/WritingStyleContext';

const WeddingEvent = () => {
  const { activeStyle } = useWritingStyle();
  const handleAddToCalendar = () => {
    const startTime = "20261220T064500Z";
    const endTime = "20261220T073000Z";
    const title = encodeURIComponent(`വിവാഹം: ഷബിൻ & കീർത്തന`);
    const details = encodeURIComponent(`മുഹൂർത്തം: ${weddingData.wedding.muhurtham}\nസ്ഥലം: ${weddingData.wedding.venue}, ${weddingData.wedding.location}\nവിലാസം: ${weddingData.wedding.fullAddress}`);
    const location = encodeURIComponent(`${weddingData.wedding.venue}, ${weddingData.wedding.location}`);
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
    window.open(url, '_blank');
  };

  return (
    <section id="wedding" className="py-16 sm:py-24 px-3 sm:px-4 bg-gradient-to-b from-[#0B0214] via-[#160829] to-[#0B0214] relative transition-colors duration-500 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] bg-[#C084FC]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[440px] sm:max-w-3xl mx-auto relative z-10">
        
        {/* Ceremonial Itinerary Part 1 Badge */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-cinzel mb-2 ${activeStyle.accentBadge}`}>
              <Sparkles className="w-3 h-3" />
              The Sacred Ceremony
            </span>
            <h2 className={`font-malayalam text-3xl sm:text-4xl font-extrabold tracking-wider ${activeStyle.titleGradient}`}>
              {weddingData.wedding.title} (THE WEDDING)
            </h2>
            <div className={`w-24 h-[1.5px] mx-auto mt-2.5 ${activeStyle.divider}`} />
          </motion.div>
        </div>

        {/* Mobile Architectural Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`relative rounded-3xl ${activeStyle.cardBg} ${activeStyle.cardBorder} p-5 sm:p-10 text-center overflow-hidden transition-colors duration-500`}
        >
          <KasavuBorder className="w-full h-2.5 mb-3" />

          {/* Icon Header */}
          <div className="relative z-10 mb-2">
            <WeddingRingIllustration className={`w-14 h-14 mx-auto ${activeStyle.isLight ? 'text-[#8C6B28]' : 'text-[#C084FC]'} filter drop-shadow-[0_0_12px_rgba(192,132,252,0.6)]`} />
          </div>

          <span className={`font-malayalam text-base sm:text-lg font-semibold ${activeStyle.subtleLabel}`}>
            ശുഭ മുഹൂർത്തം
          </span>
          
          <h3 className={`font-malayalam text-2xl sm:text-3xl font-extrabold tracking-wide mt-0.5 mb-4 ${activeStyle.titleGradient}`}>
            {weddingData.wedding.title}
          </h3>

          {/* Event Details Stack for Mobile */}
          <div className="flex flex-col gap-3 max-w-md mx-auto mb-6 text-left">
            
            {/* Muhurtham Timing Box (Highlighted Neon Glow) */}
            <div className={`p-4 rounded-2xl flex items-center gap-3.5 shadow-md ${activeStyle.highlightBox}`}>
              <div className={`p-2.5 rounded-full border shrink-0 ${activeStyle.isLight ? 'bg-[#C5A25D]/20 border-[#C5A25D]' : 'bg-[#9333EA]/25 border-[#C084FC]/60 text-white'}`}>
                <Clock className={`w-5 h-5 ${activeStyle.clockIcon}`} />
              </div>
              <div>
                <span className={`font-malayalam text-xs font-bold block ${activeStyle.subtleLabel}`}>മുഹൂർത്തം (Muhurtham)</span>
                <p className={`font-malayalam font-bold text-base sm:text-lg leading-tight mt-0.5 ${activeStyle.bodyText}`}>
                  {weddingData.wedding.muhurtham}
                </p>
              </div>
            </div>

            {/* Auspicious Date Box */}
            <div className="p-3.5 rounded-2xl border flex items-center gap-3.5 shadow-sm bg-[#160829]/90 border-[#C084FC]/30 text-white">
              <div className="p-2.5 rounded-full bg-[#C084FC]/15 border border-[#C084FC]/30 text-[#C084FC] shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="font-malayalam text-xs text-[#E9D5FF] font-semibold block">തീയതി (Date)</span>
                <p className="font-malayalam font-bold text-sm sm:text-base text-white mt-0.5">
                  {weddingData.wedding.date}
                </p>
                <p className="font-malayalam text-xs text-[#C084FC] mt-0.5">
                  ({weddingData.wedding.malayalamDate})
                </p>
              </div>
            </div>

            {/* Venue Box */}
            <div className="p-3.5 rounded-2xl bg-[#160829]/90 border border-[#C084FC]/30 flex items-center gap-3.5 shadow-sm">
              <div className="p-2.5 rounded-full bg-[#C084FC]/15 border border-[#C084FC]/30 text-[#C084FC] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-malayalam text-xs text-[#E9D5FF] font-semibold block">സ്ഥലം (Venue)</span>
                <p className="font-malayalam font-bold text-sm sm:text-base text-white mt-0.5">
                  {weddingData.wedding.venue} ({weddingData.bride.shortName}യുടെ വീട്)
                </p>
                <p className="font-malayalam text-[#FAF5FF]/90 text-xs mt-0.5">
                  {weddingData.wedding.fullAddress}
                </p>
              </div>
            </div>

          </div>

          {/* Action Buttons for Mobile */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-1">
            <a
              href={weddingData.wedding.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#9333EA] to-[#C084FC] active:scale-95 text-white font-cinzel font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(192,132,252,0.4)] transition-transform"
            >
              <Navigation className="w-4 h-4 text-white" />
              <span>Get Directions to Mandap</span>
            </a>

            <button
              onClick={handleAddToCalendar}
              className="w-full sm:w-auto px-5 py-3 rounded-full border border-[#C084FC]/50 bg-[#160829] active:scale-95 text-[#E9D5FF] font-cinzel font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-transform cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#C084FC]" />
              <span>Add to Calendar</span>
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default WeddingEvent;
