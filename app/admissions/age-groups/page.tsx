import type { Metadata } from "next";
import { Info } from "@phosphor-icons/react/dist/ssr";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContentLayout from "@/components/ui/ContentLayout";
import CTA from "@/components/ui/CTA";
import s from "@/components/ui/InfoPage.module.css";

export const metadata: Metadata = {
  title: "Age Groups — Cabrow Educational Center",
  description: "Understand how Cabrow places children by age into the appropriate class level, following GES standards.",
};

const QUICK_LINKS = [
  { label: "Admission Process", href: "/admissions/process" },
  { label: "Fees Structure", href: "/admissions/fees" },
  { label: "Age Groups", href: "/admissions/age-groups" },
  { label: "Adult–Student Ratios", href: "/admissions/ratios" },
  { label: "Terms & Conditions", href: "/admissions/terms" },
];

const GROUPS = [
  { age: "2 – 3 years", cls: "Playgroup", colour: "var(--pink)" },
  { age: "3 – 4 years", cls: "Nursery", colour: "var(--orange)" },
  { age: "4 – 5 years", cls: "Kindergarten 1 (KG1)", colour: "var(--yellow)" },
  { age: "5 – 6 years", cls: "Kindergarten 2 (KG2)", colour: "var(--green)" },
  { age: "6 – 7 years", cls: "Basic 1", colour: "var(--purple)" },
  { age: "7 – 8 years", cls: "Basic 2", colour: "var(--pink)" },
  { age: "8 – 9 years", cls: "Basic 3", colour: "var(--orange)" },
  { age: "9 – 10 years", cls: "Basic 4", colour: "var(--yellow)" },
  { age: "10 – 11 years", cls: "Basic 5", colour: "var(--green)" },
  { age: "11 – 12 years", cls: "Basic 6", colour: "var(--purple)" },
];

export default function AgeGroupsPage() {
  return (
    <>
      <PageHero title="Age Groups" subtitle="Class placement at Cabrow is based on your child's age, following GES standards, to ensure peer-appropriate social and academic development." />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Admissions", href: "/admissions/process" }, { label: "Age Groups" }]} />

      <div className="container">
        <ContentLayout quickLinksTitle="Admissions" quickLinks={QUICK_LINKS}>
          <div className={s.content}>

            <section className={s.section}>
              <h2 className={s.h2}>Class Allocation by Age</h2>
              <p className={s.lead}>At Cabrow, we allocate students to classes based on their age as of the start of the academic term. This approach aligns with the Ghana Education Service (GES) standards and ensures that children learn alongside peers at a similar developmental stage.</p>
            </section>

            <section className={s.section}>
              <table className={s.table}>
                <thead>
                  <tr><th>Age Range</th><th>Class</th><th>Programme</th></tr>
                </thead>
                <tbody>
                  {GROUPS.map((g) => (
                    <tr key={g.cls}>
                      <td><strong>{g.age}</strong></td>
                      <td>
                        <span className={s.badge} style={{ background: g.colour }}>{g.cls}</span>
                      </td>
                      <td style={{ color: "var(--text-muted)", fontSize: ".86rem" }}>
                        {["Playgroup", "Nursery", "Kindergarten 1 (KG1)", "Kindergarten 2 (KG2)"].includes(g.cls) ? "Preschool Programme" : "Primary School Programme"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            <section className={s.section}>
              <h3 className={s.h3}>Exceptions to Age-Based Placement</h3>
              <div className={s.highlightOrange}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <Info weight="fill" size={20} style={{ color: "var(--orange)", flexShrink: 0, marginTop: 2 }} />
                  <p style={{ fontSize: ".9rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                    In exceptional circumstances — such as significant developmental gaps or special educational needs supported by a professional assessment — placement one class above or below the standard age group may be considered. The final decision regarding a child&apos;s class placement rests with the school administration.
                  </p>
                </div>
              </div>
            </section>

            <section className={s.section}>
              <h3 className={s.h3}>Class Advancement & Retention</h3>
              <ul className={s.numberedList}>
                <li>
                  <div className={s.numBadge}>1</div>
                  <div className={s.numText}><strong>Annual Progression</strong>Students progress to the next class at the end of each academic year, subject to satisfactory performance and attendance.</div>
                </li>
                <li>
                  <div className={s.numBadge}>2</div>
                  <div className={s.numText}><strong>No Grade Skipping</strong>Grade skipping is not permitted at Cabrow. Children progress one class at a time in line with GES standards.</div>
                </li>
                <li>
                  <div className={s.numBadge}>3</div>
                  <div className={s.numText}><strong>Retention Policy</strong>A student may be asked to repeat a class due to low academic performance or insufficient attendance. This decision is made in consultation with parents and the class teacher.</div>
                </li>
              </ul>
            </section>

            <section className={s.section}>
              <div className={s.contactStrip}>
                <div>
                  <h3 style={{ fontFamily: "var(--font-fredoka),cursive", fontSize: "1.15rem", color: "#fff", marginBottom: 4 }}>Not Sure Which Class?</h3>
                  <p style={{ fontSize: ".87rem", color: "rgba(255,255,255,.7)" }}>Call us and we&apos;ll help determine the right fit for your child.</p>
                </div>
                <div className={s.contactActions}>
                  <a href="tel:0557110196" className="btn btn-orange">Call Us</a>
                </div>
              </div>
            </section>
          </div>
        </ContentLayout>
      </div>
      <CTA headline="Ready to Enroll?" sub="Follow our simple admission process and get your child started at Cabrow." primaryLabel="Admission Process" primaryHref="/admissions/process" secondaryLabel="Contact Us" secondaryHref="/contact" />
    </>
  );
}
