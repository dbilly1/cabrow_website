import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Programs from "@/components/sections/Programs";
import Unique from "@/components/sections/Unique";
import Story from "@/components/sections/Story";
import Stats from "@/components/sections/Stats";
import Meals from "@/components/sections/Meals";
import SchoolLife from "@/components/sections/SchoolLife";
import Values from "@/components/sections/Values";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Programs />
      <Unique />
      <Story />
      <Stats />
      <Meals />
      <SchoolLife />
      <Values />
      <Testimonials />
      <Contact />
    </>
  );
}
