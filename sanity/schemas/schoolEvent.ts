import { defineField, defineType } from "sanity";

export default defineType({
  name: "schoolEvent",
  title: "School Events",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Event Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "date", title: "Date", type: "date" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Cultural", value: "cultural" },
          { title: "Academic", value: "academic" },
          { title: "Sports", value: "sports" },
          { title: "Excursion", value: "excursion" },
          { title: "Health", value: "health" },
          { title: "Other", value: "other" },
        ],
      },
      initialValue: "other",
    }),
    defineField({ name: "featured", title: "Show on Homepage", type: "boolean", initialValue: false }),
  ],
  orderings: [{ title: "Date", name: "dateAsc", by: [{ field: "date", direction: "asc" }] }],
  preview: {
    select: { title: "name", subtitle: "date" },
  },
});
