import { Link } from "react-router-dom";
import { ArrowRight, Download, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
const Index = () => {
  return <div className="space-y-16">
    {/* Hero */}
    <section className="space-y-6 pt-8">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="font-mono text-sm text-primary">Hi, I'm</p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Sebastien</h1>
        </div>
        <Avatar className="h-24 w-24 border-2 border-border">
          <AvatarImage src="/profile_pic.jpeg" alt="Sebastien" />
          <AvatarFallback className="text-2xl font-semibold">S</AvatarFallback>
        </Avatar>
      </div>
      <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Computer engineering student with hands-on experience building software
        through internships, design teams, and hackathons. Driven to create
        products with real impact while actively seeking new challenges to grow
        as an engineer.
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
        <Button variant="ghost" asChild>
          <a href="https://www.linkedin.com/in/sebastien-terrade/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
          </a>
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
      <ul className="space-y-2">
        <li className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          Computer engineering student with a strong technical foundation and work ethic
        </li>
        <li className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          Interest in building software and products that have a real impact
        </li>
        <li className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          Hands-on technical experience through internships, design teams, hackathons, and school/personal projects
        </li>
        <li className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          Proven ability to learn quickly and take ownership, supported by strong academic performance
        </li>
        <li className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          Leadership and project management experience
        </li>
        <li className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          Strong communication and teamwork skills, able to explain complex technical concepts clearly to technical and non-technical audiences
        </li>
        <li className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          Actively seek challenges outside of coursework to continue growing and improving as an engineer
        </li>
      </ul>
    </section>
  </div>;
};
export default Index;