import { For, Show } from "solid-js";
import { Check } from "./icons";
import { Reveal } from "./Reveal";
import { WAITLIST_URL } from "~/lib/site";
import { appUrl, APP } from "~/lib/track";

/**
 * PRICING DURING A BETA — why this section changed but did not vanish.
 *
 * Deleting the prices would be the wrong call: a visitor who cannot see
 * what a thing will cost assumes the worst, and the trade press and
 * investors both look for it. What was wrong was the ORDER OF THE ASK.
 * The page now recruits into the founding beta first (see Beta.tsx) and
 * shows prices underneath as *what this becomes*, which converts the
 * price table from a checkout into a credibility signal.
 *
 * TWO SUBSTANTIVE CHANGES BEYOND FRAMING:
 *
 * 1. "Unlimited" is gone from Ultra. Selling an uncapped tier while the
 *    heaviest legitimate user can cost more per month than the tier
 *    charges is the one commitment that cannot be walked back once
 *    someone has paid for it — and it contradicts the standing rule in
 *    the monetization plan (never sell Unlimited before self-hosted TTS).
 *    Ultra now names generous, finite numbers. They are far above what
 *    any human reaches and they bound the downside.
 *
 * 2. The two non-numeric entitlements are named on the cards: how many
 *    hosts a show puts on air (2, 2, 3) and whether Banter and Learning
 *    are in the talk-theme pool (Pro and up). Both are enforced in
 *    radious-api — hostsMax is clamped at show generation and richThemes
 *    filters the theme pool — so neither is a card-only promise.
 *
 * 3. Ultra's call allowance matches the API's real ceiling
 *    (CALLS_PER_USER_PER_DAY, default 5). A price card promising more
 *    call-ins than the server will grant is a refund request with a
 *    delay on it.
 */

const TIERS = [
  {
    name: "Starter",
    price: "3.99€",
    tagline: "For the morning commute.",
    features: [
      "2 shows a day",
      "2 hosts on air",
      "All 31 languages",
      "Free radio and local files",
      "News, weather and calendar on air",
    ],
    highlight: false,
    badge: null as string | null,
  },
  {
    name: "Pro",
    price: "7.99€",
    tagline: "For people who leave the radio on.",
    features: [
      "20 shows a day",
      "1 studio call a day",
      "20 on-air messages a day",
      "2 hosts on air",
      "Banter and Learning host talk",
      "Everything in Starter",
    ],
    highlight: true,
    badge: "Most on air",
  },
  {
    name: "Ultra",
    price: "50€",
    tagline: "For people who want a say.",
    features: [
      "50 shows a day",
      "5 studio calls a day",
      "100 on-air messages a day",
      "3 hosts on air",
      "Founder community access",
      "Feature voting: you pick what ships",
      // Closes the card. Banter and Learning are NOT listed above it even
      // though Ultra has them — this line already carries every Pro bullet
      // that is identical at Ultra, and repeating one three rows above the
      // rollup reads as an editing mistake. "3 hosts on air" stays because
      // it is MORE than Pro's two, not the same.
      "Everything in Pro",
    ],
    highlight: false,
    badge: "Control room",
    // The top tier's name wears the accent gradient — the same treatment
    // the app's own plan cards give it, so the two agree.
    gradientName: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" class="py-24 sm:py-32">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal class="mx-auto max-w-2xl text-center">
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tighter">
            What it costs later.
          </h2>
          <p class="mt-4 text-lg text-text-2 leading-relaxed">
            Nothing during the founding beta. These are the estimated plans for when
            we open the doors &mdash; and the founding beta keep whichever one
            they want at this price, permanently.
          </p>
        </Reveal>

        <div class="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          <For each={TIERS}>
            {(t, i) => (
              <Reveal delay={i() * 0.08} class="h-full">
                <div
                  class={`glass relative flex h-full flex-col p-7 sm:p-8 ${
                    t.highlight ? "lg:-translate-y-3" : ""
                  }`}
                  style={
                    t.highlight
                      ? "border-color: rgba(255,107,53,0.45); box-shadow: 0 20px 60px -20px rgba(255,107,53,0.35);"
                      : undefined
                  }
                >
                  <Show when={t.badge}>
                    <span
                      class={`absolute -top-3 left-6 rounded-full px-3 py-1 text-[11px] font-semibold ${
                        t.highlight
                          ? "text-[#14060a]"
                          : "border border-white/10 bg-bg-2 text-text-2"
                      }`}
                      style={
                        t.highlight
                          ? "background: linear-gradient(135deg, var(--accent), #ff8a5a);"
                          : undefined
                      }
                    >
                      {t.badge}
                    </span>
                  </Show>
                  <h3 class={`text-lg font-semibold ${"gradientName" in t && t.gradientName ? "grad-text" : ""}`}>
                    {t.name}
                  </h3>
                  <p class="mt-1 text-sm text-text-3">{t.tagline}</p>
                  <p class="mt-5">
                    <span class="text-4xl font-bold tracking-tight">{t.price}</span>
                    <span class="text-text-3 text-sm"> / month</span>
                  </p>
                  <ul class="mt-6 space-y-3.5 text-sm text-text-2">
                    <For each={t.features}>
                      {(f) => (
                        <li class="flex gap-2.5">
                          <Check size={16} class="mt-0.5 shrink-0 text-accent" />
                          {f}
                        </li>
                      )}
                    </For>
                  </ul>
                  {/* pt-10, not pt-8. Ultra sets the height of the row, so
                      its list runs right up to this gap with no slack of its
                      own — the last point was reading like part of the
                      button. Matches the app's plan cards. */}
                  <div class="mt-auto pt-10">
                    <a
                      href={appUrl(WAITLIST_URL)}
                      data-umami-event={`waitlist-pricing-${t.name.toLowerCase()}`}
                      class={`${t.highlight ? "cta" : "cta-ghost"} w-full justify-center px-5 py-3 text-sm`}
                    >
                      Join the waitlist
                    </a>
                  </div>
                </div>
              </Reveal>
            )}
          </For>
        </div>

        {/* As small and as quiet as it can be while still being on the
            page — the cards say a number and VAT makes that number not
            quite the number, which is the sort of thing that has to be
            stated even though nobody reads it. */}
        <Reveal class="mx-auto mt-6 text-center">
          <p class="text-[11px] text-text-3/70">Prices exclude VAT.</p>
        </Reveal>

        <Reveal class="mx-auto mt-6 max-w-2xl text-center">
          <p class="text-sm text-text-3 leading-relaxed">
            Ultra is a seat in the control room, not more airtime. Most
            people will take Pro:
            <span class="text-text-2"> 0.26&euro; a day</span> for a
            station that says your name every morning. Cancel anytime.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
