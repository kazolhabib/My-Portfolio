"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, FileText, Download } from "lucide-react";

export default function ResumeModal({ isOpen, onClose }) {
  const resumeUrl = "https://drive.google.com/file/d/1rBH8Yhz31EWaStXqNlEik50FaHAo0SCv/view?usp=drive_link";
  const downloadUrl = "https://drive.google.com/uc?export=download&id=1rBH8Yhz31EWaStXqNlEik50FaHAo0SCv";
  const embedUrl = "https://drive.google.com/file/d/1rBH8Yhz31EWaStXqNlEik50FaHAo0SCv/preview";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden">
          {/* Blur Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="relative bg-card-bg border border-border-color rounded-[28px] w-full max-w-[1000px] h-[85vh] max-h-[780px] flex flex-col overflow-hidden shadow-2xl z-10"
          >
            {/* Header Deck */}
            <div className="flex h-16 shrink-0 items-center justify-between px-6 border-b border-border-color bg-background/30 backdrop-blur-sm">
              <div className="flex items-center space-x-2.5">
                <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/25 text-primary">
                  <FileText className="h-4.5 w-4.5" />
                </div>
                <span className="text-sm font-bold tracking-tight text-foreground">
                  Kazol Habib — Professional Resume
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center space-x-1.5 font-bold text-xs text-foreground/80 hover:text-primary bg-neutral-100/60 dark:bg-neutral-900/60 hover:bg-primary/5 dark:hover:bg-primary/10 border border-border-color hover:border-primary rounded-xl px-4 py-2 transition-all duration-200 cursor-pointer"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Open Drive</span>
                </a>
                
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-xl border border-border-color hover:border-primary text-foreground/60 hover:text-primary transition-all duration-200 cursor-pointer w-9 h-9 flex items-center justify-center bg-neutral-100/60 dark:bg-neutral-900/60 hover:bg-primary/5 dark:hover:bg-primary/10"
                  aria-label="Close Modal"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>
            </div>

            {/* Embedded Iframe Preview Container */}
            <div className="flex-grow w-full h-full bg-neutral-50 dark:bg-neutral-950 p-1.5 relative">
              <iframe
                src={embedUrl}
                className="w-full h-full border-0 rounded-[20px] bg-card-bg shadow-inner"
                title="Kazol Habib Resume Preview"
                allow="autoplay"
              />
            </div>
            
            {/* Footer actions */}
            <div className="h-16 shrink-0 flex items-center justify-between px-6 border-t border-border-color bg-background/30 backdrop-blur-sm">
              <p className="text-[10px] sm:text-xs text-foreground/45 font-medium">
                ✦ Embedded via Secure Google Cloud PDF Engine
              </p>
              
              <div className="flex items-center space-x-2">
                <a
                  href={downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 font-bold text-xs bg-primary text-primary-foreground hover:scale-[1.02] active:scale-[0.98] rounded-xl px-5 py-2.5 shadow-md shadow-primary/10 hover:shadow-primary/20 transition-all duration-200 cursor-pointer"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
