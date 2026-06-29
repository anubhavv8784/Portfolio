import React from 'react';
import { Code, Award, Flame, Star, BookOpen, Layers } from 'lucide-react';

const Github = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const GithubStats = () => {
  // LeetCode Distribution
  const leetCodeData = {
    totalSolved: 312,
    easy: { solved: 110, total: 800, color: 'text-emerald-400', progress: 45 },
    medium: { solved: 172, total: 1600, color: 'text-amber-500', progress: 30 },
    hard: { solved: 30, total: 700, color: 'text-rose-500', progress: 12 }
  };

  const githubMetrics = [
    { label: 'Total Repositories', value: '14', icon: <BookOpen className="w-4 h-4 text-cyan-400" /> },
    { label: 'Commits (2025-26)', value: '620+', icon: <Flame className="w-4 h-4 text-orange-500" /> },
    { label: 'GitHub Stars', value: '12', icon: <Star className="w-4 h-4 text-amber-400" /> },
    { label: 'Coding Languages', value: '3', icon: <Code className="w-4 h-4 text-indigo-400" /> }
  ];

  return (
    <section id="github-stats" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 dark:text-slate-900">
            Coding <span className="gradient-text">Statistics</span>
          </h2>
          <div className="mt-2 h-1 w-12 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 dark:text-slate-600 max-w-xl mx-auto">
            A real-time snapshot of my problem-solving consistency and project contributions on LeetCode and GitHub.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LeetCode Profile Metrics (lg:col-span-7) */}
          <div className="lg:col-span-7" data-aos="fade-right">
            <div className="glass-panel rounded-3xl p-6 md:p-8 h-full flex flex-col justify-between space-y-6">
              
              {/* LeetCode Header */}
              <div className="flex items-center justify-between border-b border-white/5 dark:border-black/5 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-amber-500/10 text-amber-500 rounded-2xl">
                    {/* Leetcode Logo Representation */}
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.877 9.88a1.376 1.376 0 0 0 0 1.943l1.94 1.94a1.376 1.376 0 0 0 1.943 0l9.877-9.88a1.377 1.377 0 0 0 0-1.943l-1.94-1.94a1.372 1.372 0 0 0-.982-.414zm6.756 7.84a1.374 1.374 0 0 0-.982.414l-3.988 3.987a1.376 1.376 0 0 0 0 1.943l1.94 1.94a1.376 1.376 0 0 0 1.943 0l3.988-3.987a1.376 1.376 0 0 0 0-1.943l-1.94-1.94a1.373 1.373 0 0 0-.961-.414zM12.44 9.06a1.343 1.343 0 0 0-.962.396l-7.41 7.41a1.376 1.376 0 0 0 0 1.943l1.94 1.94a1.376 1.376 0 0 0 1.943 0l7.41-7.41a1.376 1.376 0 0 0 0-1.943l-1.94-1.94a1.343 1.343 0 0 0-.962-.396z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-slate-100 dark:text-slate-900">LeetCode Activity</h3>
                    <p className="text-xs text-slate-400 dark:text-slate-650">Profile: @anubhav__8784</p>
                  </div>
                </div>

                <a
                  href="https://leetcode.com/u/anubhav__8784/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-wider"
                >
                  View Profile
                </a>
              </div>

              {/* Solved stats container */}
              <div className="flex flex-col sm:flex-row items-center justify-around gap-6 py-4">
                
                {/* SVG Progress Circle */}
                <div className="relative flex items-center justify-center w-36 h-36">
                  {/* Outer circle */}
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="72" cy="72" r="60" className="stroke-white/5 dark:stroke-black/5 fill-transparent" strokeWidth="8" />
                    <circle cx="72" cy="72" r="60" className="stroke-indigo-500 fill-transparent" strokeWidth="8"
                            strokeDasharray={376.8} strokeDashoffset={376.8 * (1 - 312/1200)} strokeLinecap="round" />
                  </svg>
                  
                  {/* Centered text */}
                  <div className="absolute flex flex-col items-center">
                    <span className="text-3xl font-extrabold text-slate-100 dark:text-slate-900">{leetCodeData.totalSolved}</span>
                    <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">Solved</span>
                  </div>
                </div>

                {/* Difficulty Bars */}
                <div className="flex-1 w-full space-y-4 max-w-[280px]">
                  
                  {/* Easy */}
                  <div className="space-y-1 text-left">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-slate-300 dark:text-slate-700">Easy</span>
                      <span className="font-bold text-emerald-400">{leetCodeData.easy.solved}<span className="text-[10px] text-slate-500 font-normal"> / {leetCodeData.easy.total}</span></span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 dark:bg-black/5 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${leetCodeData.easy.progress}%` }} />
                    </div>
                  </div>

                  {/* Medium */}
                  <div className="space-y-1 text-left">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-slate-300 dark:text-slate-700">Medium</span>
                      <span className="font-bold text-amber-500">{leetCodeData.medium.solved}<span className="text-[10px] text-slate-500 font-normal"> / {leetCodeData.medium.total}</span></span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 dark:bg-black/5 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: `${leetCodeData.medium.progress}%` }} />
                    </div>
                  </div>

                  {/* Hard */}
                  <div className="space-y-1 text-left">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-slate-300 dark:text-slate-700">Hard</span>
                      <span className="font-bold text-rose-500">{leetCodeData.hard.solved}<span className="text-[10px] text-slate-500 font-normal"> / {leetCodeData.hard.total}</span></span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 dark:bg-black/5 rounded-full overflow-hidden">
                      <div className="h-full bg-rose-500 rounded-full" style={{ width: `${leetCodeData.hard.progress}%` }} />
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* GitHub Metrics (lg:col-span-5) */}
          <div className="lg:col-span-5" data-aos="fade-left" data-aos-delay="200">
            <div className="glass-panel rounded-3xl p-6 md:p-8 h-full flex flex-col justify-between space-y-6">
              
              {/* GitHub Header */}
              <div className="flex items-center justify-between border-b border-white/5 dark:border-black/5 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-2xl">
                    <Github className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-slate-100 dark:text-slate-900">GitHub Pulse</h3>
                    <p className="text-xs text-slate-400 dark:text-slate-655">Profile: @anubhavv8784</p>
                  </div>
                </div>

                <a
                  href="https://github.com/anubhavv8784"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-wider"
                >
                  View Profile
                </a>
              </div>

              {/* GitHub Grid Metrics */}
              <div className="grid grid-cols-2 gap-4 my-2">
                {githubMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-4 rounded-2xl bg-white/3 dark:bg-black/3 border border-white/5 dark:border-black/5 text-left space-y-2 hover:border-indigo-500/20 transition-all duration-300"
                  >
                    <div className="p-2 bg-white/5 dark:bg-black/5 rounded-lg w-fit">
                      {metric.icon}
                    </div>
                    <div>
                      <p className="text-xl font-bold text-slate-200 dark:text-slate-800">{metric.value}</p>
                      <p className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold">{metric.label}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GithubStats;
