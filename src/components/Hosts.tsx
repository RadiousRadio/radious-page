import { For } from "solid-js";
import { Reveal } from "./Reveal";

const HOSTS = [
  {
    name: "Kris",
    voice: "Voice: Adrian · Official",
    style: "witty, a little sarcastic",
    grad: "linear-gradient(135deg, #ff6b35, #ffa875)",
  },
  {
    name: "Michael",
    voice: "Voice: Ethan · Official",
    style: "strictly professional",
    grad: "linear-gradient(135deg, #4a9eff, #7c5cff)",
  },
  {
    name: "Sam",
    voice: "Voice: Selene · Fish Audio library",
    style: "talks like a pirate",
    grad: "linear-gradient(135deg, #7c5cff, #4a9eff)",
  },
];

export function Hosts() {
  return (
    <section id="hosts" class="py-24 sm:py-32">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tighter">
            Hire your hosts.
          </h2>
          <p class="mt-4 max-w-[48ch] text-lg text-text-2 leading-relaxed">
            One to three DJs. Name them, pick their voices from thousands on
            Fish Audio, and set their personality in a single line.
          </p>
          <p class="mt-4 max-w-[48ch] text-text-2 leading-relaxed">
            They greet you by name, in your timezone, in any of 31 languages.
            Fire one anytime. They take it surprisingly well.
          </p>
        </Reveal>
        <div class="flex flex-col gap-4">
          <For each={HOSTS}>
            {(h, i) => (
              <Reveal delay={i() * 0.08}>
                <div class="glass flex items-center gap-4 p-4 sm:p-5">
                  <span
                    class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-lg font-bold text-[#14060a]"
                    style={{ background: h.grad }}
                    aria-hidden="true"
                  >
                    {h.name[0]}
                  </span>
                  <div class="min-w-0">
                    <p class="font-semibold">{h.name}</p>
                    <p class="font-mono text-[11px] uppercase tracking-wider text-text-3">
                      {h.voice}
                    </p>
                  </div>
                  <span class="ml-auto hidden sm:inline rounded-full border border-white/10 bg-white/4 px-3 py-1 text-xs text-text-2">
                    &ldquo;{h.style}&rdquo;
                  </span>
                </div>
              </Reveal>
            )}
          </For>
        </div>
      </div>
    </section>
  );
}
