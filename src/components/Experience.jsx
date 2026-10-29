import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="py-32 md:py-44 bg-[#E8E4D8] text-[#161817] relative">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-12">
          <span className="w-1.5 h-1.5 rounded-full bg-[#203B38]" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#686D68]">
            02 / EXPERIENCE
          </span>
        </div>

        {/* Thin Dark-Green Divider Above Content */}
        <div className="w-full h-[1px] bg-[#203B38]/20 mb-16" />

        {/* Experience Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left: Large Year */}
          <div className="lg:col-span-4">
            <span className="text-6xl sm:text-7xl md:text-8xl font-normal tracking-tight text-[#203B38]/25 font-mono">
              2025
            </span>
          </div>

          {/* Right: Role, Company & Bullets */}
          <div className="lg:col-span-8 flex flex-col items-start">
            <h3 className="text-2xl sm:text-3xl font-normal text-[#161817] tracking-tight mb-2">
              MERN STACK INTERN
            </h3>
            <div className="flex items-center gap-3 text-sm text-[#203B38] font-semibold mb-8">
              <span>Skill First Labs</span>
              <span>•</span>
              <span>July 2025</span>
            </div>

            <ul className="space-y-4 text-base text-[#686D68] leading-relaxed font-normal max-w-2xl mb-8">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#203B38] mt-2.5 flex-shrink-0" />
                <span>
                  Developed and maintained full-stack web application components using the MERN stack (MongoDB, Express.js, React, Node.js).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#203B38] mt-2.5 flex-shrink-0" />
                <span>
                  Built and integrated backend REST APIs with frontend React components for end-to-end feature delivery.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#203B38] mt-2.5 flex-shrink-0" />
                <span>
                  Gained hands-on experience with database design, API development, and client-server architecture in a production-style codebase.
                </span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-[#203B38]">
              <span>#MongoDB</span>
              <span>#Express.js</span>
              <span>#React</span>
              <span>#Node.js</span>
              <span>#REST_APIs</span>
            </div>
          </div>
        </motion.div>

        {/* Thin Dark-Green Bottom Divider */}
        <div className="w-full h-[1px] bg-[#203B38]/20 mt-16" />
      </div>
    </section>
  );
}


