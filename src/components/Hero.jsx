import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { FaGithub, FaArrowDown } from "react-icons/fa";

const roles = [
  "Android Engineer",
  "Kotlin Developer",
  "Jetpack Compose Expert",
  "AI App Builder",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.25 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};

/** Magnetic button — nudges toward cursor on hover */
function MagneticBtn({ href, children, className, target, rel }) {
  const ref    = useRef(null);
  const rawX   = useMotionValue(0);
  const rawY   = useMotionValue(0);
  const x      = useSpring(rawX, { stiffness: 260, damping: 22 });
  const y      = useSpring(rawY, { stiffness: 260, damping: 22 });

  const onMove = (e) => {
    const r  = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - r.left - r.width  / 2) * 0.28);
    rawY.set((e.clientY - r.top  - r.height / 2) * 0.28);
  };
  const onLeave = () => { rawX.set(0); rawY.set(0); };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      style={{ x, y }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
    >
      {children}
    </motion.a>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const translateY  = useTransform(scrollY, [0, 600], [0, 90]);
  const opacity     = useTransform(scrollY, [0, 380], [1, 0]);

  const [roleIdx,  setRoleIdx]  = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting,  setDeleting]  = useState(false);

  useEffect(() => {
    const target = roles[roleIdx];
    let t;
    if (!deleting && displayed.length < target.length)
      t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 58);
    else if (!deleting && displayed.length === target.length)
      t = setTimeout(() => setDeleting(true), 2200);
    else if (deleting && displayed.length > 0)
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 34);
    else { setDeleting(false); setRoleIdx((i) => (i + 1) % roles.length); }
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIdx]);

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* Ambient orbs */}
      <motion.div style={{ y: translateY }}
        className="pointer-events-none absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-cyan-500/12 blur-3xl" />
      <motion.div style={{ y: translateY }}
        className="pointer-events-none absolute -right-28 top-28 h-[32rem] w-[32rem] rounded-full bg-indigo-500/12 blur-3xl" />
      <div className="pointer-events-none absolute bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-400/8 blur-3xl" />

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg,rgba(148,163,184,1) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        className="section-container relative z-10"
        style={{ opacity }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Availability badge */}
        <motion.div variants={fadeUp}>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/8 px-4 py-1.5 text-sm text-cyan-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Available for new opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="mt-6 text-5xl font-bold leading-tight tracking-tight text-white glow-text sm:text-7xl"
        >
          Sam Krish
        </motion.h1>

        {/* Typewriter */}
        <motion.div variants={fadeUp} className="mt-3 flex items-center gap-2 text-xl text-cyan-100 sm:text-2xl">
          <span>{displayed}</span>
          <span className="h-6 w-[2px] animate-pulse rounded-full bg-cyan-400" />
        </motion.div>

        {/* Bio */}
        <motion.p variants={fadeUp} className="mt-6 max-w-xl leading-relaxed text-slate-300">
          I design and ship high-performance Android experiences — blending elegant
          Compose UI with clean architecture and practical AI integrations.
        </motion.p>

        {/* CTAs — magnetic buttons */}
        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
          <MagneticBtn
            href="#projects"
            className="btn-ripple group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-3 font-semibold text-slate-950 shadow-lg transition hover:shadow-cyan-400/30"
          >
            View Projects
          </MagneticBtn>

          <MagneticBtn
            href="#contact"
            className="rounded-xl border border-slate-500/40 px-6 py-3 text-slate-100 transition hover:border-cyan-300/60 hover:bg-white/5 hover:text-cyan-200"
          >
            Contact Me
          </MagneticBtn>

          <MagneticBtn
            href="https://github.com/SuntoshKumar"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-500/40 px-6 py-3 text-slate-100 transition hover:border-cyan-300/60 hover:bg-white/5 hover:text-cyan-200"
          >
            <FaGithub /> GitHub
          </MagneticBtn>
        </motion.div>

        {/* Scroll cue */}
        <motion.div variants={fadeUp} className="mt-16 flex items-center gap-3 text-sm text-slate-500">
          <span className="accent-line" />
          <span>Scroll to explore</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <FaArrowDown className="text-slate-400" />
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
}
