import { Hero } from "./pages/Hero/Hero";
import SkillsSection from "./components/skillsSection/SkillsSection";
import { FetchExperience } from "@/lib/fatchExperience";
import Experience from "./pages/experience/Experience";

export default function Home() {
  return (
    <div>
      <Hero />

      <div className="h-screen">
        <SkillsSection />
        <section id="experiences">
          <Experience />
        </section>
        <footer className="flex justify-center text-4xl text-center h-96 items-center">
          MAR miju
        </footer>
      </div>
    </div>
  );
}
