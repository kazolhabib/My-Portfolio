"use client";

import { motion } from "framer-motion";
import { FolderGit2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { PROJECTS } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-16 md:py-24 px-6 sm:px-8 lg:px-12 bg-transparent border-t border-border-color transition-colors duration-350">
      <div className="mx-auto max-w-[1440px] w-full">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-primary/5 border border-primary/20 accent-border max-w-fit">
            <FolderGit2 className="h-4 w-4 text-primary" />
            <span className="text-[10px] sm:text-xs font-bold tracking-wider text-primary uppercase">
              Selected Works
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Featured Projects & Engineering
          </h2>
          <p className="text-xs sm:text-sm text-foreground/50 max-w-md">
            A hand-picked selection of full-stack systems, e-commerce engines, and motion agency landings.
          </p>
        </div>

        {/* 3-Column Bento Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="bento-card p-6 flex flex-col justify-between min-h-[480px] overflow-hidden group relative"
            >
              <div className="space-y-5">
                {/* Clean Blueprint/Mockup Graphic Overlay */}
                <div className="w-full h-44 rounded-xl relative overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-border-color/60 flex items-center justify-center">
                  {/* Subtle vector grid and blue glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(29,78,216,0.06),transparent_100%)] dark:bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(59,130,246,0.08),transparent_100%)] pointer-events-none" />
                  
                  {/* Minimal tech window mock */}
                  <div className="w-[80%] h-[75%] rounded-lg border border-border-color bg-card-bg shadow-md p-3 space-y-2 flex flex-col justify-between group-hover:scale-103 transition-transform duration-500">
                    <div className="flex items-center space-x-1.5 border-b border-border-color pb-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-400/60" />
                      <div className="w-2 h-2 rounded-full bg-amber-400/60" />
                      <div className="w-2 h-2 rounded-full bg-emerald-400/60" />
                      <div className="text-[9px] text-foreground/30 font-mono ml-2">localhost:3000</div>
                    </div>
                    <div className="flex-grow flex items-center justify-center">
                      <span className="text-[10px] font-bold text-foreground/40 font-mono uppercase tracking-widest">{project.id}</span>
                    </div>
                  </div>
                </div>

                {/* Category & Title */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-extrabold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/65 leading-relaxed">
                    {project.short}
                  </p>
                </div>
              </div>

              {/* Tech Badges & View Details CTA */}
              <div className="pt-6 border-t border-border-color/60 mt-6 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-bold px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-900 border border-border-color text-foreground/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Button
                  as={Link}
                  href={`/projects/${project.id}`}
                  className="w-full font-bold bg-primary/5 border border-primary/20 hover:bg-primary hover:text-primary-foreground text-primary rounded-xl py-5 transition-all duration-300 flex items-center justify-center space-x-1 cursor-pointer"
                >
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
