import React from 'react';
const Github = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const Linkedin = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const Footer = () => {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const LeetCodeIcon = () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.877 9.88a1.376 1.376 0 0 0 0 1.943l1.94 1.94a1.376 1.376 0 0 0 1.943 0l9.877-9.88a1.377 1.377 0 0 0 0-1.943l-1.94-1.94a1.372 1.372 0 0 0-.982-.414zm6.756 7.84a1.374 1.374 0 0 0-.982.414l-3.988 3.987a1.376 1.376 0 0 0 0 1.943l1.94 1.94a1.376 1.376 0 0 0 1.943 0l3.988-3.987a1.376 1.376 0 0 0 0-1.943l-1.94-1.94a1.373 1.373 0 0 0-.961-.414zM12.44 9.06a1.343 1.343 0 0 0-.962.396l-7.41 7.41a1.376 1.376 0 0 0 0 1.943l1.94 1.94a1.376 1.376 0 0 0 1.943 0l7.41-7.41a1.376 1.376 0 0 0 0-1.943l-1.94-1.94a1.343 1.343 0 0 0-.962-.396z" />
    </svg>
  );

  const HackerRankIcon = () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M12 0a12 12 0 1 0 12 12A12.015 12.015 0 0 0 12 0zm5.2 16.8h-10.4V7.2h10.4v9.6zM9.6 14.4h4.8v-4.8H9.6v4.8z" />
    </svg>
  );

  return (
    <footer className="py-12 border-t border-white/5 dark:border-black/5 bg-[#0a0d17] text-slate-400 dark:text-slate-600 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo / Brand */}
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold tracking-wider bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              ANUBHAV PANDEY
            </h4>
            <p className="text-xs text-slate-500">Aspiring Java Full Stack Developer</p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-indigo-400 transition-colors">
              Home
            </a>
            <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-indigo-400 transition-colors">
              About
            </a>
            <a href="#skills" onClick={(e) => handleLinkClick(e, '#skills')} className="hover:text-indigo-400 transition-colors">
              Skills
            </a>
            <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')} className="hover:text-indigo-400 transition-colors">
              Projects
            </a>
            <a href="#education" onClick={(e) => handleLinkClick(e, '#education')} className="hover:text-indigo-400 transition-colors">
              Education
            </a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-indigo-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/anubhavv8784"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/3 dark:bg-black/3 hover:bg-white/5 border border-white/5 text-slate-300 dark:text-slate-400 hover:text-indigo-400 dark:hover:text-indigo-400 hover:scale-105 transition-all duration-300"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/anubhav-pandey-696bb32a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/3 dark:bg-black/3 hover:bg-white/5 border border-white/5 text-slate-300 dark:text-slate-400 hover:text-indigo-400 dark:hover:text-indigo-400 hover:scale-105 transition-all duration-300"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://leetcode.com/u/anubhav__8784/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/3 dark:bg-black/3 hover:bg-white/5 border border-white/5 text-slate-300 dark:text-slate-400 hover:text-amber-500 hover:scale-105 transition-all duration-300"
              title="LeetCode"
            >
              <LeetCodeIcon />
            </a>
            <a
              href="https://www.hackerrank.com/profile/anubhav_pandey_3"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/3 dark:bg-black/3 hover:bg-white/5 border border-white/5 text-slate-300 dark:text-slate-400 hover:text-emerald-500 hover:scale-105 transition-all duration-300"
              title="HackerRank"
            >
              <HackerRankIcon />
            </a>
          </div>

        </div>

        {/* Footer Credit line */}
        <div className="mt-8 pt-8 border-t border-white/5 dark:border-black/5 text-center text-xs text-slate-550 dark:text-slate-655">
          Made with <span className="text-rose-500 animate-pulse">❤</span> using React, Tailwind CSS v4, and AOS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
