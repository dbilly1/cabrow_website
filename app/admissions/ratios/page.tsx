import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContentLayout from "@/components/ui/ContentLayout";
import CTA from "@/components/ui/CTA";
import s from "@/components/ui/InfoPage.module.css";

export const metadata: Metadata = {
  title: "Adult–Student Ratios — Cabrow Educational Center",
  description: "Cabrow maintains low adult-to-student ratios at every level to ensure personalised attention, academic success, and the well-being of every child.",
};

const QUICK_LINKS = [
  { label: "Admission Process", href: "/admissions/process" },
  { label: "Fees Structure", href: "/admissions/fees" },
  { label: "Age Groups", href: "/admissions/age-groups" },
  { label: "Adult–Student Ratios", href: "/admissions/ratios" },
  { label: "Terms & Conditions", href: "/admissions/terms" },
];

const RATIOS = [
  { cls: "Playgroup", age: "2–3 years", ratio: "1 : 5", colour: "var(--pink)" },
  { cls: "Nursery", age: "3–4 years", ratio: "1 : 6", colour: "var(--orange)" },
  { cls: "KG 1 & KG 2", age: "4–6 years", ratio: "1 : 8", colour: "var(--yellow)" },
  { cls: "Basic 1 – 3", age: "6–9 years", ratio: "1 : 12", colour: "var(--green)" },
  { cls: "Basic 4 – 6", age: "9–12 years", ratio: "1 : 15", colour: "var(--purple)" },
];

export default function RatiosPage() {
  return (
    <>
      <PageHero title="Adult–Student Ratios" subtitle="Small classes mean more attention, more connection, and better outcomes for every child at Cabrow." />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Admissions", href: "/admissions/process" }, { label: "Adult–Student Ratios" }]} />

      <div className="container">
        <ContentLayout quickLinksTitle="Admissions" quickLinks={QUICK_LINKS}>
          <div className={s.content}>

            <section className={s.section}>
              <h2 className={s.h2}>Personalised Attention at Every Level</h2>
              <p className={s.lead}>We believe every child deserves to feel seen and supported. By maintaining low adult-to-student ratios across all our class levels, our teachers can provide personalised instruction, differentiated learning, and meaningful one-on-one time with each learner.</p>
            </section>

            <section className={s.section}>
              <h3 className={s.h3}>Teacher-to-Student Ratios</h3>
              <table className={s.table}>
                <thead>
                  <tr><th>Class</th><th>Age Group</th><th>Ratio</th></tr>
                </thead>
                <tbody>
                  {RATIOS.map((r) => (
                    <tr key={r.cls}>
                      <td><strong>{r.cls}</strong></td>
                      <td style={{ color: "var(--text-muted)" }}>{r.age}</td>
                      <td>
                        <span className={s.ratioPill} style={{ background: r.colour }}>{r.ratio}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={{ fontSize: ".82rem", color: "var(--text-muted)", marginTop: 12, fontStyle: "italic" }}>
                * Ratios may vary slightly depending on enrolment. Additional support staff may be present in mixed-age or special sessions.
              </p>
            </section>

            <section className={s.section}>
              <h3 className={s.h3}>What Low Ratios Mean for Your Child</h3>
              <div className={s.cardGrid}>
                {[
                  { t: "Personalised Learning", b: "Teachers can identify each child's strengths and learning gaps, adjusting their approach to suit individual needs." },
                  { t: "Stronger Relationships", b: "Small classes build trust between teachers and learners, creating a safe, nurturing environment where children thrive." },
                  { t: "Better Classroom Management", b: "Fewer students means less disruption and more structured, focused learning time for everyone." },
                  { t: "Early Intervention", b: "Teachers can quickly spot and address challenges before they become barriers to learning or well-being." },
                ].map((c) => (
                  <div key={c.t} className={s.card}>
                    <h4 className={s.cardTitle}>{c.t}</h4>
                    <p className={s.cardBody}>{c.b}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className={s.section}>
              <div className={s.highlightPurple}>
                <h4 className={s.h4}>Additional Support</h4>
                <p className={s.body}>Beyond standard classroom ratios, Cabrow provides additional support through dedicated teacher assistants during structured activities. For children who require extra academic guidance, our teachers offer focused support sessions to ensure no child is left behind.</p>
              </div>
            </section>

          </div>
        </ContentLayout>
      </div>
      <CTA headline="Give Your Child the Attention They Deserve" sub="Small classes, big impact. Enroll at Cabrow today." primaryLabel="Start Enrollment" primaryHref="/admissions/process" secondaryLabel="Contact Us" secondaryHref="/contact" />
    </>
  );
}
