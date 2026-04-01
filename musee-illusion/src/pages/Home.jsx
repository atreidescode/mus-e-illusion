import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heading } from '../components/ui/Heading';
import { Button } from '../components/ui/Button';
import LightRays from '../components/LightRays/LightRays';
import { useLanguage } from '../context/LanguageContext';

import imgVortex from '../assets/museum/vortex.png';
import imgRenversee from '../assets/museum/renversee.png';
import imgInfini from '../assets/museum/infini.png';

const roomImages = [imgVortex, imgRenversee, imgInfini];

export const Home = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const h = t.home;

  const [sparks, setSparks] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const newSparks = Array.from({ length: 40 }).map((_, i) => {
      const size = 1 + Math.random() * 2.5;
      const dx = (Math.random() - 0.5) * 160;
      const duration = 7 + Math.random() * 11;
      const delay = -Math.random() * 16;
      const left = Math.random() * 100;
      return { id: i, size, dx, duration, delay, left };
    });
    setSparks(newSparks);
  }, []);

  return (
    <div className="relative bg-bal-noir selection:bg-bal-or/20 overflow-hidden text-bal-texte">

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 bg-theatre-hero pointer-events-none">
        <div className="absolute inset-0 opacity-70">
          <LightRays
            raysOrigin="top-center"
            raysColor="#F0D07A"
            raysSpeed={1}
            lightSpread={0.8}
            rayLength={3.5}
            followMouse={true}
            mouseInfluence={0.1}
          />
        </div>
        <div className="absolute inset-0 z-10">
          {sparks.map((spark) => (
            <div
              key={spark.id}
              className="spark absolute rounded-full bg-bal-or-clair"
              style={{
                left: `${spark.left}%`,
                width: `${spark.size}px`,
                height: `${spark.size}px`,
                '--dx': `${spark.dx}px`,
                animationDuration: `${spark.duration}s`,
                animationDelay: `${spark.delay}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full">

        {/* HERO */}
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative">

          <span className="mb-6 px-5 py-2 border border-bal-or/20 rounded-full text-xs font-bold tracking-[0.4em] text-bal-texte/70 bg-bal-sombre/80 backdrop-blur-md uppercase">
            {h.welcome}
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-widest text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] mb-2">
            {h.musee1}
          </h1>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif italic lowercase tracking-normal text-gradient-or-rouge drop-shadow-[0_0_30px_rgba(201,168,76,0.3)] pb-2">
            {h.musee2}
          </h1>

          <div className="flex items-center justify-center gap-4 my-8">
            <div className="w-[80px] h-[1px] bg-gradient-to-r from-transparent to-bal-or/50" />
            <div className="w-[5px] h-[5px] bg-bal-or rotate-45 shadow-[0_0_8px_#C9A84C]" />
            <div className="w-[80px] h-[1px] bg-gradient-to-l from-transparent to-bal-or/50" />
          </div>

          <p className="max-w-xl mx-auto mt-2 text-white font-serif italic text-xl md:text-2xl font-light px-4">
            {h.heroQuote}
          </p>

          <div className="absolute bottom-12 flex flex-col items-center gap-3 animate-bounce opacity-70">
            <span className="text-[10px] tracking-[0.3em] uppercase text-bal-or font-bold">{h.collectionLabel}</span>
            <svg className="w-5 h-5 text-bal-or" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* SALLES DU MUSÉE */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
          <section className="pt-10 mb-24 sm:mb-32">
            <div className="space-y-20 sm:space-y-32">
              {h.rooms.map((section, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${section.reverse ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 w-full group">
                    <div className="relative w-full h-[280px] sm:h-[400px] border border-bal-or/20 bg-[#110C16] p-4 sm:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.6)] transition-all duration-500 hover:border-bal-or/50">
                      <div className="absolute top-[-1px] left-[-1px] w-4 h-4 border-t border-l border-bal-or" />
                      <div className="absolute top-[-1px] right-[-1px] w-4 h-4 border-t border-r border-bal-or" />
                      <div className="absolute bottom-[-1px] left-[-1px] w-4 h-4 border-b border-l border-bal-or" />
                      <div className="absolute bottom-[-1px] right-[-1px] w-4 h-4 border-b border-r border-bal-or" />
                      <img
                        src={roomImages[index]}
                        alt={section.alt}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      />
                    </div>
                  </div>

                  <div className="flex-1 text-left">
                    <Heading variant="h2" className="mb-4 sm:mb-6 drop-shadow-[0_0_10px_rgba(201,168,76,0.2)] !text-bal-or-clair">
                      {section.title}
                    </Heading>
                    <p className="text-bal-texte/80 leading-relaxed text-base sm:text-lg font-light">
                      {section.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* TEASER NOCTURNES */}
          <section className="relative text-center bg-bal-sombre/80 backdrop-blur-xl border border-bal-or/20 p-8 sm:p-16 rounded-[2rem] shadow-[0_24px_60px_rgba(0,0,0,0.8)] overflow-hidden">
            <Heading variant="h2" className="!font-sans !not-italic !font-bold text-white uppercase tracking-widest mb-4">
              {h.specialLabel} <span className="text-bal-or font-serif italic lowercase tracking-normal">{h.specialLabelItalic}</span>
            </Heading>
            <p className="text-bal-texte/80 mb-8 sm:mb-10 max-w-2xl mx-auto font-light text-sm sm:text-base">
              {h.specialP}
            </p>
            <Button
              variant="primary"
              onClick={() => navigate('/nocturnes-2026')}
              className="!bg-bal-or !text-bal-noir hover:!bg-bal-or-clair border-none shadow-[0_0_20px_rgba(201,168,76,0.3)]"
            >
              {h.specialBtn}
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
};