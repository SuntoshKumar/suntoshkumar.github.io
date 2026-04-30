import { lazy, Suspense, useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { ThemeProvider } from "./context/ThemeContext";

const About    = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills   = lazy(() => import("./components/Skills"));
const Blog     = lazy(() => import("./components/Blog"));
const Contact  = lazy(() => import("./components/Contact"));

const observerSections = ["hero", "about", "projects", "skills", "blog", "contact"];

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[100] h-0.5 origin-left bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500"
      style={{ scaleX: scrollYProgress }}
    />
  );
}



function SectionFallback() {
  return (
    <div className="flex items-center justify-center py-32">
      <div className="h-7 w-7 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const elements = observerSections
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { threshold: 0.3, rootMargin: "-10% 0px -35% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => { elements.forEach((el) => observer.unobserve(el)); observer.disconnect(); };
  }, []);

  return (
    <ThemeProvider>
      <ScrollProgress />

      <div className="gradient-bg min-h-screen text-slate-100">
        <Navbar activeSection={activeSection} />

        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Hero />
          <Suspense fallback={<SectionFallback />}>
            <About />
            <Projects />
            <Skills />
            <Blog />
            <Contact />
          </Suspense>
        </motion.main>

        <footer className="section-container border-t border-slate-800/60 py-10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400 to-emerald-400 text-xs font-bold text-slate-950">
                SK
              </span>
              <span className="text-sm font-medium text-slate-300">Sam Krish</span>
            </div>
            <p className="text-sm text-slate-500">© 2025 Sam Krish · Built with React & Tailwind</p>
            <a href="privacy/index.html" className="hover-underline text-sm text-slate-500 transition hover:text-cyan-300">
              Privacy Policy
            </a>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
