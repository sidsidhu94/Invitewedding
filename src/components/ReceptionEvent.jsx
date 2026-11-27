import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation, Sparkles } from 'lucide-react';
import weddingData from '../data/weddingData';
import MandapIllustration from './decorations/MandapIllustration';
import KasavuBorder from './decorations/KasavuBorder';
import { useWritingStyle } from '../context/WritingStyleContext';

const ReceptionEvent = () => {
  const { activeStyle } = useWritingStyle();
  const handleAddToCalendar = () => {
    const startTime = "20261220T113000Z";
    const endTime = "20261220T153000Z";
    const title = encodeURIComponent(`സൗഹൃദവിരുന്ന്: ഷബിൻ & കീർത്തന`);
    const details = encodeURIComponent(`സമയം: ${weddingData.reception.time}\nസ്ഥലം: ${weddingData.reception.venue}, ${weddingData.reception.location}\n${weddingData.reception.invitation}`);
    const location = encodeURIComponent(`${weddingData.reception.venue}, ${weddingData.reception.location}`);
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
    window.open(url, '_blank');
  };

  return (
    <section id="reception" className="py-16 sm:py-24 px-3 sm:px-4 bg-gradient-to-b from-[#FEF9E7] via-[#FFFDF0] to-[#FEF9E7] relative transition-colors duration-500 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[440px] sm:max-w-3xl mx-auto relative z-10">
        
        {/* Ceremonial Itinerary Part 2 Badge */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-cinzel mb-2 ${activeStyle.accentBadge}`}>
              <Sparkles className="w-3 h-3 text-[#B45309]" />
              Wedding Reception
            </span>
            <h2 className="font-malayalam text-3xl sm:text-4xl font-extrabold tracking-wider text-[#2C1405]">
              {weddingData.reception.title}
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

          {/* Mandap Illustration Header */}
          <div className="relative z-10 mb-2">
            <MandapIllustration className="w-24 h-14 mx-auto text-[#B45309] filter drop-shadow-[0_2px_4px_rgba(180,83,9,0.2)]" />
          </div>

          <p className={`font-malayalam text-xs sm:text-sm font-medium max-w-md mx-auto leading-relaxed mb-3 ${activeStyle.bodyText}`}>
            {weddingData.reception.invitation}
          </p>
          
          <h3 className="font-malayalam text-2xl sm:text-3xl font-extrabold tracking-wide mt-0.5 mb-4 text-[#2C1405]">
            {weddingData.reception.title}
          </h3>

          {/* Traditional Date Badge */}
          <div className={`inline-block rounded-2xl p-4 sm:p-5 shadow-sm mb-5 max-w-sm w-full border ${activeStyle.highlightBox}`}>
            <div className="flex items-center justify-center gap-2 text-xl sm:text-2xl font-malayalam font-bold border-b border-[#D97706]/25 pb-2.5 text-[#2C1405]">
              <span>{weddingData.reception.date}</span>
            </div>
            <div className="pt-2 flex items-center justify-center gap-2">
              <Sparkles className="w-3 h-3 text-[#B45309]" />
              <span className="font-malayalam text-xs sm:text-sm font-medium text-[#5C2E0B]">
                ({weddingData.wedding.malayalamDate})
              </span>
              <Sparkles className="w-3 h-3 text-[#B45309]" />
            </div>
          </div>

          {/* Time & Venue Cards for Mobile */}
          <div className="flex flex-col gap-3 max-w-md mx-auto mb-6 text-left">
            
            {/* Timing Box */}
            <div className="p-3.5 rounded-2xl bg-[#FFFDF0] border border-[#D97706]/30 flex items-center gap-3.5 shadow-sm">
              <div className="p-2.5 rounded-full bg-[#FEF3C7] border border-[#D97706]/40 text-[#B45309] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="font-malayalam text-xs text-[#783E12] font-semibold block">സമയം (Hours)</span>
                <p className="font-malayalam font-bold text-sm sm:text-base text-[#2C1405] mt-0.5">
                  {weddingData.reception.time}
                </p>
              </div>
            </div>

            {/* Venue Location Box */}
            <div className="p-3.5 rounded-2xl bg-[#FFFDF0] border border-[#D97706]/30 flex items-center gap-3.5 shadow-sm">
              <div className="p-2.5 rounded-full bg-[#FEF3C7] border border-[#D97706]/40 text-[#B45309] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-malayalam text-xs text-[#783E12] font-semibold block">സ്ഥലം (Venue)</span>
                <p className="font-malayalam font-bold text-sm sm:text-base text-[#2C1405] mt-0.5">
                  {weddingData.reception.venue} (ഷബിന്റെ വീട്)
                </p>
                <p className="font-malayalam text-[#5C2E0B] text-xs mt-0.5">
                  {weddingData.reception.fullAddress}
                </p>
              </div>
            </div>

          </div>

          {/* Action Buttons for Mobile */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-1">
            <a
              href={weddingData.reception.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#B45309] to-[#D97706] active:scale-95 text-white font-cinzel font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-md transition-transform"
            >
              <Navigation className="w-4 h-4 text-white" />
              <span>Get Directions to Residence</span>
            </a>

            <button
              onClick={handleAddToCalendar}
              className="w-full sm:w-auto px-5 py-3 rounded-full border border-[#D97706]/40 bg-[#FEF3C7] active:scale-95 text-[#4A2508] font-cinzel font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-transform cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#B45309]" />
              <span>Add to Calendar</span>
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default ReceptionEvent;
