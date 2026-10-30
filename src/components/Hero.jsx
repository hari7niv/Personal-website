import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="relative bg-[#F5F3EC] pt-32 pb-20 sm:pt-40 sm:pb-28 md:pt-52 md:pb-36 lg:pt-60 lg:pb-44 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
        {/* Left 65% Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 flex flex-col items-start"
        >
          {/* Label with tiny Lime Green Accent Dot */}
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C7F36A] shadow-[0_0_8px_rgba(199,243,106,0.8)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#686D68]">
              SOFTWARE ENGINEERING × AI / ML
            </span>
          </div>

          {/* Large Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-normal tracking-[-0.03em] leading-[1.12] sm:leading-[1.08] text-[#161817] mb-6 sm:mb-8 max-w-3xl">
            Building software <br className="hidden sm:inline" />
            that scales beyond <br className="hidden sm:inline" />
            the demo.
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-[#686D68] font-normal max-w-xl leading-relaxed mb-8 sm:mb-10">
            Software engineer focused on backend systems, AI/ML and full-stack products.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-8">
            <a
              href="#projects"
              className="editorial-link text-xs uppercase tracking-widest text-[#161817] font-semibold group flex items-center gap-2"
            >
              <span>VIEW SELECTED WORK</span>
              <span className="editorial-link-arrow text-base">→</span>
            </a>

            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link text-xs uppercase tracking-widest text-[#203B38] font-semibold group flex items-center gap-2 border border-[#203B38]/20 px-4 py-2.5 rounded-full hover:bg-[#203B38] hover:text-[#F5F3EC] transition-all duration-300"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>DOWNLOAD RESUME</span>
            </a>
          </div>
        </motion.div>

        {/* Right 35% Minimal Botanical Artwork */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
            {/* Muted Sage Organic Circle Backdrop */}
            <div className="absolute inset-0 rounded-full bg-[#C9D8C3] opacity-90 transition-transform duration-700 hover:scale-[1.02]" />

            {/* Small Lime Accent Dot on edge */}
            <div className="absolute top-4 right-8 w-4 h-4 rounded-full bg-[#C7F36A] shadow-[0_0_12px_rgba(199,243,106,0.9)] z-20" />

            {/* Botanical Tree Artwork SVG */}
            <svg
              className="relative z-10 w-full h-full p-6 text-[#161817]"
              viewBox="0 0 300 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 148 245 C 148 190, 150 140, 142 95 C 138 70, 130 50, 125 35"
                stroke="#161817"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
              <path
                d="M 145 180 C 120 160, 95 152, 70 148"
                stroke="#161817"
                strokeWidth="1.25"
                strokeLinecap="round"
              />
              <path
                d="M 147 145 C 175 130, 205 120, 235 115"
                stroke="#161817"
                strokeWidth="1.25"
                strokeLinecap="round"
              />
              <path
                d="M 142 110 C 122 92, 102 85, 80 82"
                stroke="#161817"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M 135 75 C 155 60, 178 52, 200 48"
                stroke="#161817"
                strokeWidth="1"
                strokeLinecap="round"
              />

              {/* Delicate Botanical Leaves */}
              <path d="M 70 148 C 65 142, 60 145, 63 150 C 68 153, 70 148, 70 148 Z" fill="#203B38" />
              <path d="M 95 152 C 90 144, 84 146, 88 152 C 92 156, 95 152, 95 152 Z" fill="#161817" />
              <path d="M 120 160 C 114 150, 108 153, 112 160 C 117 164, 120 160, 120 160 Z" fill="#161817" />
              <path d="M 235 115 C 242 110, 245 116, 239 120 C 234 122, 235 115, 235 115 Z" fill="#203B38" />
              <path d="M 205 120 C 212 114, 216 120, 210 124 C 205 126, 205 120, 205 120 Z" fill="#161817" />
              <path d="M 175 130 C 182 122, 186 128, 180 133 C 175 135, 175 130, 175 130 Z" fill="#161817" />
              <path d="M 80 82 C 73 76, 70 82, 75 86 C 79 88, 80 82, 80 82 Z" fill="#203B38" />
              <path d="M 200 48 C 208 43, 212 48, 205 52 C 200 54, 200 48, 200 48 Z" fill="#203B38" />
              <path d="M 125 35 C 122 26, 130 24, 132 32 C 132 37, 125 35, 125 35 Z" fill="#161817" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


