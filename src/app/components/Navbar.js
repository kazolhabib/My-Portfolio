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
          <div className="w-full h-full flex flex-col justify-between p-2 bg-neutral-100/50 dark:bg-neutral-950/40 relative">
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
          <div className="w-full h-full flex flex-col justify-between p-2 bg-neutral-100/50 dark:bg-neutral-950/40 relative">
            <div className="space-y-1">
              <div className="w-12 h-1 bg-foreground/25 rounded" />
              <div className="w-16 h-0.5 bg-foreground/15 rounded" />
              <div className="w-14 h-0.5 bg-foreground/15 rounded" />
            </div>
            <div className="flex items-center space-x-1 text-[8px] text-primary">
              <span className="w-1 h-1 rounded-full bg-primary" />
              <span className="text-[4.5px] font-extrabold tracking-wider uppercase leading-none">Biography</span>
            </div>
          </div>
        );
      case "Skills":
        return (
          <div className="w-full h-full flex items-center justify-center p-2 bg-neutral-100/50 dark:bg-neutral-950/40 relative">
            <div className="grid grid-cols-2 gap-0.5 w-full">
              <div className="h-4 rounded bg-primary/10 border border-primary/20 flex items-center justify-center text-[5px] font-bold text-primary uppercase select-none leading-none">Next</div>
              <div className="h-4 rounded bg-foreground/5 flex items-center justify-center text-[5px] font-bold uppercase select-none leading-none">Auth</div>
              <div className="h-4 rounded bg-foreground/5 flex items-center justify-center text-[5px] font-bold uppercase select-none leading-none">Express</div>
              <div className="h-4 rounded bg-foreground/5 flex items-center justify-center text-[5px] font-bold uppercase select-none leading-none">Mongo</div>
            </div>
          </div>
        );
      case "Projects":
        return (
          <div className="w-full h-full flex flex-col justify-between p-2 bg-neutral-100/50 dark:bg-neutral-950/40 relative">
            <div className="w-full h-[72%] rounded bg-white dark:bg-neutral-900 border border-border-color/10 flex flex-col overflow-hidden shadow-sm">
              <div className="h-1 bg-neutral-50 dark:bg-neutral-950 shrink-0 border-b border-border-color/5 flex items-center px-0.5 space-x-0.5">
                <div className="w-0.5 h-0.5 rounded-full bg-red-400/80" />
                <div className="w-0.5 h-0.5 rounded-full bg-emerald-400/80" />
              </div>
              <div className="flex-grow bg-primary/10 relative flex items-center justify-center">
                <span className="text-[5px] text-primary font-black tracking-wider uppercase leading-none">Case Study</span>
              </div>
            </div>
            <div className="w-10 h-0.5 bg-foreground/15 rounded self-start mt-0.5" />
          </div>
        );
      case "Contact":
        return (
          <div className="w-full h-full flex items-center justify-center p-2 bg-neutral-100/50 dark:bg-neutral-950/40 relative">
            <div className="flex flex-col items-center space-y-1">
              <div className="text-primary animate-pulse text-xs leading-none">✉</div>
              <div className="w-14 h-2 bg-primary/10 rounded-full border border-primary/20 flex items-center justify-center">
                <span className="text-[4px] text-primary font-extrabold tracking-widest uppercase leading-none">Let&apos;s talk</span>
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
        scrolled ? "pt-4 px-4 sm:px-6 md:px-12" : "pt-0 px-0"
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
        <nav className="hidden md:flex items-center space-x-2">
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
              className="relative text-[10px] sm:text-[11px] font-extrabold tracking-[0.18em] uppercase text-foreground/75 hover:text-primary transition-all duration-300 px-4 py-2 rounded-full select-none cursor-pointer"
            >
              <span className="relative z-10">{link.label}</span>
              
              {/* Sliding Background Capsule */}
              {hoveredIndex === idx && (
                <motion.span
                  layoutId="nav-hover-bg"
                  className="absolute inset-0 bg-primary/8 dark:bg-primary/10 rounded-full z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}

              {/* Hover Section Micro-Thumbnail Preview */}
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: -12, scale: 0.85 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.85 }}
                    transition={{ type: "spring", damping: 16, stiffness: 220 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3.5 w-28 h-16 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-border-color/30 overflow-hidden pointer-events-none z-50 flex items-center justify-center"
                  >
                    {renderThumbnail(link.label)}
                  </motion.div>
                )}
              </AnimatePresence>
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Theme Toggle (Borderless Glass style) */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-neutral-100/50 dark:hover:bg-neutral-900/40 cursor-pointer overflow-hidden relative w-9 h-9 flex items-center justify-center transition-all duration-200 border-0"
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
                  <Sun className="h-4.5 w-4.5 text-primary" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ y: 15, rotate: -45, opacity: 0 }}
                  animate={{ y: 0, rotate: 0, opacity: 1 }}
                  exit={{ y: -15, rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="h-4.5 w-4.5 text-primary" />
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
            className="font-bold bg-primary text-primary-foreground dark:bg-emerald-600 dark:hover:bg-emerald-500 rounded-full px-5 py-2 shadow-md shadow-primary/10 hover:shadow-primary/25 cursor-pointer transition-all duration-300 text-xs tracking-wide border-0"
          >
            Resume
          </Button>
        </div>

        {/* Mobile hamburger menu & theme button */}
        <div className="flex md:hidden items-center space-x-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-neutral-100/50 dark:hover:bg-neutral-900/40 w-9 h-9 flex items-center justify-center cursor-pointer border-0"
            aria-label="Toggle Theme"
          >
            {currentTheme === "dark" ? (
              <Sun className="h-4.5 w-4.5 text-primary" />
            ) : (
              <Moon className="h-4.5 w-4.5 text-primary" />
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
                  className="w-full font-bold bg-primary text-primary-foreground dark:bg-emerald-600 dark:hover:bg-emerald-500 rounded-xl py-3.5 flex items-center justify-center space-x-2 border-0"
                >
                  <span>View Resume</span>
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
