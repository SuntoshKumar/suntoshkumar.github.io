import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaAndroid, FaMicrochip, FaPalette } from "react-icons/fa";

const highlights = [
  {
    icon: FaAndroid,
    title: "Android Development",
    color: "from-emerald-400 to-cyan-400",
    detail: "Building scalable Android products with clean architecture, maintainable patterns, and strong release quality.",
  },
  {
    icon: FaPalette,
    title: "Kotlin & Compose",
    color: "from-cyan-400 to-blue-400",
    detail: "Crafting modern, fluid UIs using Jetpack Compose with clear state flow and reusable component systems.",
  },
  {
    icon: FaMicrochip,
    title: "AI / Voice Apps",
    color: "from-violet-400 to-cyan-400",
    detail: "Integrating speech and intelligent workflows into mobile apps for real-world automation and accessibility.",
  },
];

const stats = [
  { value: 5,    suffix: "+",  label: "Years Experience" },
  { value: 10,   suffix: "+",  label: "Apps Shipped"     },
  { value: 50,   suffix: "K+", label: "Downloads"        },
  { value: 100,  suffix: "%",  label: "Kotlin"           },
];

/** Counts from 0 → target when element enters viewport */
function AnimatedCounter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref   = useRef(null);
  const fired = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          const duration = 1000;
          const step = value / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + step, value);
            setCount(Math.floor(current));
            if (current >= value) clearInterval(timer);
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="accent-line" />
          <h2 className="section-title mt-3">About Me</h2>
          <p className="section-subtitle">
            I'm an Android developer focused on building modern, clean, and user-friendly
            apps with Kotlin and Jetpack Compose — turning ideas into fast, scalable products.
          </p>
        </motion.div>

        {/* Animated stats */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-5 text-center"
            >
              <p className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-2xl font-bold text-transparent">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-xs text-slate-400">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.22 } }}
                className="glass glass-hover rounded-2xl p-6 cursor-default"
              >
                <motion.div
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-slate-950`}
                  whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.4 } }}
                >
                  <Icon className="text-lg" />
                </motion.div>
                <h3 className="mt-4 text-lg font-semibold text-slate-100">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.detail}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
