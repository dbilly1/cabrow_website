import {
  Globe,
  AppleLogo,
  Bus,
  MaskHappy,
  PencilLine,
  BookOpen,
  PaintBrush,
  GlobeHemisphereWest,
  Briefcase,
} from "@phosphor-icons/react/dist/ssr";
import ScrollReveal from "@/components/ui/ScrollReveal";
import s from "./SchoolLife.module.css";

const EVENTS = [
  {
    icon: <Globe weight="fill" size={32} />,
    title: "Cultural Celebration Days",
    sub: "Celebrating Ghana's rich heritage",
    bg: "#fde8d0",
  },
  {
    icon: <AppleLogo weight="fill" size={32} />,
    title: "Fruits Day & Career Day",
    sub: "Healthy habits & future aspirations",
    bg: "#fdf2f8",
  },
  {
    icon: <Bus weight="fill" size={32} />,
    title: "Educational Excursions",
    sub: "Learning outside the four walls",
    bg: "#f0fdf4",
  },
  {
    icon: <MaskHappy weight="fill" size={32} />,
    title: "Talent Shows",
    sub: "Every child gets to shine",
    bg: "#f3eeff",
  },
  {
    icon: <PencilLine weight="fill" size={32} />,
    title: "Spelling Bee & Quiz Competitions",
    sub: "Sharpening minds through fun",
    bg: "#fefce8",
  },
  {
    icon: <BookOpen weight="fill" size={32} />,
    title: "Reading Challenges & Rewards",
    sub: "Building a love for books",
    bg: "#e0f2fe",
  },
  {
    icon: <PaintBrush weight="fill" size={32} />,
    title: "Colour Day",
    sub: "Creativity and self-expression",
    bg: "#fce7f3",
  },
  {
    icon: <GlobeHemisphereWest weight="fill" size={32} />,
    title: "African Diversity Day",
    sub: "Celebrating our continent's richness",
    bg: "#dcfce7",
  },
  {
    icon: <Briefcase weight="fill" size={32} />,
    title: "Career Day",
    sub: "Inspiring big dreams, early",
    bg: "#ede9fe",
  },
];

export default function SchoolLife() {
  return (
    <section id="school-life" className={s.section}>
      <div className="container">
        <ScrollReveal className={s.header}>
          <h2 className="section-title">Learning Beyond Classroom</h2>
          <p className="section-sub">
            Rich experiences that shape character, celebrate culture, and build
            lifelong memories.
          </p>
        </ScrollReveal>

        <div className={s.grid}>
          {EVENTS.map((ev, i) => (
            <ScrollReveal
              key={ev.title}
              className={s.card}
              style={{ background: ev.bg }}
              delay={i * 0.07}
            >
              <div className={s.icon}>{ev.icon}</div>
              <h4>{ev.title}</h4>
              <p>{ev.sub}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
