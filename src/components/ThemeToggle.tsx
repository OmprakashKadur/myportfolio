"use client";

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon } from 'lucide-react';

const ThemeToggle = () => {
  useEffect(() => {
    // Always apply dark theme
    const root = document.documentElement;
    root.classList.add('dark');
    root.style.colorScheme = 'dark';
  }, []);

  return (
    <div className="fixed top-4 right-4 z-[60]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        className="relative"
      >
        {/* Dark theme indicator */}
        <div className="w-12 h-12 bg-slate-800/90 backdrop-blur-sm border border-slate-600/50 rounded-full flex items-center justify-center text-slate-300 shadow-lg">
          <Moon className="w-5 h-5" />
        </div>
      </motion.div>
    </div>
  );
};

export default ThemeToggle;
