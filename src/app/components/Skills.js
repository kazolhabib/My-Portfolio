"use client";

import { motion } from "framer-motion";
import { Cpu, Terminal, Compass, Layers, ShieldCheck } from "lucide-react";

const SKILL_GROUPS = [
  {
    title: "Frontend Architecture",
    description: "Creating highly dynamic, responsive visual layers.",
    icon: Terminal,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "UI Systems",
    description: "Designing components for speed and consistent styles.",
    icon: Layers,
    skills: ["Shadcn UI", "Hero UI", "Daisy UI", "Radix UI", "Headless UI"],
  },
  {
    title: "Backend & Database",
    description: "Building relational architectures and safe authorization hooks.",
    icon: ShieldCheck,
    skills: ["Node.js", "MongoDB", "Better Auth", "Express.js"],
  },
  {
    title: "No-Code Power",
    description: "Structuring pixel-perfect, lightning-fast CMS designs.",
    icon: Compass,
    skills: ["Webflow Expert", "CMS", "Interactions", "CMS Architecture"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-16 md:py-24 px-6 sm:px-8 lg:px-12 bg-transparent border-t border-border-color transition-colors duration-350">
      <div className="mx-auto max-w-[1440px] w-full">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-primary/5 border border-primary/20 accent-border max-w-fit">
            <Cpu className="h-4 w-4 text-primary" />
            <span className="text-[10px] sm:text-xs font-bold tracking-wider text-primary uppercase">
              Skills Grid
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Core Capabilities & Stack
          </h2>
          <p className="text-xs sm:text-sm text-foreground/50 max-w-md">
            Instead of generic progress bars, here are my active technical stack groups, crafted with precision.
          </p>
        </div>

        {/* 4-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_GROUPS.map((group, groupIdx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-6 bento-card flex flex-col justify-between min-h-[300px]"
              >
                <div className="space-y-4">
                  {/* Icon & Title */}
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-primary/5 border border-primary/20 accent-border max-w-fit">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold tracking-tight text-foreground">
                      {group.title}
                    </h3>
                    <p className="text-xs text-foreground/60 leading-relaxed">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Badges Grid */}
                <div className="flex flex-wrap gap-1.5 pt-6 mt-auto border-t border-border-color/60">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-semibold px-2.5 py-1.5 rounded-lg bg-neutral-100/50 dark:bg-neutral-900/50 border border-border-color hover:border-primary hover:scale-105 active:scale-95 transition-all duration-200 text-foreground/80 cursor-default select-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
