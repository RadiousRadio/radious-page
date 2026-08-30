import type { JSX } from "solid-js";
import { Link, Meta, Title } from "@solidjs/meta";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

const SITE = "https://radious.ai";

/**
 * Shared chrome AND head for the legal pages.
 *
 * The head lived in the routes and covered only title, description and
 * canonical — so both pages unfurled as a bare grey link everywhere
 * they get pasted. Centralising it here means neither page can drift
 * out of sync again, and a third legal page inherits it for free.
 */
export function LegalShell(props: {
  title: string;
  updated: string;
  /** ISO 8601 form of `updated`, for <time datetime>. */
  updatedIso: string;
  /** Path without a leading slash, e.g. "privacy". */
  slug: string;
  description: string;
  children: JSX.Element;
}) {
  const url = () => `${SITE}/${props.slug}`;

  const breadcrumbJsonLd = () => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Radious", item: SITE },
      { "@type": "ListItem", position: 2, name: props.title, item: url() },
    ],
  });

  return (
    <>
      <Title>{`${props.title} | Radious`}</Title>
      <Meta name="description" content={props.description} />
      <Link rel="canonical" href={url()} />
      {/* Legal pages should be indexable — they are a trust signal and
          people do search for them — but they must never outrank the
          home page for the brand name, which is what the snippet cap
          is for. */}
      <Meta name="robots" content="index, follow, max-snippet:120" />
      <Meta property="og:type" content="article" />
      <Meta property="og:url" content={url()} />
      <Meta property="og:site_name" content="Radious" />
      <Meta property="og:locale" content="en_GB" />
      <Meta property="og:title" content={`${props.title} | Radious`} />
      <Meta property="og:description" content={props.description} />
      <Meta property="og:image" content={`${SITE}/og.png`} />
      <Meta property="og:image:width" content="1200" />
      <Meta property="og:image:height" content="630" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content={`${props.title} | Radious`} />
      <Meta name="twitter:description" content={props.description} />
      <Meta name="twitter:image" content={`${SITE}/og.png`} />
      <script
        type="application/ld+json"
        innerHTML={JSON.stringify(breadcrumbJsonLd())}
      />

      <Nav />
      <main class="mx-auto w-full max-w-3xl px-4 sm:px-6 pt-32 pb-24">
        <h1 class="text-4xl font-bold tracking-tighter">{props.title}</h1>
        {/* <time> with a machine-readable datetime is what lets a
            crawler treat "last updated" as a date rather than prose. */}
        <p class="mt-2 font-mono text-[12px] uppercase tracking-wider text-text-3">
          Last updated: <time datetime={props.updatedIso}>{props.updated}</time>
        </p>
        <div class="legal mt-8">{props.children}</div>
      </main>
      <Footer />
    </>
  );
}
