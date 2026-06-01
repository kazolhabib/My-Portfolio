"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FolderGit2, ArrowRight } from "lucide-react";
import { Button } from "@heroui/react";
import Image from "next/image";
import { PROJECTS } from "../data/projects";
import ProjectDetailsModal from "./ProjectDetailsModal";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="relative w-full py-16 md:py-24 px-6 sm:px-8 lg:px-12 bg-transparent transition-all duration-350 overflow-hidden">
      {/* Dynamic Glowing Separator at the Top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent z-10" />

      {/* Premium Background Mesh and Dot Grid Overlays */}
      <div className="absolute inset-0 bg-mesh-alternate pointer-events-none z-0" />
      <div className="absolute inset-0 bg-dot-grid pointer-events-none z-0" />
      <div className="section-backlight" />

      {/* Floating Radial Neon Lighting Accents */}
      <div className="absolute -top-40 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/8 dark:bg-primary/5 blur-[120px] pointer-events-none z-0 animate-[pulse_6s_infinite_alternate]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/5 dark:bg-emerald-500/3 blur-[140px] pointer-events-none z-0 animate-[pulse_8s_infinite_alternate]" />

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
            <FolderGit2 className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-[10px] sm:text-xs font-extrabold tracking-wider text-primary uppercase">
              Selected Works
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Featured Projects & Engineering
          </h2>
          <p className="text-xs sm:text-sm text-foreground/50 max-w-md leading-relaxed font-normal">
            A premium selection of production-grade full-stack ecosystems, collaboration spaces, and developer portals.
          </p>
        </motion.div>

        {/* 3-Column Premium Glassmorphic Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white/40 dark:bg-neutral-900/35 backdrop-blur-xl border-0 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.4)] transition-all duration-600 ease-out hover:-translate-y-2 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.06),0_15px_40px_-15px_rgba(5,150,105,0.12)] dark:hover:shadow-[0_45px_90px_-20px_rgba(0,0,0,0.7),0_20px_45px_-15px_rgba(16,185,129,0.18)] p-7 flex flex-col justify-between min-h-[31rem] overflow-hidden group relative z-10"
            >
              {/* Internal Card Glow & Blueprint Backdrops */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
              <div className="absolute inset-0 bg-dot-grid opacity-[0.03] dark:opacity-[0.06] pointer-events-none z-0" />

              <div className="space-y-6 z-10 relative">
                {/* Visual Showcase Graphic with 3D Tilt Mockup */}
                <div className="w-full h-48 rounded-2xl relative overflow-hidden bg-neutral-100/30 dark:bg-neutral-950/20 flex items-center justify-center transition-all duration-500 z-10">
                  {/* Subtle Vector Radar Glow on hover */}
                  <div className="absolute w-[70%] h-[70%] rounded-full bg-primary/20 dark:bg-primary/25 blur-[35px] opacity-0 group-hover:opacity-100 transition-all duration-750 pointer-events-none z-0" />

                  {/* Browser Mockup Window */}
                  <div className="w-[90%] h-[84%] rounded-xl bg-white dark:bg-neutral-900 shadow-xl flex flex-col overflow-hidden transform group-hover:scale-104 group-hover:-translate-y-1.5 group-hover:rotate-[-1.5deg] group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] dark:group-hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.6)] transition-all duration-500 relative border-0 z-10">
                    {/* Mockup Header Control Bar */}
                    <div className="flex items-center space-x-1.5 pb-2 pt-2.5 px-4 bg-neutral-50/60 dark:bg-neutral-950/30 shrink-0 border-b border-border-color/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400/60" />
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                      <div className="text-[9px] text-foreground/30 font-mono ml-2.5 truncate max-w-[150px]">
                        {project.live.replace("https://", "").replace("www.", "")}
                      </div>
                    </div>
                    {/* Screenshot Viewer */}
                    <div className="flex-grow relative bg-neutral-100 dark:bg-neutral-950">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 450px"
                        priority={idx < 4}
                        className="object-cover object-top select-none group-hover:scale-102 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>

                {/* Category, Title, & Description */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-extrabold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed font-normal">
                    {project.short}
                  </p>
                </div>
              </div>

              {/* Stack Capsules & Call-to-Action */}
              <div className="mt-6 space-y-5 z-10 relative">
                {/* Tech Capsules */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-neutral-100/80 dark:bg-neutral-950/40 text-foreground/70 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-350 select-none cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-neutral-100/50 dark:bg-neutral-950/20 text-foreground/45 select-none cursor-default">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                {/* Explorer Button */}
                <button
                  onClick={() => setActiveProject(project)}
                  className="w-full font-bold bg-primary text-primary-foreground dark:bg-emerald-600 dark:hover:bg-emerald-500 rounded-2xl py-4 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-primary/10 hover:shadow-primary/25 cursor-pointer text-sm tracking-wide group/btn"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Details Modal Popup */}
      <ProjectDetailsModal
        isOpen={!!activeProject}
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}

