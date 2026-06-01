"use client";

import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Download, ArrowUpRight, Mail, MapPin, Globe, Sparkles } from "lucide-react";
import { Button } from "@heroui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useResumeModal } from "../providers";
import InteractiveDotGrid from "./InteractiveDotGrid";

// Modern custom inline brand SVGs
const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Custom inline SVGs for brands

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TECH_TAGS = [
  "Next.JS",
  "React.JS",
  "Tailwind CSS",
  "TypeScript",
  "JavaScript ES6+",
  "Webflow",
  "Webflow CMS",
  "Client First",
  "Express.JS",
  "Better Auth",
  "MongoDB",
  "Framer Motion",
  "SEO Optimization",
];

export default function Hero() {
  const { openResume, triggerContactHighlight } = useResumeModal();
  const [typedText, setTypedText] = useState("");
  const [copied, setCopied] = useState(false);
  const fullText = "Full-Stack Developer & Webflow Expert";

  // Typing effect logic
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < fullText.length) {
        const nextChar = fullText.charAt(index);
        setTypedText((prev) => prev + nextChar);
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 60);

    return () => clearInterval(intervalId);
  }, []);

  // 3D Tilt Hover Animation Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-120, 120], [10, -10]);
  const rotateY = useTransform(x, [-120, 120], [-10, 10]);

  const springConfig = { damping: 25, stiffness: 220 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section className="relative w-full pt-28 pb-12 md:pt-36 md:pb-20 px-6 sm:px-8 lg:px-12 bg-transparent transition-all duration-350 overflow-hidden">
      {/* Premium Background Mesh and Dot Grid Overlays */}
      <div className="absolute inset-0 bg-mesh-alternate pointer-events-none z-0" />
      <InteractiveDotGrid />

      {/* Floating Radial Neon Lighting Accents */}
      <div className="absolute -top-60 right-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px] pointer-events-none z-0 opacity-60 animate-[pulse_8s_infinite_alternate]" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none z-0 opacity-40 animate-[pulse_6s_infinite_alternate]" />

      <div className="mx-auto max-w-[1440px] w-full relative z-10">

        {/* Bento Grid Layout locked strictly at max-w-1440px */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">

          {/* Card 1: Intro Deck (Col span 8, Row span 2) */}
          <div className="md:col-span-6 lg:col-span-8 p-8 md:p-12 bg-white/40 dark:bg-neutral-900/35 backdrop-blur-xl border-0 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.4)] transition-all duration-600 ease-out hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(0,0,0,0.05),0_15px_40px_-15px_rgba(5,150,105,0.08)] dark:hover:shadow-[0_35px_70px_rgba(0,0,0,0.65),0_20px_45px_-15px_rgba(16,185,129,0.12)] flex flex-col justify-between min-h-[340px] overflow-hidden group relative">
            {/* Card Glow & Grid Backdrops */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
            <div className="absolute inset-0 bg-dot-grid opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-0" />

            <div className="space-y-6 z-10 relative">
              {/* Tech Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-primary/8 text-primary max-w-fit shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-md z-10 select-none">
                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-primary uppercase">
                  ✦ Next-Gen Full-Stack Architect
                </span>
              </div>

              {/* Title / Name */}
              <h1 className="text-4xl sm:text-5xl lg:text-6.5xl font-black tracking-tight text-foreground leading-[1.05]">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent transition-opacity duration-300">
                  Kazol Habib
                </span>
              </h1>

              {/* Typing Subtitle */}
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-foreground/75 min-h-[30px] flex items-center">
                <span>{typedText}</span>
                <span className="w-1 h-5 ml-1 bg-primary animate-[pulse_0.9s_infinite] inline-block shrink-0" />
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-foreground/60 max-w-xl leading-relaxed mt-6 z-10 relative font-normal">
              I fashion highly custom, pixel-perfect digital systems with Next.js & Tailwind CSS. Specializing in award-winning interactive layouts, fast render times, and secure backend systems with Express, MongoDB, and Better Auth.
            </p>
          </div>

          {/* Card 2: Luxurious Asymmetrical Editorial Polaroid Showcase (Col span 4, Row span 2) */}
          <div className="md:col-span-6 lg:col-span-4 lg:row-span-2 p-6 sm:p-8 bg-gradient-to-tr from-white/40 via-white/30 to-white/10 dark:from-neutral-900/35 dark:via-neutral-900/20 dark:to-neutral-900/5 backdrop-blur-xl border-0 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.4)] transition-all duration-600 ease-out hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(0,0,0,0.05),0_15px_40px_-15px_rgba(5,150,105,0.08)] dark:hover:shadow-[0_35px_70px_rgba(0,0,0,0.65),0_20px_45px_-15px_rgba(16,185,129,0.12)] flex flex-col items-center justify-between min-h-[480px] sm:min-h-[500px] relative overflow-hidden group/card">
            {/* Card Glow & Grid Backdrops */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/[0.02] opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
            <div className="absolute inset-0 bg-dot-grid opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-0" />

            {/* Soft designer lighting bleed behind the stack */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-tr from-primary/10 to-amber-500/10 blur-3xl opacity-50 group-hover/card:scale-125 transition-transform duration-1000 pointer-events-none" />

            {/* 3D Motion Portrait deck */}
            <motion.div
              style={{ rotateX: springRotateX, rotateY: springRotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative cursor-pointer w-[235px] h-[305px] sm:w-[265px] sm:h-[345px] group/portrait transition-all duration-300 z-10"
            >
              {/* Backing Card Layer A: Warm Emerald Accent (Rotated Left) */}
              <div
                style={{ transform: "translateZ(-15px) rotate(-6deg)" }}
                className="absolute inset-0 rounded-[2.2rem] bg-gradient-to-tr from-primary/15 to-primary/35 border border-primary/20 pointer-events-none group-hover/portrait:rotate-[-2deg] group-hover/portrait:scale-102 transition-transform duration-700 ease-out"
              />

              {/* Backing Card Layer B: Luxurious Pale Amber/Gold Accent (Rotated Right) */}
              <div
                style={{ transform: "translateZ(-8px) rotate(4deg)" }}
                className="absolute inset-0 rounded-[2.2rem] bg-gradient-to-bl from-amber-500/15 to-amber-500/25 border border-amber-500/15 pointer-events-none group-hover/portrait:rotate-[1deg] group-hover/portrait:scale-102 transition-transform duration-700 ease-out"
              />

              {/* Main Polaroid Gallery Frame (Centered & Sharp) */}
              <div
                style={{ transform: "translateZ(15px)" }}
                className="absolute inset-0 p-3 pb-5 rounded-[2.2rem] bg-white dark:bg-neutral-900 border border-border-color/10 shadow-2xl flex flex-col justify-between transition-colors duration-500"
              >
                {/* Image Container with precise rounded edges */}
                <div className="relative w-full h-[80%] rounded-[1.6rem] overflow-hidden border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
                  <Image
                    src="/kazol-habib-v2.png"
                    alt="Kazol Habib"
                    fill
                    priority
                    sizes="(max-width: 768px) 235px, 265px"
                    className="object-cover object-center scale-102 group-hover/portrait:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle luxurious natural overlay vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Minimal embedded active status badge inside the photo */}
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-neutral-950/70 backdrop-blur-md border border-white/10 flex items-center space-x-1.5 shadow-md">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-[7.5px] font-extrabold tracking-widest text-neutral-200 uppercase">ACTIVE</span>
                  </div>
                </div>

                {/* Polaroid Signature / Fine Typography Zone */}
                <div className="flex items-top justify-between px-2 pt-2 gap-2 w-full overflow-hidden">
                  <div className="text-left shrink-0">
                    <h4 className="text-[11px] sm:text-xs font-black tracking-wide text-foreground whitespace-nowrap">Kazol Habib</h4>
                    <p className="text-[7.5px] sm:text-[8px] font-bold text-foreground/45 uppercase tracking-widest mt-0.5 whitespace-nowrap">EST. 2021</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-[8px] sm:text-[9px] font-black text-primary tracking-widest uppercase whitespace-nowrap">{"// FULL-STACK ENGINEER"}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Elegant Premium Designer Subtext / Quote */}
            <div className="w-full mt-4 px-2 text-center z-10 relative">
              <p className="text-[10px] sm:text-xs font-medium text-foreground/50 leading-relaxed italic max-w-[260px] mx-auto">
                &ldquo;Expert in crafting premium MERN Stack & Next.js websites, bridging visual pixel discipline with modern full-stack engineering speed.&rdquo;
              </p>
            </div>

            {/* Sleek Minimalist Location Indicator Footer */}
            <div className="w-full mt-5 pt-4 border-t border-border-color/10 flex items-center justify-between text-[11px] font-bold text-foreground/50 z-10 relative px-2">
              <div className="flex items-center space-x-1.5 text-foreground/75">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span>Dhaka, BD</span>
              </div>
            </div>
          </div>

          {/* Card 3: Tech Stack Deck (Col span 4, Row span 1) */}
          <div className="md:col-span-6 lg:col-span-4 p-8 bg-white/40 dark:bg-neutral-900/35 backdrop-blur-xl border-0 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.4)] transition-all duration-600 ease-out hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(0,0,0,0.05),0_15px_40px_-15px_rgba(5,150,105,0.08)] dark:hover:shadow-[0_35px_70px_rgba(0,0,0,0.65),0_20px_45px_-15px_rgba(16,185,129,0.12)] flex flex-col justify-between min-h-[220px] overflow-hidden group relative">
            {/* Card Glow & Grid Backdrops */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
            <div className="absolute inset-0 bg-dot-grid opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-0" />

            <div className="z-10 relative">
              <h3 className="text-sm font-bold text-foreground/60 uppercase tracking-widest">Capabilities</h3>
              <p className="text-xs text-foreground/45 mt-0.5">Stack & Specialities</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-4 z-10 relative">
              {TECH_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-bold px-3 py-1.5 rounded-full bg-neutral-100/80 dark:bg-neutral-950/40 text-foreground/75 border-0 hover:bg-primary/10 hover:text-primary transition-all duration-300 select-none cursor-default shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 4: CTAs Deck (Col span 4, Row span 1) */}
          <div className="md:col-span-6 lg:col-span-4 p-8 bg-white/40 dark:bg-neutral-900/35 backdrop-blur-xl border-0 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.4)] transition-all duration-600 ease-out hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(0,0,0,0.05),0_15px_40px_-15px_rgba(5,150,105,0.08)] dark:hover:shadow-[0_35px_70px_rgba(0,0,0,0.65),0_20px_45px_-15px_rgba(16,185,129,0.12)] flex flex-col justify-between min-h-[220px] overflow-hidden group relative">
            {/* Card Glow & Grid Backdrops */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
            <div className="absolute inset-0 bg-dot-grid opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-0" />

            <div className="z-10 relative">
              <h3 className="text-sm font-bold text-foreground/60 uppercase tracking-widest">Actions</h3>
              <p className="text-xs text-foreground/45 mt-0.5">Download & Connect</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 mt-6 z-10 relative">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  openResume();
                }}
                className="group/btn w-full font-bold bg-primary text-primary-foreground dark:bg-emerald-600 dark:hover:bg-emerald-500 rounded-2xl h-12 hover:scale-[1.01] active:scale-[0.99] transition-transform duration-350 shadow-lg shadow-primary/15 hover:shadow-primary/30 flex items-center justify-center space-x-2 cursor-pointer text-sm border-0 overflow-hidden"
              >
                <span className="relative overflow-hidden block h-4 leading-none">
                  <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:-translate-y-full">
                    Resume
                  </span>
                  <span className="block absolute top-0 left-0 text-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-full group-hover/btn:translate-y-0 font-bold">
                    Resume
                  </span>
                </span>
                <Download className="h-4 w-4 animate-download-bounce" />
              </button>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  triggerContactHighlight();
                }}
                className="lets-talk-pulse group/btn w-full font-bold bg-neutral-100/50 hover:bg-neutral-100 dark:bg-neutral-950/30 dark:hover:bg-neutral-950/60 text-foreground rounded-2xl h-12 transition-all duration-350 flex items-center justify-center space-x-1.5 cursor-pointer text-sm border-0 overflow-hidden"
              >
                <span className="relative overflow-hidden block h-4 leading-none">
                  <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:-translate-y-full">
                    Let&apos;s Talk
                  </span>
                  <span className="block absolute top-0 left-0 text-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-full group-hover/btn:translate-y-0 font-bold">
                    Let&apos;s Talk
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 animate-arrow-bounce group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-350" />
              </button>
            </div>
          </div>

          {/* Card 5: Social Deck (Col span-12 md:col-span-4 p-8 bg-white/40 dark:bg-neutral-900/35 backdrop-blur-xl border-0 rounded-[2.5rem] flex items-center justify-around min-h-[100px] overflow-hidden group relative) */}
          <div className="md:col-span-12 lg:col-span-4 p-8 bg-white/40 dark:bg-neutral-900/35 backdrop-blur-xl border-0 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.4)] transition-all duration-600 ease-out hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(0,0,0,0.05),0_15px_40px_-15px_rgba(5,150,105,0.08)] dark:hover:shadow-[0_35px_70px_rgba(0,0,0,0.65),0_20px_45px_-15px_rgba(16,185,129,0.12)] flex items-center justify-around min-h-[100px] overflow-hidden group relative">
            {/* Card Glow & Grid Backdrops */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
            <div className="absolute inset-0 bg-dot-grid opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-0" />

            {[
              { icon: GithubIcon, label: "GitHub", href: "https://github.com/kazolhabib", target: "_blank", rel: "noopener noreferrer" },
              { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/kazol-habib/", target: "_blank", rel: "noopener noreferrer" },
              { icon: Mail, label: "Email", href: "mailto:kazoll.habibb@gmail.com" },
              { icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/kazollhabib", target: "_blank", rel: "noopener noreferrer" },
            ].map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.target}
                  rel={social.rel}
                  onClick={(e) => {
                    if (social.label === "Email") {
                      e.preventDefault();
                      navigator.clipboard.writeText("kazoll.habibb@gmail.com");
                      setCopied(true);
                      window.location.href = "mailto:kazoll.habibb@gmail.com";
                      setTimeout(() => setCopied(false), 2000);
                    }
                  }}
                  className="relative p-3.5 rounded-2xl bg-neutral-100/50 hover:bg-neutral-100 dark:bg-neutral-950/30 dark:hover:bg-neutral-950/60 border-0 text-foreground/60 hover:text-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/5 transition-all duration-350 cursor-pointer shadow-sm z-10"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                  
                  {/* Floating "Copied!" badge */}
                  <AnimatePresence>
                    {social.label === "Email" && copied && (
                      <motion.span
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.8 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded bg-neutral-950 dark:bg-neutral-900 border border-primary/20 text-[9px] font-bold text-primary whitespace-nowrap shadow-xl"
                      >
                        Copied!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </a>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
