import type { Metadata } from "next";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContentLayout from "@/components/ui/ContentLayout";
import CTA from "@/components/ui/CTA";
import s from "@/components/ui/InfoPage.module.css";

export const metadata: Metadata = {
  title: "Assessments — Cabrow Educational Center",
  description: "Learn how Cabrow assesses student progress through continuous assessment, end-of-term examinations, and regular parent reporting.",
};

const QUICK_LINKS = [
  { label: "Curriculum", href: "/learning/curriculum" },
  { label: "Enrichment Programs", href: "/learning/enrichment" },
  { label: "Academic Calendar", href: "/learning/calendar" },
  { label: "Assessments", href: "/learning/assessments" },
  { label: "Learning Support", href: "/learning/support" },
  { label: "School Hours", href: "/learning/hours" },
];

const METHODS = [
  { t: "Continuous Assessment (CA)", b: "Throughout each term, teachers assess students through class exercises, quizzes, oral recitation, group work, and participation. Continuous assessment accounts for a significant portion of a child's overall grade." },
  { t: "End-of-Term Examinations", b: "At the end of each term, formal written examinations are conducted across all subjects. These are age-appropriate and aligned with the GES syllabus, testing retention and understanding of the term's work." },
  { t: "Class Observation & Teacher Feedback", b: "For our younger learners (Preschool), assessment is largely observational. Teachers track developmental milestones, social skills, language development, and participation through ongoing observation and anecdotal records." },
  { t: "Project & Activity-Based Assessment", b: "Practical projects, presentations, and group activities form part of assessment, particularly in Creative Arts, ICT, and Science. These assess real-world application of knowledge and collaboration skills." },
];

const REPORTING = [
  "Termly written report cards issued to all families",
  "Parent-teacher meetings each term for one-on-one feedback",
  "Ongoing communication via WhatsApp for day-to-day updates",
  "Mid-term progress updates for students requiring extra support",
  "End-of-year performance summary and class advancement decision",
];

export default function AssessmentsPage() {
  return (
    <>
      <PageHero title="Assessments" subtitle="We assess to understand, not to label. Our approach measures growth, effort, and understanding — not just test scores." />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Learning", href: "/learning/curriculum" }, { label: "Assessments" }]} />

      <div className="container">
        <ContentLayout quickLinksTitle="Learning" quickLinks={QUICK_LINKS}>
          <div className={s.content}>

            <section className={s.section}>
              <h2 className={s.h2}>How We Assess Progress</h2>
              <p className={s.lead}>At Cabrow, assessment is an ongoing, holistic process designed to give teachers and parents a clear picture of each child's growth. We combine formal examination with continuous classroom assessment to ensure a fair and complete view of every learner.</p>
            </section>

            <section className={s.section}>
              <h3 className={s.h3}>Assessment Methods</h3>
              <div className={s.cardGrid}>
                {METHODS.map((m) => (
                  <div key={m.t} className={s.card}>
                    <h4 className={s.cardTitle}>{m.t}</h4>
                    <p className={s.cardBody}>{m.b}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className={s.section}>
              <h3 className={s.h3}>Reporting to Parents</h3>
              <p className={s.lead}>We believe parents are partners in their child's education. We keep you informed every step of the way.</p>
              <ul className={s.checkList}>
                {REPORTING.map((r) => (
                  <li key={r}>
                    <CheckCircle weight="fill" size={17} style={{ color: "var(--purple)" }} />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className={s.section}>
              <div className={s.highlightPurple}>
                <h4 className={s.h4}>Our Assessment Philosophy</h4>
                <p className={s.body} style={{ marginTop: 8 }}>We believe that every child has the capacity to succeed when given the right environment and support. Assessment at Cabrow is designed to celebrate progress, identify areas for growth, and inform our teaching — not to create unnecessary stress or competition. We look at the whole child: academic performance, social development, creativity, and character.</p>
              </div>
            </section>

          </div>
        </ContentLayout>
      </div>
      <CTA headline="Questions About Your Child's Progress?" sub="Our teachers are always available to discuss your child's development." primaryLabel="Contact Us" primaryHref="/contact" secondaryLabel="Learning Support" secondaryHref="/learning/support" />
    </>
  );
}
