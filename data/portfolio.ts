export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'design';
  level: number;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  avatar: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
}

// Información personal 
export const personalInfo: PersonalInfo = {
  name: "Cristian Pavel Mendieta Alanya",
  title: "Full Stack Developer",
  description: "Apasionado por crear experiencias digitales únicas y funcionales. Especializado en React, Next.js y tecnologías modernas.",
  avatar: "images/cv.png",
  email: "crismen2106@gmail.com",
  github: "https://github.com/Cris21men",
  linkedin: "https://www.linkedin.com/in/cristian-pavel-mendieta-alanya-a77892377/",
  location: "Lima, Perú"
};

// Proyectos (añade tus proyectos reales)
export const projects: Project[] = [
  {
    id: "1",
    title: "PDFStudio21",
    description: "Herramienta intuitiva y rápida para editar, unir y convertir PDF con facilidad y precisión.",
    image: "/images/pdfstudio21.JPG",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Stripe", "Python", "Flask", "PyPDF2"],
    demoUrl: "https://pdfstudio21-frontend-21.vercel.app/",
    githubUrl: "https://github.com/Cris21men/pdfstudio21-frontend-21",
    featured: true
  },
  {
    id: "2", 
    title: "SharpCut AudioStudio21",
    description: "Editor de audio ágil y preciso para cortar, ajustar y optimizar sonido con calidad profesional.",
    image: "/images/audiostudio21.JPG",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
    demoUrl: "https://sharpcut-audiostudio21-cris.vercel.app/",
    githubUrl: "https://github.com/Cris21men/SharpCut-AudioStudio21",
    featured: true
  },
  {
    id: "3",
    title: "Desafío Matemáticos Studio21",
    description: "Juego educativo de escritorio tipo Missile Command para aprender matemáticas de forma divertida e interactiva.",
    image: "/images/matematicaStudio21.JPG",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://desafiomatematicosstudio21-ohqiuf664-crismen2106-2235s-projects.vercel.app/",
    githubUrl: "https://github.com/Cris21men/laservercelStudio21",
    featured: false
  },
  {
    id: "4",
    title: "Telegram Bot Studio21",
    description: "Envía código de VS Code directamente a Telegram.",
    image: "/images/exstudio21.JPG",
    technologies: ["TypeScript", "Node.js", "VS Code Extension API", "Telegram Bot API", "HTTPS", "VSCE", "NPM", "Azure DevOps"],
    demoUrl: "https://marketplace.visualstudio.com/items?itemName=CristianMendietaAlanya.telegram-bot-Studio21&ssr=false#review-detailshttps://desafiomatematicosstudio21.vercel.app/",
    githubUrl: "https://github.com/Cris21men/telegram-bot-Studio21",
    featured: false
  }
];

// Habilidades 
export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "⚛️", category: "frontend", level: 95 },
  { name: "Next.js", icon: "▲", category: "frontend", level: 90 },
  { name: "TypeScript", icon: "🔷", category: "frontend", level: 85 },
  { name: "Tailwind CSS", icon: "🎨", category: "frontend", level: 90 },
  { name: "Three.js", icon: "🎮", category: "frontend", level: 75 },
  
  // Backend
  { name: "Node.js", icon: "🟢", category: "backend", level: 85 },
  { name: "Python", icon: "🐍", category: "backend", level: 80 },
  { name: "Flask", icon: "🌶️", category: "backend", level: 80 },
  { name: "PostgreSQL", icon: "🐘", category: "backend", level: 75 },
  { name: "MongoDB", icon: "🍃", category: "backend", level: 70 },
  
  // Tools
  { name: "Git", icon: "📝", category: "tools", level: 90 },
  { name: "Docker", icon: "🐳", category: "tools", level: 70 },
  { name: "AWS", icon: "☁️", category: "tools", level: 65 },
  
  // Design
  //{ name: "Figma", icon: "🎭", category: "design", level: 85 },
  //{ name: "Photoshop", icon: "🖼️", category: "design", level: 75 },
];
