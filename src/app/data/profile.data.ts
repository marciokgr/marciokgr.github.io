export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'medium';
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
  current?: boolean;
}

export interface Article {
  title: string;
  url: string;
}

export const profile = {
  name: 'Márcio Krüger',
  title: 'Engenheiro de Software · Arquiteto · Tech Lead',
  location: 'Blumenau / SC',
  photo: 'assets/profile.jpg',
  summary:
    'Profissional com mais de 20 anos de experiência em TI e desenvolvimento de sistemas. Atuo como Engenheiro de Software e Arquiteto, com foco em modernização de aplicações .NET, microsserviços, alta performance e evolução contínua de produtos.',
  socials: [
    {
      label: 'GitHub',
      url: 'https://github.com/marciokgr',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/marciokgr/',
      icon: 'linkedin',
    },
    {
      label: 'Medium',
      url: 'https://medium.com/@marcio.kgr',
      icon: 'medium',
    },
  ] as SocialLink[],
  skillGroups: [
    {
      title: 'Arquitetura',
      items: ['Monolítica', 'Microsserviços', 'APIs', 'CI/CD', 'Docker'],
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
      title: 'Bancos de dados',
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
  ] as SkillGroup[],
  experiences: [
    {
      role: 'Arquiteto de Softwares Sênior',
      company: 'CWI Software',
      period: 'Atual',
      location: 'Blumenau, SC',
      current: true,
      description:
        'Arquiteto de software na Techfin ERP Finance (SupplierCard), atuando em melhorias de sistemas legados, pipelines e evolução constante das aplicações e processos de desenvolvimento. Principais frentes: modernização de aplicações .NET e arquitetura de microsserviços com foco em escalabilidade, integração contínua e alta performance.',
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
      role: 'Tech Lead · Engenheiro de Software Sênior',
      company: 'CWI Software',
      period: 'Anterior',
      location: 'Blumenau, SC',
      description:
        'Liderança técnica em iniciativas de engenharia, apoiando times no desenvolvimento de soluções robustas, com atenção a qualidade, performance e boas práticas no ecossistema .NET e front-end Angular.',
      technologies: ['C#', '.NET', 'Angular', 'RabbitMQ', 'CI/CD'],
    },
    {
      role: 'Tech Lead · Engenharia de Sistemas',
      company: 'Cooperativa Central Ailos',
      period: 'Mar 2021 — Mar 2024',
      location: 'Blumenau, SC',
      description:
        'Tech Lead de Engenharia de Sistemas, conduzindo iniciativas de arquitetura, evolução de plataformas e alinhamento técnico entre times, com foco em soluções escaláveis para o ecossistema cooperativo.',
      technologies: ['C#', '.NET', 'SQL Server', 'Azure', 'Arquitetura'],
    },
    {
      role: 'Engenheiro de Software Sênior',
      company: 'Skopia Digital',
      period: 'Anterior',
      location: 'Brasil',
      description:
        'Atuação como engenheiro de software sênior no desenvolvimento e evolução de soluções digitais, com ênfase em qualidade de entrega e stack .NET.',
      technologies: ['C#', '.NET', 'APIs'],
    },
    {
      role: 'Engenheiro de Software Sênior',
      company: 'Cervello BPMS | TMS',
      period: 'Anterior',
      location: 'Brasil',
      description:
        'Análise e desenvolvimento de aplicações Web e Desktop com foco em usabilidade e performance. Atuação com pipelines Azure, CI/CD e stack Microsoft completa.',
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
      role: 'Tech Lead · Engenheiro de Software Sênior',
      company: 'Ellevo Soluções em TI',
      period: 'Anterior',
      location: 'Brasil',
      description:
        'Responsável pelas demandas do Sistema Ellevo: melhorias, novas funcionalidades, liderança e motivação da equipe, além de resolução de conflitos e acompanhamento das entregas do produto.',
      technologies: ['C#', '.NET', 'SQL Server', 'Liderança técnica'],
    },
  ] as Experience[],
  articles: [
    {
      title: '.NET 9, tem menor consumo de memória que Rust',
      url: 'https://medium.com/@marcio.kgr/net-9-tem-menor-consumo-de-mem%C3%B3ria-que-rust-7f10d46c257d',
    },
    {
      title: 'Otimizações no LINQ .NET 9',
      url: 'https://medium.com/@marcio.kgr/otimiza%C3%A7%C3%B5es-no-linq-net-9-af00482c7f5f',
    },
    {
      title: 'O que todo dev .Net deveria saber?',
      url: 'https://medium.com/@marcio.kgr/o-que-todo-dev-net-deveria-saber-8e3f344b7206',
    },
    {
      title: 'RabbitMQ vs Kafka',
      url: 'https://medium.com/@marcio.kgr/rabbitmq-vs-kafka-c265456c97da',
    },
    {
      title: 'Endpoint e API não é a mesma coisa!',
      url: 'https://medium.com/@marcio.kgr/endpoint-e-api-n%C3%A3o-%C3%A9-a-mesma-coisa-d4d25cbf5ef0',
    },
    {
      title: 'Arquitetura de Microserviços x Arquitetura Monolítica',
      url: 'https://medium.com/@marcio.kgr/arquitetura-de-microservi%C3%A7os-x-arquitetura-monol%C3%ADtica-6ac1008cba0f',
    },
  ] as Article[],
};
