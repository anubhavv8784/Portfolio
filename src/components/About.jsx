import React from 'react';
import { User, Target, GraduationCap, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 dark:text-slate-900">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-2 h-1 w-12 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 dark:text-slate-600 max-w-xl mx-auto">
            Get to know my professional background, career objectives, and what drives me as a software developer.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Quick Introduction & Stats */}
          <div className="md:col-span-5 flex flex-col justify-between" data-aos="fade-right" data-aos-delay="100">
            <div className="glass-panel rounded-3xl p-8 flex-1 flex flex-col justify-between space-y-6">
              
              {/* Introduction Card */}
              <div className="space-y-4">
                <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-2xl w-fit">
                  <User className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-100 dark:text-slate-900">Who I Am</h3>
                <p className="text-sm text-slate-455 dark:text-slate-555 leading-relaxed">
                  I am a final-year Computer Science and Engineering student at GLA University, Mathura. Throughout my academic journey, I have developed a strong passion for solving algorithmic problems and designing database architectures.
                </p>
                <p className="text-sm text-slate-455 dark:text-slate-555 leading-relaxed">
                  With a solid foundation in Java, OOP, and relational databases, I strive to write clean, maintainable, and efficient code. I enjoy building applications that solve real-life problems.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5 dark:border-black/5">
                <div className="p-4 rounded-2xl bg-white/3 dark:bg-black/3 text-center border border-white/5 dark:border-black/5">
                  <p className="text-2xl font-bold gradient-text">300+</p>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-600">LeetCode Solved</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/3 dark:bg-black/3 text-center border border-white/5 dark:border-black/5">
                  <p className="text-2xl font-bold gradient-text">5+</p>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-600">Projects Built</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Focus Areas & Career Objective */}
          <div className="md:col-span-7 space-y-6" data-aos="fade-left" data-aos-delay="200">
            
            {/* Career Objective Card */}
            <div className="glass-card rounded-3xl p-6 flex items-start space-x-4">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-2xl">
                <Target className="w-6 h-6" />
              </div>
              <div className="text-left space-y-1">
                <h4 className="text-lg font-bold text-slate-100 dark:text-slate-900">Career Objective</h4>
                <p className="text-sm text-slate-400 dark:text-slate-600 leading-relaxed">
                  Seeking an opportunity in a progressive organization to leverage my skills in Java Full Stack Development. Aiming to contribute to robust backend architectures using Java, MVC principles, and database management, while constantly refining my software engineering skills in real-world scenarios.
                </p>
              </div>
            </div>

            {/* Core Training Details Card */}
            <div className="glass-card rounded-3xl p-6 flex items-start space-x-4">
              <div className="p-3 bg-purple-500/10 text-purple-400 rounded-2xl">
                <Code2 className="w-6 h-6" />
              </div>
              <div className="text-left space-y-1">
                <h4 className="text-lg font-bold text-slate-100 dark:text-slate-900">Specialized Training</h4>
                <p className="text-sm text-slate-400 dark:text-slate-600 leading-relaxed">
                  Completed a **Full Stack Development using Java** training program (Job-Oriented Value-Added Course) at GLA University. This intensive course provided hands-on experience in Java Core, JDBC, Servlets, JSP, and MySQL database integrations following the MVC architecture.
                </p>
              </div>
            </div>

            {/* Academic Focus Card */}
            <div className="glass-card rounded-3xl p-6 flex items-start space-x-4">
              <div className="p-3 bg-amber-500/10 text-amber-400 rounded-2xl">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="text-left space-y-1">
                <h4 className="text-lg font-bold text-slate-100 dark:text-slate-900">Academic Focus</h4>
                <p className="text-sm text-slate-400 dark:text-slate-600 leading-relaxed">
                  Currently pursuing a Bachelor of Technology in Computer Science & Engineering. Deeply focused on key academic modules including Data Structures & Algorithms, Object-Oriented Programming (OOP), Relational Database Management Systems (RDBMS/SQL), and modern web-architectures.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
