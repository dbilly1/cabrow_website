import type { Metadata } from "next";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContentLayout from "@/components/ui/ContentLayout";
import CTA from "@/components/ui/CTA";
import s from "@/components/ui/InfoPage.module.css";

export const metadata: Metadata = {
  title: "Admission Policy — Cabrow Educational Center",
  description: "Cabrow's admission policy outlines enrollment criteria, class placement, and our commitment to welcoming all children.",
};

const QUICK_LINKS = [
  { label: "Admission Policy", href: "/policies/admission" },
  { label: "Language Policy", href: "/policies/language" },
  { label: "Assessment Policy", href: "/policies/assessment" },
  { label: "Academic Integrity", href: "/policies/integrity" },
  { label: "Inclusivity Policy", href: "/policies/inclusivity" },
];

const CRITERIA = [
  "Children aged 2 years and above are eligible to enroll at Cabrow",
  "Class placement is based on the child's age as of the start of the academic term",
  "A completed registration form must be submitted before enrollment is confirmed",
  "Proof of age (birth certificate or other official document) is required",
  "Medical and allergy information must be declared on the registration form",
  "Payment of the registration fee secures the child's place",
  "Enrollment is subject to available places in the relevant class",
];

export default function AdmissionPolicyPage() {
  return (
    <>
      <PageHero title="Admission Policy" subtitle="Our enrollment criteria and processes are designed to be clear, fair, and welcoming to all families." />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Policies", href: "/policies/admission" }, { label: "Admission Policy" }]} />
      <div className="container">
        <ContentLayout quickLinksTitle="Policies" quickLinks={QUICK_LINKS}>
          <div className={s.content}>
            <section className={s.section}>
              <h2 className={s.h2}>Admission Policy</h2>
              <p className={s.lead}>Cabrow Educational Center welcomes children from all backgrounds, faiths, and abilities. Our admission process is designed to be straightforward, transparent, and family-centred. This policy outlines our enrollment criteria, placement procedures, and commitment to fair access.</p>
            </section>
            <section className={s.section}>
              <h3 className={s.h3}>Enrollment Criteria</h3>
              <ul className={s.checkList}>
                {CRITERIA.map((c) => (
                  <li key={c}><CheckCircle weight="fill" size={16} style={{ color: "var(--purple)" }} /><span>{c}</span></li>
                ))}
              </ul>
            </section>
            <section className={s.section}>
              <h3 className={s.h3}>Class Placement</h3>
              <p className={s.body}>Students are placed in classes based on their age as of the start of the academic term, in line with GES standards. In exceptional cases involving developmental needs or special circumstances, placement may be adjusted by one class level, subject to school discretion and professional assessment. See our <a href="/admissions/age-groups" style={{ color: "var(--orange)", fontWeight: 700 }}>Age Groups</a> page for full details.</p>
            </section>
            <section className={s.section}>
              <h3 className={s.h3}>Our Commitment</h3>
              <div className={s.highlightPurple}>
                <p className={s.body}>Cabrow does not discriminate on the basis of race, gender, religion, disability, or socio-economic background. We are committed to providing a safe, nurturing, and inclusive environment for every child who joins our community. All admissions decisions are made with the child's best interests at heart.</p>
              </div>
            </section>
          </div>
        </ContentLayout>
      </div>
      <CTA headline="Ready to Enroll?" sub="Follow our simple admission process to secure your child's place." primaryLabel="Admission Process" primaryHref="/admissions/process" secondaryLabel="Contact Us" secondaryHref="/contact" />
    </>
  );
}
