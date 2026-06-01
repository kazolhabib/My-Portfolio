"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate Scroll Position to show/hide button
      const scrollY = window.scrollY;
      if (scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate Scroll Progress Percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial run to calculate correctly
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Circumference of our progress ring (radius = 21)
  const radius = 21;
  const circumference = 2 * Math.PI * radius; // ~131.9
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", damping: 15, stiffness: 200 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-white/80 dark:bg-neutral-950/70 backdrop-blur-xl border border-border-color/30 text-primary shadow-[0_15px_35px_-5px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_45px_rgba(0,0,0,0.5)] flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-neutral-50 dark:hover:bg-neutral-900 group"
          aria-label="Back to Top"
        >
          {/* Scroll Progress Ring */}
          <svg className="absolute -rotate-90 w-12 h-12 pointer-events-none" viewBox="0 0 50 50">
            <circle
              cx="25"
              cy="25"
              r={radius}
              className="stroke-neutral-200/20 dark:stroke-neutral-800/40"
              strokeWidth="3.5"
              fill="transparent"
            />
            <circle
              cx="25"
              cy="25"
              r={radius}
              className="stroke-primary transition-all duration-100"
              strokeWidth="3.5"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>

          {/* Floating Arrow Icon */}
          <ArrowUp className="h-5 w-5 transform group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300 z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
