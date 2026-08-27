'use client';

import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 px-6 md:px-16 bg-[#edf5ff] border-t border-[#a8c2e6]/40 isolate overflow-hidden">
      {/* Background grid accent */}
      <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12 opacity-10 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-[#0b0f19]" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* LEFT COLUMN: Sticky Photo & Identity Card */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="relative group rounded-3xl overflow-hidden bg-white/80 border border-white shadow-xl backdrop-blur-md p-4 transition-all duration-500 hover:shadow-2xl">
            {/* Image Preview Container */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-tr from-[#0b0f19] to-[#1e293b]">
              <img
                src="/images/Base_image_desktop.png"
                alt="Jenil Langaliya"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19]/80 via-transparent to-transparent" />
              
              {/* Floating Badges over image */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/80 text-[11px] font-mono font-medium text-[#0b0f19]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Bangalore, India
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-300">
                  Full-Stack &amp; AI Systems Engineer
                </span>
                <h3 className="font-sans text-2xl font-light tracking-tight mt-0.5">
                  Jenil Langaliya
                </h3>
              </div>
            </div>

            {/* Quick Education Summary Badges */}
            <div className="mt-4 pt-4 border-t border-[#0b0f19]/5 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#0b0f19]/60">Scaler School of Tech</span>
                <span className="font-semibold text-[#0b0f19]">CS &amp; SE (2024–28)</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#0b0f19]/60">BITS Pilani</span>
                <span className="font-semibold text-[#0b0f19]">B.Sc. CS (2024–27)</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Editorial Story & Achievements */}
        <div className="lg:col-span-7 space-y-10">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#0b0f19]/60 bg-white/60 px-3 py-1 rounded-full border border-[#0b0f19]/10 mb-4">
              02 // Background &amp; Philosophy
            </div>
            <h2 className="font-sans font-light text-4xl sm:text-5xl lg:text-6xl text-[#0b0f19] tracking-tight leading-[1.05]">
              Architecting high-concurrency systems &amp; autonomous AI agents.
            </h2>
          </div>

          <div className="prose prose-slate text-[#0b0f19]/80 font-sans text-base sm:text-lg leading-relaxed space-y-5">
            <p>
              I am a Computer Science &amp; Software Engineering student dual-enrolled at <strong>Scaler School of Technology</strong> and <strong>BITS Pilani</strong> in Bangalore.
            </p>
            <p>
              My focus lies in building robust <strong>distributed backend systems</strong>—such as containerized Redis consistent-hashing autocomplete services that cut write load by 90%—and production <strong>AI applications</strong> using RAG vector search and autonomous think-act-observe CLI agent loops.
            </p>
          </div>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
            <div className="bg-white/80 p-5 rounded-2xl border border-[#0b0f19]/10 shadow-sm hover:border-[#0b0f19]/30 transition-colors">
              <div className="font-mono text-xs uppercase tracking-wider text-[#0b0f19]/50">Merged PRs</div>
              <div className="font-sans text-3xl font-light text-[#0b0f19] mt-1">7+</div>
              <div className="font-mono text-[10px] text-emerald-600 mt-1">Hacktoberfest 24/25</div>
            </div>

            <div className="bg-white/80 p-5 rounded-2xl border border-[#0b0f19]/10 shadow-sm hover:border-[#0b0f19]/30 transition-colors">
              <div className="font-mono text-xs uppercase tracking-wider text-[#0b0f19]/50">Hackathon</div>
              <div className="font-sans text-3xl font-light text-[#0b0f19] mt-1">4th Place</div>
              <div className="font-mono text-[10px] text-[#0b0f19]/70 mt-1">Speed Run 1.0</div>
            </div>

            <div className="bg-white/80 p-5 rounded-2xl border border-[#0b0f19]/10 shadow-sm hover:border-[#0b0f19]/30 transition-colors col-span-2 sm:col-span-1">
              <div className="font-mono text-xs uppercase tracking-wider text-[#0b0f19]/50">GitHub Badge</div>
              <div className="font-sans text-3xl font-light text-[#0b0f19] mt-1">x2</div>
              <div className="font-mono text-[10px] text-indigo-600 mt-1">Pull Shark</div>
            </div>
          </div>

          {/* Education Breakdown Cards */}
          <div className="space-y-4 pt-4 border-t border-[#0b0f19]/10">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#0b0f19]/60">
              Academic Background
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-white/70 rounded-2xl border border-[#0b0f19]/10">
                <div className="font-mono text-[11px] text-[#0b0f19]/50">Aug 2024 – 2028</div>
                <h4 className="font-sans font-medium text-base text-[#0b0f19] mt-1">Scaler School of Technology</h4>
                <p className="font-sans text-xs text-[#0b0f19]/75 mt-1">UG Program in Computer Science and Software Engineering</p>
                <div className="mt-3 font-mono text-xs font-semibold text-[#0b0f19]">CGPA: 7.8</div>
              </div>

              <div className="p-5 bg-white/70 rounded-2xl border border-[#0b0f19]/10">
                <div className="font-mono text-[11px] text-[#0b0f19]/50">Aug 2024 – 2027</div>
                <h4 className="font-sans font-medium text-base text-[#0b0f19] mt-1">BITS Pilani, Bangalore</h4>
                <p className="font-sans text-xs text-[#0b0f19]/75 mt-1">B.Sc. in Computer Science</p>
                <div className="mt-3 font-mono text-xs font-semibold text-[#0b0f19]">CGPA: 7.71</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
