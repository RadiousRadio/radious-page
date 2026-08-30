/**
 * Copy the prerendered 404 to where the host will actually look for it.
 *
 * SolidStart's static preset renders the catch-all route to
 * `.output/public/404/index.html` — a directory, which is right for a
 * clean URL like /404 and wrong for a not-found handler. Vercel (and
 * Netlify, and Cloudflare Pages, and GitHub Pages) look for a single
 * `404.html` at the output ROOT and serve nothing custom without it:
 * radious.ai returned Vercel's own `text/plain` NOT_FOUND with
 * x-vercel-error, not the designed page.
 *
 * A build step rather than a `vercel.json` route on purpose. Every static
 * host converges on this same filename, so a copied file keeps the site
 * portable — which matters here, since it has already moved once.
 *
 * Never fails the build. A missing 404 page is a worse-looking site, not
 * a broken one, and a deploy that dies over it would be the bigger fault.
 */
import { copyFile, access } from "node:fs/promises";
import { join } from "node:path";

const OUT = ".output/public";
const from = join(OUT, "404", "index.html");
const to = join(OUT, "404.html");

try {
  await access(from);
  await copyFile(from, to);
  console.log(`[emit-404] ${from} -> ${to}`);
} catch (err) {
  console.warn(
    `[emit-404] skipped: ${from} not found (${err.code ?? err.message}).`,
    "Is /404 still in the prerender routes in app.config.ts?",
  );
}
