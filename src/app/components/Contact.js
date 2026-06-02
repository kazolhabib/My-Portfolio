"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  Heart, 
  X, 
  User, 
  BookOpen, 
  MessageSquare, 
  Check, 
  Loader2, 
  AlertCircle 
} from "lucide-react";
import InteractiveDotGrid from "./InteractiveDotGrid";
import { useResumeModal } from "../providers";

export default function Contact() {
  const { isContactHighlighted } = useResumeModal();
  const [showEmailToast, setShowEmailToast] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [focusedField, setFocusedField] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [validationError, setValidationError] = useState("");

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationError) setValidationError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim()) return setValidationError("Please enter your name.");
    if (!formData.email.trim()) return setValidationError("Please enter your email.");
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return setValidationError("Please enter a valid email address.");
    }
    
    if (!formData.subject.trim()) return setValidationError("Please enter a subject.");
    if (!formData.message.trim()) return setValidationError("Please enter your message.");

    setIsSubmitting(true);
    setValidationError("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitSuccess(true);
        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setValidationError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Form submit error:", err);
      setValidationError("Failed to send message. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="relative w-full pt-20 pb-8 px-6 sm:px-8 lg:px-12 bg-transparent transition-all duration-350 overflow-hidden">
      {/* Premium Dynamic Glowing Separator */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent z-10" />

      {/* Premium Background Mesh and Dot Grid Overlays */}
      <div className="absolute inset-0 bg-mesh-alternate pointer-events-none z-0" />
      <InteractiveDotGrid />

      {/* Massive Glowing Sinking Radial Accents in Left and Right Corners */}
      <div className="absolute bottom-0 -left-48 w-[400px] h-[400px] bg-backlight blur-[120px] rounded-full pointer-events-none z-0 opacity-50" />
      <div className="absolute bottom-0 -right-48 w-[400px] h-[400px] bg-backlight blur-[120px] rounded-full pointer-events-none z-0 opacity-50" />

      {/* Giant Animating Background Watermark Brand Logo */}
      <div className="absolute right-[-140px] md:right-[-100px] top-1/2 -translate-y-1/2 w-[380px] h-[380px] md:w-[500px] md:h-[500px] text-primary/3 dark:text-primary/4 pointer-events-none select-none z-0">
        {/* Dedicated Backlight Spotlight behind the logo */}
        <div className="absolute inset-0 rounded-full bg-backlight blur-[95px] pointer-events-none z-0" />
        <div className="w-full h-full animate-floating-spin relative z-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 8 L92 50 L50 92 L8 50 Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Bold Collaborative Text & Connect Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8 text-center lg:text-left z-10 relative"
          >
            <div className="space-y-6">
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

              <h2 className="text-4.5xl sm:text-5xl lg:text-5.5xl font-black tracking-tight text-foreground leading-[1.05] max-w-2xl">
                Let&apos;s build something <br />
                <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">exceptional</span> together.
              </h2>
              <p className="text-sm sm:text-base text-foreground/60 max-w-lg leading-relaxed mx-auto lg:mx-0 font-normal">
                Whether you need an optimized React application, a highly-converting Webflow landing page, or architectural guidance on web performance, I am always ready to collaborate. Let&apos;s connect!
              </p>
            </div>

            {/* Rearranged Interactive Connect Area */}
            <div className={`space-y-4 max-w-lg mx-auto lg:mx-0 p-6 backdrop-blur-xl rounded-[2rem] border transition-all duration-500 relative group overflow-hidden ${
              isContactHighlighted 
                ? "bg-white/70 dark:bg-neutral-900/40 border-primary/50 ring-2 ring-primary/60 shadow-[0_0_40px_rgba(16,185,129,0.3)] dark:shadow-[0_0_50px_rgba(16,185,129,0.5)] scale-[1.03]" 
                : "bg-white/45 dark:bg-neutral-900/25 border-neutral-200/10 dark:border-neutral-800/20 shadow-sm"
            }`}>
              <div className="space-y-1 mb-4 text-left">
                <h3 className="text-[10px] sm:text-[11px] font-extrabold text-foreground/50 uppercase tracking-[0.16em]">Connect Area</h3>
                <p className="text-[11px] text-foreground/45">Reach out via secure digital lines</p>
              </div>

              {/* Side by side cards for Email and Call */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email Anchor */}
                <a
                  href="mailto:kazoll.habibb@gmail.com"
                  onClick={handleEmailClick}
                  className="flex items-center space-x-3 p-3.5 rounded-2xl border border-neutral-200/10 dark:border-neutral-800/10 bg-neutral-100/40 hover:bg-neutral-100/70 dark:bg-neutral-950/20 dark:hover:bg-neutral-950/50 text-foreground/75 hover:text-primary transition-all duration-300 group cursor-pointer shadow-sm text-left"
                >
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:scale-105 transition-transform duration-300 shrink-0">
                    <Mail className="h-4.5 w-4.5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-extrabold text-foreground/40 uppercase tracking-wider">Email Me</p>
                    <p className="text-xs font-bold mt-0.5 truncate">kazoll.habibb</p>
                  </div>
                </a>

                {/* Call Anchor */}
                <a
                  href="tel:+8801760944167"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "tel:+8801760944167";
                  }}
                  className="flex items-center space-x-3 p-3.5 rounded-2xl border border-neutral-200/10 dark:border-neutral-800/10 bg-neutral-100/40 hover:bg-neutral-100/70 dark:bg-neutral-950/20 dark:hover:bg-neutral-950/50 text-foreground/75 hover:text-primary transition-all duration-300 group cursor-pointer shadow-sm text-left"
                >
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:scale-105 transition-transform duration-300 shrink-0">
                    <Phone className="h-4.5 w-4.5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-extrabold text-foreground/40 uppercase tracking-wider">Call Me</p>
                    <p className="text-xs font-bold mt-0.5 truncate">+880 176094</p>
                  </div>
                </a>
              </div>

              {/* WhatsApp Connect */}
              <a
                href="https://wa.me/8801760944167"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn w-full font-bold bg-primary text-primary-foreground dark:bg-emerald-600 dark:hover:bg-emerald-500 rounded-xl h-11 shadow-lg shadow-primary/15 hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer text-xs tracking-wide hover:scale-101 active:scale-99 border-0 overflow-hidden"
              >
                <MessageCircle className="h-4.5 w-4.5" />
                <span className="relative overflow-hidden block h-4 leading-none">
                  <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:-translate-y-full">
                    WhatsApp Connect
                  </span>
                  <span className="block absolute top-0 left-0 text-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-[120%] group-hover/btn:translate-y-0 font-bold">
                    WhatsApp Connect
                  </span>
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Premium Interactive Glassmorphic Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 w-full p-8 md:p-10 bg-white/40 dark:bg-neutral-900/35 border border-white/20 dark:border-neutral-800/40 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.4)] transition-all duration-500 relative group overflow-hidden"
          >
            {/* Spotlight Accent Glow inside the Form Card */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-backlight rounded-full blur-[80px] pointer-events-none" />

            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 text-left"
                >
                  <div className="space-y-1 mb-2">
                    <h3 className="text-sm font-extrabold text-foreground/50 uppercase tracking-[0.16em]">Direct Connection Form</h3>
                    <p className="text-xs text-foreground/45">Send a message and get an instant automated reply copy</p>
                  </div>

                  {/* Validation Error Message */}
                  {validationError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2.5 p-3.5 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-semibold"
                    >
                      <AlertCircle className="h-4.5 w-4.5 shrink-0" />
                      <span>{validationError}</span>
                    </motion.div>
                  )}

                  {/* Name Input Field */}
                  <div className="relative group">
                    <label className={`absolute left-11 transition-all duration-300 pointer-events-none z-10 ${
                      focusedField === "name" || formData.name 
                        ? "-top-2 text-[9px] font-extrabold tracking-widest text-primary bg-white dark:bg-[#121212] px-2 rounded-full border border-neutral-200/20 dark:border-neutral-800/50 uppercase" 
                        : "top-[15px] text-xs font-semibold text-foreground/40"
                    }`}>
                      Your Name
                    </label>
                    <div className="relative flex items-center">
                      <User className={`absolute left-4 h-4.5 w-4.5 transition-colors duration-300 ${
                        focusedField === "name" ? "text-primary" : "text-foreground/35 group-hover:text-primary/70"
                      }`} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField("")}
                        onChange={handleChange}
                        className="w-full text-xs sm:text-sm font-semibold bg-neutral-100/30 dark:bg-neutral-950/20 border border-neutral-200/50 dark:border-neutral-800/60 rounded-2xl pl-11 pr-4 py-3.5 text-foreground placeholder-transparent focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/20 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300"
                        placeholder="Your Name"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  {/* Email Input Field */}
                  <div className="relative group">
                    <label className={`absolute left-11 transition-all duration-300 pointer-events-none z-10 ${
                      focusedField === "email" || formData.email 
                        ? "-top-2 text-[9px] font-extrabold tracking-widest text-primary bg-white dark:bg-[#121212] px-2 rounded-full border border-neutral-200/20 dark:border-neutral-800/50 uppercase" 
                        : "top-[15px] text-xs font-semibold text-foreground/40"
                    }`}>
                      Your Email Address
                    </label>
                    <div className="relative flex items-center">
                      <Mail className={`absolute left-4 h-4.5 w-4.5 transition-colors duration-300 ${
                        focusedField === "email" ? "text-primary" : "text-foreground/35 group-hover:text-primary/70"
                      }`} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField("")}
                        onChange={handleChange}
                        className="w-full text-xs sm:text-sm font-semibold bg-neutral-100/30 dark:bg-neutral-950/20 border border-neutral-200/50 dark:border-neutral-800/60 rounded-2xl pl-11 pr-4 py-3.5 text-foreground placeholder-transparent focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/20 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300"
                        placeholder="Your Email Address"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  {/* Subject Input Field */}
                  <div className="relative group">
                    <label className={`absolute left-11 transition-all duration-300 pointer-events-none z-10 ${
                      focusedField === "subject" || formData.subject 
                        ? "-top-2 text-[9px] font-extrabold tracking-widest text-primary bg-white dark:bg-[#121212] px-2 rounded-full border border-neutral-200/20 dark:border-neutral-800/50 uppercase" 
                        : "top-[15px] text-xs font-semibold text-foreground/40"
                    }`}>
                      Subject
                    </label>
                    <div className="relative flex items-center">
                      <BookOpen className={`absolute left-4 h-4.5 w-4.5 transition-colors duration-300 ${
                        focusedField === "subject" ? "text-primary" : "text-foreground/35 group-hover:text-primary/70"
                      }`} />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onFocus={() => setFocusedField("subject")}
                        onBlur={() => setFocusedField("")}
                        onChange={handleChange}
                        className="w-full text-xs sm:text-sm font-semibold bg-neutral-100/30 dark:bg-neutral-950/20 border border-neutral-200/50 dark:border-neutral-800/60 rounded-2xl pl-11 pr-4 py-3.5 text-foreground placeholder-transparent focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/20 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300"
                        placeholder="Subject"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  {/* Message textarea Field */}
                  <div className="relative group">
                    <label className={`absolute left-11 transition-all duration-300 pointer-events-none z-10 ${
                      focusedField === "message" || formData.message 
                        ? "-top-2 text-[9px] font-extrabold tracking-widest text-primary bg-white dark:bg-[#121212] px-2 rounded-full border border-neutral-200/20 dark:border-neutral-800/50 uppercase" 
                        : "top-[15px] text-xs font-semibold text-foreground/40"
                    }`}>
                      Your Message
                    </label>
                    <div className="relative flex items-start">
                      <MessageSquare className={`absolute left-4 top-[15px] h-4.5 w-4.5 transition-colors duration-300 ${
                        focusedField === "message" ? "text-primary" : "text-foreground/35 group-hover:text-primary/70"
                      }`} />
                      <textarea
                        name="message"
                        value={formData.message}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField("")}
                        onChange={handleChange}
                        rows="4"
                        className="w-full text-xs sm:text-sm font-semibold bg-neutral-100/30 dark:bg-neutral-950/20 border border-neutral-200/50 dark:border-neutral-800/60 rounded-2xl pl-11 pr-4 py-3.5 text-foreground placeholder-transparent focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/20 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 resize-none min-h-[120px]"
                        placeholder="Your Message"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  {/* Premium double-text sliding reveal submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group/btn w-full font-bold bg-primary text-primary-foreground dark:bg-emerald-600 dark:hover:bg-emerald-500 rounded-2xl h-13 shadow-lg shadow-primary/15 hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center space-x-2.5 cursor-pointer text-xs sm:text-sm tracking-widest uppercase border-0 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed select-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4.5 w-4.5 animate-spin text-white" />
                        <span>Sending Connection Request...</span>
                      </>
                    ) : (
                      <>
                        <span className="relative overflow-hidden block h-4 leading-none">
                          <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:-translate-y-full font-extrabold">
                            Dispatch Message
                          </span>
                          <span className="block absolute top-0 left-0 text-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-[120%] group-hover/btn:translate-y-0 font-extrabold">
                            Dispatch Message
                          </span>
                        </span>
                        <ArrowRight className="h-4.5 w-4.5 group-hover/btn:translate-x-1 transition-transform duration-300 shrink-0" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                // Super Premium Interactive Success Overlay
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="py-10 text-center flex flex-col items-center justify-center space-y-6"
                >
                  {/* Glowing Floating Success Circle */}
                  <div className="relative">
                    {/* Ring halos */}
                    <div className="absolute inset-0 bg-primary/20 rounded-full scale-150 animate-ping opacity-75" />
                    <div className="absolute inset-0 bg-primary/10 rounded-full scale-125 animate-pulse" />
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20 relative z-10">
                      <Check className="h-8 w-8 stroke-[3]" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-black text-foreground uppercase tracking-widest bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                      Message Dispatched!
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground/50 max-w-md leading-relaxed mx-auto">
                      Thank you for reaching out! A secure confirmation has been delivered to your inbox. I will personally review your request and get back to you within 24 hours.
                    </p>
                  </div>

                  {/* Premium Brand Statement */}
                  <div className="px-5 py-3 rounded-2xl bg-neutral-100/50 dark:bg-neutral-950/20 border border-neutral-200/10 dark:border-neutral-800/10 text-[10px] sm:text-xs font-semibold tracking-wider text-primary/70 uppercase">
                    &quot;Designing Experiences. Engineering Futures.&quot;
                  </div>

                  {/* Return Button with double-text reveal */}
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="group/btn px-6 h-11 font-bold bg-neutral-100 dark:bg-neutral-950 hover:bg-neutral-200 dark:hover:bg-neutral-900 border border-neutral-200/30 dark:border-neutral-800/30 rounded-xl shadow-sm transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer text-xs tracking-wider uppercase overflow-hidden"
                  >
                    <span className="relative overflow-hidden block h-4 leading-none">
                      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:-translate-y-full text-foreground/70">
                        Send Another
                      </span>
                      <span className="block absolute top-0 left-0 text-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-[120%] group-hover/btn:translate-y-0 font-bold">
                        Send Another
                      </span>
                    </span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

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
