import type { JSX } from "solid-js";

/**
 * SSR-safe Phosphor icons.
 *
 * phosphor-solid's runtime calls a client-only Solid API at import time,
 * which crashes the static prerender. We only need three glyphs, so the
 * official Phosphor path geometry (MIT licensed) is inlined here in a
 * plain SVG wrapper. Paths are copied verbatim from phosphor-solid's
 * icon templates (fill weight for the filled marks, bold 24-stroke
 * polyline for Check).
 *
 * No prop destructuring and no attribute spread: both break Solid's
 * hydration for inline SVG (mismatched node trees between SSR + client).
 */

type IconProps = {
  size?: number;
  class?: string;
};

export function ChatCircleDots(props: IconProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width={props.size ?? 24}
      height={props.size ?? 24}
      fill="currentColor"
      class={props.class}
      aria-hidden="true"
    >
      <path d="M128.00146,24.00781A104.01819,104.01819,0,0,0,36.814,178.03906l-8.55468,29.90625a15.995,15.995,0,0,0,19.78125,19.78125l29.91406-8.53125a104.00785,104.00785,0,1,0,50.04687-195.1875ZM80.00049,140a12,12,0,1,1,12-12A12,12,0,0,1,80.00049,140Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,128.00049,140Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,176.00049,140Z" />
    </svg>
  );
}

export function Phone(props: IconProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width={props.size ?? 24}
      height={props.size ?? 24}
      fill="currentColor"
      class={props.class}
      aria-hidden="true"
    >
      <path d="M221.97168,158.42676l-46.83789-20.07324a15.95139,15.95139,0,0,0-15.17871,1.39453l-25.043,16.69336A76.54083,76.54083,0,0,1,99.707,121.3916l.00195-.00195,16.63477-25.418a15.96924,15.96924,0,0,0,1.32031-15.06641L97.57227,34.02734a16.02839,16.02839,0,0,0-16.65235-9.583A56.07029,56.07029,0,0,0,32,80c0,79.40234,64.59766,144,144,144a56.07032,56.07032,0,0,0,55.55566-48.9209A16.03476,16.03476,0,0,0,221.97168,158.42676Z" />
    </svg>
  );
}

export function Check(props: IconProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width={props.size ?? 24}
      height={props.size ?? 24}
      fill="none"
      class={props.class}
      aria-hidden="true"
    >
      <polyline
        points="216 72.005 104 184 48 128.005"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </svg>
  );
}
