import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE = "https://radious.ai";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Radious | AI radio with hosts you can talk to",
    template: "%s | Radious",
  },
  description:
    "Create your own AI radio station. Hire hosts, feed them your news and music, text them on air, even call the studio live. Free trial: 3 shows and 1 message.",
  keywords: [
    "AI radio",
    "personal radio station",
    "AI DJ",
    "AI hosts",
    "personalized news radio",
    "internet radio app",
    "talk to AI radio hosts",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Radious",
    title: "Radious | Radio that talks back",
    description:
      "Your own AI radio station: hosts you hire, news in your order, music you choose. Text them, call in, go live on air.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Radious, the AI radio that talks back" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Radious | Radio that talks back",
    description:
      "Your own AI radio station: hosts you hire, news in your order, music you choose. Text them, call in, go live on air.",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#070911",
  colorScheme: "dark",
};

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
        />
        <div className="rd-ambient" aria-hidden="true" />
        <div className="rd-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
