import type { Metadata } from "next";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContentLayout from "@/components/ui/ContentLayout";
import CTA from "@/components/ui/CTA";
import s from "@/components/ui/InfoPage.module.css";

export const metadata: Metadata = {
  title: "Enrichment Programs — Cabrow Educational Center",
  description: "Discover Cabrow's enrichment programs including school events, talent shows, spelling bees, cultural days, and beyond-the-classroom activities.",
};

const QUICK_LINKS = [
  { label: "Curriculum", href: "/learning/curriculum" },
  { label: "Enrichment Programs", href: "/learning/enrichment" },
  { label: "Academic Calendar", href: "/learning/calendar" },
  { label: "Assessments", href: "/learning/assessments" },
  { label: "Learning Support", href: "/learning/support" },
  { label: "School Hours", href: "/learning/hours" },
];

const CATEGORIES = [
  {
    title: "Co-Curricular Activities",
    color: "var(--purple)",
    bg: "var(--purple-light)",
    desc: "Integrated into the school week, these activities complement classroom learning and ensure holistic development.",
    items: [
      "Physical Education (PE) — fitness, teamwork, coordination",
      "Creative Arts & Drama — self-expression and performance",
      "Music & Rhymes — rhythm, singing, and musical appreciation",
      "Outdoor Exploration — nature walks and environmental activities",
      "Reading Circles — group reading and comprehension sessions",
    ],
  },
  {
    title: "School Events & Celebrations",
    color: "var(--orange)",
    bg: "var(--orange-light)",
    desc: "Regular school events build community, celebrate culture, and give every child a moment to shine.",
    items: [
      "Cultural Celebration Days — honouring Ghana's rich heritage",
      "Fruits Day & Career Day — healthy habits and future aspirations",
      "Colour Day — creativity and self-expression",
      "African Diversity Day — celebrating our continent's richness",
      "Career Day — inspiring big dreams from a young age",
      "Talent Shows — every child gets a moment in the spotlight",
    ],
  },
  {
    title: "Academic Enrichment",
    color: "var(--green)",
    bg: "var(--green-light)",
    desc: "Programmes that sharpen academic skills while making learning fun and competitive.",
    items: [
      "Spelling Bee Competitions — building vocabulary and confidence",
      "Weekly Quiz Challenges — reinforcing classroom learning",
      "Storytelling & Drama Sessions — communication and creativity",
      "Project-Based Learning Activities — real-world problem solving",
      "Reading Challenges & Rewards — cultivating a love for books",
    ],
  },
  {
    title: "Educational Excursions & Field Trips",
    color: "var(--pink)",
    bg: "var(--pink-light)",
    desc: "Learning that happens beyond the classroom walls is some of the most powerful.",
    items: [
      "Educational excursions to relevant community and national sites",
      "Field learning activities linked to current curriculum topics",
      "Supervised outdoor activities and nature-based learning",
    ],
  },
];

export default function EnrichmentPage() {
  return (
    <>
      <PageHero title="Enrichment Programs" subtitle="We believe in nurturing the whole child — giving every learner opportunities to discover their passions, develop new skills, and celebrate who they are." />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Learning", href: "/learning/curriculum" }, { label: "Enrichment Programs" }]} />

      <div className="container">
        <ContentLayout quickLinksTitle="Learning" quickLinks={QUICK_LINKS}>
          <div className={s.content}>

            <section className={s.section}>
              <h2 className={s.h2}>Beyond the Classroom</h2>
              <p className={s.lead}>At Cabrow, enrichment is not an add-on — it is built into the fabric of our school life. From co-curricular activities woven into the school week to major events that the whole school community looks forward to, we create opportunities for every child to grow beyond academics.</p>
            </section>

            {CATEGORIES.map((cat) => (
              <section key={cat.title} className={s.section}>
                <div className={s.highlightPurple} style={{ background: cat.bg, borderColor: cat.color + "33" }}>
                  <h3 style={{ fontFamily: "var(--font-fredoka),cursive", fontSize: "1.15rem", color: cat.color, marginBottom: 8 }}>{cat.title}</h3>
                  <p style={{ fontSize: ".88rem", color: "var(--text-muted)", marginBottom: 16, lineHeight: 1.65 }}>{cat.desc}</p>
                  <ul className={s.checkList}>
                    {cat.items.map((item) => (
                      <li key={item}>
                        <CheckCircle weight="fill" size={16} style={{ color: cat.color }} />
                        <span style={{ fontSize: ".88rem" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            ))}

          </div>
        </ContentLayout>
      </div>
      <CTA headline="Enroll Your Child at Cabrow" sub="Give them more than academics — give them a full school life." primaryLabel="Admission Process" primaryHref="/admissions/process" secondaryLabel="Contact Us" secondaryHref="/contact" />
    </>
  );
}
