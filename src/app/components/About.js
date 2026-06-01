"use client";

import { motion } from "framer-motion";
import { User, Palette, Sparkles, Code } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative w-full py-16 md:py-24 px-6 sm:px-8 lg:px-12 bg-transparent border-t border-border-color transition-colors duration-350 overflow-hidden">
      {/* Premium Background Mesh and Dot Grid Overlays */}
      <div className="absolute inset-0 bg-mesh-alternate pointer-events-none z-0" />
      <div className="absolute inset-0 bg-dot-grid pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-[90rem] w-full">

        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-primary/5 border border-primary/20 accent-border max-w-fit">
            <User className="h-4 w-4 text-primary" />
            <span className="text-[0.625rem] sm:text-xs font-bold tracking-wider text-primary uppercase">
              About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            The Story Behind the Screen
          </h2>
        </div>

        {/* Bento/Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">

          {/* Left Block: The Story (Col span 7) */}
          <div className="md:col-span-7 p-8 md:p-10 bento-card flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-primary">
                <Sparkles className="h-5 w-5" />
                <h3 className="text-lg font-bold tracking-tight">The Journey</h3>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-foreground/75 leading-relaxed">
                <p>
                  My digital journey started with a deep fascination for visual systems and user interaction. As a{" "}
                  <strong className="text-foreground font-semibold">Webflow Expert</strong>, I spent years mastering complex layouts, structured CMS architectures, and pixel-perfect animation sequences—proving that high-end web experiences require deep architectural discipline.
                </p>
                <p>
                  However, my passion for dynamic state management, secure authentication, and custom database integrations led me to dive deep into engineering. I transitioned into a{" "}
                  <strong className="text-foreground font-semibold">Full-Stack Next.js & React Engineer</strong>, bringing my acute sense of visual polish into the world of type-safe, optimized modern web architectures powered by Express, MongoDB, and Better Auth.
                </p>
                <p>
                  Today, I bridge the gap between creative visual design and bulletproof server structures, focusing on custom API development, database optimization, and high-performance user session flows.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-border-color mt-6 flex items-center space-x-3 text-foreground/50 text-xs">
              <Code className="h-4 w-4 text-primary" />
              <span>React • Next.js • Express • MongoDB • Better Auth • Tailwind CSS • Webflow</span>
            </div>
          </div>

          {/* Right Block: Bento Personality Deck (Col span 5) */}
          <div className="md:col-span-5 flex flex-col gap-6">

            {/* Card A: Hobby Box (🎨 Digital Art) */}
            <div className="p-8 bento-card flex flex-col justify-between flex-grow relative overflow-hidden group">
              {/* Subtle background colored blur */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl group-hover:scale-130 transition-transform duration-500 pointer-events-none" />

              <div className="space-y-4 z-10">
                <div className="flex items-center space-x-3 text-primary">
                  <Palette className="h-5 w-5" />
                  <h3 className="text-lg font-bold tracking-tight">Creative Balance</h3>
                </div>

                <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                  <strong>Digital Art & Composition:</strong> Before lines of code, there were strokes of paint. Creating digital artwork helps me understand negative space, visual alignment, and colour balance—concepts I apply directly to the interfaces I engineer.
                </p>
              </div>

              <div className="text-xs text-primary font-bold tracking-widest uppercase mt-6 z-10">
                Art & Interfaces
              </div>
            </div>

            {/* Card B: Quick Stats Grid */}
            <div className="p-8 bento-card grid grid-cols-2 gap-4">
              <div className="space-y-1 p-4 rounded-xl bg-neutral-100/50 dark:bg-neutral-900/50 border border-border-color">
                <span className="text-2xl sm:text-3xl font-extrabold text-primary">15+</span>
                <p className="text-[0.625rem] sm:text-xs font-bold text-foreground/50 uppercase tracking-wider">
                  Projects Complete
                </p>
              </div>

              <div className="space-y-1 p-4 rounded-xl bg-neutral-100/50 dark:bg-neutral-900/50 border border-border-color">
                <span className="text-2xl sm:text-3xl font-extrabold text-primary">100%</span>
                <p className="text-[0.625rem] sm:text-xs font-bold text-foreground/50 uppercase tracking-wider">
                  Client Success
                </p>
              </div>

              <div className="space-y-1 p-4 rounded-xl bg-neutral-100/50 dark:bg-neutral-900/50 border border-border-color">
                <span className="text-2xl sm:text-3xl font-extrabold text-primary">3+</span>
                <p className="text-[0.625rem] sm:text-xs font-bold text-foreground/50 uppercase tracking-wider">
                  Years Engineering
                </p>
              </div>

              <div className="space-y-1 p-4 rounded-xl bg-neutral-100/50 dark:bg-neutral-900/50 border border-border-color">
                <span className="text-2xl sm:text-3xl font-extrabold text-primary">24h</span>
                <p className="text-[0.625rem] sm:text-xs font-bold text-foreground/50 uppercase tracking-wider">
                  Avg. Response
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
