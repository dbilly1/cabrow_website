import s from "./PageHero.module.css";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className={s.hero}>
      <div className={s.blob1} />
      <div className={s.blob2} />
      <div className={`container ${s.inner}`}>
        <h1 className={s.title}>{title}</h1>
        {subtitle && <p className={s.sub}>{subtitle}</p>}
      </div>
      <div className={s.wave}>
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
