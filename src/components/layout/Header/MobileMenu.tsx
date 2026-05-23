"use client";

import { useState } from "react";
import { NavLinks } from "./NavLinks";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={toggleMenu}>Menu</button>

      {isOpen && (
        <nav>
          <NavLinks />
        </nav>
      )}
    </div>
  );
}
