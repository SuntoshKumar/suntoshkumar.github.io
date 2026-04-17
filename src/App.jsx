import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Blog = lazy(() => import("./components/Blog"));
const Contact = lazy(() => import("./components/Contact"));

const observerSections = ["hero", "about", "projects", "skills", "blog", "contact"];

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sectionElements = observerSections
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      {
        threshold: 0.35,
        rootMargin: "-10% 0px -35% 0px"
      }
    );

    sectionElements.forEach((element) => observer.observe(element));

    return () => {
      sectionElements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="gradient-bg animate-gradient-slow min-h-screen text-slate-100">
      <Navbar activeSection={activeSection} />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Hero />
        <Suspense fallback={<div className="section-container py-10 text-slate-400">Loading sections...</div>}>
          <About />
          <Projects />
          <Skills />
          <Blog />
          <Contact />
        </Suspense>
      </motion.main>

      <footer className="section-container pb-10 text-center text-sm text-slate-400">© 2026 Sam Krish. Crafted with React and Tailwind.</footer>
    </div>
  );
}
