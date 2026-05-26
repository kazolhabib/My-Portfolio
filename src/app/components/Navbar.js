"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@heroui/react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? theme : "dark";

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-color bg-background/80 backdrop-blur-md transition-all duration-350">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="group flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tight text-foreground">
                Kazol Habib
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-primary/10 text-primary uppercase tracking-wider accent-border">
                dev
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links (Swiss Minimalist) */}
          <nav className="hidden md:flex items-center space-x-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-foreground/75 hover:text-primary transition-colors duration-200 group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-350 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Theme Toggle (Minimalist Gold Accent) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 border border-border-color cursor-pointer overflow-hidden relative w-9 h-9 flex items-center justify-center transition-all duration-200"
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

            {/* Resume Button */}
            <Button
              as="a"
              href="#resume"
              variant="bordered"
              className="font-bold border-border-color text-foreground hover:border-primary rounded-xl px-5 hover:bg-primary/5 cursor-pointer transition-all duration-350"
            >
              Resume
            </Button>
          </div>

          {/* Mobile hamburger menu & theme button */}
          <div className="flex md:hidden items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-neutral-100/50 dark:bg-neutral-900/50 border border-border-color w-9 h-9 flex items-center justify-center cursor-pointer"
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
              className="p-2 rounded-xl bg-neutral-100/50 dark:bg-neutral-900/50 border border-border-color w-9 h-9 flex items-center justify-center text-foreground cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-border-color bg-background"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-foreground/80 hover:text-primary py-1 transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.04 }}
                className="pt-4 border-t border-border-color"
              >
                <Button
                  as="a"
                  href="#resume"
                  className="w-full font-bold bg-primary text-primary-foreground rounded-xl flex items-center justify-center space-x-2"
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
