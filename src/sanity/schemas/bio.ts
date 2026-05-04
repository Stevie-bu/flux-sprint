import { defineType, defineField } from "sanity";

export default defineType({
  name: "bio",
  title: "Bio Section",
  type: "document",
  fields: [
    defineField({ name: "experienceLabel", title: "Experience Label", type: "internationalizedArrayString" }),
    defineField({ name: "number", title: "Number", type: "string" }),
    defineField({
      name: "lines",
      title: "Text Lines",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "text", title: "Text", type: "internationalizedArrayString" }),
          defineField({ name: "indent", title: "Indent (%)", type: "number" }),
        ],
      }],
    }),
    defineField({ name: "tagLabel", title: "Tag Label", type: "internationalizedArrayString" }),
  ],
});
