import { defineType, defineField } from "sanity";

export default defineType({
  name: "bio",
  title: "Bio Section",
  type: "document",
  fields: [
    defineField({
      name: "experienceLabel",
      title: "Experience Label",
      type: "string",
      description: 'z.B. "8+ years in industry"',
    }),
    defineField({
      name: "number",
      title: "Number",
      type: "string",
      description: 'z.B. "001"',
    }),
    defineField({
      name: "lines",
      title: "Text Lines",
      type: "array",
      description: "Jede Zeile des grossen Typografie-Blocks",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "text", title: "Text", type: "string" }),
            defineField({
              name: "indent",
              title: "Indent (%)",
              type: "number",
              description: "Einrückung in Prozent (0 = links, 44 = Mitte)",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "tagLabel",
      title: "Tag Label",
      type: "string",
      description: 'z.B. "creative freelancer"',
    }),
  ],
});
