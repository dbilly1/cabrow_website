import Link from "next/link";
import {
  CheckCircle, Star, Baby, BookOpen, Palette, MusicNote,
  FlowerLotus, Leaf, Tree, House, Users, Toilet, Heart,
} from "@phosphor-icons/react/dist/ssr";
import Placeholder from "@/components/ui/Placeholder";
import s from "./ProgramContent.module.css";
import os from "./SchoolLifeOverview.module.css";

const FACILITIES = [
  { icon: <House weight="fill" size={20} />, text: "Safe & Structured Classrooms" },
  { icon: <BookOpen weight="fill" size={20} />, text: "Teacher Resource Corners" },
  { icon: <Tree weight="fill" size={20} />, text: "Open Play Area for Learners" },
  { icon: <Users weight="fill" size={20} />, text: "Admin Office & Waiting Area" },
  { icon: <Toilet weight="fill" size={20} />, text: "Dedicated Washroom Facilities" },
  { icon: <BookOpen weight="fill" size={20} />, text: "Story Mats & Library Crates" },
  { icon: <Leaf weight="fill" size={20} />, text: "Outdoor Learning Corners" },
];

const VALUES = [
  { name: "Godliness", desc: "Keeping the God factor key in everything we do.", color: "var(--purple)" },
  { name: "Creativity", desc: "Creating an environment that encourages creativity through innovation.", color: "var(--orange)" },
  { name: "Excellence", desc: "Striving for the highest standards in education and character development.", color: "var(--pink)" },
  { name: "Integrity", desc: "Upholding honesty, responsibility, and ethical behavior.", color: "var(--yellow)" },
  { name: "Discipline", desc: "Fostering a structured environment for learning and personal growth.", color: "var(--green)" },
  { name: "Respect", desc: "Encouraging mutual respect among staff, students, and parents.", color: "var(--purple)" },
  { name: "Child Welfare", desc: "Ensuring the safety, well-being, and proper development of every student.", color: "var(--orange)" },
];

const UNIQUE = [
  "A school born out of vision, prayer, and purpose",
  "A family-like environment where every child is seen and celebrated",
  "A culture of excellence rooted in Godliness",
  "Affordable, quality education with values at the core",
  "Hands-on, passionate, purpose-led leadership",
];

const EVENTS = [
  "Cultural Celebration Days",
  "Fruits Day & Career Day",
  "Educational Excursions",
  "Talent Shows",
  "Spelling Bee & Quiz Competitions",
  "Field Learning Activities",
  "Reading Challenges & Rewards",
  "Colour Day",
  "African Diversity Day",
];

const MEALS = [
  "Healthy, child-friendly meals available daily",
  "Monthly feeding packages at affordable rates",
  "Supervised mealtime routines promoting hygiene & manners",
];

export default function SchoolLifeOverview() {
  return (
    <div className={s.content}>

      {/* Welcome */}
      <section className={s.section}>
        <div className={s.welcome}>
          <div className={s.welcomeText}>
            <h2 className={s.h2}>Welcome to <span>Cabrow</span></h2>
            <p>Cabrow Educational Center is a vibrant, purpose-driven school offering quality early childhood and basic education rooted in strong values, creativity, and faith. From humble beginnings in 2019 with just a few learners, we have grown into a nurturing educational hub that supports children academically, morally, and socially.</p>
            <p>Our classrooms are full of light, life, and learning — where every child is seen, known, and loved. We serve two programmes: an Early Years Preschool for children aged 2–5, and a Primary School following the GES curriculum for Basic 1–6.</p>
          </div>
          <Placeholder aspect="4/3" className={s.welcomeImg} label="School campus" />
        </div>
      </section>

      {/* Programme cards */}
      <section className={s.section}>
        <h3 className={s.h3}>Our Two Programmes</h3>
        <p className={s.lead}>Choose the stage that&apos;s right for your child and explore what Cabrow offers at every level.</p>
        <div className={os.programCards}>
          <Link href="/school-life/preschool" className={os.programCard} style={{ borderColor: "var(--pink)" }}>
            <div className={os.programIcon} style={{ background: "var(--pink-light)", color: "var(--pink)" }}>
              <Baby weight="fill" size={36} />
            </div>
            <div className={os.programBody}>
              <div className={os.programTag} style={{ background: "var(--pink-light)", color: "var(--pink)" }}>Age 2–5</div>
              <h4 className={os.programTitle}>Early Years — Preschool</h4>
              <p className={os.programDesc}>Play-based learning, sensorial exploration, literacy foundations, creative arts, and values — all in a warm, nurturing setting tailored for our youngest learners.</p>
              <span className={os.programLink} style={{ color: "var(--pink)" }}>Explore Preschool →</span>
            </div>
          </Link>
          <Link href="/school-life/primary" className={os.programCard} style={{ borderColor: "var(--green)" }}>
            <div className={os.programIcon} style={{ background: "var(--green-light)", color: "var(--green)" }}>
              <BookOpen weight="fill" size={36} />
            </div>
            <div className={os.programBody}>
              <div className={os.programTag} style={{ background: "var(--green-light)", color: "var(--green)" }}>Basic 1–6 · Age 6–12</div>
              <h4 className={os.programTitle}>Primary School</h4>
              <p className={os.programDesc}>GES curriculum enriched with French, ICT, project-based learning, reading circles, spelling bees, and a full calendar of enrichment activities.</p>
              <span className={os.programLink} style={{ color: "var(--green)" }}>Explore Primary →</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Our Story */}
      <section className={s.section}>
        <h3 className={s.h3}>Our Story: Where Faith Met Purpose</h3>
        <div className={s.storyGrid}>
          <Placeholder aspect="4/3" label="Cabrow founders" />
          <div className={s.storyText}>
            <p>Founded in 2019, Cabrow began as a modest early learning initiative and has since evolved into a dynamic educational space serving children from diverse backgrounds. Despite early challenges — including navigating community perceptions and adapting through the COVID-19 pandemic — Cabrow has remained steadfast in delivering quality education rooted in care, discipline, and innovation.</p>
            <p>Today, we serve pupils from diverse backgrounds, offering an education filled with love, discipline, creativity, and purpose — right here at Choice Junction on the Mallam-Kasoa Highway, easily accessible from the surrounding communities.</p>
            <div className={s.tagBox}>
              <strong>Founded:</strong> 2019 &nbsp;·&nbsp; <strong>Location:</strong> Choice Junction, Mallam-Kasoa Highway
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className={s.section}>
        <h3 className={s.h3}>Our Facilities <span className={s.subtitle}>(Modest but Meaningful)</span></h3>
        <p className={s.lead}>A great learning environment doesn&apos;t require extravagance — it requires intention. Every corner of Cabrow is designed with your child&apos;s growth in mind.</p>
        <ul className={s.facilityList}>
          {FACILITIES.map((f) => (
            <li key={f.text}>
              <span className={s.facilityIcon}>{f.icon}</span>
              {f.text}
            </li>
          ))}
        </ul>
      </section>

      {/* Mission & Vision */}
      <section className={s.section}>
        <div className={s.mvGrid}>
          <div className={s.mvCard} style={{ background: "var(--orange-light)", borderColor: "var(--orange)" }}>
            <h4 className={s.mvTitle} style={{ color: "var(--orange)" }}>Our Vision</h4>
            <p>To nurture well-rounded, disciplined, and academically proficient students equipped for lifelong success.</p>
          </div>
          <div className={s.mvCard} style={{ background: "var(--purple-light)", borderColor: "var(--purple)" }}>
            <h4 className={s.mvTitle} style={{ color: "var(--purple)" }}>Our Mission</h4>
            <p>To provide quality education in a structured, supportive, and disciplined environment, fostering the intellectual and moral growth of our students.</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className={s.section}>
        <h3 className={s.h3}>Our Core Values</h3>
        <p className={s.lead}>Seven values that guide everything we do — in the classroom, on the playground, and beyond.</p>
        <div className={s.valuesGrid}>
          {VALUES.map((v) => (
            <div key={v.name} className={s.valueCard}>
              <div className={s.valueDot} style={{ background: v.color }} />
              <div>
                <strong className={s.valueName} style={{ color: v.color }}>{v.name}</strong>
                <p className={s.valueDesc}>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What Makes Cabrow Unique */}
      <section className={s.section}>
        <h3 className={s.h3}>What Makes Cabrow Unique?</h3>
        <ul className={s.uniqueList}>
          {UNIQUE.map((u) => (
            <li key={u}>
              <Star weight="fill" size={16} style={{ color: "var(--orange)", flexShrink: 0, marginTop: 2 }} />
              <span>{u}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Meals */}
      <section className={s.section}>
        <h3 className={s.h3}>Meals & Feeding</h3>
        <p className={s.lead}>We care about the whole child — including what they eat. Our meals programme ensures every child is nourished and energised for learning.</p>
        <ul className={s.checkList}>
          {MEALS.map((m) => (
            <li key={m}>
              <CheckCircle weight="fill" size={18} style={{ color: "var(--orange)", flexShrink: 0 }} />
              {m}
            </li>
          ))}
        </ul>
      </section>

      {/* School Life & Events */}
      <section className={s.section}>
        <h3 className={s.h3}>Learning Beyond the Classroom</h3>
        <p className={s.lead}>School life at Cabrow goes far beyond textbooks. We celebrate culture, nurture talent, and create memories that last a lifetime.</p>
        <ul className={s.checkList}>
          {EVENTS.map((e) => (
            <li key={e}>
              <CheckCircle weight="fill" size={18} style={{ color: "var(--green)", flexShrink: 0 }} />
              {e}
            </li>
          ))}
        </ul>
      </section>

      {/* Photo grid */}
      <section className={s.section}>
        <h3 className={s.h3}>Life at Cabrow</h3>
        <div className={s.photoGrid}>
          <Placeholder aspect="1/1" label="Classroom" />
          <Placeholder aspect="1/1" label="Playtime" />
          <Placeholder aspect="1/1" label="Learning" />
          <Placeholder aspect="1/1" label="Arts & Crafts" />
          <Placeholder aspect="1/1" label="Sports Day" />
          <Placeholder aspect="1/1" label="Assembly" />
        </div>
      </section>

    </div>
  );
}
