import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContentLayout from "@/components/ui/ContentLayout";
import CTA from "@/components/ui/CTA";
import s from "@/components/ui/InfoPage.module.css";

export const metadata: Metadata = {
  title: "Language Policy — Cabrow Educational Center",
  description: "Cabrow's language policy outlines the language of instruction and our approach to multilingual development.",
};

const QUICK_LINKS = [
  { label: "Admission Policy", href: "/policies/admission" },
  { label: "Language Policy", href: "/policies/language" },
  { label: "Assessment Policy", href: "/policies/assessment" },
  { label: "Academic Integrity", href: "/policies/integrity" },
  { label: "Inclusivity Policy", href: "/policies/inclusivity" },
];

export default function LanguagePolicyPage() {
  return (
    <>
      <PageHero title="Language Policy" subtitle="Our language of instruction and commitment to strong communication in English, Ghanaian languages, and introductory French." />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Policies", href: "/policies/admission" }, { label: "Language Policy" }]} />
      <div className="container">
        <ContentLayout quickLinksTitle="Policies" quickLinks={QUICK_LINKS}>
          <div className={s.content}>
            <section className={s.section}>
              <h2 className={s.h2}>Language Policy</h2>
              <p className={s.lead}>At Cabrow Educational Center, we are committed to developing strong communicators. Our language policy supports confident use of English as the primary language of instruction, while celebrating Ghana's rich linguistic heritage and introducing children to French from an early age.</p>
            </section>
            <section className={s.section}>
              <h3 className={s.h3}>Language of Instruction</h3>
              <p className={s.body}>English is the primary language of instruction at Cabrow across all class levels, in line with the Ghana Education Service curriculum. All core subjects — including Mathematics, Science, Social Studies, and English Language — are taught in English. Teachers use clear, age-appropriate language to ensure understanding for all learners.</p>
            </section>
            <section className={s.section}>
              <h3 className={s.h3}>Ghanaian Languages</h3>
              <p className={s.body}>We recognise and celebrate the linguistic diversity of our learner community. Local languages such as Twi and Fante may be used supportively in the early years to help younger children settle in and understand key concepts. We encourage children to take pride in their home languages while building confidence in English.</p>
            </section>
            <section className={s.section}>
              <h3 className={s.h3}>French Programme</h3>
              <p className={s.body}>Cabrow offers introductory French as part of our curriculum enrichment programme. French is introduced in the Primary School years to build foundational vocabulary and conversational ability. We believe early exposure to a second international language opens doors and broadens a child's world view.</p>
            </section>
            <section className={s.section}>
              <div className={s.highlightOrange}>
                <h4 className={s.h4}>Communication with Parents</h4>
                <p className={s.body} style={{ marginTop: 8 }}>All formal school communication — including report cards, announcements, newsletters, and correspondence — is conducted in English. Day-to-day WhatsApp communication may incorporate both English and Twi to ensure clarity and accessibility for all families.</p>
              </div>
            </section>
          </div>
        </ContentLayout>
      </div>
      <CTA headline="Questions About Our Language Programme?" sub="Contact us to learn more about French and our curriculum approach." primaryLabel="View Curriculum" primaryHref="/learning/curriculum" secondaryLabel="Contact Us" secondaryHref="/contact" />
    </>
  );
}
