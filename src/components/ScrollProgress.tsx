"use client";

import { motion, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Progress bar at top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transform-origin-left z-50"
        style={{ scaleX }}
      />

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-slate-800/90 backdrop-blur-sm border border-slate-600/50 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700/90 transition-all duration-300 shadow-lg z-[55] group"
        title="Scroll to top"
      >
        {/* Animated arrow */}
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:scale-110 transition-transform"
          >
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </motion.div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.button>

      {/* Reading progress indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 left-8 z-[55]"
      >
        <div className="bg-slate-800/90 backdrop-blur-sm border border-slate-600/50 rounded-lg px-3 py-2 shadow-lg">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <motion.span
              key={scrollYProgress.get()}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              className="text-xs text-slate-300 font-medium"
            >
              {Math.round(scrollYProgress.get() * 100)}%
            </motion.span>
          </div>
        </div>
      </motion.div> */}
    </>
  );
};

export default ScrollProgress;
