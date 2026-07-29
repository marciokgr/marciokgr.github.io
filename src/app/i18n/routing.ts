import { Lang } from './types';

export type SectionKey =
  | 'home'
  | 'about'
  | 'experience'
  | 'timeline'
  | 'articles'
  | 'contact';

export const SITE_URL = 'https://marciokgr.github.io';

export const LANG_PREFIX: Record<Lang, string> = {
  pt: 'pt-br',
  en: 'en',
  es: 'es',
};

export const PREFIX_TO_LANG: Record<string, Lang> = {
  'pt-br': 'pt',
  en: 'en',
  es: 'es',
};

export const SECTION_SLUGS: Record<Lang, Record<Exclude<SectionKey, 'home'>, string>> = {
  pt: {
    about: 'sobre',
    experience: 'experiencia',
    timeline: 'timeline',
    articles: 'artigos',
    contact: 'contato',
  },
  en: {
    about: 'about',
    experience: 'experience',
    timeline: 'timeline',
    articles: 'articles',
    contact: 'contact',
  },
  es: {
    about: 'sobre',
    experience: 'experiencia',
    timeline: 'timeline',
    articles: 'articulos',
    contact: 'contacto',
  },
};

export const SECTION_KEYS: SectionKey[] = [
  'home',
  'about',
  'experience',
  'timeline',
  'articles',
  'contact',
];

export function langFromPrefix(prefix: string | null | undefined): Lang | null {
  if (!prefix) {
    return null;
  }
  return PREFIX_TO_LANG[prefix] ?? null;
}

export function sectionFromSlug(lang: Lang, slug?: string | null): SectionKey {
  if (!slug) {
    return 'home';
  }

  const entry = Object.entries(SECTION_SLUGS[lang]).find(([, value]) => value === slug);
  return (entry?.[0] as SectionKey | undefined) ?? 'home';
}

export function buildPath(lang: Lang, section: SectionKey = 'home'): string {
  const prefix = LANG_PREFIX[lang];
  if (section === 'home') {
    return `/${prefix}`;
  }
  return `/${prefix}/${SECTION_SLUGS[lang][section]}`;
}

/** Comandos para [routerLink] — string única com "/" quebra a navegação no Angular. */
export function buildCommands(lang: Lang, section: SectionKey = 'home'): string[] {
  const prefix = LANG_PREFIX[lang];
  if (section === 'home') {
    return ['/', prefix];
  }
  return ['/', prefix, SECTION_SLUGS[lang][section]];
}

export function allPrerenderRoutes(): string[] {
  const routes: string[] = [];

  (Object.keys(LANG_PREFIX) as Lang[]).forEach((lang) => {
    routes.push(buildPath(lang, 'home'));
    (Object.keys(SECTION_SLUGS[lang]) as Exclude<SectionKey, 'home'>[]).forEach((section) => {
      routes.push(buildPath(lang, section));
    });
  });

  return routes;
}
