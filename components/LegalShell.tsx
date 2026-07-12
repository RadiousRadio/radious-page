import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-3xl px-4 sm:px-6 pt-32 pb-24">
        <h1 className="text-4xl font-bold tracking-tighter">{title}</h1>
        <p className="mt-2 font-mono text-[12px] uppercase tracking-wider text-text-3">
          Last updated: {updated}
        </p>
        <div className="legal mt-8">{children}</div>
      </main>
      <Footer />
    </>
  );
}
