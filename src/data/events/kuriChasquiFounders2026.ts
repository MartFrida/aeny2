
type Language = "es" | "en";

type FounderContent = {
  role: string;
  subtitle: string;
  bio: string;
  sections: {
    title: string;
    text: string;
  }[];
};

type Founder = {
  id: string;
  name: string;
  image: string;
  wikipedia?: Record<Language, string>;
  content: Record<Language, FounderContent>;
};

export const kuriChasqui2026Founders: Founder[] = [
  {
    id: "amaruk",
    name: "Amaruk Kayshapanta",
    image:
      "/images/events/festival-andino-2026/founders/amaruk-kayshapanta.webp",
    wikipedia: {
      es: "https://es.wikipedia.org/wiki/Amaruk_Kayshapanta",
      en: "https://en.wikipedia.org/wiki/Amaruk_Kayshapanta",
    },
    
content: {
  es: {
    role: "Organizador del festival",
    subtitle: "Cineasta · Escritor · Activista cultural",

    bio:
      "Amaruk Kayshapanta es un artista multidisciplinar, actor, cineasta, escritor, periodista y activista ecuatoriano-español de origen kichwa Salasaca Mitimae. Con formación en producción audiovisual y comunicación en UCLA y en San Antonio de los Baños, Cuba, combina una extensa trayectoria en la industria audiovisual europea e hispanoamericana con la preservación del patrimonio y la identidad andina. Según su perfil profesional, es Embajador Cultural Indígena de los Andes por la UNESCO.",

    sections: [
      {
        title: "Formación académica",
        text:
          "Formación en producción audiovisual y comunicación en UCLA y en la Escuela Internacional de Cine y Televisión de San Antonio de los Baños, Cuba.",
      },
      {
        title: "Interpretación y trayectoria cinematográfica",
        text:
          "Actor de cine, televisión y teatro, con participación en producciones vinculadas a Netflix, HBO, Hollywood y las industrias cinematográficas española y europea. Según su trayectoria profesional, ha recibido tres nominaciones a los Premios Goya.",
      },
      {
        title: "Dirección y producción audiovisual",
        text:
          "Director de proyectos audiovisuales, películas, documentales y cine de autor. Su trabajo artístico defiende la memoria histórica andina, los derechos humanos, la igualdad y el reconocimiento de la diversidad cultural en el mundo.",
      },
      {
        title: "Literatura y divulgación",
        text:
          "Escritor, poeta y novelista, autor de más de 37 libros, muchos de ellos dedicados a la cosmovisión andina y al Amawtismo. Sus obras están disponibles en plataformas internacionales como Amazon y han sido publicadas por sellos editoriales como Carena Ediciones, Acidalia Editorial y Olimpus Editorial.",
      },
      {
        title: "Comunicación y liderazgo",
        text:
          "Fundador, directivo y director general de ACINPECG (Academia Internacional de Periodistas, Comunicación Global). Desarrolla iniciativas vinculadas a la comunicación, el periodismo, la creación audiovisual y la promoción cultural.",
      },
      {
        title: "Deporte y artes marciales",
        text:
          "Cuenta con seis cinturones negros y formación de 6.º Dan en disciplinas y organizaciones vinculadas a WTF, WAKO, IHF y FIDAM. Máster en artes marciales mixtas (MMA) y excampeón sudamericano.",
      },
      {
        title: "Hitos y reconocimientos",
        text:
          "2022 — Medalla de Oro de la Academia de las Ciencias y las Artes de España, por su aportación al cine español.\n\n2012 — Chasqui de Oro, otorgado en Nueva York por Alianza Ecuatoriana Internacional.\n\n2013 — Reconocimiento entre los «100 Latinos Madrid» más destacados e influyentes de España, en una iniciativa vinculada al Ministerio de Asuntos Exteriores de España, Casa de América y la Comunidad de Madrid.",
      },
    ],
  },

  en: {
    role: "Festival Organizer",
    subtitle: "Filmmaker · Writer · Cultural Activist",

    bio:
      "Amaruk Kayshapanta is an Ecuadorian-Spanish multidisciplinary artist, actor, filmmaker, writer, journalist and cultural activist of Kichwa Salasaca Mitimae heritage. With a background in audiovisual production and communication at UCLA and in San Antonio de los Baños, Cuba, he combines an extensive career in European and Latin American audiovisual industries with the preservation of Andean cultural heritage and identity. According to his professional biography, he serves as a UNESCO Indigenous Cultural Ambassador of the Andes.",

    sections: [
      {
        title: "Education and Professional Training",
        text:
          "Academic training in audiovisual production and communication at UCLA and the International Film and Television School in San Antonio de los Baños, Cuba.",
      },
      {
        title: "Acting and Film Career",
        text:
          "Film, television and theater actor with experience in productions associated with Netflix, HBO, Hollywood, and the Spanish and European film industries. According to his professional profile, he has received three nominations for the Goya Awards.",
      },
      {
        title: "Film Direction and Production",
        text:
          "Director of audiovisual projects, feature films, documentaries and independent cinema. His artistic work advocates for Andean historical memory, human rights, equality and the recognition of cultural diversity worldwide.",
      },
      {
        title: "Literature and Cultural Education",
        text:
          "Writer, poet and novelist, author of more than 37 books, many exploring Andean cosmology and Amawtismo. His works are available through international platforms such as Amazon and have been published by Carena Ediciones, Acidalia Editorial and Olimpus Editorial.",
      },
      {
        title: "Communication and Leadership",
        text:
          "Founder, executive leader and general director of ACINPECG (International Academy of Journalists and Global Communication). He develops initiatives related to communication, journalism, audiovisual production and cultural promotion.",
      },
      {
        title: "Sports and Martial Arts",
        text:
          "Holder of six black belts, with 6th Dan qualifications associated with WTF, WAKO, IHF and FIDAM. MMA master and former South American champion.",
      },
      {
        title: "Awards and Recognition",
        text:
          "2022 — Gold Medal from the Academy of Sciences and Arts of Spain, recognizing his contribution to Spanish cinema.\n\n2012 — Chasqui de Oro, awarded in New York by Alianza Ecuatoriana Internacional.\n\n2013 — Recognized among the «100 Latinos Madrid» considered influential Latino figures in Spain, in an initiative associated with Spain's Ministry of Foreign Affairs, Casa de América and the Community of Madrid.",
      },
    ],
  },
},

  },
  {
    id: "walter",
    name: "Walter Sinche",
    image:
      "/images/events/festival-andino-2026/founders/walter-sinche.webp",
    content: {
      es: {
        role: "Organizador del festival",
        subtitle:
          "Director ejecutivo · Líder comunitario · Defensor de derechos",
        bio:
          "Walter Sinche es un líder comunitario y activista social ecuatoriano-estadounidense con más de tres décadas de experiencia en la defensa de los derechos y el empoderamiento de las comunidades migrantes hispanas en Nueva York. Su trabajo se centra en la integración, la formación profesional y el bienestar de las personas migrantes.",
        sections: [
          {
            title: "Fundación y liderazgo institucional",
            text:
              "Es fundador y director ejecutivo de Alianza Ecuatoriana Internacional y del Centro Comunitario Andino. Desde estas organizaciones impulsa programas sociales, educativos y de orientación para la comunidad ecuatoriana y latinoamericana en Nueva York.",
          },
          {
            title: "Educación y capacitación profesional",
            text:
              "Promueve programas de formación técnica, seguridad laboral, capacitación para el sector de la construcción y cursos relacionados con certificaciones OSHA, con el objetivo de mejorar el acceso al empleo y las oportunidades profesionales.",
          },
          {
            title: "Defensa de los derechos migrantes",
            text:
              "Participa en campañas de protección de los derechos laborales y humanos, prevención de delitos de odio y promoción de medidas de protección migratoria, incluidas iniciativas relacionadas con el Estatus de Protección Temporal (TPS) para ciudadanos ecuatorianos.",
          },
          {
            title: "Asistencia e integración comunitaria",
            text:
              "Desarrolla redes de apoyo para personas migrantes en situaciones de vulnerabilidad, facilitando orientación, recursos comunitarios y conexiones con servicios de asistencia.",
          },
          {
            title: "Cooperación institucional",
            text:
              "Trabaja para fortalecer la colaboración entre comunidades migrantes, consulados, instituciones públicas, organizaciones sociales y entidades sin fines de lucro, promoviendo la cultura, la participación ciudadana y el desarrollo comunitario.",
          },
        ],
      },
      en: {
        role: "Festival Organizer",
        subtitle:
          "Executive Director · Community Leader · Human Rights Advocate",
        bio:
          "Walter Sinche is an Ecuadorian-American community leader and social activist with more than three decades of experience advocating for the rights and empowerment of Hispanic immigrant communities in New York. His work focuses on social integration, professional training and the well-being of immigrant families.",
        sections: [
          {
            title: "Organizational Leadership",
            text:
              "He is the founder and executive director of Alianza Ecuatoriana Internacional and the Andean Community Center. Through these organizations, he supports social, educational and community assistance programs serving Ecuadorian and Latin American immigrants in New York.",
          },
          {
            title: "Education and Workforce Development",
            text:
              "He promotes technical training, workplace safety education, construction industry training and programs related to OSHA certifications, helping community members improve their employment prospects and professional opportunities.",
          },
          {
            title: "Immigrant Rights Advocacy",
            text:
              "His advocacy includes workers' rights, human rights, hate crime prevention and immigration protection initiatives, including efforts related to Temporary Protected Status (TPS) for Ecuadorian nationals.",
          },
          {
            title: "Community Support and Integration",
            text:
              "He helps build support networks for immigrants facing vulnerable circumstances, facilitating guidance, community resources and access to assistance services.",
          },
          {
            title: "Institutional Collaboration",
            text:
              "He fosters cooperation among immigrant communities, consulates, public institutions, nonprofit organizations and local agencies to strengthen cultural participation, social inclusion and community development.",
          },
        ],
      },
    },
  },
];
