import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://radious.ai";
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/terms/`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/privacy/`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
