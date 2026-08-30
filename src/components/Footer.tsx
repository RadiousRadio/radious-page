import { DISCORD, FACEBOOK, SUPPORT_EMAIL } from "~/lib/site";
import { appUrl, APP } from "~/lib/track";

export function Footer() {
  return (
    <footer class="border-t border-white/5">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <div class="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div class="flex items-center gap-2.5">
              <img src="/radious-logo.png" alt="" width="22" height="29" />
              <span class="text-[17px] font-semibold tracking-tight">Radious</span>
            </div>
            <p class="mt-4 max-w-[30ch] text-sm text-text-2 leading-relaxed">
              Most radio stations talk at you. Radious talks with you.
            </p>
            {/* THE ACCOUNTABILITY LINE.
                At twenty users the strongest thing a footer can say is
                that a human is on the other end — every free channel in
                the launch plan runs on that, and a visitor arriving
                from a Reddit comment is looking for exactly it.

                What carries the signal is the PROMISE, not a name: "a
                person reads it and answers" is the claim a support
                queue cannot make. So no name here, and the promise
                stays. Two earlier drafts are worth not going back to:
                one led with "one person", which is the bus factor and
                the single strongest objection to an indie product in a
                category where Huxe, Radiant and Dot all died; the other
                named the founder, which put a personal identity on
                every page as a default rather than a decision. */}
            <p class="mt-5 max-w-[34ch] text-sm text-text-3 leading-relaxed">
              Built in Tallinn, in the open.{" "}
              <a
                class="text-accent-2 hover:underline underline-offset-4"
                href={`mailto:${SUPPORT_EMAIL}`}
              >
                Write to us
              </a>{" "}
              &mdash; a person reads every message, and answers.
            </p>
          </div>
          <nav aria-label="Product">
            <p class="text-sm font-semibold">Product</p>
            <ul class="mt-4 space-y-2.5 text-sm text-text-2">
              <li><a class="hover:text-text transition-colors" href="/#two-way">How it works</a></li>
              <li><a class="hover:text-text transition-colors" href="/#beta">Founding beta</a></li>
              <li><a class="hover:text-text transition-colors" href="/#pricing">Pricing</a></li>
              <li><a class="hover:text-text transition-colors" href="/#faq">FAQ</a></li>
              <li><a class="hover:text-text transition-colors" href={appUrl(APP)}>Open the app</a></li>
            </ul>
          </nav>
          <nav aria-label="Community">
            <p class="text-sm font-semibold">Community</p>
            <ul class="mt-4 space-y-2.5 text-sm text-text-2">
              <li><a class="hover:text-text transition-colors" href={DISCORD} rel="noopener">Discord</a></li>
              <li><a class="hover:text-text transition-colors" href={FACEBOOK} rel="noopener">Facebook</a></li>
              <li><a class="hover:text-text transition-colors" href={`mailto:${SUPPORT_EMAIL}`}>Support</a></li>
            </ul>
          </nav>
          <nav aria-label="Legal">
            <p class="text-sm font-semibold">Legal</p>
            <ul class="mt-4 space-y-2.5 text-sm text-text-2">
              <li><a class="hover:text-text transition-colors" href="/terms">Terms &amp; Conditions</a></li>
              <li><a class="hover:text-text transition-colors" href="/privacy">Privacy Policy</a></li>
              {/* NO CATALOGUE CREDITS HERE — deliberately, and it is
                  not a compliance regression.

                  Neither licence is satisfied by a footer link. Audius's
                  Open Music License §1.5 requires, for commercial use,
                  the ARTIST NAME, a copyright notice, a notice
                  referring to the OML and a hyperlink TO THE TRACK.
                  Jamendo's ToS clause 4.1 requires artist credit,
                  Jamendo credit and a direct backlink from each track
                  to its jamendo.com page. Both obligations are
                  per-track and live in the PLAYER, in radious-web —
                  where they are still unbuilt.

                  So the footer links were a courtesy that looked like
                  compliance, which is worse than nothing: it invites
                  the belief that the box is ticked. Removing them also
                  keeps the marketing copy consistent, since the FAQ and
                  the mobile section now say "royalty-free third-party
                  catalogues" rather than naming suppliers.

                  The names remain in /terms and /privacy, which is the
                  correct place for a disclosure of who processes what.

                  ⚠️ BUILD ITEM before billing ships: per-track
                  attribution + permalinks in the player. Free beta with
                  no revenue is a defensible position under Jamendo's
                  non-commercial API terms; the day you charge, it is
                  not. */}
            </ul>
          </nav>
        </div>
        {/* Bottom bar. The live status badge sits here rather than in
            the Community column on purpose: it is a fixed 250px and the
            footer's 1fr columns are narrower than that at max-w-6xl, so
            in-column it would overflow on desktop. The bottom bar is
            full width, and a status badge beside the copyright is where
            people already look for one.

            `color-scheme: black` is deliberate and is NOT a typo for
            `dark`. The badge is an HTML document with a transparent
            background, so what shows behind its white text is the
            iframe's CANVAS — which this page cannot style and which the
            UA paints from the used color-scheme. This site sets
            `color-scheme: dark` on :root (app.css) and in a meta tag, and
            the iframe inherits it, at which point the canvas is painted
            opaque and the badge's white text vanishes into it.

            `black` is not one of the keywords the property accepts. The
            grammar tolerates unknown idents, so it parses, computes to
            "black", and selects no scheme at all — which is exactly the
            escape hatch wanted here: the inherited dark is overridden and
            the canvas stays transparent. Replacing it with any valid
            keyword re-breaks the badge.

            `title` is required for accessibility on any iframe (screen
            readers announce it; without one they read the URL).
            `loading="lazy"` keeps a third-party request off the
            critical path — it is below the fold on every viewport. */}
        <div class="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p class="text-sm text-text-3">
            &copy; 2026 Radious. Made in Estonia.
          </p>
          <iframe
            src="https://status.radious.ai/badge?theme=dark"
            width="250"
            height="30"
            title="Radious system status"
            loading="lazy"
            frameborder="0"
            scrolling="no"
            class="max-w-full"
            style="color-scheme: black;"
          />
        </div>
      </div>
    </footer>
  );
}
