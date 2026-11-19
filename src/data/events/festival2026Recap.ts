export type Festival2026Language = "es" | "en";

type LocalizedText = Record<Festival2026Language, string>;

type Festival2026Winner = {
  id: string;
  category: LocalizedText;
  winner: string;
  credits: LocalizedText;
  honorary?: boolean;
};

// Official results supplied by the festival's organizers.
// Film titles and personal names retain the spelling of that announcement.
export const festival2026Winners: readonly Festival2026Winner[] = [
  {
    id: "best-film",
    category: { es: "Mejor Película (Gran Premio)", en: "Best Film (Grand Prize)" },
    winner: "Extraños Seres",
    credits: {
      es: "Dir. Thomas Pfanne · Alemania\nProd. Amaruk Kayshapanta · Ecuador",
      en: "Director: Thomas Pfanne · Germany\nProducer: Amaruk Kayshapanta · Ecuador",
    },
  },
  {
    id: "jury-prize",
    category: { es: "Premio del Jurado", en: "Jury Prize" },
    winner: "Abuelo Montaña",
    credits: {
      es: "Dir. Ilary Camacho · Bolivia",
      en: "Director: Ilary Camacho · Bolivia",
    },
  },
  {
    id: "best-director",
    category: { es: "Mejor Dirección", en: "Best Director" },
    winner: "Adictus",
    credits: {
      es: "Dir. David Andrade · España",
      en: "Director: David Andrade · Spain",
    },
  },
  {
    id: "best-screenplay",
    category: { es: "Mejor Guion", en: "Best Screenplay" },
    winner: "Expedición Cueva de los Tallos",
    credits: {
      es: "Dir. Raúl Cabrera · Ecuador",
      en: "Director: Raúl Cabrera · Ecuador",
    },
  },
  {
    id: "best-short-director",
    category: { es: "Mejor Dirección de Cortometraje", en: "Best Short Film Director" },
    winner: "Dussinshik Broken",
    credits: {
      es: "Dir. Diego Llano · Francia",
      en: "Director: Diego Llano · France",
    },
  },
  {
    id: "best-supporting-performance",
    category: { es: "Mejor Interpretación Secundaria", en: "Best Supporting Performance" },
    winner: "Celia Castro",
    credits: {
      es: "Por Adictus · Dir. David Andrade · España",
      en: "For Adictus · Director: David Andrade · Spain",
    },
  },
  {
    id: "best-leading-performance",
    category: { es: "Mejor Interpretación Protagonista", en: "Best Leading Performance" },
    winner: "Tamara Navas",
    credits: {
      es: "Por Extraños Seres · Dir. Thomas Pfanner · Alemania–Ecuador",
      en: "For Extraños Seres · Director: Thomas Pfanner · Germany–Ecuador",
    },
  },
  {
    id: "best-cinematography",
    category: { es: "Mejor Fotografía", en: "Best Cinematography" },
    winner: "Conoces el Mar",
    credits: {
      es: "Dir. Juan Carlos Aduviri · Bolivia",
      en: "Director: Juan Carlos Aduviri · Bolivia",
    },
  },
  {
    id: "best-featured-soundtrack",
    category: { es: "Mejor Banda Sonora Protagonista", en: "Best Featured Soundtrack" },
    winner: "Morenada",
    credits: {
      es: "Dir. Hans Matos · Perú",
      en: "Director: Hans Matos · Peru",
    },
  },
  {
    id: "best-original-music",
    category: {
      es: "Mejor Banda Sonora / Música Original",
      en: "Best Soundtrack / Original Music",
    },
    winner: "Alfaro La Revolución",
    credits: {
      es: "Dir. Juan Diego Pérez Ponce · Ecuador",
      en: "Director: Juan Diego Pérez Ponce · Ecuador",
    },
  },
  {
    id: "best-editing",
    category: { es: "Mejor Montaje", en: "Best Editing" },
    winner: "Pachakutik",
    credits: {
      es: "Dir. Carlos Santos · Argentina",
      en: "Director: Carlos Santos · Argentina",
    },
  },
  {
    id: "best-production-sound",
    category: {
      es: "Mejor Diseño de Producción / Sonido",
      en: "Best Production Design / Sound",
    },
    winner: "Cantuña",
    credits: {
      es: "Dir. JJ Peñafiel · Ecuador",
      en: "Director: JJ Peñafiel · Ecuador",
    },
  },
  {
    id: "best-short-film",
    category: { es: "Mejor Cortometraje", en: "Best Short Film" },
    winner: "Un Paso al Más Allá",
    credits: {
      es: "Dir. Hernán de la Torre · Ecuador",
      en: "Director: Hernán de la Torre · Ecuador",
    },
  },
  {
    id: "best-documentary",
    category: { es: "Mejor Documental", en: "Best Documentary" },
    winner: "Mi Corazón en Yambo",
    credits: {
      es: "Dir. María Fernanda Restrepo · Ecuador",
      en: "Director: María Fernanda Restrepo · Ecuador",
    },
  },
  {
    id: "best-documentary-film",
    category: { es: "Mejor Película-Documental", en: "Best Documentary Film" },
    winner: "Yachanna Wasi Ruranakuna",
    credits: {
      es: "Dir. Rudy Mazaquiza · Ecuador",
      en: "Director: Rudy Mazaquiza · Ecuador",
    },
  },
  {
    id: "best-documentary-debut",
    category: {
      es: "Mejor Ópera Documental Prima / Director Novel",
      en: "Best Documentary Debut / Emerging Director",
    },
    winner: "El Chasqui",
    credits: {
      es: "Dir. Vlady Tamay Muñoz · Estados Unidos–Ecuador",
      en: "Director: Vlady Tamay Muñoz · USA–Ecuador",
    },
  },
  {
    id: "audience-lifetime-achievement",
    category: {
      es: "Premio Honorífico del Público a la Trayectoria Cinematográfica",
      en: "Audience Honorary Award for Lifetime Achievement in Cinema",
    },
    winner: "Amaruk Kayshapanta Anchapacxi",
    credits: { es: "35 años de cine", en: "35 years in cinema" },
    honorary: true,
  },
];

export const festival2026AwardPhoto = {
  src: "/images/events/festival-andino-2026/kury-chasqui-award-2026.jpg",
  width: 1026,
  height: 2047,
} as const;

export const festival2026Recap = {
  es: {
    seoTitle: "Ganadores 2026 | The Andes International Film Fest New York",
    seoDescription:
      "Palmarés oficial de la primera edición de The Andes International Film Fest New York, celebrada del 8 al 15 de noviembre de 2026. Ganadores Kury Chasqui y publicaciones en prensa.",
    completed: "Edición 2026 finalizada",
    dates: "8–15 de noviembre de 2026 · Nueva York",
    heroIntro:
      "La primera edición ha concluido. Celebramos las películas, las personas y las historias reconocidas con el premio Kury Chasqui, y compartimos el palmarés oficial del festival.",
    winnersCta: "Ver ganadores",
    pressCta: "Prensa e Instagram",
    archiveNotice:
      "El festival ha finalizado. Consulta los ganadores y las publicaciones de esta primera edición.",
    resultsLabel: "Primera edición · New York 2026",
    resultsTitle: "Palmarés oficial",
    resultsIntro:
      "Ganadores del Festival de Cine Andino en su primera edición en Nueva York.",
    juryTitle: "El jurado",
    juryCopy:
      "El jurado estuvo integrado por miembros de la Academia «Federación Internacional de Cineastas y Productores Inmigrantes en Europa».",
    awardName: "Premio Kury Chasqui",
    awardCopy:
      "Su nombre en kichwa significa «mensajero de oro u honor». La estatuilla fue diseñada por el artista multidisciplinar Amaruk Kayshapanta.",
    photoAlt:
      "Estatuilla dorada Kury Chasqui de la primera edición del Festival de Cine Andino New York 2026, con la placa de Mejor Guion.",
    photoCaption: "Kury Chasqui · Premio de la primera edición, 2026.",
    signatoriesLabel: "Dirección del festival",
    amarukRole: "Director General y Fundador del Festival de Cine Andino",
    waltherRole:
      "Director Ejecutivo de Alianza Ecuatoriana Internacional y Cofundador del Festival",
    pressLabel: "El festival en los medios",
    pressTitle: "Prensa y publicaciones",
    pressIntro:
      "Cobertura de prensa y reconocimiento del Consulado General del Ecuador en Nueva York a esta primera edición.",
    articleType: "Prensa",
    socialType: "Instagram",
    articleCta: "Leer publicación",
    instagramCta: "Ver en Instagram",
    newTab: "Se abre en una pestaña nueva",
    thanksTitle: "Gracias por ser parte de esta primera edición",
    thanksCopy:
      "A los cineastas, al público, al jurado, a los colaboradores y a las organizaciones que hicieron posible este encuentro con el cine y la cultura andina en Nueva York.",
  },
  en: {
    seoTitle: "2026 Winners | The Andes International Film Fest New York",
    seoDescription:
      "Official winners of the first The Andes International Film Fest New York, held November 8–15, 2026. Discover the Kury Chasqui awards and press coverage.",
    completed: "2026 edition concluded",
    dates: "November 8–15, 2026 · New York",
    heroIntro:
      "The first edition has concluded. We celebrate the films, people and stories recognized with the Kury Chasqui award and share the festival’s official winners.",
    winnersCta: "View winners",
    pressCta: "Press and Instagram",
    archiveNotice:
      "The festival has concluded. Explore the winners and coverage of this first edition.",
    resultsLabel: "First edition · New York 2026",
    resultsTitle: "Official winners",
    resultsIntro: "Award winners of the first Andean Film Festival in New York.",
    juryTitle: "The jury",
    juryCopy:
      "The jury comprised members of the Academy «Federación Internacional de Cineastas y Productores Inmigrantes en Europa» (International Federation of Immigrant Filmmakers and Producers in Europe).",
    awardName: "Kury Chasqui Award",
    awardCopy:
      "Its Kichwa name means “messenger of gold or honor”. The statuette was designed by multidisciplinary artist Amaruk Kayshapanta.",
    photoAlt:
      "Golden Kury Chasqui statuette from the first Andean Film Festival New York 2026, with the Best Screenplay plaque.",
    photoCaption: "Kury Chasqui · First edition award, 2026.",
    signatoriesLabel: "Festival leadership",
    amarukRole: "General Director and Founder of the Andean Film Festival",
    waltherRole:
      "Executive Director of Alianza Ecuatoriana Internacional and Festival Co-founder",
    pressLabel: "The festival in the media",
    pressTitle: "Press and publications",
    pressIntro:
      "Press coverage and recognition of the first edition by the Consulate General of Ecuador in New York.",
    articleType: "Press",
    socialType: "Instagram",
    articleCta: "Read publication",
    instagramCta: "View on Instagram",
    newTab: "Opens in a new tab",
    thanksTitle: "Thank you for being part of our first edition",
    thanksCopy:
      "To the filmmakers, audiences, jury, collaborators and organizations who made this celebration of Andean cinema and culture in New York possible.",
  },
} as const;

type Festival2026Publication = {
  id: string;
  kind: "press" | "instagram";
  source: string;
  account?: string;
  href: string;
  date?: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: LocalizedText;
  };
  title: LocalizedText;
  summary: LocalizedText;
};

// Press previews come from the linked articles. The Instagram account,
// caption and first-slide image were supplied by the organizers.
// A relative publication time is not stored as a calendar date.
export const festival2026Publications: readonly Festival2026Publication[] = [
  {
    id: "instagram-post",
    kind: "instagram",
    source: "Consulado General del Ecuador en Nueva York",
    account: "@cecunuevayork",
    href: "https://www.instagram.com/p/Df5t-gxFDK0/?img_index=1",
    image: {
      src: "/images/events/festival-andino-2026/press/consulado-ecuador-ny-instagram-2026.jpg",
      width: 1199,
      height: 1312,
      alt: {
        es: "Publicación del Consulado General del Ecuador en Nueva York sobre la primera edición del Festival Internacional de Cine Andino 2026 y el premio Kury Chasqui.",
        en: "Consulate General of Ecuador in New York post about the first Andean International Film Festival in 2026 and the Kury Chasqui award.",
      },
    },
    title: {
      es: "El Consulado felicita a los ganadores del Kury Chasqui",
      en: "The Consulate congratulates the Kury Chasqui award winners",
    },
    summary: {
      es: "El Consulado destaca el talento y la riqueza artística de los pueblos andinos, felicita a los galardonados y reconoce el trabajo de Alianza Ecuatoriana Internacional por impulsar esta primera edición.",
      en: "The Consulate highlights the talent and artistic richness of the Andean peoples, congratulates the award winners and recognizes Alianza Ecuatoriana Internacional for making this first edition possible.",
    },
  },
  {
    id: "queens-latino",
    kind: "press",
    source: "Queens Latino",
    href: "https://queenslatino.com/festival-de-cine-andino-new-york-2026-alianza-ecuatoriana-internacional-amaruk-kayshapanta/",
    date: "2026-11-09",
    image: {
      src: "/images/events/festival-andino-2026/press/queens-latino-festival-2026.png",
      width: 700,
      height: 399,
      alt: {
        es: "Imagen del Festival de Cine Andino en Nueva York publicada por Queens Latino.",
        en: "Andean Film Festival in New York image published by Queens Latino.",
      },
    },
    title: {
      es: "Festival de Cine Andino en NY esta semana",
      en: "Andean Film Festival in New York",
    },
    summary: {
      es: "Una presentación de la primera edición, sus organizadores y los espacios de encuentro con el cine andino en Nueva York.",
      en: "An introduction to the first edition, its organizers and the gathering spaces for Andean cinema in New York.",
    },
  },
  {
    id: "el-diario-ny",
    kind: "press",
    source: "El Diario NY",
    href: "https://eldiariony.com/2026/11/12/agenda-de-eventos-que-hacer-en-nueva-york-del-12-al-18-de-noviembre/",
    date: "2026-11-12",
    image: {
      src: "/images/events/festival-andino-2026/press/el-diario-festival-2026.jpg",
      width: 918,
      height: 1173,
      alt: {
        es: "Cartel del Festival Internacional de Cine Andino 2026 incluido en la agenda de El Diario NY.",
        en: "2026 Andean International Film Festival poster featured in the El Diario NY events guide.",
      },
    },
    title: {
      es: "Agenda de eventos: qué hacer en Nueva York del 12 al 18 de noviembre",
      en: "New York events guide, November 12–18",
    },
    summary: {
      es: "La agenda cultural incluyó el festival en Queens y la ceremonia de los premios Kuri Chasqui.",
      en: "The cultural guide featured the festival in Queens and the Kuri Chasqui awards ceremony.",
    },
  },
  
];
