import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/yourusername",
    href: "https://github.com/yourusername",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourusername",
    href: "https://linkedin.com/in/yourusername",
    icon: Linkedin,
  },
];

const Contact = () => {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Get in Touch</h1>
        <p className="max-w-xl text-muted-foreground">
          I'm actively looking for new grad engineering roles. If you'd like to 
          chat about opportunities, collaborations, or just want to say hello — 
          I'd love to hear from you.
        </p>
      </section>

      <div className="space-y-3">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/30"
          >
            <div className="flex items-center gap-4">
              <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <div>
                <p className="text-sm font-medium text-foreground">{link.label}</p>
                <p className="font-mono text-xs text-muted-foreground">
                  {link.value}
                </p>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        ))}
      </div>

      <section className="rounded-lg bg-muted/50 p-8 space-y-4">
        <p className="text-lg font-medium text-foreground text-center">Open to Opportunities</p>
        <p className="text-sm text-muted-foreground max-w-md mx-auto text-center">
          I'm particularly interested in roles involving AI/ML engineering, 
          full-stack development, or systems engineering at companies solving 
          meaningful problems.
        </p>
        <div className="flex justify-center gap-3 pt-2">
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Mail className="h-4 w-4" /> Email Me
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/30"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
