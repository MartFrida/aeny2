import { contactInfo } from './contact'

export type CourseCategory = 'safety' | 'scaffold' | 'trades' | 'construction'
export type CourseFormat = 'online' | 'in-person' | 'hybrid'

export type Course = {
  id: string
  slug: string
  category: CourseCategory
  titleEs: string
  titleEn: string
  summaryEs: string
  summaryEn: string
  descriptionEs: string
  descriptionEn: string
  topicsEs: string[]
  topicsEn: string[]
  duration: number | null
  formats: CourseFormat[]
  availability: 'contact'
  scheduleEs: string
  scheduleEn: string
  image?: string
  sourceUrl: string
}

export const courseInformationUrl = `${contactInfo.facebook}/`
const currentInfoUrl = courseInformationUrl
const currentScheduleEs =
  'Las fechas y horarios varían. Contacta con AEINY para conocer la próxima clase.'
const currentScheduleEn =
  'Dates and schedules vary. Contact AEINY for the next available class.'
const classroomImage = '/images/aeiny/workforce-classroom.webp'
const safetyImage = '/images/aeiny/safety-graduates.webp'
const banderaImage = '/images/clacess/bandera.webp'
const electricalImage = '/images/clacess/electricidad.webp'
const lecturaImage = '/images/clacess/lectura-de-planos.webp'
const plomeriaImage = '/images/clacess/plomeria.webp'
const scaffold8Image = '/images/clacess/scaffold-8-16-suspendido.webp'
const scaffold16Image = '/images/clacess/scaffold-16.webp'
const scaffold32Image = '/images/clacess/scaffold-32horas-rigging.webp'
const silicaImage = '/images/clacess/silica-2horas.webp'
const osha30Image = '/images/clacess/osha-30horas.webp'
const osha10Image = '/images/clacess/osha-10horas.webp'


export const courses: Course[] = [
  {
    id: 'osha-10-hours',
    slug: 'osha-10-hours',
    category: 'safety',
    titleEs: 'OSHA 10 Horas',
    titleEn: 'OSHA 10 Hours',
    summaryEs:
      'Formación introductoria en seguridad para trabajadores de la construcción, enfocada en reconocer riesgos frecuentes y trabajar de forma más segura.',
    summaryEn:
      'Introductory construction safety training focused on recognizing common jobsite hazards and developing safer work practices.',
    descriptionEs:
      'El curso OSHA 10 Horas ofrece una introducción práctica a los principales riesgos de seguridad presentes en la industria de la construcción. La formación ayuda a los participantes a reconocer peligros, comprender medidas básicas de prevención y fortalecer una cultura de trabajo seguro. AEINY ofrece capacitación en español para apoyar a trabajadores que desean mejorar su preparación para el sector de la construcción en Nueva York.',
    descriptionEn:
      "The OSHA 10-Hour course provides a practical introduction to common safety hazards in the construction industry. Participants learn how to recognize risks, understand basic preventive measures and strengthen safe work practices. AEINY provides Spanish-language training to support workers preparing for opportunities in New York's construction sector.",
    topicsEs: [
      'Identificación de riesgos en el lugar de trabajo',
      'Protección contra caídas',
      'Equipos de protección personal',
      'Prevención de accidentes',
      'Responsabilidades básicas de seguridad',
    ],
    topicsEn: [
      'Jobsite hazard recognition',
      'Fall protection',
      'Personal protective equipment',
      'Accident prevention',
      'Basic safety responsibilities',
    ],
    duration: 10,
    formats: [],
    availability: 'contact',
    scheduleEs: currentScheduleEs,
    scheduleEn: currentScheduleEn,
    image: osha10Image,
    sourceUrl: currentInfoUrl,
  },
  {
    id: 'osha-30-hours',
    slug: 'osha-30-hours',
    category: 'safety',
    titleEs: 'OSHA 30 Horas',
    titleEn: 'OSHA 30 Hours',
    summaryEs:
      'Capacitación amplia en seguridad y salud ocupacional dirigida a trabajadores de la industria de la construcción.',
    summaryEn:
      'Comprehensive occupational safety and health training for construction workers.',
    descriptionEs:
      'OSHA 30 Horas desarrolla una visión más amplia de la seguridad en obra y de los riesgos que pueden aparecer durante distintas actividades de construcción. El programa está pensado para trabajadores que desean ampliar sus conocimientos de prevención, protección y buenas prácticas de seguridad.',
    descriptionEn:
      'OSHA 30 Hours provides a broader understanding of construction-site safety and the risks workers may encounter during different construction activities. The program is designed for people who want to deepen their knowledge of prevention, protection and safe work practices.',
    topicsEs: [
      'Riesgos frecuentes de construcción',
      'Protección contra caídas',
      'Seguridad con herramientas y equipos',
      'Prevención y control de riesgos',
      'Derechos y responsabilidades de seguridad',
    ],
    topicsEn: [
      'Common construction hazards',
      'Fall protection',
      'Tool and equipment safety',
      'Hazard prevention and control',
      'Safety rights and responsibilities',
    ],
    duration: 30,
    formats: [],
    availability: 'contact',
    scheduleEs: currentScheduleEs,
    scheduleEn: currentScheduleEn,
    image: osha30Image,
    sourceUrl: currentInfoUrl,
  },
  {
    id: 'osha-40-hours',
    slug: 'osha-40-hours',
    category: 'safety',
    titleEs: 'OSHA 40 Horas',
    titleEn: 'OSHA 40 Hours',
    summaryEs:
      'Programa combinado de formación en seguridad promovido por AEINY para trabajadores que necesitan una preparación más completa para la construcción.',
    summaryEn:
      'A combined safety-training program promoted by AEINY for workers seeking more comprehensive preparation for construction work.',
    descriptionEs:
      'AEINY ofrece OSHA 40 Horas como una opción intensiva de capacitación para trabajadores de la construcción. El programa reúne formación de seguridad orientada a fortalecer la preparación del participante y facilitar el cumplimiento de los requisitos aplicables a su trabajo. Los módulos exactos, modalidad y requisitos de tarjeta deben confirmarse con AEINY antes de la inscripción.',
    descriptionEn:
      "AEINY offers OSHA 40 Hours as an intensive training option for construction workers. The program combines safety instruction designed to strengthen participants' preparation and help them meet requirements applicable to their work. Exact modules, delivery format and card requirements should be confirmed with AEINY before enrollment.",
    topicsEs: [
      'Formación en seguridad para la construcción',
      'Prevención de riesgos',
      'Módulos y requisitos por confirmar con AEINY',
    ],
    topicsEn: [
      'Construction safety training',
      'Hazard prevention',
      'Modules and requirements to confirm with AEINY',
    ],
    duration: 40,
    formats: [],
    availability: 'contact',
    scheduleEs: currentScheduleEs,
    scheduleEn: currentScheduleEn,
    image: osha30Image,
    sourceUrl: currentInfoUrl,
  },
  {
    id: 'sst-10-hours',
    slug: 'sst-10-hours',
    category: 'safety',
    titleEs: 'SST 10 Horas',
    titleEn: 'SST 10 Hours',
    summaryEs:
      'Formación Site Safety Training para trabajadores que necesitan completar horas adicionales de capacitación en seguridad.',
    summaryEn:
      'Site Safety Training for workers who need additional construction safety training hours.',
    descriptionEs:
      'El curso SST 10 Horas forma parte de la oferta de capacitación en seguridad de AEINY. Está dirigido a trabajadores que necesitan ampliar su formación para desempeñarse de manera segura en obras de construcción de Nueva York. La disponibilidad y los requisitos específicos deben confirmarse antes de inscribirse.',
    descriptionEn:
      "The SST 10-Hour course is part of AEINY's construction safety training program. It is intended for workers who need additional training to work safely on New York construction sites. Current availability and specific requirements should be confirmed before enrolling.",
    topicsEs: [
      'Formación de seguridad para construcción',
      'Prevención de riesgos en obra',
      'Requisitos específicos por confirmar con AEINY',
    ],
    topicsEn: [
      'Construction safety training',
      'Jobsite hazard prevention',
      'Specific requirements to confirm with AEINY',
    ],
    duration: 10,
    formats: [],
    availability: 'contact',
    scheduleEs: currentScheduleEs,
    scheduleEn: currentScheduleEn,
    image: safetyImage,
    sourceUrl: currentInfoUrl,
  },
  {
    id: 'sst-22-hours',
    slug: 'sst-22-hours',
    category: 'safety',
    titleEs: 'SST 22 Horas',
    titleEn: 'SST 22 Hours',
    summaryEs:
      'Programa ampliado de Site Safety Training enfocado en seguridad para trabajadores de la construcción.',
    summaryEn: 'Extended Site Safety Training focused on construction worker safety.',
    descriptionEs:
      'SST 22 Horas ofrece formación adicional en prevención y seguridad para personas que trabajan en construcción. AEINY promociona esta modalidad como parte de sus opciones para trabajadores que necesitan completar capacitación adicional. Confirma con el centro qué combinación de cursos corresponde a cada participante.',
    descriptionEn:
      'SST 22 Hours provides additional prevention and safety training for construction workers. AEINY promotes this option for workers who need to complete additional training. Participants should confirm with the center which course combination applies to their specific situation.',
    topicsEs: [
      'Prevención y seguridad en construcción',
      'Capacitación adicional para trabajadores',
      'Combinación de cursos por confirmar con AEINY',
    ],
    topicsEn: [
      'Construction safety and prevention',
      'Additional worker training',
      'Course combination to confirm with AEINY',
    ],
    duration: 22,
    formats: [],
    availability: 'contact',
    scheduleEs: currentScheduleEs,
    scheduleEn: currentScheduleEn,
    image: classroomImage,
    sourceUrl: currentInfoUrl,
  },
  {
    id: 'scaffold-4-hours',
    slug: 'scaffold-4-hours',
    category: 'scaffold',
    titleEs: 'Scaffold 4 Horas',
    titleEn: '4-Hour Scaffold Training',
    summaryEs:
      'Capacitación básica para trabajar de forma segura alrededor de andamios y reconocer sus principales riesgos.',
    summaryEn:
      'Basic training for working safely around scaffolds and recognizing common scaffold hazards.',
    descriptionEs:
      'Curso introductorio sobre seguridad en andamios dirigido a trabajadores de la construcción. La capacitación aborda prácticas básicas de prevención y riesgos asociados al uso de scaffolds. AEINY promociona actualmente esta formación dentro de su programa de seguridad.',
    descriptionEn:
      'An introductory scaffold safety course for construction workers. Training covers basic prevention practices and risks associated with working around scaffolds. AEINY currently promotes this program as part of its safety training offering.',
    topicsEs: [
      'Terminología y riesgos de andamios',
      'Prácticas básicas de prevención',
      'Trabajo seguro alrededor de scaffolds',
    ],
    topicsEn: [
      'Scaffold terminology and hazards',
      'Basic prevention practices',
      'Working safely around scaffolds',
    ],
    duration: 4,
    formats: [],
    availability: 'contact',
    scheduleEs: currentScheduleEs,
    scheduleEn: currentScheduleEn,
    image: scaffold8Image,
    sourceUrl: currentInfoUrl,
  },
  {
    id: 'suspended-scaffold-16-hours',
    slug: 'suspended-scaffold-16-hours',
    category: 'scaffold',
    titleEs: 'Scaffold Suspendido — 16 Horas',
    titleEn: '16-Hour Suspended Scaffold',
    summaryEs:
      'Formación especializada en seguridad para trabajos relacionados con andamios suspendidos.',
    summaryEn: 'Specialized safety training for work involving suspended scaffolds.',
    descriptionEs:
      'Programa dirigido a trabajadores que realizan o desean realizar actividades relacionadas con andamios suspendidos. La formación se centra en el uso seguro, identificación de riesgos y prácticas preventivas vinculadas al trabajo en altura.',
    descriptionEn:
      'A program for workers involved in or preparing for work with suspended scaffolds. Training focuses on safe use, hazard recognition and preventive practices associated with working at height.',
    topicsEs: [
      'Uso seguro de andamios suspendidos',
      'Identificación de riesgos',
      'Prácticas preventivas para trabajos en altura',
    ],
    topicsEn: [
      'Safe use of suspended scaffolds',
      'Hazard recognition',
      'Preventive practices for work at height',
    ],
    duration: 16,
    formats: [],
    availability: 'contact',
    scheduleEs: currentScheduleEs,
    scheduleEn: currentScheduleEn,
    image: scaffold16Image,
    sourceUrl: currentInfoUrl,
  },
  {
    id: 'scaffold-32-hours',
    slug: 'scaffold-32-hours',
    category: 'scaffold',
    titleEs: 'Scaffold 32 Horas — Supervisor',
    titleEn: '32-Hour Scaffold Supervisor',
    summaryEs:
      'Capacitación avanzada para personas con mayores responsabilidades en trabajos con andamios.',
    summaryEn:
      'Advanced scaffold training for workers with greater responsibility for scaffold operations.',
    descriptionEs:
      'Curso avanzado dentro de la formación de scaffolding de AEINY, orientado a participantes que necesitan una preparación más extensa para supervisar o trabajar con sistemas de andamios. Los requisitos específicos de cada puesto y credencial deben verificarse directamente con el centro.',
    descriptionEn:
      'An advanced course within AEINY’s scaffold training program, intended for participants who need more extensive preparation for supervising or working with scaffold systems. Specific job and credential requirements should be verified directly with the center.',
    topicsEs: [
      'Preparación avanzada en sistemas de andamios',
      'Responsabilidades de supervisión',
      'Requisitos de puesto y credenciales por confirmar',
    ],
    topicsEn: [
      'Advanced preparation in scaffold systems',
      'Supervisory responsibilities',
      'Job and credential requirements to confirm',
    ],
    duration: 32,
    formats: [],
    availability: 'contact',
    scheduleEs: currentScheduleEs,
    scheduleEn: currentScheduleEn,
    image: scaffold32Image,
    sourceUrl: currentInfoUrl,
  },
  {
    id: 'silica-2-hours',
    slug: 'silica-2-hours',
    category: 'safety',
    titleEs: 'Sílica — 2 Horas',
    titleEn: '2-Hour Silica Training',
    summaryEs:
      'Capacitación enfocada en los riesgos de exposición al polvo de sílica durante trabajos de construcción.',
    summaryEn: 'Training focused on silica-dust exposure hazards in construction work.',
    descriptionEs:
      'El curso de Sílica 2 Horas introduce a los participantes en los riesgos asociados a la exposición al polvo de sílica y en prácticas destinadas a reducir la exposición durante tareas de construcción. Está dirigido a trabajadores que buscan fortalecer su preparación preventiva en obra.',
    descriptionEn:
      'The 2-Hour Silica course introduces participants to hazards associated with silica-dust exposure and practices designed to reduce exposure during construction activities. It supports workers seeking stronger jobsite prevention skills.',
    topicsEs: [
      'Riesgos asociados al polvo de sílica',
      'Situaciones comunes de exposición',
      'Medidas de prevención',
      'Protección personal',
      'Buenas prácticas de trabajo',
    ],
    topicsEn: [
      'Silica-dust hazards',
      'Common exposure situations',
      'Prevention measures',
      'Personal protection',
      'Safe work practices',
    ],
    duration: 2,
    formats: [],
    availability: 'contact',
    scheduleEs: currentScheduleEs,
    scheduleEn: currentScheduleEn,
    image: silicaImage,
    sourceUrl: currentInfoUrl,
  },
  {
    id: 'flagger-bandera',
    slug: 'flagger-bandera',
    category: 'safety',
    titleEs: 'Bandera / Flagger',
    titleEn: 'Flagger Training',
    summaryEs:
      'Formación para trabajadores responsables de controlar y señalizar el movimiento alrededor de zonas de construcción.',
    summaryEn:
      'Training for workers responsible for directing and signaling movement around construction work zones.',
    descriptionEs:
      'El curso de Bandera o Flagger prepara a los participantes para comprender la importancia de la señalización, la comunicación visual y el control seguro del movimiento de personas y vehículos alrededor de áreas de trabajo.',
    descriptionEn:
      'Flagger training helps participants understand signaling, visual communication and the safe control of people and vehicle movement around construction work areas.',
    topicsEs: [
      'Señales y comunicación',
      'Posicionamiento seguro',
      'Control del tránsito alrededor de la obra',
      'Identificación de riesgos',
      'Coordinación con el equipo de trabajo',
    ],
    topicsEn: [
      'Signals and communication',
      'Safe positioning',
      'Traffic control around work zones',
      'Hazard recognition',
      'Coordination with the work crew',
    ],
    duration: null,
    formats: [],
    availability: 'contact',
    scheduleEs: currentScheduleEs,
    scheduleEn: currentScheduleEn,
    image: banderaImage,
    sourceUrl: currentInfoUrl,
  },
  {
    id: 'electricidad',
    slug: 'electricidad',
    category: 'trades',
    titleEs: 'Electricidad',
    titleEn: 'Electrical Training',
    summaryEs:
      'Formación práctica orientada a desarrollar conocimientos fundamentales para trabajos eléctricos en construcción.',
    summaryEn:
      'Practical training designed to develop fundamental knowledge for electrical work in construction.',
    descriptionEs:
      'El programa de Electricidad forma parte de la capacitación laboral ofrecida por el Centro Comunitario Andino. Está orientado a personas que desean desarrollar o fortalecer conocimientos relacionados con instalaciones, herramientas, componentes eléctricos y prácticas de trabajo seguro.',
    descriptionEn:
      'Electrical Training is part of the workforce-development programs offered through Centro Comunitario Andino. It is intended for people who want to develop or strengthen knowledge related to electrical installations, tools, components and safe work practices.',
    topicsEs: [
      'Fundamentos de electricidad',
      'Herramientas y materiales',
      'Instalaciones básicas',
      'Identificación de componentes',
      'Seguridad en el trabajo eléctrico',
    ],
    topicsEn: [
      'Electrical fundamentals',
      'Tools and materials',
      'Basic installations',
      'Component identification',
      'Electrical work safety',
    ],
    duration: null,
    formats: [],
    availability: 'contact',
    scheduleEs: currentScheduleEs,
    scheduleEn: currentScheduleEn,
    image: electricalImage,
    sourceUrl: currentInfoUrl,
  },
  {
    id: 'plomeria',
    slug: 'plomeria',
    category: 'trades',
    titleEs: 'Plomería',
    titleEn: 'Plumbing Training',
    summaryEs:
      'Capacitación práctica en fundamentos de plomería aplicada a trabajos de construcción y mantenimiento.',
    summaryEn:
      'Practical training in plumbing fundamentals for construction and maintenance work.',
    descriptionEs:
      'El curso introduce conocimientos esenciales de plomería para personas que desean desarrollar habilidades útiles en construcción y mantenimiento. La formación se enfoca en conceptos, herramientas, materiales y prácticas de trabajo que forman parte de esta especialidad.',
    descriptionEn:
      'This course introduces essential plumbing knowledge for people seeking useful construction and maintenance skills. Training focuses on concepts, tools, materials and work practices associated with the trade.',
    topicsEs: [
      'Herramientas de plomería',
      'Materiales y conexiones',
      'Sistemas básicos',
      'Lectura y comprensión del trabajo',
      'Prácticas seguras',
    ],
    topicsEn: [
      'Plumbing tools',
      'Materials and connections',
      'Basic systems',
      'Understanding plumbing work',
      'Safe work practices',
    ],
    duration: null,
    formats: [],
    availability: 'contact',
    scheduleEs: currentScheduleEs,
    scheduleEn: currentScheduleEn,
    image: plomeriaImage,
    sourceUrl: currentInfoUrl,
  },
  {
    id: 'lectura-de-planos',
    slug: 'lectura-de-planos',
    category: 'construction',
    titleEs: 'Lectura de Planos',
    titleEn: 'Blueprint Reading',
    summaryEs:
      'Formación para comprender planos, símbolos, medidas y documentación utilizada en proyectos de construcción.',
    summaryEn:
      'Training in understanding construction drawings, symbols, measurements and project documentation.',
    descriptionEs:
      'Lectura de Planos ayuda a trabajadores y futuros profesionales de la construcción a interpretar información gráfica utilizada en una obra. El objetivo es desarrollar mayor autonomía para comprender dimensiones, símbolos, detalles y relaciones entre distintas partes de un proyecto.',
    descriptionEn:
      'Blueprint Reading helps construction workers and aspiring professionals interpret the graphic information used on a jobsite. The goal is to build confidence in understanding dimensions, symbols, details and relationships between different parts of a project.',
    topicsEs: [
      'Símbolos y convenciones',
      'Escalas y medidas',
      'Plantas y detalles',
      'Identificación de elementos',
      'Interpretación de información técnica',
    ],
    topicsEn: [
      'Symbols and conventions',
      'Scales and measurements',
      'Plans and details',
      'Element identification',
      'Technical information interpretation',
    ],
    duration: null,
    formats: [],
    availability: 'contact',
    scheduleEs: currentScheduleEs,
    scheduleEn: currentScheduleEn,
    image: lecturaImage,
    sourceUrl: currentInfoUrl,
  },
  {
    id: 'estimados-de-construccion',
    slug: 'estimados-de-construccion',
    category: 'construction',
    titleEs: 'Estimados de Construcción',
    titleEn: 'Construction Estimating',
    summaryEs:
      'Introducción a la preparación y comprensión de estimados para proyectos de construcción.',
    summaryEn:
      'Introduction to preparing and understanding estimates for construction projects.',
    descriptionEs:
      'Este curso está orientado a personas que desean comprender mejor cómo se organiza un estimado de construcción. La capacitación introduce conceptos relacionados con cantidades, materiales, mano de obra y organización básica de costos para apoyar una planificación más clara de los trabajos.',
    descriptionEn:
      'This course is designed for people who want to better understand how a construction estimate is organized. Training introduces concepts related to quantities, materials, labor and basic cost organization to support clearer project planning.',
    topicsEs: [
      'Cantidades y mediciones',
      'Materiales',
      'Mano de obra',
      'Organización básica de costos',
      'Preparación de estimados',
    ],
    topicsEn: [
      'Quantities and measurements',
      'Materials',
      'Labor',
      'Basic cost organization',
      'Estimate preparation',
    ],
    duration: null,
    formats: [],
    availability: 'contact',
    scheduleEs: currentScheduleEs,
    scheduleEn: currentScheduleEn,
    image: classroomImage,
    sourceUrl: currentInfoUrl,
  },
]

export function getCourseBySlug(slug: string) {
  return courses.find((course) => course.slug === slug)
}
