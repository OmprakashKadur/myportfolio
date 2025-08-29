"use client";

import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ParticleBackground from "@/components/ParticleBackground";
import Loading from "@/components/Loading";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";

// Lazy load heavy components for better performance
const ProjectGalaxy = lazy(() => import("@/components/ProjectGalaxy"));
const ResumeTimeline = lazy(() => import("@/components/ResumeTimeline"));
const About = lazy(() => import("@/components/About"));
const Skills = lazy(() => import("@/components/Skills"));
const Contact = lazy(() => import("@/components/Contact"));

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Home() {
  return (
    <>
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Scroll Progress */}
      <ScrollProgress />

      <main className="relative">
        <Navigation />
        <ParticleBackground />

        {/* Hero Section - Always loaded */}
        <section id="home" style={{ scrollMarginTop: '80px' }}>
          <Hero />
        </section>

        {/* Lazy loaded sections with Suspense */}
        <Suspense fallback={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center py-20"
          >
            <Loading />
          </motion.div>
        }>
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <ProjectGalaxy />
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <ResumeTimeline />
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <About />
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Skills />
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Contact />
          </motion.div>
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
