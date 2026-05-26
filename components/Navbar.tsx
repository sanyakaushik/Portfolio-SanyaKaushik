"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-[#050816]/90 backdrop-blur border-b border-white/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 font-bold">
            S
          </div>
          <span className="text-lg font-bold">Sanya | FullStack Developer</span>
        </a>

        <div className="hidden gap-10 text-gray-300 md:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
}