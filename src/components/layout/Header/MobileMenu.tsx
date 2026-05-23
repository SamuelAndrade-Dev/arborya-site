"use client";

import { useState } from "react";
import { NavLinks } from "../../ui/NavLinks/NavLinks";
import styles from "./Mobile.module.css";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={toggleMenu}>
        Menu
      </button>

      {isOpen && (
        <nav className={styles.dropdown}>
          <NavLinks />
        </nav>
      )}
    </div>
  );
}
