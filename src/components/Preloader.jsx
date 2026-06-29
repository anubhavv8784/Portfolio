import React, { useEffect, useState } from 'react';

const Preloader = ({ finishLoading }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      const finishTimer = setTimeout(() => {
        finishLoading();
      }, 600); // match duration-600
      return () => clearTimeout(finishTimer);
    }, 1500);

    return () => clearTimeout(timer);
  }, [finishLoading]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0b0f19] transition-all duration-700 ease-in-out ${
        fadeOut ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        {/* Logo/Initial Grid */}
        <div className="relative mb-6 inline-flex items-center justify-center">
          <div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 p-[1.5px] animate-pulse">
            <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-[#0b0f19]">
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent">
                AP
              </span>
            </div>
          </div>
          {/* Decorative glowing backdrops */}
          <div className="absolute inset-0 -z-10 bg-indigo-600/30 blur-xl rounded-full"></div>
        </div>

        {/* Text */}
        <h1 className="text-xl font-medium tracking-wider text-slate-200 uppercase">
          Anubhav Pandey
        </h1>
        <p className="mt-2 text-sm text-slate-500">Portfolio Loading...</p>

        {/* Bouncing Loader Dots */}
        <div className="mt-4 flex items-center justify-center space-x-1.5">
          <div className="h-2 w-2 rounded-full bg-indigo-500 loading-dot"></div>
          <div className="h-2 w-2 rounded-full bg-cyan-400 loading-dot"></div>
          <div className="h-2 w-2 rounded-full bg-purple-500 loading-dot"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
