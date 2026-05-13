"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CaretDown } from "@phosphor-icons/react";
import s from "./Header.module.css";

type Child = { label: string; href: string; desc: string };
type NavItem = { label: string; href: string; children: Child[] };

const NAV: NavItem[] = [
  {
    label: "School Life",
    href: "/school-life",
    children: [
      {
        label: "Welcome to Cabrow",
        href: "/school-life",
        desc: "Our story, values, facilities & school community",
      },
      {
        label: "Preschool (Age 2–5)",
        href: "/school-life/preschool",
        desc: "Play-based early learning for ages 2–5",
      },
      {
        label: "Primary School (Basic 1–6)",
        href: "/school-life/primary",
        desc: "GES curriculum enriched with creativity & values",
      },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions/process",
    children: [
      {
        label: "Admission Process",
        href: "/admissions/process",
        desc: "Step-by-step enrollment guide",
      },
      {
        label: "Fees Structure",
        href: "/admissions/fees",
        desc: "Transparent, affordable pricing",
      },
      {
        label: "Age Groups",
        href: "/admissions/age-groups",
        desc: "Class placement by age",
      },
      {
        label: "Adult–Student Ratios",
        href: "/admissions/ratios",
        desc: "Personalised attention at every level",
      },
      {
        label: "Terms & Conditions",
        href: "/admissions/terms",
        desc: "School policies & payment terms",
      },
    ],
  },
  {
    label: "Learning",
    href: "/learning/curriculum",
    children: [
      {
        label: "Curriculum",
        href: "/learning/curriculum",
        desc: "GES curriculum & our teaching approach",
      },
      {
        label: "Enrichment Programs",
        href: "/learning/enrichment",
        desc: "Sports, arts & afterschool activities",
      },
      {
        label: "Academic Calendar",
        href: "/learning/calendar",
        desc: "Term dates & key school events",
      },
      {
        label: "Assessments",
        href: "/learning/assessments",
        desc: "How we track and report progress",
      },
      {
        label: "Learning Support",
        href: "/learning/support",
        desc: "Support for every type of learner",
      },
      {
        label: "School Hours",
        href: "/learning/hours",
        desc: "Daily schedule & pickup times",
      },
    ],
  },
  {
    label: "Policies",
    href: "/policies/admission",
    children: [
      {
        label: "Admission Policy",
        href: "/policies/admission",
        desc: "Enrollment criteria & guidelines",
      },
      {
        label: "Language Policy",
        href: "/policies/language",
        desc: "Language of instruction at Cabrow",
      },
      {
        label: "Assessment Policy",
        href: "/policies/assessment",
        desc: "Standards for evaluation & reporting",
      },
      {
        label: "Academic Integrity",
        href: "/policies/integrity",
        desc: "Our commitment to honesty & ethics",
      },
      {
        label: "Inclusivity Policy",
        href: "/policies/inclusivity",
        desc: "Welcoming and supporting all learners",
      },
    ],
  },
  { label: "Contact", href: "/contact", children: [] },
];

export default function Header() {
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveNav(null);
  }, [pathname]);

  const enterNav = useCallback((label: string) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setActiveNav(label);
  }, []);

  const leaveNav = useCallback(() => {
    leaveTimer.current = setTimeout(() => setActiveNav(null), 150);
  }, []);

  function isActive(item: NavItem) {
    const segment = `/${item.href.split("/")[1]}`;
    if (segment === "/") return pathname === "/";
    return pathname.startsWith(segment);
  }

  return (
    <header
      className={`${s.header} ${scrolled ? s.scrolled : ""} ${activeNav ? s.megaOpen : ""}`}
    >
      <div className={`container ${s.inner}`}>
        {/* Brand */}
        <Link href="/" className={s.brand}>
          <div className={s.logoWrap}>
            <img src="/logo.svg" alt="Cabrow Educational Center logo" />
          </div>
          <div className={s.brandText}>
            <strong>Cabrow</strong>
            <span>Educational Center</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className={s.nav}>
          {NAV.map((item) => (
            <div
              key={item.label}
              className={`${s.navItem} ${activeNav === item.label ? s.navItemHovered : ""}`}
              onMouseEnter={() =>
                item.children.length > 0 ? enterNav(item.label) : undefined
              }
              onMouseLeave={item.children.length > 0 ? leaveNav : undefined}
            >
              <Link
                href={item.href}
                className={`${s.navLink} ${isActive(item) ? s.navLinkActive : ""}`}
              >
                {item.label}
                {item.children.length > 0 && (
                  <CaretDown
                    weight="bold"
                    size={12}
                    className={`${s.caret} ${activeNav === item.label ? s.caretOpen : ""}`}
                  />
                )}
              </Link>
            </div>
          ))}
        </nav>

        {/* Right */}
        <div className={s.right}>
          <Link href="/admissions/process" className="btn btn-orange">
            Enroll Now
          </Link>
          <button
            className={`${s.hamburger} ${mobileOpen ? s.hamburgerOpen : ""}`}
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((p) => !p)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mega panels */}
      {NAV.filter((i) => i.children.length > 0).map((item) => (
        <div
          key={item.label}
          className={`${s.megaPanel} ${activeNav === item.label ? s.megaVisible : ""}`}
          onMouseEnter={() => enterNav(item.label)}
          onMouseLeave={leaveNav}
        >
          <div className={`container ${s.megaInner}`}>
            <p className={s.megaSection}>{item.label}</p>
            <div
              className={s.megaGrid}
              style={
                {
                  "--cols": Math.min(item.children.length, 3),
                } as React.CSSProperties
              }
            >
              {item.children.map((child) => (
                <Link key={child.href} href={child.href} className={s.megaLink}>
                  <span className={s.megaName}>{child.label}</span>
                  <span className={s.megaDesc}>{child.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={s.mobileMenu}>
          {NAV.map((item) => (
            <div key={item.label} className={s.mobileItem}>
              {item.children.length > 0 ? (
                <>
                  <button
                    className={`${s.mobileTrigger} ${mobileExpanded === item.label ? s.mobileTriggerOpen : ""}`}
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === item.label ? null : item.label,
                      )
                    }
                  >
                    {item.label}
                    <CaretDown weight="bold" size={13} />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className={s.mobileChildren}>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={s.mobileChild}
                        >
                          <span>{child.label}</span>
                          <span className={s.mobileChildDesc}>
                            {child.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.href} className={s.mobileLink}>
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className={s.mobileCta}>
            <Link href="/admissions/process" className="btn btn-orange">
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
