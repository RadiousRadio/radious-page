import { PlayerPreview } from "./PlayerPreview";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 pt-24 pb-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <Reveal>
            <p className="inline-flex items-center rounded-full border border-white/10 bg-white/4 px-3 py-1 text-[12px] text-text-2">
              Live on the web · iOS coming soon
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.02]">
              Radio that <span className="accent-text">talks back</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-[46ch] text-lg text-text-2 leading-relaxed">
              Hire your hosts, hand them your news and your music, then call the
              studio and go live on air.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8">
              <a href="https://app.radious.ai" className="cta px-7 py-3.5 text-base">
                Create your radio
              </a>
            </div>
          </Reveal>
        </div>
        <div className="flex justify-center lg:justify-end">
          <PlayerPreview />
        </div>
      </div>
    </section>
  );
}
