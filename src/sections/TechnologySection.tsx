const technologies = [
  {
    title: "Sustentabilidade",
    description:
      "Projetos desenvolvidos com foco ambiental e eficiência ecológica.",
  },
  {
    title: "Tecnologia",
    description: "Soluções modernas para sistemas inteligentes de tratamento.",
  },
  {
    title: "Eficiência",
    description:
      "Estruturas planejadas para alto desempenho e baixa manutenção.",
  },
];

export function TechnologySection() {
  return (
    <section className="border-t border-black/10 py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6">
        <div className="max-w-3xl">
          <span className="text-sm uppercase tracking-[0.3em] text-black/60">
            Tecnologia Arborya
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Engenharia sustentável aplicada ao futuro.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {technologies.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-black/10 bg-white p-8"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>

              <p className="mt-4 leading-relaxed text-black/70">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
