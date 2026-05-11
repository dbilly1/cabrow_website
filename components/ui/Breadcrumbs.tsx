import Link from "next/link";
import s from "./Breadcrumbs.module.css";

interface Item { label: string; href?: string; }

export default function Breadcrumbs({ items }: { items: Item[] }) {
  return (
    <nav className={s.nav} aria-label="Breadcrumb">
      <div className={`container ${s.inner}`}>
        {items.map((item, i) => (
          <span key={item.label} className={s.item}>
            {i > 0 && <span className={s.sep}>›</span>}
            {item.href
              ? <Link href={item.href}>{item.label}</Link>
              : <span className={s.current}>{item.label}</span>
            }
          </span>
        ))}
      </div>
    </nav>
  );
}
