import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContentLayout from "@/components/ui/ContentLayout";
import PreschoolContent from "@/components/sections/PreschoolContent";
import CTA from "@/components/ui/CTA";

export const metadata: Metadata = {
  title: "Preschool (Age 2–5) — Cabrow Educational Center",
  description: "Cabrow's Preschool programme offers play-based, values-centred early learning for children aged 2–5. Language, numeracy, creative arts, sensorial play and more.",
};

const QUICK_LINKS = [
  { label: "Welcome to Cabrow", href: "/school-life" },
  { label: "Preschool (Age 2–5)", href: "/school-life/preschool" },
  { label: "Primary School (Basic 1–6)", href: "/school-life/primary" },
];

export default function PreschoolPage() {
  return (
    <>
      <PageHero
        title="Preschool Programme"
        subtitle="Play-based, values-centred early learning for children aged 2–5. Where every child is seen, known, and loved."
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "School Life", href: "/school-life" },
          { label: "Preschool (Age 2–5)" },
        ]}
      />
      <div className="container">
        <ContentLayout quickLinksTitle="School Life" quickLinks={QUICK_LINKS}>
          <PreschoolContent />
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
