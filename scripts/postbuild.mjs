import { copyFileSync, existsSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const browserDir = join(__dirname, '..', 'dist', 'portfolio', 'browser');
const siteUrl = 'https://marciokgr.github.io';

const routes = [
  '/pt-br',
  '/pt-br/sobre',
  '/pt-br/experiencia',
  '/pt-br/timeline',
  '/pt-br/artigos',
  '/pt-br/contato',
  '/en',
  '/en/about',
  '/en/experience',
  '/en/timeline',
  '/en/articles',
  '/en/contact',
  '/es',
  '/es/sobre',
  '/es/experiencia',
  '/es/timeline',
  '/es/articulos',
  '/es/contacto',
];

if (!existsSync(browserDir)) {
  console.error('Build output not found:', browserDir);
  process.exit(1);
}

const indexPath = join(browserDir, 'index.html');
copyFileSync(indexPath, join(browserDir, '404.html'));

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${routes
  .map((route) => {
    const loc = `${siteUrl}${route}`;
    const parts = route.split('/').filter(Boolean);
    const prefix = parts[0];
    const section = parts[1] ?? '';

    const alternates = [
      ['pt-BR', sectionPath('pt-br', section, 'pt')],
      ['en', sectionPath('en', section, 'en')],
      ['es', sectionPath('es', section, 'es')],
      ['x-default', sectionPath('pt-br', section, 'pt')],
    ];

    const xhtml = alternates
      .map(
        ([hreflang, path]) =>
          `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${siteUrl}${path}" />`
      )
      .join('\n');

    return `  <url>
    <loc>${loc}</loc>
${xhtml}
  </url>`;
  })
  .join('\n')}
</urlset>
`;

writeFileSync(join(browserDir, 'sitemap.xml'), sitemap, 'utf8');

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

writeFileSync(join(browserDir, 'robots.txt'), robots, 'utf8');

console.log('Postbuild complete: 404.html, sitemap.xml, robots.txt');

function sectionPath(langPrefix, sectionSlug, lang) {
  const map = {
    pt: {
      sobre: 'sobre',
      experiencia: 'experiencia',
      timeline: 'timeline',
      artigos: 'artigos',
      contato: 'contato',
      about: 'sobre',
      experience: 'experiencia',
      articles: 'artigos',
      contact: 'contato',
      articulos: 'artigos',
      contacto: 'contato',
    },
    en: {
      sobre: 'about',
      experiencia: 'experience',
      timeline: 'timeline',
      artigos: 'articles',
      contato: 'contact',
      about: 'about',
      experience: 'experience',
      articles: 'articles',
      contact: 'contact',
      articulos: 'articles',
      contacto: 'contact',
    },
    es: {
      sobre: 'sobre',
      experiencia: 'experiencia',
      timeline: 'timeline',
      artigos: 'articulos',
      contato: 'contacto',
      about: 'sobre',
      experience: 'experiencia',
      articles: 'articulos',
      contact: 'contacto',
      articulos: 'articulos',
      contacto: 'contacto',
    },
  };

  if (!sectionSlug) {
    return `/${langPrefix}`;
  }

  const localized = map[lang][sectionSlug] ?? sectionSlug;
  return `/${langPrefix}/${localized}`;
}
