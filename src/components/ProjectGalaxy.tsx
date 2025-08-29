"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ExternalLink, Github, Star } from 'lucide-react';
import projectsData from '@/data/projects.json';

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

// Types
interface Project {
  id: string;
  title: string;
  stack: string[];
  description: string;
  link?: string;
  liveLink?: string;
  image?: string;
  featured?: boolean;
}

const ProjectGalaxy = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleProjectHover = (project: Project | null) => {
    setHoveredProject(project);
  };

  return (
    <section id="projects" className="relative py-20 overflow-hidden" style={{ scrollMarginTop: '80px' }}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-6 py-2 mb-6">
            <span className="text-blue-400">🚀</span>
            <span className="text-blue-300 font-medium">Project Galaxy</span>
            <span className="text-purple-400">✨</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore My Universe of
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"> Projects</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Each project is a unique world waiting to be discovered. Hover to explore and click to dive deeper into the code and live demos.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {(projectsData as Project[]).map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Project Card */}
              <motion.div
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 h-full transition-all duration-300 hover:scale-105 hover:bg-slate-800/70 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer"
                whileHover={{ y: -10 }}
                onHoverStart={() => handleProjectHover(project)}
                onHoverEnd={() => handleProjectHover(null)}
                onClick={() => handleProjectClick(project)}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                )}

                {/* Project Header */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    {/* Project Type Indicator */}
                    {(project.id === 'pizgoria' || project.id === 'isol') ? (
                      <span className="text-xs bg-slate-600 text-slate-300 px-2 py-1 rounded-full border border-slate-500/50">
                        🏢 Office
                      </span>
                    ) : (
                      <span className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded-full border border-green-500/50">
                        👨‍💻 Personal
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gradient-to-r from-slate-700/80 to-slate-600/80 text-slate-200 px-3 py-1 rounded-full border border-slate-500/50 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="text-xs text-slate-400 px-3 py-1 bg-slate-700/60 rounded-full border border-slate-600/40">
                        +{project.stack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {/* Office Projects - No live demo or source code */}
                  {(project.id === 'pizgoria' || project.id === 'isol') ? (
                    <div className="flex-1 bg-gradient-to-r from-slate-600 to-slate-700 text-slate-300 font-medium py-2 px-4 rounded-lg text-center text-sm flex items-center justify-center gap-2 cursor-not-allowed opacity-60">
                      <Eye className="w-4 h-4" />
                      Office Project
                    </div>
                  ) : (
                    <>
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 text-center text-sm flex items-center justify-center gap-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 text-center text-sm flex items-center justify-center gap-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4" />
                          Source Code
                        </a>
                      )}
                    </>
                  )}
                </div>

                {/* Hover Effect Indicator */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Instructions */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold text-white mb-2">🎯 Interactive Project Explorer</h4>
            <p className="text-slate-300 text-sm mb-4">
              Each project card is fully interactive. Hover to see enhanced effects and click to explore detailed information.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-4">
              <div className="flex items-center gap-2 text-blue-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Hover for effects</span>
              </div>
              <div className="flex items-center gap-2 text-green-300">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Click to explore</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-xs bg-slate-600 text-slate-300 px-2 py-1 rounded-full border border-slate-500/50">🏢 Office</span>
                <span>Internal company projects</span>
              </div>
              <div className="flex items-center gap-2 text-green-300">
                <span className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded-full border border-green-500/50">👨‍💻 Personal</span>
                <span>Public projects with live demos</span>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  {selectedProject.featured && (
                    <span className="text-yellow-400 text-2xl">⭐</span>
                  )}
                  <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg"
                >
                  ✕
                </button>
              </div>

              {/* Project Description */}
              <div className="mb-6">
                <p className="text-slate-300 leading-relaxed">{selectedProject.description}</p>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-slate-700 to-slate-600 text-slate-200 px-3 py-1 rounded-full border border-slate-500/50 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                {/* Office Projects - No live demo or source code */}
                {(selectedProject.id === 'pizgoria' || selectedProject.id === 'isol') ? (
                  <div className="w-full bg-gradient-to-r from-slate-600 to-slate-700 text-slate-300 font-medium py-3 px-6 rounded-lg text-center flex items-center justify-center gap-2">
                    <Eye className="w-5 h-5" />
                    Office Project - Internal Company Application
                  </div>
                ) : (
                  <>
                    {selectedProject.liveLink && (
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 text-center flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-5 h-5" />
                        View Live Demo
                      </a>
                    )}
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 text-center flex items-center justify-center gap-2"
                      >
                        <Github className="w-5 h-5" />
                        View Source Code
                      </a>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectGalaxy;
