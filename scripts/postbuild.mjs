import { copyFileSync, existsSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const browserDir = join(__dirname, '..', 'dist', 'portfolio', 'browser');
const siteUrl = 'https://marciokgr.github.io';

const routes = ['/pt-br', '/en', '/es'];

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
    const xhtml = [
      ['pt-BR', '/pt-br'],
      ['en', '/en'],
      ['es', '/es'],
      ['x-default', '/pt-br'],
    ]
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
