import styles from "./Footter.module.css";
import { NavLinks } from "../../ui/NavLinks/NavLinks";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h2>Grupo Arborya</h2>
            <Link href="/">
              <Image
                src="/logo-branca.png"
                alt="Logo Arborya"
                width={120}
                height={50}
                className={styles.logo}
              />
            </Link>
            <p>
              Soluções ecológicas e sustentáveis para saneamento básico e fossas
              ecológicas.
            </p>

            <span>
              Idealizador do Projeto: <strong>Manoel Batista de Andrade</strong>
            </span>
          </div>

          <div className={styles.links}>
            <h3>Navegação</h3>
            <nav>
              <NavLinks />
            </nav>
          </div>

          <div className={styles.contact}>
            <h3>Contato</h3>
            <p>(00) 00000-0000</p>
            <p>grupoarborya@gmail.com</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 Arborya. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
