import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function Hero() {
  const { scrollY } = useScroll();
  const translateY = useTransform(scrollY, [0, 600], [0, 80]);

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <motion.div
        style={{ y: translateY }}
        className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"
      />
      <div className="pointer-events-none absolute right-0 top-40 h-96 w-96 animate-floaty rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass mx-auto max-w-4xl rounded-3xl p-8 sm:p-12"
        >
          <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-200">
            Senior Android Engineer Portfolio
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
            Sam Krish
          </h1>
          <p className="mt-4 text-lg text-cyan-100 sm:text-xl">
            Android Developer | Kotlin | Jetpack Compose | AI Apps
          </p>
          <p className="mt-6 max-w-2xl text-slate-300">
            I design and build high-performance Android experiences that blend elegant UI with reliable engineering and practical AI features.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-cyan-400 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-300"
            >
              View Projects
            </a>
            <a
              href="https://github.com/SuntoshKumar"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-400/40 px-5 py-3 text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
