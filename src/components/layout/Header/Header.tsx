import { NavLinks } from "./NavLinks";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header>
      <strong>Arborya</strong>

      <nav>
        <NavLinks />
      </nav>

      <MobileMenu />
    </header>
  );
}
