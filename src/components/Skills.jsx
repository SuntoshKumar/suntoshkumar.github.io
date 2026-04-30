import { motion } from "framer-motion";
import {
  FaAndroid, FaFire, FaGitAlt, FaCode, FaMicrochip,
} from "react-icons/fa";
import { SiKotlin, SiJetpackcompose, SiGradle, SiSqlite } from "react-icons/si";

const skillGroups = [
  {
    category: "Android",
    icon: FaAndroid,
    color: "text-emerald-400",
    skills: [
      { name: "Kotlin", level: 92, icon: SiKotlin },
      { name: "Jetpack Compose", level: 90, icon: SiJetpackcompose },
      { name: "Room / SQLite", level: 82, icon: SiSqlite },
      { name: "MVVM / Clean Arch", level: 88, icon: FaCode },
    ],
  },
  {
    category: "Backend & Cloud",
    icon: FaFire,
    color: "text-orange-400",
    skills: [
      { name: "Firebase", level: 80, icon: FaFire },
      { name: "REST APIs", level: 84, icon: FaCode },
    ],
  },
  {
    category: "Tools",
    icon: FaGitAlt,
    color: "text-cyan-400",
    skills: [
      { name: "Git / GitHub", level: 86, icon: FaGitAlt },
      { name: "Gradle", level: 83, icon: SiGradle },
      { name: "Android Studio", level: 90, icon: FaAndroid },
    ],
  },
  {
    category: "AI & ML",
    icon: FaMicrochip,
    color: "text-violet-400",
    skills: [
      { name: "Speech Recognition", level: 78, icon: FaMicrochip },
      { name: "ML Kit / Basics", level: 70, icon: FaMicrochip },
    ],
  },
];

const extraTags = [
  "Coroutines", "Flow", "Hilt", "WorkManager", "DataStore",
  "Paging 3", "Navigation", "Lottie", "Material 3", "Accessibility",
];

const barColors = [
  "from-emerald-400 to-cyan-400",
  "from-orange-400 to-amber-400",
  "from-cyan-400 to-blue-400",
  "from-violet-400 to-pink-400",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="accent-line" />
          <h2 className="section-title mt-3">Skills</h2>
          <p className="section-subtitle">
            A practical stack optimised for polished Android products and AI-enhanced
            mobile experiences.
          </p>
        </motion.div>

        {/* Skill cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, groupIdx) => {
            const GroupIcon = group.icon;
            return (
              <motion.article
                key={group.category}
                className="glass rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: groupIdx * 0.08 }}
              >
                {/* Category header */}
                <div className="mb-5 flex items-center gap-3">
                  <GroupIcon className={`text-xl ${group.color}`} />
                  <h3 className="font-semibold text-slate-100">{group.category}</h3>
                </div>

                <div className="space-y-4">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div key={skill.name}>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="flex items-center gap-2 text-slate-200">
                            <SkillIcon className="text-xs opacity-60" />
                            {skill.name}
                          </span>
                          <span className="text-xs text-slate-500">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-slate-800/80">
                          <motion.div
                            className={`h-full rounded-full bg-gradient-to-r ${barColors[groupIdx]}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Extra tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8"
        >
          <p className="mb-4 text-sm font-medium text-slate-400">Also familiar with</p>
          <div className="flex flex-wrap gap-2">
            {extraTags.map((tag) => (
              <span key={tag} className="tag transition hover:border-cyan-400/40 hover:text-cyan-200">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
