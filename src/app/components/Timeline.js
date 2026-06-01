"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";

const TIMELINE_ITEMS = [
  {
    type: "work",
    date: "2025 - Present",
    title: "Full-Stack Next.js & React Engineer",
    subtitle: "Enterprise Applications & Open Source",
    description: "Developing secure, high-performance web applications. Specializing in robust RESTful APIs with Express, scalable database architectures with MongoDB, and bulletproof user session management with Better Auth. Bridging engineering-grade backend layers with dynamic, server-side rendered React and Next.js frontend interfaces.",
    icon: Briefcase,
    skills: ["Next.js", "React", "Express.js", "MongoDB", "Better Auth"],
  },
  {
    type: "work",
    date: "2021 - 2026",
    title: "Webflow Specialist & Designer",
    subtitle: "Freelance & Premium Digital Agencies",
    description: "Built pixel-perfect, high-performance visual solutions. Designed complex Webflow CMS structures, tailored custom interactions, and led user experience testing loops.",
    icon: Briefcase,
    skills: ["Webflow", "CMS Architecture", "Interactions", "JavaScript", "UX Design", "GSAP"],
  },
  {
    type: "education",
    date: "2018 - 2020",
    title: "Bachelor of Social Science (BSS)",
    subtitle: "Academic Foundation",
    description: "Studied advanced research methodologies, socio-critical analyses, and human behavioral structures. Directly applied this systemic thinking to UX user-persona modeling, semantic content structures, and clear visual hierarchies.",
    icon: GraduationCap,
    skills: ["Research", "UX Modeling", "Visual Hierarchy", "Systemic Thinking"],
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="relative w-full py-16 md:py-24 px-6 sm:px-8 lg:px-12 bg-transparent  transition-colors duration-350 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent z-10" />
      {/* Premium Background Mesh and Dot Grid Overlays */}
      <div className="absolute inset-0 bg-mesh-alternate pointer-events-none z-0" />
      <div className="absolute inset-0 bg-dot-grid pointer-events-none z-0" />
      <div className="section-backlight" />

      <div className="relative z-10 mx-auto max-w-[90rem] w-full">

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col space-y-3 mb-16 relative z-10"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/40 dark:bg-neutral-900/35 backdrop-blur-xl border border-primary/10 shadow-sm max-w-fit">
            <Calendar className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-[10px] sm:text-xs font-extrabold tracking-wider text-primary uppercase">
              Timeline
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Experience & Education
          </h2>
          <p className="text-xs sm:text-sm text-foreground/50 max-w-md leading-relaxed font-normal">
            A chronological timeline of my professional growth, academic background, and developmental journey.
          </p>
        </motion.div>

        {/* Layered Sticky Stacking Cards Deck */}
        <div className="relative flex flex-col gap-10 md:gap-12 pb-24 max-w-5xl mx-auto z-10">
          {TIMELINE_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="sticky w-full group overflow-hidden relative p-8 md:p-10 bg-white/60 dark:bg-neutral-900/45 backdrop-blur-xl border border-white/30 dark:border-neutral-800/40 hover:border-primary/20 dark:hover:border-primary/30 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.015)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,0,0,0.04),0_15px_40px_-15px_rgba(5,150,105,0.08)] dark:hover:shadow-[0_35px_70px_rgba(0,0,0,0.55),0_20px_45px_-15px_rgba(16,185,129,0.12)] flex flex-col justify-between origin-top"
                style={{ top: `${130 + idx * 36}px`, scale: 0.94 + idx * 0.03, transformOrigin: "top" }}
              >
                {/* Card Glow & Blueprint Backdrops */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
                <div className="absolute inset-0 bg-dot-grid opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-0" />

                <div className="space-y-6 z-10 relative">
                  {/* Top Meta & Icon Row */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <span className="inline-block text-[10px] sm:text-xs font-bold text-primary px-3 py-1.5 rounded-xl bg-primary/5 border border-primary/10 select-none">
                        {item.date}
                      </span>
                      <span className="text-[10px] font-extrabold text-foreground/45 uppercase tracking-widest leading-none select-none">
                        {item.type}
                      </span>
                    </div>

                    {/* Circular Floating Glass Icon Badge */}
                    <div className="p-3.5 rounded-full bg-white/60 dark:bg-neutral-950/40 backdrop-blur-md shadow-sm text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Title & Info */}
                  <div className="space-y-1">
                    <h3 className="text-xl md:text-2.5xl font-black text-foreground leading-snug group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm font-bold text-foreground/50">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm md:text-base text-foreground/65 leading-relaxed font-normal max-w-4xl">
                    {item.description}
                  </p>
                </div>

                {/* Technology Badges */}
                {item.skills && (
                  <div className="flex flex-wrap gap-2 pt-6 mt-8 border-t border-border-color/10 z-10 relative">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-bold px-3.5 py-2 rounded-xl bg-white/60 dark:bg-neutral-950/40 backdrop-blur-md shadow-sm border-0 text-foreground/80 hover:text-primary hover:scale-105 active:scale-95 transition-all duration-200 cursor-default select-none"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
