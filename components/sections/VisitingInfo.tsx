import {
  Clock, CalendarBlank, CheckCircle, Car, MapPin,
} from "@phosphor-icons/react/dist/ssr";
import ScrollReveal from "@/components/ui/ScrollReveal";
import s from "./VisitingInfo.module.css";

const HOURS = [
  { day: "Monday – Friday", time: "7:00 AM – 4:00 PM" },
  { day: "Saturday", time: "By appointment only" },
  { day: "Sunday", time: "Closed" },
];

const TERMS = [
  { term: "Term 1", dates: "September – December" },
  { term: "Term 2", dates: "January – April" },
  { term: "Term 3", dates: "April – July" },
];

const CHECKLIST = [
  "Bring a valid ID or passport",
  "Come with your child if possible",
  "Allow 30 – 45 minutes for a full tour",
  "Bring any previous school records (if applicable)",
  "Feel free to ask our staff any questions",
];

export default function VisitingInfo() {
  return (
    <section className={s.section}>
      <div className="container">
        <ScrollReveal className={s.header}>
          <div className="section-label">Plan Your Visit</div>
          <h2 className="section-title">Before You Come</h2>
          <p className="section-sub">
            Everything you need to know to plan a smooth first visit to Cabrow.
          </p>
        </ScrollReveal>

        <div className={s.grid}>
          {/* Office Hours */}
          <ScrollReveal className={s.card} direction="left">
            <div className={s.cardTop} style={{ background: "var(--purple-light)" }}>
              <div className={s.cardIcon} style={{ color: "var(--purple)" }}>
                <Clock weight="fill" size={28} />
              </div>
              <h3>Office Hours</h3>
            </div>
            <div className={s.cardBody}>
              <ul className={s.hoursList}>
                {HOURS.map((h) => (
                  <li key={h.day} className={s.hourRow}>
                    <span className={s.hourDay}>{h.day}</span>
                    <span className={s.hourTime}>{h.time}</span>
                  </li>
                ))}
              </ul>
              <p className={s.note}>
                School gates open at <strong>7:00 AM</strong> for drop-off. Pick-up times vary by class level.
              </p>
            </div>
          </ScrollReveal>

          {/* Term Calendar */}
          <ScrollReveal className={s.card}>
            <div className={s.cardTop} style={{ background: "var(--orange-light)" }}>
              <div className={s.cardIcon} style={{ color: "var(--orange)" }}>
                <CalendarBlank weight="fill" size={28} />
              </div>
              <h3>Academic Terms</h3>
            </div>
            <div className={s.cardBody}>
              <p className={s.termIntro}>
                Cabrow follows the <strong>Ghana Education Service (GES)</strong> academic calendar, structured in three terms:
              </p>
              <div className={s.termList}>
                {TERMS.map((t, i) => (
                  <div key={t.term} className={s.termRow} style={{ borderColor: ["var(--purple)", "var(--orange)", "var(--green)"][i] + "44" }}>
                    <span className={s.termBadge} style={{ background: ["var(--purple)", "var(--orange)", "var(--green)"][i] }}>
                      {t.term}
                    </span>
                    <span className={s.termDates}>{t.dates}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* First Visit Checklist */}
          <ScrollReveal className={s.card} direction="right">
            <div className={s.cardTop} style={{ background: "var(--green-light)" }}>
              <div className={s.cardIcon} style={{ color: "var(--green)" }}>
                <CheckCircle weight="fill" size={28} />
              </div>
              <h3>First Visit Checklist</h3>
            </div>
            <div className={s.cardBody}>
              <ul className={s.checklist}>
                {CHECKLIST.map((item) => (
                  <li key={item}>
                    <CheckCircle weight="fill" size={17} style={{ color: "var(--green)", flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Getting Here */}
        <ScrollReveal className={s.directions}>
          <div className={s.dirTop}>
            <div className={s.dirIcon}><MapPin weight="fill" size={24} /></div>
            <div>
              <h4>Getting to Cabrow</h4>
              <p>Choice Junction, Mallam-Kasoa Highway, Greater Accra, Ghana</p>
            </div>
          </div>
          <div className={s.dirGrid}>
            <div className={s.dirItem}>
              <Car weight="fill" size={22} style={{ color: "var(--orange)" }} />
              <div>
                <strong>By Car</strong>
                <span>Take the Mallam-Kasoa Highway and turn at Choice Junction. We are visible from the main road.</span>
              </div>
            </div>
            <div className={s.dirItem}>
              <MapPin weight="fill" size={22} style={{ color: "var(--purple)" }} />
              <div>
                <strong>By Public Transport</strong>
                <span>Trotro and shared taxis from Mallam or Kasoa stop near Choice Junction. Ask for Cabrow Educational Center.</span>
              </div>
            </div>
          </div>
          <a
            href="https://maps.google.com/?q=Mallam+Kasoa+Highway+Ghana"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-purple"
            style={{ display: "inline-flex", marginTop: "20px", fontSize: ".88rem" }}
          >
            Open in Google Maps →
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
