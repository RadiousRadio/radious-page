/* eslint-disable @next/next/no-img-element */
import { Reveal } from "./Reveal";

const LOGOS = [
  { src: "/logos/claude.svg", alt: "Claude by Anthropic" },
  { src: "/logos/elevenlabs.svg", alt: "ElevenLabs" },
  { src: "/logos/youtubemusic.svg", alt: "YouTube Music" },
  { src: "/logos/googlecalendar.svg", alt: "Google Calendar" },
];

export function PoweredBy() {
  return (
    <section className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <Reveal>
          <p className="text-center text-sm text-text-3">Built on</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {LOGOS.map((l) => (
              <img
                key={l.src}
                src={l.src}
                alt={l.alt}
                title={l.alt}
                className="h-7 w-auto opacity-50 transition-opacity hover:opacity-90"
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
