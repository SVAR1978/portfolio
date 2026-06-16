import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/* ArrowUpRight inline SVG */
const ArrowUpRight = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16">
      <div className="flex items-center justify-between">
        {/* Logo — liquid-glass circle */}
        <a
          href="#"
          className="liquid-glass w-12 h-12 rounded-full flex items-center justify-center"
        >
          <span className="font-heading italic text-white text-xl leading-none">
            v
          </span>
        </a>

        {/* Center nav — desktop only */}
        <div className="hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${personalInfo.email}`}
            className="bg-white text-black rounded-full px-4 py-2 text-sm font-medium font-body whitespace-nowrap flex items-center gap-1.5 ml-1 hover:bg-white/90 transition-colors"
          >
            Hire Me
            <ArrowUpRight />
          </a>
        </div>

        {/* Right spacer (desktop) / hamburger (mobile) */}
        <div className="hidden md:block w-12 h-12" />
        <button
          className="md:hidden liquid-glass w-12 h-12 rounded-full flex items-center justify-center text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-4 liquid-glass rounded-[1.25rem] p-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/90 font-body font-medium text-base hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`mailto:${personalInfo.email}`}
                className="bg-white text-black rounded-full px-4 py-3 text-sm font-medium font-body text-center flex items-center justify-center gap-1.5 mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hire Me
                <ArrowUpRight />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
