import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { WaraLogo } from "./Logo";

const navLinks = [
  { name: "Products", href: "#products" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-wara-black"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 h-20">
            <WaraLogo light />
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center text-white hover:text-wara-orange transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col items-start px-6 pt-12 gap-2">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={onClose}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="text-4xl font-bold text-white uppercase tracking-tight hover:text-wara-orange transition-colors py-3"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Bottom Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-12 left-6 right-6 flex flex-col gap-4"
          >
            <button className="text-xs font-bold uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors text-left">
              EN / AR
            </button>
            <button className="bg-wara-orange text-white px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] w-full">
              Get Quote
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
