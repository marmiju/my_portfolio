import { Hero } from "./pages/Hero/Hero";
import SkillsSection from "./components/skillsSection/SkillsSection";

export default function Home() {
  return (
    <div>
      <Hero />

      <div className="h-screen">
        <SkillsSection />
      </div>
    </div>
  );
}
