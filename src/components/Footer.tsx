"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Heart, Code, Coffee } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(2024);
  // Generate random particle properties only on client side to avoid hydration mismatch
  const [particleProperties, setParticleProperties] = useState([]);

  useEffect(() => {
    // Set current year and generate particle properties only after component mounts on client
    setCurrentYear(new Date().getFullYear());

    const properties = Array.from({ length: 15 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setParticleProperties(properties);
  }, []);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/omprakashkadur',
      color: 'hover:text-gray-300',
      description: 'View my code'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/omprakashkm',
      color: 'hover:text-blue-400',
      description: 'Connect professionally'
    },
    // {
    //   name: 'Twitter',
    //   icon: Twitter,
    //   url: 'https://twitter.com/omee',
    //   color: 'hover:text-blue-300',
    //   description: 'Follow my updates'
    // },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:kaduromee@gmail.com',
      color: 'hover:text-green-400',
      description: 'Send me a message'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative bg-slate-900/50 backdrop-blur-sm border-t border-slate-700/50">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particleProperties.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">OK</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Omprakash K M</h3>
                <p className="text-slate-400 text-sm">React Frontend Developer</p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-md">
              Passionate about creating exceptional digital experiences with modern web technologies.
              Specializing in React, Next.js, and innovative UI/UX solutions.
            </p>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'TailwindCSS'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-3 py-1 bg-slate-800/60 text-slate-300 text-xs rounded-full border border-slate-600/30"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Code className="w-4 h-4 text-blue-400" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Heart className="w-4 h-4 text-red-400" />
              Connect
            </h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-3 p-2 rounded-lg bg-slate-800/30 hover:bg-slate-700/50 transition-all duration-300 group ${social.color}`}
                  title={social.description}
                >
                  <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-sm font-medium">{social.name}</div>
                    <div className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                      {social.description}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-slate-700/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>© {currentYear} Omprakash K M.</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Built with Next.js & Framer Motion</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <Coffee className="w-4 h-4" />
                <span>Made with passion</span>
              </div>

              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-slate-500 text-xs">Available for projects</span>
              </div>
            </div>
          </div>

          {/* Animated signature */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-6 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-slate-600/30">
              <span className="text-slate-400 text-sm">Crafted with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span className="text-slate-400 text-sm">by Omprakash K M</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
