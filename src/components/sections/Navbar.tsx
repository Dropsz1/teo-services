"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Servicii", href: "#servicii" },
    { name: "Proces", href: "#proces" },
    { name: "Portofoliu", href: "#portofoliu" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 w-full z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none transition-all duration-300">
      <nav
        className={cn(
          "pointer-events-auto w-full max-w-5xl transition-all duration-300 rounded-full border flex items-center justify-between",
          isScrolled
            ? "bg-[#0a0f1e]/80 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,212,255,0.05)] py-3 px-6 md:px-8"
            : "bg-transparent border-transparent py-4 px-2 md:px-6"
        )}
      >
        {/* Logo */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
        >
          {/* SVG Icon Mark */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="28" height="28" rx="7" fill="#0d1424"/>
            <path d="M8 10L5 14L8 18" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 10L23 14L20 18" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 8L12 20" stroke="#00ffa3" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          {/* Wordmark */}
          <span className="text-xl font-heading font-bold tracking-tight text-white">
            BuiltBy<span className="text-[#00d4ff]">Teo</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-[#00d4ff] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/30 hover:bg-[#00d4ff]/20 hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all font-heading text-sm font-medium"
          >
            Solicită Ofertă
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0a0f1e]/95 backdrop-blur-xl flex flex-col pt-24 px-6 md:hidden">
          <button
            className="absolute top-6 right-6 text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex flex-col space-y-8 items-center text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-heading font-medium text-slate-200 hover:text-[#00d4ff]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 px-8 py-4 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/50 shadow-[0_0_20px_rgba(0,212,255,0.2)] text-lg font-heading"
            >
              Solicită Ofertă
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
