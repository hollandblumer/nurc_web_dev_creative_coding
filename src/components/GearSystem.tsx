"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GearSystem({ activeSectionIndex, totalSections }: any) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const speeds = useRef<number[]>(new Array(totalSections).fill(0.03));
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

    // --- FIX: Fixed Resolution Sync ---
    // We set a large enough buffer once so the browser doesn't panic during expansion
    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      // We pad the height so expansion doesn't trigger a re-allocation immediately
      canvas.width = rect.width * dpr;
      canvas.height = (rect.height + 500) * dpr;
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
          y: elRect.top - rect.top + 30,
          r: 14,
        };
      });

      // We clear the whole buffer
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

      // 2. Draw Gears
      pulleys.forEach((p, i) => {
        ctx.save();
        ctx.translate(p.x, p.y);
        angles.current[i] += speeds.current[i];
        ctx.rotate(angles.current[i]);

        ctx.beginPath();
        ctx.arc(0, 0, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "#D1D3D4";
        ctx.fill();
        ctx.strokeStyle = "#808285";
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, 6, 0, Math.PI * 2);
        ctx.fillStyle = "#8729f1";
        ctx.fill();
        ctx.strokeStyle = "#030303";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.restore();
      });

      requestAnimationFrame(render);
    };

    const animId = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, [totalSections]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block pointer-events-none"
    />
  );
}
