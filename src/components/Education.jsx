import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 md:py-32 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="badge-editorial mb-3">ACADEMIC FOUNDATION</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-heading tracking-tight text-[var(--text-primary)]">
            Education
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-xl mt-3">
            Academic rigor combined with fundamental computer science coursework.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="editorial-card rounded-3xl p-8 sm:p-10 border border-[var(--border-color)] relative"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--border-color)] pb-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                  <GraduationCap className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-serif-heading text-[var(--text-primary)]">
                    {education.institution}
                  </h3>
                  <p className="text-sm font-semibold text-[var(--accent)] mt-0.5">
                    {education.degree}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] flex items-center gap-1.5 mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {education.location}
                  </p>
                </div>
              </div>

              {/* CGPA Badge */}
              <div className="flex flex-col items-start sm:items-end">
                <div className="px-4 py-2 rounded-2xl bg-[var(--accent-light)] border border-[var(--accent)]/30 text-center">
                  <div className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold">CGPA</div>
                  <div className="text-2xl font-bold font-serif-heading text-[var(--accent)]">{education.cgpa}</div>
                </div>
                <span className="text-xs text-[var(--text-muted)] font-mono mt-2 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {education.duration}
                </span>
              </div>
            </div>

            {/* Relevant Coursework */}
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[var(--text-muted)] mb-4">
                <BookOpen className="w-4 h-4 text-[var(--accent)]" />
                <span>Relevant Core Coursework</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {education.coursework.map((course) => (
                  <div
                    key={course}
                    className="p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-xs font-semibold text-[var(--text-primary)] flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
