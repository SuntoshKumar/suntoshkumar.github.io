import { motion } from "framer-motion";
import { FaAndroid, FaMicrochip, FaPalette } from "react-icons/fa";

const highlights = [
  {
    icon: FaAndroid,
    title: "Android Development",
    detail: "Building scalable Android products with clean architecture, maintainable patterns, and strong release quality."
  },
  {
    icon: FaPalette,
    title: "Kotlin & Compose",
    detail: "Crafting modern, fluid UI using Jetpack Compose with clear state flow and reusable component systems."
  },
  {
    icon: FaMicrochip,
    title: "AI / Voice Apps",
    detail: "Integrating speech and intelligent workflows into mobile apps for real-world automation and accessibility."
  }
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          About
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I am an Android developer with a strong focus on building modern, clean, and user-friendly mobile applications using Kotlin and
          Jetpack Compose. I enjoy turning ideas into real products that are simple, fast, and scalable.
        </motion.p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                className="glass rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-glow"
              >
                <Icon className="text-2xl text-cyan-300" />
                <h3 className="mt-4 text-xl font-semibold text-slate-100">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{item.detail}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
