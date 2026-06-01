"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, ArrowUpRight, Layers, Video, Sparkles, TrendingUp, Heart, Cpu, Filter } from "lucide-react";
import Image from "next/image";
import { PROJECTS } from "../data/projects";
import ProjectDetailsModal from "./ProjectDetailsModal";
import InteractiveDotGrid from "./InteractiveDotGrid";

// Dynamic branding configuration mapping for custom card themes
const BRAND_THEMES = {
  amply: {
    gradient: "hover:border-emerald-500/25 dark:hover:border-emerald-400/20",
    badge: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20 dark:border-emerald-400/10",
    glow: "rgba(16, 185, 129, 0.11)",
    icon: Layers,
    focus: "Webflow CMS Architecture",
    stats: "LCP: 0.8s Boost"
  },
  vadio: {
    gradient: "hover:border-sky-500/25 dark:hover:border-sky-400/20",
    badge: "bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-500/20 dark:border-sky-400/10",
    glow: "rgba(14, 165, 233, 0.11)",
    icon: Video,
    focus: "Adaptive WebRTC Hook",
    stats: "Sub-100ms Ping"
  },
  tixio: {
    gradient: "hover:border-violet-500/25 dark:hover:border-violet-400/20",
    badge: "bg-violet-500/10 text-violet-700 dark:text-violet-400 border-violet-500/20 dark:border-violet-400/10",
    glow: "rgba(139, 92, 246, 0.11)",
    icon: Cpu,
    focus: "Real-time Socket.io Hub",
    stats: "High Concurrency"
  },
  aisuitup: {
    gradient: "hover:border-amber-500/25 dark:hover:border-amber-400/20",
    badge: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20 dark:border-amber-400/10",
    glow: "rgba(245, 158, 11, 0.11)",
    icon: Sparkles,
    focus: "Stable Diffusion Pipeline",
    stats: "10k+ Images / hr"
  },
  adsbyjoris: {
    gradient: "hover:border-rose-500/25 dark:hover:border-rose-400/20",
    badge: "bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/20 dark:border-rose-400/10",
    glow: "rgba(244, 63, 94, 0.11)",
    icon: TrendingUp,
    focus: "Multi-Platform API Sync",
    stats: "ROAS Optimization"
  },
  pethaven: {
    gradient: "hover:border-teal-500/25 dark:hover:border-teal-400/20",
    badge: "bg-teal-500/10 text-teal-700 dark:text-teal-400 border-teal-500/20 dark:border-teal-400/10",
    glow: "rgba(20, 184, 166, 0.11)",
    icon: Heart,
    focus: "JWT & Transaction Safety",
    stats: "Transactional ACID"
  }
};

const FILTERS = ["All", "Full-Stack", "SaaS & AI", "Webflow & Frontend"];

const getProjectGroup = (project) => {
  if (project.id === "tixio" || project.id === "pethaven") return "Full-Stack";
  if (project.id === "vadio" || project.id === "aisuitup") return "SaaS & AI";
  if (project.id === "amply" || project.id === "adsbyjoris") return "Webflow & Frontend";
  return "Other";
};

// Premium subcomponent with cursor spotlight coordinate-tracking hover effects
function ProjectCard({ project, idx, onClick }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const theme = BRAND_THEMES[project.id] || {
    gradient: "hover:border-primary/25",
    badge: "bg-primary/10 text-primary border-primary/20",
    glow: "rgba(16, 185, 129, 0.08)",
    icon: FolderGit2,
    focus: "Full-Stack Engineering",
    stats: "High Performance"
  };

  const IconComponent = theme.icon;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -25 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`relative p-7 flex flex-col justify-between min-h-[33rem] rounded-[2.25rem] bg-white/45 dark:bg-neutral-900/35 backdrop-blur-xl border border-border-color/10 dark:border-white/[0.03] shadow-[0_15px_45px_-15px_rgba(0,0,0,0.02)] dark:shadow-[0_20px_55px_-15px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_70px_-20px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_45px_85px_-20px_rgba(0,0,0,0.7)] ${theme.gradient} group cursor-pointer overflow-hidden z-10`}
    >
      {/* Moving coordinate spotlight glowing accent */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0 rounded-[2.25rem]"
          style={{
            background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, ${theme.glow}, transparent 80%)`,
          }}
        />
      )}

      {/* Grid Blueprint dot matrix backdrop */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.02] dark:opacity-[0.05] pointer-events-none z-0 rounded-[2.25rem]" />

      <div className="space-y-6 z-10 relative">
        {/* Showcase graphics viewport inside mock browser frame */}
        <div className="w-full h-48 rounded-2xl relative overflow-hidden bg-neutral-100/30 dark:bg-neutral-950/20 flex items-center justify-center transition-all duration-500 z-10">
          
          {/* Accent radial glow backdrop behind the mockup viewport */}
          <div 
            className="absolute w-[80%] h-[80%] rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-all duration-750 pointer-events-none z-0"
            style={{
              background: `radial-gradient(circle, ${theme.glow.replace("0.11", "0.22")} 0%, transparent 70%)`
            }}
          />

          {/* Browser frame mockup with 3D rotational tilt hooks */}
          <div className="w-[92%] h-[86%] rounded-xl bg-white dark:bg-neutral-900 shadow-lg overflow-hidden transform group-hover:scale-[1.03] group-hover:-translate-y-1.5 group-hover:rotate-[-1.5deg] group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] dark:group-hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.55)] transition-all duration-500 relative border border-border-color/10 dark:border-white/[0.04] z-10">
            
            {/* Glossy mock control bar */}
            <div className="absolute top-0 left-0 right-0 h-8 flex items-center space-x-1.5 px-4 bg-neutral-50/80 dark:bg-neutral-950/40 border-b border-border-color/5 z-20">
              <div className="flex space-x-1.2 shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
              </div>
              <div className="text-[9px] text-foreground/30 font-mono ml-4 truncate max-w-[150px] select-none">
                {project.live.replace("https://", "").replace("www.", "")}
              </div>
            </div>
            
            {/* Screenshot screen with diagonal glares */}
            <div className="absolute bottom-0 left-0 right-0 h-[calc(100%-32px)] bg-neutral-100 dark:bg-neutral-950 overflow-hidden z-10">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 450px"
                priority={idx < 3}
                className="object-cover object-top select-none group-hover:scale-[1.05] transition-transform duration-1000"
              />
              
              {/* Premium diagonal reflection glare sweeps */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 dark:via-white/20 to-transparent -translate-x-full group-hover:animate-shine-sweep pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Content headers and specialty tags */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-extrabold text-foreground/40 uppercase tracking-widest">
              {project.category}
            </span>
            <div className={`flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full border text-[9px] font-extrabold ${theme.badge} select-none`}>
              <IconComponent className="h-3 w-3" />
              <span>{theme.focus}</span>
            </div>
          </div>
          
          <h3 className="text-xl font-extrabold text-foreground group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed font-normal">
            {project.short}
          </p>
        </div>
      </div>

      {/* Cards footers: tech capsules and modular actions */}
      <div className="mt-6 space-y-5 z-10 relative">
        
        {/* Technology Capsules */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-neutral-100/60 dark:bg-neutral-950/45 text-foreground/70 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-350 select-none cursor-default"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-neutral-100/40 dark:bg-neutral-950/20 text-foreground/45 select-none cursor-default">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>

        {/* Solid structural separator */}
        <div className="w-full h-[1px] bg-border-color/10 dark:bg-white/[0.04]" />

        {/* Metrics strip and Explorer CTAs */}
        <div className="flex items-center justify-between space-x-3">
          <div className="flex flex-col space-y-0.5 select-none">
            <span className="text-[8px] uppercase tracking-wider font-extrabold text-foreground/35">Specialty Highlight</span>
            <span className="text-xs font-extrabold text-foreground/75 tracking-tight">{theme.stats}</span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="group/btn flex items-center space-x-2 px-5 py-3 rounded-xl font-extrabold text-xs tracking-wider uppercase bg-primary text-primary-foreground dark:bg-emerald-600 dark:hover:bg-emerald-500 transition-all duration-300 shadow-md shadow-primary/10 hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer overflow-hidden"
          >
            <span className="relative overflow-hidden block h-3.5 leading-none">
              <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:-translate-y-full">
                Case Study
              </span>
              <span className="block absolute top-0 left-0 text-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-[120%] group-hover/btn:translate-y-0 font-extrabold">
                Case Study
              </span>
            </span>
            <ArrowUpRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter(p => getProjectGroup(p) === activeFilter);

  return (
    <section id="projects" className="relative w-full py-16 md:py-24 px-6 sm:px-8 lg:px-12 bg-transparent transition-all duration-350 overflow-hidden">
      
      {/* Dynamic Glowing Separator at the Top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent z-10" />

      {/* Premium Background Mesh and Dot Grid Overlays */}
      <div className="absolute inset-0 bg-mesh-alternate pointer-events-none z-0" />
      <InteractiveDotGrid />

      {/* Floating Radial Neon Lighting Accents */}
      <div className="absolute -top-40 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/8 dark:bg-primary/5 blur-[120px] pointer-events-none z-0 animate-[pulse_6s_infinite_alternate]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/5 dark:bg-emerald-500/3 blur-[140px] pointer-events-none z-0 animate-[pulse_8s_infinite_alternate]" />

      <div className="relative z-10 mx-auto max-w-[90rem] w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col space-y-3 max-w-xl"
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
            <p className="text-xs sm:text-sm text-foreground/50 leading-relaxed font-normal">
              A premium selection of production-grade full-stack ecosystems, collaboration spaces, and developer portals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            
          </motion.div>
        </div>

        {/* Premium luxury segmented filter pill selection */}
        <div className="flex justify-center mb-14 relative z-10 w-full px-4">
          <div className="flex flex-wrap items-center justify-center gap-2 p-2 rounded-[2rem] bg-white/40 dark:bg-neutral-950/40 border border-border-color/10 dark:border-white/[0.03] backdrop-blur-xl max-w-3xl shadow-lg relative">
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative px-5 py-2.5 rounded-[1.25rem] text-[10px] sm:text-[11px] font-extrabold tracking-[0.16em] uppercase cursor-pointer transition-all duration-350 select-none ${
                    isActive
                      ? "text-white dark:text-white"
                      : "text-foreground/50 hover:text-foreground/85 hover:bg-white/50 dark:hover:bg-neutral-900/50"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 bg-primary dark:bg-emerald-600 rounded-[1.25rem] z-0 shadow-md shadow-primary/10 dark:shadow-emerald-500/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{filter}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* High fidelity modular grid cards structure */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[40rem]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                idx={idx}
                onClick={() => setActiveProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Case studies details popup modal drawer */}
      <ProjectDetailsModal
        isOpen={!!activeProject}
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
