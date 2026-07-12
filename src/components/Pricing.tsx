import { For, Show } from "solid-js";
import { Check } from "./icons";
import { Reveal } from "./Reveal";

const TIERS = [
  {
    name: "Starter",
    price: "3.99€",
    tagline: "For the morning commute.",
    features: [
      "2 shows a day",
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
      "Unlimited shows, calls and messages",
      "Founder community access",
      "Feature voting: you pick what ships",
      "Everything in Pro",
    ],
    highlight: false,
    badge: "Control room",
  },
];

export function Pricing() {
  return (
    <section id="pricing" class="py-24 sm:py-32">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal class="mx-auto max-w-2xl text-center">
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tighter">
            Pick your airtime.
          </h2>
          <p class="mt-4 text-lg text-text-2 leading-relaxed">
            Start free with 3 shows and 1 on-air message. Keep your station
            when it clicks.
          </p>
        </Reveal>

        <div class="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          <For each={TIERS}>
            {(t, i) => (
              <Reveal delay={i() * 0.08} class="h-full">
                <div
                  class={`glass relative flex h-full flex-col p-7 ${
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
                  <h3 class="text-lg font-semibold">{t.name}</h3>
                  <p class="mt-1 text-sm text-text-3">{t.tagline}</p>
                  <p class="mt-5">
                    <span class="text-4xl font-bold tracking-tight">{t.price}</span>
                    <span class="text-text-3 text-sm"> / month</span>
                  </p>
                  <ul class="mt-6 space-y-2.5 text-sm text-text-2">
                    <For each={t.features}>
                      {(f) => (
                        <li class="flex gap-2.5">
                          <Check size={16} class="mt-0.5 shrink-0 text-accent" />
                          {f}
                        </li>
                      )}
                    </For>
                  </ul>
                  <div class="mt-auto pt-8">
                    <a
                      href="https://app.radious.ai"
                      class={`${t.highlight ? "cta" : "cta-ghost"} w-full justify-center px-5 py-3 text-sm`}
                    >
                      Create your radio
                    </a>
                  </div>
                </div>
              </Reveal>
            )}
          </For>
        </div>

        <Reveal class="mt-12 text-center">
          <p class="mx-auto max-w-2xl text-text-2">
            Ultra is a seat in the control room. Most people take Pro:
            <span class="text-text font-medium"> 0.26€ a day</span> for a
            station that says your name every morning. Cancel anytime.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
