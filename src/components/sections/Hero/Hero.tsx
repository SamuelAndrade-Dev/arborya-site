import Image from "next/image";

import { Button } from "@/components/ui/Button/Button";

import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
        <div className={styles.wrapper}>
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

              <Button href="/servicos" variant="secondary">
                Ver serviços
              </Button>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <Image
              src="/lading.png"
              alt="Sistema ecológico Arborya"
              width={700}
              height={700}
              priority
              className={styles.image}
            />
          </div>
        </div>
    </section>
  );
}
