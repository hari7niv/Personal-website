import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 md:py-44 relative bg-[#F5F3EC] overflow-hidden">
      {/* Subtle Faint Sage Organic Motif (10-15% opacity) */}
      <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#C9D8C3]/20 blur-2xl pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-8 md:mb-12">
          <span className="w-1.5 h-1.5 rounded-full bg-[#203B38]" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#686D68]">
            01 / ABOUT
          </span>
        </div>

        {/* Thin Sage Divider Above Content */}
        <div className="w-full h-[1px] bg-[#C9D8C3] mb-10 md:mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-20">
          {/* Left Column: Heading & Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-start"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#161817] leading-[1.12] mb-6">
              Engineer at heart. <br />
              Problem solver by nature.
            </h2>

            {/* Thin Sage line under heading */}
            <div className="w-24 h-[2px] bg-[#C9D8C3] mb-10" />

            <div className="space-y-6 text-base md:text-lg text-[#686D68] leading-relaxed font-normal max-w-2xl">
              <p>
                I'm a B.Tech Information Technology student focused on building reliable software across backend engineering, AI/ML and full-stack development.
              </p>
              <p>
                My work sits at the intersection of APIs, data, machine learning and the systems that connect them.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Minimal Editorial Metadata */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col gap-10 justify-start"
          >
            {/* Metadata Item 1 */}
            <div className="border-b border-[#161817]/10 pb-8">
              <span className="block text-xs uppercase tracking-widest text-[#203B38] font-semibold mb-3">
                BASED IN
              </span>
              <p className="text-lg text-[#161817] font-normal">
                Chennai, India
              </p>
            </div>

            {/* Metadata Item 2 */}
            <div className="border-b border-[#161817]/10 pb-8">
              <span className="block text-xs uppercase tracking-widest text-[#203B38] font-semibold mb-3">
                EDUCATION
              </span>
              <p className="text-lg text-[#161817] font-normal leading-snug">
                B.Tech Information Technology <br />
                <span className="text-[#686D68]">Saveetha Engineering College</span> <br />
                <span className="text-sm text-[#686D68]">2024–2028</span>
              </p>
            </div>

            {/* Metadata Item 3 */}
            <div className="border-b border-[#161817]/10 pb-8">
              <span className="block text-xs uppercase tracking-widest text-[#203B38] font-semibold mb-3">
                FOCUS
              </span>
              <p className="text-lg text-[#161817] font-normal leading-relaxed">
                Backend Engineering <br />
                AI / ML <br />
                Full-Stack Development
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


