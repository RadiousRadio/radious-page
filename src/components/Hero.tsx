import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section class="relative overflow-hidden pt-32 sm:pt-36 pb-20 sm:pb-28">
      {/* Broadcast backdrop: a living aurora plus radio-wave rings that
          radiate outward, the literal meaning of "Radious". Sits at -z-1
          so it paints ABOVE the fixed opaque .rd-ambient layer (-z-2)
          but behind the hero content. */}
      <div class="absolute inset-0 -z-[1] overflow-hidden" aria-hidden="true">
        <div
          class="hero-blob hero-blob-a"
          style="width: 42rem; height: 42rem; left: -14rem; top: -10rem; background: rgba(255,107,53,0.18);"
        />
        <div
          class="hero-blob hero-blob-b"
          style="width: 36rem; height: 36rem; right: -12rem; top: 2rem; background: rgba(74,158,255,0.15);"
        />
        <div
          class="hero-blob hero-blob-c"
          style="width: 30rem; height: 30rem; left: 30%; top: 30%; background: rgba(255,90,50,0.10);"
        />
        <div class="hero-rings">
          <span class="hero-ring" />
          <span class="hero-ring" />
          <span class="hero-ring" />
          <span class="hero-ring" />
          <span class="hero-ring" />
        </div>
      </div>

      <div class="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div class="mx-auto max-w-3xl text-center">
          <Reveal>
            <p class="inline-flex items-center rounded-full border border-white/10 bg-white/4 px-3 py-1 text-[12px] text-text-2">
              Live on the web · iOS coming soon
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 class="mt-5 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.02]">
              Radio that <span class="accent-text">talks back</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p class="mx-auto mt-5 max-w-[46ch] text-lg text-text-2 leading-relaxed">
              Hire your hosts, hand them your news and your music, then call
              the studio and go live on air.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div class="mt-8">
              <a href="https://app.radious.ai" class="cta px-7 py-3.5 text-base">
                Create your radio
              </a>
            </div>
          </Reveal>
        </div>

        {/* the real studio, captured from a live show */}
        <Reveal delay={0.2} class="mt-14 sm:mt-16">
          <div class="hero-float relative mx-auto max-w-5xl">
            <div
              class="pointer-events-none absolute -inset-8 -z-10"
              style="background: radial-gradient(60% 60% at 50% 40%, rgba(255,107,53,0.14) 0%, transparent 70%);"
              aria-hidden="true"
            />
            <div class="glass overflow-hidden p-1.5 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]">
              <img
                src="/screens/hero-app.webp"
                alt="The Radious studio live on air: hosts reading the news and weather while music plays"
                width="2400"
                height="1500"
                class="w-full rounded-[11px]"
                loading="eager"
                fetchpriority="high"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
