
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
          "Amaruk Kayshapanta es un artista multidisciplinar, actor, cineasta, escritor, periodista y activista ecuatoriano-español de origen kichwa Salasaca Mitimae. Su trayectoria combina la creación audiovisual, la literatura y la defensa de la identidad, la memoria histórica y el patrimonio cultural andino.",
        sections: [
          {
            title: "Cine y producción audiovisual",
            text:
              "Con formación en producción audiovisual y comunicación, ha desarrollado su carrera en cine, televisión y teatro, participando en producciones españolas e internacionales. También dirige proyectos cinematográficos, documentales y obras de autor centradas en la memoria histórica, los derechos humanos y la diversidad cultural.",
          },
          {
            title: "Literatura y patrimonio andino",
            text:
              "Es escritor, poeta y novelista. Su producción literaria aborda especialmente la cosmovisión andina y el Amawtismo. Sus obras han sido publicadas por editoriales como Carena Ediciones y otras casas editoriales.",
          },
          {
            title: "Comunicación y liderazgo",
            text:
              "Es fundador y director general de ACINPECG, Academia Internacional de Periodistas, Comunicación Global. Su actividad cultural busca conectar la expresión artística con el reconocimiento de las comunidades indígenas y migrantes.",
          },
          {
            title: "Deporte y artes marciales",
            text:
              "Cuenta también con una trayectoria en las artes marciales y el deporte de competición, que complementa su actividad artística y social.",
          },
          {
            title: "Reconocimientos",
            text:
              "Entre sus reconocimientos figuran el Chasqui de Oro, recibido en Nueva York en 2012; su inclusión entre los 100 Latinos Madrid en 2013; y su participación en el reconocimiento de la Academia de Cine española a intérpretes latinoamericanos en 2022.",
          },
        ],
      },
      en: {
        role: "Festival Organizer",
        subtitle: "Filmmaker · Writer · Cultural Activist",
        bio:
          "Amaruk Kayshapanta is an Ecuadorian-Spanish multidisciplinary artist, actor, filmmaker, writer, journalist and cultural activist of Kichwa Salasaca Mitimae heritage. His career brings together audiovisual storytelling, literature and the preservation of Andean cultural identity, historical memory and heritage.",
        sections: [
          {
            title: "Film and Audiovisual Production",
            text:
              "With a background in audiovisual production and communication, he has worked in film, television and theater, appearing in Spanish and international productions. He also develops films, documentaries and independent projects exploring historical memory, human rights and cultural diversity.",
          },
          {
            title: "Literature and Andean Heritage",
            text:
              "As a writer, poet and novelist, his literary work frequently explores Andean cosmology and Amawtismo. His books have been published by publishing houses including Carena Ediciones.",
          },
          {
            title: "Communication and Leadership",
            text:
              "He is the founder and general director of ACINPECG, the International Academy of Journalists and Global Communication. His cultural initiatives seek to connect artistic expression with recognition of Indigenous and migrant communities.",
          },
          {
            title: "Sports and Martial Arts",
            text:
              "His background also includes martial arts and competitive sports, complementing his artistic and social activities.",
          },
          {
            title: "Awards and Recognition",
            text:
              "His recognition includes the Chasqui de Oro award in New York in 2012, recognition among the 100 Latinos Madrid in 2013, and participation in the Spanish Film Academy's 2022 recognition of Latin American performers.",
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
