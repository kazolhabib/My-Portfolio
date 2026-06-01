"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Terminal, Compass, Layers, ShieldCheck } from "lucide-react";

const SKILL_GROUPS = [
  {
    id: "frontend",
    title: "Frontend Architecture",
    description: "Creating highly dynamic, responsive visual layers with modular components.",
    icon: Terminal,
    skills: [
      { name: "Next.js", value: 95, level: "Production-grade" },
      { name: "React.JS", value: 92, level: "Expert" },
      { name: "TypeScript", value: 85, level: "Advanced" },
      { name: "JavaScript ES6+", value: 94, level: "Expert" },
      { name: "Tailwind CSS", value: 96, level: "Fluid Styling" },
      { name: "HTML5/CSS3", value: 95, level: "Semantic Grid" },
    ],
  },
  {
    id: "ui-systems",
    title: "UI Systems",
    description: "Designing modern, fluid interface systems for speed and unified design language.",
    icon: Layers,
    skills: [
      { name: "Shadcn UI", value: 92, level: "Sleek Customization" },
      { name: "Hero UI", value: 90, level: "Glass Components" },
      { name: "Radix UI", value: 88, level: "Accessible Headless" },
      { name: "Framer Motion", value: 93, level: "Micro-animations" },
      { name: "GSAP Animations", value: 85, level: "Complex Timelines" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Database",
    description: "Building resilient server infrastructures, database schemas, and secure authentication.",
    icon: ShieldCheck,
    skills: [
      { name: "Node.js", value: 90, level: "Architecture" },
      { name: "Express.js", value: 92, level: "Rest API" },
      { name: "MongoDB", value: 88, level: "Aggregation Pipelines" },
      { name: "Better Auth", value: 91, level: "Secure Token Session" },
      { name: "RESTful APIs", value: 93, level: "High Performance" },
    ],
  },
  {
    id: "nocode",
    title: "No-Code Power",
    description: "Structuring pixel-perfect layouts, interactive animations, and custom visual platforms.",
    icon: Compass,
    skills: [
      { name: "Webflow Expert", value: 96, level: "Core Architecture" },
      { name: "Webflow CMS", value: 94, level: "Relational Schemas" },
      { name: "Custom Code Embed", value: 88, level: "API Hooking" },
      { name: "Client First Style", value: 95, level: "Perfect Semantics" },
      { name: "SEO Optimization", value: 91, level: "Search Visibility" },
    ],
  },
];

function CircularProgress({ value }) {
  const radius = 18;
  const strokeWidth = 3;
  const circumference = 2 * Math.PI * radius; // ~113.1
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
      <svg className="w-12 h-12 transform -rotate-90 select-none">
        {/* Background track circle */}
        <circle
          cx="24"
          cy="24"
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-neutral-200/40 dark:text-neutral-800/40"
        />
        {/* Foreground animated gradient circle */}
        <motion.circle
          cx="24"
          cy="24"
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-primary"
        />
      </svg>
      {/* Center percentage text */}
      <span className="absolute text-[10px] font-black text-foreground">
        {value}%
      </span>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

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

        {/* Futuristic Tab Console Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          
          {/* Left Console selector tabs */}
          <div className="lg:col-span-4 col-span-12 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible scrollbar-none gap-3 pb-3 lg:pb-0 border-b lg:border-b-0 border-border-color/10">
            {SKILL_GROUPS.map((group, idx) => {
              const Icon = group.icon;
              const isActive = activeTab === idx;

              return (
                <button
                  key={group.id}
                  onClick={() => setActiveTab(idx)}
                  className={`relative w-full text-left p-4 sm:p-5 rounded-2xl sm:rounded-3xl transition-all duration-350 cursor-pointer border-0 select-none shrink-0 ${
                    isActive 
                      ? "bg-white/80 dark:bg-neutral-900/70 shadow-lg shadow-primary/5" 
                      : "bg-white/30 dark:bg-neutral-900/20 hover:bg-white/50 dark:hover:bg-neutral-900/40"
                  } flex items-center justify-between min-w-[200px] sm:min-w-[240px] lg:min-w-0 z-10`}
                >
                  {/* Sliding capsule background */}
                  {isActive && (
                    <motion.div
                      layoutId="active-skill-tab-bg"
                      className="absolute inset-0 bg-white/70 dark:bg-neutral-900/60 rounded-2xl sm:rounded-3xl border border-primary/20 pointer-events-none z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center space-x-3.5 z-10 relative">
                    {/* Glass Icon frame */}
                    <div className={`p-2.5 rounded-xl transition-all duration-350 ${
                      isActive 
                        ? "bg-primary text-primary-foreground dark:bg-emerald-600" 
                        : "bg-white/80 dark:bg-neutral-950/40 text-primary"
                    }`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    
                    <div className="flex flex-col text-left">
                      <span className={`text-sm sm:text-base font-extrabold tracking-tight ${
                        isActive ? "text-foreground" : "text-foreground/75"
                      }`}>
                        {group.title}
                      </span>
                      <span className="text-[10px] text-foreground/40 hidden lg:block truncate max-w-[200px] mt-0.5 font-normal">
                        {group.description}
                      </span>
                    </div>
                  </div>

                  {/* Neon active status Led Dot */}
                  <div className="flex items-center z-10 relative">
                    <span className={`h-2 w-2 rounded-full transition-all duration-350 ${
                      isActive 
                        ? "bg-primary animate-pulse shadow-[0_0_8px_var(--heroui-primary)] dark:shadow-[0_0_8px_#10b981]" 
                        : "bg-foreground/15"
                    }`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Console dynamic dashboard */}
          <div className="lg:col-span-8 col-span-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 sm:p-8 bg-white/40 dark:bg-neutral-900/35 backdrop-blur-xl border-0 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.4)] relative overflow-hidden group min-h-[400px] text-left"
              >
                {/* Visual backdrops */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/[0.02] pointer-events-none z-0" />
                <div className="absolute inset-0 bg-dot-grid opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-0" />
                <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-primary/8 blur-3xl pointer-events-none z-0 group-hover:scale-110 transition-transform duration-1000" />

                {/* Pane Header */}
                <div className="flex flex-col space-y-1.5 pb-6 border-b border-border-color/10 mb-6 z-10 relative">
                  <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
                    {SKILL_GROUPS[activeTab].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/50 font-normal leading-relaxed">
                    {SKILL_GROUPS[activeTab].description}
                  </p>
                </div>

                {/* Interactive Tech Grid Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 z-10 relative">
                  {SKILL_GROUPS[activeTab].skills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.5 }}
                      className="p-4 sm:p-5 bg-white/60 dark:bg-neutral-950/30 hover:bg-white/95 dark:hover:bg-neutral-950/70 border border-border-color/5 hover:border-primary/20 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-lg transition-all duration-350 ease-out hover:-translate-y-0.5 flex items-center justify-between gap-4 group/card relative overflow-hidden"
                    >
                      {/* Volumetric mini glow halo inside each card */}
                      <div className="absolute -bottom-8 -right-8 w-16 h-16 rounded-full bg-primary/10 blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      <div className="flex flex-col text-left">
                        <span className="text-sm sm:text-base font-extrabold text-foreground group-hover/card:text-primary transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-extrabold text-foreground/45 mt-1.5 uppercase tracking-widest leading-none">
                          {skill.level}
                        </span>
                      </div>

                      {/* Circular Gauge */}
                      <CircularProgress value={skill.value} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
