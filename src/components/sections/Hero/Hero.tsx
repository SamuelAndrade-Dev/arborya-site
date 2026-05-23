import { Container } from "@/components/Ui/Container/Container";
import { Button } from "@/components/Ui/Button/Button";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.content}>
          <span className={styles.badge}>
            Soluções ecológicas em saneamento
          </span>

          <h1 className={styles.title}>
            Tecnologia sustentável para fossas ecológicas e saneamento básico
          </h1>

          <p className={styles.description}>
            Projetos modernos, eficientes e ambientalmente responsáveis para
            residências, empresas e prefeituras.
          </p>

          <div className={styles.actions}>
            <Button href="/contato">Solicitar orçamento</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
