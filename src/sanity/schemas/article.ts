import { defineType, defineField } from "sanity";

export default defineType({
  name: "article",
  title: "News Article",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "internationalizedArrayString" }),
    defineField({ name: "excerpt", title: "Excerpt", type: "internationalizedArrayText" }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "link", title: "Link", type: "url" }),
    defineField({ name: "publishedAt", title: "Published At", type: "datetime" }),
  ],
  orderings: [{ title: "Published", name: "publishedDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
});
