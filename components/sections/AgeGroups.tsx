import { Baby, Smiley, Student, Books } from "@phosphor-icons/react/dist/ssr";
import ScrollReveal from "@/components/ui/ScrollReveal";
import s from "./AgeGroups.module.css";

const GROUPS = [
  {
    icon: <Baby weight="fill" size={36} />,
    label: "Playgroup",
    age: "Age 2 – 3 Years",
    color: "var(--pink)",
    bg: "var(--pink-light)",
    focus: "Socialisation, sensory play, and language foundations.",
    subjects: ["Sensorial Play", "Language Introduction", "Rhymes & Songs", "Practical Life Skills"],
    time: "7:30 AM – 1:00 PM",
  },
  {
    icon: <Smiley weight="fill" size={36} />,
    label: "Nursery",
    age: "Age 3 – 4 Years",
    color: "var(--orange)",
    bg: "var(--orange-light)",
    focus: "Early literacy, numeracy, and creative expression.",
    subjects: ["Literacy Foundations", "Numeracy Basics", "Creative Arts", "Outdoor Exploration"],
    time: "7:30 AM – 2:00 PM",
  },
  {
    icon: <Student weight="fill" size={36} />,
    label: "Kindergarten",
    age: "Age 4 – 5 Years",
    color: "var(--yellow)",
    bg: "var(--yellow-light)",
    focus: "Reading readiness, writing, and structured learning.",
    subjects: ["Phonics & Reading", "Writing Intro", "Early Science", "Music & Movement"],
    time: "7:30 AM – 2:30 PM",
  },
  {
    icon: <Books weight="fill" size={36} />,
    label: "Primary 1 – 6",
    age: "Age 6 – 12 Years",
    color: "var(--green)",
    bg: "var(--green-light)",
    focus: "Full GES curriculum enriched with co-curricular activities.",
    subjects: ["English, Maths & Science", "Social Studies & RME", "French & ICT", "Creative Arts & PE"],
    time: "7:30 AM – 3:00 PM",
  },
];

export default function AgeGroups() {
  return (
    <section id="age-groups" className={s.section}>
      <div className="wave">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="var(--cream)" />
        </svg>
      </div>
      <div className="container">
        <ScrollReveal className={s.header}>
          <div className="section-label">Age Requirements</div>
          <h2 className="section-title">Which Class for Your Child?</h2>
          <p className="section-sub">Each level is thoughtfully designed for its age group. Find where your child fits best.</p>
        </ScrollReveal>

        <div className={s.grid}>
          {GROUPS.map((g, i) => (
            <ScrollReveal key={g.label} className={s.card} delay={i * 0.1}>
              <div className={s.top} style={{ background: g.bg }}>
                <div className={s.icon} style={{ color: g.color }}>{g.icon}</div>
                <div className={s.badge} style={{ background: g.color }}>{g.label}</div>
              </div>
              <div className={s.body}>
                <div className={s.age} style={{ color: g.color }}>{g.age}</div>
                <p className={s.focus}>{g.focus}</p>
                <ul className={s.subjects}>
                  {g.subjects.map((sub) => (
                    <li key={sub} style={{ borderColor: g.color + "44" }}>
                      <span className={s.dot} style={{ background: g.color }} />{sub}
                    </li>
                  ))}
                </ul>
                <div className={s.time}>
                  <span style={{ color: g.color }}>⏰</span> {g.time}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
