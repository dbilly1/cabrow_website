import { defineField, defineType } from "sanity";

export default defineType({
  name: "feeItem",
  title: "Fee Structure",
  type: "document",
  fields: [
    defineField({
      name: "programme",
      title: "Programme / Class Level",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({ name: "termlyFee", title: "Termly Fee (GHS)", type: "number" }),
    defineField({ name: "annualFee", title: "Annual Fee (GHS)", type: "number" }),
    defineField({
      name: "includes",
      title: "What's Included",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "notes", title: "Notes", type: "string" }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "programme", subtitle: "termlyFee" },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    prepare(selection: Record<string, any>) {
      return { title: selection.title, subtitle: selection.subtitle ? `GHS ${selection.subtitle} / term` : "" };
    },
  },
});
