import React, { useState, useEffect } from "react";
import { Menu, X, Bot, PhoneCall } from "lucide-react";
import logo from "../assets/Gudmed1-removebg-preview.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Benefits", href: "#benefits" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-primary-100 shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logo} alt="GudMed" className="h-16 md:h-10 w-auto mt-2" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[15px] font-medium text-gray-600 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Book Demo Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-600 text-white text-[15px] font-semibold transition-all shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20"
            >
              <PhoneCall className="w-4 h-4" />
              Book Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-primary hover:bg-primary-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-primary-100 shadow-xl transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-medium text-gray-600 hover:text-primary hover:bg-primary-50 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 px-4">
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full justify-center inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary hover:bg-primary-600 text-white text-base font-semibold transition-all shadow-md shadow-primary/10"
            >
              <PhoneCall className="w-4 h-4" />
              Book Demo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
