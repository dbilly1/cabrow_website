import Link from "next/link";
import { GraduationCap, FacebookLogo, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import s from "./Footer.module.css";

const PROGRAMS = [
  { label: "Preschool (Age 2–5)", href: "/#programs" },
  { label: "Basic School (Primary)", href: "/#programs" },
  { label: "Meals & Feeding", href: "/#meals" },
  { label: "School Events", href: "/#school-life" },
];
const ADMISSIONS = [
  { label: "Enroll Now", href: "/#contact" },
  { label: "Age Groups", href: "/#programs" },
  { label: "Book a Tour", href: "/#contact" },
  { label: "Fees Enquiry", href: "/#contact" },
];
const ABOUT = [
  { label: "Our Story", href: "/#story" },
  { label: "Core Values", href: "/#values" },
  { label: "What Makes Us Unique", href: "/#unique" },
  { label: "Contact Us", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className={s.footer} id="footer">
      <div className={`container ${s.inner}`}>
        {/* Brand col */}
        <div>
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
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookLogo weight="fill" size={18} /></a>
            <a href="https://instagram.com/cabec_gh" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramLogo weight="fill" size={18} /></a>
            <a href="https://wa.me/233557110196" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WhatsappLogo weight="fill" size={18} /></a>
          </div>
        </div>

        {/* Link cols */}
        <FooterCol title="Programs" links={PROGRAMS} />
        <FooterCol title="Admissions" links={ADMISSIONS} />
        <FooterCol title="About" links={ABOUT} />
      </div>

      <div className={`container ${s.bottom}`}>
        <p>© {new Date().getFullYear()} Cabrow Educational Center. All rights reserved.</p>
        <span>Choice Junction, Mallam-Kasoa Highway, Ghana</span>
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
