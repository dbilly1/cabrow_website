import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContentLayout from "@/components/ui/ContentLayout";
import CTA from "@/components/ui/CTA";
import s from "@/components/ui/InfoPage.module.css";

export const metadata: Metadata = {
  title: "Terms & Conditions — Cabrow Educational Center",
  description: "Read Cabrow Educational Center's terms and conditions covering fees, withdrawals, attendance, payment methods, and school policies.",
};

const QUICK_LINKS = [
  { label: "Admission Process", href: "/admissions/process" },
  { label: "Fees Structure", href: "/admissions/fees" },
  { label: "Age Groups", href: "/admissions/age-groups" },
  { label: "Adult–Student Ratios", href: "/admissions/ratios" },
  { label: "Terms & Conditions", href: "/admissions/terms" },
];

const TERMS = [
  { title: "Academic Year & Billing Cycle", body: "All offer letters and invoices are billed based on the September–July Academic Year, consisting of three academic terms. A signed registration form is required before any child commences at Cabrow." },
  { title: "Acceptance of Place", body: "If a signed Offer Letter has not been returned but the child commences school or fees are paid, this will be treated as implicit acceptance of all terms and conditions outlined in the Offer Letter." },
  { title: "No Refund Policy", body: "All fees paid — including registration fees, tuition fees, meals programme payments, and any additional programme costs — are considered non-refundable and non-transferable once payment has been made." },
  { title: "Seat Deposit for Returning Students", body: "Returning students will receive a seat deposit notice during the third term of the academic year. This deposit must be settled before the end of the term to guarantee a place for the following year. Unpaid deposits result in the seat being released." },
  { title: "Termly Invoices & Late Payment", body: "Termly invoices are issued at the start of each term and are due within the first two weeks. A late payment fee may be applied to accounts that remain outstanding beyond the due date." },
  { title: "Annual Fee Commitment", body: "Parents who accept an Offer Letter are committing to the full academic year's tuition. Where termly payment is preferred, this must be agreed upon in advance. Withdrawing mid-year does not reduce the annual commitment unless adequate notice has been given." },
  { title: "Withdrawal Notice", body: "A full term's written notice is required if withdrawing your child from Cabrow. Notice must be given no later than the first week of the final term in the academic year. Failure to give adequate notice may result in one term's fees being charged." },
  { title: "Leave of Absence", body: "If your child will be absent for an extended period (one full term or more), one month's advance notice is required in writing. Without prior notice, full term fees will apply regardless of attendance." },
  { title: "Uniform & Dress Code", body: "All students are required to wear the Cabrow school uniform at all times during school hours. Uniforms are available for purchase at the front office. Special dress-down days (e.g. Colour Day) will be communicated in advance." },
  { title: "Programme Price Changes", body: "Fees for optional programmes — including meals, afterschool activities, excursions, and uniforms — may be adjusted from time to time. Families will be given at least one month's written notice of any such changes." },
  { title: "Attendance Requirements", body: "Regular and punctual attendance is essential to your child's progress. Persistent unexplained absences will be followed up by the school. Parents are asked to communicate any absences via WhatsApp or phone call before school begins." },
];

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms & Conditions" subtitle="Important information about fees, attendance, withdrawal, and school policies. Please read carefully before enrolling." />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Admissions", href: "/admissions/process" }, { label: "Terms & Conditions" }]} />

      <div className="container">
        <ContentLayout quickLinksTitle="Admissions" quickLinks={QUICK_LINKS}>
          <div className={s.content}>

            <section className={s.section}>
              <h2 className={s.h2}>Terms & Conditions</h2>
              <p className={s.lead}>By enrolling your child at Cabrow Educational Center, you agree to the following terms and conditions. Please read them carefully. If you have any questions, please speak with our admissions team before signing.</p>
            </section>

            <section className={s.section}>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {TERMS.map((term, i) => (
                  <div key={term.title} className={s.termCard}>
                    <div className={s.termNum}>{i + 1}</div>
                    <div>
                      <p className={s.termTitle}>{term.title}</p>
                      <p className={s.termBody}>{term.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className={s.section}>
              <div className={s.highlightOrange}>
                <h4 className={s.h4}>Payment Methods Accepted</h4>
                <p className={s.body} style={{ marginTop: 8 }}>Cabrow accepts payment by cash, mobile money (MTN MoMo and other networks), and direct bank transfer. All payments should be made to the school administration office. Receipts are issued for every payment made.</p>
              </div>
            </section>

            <section className={s.section}>
              <div className={s.contactStrip}>
                <div>
                  <h3 style={{ fontFamily: "var(--font-fredoka),cursive", fontSize: "1.15rem", color: "#fff", marginBottom: 4 }}>Questions About Our Policies?</h3>
                  <p style={{ fontSize: ".87rem", color: "rgba(255,255,255,.7)" }}>Our team is happy to clarify anything before you enroll.</p>
                </div>
                <div className={s.contactActions}>
                  <a href="tel:0557110196" className="btn btn-orange">Call Us</a>
                  <a href="mailto:cabrow.edu@gmail.com" className="btn btn-white-outline">Email Us</a>
                </div>
              </div>
            </section>

          </div>
        </ContentLayout>
      </div>
      <CTA headline="Ready to Join the Cabrow Family?" sub="Enroll your child today and take the first step towards quality, values-centred education." primaryLabel="Admission Process" primaryHref="/admissions/process" secondaryLabel="Contact Us" secondaryHref="/contact" />
    </>
  );
}
