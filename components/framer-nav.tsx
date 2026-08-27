'use client';

import React, { useState, useEffect } from 'react';

export default function FramerNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'py-5 bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Monogram Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 p-[1px] shadow-[0_0_20px_rgba(168,85,247,0.3)]">
            <div className="w-full h-full bg-[#0a0a0c] rounded-[11px] flex items-center justify-center font-mono font-bold text-sm text-white group-hover:bg-transparent transition-colors">
              JL
            </div>
          </div>
          <span className="font-display font-bold text-sm tracking-wide text-white">
            JENIL LANGALIYA
          </span>
        </a>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-8 font-sans text-xs font-medium uppercase tracking-wider text-slate-300">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#education" className="hover:text-white transition-colors">Education</a>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Jenil1905"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs text-slate-300 hover:text-white transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href="mailto:langaliyajenil@gmail.com"
            className="relative group overflow-hidden rounded-full p-[1px] font-sans text-xs font-semibold uppercase tracking-wider text-white shadow-lg"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full animate-pulseSlow" />
            <span className="relative block bg-[#0a0a0c] group-hover:bg-transparent px-5 py-2.5 rounded-full transition-colors">
              Contact Me ✉
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}
