import type { Metadata } from "next";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContentLayout from "@/components/ui/ContentLayout";
import CTA from "@/components/ui/CTA";
import s from "@/components/ui/InfoPage.module.css";

export const metadata: Metadata = {
  title: "Curriculum — Cabrow Educational Center",
  description: "Cabrow follows the Ghana Education Service (GES) curriculum, enriched with values, creativity, and co-curricular activities.",
};

const QUICK_LINKS = [
  { label: "Curriculum", href: "/learning/curriculum" },
  { label: "Enrichment Programs", href: "/learning/enrichment" },
  { label: "Academic Calendar", href: "/learning/calendar" },
  { label: "Assessments", href: "/learning/assessments" },
  { label: "Learning Support", href: "/learning/support" },
  { label: "School Hours", href: "/learning/hours" },
];

const PRESCHOOL_SUBJECTS = [
  "Language & Literacy — phonics, storytelling, vocabulary",
  "Numeracy & Counting — number recognition, basic operations",
  "Rhymes, Music & Movement — rhythm, songs, physical activity",
  "Sensorial Play — learning through touch, sight, sound",
  "Creative Arts & Drawing — self-expression through art",
  "Practical Life Skills — self-care, tidying, responsibility",
  "Early Science & Nature — exploring the natural world",
  "Outdoor Exploration — physical play and environmental awareness",
];

const PRIMARY_SUBJECTS = [
  "English Language — reading, writing, comprehension, grammar",
  "Mathematics — number operations, geometry, problem solving",
  "Integrated Science — biology, chemistry, physics basics",
  "Social Studies — Ghana, Africa, and our world",
  "Religious & Moral Education (RME)",
  "French — introductory oral and written French",
  "ICT & Digital Skills — basic computing and digital literacy",
  "Creative Arts — visual arts, music, and drama",
  "Physical Education (PE) — fitness, teamwork, and health",
];

const APPROACH = [
  { t: "Inquiry-Based Learning", b: "We encourage children to ask questions, explore, and discover. Teachers guide learning rather than just delivering content." },
  { t: "Project-Based Activities", b: "Students work on real-world projects that integrate multiple subjects, building collaboration and critical thinking." },
  { t: "Values Integration", b: "Our 7 core values — Godliness, Creativity, Excellence, Integrity, Discipline, Respect, and Child Welfare — are woven into every lesson." },
  { t: "Differentiated Instruction", b: "We recognise that every child learns differently. Teachers adapt their methods to ensure every learner is challenged and supported." },
];

export default function CurriculumPage() {
  return (
    <>
      <PageHero title="Curriculum" subtitle="A GES-aligned curriculum enriched with values, creativity, and real-world relevance — giving every child the tools to thrive." />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Learning", href: "/learning/curriculum" }, { label: "Curriculum" }]} />

      <div className="container">
        <ContentLayout quickLinksTitle="Learning" quickLinks={QUICK_LINKS}>
          <div className={s.content}>

            <section className={s.section}>
              <h2 className={s.h2}>Our Curriculum</h2>
              <p className={s.lead}>Cabrow Educational Center follows the Ghana Education Service (GES) National Curriculum as its core framework. We go beyond the syllabus by enriching every subject with creative teaching methods, co-curricular activities, and a values-centred approach that develops the whole child.</p>
            </section>

            <section className={s.section}>
              <h3 className={s.h3}>Preschool Curriculum (Age 2–5)</h3>
              <p className={s.lead}>Our early years curriculum is play-based and child-centred, building a strong foundation in language, numeracy, social skills, and physical development.</p>
              <ul className={s.checkList}>
                {PRESCHOOL_SUBJECTS.map((sub) => (
                  <li key={sub}>
                    <CheckCircle weight="fill" size={17} style={{ color: "var(--pink)" }} />
                    <span>{sub}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className={s.section}>
              <h3 className={s.h3}>Primary School Curriculum (Basic 1–6)</h3>
              <p className={s.lead}>Our primary curriculum follows the GES syllabus for Basic 1–6, covering all core subjects and enriched with French, ICT, and creative programmes.</p>
              <ul className={s.checkList}>
                {PRIMARY_SUBJECTS.map((sub) => (
                  <li key={sub}>
                    <CheckCircle weight="fill" size={17} style={{ color: "var(--green)" }} />
                    <span>{sub}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className={s.section}>
              <h3 className={s.h3}>Our Teaching Approach</h3>
              <div className={s.cardGrid}>
                {APPROACH.map((a) => (
                  <div key={a.t} className={s.card}>
                    <h4 className={s.cardTitle}>{a.t}</h4>
                    <p className={s.cardBody}>{a.b}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </ContentLayout>
      </div>
      <CTA headline="Enroll Your Child Today" sub="Give them a curriculum that builds character, knowledge, and confidence." primaryLabel="Admission Process" primaryHref="/admissions/process" secondaryLabel="School Hours" secondaryHref="/learning/hours" />
    </>
  );
}
