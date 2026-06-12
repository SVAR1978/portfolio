import { motion } from "framer-motion";
import { personalInfo, aboutText, skills, projects } from "@/data/portfolioData";
import FadingVideo from "@/components/FadingVideo";
import BlurText from "@/components/BlurText";

const HERO_VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4";

/* ArrowUpRight inline SVG */
const ArrowUpRight = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
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

/* Clock icon */
const ClockIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

/* Code icon */
const CodeIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

/* FileText icon */
const FileTextIcon = () => (
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
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const fadeInUp = {
  initial: { filter: "blur(10px)", opacity: 0, y: 20 },
  animate: { filter: "blur(0px)", opacity: 1, y: 0 },
};

/* All skill category names for the partners bar */
const skillCategories = Object.keys(skills);
const allSkillNames = [
  ...skills.languages.slice(0, 2),
  ...skills.frontend.slice(0, 2),
  ...skills.backend.slice(0, 2),
];

const Hero = () => {
  const firstParagraph = aboutText.split("\n\n")[0];

  return (
    <section className="relative min-h-screen flex flex-col bg-black overflow-hidden">
      {/* Background video */}
      <FadingVideo
        src={HERO_VIDEO_SRC}
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
        style={{ width: "120%", height: "120%" }}
      />

      {/* Content layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Spacer for navbar */}
        <div className="h-24" />

        {/* Hero content — centered */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">
          {/* Badge */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="liquid-glass rounded-full flex items-center gap-2 pl-1 pr-3 py-1 mb-8"
          >
            <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-semibold font-body">
              Open to Work
            </span>
            <span className="text-sm text-white/90 font-body">
              {personalInfo.subtitle}
            </span>
          </motion.div>

          {/* Headline — BlurText */}
          <BlurText
            text={`Hello, I'm ${personalInfo.name}`}
            className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.85] max-w-3xl tracking-[-4px]"
          />

          {/* Title */}
          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="mt-4 text-2xl md:text-3xl font-heading italic text-white/80 tracking-[-1px]"
          >
            {personalInfo.title}
          </motion.p>

          {/* Subheading */}
          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="mt-4 text-sm md:text-base text-white/80 max-w-2xl font-body font-light leading-relaxed"
          >
            {/* {firstParagraph} */}
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
            className="flex items-center gap-6 mt-8"
          >
            <a
              href="#projects"
              className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white font-body flex items-center gap-2"
            >
              View Projects
              <ArrowUpRight size={20} />
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 text-sm font-body font-medium flex items-center gap-2 hover:text-white transition-colors"
            >
              Download Resume
              <FileTextIcon />
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
            className="flex items-stretch gap-4 mt-10"
          >
            <div className="liquid-glass rounded-[1.25rem] p-5 w-[220px] text-left">
              <ClockIcon />
              <p className="text-4xl font-heading italic text-white tracking-[-1px] leading-none mt-3">
                {projects.length}+
              </p>
              <p className="text-xs text-white/70 font-body font-light mt-2">
                Projects Built & Deployed
              </p>
            </div>
            <div className="liquid-glass rounded-[1.25rem] p-5 w-[220px] text-left">
              <CodeIcon />
              <p className="text-4xl font-heading italic text-white tracking-[-1px] leading-none mt-3">
                {skills.languages.length}+
              </p>
              <p className="text-xs text-white/70 font-body font-light mt-2">
                Programming Languages
              </p>
            </div>
          </motion.div>
        </div>

        {/* Partners-style skills bar */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
          className="flex flex-col items-center gap-4 pb-8"
        >
          <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
            Technologies I work with
          </span>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {allSkillNames.map((skill) => (
              <span
                key={skill}
                className="font-heading italic text-white text-2xl md:text-3xl tracking-tight"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
