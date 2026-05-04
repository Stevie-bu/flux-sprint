import { defineType, defineField } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    defineField({ name: "greeting", title: "Greeting", type: "internationalizedArrayString" }),
    defineField({ name: "name", title: "Name", type: "internationalizedArrayString" }),
    defineField({ name: "description", title: "Description", type: "internationalizedArrayText" }),
    defineField({ name: "backgroundImage", title: "Background Image", type: "image", options: { hotspot: true } }),
  ],
});
