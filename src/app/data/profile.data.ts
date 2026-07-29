export interface SocialLink {
  label: string;
  url: string;
  detail: string;
  icon: 'github' | 'linkedin' | 'medium' | 'email' | 'whatsapp';
  external?: boolean;
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
      label: 'E-mail',
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
      role: 'Arquiteto de software sênior',
      company: 'CWI Software',
      period: 'Abr 2026 — o momento',
      location: 'São Paulo, Brasil · Remoto',
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
      role: 'Tech lead · Engenheiro de software sênior',
      company: 'CWI Software',
      period: 'Nov 2025 — Abr 2026',
      location: 'São Paulo, Brasil · Remoto',
      description:
        'Liderança técnica e atuação como engenheiro de software sênior, apoiando times no desenvolvimento de soluções robustas, com atenção a qualidade, performance e boas práticas no ecossistema .NET.',
      technologies: ['C#', '.NET', 'Angular', 'RabbitMQ', 'CI/CD'],
    },
    {
      role: 'Engenheiro de software sênior',
      company: 'Skopia Digital',
      period: 'Abr 2025 — Nov 2025',
      location: 'São Paulo, Brasil · Remoto',
      description:
        'Atuação como engenheiro de software sênior no desenvolvimento e evolução de soluções digitais, com ênfase em qualidade de entrega e stack .NET.',
      technologies: ['C#', '.NET', 'APIs'],
    },
    {
      role: 'Tech lead · Engenheiro de software sênior',
      company: 'Bancorbrás',
      period: 'Mar 2024 — Abr 2025',
      location: 'Brasília, DF · Remoto',
      description:
        'Tech lead e engenheiro de software sênior, conduzindo iniciativas técnicas e entregas de software em ambiente remoto.',
      technologies: ['C#', '.NET', 'Liderança técnica'],
    },
    {
      role: 'Tech Lead | Engenharia de Sistemas',
      company: 'Cooperativa Central Ailos',
      period: 'Mar 2021 — Mar 2024',
      location: 'Blumenau, SC · Híbrido',
      description:
        'Tech Lead de Engenharia de Sistemas, conduzindo iniciativas de arquitetura, evolução de plataformas e alinhamento técnico entre times, com foco em soluções escaláveis para o ecossistema cooperativo.',
      technologies: ['C#', '.NET', 'SQL Server', 'Azure', 'Arquitetura'],
    },
    {
      role: 'Engenheiro de software sênior',
      company: 'Cervello BPMS | TMS',
      period: 'Set 2019 — Mar 2021',
      location: 'São Paulo, Brasil · Remoto',
      description:
        'Análise e desenvolvimento de aplicações Web e Desktop com C#, .NET, Razor, Telerik (Kendo UI), WebAPI, HTML5, jQuery, CSS3, Dapper, WCF e SQL Server. Atuação com Azure Pipelines, CI/CD, melhoria de usabilidade e performance.',
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
      role: 'Tech Lead · Engenheiro de software sênior',
      company: 'Ellevo Soluções em TI',
      period: 'Mar 2014 — Set 2019',
      location: 'Blumenau, SC · Híbrido',
      description:
        'Responsável pelas demandas do Sistema Ellevo, melhorias e novas demandas, com liderança e motivação da equipe e resolução de conflitos. Responsável pelo Ellevo Cloud (IBM Cloud e Azure), otimização de custos FinOps e melhorias de performance. Também atuou como Product Owner no projeto Ellevo Next 8 (Cloud First) e como Tech Lead no legado em .NET, C#, VB6 e SQL Server.',
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
      role: 'Analista de sistemas sênior',
      company: 'Ellevo Soluções em TI',
      period: 'Nov 2006 — Mar 2014',
      location: 'Blumenau, SC · Presencial',
      description:
        'Análise e levantamento de necessidades, criação e atualização de especificações de sistema, criação e acompanhamento de cronograma, desenvolvimento e manutenção de aplicações em C#, VB6, ASP e SQL Server.',
      technologies: ['C#', 'VB6', 'ASP', 'SQL Server', 'ANS'],
    },
    {
      role: 'Desenvolvedor de software',
      company: 'Ambev Tech',
      period: 'Mar 2005 — Out 2006',
      location: 'Blumenau, SC · Presencial',
      description:
        'Desenvolvimento e manutenção de aplicação Web com ASP, AJAX, VBScript, JavaScript, VB6, C#, .NET e SQL Server (triggers, stored procedures e functions). Instalação e manutenção da aplicação em plataforma Windows.',
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
