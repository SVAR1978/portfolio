import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { aboutText } from "@/data/portfolioData";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const paragraphs = aboutText.split("\n\n");

  return (
    <section id="about" className="relative bg-black py-24">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker">// About Me</p>
          <h2 className="section-title mb-8">
            A brief
            <br />
            introduction
          </h2>

          <div className="max-w-3xl">
            <div className="liquid-glass card-glass">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-white/80 font-body font-light leading-relaxed mb-4 last:mb-0 text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
