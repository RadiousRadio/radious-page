import { onMount } from "solid-js";
import { Reveal } from "./Reveal";
import { DemoPlayer } from "./DemoPlayer";
import { appUrl, APP, captureSource, enhanceAppLinks } from "~/lib/track";
import { DISCORD, WAITLIST_URL } from "~/lib/site";

/**
 * HEADLINE RATIONALE — read before changing the H1.
 *
 * "Radio that talks back" was accurate and unfortunately crowded.
 * will.i.am's RAiDiO.FYI has been selling "two-way communication" with
 * an AI host since 2024, Google documents "join a conversation and
 * interact with the AI hosts" as a NotebookLM feature, and Spotify's DJ
 * takes voice requests for 94 million people. To a cold visitor, "talks
 * back" reads as a chatbot with music — a category they have already
 * decided about.
 *
 * The two things no consumer product was found to do are the ones the
 * page now leads with: you can TEXT a studio and hear two hosts discuss
 * your message on air, and you can CALL IN and be live on air. "Picks up" says
 * both in two words, is unclaimed, and pays off the line the closer has
 * always ended on.
 */
export function Hero() {
  onMount(() => {
    // Attribution has to be captured before anything can be clicked —
    // the hero holds the first CTA on the page.
    captureSource();
    enhanceAppLinks();
  });

  return (
    <section class="relative overflow-hidden pt-32 sm:pt-36 pb-20 sm:pb-28">
      {/* Broadcast backdrop: a living aurora plus radio-wave rings that
          radiate outward, the literal meaning of "Radious". Sits at -z-1
          so it paints ABOVE the fixed opaque .rd-ambient layer (-z-2)
          but behind the hero content. */}
      <div class="absolute inset-0 -z-[1] overflow-hidden" aria-hidden="true">
        <div
          class="hero-blob hero-blob-a"
          style="width: 42rem; height: 42rem; left: -14rem; top: -10rem; background: rgba(255,107,53,0.18);"
        />
        <div
          class="hero-blob hero-blob-b"
          style="width: 36rem; height: 36rem; right: -12rem; top: 2rem; background: rgba(74,158,255,0.15);"
        />
        <div
          class="hero-blob hero-blob-c"
          style="width: 30rem; height: 30rem; left: 30%; top: 30%; background: rgba(255,90,50,0.10);"
        />
        <div class="hero-rings">
          <span class="hero-ring" />
          <span class="hero-ring" />
          <span class="hero-ring" />
          <span class="hero-ring" />
          <span class="hero-ring" />
        </div>
      </div>

      <div class="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div class="mx-auto max-w-3xl text-center">
          <Reveal>
            <a
              href="#beta"
              class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-3 py-1 text-[12px] text-text-2 transition-colors hover:border-white/25 hover:text-text"
            >
              <span class="pulse-live size-1.5 rounded-full bg-live" aria-hidden="true" />
              <span class="font-semibold tracking-wide text-text">NOW IN BETA</span>
              <span aria-hidden="true">·</span> free while we build it with you
            </a>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 class="mt-5 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.02]">
              The radio station <span class="accent-text">that picks up</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p class="mx-auto mt-5 max-w-[48ch] text-lg text-text-2 leading-relaxed">
              Hire your own hosts. Hand them your news, your calendar and
              your music. Then text the studio &mdash; or call in, and go live on
              air, mid-song.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            {/* An audio product has to be audible before it is buyable.
                Hides itself if public/demo/sample-show.mp3 is absent. */}
            <DemoPlayer label="90 seconds of a real show" />
          </Reveal>
          <Reveal delay={0.28}>
            <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={appUrl(WAITLIST_URL)}
                class="cta px-7 py-3.5 text-base"
                data-umami-event="waitlist-hero"
              >
                Join the waitlist
              </a>
              <a
                href={DISCORD}
                rel="noopener"
                class="cta-ghost px-6 py-3.5 text-base"
                data-umami-event="discord-hero"
              >
                Join the beta
              </a>
            </div>
            {/* Say what each button DOES. Two CTAs side by side with no
                explanation is the fastest way to make a visitor choose
                neither — and here they genuinely lead to different
                places, so the ambiguity is real rather than cosmetic. */}
            <p class="mx-auto mt-4 max-w-[44ch] text-[13px] leading-relaxed text-text-3">
              The waitlist is open to everyone, everywhere &mdash; no card,
              just an email. The beta is a limited number of seats we are
              picking by hand, out of the Discord.
            </p>
          </Reveal>
        </div>

        {/* the real studio, captured from a live show */}
        <Reveal delay={0.2} class="mt-14 sm:mt-16">
          <div class="hero-float relative mx-auto max-w-5xl">
            <div
              class="pointer-events-none absolute -inset-8 -z-10"
              style="background: radial-gradient(60% 60% at 50% 40%, rgba(255,107,53,0.14) 0%, transparent 70%);"
              aria-hidden="true"
            />
            <div class="glass overflow-hidden p-1.5 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]">
              {/* LCP element. srcset/sizes MIRROR the preload in
                  entry-server.tsx — change one, change both, or the
                  browser fetches two different files. A phone at 375
                  CSS px would otherwise pull the full-width source to
                  paint a 375px box; the 1200w sibling is 67 KB against
                  90 KB.

                  alt is written as a description of what is happening
                  in the screenshot rather than a keyword list — it is
                  read aloud by screen readers and is one of the few
                  pieces of indexable text on an image-led page. */}
              <img
                src="/screens/hero-app.webp"
                srcset="/screens/hero-app-1200.webp 1200w, /screens/hero-app.webp 1459w"
                sizes="(max-width: 1024px) 100vw, 1024px"
                alt="The Radious studio live on air: two AI hosts discussing the news between songs, with the listener's calendar, headlines and track queue around them"
                width="1459"
                height="990"
                class="w-full rounded-[11px]"
                loading="eager"
                decoding="async"
                fetchpriority="high"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
