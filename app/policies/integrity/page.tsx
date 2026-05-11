import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContentLayout from "@/components/ui/ContentLayout";
import CTA from "@/components/ui/CTA";
import s from "@/components/ui/InfoPage.module.css";

export const metadata: Metadata = {
  title: "Academic Integrity Policy — Cabrow Educational Center",
  description: "Cabrow's academic integrity policy defines our expectations around honesty, responsibility, and ethical conduct in learning.",
};

const QUICK_LINKS = [
  { label: "Admission Policy", href: "/policies/admission" },
  { label: "Language Policy", href: "/policies/language" },
  { label: "Assessment Policy", href: "/policies/assessment" },
  { label: "Academic Integrity", href: "/policies/integrity" },
  { label: "Inclusivity Policy", href: "/policies/inclusivity" },
];

export default function IntegrityPolicyPage() {
  return (
    <>
      <PageHero title="Academic Integrity Policy" subtitle="Honesty, responsibility, and ethical conduct are at the heart of everything we do at Cabrow." />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Policies", href: "/policies/admission" }, { label: "Academic Integrity" }]} />
      <div className="container">
        <ContentLayout quickLinksTitle="Policies" quickLinks={QUICK_LINKS}>
          <div className={s.content}>
            <section className={s.section}>
              <h2 className={s.h2}>Academic Integrity Policy</h2>
              <p className={s.lead}>Integrity is one of Cabrow's seven core values. We believe that honesty in learning is as important as the learning itself. This policy sets out our expectations for students, teachers, and families in upholding the highest standards of academic conduct.</p>
            </section>
            <section className={s.section}>
              <h3 className={s.h3}>What Academic Integrity Means</h3>
              <p className={s.body}>Academic integrity means completing one's own work honestly, submitting original effort, and not gaining unfair advantage in any form of assessment. At Cabrow, this is taught as a value — not just a rule.</p>
            </section>
            <section className={s.section}>
              <h3 className={s.h3}>Student Expectations</h3>
              <ul className={s.numberedList}>
                <li><div className={s.numBadge}>1</div><div className={s.numText}><strong>Original Work</strong>All homework, class exercises, and examination responses must represent the student's own work and understanding.</div></li>
                <li><div className={s.numBadge}>2</div><div className={s.numText}><strong>No Copying or Cheating</strong>Copying from classmates, using unauthorised materials during assessments, or submitting another's work as one's own is not acceptable at Cabrow.</div></li>
                <li><div className={s.numBadge}>3</div><div className={s.numText}><strong>Responsibility</strong>Students are expected to take responsibility for their own learning journey — asking for help honestly rather than taking shortcuts.</div></li>
              </ul>
            </section>
            <section className={s.section}>
              <h3 className={s.h3}>Teacher & Parent Role</h3>
              <p className={s.body}>Teachers are expected to design assessments that encourage genuine engagement and minimise opportunities for dishonesty. Parents are asked to support their child's independent work habits at home — allowing children to do their own homework, seek help honestly, and develop real understanding.</p>
            </section>
            <section className={s.section}>
              <div className={s.highlightOrange}>
                <h4 className={s.h4}>Consequences</h4>
                <p className={s.body} style={{ marginTop: 8 }}>Instances of academic dishonesty will be handled sensitively but seriously. Depending on the severity and age of the child, consequences may include a repeat of the assessment, a discussion with the parents, or a formal note in the student's record. We always prioritise learning from the experience over punishment.</p>
              </div>
            </section>
          </div>
        </ContentLayout>
      </div>
      <CTA headline="Character is the Foundation" sub="At Cabrow, we raise children of integrity, discipline, and purpose." primaryLabel="Our Core Values" primaryHref="/school-life/preschool" secondaryLabel="Contact Us" secondaryHref="/contact" />
    </>
  );
}
