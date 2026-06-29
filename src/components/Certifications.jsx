import React from 'react';
import { Award, ShieldCheck, BadgeCheck, Code2 } from 'lucide-react';

const Certifications = () => {
  const certs = [
    {
      title: 'Full Stack Java Training Certification',
      issuer: 'KVCH in partnership with GLA University',
      date: 'July 2025',
      icon: <Code2 className="w-6 h-6 text-indigo-400" />,
      credentialId: 'Java-FS-2025',
      description: 'Rigorous training covering Core Java, database integration with JDBC, Servlets, JSP architecture, front-end web components, and end-to-end full stack project deployment.'
    },
    {
      title: 'Digital Accessibility in Mobile Apps',
      issuer: 'Infosys Springboard',
      date: 'October 2024',
      icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
      credentialId: 'INF-DA-82937',
      description: 'Acquired core competencies in WCAG 2.1 accessibility guidelines, screen reader accessibility compliance, color contrast standards, and developing inclusive mobile application interfaces.'
    },
    {
      title: 'Gold Badge in Python Programming',
      issuer: 'HackerRank',
      date: 'Ongoing / Verified',
      icon: <Award className="w-6 h-6 text-emerald-400" />,
      credentialId: 'HackerRank-Python-Gold',
      description: 'Attained a 5-star gold badge rating in Python programming by solving complex database, algorithm, and coding challenges on the HackerRank platform.'
    },
    {
      title: '300+ DSA Problems Badge',
      issuer: 'LeetCode platform',
      date: 'Ongoing / Verified',
      icon: <BadgeCheck className="w-6 h-6 text-amber-400" />,
      credentialId: 'leetcode.com/u/anubhav__8784',
      description: 'Solved over 300 data structure and algorithm problems (covering arrays, dynamic programming, trees, and graphs) demonstrating strong problem-solving skills.'
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 dark:text-slate-900">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <div className="mt-2 h-1 w-12 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 dark:text-slate-600 max-w-xl mx-auto">
            Official credentials, badges, and professional course achievements.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certs.map((cert, index) => (
            <div
              key={cert.title}
              className="glass-card rounded-3xl p-6 md:p-8 text-left space-y-4 relative overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Subtle background card glow */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-indigo-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Header */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/5 dark:bg-black/5 rounded-2xl">
                  {cert.icon}
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400 dark:text-slate-650 uppercase font-bold tracking-widest">
                    {cert.issuer}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-100 dark:text-slate-900">
                    {cert.title}
                  </h3>
                </div>
              </div>

              {/* Body Description */}
              <p className="text-xs sm:text-sm text-slate-350 dark:text-slate-700 leading-relaxed">
                {cert.description}
              </p>

              {/* Footer Meta Details */}
              <div className="flex justify-between items-center pt-4 border-t border-white/5 dark:border-black/5 text-xs text-slate-450 dark:text-slate-550 font-medium">
                <span>Issued: {cert.date}</span>
                <span className="text-indigo-400 dark:text-indigo-650 font-semibold font-mono">
                  {cert.credentialId.startsWith('http') ? (
                    <a href={cert.credentialId} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Verify Link
                    </a>
                  ) : (
                    `ID: ${cert.credentialId}`
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
