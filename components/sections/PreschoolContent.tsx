import {
  BookOpen, Palette, MusicNote, FlowerLotus,
  Leaf, Star, Heart, Tree,
} from "@phosphor-icons/react/dist/ssr";
import Placeholder from "@/components/ui/Placeholder";
import s from "./ProgramContent.module.css";

const CURRICULUM = [
  { icon: <BookOpen weight="fill" size={18} />, label: "Language & Literacy", color: "var(--purple)" },
  { icon: <Star weight="fill" size={18} />, label: "Numeracy & Counting", color: "var(--orange)" },
  { icon: <MusicNote weight="fill" size={18} />, label: "Rhymes, Music & Movement", color: "var(--pink)" },
  { icon: <FlowerLotus weight="fill" size={18} />, label: "Sensorial Play", color: "var(--yellow)" },
  { icon: <Palette weight="fill" size={18} />, label: "Creative Arts & Drawing", color: "var(--green)" },
  { icon: <Heart weight="fill" size={18} />, label: "Practical Life Skills", color: "var(--purple)" },
  { icon: <Leaf weight="fill" size={18} />, label: "Early Science & Nature", color: "var(--orange)" },
  { icon: <Tree weight="fill" size={18} />, label: "Outdoor Exploration", color: "var(--pink)" },
];

export default function PreschoolContent() {
  return (
    <div className={s.content}>

      {/* Welcome */}
      <section className={s.section}>
        <div className={s.welcome}>
          <div className={s.welcomeText}>
            <h2 className={s.h2}>Preschool Programme <span>(Age 2–5)</span></h2>
            <p>Our Preschool is designed to give every child the very best start. For children aged 2 to 5, this is a time of wonder, discovery, and rapid development — and our programme is carefully crafted to nurture every aspect of that growth.</p>
            <p>We blend structured learning with free play, creative expression with quiet reflection, and individual attention with collaborative fun. Our Early Years teachers are warm, patient, and passionate about supporting each child exactly where they are.</p>
            <p>Originally established to meet the needs of learners who required a more tailored approach to foundational education, Cabrow&apos;s Preschool has grown into a setting known for its strong values, creative teaching methods, and inclusive environment.</p>
          </div>
          <Placeholder aspect="4/3" className={s.welcomeImg} label="Preschool classroom" />
        </div>
      </section>

      {/* What We Teach */}
      <section className={s.section}>
        <h3 className={s.h3}>What We Teach</h3>
        <p className={s.lead}>Our preschool curriculum is built around holistic development — nurturing the head, heart, and hands of every child aged 2 to 5.</p>
        <div className={s.curriculumGrid}>
          {CURRICULUM.map((c) => (
            <div key={c.label} className={s.curriculumItem} style={{ borderColor: c.color + "55", background: c.color + "10" }}>
              <span style={{ color: c.color }}>{c.icon}</span>
              <span className={s.curriculumLabel}>{c.label}</span>
            </div>
          ))}
        </div>
        <Placeholder aspect="16/5" label="Preschool learning activities" style={{ marginTop: 24 }} />
      </section>

      {/* A day in preschool */}
      <section className={s.section}>
        <h3 className={s.h3}>A Day in Preschool</h3>
        <p className={s.lead}>Structure and routine help young children feel safe and ready to learn. Here&apos;s a glimpse of what a typical Preschool day looks like at Cabrow.</p>
        <table className={s.scheduleTable}>
          <thead>
            <tr><th>Time</th><th>Activity</th></tr>
          </thead>
          <tbody>
            {[
              { time: "7:30 AM", activity: "Gates Open / Drop-off Begins" },
              { time: "8:00 AM", activity: "Morning Greetings & Circle Time" },
              { time: "8:30 AM", activity: "Literacy & Numeracy Activities" },
              { time: "10:00 AM", activity: "Snack Time & Outdoor Play" },
              { time: "10:30 AM", activity: "Creative Arts / Sensorial Play" },
              { time: "12:00 PM", activity: "Lunch & Rest Period" },
              { time: "1:00 PM", activity: "Storytelling / Music & Movement" },
              { time: "2:30 PM", activity: "Closing Circle & Pack-up" },
              { time: "3:00 PM", activity: "School Closes / Pick-up" },
            ].map((r) => (
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
        <h3 className={s.h3}>Life in Preschool</h3>
        <div className={s.photoGrid}>
          <Placeholder aspect="1/1" label="Classroom" />
          <Placeholder aspect="1/1" label="Playtime" />
          <Placeholder aspect="1/1" label="Learning" />
          <Placeholder aspect="1/1" label="Arts & Crafts" />
          <Placeholder aspect="1/1" label="Story Time" />
          <Placeholder aspect="1/1" label="Outdoors" />
        </div>
      </section>

    </div>
  );
}
