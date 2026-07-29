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

O workflow em `.github/workflows/deploy.yml` faz o build e publica na branch `gh-pages` a cada push em `main`.

Em **Settings → Pages**:
1. **Source:** Deploy from a branch
2. **Branch:** `gh-pages` / `/ (root)`
3. Save

> Repositórios `username.github.io` precisam publicar a partir de uma branch (não só pelo artifact do Actions).

## Conteúdo

As traduções ficam em `src/app/i18n/translations/` (`pt.ts`, `en.ts`, `es.ts`). A foto está em `public/assets/profile.jpg`.
