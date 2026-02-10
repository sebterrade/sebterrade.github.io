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

      <section className="rounded-lg border border-border bg-muted/30 p-8 text-center">
        <div className="space-y-3">
          <p className="text-lg font-medium text-foreground">Resume Preview</p>
          <p className="text-sm text-muted-foreground">
            Upload your resume as <code className="font-mono text-xs bg-secondary px-1.5 py-0.5 rounded">public/resume.pdf</code> to 
            enable the download and preview features.
          </p>
          <p className="text-sm text-muted-foreground">
            Once uploaded, your resume will be available for download and can be 
            embedded directly on this page.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
