const projects = [
  {
    title: "Sistema Residencial",
    description: "Soluções compactas para ambientes residenciais sustentáveis.",
  },
  {
    title: "Projeto Industrial",
    description: "Estruturas planejadas para operações de alta demanda.",
  },
  {
    title: "Tratamento Inteligente",
    description:
      "Tecnologia aplicada para eficiência e baixo impacto ambiental.",
  },
];

export function ProjectsSection() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6">
        <div className="max-w-3xl">
          <span className="text-sm uppercase tracking-[0.3em] text-white/60">
            Projetos
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Soluções aplicadas em diferentes cenários.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="h-80 bg-white/10 transition duration-500 group-hover:scale-105" />

              <div className="flex flex-col gap-4 p-8">
                <h3 className="text-2xl font-semibold">{project.title}</h3>

                <p className="leading-relaxed text-white/70">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
