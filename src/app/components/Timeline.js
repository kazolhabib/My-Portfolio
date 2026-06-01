"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";
import InteractiveDotGrid from "./InteractiveDotGrid";

const TIMELINE_ITEMS = [
  {
    type: "work",
    date: "2026 - Present",
    title: "Full-Stack Next.js & React Engineer",
    subtitle: "Enterprise Applications & Open Source",
    description: "Developing secure, high-performance web applications. Specializing in robust RESTful APIs with Express, scalable database architectures with MongoDB, and bulletproof user session management with Better Auth. Bridging engineering-grade backend layers with dynamic, server-side rendered React and Next.js frontend interfaces.",
    icon: Briefcase,
    highlights: [
      "Designed and launched type-safe Next.js enterprise portals with 30%+ faster page load speeds.",
      "Integrated secure OAuth2 and MFA session protocols powered by Better Auth.",
      "Optimized MongoDB indexing schemas, reducing query latency by 45ms under peak loads."
    ],
    skills: ["Next.js", "React", "Express.js", "MongoDB", "Better Auth"],
  },
  {
    type: "work",
    date: "2021 - 2026",
    title: "Webflow Specialist & Designer",
    subtitle: "Freelance & Premium Digital Agencies",
    description: "Built pixel-perfect, high-performance visual solutions. Designed complex Webflow CMS structures, tailored custom interactions, and led user experience testing loops.",
    icon: Briefcase,
    highlights: [
      "Delivered 15+ high-fidelity pixel-perfect interfaces for corporate agencies globally.",
      "Engineered complex CMS schemas with custom dynamic filtering loops.",
      "Created highly polished responsive GSAP interaction sequences."
    ],
    skills: ["Webflow", "CMS Architecture", "Interactions", "JavaScript", "UX Design", "GSAP"],
  },
  {
    type: "education",
    date: "2018 - 2020",
    title: "Bachelor of Social Science (BSS)",
    subtitle: "Academic Foundation",
    description: "Studied advanced research methodologies, socio-critical analyses, and human behavioral structures. Directly applied this systemic thinking to UX user-persona modeling, semantic content structures, and clear visual hierarchies.",
    icon: GraduationCap,
    highlights: [
      "Mastered advanced statistical modeling and quantitative research methodologies.",
      "Mapped systemic user-persona profiles directly utilized in client UX layouts.",
      "Graduated with honors, bridging quantitative analysis with technical UX systems."
    ],
    skills: ["Research", "UX Modeling", "Visual Hierarchy", "Systemic Thinking"],
  },
];

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = TIMELINE_ITEMS[activeIndex];
  const ActiveIcon = activeItem.icon;

  return (
    <section id="timeline" className="relative w-full py-16 md:py-24 px-6 sm:px-8 lg:px-12 bg-transparent transition-colors duration-350 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent z-10" />

      {/* Premium Background Mesh and Dot Grid Overlays */}
      <div className="absolute inset-0 bg-mesh-alternate pointer-events-none z-0" />
      <InteractiveDotGrid />
      <div className="section-backlight" />

      {/* Giant Animating Background Watermark Brand Logo */}
      <div className="absolute -left-36 -bottom-36 md:-left-24 md:-bottom-24 w-[380px] h-[380px] md:w-[500px] md:h-[500px] text-primary/3 dark:text-primary/4 pointer-events-none select-none z-0">
        <div className="w-full h-full animate-floating-spin">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer diamond outline with rounded corners */}
            <path d="M50 8 L92 50 L50 92 L8 50 Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            {/* Stylized monogram lines forming K & H */}
            <path d="M38 32 V68" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
            <path d="M62 32 V68" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
            <path d="M38 50 H62" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
            <path d="M38 50 L54 34" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
            <path d="M38 50 L54 66" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

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

        {/* Interactive Stepper Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">

          {/* Mobile Horizontal Carousel Tabs */}
          <div className="flex lg:hidden overflow-x-auto gap-3 pb-4 scrollbar-none snap-x snap-mandatory z-10 relative">
            {TIMELINE_ITEMS.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={item.title}
                  onClick={() => setActiveIndex(idx)}
                  className={`snap-center shrink-0 px-5 py-3 rounded-full text-xs font-extrabold tracking-wider uppercase transition-all duration-300 select-none border-0 cursor-pointer ${isActive
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/15"
                      : "bg-white/40 dark:bg-neutral-900/35 backdrop-blur-xl text-foreground/50 hover:text-foreground border border-border-color/10"
                    }`}
                >
                  {item.date}
                </button>
              );
            })}
          </div>

          {/* Desktop Left Stepper Selector (Col span 4) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col space-y-3 relative pr-6">
            {/* Stepper Track Line */}
            <div className="absolute left-[20px] top-6 bottom-6 w-[2px] bg-neutral-200 dark:bg-neutral-800/80 pointer-events-none z-0" />

            {TIMELINE_ITEMS.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={item.title}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left relative pl-9 pr-4 py-5 rounded-2xl transition-all duration-300 select-none group flex items-start space-x-3 cursor-pointer border-0 ${isActive
                      ? "text-primary"
                      : "text-foreground/50 hover:text-foreground/75"
                    }`}
                >
                  {/* Active year capsule sliding background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeYearCapsule"
                      className="absolute inset-0 bg-primary/5 dark:bg-primary/[0.04] rounded-2xl border border-primary/10 pointer-events-none z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Node dot on the track */}
                  <div className="absolute left-[20px] top-[26px] -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white dark:bg-neutral-900 border-2 border-neutral-300 dark:border-neutral-700 group-hover:border-primary transition-all duration-300 z-10 flex items-center justify-center">
                    {isActive && (
                      <motion.div
                        layoutId="activeDot"
                        className="w-1.5 h-1.5 rounded-full bg-primary"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}
                  </div>

                  <div className="space-y-1 relative z-10">
                    <span className={`inline-block text-[10px] font-bold px-2.5 py-1 rounded-xl leading-none ${isActive
                        ? "bg-primary/10 text-primary"
                        : "bg-neutral-100 dark:bg-neutral-950 text-foreground/45"
                      }`}>
                      {item.date}
                    </span>
                    <h4 className="text-sm sm:text-base font-extrabold tracking-tight block">
                      {item.title}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Desktop/Mobile Right Showcase Card (Col span 8) */}
          <div className="lg:col-span-8 relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full group overflow-hidden relative p-8 md:p-10 bg-white/40 dark:bg-neutral-900/35 backdrop-blur-xl border border-white/30 dark:border-neutral-800/40 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.015)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
              >
                {/* Card Glow & Blueprint Backdrops */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
                <div className="absolute inset-0 bg-dot-grid opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-0" />

                <div className="space-y-6 z-10 relative">
                  {/* Top Meta Row */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <span className="inline-block text-[10px] sm:text-xs font-bold text-primary px-3 py-1.5 rounded-xl bg-primary/5 border border-primary/10 select-none">
                        {activeItem.date}
                      </span>
                      <span className="text-[10px] font-extrabold text-foreground/45 uppercase tracking-widest leading-none select-none">
                        {activeItem.type}
                      </span>
                    </div>

                    {/* Circular Floating Glass Icon Badge */}
                    <div className="p-3.5 rounded-full bg-white/60 dark:bg-neutral-950/40 backdrop-blur-md shadow-sm text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary/10 flex items-center justify-center shrink-0">
                      <ActiveIcon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1">
                    <h3 className="text-2xl md:text-3.5xl font-black text-foreground leading-snug group-hover:text-primary transition-colors duration-300">
                      {activeItem.title}
                    </h3>
                    <p className="text-xs md:text-sm font-bold text-foreground/50">
                      {activeItem.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm md:text-base text-foreground/65 leading-relaxed font-normal max-w-4xl">
                    {activeItem.description}
                  </p>

                  {/* Key Accomplishments Highlight List */}
                  <div className="space-y-3 pt-6 border-t border-border-color/10">
                    <h4 className="text-xs font-extrabold text-primary uppercase tracking-widest">Key Accomplishments</h4>
                    <ul className="space-y-2.5">
                      {activeItem.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-foreground/70 leading-relaxed font-normal">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0 animate-pulse" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Badges */}
                  {activeItem.skills && (
                    <div className="flex flex-wrap gap-2 pt-6 mt-8 border-t border-border-color/10">
                      {activeItem.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-bold px-3.5 py-2 rounded-xl bg-white/60 dark:bg-neutral-950/40 backdrop-blur-md shadow-sm border-0 text-foreground/80 hover:text-primary hover:scale-105 active:scale-95 transition-all duration-200 cursor-default select-none"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
