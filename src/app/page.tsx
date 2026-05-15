import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/sections/HeroSection";
import { TechnologySection } from "@/sections/TechnologySection";
import { ProjectsSection } from "@/sections/ProjectsSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TechnologySection />
      <ProjectsSection />
    </main>
  );
}
