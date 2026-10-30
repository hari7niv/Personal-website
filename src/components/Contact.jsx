import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 md:py-48 bg-[#203B38] text-[#F5F3EC] relative overflow-hidden">
      {/* Decorative Botanical Branch Fragment in Bottom-Right Corner */}
      <div className="absolute right-0 bottom-0 w-64 h-64 sm:w-80 sm:h-80 opacity-20 pointer-events-none">
        <svg
          className="w-full h-full text-[#C7F36A]"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 180 190 C 170 140, 140 100, 90 70 C 60 50, 30 35, 10 20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path d="M 140 135 C 120 120, 100 115, 80 112" stroke="currentColor" strokeWidth="1" />
          <path d="M 100 80 C 120 70, 140 65, 160 62" stroke="currentColor" strokeWidth="1" />
          <path d="M 140 135 C 145 130, 148 135, 143 138 Z" fill="currentColor" />
          <path d="M 100 80 C 105 75, 108 80, 103 83 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-[1320px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex flex-col items-start max-w-4xl"
        >
          {/* Section Label */}
          <div className="flex items-center gap-2 mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-[#C7F36A] shadow-[0_0_8px_rgba(199,243,106,0.9)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9D8C3]">
              05 / CONTACT
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-normal text-[#F5F3EC] tracking-[-0.02em] leading-[1.12] sm:leading-[1.1] mb-6 sm:mb-8">
            Let's build <br />
            something meaningful.
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#C9D8C3] font-normal leading-relaxed mb-8 sm:mb-12 max-w-2xl">
            Software engineering, backend systems, AI/ML and technically ambitious products.
          </p>

          {/* Direct Email Link */}
          <div className="mb-8 sm:mb-12 max-w-full overflow-hidden">
            <a
              href="mailto:harinivedhanp@gmail.com"
              className="text-xl sm:text-3xl md:text-4xl font-normal text-[#C7F36A] hover:opacity-80 transition-opacity underline decoration-[#C7F36A]/30 underline-offset-8 break-all sm:break-normal"
            >
              harinivedhanp@gmail.com
            </a>
          </div>

          {/* Links Row */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm font-semibold tracking-wider text-[#F5F3EC] uppercase">
            <a
              href="https://github.com/hari7niv"
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link hover:text-[#C7F36A]"
            >
              <span>GitHub</span>
              <span className="editorial-link-arrow">→</span>
            </a>
            <a
              href="https://www.linkedin.com/in/hari-nivedhan-bb3041316/"
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link hover:text-[#C7F36A]"
            >
              <span>LinkedIn</span>
              <span className="editorial-link-arrow">→</span>
            </a>
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link hover:text-[#C7F36A] text-[#C7F36A]"
            >
              <span>Download Resume</span>
              <span className="editorial-link-arrow">↗</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


