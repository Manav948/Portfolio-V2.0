"use client";

import React, { useEffect, useRef } from "react";

interface Segment {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  thickness: number;
}

interface Leaf {
  x: number;
  y: number;
  angle: number;
  currentSize: number;
  targetSize: number;
  growSpeed: number;
}

interface Branch {
  x: number;
  y: number;
  prevX: number;
  prevY: number;
  angle: number;
  targetAngle: number;
  speed: number;
  thickness: number;
  life: number;
  maxLife: number;
  generation: number;
  distAccumulator: number;
}

export const GrowingBranches: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const segmentsRef = useRef<Segment[]>([]);
  const leavesRef = useRef<Leaf[]>([]);
  const activeBranchesRef = useRef<Branch[]>([]);
  const sizeRef = useRef({ width: 0, height: 0 });
  const animationFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Disable canvas animation on mobile devices (width < 768px) to prevent scroll lag and CPU overhead
    if (window.innerWidth < 768) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;


    const getColors = () => {
      const isDark = document.documentElement.classList.contains("dark");
      return {
        branchColor: isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(10, 10, 10, 0.15)",
        leafFillColor: isDark ? "rgba(52, 211, 153, 0.08)" : "rgba(16, 185, 129, 0.08)",
        leafStrokeColor: isDark ? "rgba(255, 255, 255, 0.25)" : "rgba(10, 10, 10, 0.25)"
      };
    };

    const drawLeaf = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      angle: number,
      size: number,
      fillColor: string,
      strokeColor: string
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.beginPath();
      
      // Leaf shape using quadratic curves
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(size * 0.5, -size * 0.35, size, 0);
      ctx.quadraticCurveTo(size * 0.5, size * 0.35, 0, 0);
      ctx.fillStyle = fillColor;
      ctx.fill();
      
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 0.6;
      ctx.stroke();

      // Leaf central vein
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(size * 0.8, 0);
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 0.4;
      ctx.stroke();

      ctx.restore();
    };

    const drawEverything = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const colors = getColors();

      // Draw branches
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = colors.branchColor;

      const segments = segmentsRef.current;
      for (let i = 0; i < segments.length; i++) {
        const s = segments[i];
        ctx.beginPath();
        ctx.moveTo(s.x1, s.y1);
        ctx.lineTo(s.x2, s.y2);
        ctx.lineWidth = s.thickness;
        ctx.stroke();
      }

      // Draw leaves
      const leaves = leavesRef.current;
      for (let i = 0; i < leaves.length; i++) {
        const l = leaves[i];
        if (l.currentSize > 0) {
          drawLeaf(
            ctx,
            l.x,
            l.y,
            l.angle,
            l.currentSize,
            colors.leafFillColor,
            colors.leafStrokeColor
          );
        }
      }
    };

    const initBranches = (width: number, height: number) => {
      const active = activeBranchesRef.current;
      
      // Top-Right Corner Trunks (grows much longer and thicker)
      active.push({
        x: width + 10,
        y: -10,
        prevX: width + 10,
        prevY: -10,
        angle: Math.PI * 0.75, // diagonal down-left
        targetAngle: Math.PI * 0.75,
        speed: 0.9 + Math.random() * 0.3,
        thickness: 3.2,
        life: 420,
        maxLife: 420,
        generation: 0,
        distAccumulator: 0,
      });

      active.push({
        x: width + 10,
        y: -10,
        prevX: width + 10,
        prevY: -10,
        angle: Math.PI * 0.75 - 0.15,
        targetAngle: Math.PI * 0.75 - 0.15,
        speed: 0.8 + Math.random() * 0.3,
        thickness: 2.4,
        life: 320,
        maxLife: 320,
        generation: 0,
        distAccumulator: 0,
      });

      // Bottom-Left Corner Trunks (grows much longer and thicker)
      active.push({
        x: -10,
        y: height + 10,
        prevX: -10,
        prevY: height + 10,
        angle: Math.PI * 1.75, // diagonal up-right
        targetAngle: Math.PI * 1.75,
        speed: 0.9 + Math.random() * 0.3,
        thickness: 3.2,
        life: 420,
        maxLife: 420,
        generation: 0,
        distAccumulator: 0,
      });

      active.push({
        x: -10,
        y: height + 10,
        prevX: -10,
        prevY: height + 10,
        angle: Math.PI * 1.75 + 0.15,
        targetAngle: Math.PI * 1.75 + 0.15,
        speed: 0.8 + Math.random() * 0.3,
        thickness: 2.4,
        life: 320,
        maxLife: 320,
        generation: 0,
        distAccumulator: 0,
      });
    };

    const grow = () => {
      let hasActiveBranches = activeBranchesRef.current.length > 0;
      let hasGrowingLeaves = false;

      if (hasActiveBranches) {
        const active = activeBranchesRef.current;
        for (let i = active.length - 1; i >= 0; i--) {
          const b = active[i];

          const nextX = b.x + Math.cos(b.angle) * b.speed;
          const nextY = b.y + Math.sin(b.angle) * b.speed;

          segmentsRef.current.push({
            x1: b.x,
            y1: b.y,
            x2: nextX,
            y2: nextY,
            thickness: b.thickness,
          });

          b.prevX = b.x;
          b.prevY = b.y;
          b.x = nextX;
          b.y = nextY;

          b.distAccumulator += b.speed;

          // Sprout leaf
          const sproutInterval = 20 + b.generation * 5;
          if (b.distAccumulator >= sproutInterval) {
            b.distAccumulator = 0;
            const side = Math.random() > 0.5 ? 1 : -1;
            const leafAngle = b.angle + side * (Math.PI / 3.5 + Math.random() * Math.PI / 6);
            leavesRef.current.push({
              x: nextX,
              y: nextY,
              angle: leafAngle,
              currentSize: 0,
              targetSize: 6.0 + Math.random() * 8.0 - b.generation * 0.8, // Leaf size variation (some small, some large)
              growSpeed: 0.05 + Math.random() * 0.06,
            });
          }

          b.life -= 1;

          // Gentle organic noise and steering force
          const noise = (Math.random() - 0.5) * 0.14;
          const targetDiff = b.targetAngle - b.angle;
          b.angle += noise + targetDiff * 0.035;

          // Slower taper for much longer survival and visibility
          b.thickness *= 0.996;

          // Split conditions
          const splitProb = 0.016;
          if (
            b.life > 55 &&
            b.generation < 3 &&
            active.length < 22 &&
            Math.random() < splitProb
          ) {
            const splitSide = Math.random() > 0.5 ? 1 : -1;
            const splitAngle = splitSide * (0.35 + Math.random() * 0.25);

            active.push({
              x: b.x,
              y: b.y,
              prevX: b.prevX,
              prevY: b.prevY,
              angle: b.angle + splitAngle,
              targetAngle: b.targetAngle + splitAngle * 0.5,
              speed: b.speed * (0.8 + Math.random() * 0.2),
              thickness: b.thickness * 0.65,
              life: b.life * 0.75,
              maxLife: b.maxLife,
              generation: b.generation + 1,
              distAccumulator: 0,
            });

            b.angle -= splitAngle * 0.3;
            b.thickness *= 0.75;
          }

          if (b.life <= 0 || b.thickness < 0.35) {
            active.splice(i, 1);
          }
        }
      }

      const leaves = leavesRef.current;
      for (let i = 0; i < leaves.length; i++) {
        const l = leaves[i];
        if (l.currentSize < l.targetSize) {
          l.currentSize += l.growSpeed;
          if (l.currentSize > l.targetSize) {
            l.currentSize = l.targetSize;
          }
          hasGrowingLeaves = true;
        }
      }

      drawEverything();

      if (activeBranchesRef.current.length > 0 || hasGrowingLeaves) {
        animationFrameIdRef.current = requestAnimationFrame(grow);
      } else {
        animationFrameIdRef.current = null;
      }
    };

    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      const prevWidth = sizeRef.current.width;
      const prevHeight = sizeRef.current.height;

      if (prevWidth > 0 && prevHeight > 0) {
        const scaleX = newWidth / prevWidth;
        const scaleY = newHeight / prevHeight;

        // Scale segments
        const segments = segmentsRef.current;
        for (let i = 0; i < segments.length; i++) {
          const s = segments[i];
          s.x1 *= scaleX;
          s.y1 *= scaleY;
          s.x2 *= scaleX;
          s.y2 *= scaleY;
        }

        // Scale leaves
        const leaves = leavesRef.current;
        for (let i = 0; i < leaves.length; i++) {
          const l = leaves[i];
          l.x *= scaleX;
          l.y *= scaleY;
        }

        // Scale active branches
        const active = activeBranchesRef.current;
        for (let i = 0; i < active.length; i++) {
          const b = active[i];
          b.x *= scaleX;
          b.y *= scaleY;
          b.prevX *= scaleX;
          b.prevY *= scaleY;
        }
      }

      sizeRef.current = { width: newWidth, height: newHeight };

      canvas.width = newWidth * dpr;
      canvas.height = newHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${newWidth}px`;
      canvas.style.height = `${newHeight}px`;

      const isFirstInit = segmentsRef.current.length === 0 && activeBranchesRef.current.length === 0;
      if (isFirstInit) {
        initBranches(newWidth, newHeight);
      }

      drawEverything();
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initial fade in for the canvas
    canvas.style.opacity = "0";
    canvas.style.transition = "opacity 3s ease-out";
    
    // Start growth loop
    animationFrameIdRef.current = requestAnimationFrame(grow);

    const revealTimeout = setTimeout(() => {
      canvas.style.opacity = "1";
    }, 100);

    // Watch for theme changes to redraw with correct colors immediately
    const observer = new MutationObserver(() => {
      drawEverything();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      clearTimeout(revealTimeout);
      window.removeEventListener("resize", resizeCanvas);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hidden md:block fixed inset-0 w-full h-full pointer-events-none select-none z-0"
    />
  );
};

export default GrowingBranches;
