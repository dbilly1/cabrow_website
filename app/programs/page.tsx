import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Programs from "@/components/sections/Programs";
import ProgramsDetail from "@/components/sections/ProgramsDetail";
import Meals from "@/components/sections/Meals";
import CTA from "@/components/ui/CTA";

export const metadata: Metadata = {
  title: "Programs — Cabrow Educational Center",
  description: "Explore Cabrow's Preschool (Age 2–5) and Basic School (Primary) programs, curriculum details, daily schedules, and learning approach.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        title="Our Academic Programs"
        subtitle="Two carefully crafted programs designed to nurture every child from their earliest years through primary school."
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Programs" }]} />
      <Programs />
      <ProgramsDetail />
      <Meals />
      <CTA
        headline="Find the Right Program for Your Child"
        sub="Whether they're 2 or 12, Cabrow has a place for them. Contact us to learn more or book a visit."
        primaryLabel="Enroll Now →"
        primaryHref="/admissions"
        secondaryLabel="Book a Tour"
        secondaryHref="/contact"
      />
    </>
  );
}
