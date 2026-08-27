'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Visual cards showcasing all 8 GitHub projects (no cover pics used in wheel)
const wheelItemsRow1 = [
  {
    id: 1,
    title: 'Distributed Search Autocomplete',
    image: '/images/project_search_typeahead.png',
    tag: 'Redis + Spring Boot',
    github: 'https://github.com/Jenil1905/Search--Typeahead',
  },
  {
    id: 2,
    title: 'RAG PDF Q&A App (NotebookLM Clone)',
    image: '/images/project_rag_pdf.png',
    tag: 'Qdrant Cloud + Vector DB',
    github: 'https://github.com/Jenil1905/GenAi-Assignment-4',
  },
  {
    id: 3,
    title: 'Intervue — AI Mock Interview Platform',
    image: '/images/project_intervue_ai.png',
    tag: 'AI Mock Interviews',
    github: 'https://github.com/Jenil1905/Intervue',
  },
  {
    id: 4,
    title: 'AI Agent CLI Tool (Forge)',
    image: '/images/project_forge_cli.png',
    tag: 'Think-Act-Observe Loop',
    github: 'https://github.com/Jenil1905/forge',
  },
];

const wheelItemsRow2 = [
  {
    id: 5,
    title: 'Custom Multithreaded HTTP Server',
    image: '/images/project_http_server.png',
    tag: 'Socket Programming & Routing',
    github: 'https://github.com/Jenil1905/HTTP_SERVER',
  },
  {
    id: 6,
    title: 'High-Performance URL Shortener Backend',
    image: '/images/project_search_typeahead.png',
    tag: 'Base62 Encoding + Redis Cache',
    github: 'https://github.com/Jenil1905/Url-shortner-backend',
  },
  {
    id: 7,
    title: 'NexusAI — Intelligent AI Platform',
    image: '/images/project_rag_pdf.png',
    tag: 'Multi-Model Agent Workflows',
    github: 'https://github.com/Jenil1905/NexusAI',
  },
  {
    id: 8,
    title: 'FlickVerse — Movie & Media Platform',
    image: '/images/project_intervue_ai.png',
    tag: 'TMDB API & Media Streaming',
    github: 'https://github.com/Jenil1905/FlickVerse',
  },
];

export default function ImageWheel() {
  return (
    <section className="py-24 bg-[#050505] border-t border-b border-white/5 isolate overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center space-y-4">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-purple-400 uppercase tracking-widest bg-purple-950/50 px-4 py-1.5 rounded-full border border-purple-500/30 inline-block"
        >
          Visual Gallery // 8 Active GitHub Repositories
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-light text-3xl sm:text-5xl text-white tracking-tight"
        >
          Infinite Project Image Wheel
        </motion.h2>
      </div>

      {/* MARQUEE ROW 1 (Left Sliding) */}
      <div className="marquee-wrapper overflow-hidden py-4 group">
        <div className="flex w-[200%] animate-marqueeLeft group-hover:[animation-play-state:paused] gap-6">
          {[...wheelItemsRow1, ...wheelItemsRow1, ...wheelItemsRow1].map((item, idx) => (
            <a
              key={idx}
              href={item.github}
              target="_blank"
              rel="noreferrer"
              className="w-[320px] sm:w-[440px] shrink-0 relative aspect-[16/10] rounded-2xl overflow-hidden glass-panel border border-white/10 group/card hover:border-purple-500/50 transition-all duration-500 shadow-xl block"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover/card:scale-105 transition-transform duration-700 opacity-85 group-hover/card:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="font-mono text-[11px] text-cyan-300 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  {item.tag}
                </span>
                <span className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white text-xs group-hover/card:bg-purple-600 transition-colors">
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* MARQUEE ROW 2 (Right Sliding) */}
      <div className="marquee-wrapper overflow-hidden py-4 group mt-4">
        <div className="flex w-[200%] animate-marqueeRight group-hover:[animation-play-state:paused] gap-6">
          {[...wheelItemsRow2, ...wheelItemsRow2, ...wheelItemsRow2].map((item, idx) => (
            <a
              key={idx}
              href={item.github}
              target="_blank"
              rel="noreferrer"
              className="w-[320px] sm:w-[440px] shrink-0 relative aspect-[16/10] rounded-2xl overflow-hidden glass-panel border border-white/10 group/card hover:border-cyan-500/50 transition-all duration-500 shadow-xl block"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover/card:scale-105 transition-transform duration-700 opacity-85 group-hover/card:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="font-mono text-[11px] text-purple-300 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  {item.tag}
                </span>
                <span className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white text-xs group-hover/card:bg-cyan-600 transition-colors">
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
