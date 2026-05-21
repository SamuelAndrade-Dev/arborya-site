import { Container } from "@/components/Ui/Container/Container";
import { Button } from "@/components/Ui/Button/Button";

export function Hero() {
  return (
    <section>
      <Container>
        <h1>Soluções ecológicas</h1>

        <p>
          Fossas ecológicas e projetos sustentáveis para residencias, empresas e
          prefeituras.
        </p>

        <Button href="/contato">Solicitar Orçamentos</Button>
      </Container>
    </section>
  );
}
