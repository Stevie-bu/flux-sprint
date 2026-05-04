import { defineType, defineField } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Page Heading", type: "string", description: 'z.B. "About Harvey"' }),
    defineField({ name: "subheading", title: "Subheading", type: "string" }),
    defineField({ name: "portrait", title: "Portrait", type: "image", options: { hotspot: true } }),
    defineField({ name: "intro", title: "Introduction", type: "text", description: "Kurze Einleitung über der Biografie" }),
    defineField({ name: "bio", title: "Biography", type: "text", description: "Ausführliche Biografie" }),
    defineField({
      name: "skills",
      title: "Skills / Expertise",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "category", title: "Category", type: "string" }),
          defineField({ name: "items", title: "Items", type: "array", of: [{ type: "string" }] }),
        ],
      }],
    }),
    defineField({
      name: "experience",
      title: "Experience / Timeline",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "year", title: "Year", type: "string" }),
          defineField({ name: "role", title: "Role", type: "string" }),
          defineField({ name: "company", title: "Company", type: "string" }),
        ],
      }],
    }),
    defineField({ name: "philosophy", title: "Philosophy / Statement", type: "text" }),
    defineField({ name: "ctaText", title: "CTA Text", type: "string" }),
  ],
});
