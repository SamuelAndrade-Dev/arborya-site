import { SectionTitle } from "@/components/Ui/SectionTitle/SectionTitle";
import { ContactForm } from "@/components/sections/ContactForm/ContactForm";

export default function Contato() {
  return (
    <main>
        <SectionTitle 
        title="Contato"
        subititle="Como entrar em contato"
        />

        <ContactForm />
    </main>
  );
}
