import { For } from "solid-js";
import { Reveal } from "./Reveal";

const LANGS = [
  "English", "Eesti", "Español", "Français", "Deutsch", "Italiano", "Português",
  "Polski", "Nederlands", "Русский", "Українська", "Čeština", "Slovenčina",
  "Hrvatski", "Română", "Български", "Magyar", "Ελληνικά", "Suomi", "Svenska",
  "Dansk", "Norsk", "Türkçe", "العربية", "עברית", "हिन्दी", "தமிழ்", "日本語",
  "한국어", "中文", "Bahasa Melayu",
];

export function Languages() {
  return (
    <section class="border-y border-white/5 py-16 overflow-hidden">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal class="text-center">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tighter">
            Hosts fluent in 31 languages.
          </h2>
          <p class="mt-3 text-text-2">Made in Estonia. At home anywhere.</p>
        </Reveal>
      </div>
      <div class="relative mt-10" role="group" aria-label="Supported languages">
        <div class="marquee-track flex w-max gap-3 px-3">
          <For each={[...LANGS, ...LANGS]}>
            {(l, i) => (
              <span
                aria-hidden={i() >= LANGS.length}
                class="whitespace-nowrap rounded-full border border-white/8 bg-white/4 px-4 py-1.5 text-sm text-text-2"
              >
                {l}
              </span>
            )}
          </For>
        </div>
        <div
          class="pointer-events-none absolute inset-y-0 left-0 w-24"
          style="background: linear-gradient(90deg, var(--bg), transparent);"
          aria-hidden="true"
        />
        <div
          class="pointer-events-none absolute inset-y-0 right-0 w-24"
          style="background: linear-gradient(270deg, var(--bg), transparent);"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
