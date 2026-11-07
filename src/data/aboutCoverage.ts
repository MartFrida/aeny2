export type CoverageLanguage = "es" | "en";
export type CoverageKind = "video" | "press" | "official" | "community";

type LocalizedText = Record<CoverageLanguage, string>;

export type CoverageSource = {
  id: string;
  kind: CoverageKind;
  publisher: string;
  title: string;
  url: string;
  /** Publication date, not the date of an event announced in the source. */
  date?: string;
  year?: number;
  duration?: string;
  /** A local preview taken from this publication, never an unrelated photo. */
  image?: { src: string; width: number; height: number; position?: string };
  summary: LocalizedText;
  /** An external publication may contain an interview or announcement. */
  note?: LocalizedText;
};

// Reviewed on 2026-11-07. Original titles are retained in the source language.
// Do not infer founding dates or completed projects from these publications.
export const aboutCoverage: CoverageSource[] = [
  {
    image: {"src": "/images/aeiny/press/univision-angel-2020.webp", "width": 1280, "height": 720},
    id: "univision-angel-2020", kind: "video", publisher: "Univision 41 Nueva York",
    title: "Por su trabajo con la comunidad, Walther Sinche es nuestro Ángel del 41 de mayo",
    url: "https://www.univision.com/local/nueva-york-wxtv/por-su-trabajo-con-la-comunidad-walther-sinche-es-nuestro-angel-del-41-de-mayo-video",
    date: "2020-05-29", duration: "1:01",
    summary: {
      es: "Reconocimiento a la labor comunitaria de Walther Sinche y a la entrega de alimentos a más de 12.000 personas durante la pandemia.",
      en: "Recognition of Walther Sinche’s community work and efforts to provide food to more than 12,000 people during the pandemic.",
    },
  },
  {
    image: {"src": "/images/aeiny/press/primicias-profile-2025.webp", "width": 1200, "height": 675},
    id: "primicias-profile-2025", kind: "press", publisher: "Primicias",
    title: "Walter Sinche, el ecuatoriano al que una injusticia lo indignó y creó un refugio para migrantes en Nueva York",
    url: "https://www.primicias.ec/sociedad/alianza-ecuatoriana-internacional-refugio-migrantes-nueva-york-walter-sinche-108986/",
    date: "2025-11-09",
    summary: {
      es: "Entrevista sobre orientación a migrantes, derechos laborales, formación técnica, clases de inglés y las actividades del Centro Comunitario Andino.",
      en: "An interview covering migrant support, workers’ rights, technical training, English classes and the activities of Centro Comunitario Andino.",
    },
  },
  {
    image: {"src": "/images/aeiny/press/mercurio-family-2026.webp", "width": 1280, "height": 910},
    id: "mercurio-family-2026", kind: "press", publisher: "El Mercurio",
    title: "Niños separados por deportaciones: historias que se repiten entre migrantes ecuatorianos",
    url: "https://elmercurio.com.ec/migracion/2026/04/28/retorno-ninos-migrantes-eeuu/",
    date: "2026-04-28",
    summary: {
      es: "El reportaje relata cómo Walther Sinche acompañó a una bebé desde Estados Unidos a Ecuador para reunirla con su madre deportada.",
      en: "A report on Walther Sinche accompanying a baby from the United States to Ecuador to reunite her with her deported mother.",
    },
  },
  {
    image: {"src": "/images/aeiny/press/mercurio-cuenca-2026.webp", "width": 1256, "height": 960},
    id: "mercurio-cuenca-2026", kind: "press", publisher: "El Mercurio",
    title: "Se abre oficina en Cuenca para ayudar inmigrantes",
    url: "https://elmercurio.com.ec/migracion/2026/02/12/se-abre-oficina-en-cuenca-para-ayudar-inmigrantes/",
    date: "2026-02-12",
    summary: {
      es: "La apertura de una oficina en Cuenca para orientar a personas deportadas y a sus familias, y acompañar su proceso de reintegración.",
      en: "The opening of an office in Cuenca to guide deported migrants and their families and support their reintegration.",
    },
  },
  {
    image: {"src": "/images/aeiny/press/queens-park-2024.webp", "width": 700, "height": 409},
    id: "queens-park-2024", kind: "press", publisher: "Queens Latino",
    title: "Alianza Ecuatoriana con nuevo local busca construir Parque del Migrante",
    url: "https://queenslatino.com/parque-del-migrante-cuenca-alcalde-zamora-sinche-aei/",
    date: "2024-08-08",
    summary: {
      es: "Cobertura de la nueva sede, la visita del alcalde de Cuenca y la presentación del proyecto Parque del Migrante.",
      en: "Coverage of the new premises, a visit by Cuenca’s mayor and the presentation of the Parque del Migrante project.",
    },
    note: { es: "Presentación de un proyecto.", en: "Project presentation." },
  },
  {
    image: {"src": "/images/aeiny/press/eater-food-2020.webp", "width": 1200, "height": 624},
    id: "eater-food-2020", kind: "press", publisher: "Eater New York",
    title: "NYC Restaurant Workers Pushed to Food Pantries and Homelessness While Jobs Remain Scarce",
    url: "https://ny.eater.com/2020/8/14/21366085/nyc-restaurant-workers-jobless-meals-food-pantry-hunger",
    date: "2020-08-14",
    summary: {
      es: "Fotorreportaje sobre la distribución de comida en Corona, Queens, y la ayuda a trabajadores inmigrantes que perdieron sus empleos durante la pandemia.",
      en: "A photo report on food distribution in Corona, Queens, and support for immigrant workers who lost their jobs during the pandemic.",
    },
  },
  {
    image: {"src": "/images/aeiny/press/univision-workers-2024.webp", "width": 1280, "height": 720},
    id: "univision-workers-2024", kind: "video", publisher: "Univision 41 Nueva York",
    title: "Empleos inseguros, acoso y otros retos que enfrentan hombres y mujeres que trabajan en construcción",
    url: "https://www.univision.com/local/nueva-york-wxtv/empleos-inseguros-acoso-y-otros-retos-que-enfrentan-hombres-y-mujeres-que-trabajan-en-construccion-video",
    date: "2024-02-05",
    summary: {
      es: "Entrevista con Walter Sinche sobre los retos de los trabajadores de la construcción y la orientación que pueden solicitar a la organización.",
      en: "An interview with Walter Sinche about the challenges construction workers face and the support available through the organization.",
    },
  },
  {
    image: {"src": "/images/aeiny/press/hitn-pandemic.webp", "width": 1280, "height": 720},
    id: "hitn-pandemic", kind: "video", publisher: "HITN Vimeo",
    title: "04 Walter Sinche helps during Pandemic",
    url: "https://vimeo.com/571835270",
    summary: {
      es: "Video publicado por HITN Vimeo sobre la ayuda de Walter Sinche durante la pandemia.",
      en: "A video published by HITN Vimeo about Walter Sinche’s assistance during the pandemic.",
    },
  },
  {
    image: {"src": "/images/aeiny/press/public-realm-film-2025.webp", "width": 1280, "height": 720},
    id: "public-realm-film-2025", kind: "video", publisher: "The Public Realm Lab · The New School",
    title: "The Making of Corona Plaza, Queens",
    url: "https://publicrealmlab.org/watch/", year: 2025,
    summary: {
      es: "Documental sobre la creación de Corona Plaza y sus protagonistas comunitarios. Incluye una entrevista con Walther Sinche, director ejecutivo de Alianza.",
      en: "A documentary about the creation of Corona Plaza and its community protagonists, including an interview with Alianza’s executive director, Walther Sinche.",
    },
  },
  {
    id: "nyc-directory", kind: "official", publisher: "NYC Mayor’s Office of Immigrant Affairs",
    title: "Employment, Training, Financial Empowerment — Resource Directory",
    url: "https://www.nyc.gov/assets/immigrants/downloads/pdf/MOIA-Directory-Employment.pdf#page=23",
    summary: {
      es: "Alianza figura en el directorio municipal de recursos de empleo, capacitación y autonomía financiera, con sus datos de contacto en Queens.",
      en: "Alianza is listed in the city’s employment, training and financial empowerment resource directory, with its Queens contact details.",
    },
    note: { es: "Directorio oficial · PDF", en: "Official directory · PDF" },
  },
  {
    id: "cuenca-council-2025", kind: "official", publisher: "Municipio de Cuenca",
    title: "Comisiones generales del Concejo Municipal — 2025",
    url: "https://transparencia.cuenca.gob.ec/sites/default/files/Transparencia/Participacion_Ciudadana/Comision_General/Documentos/Comision_2025.pdf",
    year: 2025,
    summary: {
      es: "El registro de la sesión del 30 de enero recoge la intervención del director de Alianza sobre el proyecto Parque del Migrante.",
      en: "The record of the January 30 council meeting includes Alianza’s director addressing the Parque del Migrante project.",
    },
    note: { es: "El documento utiliza el nombre Walter Sinchi Rivera · PDF", en: "The document uses the name Walter Sinchi Rivera · PDF" },
  },
  {
    id: "cuenca-programme-2024", kind: "official", publisher: "Municipio de Cuenca · Archivo documental",
    title: "Descripción de las actividades a ejecutarse",
    url: "https://www.cuenca.gob.ec/system/files/2024%204296.pdf", year: 2024,
    summary: {
      es: "Documento alojado en el portal municipal que describe la formación laboral, orientación a migrantes y colaboración en el proyecto Parque del Migrante.",
      en: "A document hosted on the municipal portal describing job training, migrant guidance and collaboration on the Parque del Migrante project.",
    },
    note: { es: "Archivo documental · PDF", en: "Document archive · PDF" },
  },
  {
    image: {"src": "/images/aeiny/press/mercurio-chasqui-2026.webp", "width": 1141, "height": 960},
    id: "mercurio-chasqui-2026", kind: "press", publisher: "El Mercurio",
    title: "En Cuenca se correrá la Chasqui Migrante 5K y 10K",
    url: "https://elmercurio.com.ec/deportes/2026/09/04/chasqui-migrante-cuenca-carrera-atletica/",
    date: "2026-09-04",
    summary: {
      es: "Anuncio de la carrera preparada por Fundación Alianza Ecuatoriana Internacional, vinculada a la identidad, la unión y la comunidad migrante.",
      en: "An announcement of the race being prepared by Fundación Alianza Ecuatoriana Internacional, connecting identity, solidarity and the migrant community.",
    },
    note: { es: "Anuncio del evento; consulta los detalles vigentes en la página de la carrera.", en: "Event announcement; check the race page for current details." },
  },
  {
    image: {"src": "/images/aeiny/press/mercurio-interview-2025.webp", "width": 1200, "height": 755},
    id: "mercurio-interview-2025", kind: "press", publisher: "El Mercurio",
    title: "“La migración sostiene al Ecuador”: Walther Sinche, representante de la Alianza Ecuatoriana Internacional",
    url: "https://elmercurio.com.ec/actualidad/2025/11/10/migracion-ecuador-walther-sinche/",
    date: "2025-11-10",
    summary: {
      es: "Entrevista sobre la realidad migratoria, la defensa de derechos y las acciones comunitarias de apoyo a familias en situación de vulnerabilidad.",
      en: "An interview about migration, rights advocacy and community initiatives supporting families in vulnerable situations.",
    },
  },
  {
    id: "univision-brooklyn-2023", kind: "press", publisher: "Univision 41 Nueva York",
    title: "Alianza ecuatoriana abre oficina en Brooklyn para apoyar a la comunidad",
    url: "https://www.univision.com/local/nueva-york-wxtv/alianza-ecuatoriana-oficina-brooklyn-comunidad-osha",
    date: "2023-11-17",
    summary: {
      es: "Reportaje sobre la sede de Bushwick, los cursos de construcción y la respuesta a las necesidades de migrantes recién llegados.",
      en: "A report on the Bushwick office, construction training and the response to newly arrived migrants’ needs.",
    },
  },
  {
    image: {"src": "/images/aeiny/press/spectrum-construction-2024.webp", "width": 1221, "height": 694},
    id: "spectrum-construction-2024", kind: "press", publisher: "Spectrum Noticias NYC",
    title: "Diálogo con la Comunidad: Peligros del trabajo en la construcción",
    url: "https://spectrumlocalnews.com/nc/charlotte/noticias/2024/02/18/-dialogo-con-la-comunidad--peligros-del-trabajo-en-la-construccion",
    date: "2024-02-18",
    summary: {
      es: "Conversación con Walter Sinche sobre los riesgos de la construcción, la prevención de accidentes y la importancia de la preparación laboral.",
      en: "A conversation with Walter Sinche about construction risks, accident prevention and the importance of worker training.",
    },
  },
  {
    id: "impacto-bushwick-2024", kind: "press", publisher: "Impacto Latino",
    title: "Magaly Bustamante, testimonio de la comunidad en Bushwick",
    url: "https://impactolatino.com/magaly-bustamante-testimonio-de-la-comunidad-en-bushwick/",
    date: "2024-03-28",
    summary: {
      es: "Entrevista con una integrante del equipo sobre el trabajo cotidiano de la sede de Brooklyn y la orientación a trabajadores inmigrantes.",
      en: "An interview with a team member about the Brooklyn office’s daily work and its guidance for immigrant workers.",
    },
  },
  {
    id: "impacto-migrants-2023", kind: "press", publisher: "Impacto Latino",
    title: "Organizaciones enfrentan sin ayuda éxodo de nuevos inmigrantes",
    url: "https://impactolatino.com/organizaciones-enfrentan-sin-ayuda-exodo-de-nuevos-inmigrantes/", year: 2023,
    summary: {
      es: "La sección dedicada a Alianza recoge una entrevista sobre capacitación laboral, orientación gratuita y la creciente demanda de apoyo migrante.",
      en: "The section on Alianza includes an interview about vocational training, free guidance and growing demand for migrant support.",
    },
  },
  {
    id: "impacto-parque", kind: "press", publisher: "Impacto Latino",
    title: "Alianza Ecuatoriana Internacional presenta el Parque del Migrante",
    url: "https://impactolatino.com/alianza-ecuatoriana-internacional-presenta-el-parque-del-migrante/",
    summary: {
      es: "Cobertura de la presentación de la iniciativa en Cuenca y de los vínculos de la organización con la comunidad ecuatoriana en el exterior.",
      en: "Coverage of the initiative’s presentation in Cuenca and the organization’s connections with Ecuadorian communities abroad.",
    },
    note: { es: "Presentación de un proyecto.", en: "Project presentation." },
  },
  {
    image: {"src": "/images/aeiny/press/diario-profile-2020.webp", "width": 960, "height": 640},
    id: "diario-profile-2020", kind: "press", publisher: "El Diario NY",
    title: "Un Quijote ecuatoriano llamado Walter Sinche",
    url: "https://eldiariony.com/2020/08/09/un-quijote-de-llamado-walter-sinche/", date: "2020-08-09",
    summary: {
      es: "Perfil de su trayectoria contra la discriminación, la entrega de comida y mascarillas, y la participación de Alianza en el Censo 2020.",
      en: "A profile covering anti-discrimination advocacy, food and mask distribution, and Alianza’s participation in the 2020 Census.",
    },
  },
  {
    image: {"src": "/images/aeiny/press/tzuchi-food-2020.webp", "width": 1024, "height": 578},
    id: "tzuchi-food-2020", kind: "community", publisher: "Tzu Chi USA",
    title: "Tzu Chi y Brigada de Esperanza avanzan con su segunda distribución a pesar de la tragedia",
    url: "https://tzuchi.us/es/blog/tzu-chi-y-brigada-esperanza-avanzan-con-segunda-distribucion-a-pesar-de-la-tragedia", date: "2020-08-18",
    summary: {
      es: "Una organización colaboradora documenta la participación de Alianza en una distribución conjunta de alimentos para familias de Queens.",
      en: "A collaborating organization documents Alianza’s participation in a joint food distribution for families in Queens.",
    },
    note: { es: "Publicación de una organización colaboradora.", en: "Published by a collaborating organization." },
  },
  {
    id: "comercio-food", kind: "press", publisher: "El Comercio",
    title: "Los emigrantes irregulares reciben alimentos en Nueva York",
    url: "https://www.elcomercio.com/actualidad/mundo/migrantes-ecuatorianos-alimentos-nueva-york/",
    summary: {
      es: "Cobertura de las entregas de comida y productos de primera necesidad coordinadas por Alianza durante la emergencia de COVID-19.",
      en: "Coverage of food and essential supplies distributed through Alianza during the COVID-19 emergency.",
    },
    // The publisher's displayed 2026 date conflicts with the pandemic-era account.
    // Omit the publication date rather than treating this as a new campaign.
  },
  {
    image: {"src": "/images/aeiny/press/ecuadornews-service-2020.webp", "width": 600, "height": 300},
    id: "ecuadornews-service-2020", kind: "press", publisher: "Ecuador News",
    title: "Walter Sinche: mi padre me inspiró en ayudar al prójimo y encontrar un propósito de vida",
    url: "https://ecuadornews.com.ec/2020/04/29/walter-sinche-mi-padre-me-inspiro-en-ayudar-al-projimo-y-encontrar-un-proposito-de-vida/", date: "2020-04-29",
    summary: {
      es: "Entrevista sobre su vocación de servicio y el apoyo alimentario ofrecido a la comunidad latina en Roosevelt Avenue.",
      en: "An interview about his commitment to service and food assistance for the Latino community on Roosevelt Avenue.",
    },
  },
  {
    image: {"src": "/images/aeiny/press/ecuadornews-quarantine-2020.webp", "width": 600, "height": 300},
    id: "ecuadornews-quarantine-2020", kind: "press", publisher: "Ecuador News",
    title: "Ayuda en cuarentena",
    url: "https://ecuadornews.com.ec/2020/05/20/ayuda-en-cuarentena/", date: "2020-05-20",
    summary: {
      es: "Una publicación sobre la ayuda comunitaria durante la cuarentena, con mención al trabajo de Walter Sinche y su equipo.",
      en: "A publication on community assistance during quarantine, mentioning the work of Walter Sinche and his team.",
    },
  },
  {
    image: {"src": "/images/aeiny/press/ecuadornews-solidarity-may-2020.webp", "width": 600, "height": 300},
    id: "ecuadornews-solidarity-may-2020", kind: "press", publisher: "Ecuador News",
    title: "Solidaridad y unión",
    url: "https://ecuadornews.com.ec/2020/05/27/la-solidaridad-y-la-union-hace-posible-apoyar-a-la-comunidad/", date: "2020-05-27",
    summary: {
      es: "La labor de los voluntarios del Centro Comunitario Andino y las colaboraciones que hicieron posibles las entregas de alimentos.",
      en: "The work of Centro Comunitario Andino volunteers and the collaborations that made food distributions possible.",
    },
  },
  {
    image: {"src": "/images/aeiny/press/ecuadornews-solidarity-june-2020.webp", "width": 600, "height": 300},
    id: "ecuadornews-solidarity-june-2020", kind: "press", publisher: "Ecuador News",
    title: "La solidaridad y la unión hace posible apoyar a la Comunidad",
    url: "https://ecuadornews.com.ec/2020/06/03/la-solidaridad-y-la-union-hace-posible-apoyar-a-la-comunidad-2/", date: "2020-06-03",
    summary: {
      es: "Preparación y entrega diaria de alimentos por el equipo y los voluntarios del Centro Comunitario Andino en Corona.",
      en: "Daily food preparation and distribution by the Centro Comunitario Andino team and volunteers in Corona.",
    },
  },
  {
    image: {"src": "/images/aeiny/press/trabajador-rights-2019.webp", "width": 1200, "height": 755},
    id: "trabajador-rights-2019", kind: "press", publisher: "Trabajador Inmigrante",
    title: "Walther Sinche, activista y director de Alianza Ecuatoriana Internacional: “La justicia es todavía racista”",
    url: "https://trabajadorinmigrante.com/2019/08/walther-sinche-activista-y-director-de-alianza-ecuatoriana-internacional-la-justicia-es-todavia-racista/", date: "2019-08-10",
    summary: {
      es: "Perfil sobre derechos civiles, respuesta a crímenes de odio y la labor educativa y comunitaria de Alianza y del Centro Comunitario Andino.",
      en: "A profile on civil rights, responses to hate crimes and the educational and community work of Alianza and Centro Comunitario Andino.",
    },
  },
  {
    id: "impacto-tps", kind: "press", publisher: "Impacto Latino",
    title: "Concejales de la Ciudad de Nueva York respaldan pedido de TPS para ecuatorianos",
    url: "https://impactolatino.com/concejales-de-la-ciudad-de-nueva-york-respaldan-pedido-de-tps-para-ecuatorianos/",
    summary: {
      es: "Mención a la participación de Walter Sinche, en representación de Alianza, en una audiencia sobre protección temporal para ecuatorianos.",
      en: "A mention of Walter Sinche representing Alianza at a hearing on temporary protection for Ecuadorians.",
    },
  },
  {
    id: "univision-victim-support", kind: "press", publisher: "Univision 41 Nueva York",
    title: "En condición crítica el ecuatoriano apuñalado en el tren N en Brooklyn",
    url: "https://www.univision.com/local/nueva-york-wxtv/en-condicion-critica-el-ecuatoriano-apunalado-en-el-tren-n-en-brooklyn",
    summary: {
      es: "La cobertura incluye la petición de justicia de Walter Sinche, presidente de Alianza, tras la agresión a un ecuatoriano en Brooklyn.",
      en: "The coverage includes Alianza president Walter Sinche’s call for justice after an Ecuadorian man was attacked in Brooklyn.",
    },
  },
  {
    image: {"src": "/images/aeiny/press/queens-recognition-2013.webp", "width": 648, "height": 244},
    id: "queens-recognition-2013", kind: "press", publisher: "Queens Latino",
    title: "Reconocen a los pueblos andinos en Nueva York",
    url: "https://queenslatino.com/reconocen-a-los-pueblos-andinos-en-nueva-york/", year: 2013,
    summary: {
      es: "Reportaje sobre la proclamación recibida por Walter Sinche en el Concejo de Nueva York y el reconocimiento a la comunidad y la cultura andinas.",
      en: "A report on the proclamation received by Walter Sinche at New York City Council and recognition of Andean communities and culture.",
    },
  },
  {
    image: {"src": "/images/aeiny/press/queens-festival-2011.webp", "width": 403, "height": 288},
    id: "queens-festival-2011", kind: "press", publisher: "Queens Latino",
    title: "Festival Andino por la salud de los inmigrantes",
    url: "https://queenslatino.com/festival-andino-en-flushing/", date: "2011-06-13",
    summary: {
      es: "Cobertura del Festival Andino y la Carrera y Caminata El Chasqui, con deporte, música, danza y actividades familiares en Flushing.",
      en: "Coverage of Festival Andino and the El Chasqui run and walk, featuring sport, music, dance and family activities in Flushing.",
    },
  },
  {
    image: {"src": "/images/aeiny/press/queens-festival-2013.webp", "width": 576, "height": 286},
    id: "queens-festival-2013", kind: "press", publisher: "Queens Latino",
    title: "Festival Andino y Carrera el Chasqui atrajo a cientos de personas al Parque Flushing",
    url: "https://queenslatino.com/festival-andino-y-charrera-el-chasqui-atrajo-cientos-de-personas-al-parque-flushing/", date: "2013-06-20",
    summary: {
      es: "Crónica de la carrera, la caminata y el festival organizados por Alianza, con expresiones artísticas y gastronomía de distintos países andinos.",
      en: "An account of Alianza’s run, walk and festival, with artistic performances and food from several Andean countries.",
    },
  },
  {
    id: "queens-inti-raymi", kind: "press", publisher: "Queens Latino",
    title: "Fiesta ecuatoriana del Inti Raymi",
    url: "https://queenslatino.com/fiesta-ecuatoriana-del-inti-raymi/",
    summary: {
      es: "La celebración del Inti Raymi en el Museo de Arte de Queens, con mención a la organización de la Caminata Chasqui por Alianza.",
      en: "An Inti Raymi celebration at the Queens Museum of Art, mentioning Alianza’s organization of the Chasqui walk.",
    },
  },
  {
    image: {"src": "/images/aeiny/press/queens-soy-andino.webp", "width": 443, "height": 288},
    id: "queens-soy-andino", kind: "press", publisher: "Queens Latino",
    title: "Festival Soy Andino en Parque Flushing en defensa de la tierra o amautismo",
    url: "https://queenslatino.com/festival-soy-andino-en-parque-flushing-en-defensa-de-la-tierra-o-amautismo/",
    summary: {
      es: "Reportaje sobre el festival organizado por Alianza y su promoción de la identidad andina mediante grupos folclóricos de varios países.",
      en: "A report on Alianza’s festival and its promotion of Andean identity through folk groups from several countries.",
    },
  },
  {
    id: "comercio-polleras", kind: "press", publisher: "El Comercio",
    title: "Las polleras azuayas se lucen en EE.UU.",
    url: "https://www.elcomercio.com/actualidad/polleras-azuayas-lucen-ee-uu-1/",
    summary: {
      es: "Artículo sobre indumentaria tradicional azuaya en Estados Unidos que menciona a Walter Sinche como presidente de Alianza.",
      en: "An article on traditional Azuay clothing in the United States, mentioning Walter Sinche as Alianza’s president.",
    },
  },
  {
    id: "juve-leadership", kind: "community", publisher: "Organización Juventud Ecuatoriana",
    title: "2da Conferencia de Liderazgo",
    url: "https://juventudecuatoriana.org/conferencia-de-liderazgo/",
    summary: {
      es: "Programa de una conferencia que presenta a Walter Rodrigo Sinche Rivera como expositor y reseña su trayectoria comunitaria y cultural.",
      en: "A conference programme presenting Walter Rodrigo Sinche Rivera as a speaker and outlining his community and cultural work.",
    },
  },
  {
    id: "efe-election-2021", kind: "press", publisher: "EFE · Swissinfo",
    title: "Sinche, el activista que quiere desbancar a Alianza País y CREO en EE. UU.",
    url: "https://www.swissinfo.ch/spa/sinche-el-activista-que-quiere-desbancar-a-alianza-pa%C3%ADs-y-creo-en-ee-uu/46338334", date: "2021-02-02",
    summary: {
      es: "Perfil de su candidatura de 2021 que también describe su trayectoria al frente de Alianza y su trabajo contra los crímenes de odio.",
      en: "A profile of his 2021 candidacy that also describes his leadership of Alianza and work against hate crimes.",
    },
    note: { es: "Archivo · Actividad política personal de 2021.", en: "Archive · Personal political activity in 2021." },
  },
  {
    image: {"src": "/images/aeiny/press/univision-election-2021.webp", "width": 1280, "height": 720},
    id: "univision-election-2021", kind: "video", publisher: "Univision 41 Nueva York",
    title: "Walther Sinche, el líder comunitario que busca representar a inmigrantes ecuatorianos en EEUU y Canadá",
    url: "https://www.univision.com/local/nueva-york-wxtv/walther-sinche-el-lider-comunitario-que-busca-representar-a-inmigrantes-ecuatorianos-en-eeuu-y-canada-video", date: "2021-01-11",
    summary: {
      es: "Entrevista televisiva de archivo sobre su candidatura y las propuestas dirigidas a la comunidad ecuatoriana en Estados Unidos y Canadá.",
      en: "An archive television interview about his candidacy and proposals for Ecuadorian communities in the United States and Canada.",
    },
    note: { es: "Archivo · Actividad política personal de 2021.", en: "Archive · Personal political activity in 2021." },
  },
  {
    image: {"src": "/images/aeiny/press/manabi-election-2021.webp", "width": 1024, "height": 671},
    id: "manabi-election-2021", kind: "press", publisher: "Revista de Manabí",
    title: "W. Sinche busca ser asambleísta del Ecuador por inmigrantes",
    url: "https://revistademanabi.com/2021/01/09/w-sinche-busca-ser-asambleista-del-ecuador-por-inmigrantes/", date: "2021-01-09",
    summary: {
      es: "Artículo sobre su candidatura que repasa iniciativas culturales y la distribución de alimentos realizada por el equipo y los voluntarios.",
      en: "An article about his candidacy that reviews cultural initiatives and food distribution by the team and volunteers.",
    },
    note: { es: "Archivo · Actividad política personal de 2021.", en: "Archive · Personal political activity in 2021." },
  },
];

export const aboutCoverageCopy = {
  es: {
    eyebrow: "Prensa y comunidad",
    title: "Nuestra labor, contada por otros",
    intro: "Reportajes, entrevistas y documentos que recogen el trabajo de Alianza Ecuatoriana Internacional, el Centro Comunitario Andino y Walther Sinche al servicio de la comunidad.",
    featured: "Reconocimiento comunitario",
    originalSource: "Fuente original",
    documentPreview: "Archivo documental",
    archive: "Explora las publicaciones",
    count: "fuentes externas",
    filters: { all: "Todas", video: "Videos", press: "Prensa", official: "Fuentes oficiales", community: "Comunidad" },
    kinds: { video: "Video", press: "Publicación", official: "Documento oficial", community: "Comunidad" },
    watch: "Ver video", read: "Leer publicación", document: "Consultar documento",
    newTab: "se abre en una pestaña nueva",
    showAll: "Ver todas las publicaciones", showLess: "Mostrar menos",
    showing: "Mostrando", of: "de", results: "publicaciones",
    note: "Los enlaces llevan a las publicaciones originales. Las imágenes de vista previa proceden de las fuentes enlazadas. Las fechas corresponden a la publicación o al año del documento; los materiales de archivo describen el contexto de su época.",
  },
  en: {
    eyebrow: "Press and community",
    title: "Our work, through other voices",
    intro: "Reports, interviews and documents covering the work of Alianza Ecuatoriana Internacional, Centro Comunitario Andino and Walther Sinche in service of the community.",
    featured: "Community recognition",
    originalSource: "Original source",
    documentPreview: "Document archive",
    archive: "Explore the publications",
    count: "external sources",
    filters: { all: "All", video: "Videos", press: "Press", official: "Official sources", community: "Community" },
    kinds: { video: "Video", press: "Publication", official: "Official document", community: "Community" },
    watch: "Watch video", read: "Read publication", document: "View document",
    newTab: "opens in a new tab",
    showAll: "View all publications", showLess: "Show less",
    showing: "Showing", of: "of", results: "publications",
    note: "Links lead to the original publications. Preview images come from the linked sources. Dates refer to publication dates or document years; archive materials describe the context of their time.",
  },
} as const;
