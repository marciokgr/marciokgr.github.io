import { CertificationItem, EducationItem } from './types';

export const educationShared: EducationItem[] = [
  {
    institution: 'UNIASSELVI',
    degree: 'Sistemas de Informação, Computer Technology/Computer Systems Technology',
    period: '2003 – 2007',
    logo: 'assets/orgs/uniasselvi.png',
    initials: 'UN',
  },
];

export const certificationsPt: CertificationItem[] = [
  {
    title: 'Apache Kafka',
    issuer: 'DataFlair',
    issued: 'Emitida em abr de 2022',
    logo: 'assets/orgs/dataflair.png',
    initials: 'DF',
  },
  {
    title: 'C# COMPLETO Programação Orientada a Objetos + Projetos',
    issuer: 'Udemy',
    issued: 'Emitida em jan de 2022',
    logo: 'assets/orgs/udemy.png',
    initials: 'UD',
    skills: ['C#'],
  },
  {
    title: 'React Js do zero ao avançado na pratica',
    issuer: 'Udemy',
    issued: 'Emitida em nov de 2019',
    logo: 'assets/orgs/udemy.png',
    initials: 'UD',
  },
  {
    title: 'Inglês Avançado',
    issuer: 'Atrox Núcleo de Inglês',
    issued: 'Emitida em abr de 2010',
    logo: 'assets/orgs/atrox.png',
    initials: 'AT',
  },
  {
    title: 'Programa de desenvolvimento de líderes',
    issuer: 'Fundação Fritz Müller',
    issued: 'Emitida em nov de 2014',
    initials: 'FM',
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
  },
  {
    title:
      '10265A - Developing Data Access Solutions with Microsoft Visual Studio 2010',
    issuer: 'Dinamio Tecnologia',
    issued: 'Emitida em dez de 2012',
    logo: 'assets/orgs/dinamio.png',
    initials: 'DI',
  },
  {
    title:
      '10264A - Developing Web Applications with Microsoft Visual Studio 2010',
    issuer: 'Dinamio Tecnologia',
    issued: 'Emitida em set de 2012',
    logo: 'assets/orgs/dinamio.png',
    initials: 'DI',
  },
  {
    title:
      '10263A - Developing Microsoft Windows Communication Foundation Solutions with Microsoft Visual Studio 2010',
    issuer: 'Dinamio Tecnologia',
    issued: 'Emitida em nov de 2012',
    logo: 'assets/orgs/dinamio.png',
    initials: 'DI',
  },
  {
    title: 'Gerenciamento Ágil de Projetos com Scrum',
    issuer: 'Clarify',
    issued: 'Emitida em set de 2015',
    logo: 'assets/orgs/clarify.png',
    initials: 'CL',
  },
  {
    title: 'Sucesso em Liderança',
    issuer: 'SBCoaching',
    issued: 'Emitida em abr de 2015',
    initials: 'SB',
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
  },
  {
    ...certificationsPt[4],
    title: 'Leadership Development Program',
    issued: 'Issued Nov 2014',
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
  },
  {
    ...certificationsPt[11],
    title: 'Success in Leadership',
    issued: 'Issued Apr 2015',
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
  },
  {
    ...certificationsPt[4],
    title: 'Programa de desarrollo de líderes',
    issued: 'Emitida en nov de 2014',
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
  },
  {
    ...certificationsPt[11],
    title: 'Éxito en Liderazgo',
    issued: 'Emitida en abr de 2015',
  },
];
