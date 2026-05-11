"use client";
import { FormEvent } from "react";
import { MapPin, Phone, Envelope, ShareNetwork, FacebookLogo, InstagramLogo, WhatsappLogo, MapTrifold } from "@phosphor-icons/react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import s from "./Contact.module.css";

export default function Contact() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    alert("Thank you! We'll get back to you within 24 hours.");
  }

  return (
    <section id="contact" className={s.section}>
      <div className="container">
        <ScrollReveal className={s.header}>
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">Find Us &amp; Contact Us</h2>
          <p className="section-sub">We&apos;d love to meet your family. Visit us, call us, or send a message — we&apos;re always ready to welcome you.</p>
        </ScrollReveal>

        <div className={s.top}>
          {/* Info card */}
          <ScrollReveal direction="left" className={s.infoCard}>
            <h3>Cabrow Educational Center</h3>

            <div className={s.row}>
              <div className={s.cIcon}><MapPin weight="fill" size={18} /></div>
              <div className={s.cText}><strong>Address</strong><span>Choice Junction, Mallam-Kasoa Highway, Ghana</span></div>
            </div>
            <div className={s.row}>
              <div className={s.cIcon}><Phone weight="fill" size={18} /></div>
              <div className={s.cText}><strong>Phone</strong><span><a href="tel:0557110196">0557110196</a> / <a href="tel:0244658863">0244658863</a></span></div>
            </div>
            <div className={s.row}>
              <div className={s.cIcon}><Envelope weight="fill" size={18} /></div>
              <div className={s.cText}><strong>Email</strong><span><a href="mailto:cabrow.edu@gmail.com">cabrow.edu@gmail.com</a></span></div>
            </div>
            <div className={s.row}>
              <div className={s.cIcon}><ShareNetwork weight="fill" size={18} /></div>
              <div className={s.cText}>
                <strong>Follow Us</strong>
                <div className={s.social}>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookLogo weight="fill" size={18} /></a>
                  <a href="https://instagram.com/cabec_gh" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramLogo weight="fill" size={18} /></a>
                  <a href="https://wa.me/233557110196" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WhatsappLogo weight="fill" size={18} /></a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Map placeholder */}
          <ScrollReveal direction="right" className={s.mapCard}>
            <MapTrifold weight="fill" size={64} style={{ color:"var(--purple-mid)", opacity:.65 }} />
            <p><strong>Choice Junction</strong><br />Mallam-Kasoa Highway, Ghana</p>
            <a href="https://maps.google.com/?q=Mallam+Kasoa+Highway+Ghana" target="_blank" rel="noopener noreferrer" className="btn btn-purple" style={{ fontSize:".84rem", padding:"10px 22px", marginTop:"8px" }}>
              Open in Maps →
            </a>
          </ScrollReveal>
        </div>

        {/* Form */}
        <ScrollReveal className={s.form}>
          <h3>Send Us a Message</h3>
          <p>Fill out the form and our team will get back to you within 24 hours.</p>
          <form onSubmit={handleSubmit}>
            <div className={s.formGrid}>
              <div className={s.fGroup}>
                <label>Full Name *</label>
                <input type="text" placeholder="e.g. Kofi Mensah" required />
              </div>
              <div className={s.fGroup}>
                <label>Email Address *</label>
                <input type="email" placeholder="you@example.com" required />
              </div>
              <div className={s.fGroup}>
                <label>Phone Number *</label>
                <input type="tel" placeholder="0XX XXX XXXX" required />
              </div>
              <div className={s.fGroup}>
                <label>Message Category</label>
                <select>
                  <option value="">Select a category...</option>
                  <option>School Enrollment</option>
                  <option>School Tour</option>
                  <option>Fees Enquiry</option>
                  <option>Meals &amp; Feeding</option>
                  <option>Join Our Team</option>
                  <option>General Enquiry</option>
                </select>
              </div>
              <div className={`${s.fGroup} ${s.full}`}>
                <label>Your Message</label>
                <textarea placeholder="Tell us how we can help you..." />
              </div>
              <div className={s.fSubmit}>
                <button type="submit" className="btn btn-orange">Send Message ✦</button>
              </div>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
