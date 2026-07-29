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

O workflow gera o site estático na **raiz** do repositório e em `docs/`, além da branch `gh-pages`.

Em [Settings → Pages](https://github.com/marciokgr/marciokgr.github.io/settings/pages), use uma destas opções:

- **Branch `main` + Folder `/ (root)`** (recomendado com a publicação na raiz), ou  
- **Branch `main` + Folder `/docs`**, ou  
- **Branch `gh-pages` + Folder `/ (root)`**

Se aparecer o README no lugar do site, a pasta/fonte do Pages está errada.

## Conteúdo

As traduções ficam em `src/app/i18n/translations/` (`pt.ts`, `en.ts`, `es.ts`). A foto está em `public/assets/profile.jpg`.
