const cards = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "AI/ML Engineer",
  ];
  
  const skills = [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "TensorFlow",
    "AWS",
    "Firebase",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "FastAPI",
    "OpenCV",
    "GitHub Actions",
  ];
  
  export default function About() {
    return (
      <section id="about" className="mx-auto max-w-7xl px-6 py-28">
        <p className="text-gray-400">INTRODUCTION</p>
  
        <h2 className="mt-3 text-6xl font-black">Overview.</h2>
  
        <p className="mt-8 max-w-5xl text-lg leading-9 text-gray-300">
          I’m a Full Stack Developer and AI/ML Researcher currently pursuing my
          Master’s in Computer Engineering at California State University,
          Fullerton. I specialize in building scalable web applications, AI-based
          systems, and modern cloud-native solutions using React, Next.js,
          TypeScript, Python, TensorFlow, AWS, and Firebase.
        </p>
  
        {/* ROLE CARDS */}
        <div className="mt-20 grid gap-8 md:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card}
              className="rounded-3xl border border-cyan-400 bg-[#151030] p-8 text-center shadow-xl shadow-purple-900/30 transition duration-300 hover:-translate-y-2 hover:shadow-cyan-500/20"
            >
              <div className="mx-auto mb-8 h-16 w-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-600" />
  
              <h3 className="text-2xl font-bold">{card}</h3>
            </div>
          ))}
        </div>
  
        {/* SKILLS SECTION */}
        <div className="mt-28">
          <h3 className="text-4xl font-bold">Tech Stack.</h3>
  
          <div className="mt-10 flex flex-wrap gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-purple-500/30 bg-[#1d1836] px-5 py-3 text-sm font-semibold text-cyan-300 transition duration-300 hover:scale-105 hover:border-cyan-400 hover:text-white"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }