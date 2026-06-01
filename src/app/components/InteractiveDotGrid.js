"use client";

import { useEffect, useRef } from "react";

export default function InteractiveDotGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = 0;
    let height = 0;

    const mouse = { x: null, y: null, radius: 150 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      // Calculate coordinates relative to canvas
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // High-DPR/Retina support: scales canvas resolution to match physical screen pixels for absolute sharpness
    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      
      width = rect.width;
      height = rect.height;
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize sizes

    const spacing = 28; // standard grid spacing
    const dotRadius = 1.2;
    const maxRadius = 3.6; // scale up to 3.6px near pointer

    const draw = () => {
      if (!ctx || width === 0 || height === 0) return;
      ctx.clearRect(0, 0, width, height);

      // Check dark mode state dynamically per frame
      const isDark = document.documentElement.classList.contains("dark");
      
      // Standard brand palette emerald alpha-blends
      const baseColor = isDark ? "rgba(16, 185, 129, 0.08)" : "rgba(5, 150, 105, 0.07)";

      const cols = Math.floor(width / spacing) + 1;
      const rows = Math.floor(height / spacing) + 1;

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const x = c * spacing + (width % spacing) / 2;
          const y = r * spacing + (height % spacing) / 2;

          let size = dotRadius;
          let drawColor = baseColor;
          let dx = 0;
          let dy = 0;

          if (mouse.x !== null && mouse.y !== null) {
            const dist = Math.hypot(mouse.x - x, mouse.y - y);
            if (dist < mouse.radius) {
              const factor = (mouse.radius - dist) / mouse.radius; // 1 at cursor, 0 at boundary
              const factorSq = factor * factor; // smooth ease-in curve

              // Proximity scaling
              size = dotRadius + (maxRadius - dotRadius) * factorSq;

              // Proximity color morph
              drawColor = isDark
                ? `rgba(16, 185, 129, ${0.08 + (0.75 - 0.08) * factor})`
                : `rgba(5, 150, 105, ${0.07 + (0.65 - 0.07) * factor})`;

              // Micro-magnetic pull: dots shift slightly towards pointer
              const angle = Math.atan2(mouse.y - y, mouse.x - x);
              const pullForce = 4.5 * factor; // maximum 4.5px offset pull
              dx = Math.cos(angle) * pullForce;
              dy = Math.sin(angle) * pullForce;
            }
          }

          ctx.beginPath();
          ctx.arc(x + dx, y + dy, size, 0, Math.PI * 2);
          ctx.fillStyle = drawColor;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{
        maskImage: "radial-gradient(ellipse at center, black 35%, transparent 98%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 35%, transparent 98%)"
      }}
    />
  );
}
