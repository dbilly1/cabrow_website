import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import VisitingInfo from "@/components/sections/VisitingInfo";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact Us — Cabrow Educational Center",
  description: "Get in touch with Cabrow Educational Center. Call us, send a message, or visit us at Choice Junction on the Mallam-Kasoa Highway, Ghana.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Cabrow"
        subtitle="Whether you have questions, want to book a tour, or are ready to enroll — we're here and happy to help."
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <VisitingInfo />
      <Contact />
    </>
  );
}
