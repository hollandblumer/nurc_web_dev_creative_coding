"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GearSystem({ activeSectionIndex, totalSections }: any) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const speeds = useRef<number[]>(new Array(totalSections).fill(0.04));
  const angles = useRef<number[]>(new Array(totalSections).fill(0));

  useEffect(() => {
    speeds.current.forEach((_, i) => {
      gsap.to(speeds.current, {
        [i]: i === activeSectionIndex ? 0.22 : 0.04,
        duration: 0.6,
        overwrite: true,
      });
    });
  }, [activeSectionIndex]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = (rect.height + 1000) * dpr; // Buffer for expansion
      ctx.scale(dpr, dpr);
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const centerX = rect.width / 2;
      const elements = document.querySelectorAll(".sub-section");

      const pulleys = Array.from(elements).map((el: any) => {
        const elRect = el.getBoundingClientRect();
        return {
          x: centerX,
          y: elRect.top - rect.top + 30, // Centers gear in the 60px header
          r: 14,
        };
      });

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw Belts
      ctx.strokeStyle = "#030303";
      ctx.lineWidth = 3;
      ctx.lineCap = "round";

      for (let i = 0; i < pulleys.length - 1; i++) {
        const p1 = pulleys[i];
        const p2 = pulleys[i + 1];
        ctx.beginPath();
        ctx.moveTo(p1.x - p1.r + 2, p1.y);
        ctx.lineTo(p2.x - p2.r + 2, p2.y);
        ctx.moveTo(p1.x + p1.r - 2, p1.y);
        ctx.lineTo(p2.x + p2.r - 2, p2.y);
        ctx.stroke();
      }

      // 2. Draw Gears and Symbols
      pulleys.forEach((p, i) => {
        const isExpanded = i === activeSectionIndex;

        // Gear Outer Body (Rotates)
        ctx.save();
        ctx.translate(p.x, p.y);
        angles.current[i] += speeds.current[i];
        ctx.rotate(angles.current[i]);

        // Main Gear Circle
        ctx.beginPath();
        ctx.arc(0, 0, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "#D1D3D4";
        ctx.fill();
        ctx.strokeStyle = "#808285";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Add some "gear teeth" marks for visual spin feedback
        for (let j = 0; j < 8; j++) {
          ctx.rotate(Math.PI / 4);
          ctx.beginPath();
          ctx.moveTo(p.r - 4, 0);
          ctx.lineTo(p.r, 0);
          ctx.stroke();
        }
        ctx.restore();

        // Inner Hub & Symbol (Static / Non-Rotating for readability)
        ctx.save();
        ctx.translate(p.x, p.y);

        // Purple Circle
        ctx.beginPath();
        ctx.arc(0, 0, 8, 0, Math.PI * 2);
        ctx.fillStyle = "#8729f1";
        ctx.fill();
        ctx.strokeStyle = "#030303";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // White Symbol (+/-)
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 2;
        ctx.lineCap = "round";

        // Horizontal Line
        ctx.beginPath();
        ctx.moveTo(-4, 0);
        ctx.lineTo(4, 0);
        ctx.stroke();

        // Vertical Line (Only if not expanded)
        if (!isExpanded) {
          ctx.beginPath();
          ctx.moveTo(0, -4);
          ctx.lineTo(0, 4);
          ctx.stroke();
        }

        ctx.restore();
      });

      requestAnimationFrame(render);
    };

    const animId = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, [totalSections, activeSectionIndex]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block pointer-events-none"
    />
  );
}
