import { Meta, Title } from "@solidjs/meta";
import { Nav } from "~/components/Nav";
import { Footer } from "~/components/Footer";
import { DISCORD, WAITLIST_URL } from "~/lib/site";
import { appUrl } from "~/lib/track";

/**
 * 404.
 *
 * Worth having for two reasons that are not "polish":
 *
 * 1. **noindex.** Without a real 404 route a static host serves its own
 *    generic page, and some hosts serve it with a 200 status — which
 *    invites Google to index an unlimited number of junk URLs as
 *    duplicate thin pages ("soft 404s"). One `noindex` closes that.
 * 2. **Recovery.** Broken links happen most often when a stranger
 *    hand-types a URL from a podcast, a printed slide or a Discord
 *    message that lost its formatting. That person was actively trying
 *    to reach you; a dead end wastes the highest-intent visitor on the
 *    site. So this page offers both doors, not an apology.
 *
 * ⚠️ HOST CONFIG. The static build emits this at /404/index.html.
 * Netlify and Vercel look for a top-level 404.html, so add a build step
 * or a redirect rule that points there — otherwise the host's own page
 * still wins. See the SEO report.
 */
export default function NotFound() {
  return (
    <>
      <Title>Page not found | Radious</Title>
      <Meta name="description" content="That page does not exist on radious.ai." />
      <Meta name="robots" content="noindex, follow" />
      <Nav />
      <main class="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-4 pt-40 pb-32 text-center sm:px-6">
        <p class="font-mono text-[12px] uppercase tracking-[0.2em] text-text-3">
          404 &middot; Dead air
        </p>
        <h1 class="mt-5 text-4xl font-bold tracking-tighter sm:text-5xl">
          Nothing on this frequency.
        </h1>
        <p class="mt-4 max-w-[42ch] text-lg leading-relaxed text-text-2">
          The page you were after does not exist. Everything worth
          hearing is one click away.
        </p>
        <div class="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href="/" class="cta px-7 py-3.5 text-base">
            Back to the station
          </a>
          <a
            href={appUrl(WAITLIST_URL)}
            class="cta-ghost px-6 py-3.5 text-base"
            data-umami-event="waitlist-404"
          >
            Join the waitlist
          </a>
        </div>
        <p class="mt-6 text-[13px] text-text-3">
          Or find us in the{" "}
          <a
            href={DISCORD}
            rel="noopener"
            class="text-accent-2 underline underline-offset-4"
            data-umami-event="discord-404"
          >
            Discord
          </a>
          .
        </p>
      </main>
      <Footer />
    </>
  );
}
