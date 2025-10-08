import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  /* State */
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  /* Toggle menu */
  const toggleMenu = () => {
    console.log("Menu toggled");
    setMenuIsOpen(!menuIsOpen);
  };

  /* Close menu */
  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  /* Navigation items */
  const navItems = [
    { href: "#home", label: "Início" },
    { href: "#about", label: "Sobre" },
    { href: "#skills", label: "Habilidades" },
    { href: "#projects", label: "Projetos" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <>
      {/* Header */}
      <header className="bg-gray-900/90 fixed top-0 left-0 w-full flex flex-col items-center justify-between px-6 py-4 z-50 backdrop-blur-xs border-b border-gray-800">
        {/* Container */}
        <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
          {/* Logo */}
          <h2 className="text-2xl font-bold bg-linear-135 from-emerald-500 to-sky-500 bg-clip-text text-transparent cursor-pointer">
            <a href="#home">Davy Andrade</a>
          </h2>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <NavbarItem
                  key={item.href}
                  href={item.href}
                  label={item.label}
                />
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="md:hidden">
            {menuIsOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`${
            menuIsOpen ? "block" : "hidden"
          } pt-6 w-full md:hidden flex-col`}
        >
          <ul className="flex flex-col gap-6">
            {navItems.map((item) => (
              <NavbarItem
                key={item.href}
                href={item.href}
                label={item.label}
                onClick={closeMenu}
              />
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

function NavbarItem({ href, label, onClick }) {
  return (
    <li>
      <a
        href={href}
        onClick={onClick}
        className="hover:text-emerald-500 focus:text-emerald-500 transition-colors"
      >
        {label}
      </a>
    </li>
  );
}
