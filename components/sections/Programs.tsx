import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import s from "./Programs.module.css";

const PRESCHOOL = [
  "Language & Literacy",
  "Numeracy & Counting",
  "Rhymes, Music & Movement",
  "Sensorial Play",
  "Creative Arts & Drawing",
  "Practical Life Skills",
  "Early Science & Nature",
  "Outdoor Exploration",
];
const PRIMARY = [
  "GES Curriculum — enriched & differentiated",
  "Project-Based Learning",
  "French (Introductory)",
  "ICT & Digital Skills",
  "Reading Circles",
  "Weekly Quizzes & Spelling Bees",
  "Storytelling & Drama",
];

export default function Programs() {
  return (
    <section id="programs" className={s.programs}>
      <div className="wave" style={{ marginTop: "-2px" }}>
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      <div className="container">
        <ScrollReveal className={s.header}>
          <h2 className="section-title">Programs We Offer</h2>
          <p className="section-sub">
            Two carefully crafted programs designed to nurture every child from
            their earliest years through primary school.
          </p>
        </ScrollReveal>

        <div className={s.grid}>
          {/* Preschool */}
          <ScrollReveal className={`${s.card} ${s.pre}`}>
            <Image
              src="/Images/1.jpg"
              alt="Preschool Program"
              width={400}
              height={240}
              className={s.bannerImage}
            />
            <div className={s.body}>
              <span className={`${s.age} ${s.ageOrange}`}>Age 2 – 5 Years</span>
              <h3>Preschool Program</h3>
              <ul className={s.list}>
                {PRESCHOOL.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link
                href="/school-life/preschool"
                className="btn btn-orange"
                style={{ fontSize: ".88rem", padding: "11px 22px" }}
              >
                Learn More →
              </Link>
            </div>
          </ScrollReveal>

          {/* Primary */}
          <ScrollReveal className={`${s.card} ${s.pri}`} delay={0.12}>
            <Image
              src="/Images/2.jpg"
              alt="Primary School Program"
              width={400}
              height={240}
              className={s.bannerImage}
            />
            <div className={s.body}>
              <span className={`${s.age} ${s.ageGreen}`}>Primary School</span>
              <h3>Basic School (Primary)</h3>
              <ul className={s.list}>
                {PRIMARY.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link
                href="/school-life/primary"
                className="btn btn-orange"
                style={{
                  fontSize: ".88rem",
                  padding: "11px 22px",
                  background: "var(--green)",
                }}
              >
                Learn More →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="wave" style={{ marginTop: "72px" }}>
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C360,0 1080,60 1440,30 L1440,60 L0,60 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
