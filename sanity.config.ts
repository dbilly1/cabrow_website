import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  name: "cabrow-studio",
  title: "Cabrow Educational Center",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.documentTypeListItem("siteSettings").title("Site Settings"),
            S.divider(),
            S.documentTypeListItem("testimonial").title("Testimonials"),
            S.documentTypeListItem("galleryImage").title("Gallery Images"),
            S.documentTypeListItem("schoolEvent").title("School Events"),
            S.documentTypeListItem("feeItem").title("Fee Structure"),
            S.documentTypeListItem("announcement").title("Announcements"),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
