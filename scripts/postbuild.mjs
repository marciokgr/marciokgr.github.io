import { copyFileSync, existsSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const browserDir = join(__dirname, '..', 'dist', 'portfolio', 'browser');
const siteUrl = 'https://marciokgr.github.io';

/** Espelha src/app/i18n/routing.ts — caminhos reais (sem #hash) para o Google. */
const routes = [
  '/',
  '/pt-br',
  '/pt-br/sobre',
  '/pt-br/experiencia',
  '/pt-br/timeline',
  '/pt-br/formacao',
  '/pt-br/artigos',
  '/pt-br/contato',
  '/en',
  '/en/about',
  '/en/experience',
  '/en/timeline',
  '/en/education',
  '/en/articles',
  '/en/contact',
  '/es',
  '/es/sobre',
  '/es/experiencia',
  '/es/timeline',
  '/es/formacion',
  '/es/articulos',
  '/es/contacto',
];

if (!existsSync(browserDir)) {
  console.error('Build output not found:', browserDir);
  process.exit(1);
}

const indexPath = join(browserDir, 'index.html');
copyFileSync(indexPath, join(browserDir, '404.html'));

const lastmod = new Date().toISOString().slice(0, 10);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    const loc = route === '/' ? `${siteUrl}/` : `${siteUrl}${route}`;
    const priority =
      route === '/' || route === '/pt-br'
        ? '1.0'
        : route.split('/').length <= 2
          ? '0.9'
          : '0.7';
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
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

console.log(`Postbuild complete: 404.html, sitemap.xml (${routes.length} urls), robots.txt`);
