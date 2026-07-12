import { Link, Meta, Title } from "@solidjs/meta";
import { Nav } from "~/components/Nav";
import { Hero } from "~/components/Hero";
import { TwoWay } from "~/components/TwoWay";
import { Hosts } from "~/components/Hosts";
import { DayBento } from "~/components/DayBento";
import { MobileShowcase } from "~/components/MobileShowcase";
import { Languages } from "~/components/Languages";
import { Pricing } from "~/components/Pricing";
import { FAQ } from "~/components/FAQ";
import { Closer } from "~/components/Closer";
import { Footer } from "~/components/Footer";

const SITE = "https://radious.ai";
const DESCRIPTION =
  "Create your own AI radio station. Hire hosts, feed them your news and music, text them on air, even call the studio live. Free trial: 3 shows and 1 message.";
const OG_DESCRIPTION =
  "Your own AI radio station: hosts you hire, news in your order, music you choose. Text them, call in, go live on air.";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Radious",
  url: SITE,
  logo: `${SITE}/icon-512.png`,
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Radious",
  applicationCategory: "EntertainmentApplication",
  operatingSystem: "Web",
  url: "https://app.radious.ai",
  description:
    "Personal AI radio station with hosts you can text and call live on air. Your music, your news, 31 languages.",
  offers: [
    { "@type": "Offer", name: "Starter", price: "3.99", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Pro", price: "7.99", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Ultra", price: "50.00", priceCurrency: "EUR" },
  ],
};

export default function Home() {
  return (
    <>
      <Title>Radious | AI radio with hosts you can talk to</Title>
      <Meta name="description" content={DESCRIPTION} />
      <Link rel="canonical" href={`${SITE}/`} />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content={SITE} />
      <Meta property="og:site_name" content="Radious" />
      <Meta property="og:title" content="Radious | Radio that talks back" />
      <Meta property="og:description" content={OG_DESCRIPTION} />
      <Meta property="og:image" content={`${SITE}/og.png`} />
      <Meta property="og:image:width" content="1200" />
      <Meta property="og:image:height" content="630" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Radious | Radio that talks back" />
      <Meta name="twitter:description" content={OG_DESCRIPTION} />
      <Meta name="twitter:image" content={`${SITE}/og.png`} />
      <script type="application/ld+json" innerHTML={JSON.stringify(orgJsonLd)} />
      <script type="application/ld+json" innerHTML={JSON.stringify(appJsonLd)} />

      <Nav />
      <main>
        <Hero />
        <TwoWay />
        <Hosts />
        <DayBento />
        <MobileShowcase />
        <Languages />
        <Pricing />
        <FAQ />
        <Closer />
      </main>
      <Footer />
    </>
  );
}
