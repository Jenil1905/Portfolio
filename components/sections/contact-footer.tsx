'use client';

import React from 'react';

export default function ContactFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-[#0b0f19] text-[#edf5ff] py-24 px-6 md:px-16 border-t border-[#1e293b] isolate overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Call to Action Banner */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 border-b border-white/10 pb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/10">
              05 // Get In Touch
            </span>
            <h2 className="font-sans font-light text-4xl sm:text-6xl text-white tracking-tight leading-[1.05]">
              Let&apos;s build extraordinary systems together.
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
              Based in Bangalore, India. Open for software engineering roles, high-concurrency backend architecture, and AI agent collaborations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:langaliyajenil@gmail.com"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#0b0f19] font-mono text-xs uppercase tracking-wider px-8 py-4 rounded-full font-semibold hover:bg-cyan-300 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
            >
              Email Me ✉
            </a>
            <a
              href="https://github.com/Jenil1905"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white/10 text-white border border-white/20 font-mono text-xs uppercase tracking-wider px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        {/* Links & Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-mono text-xs">
          <div>
            <span className="text-slate-500 uppercase tracking-widest block mb-2">Direct Contact</span>
            <a href="mailto:langaliyajenil@gmail.com" className="text-white hover:text-cyan-300 block text-base font-sans underline mb-1">
              langaliyajenil@gmail.com
            </a>
            <a href="tel:+919429506350" className="text-slate-400 block font-mono">
              +91 9429506350
            </a>
          </div>

          <div>
            <span className="text-slate-500 uppercase tracking-widest block mb-2">Location &amp; Education</span>
            <div className="text-slate-300 font-sans text-sm space-y-1">
              <div>Bangalore, India</div>
              <div className="text-xs text-slate-400">Scaler School of Tech &amp; BITS Pilani</div>
            </div>
          </div>

          <div className="flex flex-col md:items-end justify-between gap-4">
            <span className="text-slate-500 uppercase tracking-widest">Social Profiles</span>
            <div className="flex gap-4">
              <a
                href="https://github.com/Jenil1905"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-white underline font-mono"
              >
                GitHub (Jenil1905) ↗
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

        {/* Footer Bottom Bar */}
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
