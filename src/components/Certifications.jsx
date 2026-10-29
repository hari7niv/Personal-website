import React from 'react';
import { motion } from 'framer-motion';

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 md:py-44 bg-[#E8E4D8] text-[#161817] relative">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-12">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C7F36A]" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#686D68]">
            04 / CREDENTIALS & ACADEMICS
          </span>
        </div>

        {/* Thin Dark-Green Divider */}
        <div className="w-full h-[1px] bg-[#203B38]/20 mb-16" />

        {/* Two Editorial Columns: Education on Left, Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 mb-20">
          {/* Left Column: Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col gap-8"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C7F36A]" />
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#203B38]">
                EDUCATION
              </h3>
            </div>

            <div className="border-b border-[#203B38]/15 pb-8">
              <span className="text-xs font-mono text-[#686D68] block mb-2">2024–2028</span>
              <h4 className="text-2xl font-normal text-[#161817] tracking-tight mb-2">
                B.Tech in Information Technology
              </h4>
              <p className="text-sm text-[#203B38] font-medium mb-3">
                Saveetha Engineering College • Thandalam, Chennai
              </p>
              <p className="text-xs text-[#686D68] leading-relaxed">
                Core coursework in Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), and Operating Systems.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col gap-8"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C7F36A]" />
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#203B38]">
                CERTIFICATIONS
              </h3>
            </div>

            {/* Cert 1 */}
            <div className="border-b border-[#203B38]/15 pb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#203B38] mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7F36A]" />
                <span>Oracle Corporation</span>
              </div>
              <h4 className="text-xl font-normal text-[#161817] tracking-tight mb-2">
                Oracle Certified Professional: Java SE 21 Developer
              </h4>
              <p className="text-xs text-[#686D68] leading-relaxed">
                Expert competency in Java SE 21, object-oriented design, concurrency, memory management, and modern language features.
              </p>
            </div>

            {/* Cert 2 */}
            <div className="border-b border-[#203B38]/15 pb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#203B38] mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7F36A]" />
                <span>NPTEL</span>
              </div>
              <h4 className="text-xl font-normal text-[#161817] tracking-tight mb-2">
                Programming, Data Structures and Algorithms Using Python
              </h4>
              <p className="text-xs text-[#686D68] leading-relaxed">
                Fundamental and advanced data structures, algorithmic design strategies, graph theory, and Python implementation.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ACHIEVEMENTS STRIP: Distinct Colored Background Strips */}
        <div className="pt-12 border-t border-[#203B38]/20">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#203B38] mb-8">
            VERIFIED BENCHMARKS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Strip 1: Pale Sage (#C9D8C3) */}
            <div className="p-8 rounded-lg bg-[#C9D8C3] text-[#161817] flex flex-col justify-between">
              <div className="text-5xl font-mono tracking-tight mb-2">
                400+
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#203B38]">
                LeetCode Problems Solved
              </div>
            </div>

            {/* Strip 2: Soft Sand / Warm Ivory (#F5F3EC) */}
            <div className="p-8 rounded-lg bg-[#F5F3EC] text-[#161817] border border-[#161817]/10 flex flex-col justify-between">
              <div className="text-5xl font-mono tracking-tight mb-2">
                8.4
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#686D68]">
                Academic CGPA (B.Tech IT)
              </div>
            </div>

            {/* Strip 3: Muted Teal (#496966) */}
            <div className="p-8 rounded-lg bg-[#496966] text-[#F5F3EC] flex flex-col justify-between">
              <div className="text-4xl font-mono tracking-tight mb-2 text-[#C7F36A]">
                JDK 21
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#C9D8C3]">
                Oracle Certified Professional
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


