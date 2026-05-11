import {
  BookOpen, Palette, Globe, Laptop,
  MicrophoneStage, Star, Heart, Leaf,
} from "@phosphor-icons/react/dist/ssr";
import Placeholder from "@/components/ui/Placeholder";
import s from "./ProgramContent.module.css";

const CURRICULUM = [
  { icon: <BookOpen weight="fill" size={18} />, label: "English Language & Literacy", color: "var(--purple)" },
  { icon: <Star weight="fill" size={18} />, label: "Mathematics", color: "var(--orange)" },
  { icon: <Leaf weight="fill" size={18} />, label: "Science & Environmental Studies", color: "var(--green)" },
  { icon: <Globe weight="fill" size={18} />, label: "Social Studies & Our World", color: "var(--pink)" },
  { icon: <Heart weight="fill" size={18} />, label: "Religious & Moral Education", color: "var(--yellow)" },
  { icon: <Globe weight="fill" size={18} />, label: "French (Introductory)", color: "var(--purple)" },
  { icon: <Laptop weight="fill" size={18} />, label: "ICT & Digital Skills", color: "var(--orange)" },
  { icon: <Palette weight="fill" size={18} />, label: "Creative Arts & PE", color: "var(--pink)" },
];

const ENRICHMENT = [
  { icon: <BookOpen weight="fill" size={18} />, label: "Project-Based Learning", color: "var(--purple)" },
  { icon: <Star weight="fill" size={18} />, label: "Reading Circles", color: "var(--orange)" },
  { icon: <Star weight="fill" size={18} />, label: "Weekly Quizzes & Spelling Bees", color: "var(--green)" },
  { icon: <MicrophoneStage weight="fill" size={18} />, label: "Storytelling & Drama", color: "var(--pink)" },
];

const SCHEDULE = [
  { time: "7:30 AM", activity: "School Gates Open / Drop-off Begins" },
  { time: "8:00 AM", activity: "Morning Assembly & Devotion" },
  { time: "8:20 AM", activity: "First Lesson Block" },
  { time: "10:00 AM", activity: "Break Time" },
  { time: "10:20 AM", activity: "Second Lesson Block" },
  { time: "12:00 PM", activity: "Lunch & Rest Period" },
  { time: "12:45 PM", activity: "Third Lesson Block" },
  { time: "2:30 PM", activity: "Closing Activities & Review" },
  { time: "3:00 PM", activity: "School Closes / Pick-up" },
];

export default function PrimaryContent() {
  return (
    <div className={s.content}>

      {/* Welcome */}
      <section className={s.section}>
        <div className={s.welcome}>
          <div className={s.welcomeText}>
            <h2 className={s.h2}>Primary School <span>(Basic 1–6)</span></h2>
            <p>Cabrow&apos;s Primary School programme serves children aged 6 to 12 (Basic 1–6), following the Ghana Education Service (GES) curriculum — and going well beyond it. We enrich every lesson with creativity, values, and hands-on learning experiences that prepare children not just academically, but for life.</p>
            <p>The primary years are when lifelong habits, character, and academic confidence are built. Our teachers know every child by name and by need, creating a classroom culture where effort is celebrated and every learner is supported to reach their potential.</p>
          </div>
          <Placeholder aspect="4/3" className={s.welcomeImg} label="Primary classroom" />
        </div>
      </section>

      {/* GES Curriculum */}
      <section className={s.section}>
        <h3 className={s.h3}>The GES Curriculum at Cabrow</h3>
        <p className={s.lead}>We follow the Ghana Education Service curriculum for Basic 1–6, enriched with additional programmes that develop well-rounded, forward-thinking learners.</p>
        <div className={s.curriculumGrid}>
          {CURRICULUM.map((c) => (
            <div key={c.label} className={s.curriculumItem} style={{ borderColor: c.color + "55", background: c.color + "10" }}>
              <span style={{ color: c.color }}>{c.icon}</span>
              <span className={s.curriculumLabel}>{c.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Enrichment */}
      <section className={s.section}>
        <h3 className={s.h3}>Curriculum Enrichment</h3>
        <p className={s.lead}>Beyond the GES syllabus, we layer in enrichment activities that develop critical thinking, communication, and creativity.</p>
        <div className={s.curriculumGrid}>
          {ENRICHMENT.map((c) => (
            <div key={c.label} className={s.curriculumItem} style={{ borderColor: c.color + "55", background: c.color + "10" }}>
              <span style={{ color: c.color }}>{c.icon}</span>
              <span className={s.curriculumLabel}>{c.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Daily Schedule */}
      <section className={s.section}>
        <h3 className={s.h3}>A Typical School Day</h3>
        <p className={s.lead}>Consistent routines help children thrive. Here&apos;s how the day flows in Primary at Cabrow.</p>
        <table className={s.scheduleTable}>
          <thead>
            <tr><th>Time</th><th>Activity</th></tr>
          </thead>
          <tbody>
            {SCHEDULE.map((r) => (
              <tr key={r.time}>
                <td><strong>{r.time}</strong></td>
                <td>{r.activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Photo grid */}
      <section className={s.section}>
        <h3 className={s.h3}>Life in Primary School</h3>
        <div className={s.photoGrid}>
          <Placeholder aspect="1/1" label="Classroom" />
          <Placeholder aspect="1/1" label="Sports Day" />
          <Placeholder aspect="1/1" label="Science" />
          <Placeholder aspect="1/1" label="Drama" />
          <Placeholder aspect="1/1" label="Library" />
          <Placeholder aspect="1/1" label="Outdoors" />
        </div>
      </section>

    </div>
  );
}
