import {
  certificationsPt,
  educationShared,
} from '../education.data';
import { AppContent } from '../types';

export const pt: AppContent = {
  skipLink: 'Ir para o conteúdo',
  menu: 'Menu',
  navAria: 'Principal',
  langLabel: 'Idioma',
  backToTop: 'Voltar ao topo',
  nav: {
    home: 'Home',
    about: 'Sobre',
    experience: 'Experiência',
    timeline: 'Timeline',
    education: 'Formação',
    articles: 'Artigos',
    contact: 'Contato',
  },
  hero: {
    ctaExperience: 'Ver experiência',
    ctaDownloadCv: 'Baixar CV (PDF)',
    photoAlt: 'Foto de',
  },
  about: {
    title: 'Sobre mim',
    subtitle:
      'Engenheiro de Software com trajetória sólida em arquitetura, liderança técnica e desenvolvimento de sistemas críticos.',
  },
  experience: {
    title: 'Experiência profissional',
    subtitle:
      'Projetos e papéis com foco em modernização .NET, microsserviços e liderança técnica.',
    currentBadge: 'Atual',
  },
  timeline: {
    title: 'Timeline da carreira',
    subtitle: 'Uma visão cronológica do histórico profissional.',
  },
  education: {
    title: 'Formação e certificações',
    subtitle:
      'Formação acadêmica e licenças e certificados ao longo da carreira.',
    academicTitle: 'Formação acadêmica',
    certificatesTitle: 'Licenças e certificados',
    credentialLabel: 'Exibir credencial',
    credentialIdLabel: 'Código da credencial',
  },
  articles: {
    title: 'Artigos e publicações',
    subtitle:
      'Conteúdos publicados no Medium sobre .NET, arquitetura e boas práticas.',
  },
  contact: {
    title: 'Redes e contato',
    subtitle: 'Conecte-se comigo pelas redes abaixo.',
  },
  footer: 'Página pessoal no GitHub Pages.',
  seo: {
    home: {
      title: 'Márcio Krüger · Engenheiro de Software · Arquiteto · Tech Lead',
      description:
        'Currículo e portfólio de Márcio Krüger — Engenheiro de Software, Arquiteto de Software e Tech Lead em Blumenau/SC, Brasil.',
    },
    about: {
      title: 'Sobre mim · Márcio Krüger',
      description:
        'Conheça a trajetória, skills e competências de Márcio Krüger em arquitetura, .NET, cloud e liderança técnica.',
    },
    experience: {
      title: 'Experiência profissional · Márcio Krüger',
      description:
        'Experiência profissional de Márcio Krüger em CWI, Skopia, Bancorbrás, Ailos, Cervello, Ellevo e Ambev Tech.',
    },
    timeline: {
      title: 'Timeline da carreira · Márcio Krüger',
      description:
        'Linha do tempo da carreira de Márcio Krüger, do desenvolvimento à arquitetura de software.',
    },
    articles: {
      title: 'Artigos e publicações · Márcio Krüger',
      description:
        'Artigos de Márcio Krüger no Medium sobre .NET, arquitetura, microsserviços e boas práticas.',
    },
    contact: {
      title: 'Contato · Márcio Krüger',
      description:
        'Entre em contato com Márcio Krüger por e-mail, WhatsApp, GitHub, LinkedIn ou Medium.',
    },
  },
  profile: {
    name: 'Márcio Krüger',
    title: 'Engenheiro de Software · Arquiteto de Software · Tech Lead',
    location: 'Blumenau / SC - Brasil',
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
    ],
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
    ],
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
          'Atuando como Tech Lead na ASA Investments, na squad de renda fixa, facilitando os levantamentos e apoios técnicos. Principais projetos: Integração certificadora QCertifica, DocuSign, Investimentos Offshore, Investimentos OnShore, Novo Fluxo de segurança e Anti-Fraude.',
        technologies: [
          'C#',
          '.NET 8',
          '.NET 10',
          'RabbitMQ',
          'Angular 19',
          'Sensedia API Platform',
          'Azure DevOps',
          'Azure Pipelines',
          'GCP',
          'Keycloak',
        ],
      },
      {
        role: 'Engenheiro de software sênior',
        company: 'Skopia Digital',
        period: 'Abr 2025 — Nov 2025',
        location: 'São Paulo, Brasil · Remoto',
        description:
          'Atuando no Banco Master, na squad de empréstimo público, participei de alguns projetos regulatórios e melhorias no sistema. Principais projetos: integração com averbadoras (Nuclea, ZetraSoft, ConsigLog), migração e modernização no projeto de multi empresas.',
        technologies: [
          'SQL Server',
          '.NET 9',
          '.NET 8',
          '.NET 6',
          'Eventos',
          'Kibana',
          'DDD',
          'CQRS',
          'BDD',
          'Angular 16',
          'Docker',
          'Pipelines',
          'Microsserviços',
          'SQS',
          'Lambda',
          'S3',
          'PostgreSQL',
          'Git',
          'GitHub Actions',
          'SNS',
        ],
      },
      {
        role: 'Tech lead · Engenheiro de software sênior',
        company: 'Bancorbrás',
        period: 'Mar 2024 — Abr 2025',
        location: 'Brasília, Distrito Federal, Brasil · Remoto',
        description:
          'Atuando como Senior Software Engineer / Tech Lead na Bancorbrás, responsável pela Plataforma de Pagamentos. Principais projetos: retentativa de cobrança recorrente, birô de crédito (Serasa, Quod), integração Bancorbrás Gupy, novo fluxo da plataforma de pagamento para atender PCI DSS, BolePix, PIX e criação do HUB de Integrações, que padronizou as integrações contábeis da Bancorbrás.',
        technologies: [
          'SQL Server',
          'RabbitMQ',
          '.NET 9',
          '.NET 8',
          '.NET 6',
          'Eventos',
          'Keycloak',
          'Kibana',
          'DDD',
          'CQRS',
          'BDD',
          'Angular 12',
          'DevOps',
          'Elastic',
          'Elastic APM',
          'Docker',
          'Pipelines',
          'Microsserviços',
          'SQS',
          'Lambda',
          'S3',
          'PostgreSQL',
        ],
      },
      {
        role: 'Tech Lead | Engenharia de Sistemas',
        company: 'Cooperativa Central Ailos',
        period: 'Mar 2021 — Mar 2024',
        location: 'Blumenau, Santa Catarina, Brasil · Híbrido',
        description:
          'Atuação na atualização e manutenção do Ailos Foundation, voltado à padronização e abstração de funcionalidades. Ponto de apoio às demais áreas, auxiliando em dúvidas técnicas. Iniciei a estruturação do Open Banking (Open Finance) do Sistema Ailos. Criação e apoio dos 38 domínios de negócio (microsserviços), garantindo a qualidade do código. Melhoria constante nos processos de DevOps, CI/CD e pipelines, com Azure Repos, integração com Docker, Kubernetes e AWS.',
        technologies: [
          '.NET Core 3.1',
          '.NET 5',
          '.NET 6',
          'RabbitMQ',
          'WSO2',
          'Kafka',
          'Angular',
          'React',
          'MuleSoft',
          'Microsserviços',
          'AWS',
          'CI/CD',
          'Azure Pipelines',
          'Azure Repos',
          'DynamoDB',
          'EC2',
          'S3',
          'Lambda',
          'SQS',
          'Node.js',
          'Docker',
          'Kubernetes',
        ],
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
    ],
    education: educationShared,
    certifications: certificationsPt,
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
    ],
  },
};
