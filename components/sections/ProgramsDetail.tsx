import { Clock, Users, BookOpen, ChartBar, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import ScrollReveal from "@/components/ui/ScrollReveal";
import s from "./ProgramsDetail.module.css";

const PRESCHOOL_DETAIL = {
  id: "preschool",
  color: "var(--orange)",
  bg: "var(--orange-light)",
  schedule: [
    { time: "7:30 – 8:00", activity: "Arrival & Free Play" },
    { time: "8:00 – 8:30", activity: "Morning Assembly & Devotion" },
    { time: "8:30 – 10:00", activity: "Structured Learning (Literacy & Numeracy)" },
    { time: "10:00 – 10:30", activity: "Snack Break & Outdoor Play" },
    { time: "10:30 – 12:00", activity: "Creative Arts, Music & Sensorial Activities" },
    { time: "12:00 – 12:45", activity: "Lunch & Rest" },
    { time: "12:45 – 2:30", activity: "Story Time, Drama & Practical Life" },
    { time: "2:30 – 3:00", activity: "Review, Pack-up & Dismissal" },
  ],
  approach: [
    { icon: <Users weight="fill" size={22} />, title: "Small Class Sizes", text: "Low teacher-to-child ratios ensure every child receives personal attention and tailored support." },
    { icon: <BookOpen weight="fill" size={22} />, title: "Play-Based Learning", text: "Children learn best through play. Our curriculum balances structured lessons with creative exploration." },
    { icon: <ChartBar weight="fill" size={22} />, title: "Ongoing Assessment", text: "Teachers observe and document each child's development, keeping parents informed every step of the way." },
  ],
};

const PRIMARY_DETAIL = {
  id: "primary",
  color: "var(--green)",
  bg: "var(--green-light)",
  schedule: [
    { time: "7:30 – 8:00", activity: "Arrival & Morning Prep" },
    { time: "8:00 – 8:30", activity: "School Assembly & Devotion" },
    { time: "8:30 – 10:30", activity: "Core Subjects (English, Maths, Science)" },
    { time: "10:30 – 11:00", activity: "Break & Physical Activity" },
    { time: "11:00 – 12:30", activity: "Social Studies, RME, French or ICT" },
    { time: "12:30 – 1:15", activity: "Lunch Break" },
    { time: "1:15 – 2:30", activity: "Creative Arts, Spelling Bee Prep, Reading Circles" },
    { time: "2:30 – 3:00", activity: "Homework Time & Dismissal" },
  ],
  approach: [
    { icon: <Users weight="fill" size={22} />, title: "GES-Aligned Curriculum", text: "We follow the Ghana Education Service curriculum, enriched with project-based learning and critical thinking activities." },
    { icon: <BookOpen weight="fill" size={22} />, title: "Co-Curricular Activities", text: "French, ICT, Drama, Reading Circles and Spelling Bees complement core subjects and develop well-rounded learners." },
    { icon: <ChartBar weight="fill" size={22} />, title: "Term & End-of-Year Assessments", text: "Structured formative and summative assessments track progress, with detailed reports shared each term." },
  ],
};

function ProgramBlock({ data, flip }: { data: typeof PRESCHOOL_DETAIL; flip?: boolean }) {
  return (
    <div id={data.id} className={`${s.block} ${flip ? s.flip : ""}`}>
      {/* Schedule */}
      <ScrollReveal direction={flip ? "right" : "left"} className={s.scheduleCol}>
        <h3 style={{ color: data.color }}>
          <Clock weight="fill" size={20} style={{ verticalAlign: "middle", marginRight: 8 }} />
          Sample Daily Schedule
        </h3>
        <div className={s.schedule}>
          {data.schedule.map((row) => (
            <div key={row.time} className={s.row}>
              <span className={s.time} style={{ color: data.color }}>{row.time}</span>
              <span className={s.activity}>{row.activity}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Approach */}
      <ScrollReveal direction={flip ? "left" : "right"} className={s.approachCol}>
        <h3>Our Teaching Approach</h3>
        <div className={s.cards}>
          {data.approach.map((card) => (
            <div key={card.title} className={s.card} style={{ borderLeftColor: data.color }}>
              <div className={s.cardIcon} style={{ color: data.color, background: data.bg }}>{card.icon}</div>
              <div>
                <h4>{card.title}</h4>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}

export default function ProgramsDetail() {
  return (
    <section className={s.section}>
      <div className="container">
        <ScrollReveal className={s.header}>
          <h2 className="section-title">Inside Our Programs</h2>
          <p className="section-sub">A closer look at what each day looks like and how we approach learning.</p>
        </ScrollReveal>

        <ProgramBlock data={PRESCHOOL_DETAIL} />

        <div className={s.divider} />

        <ProgramBlock data={PRIMARY_DETAIL} flip />
      </div>
    </section>
  );
}
