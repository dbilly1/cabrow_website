import {
  HandsPraying, Lightbulb, Trophy, Scales,
  Target, Handshake, ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import ScrollReveal from "@/components/ui/ScrollReveal";
import s from "./Values.module.css";

const VALUES = [
  { icon: <HandsPraying weight="fill" size={36} />, color:"var(--purple)",     bg:"var(--purple-light)", title:"Godliness",     text:"Keeping the God factor key in everything we do" },
  { icon: <Lightbulb    weight="fill" size={36} />, color:"var(--orange)",     bg:"var(--orange-light)", title:"Creativity",    text:"Encouraging innovation through creative teaching" },
  { icon: <Trophy       weight="fill" size={36} />, color:"var(--yellow)",     bg:"var(--yellow-light)", title:"Excellence",    text:"Striving for the highest standards in education" },
  { icon: <Scales       weight="fill" size={36} />, color:"var(--green)",      bg:"var(--green-light)",  title:"Integrity",     text:"Upholding honesty, responsibility, and ethics" },
  { icon: <Target       weight="fill" size={36} />, color:"var(--pink)",       bg:"var(--pink-light)",   title:"Discipline",    text:"A structured environment for learning and growth" },
  { icon: <Handshake    weight="fill" size={36} />, color:"var(--purple-mid)", bg:"#ede9fe",             title:"Respect",       text:"Mutual respect among staff, students, and parents" },
  { icon: <ShieldCheck  weight="fill" size={36} />, color:"var(--orange)",     bg:"var(--orange-light)", title:"Child Welfare", text:"Safety, well-being, and proper development of every child" },
];

export default function Values() {
  return (
    <section id="values" className={s.values}>
      <div className="wave">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      <div className="container">
        <ScrollReveal className={s.header}>
          <div className="section-label">Who We Are</div>
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-sub">Seven pillars that shape how we teach, relate, and grow together as a community.</p>
        </ScrollReveal>

        <div className={s.grid}>
          {VALUES.map((v, i) => (
            <ScrollReveal key={v.title} className={s.card} style={{ background: v.bg }} delay={i * 0.07}>
              <div className={s.icon} style={{ color: v.color }}>{v.icon}</div>
              <h4>{v.title}</h4>
              <p>{v.text}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
