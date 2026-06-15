export const personalInfo = {
  name: "Vikash",
  title: "Final Year Software Engineering Student",
  subtitle: "Aspiring Software Developer",
  email: "rn07051978@gmail.com",
  github: "https://github.com/SVAR1978",
  linkedin: "https://www.linkedin.com/in/vikash-adivasi",
  resumeUrl: "#",
};

export const aboutText = `I am a dedicated Software Engineering student with a passion for building practical, 
user-focused applications. My approach to development is rooted in problem-solving and continuous learning, 
with hands-on experience across multiple projects that demonstrate real-world application of technical concepts.

I thrive in environments that challenge me to grow, and I'm actively seeking opportunities to contribute 
to innovative teams while expanding my expertise in full-stack development and cybersecurity.`;

export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
  frontend: ["React", "HTML5", "CSS3", "Tailwind CSS", "Next.js"],
  backend: ["Node.js", "Express.js", "REST APIs", "MongoDB", "PostgreSQL"],
  tools: ["Git", "GitHub", "VS Code", "Docker", "Linux", "Postman"],
};

export const projects = [

  {
    title: "Sentry — Real-Time Monitoring",
    description: "Distributed real-time monitoring and alerting system using WebSockets for live event streaming. Built scalable REST APIs with RBAC, optimized Prisma DB ops for 30% faster queries, and automated email alerts delivered under 2 seconds.",
    techStack: ["Node.js", "TypeScript", "WebSockets", "Prisma"],
    liveUrl: "#",
    githubUrl: "https://github.com/SVAR1978/Sentry_app",
  },
  {
    title: "Security Management Dashboard",
    description: "Full-stack security platform with real-time risk scoring, OWASP vulnerability tracking, drag-and-drop Kanban board, Redis caching with per-user isolation, and multi-format reporting with PDF/CSV/JSON export.",
    techStack: ["React 19", "Express 5", "PostgreSQL", "Redis"],
    liveUrl: "#",
    githubUrl: "https://github.com/SVAR1978/security-dashboard",
  },
  {
    title: "AI Interviewer",
    description: "ML-powered interview simulator generating 500+ dynamic technical and behavioral questions via OpenAI API. Delivers personalized feedback improving answer quality by 25%, with 30% reduced API latency through caching.",
    techStack: ["React.js", "Node.js", "Python", "OpenAI API"],
    liveUrl: "#",
    githubUrl: "https://github.com/SVAR1978/ai-interviewer",
  },
  {
    title: "Real-Time Chat Application",
    description: "Instant messaging platform with WebSocket integration, supporting private and group conversations with message persistence.",
    techStack: ["React", "Socket.io", "Express", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "National Institute of Technology Delhi",
    duration: "2023 - 2027 (Final Year)",
    description: "Focused on software development principles, data structures, algorithms, and practical project work.",
  },
];

export const currentlyLearning = [
  {
    topic: "Full Stack Web Development",
    description: "Deepening expertise in modern frameworks, API design, and database optimization.",
  },
  {
    topic: "Cyber Security Fundamentals",
    description: "Exploring network security, ethical hacking, and secure coding practices.",
  },
];
