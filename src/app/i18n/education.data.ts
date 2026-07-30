import { CertificationItem, EducationItem } from './types';

export const educationShared: EducationItem[] = [
  {
    institution: 'UNIASSELVI',
    institutionUrl: 'https://portal.uniasselvi.com.br/',
    degree: 'Sistemas de Informação, Computer Technology/Computer Systems Technology',
    period: '2003 – 2007',
    logo: 'assets/orgs/uniasselvi.png',
    initials: 'UN',
  },
];

const dinamioSkills = ['C#', 'VB.NET', '.NET'];

export const certificationsPt: CertificationItem[] = [
  {
    title: 'Apache Kafka',
    issuer: 'DataFlair',
    issuerUrl: 'https://data-flair.training/',
    issued: 'Emitida em abr de 2022',
    logo: 'assets/orgs/dataflair.png',
    initials: 'DF',
    skills: ['Kafka'],
  },
  {
    title: 'C# COMPLETO Programação Orientada a Objetos + Projetos',
    issuer: 'Udemy',
    issuerUrl: 'https://www.udemy.com/',
    issued: 'Emitida em jan de 2022',
    logo: 'assets/orgs/udemy.png',
    initials: 'UD',
    skills: ['C#'],
  },
  {
    title: 'React Js do zero ao avançado na pratica',
    issuer: 'Udemy',
    issuerUrl: 'https://www.udemy.com/',
    issued: 'Emitida em nov de 2019',
    logo: 'assets/orgs/udemy.png',
    initials: 'UD',
    skills: ['React', 'Front-end'],
  },
  {
    title: 'Inglês Avançado',
    issuer: 'Atrox Núcleo de Inglês',
    issuerUrl: 'https://atrox.com.br/',
    issued: 'Emitida em abr de 2010',
    logo: 'assets/orgs/atrox.png',
    initials: 'AT',
    skills: ['Inglês'],
  },
  {
    title: 'Programa de desenvolvimento de líderes',
    issuer: 'Fundação Fritz Müller',
    issuerUrl: 'https://www.fundacaofritzmuller.com.br/',
    issued: 'Emitida em nov de 2014',
    logo: 'assets/orgs/fritzmuller.png',
    initials: 'FM',
    skills: ['Liderança'],
  },
  {
    title: 'MCPS: Microsoft Certified Professional',
    issuer: 'Microsoft',
    issued: 'Emitida em mar de 2013',
    logo: 'assets/orgs/microsoft.png',
    initials: 'MS',
    credentialId: 'E199-812',
  },
  {
    title:
      'Microsoft Specialist: Programming in HTML5 with JavaScript and CSS3 Specialist',
    issuer: 'Microsoft',
    issued: 'Emitida em nov de 2013',
    logo: 'assets/orgs/microsoft.png',
    initials: 'MS',
    credentialId: 'E199-8120',
    skills: ['HTML5'],
  },
  {
    title:
      '10265A - Developing Data Access Solutions with Microsoft Visual Studio 2010',
    issuer: 'Dinamio Tecnologia',
    issuerUrl: 'https://www.dinamio.com.br/',
    issued: 'Emitida em dez de 2012',
    logo: 'assets/orgs/dinamio.png',
    initials: 'DI',
    skills: dinamioSkills,
  },
  {
    title:
      '10264A - Developing Web Applications with Microsoft Visual Studio 2010',
    issuer: 'Dinamio Tecnologia',
    issuerUrl: 'https://www.dinamio.com.br/',
    issued: 'Emitida em set de 2012',
    logo: 'assets/orgs/dinamio.png',
    initials: 'DI',
    skills: dinamioSkills,
  },
  {
    title:
      '10263A - Developing Microsoft Windows Communication Foundation Solutions with Microsoft Visual Studio 2010',
    issuer: 'Dinamio Tecnologia',
    issuerUrl: 'https://www.dinamio.com.br/',
    issued: 'Emitida em nov de 2012',
    logo: 'assets/orgs/dinamio.png',
    initials: 'DI',
    skills: dinamioSkills,
  },
  {
    title: 'Gerenciamento Ágil de Projetos com Scrum',
    issuer: 'Clarify',
    issuerUrl: 'https://clarify.com.br/',
    issued: 'Emitida em set de 2015',
    logo: 'assets/orgs/clarify.png',
    initials: 'CL',
    skills: ['Agilidade', 'Scrum'],
  },
  {
    title: 'Sucesso em Liderança',
    issuer: 'SBCoaching',
    issuerUrl:
      'https://www.linkedin.com/company/sociedade-brasileira-de-coaching/',
    issued: 'Emitida em abr de 2015',
    logo: 'assets/orgs/sbcoaching.png',
    initials: 'SB',
    skills: ['Liderança'],
  },
];

export const educationEn: EducationItem[] = [
  {
    ...educationShared[0],
    degree:
      'Information Systems, Computer Technology/Computer Systems Technology',
  },
];

export const certificationsEn: CertificationItem[] = [
  { ...certificationsPt[0], issued: 'Issued Apr 2022' },
  {
    ...certificationsPt[1],
    title: 'COMPLETE C# Object-Oriented Programming + Projects',
    issued: 'Issued Jan 2022',
  },
  {
    ...certificationsPt[2],
    title: 'React.js from zero to advanced in practice',
    issued: 'Issued Nov 2019',
  },
  {
    ...certificationsPt[3],
    title: 'Advanced English',
    issued: 'Issued Apr 2010',
    skills: ['English'],
  },
  {
    ...certificationsPt[4],
    title: 'Leadership Development Program',
    issued: 'Issued Nov 2014',
    skills: ['Leadership'],
  },
  { ...certificationsPt[5], issued: 'Issued Mar 2013' },
  { ...certificationsPt[6], issued: 'Issued Nov 2013' },
  { ...certificationsPt[7], issued: 'Issued Dec 2012' },
  { ...certificationsPt[8], issued: 'Issued Sep 2012' },
  { ...certificationsPt[9], issued: 'Issued Nov 2012' },
  {
    ...certificationsPt[10],
    title: 'Agile Project Management with Scrum',
    issued: 'Issued Sep 2015',
    skills: ['Agility', 'Scrum'],
  },
  {
    ...certificationsPt[11],
    title: 'Success in Leadership',
    issued: 'Issued Apr 2015',
    skills: ['Leadership'],
  },
];

export const educationEs: EducationItem[] = [
  {
    ...educationShared[0],
    degree:
      'Sistemas de Información, Computer Technology/Computer Systems Technology',
  },
];

export const certificationsEs: CertificationItem[] = [
  { ...certificationsPt[0], issued: 'Emitida en abr de 2022' },
  {
    ...certificationsPt[1],
    title: 'C# COMPLETO Programación Orientada a Objetos + Proyectos',
    issued: 'Emitida en ene de 2022',
  },
  {
    ...certificationsPt[2],
    title: 'React.js de cero a avanzado en la práctica',
    issued: 'Emitida en nov de 2019',
  },
  {
    ...certificationsPt[3],
    title: 'Inglés Avanzado',
    issued: 'Emitida en abr de 2010',
    skills: ['Inglés'],
  },
  {
    ...certificationsPt[4],
    title: 'Programa de desarrollo de líderes',
    issued: 'Emitida en nov de 2014',
    skills: ['Liderazgo'],
  },
  { ...certificationsPt[5], issued: 'Emitida en mar de 2013' },
  { ...certificationsPt[6], issued: 'Emitida en nov de 2013' },
  { ...certificationsPt[7], issued: 'Emitida en dic de 2012' },
  { ...certificationsPt[8], issued: 'Emitida en set de 2012' },
  { ...certificationsPt[9], issued: 'Emitida en nov de 2012' },
  {
    ...certificationsPt[10],
    title: 'Gestión Ágil de Proyectos con Scrum',
    issued: 'Emitida en set de 2015',
    skills: ['Agilidad', 'Scrum'],
  },
  {
    ...certificationsPt[11],
    title: 'Éxito en Liderazgo',
    issued: 'Emitida en abr de 2015',
    skills: ['Liderazgo'],
  },
];
