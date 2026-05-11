import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContentLayout from "@/components/ui/ContentLayout";
import CTA from "@/components/ui/CTA";
import s from "@/components/ui/InfoPage.module.css";

export const metadata: Metadata = {
  title: "Assessment Policy — Cabrow Educational Center",
  description: "Cabrow's assessment policy explains how we measure student progress through continuous assessment, examinations, and reporting.",
};

const QUICK_LINKS = [
  { label: "Admission Policy", href: "/policies/admission" },
  { label: "Language Policy", href: "/policies/language" },
  { label: "Assessment Policy", href: "/policies/assessment" },
  { label: "Academic Integrity", href: "/policies/integrity" },
  { label: "Inclusivity Policy", href: "/policies/inclusivity" },
];

export default function AssessmentPolicyPage() {
  return (
    <>
      <PageHero title="Assessment Policy" subtitle="Our approach to measuring progress is holistic, fair, and designed to celebrate every child's growth — not just test performance." />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Policies", href: "/policies/admission" }, { label: "Assessment Policy" }]} />
      <div className="container">
        <ContentLayout quickLinksTitle="Policies" quickLinks={QUICK_LINKS}>
          <div className={s.content}>
            <section className={s.section}>
              <h2 className={s.h2}>Assessment Policy</h2>
              <p className={s.lead}>Assessment at Cabrow is designed to support learning — not just to grade it. We use a combination of continuous assessment and formal end-of-term examinations to build a complete picture of each child's progress, strengths, and areas for growth.</p>
            </section>
            <section className={s.section}>
              <h3 className={s.h3}>Assessment Framework</h3>
              <ul className={s.numberedList}>
                <li><div className={s.numBadge}>1</div><div className={s.numText}><strong>Continuous Assessment (CA)</strong>Class exercises, oral contributions, group projects, and participation are assessed throughout the term. CA forms a significant component of a student's final term grade.</div></li>
                <li><div className={s.numBadge}>2</div><div className={s.numText}><strong>End-of-Term Examinations</strong>Formal written examinations are conducted at the end of each term across all subjects, aligned with the GES syllabus.</div></li>
                <li><div className={s.numBadge}>3</div><div className={s.numText}><strong>Observational Assessment (Early Years)</strong>For Preschool learners, assessment is primarily observational, tracking developmental milestones, social skills, and language growth.</div></li>
                <li><div className={s.numBadge}>4</div><div className={s.numText}><strong>Project & Activity-Based Assessment</strong>Practical tasks, presentations, and creative projects are used to assess real-world application of knowledge.</div></li>
              </ul>
            </section>
            <section className={s.section}>
              <h3 className={s.h3}>Reporting</h3>
              <p className={s.body}>Report cards are distributed at the end of each term. Parent-teacher meetings are scheduled termly to discuss results and support plans. Mid-term feedback may be shared for children requiring additional attention.</p>
            </section>
            <section className={s.section}>
              <div className={s.highlightPurple}>
                <h4 className={s.h4}>Our Commitment</h4>
                <p className={s.body} style={{ marginTop: 8 }}>Assessment at Cabrow will always be conducted with fairness, consistency, and sensitivity. We do not use assessment to label or discourage children. Our goal is to celebrate progress and use results to improve our teaching and your child's learning experience.</p>
              </div>
            </section>
          </div>
        </ContentLayout>
      </div>
      <CTA headline="Learn More About How We Teach" sub="Explore our curriculum and enrichment programmes." primaryLabel="View Curriculum" primaryHref="/learning/curriculum" secondaryLabel="Assessments" secondaryHref="/learning/assessments" />
    </>
  );
}
