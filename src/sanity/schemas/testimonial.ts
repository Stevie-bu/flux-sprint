import { defineType, defineField } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "author",
      title: "Author Name",
      type: "string",
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
    }),
    defineField({
      name: "logo",
      title: "Company Logo",
      type: "image",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
    }),
  ],
});
