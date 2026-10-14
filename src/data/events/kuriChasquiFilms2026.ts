export type KuriChasquiFilm = {
  slug: string
  title: string
  typeKey?: string
  descriptionKey?: string
  image?: string
  details?: {
    fullTitle?: string
    year?: string
    duration?: string
    language?: string
    director?: string
    screenplay?: string
    producer?: string
    generalProducer?: string
    production?: string
    filmed?: string
    completed?: string
    cast?: string[]
    format?: string
    cinematography?: string
    audience?: string
    genre?: string
    themes?: string
    synopsisKey?: string
  }
}

export const kuriChasqui2026Founders = [
  {
    name: 'Walther Sinche',
    roleKey: 'festival2026.founders.waltherRole',
    bioKey: 'festival2026.founders.waltherBio',
  },
  {
    name: 'Amaruk Kayshapanta',
    roleKey: 'festival2026.founders.amarukRole',
    bioKey: 'festival2026.founders.amarukBio',
  },
]

export const kuriChasqui2026Films: KuriChasquiFilm[] = [
  {
    slug: 'cueva-de-los-tayos',
    title: 'Cueva de los Tayos',
    typeKey: 'festival2026.filmTypes.shortDocumentary',
    descriptionKey: 'festival2026.filmDescriptions.cueva',
    details: {
      fullTitle: 'EXPEDICION CUEVA DE LOS TAYOS MMXVI',
      year: '2017',
      duration: '44:58',
      director: 'Raúl Cabrera',
      screenplay: 'Raúl Cabrera',
      production: 'Nómada Media House / Ministerio de Turismo Ecuador',
      cinematography: 'Oswaldo Díaz',
      format: 'HD 2K',
      synopsisKey: 'festival2026.filmDescriptions.cuevaSynopsis',
    },
  },
  {
    slug: 'yo-vivo-libre-de-violencia',
    title: 'Yo Vivo Libre de Violencia',
    typeKey: 'festival2026.filmTypes.ecuadorProduction',
    descriptionKey: 'festival2026.filmDescriptions.yoVivo',
    details: {
      director: 'Amaruk Kayshapanta',
      screenplay: 'Amaruk Kayshapanta',
      producer: 'Pachamama Producciones',
      cast: ['David Andrade', 'Elvis Estrella', 'Marco Molina', 'Amaruk Kayshapanta'],
      duration: '8 min',
      language: 'Spanish',
      genre: 'Author cinema / documentary',
      audience: 'Suitable for general audiences',
      themes: 'Violence and abuse awareness',
      synopsisKey: 'festival2026.filmDescriptions.yoVivoSynopsis',
    },
  },
  {
    slug: 'extranos-seres',
    title: 'Extraños Seres',
    descriptionKey: 'festival2026.filmDescriptions.extranos',
    details: {
      director: 'Thomas Pfanne',
      screenplay: 'Thomas Pfanne',
      producer: 'Pachamama Producciones',
      generalProducer: 'Amaruk Kayshapanta',
      duration: '54 minutes',
      filmed: '1990',
      completed: '2009',
      language: 'German / Spanish translation',
      genre: 'Author cinema / educational cinema',
      format: 'Digital',
      synopsisKey: 'festival2026.filmDescriptions.extranosSynopsis',
    },
  },
  {
    slug: 'dusshishik',
    title: 'Dusshishik',
    typeKey: 'festival2026.filmTypes.shortFiction',
    descriptionKey: 'festival2026.filmDescriptions.dusshishik',
    details: {
      director: 'Diego Llano',
      production: 'Independent',
      duration: '15 min',
      language: 'English / Apsaalooke',
      genre: 'Fiction',
      themes: 'Identity, migration and Indigenous rights',
      synopsisKey: 'festival2026.filmDescriptions.dusshishikSynopsis',
    },
  },
  { slug: 'illana', title: 'Illana', descriptionKey: 'festival2026.filmDescriptions.illana' },
  {
    slug: 'identidades-culturales-migrantes',
    title: 'Identidades Culturales Migrantes',
    typeKey: 'festival2026.filmTypes.shortFiction',
  },
  { slug: 'canta-sing', title: 'Canta (Sing)', typeKey: 'festival2026.filmTypes.shortFiction' },
  { slug: 'tratar', title: 'Tratar', typeKey: 'festival2026.filmTypes.documentaryShort' },
  { slug: 'abuelo-montana', title: 'Abuelo Montaña', typeKey: 'festival2026.filmTypes.peruvianShort' },
  {
    slug: 'morenada',
    title: 'Morenada',
    typeKey: 'festival2026.filmTypes.documentaryGeneral',
  },
  { slug: 'pachakuti-2012', title: 'Pachakuti 2012', typeKey: 'festival2026.filmTypes.argentineShort' },
  {
    slug: 'en-alas-del-intento',
    title: 'En Alas del Intento',
    typeKey: 'festival2026.filmTypes.documentaryGeneral',
  },
  {
    slug: 'yachana-wasi-rurakkuna',
    title: 'Yachana Wasi Rurakkuna',
    typeKey: 'festival2026.filmTypes.documentaryGeneral',
  },
  {
    slug: 'cantuna-la-pelicula',
    title: 'Cantuña La Película',
    typeKey: 'festival2026.filmTypes.basedOnRealEvents',
  },
  {
    slug: 'mariposas-de-sangre',
    title: 'Mariposas de Sangre',
    descriptionKey: 'festival2026.filmDescriptions.mariposas',
  },
  {
    slug: 'the-last-trip',
    title: 'The Last Trip',
    descriptionKey: 'festival2026.filmDescriptions.lastTrip',
  },
  {
    slug: 'the-history-amazonas',
    title: 'The History Amazonas',
    descriptionKey: 'festival2026.filmDescriptions.historyAmazonas',
  },
  {
    slug: 'amawtas-en-cataluna',
    title: 'Amawtas en Cataluña',
    descriptionKey: 'festival2026.filmDescriptions.amawtas',
  },
  {
    slug: 'el-oportuno-hacer',
    title: 'El Oportuno Hacer',
    typeKey: 'festival2026.filmTypes.documentaryGeneral',
  },
  {
    slug: 'conocer-el-mar',
    title: 'Conocer el Mar',
    descriptionKey: 'festival2026.filmDescriptions.conocerMar',
  },
  {
    slug: 'diaspora-del-arte',
    title: 'Diáspora del Arte',
    typeKey: 'festival2026.filmTypes.documentaryGeneral',
  },
  { slug: 'muertepungo', title: 'Muertepungo', typeKey: 'festival2026.filmTypes.chileanProduction' },
  {
    slug: 'voz-migrante',
    title: 'Voz Migrante',
    typeKey: 'festival2026.filmTypes.documentaryGeneral',
  },
  { slug: 'allpamanda', title: 'Allpamanda', typeKey: 'festival2026.filmTypes.ecuadorianProduction' },
  { slug: 'alfaro-la-pelicula', title: 'Alfaro La Película', typeKey: 'festival2026.filmTypes.miniDocumentary' },
  {
    slug: 'karanakuy',
    title: 'Karanakuy',
    typeKey: 'festival2026.filmTypes.generalAudiences',
  },
  {
    slug: 'angelica',
    title: 'Angelica',
    descriptionKey: 'festival2026.filmDescriptions.angelica',
  },
  { slug: 'la-churona', title: 'La Churona', typeKey: 'festival2026.filmTypes.spainEcuadorShort' },
  { slug: 'las-munecas-rusas', title: 'Las Muñecas Rusas', typeKey: 'festival2026.filmTypes.shortFilm' },
  { slug: 'pincho', title: 'Pincho', typeKey: 'festival2026.filmTypes.shortFilm' },
  { slug: 'patrones-de-conducta', title: 'Patrones de Conducta', typeKey: 'festival2026.filmTypes.amazonianDocumentary' },
  { slug: 'los-yachaks', title: 'Los Yachaks' },
]
