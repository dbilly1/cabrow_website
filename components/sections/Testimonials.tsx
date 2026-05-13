"use client";
import { useState } from "react";
import s from "./Testimonials.module.css";

const TESTIMONIALS = [
  {
    stars: 5,
    text: "Cabrow has been a blessing for our family. From day one, the teachers showed so much love and patience with our daughter. She went from being shy to eager and excited about school every morning. The discipline, the faith, the care, it's all there.",
    name: "Mrs. Adwoa Mensah",
    role: "Parent - Preschool Class",
    initials: "AM",
    color: "var(--orange)",
  },
  {
    stars: 5,
    text: "What I love most about Cabrow is how hands-on the leadership is. The headmistress knows every child by name. The environment is warm, structured, and values-driven. My son has grown so much academically and in character. We're truly grateful.",
    name: "Mr. Kofi Asante",
    role: "Parent - Primary Class",
    initials: "KA",
    color: "var(--green)",
  },
  {
    stars: 5,
    text: "As a working mum, I needed a school I could trust completely. Cabrow gave me that peace of mind. The meals are healthy, the teachers are attentive, and my children come home singing songs and sharing what they learned. I recommend Cabrow to every parent.",
    name: "Madam Efua Boateng",
    role: "Parent - Two children enrolled",
    initials: "EB",
    color: "var(--pink)",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  const prev = () =>
    setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIdx((i) => (i + 1) % TESTIMONIALS.length);

  const t = TESTIMONIALS[idx];

  return (
    <section id="testimonials" className={s.section}>
      <div className="wave">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C480,0 960,60 1440,0 L1440,0 L0,0 Z"
            fill="var(--cream)"
          />
        </svg>
      </div>

      <div className="container">
        <div className={s.header}>
          <h2 className="section-title">What Our Parents Say</h2>
          <p className="section-sub">
            Real words from real families who trust Cabrow with their most
            precious ones.
          </p>
        </div>

        <div className={s.card}>
          <div className={s.stars}>{"★".repeat(t.stars)}</div>
          <div className={s.mark}>&ldquo;</div>
          <p className={s.text}>{t.text}</p>
          <div className={s.author}>
            <div className={s.avatar} style={{ background: t.color }}>
              {t.initials}
            </div>
            <div>
              <div className={s.name}>{t.name}</div>
              <div className={s.role}>{t.role}</div>
            </div>
          </div>
        </div>

        <div className={s.controls}>
          <button onClick={prev} className={s.btn} aria-label="Previous">
            ←
          </button>
          <div className={s.dots}>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={`${s.dot} ${i === idx ? s.active : ""}`}
                onClick={() => setIdx(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} className={s.btn} aria-label="Next">
            →
          </button>
        </div>
      </div>

      <div className="wave" style={{ marginTop: "72px" }}>
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C480,60 960,0 1440,60 L1440,60 L0,60 Z"
            fill="var(--cream)"
          />
        </svg>
      </div>
    </section>
  );
}
