'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function FramerHero() {
  return (
    <section className="relative min-h-screen pt-36 pb-20 px-6 overflow-hidden flex flex-col justify-center items-center bg-[#050505] isolate">
      {/* Ambient Glowing Mesh Background Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-purple-600/20 via-cyan-500/20 to-pink-500/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-glowFloat" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        {/* Floating Glowing Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-[0_0_25px_rgba(168,85,247,0.15)]"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-mono text-xs text-slate-200 tracking-wider uppercase">
            ✨ Jenil Langaliya // CS AT SCALER &amp; BITS PILANI
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-light text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white leading-[1.02]"
        >
          Designing &amp; Building <br />
          <span className="font-normal bg-gradient-to-r from-white via-cyan-200 to-purple-400 bg-clip-text text-transparent">
            Beyond Possible.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-base sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Full-Stack &amp; AI Systems Engineer building distributed Redis typeahead engines, RAG vector pipelines, and autonomous CLI agents.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#050505] font-sans font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-full hover:bg-slate-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95"
          >
            Explore Projects ↓
          </a>
          <a
            href="mailto:langaliyajenil@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 border border-white/15 text-white font-sans font-medium text-sm uppercase tracking-wider px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Contact Me ✉
          </a>
        </motion.div>
      </div>

      {/* Floating Canvas Mockup Window with User Cover Photo & Exact Required Skills */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl w-full mt-16 relative z-10 px-4"
      >
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 p-3 sm:p-4 shadow-2xl group hover:border-purple-500/40 transition-all duration-700">
          {/* Mockup Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#050505]/80 rounded-2xl border border-white/5 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="font-mono text-xs text-slate-400 ml-2">jenil-langaliya.sys // production</span>
            </div>
            <div className="flex items-center gap-3 font-mono text-[11px] text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              STATUS: 200 OK
            </div>
          </div>

          {/* User Cover Photo Feature Grid with Exact Requested Skills */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-[#08080d] p-6 rounded-2xl border border-white/5">
            {/* Left: User Attached Cover Photo */}
            <div className="lg:col-span-5 relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10 shadow-xl group/portrait">
              <img
                src="/images/jenil_cover_portrait.jpg"
                alt="Jenil Langaliya Portfolio Cover"
                className="w-full h-full object-cover object-center group-hover/portrait:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 font-mono text-[11px] text-slate-300 bg-black/60 backdrop-blur-md p-2 rounded-lg border border-white/10 flex items-center justify-between">
                <span>JENIL LANGALIYA</span>
                <span className="text-cyan-400">BANGALORE</span>
              </div>
            </div>

            {/* Right: Intro & Required Skills: spring-boot, react, node.js, express.js */}
            <div className="lg:col-span-7 space-y-4 text-left p-2">
              <span className="inline-block font-mono text-xs uppercase tracking-widest text-purple-400 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-500/30">
                Creative Engineer &amp; AI Systems Architect
              </span>
              <h3 className="font-display font-light text-2xl sm:text-4xl text-white leading-snug">
                Engineering high-throughput backends &amp; autonomous agent pipelines.
              </h3>
              <p className="font-sans text-sm text-slate-400 leading-relaxed">
                Undergraduate in CS at Scaler School of Technology &amp; BITS Pilani. Specializing in distributed systems, vector retrieval, and developer toolings.
              </p>

              {/* Exact Skills requested: spring-boot, react, node.js, express.js */}
              <div className="pt-3 border-t border-white/10 space-y-2">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-widest block">
                  Core Technologies:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  <span className="font-mono text-xs bg-emerald-500/10 text-emerald-300 font-semibold px-3.5 py-1.5 rounded-lg border border-emerald-500/30 shadow-sm">
                    Spring Boot
                  </span>
                  <span className="font-mono text-xs bg-cyan-500/10 text-cyan-300 font-semibold px-3.5 py-1.5 rounded-lg border border-cyan-500/30 shadow-sm">
                    React
                  </span>
                  <span className="font-mono text-xs bg-green-500/10 text-green-300 font-semibold px-3.5 py-1.5 rounded-lg border border-green-500/30 shadow-sm">
                    Node.js
                  </span>
                  <span className="font-mono text-xs bg-purple-500/10 text-purple-300 font-semibold px-3.5 py-1.5 rounded-lg border border-purple-500/30 shadow-sm">
                    Express.js
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
