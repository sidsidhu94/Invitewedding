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
    <section id="venue" className="py-16 sm:py-24 px-3 sm:px-4 bg-gradient-to-b from-[#FEF9E7] via-[#FFFDF0] to-[#FEF9E7] relative transition-colors duration-500 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[440px] sm:max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FEF3C7] border border-[#D97706]/40 text-[#4A2508] text-[11px] uppercase tracking-[0.25em] font-cinzel mb-2 font-bold">
              <Compass className="w-3.5 h-3.5 text-[#B45309]" />
              Travel & Route Guide
            </span>
            <h2 className="font-marcellus text-2xl sm:text-4xl font-extrabold text-[#2C1405] uppercase tracking-wider">
              Venue & Directions
            </h2>
            <p className="font-garamond text-[#783E12] text-xs sm:text-sm italic mt-1">
              Join our celebrations in Kannur, Kerala
            </p>
            <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#D97706] to-transparent mx-auto mt-2.5" />
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
              className="rounded-3xl border border-[#D97706]/35 bg-[#FFFDF0] p-5 sm:p-7 shadow-md relative overflow-hidden"
            >
              <KasavuBorder className="w-full h-2 mb-3" />

              <div>
                {/* Part Badge & Ceremony Type */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-[#D97706]/35 bg-[#FEF3C7] text-[#4A2508] text-[10px] font-cinzel tracking-wider uppercase font-semibold">
                    <Sparkles className="w-3 h-3 text-[#B45309]" />
                    <span>{venue.partBadge}</span>
                  </span>

                  <span className="text-[11px] font-cinzel text-[#783E12] uppercase tracking-wider font-bold">
                    {venue.type}
                  </span>
                </div>

                {/* Venue Name */}
                <h3 className="font-marcellus text-xl sm:text-2xl font-bold text-[#2C1405] tracking-wide mb-1">
                  {venue.name}
                </h3>

                {/* Location Line */}
                <p className="font-garamond italic text-[#5C2E0B] text-sm mb-3 flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B45309] shrink-0 mt-0.5" />
                  <span>{venue.location}</span>
                </p>

                {/* Landmark Info */}
                <div className="p-3 rounded-xl bg-[#FEF9E7] border border-[#D97706]/20 mb-4 text-xs text-[#4A2508] leading-relaxed font-sans">
                  <span className="font-bold text-[#B45309]">Landmark: </span>
                  {venue.landmark}
                </div>

                {/* Timing Summary */}
                <div className="mb-4 text-xs font-cinzel uppercase tracking-wider text-[#B45309] font-semibold">
                  ✦ {venue.time}
                </div>
              </div>

              {/* Action Buttons for Mobile */}
              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href={venue.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-full bg-gradient-to-r from-[#B45309] to-[#D97706] active:scale-95 text-white font-cinzel font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 shadow-md transition-transform"
                >
                  <Navigation className="w-3.5 h-3.5 text-white" />
                  <span>Open Maps</span>
                </a>

                <button
                  onClick={() => handleCopyAddress(venue.fullAddress, idx)}
                  className="py-2.5 px-3.5 rounded-full border border-[#D97706]/40 bg-[#FEF3C7] active:scale-95 text-[#4A2508] text-xs font-cinzel uppercase tracking-wider flex items-center gap-1.5 transition-transform cursor-pointer"
                  title="Copy full address"
                >
                  {copiedIndex === idx ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#B45309]" />
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
