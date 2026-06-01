"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MessageCircle, ArrowRight, Heart, X } from "lucide-react";
import { Button } from "@heroui/react";
import { useResumeModal } from "../providers";

export default function Contact() {
  const { isContactHighlighted } = useResumeModal();
  const [showEmailToast, setShowEmailToast] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (showEmailToast) {
      const timer = setTimeout(() => {
        setShowEmailToast(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showEmailToast]);

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = "mailto:kazoll.habibb@gmail.com";
    navigator.clipboard.writeText("kazoll.habibb@gmail.com");
    setShowEmailToast(true);
  };
  return (
    <footer id="contact" className="relative w-full pt-20 pb-8 px-6 sm:px-8 lg:px-12 bg-transparent transition-all duration-350 overflow-hidden">
      {/* Premium Dynamic Glowing Separator */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent z-10" />

      {/* Premium Background Mesh and Dot Grid Overlays */}
      <div className="absolute inset-0 bg-mesh-alternate pointer-events-none z-0" />
      <div className="absolute inset-0 bg-dot-grid pointer-events-none z-0" />

      {/* Massive Glowing Sinking Radial Neon Accent */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/8 dark:bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Giant Animating Background Watermark Brand Logo */}
      <div className="absolute right-[-140px] md:right-[-100px] top-1/2 -translate-y-1/2 w-[380px] h-[380px] md:w-[500px] md:h-[500px] text-primary/3 dark:text-primary/4 pointer-events-none select-none z-0">
        {/* Dedicated Backlight Spotlight behind the logo */}
        <div className="absolute inset-0 rounded-full bg-primary/10 dark:bg-primary/5 blur-[95px] pointer-events-none z-0 animate-pulse" />
        <div className="w-full h-full animate-floating-spin relative z-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer diamond outline with rounded corners */}
            <path d="M50 8 L92 50 L50 92 L8 50 Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            {/* Stylized monogram lines forming K & H */}
            <path d="M38 32 V68" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
            <path d="M62 32 V68" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
            <path d="M38 50 H62" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
            <path d="M38 50 L54 34" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
            <path d="M38 50 L54 66" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <div className="mx-auto max-w-[90rem] w-full space-y-16 relative z-10">

        {/* Contact Grid Zone */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Bold Collaborative Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left z-10 relative"
          >
            {/* Pulsing Get in Touch Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/40 dark:bg-neutral-900/35 backdrop-blur-xl border border-primary/10 shadow-sm mx-auto lg:mx-0 select-none">
              <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-extrabold tracking-wider text-primary uppercase">
                Get In Touch
              </span>
            </div>

            <h2 className="text-4.5xl sm:text-5xl lg:text-6.5xl font-black tracking-tight text-foreground leading-[1.05] max-w-2xl">
              Let's build something <br />
              <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">exceptional</span> together.
            </h2>
            <p className="text-sm sm:text-base text-foreground/60 max-w-lg leading-relaxed mx-auto lg:mx-0 font-normal">
              Whether you need an optimized React application, a highly-converting Webflow landing page, or architectural guidance on web performance, I am always ready to collaborate. Let's connect!
            </p>
          </motion.div>

          {/* Right Column: Premium Glassmorphic Connect Deck */}
          <div className={`lg:col-span-5 p-8 bg-white/40 dark:bg-neutral-900/35 backdrop-blur-xl border-0 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.4)] transition-all duration-500 relative group overflow-hidden ${
            isContactHighlighted 
              ? "ring-2 ring-primary/45 shadow-[0_20px_60px_rgba(16,185,129,0.15)] scale-[1.03]" 
              : ""
          }`}>
            <div className="space-y-1 mb-6">
              <h3 className="text-sm font-bold text-foreground/50 uppercase tracking-widest">Connect Area</h3>
              <p className="text-xs text-foreground/45">Reach out via secure digital lines</p>
            </div>

            <div className="space-y-4">
              {/* Email Anchor */}
              <a
                href="mailto:kazoll.habibb@gmail.com"
                onClick={handleEmailClick}
                className="flex items-center space-x-3.5 p-4 rounded-2xl border-0 bg-neutral-100/50 hover:bg-neutral-100/80 dark:bg-neutral-950/30 dark:hover:bg-neutral-950/60 text-foreground/75 hover:text-primary transition-all duration-300 group cursor-pointer shadow-sm"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-105 transition-transform duration-300 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider">Email Me</p>
                  <p className="text-xs sm:text-sm font-bold mt-0.5">kazoll.habibb@gmail.com</p>
                </div>
              </a>

              {/* Call Anchor */}
              <a
                href="tel:+8801760944167"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "tel:+8801760944167";
                }}
                className="flex items-center space-x-3.5 p-4 rounded-2xl border-0 bg-neutral-100/50 hover:bg-neutral-100/80 dark:bg-neutral-950/30 dark:hover:bg-neutral-950/60 text-foreground/75 hover:text-primary transition-all duration-300 group cursor-pointer shadow-sm"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-105 transition-transform duration-300 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider">Call Me</p>
                  <p className="text-xs sm:text-sm font-bold mt-0.5">+880 1760-944167</p>
                </div>
              </a>

              {/* WhatsApp Connect */}
              <a
                href="https://wa.me/8801760944167"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full font-bold bg-primary text-primary-foreground dark:bg-emerald-600 dark:hover:bg-emerald-500 rounded-xl h-12 shadow-lg shadow-primary/15 hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer text-sm tracking-wide hover:scale-101 active:scale-99 border-0"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Connect</span>
              </a>
            </div>
          </div>

        </div>

        {/* Minimal Editorial Footer */}
        <div className="pt-8 border-t border-border-color/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[10px] sm:text-xs font-semibold text-foreground/40 relative z-10">
          <div>
            <span>© 2026 Kazol Habib. Designing Experiences. Engineering Futures. All rights reserved.</span>
          </div>
          <div className="flex items-center justify-center space-x-1.5 select-none">
            <span>Built with Next.js, HeroUI & Passion</span>
            <Heart className="h-3.5 w-3.5 text-primary fill-primary animate-[pulse_1.2s_infinite]" />
          </div>
        </div>

      </div>

      {mounted && typeof document !== "undefined"
        ? createPortal(
            <AnimatePresence>
              {showEmailToast && (
                <div className="fixed top-6 right-6 z-[100000] w-full max-w-[90vw] sm:max-w-[360px] pointer-events-auto">
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95, x: 20 }}
                    animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
                    exit={{ opacity: 0, y: -15, scale: 0.95, x: 15 }}
                    transition={{ type: "spring", damping: 25, stiffness: 220 }}
                    className="relative overflow-hidden rounded-2xl border-0 bg-neutral-950/95 dark:bg-neutral-950/98 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-4 text-white"
                  >
                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-primary" />
                    <div className="flex items-center space-x-3 pl-1">
                      <div className="p-2 rounded-xl bg-primary/10 text-primary">
                        <Mail className="h-4.5 w-4.5" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-xs font-bold text-white">Email Address Copied!</h4>
                        <p className="text-[10px] text-neutral-400 mt-0.5">kazoll.habibb@gmail.com</p>
                      </div>
                      <button onClick={() => setShowEmailToast(false)} className="text-neutral-400 hover:text-white p-1">
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>,
            document.body
          )
        : null}
    </footer>
  );
}
