import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContentLayout from "@/components/ui/ContentLayout";
import SchoolLifeOverview from "@/components/sections/SchoolLifeOverview";
import CTA from "@/components/ui/CTA";

export const metadata: Metadata = {
  title: "School Life — Cabrow Educational Center",
  description: "Discover life at Cabrow — our story, facilities, core values, meals, school events, and our two programmes: Preschool (Age 2–5) and Primary School (Basic 1–6).",
};

const QUICK_LINKS = [
  { label: "Welcome to Cabrow", href: "/school-life" },
  { label: "Preschool (Age 2–5)", href: "/school-life/preschool" },
  { label: "Primary School (Basic 1–6)", href: "/school-life/primary" },
];

export default function SchoolLifePage() {
  return (
    <>
      <PageHero
        title="School Life at Cabrow"
        subtitle="A vibrant community where faith, purpose, and joyful learning come together — raising children with care every single day."
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "School Life" },
        ]}
      />
      <div className="container">
        <ContentLayout quickLinksTitle="School Life" quickLinks={QUICK_LINKS}>
          <SchoolLifeOverview />
        </ContentLayout>
      </div>
      <CTA
        headline="Find the Right Programme for Your Child"
        sub="Whether they're 2 or 12, Cabrow has a place for them. Contact us to learn more or book a visit."
        primaryLabel="Start Enrollment →"
        primaryHref="/admissions/process"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
