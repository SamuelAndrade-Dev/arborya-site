import styles from "./Benefits.module.css";

const benefits = [
  {
    title: "Sustentável",
    description: "Soluções ecológicas que ajudam a preservar o meio ambiente.",
  },

  {
    title: "Seguro",
    description: "Sistema confiável e eficiente para residências e empresas.",
  },

  {
    title: "Eficiente",
    description: "Redução de resíduos e melhor aproveitamento do sistema.",
  },

  {
    title: "Econômico",
    description: "Baixo custo de manutenção e excelente durabilidade.",
  },
];

export function Benefits() {
  return (
    <section className={styles.benefits}>
        <div className={styles.container}>
          <div className={styles.content}>
            <span className={styles.subititle}>Benefícios</span>
            <h2 className={styles.title}> Soluções inteligentes para um saneamento mais sustentável</h2>
            <p className={styles.description}>
              Projetos Modernos desenvolvidos para unir eficiência, <br />{" "}
              economia e responsabilidade ambiental
            </p>
          </div>

          <div className={styles.wrapper}>
            {benefits.map((benefit) => (
              <article key={benefit.title} className={styles.card}>
                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
    </section>
  );
}
