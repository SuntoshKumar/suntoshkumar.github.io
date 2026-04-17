import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <motion.div
          className="glass rounded-3xl p-8 sm:p-10"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Open to Android engineering roles, freelance opportunities, and product collaborations with an AI-first direction.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-slate-600/50 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-xl border border-slate-600/50 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300"
              />
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full rounded-xl border border-slate-600/50 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300"
              />
              <button
                type="submit"
                className="rounded-xl bg-cyan-400 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-300"
              >
                Send Message
              </button>
            </form>

            <div className="space-y-4">
              <a
                href="mailto:suntosemyanmar@gmail.com"
                className="inline-flex items-center gap-3 text-slate-100 transition hover:text-cyan-200"
              >
                <FaEnvelope className="text-cyan-300" />
                suntosemyanmar@gmail.com
              </a>
              <a
                href="https://github.com/SuntoshKumar"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-slate-100 transition hover:text-cyan-200"
              >
                <FaGithub className="text-cyan-300" />
                github.com/SuntoshKumar
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-slate-100 transition hover:text-cyan-200"
              >
                <FaLinkedin className="text-cyan-300" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
