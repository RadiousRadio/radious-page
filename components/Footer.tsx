import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Image src="/radious-logo.png" alt="" width={22} height={29} />
              <span className="text-[17px] font-semibold tracking-tight">Radious</span>
            </div>
            <p className="mt-4 max-w-[30ch] text-sm text-text-2 leading-relaxed">
              Most radio talks at you. Radious talks with you.
            </p>
          </div>
          <nav aria-label="Product">
            <p className="text-sm font-semibold">Product</p>
            <ul className="mt-4 space-y-2.5 text-sm text-text-2">
              <li><a className="hover:text-text transition-colors" href="/#two-way">How it works</a></li>
              <li><a className="hover:text-text transition-colors" href="/#pricing">Pricing</a></li>
              <li><a className="hover:text-text transition-colors" href="/#faq">FAQ</a></li>
              <li><a className="hover:text-text transition-colors" href="https://app.radious.ai">Open the app</a></li>
            </ul>
          </nav>
          <nav aria-label="Company">
            <p className="text-sm font-semibold">Company</p>
            <ul className="mt-4 space-y-2.5 text-sm text-text-2">
              <li><a className="hover:text-text transition-colors" href="https://status.radious.ai">System status</a></li>
              <li><a className="hover:text-text transition-colors" href="mailto:support@radious.ai">Contact</a></li>
            </ul>
          </nav>
          <nav aria-label="Legal">
            <p className="text-sm font-semibold">Legal</p>
            <ul className="mt-4 space-y-2.5 text-sm text-text-2">
              <li><Link className="hover:text-text transition-colors" href="/terms/">Terms &amp; Conditions</Link></li>
              <li><Link className="hover:text-text transition-colors" href="/privacy/">Privacy Policy</Link></li>
            </ul>
          </nav>
        </div>
        <p className="mt-12 text-sm text-text-3">
          &copy; 2026 Radious. Made in Estonia.
        </p>
      </div>
    </footer>
  );
}
