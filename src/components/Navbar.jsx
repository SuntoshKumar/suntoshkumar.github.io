import { FaGithub } from "react-icons/fa";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" }
];

export default function Navbar({ activeSection }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="section-container mt-4">
        <div className="glass flex items-center justify-between rounded-2xl px-4 py-3 shadow-card">
          <a href="#hero" className="text-sm font-semibold tracking-wide text-slate-100">
            Sam Krish
          </a>
          <div className="hidden items-center gap-5 md:flex">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`text-sm transition-colors ${
                  activeSection === section.id ? "text-cyan-300" : "text-slate-300 hover:text-cyan-200"
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>
          <a
            href="https://github.com/SuntoshKumar"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-500/40 px-3 py-2 text-sm text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
