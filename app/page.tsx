import { Hero } from "./pages/Hero/Hero";
import SkillsSection from "./components/skillsSection/SkillsSection";
import Experience from "./pages/experience/Experience";
import Projects from "./pages/projects/Projects";

export default function Home() {
  return (
    <div>
      <Hero />

      <div className="h-screen">
        <SkillsSection />
        <section id="experiences">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <footer className="flex justify-center text-4xl text-center h-96 items-center">
          Footer
        </footer>
      </div>
    </div>
  );
}
