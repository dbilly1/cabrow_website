"use client";
import { useEffect, useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
  style?: React.CSSProperties;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  style,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const revealClass =
    direction === "left" ? "reveal-left" :
    direction === "right" ? "reveal-right" :
    "reveal";

  return (
    <div
      ref={ref}
      className={`${revealClass} ${className}`}
      style={{ transitionDelay: delay ? `${delay}s` : undefined, ...style }}
    >
      {children}
    </div>
  );
}
