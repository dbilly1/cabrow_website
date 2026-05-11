import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import StoryExpanded from "@/components/sections/StoryExpanded";
import Values from "@/components/sections/Values";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/ui/CTA";

export const metadata: Metadata = {
  title: "About Us — Cabrow Educational Center",
  description: "Discover the story, mission, vision, and values behind Cabrow Educational Center, founded in 2019 in Mallam-Kasoa, Ghana.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Where Faith Met Purpose"
        subtitle="Founded in 2019, Cabrow has grown from a vision into a thriving community of learners, educators, and families."
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
      <StoryExpanded />
      <Values />
      <Stats />
      <Testimonials />
      <CTA
        headline="Become Part of Our Story"
        sub="Every child who walks through our doors adds a new chapter. We'd love to welcome yours."
        primaryLabel="Enroll Now →"
        primaryHref="/admissions"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
