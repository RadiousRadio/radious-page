import { For } from "solid-js";
import { Reveal } from "./Reveal";
import { DISCORD, SUPPORT_EMAIL } from "~/lib/site";

/**
 * FAQ AS OBJECTION HANDLING, not documentation.
 *
 * Four questions were added and one was corrected, all for the same
 * reason: the objections that stop a cold 2026 visitor from trying an AI
 * audio product are no longer "how does it work". They are "is this AI
 * slop", "will it lie to me about the news", "what are you doing with my
 * calendar", and "why not just use Spotify's DJ". A page that ducks
 * those loses the visitor silently; a page that answers them plainly
 * converts the sceptics, who are the ones worth having in a beta.
 *
 * The trial answer was factually wrong. It promised "3 shows and 1
 * on-air message", a limit that exists nowhere in radious-api — there is
 * no entitlement check and every account defaults to the Pro plan. It
 * was simultaneously untrue and discouraging, which is a rare double.
 *
 * These strings feed FAQPage JSON-LD, so they are also the answers
 * Google may surface directly. Keep them self-contained: each one has to
 * make sense with no other question visible.
 */

const QA = [
  {
    q: "What exactly is a show?",
    a: "One continuous radio session: your music interleaved with host segments. A news show reads your feeds in your priority order; a talk show commits to one theme, like banter, facts or a mini-class on your interests. It runs as long as you listen.",
  },
  {
    q: "Can I really talk to the hosts?",
    a: "Yes, two ways. Text the studio and your hosts read your message on air and answer it as a two-host Q&A — they will argue with each other about it. Or call the studio and speak with a host live, mid-show; they can look up real facts during the call.",
  },
  {
    q: "Is this AI slop?",
    a: "It is AI, and we will never pretend otherwise — the hosts are synthetic voices reading scripts written by a language model. What makes it worth listening to is that it is your station: your feeds in your order, your city's weather, your calendar, your interests, your name. Nothing generic is generated, because there is no generic version of it.",
  },
  {
    q: "Will the hosts make things up about the news?",
    a: "News segments are written from the feeds you choose and are meant to summarise them, not to add to them. Any system like this can still get a detail wrong or read a headline with the wrong emphasis, so treat the bulletin as a spoken headline scan and follow the source for anything that matters. Tell us when it slips and we will fix the prompt — that is exactly what the beta is for.",
  },
  {
    q: "What happens to my calendar and my data?",
    a: "Google Calendar access is read-only and optional, used only so the hosts can mention what is next in your 48 hours. You can disconnect it at any time from your Google account or Radious settings. We do not sell your data and we do not use it to train anyone's model. Deleting your account removes your hosts, feeds, calendar link and history.",
  },
  {
    q: "What music does it play?",
    a: "Free radio mixes royalty-free music from third-party catalogues, no account needed, with the artist credited on air and on screen. You can also play a folder of local files from your device.",
  },
  {
    q: "Which languages are supported?",
    a: "31 languages, from English to Japanese, Arabic, Estonian and Hindi. Your hosts speak the language you pick and select news in it.",
  },
  {
    q: "What is the difference between the waitlist and the beta?",
    a: `The waitlist is open to anyone, anywhere: leave an email and we let you in as fast as we can keep up. The beta is a limited number of seats we pick by hand from the Discord, because those listeners get everything free and a direct line to the person building it, and in return they are asked for real commitment. Join the waitlist if you are curious. Join the Discord if you want a seat.`,
  },
  {
    q: "What does the beta actually involve?",
    a: `We are taking a limited number of listeners. Everything is free for you during the beta, with no card. In return we ask you to listen on about three mornings a week for four weeks, spend twenty minutes on a call near the end, and say what broke in the Discord while it is still annoying you. You keep founder pricing afterwards.`,
  },
  {
    q: "When is the iOS app coming?",
    a: "The native iOS app is in development. Until it ships, the web app at app.radious.ai works on iPhone, including lock-screen playback with cover art — add it to your home screen and it behaves like an app.",
  },
  {
    q: "How do I cancel?",
    a: "In the app, anytime. During the beta there is nothing to cancel. Once plans start, your subscription runs to the end of the period, and deleting your account removes your hosts, feeds and history.",
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
        <Reveal>
          <p class="mt-10 text-center text-sm text-text-3">
            Something not answered here?{" "}
            <a
              href={DISCORD}
              rel="noopener"
              class="text-accent-2 hover:underline underline-offset-4"
            >
              Ask in the Discord
            </a>{" "}
            or{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              class="text-accent-2 hover:underline underline-offset-4"
            >
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
