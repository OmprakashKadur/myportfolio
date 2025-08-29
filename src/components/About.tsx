"use client";

import { motion } from 'framer-motion';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code that stands the test of time."
    },
    {
      icon: Palette,
      title: "Design-Driven",
      description: "Bridging the gap between beautiful design and functional implementation."
    },
    {
      icon: Zap,
      title: "Performance First",
      description: "Optimizing for speed, efficiency, and exceptional user experiences."
    },
    {
      icon: Heart,
      title: "User-Centric",
      description: "Designing not just for users, but for their journey and satisfaction."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="relative py-20" style={{ scrollMarginTop: '80px' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Me</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Passionate React Frontend Developer crafting digital experiences that make a difference
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Avatar and Bio */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              {/* Avatar Placeholder */}
              <div className="relative inline-block mb-8">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                  OK
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-xl" />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Omprakash K M</h3>
                <p className="text-blue-400 font-medium">React Frontend Developer</p>
                <p className="text-slate-300 leading-relaxed">
                  With over 3 years of experience in frontend development, I specialize in creating
                  scalable, performant, and user-friendly web applications. My journey in tech has
                  been driven by a passion for clean code, innovative design, and exceptional user experiences.
                </p>
                <p className="text-slate-400 italic">
                  &ldquo;I design not just for users, but for their journey and satisfaction.&rdquo;
                </p>
              </div>
            </motion.div>

            {/* Stats and Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-slate-300 text-sm">Components Built</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-slate-300 text-sm">Performance Score</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-slate-300 text-sm">Problem Solving</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">∞</div>
                <div className="text-slate-300 text-sm">Learning Mindset</div>
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-6 text-center hover:border-slate-600 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-slate-300 mb-6">
              Interested in working together or have a project in mind?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Let&apos;s Connect
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
