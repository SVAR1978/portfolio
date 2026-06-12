import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { education, currentlyLearning } from "@/data/portfolioData";

/* GraduationCap icon */
const GraduationCapIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 10-10-5L2 10l10 5 10-5z" />
    <path d="M6 12v5c0 1 2 3 6 3s6-2 6-3v-5" />
    <path d="M22 10v6" />
  </svg>
);

/* BookOpen icon */
const BookOpenIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative bg-black">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker">// Education & Learning</p>
          <h2 className="section-title mb-12">
            Academic
            <br />
            journey
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="liquid-glass w-10 h-10 rounded-[0.75rem] flex items-center justify-center">
                <GraduationCapIcon />
              </div>
              <h3 className="font-heading italic text-white text-2xl tracking-[-1px]">
                Education
              </h3>
            </div>

            {education.map((edu, index) => (
              <div key={index} className="liquid-glass card-glass">
                <h4 className="font-heading italic text-white text-xl">
                  {edu.degree}
                </h4>
                <p className="text-white/60 text-sm font-body font-medium mt-1">
                  {edu.institution}
                </p>
                <p className="text-white/40 text-xs font-body mt-1">
                  {edu.duration}
                </p>
                <p className="text-white/70 text-sm font-body font-light mt-3 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Currently Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="liquid-glass w-10 h-10 rounded-[0.75rem] flex items-center justify-center">
                <BookOpenIcon />
              </div>
              <h3 className="font-heading italic text-white text-2xl tracking-[-1px]">
                Currently Learning
              </h3>
            </div>

            <div className="space-y-4">
              {currentlyLearning.map((item, index) => (
                <div key={index} className="liquid-glass card-glass">
                  <h4 className="font-heading italic text-white text-xl">
                    {item.topic}
                  </h4>
                  <p className="text-white/70 text-sm font-body font-light mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
