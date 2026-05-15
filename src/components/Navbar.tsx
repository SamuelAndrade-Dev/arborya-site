export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f5f3ee]/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div>
          <h1 className="text-2xl font-bold tracking-wide">ARBORYA</h1>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm transition hover:opacity-70">
            Home
          </a>

          <a href="#" className="text-sm transition hover:opacity-70">
            Tecnologia
          </a>

          <a href="#" className="text-sm transition hover:opacity-70">
            Projetos
          </a>

          <a href="#" className="text-sm transition hover:opacity-70">
            Sobre
          </a>

          <a href="#" className="text-sm transition hover:opacity-70">
            Contato
          </a>
        </nav>

        <button className="rounded-md border border-black px-4 py-2 text-sm font-medium transition hover:bg-black hover:text-white">
          WhatsApp
        </button>
      </div>
    </header>
  );
}
