// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en" class="h-full antialiased">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#070911" />
          {/* Tells the browser the page is dark BEFORE any CSS parses,
              so form controls, scrollbars and the pre-paint canvas are
              dark too. Without it there is a white flash on first load,
              which is both ugly and a real Largest-Contentful-Paint
              hazard on slow connections. */}
          <meta name="color-scheme" content="dark" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />

          {/* LCP PRELOAD.
              The hero screenshot is this page's Largest Contentful
              Paint element on every viewport. `fetchpriority="high"` on
              the <img> helps only once the parser reaches it — which is
              after the CSS has loaded and blocked. A preload in <head>
              starts the fetch in the first round trip instead.

              imagesrcset/imagesizes must MIRROR the <img> in Hero.tsx
              exactly, or the browser preloads one file and then
              downloads a second. If you change one, change both. */}
          <link
            rel="preload"
            as="image"
            href="/screens/hero-app.webp"
            imagesrcset="/screens/hero-app-1200.webp 1200w, /screens/hero-app.webp 1459w"
            imagesizes="(max-width: 1024px) 100vw, 1024px"
            fetchpriority="high"
          />

          {/*
            ANALYTICS — Umami Cloud (free Hobby plan).

            The page shipped with none, which meant a launch run entirely
            on unpaid channels could not tell a Reddit post that produced
            eleven listeners from one that produced none.

            WHY UMAMI AND NOT CLOUDFLARE. Cloudflare Web Analytics is
            free and unlimited and needs no cookie banner — but its own
            docs say it supports neither custom events nor UTM
            parameters, which are the exact two things this launch needs
            to measure. Umami's free tier does both, sets no cookies (so
            still no banner, and the privacy policy stays true), and is
            MIT-licensed with full export, so moving to self-hosted
            later costs an afternoon and loses no history.

            THE ID IS PUBLIC. It is a site identifier, not a secret —
            it ships in the HTML of every page that uses it, by design.
            So it is hardcoded rather than hidden behind a build-time
            env var: one less thing that can be forgotten on a deploy
            and silently produce a site with no analytics. VITE_UMAMI_ID
            still overrides it if you ever need a second property (a
            staging site, say).

            data-domains KEEPS DEV TRAFFIC OUT. Without it, every `bun
            run dev` reload lands in the same dashboard as real
            visitors — and at a few dozen visits a week your own testing
            would be most of the graph. Note the consequence: preview
            deploys (*.vercel.app, *.netlify.app) will NOT be tracked
            either. If a preview shows no data, that is this line doing
            its job, not a broken install.

            Outbound clicks are tagged with data-umami-event on the CTAs
            themselves (waitlist-hero, discord-beta, and so on). And
            page views are only half the story: the conversion happens
            on app.radious.ai/waitlist, still a different origin from
            this site. src/lib/track.ts carries the campaign tag across
            that boundary so the app can stamp it on the user row. THAT
            is the number worth reading.
          */}
          <script
            defer
            src={import.meta.env.VITE_UMAMI_HOST || "https://cloud.umami.is/script.js"}
            data-website-id={
              import.meta.env.VITE_UMAMI_ID || "e6d926a2-7623-4b3b-9baa-4931c42b14e3"
            }
            data-domains="radious.ai,www.radious.ai"
          />
          {assets}
        </head>
        <body class="min-h-full">
          {/* scroll-reveal styles only engage when JS is present, so
              no-JS visitors and crawlers always see full content */}
          <script innerHTML={'document.documentElement.classList.add("js")'} />
          <div id="app" class="min-h-dvh flex flex-col">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
