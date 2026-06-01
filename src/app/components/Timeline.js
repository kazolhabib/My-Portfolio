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

        {/* Sleek Vertical Timeline */}
        <div className="relative border-l border-border-color dark:border-border-color/80 ml-4 md:ml-8 space-y-12">

          {TIMELINE_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative pl-8 sm:pl-12 group"
              >
                {/* Timeline Icon node with gold highlights */}
                <span className="absolute left-0 top-1.5 -translate-x-1/2 w-8 h-8 rounded-full bg-card-bg border-2 border-border-color group-hover:border-primary flex items-center justify-center transition-all duration-300 shadow-sm">
                  <Icon className="h-3.5 w-3.5 text-foreground/75 group-hover:text-primary transition-colors duration-300" />
                </span>

                {/* Content Block */}
                <div className="bento-card p-6 md:p-8 space-y-4">

                  {/* Meta Details */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="inline-block text-[0.6875rem] font-bold text-primary px-2.5 py-1 rounded-md bg-primary/5 border border-primary/10 max-w-fit">
                      {item.date}
                    </span>
                    <span className="text-xs text-foreground/45 flex items-center font-medium capitalize">
                      {item.type}
                    </span>
                  </div>

                  {/* Title & Info */}
                  <div className="space-y-1">
                    <h3 className="text-lg md:text-xl font-extrabold text-foreground group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-foreground/60">{item.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed max-w-3xl">
                    {item.description}
                  </p>

                  {/* Technology Badges */}
                  {item.skills && (
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border-color/40">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-neutral-100/50 dark:bg-neutral-900/50 border border-border-color/80 text-foreground/70 hover:border-primary hover:text-primary transition-all duration-200 cursor-default select-none"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
