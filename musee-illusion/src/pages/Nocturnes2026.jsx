import { useEffect, useState } from 'react';
import { Heading } from '../components/ui/Heading';
import LightRays from '../components/LightRays/LightRays';
import { useLanguage } from '../context/LanguageContext';

export const Nocturnes2026 = () => {
  const { t } = useLanguage();
  const n = t.nocturnes;

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
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 relative pt-24 sm:pt-20">

          <span className="mb-6 px-5 py-2 border border-bal-or/30 rounded-full text-xs font-bold tracking-[0.4em] text-bal-or bg-bal-sombre/80 backdrop-blur-md uppercase shadow-[0_0_20px_rgba(201,168,76,0.15)]">
            {n.badge}
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-widest text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] mb-2 mt-4">
            {n.title1}
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif italic lowercase tracking-normal text-gradient-or-rouge drop-shadow-[0_0_30px_rgba(201,168,76,0.3)] pb-2">
            {n.title2}
          </h1>

          <div className="flex items-center justify-center gap-4 mx-auto my-8">
            <div className="w-[80px] h-[1px] bg-gradient-to-r from-transparent to-bal-or/50" />
            <div className="w-[5px] h-[5px] bg-bal-or rotate-45 shadow-[0_0_8px_#C9A84C]" />
            <div className="w-[80px] h-[1px] bg-gradient-to-l from-transparent to-bal-or/50" />
          </div>

          <p className="max-w-xl mx-auto mt-2 text-bal-texte/80 font-serif italic text-lg sm:text-xl md:text-2xl font-light px-4">
            {n.heroQuote}
          </p>
        </div>

        {/* CONTENU */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-24 pt-10">
          <section className="relative">
            <div className="bg-bal-sombre/80 backdrop-blur-2xl border border-bal-or/20 p-6 sm:p-10 md:p-16 rounded-[2rem] shadow-[0_24px_60px_rgba(0,0,0,0.8)]">

              <div className="text-center mb-10 sm:mb-16">
                <p className="text-base sm:text-lg text-bal-texte/90 font-light max-w-3xl mx-auto leading-relaxed">
                  {n.intro}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-16">
                <div className="bg-[#110C16] border border-bal-or/15 p-6 sm:p-8 rounded-2xl hover:border-bal-or/40 transition-all group">
                  <div className="font-sans text-[10px] tracking-[5px] font-semibold text-bal-or uppercase mb-2">{n.conceptEyebrow}</div>
                  <h3 className="text-white font-serif text-xl sm:text-2xl mb-4 group-hover:text-bal-or-clair transition-colors">{n.conceptTitle}</h3>
                  <p className="text-bal-texte/70 text-sm leading-relaxed font-light">{n.conceptP}</p>
                </div>

                <div className="bg-[#110C16] border border-bal-or/15 p-6 sm:p-8 rounded-2xl hover:border-bal-or/40 transition-all group">
                  <div className="font-sans text-[10px] tracking-[5px] font-semibold text-bal-or uppercase mb-2">{n.interactifEyebrow}</div>
                  <h3 className="text-white font-serif text-xl sm:text-2xl mb-4 group-hover:text-bal-or-clair transition-colors">{n.interactifTitle}</h3>
                  <p className="text-bal-texte/70 text-sm leading-relaxed font-light">{n.interactifP}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* QUAND */}
                <div className="bg-black/40 border border-bal-or/10 p-6 sm:p-8 rounded-2xl">
                  <h4 className="text-bal-or font-sans font-semibold uppercase tracking-widest text-sm mb-6 border-b border-bal-or/10 pb-4">{n.whenTitle}</h4>
                  <p className="font-bold text-white mb-1">{n.when1Bold}</p>
                  <p className="text-xs mb-4 text-bal-texte/60">{n.when1Dates}</p>
                  <p className="font-bold text-white mb-1">{n.when2Bold}</p>
                  <p className="text-xs mb-6 text-bal-texte/60">{n.when2Dates}</p>
                  <p className="font-bold text-bal-or tracking-widest uppercase text-sm">{n.whenTime}</p>
                </div>

                {/* TARIFS */}
                <div className="bg-black/40 border border-bal-or/10 p-6 sm:p-8 rounded-2xl">
                  <h4 className="text-bal-or font-sans font-semibold uppercase tracking-widest text-sm mb-6 border-b border-bal-or/10 pb-4">{n.pricesTitle}</h4>
                  <ul className="space-y-4 text-sm mt-4">
                    <li className="flex justify-between border-b border-white/5 pb-3">
                      <span className="text-bal-texte/70">{n.priceAdult}</span> <span className="font-bold text-white">22 €</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-3">
                      <span className="text-bal-texte/70">{n.priceStudent}</span> <span className="font-bold text-white">19 €</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-bal-texte/70">{n.priceChild}</span> <span className="font-bold text-white">16 €</span>
                    </li>
                  </ul>
                </div>

                {/* PRATIQUE */}
                <div className="bg-black/40 border border-bal-or/10 p-6 sm:p-8 rounded-2xl flex flex-col">
                  <h4 className="text-bal-or font-sans font-semibold uppercase tracking-widest text-sm mb-6 border-b border-bal-or/10 pb-4">{n.practicalTitle}</h4>
                  <p className="text-sm mb-3 text-bal-texte/70">
                    <strong className="text-white">{n.practicalPlace}</strong><br/>
                    {n.practicalPlaceValue}
                  </p>
                  <p className="text-sm mb-4 text-bal-texte/70">
                    <strong className="text-white">{n.practicalAccess}</strong><br/>
                    {n.practicalAccessValue.split('\n').map((line, i) => (
                      <span key={i}>{line}{i === 0 && <br/>}</span>
                    ))}
                  </p>
                  <div className="mt-auto">
                    <span className="inline-block bg-bal-or text-bal-noir px-3 py-1 text-[9px] font-bold tracking-[0.2em] uppercase mt-2">
                      {n.practicalPMR}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>
    </div>
  );
};