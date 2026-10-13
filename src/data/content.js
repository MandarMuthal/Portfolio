export const profile = {
  name: "Mandar Muthal",
  initials: "MANDAR MUTHAL",
  headline: "Full-Stack Developer | React Developer",
  intro: "I build fast, accessible web applications with React and Java, from the interface to the database.",
  email: "muthalmandar222@gmail.com",
  github: "https://github.com/MandarMuthal",
  linkedin: "https://in.linkedin.com/in/mandar-muthal-b594852b5",
  resume: "/resume.pdf", 
  roles: ["Full-Stack Developer", "React Developer", "Java Backend Learner", "Problem Solver"],
};

export const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

export const about = {
  paragraphs: [
    "I'm a Computer Science and Engineering graduate currently pursuing the PG Diploma in Advanced Computing (PGCP-AC) at C-DAC Bengaluru.",
    "I enjoy turning ideas into practical, user-focused applications. My work spans modern React interfaces, Java and Node.js back ends, and relational and document databases.",
  ],
  interests: [
    "Full-stack web development",
    "React and modern frontend engineering",
    "Java and backend development",
    "Database management",
    "Data structures and algorithms",
    "Building practical, user-focused applications",
  ],
};

export const skills = [
  { title: "Frontend", icon: "Layout", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS","Next JS"] },
  { title: "Backend", icon: "Server", items: ["Java", "Node.js", "Express.js"] },
  { title: "Databases", icon: "Database", items: ["MySQL", "MongoDB"] },
  { title: "Tools", icon: "Wrench", items: ["Git", "GitHub", "VS Code", "Eclipse", "Vite"] },
];

export const projects = [
  {
    title: "Personal Expense Tracker",
    icon: "Wallet",
    gradient: "from-emerald-500/40 via-teal-500/20 to-transparent",
    description: "Money leaks away when spending isn't tracked. This app lets users record income and expenses, and see where their money goes.",
    tech: ["React", "Tailwind CSS"], // EDIT: list the technologies you actually used
    live: "",
    repo: "",
  },
  {
    title: "Inventory & Billing System",
    icon: "Receipt",
    gradient: "from-sky-500/40 via-indigo-500/20 to-transparent",
    description: "Small shops often track stock and bills by hand. This system manages products and stock levels, and generates bills for sales.",
    tech: ["Java", "MySQL"], // EDIT: list the technologies you actually used
    live: "",
    repo: "",
  },
  {
    title: "PowerPulse",
    icon: "Dumbbell",
    gradient: "from-cyan-500/40 via-teal-500/20 to-transparent",
    description: "Finding the right exercise and seeing how to do it takes too many tabs. PowerPulse lets users browse exercises and watch demonstration videos in one place.",
    tech: ["React", "Tailwind CSS", "Exercise API", "Video API"],
    live: "",
    repo: "",
  },
  {
    title: "NutriSavor",
    icon: "UtensilsCrossed",
    gradient: "from-amber-500/30 via-rose-500/20 to-transparent",
    description: "Deciding what to cook is hard when recipes and nutrition info live apart. NutriSavor surfaces recipes with meal details so users can choose quickly.",
    tech: ["JavaScript", "Tailwind CSS", "TheMealDB API"],
    live: "https://recipe-finder-nine-tan.vercel.app/",
    repo: "https://github.com/MandarMuthal/recipeFinder",
  },
];


export const education = [
  { icon: "GraduationCap", title: "PG Diploma in Advanced Computing (PGCP-AC)", org: "C-DAC Bengaluru", period: "Aug 2026 – Feb 2027", description: "Currently pursuing PGCP-AC (Post Graduate Certificate Programme in Advanced Computing) at C-DAC Bengaluru, focusing on software development, Java, data structures and algorithms, database technologies, and web development." },
  { icon: "GraduationCap", title: "B.Tech in Computer Science and Engineering", org: "Tulsiramji Gaikwad Patil College of Engineering & Technology", period: "Sept 2022 – May 2026", description: "Completed my Bachelor of Technology (B.Tech) in Computer Science and Engineering, building a strong foundation in programming, data structures, database management, software development, and web technologies. Developed problem-solving skills and practical knowledge through academic projects and hands-on learning. CGPA: 8.64" },
];

export const experience = [
  { icon: "Briefcase", title: "Web Development Intern", org: "AD Infocom Systems", period: "Dec 2025 – Feb 2026", description: "Completed a 3-month internship developing responsive web applications, working on frontend and backend development, and integrating APIs and databases using modern web technologies." },
  { icon: "BarChart3", title: "Data Analytics Intern", org: "NU Intelligence Pvt. Ltd.", period: "Dec 2024 – Jan 2025", description: "Completed a 1-month Data Analytics internship, gaining hands-on experience in data analysis, data visualization, and reporting using Excel and Power BI." },
];
