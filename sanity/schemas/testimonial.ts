import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({ name: "quote", title: "Quote", type: "text", rows: 4, validation: (r) => r.required() }),
    defineField({ name: "parentName", title: "Parent Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "childClass", title: "Child's Class / Year", type: "string" }),
    defineField({ name: "featured", title: "Show on Homepage", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "parentName", subtitle: "childClass" },
  },
});
