import { useState } from "react";
import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "seb.terrade99@gmail.com",
    href: "mailto:seb.terrade99@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/sebterrade",
    href: "https://github.com/sebterrade",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sebastien-terrade",
    href: "https://www.linkedin.com/in/sebastien-terrade/",
    icon: Linkedin,
  },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Get in Touch</h1>
        <p className="max-w-xl text-muted-foreground">
          I'm actively looking for new grad engineering roles. If you'd like to
          chat about opportunities or collaborations, please don't hesitate to
          reach out.
        </p>
      </section>

      <div className="space-y-3">
        {contactLinks.map((link) => {
          if (link.label === "Email") {
            return (
              <div
                key={link.label}
                className="group flex items-center justify-between rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/30"
              >
                <a
                  href={link.href}
                  className="flex items-center gap-4 flex-1"
                >
                  <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{link.label}</p>
                    <p className="font-mono text-xs text-muted-foreground">
                      {link.value}
                    </p>
                  </div>
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(link.value);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="ml-2 rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                  title="Copy email"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            );
          }
          return (
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
          );
        })}
      </div>

    </div>
  );
};

export default Contact;
