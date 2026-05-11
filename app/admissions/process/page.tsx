import type { Metadata } from "next";
import { Phone, ClipboardText, Envelope, CheckCircle, Bag, Flag } from "@phosphor-icons/react/dist/ssr";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContentLayout from "@/components/ui/ContentLayout";
import CTA from "@/components/ui/CTA";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "Admission Process — Cabrow Educational Center",
  description: "Follow Cabrow's simple step-by-step enrollment process. Schedule a tour, submit your registration, and welcome your child into our family.",
};

const QUICK_LINKS = [
  { label: "Admission Process", href: "/admissions/process" },
  { label: "Fees Structure", href: "/admissions/fees" },
  { label: "Age Groups", href: "/admissions/age-groups" },
  { label: "Adult–Student Ratios", href: "/admissions/ratios" },
  { label: "Terms & Conditions", href: "/admissions/terms" },
];

const STEPS = [
  {
    num: "01",
    icon: <Phone weight="fill" size={24} />,
    title: "Schedule a Tour or Call",
    color: "var(--purple)",
    bg: "var(--purple-light)",
    body: "The first step is to connect with us. Visit our school at Choice Junction on the Mallam-Kasoa Highway, or call us on 0557 110 196 / 0244 658 863 to speak with our admissions coordinator. You can also reach us via WhatsApp or email at cabrow.edu@gmail.com. We encourage you to bring your child along for the visit — seeing the school in action makes all the difference.",
  },
  {
    num: "02",
    icon: <ClipboardText weight="fill" size={24} />,
    title: "Review the Parent Information Pack",
    color: "var(--orange)",
    bg: "var(--orange-light)",
    body: "After your visit, we will share our Parent Information Pack, which includes our school handbook, policies, fees structure, and uniform guide. Please read through this carefully as it covers everything you need to know about daily life at Cabrow — from school hours and discipline to meals, uniforms, and communication.",
  },
  {
    num: "03",
    icon: <Envelope weight="fill" size={24} />,
    title: "Submit the Registration Form",
    color: "var(--pink)",
    bg: "var(--pink-light)",
    body: "Complete and submit the Registration Form, which collects your child's name, date of birth, guardian details, medical information, nationality, languages spoken, emergency contacts, and your preferred programme (Preschool or Primary School). This form can be collected from our front office or requested via WhatsApp.",
  },
  {
    num: "04",
    icon: <CheckCircle weight="fill" size={24} />,
    title: "Receive Your Offer Letter",
    color: "var(--green)",
    bg: "var(--green-light)",
    body: "Once your registration is reviewed, we will issue an Offer Letter specifying your child's class allocation, chosen programme, and the applicable fees. Please read the Offer Letter carefully, sign, and return it — this constitutes your acceptance of a place at Cabrow. Payment of registration fees confirms your child's spot.",
  },
  {
    num: "05",
    icon: <CheckCircle weight="fill" size={24} />,
    title: "Acknowledge School Policies",
    color: "var(--yellow)",
    bg: "var(--yellow-light)",
    body: "Before your child begins, you will be asked to sign a Policy Acknowledgement Form confirming you have read and understood Cabrow's Admission Policy, Code of Conduct, Language Policy, and Terms & Conditions. This ensures we are all aligned on expectations from day one.",
  },
  {
    num: "06",
    icon: <Bag weight="fill" size={24} />,
    title: "Administrative Setup",
    color: "var(--purple)",
    bg: "var(--purple-light)",
    body: "Visit the school office to receive your child's welcome pack, which includes the uniform requirements, book list, and school bag details. Uniforms can be purchased at our front office or from our approved supplier. Please ensure your child arrives on their first day in the correct uniform and with all required stationery.",
  },
  {
    num: "07",
    icon: <Flag weight="fill" size={24} />,
    title: "Welcome to the Cabrow Family!",
    color: "var(--orange)",
    bg: "var(--orange-light)",
    body: "Once all administrative steps are complete, your child is ready to begin! We recommend arriving a few minutes early on the first day. Our teachers and staff will warmly welcome your child and help them settle in. We look forward to partnering with you in your child's growth and development.",
  },
];

const DOCUMENTS = [
  "Child's birth certificate (original + copy)",
  "Recent passport-sized photographs (2)",
  "Parent/guardian national ID or passport",
  "Previous school report or terminal results (if applicable)",
  "Immunisation / vaccination record",
  "Any relevant medical or allergy information",
];

export default function AdmissionProcessPage() {
  return (
    <>
      <PageHero
        title="Admission Process"
        subtitle="A simple, welcoming process designed around your family. Here's everything you need to enroll your child at Cabrow."
      />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Admissions", href: "/admissions/process" },
        { label: "Admission Process" },
      ]} />

      <div className="container">
        <ContentLayout quickLinksTitle="Admissions" quickLinks={QUICK_LINKS}>
          <div className={s.content}>

            <section className={s.section}>
              <h2 className={s.h2}>How to Enroll at Cabrow</h2>
              <p className={s.lead}>We believe enrollment should be as warm and welcoming as Cabrow itself. Follow the steps below and our team will guide you through every stage of the process.</p>
            </section>

            <section className={s.section}>
              <div className={s.steps}>
                {STEPS.map((step) => (
                  <div key={step.num} className={s.step}>
                    <div className={s.stepLeft}>
                      <div className={s.stepNum} style={{ color: step.color }}>{step.num}</div>
                      <div className={s.stepLine} style={{ background: step.color + "33" }} />
                    </div>
                    <div className={s.stepCard}>
                      <div className={s.stepIcon} style={{ background: step.bg, color: step.color }}>
                        {step.icon}
                      </div>
                      <div className={s.stepBody}>
                        <h3 className={s.stepTitle} style={{ color: step.color }}>{step.title}</h3>
                        <p className={s.stepText}>{step.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className={s.section}>
              <div className={s.docsCard}>
                <h3 className={s.h3}>Documents Required</h3>
                <p className={s.lead}>Please bring the following when submitting your registration form:</p>
                <ul className={s.docList}>
                  {DOCUMENTS.map((doc) => (
                    <li key={doc}>
                      <CheckCircle weight="fill" size={17} style={{ color: "var(--green)", flexShrink: 0 }} />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className={s.section}>
              <div className={s.contactStrip}>
                <div>
                  <h3 className={s.h3} style={{ color: "#fff", marginBottom: 6 }}>Have Questions?</h3>
                  <p style={{ color: "rgba(255,255,255,.75)", fontSize: ".9rem" }}>Our team is ready to walk you through the process. Don't hesitate to reach out.</p>
                </div>
                <div className={s.contactActions}>
                  <a href="tel:0557110196" className="btn btn-orange">Call 0557 110 196</a>
                  <a href="https://wa.me/233557110196" target="_blank" rel="noopener noreferrer" className="btn btn-white-outline">WhatsApp Us</a>
                </div>
              </div>
            </section>

          </div>
        </ContentLayout>
      </div>

      <CTA
        headline="Ready to Take the First Step?"
        sub="Contact us today to schedule your school visit or ask any questions."
        primaryLabel="Call Us Now"
        primaryHref="tel:0557110196"
        secondaryLabel="Send a Message"
        secondaryHref="/contact"
      />
    </>
  );
}
