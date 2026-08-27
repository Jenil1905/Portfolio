'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function FramerExperience() {
  return (
    <section id="experience" className="py-32 px-6 bg-[#050505] relative isolate border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-12">
          <div>
            <span className="font-mono text-xs text-purple-400 uppercase tracking-widest bg-purple-950/40 px-4 py-1.5 rounded-full border border-purple-500/30 inline-block mb-4">
              03 // Experience &amp; Achievements
            </span>
            <h2 className="font-display font-light text-4xl sm:text-6xl text-white tracking-tight">
              Open Source &amp; Education
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-400 max-w-xs uppercase tracking-widest">
            Hacktoberfest contributor, hackathons &amp; dual CS degree programs.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT: Hacktoberfest Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6 glow-card"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div>
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
                  Oct 2024, Oct 2025 // Open Source
                </span>
                <h3 className="font-display font-normal text-2xl sm:text-3xl text-white mt-1">
                  Open Source Contributor — Hacktoberfest
                </h3>
              </div>
              <span className="bg-emerald-500/20 text-emerald-300 font-mono text-xs px-3 py-1.5 rounded-full border border-emerald-500/30">
                7+ Merged PRs
              </span>
            </div>

            <div className="space-y-4 font-sans text-sm text-slate-300">
              <div className="p-4 bg-black/50 rounded-xl border border-white/5 space-y-1">
                <div className="font-mono text-xs text-white font-semibold">Community Repositories</div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Shipped 7 merged pull requests across community-owned repositories over two consecutive Hacktoberfest cycles.
                </p>
              </div>

              <div className="p-4 bg-black/50 rounded-xl border border-white/5 space-y-1">
                <div className="font-mono text-xs text-white font-semibold">React.js Codebase Improvements</div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Fixed bugs and delivered feature improvements in React-based codebases owned by external maintainers.
                </p>
              </div>

              <div className="p-4 bg-black/50 rounded-xl border border-white/5 space-y-1">
                <div className="font-mono text-xs text-white font-semibold">Standard Git Workflows</div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Followed standard fork / feature-branch / pull-request workflows with active code reviews.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Hackathon & GitHub Badges */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4 glow-card"
            >
              <span className="font-mono text-xs text-purple-400 uppercase tracking-widest">
                Hackathon Recognition
              </span>
              <h4 className="font-display font-light text-2xl text-white">
                4th Place (Speed Run 1.0)
              </h4>
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                Placed 4th with special mention at Speed Run 1.0, a timed hackathon, competing against multiple teams under a fixed problem-solving window.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4 glow-card"
            >
              <span className="font-mono text-xs text-pink-400 uppercase tracking-widest">
                GitHub Recognition
              </span>
              <h4 className="font-display font-light text-2xl text-white">
                Pull Shark Badge (x2)
              </h4>
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                Earned GitHub&apos;s Pull Shark badge twice for sustained, merged pull requests across open-source repositories.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Education Section */}
        <div id="education" className="space-y-8 pt-12 border-t border-white/10">
          <div className="flex justify-between items-center">
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
              Academic Degrees
            </span>
            <span className="font-mono text-xs text-slate-500">BANGALORE, INDIA</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4 hover:border-cyan-500/40 transition-colors"
            >
              <div className="flex justify-between font-mono text-xs text-slate-400">
                <span>Aug 2024 – 2028</span>
                <span className="text-cyan-400">CGPA: 7.8</span>
              </div>
              <h4 className="font-display font-normal text-2xl text-white">
                Scaler School of Technology, Bangalore
              </h4>
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                Undergraduate Program in Computer Science and Software Engineering.
              </p>
              <div className="pt-2">
                <a
                  href="https://www.scaler.com/school-of-technology/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-cyan-400 hover:underline"
                >
                  Scaler School of Tech ↗
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4 hover:border-purple-500/40 transition-colors"
            >
              <div className="flex justify-between font-mono text-xs text-slate-400">
                <span>Aug 2024 – 2027</span>
                <span className="text-purple-400">CGPA: 7.71</span>
              </div>
              <h4 className="font-display font-normal text-2xl text-white">
                BITS Pilani, Bangalore
              </h4>
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                Bachelor of Science (B.Sc.) in Computer Science.
              </p>
              <div className="pt-2">
                <a
                  href="https://www.bits-pilani.ac.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-purple-400 hover:underline"
                >
                  BITS Pilani ↗
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
