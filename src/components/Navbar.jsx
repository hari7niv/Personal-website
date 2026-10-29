import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Work', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F5F3EC]/90 backdrop-blur-md border-b border-[#161817]/10 py-5'
          : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Brand Name */}
        <a
          href="#home"
          className="text-base md:text-lg font-medium tracking-tight text-[#161817] hover:opacity-75 transition-opacity"
        >
          Hari Nivedhan P
        </a>

        {/* Right: Navigation Items & Status */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-[#686D68] hover:text-[#161817] transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="w-[1px] h-4 bg-[#161817]/10" />

          {/* Status Indicator & Resume */}
          <div className="flex items-center gap-4">
            <a
              href="/Hari_Nivedhan_Resume.pdf"
              download="Hari_Nivedhan_Resume.pdf"
              className="text-xs uppercase tracking-widest text-[#161817] hover:text-[#203B38] font-semibold border border-[#161817]/15 hover:border-[#161817]/40 px-3 py-1.5 rounded-full transition-colors flex items-center gap-1.5"
            >
              <span>Resume</span>
              <span className="text-[10px]">↓</span>
            </a>

            <div className="flex items-center gap-2 text-xs font-medium text-[#203B38]">
              <span className="w-2 h-2 rounded-full bg-[#C7F36A] animate-pulse inline-block shadow-[0_0_10px_rgba(199,243,106,0.9)]" />
              <span>Available for opportunities</span>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-xs uppercase tracking-wider font-semibold text-[#161817]"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#F5F3EC] border-b border-[#161817]/10 px-6 py-6"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base text-[#161817] font-medium"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/Hari_Nivedhan_Resume.pdf"
                download="Hari_Nivedhan_Resume.pdf"
                className="text-base text-[#161817] font-medium flex items-center justify-between"
              >
                <span>Download Resume</span>
                <span className="text-sm">↓</span>
              </a>
              <div className="pt-3 border-t border-[#161817]/10 flex items-center gap-2 text-xs text-[#203B38]">
                <span className="w-2 h-2 rounded-full bg-[#C7F36A]" />
                <span>Available for opportunities</span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


