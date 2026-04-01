import { useEffect, useState } from 'react';
import LightRays from '../components/LightRays/LightRays';
import { useLanguage } from '../context/LanguageContext';

import imgMaryam from '../assets/equipe/Maryam_page-0001.jpg';
import imgNoham from '../assets/equipe/Noham.jpeg';
import imgNoha from '../assets/equipe/Noha.jpeg';
import imgMelissa from '../assets/equipe/Melissa.jpeg';
import imgIlias from '../assets/equipe/Ilias.jpeg';
import imgLionel from '../assets/equipe/Lionel.jpeg';

const memberImages = {
  "01": imgMaryam,
  "02": imgNoham,
  "03": imgNoha,
  "04": imgMelissa,
  "05": imgIlias,
  "06": imgLionel,
};

export const Equipe = () => {
  const { t } = useLanguage();
  const eq = t.equipe;

  const [sparks, setSparks] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const newSparks = Array.from({ length: 40 }).map((_, i) => ({
      id: i, size: 1 + Math.random() * 2.5, dx: (Math.random() - 0.5) * 160,
      duration: 7 + Math.random() * 11, delay: -Math.random() * 16, left: Math.random() * 100
    }));
    setSparks(newSparks);
  }, []);

  return (
    <div className="relative bg-bal-noir selection:bg-bal-or/20 overflow-hidden text-bal-texte min-h-screen">

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 bg-theatre-hero pointer-events-none">
        <div className="absolute inset-0 opacity-70">
          <LightRays
            raysOrigin="top-center"
            raysColor="#F0D07A"
            raysSpeed={1} lightSpread={0.8} rayLength={3.5}
            followMouse={true} mouseInfluence={0.1}
          />
        </div>
        <div className="absolute inset-0 z-10">
          {sparks.map((spark) => (
            <div
              key={spark.id}
              className="spark absolute rounded-full bg-bal-or-clair"
              style={{
                left: `${spark.left}%`, width: `${spark.size}px`, height: `${spark.size}px`,
                '--dx': `${spark.dx}px`, animationDuration: `${spark.duration}s`, animationDelay: `${spark.delay}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full pb-20 sm:pb-32">

        {/* HERO — responsive top padding */}
        <div className="pt-28 sm:pt-40 pb-12 sm:pb-20 px-4 sm:px-6 max-w-[1400px] mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-end">
          <div className="animate-apparu">
            <div className="flex items-center gap-4 font-sans text-[11px] tracking-[6px] font-semibold text-bal-or uppercase mb-6 before:h-[1px] before:w-10 before:bg-bal-or">
              {eq.badge}
            </div>
            <h1 className="font-cinzel-dec font-bold text-[clamp(36px,6vw,88px)] leading-none text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              {eq.heading1}<br/>
              <span className="text-gradient-or-rouge italic">{eq.headingItalic}</span><br/>
              {eq.heading2}
            </h1>
          </div>

          <div className="animate-apparu" style={{ animationDelay: '0.2s' }}>
            <p className="font-serif italic text-[17px] sm:text-[19px] leading-[1.8] text-bal-texte-dim max-w-[400px] mb-8 sm:mb-10">
              {eq.subQuote}
            </p>
          </div>
        </div>

        {/* BENTO GRID */}
        <div className="px-4 sm:px-6 max-w-[1400px] mx-auto">
          {/* On mobile: single column, auto height. On md+: 12-col bento with fixed row heights */}
          <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[280px] gap-4">

            {eq.members.map((member, index) => (
              <div
                key={member.id}
                className={`group relative overflow-hidden bg-[#110C16] border border-bal-or/20 hover:border-bal-or/50 transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.6)] animate-apparu
                  min-h-[280px] ${member.className}`}
                style={{ animationDelay: `${0.5 + (index * 0.1)}s` }}
              >
                {/* Coins dorés */}
                <div className="absolute top-[-1px] left-[-1px] w-4 h-4 border-t border-l border-bal-or z-20" />
                <div className="absolute top-[-1px] right-[-1px] w-4 h-4 border-t border-r border-bal-or z-20" />
                <div className="absolute bottom-[-1px] left-[-1px] w-4 h-4 border-b border-l border-bal-or z-20" />
                <div className="absolute bottom-[-1px] right-[-1px] w-4 h-4 border-b border-r border-bal-or z-20" />

                {/* Portrait */}
                <div className="absolute top-[30px] left-1/2 -translate-x-1/2 w-[140px] sm:w-[160px] h-[140px] sm:h-[160px] border border-bal-or/30 rounded-sm overflow-hidden z-10 transition-all duration-500 group-hover:border-bal-or/60 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(201,168,76,0.2)]">
                  <img
                    src={memberImages[member.id]}
                    alt={member.name}
                    className="w-full h-full object-cover filter brightness-[.85] group-hover:brightness-[1] transition-all duration-500"
                  />
                </div>

                <div className="absolute top-6 right-6 font-cinzel-dec text-[14px] text-bal-or/40 z-20">{member.id} / 06</div>

                {/* Texte recto */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-20 transition-transform duration-500 group-hover:translate-y-8 group-hover:opacity-0">
                  <span className="inline-block self-start font-sans text-[9px] tracking-[2px] font-semibold text-bal-noir uppercase bg-bal-or px-3 py-1 mb-3 sm:mb-4">{member.tag}</span>
                  <h3 className="font-serif text-[clamp(20px,2.5vw,32px)] font-bold text-white leading-none mb-2">{member.name}</h3>
                  <p className="font-sans text-[11px] sm:text-[12px] text-bal-texte-dim font-light leading-snug">{member.role}</p>
                </div>

                {/* Panneau hover */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-center items-center text-center z-30 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-bal-noir/90 backdrop-blur-sm">
                  <p className="font-serif italic text-[16px] sm:text-[18px] text-bal-or-clair leading-[1.6]">"{member.quote}"</p>
                </div>
              </div>
            ))}

            {/* Citation finale */}
            <div className="md:col-span-7 md:row-span-1 flex flex-col justify-center p-8 sm:p-12 bg-bal-sombre2 border border-bal-or/10 relative overflow-hidden animate-apparu" style={{ animationDelay: '1.2s' }}>
              <p className="font-serif italic text-[20px] sm:text-[24px] text-white leading-[1.4] mb-6">
                {eq.finalQuote}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};