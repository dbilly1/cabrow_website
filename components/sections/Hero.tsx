import Link from "next/link";
import Image from "next/image";
import s from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={s.hero}>
      {/* Soft background blobs */}
      <div className={`${s.blob} ${s.blob1}`} />
      <div className={`${s.blob} ${s.blob2}`} />
      <div className={`${s.blob} ${s.blob3}`} />

      <div className={`container ${s.grid}`}>
        {/* Left: text */}
        <div className={s.left}>
          <h1 className={s.title}>
            Raising Children
            <br />
            With <em>Care, Faith</em>
            <br />
            &amp; Joy
          </h1>
          <p className={s.sub}>
            Quality early childhood &amp; basic education rooted in values,
            creativity, and purpose. Nurturing the child for a bright future.
          </p>
          <div className={s.ctas}>
            <Link href="/#contact" className="btn btn-orange">
              Enroll Your Child →
            </Link>
            <Link href="/#story" className="btn btn-outline">
              Learn About Us
            </Link>
          </div>
        </div>

        {/* Right: program cards */}
        <div className={s.right}>
          <div className={`${s.deco} ${s.d1}`} />
          <div className={`${s.deco} ${s.d2}`} />
          <div className={`${s.deco} ${s.d3}`} />

          <div className={`${s.card} ${s.card1}`}>
            <Image
              src="/Images/1.jpg"
              alt="Early Years - Preschool for Age 2-5"
              fill
              className={s.cardImage}
            />
            <div className={s.cardLabel}>
              <strong>Early Years</strong>
              <span>Preschool · Age 2–5</span>
            </div>
          </div>
          <div className={`${s.card} ${s.card2}`}>
            <Image
              src="/Images/2.jpg"
              alt="Basic School - Primary GES Curriculum"
              fill
              className={s.cardImage}
            />
            <div className={s.cardLabel}>
              <strong>Basic School</strong>
              <span>Primary · GES Curriculum</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="wave" style={{ marginTop: "0" }}>
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
