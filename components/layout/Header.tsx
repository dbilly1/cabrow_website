"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import s from "./Header.module.css";

const NAV_LINKS = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/#story" },
  { label: "Programs",   href: "/#programs" },
  { label: "Admissions", href: "/#unique" },
  { label: "Learning",   href: "/#school-life" },
  { label: "Contact",    href: "/#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="header" className={`${s.header} ${scrolled ? s.scrolled : ""}`}>
      <div className={`container ${s.inner}`}>
        {/* Brand */}
        <Link href="/" className={s.brand}>
          <div className={s.logoWrap}>
            <svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 5 L90 20 L90 65 Q90 95 50 108 Q10 95 10 65 L10 20 Z" fill="#301a46" stroke="#6d28d9" strokeWidth="2"/>
              <path d="M50 14 L82 27 L82 63 Q82 88 50 100 Q18 88 18 63 L18 27 Z" fill="#4a2872"/>
              <g transform="translate(50,45)" fill="white" opacity="0.9">
                <circle cx="-10" cy="-14" r="5"/>
                <rect x="-13" y="-9" width="6" height="11" rx="2"/>
                <rect x="-14" y="-2" width="3" height="9" rx="1" transform="rotate(-5,-12,5)"/>
                <rect x="-8" y="-2" width="3" height="9" rx="1" transform="rotate(5,-6,5)"/>
                <circle cx="10" cy="-14" r="5"/>
                <path d="M7 -9 Q10 -4 13 -9" fill="white"/>
                <rect x="7" y="-9" width="6" height="9" rx="2"/>
                <rect x="6" y="2" width="3" height="9" rx="1"/>
                <rect x="11" y="2" width="3" height="9" rx="1"/>
                <line x1="-7" y1="-6" x2="7" y2="-6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </g>
              <g transform="translate(50,80)">
                <rect x="-15" y="-6" width="30" height="12" rx="2" fill="white" opacity="0.9"/>
                <line x1="0" y1="-6" x2="0" y2="6" stroke="#301a46" strokeWidth="1.5"/>
                <line x1="-10" y1="-3" x2="-2" y2="-3" stroke="#301a46" strokeWidth="1"/>
                <line x1="2" y1="-3" x2="10" y2="-3" stroke="#301a46" strokeWidth="1"/>
              </g>
              <path d="M15 95 Q50 101 85 95 Q85 103 50 107 Q15 103 15 95 Z" fill="#F97316" opacity="0.9"/>
              <text x="50" y="103" fontSize="5" fill="white" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">WISDOM</text>
            </svg>
          </div>
          <div className={s.brandText}>
            <strong>Cabrow</strong>
            <span>Educational Center</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className={s.navLinks}>
          {NAV_LINKS.map((l) => (
            <li key={l.label}><Link href={l.href}>{l.label}</Link></li>
          ))}
        </ul>

        {/* Right CTA + hamburger */}
        <div className={s.navRight}>
          <Link href="/#contact" className="btn btn-orange">Enroll Now ✦</Link>
          <button
            className={`${s.hamburger} ${open ? s.open : ""}`}
            aria-label="Toggle menu"
            onClick={() => setOpen((p) => !p)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className={s.mobileMenu} onClick={() => setOpen(false)}>
          {NAV_LINKS.map((l) => (
            <Link key={l.label} href={l.href}>{l.label}</Link>
          ))}
          <Link href="/#contact" className="btn btn-orange">Enroll Now ✦</Link>
        </div>
      )}
    </header>
  );
}
