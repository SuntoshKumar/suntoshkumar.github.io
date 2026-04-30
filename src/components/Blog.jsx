import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes, FaCalendar, FaClock } from "react-icons/fa";
import { blogPosts } from "../data/blog";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section id="blog" className="py-24">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="accent-line" />
          <h2 className="section-title mt-3">Blog</h2>
          <p className="section-subtitle">
            Short notes on Android architecture, Compose patterns, and product
            engineering decisions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              className="glass glass-hover group flex cursor-pointer flex-col rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setSelectedPost(post)}
            >
              {/* Meta */}
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <FaCalendar className="text-cyan-400/60" />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <FaClock className="text-cyan-400/60" />
                  {post.readTime}
                </span>
              </div>

              <h3 className="mt-3 text-lg font-semibold text-slate-100 transition group-hover:text-cyan-200">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags?.map((tag) => (
                  <span key={tag} className="tag text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              <span className="mt-5 text-sm font-medium text-cyan-400 transition group-hover:text-cyan-300">
                Read post →
              </span>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="fixed inset-0 z-[60] grid place-items-center bg-slate-950/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              className="glass w-full max-w-lg rounded-3xl p-7"
              initial={{ scale: 0.94, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 16, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex gap-3 text-xs text-slate-500">
                    <span>{selectedPost.date}</span>
                    <span>·</span>
                    <span>{selectedPost.readTime}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-white">
                    {selectedPost.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedPost(null)}
                  className="flex-shrink-0 rounded-xl border border-slate-600/40 p-2 text-slate-400 transition hover:border-slate-400 hover:text-white"
                  aria-label="Close"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="mt-1 h-px bg-slate-700/50" />
              <p className="mt-4 leading-relaxed text-slate-300">
                {selectedPost.content}
              </p>
              {selectedPost.tags && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {selectedPost.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
