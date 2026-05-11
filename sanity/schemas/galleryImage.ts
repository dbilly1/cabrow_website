import { defineField, defineType } from "sanity";

export default defineType({
  name: "galleryImage",
  title: "Gallery Images",
  type: "document",
  fields: [
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true }, validation: (r) => r.required() }),
    defineField({ name: "alt", title: "Alt Text", type: "string", validation: (r) => r.required() }),
    defineField({ name: "caption", title: "Caption (optional)", type: "string" }),
    defineField({
      name: "section",
      title: "Section",
      type: "string",
      options: {
        list: [
          { title: "General / School Life", value: "general" },
          { title: "Preschool", value: "preschool" },
          { title: "Primary School", value: "primary" },
          { title: "Events", value: "events" },
          { title: "Meals & Feeding", value: "meals" },
        ],
        layout: "radio",
      },
      initialValue: "general",
      validation: (r) => r.required(),
    }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "alt", subtitle: "section", media: "image" },
  },
});
