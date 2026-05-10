import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const blogs = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    publishedAt: z.coerce.date(),
    description: z.string()
  })
})

export const collections = { blogs }