import { For } from "solid-js";
import { Reveal } from "./Reveal";

const QA = [
  {
    q: "What exactly is a show?",
    a: "One continuous radio session: your music interleaved with host segments. A news show reads your feeds in your priority order; a talk show commits to one theme, like banter, trivia or a mini-class on your interests. It runs as long as you listen.",
  },
  {
    q: "Can I really talk to the hosts?",
    a: "Yes. Text the studio and your hosts read your message on air and answer it as a two-host Q&A. On Pro and Ultra you can also call the studio and speak with a host live; they can look up live facts mid-call.",
  },
  {
    q: "What music does it play?",
    a: "Free radio mixes Audius and Jamendo, no account needed. You can also play a folder of local files from your device.",
  },
  {
    q: "Which languages are supported?",
    a: "31 languages, from English and Estonian to Japanese, Arabic and Hindi. Your hosts speak the language you pick and select news in it.",
  },
  {
    q: "When is the iOS app coming?",
    a: "The native iOS app is in development. Until it ships, the web app at app.radious.ai works on iPhone, including lock-screen playback with cover art.",
  },
  {
    q: "How does the free trial work?",
    a: "You get 3 shows and 1 on-air message, free. After that, plans start at 3.99€ a month.",
  },
  {
    q: "How do I cancel?",
    a: "In the app, anytime. Your subscription runs to the end of the period, and deleting your account removes your hosts, feeds and history.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: QA.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export function FAQ() {
  return (
    <section id="faq" class="py-24 sm:py-32 border-t border-white/5">
      <script type="application/ld+json" innerHTML={JSON.stringify(faqJsonLd)} />
      <div class="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tighter text-center">
            Questions, answered.
          </h2>
        </Reveal>
        <div class="mt-12">
          <For each={QA}>
            {(item, i) => (
              <Reveal delay={Math.min(i() * 0.04, 0.2)}>
                <details class="group border-b border-white/8 py-5">
                  <summary class="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span
                      class="shrink-0 text-text-3 transition-transform duration-300 group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p class="mt-3 text-text-2 leading-relaxed">{item.a}</p>
                </details>
              </Reveal>
            )}
          </For>
        </div>
      </div>
    </section>
  );
}
