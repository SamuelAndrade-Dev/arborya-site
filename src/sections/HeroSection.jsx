export function HeroSection() {
    return (
        <section className="flex min-h-[calc(100vh-80px)] items-center">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-20">
                <span className="text-sm uppercase tracking-[0.3em] text-black/60">
                    Soluções sustentáveis
                </span>

                <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
                    Tecnologia ecológica para tratamento inteligente.
                </h1>

                <p className="max-w-2xl text-lg leading-relaxed text-black/70">
                    A Arborya desenvolve soluções modernas, eficientes e sustentáveis
                    para sistemas ecológicos de tratamento.
                </p>

                <div className="flex gap-4">
                    <button className="rounded-md bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">
                        Falar no WhatsApp
                    </button>

                    <button className="rounded-md border border-black px-6 py-3 text-sm font-medium transition hover:bg-black hover:text-white">
                        Conhecer projetos
                    </button>
                </div>
            </div>
        </section>
    );
}