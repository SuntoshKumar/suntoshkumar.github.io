import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaExternalLinkAlt, FaGithub, FaGooglePlay } from "react-icons/fa";
import { projectCategories, projects } from "../data/projects";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Selected products and experiments in Android, AI, and utility-focused software.</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                activeCategory === category
                  ? "border-cyan-300 bg-cyan-300/20 text-cyan-100"
                  : "border-slate-500/40 text-slate-300 hover:border-cyan-300/50 hover:text-cyan-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass group rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <FaCode className="text-cyan-300" />
                  {project.category}
                </span>
                <span>{project.owner}</span>
              </div>

              <h3 className="mt-4 text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={`${project.id}-${tag}`}
                    className="rounded-full border border-slate-600/60 bg-slate-900/70 px-3 py-1 text-xs text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-slate-100 transition group-hover:text-cyan-200"
                >
                  <FaGithub />
                  GitHub
                </a>
                <a
                  href={project.playStore}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-slate-200/90 transition hover:text-emerald-200"
                >
                  <FaGooglePlay />
                  Play Store
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-400">
                  <FaExternalLinkAlt />
                  Details
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
