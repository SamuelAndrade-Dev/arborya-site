"use client";

import { useState } from "react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={toggleMenu}>Menu</button>

      {isOpen && (
        <div>
          <p>Menu aberto</p>
        </div>
      )}
    </div>
  );
}
