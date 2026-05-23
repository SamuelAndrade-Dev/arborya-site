import { Container } from "@/components/Ui/Container/Container";
import { NavLinks } from "./NavLinks";
import { MobileMenu } from "./MobileMenu";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <strong className={styles.logo}>
            Arborya
          </strong>

          <nav className={styles.nav}>
            <NavLinks />
          </nav>

          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
