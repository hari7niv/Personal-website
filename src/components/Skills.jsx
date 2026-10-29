import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: 'LANGUAGES',
    items: ['Java (JDK 21)', 'Python', 'TypeScript', 'SQL', 'JavaScript']
  },
  {
    category: 'BACKEND',
    items: ['Spring Boot', 'Apache Kafka', 'Redis', 'Fastify', 'Socket.io', 'BullMQ']
  },
  {
    category: 'AI / SYSTEMS',
    items: ['PyTorch', 'Transformers', 'bitsandbytes', 'Quantization', 'FastAPI', 'SHAP']
  },
  {
    category: 'TOOLS & DEVOPS',
    items: ['Docker', 'Git', 'GitHub', 'Judge0', 'Postman', 'Linux']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 md:py-44 bg-[#F5F3EC] relative">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-12">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C7F36A]" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#686D68]">
            03 / TECHNICAL SKILLS
          </span>
        </div>

        {/* Thin Sage Divider */}
        <div className="w-full h-[1px] bg-[#C9D8C3] mb-16" />

        {/* Typographic Groups Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7F36A]" />
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#203B38]">
                  {group.category}
                </h3>
              </div>

              <ul className="space-y-3">
                {group.items.map((skill) => (
                  <li key={skill} className="text-lg text-[#161817] font-normal tracking-tight flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C9D8C3]" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Thin Bottom Divider */}
        <div className="w-full h-[1px] bg-[#161817]/10 mt-16" />
      </div>
    </section>
  );
}


