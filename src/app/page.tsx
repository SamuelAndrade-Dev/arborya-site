import { Hero } from "@/components/sections/Hero/Hero";
import { About } from "@/components/sections/About/About";
import { Services } from "@/components/sections/Services/Services";
import { FAQ } from "@/components/sections/Faq/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />

      <About />

      <Services />

      <FAQ />
    </main>
  );
}
