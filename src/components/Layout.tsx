import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Experience", path: "/experience" },
  { label: "Skills", path: "/skills" },
  { label: "Resume", path: "/resume" },
  { label: "Contact", path: "/contact" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-mono text-sm font-medium text-foreground hover:text-primary transition-colors">
            portfolio
          </Link>
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "rounded-md px-3 py-1.5 text-sm transition-colors",
                    pathname === item.path
                      ? "bg-secondary text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="mx-auto max-w-4xl px-6 py-12">{children}</main>
      <footer className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} · Built with purpose.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
