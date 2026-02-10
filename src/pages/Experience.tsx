const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Company Name",
    period: "Jun 2024 – Aug 2024",
    description:
      "Contributed to core platform services, working across the stack to improve reliability and developer experience.",
    highlights: [
      "Designed and implemented a monitoring dashboard that reduced incident response time by 30%",
      "Collaborated with cross-functional teams to define API contracts and data models",
      "Presented technical proposals to senior engineers and product managers",
      "Owned end-to-end delivery of a feature used by 10K+ daily active users",
    ],
  },
  {
    role: "Research Assistant",
    company: "University Lab",
    period: "Jan 2023 – May 2024",
    description:
      "Led applied research in NLP and knowledge graph construction, bridging academic rigor with practical engineering.",
    highlights: [
      "Built and maintained data pipelines processing 100K+ documents for research experiments",
      "Published findings on graph-based retrieval methods for domain-specific question answering",
      "Mentored two junior researchers on best practices for reproducible ML experiments",
      "Communicated technical findings to non-technical stakeholders in weekly reviews",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "University CS Department",
    period: "Sep 2022 – Dec 2023",
    description:
      "Supported instruction for core computer science courses, helping students develop strong fundamentals.",
    highlights: [
      "Held weekly office hours for 200+ students across data structures and algorithms courses",
      "Developed supplementary materials that improved average exam scores by 12%",
      "Received top-rated TA feedback for clarity and approachability",
    ],
  },
];

const Experience = () => {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Work Experience</h1>
        <p className="text-muted-foreground">
          Real-world engineering experience emphasizing systems thinking, ownership, 
          and clear communication.
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
              <p className="text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>
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
