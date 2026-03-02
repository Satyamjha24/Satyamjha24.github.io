export const RESUME_LINK = "https://drive.google.com/file/d/1o6YXWaQ9ct2_pDBySoAcXrK_tz3qI3ls/view?usp=sharing";
export const FORMSPREE_ID = "xeelwlnr";

export const NAV_LINKS = ["About", "Skills", "Projects", "Journey", "Contact"];

export const SKILLS = [
  { name: "React",      icon: "⚛️",  color: "#61DAFB" },
  { name: "Redux",      icon: "🔄",  color: "#764ABC" },
  { name: "JavaScript", icon: "JS",  color: "#F7DF1E", text: true },
  { name: "TypeScript", icon: "TS",  color: "#3178C6", text: true },
  { name: "Node.js",    icon: "🟢",  color: "#339933" },
  { name: "Express",    icon: "EX",  color: "#888888", text: true },
  { name: "MongoDB",    icon: "🍃",  color: "#47A248" },
  { name: "HTML5",      icon: "H5",  color: "#E34F26", text: true },
  { name: "CSS3",       icon: "C3",  color: "#1572B6", text: true },
  { name: "SCSS",       icon: "SC",  color: "#CC6699", text: true },
  { name: "Tailwind",   icon: "TW",  color: "#06B6D4", text: true },
  { name: "Chakra UI",  icon: "⚡",  color: "#319795" },
  { name: "GitHub",     icon: "🐙",  color: "#6e5494" },
  { name: "Golang",     icon: "GO",  color: "#00ADD8", text: true },
];

export const PROJECTS = [
  {
    title: "Jewel Lane",
    subtitle: "E-Commerce Jewellery Platform",
    description:
      "A feature-rich clone of Caratlane — India's leading diamond & gold jewellery brand. Built with complete product browsing, cart, authentication, and order management. Handles rings, earrings, bangles, bracelets & necklaces with smooth UI/UX.",
    stack: ["React", "Redux", "JavaScript", "Chakra UI", "NodeJS", "Express", "MongoDB"],
    live: "https://jewellane.vercel.app/",
    github: "https://github.com/Satyamjha24/Jewellane",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    emoji: "💎",
    type: "Full Stack",
  },
  {
    title: "LimeRoad",
    subtitle: "Fashion E-Commerce Store",
    description:
      "A pixel-perfect clone of LimeRoad — India's popular fashion marketplace. Features full product listing with filters, user auth, wishlist, shopping cart and seamless checkout experience for clothes, beauty & lifestyle products.",
    stack: ["React", "Redux", "JavaScript", "Chakra UI", "NodeJS", "Express", "MongoDB"],
    live: "https://frontend-nu-hazel-89.vercel.app/",
    github: "https://github.com/SumanBlswas/spicy-yak-7891",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    emoji: "👗",
    type: "Full Stack",
  },
  {
    title: "Skill-Spring Academy",
    subtitle: "Educational Platform",
    description:
      "Skill Spring Academy: A rapid solo development of a learning management system, integrating cutting-edge technologies, including Generative AI, in just three days.",
    stack: ["Angular", "TypeScript", "Chakra UI", "Python", "Django", "MongoDB"],
    live: "https://skill-spring-academy.netlify.app/",
    github: "https://github.com/Satyamjha24/SkillSpring_Academy",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    emoji: "🎓",
    type: "Full Stack",
  },
  {
    title: "Image Search",
    subtitle: "Image Search Platform",
    description:
      "Explore the world through images with ease! Our image search app simplifies visual discovery, making it effortless to search and enjoy stunning visuals from across the web.",
    stack: ["React", "TypeScript", "Chakra UI"],
    live: "https://image-searches.vercel.app/",
    github: "https://github.com/Satyamjha24/Mini_Projects/tree/main/Codebase/image-search",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    emoji: "🔍",
    type: "Frontend",
  },
  {
    title: "Mini Projects",
    subtitle: "Multiple Small-Scale Apps",
    description:
      "A collection of small apps that demonstrate adaptability, continuous learning, and expertise in prompt engineering — showcasing diverse technologies to build innovative web solutions.",
    stack: ["React", "Redux", "JavaScript", "Chakra UI", "Angular", "TypeScript"],
    live: "https://my-mini-projects.netlify.app/",
    github: "https://github.com/Satyamjha24/Mini_Projects",
    gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    emoji: "🧩",
    type: "Frontend",
  },
];

export const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    company: "Datamotive Technologies",
    duration: "3 Years",
    current: true,
    description:
      "Working as a Frontend-focused Developer, building scalable and performant web applications. Recently stepped into backend territory by solving real bugs in Golang — always hungry to grow.",
    highlights: [
      { icon: "⚛️", text: "Led frontend development using React, Redux, TypeScript across multiple product features" },
      { icon: "🎨", text: "Built responsive, accessible UIs with a strong focus on performance and clean component architecture" },
      { icon: "🔗", text: "Collaborated closely with backend teams to integrate APIs and ensure seamless data flow" },
      { icon: "🐹", text: "Recently started solving backend bugs in Golang — expanding beyond the frontend comfort zone" },
      { icon: "🔍", text: "Participated in code reviews, technical discussions, and sprint planning in an Agile environment" },
      { icon: "📦", text: "Maintained and improved existing codebase — optimizing performance, fixing bugs, improving UX" },
    ],
    stack: ["React", "Redux", "TypeScript", "JavaScript", "HTML", "CSS", "SCSS", "Golang"],
  },
];

export const EDUCATION = [
  {
    degree: "Full Stack Web Development (MERN Stack)",
    institute: "Masai School (Remote)",
    tag: "MERN Stack",
    tagClass: "pink",
    description:
      "Completed an intensive, outcome-based Full Stack program at Masai School — India's leading coding bootcamp. Mastered the MERN stack, Data Structures & Algorithms, and soft skills like teamwork, communication, and problem-solving under pressure. Masai's military-style discipline pushed me to code every single day and build real-world projects from scratch.",
    stack: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "DSA", "Git"],
  },
  {
    degree: "B.Com (Accounts)",
    institute: "Marwari College, Ranchi — Jharkhand",
    tag: "62%",
    tagClass: "default",
    description:
      "Completed Bachelor of Commerce with a focus on Accounts — covering financial accounting, business studies, economics, and taxation. This background gave me a strong analytical mindset that I carry into every technical problem I solve today.",
    stack: [],
  },
];

export const CONTACT_LINKS = [
  { icon: "📧", label: "Email",    value: "jhasatyam0118@gmail.com",       href: "mailto:jhasatyam0118@gmail.com" },
  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/satyamjha24",   href: "https://www.linkedin.com/in/satyamjha24" },
  { icon: "🐙", label: "GitHub",   value: "github.com/Satyamjha24",        href: "https://github.com/Satyamjha24" },
];
