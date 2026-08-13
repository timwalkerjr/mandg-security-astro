import { defineCollection, z } from "astro:content";

// Articles collection — the twc-publish drip target.
// twc-publish appends MDX files here; each carries this frontmatter. The
// optional `jsonLd` lets the publishing app own/override the Article schema
// (app-owns-JSON-LD), otherwise the route builds Article schema from these
// fields automatically.
const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    author: z.string().default("M&G Security"),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    jsonLd: z.record(z.any()).optional(),
  }),
});

export const collections = { articles };
