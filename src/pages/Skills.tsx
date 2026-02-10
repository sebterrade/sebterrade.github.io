const technicalSkills = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "C++"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "FastAPI", "Node.js", "LangChain", "Pandas", "NumPy"],
  },
  {
    category: "AI / ML",
    items: ["LLMs", "RAG", "NLP", "Knowledge Graphs", "Embeddings", "Prompt Engineering"],
  },
  {
    category: "Systems & Infrastructure",
    items: ["PostgreSQL", "Neo4j", "Docker", "AWS", "CI/CD", "REST APIs"],
  },
  {
    category: "Tools",
    items: ["Git", "Linux", "VS Code", "Jupyter", "Figma", "Jira"],
  },
];

const softSkills = [
  {
    skill: "Technical Communication",
    description:
      "Translating complex engineering concepts for non-technical stakeholders and writing clear documentation.",
  },
  {
    skill: "Ownership & Initiative",
    description:
      "Proactively identifying problems, proposing solutions, and driving them to completion independently.",
  },
  {
    skill: "Cross-functional Collaboration",
    description:
      "Working effectively with product, design, and engineering teams to align on goals and deliver results.",
  },
  {
    skill: "Mentorship & Leadership",
    description:
      "Guiding junior team members, sharing knowledge, and fostering a culture of continuous learning.",
  },
  {
    skill: "Adaptability",
    description:
      "Quickly ramping up on new domains, technologies, and codebases with minimal guidance.",
  },
];

const Skills = () => {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Skills</h1>
        <p className="text-muted-foreground">
          Technical capabilities and interpersonal strengths that I bring to every team.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Technical Skills</h2>
        <div className="space-y-5">
          {technicalSkills.map((group) => (
            <div key={group.category} className="space-y-2">
              <h3 className="text-sm font-medium text-foreground">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Soft Skills */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Soft Skills</h2>
        <div className="space-y-4">
          {softSkills.map((s) => (
            <div
              key={s.skill}
              className="rounded-lg border border-border bg-card p-5"
            >
              <h3 className="mb-1 font-medium text-foreground">{s.skill}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
