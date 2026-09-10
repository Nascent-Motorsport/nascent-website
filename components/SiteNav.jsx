"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Download } from "lucide-react";
import "../styles/SiteChrome.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/tracks", label: "Tracks" },
  { href: "/multiplayer", label: "Multiplayer" },
  { href: "/liveries", label: "Liveries" },
];

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner">
        <Link href="/" className="logo" onClick={closeMenu}>
          <span className="logo-mark"><img src="/icon.png" /></span>
          <span className="logo-text">
            NASCENT
            <br />
            MOTORSPORT
          </span>
        </Link>
        <nav className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? "nav-link-active" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/download" className="btn btn-primary nav-cta">
          <Download size={16} /> Get the Game
        </Link>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
          <Link href="/download" className="btn btn-primary" onClick={closeMenu}>
            Get the Game
          </Link>
        </div>
      )}
    </header>
  );
}