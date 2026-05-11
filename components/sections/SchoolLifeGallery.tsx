import {
  Camera, Star, Trophy, Palette, BookOpen, Users,
  Tree, Heart, MusicNote,
} from "@phosphor-icons/react/dist/ssr";
import ScrollReveal from "@/components/ui/ScrollReveal";
import s from "./SchoolLifeGallery.module.css";

const CATEGORIES = [
  {
    label: "In the Classroom",
    accent: "var(--purple)",
    bg: "var(--purple-light)",
    items: [
      { icon: <BookOpen weight="fill" size={28} />, caption: "Phonics & Reading Sessions" },
      { icon: <Palette weight="fill" size={28} />, caption: "Creative Arts & Craft" },
      { icon: <Star weight="fill" size={28} />, caption: "Morning Circle Time" },
    ],
  },
  {
    label: "Events & Celebrations",
    accent: "var(--orange)",
    bg: "var(--orange-light)",
    items: [
      { icon: <MusicNote weight="fill" size={28} />, caption: "Talent Show & Performances" },
      { icon: <Trophy weight="fill" size={28} />, caption: "Spelling Bee & Quiz Day" },
      { icon: <Heart weight="fill" size={28} />, caption: "Colour Day & Dress-Up" },
    ],
  },
  {
    label: "Outdoors & Community",
    accent: "var(--green)",
    bg: "var(--green-light)",
    items: [
      { icon: <Tree weight="fill" size={28} />, caption: "Outdoor Exploration & Play" },
      { icon: <Users weight="fill" size={28} />, caption: "Career Day Visits" },
      { icon: <Camera weight="fill" size={28} />, caption: "Educational Excursions" },
    ],
  },
];

export default function SchoolLifeGallery() {
  return (
    <section className={s.section}>
      <div className="container">
        <ScrollReveal className={s.header}>
          <div className="section-label">Photo Gallery</div>
          <h2 className="section-title">Life at Cabrow</h2>
          <p className="section-sub">
            A glimpse into the vibrant, joyful world inside our classrooms, grounds, and events.
          </p>
        </ScrollReveal>

        <div className={s.categories}>
          {CATEGORIES.map((cat, ci) => (
            <ScrollReveal key={cat.label} delay={ci * 0.1}>
              <div className={s.catLabel} style={{ color: cat.accent }}>
                <span className={s.catLine} style={{ background: cat.accent }} />
                {cat.label}
                <span className={s.catLine} style={{ background: cat.accent }} />
              </div>
              <div className={s.photoRow}>
                {cat.items.map((item, ii) => (
                  <ScrollReveal key={item.caption} className={s.photoCard} delay={ii * 0.08}>
                    <div className={s.photoPlaceholder} style={{ background: cat.bg }}>
                      <div className={s.photoIcon} style={{ color: cat.accent }}>
                        {item.icon}
                      </div>
                      <div className={s.photoOverlay}>
                        <span className={s.photoCta} style={{ background: cat.accent }}>
                          📸 Photo Coming Soon
                        </span>
                      </div>
                    </div>
                    <p className={s.caption}>{item.caption}</p>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Instagram CTA strip */}
        <ScrollReveal className={s.instaCta}>
          <div className={s.instaInner}>
            <div>
              <h4>Follow Our Journey on Instagram</h4>
              <p>Stay updated with daily life, celebrations, and milestones at Cabrow.</p>
            </div>
            <a
              href="https://instagram.com/cabec_gh"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-orange"
            >
              @cabec_gh ✦
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
