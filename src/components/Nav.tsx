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
            <a href="/#pricing" class="hover:text-text transition-colors">Pricing</a>
            <a href="/#faq" class="hover:text-text transition-colors">FAQ</a>
          </div>
          <div class="flex items-center gap-2 sm:gap-3">
            <a href="https://app.radious.ai" class="cta-ghost px-3.5 sm:px-4 py-2 text-sm">
              Sign in
            </a>
            <a href="https://app.radious.ai" class="cta whitespace-nowrap px-3.5 sm:px-4 py-2 text-sm">
              Create your radio
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
