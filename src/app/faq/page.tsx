import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import { FAQ } from "@/components/sections/Faq/FAQ";

export default function Faq() {
  return (
    <main>
      <SectionTitle 
        title="FAQ"
        subititle="Perguntas frequentes"
      />

        <FAQ />
    </main>
  );
}
