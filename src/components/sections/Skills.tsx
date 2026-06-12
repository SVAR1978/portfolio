import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/data/portfolioData";

interface SkillCategoryProps {
  title: string;
  items: string[];
  delay: number;
  icon: React.ReactNode;
}

/* Icon components */
const TerminalIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

const LayoutIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
  </svg>
);

const ServerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

const WrenchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const SkillCategory = ({ title, items, delay, icon }: SkillCategoryProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="liquid-glass card-glass min-h-[280px] flex flex-col"
    >
      {/* Top row — icon + skill pills */}
      <div className="flex items-start justify-between gap-4">
        <div className="liquid-glass w-11 h-11 rounded-[0.75rem] flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
          {items.map((skill) => (
            <span
              key={skill}
              className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom — title */}
      <div className="mt-6">
        <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">
          {title}
        </h3>
        <p className="mt-3 text-sm text-white/80 font-body font-light leading-snug max-w-[32ch]">
          {items.length} technologies powering development in this domain.
        </p>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    { title: "Languages", items: skills.languages, icon: <TerminalIcon /> },
    { title: "Frontend", items: skills.frontend, icon: <LayoutIcon /> },
    { title: "Backend", items: skills.backend, icon: <ServerIcon /> },
    { title: "Tools & Tech", items: skills.tools, icon: <WrenchIcon /> },
  ];

  return (
    <section id="skills" className="relative min-h-screen bg-black">
      <div className="section-container flex flex-col min-h-screen">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-auto"
        >
          <p className="section-kicker">// Skills</p>
          <h2 className="section-title">
            Technologies
            <br />
            I master
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pb-10">
          {categories.map((category, index) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              items={category.items}
              delay={index * 0.1}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
