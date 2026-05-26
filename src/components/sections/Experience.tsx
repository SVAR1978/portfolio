import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen } from "lucide-react";
import { education, currentlyLearning } from "@/data/portfolioData";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education & Learning</h2>
          <p className="section-subtitle">Academic background and continuous growth</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="text-primary" size={24} />
              <h3 className="text-xl font-semibold text-foreground">Education</h3>
            </div>
            
            {education.map((edu, index) => (
              <div key={index} className="card-base">
                <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                <p className="text-primary text-sm font-medium">{edu.institution}</p>
                <p className="text-muted-foreground text-sm mt-1">{edu.duration}</p>
                <p className="text-muted-foreground text-sm mt-3">{edu.description}</p>
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
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="text-primary" size={24} />
              <h3 className="text-xl font-semibold text-foreground">Currently Learning</h3>
            </div>

            <div className="space-y-4">
              {currentlyLearning.map((item, index) => (
                <div key={index} className="card-base">
                  <h4 className="font-semibold text-foreground">{item.topic}</h4>
                  <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
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
