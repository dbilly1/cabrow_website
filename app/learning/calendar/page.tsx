import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContentLayout from "@/components/ui/ContentLayout";
import CTA from "@/components/ui/CTA";
import s from "@/components/ui/InfoPage.module.css";

export const metadata: Metadata = {
  title: "Academic Calendar — Cabrow Educational Center",
  description: "Cabrow's academic year runs September to July across three terms, following the Ghana Education Service calendar.",
};

const QUICK_LINKS = [
  { label: "Curriculum", href: "/learning/curriculum" },
  { label: "Enrichment Programs", href: "/learning/enrichment" },
  { label: "Academic Calendar", href: "/learning/calendar" },
  { label: "Assessments", href: "/learning/assessments" },
  { label: "Learning Support", href: "/learning/support" },
  { label: "School Hours", href: "/learning/hours" },
];

const TERMS = [
  { term: "Term 1", period: "September – December", colour: "var(--purple)", highlights: ["School resumes (September)", "Cultural Celebration Days", "End-of-term examinations", "Report card distribution", "Christmas holiday break"] },
  { term: "Term 2", period: "January – April", colour: "var(--orange)", highlights: ["School resumes (January)", "Spelling Bee & Quiz Competitions", "Fruits Day", "Career Day activities", "End-of-term examinations & reports"] },
  { term: "Term 3", period: "April – July", colour: "var(--green)", highlights: ["School resumes (April)", "African Diversity Day", "Colour Day & Talent Show", "End-of-year examinations", "Prize-giving & graduation"] },
];

export default function CalendarPage() {
  return (
    <>
      <PageHero title="Academic Calendar" subtitle="Cabrow follows the Ghana Education Service (GES) academic calendar, structured across three terms from September to July." />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Learning", href: "/learning/curriculum" }, { label: "Academic Calendar" }]} />

      <div className="container">
        <ContentLayout quickLinksTitle="Learning" quickLinks={QUICK_LINKS}>
          <div className={s.content}>

            <section className={s.section}>
              <h2 className={s.h2}>Academic Year Structure</h2>
              <p className={s.lead}>Cabrow follows the Ghana Education Service (GES) academic calendar. The school year runs from September to July and is divided into three terms, each ending with examinations and report distribution.</p>
              <div className={s.highlightOrange}>
                <p style={{ fontSize: ".9rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                  <strong style={{ color: "var(--orange)" }}>Note:</strong> Specific term dates and public holiday closures are communicated to families via WhatsApp and our school notice board at the start of each term. Please ensure you are connected to our parent communication channels.
                </p>
              </div>
            </section>

            {TERMS.map((t) => (
              <section key={t.term} className={s.section}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span className={s.badge} style={{ background: t.colour, fontSize: ".9rem", padding: "6px 18px" }}>{t.term}</span>
                  <span style={{ fontFamily: "var(--font-fredoka),cursive", fontSize: "1.1rem", color: "var(--purple)" }}>{t.period}</span>
                </div>
                <ul className={s.checkList}>
                  {t.highlights.map((h) => (
                    <li key={h}>
                      <span style={{ width: 8, height: 8, borderRadius: "50%", background: t.colour, flexShrink: 0, display: "block", marginTop: 6 }} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <section className={s.section}>
              <h3 className={s.h3}>School Closures</h3>
              <p className={s.body}>Cabrow observes all Ghana national public holidays. Additional school closure dates are communicated to parents in advance. The school does not operate during the July–August holiday period. Families requiring supervised care during school closure periods should contact administration.</p>
            </section>

          </div>
        </ContentLayout>
      </div>
      <CTA headline="Stay Connected" sub="Join our parent communication channels to receive term dates, event notices, and school updates." primaryLabel="Contact Us" primaryHref="/contact" secondaryLabel="Enrichment Programs" secondaryHref="/learning/enrichment" />
    </>
  );
}
