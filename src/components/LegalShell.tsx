import type { JSX } from "solid-js";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function LegalShell(props: {
  title: string;
  updated: string;
  children: JSX.Element;
}) {
  return (
    <>
      <Nav />
      <main class="mx-auto w-full max-w-3xl px-4 sm:px-6 pt-32 pb-24">
        <h1 class="text-4xl font-bold tracking-tighter">{props.title}</h1>
        <p class="mt-2 font-mono text-[12px] uppercase tracking-wider text-text-3">
          Last updated: {props.updated}
        </p>
        <div class="legal mt-8">{props.children}</div>
      </main>
      <Footer />
    </>
  );
}
