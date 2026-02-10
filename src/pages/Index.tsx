import { Link } from "react-router-dom";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
const Index = () => {
  return <div className="space-y-16">
      {/* Hero */}
      <section className="space-y-6 pt-8">
        <p className="font-mono text-sm text-primary">Hi, I'm</p>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Sebastien</h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          New grad software engineer passionate about building intelligent systems 
          that solve real-world problems. I combine strong engineering fundamentals 
          with clear communication to ship impactful products.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild>
            <Link to="/projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/resume">
              <Download className="mr-2 h-4 w-4" /> Resume
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/contact">
              <Mail className="mr-2 h-4 w-4" /> Get in Touch
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <Link to="/projects" className="text-sm text-primary hover:underline">
            View all →
          </Link>
        </div>
        <div className="space-y-4">
          {[{
          title: "OmniCast",
          tag: "AI / Conversational",
          description: "AI-powered conversational platform enabling natural multi-turn dialogue with context-aware responses and intelligent routing."
        }, {
          title: "GraphRAG for Clinical Guidelines",
          tag: "AI / Healthcare",
          description: "Retrieval-augmented generation system leveraging graph-based context to surface accurate, evidence-backed clinical recommendations."
        }, {
          title: "Stock Market Email Newsletter",
          tag: "Automation / Finance",
          description: "Automated market summary and insights system delivering curated financial analysis directly to subscribers' inboxes."
        }].map(project => <Link key={project.title} to="/projects" className="group block rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/30">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
                      {project.tag}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </Link>)}
        </div>
      </section>

      {/* Quick About */}
      <section className="space-y-4 rounded-lg bg-muted/50 p-8">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="leading-relaxed text-muted-foreground">
          I'm a recent graduate with hands-on experience building production systems 
          across AI/ML, full-stack development, and data engineering. I thrive at the 
          intersection of technical depth and clear communication — whether that means 
          architecting a scalable backend or explaining system tradeoffs to 
          non-technical stakeholders.
        </p>
        <p className="leading-relaxed text-muted-foreground">
          I'm looking for a new grad engineering role where I can contribute to 
          ambitious problems, grow alongside strong engineers, and ship work that 
          matters.
        </p>
      </section>
    </div>;
};
export default Index;