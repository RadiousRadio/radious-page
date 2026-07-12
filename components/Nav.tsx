import Image from "next/image";
import Link from "next/link";

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav
          className="mt-3 flex h-14 items-center justify-between rounded-2xl border border-white/8 px-4 sm:px-5"
          style={{ background: "rgba(13,18,32,0.85)", backdropFilter: "saturate(180%) blur(8px)", WebkitBackdropFilter: "saturate(180%) blur(8px)" }}
        >
          <Link href="/" className="flex items-center gap-2.5" aria-label="Radious home">
            <Image src="/radious-logo.png" alt="" width={22} height={29} priority />
            <span className="text-[17px] font-semibold tracking-tight">Radious</span>
          </Link>
          <div className="hidden md:flex items-center gap-7 text-sm text-text-2">
            <a href="/#two-way" className="hover:text-text transition-colors">How it works</a>
            <a href="/#pricing" className="hover:text-text transition-colors">Pricing</a>
            <a href="/#faq" className="hover:text-text transition-colors">FAQ</a>
          </div>
          <a href="https://app.radious.ai" className="cta px-4 py-2 text-sm">
            Create your radio
          </a>
        </nav>
      </div>
    </header>
  );
}
