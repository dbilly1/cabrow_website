import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "schoolName", title: "School Name", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "slogan", title: "Slogan", type: "text", rows: 2 }),
    defineField({ name: "phone1", title: "Phone 1", type: "string" }),
    defineField({ name: "phone2", title: "Phone 2", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "address", title: "Address", type: "string" }),
    defineField({ name: "facebookUrl", title: "Facebook URL", type: "url" }),
    defineField({ name: "instagramUrl", title: "Instagram URL", type: "url" }),
    defineField({ name: "whatsappNumber", title: "WhatsApp Number (with country code)", type: "string" }),
  ],
  preview: { select: { title: "schoolName" } },
});
