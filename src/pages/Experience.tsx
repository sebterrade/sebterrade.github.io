const experiences = [
  {
    role: "Data Engineering Intern",
    company: "Ontario Power Generation",
    period: "May 2024 – August 2025",
    highlights: [
      "Built a centralized relational database on Azure servers using Python and T-SQL, combining data from 10+ databases into one internal platform for over 200 engineers.",
      "Engineered complex data pipelines to securely join and transform sensitive nuclear operations data.",
      "Deployed internal tracking applications to monitor key metrics for WANO and IAEA audits, slashing manual data lookup time by 90% (saving ~$50,000/week) compared to the old system.",
    ],
  },
  {
    role: "AI/Data Science Research Associate",
    company: "Ingenuity Labs Research Institute",
    period: "September 2023 – December 2023",
    highlights: [
      "Engineered automated video preprocessing pipelines in Python (Pandas, NumPy) to clean and normalize 3,000 real-world dashcam videos (436,000+ frames) for machine learning.",
      "Supported the training and optimization of predictive neural networks using PyTorch, contributing to a model that achieved a 70.8% accuracy rate in cyclist collision anticipation.",
    ],
  },
  {
    role: "Robotics Project Lead",
    company: "Queen’s VEX U Robotics Team",
    period: "September 2022 – September 2024",
    highlights: [
      "Led a 5-person engineering team through the design and implementation of an Odometry PCB, securing a quarter-final finish at the VEX U World Championship.",
      "Engineered motion control algorithms and PID control to optimize robot movement using C/C++ and Rust.",
      "Architected a high-performance computer vision pipeline on a Jetson Nano to process live camera feeds for object detection.",
    ],
  },
];


const Experience = () => {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Work Experience</h1>
        <p className="text-muted-foreground">
          Engineering and Software experience from internships, design team work and research.
        </p>
      </section>

      <div className="space-y-0">
        {experiences.map((exp, index) => (
          <div key={exp.role} className="relative pb-10 pl-8 last:pb-0">
            {/* Timeline line */}
            {index < experiences.length - 1 && (
              <div className="absolute left-[5px] top-3 h-full w-px bg-border" />
            )}
            {/* Timeline dot */}
            <div className="absolute left-0 top-2 h-[11px] w-[11px] rounded-full border-2 border-primary bg-background" />

            <div className="space-y-3">
              <div>
                <h2 className="text-lg font-semibold">{exp.role}</h2>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-primary">{exp.company}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-1.5">
                {exp.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
