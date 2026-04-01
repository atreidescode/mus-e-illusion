import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      nocturnes: "Nocturnes 2026",
      bal: "Grand Bal 2027",
      team: "L'Équipe",
      info: "Infos Pratiques"
    },

    // ==============================
    // PAGE HOME
    // ==============================
    home: {
      welcome: "Bienvenue au",
      musee1: "Musée de",
      musee2: "l'Illusion",
      heroQuote: "« Bienvenue à la frontière du réel. Plongez dans un univers conçu pour tromper vos sens et défier la logique. »",
      collectionLabel: "La Collection",
      rooms: [
        {
          title: "Tunnel Vortex",
          text: "N'ayez pas peur de laisser tout derrière vous et de sauter les yeux grands ouverts dans notre Tunnel Vortex. Il vous rendra dingue et vous persuadera que vous êtes incapable d'avancer à l'intérieur de ce tunnel.",
          alt: "Tunnel Vortex"
        },
        {
          title: "La Salle renversée",
          text: "Êtes-vous prêt à changer votre vision du monde de façon radicale ? Pourquoi pas jusqu'à 180 degrés ? Prenez-vous en photo dans des poses incroyables ! Votre imagination est votre seule limite !",
          alt: "La salle renversée",
          reverse: true
        },
        {
          title: "La Salle de L'Infini",
          text: "Savez-vous où le plaisir, le divertissement et le monde du merveilleux ne finissent jamais ? Dans la salle infinie ou la salle des miroirs !",
          alt: "La salle de l'infini"
        }
      ],
      specialLabel: "Événement",
      specialLabelItalic: "Spécial",
      specialP: "Découvrez notre expérience inédite où la magie vivante s'invite au cœur du musée. Rencontrez nos magiciens lors de soirées exceptionnelles.",
      specialBtn: "Découvrir les Nocturnes 2026"
    },

    // ==============================
    // PAGE NOCTURNES 2026
    // ==============================
    nocturnes: {
      badge: "Saison Événementielle 2026",
      title1: "Les Nocturnes",
      title2: "Magiques",
      heroQuote: "« Quand l'illusion d'optique rencontre la magie vivante. »",
      intro: "Le Musée de l'Illusion de Paris lance une expérience inédite pour petits et grands. À partir du 6 février 2026, plongez dans une immersion totale où la magie s'invite au cœur de notre parcours.",
      conceptEyebrow: "Concept",
      conceptTitle: "Expérience Immersive",
      conceptP: "Loin des spectacles classiques, la magie s'intègre directement au cœur du parcours permanent du musée. Découvrez des tours spectaculaires et des surprises réalisées en live devant vous.",
      interactifEyebrow: "Interactivité",
      interactifTitle: "Magie de Proximité",
      interactifP: "Des magiciens déambulent dans le musée pour faire des tours et surprendre le public. Ils sont à quelques centimètres de vous. Un moment mêlant mystère, étonnement et rires !",
      whenTitle: "Quand ?",
      when1Bold: "1ers vendredis :",
      when1Dates: "6 fév, 6 mars, 3 avr, 1er mai, 5 juin 2026.",
      when2Bold: "Vacances :",
      when2Dates: "26-27 fév, 5-6 mars, 22, 23, 29, 30 avr.",
      whenTime: "Dès 18h30",
      pricesTitle: "Tarifs",
      priceAdult: "Adulte",
      priceStudent: "Étudiant",
      priceChild: "Enfant",
      practicalTitle: "Pratique",
      practicalPlace: "Lieu :",
      practicalPlaceValue: "98, rue Saint-Denis, 75001 Paris.",
      practicalAccess: "Accès :",
      practicalAccessValue: "M4 Étienne Marcel\nRER Châtelet.",
      practicalPMR: "Accessible PMR"
    },

    // ==============================
    // PAGE ÉQUIPE
    // ==============================
    equipe: {
      badge: "L'Équipe — Promotion 2026/2027",
      heading1: "Rencontrez les",
      headingItalic: "visages",
      heading2: "derrière le projet",
      subQuote: "Six esprits créatifs, une vision commune. Nous concevons des expériences mémorables avec exigence, passion et une attention obsessionnelle pour les détails.",
      finalQuote: "\"Une équipe unie par l'illusion et la volonté de créer l'inattendu.\"",
      members: [
        {
          id: "01", name: "Maryam",
          role: "Coordination générale & suivi des livrables",
          tag: "Chef de Projet",
          quote: "Chef de projet — coordination générale de l'équipe et suivi des livrables tout au long du projet.",
          className: "md:col-span-5 md:row-span-2"
        },
        {
          id: "02", name: "Noham",
          role: "Conception et scénarisation de l'expérience",
          tag: "Édition 2027",
          quote: "Concepteur de l'événement 2027 — conception et scénarisation de l'expérience globale de l'édition 2027.",
          className: "md:col-span-4 md:row-span-1"
        },
        {
          id: "03", name: "Noha",
          role: "Création de l'affiche & identité visuelle",
          tag: "Graphiste",
          quote: "Graphiste — création de l'affiche officielle et développement de l'identité visuelle du projet.",
          className: "md:col-span-3 md:row-span-1"
        },
        {
          id: "04", name: "Mélissa",
          role: "Co-conception UI/UX et Design des sites 2026 & 2027",
          tag: "Designers Sites 2026 & 2027",
          quote: "En binôme avec Ilias pour la création visuelle et l'expérience utilisateur des deux éditions.",
          className: "md:col-span-4 md:row-span-1"
        },
        {
          id: "05", name: "Ilias",
          role: "Co-conception technique et Design des sites 2026 & 2027",
          tag: "Designers Sites 2026 & 2027",
          quote: "En binôme avec Mélissa pour le développement et la mise en page des plateformes 2026 et 2027.",
          className: "md:col-span-3 md:row-span-1"
        },
        {
          id: "06", name: "Lionel",
          role: "Communication & traduction anglaise",
          tag: "International",
          quote: "Responsable Communication Internationale — traduction anglaise de l'ensemble des contenus du projet.",
          className: "md:col-span-5 md:row-span-1"
        }
      ]
    },

    // ==============================
    // PAGE GRAND BAL 2027
    // ==============================
    bal: {
      presente: "présente",
      title: "Le Grand Bal",
      subtitle: "des Illusions",
      heroQuote: "« Entrez dans le bal… et laissez la réalité disparaître. »",
      labelDates: "Dates",
      labelTime: "Ouverture",
      labelPlace: "Lieu",
      valDates: "12 & 19 Fév. 2027",
      valTime: "à partir de 19h",
      valPlace: "Paris, 75001",
      ctaDiscover: "Découvrir la soirée",
      ctaInfo: "Informations pratiques",
      eventLabel: "L'Événement",
      eventHeading: "Une soirée où le réel s'efface",
      eventP1: "Le Musée de l'Illusion de Paris se transforme en un lieu magique inspiré des bals masqués. Les participants seront plongés dans une ambiance où on ne sait plus vraiment ce qui est réel ou non.",
      eventP2: "Le musée sera décoré pour créer une ambiance élégante et mystérieuse. Les visiteurs pourront se déplacer dans les salles et découvrir des surprises à chaque moment.",
      eventP3: "Tout au long de la soirée, les visiteurs deviennent les invités d'un bal magique, immergés dans un univers où chaque détour peut réserver l'inattendu.",
      maskQuote: "Une soirée immersive où on ne sait plus ce qui est réel ou non.",
      magicianEyebrow: "Dans l'ombre",
      magicianHeading: "Les Magiciens parmi vous",
      magicianSub: "Pendant tout le bal, des magiciens se mélangeront aux visiteurs. On ne saura jamais quand un tour va commencer.",
      slides: [
        { num: '01', cat: 'La soirée', tit: 'Discrets & Anonymes', txt: 'Les magiciens seront présents dans le musée et se mélangeront aux visiteurs. Impossible de les distinguer des autres invités — ils sont partout.', tag1: 'Bal masqué', tag2: 'Immersif' },
        { num: '02', cat: 'Les illusions', tit: 'Au cœur du public', txt: 'Ils réaliseront des tours de magie directement au milieu du public, sans prévenir. Les visiteurs pourront voir des illusions de très près.', tag1: 'Magie', tag2: 'Surprise' },
        { num: '03', cat: 'L\'ambiance', tit: 'La surprise permanente', txt: 'On ne saura jamais quand un tour va commencer. Cette imprévisibilité totale crée un état d\'émerveillement constant tout au long de la soirée.', tag1: 'Mystère', tag2: 'Émerveillement' },
        { num: '04', cat: 'Le climax', tit: 'Le Grand Final', txt: 'À minuit pile, tous les magiciens apparaîtront ensemble pour un grand spectacle final — le point culminant d\'une nuit où la réalité a laissé place à l\'illusion.', tag1: 'Minuit', tag2: 'Spectacle' }
      ],
      midnightLabel: "Le Moment Clé de la Soirée",
      midnightHeading: "À Minuit Pile",
      midnightP1: "Toutes les lumières du musée s'éteindront d'un coup.",
      midnightP2: "Les visiteurs seront plongés dans l'obscurité pendant quelques secondes.",
      midnightP3: "Puis, les lumières se rallumeront, et tous les magiciens présents dans la soirée apparaîtront ensemble pour un grand spectacle final.",
      midnightFinal: "Ce moment sera le plus spectaculaire de la soirée et restera dans la mémoire des visiteurs.",
      dressEyebrow: "Tenue de soirée",
      dressHeading: "Dress Code",
      dressSub: "Pour entrer dans l'ambiance, deux règles s'imposent à tous les invités.",
      dress1Tit: "Le Masque",
      dress1Txt: "Les visiteurs seront obligés de porter un masque pour se plonger encore plus dans l'ambiance du bal masqué.",
      dress2Tit: "La Tenue Élégante",
      dress2Txt: "Une tenue élégante est requise pour se plonger encore plus dans l'ambiance de cette soirée exceptionnelle.",
      dressRequired: "Obligatoire",
      accessHeading: "Le Lieu",
      contactDates: "Dates de l'événement",
      footerCat1: "La soirée",
      footerCat2: "Contact",
      footerQuote: "« …et laissez la réalité disparaître. »"
    }
  },

  en: {
    nav: {
      home: "Home",
      nocturnes: "2026 Nocturnes",
      bal: "2027 Grand Ball",
      team: "The Team",
      info: "Practical Info"
    },

    // ==============================
    // PAGE HOME
    // ==============================
    home: {
      welcome: "Welcome to the",
      musee1: "Museum of",
      musee2: "Illusion",
      heroQuote: "\"Welcome to the edge of reality. Dive into a world designed to deceive your senses and defy logic.\"",
      collectionLabel: "The Collection",
      rooms: [
        {
          title: "Vortex Tunnel",
          text: "Don't be afraid to leave everything behind and jump in with wide-open eyes into our Vortex Tunnel. It will blow your mind and convince you that you are unable to move forward inside this tunnel.",
          alt: "Vortex Tunnel"
        },
        {
          title: "The Upside Down Room",
          text: "Are you ready to radically change your view of the world? Why not by 180 degrees? Take photos of yourself in incredible poses! Your imagination is your only limit!",
          alt: "The upside down room",
          reverse: true
        },
        {
          title: "The Infinity Room",
          text: "Do you know where fun, entertainment and the world of wonder never end? In the infinite room — also known as the hall of mirrors!",
          alt: "The infinity room"
        }
      ],
      specialLabel: "Special",
      specialLabelItalic: "Event",
      specialP: "Discover our unique experience where live magic enters the heart of the museum. Meet our magicians during exceptional evenings.",
      specialBtn: "Discover the 2026 Nocturnes"
    },

    // ==============================
    // PAGE NOCTURNES 2026
    // ==============================
    nocturnes: {
      badge: "2026 Event Season",
      title1: "The Nocturnes",
      title2: "Magical",
      heroQuote: "\"When optical illusion meets live magic.\"",
      intro: "The Museum of Illusions in Paris is launching a unique experience for young and old alike. From February 6, 2026, dive into total immersion where magic enters the heart of our exhibition.",
      conceptEyebrow: "Concept",
      conceptTitle: "Immersive Experience",
      conceptP: "Far from traditional shows, magic is integrated directly into the heart of the museum's permanent exhibition. Discover spectacular tricks and surprises performed live right before your eyes.",
      interactifEyebrow: "Interactivity",
      interactifTitle: "Close-Up Magic",
      interactifP: "Magicians wander through the museum performing tricks and surprising the audience. They are just centimetres away from you — a moment filled with mystery, amazement, and laughter!",
      whenTitle: "When?",
      when1Bold: "First Fridays:",
      when1Dates: "Feb 6, Mar 6, Apr 3, May 1, Jun 5, 2026.",
      when2Bold: "School Holidays:",
      when2Dates: "Feb 26-27, Mar 5-6, Apr 22, 23, 29, 30.",
      whenTime: "From 6:30 pm",
      pricesTitle: "Prices",
      priceAdult: "Adult",
      priceStudent: "Student",
      priceChild: "Child",
      practicalTitle: "Practical Info",
      practicalPlace: "Venue:",
      practicalPlaceValue: "98, rue Saint-Denis, 75001 Paris.",
      practicalAccess: "Access:",
      practicalAccessValue: "Metro 4 Étienne Marcel\nRER Châtelet.",
      practicalPMR: "Accessible for reduced mobility"
    },

    // ==============================
    // PAGE ÉQUIPE
    // ==============================
    equipe: {
      badge: "The Team — Class of 2026/2027",
      heading1: "Meet the",
      headingItalic: "faces",
      heading2: "behind the project",
      subQuote: "Six creative minds, one shared vision. We craft memorable experiences with rigor, passion, and an obsessive eye for detail.",
      finalQuote: "\"A team united by illusion and the will to create the unexpected.\"",
      members: [
        {
          id: "01", name: "Maryam",
          role: "General coordination & deliverables tracking",
          tag: "Project Manager",
          quote: "Project Manager — overall team coordination and deliverables tracking throughout the project.",
          className: "md:col-span-5 md:row-span-2"
        },
        {
          id: "02", name: "Noham",
          role: "Conception and scripting of the experience",
          tag: "2027 Edition",
          quote: "2027 Event Designer — conception and scripting of the overall experience for the 2027 edition.",
          className: "md:col-span-4 md:row-span-1"
        },
        {
          id: "03", name: "Noha",
          role: "Poster creation & visual identity",
          tag: "Graphic Designer",
          quote: "Graphic Designer — creation of the official poster and development of the project's visual identity.",
          className: "md:col-span-3 md:row-span-1"
        },
        {
          id: "04", name: "Mélissa",
          role: "Co-UI/UX design for the 2026 & 2027 sites",
          tag: "2026 & 2027 Site Designers",
          quote: "In tandem with Ilias for the visual design and user experience of both editions.",
          className: "md:col-span-4 md:row-span-1"
        },
        {
          id: "05", name: "Ilias",
          role: "Co-technical design for the 2026 & 2027 sites",
          tag: "2026 & 2027 Site Designers",
          quote: "In tandem with Mélissa for the development and layout of the 2026 and 2027 platforms.",
          className: "md:col-span-3 md:row-span-1"
        },
        {
          id: "06", name: "Lionel",
          role: "Communication & English translation",
          tag: "International",
          quote: "International Communication Manager — English translation of all project content.",
          className: "md:col-span-5 md:row-span-1"
        }
      ]
    },

    // ==============================
    // PAGE GRAND BAL 2027
    // ==============================
    bal: {
      presente: "presents",
      title: "The Grand Ball",
      subtitle: "of Illusions",
      heroQuote: "\"Enter the ball... and let reality disappear.\"",
      labelDates: "Dates",
      labelTime: "Opening",
      labelPlace: "Location",
      valDates: "February 12 & 19, 2027",
      valTime: "from 7:00 pm",
      valPlace: "Paris, 75001",
      ctaDiscover: "Discover the evening",
      ctaInfo: "Practical Information",
      eventLabel: "The Event",
      eventHeading: "An evening where reality fades away",
      eventP1: "The Museum of Illusions in Paris transforms into a magical place inspired by masked balls. Participants will be immersed in an atmosphere where it's hard to distinguish between what is real and what isn't.",
      eventP2: "The museum will be decorated to create an elegant and mysterious ambiance. Visitors can move through the rooms and discover surprises at every turn.",
      eventP3: "Throughout the evening, visitors become guests at a magical ball, immersed in a world where every turn holds the unexpected.",
      maskQuote: "An immersive evening where you no longer know what is real and what isn't.",
      magicianEyebrow: "In the Shadows",
      magicianHeading: "Magicians Among You",
      magicianSub: "Throughout the ball, magicians will mingle with the guests. You'll never know when a trick will begin.",
      slides: [
        { num: '01', cat: 'The Evening', tit: 'Discreet & Anonymous', txt: 'The magicians will be present in the museum and will mingle with the visitors. It will be impossible to distinguish them from the other guests – they are everywhere.', tag1: 'masked ball', tag2: 'immersive' },
        { num: '02', cat: 'Illusions', tit: 'Right in the heart of the audience', txt: 'They will perform magic tricks directly in the middle of the crowd, without warning. Visitors will be able to see illusions up close.', tag1: 'magic', tag2: 'surprise' },
        { num: '03', cat: 'The atmosphere', tit: 'The constant surprise', txt: 'You never know when a trick will start. This unpredictability creates a state of constant wonder throughout the evening.', tag1: 'mystery', tag2: 'wonder' },
        { num: '04', cat: 'The Climax', tit: 'The Grand Finale', txt: 'At midnight sharp, all the magicians will appear together for a grand finale show - the culmination of a night where reality gave way to illusion.', tag1: 'midnight', tag2: 'show' }
      ],
      midnightLabel: "The Key Moment of the Evening",
      midnightHeading: "At Midnight Sharp",
      midnightP1: "All the lights in the museum will suddenly go out.",
      midnightP2: "Visitors will be plunged into darkness for a few seconds.",
      midnightP3: "Then, the lights will come back on, and all the magicians present that evening will appear together for a grand finale show.",
      midnightFinal: "This moment will be the most spectacular of the evening and will remain in the visitors' memories.",
      dressEyebrow: "Evening Attire",
      dressHeading: "Dress Code",
      dressSub: "To get into the spirit of the event, two rules apply to all guests.",
      dress1Tit: "The Mask",
      dress1Txt: "Visitors will be required to wear a mask to further immerse themselves in the atmosphere of the masquerade ball.",
      dress2Tit: "Elegant Attire",
      dress2Txt: "Elegant attire is required to fully immerse yourself in the atmosphere of this exceptional evening.",
      dressRequired: "Mandatory",
      accessHeading: "The Venue",
      contactDates: "Event Dates",
      footerCat1: "The Evening",
      footerCat2: "Contact",
      footerQuote: "\"...and let reality disappear.\""
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem('preferredLang') || 'fr');
  useEffect(() => { localStorage.setItem('preferredLang', lang); }, [lang]);
  const t = translations[lang];
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
