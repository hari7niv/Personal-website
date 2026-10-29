import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Code2, Award, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const statIcons = [Layers, Code2, GraduationCap, Award];

export default function Stats() {
  const { stats } = portfolioData;

  return (
    <section className="py-10 border-y border-[var(--border-color)] bg-[var(--bg-secondary)]/50">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-[var(--border-color)]"
        >
          {stats.map((stat, index) => {
            const IconComponent = statIcons[index] || Award;
            return (
              <div
                key={stat.label}
                className={`flex items-center gap-4 ${index !== 0 ? 'pt-6 md:pt-0 md:pl-8' : ''}`}
              >
                <div className="p-3 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-xs flex-shrink-0">
                  <IconComponent className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <div>
                  <div className="text-3xl font-bold font-serif-heading tracking-tight text-[var(--text-primary)] leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-[var(--text-primary)] mt-1.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-[var(--text-muted)] font-sans-body">
                    {stat.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
