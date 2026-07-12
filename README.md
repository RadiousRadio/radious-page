# radious-page

Marketing landing page for [radious.ai](https://radious.ai): the AI radio that talks back.

- Web app: [app.radious.ai](https://app.radious.ai)
- Status: [status.radious.ai](https://status.radious.ai)

## Stack

Next.js (App Router, static export) + Tailwind CSS v4 + Motion. No server required: `next build` emits a fully static site in `out/`.

The design mirrors the app's default **sunset** theme (`#070911` base, orange `#ff6b35` + blue `#4a9eff` accents, glass panels) so landing page, web app and iOS app read as one product.

## Develop

```bash
bun install
bun run dev      # http://localhost:3000
bun run build    # static export to out/
```

## Deploy

Any static host works. Recommended: Vercel (zero config; it detects `output: "export"`).

1. Import the repo on Vercel, deploy.
2. Point `radious.ai` (apex) at the deployment.
3. Done: `sitemap.xml`, `robots.txt`, OG image and JSON-LD ship with the build.

## Editing

- Pricing tiers: `components/Pricing.tsx`
- Copy for hero / sections: `components/*.tsx`
- Legal pages: `app/terms/page.tsx`, `app/privacy/page.tsx`
- SEO metadata: `app/layout.tsx`
- Social share image: `public/og.png`
