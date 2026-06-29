import React from 'react';
import { Database, Layout, Terminal, Code, Settings, Server, GitBranch, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Terminal className="w-5 h-5 text-indigo-400" />,
      skills: [
        { name: 'Java', level: 'Core & Advanced' },
        { name: 'SQL', level: 'Relational Queries' },
        { name: 'JavaScript', level: 'ES6+ Logic' },
        { name: 'HTML5 / CSS3', level: 'Responsive Layouts' }
      ]
    },
    {
      title: 'Frameworks & Frontend',
      icon: <Layout className="w-5 h-5 text-cyan-400" />,
      skills: [
        { name: 'React.js', level: 'Single Page Apps' },
        { name: 'Node.js', level: 'Server Runtime' },
        { name: 'Express.js', level: 'REST APIs' },
        { name: 'Tailwind CSS', level: 'Modern Styling' }
      ]
    },
    {
      title: 'Databases & Tools',
      icon: <Database className="w-5 h-5 text-purple-400" />,
      skills: [
        { name: 'MySQL', level: 'RDBMS / Queries' },
        { name: 'MongoDB', level: 'NoSQL / Documents' },
        { name: 'Git & GitHub', level: 'Version Control' },
        { name: 'Postman', level: 'API Testing' }
      ]
    },
    {
      title: 'Core CS Concepts',
      icon: <Cpu className="w-5 h-5 text-amber-400" />,
      skills: [
        { name: 'Data Structures (DSA)', level: 'Problem Solving' },
        { name: 'OOP Principles', level: 'Class Design' },
        { name: 'DBMS Modules', level: 'Relational Theory' },
        { name: 'Digital Accessibility', level: 'WCAG Standard' }
      ]
    }
  ];

  const deploymentTools = [
    'Netlify', 'Vercel', 'Render', 'VS Code', 'IntelliJ IDEA'
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 dark:text-slate-900">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="mt-2 h-1 w-12 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 dark:text-slate-600 max-w-xl mx-auto">
            A comprehensive list of programming languages, libraries, tools, and technical concepts I specialize in.
          </p>
        </div>

        {/* Skill Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.title}
              className="glass-panel rounded-3xl p-6 md:p-8 space-y-6 text-left"
              data-aos="fade-up"
              data-aos-delay={catIdx * 100}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 border-b border-white/5 dark:border-black/5 pb-4">
                <div className="p-2.5 rounded-xl bg-white/5 dark:bg-black/5">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-100 dark:text-slate-900">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="relative p-4 rounded-2xl glass-card text-left flex flex-col justify-between h-20 overflow-hidden"
                  >
                    {/* Hover Glow Layer */}
                    <div className="skill-card-glow" />
                    
                    <span className="text-sm font-semibold text-slate-200 dark:text-slate-800">{skill.name}</span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-500 font-medium">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Deployments & IDEs Section */}
        <div
          className="mt-12 glass-panel rounded-3xl p-6 text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-600 mr-2 flex items-center gap-1.5">
              <Settings className="w-4 h-4 text-cyan-400" /> Additional Tools & Platforms:
            </span>
            {deploymentTools.map((tool) => (
              <span
                key={tool}
                className="px-3.5 py-1.5 rounded-xl bg-white/3 dark:bg-black/3 border border-white/5 dark:border-black/5 text-xs text-slate-350 dark:text-slate-700 font-medium hover:text-indigo-400 dark:hover:text-indigo-600 transition-colors duration-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
