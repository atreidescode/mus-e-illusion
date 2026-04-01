import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Event2027 = () => {
  const { t } = useLanguage();
  const bal = t.bal;

  const [sparks, setSparks] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const trackRef = useRef(null);
  const slideIndexRef = useRef(0);
  // ✅ FIX: expose goTo so card clicks & dot clicks can call it
  const goToRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const newSparks = Array.from({ length: 60 }).map((_, i) => ({
      id: i, size: 1 + Math.random() * 2.5, dx: (Math.random() - 0.5) * 160,
      duration: 7 + Math.random() * 11, delay: -Math.random() * 16, left: Math.random() * 100
    }));
    setSparks(newSparks);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.rev, .rev-g, .rev-d').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Logique du Slider (Souris + Tactile)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.children);
    let isDrag = false;
    let startX = 0;
    let hasDragged = false;

    const offsetForIndex = (idx) => {
      const sceneW = track.parentElement.offsetWidth || window.innerWidth;
      const cw = cards[idx].offsetWidth;
      const style = window.getComputedStyle(cards[0]);
      const marginL = parseFloat(style.marginLeft) || 12;
      const marginR = parseFloat(style.marginRight) || 12;
      const step = cw + marginL + marginR;
      let cardLeft = marginL;
      for (let i = 0; i < idx; i++) cardLeft += step;
      return cardLeft - (sceneW / 2) + (cw / 2);
    };

    const goTo = (idx) => {
      const validIdx = Math.max(0, Math.min(idx, cards.length - 1));
      slideIndexRef.current = validIdx;
      setCurrentSlide(validIdx);
      track.style.transition = 'transform .45s cubic-bezier(.25,.46,.45,.94)';
      track.style.transform = `translateX(${-offsetForIndex(validIdx)}px)`;
    };

    // ✅ FIX: expose goTo via ref so outside handlers can call it
    goToRef.current = goTo;

    const onMouseDown = (e) => {
      isDrag = true;
      hasDragged = false;
      startX = e.clientX;
      track.style.transition = 'none';
    };
    const onMouseMove = (e) => {
      if (!isDrag) return;
      const diff = e.clientX - startX;
      if (Math.abs(diff) > 5) hasDragged = true;
      track.style.transform = `translateX(${-offsetForIndex(slideIndexRef.current) + diff}px)`;
    };
    const onMouseUp = (e) => {
      if (!isDrag) return;
      isDrag = false;
      const diff = e.clientX - startX;
      if (diff < -60) goTo(slideIndexRef.current + 1);
      else if (diff > 60) goTo(slideIndexRef.current - 1);
      else goTo(slideIndexRef.current);
      // reset hasDragged after a short delay so click doesn't fire
      setTimeout(() => { hasDragged = false; }, 50);
    };
    const onTouchStart = (e) => {
      isDrag = true;
      hasDragged = false;
      startX = e.touches[0].clientX;
      track.style.transition = 'none';
    };
    const onTouchMove = (e) => {
      if (!isDrag) return;
      const diff = e.touches[0].clientX - startX;
      if (Math.abs(diff) > 5) hasDragged = true;
      track.style.transform = `translateX(${-offsetForIndex(slideIndexRef.current) + diff}px)`;
    };
    const onTouchEnd = (e) => {
      if (!isDrag) return;
      isDrag = false;
      const diff = e.changedTouches[0].clientX - startX;
      if (diff < -50) goTo(slideIndexRef.current + 1);
      else if (diff > 50) goTo(slideIndexRef.current - 1);
      else goTo(slideIndexRef.current);
      setTimeout(() => { hasDragged = false; }, 50);
    };
    const onResize = () => goTo(slideIndexRef.current);

    track.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    track.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('resize', onResize);
    setTimeout(() => goTo(0), 50);

    return () => {
      goToRef.current = null;
      track.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      track.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="bg-bal-noir text-bal-texte font-sans overflow-x-hidden min-h-screen">

      {/* ================= HERO ================= */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-2027 pointer-events-none" />

        {/* Side curtains — hidden on very small screens to avoid crowding */}
        <svg className="absolute top-0 left-0 h-full w-[12%] sm:w-[18%] z-10 pointer-events-none" viewBox="0 0 200 800" preserveAspectRatio="none">
          <defs><linearGradient id="rg1" x1="0" x2="1" y1="0" y2="0"><stop offset="0%" stopColor="#5a0000"/><stop offset="60%" stopColor="#8B0000"/><stop offset="100%" stopColor="#3a0000"/></linearGradient></defs>
          <path d="M0,0 Q80,200 40,400 Q80,600 0,800 L200,800 L200,0 Z" fill="url(#rg1)"/>
          <path d="M20,0 Q100,200 60,400 Q100,600 20,800" stroke="rgba(201,168,76,0.15)" strokeWidth="1" fill="none"/>
        </svg>
        <svg className="absolute top-0 right-0 h-full w-[12%] sm:w-[18%] z-10 pointer-events-none scale-x-[-1]" viewBox="0 0 200 800" preserveAspectRatio="none">
          <defs><linearGradient id="rg2" x1="0" x2="1" y1="0" y2="0"><stop offset="0%" stopColor="#3a0000"/><stop offset="40%" stopColor="#8B0000"/><stop offset="100%" stopColor="#5a0000"/></linearGradient></defs>
          <path d="M0,0 Q80,200 40,400 Q80,600 0,800 L200,800 L200,0 Z" fill="url(#rg2)"/>
          <path d="M20,0 Q100,200 60,400 Q100,600 20,800" stroke="rgba(201,168,76,0.15)" strokeWidth="1" fill="none"/>
        </svg>

        <div className="spotlight-2027 absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[500px] sm:h-[650px] z-0 pointer-events-none" />

        <svg className="absolute top-[-20px] left-1/2 -translate-x-1/2 z-20 pointer-events-none animate-sway w-[120px] h-[80px]" viewBox="0 0 120 80" fill="none">
          <line x1="60" y1="0" x2="60" y2="20" stroke="rgba(201,168,76,0.4)" strokeWidth="1"/>
          <ellipse cx="60" cy="30" rx="40" ry="8" stroke="rgba(201,168,76,0.35)" strokeWidth="1" fill="none"/>
          <ellipse cx="60" cy="30" rx="28" ry="5" stroke="rgba(201,168,76,0.2)" strokeWidth="1" fill="none"/>
          <circle cx="25" cy="28" r="3" fill="rgba(240,208,122,0.9)" opacity="0.7"/>
          <circle cx="40" cy="24" r="3" fill="rgba(240,208,122,0.9)" opacity="0.7"/>
          <circle cx="60" cy="23" r="3" fill="rgba(240,208,122,0.9)" opacity="0.7"/>
          <circle cx="80" cy="24" r="3" fill="rgba(240,208,122,0.9)" opacity="0.7"/>
          <circle cx="95" cy="28" r="3" fill="rgba(240,208,122,0.9)" opacity="0.7"/>
          <circle cx="60" cy="23" r="8" fill="rgba(240,208,100,0.08)"/>
        </svg>

        <div className="absolute inset-0 z-0 pointer-events-none">
          {sparks.map(s => (
            <div key={s.id} className="spark-2027" style={{ left: `${s.left}%`, width: `${s.size}px`, height: `${s.size}px`, '--dx': `${s.dx}px`, animationDuration: `${s.duration}s`, animationDelay: `${s.delay}s` }} />
          ))}
        </div>

        <div className="relative z-30 text-center px-6 sm:px-10 animate-apparu pt-20 max-w-[90vw] mx-auto">
          <div className="font-cinzel text-[10px] tracking-[8px] uppercase text-bal-or mb-2">Musée de l'Illusion Paris</div>
          <div className="font-cinzel text-[8px] tracking-[6px] text-bal-texte-dim uppercase mb-10">{bal.presente}</div>

          <h1 className="font-cinzel-dec font-bold leading-[0.95] tracking-tight mb-9 text-[clamp(38px,8vw,108px)] relative">
            <span className="block text-gradient-2027 drop-shadow-[0_0_40px_rgba(201,168,76,.3)]">{bal.title}</span>
            <span className="block text-[0.65em] font-normal tracking-[6px] bg-gradient-to-r from-transparent via-bal-or-clair to-transparent bg-clip-text text-transparent mt-2">{bal.subtitle}</span>
            <span className="text-miroir-2027 block absolute left-0 right-0 top-0">{bal.title}</span>
          </h1>

          <div className="flex items-center justify-center gap-4 mx-auto my-8">
            <div className="w-[60px] sm:w-[100px] h-[1px] bg-gradient-to-r from-transparent to-bal-or" />
            <div className="w-[7px] h-[7px] bg-bal-or rotate-45 shadow-[0_0_10px_#C9A84C]" />
            <div className="w-[60px] sm:w-[100px] h-[1px] bg-gradient-to-l from-transparent to-bal-or" />
          </div>

          <p className="font-serif italic text-[clamp(16px,2.8vw,28px)] text-bal-texte-dim tracking-wide mb-12">
            {bal.heroQuote}
          </p>

          {/* Info band — stacks on mobile */}
          <div className="inline-flex border border-bal-or/40 mb-14 overflow-hidden rounded-sm flex-col sm:flex-row max-w-[90vw]">
            <div className="px-6 sm:px-10 py-4 sm:py-5 text-center border-b sm:border-b-0 sm:border-r border-bal-or/20">
              <span className="font-cinzel text-[8px] tracking-[4px] text-bal-or uppercase block mb-2">{bal.labelDates}</span>
              <span className="font-cinzel-dec text-[18px] sm:text-[22px] font-bold text-bal-or-pale drop-shadow-[0_0_20px_rgba(201,168,76,.4)]">{bal.valDates}</span>
            </div>
            <div className="px-6 sm:px-10 py-4 sm:py-5 text-center border-b sm:border-b-0 sm:border-r border-bal-or/20">
              <span className="font-cinzel text-[8px] tracking-[4px] text-bal-or uppercase block mb-2">{bal.labelTime}</span>
              <span className="font-cinzel-dec text-[18px] sm:text-[22px] font-bold text-bal-or-pale drop-shadow-[0_0_20px_rgba(201,168,76,.4)]">{bal.valTime}</span>
            </div>
            <div className="px-6 sm:px-10 py-4 sm:py-5 text-center">
              <span className="font-cinzel text-[8px] tracking-[4px] text-bal-or uppercase block mb-2">{bal.labelPlace}</span>
              <span className="font-cinzel-dec text-[18px] sm:text-[22px] font-bold text-bal-or-pale drop-shadow-[0_0_20px_rgba(201,168,76,.4)]">{bal.valPlace}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <a href="#evenement" className="cursor-pointer font-sans text-[11px] tracking-[4px] font-semibold uppercase text-bal-noir bg-gradient-to-br from-bal-or-pale via-bal-or to-bal-or-clair px-8 sm:px-12 py-4 hover:translate-y-[-2px] hover:shadow-[0_8px_40px_rgba(201,168,76,0.45)] transition-all text-center">{bal.ctaDiscover}</a>
            <a href="#lieu" className="cursor-pointer font-sans text-[11px] tracking-[4px] font-medium uppercase text-bal-or border border-bal-or/35 px-8 sm:px-12 py-4 hover:border-bal-or hover:text-bal-or-clair hover:translate-y-[-2px] transition-all text-center">{bal.ctaInfo}</a>
          </div>
        </div>
      </section>

      {/* ================= ÉVÉNEMENT ================= */}
      <section id="evenement" className="py-20 sm:py-32 bg-gradient-to-b from-bal-noir via-bal-sombre to-bal-noir px-6">
        <div className="max-w-[1080px] mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-6">
            <div className="rev flex items-center gap-4 font-sans text-[10px] tracking-[6px] font-semibold text-bal-or uppercase before:h-[1px] before:flex-1 before:bg-bal-or/25 after:h-[1px] after:flex-1 after:bg-bal-or/25 mb-4">{bal.eventLabel}</div>
            <h2 className="rev font-serif text-[clamp(24px,3.5vw,46px)] font-bold text-bal-or-clair leading-tight mb-8">{bal.eventHeading}</h2>
            <p className="rev text-[15px] sm:text-[17px] leading-[1.9] text-bal-texte-dim font-light">{bal.eventP1}</p>
            <p className="rev text-[15px] sm:text-[17px] leading-[1.9] text-bal-texte-dim font-light">{bal.eventP2}</p>
            <p className="rev text-[15px] sm:text-[17px] leading-[1.9] text-bal-texte-dim font-light">{bal.eventP3}</p>
          </div>
          <div className="rev-d cadre-2027 rounded-sm">
            <div className="coin-2027 tl"/><div className="coin-2027 tr"/><div className="coin-2027 bl"/><div className="coin-2027 br"/>
            <div className="relative z-10 text-center p-8 sm:p-10 flex flex-col items-center">
              <svg className="opacity-30 mb-6" width="100" height="60" viewBox="0 0 100 60" fill="none">
                <path d="M5,30 Q20,5 50,20 Q80,5 95,30 Q85,55 70,45 Q65,40 50,42 Q35,40 30,45 Q15,55 5,30 Z" stroke="rgba(201,168,76,0.6)" strokeWidth="1.5" fill="rgba(201,168,76,0.05)"/>
                <ellipse cx="30" cy="28" rx="10" ry="8" stroke="rgba(201,168,76,0.4)" strokeWidth="1" fill="none"/>
                <ellipse cx="70" cy="28" rx="10" ry="8" stroke="rgba(201,168,76,0.4)" strokeWidth="1" fill="none"/>
                <path d="M40,38 Q50,44 60,38" stroke="rgba(201,168,76,0.3)" strokeWidth="1" fill="none"/>
              </svg>
              <div className="font-serif italic text-xl sm:text-2xl text-bal-or leading-[1.5] drop-shadow-[0_0_40px_rgba(201,168,76,.4)]">
                {bal.maskQuote}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAGICIENS ================= */}
      <section id="magiciens" className="py-20 sm:py-32 bg-bal-sombre relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(ellipse,rgba(139,0,0,.22),transparent_65%)] pointer-events-none" />

        <div className="max-w-[1080px] mx-auto text-center mb-12 sm:mb-16 px-6 relative z-10">
          <div className="rev flex items-center justify-center gap-4 font-sans text-[10px] tracking-[6px] font-semibold text-bal-or uppercase before:w-16 before:h-[1px] before:bg-bal-or/25 after:w-16 after:h-[1px] after:bg-bal-or/25 mb-4">{bal.magicianEyebrow}</div>
          <h2 className="rev font-serif text-[clamp(24px,3.5vw,46px)] font-bold text-bal-or-clair mb-4">{bal.magicianHeading}</h2>
          <p className="rev font-serif italic text-[17px] sm:text-[19px] text-bal-texte-dim max-w-[560px] mx-auto">{bal.magicianSub}</p>
        </div>

        {/* ✅ Slider scene */}
        <div className="relative w-full overflow-hidden py-5 pb-10 cursor-grab active:cursor-grabbing">
          <div ref={trackRef} className="flex items-stretch will-change-transform select-none">
            {bal.slides.map((slide, i) => (
              <div
                key={i}
                onClick={() => goToRef.current?.(i)}
                className={`flex-none w-[82vw] max-w-[380px] mx-[12px] bg-[#110C16] border flex flex-col relative overflow-hidden transition-all duration-[450ms] ease-out cursor-pointer
                ${currentSlide === i
                  ? 'opacity-100 scale-100 border-bal-or/35 shadow-[0_24px_60px_rgba(0,0,0,0.6)]'
                  : 'opacity-45 scale-[0.93] border-bal-or/10'}`}
              >
                {currentSlide === i && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-bal-or to-transparent" />
                )}
                <div className="p-6 sm:p-7 px-7 sm:px-8 border-b border-bal-or/10 pointer-events-none">
                  <div className="font-sans text-[9px] tracking-[5px] font-semibold text-bal-or uppercase mb-2">{slide.cat}</div>
                  <div className="font-serif text-[18px] sm:text-[20px] font-bold text-bal-texte-clair leading-[1.2]">{slide.tit}</div>
                </div>
                <div className="flex-1 p-6 sm:p-7 px-7 sm:px-8 flex items-center justify-center relative min-h-[180px] sm:min-h-[200px] pointer-events-none">
                  <div className="font-cinzel-dec text-[80px] sm:text-[100px] text-bal-or/5 absolute bottom-[-10px] right-[10px] leading-none">{slide.num}</div>
                  <p className="font-sans text-[14px] sm:text-[15px] leading-[1.85] text-bal-texte-dim font-light relative z-10">{slide.txt}</p>
                </div>
                <div className="p-4 sm:p-5 px-7 sm:px-8 flex gap-2 flex-wrap pointer-events-none">
                  <span className="font-sans text-[9px] tracking-[3px] font-semibold text-bal-texte-dim uppercase border border-bal-texte-dim/20 px-3 py-1">{slide.tag1}</span>
                  <span className="font-sans text-[9px] tracking-[3px] font-semibold text-bal-texte-dim uppercase border border-bal-texte-dim/20 px-3 py-1">{slide.tag2}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ FIX: dots use goToRef to move the track */}
        <div className="flex justify-center gap-[10px] mt-2 relative z-10">
          {bal.slides.map((_, i) => (
            <div
              key={i}
              onClick={() => goToRef.current?.(i)}
              className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 border
              ${currentSlide === i
                ? 'bg-bal-or border-bal-or scale-[1.3]'
                : 'bg-bal-or/20 border-bal-or/30 hover:bg-bal-or/40'}`}
            />
          ))}
        </div>
      </section>

      {/* ================= MINUIT ================= */}
      <section id="minuit" className="py-28 sm:py-40 bg-bal-noir relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(196,30,58,0.22),transparent_70%)] animate-pulse-red pointer-events-none" />
        <div className="max-w-[1080px] mx-auto px-6 relative z-10">

          <div className="rev horloge-2027">
            <div className="absolute bottom-1/2 left-1/2 origin-bottom bg-bal-or rounded-[2px] w-[2px] h-[56px] -ml-[1px] rotate-0 opacity-75" />
            <div className="absolute bottom-1/2 left-1/2 origin-bottom bg-bal-or rounded-[2px] w-[3px] h-[38px] -ml-[1.5px] rotate-0 opacity-95" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-bal-or rounded-full shadow-[0_0_8px_#C9A84C] z-10" />
            <div className="font-cinzel-dec text-[28px] text-bal-or drop-shadow-[0_0_30px_rgba(201,168,76,.7)] z-10 relative">00:00</div>
          </div>

          <div className="rev animate-lueur-or font-sans text-[clamp(12px,2.2vw,20px)] font-semibold tracking-[5px] uppercase text-bal-or-pale mb-6">{bal.midnightLabel}</div>
          <h2 className="rev font-cinzel-dec text-[clamp(30px,6vw,76px)] leading-[1.05] text-gradient-2027 drop-shadow-[0_0_30px_rgba(201,168,76,.3)] mb-9">{bal.midnightHeading}</h2>

          <p className="rev font-sans text-[16px] sm:text-[18px] leading-loose text-bal-texte-dim font-light max-w-[660px] mx-auto mb-5">{bal.midnightP1}<br/>{bal.midnightP2}</p>

          <div className="rev w-[1px] h-[80px] bg-gradient-to-b from-bal-cramoisi-vif to-transparent mx-auto relative my-14 before:content-['✦'] before:absolute before:-top-[10px] before:left-1/2 before:-translate-x-1/2 before:text-bal-or before:text-[12px]" />

          <p className="rev font-sans text-[16px] sm:text-[18px] leading-loose text-bal-texte-dim font-light max-w-[660px] mx-auto">{bal.midnightP3}</p>
          <p className="rev font-serif italic text-bal-texte-clair mt-8">{bal.midnightFinal}</p>
        </div>
      </section>

      {/* ================= DRESS CODE ================= */}
      <section id="dresscode" className="py-20 sm:py-32 bg-gradient-to-b from-bal-noir to-bal-sombre2 px-6">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="rev flex items-center justify-center gap-4 font-sans text-[10px] tracking-[6px] font-semibold text-bal-or uppercase before:w-16 before:h-[1px] before:bg-bal-or/25 after:w-16 after:h-[1px] after:bg-bal-or/25 mb-4">{bal.dressEyebrow}</div>
            <h2 className="rev font-serif text-[clamp(24px,3.5vw,46px)] font-bold text-bal-or-clair mb-3">{bal.dressHeading}</h2>
            <p className="rev font-serif italic text-[16px] sm:text-[18px] text-bal-texte-dim max-w-[500px] mx-auto">{bal.dressSub}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-1 max-w-[900px] mx-auto">
            <div className="rev-g group p-8 sm:p-14 bg-[#0E0912]/70 border border-bal-or/10 relative overflow-hidden transition-all hover:bg-[#160E1A] hover:border-bal-or/35">
              <div className="font-cinzel-dec text-[72px] text-bal-or/5 absolute top-[10px] right-[20px] leading-none select-none pointer-events-none">01</div>
              <div className="text-[46px] mb-6 relative z-10">🎭</div>
              <div className="font-sans text-[12px] tracking-[5px] font-semibold text-bal-or uppercase mb-4 relative z-10">{bal.dress1Tit}</div>
              <p className="text-[15px] sm:text-[16px] leading-[1.85] text-bal-texte-dim font-light relative z-10">{bal.dress1Txt}</p>
              <span className="inline-block mt-4 font-sans text-[9px] tracking-[3px] font-semibold uppercase text-bal-noir bg-bal-or px-4 py-1 relative z-10">{bal.dressRequired}</span>
            </div>

            <div className="rev-d group p-8 sm:p-14 bg-[#0E0912]/70 border border-bal-or/10 relative overflow-hidden transition-all hover:bg-[#160E1A] hover:border-bal-or/35">
              <div className="font-cinzel-dec text-[72px] text-bal-or/5 absolute top-[10px] right-[20px] leading-none select-none pointer-events-none">02</div>
              <div className="text-[46px] mb-6 relative z-10">🥂</div>
              <div className="font-sans text-[12px] tracking-[5px] font-semibold text-bal-or uppercase mb-4 relative z-10">{bal.dress2Tit}</div>
              <p className="text-[15px] sm:text-[16px] leading-[1.85] text-bal-texte-dim font-light relative z-10">{bal.dress2Txt}</p>
              <span className="inline-block mt-4 font-sans text-[9px] tracking-[3px] font-semibold uppercase text-bal-noir bg-bal-or px-4 py-1 relative z-10">{bal.dressRequired}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LIEU ================= */}
      <section id="lieu" className="py-20 sm:py-32 bg-bal-noir px-6">
        <div className="max-w-[1080px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div className="rev-g">
              <div className="flex items-center gap-4 font-sans text-[10px] tracking-[6px] font-semibold text-bal-or uppercase before:h-[1px] before:w-16 before:bg-bal-or/25 after:h-[1px] after:flex-1 after:bg-bal-or/25 mb-4">Accès & Contact</div>
              <h2 className="font-serif text-[clamp(24px,3.5vw,46px)] font-bold text-bal-or-clair mb-8">{bal.accessHeading}</h2>

              <div className="text-[17px] sm:text-[19px] leading-[2.1] text-bal-texte-clair font-light mb-9">
                <strong className="text-bal-or-pale font-semibold text-[18px] sm:text-[21px] block mb-2">Musée de l'Illusion Paris</strong>
                98, Rue Saint-Denis<br/>75001 Paris
              </div>

              <div className="flex items-start gap-4 mb-5">
                <span className="text-bal-or text-[16px] mt-1 shrink-0">✆</span>
                <a href="tel:+33973670137" className="text-[15px] sm:text-[17px] text-bal-texte-clair font-light hover:text-bal-or-clair transition-colors">+33 9 73 67 01 37</a>
              </div>

              <div className="flex items-start gap-4 mb-5">
                <span className="text-bal-or text-[16px] mt-1 shrink-0">✉</span>
                <a href="mailto:info@museedelillusion.fr" className="text-[15px] sm:text-[17px] text-bal-texte-clair font-light hover:text-bal-or-clair transition-colors break-all">info@museedelillusion.fr</a>
              </div>

              <div className="mt-9 p-5 sm:p-6 px-6 sm:px-7 border border-bal-or/30 bg-bal-or/5">
                <span className="font-sans text-[9px] tracking-[5px] font-semibold text-bal-or uppercase block mb-3">{bal.contactDates}</span>
                <span className="font-cinzel-dec text-[clamp(16px,2.5vw,26px)] text-bal-or-pale drop-shadow-[0_0_20px_rgba(201,168,76,.3)] block mb-1">{bal.valDates}</span>
                <span className="font-sans text-[11px] tracking-[4px] font-semibold text-bal-or-clair uppercase">{bal.valTime}</span>
              </div>
            </div>

            <div className="rev-d relative aspect-[4/3] border border-bal-or/20 overflow-hidden group">
              <div className="coin-2027 tl"/><div className="coin-2027 tr"/><div className="coin-2027 bl"/><div className="coin-2027 br"/>
              <iframe
                src="https://maps.google.com/maps?q=98%20Rue%20Saint-Denis%2C%2075001%20Paris&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-none block filter invert-[.9] hue-rotate-180 saturate-[.5] brightness-[.85] transition-all duration-400 group-hover:saturate-[.7] group-hover:brightness-[.9]"
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Musée de l'Illusion Paris"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-bal-sombre border-t border-bal-or/10 pt-12 sm:pt-16 pb-10 px-6">
        <div className="max-w-[1080px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-10 sm:mb-12 pb-10 sm:pb-12 border-b border-bal-or/10 gap-10">
            <div>
              <div className="font-cinzel-dec text-[18px] sm:text-[20px] text-bal-or leading-[1.3] mb-2">{bal.title}<br/>{bal.subtitle}</div>
              <div className="font-sans text-[9px] tracking-[5px] font-medium text-bal-texte-dim uppercase">Musée de l'Illusion Paris · 2027</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
              <div className="flex flex-col">
                <div className="font-sans text-[9px] tracking-[4px] font-semibold text-bal-or uppercase mb-4">{bal.footerCat1}</div>
                <a href="#evenement" className="text-[14px] text-bal-texte-dim hover:text-bal-or-clair mb-3 transition-colors">{bal.eventLabel}</a>
                <a href="#magiciens" className="text-[14px] text-bal-texte-dim hover:text-bal-or-clair mb-3 transition-colors">{bal.magicianHeading}</a>
                <a href="#minuit" className="text-[14px] text-bal-texte-dim hover:text-bal-or-clair mb-3 transition-colors">{bal.midnightHeading}</a>
                <a href="#dresscode" className="text-[14px] text-bal-texte-dim hover:text-bal-or-clair transition-colors">{bal.dressHeading}</a>
              </div>

              <div className="flex flex-col">
                <div className="font-sans text-[9px] tracking-[4px] font-semibold text-bal-or uppercase mb-4">{bal.footerCat2}</div>
                <a href="tel:+33973670137" className="text-[14px] text-bal-texte-dim hover:text-bal-or-clair mb-3 transition-colors">+33 9 73 67 01 37</a>
                <a href="mailto:info@museedelillusion.fr" className="text-[14px] text-bal-texte-dim hover:text-bal-or-clair mb-3 transition-colors break-all">info@museedelillusion.fr</a>
                <a href="#lieu" className="text-[14px] text-bal-texte-dim hover:text-bal-or-clair transition-colors">98 Rue Saint-Denis, 75001 Paris</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[11.5px] text-bal-texte-dim/40 tracking-[1px]">© 2027 Musée de l'Illusion Paris</div>
            <div className="font-serif italic text-[14px] text-bal-or/35">{bal.footerQuote}</div>
          </div>
        </div>
      </footer>
    </div>
  );
};