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
    <section className="border-y border-white/5 py-16 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter">
            Hosts fluent in 31 languages.
          </h2>
          <p className="mt-3 text-text-2">Made in Estonia. At home anywhere.</p>
        </Reveal>
      </div>
      <div className="relative mt-10" aria-label="Supported languages">
        <div className="marquee-track flex w-max gap-3 px-3">
          {[...LANGS, ...LANGS].map((l, i) => (
            <span
              key={`${l}-${i}`}
              aria-hidden={i >= LANGS.length}
              className="whitespace-nowrap rounded-full border border-white/8 bg-white/4 px-4 py-1.5 text-sm text-text-2"
            >
              {l}
            </span>
          ))}
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-24"
          style={{ background: "linear-gradient(90deg, var(--bg), transparent)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-24"
          style={{ background: "linear-gradient(270deg, var(--bg), transparent)" }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
