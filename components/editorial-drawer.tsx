'use client';

import React, { useEffect } from 'react';

export type DrawerType = 'about' | 'work' | 'process' | 'experiments' | 'contact' | null;

interface EditorialDrawerProps {
  activeDrawer: DrawerType;
  onClose: () => void;
}

export default function EditorialDrawer({ activeDrawer, onClose }: EditorialDrawerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (activeDrawer) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeDrawer, onClose]);

  if (!activeDrawer) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end isolate">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#0b0f19]/30 backdrop-blur-sm transition-opacity duration-500 animate-fadeIn"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over Panel */}
      <div className="relative w-full max-w-2xl h-full bg-[#edf5ff]/95 backdrop-blur-xl border-l border-[#a8c2e6]/50 shadow-2xl overflow-y-auto z-10 flex flex-col p-6 md:p-12 animate-slideLeft">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-[#0b0f19]/10 pb-6 mb-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0b0f19]/60">
              01 // Portfolio Detail
            </span>
            <span className="h-1 w-1 rounded-full bg-[#0b0f19]/40" />
            <span className="font-mono text-xs uppercase tracking-widest font-semibold text-[#0b0f19]">
              {activeDrawer}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-[#0b0f19]/20 flex items-center justify-center text-[#0b0f19] hover:bg-[#0b0f19] hover:text-[#edf5ff] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0b0f19]"
            aria-label="Close drawer"
          >
            <span className="font-mono text-lg font-light">✕</span>
          </button>
        </div>

        {/* DRAWER CONTENT: ABOUT */}
        {activeDrawer === 'about' && (
          <div className="space-y-8 animate-fadeIn">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#0b0f19]/60">
                Bangalore, India // Developer Profile
              </span>
              <h2 className="font-sans font-light text-4xl md:text-5xl tracking-tight text-[#0b0f19] mt-2">
                Jenil Langaliya
              </h2>
              <p className="font-mono text-xs uppercase tracking-wider text-[#0b0f19]/70 mt-1">
                Computer Science &amp; Software Engineering Student
              </p>
            </div>

            {/* Education Section */}
            <div className="bg-white/70 p-5 rounded-2xl border border-[#0b0f19]/10 space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#0b0f19]/60">
                Education
              </h3>
              <div className="space-y-3 font-sans text-sm">
                <div>
                  <div className="flex justify-between font-medium text-[#0b0f19]">
                    <a href="https://www.scaler.com/school-of-technology/" target="_blank" rel="noreferrer" className="hover:underline">
                      Scaler School of Technology, Bangalore ↗
                    </a>
                    <span className="font-mono text-xs text-[#0b0f19]/60">Aug 2024 – 2028</span>
                  </div>
                  <div className="text-xs text-[#0b0f19]/75 mt-0.5">
                    Undergraduate Program in Computer Science and Software Engineering • CGPA: 7.8
                  </div>
                </div>
                <div className="pt-2 border-t border-[#0b0f19]/5">
                  <div className="flex justify-between font-medium text-[#0b0f19]">
                    <a href="https://www.bits-pilani.ac.in/" target="_blank" rel="noreferrer" className="hover:underline">
                      BITS Pilani, Bangalore ↗
                    </a>
                    <span className="font-mono text-xs text-[#0b0f19]/60">Aug 2024 – 2027</span>
                  </div>
                  <div className="text-xs text-[#0b0f19]/75 mt-0.5">
                    B.Sc. in Computer Science • CGPA: 7.71
                  </div>
                </div>
              </div>
            </div>

            {/* Experience & Achievements */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#0b0f19]/60">
                Experience &amp; Open Source
              </h3>
              <div className="bg-white/60 p-5 rounded-2xl border border-[#0b0f19]/10 space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="font-sans font-medium text-[#0b0f19]">
                    Open Source Contributor — Hacktoberfest
                  </h4>
                  <span className="font-mono text-xs text-[#0b0f19]/60">Oct 2024, Oct 2025</span>
                </div>
                <ul className="font-sans text-xs text-[#0b0f19]/80 leading-relaxed space-y-1 list-disc list-inside">
                  <li>Shipped 7 merged pull requests across community-owned repositories over two consecutive Hacktoberfest cycles.</li>
                  <li>Fixed bugs and delivered feature improvements in React-based codebases.</li>
                  <li>Followed standard fork / feature-branch / pull-request workflows with Git.</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs">
                <div className="bg-white/60 p-4 rounded-xl border border-[#0b0f19]/10">
                  <div className="text-[#0b0f19]/50 uppercase tracking-widest mb-1">Hackathon</div>
                  <div className="font-sans text-base font-medium text-[#0b0f19]">4th Place (Speed Run 1.0)</div>
                </div>
                <div className="bg-white/60 p-4 rounded-xl border border-[#0b0f19]/10">
                  <div className="text-[#0b0f19]/50 uppercase tracking-widest mb-1">GitHub Badges</div>
                  <div className="font-sans text-base font-medium text-[#0b0f19]">Pull Shark x2</div>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="border-t border-b border-[#0b0f19]/10 py-6 space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#0b0f19]/60">
                Technical Stack &amp; Tools
              </h3>
              <div className="space-y-3 font-mono text-xs">
                <div>
                  <span className="text-[#0b0f19]/50 uppercase tracking-wider block mb-1">Languages</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Java', 'JavaScript', 'SQL', 'TypeScript'].map((s) => (
                      <span key={s} className="bg-white/80 border border-[#0b0f19]/10 px-2.5 py-1 rounded-md text-[#0b0f19]">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-[#0b0f19]/50 uppercase tracking-wider block mb-1">Backend</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Spring Boot', 'Node.js', 'REST APIs', 'MVC Architecture'].map((s) => (
                      <span key={s} className="bg-white/80 border border-[#0b0f19]/10 px-2.5 py-1 rounded-md text-[#0b0f19]">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-[#0b0f19]/50 uppercase tracking-wider block mb-1">Frontend</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['React.js (Hooks)', 'Next.js', 'HTML/CSS', 'DOM Manipulation', 'Tailwind CSS'].map((s) => (
                      <span key={s} className="bg-white/80 border border-[#0b0f19]/10 px-2.5 py-1 rounded-md text-[#0b0f19]">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-[#0b0f19]/50 uppercase tracking-wider block mb-1">Systems, Data &amp; Tools</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Redis', 'PostgreSQL', 'Vector DB (Qdrant)', 'Caching & Consistent Hashing', 'Git', 'GitHub', 'Docker'].map((s) => (
                      <span key={s} className="bg-white/80 border border-[#0b0f19]/10 px-2.5 py-1 rounded-md text-[#0b0f19]">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 flex gap-4">
              <a
                href="mailto:langaliyajenil@gmail.com"
                className="inline-flex items-center gap-2 bg-[#0b0f19] text-[#edf5ff] font-mono text-xs uppercase tracking-wider px-6 py-3.5 rounded-full hover:bg-[#0b0f19]/90 transition-all duration-300"
              >
                Contact Me
                <span>→</span>
              </a>
              <a
                href="https://github.com/Jenil1905"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#0b0f19] border border-[#0b0f19]/20 font-mono text-xs uppercase tracking-wider px-6 py-3.5 rounded-full hover:bg-[#edf5ff] transition-all duration-300"
              >
                GitHub Profile
                <span>↗</span>
              </a>
            </div>
          </div>
        )}

        {/* DRAWER CONTENT: WORK */}
        {activeDrawer === 'work' && (
          <div className="space-y-8 animate-fadeIn">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#0b0f19]/60">
                Engineering Projects
              </span>
              <h2 className="font-sans font-light text-4xl md:text-5xl tracking-tight text-[#0b0f19] mt-2">
                Featured Work
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Distributed Search Typeahead & Autocomplete System',
                  category: 'Distributed Systems & Caching',
                  description: 'Designed a containerized autocomplete service using a custom consistent-hashing ring across Redis nodes, backed by a cache-aside pattern with PostgreSQL as the source of truth. Built in-memory write aggregation with a scheduled flush to PostgreSQL every 30 seconds, cutting database write load by up to 90% under simulated load.',
                  tags: ['Spring Boot', 'PostgreSQL', 'Redis', 'React', 'Consistent Hashing'],
                  github: 'https://github.com/Jenil1905/Search--Typeahead',
                },
                {
                  title: 'RAG-based PDF Q&A App (NotebookLM Clone)',
                  category: 'AI & Vector Retrieval',
                  date: 'July 2026',
                  description: 'Built a retrieval-augmented generation service that answers questions strictly from user-uploaded PDFs, using recursive chunking and Hugging Face embeddings. Indexed document embeddings in Qdrant Cloud for semantic search and shipped the full app to production on Render.',
                  tags: ['Node.js', 'Hugging Face', 'Qdrant Cloud', 'Render', 'RAG'],
                  github: 'https://github.com/Jenil1905/GenAi-Assignment-4',
                },
                {
                  title: 'Intervue — AI Mock Interview Platform',
                  category: 'Full-Stack & AI Systems',
                  date: 'Sept 2025 – Present',
                  description: 'Built and shipped an AI-powered interview preparation platform that runs automated mock interviews on DSA, Computer Networks, and OS topics. Implemented instant feedback generation and session scheduling end to end, from API design through the React front end.',
                  tags: ['React.js', 'Node.js', 'REST APIs', 'AI Mock Interviews'],
                  github: 'https://github.com/Jenil1905/Intervue',
                },
                {
                  title: 'AI Agent CLI Tool',
                  category: 'Autonomous Agents & CLI Tools',
                  description: 'Built a CLI-based agent that generates production-ready code through an iterative think → act → observe loop. Implemented tool-calling for file creation, directory management, and command execution, with live terminal feedback for each step.',
                  tags: ['Node.js', 'JavaScript', 'REST APIs', 'Tool Calling'],
                  github: 'https://github.com/Jenil1905/forge',
                },
              ].map((project, idx) => (
                <div
                  key={idx}
                  className="group bg-white/70 hover:bg-white p-6 rounded-2xl border border-[#0b0f19]/10 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[11px] text-[#0b0f19]/50 uppercase tracking-widest">
                      {project.category} {project.date && `• ${project.date}`}
                    </span>
                    <span className="font-mono text-xs text-[#0b0f19]/30">0{idx + 1}</span>
                  </div>
                  <h3 className="font-sans text-xl font-normal text-[#0b0f19]">
                    {project.title}
                  </h3>
                  <p className="font-sans text-sm text-[#0b0f19]/75 mt-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-[#edf5ff] text-[#0b0f19]/80 font-mono text-[10px] px-2.5 py-1 rounded-md border border-[#0b0f19]/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#0b0f19]/5 flex justify-end">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs uppercase tracking-wider text-[#0b0f19] font-medium flex items-center gap-1.5 hover:underline"
                    >
                      Repository Link (GitHub) <span>↗</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DRAWER CONTENT: PROCESS */}
        {activeDrawer === 'process' && (
          <div className="space-y-8 animate-fadeIn">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#0b0f19]/60">
                Methodology &amp; Architecture
              </span>
              <h2 className="font-sans font-light text-4xl md:text-5xl tracking-tight text-[#0b0f19] mt-2">
                Engineering Approach
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: 'Distributed System Primitives',
                  desc: 'Building containerized, scalable backend services utilizing consistent hashing rings across Redis nodes and cache-aside patterns with PostgreSQL.',
                },
                {
                  step: '02',
                  title: 'RAG & Vector Search Pipelines',
                  desc: 'Recursive document chunking, dense vector embedding via Hugging Face, and Qdrant Cloud semantic indexing for hallucination-free document Q&A.',
                },
                {
                  step: '03',
                  title: 'Agentic Tool-Calling Loops',
                  desc: 'Designing iterative think → act → observe loops for autonomous CLI and web agents with structured tool execution and directory management.',
                },
                {
                  step: '04',
                  title: 'Production Open Source Contribution',
                  desc: 'Extending community React codebases through standard fork/feature-branch/PR workflows, code review cycles, and pattern adaptation.',
                },
              ].map((p) => (
                <div key={p.step} className="flex gap-6 p-5 bg-white/60 rounded-xl border border-[#0b0f19]/10">
                  <div className="font-mono text-2xl font-light text-[#0b0f19]/40">{p.step}</div>
                  <div>
                    <h3 className="font-sans text-lg font-medium text-[#0b0f19]">{p.title}</h3>
                    <p className="font-sans text-sm text-[#0b0f19]/75 mt-1 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DRAWER CONTENT: EXPERIMENTS */}
        {activeDrawer === 'experiments' && (
          <div className="space-y-8 animate-fadeIn">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#0b0f19]/60">
                R&amp;D &amp; Creative Code
              </span>
              <h2 className="font-sans font-light text-4xl md:text-5xl tracking-tight text-[#0b0f19] mt-2">
                Experiments Lab
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  id: 'EXP-01',
                  name: 'Consistent Hashing Redis Ring',
                  tech: 'Redis, Spring Boot, PostgreSQL',
                  desc: 'Simulation of dynamic node additions and cache distribution across partitioned Redis instances with in-memory write aggregation.',
                  link: 'https://github.com/Jenil1905/Search--Typeahead',
                },
                {
                  id: 'EXP-02',
                  name: 'Qdrant Vector RAG Pipeline',
                  tech: 'Hugging Face, Qdrant Cloud, Render',
                  desc: 'Benchmarking context window accuracy vs chunk overlap for strict document-grounded RAG responses.',
                  link: 'https://github.com/Jenil1905/GenAi-Assignment-4',
                },
                {
                  id: 'EXP-03',
                  name: 'AI Agent CLI Loop',
                  tech: 'Node.js, Tool Calling, REST APIs',
                  desc: 'Autonomous CLI agent executing think-act-observe iteration cycles with terminal feedback.',
                  link: 'https://github.com/Jenil1905/forge',
                },
              ].map((exp) => (
                <div key={exp.id} className="p-5 bg-white/60 rounded-xl border border-[#0b0f19]/10">
                  <div className="flex justify-between items-center font-mono text-[11px] text-[#0b0f19]/50">
                    <span>{exp.id}</span>
                    <span>{exp.tech}</span>
                  </div>
                  <h3 className="font-sans text-lg font-normal text-[#0b0f19] mt-2">{exp.name}</h3>
                  <p className="font-sans text-sm text-[#0b0f19]/75 mt-1">{exp.desc}</p>
                  <div className="mt-3 text-right">
                    <a href={exp.link} target="_blank" rel="noreferrer" className="font-mono text-xs text-[#0b0f19] hover:underline">
                      GitHub Repo ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DRAWER CONTENT: CONTACT / LET'S TALK */}
        {activeDrawer === 'contact' && (
          <div className="space-y-8 animate-fadeIn">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#0b0f19]/60">
                Get In Touch
              </span>
              <h2 className="font-sans font-light text-4xl md:text-5xl tracking-tight text-[#0b0f19] mt-2">
                Contact Jenil
              </h2>
              <p className="font-sans text-base text-[#0b0f19]/75 mt-2">
                Based in Bangalore, India. Open for software engineering roles, open source collaborations, and high-impact projects.
              </p>
            </div>

            <div className="bg-white/80 p-6 rounded-2xl border border-[#0b0f19]/10 space-y-5">
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[#0b0f19]/60 mb-1">
                  Email
                </label>
                <a
                  href="mailto:langaliyajenil@gmail.com"
                  className="font-mono text-base md:text-lg text-[#0b0f19] underline font-medium hover:text-[#0b0f19]/80"
                >
                  langaliyajenil@gmail.com
                </a>
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[#0b0f19]/60 mb-1">
                  Phone
                </label>
                <a
                  href="tel:+919429506350"
                  className="font-mono text-base text-[#0b0f19] font-medium"
                >
                  +91 9429506350
                </a>
              </div>

              <div className="pt-4 border-t border-[#0b0f19]/10">
                <label className="block font-mono text-xs uppercase tracking-wider text-[#0b0f19]/60 mb-2">
                  Social Channels
                </label>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com/Jenil1905"
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs bg-[#0b0f19] text-[#edf5ff] px-5 py-2.5 rounded-full hover:bg-[#0b0f19]/85 transition"
                  >
                    GitHub (Jenil1905) ↗
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jenil-langaliya-0b072331a/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs bg-white text-[#0b0f19] border border-[#0b0f19]/20 px-5 py-2.5 rounded-full hover:bg-[#edf5ff] transition"
                  >
                    LinkedIn Profile ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer in Drawer */}
        <div className="mt-auto pt-8 border-t border-[#0b0f19]/10 flex items-center justify-between font-mono text-[11px] text-[#0b0f19]/50">
          <span>JENIL LANGALIYA © {new Date().getFullYear()}</span>
          <span>BANGALORE, INDIA</span>
        </div>
      </div>
    </div>
  );
}
