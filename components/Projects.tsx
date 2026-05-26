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
      github: "https://github.com/sanyakaushik/CSUFResearchWebsite",
    },
  
    {
        title: "Human-AI Agency Platform",
        desc: "A full-stack system to model human-AI decision workflows and interaction patterns.",
        image: "/project3.png",
        tags: ["React", "JavaScript", "Python", "FastAPI"],
        live: "https://human-ai-agency-main.vercel.app",
        github: "https://github.com/vkvalli/human-ai-agency",
      },
  ];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-28">
      <p className="text-gray-400">MY WORK</p>
      <h2 className="mt-3 text-6xl font-black">Projects.</h2>

      <p className="mt-8 max-w-4xl text-lg leading-8 text-gray-300">
        These projects showcase my skills in full-stack development, AI/ML,
        cloud deployment, research systems, and modern user interface design.
      </p>

      <div className="mt-20 grid gap-8 md:grid-cols-3">
  {projects.map((project) => (
    <div
      key={project.title}
      className="rounded-3xl bg-[#151030] p-5 shadow-xl shadow-purple-900/30"
    >
      <div className="relative h-56 overflow-hidden rounded-2xl">
        
        {/* PROJECT IMAGE */}
        <img
          src={project.image}
          alt={project.title}
          onClick={() => window.open(project.live, "_blank")}
          className="h-full w-full cursor-pointer object-cover transition duration-500 hover:scale-110"
        />

        {/* GITHUB BUTTON */}
        <button
          onClick={() => window.open(project.github, "_blank")}
          className="absolute right-4 top-4 z-10 rounded-full bg-black p-3 hover:scale-110 transition"
        >
          <FaGithub />
        </button>
      </div>

      <h3 className="mt-6 text-3xl font-bold">
        {project.title}
      </h3>

      <p className="mt-4 leading-7 text-gray-300">
        {project.desc}
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-sm text-cyan-300"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  ))}
</div>
    </section>
  );
}