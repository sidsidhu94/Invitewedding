import React from 'react';
import weddingData from '../data/weddingData';
import NilavilakkuIllustration from './decorations/NilavilakkuIllustration';
import KasavuBorder from './decorations/KasavuBorder';

const Footer = () => {
  return (
    <footer className="bg-[#040008] border-t border-[#C084FC]/30 pt-12 pb-28 sm:pb-16 px-4 text-center relative overflow-hidden transition-colors duration-500">
      <div className="max-w-4xl mx-auto space-y-5">
        
        {/* Kasavu Border Top */}
        <KasavuBorder className="w-full h-2.5 mb-2" />

        {/* Traditional Kerala Nilavilakku Icon */}
        <div className="flex justify-center">
          <NilavilakkuIllustration className="w-10 h-16 opacity-80" glowing={false} />
        </div>

        {/* Monogram / Couple Names */}
        <h3 className="font-malayalam font-bold text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F3E8FF] to-[#C084FC]">
          {weddingData.groom.shortName} <span className="text-[#C084FC] font-serif text-2xl">&</span> {weddingData.bride.shortName}
        </h3>
        <p className="font-greatvibes text-2xl text-[#E9D5FF]/90 italic">
          {weddingData.groom.englishShortName} & {weddingData.bride.englishShortName}
        </p>

        <p className="font-malayalam text-xs text-[#E9D5FF] tracking-wider font-semibold">
          {weddingData.wedding.date} • {weddingData.wedding.location}, കണ്ണൂർ
        </p>

        <div className="w-20 h-[1px] bg-[#C084FC]/30 mx-auto" />

        {/* Closing Blessing */}
        <p className="font-malayalam text-[#FAF5FF] text-xs sm:text-sm max-w-md mx-auto">
          {weddingData.compliments}
        </p>

        <p className="text-[10px] font-malayalam text-[#C084FC]/70 tracking-wider">
          © 2026 ഷബിൻ & കീർത്തന • ശുഭ വിവാഹം • Kerala Wedding Invitation
        </p>
      </div>
    </footer>
  );
};

export default Footer;
