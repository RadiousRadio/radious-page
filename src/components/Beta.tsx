import { For } from "solid-js";
import { Check } from "./icons";
import { Reveal } from "./Reveal";
import { DISCORD, SUPPORT_EMAIL, WAITLIST_URL } from "~/lib/site";
import { appUrl, APP } from "~/lib/track";

/**
 * The founding-beta section: the page's actual conversion goal right now.
 *
 * WHY IT SITS ABOVE PRICING
 * A visitor arriving from a Reddit post or a trade-press mention is not
 * shopping. Showing them a three-tier price table as the first ask
 * invites the only question the product cannot currently answer well
 * ("is this worth 7.99 a month?") when the question it CAN win is "do
 * you want in?". Scarcity plus a named cohort converts strangers at a
 * rate a price table never will at this stage.
 *
 * WHY IT NAMES THE PRICE OF ENTRY
 * Listing what is asked in return — three mornings a week, one call, the
 * Discord — is not friction to be minimised. It is the filter. Twenty
 * people who read that and still sign up are the twenty who will still
 * be listening in week three; the ones it scares off were going to churn
 * silently and teach nothing. Never soften this list to lift signups.
 */

const GET = [
  "Every paid feature, free, for the whole beta",
  "Founder pricing when we open: your rate never rises",
  "A private Discord with the people building it",
];

const GIVE = [
  "Listen on three mornings a week for four weeks",
  "Say what broke, in Discord, while it is still annoying you",
];

export function Beta() {
  return (
    <section id="beta" class="relative py-24 sm:py-32">
      <div
        class="pointer-events-none absolute inset-0 -z-10"
        style="background: radial-gradient(80% 60% at 50% 0%, var(--accent-soft) 0%, transparent 60%);"
        aria-hidden="true"
      />
      <div class="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <Reveal class="text-center">
          <p class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[12px] text-text-2">
            <span class="pulse-live size-1.5 rounded-full bg-live" aria-hidden="true" />
            Now recruiting · limited seats
          </p>
          <h2 class="mt-5 text-4xl sm:text-5xl font-bold tracking-tighter">
            The founding <span class="accent-text">cohort</span>.
          </h2>
          <p class="mx-auto mt-4 max-w-[54ch] text-lg text-text-2 leading-relaxed">
            Radious is finished enough to live with and rough enough to
            still be shaped. So the next handful of listeners are not
            customers — they are the room where it gets decided.
            Everyone else is welcome on the waitlist, wherever you are;
            we open up as fast as we can keep up.
          </p>
        </Reveal>

        <div class="mt-12 grid gap-5 md:grid-cols-2">
          <Reveal>
            <div class="glass h-full p-7">
              <h3 class="text-lg font-semibold">What you get</h3>
              <ul class="mt-5 space-y-3">
                <For each={GET}>
                  {(f) => (
                    <li class="flex gap-3 text-[15px] text-text-2">
                      <Check size={16} class="mt-1 shrink-0 text-accent" />
                      {f}
                    </li>
                  )}
                </For>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div class="glass h-full p-7">
              <h3 class="text-lg font-semibold">What we ask</h3>
              <ul class="mt-5 space-y-3">
                <For each={GIVE}>
                  {(f) => (
                    <li class="flex gap-3 text-[15px] text-text-2">
                      <Check size={16} class="mt-1 shrink-0 text-accent-2" />
                      {f}
                    </li>
                  )}
                </For>
              </ul>
              <p class="mt-5 text-[13px] leading-relaxed text-text-3">
                No card, ever, during the beta. Leave whenever you like —
                just tell us why on the way out. That part is the whole
                deal.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div class="mt-10 flex flex-col items-center gap-4">
            <div class="flex flex-wrap items-center justify-center gap-3">
              {/* Discord is PRIMARY here and only here. By the time
                  someone has read what the beta asks of them, the
                  higher-commitment door is the right default — this is
                  the one place on the page where self-selection has
                  already happened. */}
              <a
                href={DISCORD}
                rel="noopener"
                class="cta px-7 py-3.5 text-base"
                data-umami-event="discord-beta"
              >
                Join the beta
              </a>
              <a
                href={appUrl(WAITLIST_URL)}
                class="cta-ghost px-6 py-3.5 text-base"
                data-umami-event="waitlist-beta"
              >
                Just join the waitlist
              </a>
            </div>
            <p class="text-[13px] text-text-3">
              Any other question?{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}?subject=Radious%20beta`}
                class="text-accent-2 underline underline-offset-4"
              >
                {SUPPORT_EMAIL}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
