import { For } from "solid-js";
import { Reveal } from "./Reveal";

const POINTS = [
  {
    title: "Bring your own music",
    body: "Free radio from royalty-free third-party catalogues with no account, or connect your own playlists and local files.",
  },
  {
    title: "Plays on your lock screen",
    body: "Real cover art and controls on the lock screen, so your station keeps going in your pocket.",
  },
  {
    // "iOS coming soon" appeared four times across the page. Repeating a
    // not-yet is an instruction to wait: a visitor who is told three
    // times that the good version is coming will very reasonably decide
    // to come back for it, and never does. Said once, as a fact about
    // the roadmap rather than an apology, it now reads as momentum.
    title: "Add it to your home screen",
    body: "The web app installs to your iPhone home screen and behaves like a native app, lock-screen controls and all. A real iOS build is still in development.",
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
              class="hero-float relative w-[270px] sm:w-[300px] rounded-[3.2rem] border border-white/12 p-2.5 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]"
              style="background: linear-gradient(150deg, #1a2136, #0b0f1c);"
            >
              {/* screen area, locked to a real phone aspect so the frame
                  never looks squat regardless of the source capture */}
              <div class="relative aspect-[9/19.5] overflow-hidden rounded-[2.6rem]">
                {/* The capture carries its own status bar: the frame
                    overlays a dynamic island at the top, and without one it
                    landed on the app's "Hello, <name>" header — which is not
                    where an island sits on a real phone. The bar puts it
                    between the clock and the battery, as iOS does. It is
                    painted in the app's own header colour rather than black,
                    so the seam does not show; the page's .rd-grain overlay
                    is fixed over everything and textures it along with the
                    rest of the screenshot.

                    One source, no srcset. The capture is 387px wide and the
                    frame renders at 270-300 CSS px, so a "520w" sibling
                    could only ever be this file upscaled — bytes without
                    detail, which the browser does better at render time.
                    Restore the pair if the screenshot is ever recaptured
                    at 2x or 3x. */}
                <img
                  src="/screens/mobile-app.webp"
                  alt="Radious running on an iPhone: a live show playing, with player controls and the upcoming track queue"
                  width="387"
                  height="839"
                  decoding="async"
                  class="h-full w-full object-cover object-top"
                  loading="lazy"
                />
                {/* dynamic island */}
                <div
                  class="absolute left-1/2 top-3 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black/85"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <div class="order-1 lg:order-2">
          <Reveal>
            <h2 class="text-4xl sm:text-5xl font-bold tracking-tighter">
              Your station, in your pocket.
            </h2>
            <p class="mt-4 max-w-[46ch] text-lg text-text-2 leading-relaxed">
              Radious was built for headphones on the move. Press play and
              your hosts come with you, songs and all.
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
