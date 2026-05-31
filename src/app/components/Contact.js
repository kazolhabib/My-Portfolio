"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, ArrowRight, Heart } from "lucide-react";
import { Button } from "@heroui/react";

export default function Contact() {
  return (
    <footer id="contact" className="relative w-full pt-16 pb-8 px-6 sm:px-8 lg:px-12 bg-transparent border-t border-border-color transition-colors duration-350">
      <div className="mx-auto max-w-[1440px] w-full space-y-16">
        
        {/* Contact Grid Zone */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Bold Collaborative Text */}
          <div className="md:col-span-7 space-y-4 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              Let's build something <br />
              <span className="text-primary">exceptional</span> together.
            </h2>
            <p className="text-sm sm:text-base text-foreground/65 max-w-md leading-relaxed mx-auto md:mx-0">
              Whether you need an optimized React dashboard, a highly-converting Webflow landing page, or architectural guidance on web performance, I am always ready to collaborate.
            </p>
          </div>

          {/* Right Column: Premium Contact Links & WhatsApp */}
          <div className="md:col-span-5 p-8 bento-card flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-sm font-bold text-foreground/50 uppercase tracking-widest">Connect Area</h3>
              <p className="text-xs text-foreground/45 mt-0.5">Reach out via secure digital lines</p>
            </div>

            <div className="space-y-4">
              {/* Email Anchor */}
              <a
                href="mailto:kazoll.habibb@gmail.com"
                className="flex items-center space-x-3.5 p-4 rounded-xl border border-border-color/80 hover:border-primary text-foreground/75 hover:text-primary transition-all duration-300 group cursor-pointer"
              >
                <div className="p-2.5 rounded-lg bg-primary/5 border border-primary/10 max-w-fit">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider">Email Me</p>
                  <p className="text-xs sm:text-sm font-bold mt-0.5">kazoll.habibb@gmail.com</p>
                </div>
              </a>

              {/* Call Anchor */}
              <a
                href="tel:+8801760944167"
                className="flex items-center space-x-3.5 p-4 rounded-xl border border-border-color/80 hover:border-primary text-foreground/75 hover:text-primary transition-all duration-300 group cursor-pointer"
              >
                <div className="p-2.5 rounded-lg bg-primary/5 border border-primary/10 max-w-fit">
                  <Phone className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider">Call Me</p>
                  <p className="text-xs sm:text-sm font-bold mt-0.5">+880 1760-944167</p>
                </div>
              </a>

              {/* WhatsApp Quick Connect (Pulsing blue glow on hover) */}
              <Button
                as="a"
                href="https://wa.me/8801760944167"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full font-bold bg-primary text-primary-foreground rounded-xl py-6 hover:scale-102 transition-transform duration-350 shadow-md shadow-primary/10 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Connect</span>
              </Button>
            </div>
          </div>

        </div>

        {/* Minimal Editorial Footer */}
        <div className="pt-8 border-t border-border-color flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] sm:text-xs font-semibold text-foreground/50">
          <div>
            <span>© 2026 Kazol Habib • Bounded layout locked at 1440px</span>
          </div>
          <div className="flex items-center justify-center space-x-1.5">
            <span>Built with Next.js, HeroUI & Passion</span>
            <Heart className="h-3.5 w-3.5 text-primary fill-primary animate-[pulse_1.2s_infinite]" />
          </div>
        </div>

      </div>
    </footer>
  );
}
