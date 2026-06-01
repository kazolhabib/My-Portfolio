"use client";

import { motion } from "framer-motion";
import { Cpu, Terminal, Compass, Layers, ShieldCheck } from "lucide-react";

const SKILL_GROUPS = [
  {
    title: "Frontend Architecture",
    description: "Creating highly dynamic, responsive visual layers with modular components.",
    icon: Terminal,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "UI Systems",
    description: "Designing modern, fluid interface systems for speed and unified design language.",
    icon: Layers,
    skills: ["Shadcn UI", "Hero UI", "Daisy UI", "Radix UI", "Headless UI"],
  },
  {
    title: "Backend & Database",
    description: "Building resilient server infrastructures, relational schemas, and secure token auth.",
    icon: ShieldCheck,
    skills: ["Node.js", "MongoDB", "Better Auth", "Express.js"],
  },
  {
    title: "No-Code Power",
    description: "Structuring pixel-perfect layouts, responsive interactions, and content architectures.",
    icon: Compass,
    skills: ["Webflow Expert", "CMS", "Interactions", "CMS Architecture","GSAP Animations"],
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 35 },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: index * 0.1,
      ease: [0.16, 1, 0.3, 1]
    }
  }),
  hover: {
    y: -8,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const badgeVariants = {
  initial: { y: 0, scale: 1 },
  hover: (index) => ({
    y: -6,
    scale: 1.04,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 15,
      delay: index * 0.04,
    }
  })
};

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-16 md:py-24 px-6 sm:px-8 lg:px-12 bg-transparent transition-colors duration-350 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent z-10" />
      
      {/* Premium Background Mesh and Dot Grid Overlays */}
      <div className="absolute inset-0 bg-mesh-alternate pointer-events-none z-0" />
      <div className="absolute inset-0 bg-dot-grid pointer-events-none z-0" />
      
      {/* Ambient Neon Background Glows */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] rounded-full bg-primary/5 blur-[120px] pointer-events-none z-0 opacity-40 animate-[pulse_8s_infinite_alternate]" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-emerald-500/4 blur-[140px] pointer-events-none z-0 opacity-30 animate-[pulse_6s_infinite_alternate]" />

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
            <Cpu className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-[10px] sm:text-xs font-extrabold tracking-wider text-primary uppercase">
              Skills Grid
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Core Capabilities & Stack
          </h2>
          <p className="text-xs sm:text-sm text-foreground/50 max-w-md leading-relaxed font-normal">
            Instead of generic progress bars, here are my active technical stack groups, crafted with absolute precision.
          </p>
        </motion.div>

        {/* 4-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {SKILL_GROUPS.map((group, groupIdx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                custom={groupIdx}
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true }}
                className="p-8 bg-white/40 dark:bg-neutral-900/35 backdrop-blur-xl border-0 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.4)] flex flex-col justify-between min-h-[340px] group overflow-hidden relative"
              >
                {/* Card Glow & Grid Backdrops */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-750 pointer-events-none z-0" />
                <div className="absolute inset-0 bg-dot-grid opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-0" />
                
                {/* Subtle bottom-right background glow blur */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl group-hover:scale-130 transition-transform duration-750 pointer-events-none z-0" />

                <div className="space-y-6 z-10 relative">
                  {/* Icon & Title */}
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-neutral-950/40 backdrop-blur-md border-0 shadow-[0_4px_12px_rgba(0,0,0,0.02)] text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary/10 group-hover:text-primary max-w-fit">
                      <Icon className="h-6 w-6 transition-transform duration-500" />
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <h3 className="text-xl font-bold tracking-tight text-foreground">
                      {group.title}
                    </h3>
                    <p className="text-xs text-foreground/60 leading-relaxed font-normal">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Badges Grid */}
                <div className="flex flex-wrap gap-2 pt-6 mt-8 border-t border-border-color/10 z-10 relative">
                  {group.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skill}
                      custom={skillIdx}
                      variants={badgeVariants}
                      className="text-[11px] font-bold px-3 py-1.5 rounded-xl bg-white/60 dark:bg-neutral-950/40 backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.02)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)] border-0 text-foreground/85 select-none cursor-default relative overflow-hidden transition-all duration-300 hover:scale-108 hover:text-primary hover:bg-white dark:hover:bg-neutral-900"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
