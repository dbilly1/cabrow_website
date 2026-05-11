import { CalendarDots, TrendUp, Star, Target, Binoculars, User } from "@phosphor-icons/react/dist/ssr";
import ScrollReveal from "@/components/ui/ScrollReveal";
import s from "./StoryExpanded.module.css";

const TIMELINE = [
  {
    icon: <CalendarDots weight="fill" size={28} />,
    year: "2019",
    color: "var(--orange)",
    bg: "var(--orange-light)",
    title: "The Beginning",
    text: "Cabrow Educational Center was founded with a simple but powerful vision — to provide quality, faith-rooted early childhood education in the Mallam-Kasoa community.",
  },
  {
    icon: <TrendUp weight="fill" size={28} />,
    year: "Growth",
    color: "var(--green)",
    bg: "var(--green-light)",
    title: "Expanding Our Reach",
    text: "From a modest preschool, Cabrow grew to include a full Primary program, welcoming children from diverse backgrounds and earning the trust of families across the highway corridor.",
  },
  {
    icon: <Star weight="fill" size={28} />,
    year: "Today",
    color: "var(--purple)",
    bg: "var(--purple-light)",
    title: "A Community of Excellence",
    text: "Today, Cabrow stands as a dynamic learning community known for strong values, creative teaching, and an environment where every child is truly seen, known, and loved.",
  },
];

export default function StoryExpanded() {
  return (
    <section className={s.section}>
      <div className="container">
        {/* Intro */}
        <ScrollReveal className={s.intro}>
          <p>
            Founded in 2019, Cabrow began as a modest early learning initiative born out of prayer, vision, and a
            genuine love for children. What started as a small preschool has since evolved into a dynamic educational
            space serving children from diverse backgrounds across the Mallam-Kasoa Highway community.
          </p>
          <p>
            Our classrooms are full of light, life, and learning — where every child is seen, known, and loved.
            Cabrow is not just a school. It is a family, a calling, and a commitment to raising the next generation
            with excellence rooted in faith.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className={s.timeline}>
          {TIMELINE.map((item, i) => (
            <ScrollReveal key={item.year} className={s.tlItem} delay={i * 0.12}>
              <div className={s.tlIcon} style={{ background: item.bg, color: item.color }}>{item.icon}</div>
              <div className={s.tlYear} style={{ color: item.color }}>{item.year}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </ScrollReveal>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className={s.mvGrid}>
          <ScrollReveal direction="left" className={`${s.mvCard} ${s.mission}`}>
            <div className={s.mvIcon}><Target weight="fill" size={32} /></div>
            <h3>Our Mission</h3>
            <p>
              To provide quality education in a structured, supportive, and disciplined environment, fostering
              the intellectual and moral growth of every student entrusted to our care.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="right" className={`${s.mvCard} ${s.vision}`}>
            <div className={s.mvIcon}><Binoculars weight="fill" size={32} /></div>
            <h3>Our Vision</h3>
            <p>
              To nurture well-rounded, disciplined, and academically proficient students equipped with the
              values, character, and skills needed for lifelong success.
            </p>
          </ScrollReveal>
        </div>

        {/* Leadership */}
        <ScrollReveal className={s.leadership}>
          <div className="section-label">Our Leadership</div>
          <h2 className="section-title" style={{ textAlign: "center" }}>Meet the Team</h2>
          <p className="section-sub" style={{ margin: "0 auto 40px", textAlign: "center" }}>
            Cabrow is led by passionate, purpose-driven educators who are present, invested, and committed to every child.
          </p>
          <div className={s.teamGrid}>
            {[
              { name: "Headmistress", role: "School Director & Founder", color: "var(--orange)" },
              { name: "Lead Teacher", role: "Preschool Lead Educator", color: "var(--green)" },
              { name: "Primary Coordinator", role: "Basic School Coordinator", color: "var(--purple)" },
            ].map((member) => (
              <div key={member.role} className={s.memberCard}>
                <div className={s.avatar} style={{ background: member.color }}>
                  <User weight="fill" size={40} />
                </div>
                <h4>{member.name}</h4>
                <span>{member.role}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
