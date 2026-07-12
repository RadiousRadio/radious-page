import { For } from "solid-js";
import { Reveal } from "./Reveal";

const POINTS = [
  {
    title: "Bring your own music",
    body: "Free radio from Audius and Jamendo with no account, or connect your own playlists and local files.",
  },
  {
    title: "Plays on your lock screen",
    body: "Real cover art and controls on the lock screen, so your station keeps going in your pocket.",
  },
  {
    title: "Native iOS, coming soon",
    body: "The iPhone app is in the studio. Until it lands, the web app already runs great on mobile.",
  },
];

export function MobileShowcase() {
  return (
    <section id="mobile" class="relative py-24 sm:py-32 border-t border-white/5">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 grid gap-14 lg:grid-cols-2 lg:items-center">
        {/* phone mockup wrapping the real mobile screenshot */}
        <Reveal class="order-2 lg:order-1 flex justify-center">
          <div class="relative">
            <div
              class="pointer-events-none absolute -inset-10 -z-10"
              style="background: radial-gradient(55% 55% at 50% 45%, rgba(74,158,255,0.16) 0%, transparent 70%);"
              aria-hidden="true"
            />
            <div
              class="hero-float relative w-[264px] sm:w-[300px] rounded-[3rem] border border-white/12 p-2.5 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]"
              style="background: linear-gradient(150deg, #1a2136, #0b0f1c);"
            >
              {/* dynamic island */}
              <div
                class="absolute left-1/2 top-4 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black/85"
                aria-hidden="true"
              />
              <img
                src="/screens/mobile-app.webp"
                alt="Radious running on iPhone: a live show with cover art and player controls"
                width="900"
                height="1533"
                class="w-full rounded-[2.4rem]"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>

        <div class="order-1 lg:order-2">
          <Reveal>
            <h2 class="text-4xl sm:text-5xl font-bold tracking-tighter">
              Your station, in your pocket.
            </h2>
            <p class="mt-4 max-w-[46ch] text-lg text-text-2 leading-relaxed">
              Radious was built for headphones on the move. Press play and your
              hosts ride along, songs and all.
            </p>
          </Reveal>
          <div class="mt-8 flex flex-col gap-5">
            <For each={POINTS}>
              {(p, i) => (
                <Reveal delay={i() * 0.08}>
                  <div class="flex gap-4">
                    <span
                      class="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
                      style="background: linear-gradient(135deg, var(--accent), var(--accent-2));"
                      aria-hidden="true"
                    />
                    <div>
                      <p class="font-semibold">{p.title}</p>
                      <p class="mt-1 text-sm text-text-2 leading-relaxed max-w-[46ch]">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )}
            </For>
          </div>
        </div>
      </div>
    </section>
  );
}
