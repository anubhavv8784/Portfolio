import React from 'react';
import { Calendar, GraduationCap, Award, MapPin } from 'lucide-react';

const Education = () => {
  const educationTimeline = [
    {
      degree: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
      institution: 'GLA University, Mathura',
      location: 'Mathura, Uttar Pradesh',
      duration: 'August 2023 – June 2027 (Expected)',
      gradeType: 'Aggregate Score',
      gradeValue: '67.6%',
      description: 'Focusing on Core Computer Science domains including Data Structures & Algorithms, OOP, Database Systems (SQL/NoSQL), Operating Systems, Software Engineering, and Web Technologies. Part of active technical and cultural groups.'
    },
    {
      degree: 'Intermediate (12th Grade - Senior Secondary)',
      institution: 'Deva Public School, Ayodhya',
      location: 'Ayodhya, Uttar Pradesh',
      duration: 'April 2021 – May 2023',
      gradeType: 'CBSE Score',
      gradeValue: '63.0%',
      description: 'Completed schooling in Science Stream with Mathematics, Physics, Chemistry, and English. Strong engagement in coding fundamentals, problem solving, and science exhibitions.'
    },
    {
      degree: 'High School (10th Grade - Matriculation)',
      institution: 'Deva Public School, Ayodhya',
      location: 'Ayodhya, Uttar Pradesh',
      duration: 'April 2019 – May 2021',
      gradeType: 'CBSE Score',
      gradeValue: '76.5%',
      description: 'Studied general curriculum including Mathematics, Science, Social Sciences, English, and Information Technology. Developed interest in basic computer applications and programming logic.'
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 dark:text-slate-900">
            Education <span className="gradient-text">Timeline</span>
          </h2>
          <div className="mt-2 h-1 w-12 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 dark:text-slate-600 max-w-xl mx-auto">
            My academic progression and details of institutions I have attended.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-indigo-500/20 dark:border-indigo-600/10 ml-4 md:ml-32 space-y-12">
          {educationTimeline.map((item, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-12"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Timeline Node Point */}
              <div className="absolute -left-[6px] top-6 h-3 w-3 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366f1] z-10" />

              {/* Timeline Duration (Visible on larger viewports at the left) */}
              <div className="hidden md:block absolute -left-[140px] top-4 w-[110px] text-right text-xs text-slate-400 dark:text-slate-600 font-bold uppercase tracking-wider">
                {item.duration.split(' – ')[1] || item.duration}
              </div>

              {/* Education Card */}
              <div className="glass-card rounded-3xl p-6 md:p-8 text-left space-y-4 shadow-xl">
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="space-y-1">
                    <span className="text-xs text-indigo-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                      {item.gradeType}: {item.gradeValue}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-slate-100 dark:text-slate-900 leading-snug">
                      {item.degree}
                    </h3>
                  </div>
                </div>

                {/* Institution Details */}
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-400 dark:text-slate-600">
                  <span className="flex items-center gap-1 font-semibold text-slate-300 dark:text-slate-700">
                    {item.institution}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {item.location}
                  </span>
                  <span className="flex items-center gap-1 sm:hidden">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {item.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-350 dark:text-slate-700 leading-relaxed pt-2 border-t border-white/5 dark:border-black/5">
                  {item.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
