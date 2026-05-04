import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { internationalizedArray } from "sanity-plugin-internationalized-array";
import { schemaTypes } from "./src/sanity/schemas";

export default defineConfig({
  name: "h-studio",
  title: "H.Studio CMS",
  projectId: "93zrqa0c",
  dataset: "production",
  basePath: "/studio",
  plugins: [
    structureTool(),
    visionTool(),
    internationalizedArray({
      languages: [
        { id: "en", title: "English" },
        { id: "de", title: "Deutsch" },
      ],
      fieldTypes: ["string", "text"],
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
