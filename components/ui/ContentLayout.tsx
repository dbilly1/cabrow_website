import Link from "next/link";
import s from "./ContentLayout.module.css";

export interface QuickLink { label: string; href: string; }

interface Props {
  quickLinksTitle: string;
  quickLinks: QuickLink[];
  children: React.ReactNode;
}

export default function ContentLayout({ quickLinksTitle, quickLinks, children }: Props) {
  return (
    <div className={s.wrapper}>
      <aside className={s.sidebar}>
        <div className={s.sideCard}>
          <h5 className={s.sideTitle}>{quickLinksTitle}</h5>
          <ul className={s.linkList}>
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={s.sideLink}>
                  <span className={s.arrow}>›</span>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact mini-card */}
        <div className={s.contactCard}>
          <p className={s.contactTitle}>Need Help?</p>
          <p className={s.contactSub}>Our team is happy to answer your questions.</p>
          <a href="tel:0557110196" className={s.contactPhone}>0557 110 196</a>
          <a href="tel:0244658863" className={s.contactPhone}>0244 658 863</a>
          <Link href="/contact" className="btn btn-orange" style={{ fontSize: ".82rem", padding: "10px 20px", marginTop: "12px", display: "inline-block" }}>
            Contact Us
          </Link>
        </div>
      </aside>

      <main className={s.main}>{children}</main>
    </div>
  );
}
