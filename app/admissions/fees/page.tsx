import type { Metadata } from "next";
import { CheckCircle, XCircle, Info } from "@phosphor-icons/react/dist/ssr";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContentLayout from "@/components/ui/ContentLayout";
import CTA from "@/components/ui/CTA";
import s from "@/components/ui/InfoPage.module.css";

export const metadata: Metadata = {
  title: "Fees Structure — Cabrow Educational Center",
  description: "Learn about Cabrow's transparent, affordable fee structure. Fees are structured per term and vary by programme level.",
};

const QUICK_LINKS = [
  { label: "Admission Process", href: "/admissions/process" },
  { label: "Fees Structure", href: "/admissions/fees" },
  { label: "Age Groups", href: "/admissions/age-groups" },
  { label: "Adult–Student Ratios", href: "/admissions/ratios" },
  { label: "Terms & Conditions", href: "/admissions/terms" },
];

const INCLUDED = [
  "Tuition for all GES core subjects",
  "Morning assembly & devotion",
  "Use of all school facilities",
  "Termly progress report card",
  "Parent-teacher meetings",
  "School events & celebrations",
];

const NOT_INCLUDED = [
  "School uniform (available at front office)",
  "Textbooks & exercise books",
  "Meals / feeding programme (optional add-on)",
  "Afterschool enrichment activities",
  "Educational excursions",
  "SEN / learning support (if applicable)",
];

const PAYMENT_METHODS = [
  { label: "Cash", desc: "Pay directly at our front office during school hours." },
  { label: "Mobile Money", desc: "We accept MTN Mobile Money and other major networks." },
  { label: "Bank Transfer", desc: "Direct bank transfer in Ghana Cedis. Account details provided on request." },
];

export default function FeesPage() {
  return (
    <>
      <PageHero
        title="Fees Structure"
        subtitle="Quality education at an affordable price. Our fees are structured per term and reviewed each academic year."
      />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Admissions", href: "/admissions/process" },
        { label: "Fees Structure" },
      ]} />

      <div className="container">
        <ContentLayout quickLinksTitle="Admissions" quickLinks={QUICK_LINKS}>
          <div className={s.content}>

            <section className={s.section}>
              <h2 className={s.h2}>Transparent & Affordable Fees</h2>
              <p className={s.lead}>At Cabrow, we are committed to making quality education accessible. Our fees are structured per term and vary by programme level. We review fees each academic year to ensure we continue delivering value while keeping costs manageable for families.</p>
              <div className={s.highlightOrange}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <Info weight="fill" size={22} style={{ color: "var(--orange)", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong style={{ display: "block", marginBottom: 6, color: "var(--purple)" }}>Current Fee Schedule</strong>
                    <p style={{ fontSize: ".9rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                      Our full fee schedule is available at the school office or on request via phone or WhatsApp. Please contact us for the current term&apos;s fee details, as fees are reviewed each academic year. We also offer a brief overview during your school tour visit.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className={s.section}>
              <h3 className={s.h3}>Fee Structure Overview</h3>
              <p className={s.lead}>Fees are billed per term. The academic year runs from September to July across three terms.</p>
              <table className={s.table}>
                <thead>
                  <tr>
                    <th>Programme</th>
                    <th>Age Group</th>
                    <th>Billing Cycle</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Playgroup</strong></td>
                    <td>Age 2–3</td>
                    <td>Per Term</td>
                    <td>Half-day programme</td>
                  </tr>
                  <tr>
                    <td><strong>Nursery</strong></td>
                    <td>Age 3–4</td>
                    <td>Per Term</td>
                    <td>Half-day programme</td>
                  </tr>
                  <tr>
                    <td><strong>Kindergarten 1 & 2</strong></td>
                    <td>Age 4–6</td>
                    <td>Per Term</td>
                    <td>Full-day programme</td>
                  </tr>
                  <tr>
                    <td><strong>Basic 1 – 3</strong></td>
                    <td>Age 6–9</td>
                    <td>Per Term</td>
                    <td>Full-day programme</td>
                  </tr>
                  <tr>
                    <td><strong>Basic 4 – 6</strong></td>
                    <td>Age 9–12</td>
                    <td>Per Term</td>
                    <td>Full-day programme</td>
                  </tr>
                </tbody>
              </table>
              <p style={{ fontSize: ".82rem", color: "var(--text-muted)", marginTop: 12, fontStyle: "italic" }}>
                * Specific fee amounts are shared directly with families. Contact us for the current schedule.
              </p>
            </section>

            <section className={s.section}>
              <div className={s.cardGrid}>
                <div className={s.card}>
                  <h4 className={s.cardTitle} style={{ color: "var(--green)" }}>What&apos;s Included in Tuition</h4>
                  <ul className={s.checkList}>
                    {INCLUDED.map((i) => (
                      <li key={i}>
                        <CheckCircle weight="fill" size={16} style={{ color: "var(--green)" }} />
                        <span style={{ fontSize: ".86rem" }}>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={s.card}>
                  <h4 className={s.cardTitle} style={{ color: "var(--orange)" }}>Additional Costs</h4>
                  <ul className={s.checkList}>
                    {NOT_INCLUDED.map((i) => (
                      <li key={i}>
                        <XCircle weight="fill" size={16} style={{ color: "var(--orange)" }} />
                        <span style={{ fontSize: ".86rem" }}>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className={s.section}>
              <h3 className={s.h3}>Payment Methods</h3>
              <div className={s.cardGrid}>
                {PAYMENT_METHODS.map((p) => (
                  <div key={p.label} className={s.card} style={{ gridColumn: p.label === "Bank Transfer" ? "span 2" : undefined }}>
                    <h4 className={s.cardTitle}>{p.label}</h4>
                    <p className={s.cardBody}>{p.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className={s.section}>
              <div className={s.contactStrip}>
                <div>
                  <h3 style={{ fontFamily: "var(--font-fredoka), cursive", fontSize: "1.2rem", color: "#fff", marginBottom: 4 }}>Request the Full Fee Schedule</h3>
                  <p style={{ fontSize: ".87rem", color: "rgba(255,255,255,.7)" }}>Call us or visit the school to receive the current termly fee details.</p>
                </div>
                <div className={s.contactActions}>
                  <a href="tel:0557110196" className="btn btn-orange">Call 0557 110 196</a>
                </div>
              </div>
            </section>

          </div>
        </ContentLayout>
      </div>

      <CTA headline="Ready to Enroll?" sub="Take the first step — contact us to get the current fee schedule and start the admission process." primaryLabel="Start Enrollment" primaryHref="/admissions/process" secondaryLabel="Contact Us" secondaryHref="/contact" />
    </>
  );
}
