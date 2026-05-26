import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactLinks = [
    {
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
    },
    {
      label: "GitHub",
      value: "github.com/vikash",
      href: personalInfo.github,
      icon: Github,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/vikash",
      href: personalInfo.linkedin,
      icon: Linkedin,
    },
  ];

  return (
    <section id="contact" className="bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Open to opportunities and collaborations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <div className="card-base space-y-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors group"
              >
                <link.icon className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                <div>
                  <p className="text-xs text-muted-foreground">{link.label}</p>
                  <p className="text-foreground font-medium">{link.value}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
