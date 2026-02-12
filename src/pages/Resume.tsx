import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Resume</h1>
        <p className="text-muted-foreground">
          Download my resume or view it inline below.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Open in New Tab
            </a>
          </Button>
        </div>
      </section>

      <section className="overflow-hidden rounded-lg border border-border">
        <iframe
          src="/resume.pdf"
          title="Resume"
          className="h-[80vh] w-full"
        />
      </section>
    </div>
  );
};

export default Resume;
