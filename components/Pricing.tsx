import { Check } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";

const TIERS = [
  {
    name: "Starter",
    price: "3.99€",
    tagline: "For the morning commute.",
    features: [
      "2 shows a day",
      "All 31 languages",
      "Free radio, YouTube Music, local files",
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
    <section id="pricing" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter">
            Pick your airtime.
          </h2>
          <p className="mt-4 text-lg text-text-2 leading-relaxed">
            Start free with 3 shows and 1 on-air message. Keep your station
            when it clicks.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {TIERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className="h-full">
              <div
                className={`glass relative flex h-full flex-col p-7 ${
                  t.highlight ? "lg:-translate-y-3" : ""
                }`}
                style={
                  t.highlight
                    ? {
                        borderColor: "rgba(255,107,53,0.45)",
                        boxShadow: "0 20px 60px -20px rgba(255,107,53,0.35)",
                      }
                    : undefined
                }
              >
                {t.badge && (
                  <span
                    className={`absolute -top-3 left-6 rounded-full px-3 py-1 text-[11px] font-semibold ${
                      t.highlight
                        ? "text-[#14060a]"
                        : "border border-white/10 bg-bg-2 text-text-2"
                    }`}
                    style={
                      t.highlight
                        ? { background: "linear-gradient(135deg, var(--accent), #ff8a5a)" }
                        : undefined
                    }
                  >
                    {t.badge}
                  </span>
                )}
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <p className="mt-1 text-sm text-text-3">{t.tagline}</p>
                <p className="mt-5">
                  <span className="text-4xl font-bold tracking-tight">{t.price}</span>
                  <span className="text-text-3 text-sm"> / month</span>
                </p>
                <ul className="mt-6 space-y-2.5 text-sm text-text-2">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <Check size={16} weight="bold" className="mt-0.5 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <a
                    href="https://app.radious.ai"
                    className={`${t.highlight ? "cta" : "cta-ghost"} w-full justify-center px-5 py-3 text-sm`}
                  >
                    Create your radio
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="mx-auto max-w-2xl text-text-2">
            Ultra is a seat in the control room. Most people take Pro:
            <span className="text-text font-medium"> 0.26€ a day</span> for a
            station that says your name every morning. Cancel anytime.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
