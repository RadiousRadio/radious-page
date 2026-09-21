import { createSignal, onCleanup, onMount, Show } from "solid-js";

/**
 * Play a real show, before signup.
 *
 * THE SINGLE HIGHEST-LEVERAGE ELEMENT ON THIS PAGE. Radious sells a
 * voice. Until this shipped, the only evidence a visitor had that the
 * hosts sound good was a screenshot of a player — which is the same
 * evidence a bad product would offer. Every competitor's failure mode
 * ("AI slop", "robot voice") is one a visitor will assume by default
 * unless they can hear otherwise in one click, without an account.
 *
 * It also gates the funnel honestly: someone who listens for 60 seconds
 * and then signs up is worth more than five who sign up on a promise and
 * never open the app again. Expect the click-through to signup to DROP
 * and the retention of those who do to rise. That trade is the whole
 * point at a 20-user beta.
 *
 * THE CLIP (`public/demo/sample-show.mp3`) is a real edition of the free
 * station, played the way the app plays it: the news jingle, the world-news
 * bulletin read by the station's hosts Kris and Michael (the pair in
 * Hosts.tsx) over the news bed, the station jingle, then the first five
 * seconds of a song from the Radious top 50. Mono MP3 at 96 kbps, about a
 * minute, under the ~1.1 MB it may cost next to the hero image.
 *
 * TO RE-MAKE IT: `bun run preview:free-radio` in radious-cron writes a fresh
 * bulletin, one MP3 per line, from the live pipeline; mix those with the
 * api's public/assets/promos jingle and bed, and keep the file name. When
 * the music changes, change `credit` in Hero.tsx with it — the track's
 * licence requires the attribution.
 *
 * If the file is missing or fails to decode, this renders nothing rather
 * than showing a broken control — a dead play button is worse than no
 * play button.
 *
 * (Notes like this one used to live in `public/demo/README.txt`, which was
 * served to the public internet at /demo/README.txt — naming an internal
 * source path to anyone who asked. They belong next to the code.)
 */
const SRC = "/demo/sample-show.mp3";

/** Attribution for the music in the clip, shown under the player: title,
 *  author, source and licence, each linked — what a CC licence asks for. */
type Credit = { work: string; href: string; licence: string; licenceHref: string };

export function DemoPlayer(props: { label?: string; credit?: Credit }) {
  const [playing, setPlaying] = createSignal(false);
  // Starts FALSE and is flipped only by a successful loadedmetadata.
  // The audio element itself is always mounted (hidden) so it can do
  // that probing; only the visible control waits for the verdict.
  const [ok, setOk] = createSignal(false);
  const [elapsed, setElapsed] = createSignal(0);
  const [total, setTotal] = createSignal(0);

  let audio: HTMLAudioElement | undefined;

  const fmt = (s: number) => {
    if (!Number.isFinite(s) || s <= 0) return "0:00";
    const m = Math.floor(s / 60);
    return `${m}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
  };

  const toggle = () => {
    if (!audio) return;
    if (audio.paused) {
      void audio.play().catch(() => setOk(false));
    } else {
      audio.pause();
    }
  };

  // The <audio> is prerendered, so the browser starts reading the clip's
  // metadata from the static HTML — and on a fast connection it has finished
  // before hydration attaches onLoadedMetadata below. That event then never
  // reaches us, `ok` stays false and the player never appears. So read the
  // element's state once we are mounted, as well as listening for it.
  onMount(() => {
    if (audio && !audio.error && audio.readyState >= 1 && Number.isFinite(audio.duration)) {
      setTotal(audio.duration);
      setOk(true);
    }
  });

  onCleanup(() => audio?.pause());

  return (
    <>
      <div
        class="mx-auto mt-6 flex max-w-md items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] py-2 pl-2 pr-5"
        classList={{ hidden: !ok() }}
      >
        <button
          type="button"
          onClick={toggle}
          class="flex size-11 shrink-0 items-center justify-center rounded-full text-[#14060a] transition-transform duration-200 hover:scale-105 active:scale-95"
          style="background: linear-gradient(135deg, var(--accent), #ff8a5a);"
          aria-label={playing() ? "Pause the sample show" : "Play the sample show"}
        >
          <Show
            when={playing()}
            fallback={
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.3-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14Z" />
              </svg>
            }
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M8 4h3v16H8zM13 4h3v16h-3z" />
            </svg>
          </Show>
        </button>

        <div class="min-w-0 flex-1 text-left">
          <p class="truncate text-[13px] font-medium text-text">
            {props.label ?? "Hear a real show"}
          </p>
          <div class="mt-1.5 flex items-center gap-2">
            <div class="h-[3px] flex-1 overflow-hidden rounded-full bg-white/10">
              <div
                class="h-full rounded-full transition-[width] duration-200"
                style={{
                  width: `${total() ? Math.min(100, (elapsed() / total()) * 100) : 0}%`,
                  background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
                }}
              />
            </div>
            <span class="shrink-0 font-mono text-[11px] tabular-nums text-text-3">
              {fmt(total() - elapsed())}
            </span>
          </div>
        </div>

      </div>
      <Show when={props.credit && ok()}>
        {/* The music's licence asks for this, and a visitor who liked the
            track should be able to find the artist. */}
        <p class="mx-auto mt-2 max-w-md text-center text-[11px] text-text-3">
          Music:{" "}
          <a
            href={props.credit?.href}
            rel="noopener"
            class="underline decoration-white/20 underline-offset-2 hover:text-text-2"
          >
            {props.credit?.work}
          </a>{" "}
          ·{" "}
          <a
            href={props.credit?.licenceHref}
            rel="license noopener"
            class="whitespace-nowrap underline decoration-white/20 underline-offset-2 hover:text-text-2"
          >
            {props.credit?.licence}
          </a>
        </p>
      </Show>

      <audio
          ref={audio}
          src={SRC}
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          onError={() => setOk(false)}
          onLoadedMetadata={(e) => {
            setTotal(e.currentTarget.duration);
            setOk(true);
          }}
          onTimeUpdate={(e) => setElapsed(e.currentTarget.currentTime)}
        />
    </>
  );
}
