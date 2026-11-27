import React from 'react';
import weddingData from '../data/weddingData';
import NilavilakkuIllustration from './decorations/NilavilakkuIllustration';
import KasavuBorder from './decorations/KasavuBorder';

const Footer = () => {
  return (
    <footer className="bg-[#FDF6D8] border-t border-[#D97706]/25 pt-12 pb-28 sm:pb-16 px-4 text-center relative overflow-hidden transition-colors duration-500">
      <div className="max-w-4xl mx-auto space-y-4">
        
        {/* Kasavu Border Top */}
        <KasavuBorder className="w-full h-2.5 mb-2" />

        {/* Traditional Kerala Nilavilakku Icon */}
        <div className="flex justify-center">
          <NilavilakkuIllustration className="w-10 h-16 opacity-90" glowing={false} />
        </div>

        {/* Monogram / Couple Names (Pure Malayalam) */}
        <h3 className="font-malayalam font-extrabold text-2xl md:text-3xl text-[#2C1405]">
          {weddingData.groom.shortName} <span className="text-[#B45309] font-serif text-2xl">&amp;</span> {weddingData.bride.shortName}
        </h3>

        <p className="font-malayalam text-xs text-[#5C2E0B] tracking-wider font-semibold">
          {weddingData.wedding.date} • {weddingData.wedding.location}, കണ്ണൂർ
        </p>

        <div className="w-20 h-[1px] bg-[#D97706]/25 mx-auto" />

        {/* Closing Blessing */}
        <p className="font-malayalam text-[#4A2508] text-xs sm:text-sm max-w-md mx-auto">
          {weddingData.compliments}
        </p>

        <p className="text-[10px] font-malayalam text-[#783E12] tracking-wider pt-2">
          © 2026 ഷബിൻ &amp; കീർത്തന
        </p>
      </div>
    </footer>
  );
};

export default Footer;
