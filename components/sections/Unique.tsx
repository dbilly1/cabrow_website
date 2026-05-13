import {
  HandsPraying,
  Heart,
  Sparkle,
  Coins,
  Hand,
} from "@phosphor-icons/react/dist/ssr";
import ScrollReveal from "@/components/ui/ScrollReveal";
import s from "./Unique.module.css";

const CARDS = [
  {
    icon: <HandsPraying weight="fill" size={36} />,
    color: "var(--orange)",
    bg: "var(--orange-light)",
    title: "Born Out of Vision, Prayer & Purpose",
    text: "Cabrow was not built by accident. It was founded with deep faith and a clear God-given mandate to serve children with excellence.",
  },
  {
    icon: <Heart weight="fill" size={36} />,
    color: "var(--pink)",
    bg: "var(--pink-light)",
    title: "Every Child Is Celebrated",
    text: "A family-like environment where every learner is seen, known, and deeply valued. Not just as a student, but as a person.",
  },
  {
    icon: <Sparkle weight="fill" size={36} />,
    color: "var(--yellow)",
    bg: "var(--yellow-light)",
    title: "Excellence Rooted in Godliness",
    text: "We hold the highest standards in both academic performance and moral character, keeping the God factor at the core of everything.",
  },
  {
    icon: <Coins weight="fill" size={36} />,
    color: "var(--green)",
    bg: "var(--green-light)",
    title: "Affordable Quality Education",
    text: "Every child deserves excellent education regardless of background. We keep quality high and fees accessible without compromise.",
  },
  {
    icon: <Hand weight="fill" size={36} />,
    color: "var(--purple)",
    bg: "var(--purple-light)",
    title: "Hands-On, Passionate Leadership",
    text: "Our leadership team is purpose-led, present, and passionate. Always actively involved in the growth of every child and teacher.",
  },
];

export default function Unique() {
  return (
    <section id="unique" className={s.unique}>
      <div className="container">
        <ScrollReveal className={s.header}>
          <h2 className="section-title">What Makes Cabrow Unique?</h2>
          <p className="section-sub">
            More than a school, a community built on faith, purpose, and a
            genuine love for every child.
          </p>
        </ScrollReveal>

        <div className={s.grid}>
          {CARDS.map((card, i) => (
            <ScrollReveal
              key={card.title}
              className={s.card}
              style={{ background: card.bg }}
              delay={i * 0.08}
            >
              <div className={s.icon} style={{ color: card.color }}>
                {card.icon}
              </div>
              <h4>{card.title}</h4>
              <p>{card.text}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
