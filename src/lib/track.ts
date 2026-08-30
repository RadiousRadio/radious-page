/**
 * Attribution pass-through. No vendor, no cookie, no consent banner.
 *
 * WHY THIS EXISTS
 * The landing page had no analytics of any kind, which meant a launch
 * spent entirely on unpaid channels — Reddit, Discord, forums, press —
 * could not answer the only question that matters at 20 users: *which
 * post produced the people who actually listened?*
 *
 * Page-view analytics alone cannot answer it either, because the
 * conversion happens on a DIFFERENT ORIGIN (app.radious.ai) behind a
 * Clerk signup. So instead of measuring visits, this carries the source
 * ACROSS the hop: whatever `?src=` (or utm_*) the visitor arrived with is
 * stashed for the session and re-appended to every app link they click.
 * The app can then stamp it on the user row at signup, and every
 * question about channel quality becomes a SQL query against real
 * listeners rather than a guess against pageviews.
 *
 * Tag every link you post, e.g.
 *   radious.ai/?src=reddit-sideproject
 *   radious.ai/?src=radiotoday
 *   radious.ai/?src=hba-newsletter
 * Keep the slugs short, lowercase and hyphenated — you will be reading
 * them in a GROUP BY.
 */

/** Re-exported so a component needs one import for "the app link
 *  and the attribution that rides on it", not two. */
export { APP } from "./site";

const KEY = "rd_src";
const PARAMS = ["src", "utm_source", "utm_medium", "utm_campaign", "ref"];

/** Read the stored attribution, if any. Safe on the server and in
 *  private modes where storage throws on access. */
function stored(): string | null {
  try {
    return globalThis.sessionStorage?.getItem(KEY) ?? null;
  } catch {
    return null;
  }
}

/**
 * Capture attribution from the current URL, once per session. First
 * touch wins: someone who arrives from Reddit and later returns via a
 * direct link should still count as Reddit's.
 */
export function captureSource(): void {
  if (typeof window === "undefined") return;
  if (stored()) return;
  try {
    const q = new URLSearchParams(window.location.search);
    for (const p of PARAMS) {
      const v = q.get(p);
      if (v) {
        sessionStorage.setItem(KEY, v.slice(0, 64));
        return;
      }
    }
    // No tag at all still tells you something: it separates "found us
    // some other way" from every channel you deliberately tagged.
    const ref = document.referrer;
    if (ref && !ref.includes("radious.ai")) {
      sessionStorage.setItem(KEY, `ref:${new URL(ref).hostname}`.slice(0, 64));
    }
  } catch {
    /* storage blocked — attribution is a nice-to-have, never a blocker */
  }
}

/**
 * An app.radious.ai URL carrying this visitor's source.
 *
 * Called during SSR too (the prerender emits the bare URL), so it must
 * degrade to the plain link rather than throwing. The client then
 * rewrites the href on mount — see `enhanceAppLinks`.
 */
export function appUrl(base: string, extra?: Record<string, string>): string {
  const src = stored();
  if (!src && !extra) return base;
  const u = new URL(base);
  if (src) u.searchParams.set("src", src);
  for (const [k, v] of Object.entries(extra ?? {})) u.searchParams.set(k, v);
  return u.toString();
}

/**
 * Rewrite every app link on the page with the captured source.
 *
 * Done as a post-hydration DOM pass rather than per-component state
 * because the page is statically prerendered: the HTML ships from a CDN
 * with no knowledge of the visitor, and re-rendering every CTA through a
 * signal just to add one query param would trade a genuinely static page
 * for a reactive one. One querySelectorAll on mount is cheaper and
 * cannot desync.
 */
export function enhanceAppLinks(): void {
  if (typeof document === "undefined") return;
  const src = stored();
  if (!src) return;
  // Both hosts, not just the app. The waitlist now lives on
  // app.radious.ai so that is where the majority of clicks land, but
  // accounts.radious.ai stays in the selector: sign-in can still route
  // there, and an untagged signup is a signup you cannot attribute to
  // the post that produced it — which is the entire question this file
  // exists to answer.
  for (const a of document.querySelectorAll<HTMLAnchorElement>(
    'a[href^="https://app.radious.ai"], a[href^="https://accounts.radious.ai"]',
  )) {
    try {
      const u = new URL(a.href);
      if (!u.searchParams.has("src")) {
        u.searchParams.set("src", src);
        a.href = u.toString();
      }
    } catch {
      /* malformed href — leave it alone */
    }
  }
}
