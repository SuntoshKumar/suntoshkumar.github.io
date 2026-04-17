import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Android",
    skills: [
      { name: "Kotlin", level: 92 },
      { name: "Jetpack Compose", level: 90 },
      { name: "Room", level: 82 },
      { name: "MVVM", level: 88 }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Firebase", level: 80 },
      { name: "REST APIs", level: 84 }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: 86 },
      { name: "Gradle", level: 83 },
      { name: "Android Studio", level: 90 }
    ]
  },
  {
    category: "AI",
    skills: [
      { name: "Speech Recognition", level: 78 },
      { name: "ML Basics", level: 70 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">A practical stack optimized for polished Android products and AI-enhanced mobile experiences.</p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, groupIdx) => (
            <motion.article
              key={group.category}
              className="glass rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: groupIdx * 0.07 }}
            >
              <h3 className="text-xl font-semibold text-cyan-200">{group.category}</h3>
              <div className="mt-4 space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-slate-200">{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
