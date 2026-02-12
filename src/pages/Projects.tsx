import { useState } from "react";
import { ExternalLink, X } from "lucide-react";

interface Project {
  title: string;
  tag: string;
  problem: string;
  solution: string;
  approach: string[];
  tools: string[];
  outcomes: string[];
  flagship?: boolean;
  images?: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "OmniCast",
    tag: "AI / Conversational",
    problem:
      "Most knowledge today exists in static formats like documents, lecture slides or company polices. The learning you obtain from text is limited and one dimensional. There exists modern AI tools, like NotebookLM, that can generate podcasts that summarize information in these texts, however they are still limited. They do not allow users to tailor their conversation to their needs, support real-time conversation or natural interruption. This leads to an overall subpar learning experience.",
    solution:
      "OmniCast is a conversational knowledge platform that transforms questions and supporting documents into live, podcast-style conversations hosted by AI mentors. Users can interrupt at any time, ask follow-up questions, and guide the discussion in real time. The system maintains persistent context after interruptions and allows users to customize the podcast hosts with different expertise (ex: student and teacher), tone, and speaking styles. This creates a more natural conversation where you can fully immerse yourself in a discussion.",
    approach: [
      "Implemented retrieval-augmented generation (RAG) for source documents using Backboard's memory API",
      "Built an AI agent capable of simulating multi-host podcast conversations between mentors and users",
      "Integrated text-to-speech using the ElevenLabs API to enable streaming audio and user interruptibility",
    ],
    tools: ["React", "TypeScript", "RAG", "Prompt Engineering", "ElevenLabs API", "Backboard.io API"],
    outcomes: [
      "Won 1st place in the main track of KingHacks Hackathon with cash prize",
    ],
    flagship: true,
    images: ["/Landing_Page.png", "/Group_Pic.jpeg", "/Room_Pic.jpeg"],
    link: "https://www.linkedin.com/posts/sebastien-terrade_excited-to-share-that-our-team-won-1st-place-activity-7422307509916405760-oHC7?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkTmjgBevusdwFNdGak4d0lFpNeDbKmDro",
  },
  {
    title: "GraphRAG for Clinical Guidelines",
    tag: "AI / Healthcare",
    problem:
      "Traditional retrieval augmented generation systems struggle to provide accurate responses in the medical domain. Vector similarity search fails to capture the global theme, relationships, and patterns within clinical text. This reduces retrieval precision and interpretability. In healthcare, close enough results are not acceptable because errors can have serious consequences.",
    solution:
      "This project aims to develop a Graph based Retrieval Augmented Generation API for clinical healthcare guidelines. The system ingests medical documents, builds a knowledge graph, and returns cited, context aware information to user queries through a secure API. The goal is to improve retrieval accuracy and interpretability compared to traditional vector based RAG systems.",
    approach: [
      "Built the full query endpoint that accepts user queries and selected search methods, performs graph traversal or retrieval, and returns structured, cited results",
      "Implemented metadata retention and citation tracking within the knowledge graph to ensure every result can be traced back to its original source document",
      "Evaluated system performance using benchmark datasets and LLM based evaluation, comparing our GraphRAG approach against a baseline vector RAG system",
    ],
    tools: ["Python", "REST API", "GraphRAG", "CI/CD", "LLM", "Prompt Engineering", "AWS"],
    outcomes: [
      "Project in progress, expected completion date Q2 2026",
    ],
    flagship: true,
  },
  {
    title: "Stock Market Email Newsletter",
    tag: "Automation / Finance",
    problem:
      "Investors and traders often rely on multiple platforms to track market performance, news, and stock prices. This leads to scattered information and manual research. Most tools provide raw data but do not combine market trends, personalized content, and predictive insights into a single daily update. As a result, users spend more time searching for information instead of making decisions.",
    solution:
      "This project aims to develop a daily personalized stock market email platform. The system combines real time financial data, market news, and user selected content into a single automated email. Each email includes a general market overview and user specific insights such as daily stock prices and model based predictions. The goal is to provide clear, customized financial insights and help users make more informed investment decisions.",
    approach: [
      "Built a backend system that automates daily email delivery using cron scheduling and smtplib",
      "Integrated multiple data sources including the Tiingo API for stock prices, web scraping from financial websites, and the YouTube API for user selected finance channels",
      "Developed a stacked LSTM model to forecast stock prices using time series aware training and testing splits",
      "Designed the data pipeline to clean historical data, reduce noise, and generate daily technical investment signals",
    ],
    tools: ["Python", "Tiingo API", "Web Scraping", "YouTube API", "LSTM", "Machine Learning", "Cron"],
    outcomes: [
      "Automated daily email delivery with general and personalized financial insights",
      "Planned: Migrate local database on cloud hosting with AWS and build a user signup page"
    ],
    flagship: true,
    images: ["/NVDA card.png", "/Summary Card.png"],
  },
  {
    title: "IV Catheter Training Device",
    tag: "Embedded Systems / Healthcare",
    problem:
      "Medical trainees have limited access to realistic, hands-on IV insertion practice. Existing training tools are often expensive and lack real-time feedback, making it difficult for trainees to develop proper technique and confidence before working with real patients.",
    solution:
      "Developed a portable and cost-effective IV catheter training device that provides real-time feedback on insertion accuracy, anesthetic dosage, and patient vitals. The system guides trainees through the full IV administration process with live sensor data and performance alerts.",
    approach: [
      "Integrated embedded sensors to detect vein insertion accuracy, monitor anesthesia dosage, and measure heart rate using Arduino",
      "Built a multi-page MATLAB GUI that guides trainees through patient intake, dosage calculation, and live simulation monitoring",
      "Implemented an anesthetic dosage calculator based on patient weight and drug type",
      "Designed real-time alert systems for pressure detection, anesthetic release, and heart rate threshold warnings",
    ],
    tools: ["MATLAB", "Arduino", "Embedded Systems", "Sensors", "GUI Design"],
    outcomes: [
      "Won 3rd place at Queen's University Next Generation of Medical Simulation Hackathon with $1500 prize",
      "Successfully developed a working prototype with accurate IV insertion tracking and real-time feedback",
      "Recognized by sponsors including Meta, Ingenuity Labs, Up360, and Experience Ventures",
    ],
    flagship: true,
    images: ["/iv_prototype.png", "/iv_gui.png", "/iv_team.png"],
  },
];

const Projects = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-muted-foreground">
          Here is a collection of software/engineering projects I have worked on. These include group competitions, hackathons and personal projects.
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
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-1 shrink-0 text-muted-foreground transition-colors hover:text-primary">
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : (
                <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" />
              )}
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
                <h3 className="mb-2 font-medium text-foreground">
                  Technical Approach
                </h3>
                <ul className="space-y-1">
                  {project.approach.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
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

            {project.images && project.images.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {project.images.map((src) => (
                  <button
                    key={src}
                    onClick={() => setLightboxImage(src)}
                    className="overflow-hidden rounded-md border border-border transition-all hover:border-primary/40 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <img
                      src={src}
                      alt={project.title}
                      className="h-24 w-auto object-cover sm:h-32"
                    />
                  </button>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Lightbox overlay */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 focus:outline-none"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={lightboxImage}
            alt="Enlarged view"
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Projects;
