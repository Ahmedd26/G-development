"use client";
import Logo from "@/components/Navbar/Logo";
import { useEffect, useState } from "react";
import DesktopMenu from "@/components/Navbar/DesktopMenu";
import MobileMenu from "@/components/Navbar/MobileMenu";
import BurgerMenuToggle from "@/components/Navbar/BurgerMenuToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full bg-gradient-to-b from-black transition-all duration-500 ${
        isScrolled ? "to-black py-4" : "to-black/0 py-[26px]"
      }`}
    >
      <div className="mx-auto max-w-container px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="sm:flex-1">
            <Logo />
          </div>
          <div className="flex justify-end sm:flex-[3]">
            {/* Desktop Menu */}
            <DesktopMenu />
            {/* Mobile Burger Button */}
            <BurgerMenuToggle
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </nav>
  );
}
