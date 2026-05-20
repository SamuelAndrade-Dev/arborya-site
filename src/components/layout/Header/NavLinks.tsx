import Link from "next/link";

export function NavLinks() {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/sobre">Sobre</Link>
      <Link href="/faq">FAQ</Link>
      <Link href="/projetos">Projetos</Link>
      <Link href="/contato">Contato</Link>
      <Link href="/servicos">Serviços</Link>
    </>
  );
}
