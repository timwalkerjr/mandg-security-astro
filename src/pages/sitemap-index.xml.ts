import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { serviceDetails } from "@/data/services";
import { SITE, abs } from "@/lib/seo";

// Manual XML sitemap. Lists every indexable route (excludes noindex utility
// pages: /style-guide, /about-this-site, /404). twc-publish articles are
// pulled from the content collection so new posts appear automatically.
export const GET: APIRoute = async () => {
  const staticPaths = [
    "/",
    "/security-services",
    "/about-us",
    "/photo-gallery",
    "/contact-us",
    "/employment-opportunities",
    "/articles",
    "/sitemap",
  ];
  const servicePaths = serviceDetails.map((s) => `/security-services/${s.slug}`);
  const articles = await getCollection("articles", ({ data }) => !data.draft);
  const articlePaths = articles.map((a) => `/articles/${a.slug}`);

  const urls = [...staticPaths, ...servicePaths, ...articlePaths];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${abs(u)}</loc></url>`).join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
};

// Referenced so the import isn't tree-shaken in some setups.
void SITE;
