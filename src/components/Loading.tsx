"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    // Safely set window dimensions after component mounts
    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-800 overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            initial={{
              opacity: 0,
              scale: 0,
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        {/* Animated galaxy logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="relative mb-8"
        >
          {/* Outer ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 border-2 border-blue-400/30 rounded-full absolute"
          />

          {/* Middle ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 border border-purple-400/40 rounded-full absolute top-2 left-2"
          />

          {/* Inner logo */}
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto shadow-2xl relative">
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white font-bold text-2xl"
            >
              🚀
            </motion.span>
          </div>
        </motion.div>

        {/* Loading text with typewriter effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-6"
        >
          <motion.h2
            className="text-white text-2xl font-bold mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Loading Portfolio
          </motion.h2>

          <motion.p
            className="text-slate-300 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Initializing galaxy experience...
          </motion.p>
        </motion.div>

        {/* Enhanced progress bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1 }}
          className="w-64 mx-auto"
        >
          <div className="w-full bg-slate-700 rounded-full h-2 mb-4 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-full relative"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: [-100, 100] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </div>

          <div className="flex justify-between text-xs text-slate-400">
            <span>0%</span>
            <motion.span
              key={progress}
              initial={{ scale: 1.2, color: '#60a5fa' }}
              animate={{ scale: 1, color: '#94a3b8' }}
              transition={{ duration: 0.3 }}
            >
              {Math.round(progress)}%
            </motion.span>
            <span>100%</span>
          </div>
        </motion.div>

        {/* Loading phases */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-8 text-xs text-slate-500"
        >
          <motion.div
            animate={{ opacity: progress > 20 ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
            className="mb-1"
          >
            {progress > 20 ? "✅" : "⏳"} Initializing components...
          </motion.div>
          <motion.div
            animate={{ opacity: progress > 50 ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
            className="mb-1"
          >
            {progress > 50 ? "✅" : "⏳"} Loading 3D galaxy...
          </motion.div>
          <motion.div
            animate={{ opacity: progress > 80 ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
          >
            {progress > 80 ? "✅" : "⏳"} Preparing your experience...
          </motion.div>
        </motion.div>
      </div>

      {/* Corner decorations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute top-8 left-8"
      >
        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute top-8 right-8"
      >
        <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7 }}
        className="absolute bottom-8 left-8"
      >
        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 right-8"
      >
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
      </motion.div>
    </motion.div>
  );
};

export default Loading;
