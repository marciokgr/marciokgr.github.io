# Márcio Krüger — GitHub Pages

Página pessoal em Angular com biografia, experiências, timeline profissional e links para redes.

**Site:** https://marciokgr.github.io

## Desenvolvimento

```bash
npm install
npm start
```

Acesse `http://localhost:4200`.

## Build

```bash
npm run build -- --configuration production
```

Saída em `dist/portfolio/browser`.

## Deploy

O workflow em `.github/workflows/deploy.yml` publica automaticamente no GitHub Pages a cada push na branch `main`.

No repositório, em **Settings → Pages**, selecione a fonte **GitHub Actions**.

## Conteúdo

Os dados do currículo ficam em `src/app/data/profile.data.ts`. A foto está em `public/assets/profile.jpg`.
