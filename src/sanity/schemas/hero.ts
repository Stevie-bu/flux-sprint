import { defineType, defineField } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    defineField({
      name: "greeting",
      title: "Greeting",
      type: "string",
      description: 'z.B. "Hello i\'m"',
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: 'z.B. "Harvey Specter"',
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
    }),
  ],
});
