import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: '/',               label: t.nav.home     },
    { path: '/nocturnes-2026', label: t.nav.nocturnes },
    { path: '/evenement-2027', label: t.nav.bal       },
    { path: '/equipe',         label: t.nav.team      },
  ];

  const isActive = (path) => location.pathname === path;

  const handleNav = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-[100] bg-bal-noir/80 backdrop-blur-md border-b border-bal-or/10">
      <div className="flex justify-between items-center px-6 py-5">

        {/* Logo */}
        <div
          className="text-bal-or font-cinzel text-sm tracking-widest uppercase cursor-pointer shrink-0"
          onClick={() => handleNav('/')}
        >
          Musée de l'Illusion
          <span className="text-bal-texte-dim block text-[10px]">Paris</span>
        </div>

        {/* Desktop nav links */}
        <ul className="hidden md:flex gap-8 text-[17px] font-cinzel tracking-[2px] uppercase">
          {navLinks.map(link => (
            <li key={link.path}>
              <button
                onClick={() => handleNav(link.path)}
                className={`transition-colors cursor-pointer relative pb-[3px] ${
                  isActive(link.path)
                    ? 'text-bal-or after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-bal-or'
                    : 'text-bal-texte-dim hover:text-bal-or'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side: lang toggle + hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className="text-bal-or border border-bal-or/30 px-3 py-1 text-[12px] font-bold hover:bg-bal-or hover:text-bal-noir transition-all cursor-pointer"
          >
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>

          {/* Hamburger – mobile only */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] w-6 h-6 cursor-pointer"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Menu"
          >
            <span className={`block w-full h-[1.5px] bg-bal-or origin-center transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-full h-[1.5px] bg-bal-or transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-full h-[1.5px] bg-bal-or origin-center transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-[320px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col items-center gap-6 py-8 text-[17px] font-cinzel tracking-[2px] uppercase border-t border-bal-or/10 bg-bal-noir/95 backdrop-blur-md">
          {navLinks.map(link => (
            <li key={link.path}>
              <button
                onClick={() => handleNav(link.path)}
                className={`cursor-pointer transition-colors relative pb-[3px] ${
                  isActive(link.path)
                    ? 'text-bal-or after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-bal-or'
                    : 'text-bal-texte-dim hover:text-bal-or'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};