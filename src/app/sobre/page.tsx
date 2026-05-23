import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import { About } from "@/components/sections/About/About";

export default function Sobre() {
  return (
    <main>
      <SectionTitle 
      title="Sobre"
      subititle="Sobre a nossa empresa e como trabalhamos"
      />

    <About />
    </main>
  );
}
