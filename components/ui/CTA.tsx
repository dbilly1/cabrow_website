import Link from "next/link";
import s from "./CTA.module.css";

interface CTAProps {
  headline?: string;
  sub?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTA({
  headline = "Ready to Enroll Your Child?",
  sub = "Join the Cabrow family today. Spaces are limited — secure your child's place for the 2025/2026 academic year.",
  primaryLabel = "Enroll Now →",
  primaryHref = "/admissions",
  secondaryLabel = "Book a Tour",
  secondaryHref = "/contact",
}: CTAProps) {
  return (
    <section className={s.cta}>
      <div className={`container ${s.inner}`}>
        <div className={s.text}>
          <h2>{headline}</h2>
          <p>{sub}</p>
        </div>
        <div className={s.btns}>
          <Link href={primaryHref} className="btn btn-orange">{primaryLabel}</Link>
          <Link href={secondaryHref} className={s.ghost}>{secondaryLabel}</Link>
        </div>
      </div>
    </section>
  );
}
