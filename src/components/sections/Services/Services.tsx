import { Container } from "@/components/Ui/Container/Container";
import {services} from "@/app/data/services"

export function Services() {
  return (
    <section>
      <Container>
        <span>Serviços</span>

        <h2>Soluções completas em saneamento</h2>

        <div>
          {services.map((service) => (
            <div key={service.title}>
              <h3>{service.title} </h3>
              <p>{service.description} </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
