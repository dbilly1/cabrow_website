import type { Metadata } from "next";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContentLayout from "@/components/ui/ContentLayout";
import CTA from "@/components/ui/CTA";
import s from "@/components/ui/InfoPage.module.css";

export const metadata: Metadata = {
  title: "Inclusivity Policy — Cabrow Educational Center",
  description: "Cabrow welcomes children of all backgrounds and abilities. Our inclusivity policy ensures every child is valued, supported, and celebrated.",
};

const QUICK_LINKS = [
  { label: "Admission Policy", href: "/policies/admission" },
  { label: "Language Policy", href: "/policies/language" },
  { label: "Assessment Policy", href: "/policies/assessment" },
  { label: "Academic Integrity", href: "/policies/integrity" },
  { label: "Inclusivity Policy", href: "/policies/inclusivity" },
];

const COMMITMENTS = [
  "We welcome children of all backgrounds, faiths, ethnicities, and abilities",
  "No child is excluded from school activities based on disability or learning difference",
  "We celebrate diversity — cultural, linguistic, and personal",
  "All staff treat every child with equal dignity, respect, and warmth",
  "Parents from all backgrounds are welcomed into our school community",
  "We actively work against bullying, discrimination, and exclusion",
  "Children with additional learning needs receive appropriate support",
];

export default function InclusivityPolicyPage() {
  return (
    <>
      <PageHero title="Inclusivity Policy" subtitle="Every child belongs at Cabrow. We are committed to creating a school where difference is celebrated and every learner is valued." />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Policies", href: "/policies/admission" }, { label: "Inclusivity Policy" }]} />
      <div className="container">
        <ContentLayout quickLinksTitle="Policies" quickLinks={QUICK_LINKS}>
          <div className={s.content}>
            <section className={s.section}>
              <h2 className={s.h2}>Inclusivity Policy</h2>
              <p className={s.lead}>Cabrow Educational Center is built on the belief that every child — regardless of background, ability, faith, or circumstance — deserves access to quality education in a loving, structured environment. This policy reflects our commitment to welcoming, including, and celebrating every member of our school community.</p>
            </section>
            <section className={s.section}>
              <h3 className={s.h3}>Our Commitments</h3>
              <ul className={s.checkList}>
                {COMMITMENTS.map((c) => (
                  <li key={c}><CheckCircle weight="fill" size={16} style={{ color: "var(--green)" }} /><span>{c}</span></li>
                ))}
              </ul>
            </section>
            <section className={s.section}>
              <h3 className={s.h3}>Children with Additional Needs</h3>
              <p className={s.body}>We recognise that some children may require additional support to thrive. Where possible, Cabrow provides in-class support and adapted teaching approaches for children with learning differences or developmental needs. Parents are encouraged to disclose relevant information at enrollment so that appropriate support can be put in place from day one.</p>
            </section>
            <section className={s.section}>
              <h3 className={s.h3}>Anti-Bullying & Zero Tolerance</h3>
              <p className={s.body}>Cabrow has a zero-tolerance approach to bullying, discrimination, and any behaviour that excludes or demeans another person. Incidents are addressed promptly, compassionately, and with the involvement of the families concerned. We work to resolve issues while maintaining the dignity and safety of all children involved.</p>
            </section>
            <section className={s.section}>
              <div className={s.highlightPurple}>
                <h4 className={s.h4}>Child Welfare is Our Core Value</h4>
                <p className={s.body} style={{ marginTop: 8 }}>One of Cabrow's seven core values is Child Welfare — ensuring the safety, well-being, and proper development of every student. This is not just a policy. It is who we are. Every decision we make as a school community is guided by what is in the best interest of the children in our care.</p>
              </div>
            </section>
          </div>
        </ContentLayout>
      </div>
      <CTA headline="Every Child is Welcome at Cabrow" sub="A family-like environment where every child is seen, known, and loved." primaryLabel="Admission Process" primaryHref="/admissions/process" secondaryLabel="Contact Us" secondaryHref="/contact" />
    </>
  );
}
