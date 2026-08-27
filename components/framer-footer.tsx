'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function FramerFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-32 px-6 bg-[#050505] relative isolate border-t border-white/10 overflow-hidden">
      {/* Ambient footer glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-purple-600/15 via-cyan-500/15 to-pink-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* Giant Call to Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel p-10 sm:p-16 rounded-3xl border border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-10 glow-card"
        >
          <div className="space-y-4 max-w-2xl">
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest bg-cyan-950/50 px-4 py-1.5 rounded-full border border-cyan-500/30 inline-block">
              05 // Get In Touch
            </span>
            <h2 className="font-display font-light text-4xl sm:text-6xl text-white tracking-tight leading-[1.05]">
              Ready to build <br />
              <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-400 bg-clip-text text-transparent font-normal">
                the future together?
              </span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
              Based in Bangalore, India. Open for software engineering roles, high-concurrency backend architecture, and AI agent collaborations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="mailto:langaliyajenil@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#050505] font-sans font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-full hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:scale-105"
            >
              Email Me ✉
            </a>
            <a
              href="tel:+919429506350"
              className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/15 text-white font-mono text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              +91 9429506350
            </a>
          </div>
        </motion.div>

        {/* Footer Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-mono text-xs pt-6">
          <div>
            <span className="text-slate-500 uppercase tracking-widest block mb-2">Direct Contact</span>
            <a href="mailto:langaliyajenil@gmail.com" className="text-white hover:text-cyan-300 text-base font-sans underline block mb-1">
              langaliyajenil@gmail.com
            </a>
            <span className="text-slate-400 block font-mono">+91 9429506350</span>
          </div>

          <div>
            <span className="text-slate-500 uppercase tracking-widest block mb-2">Location &amp; Education</span>
            <div className="text-slate-300 font-sans text-sm space-y-1">
              <div>Bangalore, India</div>
              <div className="text-xs text-slate-400">Scaler School of Technology &amp; BITS Pilani</div>
            </div>
          </div>

          <div className="flex flex-col md:items-end justify-between gap-4">
            <span className="text-slate-500 uppercase tracking-widest">Social Channels</span>
            <div className="flex gap-4">
              <a
                href="https://github.com/Jenil1905"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-white underline font-mono"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/jenil-langaliya-0b072331a/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-white underline font-mono"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div>JENIL LANGALIYA © {new Date().getFullYear()}</div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors focus:outline-none"
          >
            <span>BACK TO TOP</span>
            <span className="text-sm">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
