'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skillMatrix = [
  {
    category: 'Languages',
    skills: ['Java', 'JavaScript', 'SQL', 'TypeScript'],
  },
  {
    category: 'Backend Architecture',
    skills: ['Spring Boot', 'Node.js', 'REST APIs', 'MVC Architecture'],
  },
  {
    category: 'Frontend & UI',
    skills: ['React.js (Hooks)', 'Next.js 15', 'HTML/CSS', 'DOM Manipulation', 'Tailwind CSS'],
  },
  {
    category: 'Systems & Data',
    skills: ['Redis (Consistent Hashing)', 'PostgreSQL (Cache-Aside)', 'Qdrant Vector DB', 'In-Memory Write Aggregation'],
  },
  {
    category: 'Tools & Cloud',
    skills: ['Git', 'GitHub', 'Docker', 'Render'],
  },
];

export default function FramerSkills() {
  return (
    <section id="skills" className="py-32 px-6 bg-[#050505] relative isolate border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-12">
          <div>
            <span className="font-mono text-xs text-pink-400 uppercase tracking-widest bg-pink-950/40 px-4 py-1.5 rounded-full border border-pink-500/30 inline-block mb-4">
              04 // Tech Stack &amp; Tools
            </span>
            <h2 className="font-display font-light text-4xl sm:text-6xl text-white tracking-tight">
              Technical Capabilities
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-400 max-w-xs uppercase tracking-widest">
            Production stack for backend systems, vector DBs &amp; modern web interfaces.
          </p>
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillMatrix.map((item, idx) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 space-y-4 glow-card"
            >
              <div className="flex justify-between items-center font-mono text-xs text-slate-400 border-b border-white/5 pb-3">
                <span className="uppercase tracking-widest text-white font-semibold">
                  {item.category}
                </span>
                <span className="text-purple-400">0{idx + 1}</span>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {item.skills.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-xs bg-white/5 text-slate-200 px-3 py-1.5 rounded-xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
