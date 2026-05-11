import { Phone, MapPin, ClipboardText, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import ScrollReveal from "@/components/ui/ScrollReveal";
import s from "./AdmissionsProcess.module.css";

const STEPS = [
  {
    num: "01",
    icon: <Phone weight="fill" size={28} />,
    color: "var(--orange)",
    bg: "var(--orange-light)",
    title: "Get in Touch",
    text: "Call us on 0557110196 / 0244658863 or send an email to cabrow.edu@gmail.com to express your interest and ask any questions you may have.",
  },
  {
    num: "02",
    icon: <MapPin weight="fill" size={28} />,
    color: "var(--green)",
    bg: "var(--green-light)",
    title: "Visit the School",
    text: "We invite you and your child for a free school tour. Meet our teachers, see our classrooms, and experience the Cabrow environment firsthand.",
  },
  {
    num: "03",
    icon: <ClipboardText weight="fill" size={28} />,
    color: "var(--purple)",
    bg: "var(--purple-light)",
    title: "Complete Enrollment",
    text: "Fill out the enrollment form with your child's details. Submit the required documents and confirm your enrollment package with our team.",
  },
  {
    num: "04",
    icon: <CheckCircle weight="fill" size={28} />,
    color: "var(--pink)",
    bg: "var(--pink-light)",
    title: "Welcome to Cabrow!",
    text: "Your child is now part of the family. You'll receive their start date, uniform details, and everything they need for a wonderful first day.",
  },
];

const DOCUMENTS = [
  "Birth certificate of the child",
  "Passport-size photograph (×2)",
  "Parent/Guardian national ID",
  "Previous school report (for Primary transfers)",
  "Completed enrollment form",
  "Immunisation record (for Preschool)",
];

export default function AdmissionsProcess() {
  return (
    <section className={s.section}>
      <div className="container">
        {/* Steps */}
        <ScrollReveal className={s.header}>
          <div className="section-label">How It Works</div>
          <h2 className="section-title">Simple Steps to Enroll</h2>
          <p className="section-sub">We&apos;ve made the process as smooth and welcoming as possible.</p>
        </ScrollReveal>

        <div className={s.steps}>
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.num} className={s.step} delay={i * 0.1}>
              <div className={s.stepNum} style={{ color: step.color }}>{step.num}</div>
              <div className={s.stepIcon} style={{ background: step.bg, color: step.color }}>{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </ScrollReveal>
          ))}
        </div>

        {/* Documents */}
        <ScrollReveal className={s.docs}>
          <div className={s.docsCard}>
            <h3>
              <ClipboardText weight="fill" size={22} style={{ color: "var(--orange)", marginRight: 8, verticalAlign: "middle" }} />
              Required Documents
            </h3>
            <ul>
              {DOCUMENTS.map((doc) => (
                <li key={doc}>
                  <CheckCircle weight="fill" size={16} style={{ color: "var(--green)", flexShrink: 0 }} />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
