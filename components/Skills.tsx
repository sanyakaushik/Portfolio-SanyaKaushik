const skills = [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "AWS",
    "Firebase",
    "PostgreSQL",
    "TensorFlow",
    "Tailwind CSS",
    "Python",
    "OpenCV",
    "Machine Learning",
  ];
  
  export default function Skills() {
    return (
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>
  
        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="px-6 py-3 rounded-full bg-zinc-900 border border-zinc-700"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    );
  }