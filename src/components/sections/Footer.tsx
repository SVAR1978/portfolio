import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";

/* Icons */
const ArrowUpIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "Email", href: `mailto:${personalInfo.email}`, icon: <MailIcon /> },
  { label: "GitHub", href: personalInfo.github, icon: <GithubIcon /> },
  { label: "LinkedIn", href: personalInfo.linkedin, icon: <LinkedinIcon /> },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-black section-ambient">
      {/* Top border glow */}
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 pt-20 pb-8">
        {/* CTA headline row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16"
        >
          <div>
            <p className="text-sm font-body text-white/50 mb-3">// Ready to collaborate?</p>
            <h2 className="font-heading italic text-white text-4xl md:text-5xl lg:text-6xl leading-[0.9] tracking-[-2px]">
              Let's build
              <br />
              something great.
            </h2>
          </div>
          <a
            href={`mailto:${personalInfo.email}`}
            className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white font-body flex items-center gap-2 hover:bg-white/10 transition-colors shrink-0"
          >
            Get in touch
            <ArrowUpRight />
          </a>
        </motion.div>

        {/* Three-column grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pb-12 border-b border-white/[0.06]"
        >
          {/* Col 1 — Navigation */}
          <div>
            <p className="text-[11px] text-white/30 font-body uppercase tracking-widest mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 font-body font-light hover:text-white transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 2 — Socials */}
          <div>
            <p className="text-[11px] text-white/30 font-body uppercase tracking-widest mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-2.5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-white/60 font-body font-light hover:text-white transition-colors w-fit group"
                >
                  <span className="text-white/40 group-hover:text-white transition-colors">
                    {link.icon}
                  </span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3 — Status / availability */}
          <div>
            <p className="text-[11px] text-white/30 font-body uppercase tracking-widest mb-4">
              Status
            </p>
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-sm text-white/70 font-body font-light">
                Open to opportunities
              </span>
            </div>
            <p className="text-xs text-white/40 font-body font-light leading-relaxed max-w-[28ch]">
              Currently seeking full-time roles &amp; exciting collaborations in software development.
            </p>
          </div>
        </motion.div>

        {/* Bottom bar — copyright + back to top */}
        <div className="flex items-center justify-between pt-6">
          <p className="text-xs text-white/25 font-body font-light">
            © {currentYear} {personalInfo.name}. Designed & built with care.
          </p>
          <button
            onClick={scrollToTop}
            className="liquid-glass rounded-full w-10 h-10 flex items-center justify-center text-white/50 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <ArrowUpIcon />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
