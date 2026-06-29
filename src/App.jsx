import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowUp } from 'lucide-react';

// Component Imports
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import GithubStats from './components/GithubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Initialize AOS scroll animations
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  // Theme Syncing
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Back to Top Button visibility
  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScrollVisibility);
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* 1. Loading Preloader */}
      <Preloader finishLoading={() => setIsLoading(false)} />

      {/* Main Layout (Visible once loading completes or loaded in background) */}
      <div className={`min-h-screen transition-opacity duration-500 ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        
        {/* Animated Background Shapes */}
        <div className="bg-gradient-shapes">
          <div className="bg-shape bg-shape-1" />
          <div className="bg-shape bg-shape-2" />
          <div className="bg-shape bg-shape-3" />
        </div>

        {/* 2. Navigation */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        {/* Sections */}
        <main className="relative">
          {/* Hero */}
          <Hero />
          
          {/* About Me */}
          <About />
          
          {/* Skills */}
          <Skills />
          
          {/* Projects */}
          <Projects />
          
          {/* Education */}
          <Education />
          
          {/* Certifications */}
          <Certifications />
          
          {/* Github Stats */}
          <GithubStats />
          
          {/* Contact */}
          <Contact />
        </main>

        {/* 3. Footer */}
        <Footer />

        {/* Floating Back to Top Button */}
        <button
          onClick={handleScrollToTop}
          className={`fixed bottom-6 right-6 p-3.5 z-40 rounded-xl glass-panel text-slate-300 dark:text-slate-400 hover:text-indigo-400 hover:scale-110 active:scale-95 shadow-2xl transition-all duration-500 cursor-pointer ${
            showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </>
  );
}

export default App;
