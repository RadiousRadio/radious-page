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
- Legal pages: `src/routes/terms.tsx`, `src/routes/privacy.tsx` — see below before changing them

## Changing the Terms or the Privacy Policy

The app records which version of each page every listener accepted, and a
version is the page's "Last updated" date. So a change to the text is a change
in two repos:

1. Edit the page and set `updated` / `updatedIso` to the day it goes live.
2. In radious-api, set `LEGAL_CURRENT` in `src/services/legal.ts` to the same
   dates. New sign-ups are recorded against it. Deploy this site first, then
   the api, so no one is ever recorded against text they could not read yet.
3. Material change (anything that takes something away or adds an obligation):
   tell listeners by email or in the app at least 30 days before it takes
   effect (Terms section 13), and on that day raise `LEGAL_REQUIRED` in the
   same file. Everyone below it is asked to accept again in the app. Leave it
   alone for a typo fix, so it never stops anyone.
4. Rewrite `LEGAL_SUMMARY` there: it is what the app's "We've updated our
   Terms" screen says changed.

Git history is the archive of every version, so commit each one on its own.
"Previous versions are available on request" (Terms section 13) is answered
from it.
- SEO metadata: `src/routes/index.tsx` + `src/entry-server.tsx`
- Social share image: `public/og.png`
- App screenshots: `public/screens/*.webp` (regenerate via `radious-web` → `bunx playwright test --config playwright.screens.config.ts`)
