import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContentLayout from "@/components/ui/ContentLayout";
import CTA from "@/components/ui/CTA";
import s from "@/components/ui/InfoPage.module.css";

export const metadata: Metadata = {
  title: "School Hours — Cabrow Educational Center",
  description: "Cabrow's school hours, daily schedule, and pickup times for Preschool and Primary School programmes.",
};

const QUICK_LINKS = [
  { label: "Curriculum", href: "/learning/curriculum" },
  { label: "Enrichment Programs", href: "/learning/enrichment" },
  { label: "Academic Calendar", href: "/learning/calendar" },
  { label: "Assessments", href: "/learning/assessments" },
  { label: "Learning Support", href: "/learning/support" },
  { label: "School Hours", href: "/learning/hours" },
];

const HOURS = [
  { programme: "Playgroup (Age 2–3)", open: "7:30 AM", close: "1:00 PM", notes: "Half-day programme" },
  { programme: "Nursery (Age 3–4)", open: "7:30 AM", close: "2:00 PM", notes: "Extended half-day" },
  { programme: "Kindergarten 1 & 2 (Age 4–6)", open: "7:30 AM", close: "2:30 PM", notes: "Full-day programme" },
  { programme: "Basic 1 – 3 (Age 6–9)", open: "7:30 AM", close: "3:00 PM", notes: "Full-day programme" },
  { programme: "Basic 4 – 6 (Age 9–12)", open: "7:30 AM", close: "3:00 PM", notes: "Full-day programme" },
];

const SCHEDULE = [
  { time: "7:00 AM", event: "School gates open — early drop-off available" },
  { time: "7:30 AM", event: "Official school day begins / Morning activities" },
  { time: "8:00 AM", event: "Morning assembly & devotion" },
  { time: "8:20 AM", event: "First lesson block" },
  { time: "10:00 AM", event: "Break time" },
  { time: "10:20 AM", event: "Second lesson block" },
  { time: "12:00 PM", event: "Lunch & rest period" },
  { time: "12:45 PM", event: "Third lesson block" },
  { time: "2:30 PM", event: "Closing activities & review" },
  { time: "3:00 PM", event: "School closes — pick-up for older pupils" },
];

export default function HoursPage() {
  return (
    <>
      <PageHero title="School Hours" subtitle="Consistent routines help children thrive. Here is everything you need to know about our daily schedule and pickup times." />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Learning", href: "/learning/curriculum" }, { label: "School Hours" }]} />

      <div className="container">
        <ContentLayout quickLinksTitle="Learning" quickLinks={QUICK_LINKS}>
          <div className={s.content}>

            <section className={s.section}>
              <h2 className={s.h2}>School Hours by Programme</h2>
              <p className={s.lead}>Cabrow operates Monday to Friday during the academic term. Gates open at 7:00 AM for early drop-off. Pickup times vary by programme level as shown below.</p>
              <table className={s.table}>
                <thead>
                  <tr><th>Programme</th><th>Gates Open</th><th>School Closes</th><th>Notes</th></tr>
                </thead>
                <tbody>
                  {HOURS.map((h) => (
                    <tr key={h.programme}>
                      <td><strong>{h.programme}</strong></td>
                      <td>{h.open}</td>
                      <td><strong>{h.close}</strong></td>
                      <td style={{ color: "var(--text-muted)", fontSize: ".85rem" }}>{h.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            <section className={s.section}>
              <h3 className={s.h3}>A Typical School Day (Primary)</h3>
              <table className={s.table}>
                <thead>
                  <tr><th>Time</th><th>Activity</th></tr>
                </thead>
                <tbody>
                  {SCHEDULE.map((r) => (
                    <tr key={r.time}>
                      <td><strong>{r.time}</strong></td>
                      <td>{r.event}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            <section className={s.section}>
              <h3 className={s.h3}>Important Notes</h3>
              <ul className={s.numberedList}>
                <li>
                  <div className={s.numBadge}>!</div>
                  <div className={s.numText}><strong>Punctual Pick-up</strong>Please collect your child promptly at their scheduled closing time. Repeated late pick-ups will be followed up with the parent or guardian.</div>
                </li>
                <li>
                  <div className={s.numBadge}>!</div>
                  <div className={s.numText}><strong>Early Drop-off</strong>Gates open at 7:00 AM. Children dropped off before 7:30 AM will be supervised by available staff.</div>
                </li>
                <li>
                  <div className={s.numBadge}>!</div>
                  <div className={s.numText}><strong>Authorised Pick-up</strong>Only persons listed as authorised on the registration form may collect your child. Please notify the school in advance of any changes.</div>
                </li>
                <li>
                  <div className={s.numBadge}>!</div>
                  <div className={s.numText}><strong>School Holidays</strong>The school closes on all Ghana national public holidays. Holiday dates are communicated via WhatsApp at the start of each term.</div>
                </li>
              </ul>
            </section>

          </div>
        </ContentLayout>
      </div>
      <CTA headline="Have More Questions?" sub="Our team is happy to help with any questions about the school day." primaryLabel="Contact Us" primaryHref="/contact" secondaryLabel="Admission Process" secondaryHref="/admissions/process" />
    </>
  );
}
