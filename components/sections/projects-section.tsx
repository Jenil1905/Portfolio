'use client';

import React from 'react';

const projects = [
  {
    id: '01',
    title: 'Distributed Search Typeahead & Autocomplete System',
    category: 'Distributed Systems & Caching',
    stack: ['Spring Boot', 'PostgreSQL', 'Redis', 'React', 'Consistent Hashing'],
    description:
      'Designed a containerized autocomplete service using a custom consistent-hashing ring across Redis nodes, backed by a cache-aside pattern with PostgreSQL as the source of truth. Built in-memory write aggregation with a scheduled flush every 30s, cutting database write load by up to 90%.',
    github: 'https://github.com/Jenil1905/Search--Typeahead',
    highlights: ['Cut DB Write Load by 90%', 'Consistent Hashing Ring', 'Redis In-Memory Aggregation'],
  },
  {
    id: '02',
    title: 'RAG-based PDF Q&A App (NotebookLM Clone)',
    category: 'AI & Vector Retrieval',
    date: 'July 2026',
    stack: ['Node.js', 'Hugging Face', 'Qdrant Cloud', 'Render', 'RAG'],
    description:
      'Built a retrieval-augmented generation service that answers questions strictly from user-uploaded PDFs, using recursive chunking and Hugging Face embeddings. Indexed document embeddings in Qdrant Cloud for semantic search and shipped the full app to production on Render.',
    github: 'https://github.com/Jenil1905/GenAi-Assignment-4',
    highlights: ['Document-Grounded QA', 'Recursive Chunking', 'Qdrant Vector Indexing'],
  },
  {
    id: '03',
    title: 'Intervue — AI Mock Interview Platform',
    category: 'Full-Stack & AI Systems',
    date: 'Sept 2025 – Present',
    stack: ['React.js', 'Node.js', 'REST APIs', 'AI Feedback Engine'],
    description:
      'Built and shipped an AI-powered interview preparation platform that runs automated mock interviews on DSA, Computer Networks, and OS topics. Implemented instant feedback generation and session scheduling end-to-end, helping students track progress over time.',
    github: 'https://github.com/Jenil1905/Intervue',
    highlights: ['Automated DSA & OS Mock Interviews', 'Instant Feedback Generation', 'Full End-to-End API Design'],
  },
  {
    id: '04',
    title: 'AI Agent CLI Tool (Forge)',
    category: 'Autonomous Agents & CLI Tools',
    stack: ['Node.js', 'JavaScript', 'REST APIs', 'Tool Calling'],
    description:
      'Built a CLI-based agent that generates production-ready code through an iterative think → act → observe loop. Implemented tool-calling for file creation, directory management, and command execution, with live terminal feedback for each step.',
    github: 'https://github.com/Jenil1905/forge',
    highlights: ['Iterative Think-Act-Observe Loop', 'Structured Tool Calling', 'Live Terminal Feedback'],
  },
];

export default function ProjectsSection() {
  return (
    <section id="work" className="relative py-28 px-6 md:px-16 bg-[#edf5ff] border-t border-[#a8c2e6]/40 isolate">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#0b0f19]/60 bg-white/60 px-3 py-1 rounded-full border border-[#0b0f19]/10 mb-4">
              03 // Featured Engineering Projects
            </div>
            <h2 className="font-sans font-light text-4xl sm:text-5xl lg:text-6xl text-[#0b0f19] tracking-tight">
              Selected Works &amp; Systems
            </h2>
          </div>
          <p className="font-mono text-xs text-[#0b0f19]/60 uppercase tracking-widest max-w-xs">
            High-concurrency backends, RAG vector pipelines &amp; AI CLI tools.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="group relative bg-white/70 hover:bg-white p-8 rounded-3xl border border-[#0b0f19]/10 hover:border-[#0b0f19]/30 transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#0b0f19]/50 mb-4">
                  <span className="uppercase tracking-widest bg-[#edf5ff] px-2.5 py-1 rounded-md border border-[#0b0f19]/5">
                    {proj.category} {proj.date && `• ${proj.date}`}
                  </span>
                  <span className="font-bold text-[#0b0f19]/40">{proj.id}</span>
                </div>

                <h3 className="font-sans font-normal text-2xl sm:text-3xl text-[#0b0f19] group-hover:text-black transition-colors leading-snug">
                  {proj.title}
                </h3>

                <p className="font-sans text-sm text-[#0b0f19]/75 mt-3 leading-relaxed">
                  {proj.description}
                </p>

                {/* Key Highlights */}
                <div className="mt-4 pt-4 border-t border-[#0b0f19]/5 space-y-1">
                  {proj.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-mono text-[#0b0f19]/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0b0f19]" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#0b0f19]/10 flex items-center justify-between">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 max-w-[75%]">
                  {proj.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] bg-[#edf5ff] text-[#0b0f19]/80 px-2 py-0.5 rounded border border-[#0b0f19]/5"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* GitHub Action Link */}
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#0b0f19] text-[#edf5ff] flex items-center justify-center font-mono text-sm hover:scale-110 active:scale-95 transition-transform duration-300 shadow-md"
                  title="View GitHub Repository"
                >
                  ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
