"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@heroui/react";
import { useResumeModal } from "../providers";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { openResume, triggerContactHighlight } = useResumeModal();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentTheme = mounted ? theme : "dark";

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  const renderThumbnail = (label) => {
    switch (label) {
      case "Home":
        return (
          <div className="w-full h-full flex flex-col justify-between p-2 bg-gradient-to-br from-neutral-50/80 to-white/90 dark:from-neutral-950/60 dark:to-neutral-900/60 relative">
            <div className="flex items-center space-x-1">
              <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
              <div className="w-8 h-1 bg-foreground/10 rounded" />
            </div>
            <div className="flex items-end justify-between pt-1">
              <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center shrink-0">
                <span className="text-[5px] font-black text-primary leading-none">2026</span>
              </div>
              <div className="w-10 h-3 bg-foreground/5 rounded flex items-center justify-center shrink-0">
                <span className="text-[4px] text-foreground/40 font-mono font-bold leading-none">MERN</span>
              </div>
            </div>
          </div>
        );
      case "About":
        return (
          <div className="w-full h-full flex items-center p-2.5 bg-gradient-to-br from-neutral-50/90 to-white/95 dark:from-neutral-950/70 dark:to-neutral-900/70 relative">
            <div className="flex items-center space-x-2.5 w-full">
              {/* Profile Ring Avatar Mock */}
              <div className="w-8.5 h-8.5 rounded-full bg-gradient-to-tr from-primary via-emerald-500 to-teal-400 p-[1.5px] shadow-[0_4px_12px_rgba(16,185,129,0.25)] shrink-0 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center">
                  <span className="text-[9px] font-black text-primary leading-none">KH</span>
                </div>
              </div>
              <div className="flex-grow flex flex-col space-y-0.5 overflow-hidden">
                <div className="w-10 h-1.5 bg-foreground/25 rounded-full" />
                <div className="w-14 h-1 bg-foreground/10 rounded-full" />
                <div className="flex items-center space-x-1 mt-0.5">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[4.5px] font-extrabold uppercase tracking-[0.18em] text-primary leading-none">Biography</span>
                </div>
              </div>
            </div>
          </div>
        );
      case "Skills":
        return (
          <div className="w-full h-full flex flex-col justify-between p-2.5 bg-gradient-to-br from-neutral-50/90 to-white/95 dark:from-neutral-950/70 dark:to-neutral-900/70 relative">
            <div className="flex items-center justify-between w-full">
              <span className="text-[6px] font-extrabold tracking-[0.16em] text-foreground/45 uppercase select-none">System Architecture</span>
              <div className="flex space-x-0.5">
                <div className="w-1 h-1 rounded-full bg-red-400/80 animate-pulse" />
                <div className="w-1 h-1 rounded-full bg-emerald-400/80" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1 w-full mt-1.5">
              <div className="h-4.5 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-[5px] font-black text-primary uppercase select-none leading-none shadow-sm shadow-primary/5">NJS</div>
              <div className="h-4.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[5px] font-black text-emerald-500 uppercase select-none leading-none shadow-sm shadow-emerald-500/5">RJS</div>
              <div className="h-4.5 rounded-lg bg-foreground/5 border border-border-color/5 flex items-center justify-center text-[5px] font-black text-foreground/60 uppercase select-none leading-none">MDB</div>
            </div>
          </div>
        );
      case "Projects":
        return (
          <div className="w-full h-full flex flex-col justify-between p-2 bg-gradient-to-br from-neutral-50/90 to-white/95 dark:from-neutral-950/70 dark:to-neutral-900/70 relative">
            <div className="w-full h-[88%] rounded-xl bg-white dark:bg-neutral-900 border border-border-color/10 flex flex-col overflow-hidden shadow-md relative">
              {/* Top Browser Control */}
              <div className="h-2 bg-neutral-100 dark:bg-neutral-950 border-b border-border-color/5 shrink-0 flex items-center px-1 space-x-0.5">
                <div className="w-[3px] h-[3px] rounded-full bg-red-400/80" />
                <div className="w-[3px] h-[3px] rounded-full bg-emerald-400/80" />
              </div>
              {/* Project Preview with dynamic layout grid */}
              <div className="flex-grow p-1.5 flex items-center justify-between relative bg-primary/[0.02]">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-emerald-500/10 opacity-60 z-0" />
                <div className="flex flex-col space-y-0.5 z-10">
                  <div className="w-9 h-1.5 bg-foreground/30 rounded-full" />
                  <div className="w-6 h-0.5 bg-foreground/15 rounded-full" />
                </div>
                <div className="w-6.5 h-6.5 rounded-lg bg-primary/20 dark:bg-emerald-500/20 border border-primary/20 dark:border-emerald-500/30 shadow-inner flex items-center justify-center z-10 animate-[pulse_2s_infinite_alternate]">
                  <span className="text-[7.5px] text-primary dark:text-emerald-400">⚡</span>
                </div>
              </div>
            </div>
          </div>
        );
      case "Contact":
        return (
          <div className="w-full h-full flex flex-col justify-between p-2.5 bg-gradient-to-br from-neutral-50/90 to-white/95 dark:from-neutral-950/70 dark:to-neutral-900/70 relative">
            <div className="flex items-center justify-between w-full select-none">
              <span className="text-[6px] font-extrabold tracking-[0.16em] text-foreground/45 uppercase">Secure Gateway</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="flex items-center space-x-2 mt-1 w-full">
              <div className="w-7 h-7 rounded-xl bg-primary/15 dark:bg-primary/25 border border-primary/20 flex items-center justify-center shadow-inner shrink-0 relative">
                <span className="text-[11px] text-primary leading-none animate-[bounce_1.5s_infinite]">✉</span>
              </div>
              <div className="flex flex-col space-y-0.5 overflow-hidden">
                <span className="text-[5.5px] font-black text-foreground/80 tracking-widest uppercase leading-none">LET&apos;S TALK</span>
                <span className="text-[4.5px] font-bold text-primary tracking-wider uppercase leading-none">Instant Ping</span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 bg-transparent ${
        scrolled ? "pt-4 px-4 sm:px-6 lg:px-8 xl:px-12" : "pt-0 px-0"
      }`}
    >
      <div
        className={`mx-auto w-full transition-all duration-500 ${
          scrolled
            ? "max-w-[1100px] bg-white/70 dark:bg-neutral-950/60 backdrop-blur-xl border border-border-color/30 rounded-full px-6 sm:px-8 shadow-[0_20px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_25px_50px_rgba(0,0,0,0.35)] h-16"
            : "max-w-[1440px] px-6 sm:px-8 lg:px-12 bg-transparent border-b border-transparent h-20"
        } flex items-center justify-between`}
      >
        {/* Premium Boutique Logo */}
        <div className="flex-shrink-0 z-10">
          <a href="#home" className="group flex items-center space-x-3 select-none">
            {/* Elegant Geometric Interactive SVG Monogram */}
            <div className="relative w-9 h-9 flex items-center justify-center">
              {/* Outer soft aura circle glow */}
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-[4px] scale-90 group-hover:scale-110 transition-transform duration-500 opacity-60" />
              <svg className="w-8 h-8 text-primary transform group-hover:rotate-[360deg] transition-transform duration-1000 ease-out z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outer diamond outline with rounded corners */}
                <path d="M50 8 L92 50 L50 92 L8 50 Z" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                {/* Stylized intersecting monogram lines forming K & H */}
                <path d="M38 32 V68" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
                <path d="M62 32 V68" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
                <path d="M38 50 H62" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
                <path d="M38 50 L54 34" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
                <path d="M38 50 L54 66" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
              </svg>
            </div>
            
            {/* Dual-line high-end branding text */}
            <div className="flex flex-col text-left">
              <span className="text-sm sm:text-base font-black tracking-tight text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                KAZOL HABIB
              </span>
              <span className="text-[8px] sm:text-[9px] font-extrabold text-foreground/45 uppercase tracking-[0.22em] leading-none mt-0.5 transition-colors duration-300 group-hover:text-foreground/70">
                Full-Stack Engineer
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links with sliding background capsules */}
        <nav className="hidden xl:flex items-center space-x-2">
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={(e) => {
                if (link.href === "#contact") {
                  e.preventDefault();
                  triggerContactHighlight();
                }
              }}
              className="group relative text-[10px] sm:text-[11px] font-extrabold tracking-[0.18em] uppercase text-foreground/75 px-4 py-2.5 rounded-full select-none cursor-pointer overflow-visible transition-colors duration-300"
            >
              {/* Double-text vertical slide reveal */}
              <span className="relative z-10 overflow-hidden block h-3 sm:h-3.5 leading-none">
                <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                  {link.label}
                </span>
                <span className="block absolute top-0 left-0 text-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-[120%] group-hover:translate-y-0">
                  {link.label}
                </span>
              </span>
              
              {/* Sliding Background Glass Capsule */}
              {hoveredIndex === idx && (
                <motion.span
                  layoutId="nav-hover-bg"
                  className="absolute inset-0 bg-neutral-100/85 dark:bg-neutral-900/60 border border-neutral-200/40 dark:border-white/[0.04] shadow-[0_4px_16px_rgba(0,0,0,0.015)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.3)] rounded-full z-0"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}

              {/* Hover Section Micro-Thumbnail Preview Tooltip */}
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: -12, scale: 0.85 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.85 }}
                    transition={{ type: "spring", damping: 18, stiffness: 220 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4.5 w-28 h-16 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_45px_rgba(0,0,0,0.5)] border border-primary/20 dark:border-emerald-500/20 overflow-visible pointer-events-none z-50 flex items-center justify-center"
                  >
                    {/* Tooltip Caret Pointer */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-white dark:bg-neutral-950 border-t border-l border-primary/20 dark:border-emerald-500/20 -mb-1 z-0" />
                    
                    <div className="w-full h-full rounded-xl overflow-hidden relative z-10">
                      {renderThumbnail(link.label)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden xl:flex items-center space-x-4">
          {/* Theme Toggle (Borderless Glass style) */}
          <button
            onClick={toggleTheme}
            className="group p-2 rounded-full hover:bg-primary/10 dark:hover:bg-emerald-500/15 hover:scale-110 active:scale-95 cursor-pointer overflow-hidden relative w-10 h-10 flex items-center justify-center transition-all duration-300 border border-transparent hover:border-primary/25 dark:hover:border-emerald-500/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] shadow-none"
            aria-label="Toggle Theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              {currentTheme === "dark" ? (
                <motion.div
                  key="sun"
                  initial={{ y: 15, rotate: 45, opacity: 0 }}
                  animate={{ y: 0, rotate: 0, opacity: 1 }}
                  exit={{ y: -15, rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="h-5 w-5 text-primary group-hover:rotate-[45deg] group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ y: 15, rotate: -45, opacity: 0 }}
                  animate={{ y: 0, rotate: 0, opacity: 1 }}
                  exit={{ y: -15, rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="h-5 w-5 text-primary group-hover:-rotate-[30deg] group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Premium Resume Button */}
          <Button
            as="a"
            href="https://drive.google.com/file/d/1rBH8Yhz31EWaStXqNlEik50FaHAo0SCv/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              openResume();
            }}
            className="group/btn font-bold bg-primary text-primary-foreground dark:bg-emerald-600 dark:hover:bg-emerald-500 rounded-full lg:px-3.5 xl:px-5 py-2 shadow-md shadow-primary/10 hover:shadow-primary/25 cursor-pointer transition-all duration-300 text-xs tracking-wide border-0 overflow-hidden flex items-center justify-center"
          >
            <span className="relative overflow-hidden block h-3.5 leading-none">
              <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:-translate-y-full">
                Resume
              </span>
              <span className="block absolute top-0 left-0 text-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-[120%] group-hover/btn:translate-y-0 font-bold">
                Resume
              </span>
            </span>
          </Button>
        </div>

        {/* Mobile hamburger menu & theme button */}
        <div className="flex xl:hidden items-center space-x-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="group p-2 rounded-full hover:bg-primary/10 dark:hover:bg-emerald-500/15 hover:scale-105 active:scale-95 w-10 h-10 flex items-center justify-center cursor-pointer transition-all duration-300 border border-transparent hover:border-primary/25 dark:hover:border-emerald-500/30 hover:shadow-[0_0_15px_rgba(16,185,129,0.12)]"
            aria-label="Toggle Theme"
          >
            {currentTheme === "dark" ? (
              <Sun className="h-5 w-5 text-primary group-hover:rotate-[45deg] group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            ) : (
              <Moon className="h-5 w-5 text-primary group-hover:-rotate-[30deg] group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            )}
          </button>

          {/* Hamburger toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full hover:bg-neutral-100/50 dark:hover:bg-neutral-900/40 w-9 h-9 flex items-center justify-center text-foreground cursor-pointer border-0"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </div>

      {/* Mobile Floating Dropdown Menu Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute left-6 right-6 top-full mt-2 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-2xl border border-border-color/20 shadow-2xl rounded-2xl overflow-hidden z-50"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    setIsOpen(false);
                    if (link.href === "#contact") {
                      e.preventDefault();
                      triggerContactHighlight();
                    }
                  }}
                  className="text-xs font-extrabold tracking-[0.18em] uppercase text-foreground/80 hover:text-primary py-2.5 transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.04 }}
                className="pt-4 border-t border-border-color/10"
              >
                <Button
                  as="a"
                  href="https://drive.google.com/file/d/1rBH8Yhz31EWaStXqNlEik50FaHAo0SCv/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    openResume();
                  }}
                  className="group/btn w-full font-bold bg-primary text-primary-foreground dark:bg-emerald-600 dark:hover:bg-emerald-500 rounded-xl py-3.5 flex items-center justify-center space-x-2 border-0 overflow-hidden"
                >
                  <span className="relative overflow-hidden block h-3.5 leading-none">
                    <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:-translate-y-full">
                      View Resume
                    </span>
                    <span className="block absolute top-0 left-0 text-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-[120%] group-hover/btn:translate-y-0 font-bold">
                      View Resume
                    </span>
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
