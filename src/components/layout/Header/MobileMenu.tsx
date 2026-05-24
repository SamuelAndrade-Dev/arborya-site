"use client";

import { useState } from "react";
import { NavLinks } from "../../ui/NavLinks/NavLinks";
import styles from "./Mobile.module.css";
import Image from "next/image";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={toggleMenu}>
        <Image src="/menu.svg" alt="Logo" width={200} height={200} />
      </button>

      {isOpen && (
        <nav className={styles.dropdown}>
          <NavLinks />
        </nav>
      )}
    </div>
  );
}
