import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const THEME_STYLES = [
  // 0: Soft Sand (#E8E4D8)
  {
    bg: 'bg-[#E8E4D8]',
    textPrimary: 'text-[#161817]',
    textMuted: 'text-[#686D68]',
    category: 'text-[#203B38]',
    dot: 'bg-[#C7F36A]',
    slash: 'text-[#686D68]/40',
    tech: 'text-[#203B38]',
    button: 'text-[#161817]'
  },
  // 1: Deep Forest (#203B38)
  {
    bg: 'bg-[#203B38] text-[#F5F3EC] relative overflow-hidden',
    textPrimary: 'text-[#F5F3EC]',
    textMuted: 'text-[#C9D8C3]',
    category: 'text-[#C7F36A]',
    dot: 'bg-[#C7F36A]',
    slash: 'text-[#C9D8C3]/40',
    tech: 'text-[#C7F36A]',
    button: 'text-[#C7F36A]'
  },
  // 2: Warm Ivory (#F5F3EC)
  {
    bg: 'bg-[#F5F3EC]',
    textPrimary: 'text-[#161817]',
    textMuted: 'text-[#686D68]',
    category: 'text-[#203B38]',
    dot: 'bg-[#C7F36A]',
    slash: 'text-[#686D68]/40',
    tech: 'text-[#203B38]',
    button: 'text-[#161817]'
  }
];

// Project Visual Showcase Component
const ProjectVisual = memo(function ProjectVisual({ visual, onSelect }) {
  if (!visual) return null;

  if (visual.variant === 'abstract-blobs') {
    return (
      <div
        onClick={onSelect}
        className="relative w-full aspect-[4/3] bg-[#F5F3EC] border border-[#161817]/10 rounded-lg p-10 flex flex-col justify-between cursor-pointer group hover:border-[#161817]/30 transition-all duration-500 overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#203B38] opacity-90 transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute top-8 right-8 w-3 h-3 rounded-full bg-[#C7F36A] z-20" />

        <div className="relative z-10 font-mono text-[10px] uppercase tracking-[0.3em] text-[#F5F3EC] mix-blend-difference space-y-1 select-none">
          {visual.lines?.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>

        <div className="relative z-10 self-end font-mono text-[10px] uppercase tracking-[0.25em] text-[#F5F3EC]/75 select-none">
          {visual.caption}
        </div>
      </div>
    );
  }

  if (visual.variant === 'metrics-card') {
    return (
      <div
        onClick={onSelect}
        className="relative w-full aspect-[4/3] bg-[#496966]/40 border border-[#F5F3EC]/15 rounded-lg p-8 sm:p-10 flex flex-col justify-between cursor-pointer group hover:border-[#C7F36A]/50 transition-all duration-500 overflow-hidden"
      >
        <div className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full bg-[#C9D8C3]/20 blur-xl pointer-events-none" />
        <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-[#C7F36A] shadow-[0_0_10px_rgba(199,243,106,0.8)] z-20" />

        <div className="relative z-10">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C7F36A] block mb-2">
            {visual.kicker}
          </span>
          <div className="text-3xl font-normal tracking-tight text-[#F5F3EC]">
            {visual.title}
          </div>
        </div>

        <div className="relative z-10 font-mono text-[11px] text-[#F5F3EC]/80 space-y-1.5 border-l border-[#C7F36A]/40 pl-4 py-2">
          {visual.items?.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </div>
      </div>
    );
  }

  if (visual.variant === 'editorial-block') {
    return (
      <div
        onClick={onSelect}
        className="relative w-full aspect-[4/3] bg-[#C9D8C3] border border-[#161817]/10 rounded-lg p-10 flex flex-col justify-between cursor-pointer group hover:border-[#161817]/30 transition-all duration-500 overflow-hidden"
      >
        <div className="relative z-10 font-mono text-[10px] uppercase tracking-[0.25em] text-[#203B38]">
          {visual.kicker}
        </div>

        <div className="relative z-10 text-4xl sm:text-5xl font-normal tracking-tight text-[#161817] leading-none">
          {visual.title}
        </div>

        <div className="relative z-10 font-mono text-[11px] text-[#203B38] border-t border-[#203B38]/20 pt-4 flex justify-between">
          <span>{visual.footerLeft}</span>
          <span>{visual.footerRight}</span>
        </div>
      </div>
    );
  }

  return null;
});

// Single Project Row Component
const ProjectRow = memo(function ProjectRow({ project, index, isLast, onSelect }) {
  const theme = THEME_STYLES[index % 3];
  const isReversed = index % 2 === 1;
  const paddingClass = index === 0 ? 'pb-32 md:pb-44' : isLast ? 'py-32 md:pb-44' : 'py-32 md:py-44';
  const techList = project.tech || project.techStack || [];

  return (
    <div className={`${theme.bg} ${paddingClass}`}>
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Text Side */}
          <div className={`lg:col-span-6 flex flex-col items-start ${isReversed ? 'lg:order-2' : ''}`}>
            <div className="flex items-center gap-2.5 mb-6">
              <span className={`w-2 h-2 rounded-full ${theme.dot}`} />
              <span className={`text-xs font-mono font-medium ${theme.textMuted}`}>{project.number}</span>
              <span className={`text-xs font-mono ${theme.slash}`}>/</span>
              <span className={`text-xs uppercase tracking-widest font-semibold ${theme.category}`}>
                {project.category}
              </span>
            </div>

            <h3 className={`text-3xl sm:text-4xl md:text-5xl font-normal ${theme.textPrimary} tracking-tight mb-6 leading-tight`}>
              {project.title}
            </h3>

            <p className={`text-base ${theme.textMuted} leading-relaxed mb-8 font-normal max-w-xl`}>
              {project.description || project.summary}
            </p>

            <div className={`flex flex-wrap gap-x-4 gap-y-2 mb-8 text-xs font-mono ${theme.tech}`}>
              {techList.map((t) => (
                <span key={t}>#{t}</span>
              ))}
            </div>

            <button
              type="button"
              onClick={onSelect}
              className={`editorial-link text-xs uppercase tracking-widest ${theme.button} font-semibold flex items-center gap-2 group cursor-pointer`}
            >
              <span>VIEW CASE STUDY</span>
              <span className="editorial-link-arrow text-base">→</span>
            </button>
          </div>

          {/* Visual Side */}
          <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : ''}`}>
            <ProjectVisual visual={project.visual} onSelect={onSelect} />
          </div>
        </motion.div>
      </div>
    </div>
  );
});

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = portfolioData.projects || [];

  return (
    <section id="projects" className="relative">
      {/* Section Header */}
      <div className="bg-[#E8E4D8] py-24 md:py-28">
        <div className="max-w-[1320px] mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-end justify-between border-b border-[#161817]/10 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#203B38]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#686D68]">
                SELECTED WORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#161817] tracking-tight">
              Projects Built
            </h2>
          </div>
          <p className="text-sm text-[#686D68] max-w-md mt-4 md:mt-0 font-normal">
            Six production-grade systems engineered across LLM optimization, high-throughput distributed architectures, and real-time platforms.
          </p>
        </div>
      </div>

      {/* Projects List */}
      {projects.map((project, index) => (
        <ProjectRow
          key={project.id}
          project={project}
          index={index}
          isLast={index === projects.length - 1}
          onSelect={() => setSelectedProject(project)}
        />
      ))}

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
