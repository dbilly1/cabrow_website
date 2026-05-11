import { ForkKnife, BowlFood, Package, DropHalf } from "@phosphor-icons/react/dist/ssr";
import ScrollReveal from "@/components/ui/ScrollReveal";
import s from "./Meals.module.css";

const PILLS = [
  { icon: <BowlFood  weight="fill" size={22} />, text: "Healthy, child-friendly meals available daily" },
  { icon: <Package   weight="fill" size={22} />, text: "Monthly feeding packages at affordable rates" },
  { icon: <DropHalf  weight="fill" size={22} />, text: "Supervised mealtime routines promoting hygiene & manners" },
];

export default function Meals() {
  return (
    <section id="meals" className={s.meals}>
      <div className={`container ${s.grid}`}>
        {/* Visual */}
        <ScrollReveal direction="left" className={s.visual}>
          <div className={s.circle} />
          <div className={s.dot} />
          <ForkKnife weight="fill" size={96} className={s.icon} />
        </ScrollReveal>

        {/* Content */}
        <ScrollReveal direction="right">
          <div className="section-label" style={{ background:"var(--yellow-light)", color:"#a16207" }}>Nourishment</div>
          <h2 className="section-title">Meals &amp; Feeding</h2>
          <p className="section-sub" style={{ maxWidth:"100%" }}>
            At Cabrow, we believe a well-fed child is a well-learning child. Our meals program ensures
            every learner is nourished and energized throughout the school day.
          </p>
          <div className={s.pills}>
            {PILLS.map((p) => (
              <div key={p.text} className={s.pill}>
                <div className={s.pillIcon}>{p.icon}</div>
                <span>{p.text}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <div className="wave" style={{ marginTop: "72px" }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,60 C480,0 960,60 1440,0 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
