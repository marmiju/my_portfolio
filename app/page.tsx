import { Hero } from "./pages/Hero/Hero";
import SkillsSection from "./components/skillsSection/SkillsSection";
import backgroundImage from "../lib/backgroundImage.png";

export default function Home() {
  return (
    <div

    // style={{
    //   backgroundImage: `url(${backgroundImage.src})`,
    //   backgroundSize: "cover",
    //   backgroundAttachment: "fixed", // keeps it fixed
    //   backgroundPosition: "center",
    // }}
    >
      <Hero />

      <div className="h-screen">
        <SkillsSection />
      </div>
    </div>
  );
}
