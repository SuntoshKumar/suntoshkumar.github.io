import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { blogPosts } from "../data/blog";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section id="blog" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Blog</h2>
        <p className="section-subtitle">Short notes on Android architecture, Compose patterns, and product engineering decisions.</p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              className="glass rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
            >
              <h3 className="text-xl font-semibold text-slate-100">{post.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{post.excerpt}</p>
              <button
                type="button"
                onClick={() => setSelectedPost(post)}
                className="mt-5 rounded-lg border border-cyan-300/40 px-3 py-2 text-sm text-cyan-100 transition hover:bg-cyan-300/10"
              >
                Read Post
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="fixed inset-0 z-[60] grid place-items-center bg-slate-950/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="glass w-full max-w-lg rounded-2xl p-6"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">{selectedPost.title}</h3>
                <button
                  type="button"
                  onClick={() => setSelectedPost(null)}
                  className="rounded-md border border-slate-500/40 p-2 text-slate-200 hover:text-white"
                  aria-label="Close modal"
                >
                  <FaTimes />
                </button>
              </div>
              <p className="mt-4 text-slate-300">{selectedPost.content}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
