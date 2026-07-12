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
              Most radio talks at you. Radious talks with you.
            </p>
          </div>
          <nav aria-label="Product">
            <p class="text-sm font-semibold">Product</p>
            <ul class="mt-4 space-y-2.5 text-sm text-text-2">
              <li><a class="hover:text-text transition-colors" href="/#two-way">How it works</a></li>
              <li><a class="hover:text-text transition-colors" href="/#pricing">Pricing</a></li>
              <li><a class="hover:text-text transition-colors" href="/#faq">FAQ</a></li>
              <li><a class="hover:text-text transition-colors" href="https://app.radious.ai">Open the app</a></li>
            </ul>
          </nav>
          <nav aria-label="Company">
            <p class="text-sm font-semibold">Company</p>
            <ul class="mt-4 space-y-2.5 text-sm text-text-2">
              <li><a class="hover:text-text transition-colors" href="https://status.radious.ai">System status</a></li>
              <li><a class="hover:text-text transition-colors" href="mailto:support@radious.ai">Contact</a></li>
            </ul>
          </nav>
          <nav aria-label="Legal">
            <p class="text-sm font-semibold">Legal</p>
            <ul class="mt-4 space-y-2.5 text-sm text-text-2">
              <li><a class="hover:text-text transition-colors" href="/terms">Terms &amp; Conditions</a></li>
              <li><a class="hover:text-text transition-colors" href="/privacy">Privacy Policy</a></li>
            </ul>
          </nav>
        </div>
        <p class="mt-12 text-sm text-text-3">
          &copy; 2026 Radious. Made in Estonia.
        </p>
      </div>
    </footer>
  );
}
