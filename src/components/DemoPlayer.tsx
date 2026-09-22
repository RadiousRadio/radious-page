import { createSignal, onCleanup, onMount, Show } from "solid-js";

/**
 * Play a real show, before signup — from the play button in the hero shot.
 *
 * THE SINGLE HIGHEST-LEVERAGE ELEMENT ON THIS PAGE. Radious sells a
 * voice. Until this shipped, the only evidence a visitor had that the
 * hosts sound good was a screenshot of a player — which is the same
 * evidence a bad product would offer. Every competitor's failure mode
 * ("AI slop", "robot voice") is one a visitor will assume by default
 * unless they can hear otherwise in one click, without an account.
 *
 * WHY IT LIVES ON THE SCREENSHOT. A separate audio pill below the
 * headline is one more control to notice, and it looks like a widget
 * bolted onto a marketing page. The shot already shows a play button, a
 * visitor's eye goes there anyway, and pressing the thing that looks
 * pressable is the whole affordance. So this IS that button: same size,
 * same place, same gradient as the app's own transport (radious-web
 * app.css `.rd-tbtn.play`), sitting exactly on top of the drawn one.
 * The picture underneath never changes — only the button does.
 *
 * THE GEOMETRY is measured off the source image rather than eyeballed:
 * the drawn button is 72px across, centred at (729.5, 572.5) in a
 * 1459x990 shot — 50% / 57.828%, diameter 4.935% of the image width.
 * Re-measure all three if public/screens/hero-app.webp is ever replaced.
 * The 34px floor in the CSS is for phones, where a faithful 4.935% would
 * be 16px: unhittable, and too small to read as a control.
 *
 * THE CLIP (`public/demo/sample-show.mp3`) is a real edition of the free
 * station, played the way the app plays it: the news jingle, the world-news
 * bulletin read by the station's hosts Kris and Michael (Sarah and Ethan,
 * the Fish "Official" voices named in Hosts.tsx) over the news bed, the
 * station jingle, then five seconds of a song from the Radious top 50.
 * Mono MP3 at 96 kbps, about 70 seconds, under the ~1.1 MB it may cost
 * next to the hero image.
 *
 * TO RE-MAKE IT: `scripts/build-sample-show.sh`, which documents what to
 * feed it — a fresh read from radious-cron's `preview:free-radio`, the
 * api's promos, and five seconds of music. It is a script rather than a
 * paragraph because of the LEVELS: out of the pipeline the read lands
 * around -28 LUFS against the song's -15, so a listener turns it up for
 * the news and is hit by the music. Every part is normalised to -16 LUFS
 * (EBU R128, the podcast/web convention) at -1.5 dBTP, in mono, which is
 * what ships. The clip measures -16.7 LUFS integrated, -1.6 dBTP, and the
 * four parts sit within 0.5 LU of each other.
 *
 * When the music changes, change MUSIC_CREDIT below with it — the licence
 * requires the attribution, and the track has to be one whose licence
 * permits this at all. Of the fifty on the production Radious top 50,
 * exactly one does.
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

/**
 * Attribution for the music in the clip: title, author, source and
 * licence, each linked — what a CC licence asks for. Rendered under the
 * screenshot by Hero.tsx.
 *
 * Audius states the licence as "Attribution-NoDerivs CC BY-ND" without a
 * version, so the link goes to the current (4.0) deed.
 */
export const MUSIC_CREDIT = {
  work: "“Underground - Tag” by Chris Gresswell, on Audius",
  href: "https://audius.co/ChrisGresswell/underground-tag",
  licence: "CC BY-ND",
  licenceHref: "https://creativecommons.org/licenses/by-nd/4.0/",
};

export function DemoPlayer() {
  const [playing, setPlaying] = createSignal(false);
  // Starts FALSE and is flipped only by a successful loadedmetadata.
  // The audio element itself is always mounted (hidden) so it can do
  // that probing; only the visible control waits for the verdict.
  const [ok, setOk] = createSignal(false);

  let audio: HTMLAudioElement | undefined;

  const toggle = () => {
    if (!audio) return;
    if (audio.paused) {
      // Once the clip has ended, play() rewinds on its own, so the same
      // button starts it again from the top.
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
      setOk(true);
    }
  });

  onCleanup(() => audio?.pause());

  return (
    <>
      <Show when={ok()}>
        <button
          type="button"
          onClick={toggle}
          class="hero-play"
          classList={{ playing: playing() }}
          aria-label={playing() ? "Pause the sample show" : "Play the sample show"}
          title={playing() ? "Pause" : "Play a real show"}
          data-umami-event={playing() ? "sample-pause" : "sample-play"}
        >
          <Show
            when={playing()}
            fallback={
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            }
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
            </svg>
          </Show>
        </button>
      </Show>

      <audio
        ref={audio}
        src={SRC}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onError={() => setOk(false)}
        onLoadedMetadata={() => setOk(true)}
      />
    </>
  );
}
