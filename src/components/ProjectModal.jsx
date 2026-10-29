import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    // 1. Pause Lenis smooth scrolling so wheel events are not intercepted
    if (window.__lenis) {
      window.__lenis.stop();
    }

    // 2. Lock background window / body scroll with scrollbar compensation to avoid layout shift
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // 3. Close on Escape key press
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      // Restore background scroll, padding and resume Lenis
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.paddingRight = originalPaddingRight;

      if (window.__lenis) {
        window.__lenis.start();
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy, title, category, githubUrl, highlights = [] } = project;
  const techList = project.tech || project.techStack || [];

  return (
    <div
      onClick={onClose}
      data-lenis-prevent
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 editorial-modal-backdrop overflow-hidden"
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
        data-lenis-prevent
        className="bg-[#F5F3EC] border border-[#161817]/15 rounded-lg max-w-4xl w-full max-h-[88vh] overflow-y-auto p-6 sm:p-10 md:p-12 shadow-2xl relative my-auto text-[#161817] overscroll-contain"
        style={{ overscrollBehavior: 'contain' }}
      >
        {/* Sticky Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="sticky top-0 float-right -mt-2 -mr-2 sm:mt-0 sm:mr-0 z-30 text-xs font-mono uppercase tracking-widest text-[#686D68] hover:text-[#161817] bg-[#F5F3EC]/90 backdrop-blur-sm px-2 py-1 rounded border border-[#161817]/10 transition-colors cursor-pointer"
          aria-label="Close Case Study"
        >
          [ CLOSE ESC ]
        </button>

        {/* Modal Header */}
        <div className="mb-12 pr-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#203B38] block mb-3">
            {category}
          </span>
          <h2 id="project-modal-title" className="text-3xl sm:text-4xl font-normal text-[#161817] tracking-tight leading-tight mb-4">
            {title}
          </h2>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-[#686D68]">
            {techList.map((t) => (
              <span key={t}>#{t}</span>
            ))}
          </div>
        </div>

        {/* Thin Divider */}
        <div className="w-full h-[1px] bg-[#161817]/10 mb-12" />

        {/* Case Study Content Sections */}
        <div className="space-y-12">
          {/* THE PROBLEM */}
          {caseStudy?.problem && (
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#686D68] block mb-3">
                THE PROBLEM
              </span>
              <p className="text-base text-[#161817] leading-relaxed font-normal">
                {caseStudy.problem}
              </p>
            </div>
          )}

          {/* APPROACH & SOLUTION */}
          {caseStudy?.solution && (
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#686D68] block mb-3">
                APPROACH & SOLUTION
              </span>
              <p className="text-base text-[#161817] leading-relaxed font-normal">
                {caseStudy.solution}
              </p>
            </div>
          )}

          {/* SYSTEM ARCHITECTURE OVERVIEW */}
          {caseStudy?.architecture && caseStudy.architecture.length > 0 && (
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#686D68] block mb-4">
                SYSTEM ARCHITECTURE OVERVIEW
              </span>
              <div className="space-y-3 font-mono text-xs text-[#161817]">
                {caseStudy.architecture.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 border-b border-[#161817]/5 pb-2">
                    <span className="text-[#203B38] font-semibold">0{idx + 1}.</span>
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* KEY ENGINEERING HIGHLIGHTS */}
          {highlights.length > 0 && (
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#686D68] block mb-4">
                KEY ENGINEERING DECISIONS
              </span>
              <ul className="space-y-3 text-sm text-[#161817] leading-relaxed">
                {highlights.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#203B38] mt-2 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CHALLENGES & LESSONS */}
          {(caseStudy?.challenges || caseStudy?.lessons) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#161817]/10">
              {caseStudy.challenges && (
                <div>
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#686D68] block mb-2">
                    TECHNICAL CHALLENGES
                  </span>
                  <p className="text-xs text-[#686D68] leading-relaxed">
                    {caseStudy.challenges}
                  </p>
                </div>
              )}
              {caseStudy.lessons && (
                <div>
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#686D68] block mb-2">
                    RESULT & LEARNINGS
                  </span>
                  <p className="text-xs text-[#686D68] leading-relaxed">
                    {caseStudy.lessons}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="mt-12 pt-8 border-t border-[#161817]/10 flex items-center justify-between">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link text-xs uppercase tracking-widest font-semibold text-[#161817]"
            >
              <span>VIEW SOURCE CODE ON GITHUB</span>
              <span className="editorial-link-arrow text-sm">→</span>
            </a>
          )}
          <button
            type="button"
            onClick={onClose}
            className="text-xs uppercase tracking-widest text-[#686D68] hover:text-[#161817] font-medium cursor-pointer"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}
