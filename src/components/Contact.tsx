"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Send, Rocket, CheckCircle, ExternalLink, Phone } from 'lucide-react';

// EmailJS type declaration
declare global {
  interface Window {
    emailjs: {
      init: (publicKey: string) => void;
      send: (serviceId: string, templateId: string, templateParams: Record<string, string>) => Promise<{ status: number; text: string }>;
    };
  }
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rocketLaunched, setRocketLaunched] = useState(false);

  // Generate background particles only on client side to avoid hydration mismatch
  const [backgroundParticles, setBackgroundParticles] = useState<Array<{
    left: number;
    top: number;
    duration: number;
    delay: number;
  }>>([]);

  // Initialize EmailJS
  useEffect(() => {
    // Load EmailJS script dynamically
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Initialize EmailJS with public key
      if (window.emailjs) {
        window.emailjs.init('qFuDdwBfdyhkjfZm_');
      }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Generate background particles only after component mounts on client
  useEffect(() => {
    const particles = Array.from({ length: 20 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    setBackgroundParticles(particles);
  }, []);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/OmprakashKadur',
      color: 'hover:text-gray-300',
      bgColor: 'hover:bg-gray-800'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/omprakashkm',
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-900/20'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:kaduromee@gmail.com',
      color: 'hover:text-green-400',
      bgColor: 'hover:bg-green-900/20'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!window.emailjs) {
      alert('Email service is not available. Please try again later.');
      return;
    }

    setIsSubmitting(true);
    setRocketLaunched(true);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        details: formData.message, // Changed from 'message' to 'details' to match your EmailJS template
      };

      await window.emailjs.send(
        'service_kdsmyaq', // Your service ID
        'template_vmv3cis', // Your template ID
        templateParams
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Oops! Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
      setRocketLaunched(false);
    }
  };

  const rocketVariants = {
    idle: { y: 0, rotate: 0 },
    launch: {
      y: -100,
      rotate: 45,
      transition: {
        duration: 2,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden" style={{ scrollMarginTop: '80px' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        {backgroundParticles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Connect</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to launch your next project? Let&apos;s build something amazing together.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your Phone (Optional)"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Rocket className="w-5 h-5" />
                      </motion.div>
                      Launching...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </span>

                {/* Rocket launch animation */}
                <AnimatePresence>
                  {rocketLaunched && (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      variants={rocketVariants}
                      initial="idle"
                      animate="launch"
                    >
                      <Rocket className="w-8 h-8 text-yellow-400" />
                      <motion.div
                        className="absolute w-1 h-16 bg-gradient-to-t from-orange-400 to-transparent rounded-full"
                        animate={{
                          opacity: [0.8, 0.3, 0.8],
                          scaleY: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 0.5,
                          repeat: Infinity
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-4 text-slate-300">
                <p className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  omprakash@example.com
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-400" />
                  Available for freelance & full-time opportunities
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="grid grid-cols-1 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 bg-slate-800/30 border border-slate-700 rounded-lg text-slate-300 transition-all duration-300 ${social.color} ${social.bgColor} group`}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{social.name}</span>
                    <ExternalLink className="w-4 h-4 ml-auto opacity-50 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Fun fact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-4"
            >
              <p className="text-slate-300 text-sm italic">
                🚀 &ldquo;Every great developer was once a beginner. Every expert was once a novice.
                What matters is the journey and the passion to keep learning.&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-slate-800"
        >
          <p className="text-slate-400">
            © 2024 Omprakash K M. Built with Next.js, React, and lots of ☕
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
