import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  index: number;
  icon: React.ReactNode;
}

const ProjectCard = ({
  title,
  description,
  techStack,
  liveUrl,
  githubUrl,
  index,
  icon,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="liquid-glass card-glass min-h-[360px] flex flex-col"
    >
      {/* Top row — icon + tech pills */}
      <div className="flex items-start justify-between gap-4">
        <div className="liquid-glass w-11 h-11 rounded-[0.75rem] flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom — title, description, links */}
      <div className="mt-6">
        <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">
          {title}
        </h3>
        <p className="mt-3 text-sm text-white/80 font-body font-light leading-snug max-w-[32ch]">
          {description}
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass rounded-full px-3 py-1.5 text-xs text-white/90 font-body flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <ExternalLink size={12} />
            Live Demo
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass rounded-full px-3 py-1.5 text-xs text-white/90 font-body flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Github size={12} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
