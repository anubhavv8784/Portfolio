import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Mail, ArrowRight, Download, Award, Code, Globe } from 'lucide-react';
import profileImg from '../assets/image.png';
import resumePdf from '../assets/resume.pdf';

const Github = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const Linkedin = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Java Full Stack Developer',
        'B.Tech CSE Final Year Student',
        'Problem Solver',
        'Core Java Enthusiast'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1200,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Custom SVGs for LeetCode and HackerRank
  const LeetCodeIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.877 9.88a1.376 1.376 0 0 0 0 1.943l1.94 1.94a1.376 1.376 0 0 0 1.943 0l9.877-9.88a1.377 1.377 0 0 0 0-1.943l-1.94-1.94a1.372 1.372 0 0 0-.982-.414zm6.756 7.84a1.374 1.374 0 0 0-.982.414l-3.988 3.987a1.376 1.376 0 0 0 0 1.943l1.94 1.94a1.376 1.376 0 0 0 1.943 0l3.988-3.987a1.376 1.376 0 0 0 0-1.943l-1.94-1.94a1.373 1.373 0 0 0-.961-.414zM12.44 9.06a1.343 1.343 0 0 0-.962.396l-7.41 7.41a1.376 1.376 0 0 0 0 1.943l1.94 1.94a1.376 1.376 0 0 0 1.943 0l7.41-7.41a1.376 1.376 0 0 0 0-1.943l-1.94-1.94a1.343 1.343 0 0 0-.962-.396z" />
    </svg>
  );

  const HackerRankIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M12 0a12 12 0 1 0 12 12A12.015 12.015 0 0 0 12 0zm5.2 16.8h-10.4V7.2h10.4v9.6zM9.6 14.4h4.8v-4.8H9.6v4.8z" />
    </svg>
  );

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Info */}
          <div className="md:col-span-7 space-y-6 text-left" data-aos="fade-right" data-aos-duration="1000">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass-panel border-indigo-500/25 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Available for Opportunities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-100 dark:text-slate-900 leading-tight">
              Hey, I'm <br />
              <span className="gradient-text font-extrabold">Anubhav Pandey</span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-medium text-slate-300 dark:text-slate-700 flex items-center min-h-[40px]">
              <span className="text-indigo-400 font-bold mr-2">&gt;</span>
              <span ref={el}></span>
            </h2>

            <p className="text-slate-400 dark:text-slate-600 max-w-xl text-base sm:text-lg leading-relaxed">
              Final-year B.Tech CSE student at GLA University, Mathura. Passionate Java Full Stack Developer specializing in crafting robust backend systems and modern reactive user interfaces.
            </p>

            {/* Social Buttons */}
            <div className="flex flex-wrap gap-3 items-center pt-2">
              <a
                href="https://github.com/anubhavv8784"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-panel text-slate-300 dark:text-slate-700 hover:text-indigo-400 dark:hover:text-indigo-600 hover:scale-110 transition-all duration-300"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/anubhav-pandey-696bb32a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-panel text-slate-300 dark:text-slate-700 hover:text-indigo-400 dark:hover:text-indigo-600 hover:scale-110 transition-all duration-300"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://leetcode.com/u/anubhav__8784/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-panel text-slate-300 dark:text-slate-700 hover:text-amber-500 hover:scale-110 transition-all duration-300"
                title="LeetCode"
              >
                <LeetCodeIcon />
              </a>
              <a
                href="https://www.hackerrank.com/profile/anubhav_pandey_3"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-panel text-slate-300 dark:text-slate-700 hover:text-emerald-500 hover:scale-110 transition-all duration-300"
                title="HackerRank"
              >
                <HackerRankIcon />
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={resumePdf}
                download="Anubhav_Pandey_Resume.pdf"
                className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-700 hover:to-cyan-600 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="flex items-center space-x-2 px-6 py-3 rounded-xl glass-panel text-slate-200 dark:text-slate-800 font-semibold border-white/10 dark:border-black/10 hover:border-indigo-500/40 hover:text-indigo-400 dark:hover:text-indigo-600 transition-all duration-300 hover:scale-105"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Hero Right Card (Profile Portrait) */}
          <div className="md:col-span-5 flex justify-center items-center" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <div className="relative group">
              {/* Outer Glowing Accents */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 rounded-3xl opacity-35 blur-lg group-hover:opacity-60 transition-all duration-500"></div>
              
              {/* Profile Card Wrapper */}
              <div className="relative glass-panel rounded-3xl p-4 w-[280px] sm:w-[320px] aspect-[3/4] flex flex-col justify-between overflow-hidden">
                
                {/* Photo Frame */}
                <div className="relative w-full h-[80%] rounded-2xl overflow-hidden border border-white/5 dark:border-black/5 bg-[#0f121d]">
                  <img
                    src={profileImg}
                    alt="Anubhav Pandey"
                    className="w-full h-full object-cover object-top scale-102 group-hover:scale-106 transition-transform duration-500 ease-out"
                  />
                  {/* Glass overlay details */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent p-3">
                    <p className="text-xs text-indigo-300 font-semibold uppercase tracking-wider">GLA University</p>
                  </div>
                </div>

                {/* Sub info */}
                <div className="h-[20%] flex flex-col justify-center pt-2">
                  <div className="flex justify-between items-center px-1">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-100 dark:text-slate-900">Anubhav Pandey</h3>
                      <p className="text-[10px] text-slate-400 dark:text-slate-600">Mathura, Uttar Pradesh</p>
                    </div>
                    
                    {/* Tiny stats representation */}
                    <div className="flex items-center space-x-1.5 text-xs text-amber-400 font-semibold bg-amber-400/10 px-2 py-1 rounded-lg">
                      <Code className="w-3.5 h-3.5" />
                      <span>300+ DSA</span>
                    </div>
                  </div>
                </div>

                {/* Interactive floating badges */}
                <div className="absolute top-8 -right-6 bg-[#0c101d]/90 border border-white/10 dark:border-black/10 backdrop-blur-md rounded-2xl px-3 py-2 flex items-center space-x-2 shadow-2xl animate-float">
                  <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-slate-300 dark:text-slate-700 leading-tight">Java Full Stack</p>
                    <p className="text-[8px] text-indigo-300">Trained</p>
                  </div>
                </div>

                <div className="absolute bottom-20 -left-6 bg-[#0c101d]/90 border border-white/10 dark:border-black/10 backdrop-blur-md rounded-2xl px-3 py-2 flex items-center space-x-2 shadow-2xl animate-float" style={{ animationDelay: '2s' }}>
                  <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-slate-300 dark:text-slate-700 leading-tight">Web Developer</p>
                    <p className="text-[8px] text-emerald-300">Vite & React</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
