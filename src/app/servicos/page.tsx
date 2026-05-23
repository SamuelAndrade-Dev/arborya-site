import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import { Services } from "@/components/sections/Services/Services";

export default function Servicos() {
  return (
    <main>
      <SectionTitle
        title="Serviços"
        subititle="Alguns dos nossos serviços feitos"
      />

      <Services />
    </main>
  );
}
