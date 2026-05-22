import { Hero } from "@/components/sections/Hero/Hero";
import { About } from "@/components/sections/About/About";
import { Services } from "@/components/sections/Services/Services";
import { FAQ } from "@/components/sections/Faq/FAQ";
import { ContactForm } from "@/components/sections/ContactForm/ContactForm";

export default function Home() {
  return (
    <main>
      <Hero />

      <About />

      <Services />

      <FAQ />

      <ContactForm />
    </main>
  );
}
