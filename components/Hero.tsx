"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#050816] px-5 pt-28 pb-16 sm:px-8 lg:pt-32 lg:pb-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,rgba(124,58,237,0.35),transparent_35%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div className="flex gap-4 sm:gap-6">
          <div className="mt-2 hidden flex-col items-center sm:flex">
            <div className="h-4 w-4 rounded-full bg-purple-500" />
            <div className="h-44 w-1 bg-purple-500 sm:h-52" />
          </div>

          <div className="min-w-0">
            <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I’m <span className="text-purple-500">Sanya</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-gray-200 sm:text-lg md:text-xl">
              FullStack Developer and AI/ML researcher building scalable,
              modern, and user-friendly web applications.
            </p>

            <div className="mt-7 flex gap-3">
              <a href="https://github.com/sanyakaushik2365" target="_blank" className="icon-btn">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sanyakaushik2365" target="_blank" className="icon-btn">
                <FaLinkedinIn size={20} />
              </a>
              <a href="mailto:sanyakaushik2365@csu.fullerton.edu" className="icon-btn">
                <MdEmail size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="mx-auto max-w-xl rounded-3xl border border-purple-500/20 bg-[#151030] p-4 shadow-2xl shadow-purple-900/20 sm:p-5">
            <div className="mb-4 flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="overflow-hidden rounded-2xl bg-black p-4 sm:p-6">
              <pre className="overflow-x-auto whitespace-pre-wrap break-words text-xs leading-6 text-green-400 sm:text-sm sm:leading-8">
{`const developer = {
  name: "Sanya Kaushik",
  role: "FullStack Developer",
  stack: ["React", "Next.js", "AWS", "AI/ML"],
  location: "Fullerton, CA"
};`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}