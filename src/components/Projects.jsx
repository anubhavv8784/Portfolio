import React from 'react';
import { ExternalLink, ShieldCheck, Zap } from 'lucide-react';
import chatImg from '../assets/chat.png';
import parkingImg from '../assets/parking.png';

const Github = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const Projects = () => {
  const projectsList = [
    {
      title: 'Real-Time Chat Application',
      image: chatImg,
      techStack: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
      description: 'Developed a real-time chat application featuring instant messaging capabilities and safe user authentication processes. Crafted a responsive user interface with dynamic page updates and micro-animations for an elevated user experience.',
      github: 'https://github.com/anubhavv8784',
      demo: 'https://github.com/anubhavv8784',
      highlight: 'Instant Messaging & Real-Time Sync'
    },
    {
      title: 'Smart Parking System',
      image: parkingImg,
      techStack: ['Node.js', 'Express.js', 'MongoDB', 'JavaScript'],
      description: 'Engineered a smart parking management system that tracks real-time slot availability and provides immediate booking features. Integrated automated alerts and automatic slot release functions to optimize parking flow and improve efficiency.',
      github: 'https://github.com/anubhavv8784',
      demo: 'https://github.com/anubhavv8784',
      highlight: 'Automated Slot Release & Real-time Bookings'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Background shape */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-600/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 dark:text-slate-900">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="mt-2 h-1 w-12 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 dark:text-slate-600 max-w-xl mx-auto">
            A showcase of my recent project work, detailing the technical architecture, problem statement, and features.
          </p>
        </div>

        {/* Projects Stack */}
        <div className="space-y-16">
          {projectsList.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                data-aos={isEven ? 'fade-right' : 'fade-left'}
                data-aos-duration="1000"
              >
                {/* Project Image Frame (lg:col-span-7) */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'} group relative`}>
                  {/* Glowing background */}
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Image container */}
                  <div className="relative overflow-hidden rounded-3xl border border-white/8 dark:border-black/8 glass-panel aspect-[16/9] shadow-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                    />
                    
                    {/* Floating badge */}
                    <div className="absolute top-4 left-4 bg-[#0a0f1d]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 dark:border-black/10 flex items-center space-x-1.5 shadow-lg">
                      <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                      <span className="text-[10px] uppercase font-bold text-slate-200 tracking-wider">
                        {project.highlight}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Info (lg:col-span-5) */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2 text-left' : 'lg:order-1 lg:text-right text-left'} space-y-5`}>
                  {/* Stack Badges */}
                  <div className={`flex flex-wrap gap-2 ${isEven ? 'justify-start' : 'lg:justify-end justify-start'}`}>
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-indigo-500/10 dark:bg-indigo-600/5 text-indigo-400 dark:text-indigo-600 text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 dark:text-slate-900">{project.title}</h3>
                  
                  {/* Description Card */}
                  <div className="p-5 sm:p-6 rounded-2xl glass-panel border-white/5 dark:border-black/5 text-slate-350 dark:text-slate-700 text-sm leading-relaxed shadow-lg">
                    {project.description}
                  </div>

                  {/* Links */}
                  <div className={`flex flex-wrap gap-4 pt-2 ${isEven ? 'justify-start' : 'lg:justify-end justify-start'}`}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-white/5 dark:bg-black/5 border border-white/10 dark:border-black/10 text-slate-200 dark:text-slate-800 font-semibold hover:border-indigo-500/40 hover:text-indigo-400 dark:hover:text-indigo-600 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-xs">Source Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold hover:from-indigo-700 hover:to-cyan-600 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md shadow-indigo-500/10"
                    >
                      <span className="text-xs">Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
