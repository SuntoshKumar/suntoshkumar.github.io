import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const sections = [
  { id: "hero",     label: "Home"     },
  { id: "about",    label: "About"    },
  { id: "projects", label: "Projects" },
  { id: "skills",   label: "Skills"   },
  { id: "blog",     label: "Blog"     },
  { id: "contact",  label: "Contact"  },
];

const privacyPath = "/privacy/index.html";

export default function Navbar({ activeSection }) {
  const { theme, toggle } = useTheme();
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleNav = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="section-container mt-3">
          <motion.div
            className="glass flex items-center justify-between rounded-2xl px-4 py-3"
            animate={{
              boxShadow: scrolled
                ? "0 8px 32px rgba(0,0,0,0.45), 0 0 0 1px rgba(56,189,248,0.1)"
                : "0 4px 16px rgba(0,0,0,0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Logo */}
            <button onClick={() => handleNav("hero")} className="group flex items-center gap-2">
              <motion.span
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-400 text-xs font-bold text-slate-950"
              >
                SK
              </motion.span>
              <span className="text-sm font-semibold text-slate-100 transition group-hover:text-cyan-300">
                Sam Krish
              </span>
            </button>

            {/* Desktop links */}
            <div className="hidden items-center gap-1 md:flex">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleNav(s.id)}
                  className="relative px-3 py-1.5 text-sm transition-colors"
                >
                  <span className={activeSection === s.id ? "text-cyan-300" : "text-slate-300 hover:text-white"}>
                    {s.label}
                  </span>
                  {activeSection === s.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-cyan-300/10"
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  )}
                </button>
              ))}
              <a
                href={privacyPath}
                className="relative px-3 py-1.5 text-sm text-slate-300 transition-colors hover:text-white"
              >
                Privacy
              </a>
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-2">
              {/* Theme toggle */}
              <motion.button
                onClick={toggle}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
                className="rounded-lg border border-slate-600/40 p-2 text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-300"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0,   opacity: 1 }}
                    exit={{    rotate:  90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="block"
                  >
                    {theme === "dark" ? <FaSun /> : <FaMoon />}
                  </motion.span>
                </AnimatePresence>
              </motion.button>

              {/* GitHub */}
              <a
                href="https://github.com/SuntoshKumar"
                target="_blank"
                rel="noreferrer"
                className="hidden items-center gap-2 rounded-lg border border-slate-500/40 px-3 py-2 text-sm text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200 md:inline-flex"
              >
                <FaGithub /> GitHub
              </a>

              {/* Hamburger */}
              <button
                className="rounded-lg border border-slate-600/40 p-2 text-slate-300 transition hover:border-cyan-300/50 hover:text-white md:hidden"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </motion.div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-slate-950/96 px-6 pt-24 pb-10 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{    opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
          >
            <div className="flex flex-col gap-1">
              {sections.map((s, i) => (
                <motion.button
                  key={s.id}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNav(s.id)}
                  className={`rounded-xl px-4 py-3 text-left text-lg font-medium transition ${
                    activeSection === s.id
                      ? "bg-cyan-300/10 text-cyan-300"
                      : "text-slate-200 hover:bg-slate-800/60 hover:text-white"
                  }`}
                >
                  {s.label}
                </motion.button>
              ))}
              <a
                href={privacyPath}
                className="rounded-xl px-4 py-3 text-left text-lg font-medium text-slate-200 transition hover:bg-slate-800/60 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                Privacy
              </a>
            </div>
            <a
              href="https://github.com/SuntoshKumar"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-500/40 py-3 text-sm text-slate-100"
            >
              <FaGithub /> GitHub Profile
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
