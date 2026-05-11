import { client } from "./client";

// ── Types ─────────────────────────────────────────────────────────────

export interface SanityImage {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  hotspot?: { x: number; y: number };
}

export interface SiteSettings {
  schoolName: string;
  tagline: string;
  slogan: string;
  phone1: string;
  phone2: string;
  email: string;
  address: string;
  facebookUrl: string;
  instagramUrl: string;
  whatsappNumber: string;
}

export interface Testimonial {
  _id: string;
  quote: string;
  parentName: string;
  childClass: string;
  featured: boolean;
  order: number;
}

export interface GalleryImage {
  _id: string;
  image: SanityImage;
  alt: string;
  caption?: string;
  section: string;
  order: number;
}

export interface SchoolEvent {
  _id: string;
  name: string;
  date: string;
  description?: string;
  category: string;
  featured: boolean;
}

export interface FeeItem {
  _id: string;
  programme: string;
  termlyFee: number;
  annualFee: number;
  includes: string[];
  notes?: string;
  order: number;
}

export interface Announcement {
  _id: string;
  title: string;
  body: unknown[];
  publishedAt: string;
  active: boolean;
}

// ── Fetchers ─────────────────────────────────────────────────────────

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch(`*[_type == "siteSettings"][0]`, {}, { next: { revalidate: 3600 } });
}

export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  return client.fetch(
    `*[_type == "testimonial" && featured == true] | order(order asc)`,
    {},
    { next: { revalidate: 3600 } }
  );
}

export async function getAllTestimonials(): Promise<Testimonial[]> {
  return client.fetch(
    `*[_type == "testimonial"] | order(order asc)`,
    {},
    { next: { revalidate: 3600 } }
  );
}

export async function getGalleryImages(section?: string): Promise<GalleryImage[]> {
  const filter = section
    ? `*[_type == "galleryImage" && section == $section] | order(order asc)`
    : `*[_type == "galleryImage"] | order(order asc)`;
  const params = section ? { section } : {};
  return client.fetch(filter, params, { next: { revalidate: 3600 } });
}

export async function getSchoolEvents(featuredOnly = false): Promise<SchoolEvent[]> {
  const filter = featuredOnly
    ? `*[_type == "schoolEvent" && featured == true] | order(date asc)`
    : `*[_type == "schoolEvent"] | order(date asc)`;
  return client.fetch(filter, {}, { next: { revalidate: 3600 } });
}

export async function getFeeItems(): Promise<FeeItem[]> {
  return client.fetch(
    `*[_type == "feeItem"] | order(order asc)`,
    {},
    { next: { revalidate: 3600 } }
  );
}

export async function getActiveAnnouncements(): Promise<Announcement[]> {
  return client.fetch(
    `*[_type == "announcement" && active == true] | order(publishedAt desc)`,
    {},
    { next: { revalidate: 1800 } }
  );
}
