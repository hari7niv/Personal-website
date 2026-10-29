import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-[#F5F3EC]/15 bg-[#203B38] text-[#F5F3EC]">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-[#C9D8C3]">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
          <span className="font-semibold text-[#F5F3EC]">Hari Nivedhan P</span>
          <span className="hidden sm:inline text-[#C9D8C3]/30">•</span>
          <span>Software Engineering × AI / ML</span>
          <span className="hidden sm:inline text-[#C9D8C3]/30">•</span>
          <span>Chennai, India</span>
        </div>

        <div className="flex flex-wrap items-center gap-6 font-medium text-[#F5F3EC]">
          <a
            href="https://github.com/hari7niv"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C7F36A] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/hari-nivedhan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C7F36A] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:harinivedhanp@gmail.com"
            className="hover:text-[#C7F36A] transition-colors"
          >
            Email
          </a>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C7F36A]" />
          <span className="text-[#C9D8C3] font-normal">© 2026</span>
        </div>
      </div>
    </footer>
  );
}


