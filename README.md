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

O workflow publica o site em `docs/` (na `main`) e também na branch `gh-pages`.

**Configuração obrigatória** em [Settings → Pages](https://github.com/marciokgr/marciokgr.github.io/settings/pages):

1. **Source:** Deploy from a branch  
2. **Branch:** `main`  
3. **Folder:** `/docs`  
4. Save  

Sem isso, o GitHub Pages continua mostrando o README da raiz do repositório.

## Conteúdo

As traduções ficam em `src/app/i18n/translations/` (`pt.ts`, `en.ts`, `es.ts`). A foto está em `public/assets/profile.jpg`.
