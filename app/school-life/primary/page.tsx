import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContentLayout from "@/components/ui/ContentLayout";
import PrimaryContent from "@/components/sections/PrimaryContent";
import CTA from "@/components/ui/CTA";

export const metadata: Metadata = {
  title: "Primary School (Basic 1–6) — Cabrow Educational Center",
  description: "Cabrow's Primary School programme follows the GES curriculum enriched with French, ICT, project-based learning, and co-curricular activities for ages 6–12.",
};

const QUICK_LINKS = [
  { label: "Welcome to Cabrow", href: "/school-life" },
  { label: "Preschool (Age 2–5)", href: "/school-life/preschool" },
  { label: "Primary School (Basic 1–6)", href: "/school-life/primary" },
];

export default function PrimaryPage() {
  return (
    <>
      <PageHero
        title="Primary School Programme"
        subtitle="GES curriculum enriched with creativity, values, and hands-on learning for children aged 6–12 (Basic 1–6)."
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "School Life", href: "/school-life" },
          { label: "Primary School (Basic 1–6)" },
        ]}
      />
      <div className="container">
        <ContentLayout quickLinksTitle="School Life" quickLinks={QUICK_LINKS}>
          <PrimaryContent />
        </ContentLayout>
      </div>
      <CTA
        headline="Ready to Enroll Your Child?"
        sub="Spaces are limited. Take the first step towards giving your child the best start."
        primaryLabel="Start Enrollment"
        primaryHref="/admissions/process"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
