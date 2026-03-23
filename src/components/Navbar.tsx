import { useState, useEffect } from "react";
import { WaraLogo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { motion } from "motion/react";
import { Menu } from "lucide-react";

const navLinks = [
  { name: "Products", href: "#products" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = scrolled;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 px-6 lg:px-12 h-20 flex items-center justify-between transition-all duration-500 ${
          isDark
            ? "bg-wara-black/95 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <WaraLogo light={isDark} />

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[11px] font-bold uppercase tracking-[0.3em] hover:text-wara-orange transition-colors ${
                isDark ? "text-white/80" : "text-wara-dark/60"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button
            className={`hidden md:block text-[11px] font-bold uppercase tracking-[0.3em] transition-colors ${
              isDark ? "text-white/50 hover:text-white" : "text-wara-dark/40 hover:text-wara-dark"
            }`}
          >
            EN / AR
          </button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:block bg-wara-orange text-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em]"
          >
            Get Quote
          </motion.button>
          <button
            onClick={() => setMobileOpen(true)}
            className={`md:hidden w-10 h-10 flex items-center justify-center ${
              isDark ? "text-white" : "text-wara-black"
            }`}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
};
