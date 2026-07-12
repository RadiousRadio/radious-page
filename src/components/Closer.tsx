import { Reveal } from "./Reveal";

export function Closer() {
  return (
    <section class="relative overflow-hidden py-28 sm:py-36">
      <div
        class="pointer-events-none absolute inset-0 -z-10"
        style="background: radial-gradient(70% 80% at 50% 110%, rgba(255,107,53,0.16) 0%, transparent 65%);"
        aria-hidden="true"
      />
      <div class="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <Reveal>
          <img
            src="/radious-icon.png"
            alt=""
            width="88"
            height="88"
            class="mx-auto rounded-[22px] shadow-[0_30px_80px_-20px_rgba(255,107,53,0.5)]"
            aria-hidden="true"
          />
        </Reveal>
        <Reveal delay={0.08}>
          <h2 class="mt-8 text-4xl sm:text-5xl font-bold tracking-tighter leading-[1.05]">
            Right now, someone&rsquo;s hosts are greeting them by name.
          </h2>
          <p class="mt-4 text-lg text-text-2">
            Yours are still waiting to learn it.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <div class="mt-9">
            <a href="https://app.radious.ai" class="cta px-8 py-4 text-base">
              Create your radio
            </a>
          </div>
          <p class="mt-4 text-sm text-text-3">
            3 shows and 1 on-air message, free. The iOS app is coming soon.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
