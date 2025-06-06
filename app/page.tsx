import { Hero } from "./pages/Hero/Hero";
import SkillsSection from "./components/skillsSection/SkillsSection";
import Experience from "./pages/experience/Experience";
import Projects from "./pages/projects/Projects";
import Leetcode from "./components/Leetcode/Leetcode";

export default function Home() {
  return (
    <div>
      <Hero />

      <div className="h-screen">
        <Leetcode />
        <section id="skills" className="grid pt-10 ">
          <SkillsSection />
        </section>
        <section id="experiences" className="pt-10 min-h-svh">
          <Experience />
        </section>
        <section id="projects" className="pt-20 min-h-svh">
          <Projects />
        </section>
        <footer className="flex justify-center text-4xl text-center h-96 items-center">
          Footer
        </footer>
      </div>
    </div>
  );
}
