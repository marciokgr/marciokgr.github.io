import { AppContent } from '../types';

export const es: AppContent = {
  skipLink: 'Ir al contenido',
  menu: 'Menú',
  navAria: 'Principal',
  langLabel: 'Idioma',
  nav: {
    about: 'Sobre mí',
    experience: 'Experiencia',
    timeline: 'Timeline',
    articles: 'Artículos',
    contact: 'Contacto',
  },
  hero: {
    ctaExperience: 'Ver experiencia',
    photoAlt: 'Foto de',
  },
  about: {
    title: 'Sobre mí',
    subtitle:
      'Ingeniero de Software con una trayectoria sólida en arquitectura, liderazgo técnico y desarrollo de sistemas críticos.',
  },
  experience: {
    title: 'Experiencia profesional',
    subtitle:
      'Proyectos y roles enfocados en modernización .NET, microservicios y liderazgo técnico.',
    currentBadge: 'Actual',
  },
  timeline: {
    title: 'Timeline de carrera',
    subtitle: 'Una visión cronológica del historial profesional.',
  },
  articles: {
    title: 'Artículos y publicaciones',
    subtitle:
      'Contenidos publicados en Medium sobre .NET, arquitectura y buenas prácticas.',
  },
  contact: {
    title: 'Redes y contacto',
    subtitle: 'Conéctate conmigo a través de los canales abajo.',
  },
  footer: 'Página personal en GitHub Pages.',
  profile: {
    name: 'Márcio Krüger',
    title: 'Ingeniero de Software · Arquitecto de Software · Tech Lead',
    location: 'Blumenau / SC - Brasil',
    photo: 'assets/profile.jpg',
    summary:
      'Profesional con más de 20 años de experiencia en TI y desarrollo de sistemas. Actúo como Ingeniero de Software y Arquitecto, con foco en modernización de aplicaciones .NET, microservicios, alto rendimiento y evolución continua de productos.',
    socials: [
      {
        label: 'Correo',
        url: 'mailto:marcio.kgr@gmail.com',
        detail: 'marcio.kgr@gmail.com',
        icon: 'email',
        external: false,
      },
      {
        label: 'WhatsApp',
        url: 'https://wa.me/5547999230489',
        detail: '+55 47 99923-0489',
        icon: 'whatsapp',
      },
      {
        label: 'GitHub',
        url: 'https://github.com/marciokgr',
        detail: 'github.com/marciokgr',
        icon: 'github',
      },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/marciokgr/',
        detail: 'linkedin.com/in/marciokgr',
        icon: 'linkedin',
      },
      {
        label: 'Medium',
        url: 'https://medium.com/@marcio.kgr',
        detail: 'medium.com/@marcio.kgr',
        icon: 'medium',
      },
    ],
    skillGroups: [
      {
        title: 'Arquitectura',
        items: ['Monolítica', 'Microservicios', 'APIs', 'CI/CD', 'Docker'],
      },
      {
        title: 'Backend',
        items: [
          'C#',
          '.NET Framework',
          '.NET Core',
          '.NET 5–9',
          'VB.NET',
          'PHP',
          'ASP',
        ],
      },
      {
        title: 'Frontend',
        items: [
          'Angular',
          'React',
          'Razor',
          'jQuery',
          'Kendo UI',
          'Bootstrap',
          'JavaScript',
          'HTML5',
        ],
      },
      {
        title: 'Mobile',
        items: ['Flutter (Android / iOS)'],
      },
      {
        title: 'Bases de datos',
        items: [
          'SQL Server',
          'Oracle',
          'MySQL',
          'PostgreSQL',
          'Redis',
          'RavenDB',
        ],
      },
      {
        title: 'Cloud',
        items: ['Microsoft Azure', 'AWS', 'IBM Cloud (SoftLayer)'],
      },
    ],
    experiences: [
      {
        role: 'Arquitecto de software senior',
        company: 'CWI Software',
        period: 'Abr 2026 — actualidad',
        location: 'São Paulo, Brasil · Remoto',
        current: true,
        description:
          'Arquitecto de software en Techfin ERP Finance (SupplierCard), trabajando en mejoras de sistemas legados, pipelines y evolución constante de las aplicaciones y procesos de desarrollo. Principales frentes: modernización de aplicaciones .NET y arquitectura de microservicios con foco en escalabilidad, integración continua y alto rendimiento.',
        technologies: [
          'C#',
          '.NET 8',
          '.NET 10',
          'RabbitMQ',
          'Angular',
          'Sensedia API Platform',
          'Oracle',
          'Azure Pipelines',
          'AWS',
          'Docker',
          'Redis',
          'SNS',
          'SQS',
          'PostgreSQL',
          'MySQL',
        ],
      },
      {
        role: 'Tech lead · Ingeniero de software senior',
        company: 'CWI Software',
        period: 'Nov 2025 — Abr 2026',
        location: 'São Paulo, Brasil · Remoto',
        description:
          'Liderazgo técnico y actuación como ingeniero de software senior, apoyando equipos en el desarrollo de soluciones robustas, con atención a calidad, rendimiento y buenas prácticas en el ecosistema .NET.',
        technologies: ['C#', '.NET', 'Angular', 'RabbitMQ', 'CI/CD'],
      },
      {
        role: 'Ingeniero de software senior',
        company: 'Skopia Digital',
        period: 'Abr 2025 — Nov 2025',
        location: 'São Paulo, Brasil · Remoto',
        description:
          'Actuación como ingeniero de software senior en el desarrollo y evolución de soluciones digitales, con énfasis en calidad de entrega y stack .NET.',
        technologies: ['C#', '.NET', 'APIs'],
      },
      {
        role: 'Tech lead · Ingeniero de software senior',
        company: 'Bancorbrás',
        period: 'Mar 2024 — Abr 2025',
        location: 'Brasília, DF · Remoto',
        description:
          'Tech lead e ingeniero de software senior, impulsando iniciativas técnicas y entregas de software en entorno remoto.',
        technologies: ['C#', '.NET', 'Liderazgo técnico'],
      },
      {
        role: 'Tech Lead | Ingeniería de Sistemas',
        company: 'Cooperativa Central Ailos',
        period: 'Mar 2021 — Mar 2024',
        location: 'Blumenau, SC · Híbrido',
        description:
          'Tech Lead de Ingeniería de Sistemas, liderando iniciativas de arquitectura, evolución de plataformas y alineación técnica entre equipos, con foco en soluciones escalables para el ecosistema cooperativo.',
        technologies: ['C#', '.NET', 'SQL Server', 'Azure', 'Arquitectura'],
      },
      {
        role: 'Ingeniero de software senior',
        company: 'Cervello BPMS | TMS',
        period: 'Set 2019 — Mar 2021',
        location: 'São Paulo, Brasil · Remoto',
        description:
          'Análisis y desarrollo de aplicaciones Web y Desktop con C#, .NET, Razor, Telerik (Kendo UI), WebAPI, HTML5, jQuery, CSS3, Dapper, WCF y SQL Server. Actuación con Azure Pipelines, CI/CD, mejora de usabilidad y rendimiento.',
        technologies: [
          'C#',
          '.NET',
          'Razor',
          'Telerik (Kendo UI)',
          'WebAPI',
          'jQuery',
          'Dapper',
          'WCF',
          'SQL Server',
          'Azure Pipelines',
        ],
      },
      {
        role: 'Tech Lead · Ingeniero de software senior',
        company: 'Ellevo Soluções em TI',
        period: 'Mar 2014 — Set 2019',
        location: 'Blumenau, SC · Híbrido',
        description:
          'Responsable de las demandas del Sistema Ellevo, mejoras y nuevas demandas, con liderazgo y motivación del equipo y resolución de conflictos. Responsable de Ellevo Cloud (IBM Cloud y Azure), optimización de costos FinOps y mejoras de rendimiento. También actuó como Product Owner en el proyecto Ellevo Next 8 (Cloud First) y como Tech Lead en el legado en .NET, C#, VB6 y SQL Server.',
        technologies: [
          'C#',
          '.NET',
          'VB6',
          'SQL Server',
          'IBM Cloud',
          'Azure',
          'FinOps',
          'Product Owner',
        ],
      },
      {
        role: 'Analista de sistemas senior',
        company: 'Ellevo Soluções em TI',
        period: 'Nov 2006 — Mar 2014',
        location: 'Blumenau, SC · Presencial',
        description:
          'Análisis y levantamiento de necesidades, creación y actualización de especificaciones de sistema, creación y seguimiento de cronograma, desarrollo y mantenimiento de aplicaciones en C#, VB6, ASP y SQL Server.',
        technologies: ['C#', 'VB6', 'ASP', 'SQL Server', 'ANS'],
      },
      {
        role: 'Desarrollador de software',
        company: 'Ambev Tech',
        period: 'Mar 2005 — Oct 2006',
        location: 'Blumenau, SC · Presencial',
        description:
          'Desarrollo y mantenimiento de aplicación Web con ASP, AJAX, VBScript, JavaScript, VB6, C#, .NET y SQL Server (triggers, stored procedures y functions). Instalación y mantenimiento de la aplicación en plataforma Windows.',
        technologies: [
          'ASP',
          'AJAX',
          'VBScript',
          'JavaScript',
          'VB6',
          'C#',
          '.NET',
          'SQL Server',
        ],
      },
    ],
    articles: [
      {
        title: '.NET 9 consume menos memoria que Rust',
        url: 'https://medium.com/@marcio.kgr/net-9-tem-menor-consumo-de-mem%C3%B3ria-que-rust-7f10d46c257d',
      },
      {
        title: 'Optimizaciones en LINQ .NET 9',
        url: 'https://medium.com/@marcio.kgr/otimiza%C3%A7%C3%B5es-no-linq-net-9-af00482c7f5f',
      },
      {
        title: '¿Qué debería saber todo desarrollador .NET?',
        url: 'https://medium.com/@marcio.kgr/o-que-todo-dev-net-deveria-saber-8e3f344b7206',
      },
      {
        title: 'RabbitMQ vs Kafka',
        url: 'https://medium.com/@marcio.kgr/rabbitmq-vs-kafka-c265456c97da',
      },
      {
        title: '¡Endpoint y API no son lo mismo!',
        url: 'https://medium.com/@marcio.kgr/endpoint-e-api-n%C3%A3o-%C3%A9-a-mesma-coisa-d4d25cbf5ef0',
      },
      {
        title: 'Arquitectura de Microservicios vs Arquitectura Monolítica',
        url: 'https://medium.com/@marcio.kgr/arquitetura-de-microservi%C3%A7os-x-arquitetura-monol%C3%ADtica-6ac1008cba0f',
      },
    ],
  },
};
