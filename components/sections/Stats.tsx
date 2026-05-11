import s from "./Stats.module.css";

const STATS = [
  { num: "2019", label: "Year Founded" },
  { num: "2",    label: "Programs Offered" },
  { num: "7",    label: "Core Values" },
  { num: "100%", label: "Faith-Led Leadership" },
];

export default function Stats() {
  return (
    <section id="stats" className={s.stats}>
      <div className={`container ${s.grid}`}>
        {STATS.map((stat) => (
          <div key={stat.label} className={s.item}>
            <div className={s.num}>{stat.num}</div>
            <div className={s.label}>{stat.label}</div>
          </div>
        ))}
      </div>
      <div className="wave" style={{ marginTop: "0" }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,0 C360,60 1080,0 1440,60 L1440,60 L0,60 Z" fill="var(--yellow-light)" />
        </svg>
      </div>
    </section>
  );
}
