export type Lang = 'pt' | 'en' | 'es';

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

export interface SeoEntry {
  title: string;
  description: string;
}

export interface AppContent {
  skipLink: string;
  menu: string;
  navAria: string;
  langLabel: string;
  backToTop: string;
  nav: {
    home: string;
    about: string;
    experience: string;
    timeline: string;
    articles: string;
    contact: string;
  };
  hero: {
    ctaExperience: string;
    photoAlt: string;
  };
  about: {
    title: string;
    subtitle: string;
  };
  experience: {
    title: string;
    subtitle: string;
    currentBadge: string;
  };
  timeline: {
    title: string;
    subtitle: string;
  };
  articles: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
  };
  footer: string;
  seo: {
    home: SeoEntry;
    about: SeoEntry;
    experience: SeoEntry;
    timeline: SeoEntry;
    articles: SeoEntry;
    contact: SeoEntry;
  };
  profile: {
    name: string;
    title: string;
    location: string;
    photo: string;
    summary: string;
    socials: SocialLink[];
    skillGroups: SkillGroup[];
    experiences: Experience[];
    articles: Article[];
  };
}

export interface LangOption {
  code: Lang;
  label: string;
  prefix: string;
}
