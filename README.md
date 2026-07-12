# radious-page

Marketing landing page for [radious.ai](https://radious.ai): the AI radio that talks back.

- Web app: [app.radious.ai](https://app.radious.ai)
- Status: [status.radious.ai](https://status.radious.ai)

## Stack

[SolidStart](https://start.solidjs.com) (static preset) + Tailwind CSS v4. `bun run build` prerenders the whole site to static HTML/CSS/JS in `.output/public/` — no server required.

The design mirrors the app's default **sunset** theme (`#070911` base, orange `#ff6b35` + blue `#4a9eff` accents, glass panels) so landing page, web app and iOS app read as one product. The hero and mobile shots are real frames captured from a live show (see `radious-web/e2e-screens`).

## Develop

```bash
bun install
bun run dev      # http://localhost:3000
bun run build    # static output in .output/public/
```

## Deploy

Any static host works. Recommended: Vercel or Netlify (both detect the SolidStart static preset).

1. Import the repo, deploy.
2. Point `radious.ai` (apex) at the deployment.
3. `sitemap.xml`, `robots.txt`, the OG image and JSON-LD ship with the build.

## Editing

- Pricing tiers: `src/components/Pricing.tsx`
- Section copy: `src/components/*.tsx`
- Legal pages: `src/routes/terms.tsx`, `src/routes/privacy.tsx`
- SEO metadata: `src/routes/index.tsx` + `src/entry-server.tsx`
- Social share image: `public/og.png`
- App screenshots: `public/screens/*.webp` (regenerate via `radious-web` → `bunx playwright test --config playwright.screens.config.ts`)
