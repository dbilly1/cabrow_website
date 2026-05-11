import Link from "next/link";
import { GraduationCap, FacebookLogo, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import s from "./Footer.module.css";

const SCHOOL_LIFE = [
  { label: "Welcome to Cabrow", href: "/school-life" },
  { label: "Preschool (Age 2–5)", href: "/school-life/preschool" },
  { label: "Primary School (Basic 1–6)", href: "/school-life/primary" },
];
const ADMISSIONS = [
  { label: "Admission Process", href: "/admissions/process" },
  { label: "Fees Structure", href: "/admissions/fees" },
  { label: "Age Groups", href: "/admissions/age-groups" },
  { label: "Adult–Student Ratios", href: "/admissions/ratios" },
  { label: "Terms & Conditions", href: "/admissions/terms" },
];
const LEARNING = [
  { label: "Curriculum", href: "/learning/curriculum" },
  { label: "Enrichment Programs", href: "/learning/enrichment" },
  { label: "Academic Calendar", href: "/learning/calendar" },
  { label: "Assessments", href: "/learning/assessments" },
  { label: "Learning Support", href: "/learning/support" },
  { label: "School Hours", href: "/learning/hours" },
];
const POLICIES = [
  { label: "Admission Policy", href: "/policies/admission" },
  { label: "Language Policy", href: "/policies/language" },
  { label: "Assessment Policy", href: "/policies/assessment" },
  { label: "Academic Integrity", href: "/policies/integrity" },
  { label: "Inclusivity Policy", href: "/policies/inclusivity" },
];

export default function Footer() {
  return (
    <footer className={s.footer} id="footer">
      <div className={`container ${s.inner}`}>
        {/* Brand */}
        <div className={s.brand}>
          <div className={s.brandRow}>
            <div className={s.brandIcon}><GraduationCap weight="fill" size={22} /></div>
            <div>
              <div className={s.brandName}>Cabrow Educational Center</div>
              <div className={s.brandSub}>Wisdom and Knowledge</div>
            </div>
          </div>
          <p className={s.tagline}>
            Roots and Wings — Growing Today, Soaring Tomorrow.<br />
            At Cabrow, we don&apos;t just teach. We raise children with care, faith, and joy.
          </p>
          <div className={s.social}>
            <a href="https://facebook.com/CabrowEducationalCenter" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookLogo weight="fill" size={18} /></a>
            <a href="https://instagram.com/cabec_gh" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramLogo weight="fill" size={18} /></a>
            <a href="https://wa.me/233557110196" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WhatsappLogo weight="fill" size={18} /></a>
          </div>
        </div>

        <FooterCol title="School Life" links={SCHOOL_LIFE} />
        <FooterCol title="Admissions" links={ADMISSIONS} />
        <FooterCol title="Learning" links={LEARNING} />
        <FooterCol title="Policies" links={POLICIES} />
      </div>

      <div className={`container ${s.bottom}`}>
        <p>© {new Date().getFullYear()} Cabrow Educational Center. All rights reserved.</p>
        <span>Choice Junction, Mallam-Kasoa Highway, Ghana &nbsp;·&nbsp; <a href="tel:0557110196" style={{ color: "inherit" }}>0557 110 196</a></span>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className={s.col}>
      <h5>{title}</h5>
      <ul>
        {links.map((l) => (
          <li key={l.label}><Link href={l.href}>→ {l.label}</Link></li>
        ))}
      </ul>
    </div>
  );
}
