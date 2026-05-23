import { Container } from "@/components/Ui/Container/Container";
import { NavLinks } from "./NavLinks";
import { MobileMenu } from "./MobileMenu";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Ui/Button/Button";

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo Arborya"
              width={120}
              height={50}
              className={styles.logo}
            />
          </Link>
          <nav className={styles.nav}>
            <NavLinks />
          </nav>
          <div className={styles.button}>
            <Button href="/contato">Solicitar orçamento</Button>
          </div>
          <div className={styles.mobileMenu}>
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
