"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, AlertTriangle, Sparkles, FolderGit2, Cpu, Heart, Layers, Video, TrendingUp } from "lucide-react";
import Image from "next/image";
import SourceCodeButton from "./SourceCodeButton";

// Dynamic branding configuration mapping matching Projects section themes
const BRAND_THEMES = {
  amply: {
    badge: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20 dark:border-emerald-400/10",
    glowColor: "rgba(16, 185, 129, 0.15)",
    textAccent: "text-emerald-600 dark:text-emerald-400",
    buttonAccent: "bg-emerald-500 hover:bg-emerald-600 text-white dark:bg-emerald-600 dark:hover:bg-emerald-500",
    icon: Layers,
    focus: "Webflow CMS Architecture",
    stats: "LCP: 0.8s Boost"
  },
  vadio: {
    badge: "bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-500/20 dark:border-sky-400/10",
    glowColor: "rgba(14, 165, 233, 0.15)",
    textAccent: "text-sky-600 dark:text-sky-400",
    buttonAccent: "bg-sky-500 hover:bg-sky-600 text-white dark:bg-sky-600 dark:hover:bg-sky-500",
    icon: Video,
    focus: "Adaptive WebRTC Hook",
    stats: "Sub-100ms Ping"
  },
  tixio: {
    badge: "bg-violet-500/10 text-violet-700 dark:text-violet-400 border-violet-500/20 dark:border-violet-400/10",
    glowColor: "rgba(139, 92, 246, 0.15)",
    textAccent: "text-violet-600 dark:text-violet-400",
    buttonAccent: "bg-violet-500 hover:bg-violet-600 text-white dark:bg-violet-600 dark:hover:bg-violet-500",
    icon: Cpu,
    focus: "Real-time Socket.io Hub",
    stats: "High Concurrency"
  },
  aisuitup: {
    badge: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20 dark:border-amber-400/10",
    glowColor: "rgba(245, 158, 11, 0.15)",
    textAccent: "text-amber-600 dark:text-amber-400",
    buttonAccent: "bg-amber-500 hover:bg-amber-600 text-white dark:bg-amber-600 dark:hover:bg-amber-500",
    icon: Sparkles,
    focus: "Stable Diffusion Pipeline",
    stats: "10k+ Images / hr"
  },
  adsbyjoris: {
    badge: "bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/20 dark:border-rose-400/10",
    glowColor: "rgba(244, 63, 94, 0.15)",
    textAccent: "text-rose-600 dark:text-rose-400",
    buttonAccent: "bg-rose-500 hover:bg-rose-600 text-white dark:bg-rose-600 dark:hover:bg-rose-500",
    icon: TrendingUp,
    focus: "Multi-Platform API Sync",
    stats: "ROAS Optimization"
  },
  pethaven: {
    badge: "bg-teal-500/10 text-teal-700 dark:text-teal-400 border-teal-500/20 dark:border-teal-400/10",
    glowColor: "rgba(20, 184, 166, 0.15)",
    textAccent: "text-teal-600 dark:text-teal-400",
    buttonAccent: "bg-teal-600 hover:bg-teal-500 text-white dark:bg-emerald-600 dark:hover:bg-emerald-500",
    icon: Heart,
    focus: "JWT & Transaction Safety",
    stats: "Transactional ACID"
  }
};

export default function ProjectDetailsModal({ isOpen, project, onClose }) {
  if (!project) return null;

  const theme = BRAND_THEMES[project.id] || {
    badge: "bg-primary/10 text-primary border-primary/20",
    glowColor: "rgba(16, 185, 129, 0.12)",
    textAccent: "text-primary",
    buttonAccent: "bg-primary hover:bg-primary/90 text-primary-foreground",
    icon: FolderGit2,
    focus: "Elite Architecture Study",
    stats: "High Performance"
  };

  const IconComponent = theme.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-hidden">
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/65 dark:bg-black/75 backdrop-blur-md cursor-pointer"
          />

          {/* Atmospheric dynamic glow based on brand signature color */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[75%] rounded-full blur-[140px] opacity-15 pointer-events-none z-0"
            style={{ background: theme.glowColor }}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="relative bg-white/95 dark:bg-neutral-950/95 backdrop-blur-2xl rounded-[2.5rem] w-full max-w-[70rem] h-[90vh] max-h-[50rem] flex flex-col overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.12)] dark:shadow-[0_45px_100px_rgba(0,0,0,0.65)] border border-border-color/10 dark:border-white/[0.04] z-10"
            style={{
              boxShadow: `0 30px 80px rgba(0,0,0,0.12), 0 0 45px -10px ${theme.glowColor.replace('0.15', '0.08')}`
            }}
          >
            {/* Modal Header */}
            <div className="flex h-20 shrink-0 items-center justify-between px-8 border-b border-border-color/10 bg-background/5 backdrop-blur-md z-20">
              <div className="flex items-center space-x-3">
                <div className={`p-2.5 rounded-2xl border ${theme.badge}`}>
                  <IconComponent className="h-5 w-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-extrabold tracking-widest text-primary uppercase">
                    Project Blueprint
                  </span>
                  <span className="text-[11px] font-semibold text-foreground/45">
                    Architectural Details & Case Study
                  </span>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:scale-105 hover:bg-neutral-100 dark:hover:bg-neutral-900 text-foreground/50 hover:text-primary transition-all duration-200 cursor-pointer w-10 h-10 flex items-center justify-center bg-transparent border-0"
                aria-label="Close Modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Modal Content */}
            <div className="flex-grow overflow-y-auto p-6 sm:p-8 space-y-8 custom-scrollbar relative z-10">
              
              {/* Responsive Grid Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Side: Gorgeous mockup screenshot viewport (Col span 7) */}
                <div className="lg:col-span-7 space-y-4 w-full">
                  
                  {/* Browser Mockup Frame */}
                  <div className="w-full rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 shadow-xl relative border border-border-color/10 dark:border-white/[0.04] z-10 group">
                    
                    {/* Browser top header deck */}
                    <div className="flex items-center space-x-1.5 px-4 py-3 bg-neutral-50/80 dark:bg-neutral-950/40 border-b border-border-color/5 shrink-0 select-none">
                      <div className="flex space-x-1.2 shrink-0">
                        <div className="w-1.8 h-1.8 rounded-full bg-red-400/70" />
                        <div className="w-1.8 h-1.8 rounded-full bg-amber-400/70" />
                        <div className="w-1.8 h-1.8 rounded-full bg-emerald-400/70" />
                      </div>
                      <div className="text-[10px] font-mono text-foreground/35 tracking-tight pl-4 overflow-hidden text-ellipsis whitespace-nowrap">
                        {project.live.replace("https://", "").replace("www.", "")}
                      </div>
                    </div>
                    
                    {/* High-fidelity screenshot viewer with zoom/sweep effects */}
                    <div className="relative aspect-[16/10] bg-neutral-100 dark:bg-neutral-950 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`${project.title} Screenshot`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 700px"
                        className="object-cover object-top select-none group-hover:scale-[1.02] transition-transform duration-1000"
                        priority
                      />
                      
                      {/* Premium glare sweeps */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 dark:via-white/15 to-transparent -translate-x-full group-hover:animate-shine-sweep pointer-events-none" />
                    </div>
                  </div>

                  <p className="text-[10px] text-foreground/35 text-center italic font-semibold select-none">
                    ✦ Interactive responsive screenshot showcase mockup
                  </p>
                </div>

                {/* Right Side: Detailed Descriptions & Custom Badges (Col span 5) */}
                <div className="lg:col-span-5 space-y-6 w-full">
                  
                  {/* Category & Title */}
                  <div className="space-y-3">
                    <span className={`inline-flex text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border ${theme.badge}`}>
                      {project.category}
                    </span>
                    <h2 className="text-2xl sm:text-3.5xl font-black tracking-tight text-foreground leading-[1.15]">
                      {project.title}
                    </h2>
                  </div>

                  {/* Project description card */}
                  <div className="p-6 rounded-2.5xl bg-neutral-50/50 dark:bg-neutral-900/20 border border-border-color/10 dark:border-white/[0.02] space-y-2">
                    <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-foreground/35">Executive Summary</h4>
                    <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed font-normal">
                      {project.description}
                    </p>
                  </div>

                  {/* Technical Stack Badges Card */}
                  <div className="p-6 rounded-2.5xl bg-neutral-50/50 dark:bg-neutral-900/20 border border-border-color/10 dark:border-white/[0.02] space-y-3">
                    <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-foreground/35">Technology Stack</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-neutral-100/60 dark:bg-neutral-950/45 text-foreground/75 border border-border-color/10 dark:border-transparent select-none cursor-default hover:bg-primary/10 hover:text-primary transition-all duration-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

              {/* Technical Challenges & Improvements Split Deck (Cols 2 on wider screens) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border-color/10 dark:border-white/[0.04]">
                
                {/* Challenge Block */}
                <div className="p-6 rounded-2.5xl bg-red-500/[0.03] dark:bg-red-500/[0.05] border border-red-500/10 dark:border-red-500/5 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-red-500">
                      <AlertTriangle className="h-4.5 w-4.5" />
                      <h4 className="text-sm font-extrabold tracking-tight uppercase text-red-600 dark:text-red-400">Challenges Faced</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed font-normal">
                      {project.challenges}
                    </p>
                  </div>
                  <div className="text-[10px] text-red-500/55 font-mono pt-2 select-none">// Resolved via architectural design hooks</div>
                </div>

                {/* Improvements Block */}
                <div 
                  className="p-6 rounded-2.5xl bg-neutral-50/50 dark:bg-neutral-900/20 border border-border-color/10 dark:border-white/[0.02] flex flex-col justify-between space-y-4"
                  style={{ borderLeft: `4px solid ${theme.glowColor.replace('0.15', '0.7')}` }}
                >
                  <div className="space-y-2">
                    <div className={`flex items-center space-x-2 ${theme.textAccent}`}>
                      <Sparkles className="h-4.5 w-4.5 animate-pulse" />
                      <h4 className="text-sm font-extrabold tracking-tight uppercase">Roadmap & Scaling</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed font-normal">
                      {project.improvements}
                    </p>
                  </div>
                  <div className={`text-[10px] ${theme.textAccent} opacity-60 font-mono pt-2 select-none`}>// Planned optimization targets</div>
                </div>

              </div>

            </div>

            {/* Modal Actions Footer */}
            <div className="h-24 shrink-0 flex flex-col sm:flex-row items-center justify-between px-8 border-t border-border-color/10 bg-background/5 backdrop-blur-md z-20 gap-3 py-4 sm:py-0">
              <span className="hidden md:inline-flex items-center space-x-2 text-[10px] text-foreground/45 font-bold uppercase tracking-wider select-none">
                <span>✦ Elite Engineering Case Study</span>
                <span className={`px-2.5 py-0.5 rounded-full border text-[9px] font-extrabold ${theme.badge}`}>{theme.stats}</span>
              </span>
              
              <div className="flex items-center space-x-3 w-full sm:w-auto">
                <SourceCodeButton
                  project={project}
                  className="flex-1 sm:flex-initial font-bold border border-border-color/10 hover:border-border-color/20 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-900/60 dark:hover:bg-neutral-900 text-foreground rounded-2xl h-12 transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer text-xs px-6 select-none shadow-sm"
                />

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 sm:flex-initial font-bold text-white hover:scale-[1.02] active:scale-[0.98] rounded-2xl h-12 px-6 shadow-md transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer text-xs border-0 ${theme.buttonAccent}`}
                >
                  <span>Live Preview</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
