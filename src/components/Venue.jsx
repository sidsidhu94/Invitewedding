import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Copy, Check, Compass, Sparkles } from 'lucide-react';
import weddingData from '../data/weddingData';
import KasavuBorder from './decorations/KasavuBorder';

const Venue = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const venues = [
    {
      id: "wedding-venue",
      partBadge: "വിവാഹം (The Wedding)",
      type: "വധൂഗൃഹം (Bride's Residence)",
      name: `${weddingData.wedding.venue} (${weddingData.bride.shortName}യുടെ വീട്)`,
      location: weddingData.wedding.location,
      landmark: "Near GHSSP, Kunjippally, Kottali, Kannur",
      date: weddingData.wedding.date,
      time: `മുഹൂർത്തം: ${weddingData.wedding.muhurtham}`,
      mapUrl: weddingData.wedding.mapUrl,
      fullAddress: weddingData.wedding.fullAddress
    },
    {
      id: "reception-venue",
      partBadge: "സൗഹൃദവിരുന്ന് (Reception)",
      type: "ഞങ്ങളുടെ വീട് (Groom's Residence)",
      name: `${weddingData.reception.venue} (ഷബിന്റെ വീട്)`,
      location: weddingData.reception.location,
      landmark: "Athazhakkunnu, Pulluppi, Kottali, Kannur",
      date: weddingData.reception.date,
      time: `സമയം: ${weddingData.reception.time}`,
      mapUrl: weddingData.reception.mapUrl,
      fullAddress: weddingData.reception.fullAddress
    }
  ];

  const handleCopyAddress = (address, index) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(address);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    }
  };

  return (
    <section id="venue" className="py-16 sm:py-24 px-3 sm:px-4 bg-gradient-to-b from-[#0B0214] via-[#160829] to-[#0B0214] relative transition-colors duration-500 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] bg-[#C084FC]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[440px] sm:max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C084FC]/15 border border-[#C084FC]/40 text-[#E9D5FF] text-[11px] uppercase tracking-[0.25em] font-cinzel mb-2 font-bold">
              <Compass className="w-3.5 h-3.5 text-[#C084FC]" />
              Travel & Route Guide
            </span>
            <h2 className="font-marcellus text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F3E8FF] to-[#C084FC] uppercase tracking-wider">
              Venue & Directions
            </h2>
            <p className="font-garamond text-[#E9D5FF] text-xs sm:text-sm italic mt-1">
              Join our celebrations in Kannur, Kerala
            </p>
            <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#C084FC] to-transparent mx-auto mt-2.5" />
          </motion.div>
        </div>

        {/* Venues Mobile Stack */}
        <div className="flex flex-col gap-6">
          {venues.map((venue, idx) => (
            <motion.div
              key={venue.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="rounded-3xl border border-[#C084FC]/40 bg-gradient-to-b from-[#240E44] via-[#1A0933] to-[#0E031B] p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative overflow-hidden"
            >
              <KasavuBorder className="w-full h-2 mb-3" />

              <div>
                {/* Part Badge & Ceremony Type */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-[#C084FC]/40 bg-[#C084FC]/15 text-[#E9D5FF] text-[10px] font-cinzel tracking-wider uppercase font-semibold">
                    <Sparkles className="w-3 h-3 text-[#C084FC]" />
                    <span>{venue.partBadge}</span>
                  </span>

                  <span className="text-[11px] font-cinzel text-white uppercase tracking-wider font-bold">
                    {venue.type}
                  </span>
                </div>

                {/* Venue Name */}
                <h3 className="font-marcellus text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F3E8FF] to-[#C084FC] tracking-wide mb-1">
                  {venue.name}
                </h3>

                {/* Location Line */}
                <p className="font-garamond italic text-[#E9D5FF] text-sm mb-3 flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C084FC] shrink-0 mt-0.5" />
                  <span>{venue.location}</span>
                </p>

                {/* Landmark Info */}
                <div className="p-3 rounded-xl bg-[#0B0214]/90 border border-[#C084FC]/20 mb-4 text-xs text-[#E9D5FF] leading-relaxed font-sans">
                  <span className="font-bold text-[#C084FC]">Landmark: </span>
                  {venue.landmark}
                </div>

                {/* Timing Summary */}
                <div className="mb-4 text-xs font-cinzel uppercase tracking-wider text-[#C084FC] font-semibold">
                  ✦ {venue.time}
                </div>
              </div>

              {/* Action Buttons for Mobile */}
              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href={venue.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-full bg-gradient-to-r from-[#9333EA] to-[#C084FC] active:scale-95 text-white font-cinzel font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(192,132,252,0.4)] transition-transform"
                >
                  <Navigation className="w-3.5 h-3.5 text-white" />
                  <span>Open Maps</span>
                </a>

                <button
                  onClick={() => handleCopyAddress(venue.fullAddress, idx)}
                  className="py-2.5 px-3.5 rounded-full border border-[#C084FC]/40 bg-[#160829] active:scale-95 text-[#E9D5FF] text-xs font-cinzel uppercase tracking-wider flex items-center gap-1.5 transition-transform cursor-pointer"
                  title="Copy full address"
                >
                  {copiedIndex === idx ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#C084FC]" />
                      <span className="text-[#C084FC] font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#C084FC]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Venue;
