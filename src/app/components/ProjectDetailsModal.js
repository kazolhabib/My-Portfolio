"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, AlertTriangle, Sparkles, FolderGit2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@heroui/react";
import SourceCodeButton from "./SourceCodeButton";

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function ProjectDetailsModal({ isOpen, project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden">
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/65 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ type: "spring", damping: 26, stiffness: 210 }}
            className="relative bg-white/95 dark:bg-neutral-950/95 backdrop-blur-2xl rounded-[2.5rem] w-full max-w-[68.75rem] h-[85vh] max-h-[48.75rem] flex flex-col overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.15)] dark:shadow-[0_45px_90px_rgba(0,0,0,0.6)] z-10"
          >
            {/* Modal Header */}
            <div className="flex h-16 shrink-0 items-center justify-between px-8 border-b border-border-color/10 bg-background/5 backdrop-blur-md">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-primary/10 text-primary">
                  <FolderGit2 className="h-4.5 w-4.5" />
                </div>
                <span className="text-xs sm:text-sm font-bold tracking-tight text-foreground/90 uppercase">
                  Project Blueprint & Details
                </span>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:scale-105 hover:bg-neutral-100 dark:hover:bg-neutral-900 text-foreground/60 hover:text-primary transition-all duration-200 cursor-pointer w-9 h-9 flex items-center justify-center bg-transparent"
                aria-label="Close Modal"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Scrollable Modal Content */}
            <div className="flex-grow overflow-y-auto p-6 md:p-8 space-y-8 custom-scrollbar">
              
              {/* Responsive Grid Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Side: Stunning high-fidelity showcase screenshot (Col span 7) */}
                <div className="lg:col-span-7 space-y-4">
                  {/* Web Browser Frame Mockup */}
                  <div className="w-full rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 shadow-xl relative border-0">
                    {/* Browser top header deck */}
                    <div className="flex items-center space-y-0 space-x-1.5 px-4 py-3 bg-neutral-200/50 dark:bg-neutral-950/40 border-b border-border-color/5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                      <div className="text-[10px] font-mono text-foreground/35 tracking-tight pl-3 overflow-hidden text-ellipsis whitespace-nowrap">
                        {project.live.replace("https://", "")}
                      </div>
                    </div>
                    
                    {/* The gorgeous generated screenshot itself */}
                    <div className="relative aspect-[16/10] bg-neutral-900/10 flex items-center justify-center overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`${project.title} Screenshot`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 650px"
                        className="object-cover object-top select-none hover:scale-[1.03] transition-transform duration-700"
                        priority
                      />
                    </div>
                  </div>

                  <p className="text-[10px] text-foreground/40 text-center italic">
                    ✦ High-fidelity responsive application screenshot preview
                  </p>
                </div>

                {/* Right Side: Detailed Descriptions & Challenges (Col span 5) */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Category & Title */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest bg-primary/8 px-3 py-1 rounded-full max-w-fit block">
                      {project.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground leading-tight">
                      {project.title}
                    </h2>
                  </div>

                  {/* Core Description */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-foreground/45 uppercase tracking-wider">Project Summary</h3>
                    <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technical Stack Badges */}
                  <div className="space-y-2.5 pt-4 border-t border-border-color/10">
                    <h3 className="text-xs font-bold text-foreground/45 uppercase tracking-wider">Built With</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-neutral-100/80 dark:bg-neutral-900/60 text-foreground/75 cursor-default select-none hover:bg-primary/10 hover:text-primary transition-all duration-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

              {/* Technical Challenges & Improvements Split Deck (Cols 2 on wider screens) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border-color/10">
                
                {/* Challenge Block */}
                <div className="p-6 rounded-2xl bg-red-500/[0.04] dark:bg-red-500/[0.06] flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-red-500">
                      <AlertTriangle className="h-4.5 w-4.5" />
                      <h4 className="text-sm font-bold tracking-tight">Challenges Faced</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                      {project.challenges}
                    </p>
                  </div>
                  <div className="text-[10px] text-red-500/50 font-mono pt-2">// Resolved via architectural design</div>
                </div>

                {/* Improvements Block */}
                <div className="p-6 rounded-2xl bg-primary/[0.04] dark:bg-primary/[0.06] flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-primary">
                      <Sparkles className="h-4.5 w-4.5 animate-pulse" />
                      <h4 className="text-sm font-bold tracking-tight">Roadmap & Improvements</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                      {project.improvements}
                    </p>
                  </div>
                  <div className="text-[10px] text-primary/50 font-mono pt-2">// Planned optimization milestones</div>
                </div>

              </div>

            </div>

            {/* Modal Actions Footer */}
            <div className="h-20 shrink-0 flex items-center justify-between px-8 border-t border-border-color/10 bg-background/5 backdrop-blur-md">
              <span className="hidden sm:inline-block text-[10px] text-foreground/45 font-medium">
                ✦ High fidelity, modular architecture preview
              </span>
              
              <div className="flex items-center space-x-3 w-full sm:w-auto">
                <SourceCodeButton
                  project={project}
                  className="flex-1 sm:flex-initial font-bold border-0 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-foreground rounded-xl h-11 transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer text-xs px-5"
                />

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial font-bold bg-primary text-primary-foreground dark:bg-emerald-600 dark:hover:bg-emerald-500 hover:scale-[1.02] active:scale-[0.98] rounded-xl h-11 px-5 shadow-lg shadow-primary/10 hover:shadow-primary/25 transition-all duration-200 flex items-center justify-center space-x-1.5 cursor-pointer text-xs border-0"
                >
                  <span>Live Preview</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
