"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, AlertCircle, ExternalLink } from "lucide-react";
import { Button } from "@heroui/react";

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function SourceCodeButton({ project, className = "" }) {
  const [showToast, setShowToast] = useState(false);
  const [mounted, setMounted] = useState(false);

  const projectsWithRepo = ["pethaven", "legalease", "crowdfunding"];
  const isWebflow = !projectsWithRepo.includes(project.id);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
  }, []);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleClick = (e) => {
    if (isWebflow) {
      e.preventDefault();
      setShowToast(true);
    }
  };

  return (
    <>
      <a
        href={isWebflow ? "#" : project.github}
        onClick={handleClick}
        target={isWebflow ? undefined : "_blank"}
        rel={isWebflow ? undefined : "noopener noreferrer"}
        className={className}
      >
        <GithubIcon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
        <span>Source Code</span>
      </a>

      {mounted && typeof document !== "undefined"
        ? createPortal(
            <AnimatePresence>
              {showToast && (
                <div className="fixed top-6 right-6 z-[100000] w-full max-w-[90vw] sm:max-w-[26.25rem] pointer-events-auto">
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95, x: 20 }}
                    animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
                    exit={{ opacity: 0, y: -15, scale: 0.95, x: 15 }}
                    transition={{ type: "spring", damping: 25, stiffness: 220 }}
                    className="relative overflow-hidden rounded-2xl border border-emerald-500/35 bg-neutral-950/90 dark:bg-neutral-950/95 backdrop-blur-xl shadow-2xl p-5 text-white"
                    style={{
                      backgroundImage: "radial-gradient(circle at 100% 0%, rgba(16, 185, 129, 0.15) 0%, transparent 60%)"
                    }}
                  >
                    {/* Glowing Left Stripe Accent */}
                    <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-emerald-500" />

                    {/* Toast Layout Grid */}
                    <div className="flex items-start space-x-3.5 pl-1.5">
                      {/* Glowing Circle Icon Container */}
                      <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 shrink-0 shadow-inner">
                        <Sparkles className="h-5 w-5 animate-pulse" />
                      </div>

                      {/* Content */}
                      <div className="flex-grow space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-extrabold tracking-tight text-white flex items-center gap-1.5">
                            Webflow Visual Creation
                          </h4>
                          {/* Close Button */}
                          <button
                            onClick={() => setShowToast(false)}
                            className="-mt-1 -mr-1 p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800/60 transition-colors cursor-pointer"
                            aria-label="Dismiss Notification"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <p className="text-xs text-neutral-300 leading-relaxed font-normal pt-1">
                          This premium showcase was custom-designed and visually built utilizing <strong className="text-emerald-400 font-semibold">Webflow&apos;s visual engine</strong>. 
                        </p>
                        <p className="text-[0.6875rem] text-neutral-400 leading-relaxed font-light">
                          Since it was constructed directly inside Webflow, there is no traditional public code repository available. We invite you to experience its full responsive design by clicking <strong className="text-white">Live Preview</strong>!
                        </p>

                        {/* Actions inside Toast */}
                        <div className="flex items-center space-x-2.5 pt-3">
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-bold rounded-lg px-3 py-1.5 text-[0.625rem] sm:text-xs flex items-center gap-1 hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 cursor-pointer shadow-md shadow-emerald-500/10"
                          >
                            <span>Explore Live</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                          <button
                            onClick={() => setShowToast(false)}
                            className="text-[0.625rem] sm:text-xs font-bold text-neutral-400 hover:text-white transition-colors cursor-pointer px-2 py-1"
                          >
                            Dismiss
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Subtle Timing Progress Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-800">
                      <motion.div
                        initial={{ width: "100%" }}
                        animate={{ width: "0%" }}
                        transition={{ duration: 5, ease: "linear" }}
                        className="h-full bg-emerald-500"
                      />
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>,
            document.body
          )
        : null}
    </>
  );
}
