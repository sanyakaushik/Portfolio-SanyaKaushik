"use client";

"use client";

import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Breast Cancer Detection",
    desc: "AI-powered breast cancer detection using thermal imaging, CNNs, ensemble learning, and Grad-CAM explainability.",
    image: "/project1.png",
    tags: ["Python", "TensorFlow", "Grad-CAM"],
    live: "https://breastcancer.sanyakaushik2365.workers.dev",
    github: "https://github.com/sanyakaushik/BreastCancerDetectionDashboard",
  },

  {
    title: "CSUF Research Equipment Website",
    desc: "Searchable research equipment inventory platform for CSUF College of Engineering and Computer Science.",
    image: "/project2.png",
    tags: ["Next.js", "Tailwind", "React"],
    live: "https://your-live-link.com",
    github: "https://github.com/sanyakaushik2365",
  },

  {
    title: "Human-AI Agency Platform",
    desc: "A full-stack system to model human-AI decision workflows and interaction patterns.",
    image: "../images/project3.png",
    tags: ["React", "JavaScript", "Python", "FastAPI"],
    live: "https://human-ai-agency-main.vercel.app",
    github: "https://github.com/vkvalli/human-ai-agency",
  },
];

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}