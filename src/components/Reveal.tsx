import { onCleanup, onMount, type JSX } from "solid-js";

/**
 * Scroll-in reveal. Elements start hidden (only when JS is available,
 * see html.js rules in app.css) and fade/slide in when 25% visible.
 * `delay` is in seconds, matching the old Motion-based API.
 */
export function Reveal(props: {
  children: JSX.Element;
  delay?: number;
  class?: string;
}) {
  let el: HTMLDivElement | undefined;

  onMount(() => {
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.classList.add("reveal-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el!.classList.add("reveal-visible");
            io.disconnect();
          }
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    onCleanup(() => io.disconnect());
  });

  return (
    <div
      ref={el}
      class={`reveal ${props.class ?? ""}`}
      style={{ "transition-delay": `${props.delay ?? 0}s` }}
    >
      {props.children}
    </div>
  );
}
