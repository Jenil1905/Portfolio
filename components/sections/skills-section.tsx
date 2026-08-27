'use client';

import React from 'react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'JavaScript', 'SQL', 'TypeScript'],
  },
  {
    title: 'Backend Engineering',
    skills: ['Spring Boot', 'Node.js', 'REST APIs', 'MVC Architecture'],
  },
  {
    title: 'Frontend Engineering',
    skills: ['React.js (Hooks)', 'Next.js 15', 'HTML/CSS', 'DOM Manipulation', 'Tailwind CSS'],
  },
  {
    title: 'Systems & Data',
    skills: ['Redis (Consistent Hashing)', 'PostgreSQL (Cache-Aside)', 'Qdrant Vector DB', 'In-Memory Write Aggregation'],
  },
  {
    title: 'Tools & Platform',
    skills: ['Git', 'GitHub', 'Docker', 'Render'],
  },
];

export default function SkillsSection() {
  return (
    <section id="process" className="relative py-28 px-6 md:px-16 bg-[#edf5ff] border-t border-[#a8c2e6]/40 isolate">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#0b0f19]/60 bg-white/60 px-3 py-1 rounded-full border border-[#0b0f19]/10 mb-4">
            04 // Technical Matrix &amp; Open Source
          </div>
          <h2 className="font-sans font-light text-4xl sm:text-5xl lg:text-6xl text-[#0b0f19] tracking-tight">
            Capabilities &amp; Experience
          </h2>
        </div>

        {/* Hacktoberfest Experience Timeline Card */}
        <div className="bg-white/80 p-8 rounded-3xl border border-[#0b0f19]/10 shadow-lg space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#0b0f19]/10 pb-6">
            <div>
              <span className="font-mono text-xs text-[#0b0f19]/50 uppercase tracking-widest">
                Oct 2024, Oct 2025 // Community Open Source
              </span>
              <h3 className="font-sans text-2xl font-normal text-[#0b0f19] mt-1">
                Open Source Contributor — Hacktoberfest
              </h3>
            </div>
            <div className="flex gap-2">
              <span className="bg-emerald-100 text-emerald-800 font-mono text-xs px-3 py-1 rounded-full border border-emerald-300">
                7+ Merged PRs
              </span>
              <span className="bg-indigo-100 text-indigo-800 font-mono text-xs px-3 py-1 rounded-full border border-indigo-300">
                Pull Shark Badge x2
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-sm">
            <div className="p-4 bg-[#edf5ff]/60 rounded-2xl border border-[#0b0f19]/5">
              <div className="font-mono text-xs font-semibold text-[#0b0f19] mb-1">01 / Merged PRs</div>
              <p className="text-[#0b0f19]/75 text-xs leading-relaxed">
                Shipped 7 merged pull requests across community-owned repositories over two consecutive Hacktoberfest cycles.
              </p>
            </div>

            <div className="p-4 bg-[#edf5ff]/60 rounded-2xl border border-[#0b0f19]/5">
              <div className="font-mono text-xs font-semibold text-[#0b0f19] mb-1">02 / React Codebases</div>
              <p className="text-[#0b0f19]/75 text-xs leading-relaxed">
                Fixed bugs and delivered feature improvements in React-based codebases owned by external maintainers.
              </p>
            </div>

            <div className="p-4 bg-[#edf5ff]/60 rounded-2xl border border-[#0b0f19]/5">
              <div className="font-mono text-xs font-semibold text-[#0b0f19] mb-1">03 / Standard Workflows</div>
              <p className="text-[#0b0f19]/75 text-xs leading-relaxed">
                Followed standard fork / feature-branch / pull-request workflows with active maintainer code reviews.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className="bg-white/70 p-6 rounded-2xl border border-[#0b0f19]/10 hover:border-[#0b0f19]/30 transition-all duration-300 shadow-sm"
            >
              <div className="flex justify-between items-center font-mono text-xs text-[#0b0f19]/40 mb-3">
                <span className="uppercase tracking-widest font-semibold text-[#0b0f19]">
                  {cat.title}
                </span>
                <span>0{idx + 1}</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-xs bg-[#edf5ff] text-[#0b0f19] px-3 py-1.5 rounded-lg border border-[#0b0f19]/10 font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
