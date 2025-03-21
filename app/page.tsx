import { useRef } from "react";
import { Hero } from "./pages/Hero/Hero";
import SkillsSection from "./components/skillsSection/SkillsSection";



export default function Home() {
  return (
    <div className="md:max-w-[600px] lg:max-w-[1200px] mx-auto">
      <Hero />
      <SkillsSection />

    </div>
  );
}
