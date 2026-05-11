"use client";
import { useState } from "react";
import { Plus, Minus } from "@phosphor-icons/react";
import s from "./FAQAccordion.module.css";

const FAQS = [
  {
    q: "When does the academic year begin?",
    a: "The academic year typically begins in September and follows the Ghana Education Service calendar, with three terms: September–December, January–April, and April–July.",
  },
  {
    q: "What are the school fees and how are they structured?",
    a: "Fees are structured per term and vary by program level. We keep our fees affordable and offer meals packages at an additional cost. Please contact us directly for the current fee schedule, as it is reviewed each academic year.",
  },
  {
    q: "Do you provide transport services?",
    a: "We do not currently operate a school bus. However, we are located at Choice Junction on the Mallam-Kasoa Highway, which is easily accessible by public transport. Parents are responsible for drop-off and pick-up.",
  },
  {
    q: "What is the school uniform?",
    a: "Cabrow has a standard uniform that all students are required to wear. Details on where to purchase the uniform are provided upon enrollment. We also have a special 'Colour Day' occasion each term where children may wear their favourite colour.",
  },
  {
    q: "Are meals included in the school fees?",
    a: "Meals are not automatically included in the base school fee. We offer affordable monthly feeding packages that parents can subscribe to. Children are provided healthy, child-friendly meals during their subscribed days.",
  },
  {
    q: "Can my child join mid-term or mid-year?",
    a: "Yes, we accept late enrollment subject to available spaces. We ask that you contact us in advance so we can prepare for your child's smooth transition into their class.",
  },
  {
    q: "How do you handle discipline at Cabrow?",
    a: "We believe in positive discipline — guiding children with love, consistency, and clear boundaries. Physical punishment is not practised at Cabrow. Our approach builds character through relationship, respect, and responsibility.",
  },
  {
    q: "How do you keep parents informed about their child's progress?",
    a: "We share termly report cards, conduct parent-teacher meetings, and maintain open communication via phone and WhatsApp. Our teachers are accessible and parents are always encouraged to engage.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.header}>
          <div className="section-label">FAQs</div>
          <h2 className="section-title">Parents Ask, We Answer</h2>
          <p className="section-sub">Everything you need to know before enrolling your child at Cabrow.</p>
        </div>

        <div className={s.list}>
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`${s.item} ${open === i ? s.expanded : ""}`}
            >
              <button className={s.trigger} onClick={() => setOpen(open === i ? null : i)}>
                <span>{faq.q}</span>
                <div className={s.chevron}>
                  {open === i
                    ? <Minus weight="bold" size={16} />
                    : <Plus weight="bold" size={16} />
                  }
                </div>
              </button>
              {open === i && <div className={s.answer}>{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
