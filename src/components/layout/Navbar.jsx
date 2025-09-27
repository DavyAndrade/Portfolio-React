import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [MenuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu toggled");
    setMenuIsOpen(!MenuIsOpen);
  };

  // Função para fechar o menu quando clicar em um link
  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  return (
    <>
      <header className="bg-gray-900/90 fixed top-0 left-0 w-full flex flex-col items-center justify-between px-6 py-4 z-50 backdrop-blur-xs border-b border-gray-800">
        <div className="flex items-center justify-between w-full lg:justify-around">
          <h2 className="text-2xl font-bold bg-linear-135 from-emerald-500 to-sky-500 bg-clip-text text-transparent">
            Davy Andrade
          </h2>

          <div className="hidden md:block">
            <NavbarLinks onLinkClick={closeMenu} />
          </div>

          <button onClick={toggleMenu} className="md:hidden">
            {MenuIsOpen ? <X /> : <Menu />}
          </button>
        </div>

        <div
          className={`${
            MenuIsOpen ? "flex" : "hidden"
          } pt-6 w-full md:hidden flex-col`}
        >
          <NavbarLinks onLinkClick={closeMenu} />
        </div>
      </header>
    </>
  );
}

function NavbarLinks({ onLinkClick }) {
  const handleLinkClick = () => {
    // Chama a função para fechar o menu (apenas no mobile)
    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <nav>
      <ul className="flex flex-col gap-6 md:flex-row md:gap-8">
        <li>
          <a
            href="#home"
            onClick={handleLinkClick}
            className="hover:text-emerald-500 focus:text-emerald-500 transition-colors"
          >
            Início
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={handleLinkClick}
            className="hover:text-emerald-500 focus:text-emerald-500 transition-colors"
          >
            Sobre
          </a>
        </li>
        <li>
          <a
            href="#skills"
            onClick={handleLinkClick}
            className="hover:text-emerald-500 focus:text-emerald-500 transition-colors"
          >
            Habilidades
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={handleLinkClick}
            className="hover:text-emerald-500 focus:text-emerald-500 transition-colors"
          >
            Projetos
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="hover:text-emerald-500 focus:text-emerald-500 transition-colors"
          >
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}
