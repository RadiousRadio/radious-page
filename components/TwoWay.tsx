import { ChatCircleDots, Phone } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";

export function TwoWay() {
  return (
    <section id="two-way" className="relative py-24 sm:py-32">
      {/* blue counter-glow so this section reads as its own stage */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(90% 70% at 50% 100%, var(--accent-2-soft) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter">
            Don&rsquo;t just listen. Answer back.
          </h2>
          <p className="mt-4 text-lg text-text-2 leading-relaxed">
            Text the studio and hear your hosts answer you by name. Or call in
            and talk to them live, mid-show.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="glass h-full p-6">
              <div className="flex items-center gap-2 text-accent-2">
                <ChatCircleDots size={20} weight="fill" />
                <h3 className="font-semibold">On-air texts</h3>
              </div>
              <div className="mt-5 space-y-3">
                <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md border border-white/10 bg-white/6 p-3 text-sm">
                  Roast my taste in music. Gently.
                </div>
                <div className="flex justify-end gap-2 font-mono text-[10px] uppercase tracking-wider text-text-3">
                  <span className="line-through opacity-50">Sent</span>
                  <span className="line-through opacity-50">Queued</span>
                  <span className="text-live">Answered</span>
                </div>
                <div className="max-w-[92%] rounded-2xl rounded-bl-md p-3 text-sm" style={{ background: "var(--accent-soft)" }}>
                  <span className="font-semibold text-accent">Kris:</span> Gently?
                  You queued the same song four times before lunch.
                </div>
                <div className="max-w-[92%] rounded-2xl rounded-bl-md p-3 text-sm" style={{ background: "var(--accent-2-soft)" }}>
                  <span className="font-semibold text-accent-2">Mihkel:</span> It
                  is a good song. Here it is a fifth time.
                </div>
              </div>
              <p className="mt-5 text-sm text-text-2">
                Your message becomes a two-host Q&amp;A block, spliced into the
                live queue. If the show is full, it opens your next one.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass h-full p-6 md:translate-y-6">
              <div className="flex items-center gap-2 text-accent">
                <Phone size={20} weight="fill" />
                <h3 className="font-semibold">Call the studio</h3>
              </div>
              <div className="mt-5 space-y-3 text-sm">
                <p className="font-mono text-[12px] text-text-3">Calling the studio&hellip;</p>
                <p className="text-text-2">Kris is on the line. Tap to speak.</p>
                <div className="flex items-center gap-3 rounded-[10px] border border-live/30 bg-live/8 p-3">
                  <span className="pulse-live h-2.5 w-2.5 rounded-full bg-live" aria-hidden="true" />
                  <span className="font-semibold text-live">You are live on air</span>
                  <span className="ml-auto flex items-end gap-[3px] h-4" aria-hidden="true">
                    {[0, 0.2, 0.35, 0.12, 0.28].map((d, i) => (
                      <span
                        key={i}
                        className="eq-bar w-[3px] rounded-full bg-live"
                        style={{ height: "100%", animationDelay: `${d}s` }}
                      />
                    ))}
                  </span>
                </div>
                <p className="font-mono text-[12px] text-text-3">
                  Call ended. Back to the music.
                </p>
              </div>
              <p className="mt-5 text-sm text-text-2">
                A real conversation: you speak, the host answers on air, and can
                look up live facts mid-call. Scores, weather, prices, receipts.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-14 text-center">
          <p className="mx-auto max-w-xl text-lg text-text-2">
            Your favorite artist will never call you back.
            <span className="text-text font-medium"> Your hosts pick up mid-song.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
