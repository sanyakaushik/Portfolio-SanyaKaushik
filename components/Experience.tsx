const experiences = [
    {
      role: "Software Developer Intern",
      company: "Classplus",
      date: "Jul 2023 – Oct 2023",
      points: [
        "Reduced app launch time by 40% by building a drag-and-drop UI builder using Next.js, React hooks, and reusableccomponents.",
        "Increased engagement by 25% by developing a drip marketing system handling 10K+ daily campaigns using Node.js, cron jobs, and analytics pipelines.",
        " Improved deployment reliability to 99% by migrating from Webpack to Vite and implementing CI/CD pipelines using GitHub Actions.",
        "Enhanced release efficiency by delivering scalable, fault-tolerant systems through cross-team collaboration using modern full-stack practices.",
      ],
    },
    {
      role: "Technical Intern",
      company: "Classplus",
      date: "Jan 2023 – Jul 2023",
      points: [
        "Saved 160+ staff-hours/month and cut operational costs by 70% by automating manual data scraping using Python,Selenium, BeautifulSoup, SQL, and Shell scripting",
        "Increased data processing throughput by building parallelized ingestion pipelines and AWS EC2 scaling workflows to resolve runtime bottlenecks.",
        "Improved data accuracy by 15% by developing validation and cleaning scripts in Python/SQL, ensuring consistency across multi-source workflows.",
        "Saved $85K+ annually by engineering a scalable analytics infrastructure that automated and unified data pipelines",
      ],
    },
    {
      role: "Full-Stack Graduate Researcher",
      company: "CSUF",
      date: "Jan 2026 – May 2026",
      points: [
        "Built a university-wide research platform using React, Node.js, and REST APIs to improve equipment visibility and access across departments for faculty, students, and research teams across the campus.",
        "Developed scalable React UIs to streamline research discovery and enable efficient navigation for faculty, students, and interdisciplinary research teams across multiple departments.",
        " Implemented backend services using Node.js and REST architecture to support reliable cross-department data workflows, integration, and system-level scalability across distributed research environments",
        "Delivered a centralized web platform to standardize research presentation and showcase high-value equipment across departments",
      ],
    },
  ];
  
  export default function Experience() {
    return (
      <section id="work" className="mx-auto max-w-7xl px-6 py-28">
        <p className="text-gray-400">WHAT I HAVE DONE SO FAR</p>
        <h2 className="mt-3 text-6xl font-black">Work Experience.</h2>
  
        <div className="relative mt-24">
          <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 bg-white md:block" />
  
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={exp.role}
                className={`relative flex ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div className="w-full rounded-xl bg-[#1d1836] p-8 shadow-lg md:w-[45%]">
                  <h3 className="text-3xl font-bold">{exp.role}</h3>
                  <p className="mt-2 text-lg text-gray-400">{exp.company}</p>
                  <p className="mt-2 font-semibold text-purple-300">{exp.date}</p>
  
                  <ul className="mt-6 list-disc space-y-3 pl-5 text-gray-200">
                    {exp.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
  
                <div className="absolute left-1/2 top-8 hidden h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-[#151030] text-2xl md:flex">
                  💻
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }