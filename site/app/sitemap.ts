import { MetadataRoute } from "next";

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pjeon18.github.io/portfolio";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/resume/`, lastModified: new Date() },
  ];
}


