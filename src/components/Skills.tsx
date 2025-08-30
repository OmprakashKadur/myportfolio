"use client";

import { useState } from 'react';

const skills = [
  { name: 'React', level: 95, color: '#61dafb', category: 'Frontend' },
  { name: 'Next.js', level: 90, color: '#000000', category: 'Frontend' },
  { name: 'HTML', level: 85, color: '#2496ed', category: 'Language' },
  { name: 'CSS', level: 85, color: '#ff9900', category: 'Language' },
  { name: 'TypeScript', level: 85, color: '#3178c6', category: 'Language' },
  { name: 'JavaScript', level: 90, color: '#f7df1e', category: 'Language' },
  { name: 'TailwindCSS', level: 88, color: '#06b6d4', category: 'Styling' },
  { name: 'Bootstrap', level: 88, color: '#f05032', category: 'Styling' },
  // { name: 'Node.js', level: 80, color: '#339933', category: 'Backend' },
  // { name: 'GraphQL', level: 75, color: '#e10098', category: 'Backend' },
  { name: 'SQL', level: 78, color: '#47a248', category: 'Database' },
  // { name: 'PostgreSQL', level: 82, color: '#336791', category: 'Database' },
  { name: 'Git', level: 85, color: '#f05032', category: 'Tools' },
  // { name: 'Docker', level: 70, color: '#2496ed', category: 'Tools' },
  // { name: 'AWS', level: 65, color: '#ff9900', category: 'Cloud' },
];

const categories = [
  { name: 'All', icon: '🌌', color: 'from-blue-500 to-purple-600' },
  { name: 'Frontend', icon: '💻', color: 'from-cyan-500 to-blue-600' },
  // { name: 'Backend', icon: '⚙️', color: 'from-green-500 to-teal-600' },
  { name: 'Database', icon: '🗄️', color: 'from-orange-500 to-red-600' },
  { name: 'Language', icon: '💭', color: 'from-purple-500 to-pink-600' },
  { name: 'Styling', icon: '🎨', color: 'from-pink-500 to-rose-600' },
  { name: 'Tools', icon: '🛠️', color: 'from-yellow-500 to-orange-600' },
  // { name: 'Cloud', icon: '☁️', color: 'from-indigo-500 to-purple-600' },
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  const getPositionOnCircle = (index: number, total: number) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2; // Start from top
    const radius = 150; // Fixed radius
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  const SkillOrb = ({ skill, index }: { skill: typeof skills[0], index: number }) => {
    const position = getPositionOnCircle(index, filteredSkills.length);

    return (
      <div
        className="absolute"
        style={{
          left: '50%',
          top: '50%',
          transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)`,
        }}
      >
        {/* Skill orb */}
        <div
          className="w-20 h-20 rounded-full border-4 shadow-lg flex items-center justify-center text-white font-bold text-xs"
          style={{
            backgroundColor: skill.color,
            borderColor: 'rgba(255,255,255,0.2)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          }}
        >
          <span className="text-center px-1 leading-tight">
            {skill.name.length > 10 ? `${skill.name.substring(0, 8)}...` : skill.name}
          </span>
        </div>
      </div>
    );
  };

  // Horizontal layout component for filtered skills
  const HorizontalSkillLayout = () => {
    return (
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl blur-2xl" />

        <div className="relative flex items-center justify-center flex-wrap gap-12 py-16 px-8">
          {filteredSkills.slice(0, 3).map((skill) => (
            <div key={skill.name} className="flex flex-col items-center group">
              {/* Skill orb with enhanced styling */}
              <div className="relative mb-6">
                {/* Glow effect */}
                <div
                  className="absolute inset-0 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                  style={{ backgroundColor: skill.color }}
                />

                {/* Main orb */}
                <div
                  className="relative w-28 h-28 rounded-full border-4 shadow-2xl flex items-center justify-center text-white font-bold text-base group-hover:scale-110 transition-transform duration-300"
                  style={{
                    backgroundColor: skill.color,
                    borderColor: 'rgba(255,255,255,0.4)',
                    boxShadow: `0 12px 40px rgba(0,0,0,0.5), 0 0 20px ${skill.color}40`,
                  }}
                >
                  {/* Inner highlight */}
                  <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-full" />

                  <span className="relative z-10 text-center px-2 leading-tight font-semibold">
                    {skill.name}
                  </span>
                </div>
              </div>

              {/* Enhanced skill info */}
              <div className="text-center max-w-36 bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-600/30">
                <div className="text-slate-300 text-sm font-medium mb-2">
                  {skill.category}
                </div>
                <div className="text-cyan-400 font-bold text-lg mb-2">
                  {skill.level}% Proficiency
                </div>
                {/* Mini progress bar */}
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: skill.color,
                      boxShadow: `0 0 8px ${skill.color}60`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Central Tech Stack */}
          {filteredSkills.length > 0 && (
            <>
              {/* Enhanced connecting line */}
              <div className="hidden md:flex items-center">
                <div className="flex space-x-2">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                      style={{
                        backgroundColor: `hsl(${(i * 45) % 360}, 70%, 60%)`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center group">
                <div className="relative mb-6">
                  {/* Enhanced glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300 scale-110" />

                  {/* Main tech stack orb */}
                  <div className="relative w-36 h-36 bg-gradient-to-br from-cyan-400 via-purple-600 to-pink-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/30 group-hover:scale-110 transition-transform duration-300">
                    {/* Inner pattern */}
                    <div className="absolute inset-3 bg-gradient-to-br from-white/30 to-transparent rounded-full" />

                    {/* Animated elements */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-spin" style={{ animationDuration: '8s' }} />
                    <div className="absolute inset-2 rounded-full border border-white/10 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }} />

                    {/* Content */}
                    <div className="relative text-white font-bold text-center z-10">
                      <div className="text-2xl mb-2">🚀</div>
                      <div className="text-lg">Tech</div>
                      <div className="text-lg">Stack</div>
                    </div>
                  </div>
                </div>

                {/* Enhanced info card */}
                <div className="text-center bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-600/40 shadow-xl">
                  <div className="text-white text-xl font-bold mb-2">
                    {selectedCategory} Technologies
                  </div>
                  <div className="text-cyan-400 font-semibold text-2xl mb-1">
                    {filteredSkills.length} Skills
                  </div>
                  <div className="text-slate-400 text-sm">
                    Professional Expertise
                  </div>
                </div>
              </div>

              {/* Additional skills indicator */}
              {filteredSkills.length > 3 && (
                <>
                  <div className="hidden md:flex items-center">
                    <div className="flex space-x-2">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-0.5 bg-gradient-to-l from-pink-400 to-purple-400 rounded-full"
                          style={{
                            backgroundColor: `hsl(${(i * 45 + 180) % 360}, 70%, 60%)`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-center group">
                    <div className="relative mb-4">
                      <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white/20 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-white font-bold text-center text-sm">
                          +{filteredSkills.length - 3}<br />
                          <span className="text-xs opacity-80">More</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 border border-slate-600/30">
                      <div className="text-slate-300 text-sm">
                        Additional Skills
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="relative py-20 overflow-hidden" style={{ scrollMarginTop: '80px' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Layout</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            {selectedCategory === 'All'
              ? 'My complete technical expertise arranged in a cosmic circular display around the central Tech Stack.'
              : `Focused view of my ${selectedCategory.toLowerCase()} skills arranged horizontally for better visibility.`
            }
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`
                relative group px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300
                ${selectedCategory === category.name
                  ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-xl scale-105'
                  : 'bg-slate-800/60 backdrop-blur-sm text-slate-300 hover:bg-slate-700/80 hover:text-white hover:scale-105'
                }
                border border-slate-600/50 hover:border-slate-500/70
                overflow-hidden
              `}
            >
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative flex items-center gap-2">
                <span className="text-lg">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
                {selectedCategory === category.name && (
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                )}
              </div>

              {/* Subtle glow effect */}
              {selectedCategory === category.name && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-sm -z-10" />
              )}
            </button>
          ))}
        </div>

        {/* Skills visualization */}
        {selectedCategory === 'All' ? (
          // Circular layout for "All" skills
          <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent rounded-full" />
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-96 h-96 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-3xl" />
            </div>

            {/* Central hub */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-md opacity-60 scale-110" />

                {/* Main hub */}
                <div className="relative w-28 h-28 bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20">
                  {/* Inner pattern */}
                  <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-full" />

                  {/* Content */}
                  <div className="relative text-white font-bold text-sm text-center z-10">
                    <div className="text-lg mb-1">⚡</div>
                    <div>Tech</div>
                    <div>Stack</div>
                  </div>
                </div>

                {/* Pulsing rings */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-ping" style={{ animationDuration: '3s' }} />
                <div className="absolute inset-0 rounded-full border border-purple-400/20 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
              </div>
            </div>

            {/* Skill orbs */}
            {filteredSkills.map((skill, index) => (
              <SkillOrb key={`${skill.name}-${index}`} skill={skill} index={index} />
            ))}

            {/* Connecting lines (static) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <radialGradient id="lineGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(59, 130, 246, 0.15)" />
                  <stop offset="50%" stopColor="rgba(147, 51, 234, 0.1)" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
              {filteredSkills.map((_, index) => {
                const position = getPositionOnCircle(index, filteredSkills.length);
                return (
                  <line
                    key={index}
                    x1="50%"
                    y1="50%"
                    x2={`calc(50% + ${position.x}px)`}
                    y2={`calc(50% + ${position.y}px)`}
                    stroke="url(#lineGradient)"
                    strokeWidth="1.5"
                  />
                );
              })}
            </svg>
          </div>
        ) : (
          // Horizontal layout for filtered categories
          <HorizontalSkillLayout />
        )}

        {/* Enhanced Skills summary */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="group text-center">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="relative bg-slate-800/60 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6 shadow-xl group-hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {selectedCategory === 'All' ? '12+' : filteredSkills.length}
                </div>
                <div className="text-slate-300 text-sm font-medium">
                  {selectedCategory === 'All' ? 'Core Technologies' : `${selectedCategory} Skills`}
                </div>
                <div className="mt-2 w-full bg-slate-700 rounded-full h-1">
                  <div className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full w-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="group text-center">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="relative bg-slate-800/60 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6 shadow-xl group-hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {selectedCategory === 'All'
                    ? '85%'
                    : `${Math.round(filteredSkills.reduce((acc, skill) => acc + skill.level, 0) / filteredSkills.length)}%`
                  }
                </div>
                <div className="text-slate-300 text-sm font-medium mb-2">Avg Proficiency</div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: selectedCategory === 'All'
                        ? '85%'
                        : `${Math.round(filteredSkills.reduce((acc, skill) => acc + skill.level, 0) / filteredSkills.length)}%`
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="group text-center">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="relative bg-slate-800/60 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6 shadow-xl group-hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-cyan-400 mb-2">3+</div>
                <div className="text-slate-300 text-sm font-medium">Years Experience</div>
                <div className="mt-2 flex justify-center space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                  ))}
                  <div className="w-2 h-2 bg-cyan-400 rounded-full opacity-50">+</div>
                </div>
              </div>
            </div>
          </div>

          <div className="group text-center">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="relative bg-slate-800/60 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6 shadow-xl group-hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-green-400 mb-2">∞</div>
                <div className="text-slate-300 text-sm font-medium">Learning Curve</div>
                <div className="mt-2 flex justify-center">
                  <div className="relative">
                    <div className="w-8 h-8 border-2 border-green-400 rounded-full animate-spin" style={{ animationDuration: '3s' }} />
                    <div className="absolute inset-1 bg-green-400 rounded-full opacity-30 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
