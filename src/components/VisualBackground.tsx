"use client";
import { useEffect, useRef } from "react";

export default function VisualBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let cw = (canvas.width = window.innerWidth);
    let ch = (canvas.height = window.innerHeight);
    const dots: any[] = [];
    const wires: any[] = [];
    const spacing = 25;
    const purpleAccent = "#8729f1"; // Your preferred purple
    const techBlack = "#030303"; // Your preferred black

    const init = () => {
      cw = canvas.width = window.innerWidth;
      ch = canvas.height = window.innerHeight;
      dots.length = 0;
      for (let x = 0; x < cw; x += spacing) {
        for (let y = 0; y < ch; y += spacing) {
          let isAccent = y < ch * 0.1 || y > ch * 0.9;
          dots.push({
            x,
            y,
            r: 2,
            color: isAccent ? purpleAccent : "#D1D3D4",
            baseA: 0.15,
            gridX: x / spacing,
            gridY: y / spacing,
          });
        }
      }

      wires.length = 0;
      for (let i = 0; i < 35; i++) {
        const start = dots[Math.floor(Math.random() * dots.length)];
        const targets = dots.filter(
          (d) =>
            d !== start &&
            Math.abs(d.gridX - start.gridX) <= 6 &&
            Math.abs(d.gridY - start.gridY) <= 6,
        );
        if (targets.length > 0) {
          const end = targets[Math.floor(Math.random() * targets.length)];
          wires.push({
            start,
            end,
            color: Math.random() > 0.5 ? purpleAccent : techBlack,
            width: 1.5,
            arc: (Math.random() - 0.5) * 60,
          });
        }
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, cw, ch);
      let time = Date.now() * 0.0008;

      dots.forEach((d) => {
        // Accessing noise from the script tag in layout.tsx
        const n = (window as any).noise
          ? (window as any).noise.perlin3(d.x / 500, d.y / 500, time)
          : 0;
        d.currentAlpha = Math.max(0, d.baseA + n * 0.4);
        if (d.currentAlpha > 0.02) {
          ctx.globalAlpha = d.currentAlpha;
          ctx.fillStyle = d.color;
          ctx.beginPath();
          ctx.arc(d.x, d.y, d.r + n * 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      wires.forEach((w) => {
        ctx.globalAlpha =
          Math.min(w.start.currentAlpha, w.end.currentAlpha) * 0.5;
        if (ctx.globalAlpha > 0.1) {
          ctx.beginPath();
          ctx.lineWidth = w.width;
          ctx.strokeStyle = w.color;
          ctx.moveTo(w.start.x, w.start.y);
          const midX = (w.start.x + w.end.x) / 2;
          const midY = (w.start.y + w.end.y) / 2 + w.arc;
          ctx.quadraticCurveTo(midX, midY, w.end.x, w.end.y);
          ctx.stroke();
        }
      });
      requestAnimationFrame(render);
    };

    init();
    render();
    window.addEventListener("resize", init);
    return () => window.removeEventListener("resize", init);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="bgCanvas"
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{
        maskImage:
          "linear-gradient(to right, black 0%, transparent 25%, transparent 75%, black 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, black 0%, transparent 25%, transparent 75%, black 100%)",
      }}
    />
  );
}
