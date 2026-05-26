const experiences = [
    {
      role: "Software Developer Intern",
      company: "Classplus",
      date: "Jul 2023 – Oct 2023",
      points: [
        "Built a Next.js drag-and-drop builder using React hooks and reusable UI components.",
        "Improved app launch speed by nearly 40%.",
        "Worked on drip-marketing platform APIs and real-time analytics.",
        "Improved reliability using Vite migration and GitHub Actions CI/CD.",
      ],
    },
    {
      role: "Technical Intern",
      company: "Classplus",
      date: "Jan 2023 – Jul 2023",
      points: [
        "Automated manual data scraping using Python, Selenium, BeautifulSoup, SQL, and Linux.",
        "Saved 160+ staff-hours per month.",
        "Improved data accuracy by 15% using validation and cleaning pipelines.",
        "Built scalable ingestion workflows on AWS EC2.",
      ],
    },
    {
      role: "Full-Stack Graduate Researcher",
      company: "CSUF",
      date: "Jan 2026 – May 2026",
      points: [
        "Researching breast cancer detection using thermography and deep learning.",
        "Built CNN-based models using EfficientNetB0, ResNet50, DenseNet121, and InceptionV3.",
        "Used Grad-CAM for explainable AI visualizations.",
        "Designed ensemble model evaluation using sensitivity, specificity, F1, ROC-AUC, and AP.",
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