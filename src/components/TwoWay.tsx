import { ChatCircleDots, Phone } from "./icons";
import { Reveal } from "./Reveal";

export function TwoWay() {
  return (
    <section id="two-way" class="relative py-24 sm:py-32">
      {/* blue counter-glow so this section reads as its own stage */}
      <div
        class="pointer-events-none absolute inset-0 -z-10"
        style="background: radial-gradient(90% 70% at 50% 100%, var(--accent-2-soft) 0%, transparent 65%);"
        aria-hidden="true"
      />
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal class="mx-auto max-w-2xl text-center">
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tighter">
            Don&rsquo;t just listen. Answer back.
          </h2>
          <p class="mt-4 text-lg text-text-2 leading-relaxed">
            Text the studio and hear your hosts answer you by name. Or call in
            and talk to them live, mid-show.
          </p>
        </Reveal>

        <div class="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div class="glass h-full p-6">
              <div class="flex items-center gap-2 text-accent-2">
                <ChatCircleDots size={20} />
                <h3 class="font-semibold">On-air texts</h3>
              </div>
              <div class="mt-5 space-y-3">
                <div class="ml-auto max-w-[85%] rounded-2xl rounded-br-md border border-white/10 bg-white/6 p-3 text-sm">
                  Did Bowie really record &ldquo;Heroes&rdquo; in Berlin?
                </div>
                <div class="flex justify-end gap-2 font-mono text-[10px] uppercase tracking-wider text-text-3">
                  <span class="line-through opacity-50">Sent</span>
                  <span class="line-through opacity-50">Queued</span>
                  <span class="text-live">Answered</span>
                </div>
                <div class="max-w-[92%] rounded-2xl rounded-bl-md p-3 text-sm" style="background: var(--accent-soft);">
                  <span class="font-semibold text-accent">Michael:</span> Hansa
                  Studios, 1977 &mdash; close enough to the Wall to see it from
                  the control room.
                </div>
                <div class="max-w-[92%] rounded-2xl rounded-bl-md p-3 text-sm" style="background: var(--accent-2-soft);">
                  <span class="font-semibold text-accent-2">Kris:</span> And
                  Fripp flew in and cut that guitar line in a single afternoon.
                </div>
              </div>
              <p class="mt-5 text-sm text-text-2">
                Your message becomes a two-host Q&amp;A block, spliced into the
                live queue. If the show is full, it opens your next one.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div class="glass h-full p-6 md:translate-y-6">
              <div class="flex items-center gap-2 text-accent">
                <Phone size={20} />
                <h3 class="font-semibold">Call the studio</h3>
              </div>
              <div class="mt-5 space-y-3 text-sm">
                <p class="font-mono text-[12px] text-text-3">Calling the studio&hellip;</p>
                <p class="text-text-2">Michael is on the line. Tap to speak.</p>
                <div class="flex items-center gap-3 rounded-[10px] border border-live/30 bg-live/8 p-3">
                  <span class="pulse-live h-2.5 w-2.5 rounded-full bg-live" aria-hidden="true" />
                  <span class="font-semibold text-live">You are live on air</span>
                  <span class="ml-auto flex items-end gap-[3px] h-4" aria-hidden="true">
                    {[0, 0.2, 0.35, 0.12, 0.28].map((d) => (
                      <span
                        class="eq-bar w-[3px] rounded-full bg-live"
                        style={{ height: "100%", "animation-delay": `${d}s` }}
                      />
                    ))}
                  </span>
                </div>
                <p class="font-mono text-[12px] text-text-3">
                  Call ended. Back to the music.
                </p>
              </div>
              <p class="mt-5 text-sm text-text-2">
                A real conversation: you speak, the host answers on air, and can
                look up live facts mid-call. Scores, weather, prices, receipts.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal class="mt-14 text-center">
          <p class="mx-auto max-w-xl text-lg text-text-2">
            Your favorite artist will never call you back.
            <span class="text-text font-medium"> Your hosts pick up mid-song.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
