const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Ontario Power Generation",
    period: "May 2024 – August 2025",
    highlights: [
      "Built and maintained the Python and SQL backend for Nexus, an internal application that combines data from 10+ databases for system engineers, reducing manual cross-system lookups by 10+ hours per week.",
      "Wrote and optimized SQL queries to join, filter, and reconcile work orders, equipment status, training records, and system health data across multiple legacy databases.",
      "Built multiple internal applications to track equipment KPIs, performance targets, and historical trends for engineering reliability reviews.",
    ],
  },
  {
    role: "Software and Electronics Project Lead",
    company: "Queen’s VEX U Robotics Team",
    period: "September 2022 – September 2024",
    highlights: [
      "Led a team of 5 in designing and implementing an Odometry PCB, improving robot navigation accuracy.",
      "Designed and implemented robot motion algorithms, improved camera processing, and developed a Jetson Nano PCB for enhanced visual recognition, contributing to a quarter-final finish at the VEX U Robotics Worlds.",
    ],
  },
  {
    role: "AI Research Associate",
    company: "Ingenuity Labs Research Institute",
    period: "September 2023 – December 2023",
    highlights: [
      "Developed neural networks using real-life road accident data to identify patterns and improve road safety.",
      "Classified cyclist-related incidents with Python, uncovering key accident causes and providing insights for safety enhancements.",
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
