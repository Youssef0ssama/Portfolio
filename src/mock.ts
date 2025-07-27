import {
  Code,
  LayoutTemplate,
  Smartphone,
  Database,
  GitBranch,
  Brush,
  Globe,
  Tv,
  Home,
  Figma,
  Palette,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Github,
  Linkedin,
} from "lucide-react";
import islamicImage from "./assets/images/islamic.png";
import hotelImage from "./assets/images/Hotel.png";
import logoImage from "./assets/images/schedsmart.png";
import airbnbImage from "./assets/images/airbnb.png";
import profilePic from "./assets/images/My photo.jpg";

// About Section
export const highlights = [
  { icon: Code, title: "Frontend Development", description: "Building responsive websites with HTML, CSS, and JavaScript" },
  { icon: LayoutTemplate, title: "React Applications", description: "Developing interactive UIs using React framework" },
  { icon: Smartphone, title: "Mobile-First Design", description: "Creating responsive interfaces for all devices" },
  { icon: Database, title: "Database Integration", description: "Working with MySQL for data management" },
  { icon: GitBranch, title: "Version Control", description: "Utilizing Git for collaborative development" },
  { icon: Brush, title: "UI/UX Design", description: "Designing interfaces with Figma and Illustrator" },
];

export const aboutStats = [
  { number: "4", label: "Projects" },
  { number: "3", label: "Certificates" },
  { number: "4+", label: "Years of Study" },
  { number: "∞", label: "Learning Mindset" },
];

export const aboutTechStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Python",
  "Java",
  "MySQL",
  "Git",
  "Figma",
];

// Skills Section
export const skillCategories = [
  {
    title: "Languages",
    icon: Globe,
    skills: [
      { name: "Arabic (Native)", level: 100 },
      { name: "English (Proficient)", level: 90 },
    ],
  },
  {
    title: "Programming",
    icon: Code,
    skills: [
      { name: "Python", level: 80 },
      { name: "Java", level: 75 },
    ],
  },
  {
    title: "Web Development",
    icon: LayoutTemplate,
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: GitBranch,
    skills: [{ name: "React", level: 75 }],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [{ name: "MySQL", level: 70 }],
  },
  {
    title: "Tools & Design",
    icon: Palette,
    skills: [
      { name: "Git", level: 80 },
      { name: "Figma", level: 75 },
      { name: "Illustrator", level: 70 },
    ],
  },
];

export const skillTraits = [
  "Frontend Development",
  "UI/UX Design",
  "Problem Solving",
  "Analytical Thinking",
];

// Projects Section
export const projects = [
  {
    title: "American Islamic Diversity",
    description:
      "Transformed a static, hard-coded nonprofit website into a dynamic platform by designing and implementing a full backend (Node.js, Express, SQLite) and admin UI for content management.",
    icon: Globe,
    image: islamicImage,
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Node.js", "Express", "SQLite"],
    github: undefined,
    external: "https://americanislamicdiversity.org/",
    features: [
      "Dynamic Content Management",
      "Admin Dashboard",
      "Full Backend Integration",
      "Nonprofit Platform"
    ],
  },
  {
    title: "Hotel and Tour Booking Platform",
    description:
      "Web project serves as a modern and user-friendly hotel and tour booking platform, offering an immersive experience inspired by leading travel websites. (Career 180/Learn it Final Project)",
    icon: Home,
    image: hotelImage,
    technologies: ["React.js", "Redux", "CSS Modules", "JavaScript"],
    github: "https://github.com/emy185/hotels.git",
    external: "https://hotels-one-jet.vercel.app/",
    features: [
      "Hotel Booking",
      "Tour Booking",
      "Modern UI",
      "Responsive Design"
    ],
  },
  {
    title: "SCHEDSMART",
    description:
      "Developed a university scheduling web application for Alexandria University, enabling efficient timetable generation and management for students and staff. (Graduation Final Project)",
    icon: Tv,
    image: logoImage,
    technologies: ["React.js", "Tailwind CSS", "Vite", "NestJS", "TypeScript", "Flask", "OR-Tools", "Docker", "PostgreSQL"],
    github: undefined,
    external: undefined,
    features: [
      "Timetable Generation",
      "Student & Staff Management",
      "Multi-Stack Integration",
      "University Scheduling"
    ],
  },
  {
    title: "Airbnb Mobile App Design",
    description:
      "Designed and developed a responsive Airbnb UI project on Figma, showcasing meticulous attention to detail and a user-centric approach, ensuring seamless accessibility across various devices.",
    icon: Figma,
    image: airbnbImage,
    technologies: ["Figma"],
    github: undefined,
    external: "https://www.figma.com/community/file/1346919958313795499/airbnb",
    features: [
      "Mobile App Design",
      "User-Centric Approach",
      "Responsive UI",
      "Prototyping"
    ],
  },
];

// Contact Section
export const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "youssefossama210@gmail.com",
    href: "mailto:youssefossama210@gmail.com",
    description: "Send me an email anytime",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+20 01061836090",
    href: "tel:+2001061836090",
    description: "Call or WhatsApp available",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Alexandria, Egypt",
    href: "#",
    description: "Available for remote work",
  },
  {
    icon: Calendar,
    title: "Availability",
    value: "Open to opportunities",
    href: "#",
    description: "Junior frontend developer roles",
  },
];

export const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    href: "https://github.com/Youssef0ssama",
    color: "hover:text-gray-800",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/youssef-0ssama/",
    color: "hover:text-blue-600",
  },
  {
    icon: Mail,
    name: "Email",
    href: "mailto:youssefossama210@gmail.com",
    color: "hover:text-red-600",
  },
];

export const personalInfo = {
  firstName: "Youssef",
  lastName: "Kandil",
  email: "youssefossama210@gmail.com",
  phone: "+20 01061836090",
  profilePic,
  github: "https://github.com/Youssef0ssama",
  linkedin: "https://www.linkedin.com/in/youssef-0ssama/",
  location: "Alexandria, Egypt",
  description: "A junior frontend developer eager to apply theoretical knowledge to real-world projects. Passionate about technology and aiming to contribute analytical skills and creativity to innovative solutions.",
};
