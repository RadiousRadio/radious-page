import { Reveal } from "./Reveal";
import { DISCORD, WAITLIST_URL } from "~/lib/site";
import { appUrl, APP } from "~/lib/track";

export function Closer() {
  return (
    <section class="relative overflow-hidden py-28 sm:py-36">
      <div
        class="pointer-events-none absolute inset-0 -z-10"
        style="background: radial-gradient(70% 80% at 50% 110%, rgba(255,107,53,0.16) 0%, transparent 65%);"
        aria-hidden="true"
      />
      <div class="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <Reveal>
          {/* Was /radious-icon.png — a 1024x1024, 708 KB PNG rendered
              into 88 CSS pixels, below the fold, competing for
              bandwidth with the hero. 176/264 cover 2x and 3x. */}
          <img
            src="/radious-icon-176.png"
            srcset="/radious-icon-176.png 176w, /radious-icon-264.png 264w"
            sizes="88px"
            alt=""
            width="88"
            height="88"
            loading="lazy"
            decoding="async"
            class="mx-auto rounded-[22px] shadow-[0_30px_80px_-20px_rgba(255,107,53,0.5)]"
            aria-hidden="true"
          />
        </Reveal>
        <Reveal delay={0.08}>
          <h2 class="mt-8 text-4xl sm:text-5xl font-bold tracking-tighter leading-[1.05]">
            Right now, someone&rsquo;s hosts are greeting them by name.
          </h2>
          <p class="mt-4 text-lg text-text-2">
            Yours are still waiting for that moment.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <div class="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={appUrl(WAITLIST_URL)}
              class="cta px-8 py-4 text-base"
              data-umami-event="waitlist-closer"
            >
              Join the waitlist
            </a>
            <a
              href={DISCORD}
              rel="noopener"
              class="cta-ghost px-6 py-4 text-base"
              data-umami-event="discord-closer"
            >
              Join the beta
            </a>
          </div>
          {/* The old line here promised "3 shows and 1 on-air message,
              free" — a cap that is not enforced anywhere in the API, and
              which reads to a stranger as "you get three goes and then it
              stops". During the beta the honest and better-converting
              statement is simply that it is free. */}
          <p class="mt-4 text-sm text-text-3">
            Waitlist is open to everyone. Limited beta seats, picked by hand. No card either way.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
