import { useState, useEffect } from "react";
import { PSWLogo } from "@/components/psw-logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", href: "#about", external: false },
    { label: "Approach", href: "#approach", external: false },
    { label: "Services", href: "#services", external: false },
    { label: "Contact", href: "#contact", external: false },
    { label: "Careers", href: "/careers", external: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
      } border-b border-gray-100`}
    >
      <nav className="container mx-auto px-6 h-[68px] flex items-center justify-between gap-6">
        <a href="/" className="flex-shrink-0">
          <PSWLogo />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-9">
          {links.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-gray-500 hover:text-[#1A2233] transition-colors duration-150"
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-block flex-shrink-0 px-5 py-2.5 bg-[#1A2233] text-white text-sm font-medium rounded-[9px] hover:bg-[#00B09B] transition-colors duration-150"
        >
          Start diagnostic
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-[#1A2233] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#1A2233] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#1A2233] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-gray-600 hover:text-[#1A2233]"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-block text-center px-5 py-2.5 bg-[#1A2233] text-white text-sm font-medium rounded-[9px]"
            onClick={() => setMenuOpen(false)}
          >
            Start diagnostic
          </a>
        </div>
      )}
    </header>
  );
}
