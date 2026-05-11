import type { Metadata } from "next";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContentLayout from "@/components/ui/ContentLayout";
import CTA from "@/components/ui/CTA";
import s from "@/components/ui/InfoPage.module.css";

export const metadata: Metadata = {
  title: "Learning Support — Cabrow Educational Center",
  description: "Cabrow provides learning support for children who need extra guidance, ensuring no child is left behind.",
};

const QUICK_LINKS = [
  { label: "Curriculum", href: "/learning/curriculum" },
  { label: "Enrichment Programs", href: "/learning/enrichment" },
  { label: "Academic Calendar", href: "/learning/calendar" },
  { label: "Assessments", href: "/learning/assessments" },
  { label: "Learning Support", href: "/learning/support" },
  { label: "School Hours", href: "/learning/hours" },
];

const SUPPORT_TYPES = [
  { t: "In-Class Teacher Support", b: "Our low teacher-to-student ratios mean teachers can provide in-class support to children who need extra guidance during lessons — without pulling them out of the classroom or making them feel singled out." },
  { t: "Focused Support Sessions", b: "Children who are identified as needing extra help may receive one-on-one or small group support sessions with their teacher. These sessions focus on building confidence and closing learning gaps." },
  { t: "Parent Partnership", b: "We work closely with parents to ensure support continues at home. Teachers communicate regularly via WhatsApp about strategies parents can use to reinforce learning outside school." },
  { t: "Early Identification", b: "Our teachers are trained to identify early signs of learning challenges. We act quickly and compassionately — speaking with parents before challenges become barriers." },
];

const PRINCIPLES = [
  "Every child can learn — they just may need a different approach",
  "Challenges are identified early and addressed with care",
  "Parents are kept informed and involved throughout",
  "Support is delivered with dignity — no child should feel labelled",
  "We celebrate every step of progress, no matter how small",
];

export default function SupportPage() {
  return (
    <>
      <PageHero title="Learning Support" subtitle="Every child deserves to succeed. We identify challenges early and provide the support needed — inside the classroom and beyond." />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Learning", href: "/learning/curriculum" }, { label: "Learning Support" }]} />

      <div className="container">
        <ContentLayout quickLinksTitle="Learning" quickLinks={QUICK_LINKS}>
          <div className={s.content}>

            <section className={s.section}>
              <h2 className={s.h2}>No Child Left Behind</h2>
              <p className={s.lead}>At Cabrow, we believe that every child has the capacity to learn and grow when placed in the right environment with the right support. Our approach to learning support is built on early identification, compassionate intervention, and consistent partnership with families.</p>
            </section>

            <section className={s.section}>
              <h3 className={s.h3}>How We Support Learners</h3>
              <div className={s.cardGrid}>
                {SUPPORT_TYPES.map((st) => (
                  <div key={st.t} className={s.card}>
                    <h4 className={s.cardTitle}>{st.t}</h4>
                    <p className={s.cardBody}>{st.b}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className={s.section}>
              <h3 className={s.h3}>Our Guiding Principles</h3>
              <ul className={s.checkList}>
                {PRINCIPLES.map((p) => (
                  <li key={p}>
                    <CheckCircle weight="fill" size={17} style={{ color: "var(--green)" }} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className={s.section}>
              <div className={s.contactStrip}>
                <div>
                  <h3 style={{ fontFamily: "var(--font-fredoka),cursive", fontSize: "1.15rem", color: "#fff", marginBottom: 4 }}>Concerned About Your Child?</h3>
                  <p style={{ fontSize: ".87rem", color: "rgba(255,255,255,.7)" }}>Talk to us. We're here to help you find the right path forward.</p>
                </div>
                <div className={s.contactActions}>
                  <a href="tel:0557110196" className="btn btn-orange">Call Us</a>
                </div>
              </div>
            </section>

          </div>
        </ContentLayout>
      </div>
      <CTA headline="Every Child Belongs at Cabrow" sub="A nurturing, supportive environment where every learner is valued." primaryLabel="Admission Process" primaryHref="/admissions/process" secondaryLabel="Contact Us" secondaryHref="/contact" />
    </>
  );
}
