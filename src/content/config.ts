import { defineCollection, z } from "astro:content";

const blogTags = z.enum([
  "Life",
  "Computer Science",
  "Math",
  "Travel",
  "Economics",
  "Politics",
  "Programming Language",
  "Project",
  "Work",
  "Web",
  "Software Engineering",
  "Language Learning",
  "Productivity",
]);

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(blogTags).optional(),
  }),
});

export const collections = { blog };
