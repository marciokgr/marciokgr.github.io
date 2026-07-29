# Márcio Krüger — GitHub Pages

Página pessoal em Angular com biografia, experiências, timeline profissional e links para redes.

**Site:** https://marciokgr.github.io

## URLs e idiomas

Rotas amigáveis para SEO:

| Idioma | Home | Sobre |
|--------|------|-------|
| PT | `/pt-br` | `/pt-br/sobre` |
| EN | `/en` | `/en/about` |
| ES | `/es` | `/es/sobre` |

Também existem rotas para experiência, timeline, artigos e contato.

## Desenvolvimento

```bash
npm install
npm start
```

Acesse `http://localhost:4200` (redireciona para o idioma detectado).

## Build

```bash
npm run build
```

Saída em `dist/portfolio/browser`, com prerender das rotas, `404.html`, `sitemap.xml` e `robots.txt`.

## Deploy

O workflow em `.github/workflows/deploy.yml` publica automaticamente no GitHub Pages a cada push na branch `main`.

Em **Settings → Pages**, selecione a fonte **GitHub Actions**.

## Conteúdo

As traduções ficam em `src/app/i18n/translations/` (`pt.ts`, `en.ts`, `es.ts`). A foto está em `public/assets/profile.jpg`.
