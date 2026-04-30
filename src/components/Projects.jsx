import { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaGithub, FaGooglePlay, FaExternalLinkAlt } from "react-icons/fa";
import { projectCategories, projects } from "../data/projects";

/** 3-D tilt card */
function TiltCard({ children, className }) {
  const ref  = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x    = useSpring(rawX, { stiffness: 200, damping: 22 });
  const y    = useSpring(rawY, { stiffness: 200, damping: 22 });
  const rotateY = useTransform(x, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(y, [-0.5, 0.5], [ 7,-7]);

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - r.left) / r.width  - 0.5);
    rawY.set((e.clientY - r.top)  / r.height - 0.5);
  };
  const onLeave = () => { rawX.set(0); rawY.set(0); };

  return (
    <motion.article
      ref={ref}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
    >
      {children}
    </motion.article>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="accent-line" />
          <h2 className="section-title mt-3">Projects</h2>
          <p className="section-subtitle">
            Selected products and experiments in Android, AI, and utility-focused software.
          </p>
        </motion.div>

        {/* Filter pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {projectCategories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                activeCategory === cat
                  ? "border-cyan-300 bg-cyan-300/15 text-cyan-100"
                  : "border-slate-600/50 text-slate-400 hover:border-cyan-400/40 hover:text-slate-200"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Cards */}
        <motion.div layout className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{    opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
              >
                <TiltCard className="glass group flex h-full flex-col rounded-2xl p-6 transition-shadow hover:shadow-glow">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-slate-600/40 bg-slate-900/50 px-3 py-1 text-xs text-slate-300">
                      {project.category}
                    </span>
                    <span className="text-xs text-slate-500">{project.owner}</span>
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-white transition group-hover:text-cyan-200">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span key={`${project.id}-${tag}`} className="tag">{tag}</span>
                    ))}
                  </div>

                  <div className="my-4 h-px bg-slate-700/50" />

                  {/* Links */}
                  <div className="flex items-center gap-5 text-sm">
                    <a href={project.github} target="_blank" rel="noreferrer"
                      className="hover-underline inline-flex items-center gap-1.5 text-slate-400 transition hover:text-cyan-300">
                      <FaGithub /> Code
                    </a>
                    {project.playStore && (
                      <a href={project.playStore} target="_blank" rel="noreferrer"
                        className="hover-underline inline-flex items-center gap-1.5 text-slate-400 transition hover:text-emerald-300">
                        <FaGooglePlay /> Play Store
                      </a>
                    )}
                    <motion.a
                      href={project.github} target="_blank" rel="noreferrer"
                      whileHover={{ x: 2, y: -2 }}
                      className="ml-auto text-slate-500 transition hover:text-slate-200"
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
