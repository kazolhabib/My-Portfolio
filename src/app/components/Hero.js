"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Download, ArrowUpRight } from "lucide-react";
import { Button } from "@heroui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

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

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TECH_TAGS = [
  "Next.js 16",
  "React 19",
  "Tailwind v4",
  "TypeScript",
  "JavaScript ES6+",
  "Webflow CMS",
  "Interactions",
  "Figma",
  "Express.js",
  "Better Auth",
  "MongoDB",
  "SEO Optimization",
];

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Frontend Developer & Webflow Expert";

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
    <section className="relative w-full py-12 md:py-20 px-6 sm:px-8 lg:px-12 bg-transparent transition-colors duration-350">
      <div className="mx-auto max-w-[1440px] w-full">
        
        {/* Bento Grid Layout locked strictly at max-w-1440px */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
          
          {/* Card 1: Intro Deck (Col span 8, Row span 2) */}
          <div className="md:col-span-8 p-8 md:p-12 bento-card flex flex-col justify-between min-h-[340px]">
            <div className="space-y-6">
              {/* Tech Badge */}
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-primary/5 border border-primary/20 accent-border max-w-fit">
                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-primary uppercase">
                  ✦ Next-Gen Frontend Architect
                </span>
              </div>

              {/* Title / Name */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
                Hi, I'm{" "}
                <span className="text-primary hover:opacity-90 transition-opacity duration-300">
                  Kazol Habib
                </span>
              </h1>

              {/* Typing Subtitle */}
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground/60 min-h-[30px] flex items-center">
                <span>{typedText}</span>
                <span className="w-1 h-5 ml-1 bg-primary animate-[pulse_0.9s_infinite] inline-block shrink-0" />
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-foreground/70 max-w-xl leading-relaxed mt-6">
              I fashion highly custom, pixel-perfect digital systems with Next.js & Tailwind CSS. Specializing in award-winning interactive layouts, fast render times, and micro-interactions.
            </p>
          </div>

          {/* Card 2: Premium Squircle Photo Deck with HUD Brackets (Col span 4, Row span 2) */}
          <div className="md:col-span-4 md:row-span-2 p-8 bento-card flex flex-col items-center justify-center min-h-[400px]">
            <motion.div
              style={{ rotateX: springRotateX, rotateY: springRotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative cursor-pointer w-[210px] h-[280px] sm:w-[240px] sm:h-[320px] group transition-all duration-300"
            >
              {/* Backing structural glowing border rotated slightly */}
              <div
                style={{ transform: "translateZ(-15px)" }}
                className="absolute inset-0 rounded-[32px] border-2 border-dashed border-primary/20 pointer-events-none -rotate-3 group-hover:rotate-3 group-hover:border-primary/45 transition-transform duration-700 ease-out"
              />

              {/* Minimal Tech HUD Corner Brackets */}
              {/* Top-Left Bracket */}
              <div className="absolute -top-3 -left-3 w-5 h-5 border-t-2 border-l-2 border-primary/30 group-hover:border-primary group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-500 ease-out rounded-tl-md" />
              {/* Top-Right Bracket */}
              <div className="absolute -top-3 -right-3 w-5 h-5 border-t-2 border-r-2 border-primary/30 group-hover:border-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 ease-out rounded-tr-md" />
              {/* Bottom-Left Bracket */}
              <div className="absolute -bottom-3 -left-3 w-5 h-5 border-b-2 border-l-2 border-primary/30 group-hover:border-primary group-hover:-translate-x-1 group-hover:translate-y-1 transition-all duration-500 ease-out rounded-bl-md" />
              {/* Bottom-Right Bracket */}
              <div className="absolute -bottom-3 -right-3 w-5 h-5 border-b-2 border-r-2 border-primary/30 group-hover:border-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-500 ease-out rounded-br-md" />

              {/* Main Image Deck Container */}
              <div
                style={{ transform: "translateZ(20px)" }}
                className="absolute inset-0 overflow-hidden rounded-[32px] border border-border-color p-2 hover:border-primary transition-colors duration-500 bg-background/50 shadow-lg"
              >
                <div className="relative w-full h-full rounded-[24px] overflow-hidden border-2 border-primary/10 group-hover:border-primary/40 transition-colors duration-500">
                  <Image
                    src="/kazol-habib-v2.png"
                    alt="Kazol Habib"
                    fill
                    priority
                    sizes="(max-width: 768px) 210px, 240px"
                    className="object-cover object-center scale-102 group-hover:scale-106 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle luxurious shadow gradient mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating "Available for Hire" status tag overlay */}
              <div
                style={{ transform: "translateZ(35px)" }}
                className="absolute -bottom-2 -right-2 px-3 py-1.5 rounded-xl bg-card-bg/90 backdrop-blur-md border border-border-color group-hover:border-primary flex items-center space-x-1.5 shadow-md shadow-black/5 transition-all duration-350 select-none"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold tracking-wider text-foreground/80">AVAILABLE FOR HIRE</span>
              </div>
            </motion.div>
            
            <div className="text-center mt-8">
              <p className="text-xs font-bold text-primary tracking-widest uppercase">Based in Bangladesh</p>
              <p className="text-xs text-foreground/50 mt-1">Available worldwide</p>
            </div>
          </div>

          {/* Card 3: Tech Stack Deck (Col span 4, Row span 1) */}
          <div className="md:col-span-4 p-8 bento-card flex flex-col justify-between min-h-[220px]">
            <div>
              <h3 className="text-sm font-bold text-foreground/60 uppercase tracking-widest">Capabilities</h3>
              <p className="text-xs text-foreground/45 mt-0.5">Stack & Specialities</p>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {TECH_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-border-color hover:border-primary hover:scale-102 transition-all duration-200 text-foreground/80 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 4: CTAs Deck (Col span 4, Row span 1) */}
          <div className="md:col-span-4 p-8 bento-card flex flex-col justify-between min-h-[220px]">
            <div>
              <h3 className="text-sm font-bold text-foreground/60 uppercase tracking-widest">Actions</h3>
              <p className="text-xs text-foreground/45 mt-0.5">Download & Connect</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
              <Button
                as="a"
                href="#resume"
                className="group w-full font-bold bg-primary text-primary-foreground rounded-xl py-5.5 hover:scale-102 transition-transform duration-350 shadow-md shadow-primary/10 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Resume</span>
                <Download className="h-4 w-4" />
              </Button>

              <Button
                as="a"
                href="#contact"
                variant="bordered"
                className="group w-full font-bold border-border-color hover:border-primary text-foreground rounded-xl py-5.5 hover:bg-primary/5 transition-all duration-350 flex items-center justify-center space-x-1 cursor-pointer"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-350" />
              </Button>
            </div>
          </div>

          {/* Card 5: Social Deck (Col span-12 md:col-span-4 p-8 bento-card flex items-center justify-around min-h-[100px]) */}
          <div className="md:col-span-4 p-8 bento-card flex items-center justify-around min-h-[100px]">
            {[
              { icon: GithubIcon, label: "GitHub", href: "https://github.com" },
              { icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com" },
              { icon: TwitterIcon, label: "Twitter", href: "https://twitter.com" },
              { icon: FacebookIcon, label: "Facebook", href: "https://facebook.com" },
            ].map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl border border-border-color hover:border-primary text-foreground/60 hover:text-primary hover:scale-105 hover:shadow-lg hover:shadow-primary/5 transition-all duration-350 cursor-pointer"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
