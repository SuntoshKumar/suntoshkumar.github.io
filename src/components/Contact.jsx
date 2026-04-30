import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaCheckCircle } from "react-icons/fa";

const socials = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "suntosemyanmar@gmail.com",
    href: "mailto:suntosemyanmar@gmail.com",
    color: "hover:text-cyan-300",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/SuntoshKumar",
    href: "https://github.com/SuntoshKumar",
    color: "hover:text-slate-200",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "LinkedIn Profile",
    href: "https://www.linkedin.com",
    color: "hover:text-blue-400",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
    if (form.message.trim().length < 10) e.message = "Message too short";
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <motion.div
          className="glass overflow-hidden rounded-3xl"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          {/* Top accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500" />

          <div className="grid gap-10 p-8 sm:p-10 md:grid-cols-2">
            {/* Left — info */}
            <div>
              <span className="accent-line" />
              <h2 className="section-title mt-3">Get In Touch</h2>
              <p className="section-subtitle">
                Open to Android engineering roles, freelance opportunities, and
                AI-first product collaborations.
              </p>

              <div className="mt-8 space-y-5">
                {socials.map(({ icon: Icon, label, value, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className={`flex items-center gap-4 text-slate-300 transition ${color}`}
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-slate-700/60 bg-slate-900/60">
                      <Icon />
                    </span>
                    <div>
                      <p className="text-xs text-slate-500">{label}</p>
                      <p className="text-sm font-medium">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div>
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col items-center justify-center gap-4 text-center"
                >
                  <FaCheckCircle className="text-5xl text-emerald-400" />
                  <h3 className="text-xl font-semibold text-white">Message Sent!</h3>
                  <p className="text-sm text-slate-400">
                    Thanks for reaching out — I'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-2 rounded-xl border border-slate-600/40 px-5 py-2.5 text-sm text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-200"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                  {[
                    { id: "name", type: "text", placeholder: "Your name", key: "name" },
                    { id: "email", type: "email", placeholder: "Your email", key: "email" },
                  ].map(({ id, type, placeholder, key }) => (
                    <div key={id}>
                      <input
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        value={form[key]}
                        onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                        className={`w-full rounded-xl border bg-slate-900/70 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 transition ${
                          errors[key]
                            ? "border-rose-400/60"
                            : "border-slate-700/50 focus:border-cyan-400/60"
                        }`}
                      />
                      {errors[key] && (
                        <p className="mt-1 text-xs text-rose-400">{errors[key]}</p>
                      )}
                    </div>
                  ))}
                  <div>
                    <textarea
                      id="message"
                      rows="5"
                      placeholder="Your message…"
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      className={`w-full resize-none rounded-xl border bg-slate-900/70 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 transition ${
                        errors.message
                          ? "border-rose-400/60"
                          : "border-slate-700/50 focus:border-cyan-400/60"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-400">{errors.message}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 py-3 font-semibold text-slate-950 transition hover:opacity-90 hover:shadow-lg hover:shadow-cyan-400/20"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
