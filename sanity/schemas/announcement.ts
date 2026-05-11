import { defineField, defineType } from "sanity";

export default defineType({
  name: "announcement",
  title: "Announcements",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({ name: "publishedAt", title: "Published Date", type: "datetime", initialValue: () => new Date().toISOString() }),
    defineField({ name: "active", title: "Show on Site", type: "boolean", initialValue: true }),
  ],
  orderings: [{ title: "Newest First", name: "publishedDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
  preview: {
    select: { title: "title", subtitle: "publishedAt" },
  },
});
