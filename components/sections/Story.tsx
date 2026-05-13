import Image from "next/image";
import { Target, Binoculars } from "@phosphor-icons/react/dist/ssr";
import ScrollReveal from "@/components/ui/ScrollReveal";
import s from "./Story.module.css";

const COLLAGE = [
  {
    image: "/Images/3.jpg",
    label: "Preschool Class",
    cls: s.c1,
  },
  {
    image: "/Images/4.jpg",
    label: "Library & Reading",
    cls: s.c2,
  },
  {
    image: "/Images/5.jpg",
    label: "Creative Arts",
    cls: s.c3,
  },
  {
    image: "/Images/6.jpg",
    label: "Outdoor Learning",
    cls: s.c4,
  },
];

export default function Story() {
  return (
    <section id="story" className={s.story}>
      <div className="wave">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C360,60 1080,0 1440,60 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      <div className={`container ${s.grid}`}>
        {/* Left: text */}
        <ScrollReveal direction="left">
          <h2 className="section-title">Where Faith Met Purpose</h2>
          <p className={s.body}>
            Founded in 2019, Cabrow began as a modest early learning initiative
            and has since evolved into a dynamic educational space serving
            children from diverse backgrounds. Originally established to meet
            the needs of learners who required a tailored approach to
            foundational education, Cabrow has grown into a school known for its
            strong values, creative teaching methods, and inclusive environment.
          </p>
          <p className={s.body}>
            Our classrooms are full of light, life, and learning where every
            child is seen, known, and loved.
          </p>

          <div className={s.quotes}>
            <div className={`${s.quote} ${s.mission}`}>
              <strong>
                <Target
                  weight="fill"
                  size={16}
                  style={{ color: "var(--orange)" }}
                />{" "}
                Our Mission
              </strong>
              <p>
                To provide quality education in a structured, supportive, and
                disciplined environment, fostering the intellectual and moral
                growth of our students.
              </p>
            </div>
            <div className={`${s.quote} ${s.vision}`}>
              <strong>
                <Binoculars
                  weight="fill"
                  size={16}
                  style={{ color: "var(--purple)" }}
                />{" "}
                Our Vision
              </strong>
              <p>
                To nurture well-rounded, disciplined, and academically
                proficient students equipped for lifelong success.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Right: collage */}
        <ScrollReveal direction="right" className={s.collage}>
          {COLLAGE.map((c) => (
            <div key={c.label} className={`${s.colCard} ${c.cls}`}>
              <Image
                src={c.image}
                alt={c.label}
                fill
                className={s.colCardImage}
              />
              <div className={s.colLabel}>{c.label}</div>
            </div>
          ))}
        </ScrollReveal>
      </div>

      <div className="wave" style={{ marginTop: "72px" }}>
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C360,0 1080,60 1440,0 L1440,60 L0,60 Z"
            fill="#F97316"
          />
        </svg>
      </div>
    </section>
  );
}
