import { Container } from "@/components/ui/Container/Container";
import styles from "./About.module.css";
import Image from "next/image";

export function About() {
  return (
    <section className={styles.wrapper}>
      <Container>
        <div className={styles.container}>
          <div className={styles.text}>
            <span className={styles.badge}>Sobre a Arborya</span>

            <h2 className={styles.title}>
              Saneamento básico com responsabilidade ambiental
            </h2>

            <p className={styles.description}>
              A Arborya nasceu com o proposito de oferecer soluções
              sustentáveis. Desenvolvendo soluções em fossas ecológicas e
              saneamento básico para residências, empresas, áreas rurais e
              órgãos públicos.
            </p>

            <p className={styles.description}>
              Nosso objetivo é unir eficiência técnica, sustentabilidade e
              confiança em projetos que respeitam o meio ambiente e melhoram a
              qualidade de vida das pessoas.
            </p>
          </div>
          <div className={styles.image}>
            <Image
              src="/sobre.png"
              alt="Sistema ecológico Arborya"
              width={500}
              height={500}
              priority
              className={styles.image}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
