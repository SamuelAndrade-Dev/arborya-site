import { Container } from "@/components/Ui/Container/Container";
import {services} from "@/data/services"
import { ServiceCard } from "@/components/Ui/ServiceCard/ServiceCard";

export function Services() {
  return (
    <section>
      <Container>
        <span>Serviços</span>

        <h2>Soluções completas em saneamento</h2>

        <div>
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
