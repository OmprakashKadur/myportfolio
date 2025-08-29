"use client";

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ChevronUp, MapPin, Calendar, Award, Briefcase } from 'lucide-react';
import resumeData from '@/data/resume.json';

// Types
interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  featured: boolean;
}

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

const TimelineItem = ({ experience, index, isExpanded, onToggle }: TimelineItemProps) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative flex items-center mb-12 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400 to-purple-400 hidden md:block" />

      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-slate-800 z-10" />

      {/* Content */}
      <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-colors"
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{experience.position}</h3>
              <p className="text-blue-400 font-medium">{experience.company}</p>
            </div>
            <div className="text-right text-sm text-slate-400">
              <div className="flex items-center gap-1 mb-1">
                <Calendar className="w-4 h-4" />
                {experience.duration}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {experience.location}
              </div>
            </div>
          </div>

          {/* Type badge */}
          <div className="mb-4">
            <span className="inline-block bg-slate-700 text-slate-300 px-2 py-1 rounded-full text-xs">
              {experience.type}
            </span>
          </div>

          {/* Description */}
          <p className="text-slate-300 mb-4">{experience.description}</p>

          {/* Expand/Collapse button */}
          <button
            onClick={onToggle}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                Show More
              </>
            )}
          </button>

          {/* Expanded content */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isExpanded ? 'auto' : 0,
              opacity: isExpanded ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-6 space-y-4">
              {/* Responsibilities */}
              <div>
                <h4 className="flex items-center gap-2 text-white font-semibold mb-3">
                  <Briefcase className="w-4 h-4 text-blue-400" />
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {experience.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="flex items-center gap-2 text-white font-semibold mb-3">
                  <Award className="w-4 h-4 text-yellow-400" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">★</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-xs hover:bg-slate-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ResumeTimeline = () => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <section id="experience" className="relative py-20 overflow-hidden" style={{ scrollMarginTop: '80px' }}>
      {/* Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Journey</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A timeline of my professional growth, from junior developer to senior frontend engineer.
            Each milestone represents a chapter of learning and innovation.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {(resumeData as Experience[]).map((experience, index) => (
            <TimelineItem
              key={experience.id}
              experience={experience}
              index={index}
              isExpanded={expandedItems.has(experience.id)}
              onToggle={() => toggleExpanded(experience.id)}
            />
          ))}
        </div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
            <div className="text-slate-300">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
            <div className="text-slate-300">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
            <div className="text-slate-300">Technologies Mastered</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">4</div>
            <div className="text-slate-300">Companies Worked</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeTimeline;
