import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  tag: string;
  problem: string;
  solution: string;
  approach: string;
  tools: string[];
  outcomes: string[];
  flagship?: boolean;
}

const projects: Project[] = [
  {
    title: "OmniCast",
    tag: "AI / Conversational",
    problem:
      "Existing conversational systems lacked the ability to maintain coherent, multi-turn dialogues with context-aware routing across diverse domains.",
    solution:
      "Built an AI-powered conversational platform that supports natural multi-turn dialogue with intelligent routing and context retention.",
    approach:
      "Designed a modular pipeline architecture with separate components for intent classification, context management, and response generation. Implemented streaming responses for low-latency interactions.",
    tools: ["Python", "LangChain", "FastAPI", "React", "PostgreSQL", "Docker"],
    outcomes: [
      "Reduced average response latency by 40% through streaming architecture",
      "Achieved 92% intent classification accuracy across 15+ domains",
      "Deployed to production serving real users",
    ],
    flagship: true,
  },
  {
    title: "GraphRAG for Clinical Guidelines",
    tag: "AI / Healthcare",
    problem:
      "Traditional RAG systems lose critical relational context when retrieving clinical guidelines, leading to incomplete or inaccurate recommendations.",
    solution:
      "Built a retrieval-augmented generation system that uses graph-based context to preserve relationships between clinical entities.",
    approach:
      "Constructed a knowledge graph from clinical guideline documents, implemented graph-aware retrieval that traverses entity relationships, and used an LLM to synthesize evidence-backed answers.",
    tools: ["Python", "Neo4j", "LangChain", "OpenAI API", "NetworkX", "FastAPI"],
    outcomes: [
      "Improved retrieval accuracy by 35% compared to standard vector-based RAG",
      "Preserved inter-guideline relationships that flat retrieval missed",
      "Validated against clinical expert review",
    ],
    flagship: true,
  },
  {
    title: "Stock Market Email Newsletter",
    tag: "Automation / Finance",
    problem:
      "Individual investors lacked a concise, automated way to stay informed on daily market movements and key financial signals.",
    solution:
      "Created an automated market summary system that curates and delivers daily financial insights via email.",
    approach:
      "Aggregated data from financial APIs, applied NLP-based summarization and sentiment analysis, and built an automated pipeline for daily email delivery.",
    tools: ["Python", "AWS Lambda", "SendGrid", "BeautifulSoup", "Pandas"],
    outcomes: [
      "Grew subscriber base to 500+ active readers",
      "Automated end-to-end pipeline with zero manual intervention",
      "Maintained 60%+ open rate through content quality",
    ],
    flagship: true,
  },
];

const Projects = () => {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-muted-foreground">
          A selection of engineering projects demonstrating technical depth, 
          systems thinking, and real-world impact.
        </p>
      </section>

      <div className="space-y-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="space-y-5 rounded-lg border border-border bg-card p-6 sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  {project.flagship && (
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-mono text-xs text-primary">
                      flagship
                    </span>
                  )}
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {project.tag}
                </span>
              </div>
              <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" />
            </div>

            <div className="space-y-4 text-sm leading-relaxed">
              <div>
                <h3 className="mb-1 font-medium text-foreground">Problem</h3>
                <p className="text-muted-foreground">{project.problem}</p>
              </div>
              <div>
                <h3 className="mb-1 font-medium text-foreground">What I Built</h3>
                <p className="text-muted-foreground">{project.solution}</p>
              </div>
              <div>
                <h3 className="mb-1 font-medium text-foreground">
                  Technical Approach
                </h3>
                <p className="text-muted-foreground">{project.approach}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-md bg-secondary px-2 py-1 font-mono text-xs text-secondary-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div>
              <h3 className="mb-2 text-sm font-medium text-foreground">
                Key Outcomes
              </h3>
              <ul className="space-y-1">
                {project.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
