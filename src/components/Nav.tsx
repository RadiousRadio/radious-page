import { DISCORD, WAITLIST_URL } from "~/lib/site";
import { appUrl, APP } from "~/lib/track";

export function Nav() {
  return (
    <header class="fixed top-0 inset-x-0 z-50">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <nav
          class="mt-3 flex h-16 items-center justify-between rounded-2xl border border-white/8 px-4 sm:px-5"
          style="background: rgba(13,18,32,0.85); backdrop-filter: saturate(180%) blur(8px); -webkit-backdrop-filter: saturate(180%) blur(8px);"
        >
          <a href="/" class="flex items-center gap-3" aria-label="Radious home">
            <img src="/radious-logo.png" alt="" width="34" height="44" />
            <span class="hidden xs:inline text-[19px] font-semibold tracking-tight">Radious</span>
          </a>
          <div class="hidden md:flex items-center gap-7 text-sm text-text-2">
            <a href="/#two-way" class="hover:text-text transition-colors">How it works</a>
            <a href="/#beta" class="hover:text-text transition-colors">Beta</a>
            <a href="/#pricing" class="hover:text-text transition-colors">Pricing</a>
            <a href="/#faq" class="hover:text-text transition-colors">FAQ</a>
          </div>
          <div class="flex items-center gap-2 sm:gap-3">
            {/* Discord replaces "Sign in" in the nav's secondary slot.
                At a 20-person beta the community is the product surface
                that keeps people: a returning listener signs in from the
                app, but a curious stranger who is not ready to make an
                account will still join a room. */}
            <a
              href={DISCORD}
              rel="noopener"
              class="cta-ghost hidden sm:inline-flex px-3.5 sm:px-4 py-2 text-sm"
              data-umami-event="discord-nav"
            >
              Join Beta
            </a>
            <a
              href={appUrl(WAITLIST_URL)}
              class="cta whitespace-nowrap px-3.5 sm:px-4 py-2 text-sm"
              data-umami-event="waitlist-nav"
            >
              Waitlist
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
