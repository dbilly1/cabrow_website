import { CalendarDots, Books, Flag, Cross, ForkKnife } from "@phosphor-icons/react/dist/ssr";
import s from "./TrustBar.module.css";

const ITEMS = [
  { icon: <CalendarDots weight="fill" size={20} />, label: "Founded 2019",       bg: "var(--orange-light)", color: "var(--orange)" },
  { icon: <Books       weight="fill" size={20} />, label: "Preschool & Primary", bg: "var(--pink-light)",   color: "var(--pink)" },
  { icon: <Flag        weight="fill" size={20} />, label: "GES Curriculum",      bg: "var(--green-light)",  color: "var(--green)" },
  { icon: <Cross       weight="fill" size={20} />, label: "Faith-Based Values",  bg: "var(--yellow-light)", color: "var(--yellow)" },
  { icon: <ForkKnife   weight="fill" size={20} />, label: "Meals Provided",      bg: "var(--purple-light)", color: "var(--purple)" },
];

export default function TrustBar() {
  return (
    <section id="trust" className={s.trust}>
      <div className={`container ${s.inner}`}>
        {ITEMS.map((item) => (
          <div key={item.label} className={s.item}>
            <div className={s.icon} style={{ background: item.bg, color: item.color }}>
              {item.icon}
            </div>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
