"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { User, Sparkles, Layers, Cpu, Palette, ChevronRight } from "lucide-react";
import InteractiveDotGrid from "./InteractiveDotGrid";

// High-performance Direct-DOM viewport-aware Counter component
function Counter({ value, suffix = "", duration = 3.5 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: duration,
        ease: [0.16, 1, 0.3, 1], // Quintic physics ease-out deceleration
        onUpdate(latest) {
          if (ref.current) {
            ref.current.textContent = Math.round(latest) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, value, suffix, duration]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="relative w-full py-16 md:py-24 px-6 sm:px-8 lg:px-12 bg-transparent transition-colors duration-350 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent z-10" />
      {/* Premium Background Mesh and Dot Grid Overlays */}
      <div className="absolute inset-0 bg-mesh-alternate pointer-events-none z-0" />
      <InteractiveDotGrid />
      <div className="section-backlight" />

      <div className="relative z-10 mx-auto max-w-[90rem] w-full">

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col space-y-3 mb-16 relative z-10"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/40 dark:bg-neutral-900/35 backdrop-blur-xl border border-primary/10 shadow-sm max-w-fit select-none animate-pulse">
            <User className="h-4 w-4 text-primary" />
            <span className="text-[10px] sm:text-xs font-extrabold tracking-wider text-primary uppercase">
              About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            The Story Behind the Screen
          </h2>
          <p className="text-xs sm:text-sm text-foreground/50 max-w-md leading-relaxed font-normal">
            A deep dive into my professional philosophy, design background, and full-stack engineering transition.
          </p>
        </motion.div>

        {/* Premium Background Glowing Blurs */}
        <div className="absolute top-1/4 -left-64 w-[550px] h-[550px] rounded-full bg-backlight blur-[150px] pointer-events-none z-0 opacity-45 animate-[pulse_8s_infinite_alternate]" />
        <div className="absolute top-2/3 -right-64 w-[550px] h-[550px] rounded-full bg-backlight blur-[150px] pointer-events-none z-0 opacity-45 animate-[pulse_6s_infinite_alternate]" />

        {/* Bento Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">

          {/* Left Block: Bio & Philosophy (lg:col-span-7) */}
          <div className="col-span-12 lg:col-span-7 p-8 md:p-10 bg-white/40 dark:bg-neutral-900/35 backdrop-blur-xl border-0 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.4)] transition-all duration-600 ease-out hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(0,0,0,0.05),0_15px_40px_-15px_rgba(5,150,105,0.08)] dark:hover:shadow-[0_35px_70px_rgba(0,0,0,0.65),0_20px_45px_-15px_rgba(16,185,129,0.12)] flex flex-col justify-between overflow-hidden group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
            <div className="absolute inset-0 bg-dot-grid opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-0" />

            <div className="space-y-8 z-10 relative">
              <div className="flex items-center space-x-3 text-primary">
                <Sparkles className="h-5 w-5 animate-pulse" />
                <h3 className="text-lg font-bold tracking-tight">The Journey</h3>
              </div>

              {/* Styled Premium Blockquote */}
              <div className="pl-4 border-l-[3px] border-gradient-to-b from-primary to-emerald-400 py-1 bg-primary/[0.02] dark:bg-emerald-950/10 rounded-r-2xl pr-4">
                <p className="text-sm sm:text-base font-black italic text-foreground leading-relaxed">
                  &quot;I bridge the gap between creative visual discipline and type-safe full-stack web engineering, focusing on performance, clean structure, and memorable experiences.&quot;
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-foreground/75 leading-relaxed font-normal">
                <p>
                  My digital journey started with a fascination for visual systems and user interaction. As a{" "}
                  <strong className="text-foreground font-semibold">Webflow & WordPress (Elementor) Expert</strong>, I spent years mastering complex layouts, structured CMS architectures, and pixel-perfect animation sequences—proving that high-end web experiences require deep architectural discipline.
                </p>
                <p>
                  However, my passion for dynamic state management, secure authentication, and custom database integrations led me to dive deep into engineering. I transitioned into a{" "}
                  <strong className="text-foreground font-semibold">Full-Stack Next.js & React Engineer</strong>, bringing my acute sense of visual polish into the world of type-safe, optimized modern web architectures powered by Express, MongoDB, and Better Auth.
                </p>
              </div>
            </div>
            
            {/* Tech line footer */}
            <div className="pt-6 border-t border-border-color/10 mt-8 text-neutral-400 text-xs font-semibold z-10 relative">
              React • Next.js • Express • MongoDB • Better Auth • Tailwind CSS • Webflow • WordPress (Elementor)
            </div>
          </div>

          {/* Right Block: Core Capabilities (lg:col-span-5) */}
          <div className="col-span-12 lg:col-span-5 p-8 md:p-10 bg-white/40 dark:bg-neutral-900/35 backdrop-blur-xl border-0 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.4)] transition-all duration-600 ease-out hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(0,0,0,0.05),0_15px_40px_-15px_rgba(5,150,105,0.08)] dark:hover:shadow-[0_35px_70px_rgba(0,0,0,0.65),0_20px_45px_-15px_rgba(16,185,129,0.12)] flex flex-col justify-between overflow-hidden group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
            <div className="absolute inset-0 bg-dot-grid opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-0" />

            <div className="space-y-6 z-10 relative w-full">
              <div className="flex items-center space-x-3 text-primary">
                <Layers className="h-5 w-5 animate-pulse" />
                <h3 className="text-lg font-bold tracking-tight">Capabilities</h3>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: Palette,
                    title: "Visual Interfaces",
                    desc: "Pixel-perfect custom designs, layouts, and animations.",
                    tech: "Webflow, WordPress (Elementor), CSS Grid/Flexbox, Interaction Timelines"
                  },
                  {
                    icon: Cpu,
                    title: "Server Architectures",
                    desc: "Scalable backend routing, databases, and authentication.",
                    tech: "Express, Node.js, MongoDB, Better Auth"
                  },
                  {
                    icon: Layers,
                    title: "Performance Optimization",
                    desc: "Optimized server components and rapid bundle loading.",
                    tech: "Next.js 16, React Server Components, Tailwind CSS"
                  }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="p-4 rounded-2xl bg-neutral-100/50 dark:bg-neutral-950/20 border border-neutral-200/5 dark:border-neutral-800/10 text-left">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-extrabold text-foreground">{item.title}</h4>
                          <p className="text-[11px] text-foreground/50 mt-1 leading-normal">{item.desc}</p>
                          <span className="inline-block text-[9px] font-bold text-primary bg-primary/5 px-2 py-0.5 rounded-full mt-2.5">
                            {item.tech}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Bento Row: Quick Stats Counters (lg:col-span-12) */}
          <div className="col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            {[
              { value: 15, suffix: "+", title: "Projects Complete" },
              { value: 100, suffix: "%", title: "Client Success" },
              { value: 3, suffix: "+", title: "Years Engineering" },
              { value: 24, suffix: "h", title: "Avg. Response" }
            ].map((stat) => (
              <div 
                key={stat.title} 
                className="group/stat space-y-1.5 p-6 rounded-[2rem] bg-white/40 dark:bg-neutral-900/35 backdrop-blur-xl border border-neutral-200/5 dark:border-neutral-900/30 transition-all duration-350 shadow-sm hover:scale-[1.03] hover:border-primary/20 dark:hover:border-primary/20 cursor-default select-none flex flex-col justify-center text-left relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/[0.01] opacity-0 group-hover/stat:opacity-100 transition-opacity duration-350 rounded-2xl pointer-events-none" />
                <span className="text-2.5xl sm:text-3xl font-extrabold text-primary flex items-center justify-between">
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <ChevronRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover/stat:opacity-100 group-hover/stat:translate-x-0 text-primary/70 transition-all duration-300 shrink-0" />
                </span>
                <p className="text-[9.5px] sm:text-[10px] font-extrabold text-foreground/45 uppercase tracking-wider leading-tight">
                  {stat.title}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
