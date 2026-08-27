'use client';

import React from 'react';
import { motion } from 'framer-motion';

const detailedProjects = [
  {
    num: '01',
    title: 'Distributed Search Typeahead & Autocomplete System',
    category: 'Distributed Systems & Caching',
    stack: ['Spring Boot', 'PostgreSQL', 'Redis', 'React', 'Consistent Hashing'],
    description:
      'Containerized autocomplete service using a custom consistent-hashing ring across Redis nodes, backed by a cache-aside pattern with PostgreSQL as the source of truth.',
    points: [
      'In-memory write aggregation with scheduled flush to PostgreSQL every 30 seconds.',
      'Cut database write load by up to 90% under simulated load.',
      'Cache-aside invalidation and node rebalancing.',
    ],
    github: 'https://github.com/Jenil1905/Search--Typeahead',
    image: '/images/project_search_typeahead.png',
  },
  {
    num: '02',
    title: 'RAG-based PDF Q&A App (NotebookLM Clone)',
    category: 'AI & Vector Retrieval',
    stack: ['Node.js', 'Hugging Face', 'Qdrant Cloud', 'Render', 'RAG'],
    description:
      'Retrieval-augmented generation service that answers questions strictly from user-uploaded PDFs using recursive document chunking and dense embeddings.',
    points: [
      'Recursive text chunking with Hugging Face dense vector embeddings.',
      'Indexed document vectors in Qdrant Cloud for sub-second semantic similarity search.',
      'Deployed full-stack application to production on Render.',
    ],
    github: 'https://github.com/Jenil1905/GenAi-Assignment-4',
    image: '/images/project_rag_pdf.png',
  },
  {
    num: '03',
    title: 'Intervue — AI Mock Interview Platform',
    category: 'Full-Stack & AI Systems',
    stack: ['React.js', 'Node.js', 'REST APIs', 'AI Mock Interviews'],
    description:
      'AI-powered interview preparation platform running automated technical mock interviews on DSA, Computer Networks, and OS topics.',
    points: [
      'Automated technical mock interviews with instant feedback generation.',
      'Full end-to-end API design from React front end through Node.js backend.',
      'Session scheduling and candidate progress analytics tracking over time.',
    ],
    github: 'https://github.com/Jenil1905/Intervue',
    image: '/images/project_intervue_ai.png',
  },
  {
    num: '04',
    title: 'AI Agent CLI Tool (Forge)',
    category: 'Autonomous Agents & CLI Tools',
    stack: ['Node.js', 'JavaScript', 'REST APIs', 'Tool Calling'],
    description:
      'CLI-based autonomous agent that generates production-ready code through an iterative think → act → observe loop.',
    points: [
      'Iterative reasoning loop with structured tool calling.',
      'Automated file creation, directory management, and command execution.',
      'Live terminal feedback and step-by-step progress logging.',
    ],
    github: 'https://github.com/Jenil1905/forge',
    image: '/images/project_forge_cli.png',
  },
];

export default function FramerProjects() {
  return (
    <section id="work" className="py-32 px-6 bg-[#050505] relative isolate">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-12">
          <div>
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest bg-cyan-950/40 px-4 py-1.5 rounded-full border border-cyan-500/30 inline-block mb-4">
              02 // Deep Dive Case Studies
            </span>
            <h2 className="font-display font-light text-4xl sm:text-6xl text-white tracking-tight">
              Featured Projects (4)
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-400 max-w-xs uppercase tracking-widest">
            Detailed engineering breakdowns, system metrics &amp; direct GitHub repositories.
          </p>
        </div>

        {/* Detailed Projects Stack */}
        <div className="space-y-20">
          {detailedProjects.map((proj) => (
            <motion.div
              key={proj.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 hover:border-purple-500/40 transition-all duration-500 glow-card"
            >
              {/* Left Side: System Details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center justify-between font-mono text-xs text-slate-400">
                  <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-cyan-300">
                    {proj.category}
                  </span>
                  <span className="font-mono font-bold text-slate-600 text-base">{proj.num}</span>
                </div>

                <h3 className="font-display font-normal text-3xl sm:text-4xl text-white leading-tight">
                  {proj.title}
                </h3>

                <p className="font-sans text-slate-300 text-base leading-relaxed">
                  {proj.description}
                </p>

                {/* Key Points */}
                <ul className="space-y-2.5 pt-2">
                  {proj.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 font-sans text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Stack Pills & GitHub Link */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2 max-w-sm">
                    {proj.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-xs bg-white/5 text-slate-300 px-3 py-1 rounded-md border border-white/10"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-[#050505] font-mono text-xs uppercase tracking-wider px-6 py-3 rounded-full font-semibold hover:bg-cyan-300 transition-all duration-300 hover:scale-105"
                  >
                    GitHub Repo ↗
                  </a>
                </div>
              </div>

              {/* Right Side: High-Res UI Mockup Image */}
              <div className="lg:col-span-6">
                <div className="relative aspect-[16/11] rounded-2xl overflow-hidden glass-panel border border-white/15 p-2 shadow-2xl group/img">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-center rounded-xl group-hover/img:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[11px] text-slate-300 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                    <span className="text-cyan-400">PROD SYSTEM UI</span>
                    <span>GITHUB: JENIL1905</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
