import { Link, Meta, Title } from "@solidjs/meta";
import { Nav } from "~/components/Nav";
import { Hero } from "~/components/Hero";
import { TwoWay } from "~/components/TwoWay";
import { Hosts } from "~/components/Hosts";
import { DayBento } from "~/components/DayBento";
import { MobileShowcase } from "~/components/MobileShowcase";
import { Languages } from "~/components/Languages";
import { Beta } from "~/components/Beta";
import { Pricing } from "~/components/Pricing";
import { FAQ } from "~/components/FAQ";
import { Closer } from "~/components/Closer";
import { Footer } from "~/components/Footer";
import { DISCORD, FACEBOOK, SUPPORT_EMAIL } from "~/lib/site";

const SITE = "https://radious.ai";

/**
 * META COPY — written for the places it will actually be read.
 *
 * Almost none of the first thousand visitors will arrive from a search
 * result. They will arrive from a Reddit comment, a Discord paste, a
 * WhatsApp forward and a trade-press link — every one of which renders
 * the OG card, not the meta description. So the OG copy leads with the
 * one line that is unclaimed in this category (a studio that picks up)
 * and the description carries the concrete nouns for search.
 *
 * Deliberately dropped: "personalized AI radio station", which is the
 * exact string radio69.ai, musen and the late Radiant all used. Ranking
 * for a phrase your dead competitors owned is not a win.
 */
const DESCRIPTION =
  "Your own radio station, with hosts you hire and name. They read your news, your calendar and your weather between your songs — and when you call into the studio, they answer you live on air. 31 languages. Free during the founding beta.";
const OG_DESCRIPTION =
  "Hire your hosts. Feed them your news and music. Then call into the studio and go live on air, mid-song. Free during the founding beta.";

/**
 * STRUCTURED DATA
 *
 * Three graphs, each doing a different job:
 *
 *   Organization  — who is behind this. Feeds the knowledge panel and,
 *                   more usefully today, gives an assistant something
 *                   authoritative to cite when asked "who makes it".
 *   WebSite       — binds the name to the domain and disambiguates
 *                   "Radious" from anything else spelled similarly.
 *   SoftwareApplication — what it does, in what languages, at what
 *                   price. This is the one that gets read.
 *
 * Deliberately ABSENT: aggregateRating and review. There are no
 * ratings yet. Inventing them is both a Google structured-data
 * violation and the fastest way to lose rich results permanently once
 * a manual action lands. Add them when they are real.
 */
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE}/#organization`,
  name: "Radious",
  url: SITE,
  logo: {
    "@type": "ImageObject",
    url: `${SITE}/icon-512.png`,
    width: 512,
    height: 512,
  },
  description:
    "Radious builds personal AI radio stations: listeners hire their own hosts, feed them their news, calendar and music, and can message or call the studio to be answered live on air.",
  // foundingLocation expects a Place, not a string. A bare string is
  // silently dropped by Google's parser — it was there and doing
  // nothing.
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tallinn",
      addressCountry: "EE",
    },
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: SUPPORT_EMAIL,
    availableLanguage: ["English", "Estonian"],
  },
  // sameAs is how an entity gets linked across the web. Add every
  // profile as it goes live — the Discord invite, and any X/GitHub/
  // LinkedIn presence. An empty sameAs is a missed connection, not a
  // neutral one.
  sameAs: [DISCORD, FACEBOOK].filter((u) => !u.includes("REPLACE-ME")),
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  url: SITE,
  name: "Radious",
  inLanguage: "en",
  publisher: { "@id": `${SITE}/#organization` },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE}/#app`,
  name: "Radious",
  applicationCategory: "EntertainmentApplication",
  applicationSubCategory: "Internet radio",
  operatingSystem: "Web browser, iOS (in development)",
  url: "https://app.radious.ai",
  installUrl: "https://app.radious.ai",
  screenshot: `${SITE}/screens/hero-app.webp`,
  publisher: { "@id": `${SITE}/#organization` },
  description:
    "A radio station you assemble yourself: hosts you hire and name, your own news feeds, calendar and weather between your music — and they answer the messages you send the studio, live on air. 31 languages.",
  // Every language the hosts actually speak. Worth listing in full:
  // it is the single most concrete, checkable fact about the product,
  // and it is what makes Radious a plausible answer to "AI radio in
  // Portuguese" — a query no competitor's markup claims.
  inLanguage: [
    "en", "et", "es", "fr", "de", "it", "pt", "pl", "nl", "ru", "uk",
    "cs", "sk", "hr", "ro", "bg", "hu", "el", "fi", "sv", "da", "nb",
    "tr", "ar", "he", "hi", "ta", "ja", "ko", "zh", "ms",
  ],
  featureList: [
    "Hire and name one to three AI radio hosts",
    "Choose each host's voice and personality",
    "Your own RSS and Google News feeds, in your priority order",
    "Weather for your city, read on air",
    "Google Calendar mentions, read-only",
    "Text the studio and hear your message answered on air",
    "Call into the studio and talk to a host live, mid-show",
    "Mini-explainers on topics you choose",
    "31 languages",
    "Lock-screen playback with cover art",
  ],
  offers: [
    {
      "@type": "Offer",
      name: "Founding beta",
      price: "0",
      priceCurrency: "EUR",
      availability: "https://schema.org/LimitedAvailability",
      url: `${SITE}/#beta`,
    },
    {
      "@type": "Offer",
      name: "Starter",
      price: "3.99",
      priceCurrency: "EUR",
      availability: "https://schema.org/PreOrder",
      url: `${SITE}/#pricing`,
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "7.99",
      priceCurrency: "EUR",
      availability: "https://schema.org/PreOrder",
      url: `${SITE}/#pricing`,
    },
    {
      "@type": "Offer",
      name: "Ultra",
      price: "50.00",
      priceCurrency: "EUR",
      availability: "https://schema.org/PreOrder",
      url: `${SITE}/#pricing`,
    },
  ],
};

export default function Home() {
  return (
    <>
      <Title>Radious | The radio station that picks up</Title>
      <Meta name="description" content={DESCRIPTION} />
      <Link rel="canonical" href={`${SITE}/`} />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content={SITE} />
      <Meta property="og:site_name" content="Radious" />
      {/* Without og:locale some scrapers guess, and a wrong guess can
          suppress the preview entirely on non-English clients. */}
      <Meta property="og:locale" content="en_GB" />
      <Meta property="og:title" content="Radious | The radio station that picks up" />
      <Meta property="og:description" content={OG_DESCRIPTION} />
      <Meta property="og:image" content={`${SITE}/og.png`} />
      <Meta property="og:image:width" content="1200" />
      <Meta property="og:image:height" content="630" />
      <Meta property="og:image:alt" content="Radious: a personal radio station whose hosts answer your messages on air" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Radious | The radio station that picks up" />
      <Meta name="twitter:description" content={OG_DESCRIPTION} />
      <Meta name="twitter:image" content={`${SITE}/og.png`} />
      <Meta name="twitter:image:alt" content="Radious: a personal radio station whose hosts answer your messages on air" />
      {/* Robots directives worth being explicit about: max-image-preview
          large is what turns a text result into one with the OG image
          beside it, and it is OFF unless you ask. */}
      <Meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <Meta name="author" content="Radious" />
      <Meta name="application-name" content="Radious" />
      <script type="application/ld+json" innerHTML={JSON.stringify(orgJsonLd)} />
      <script type="application/ld+json" innerHTML={JSON.stringify(siteJsonLd)} />
      <script type="application/ld+json" innerHTML={JSON.stringify(appJsonLd)} />
      <Nav />
      <main>
        <Hero />
        <TwoWay />
        <Hosts />
        <DayBento />
        <MobileShowcase />
        <Languages />
        {/* Beta sits ABOVE pricing on purpose: right now the page's job
            is to recruit a cohort, and a price table asked first invites
            a question the product is not yet ready to win. */}
        <Beta />
        <Pricing />
        <FAQ />
        <Closer />
      </main>
      <Footer />
    </>
  );
}
