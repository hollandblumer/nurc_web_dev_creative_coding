// components/GearSystem.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type GearSystemProps = {
  activeSectionIndex: number; // -1 when none open
  totalSections: number;
  onSelect: (index: number) => void;

  // ✅ the left column wrapper (contains all .sub-section headers)
  listRef: React.RefObject<HTMLDivElement | null>;
};

export default function GearSystem({
  activeSectionIndex,
  totalSections,
  onSelect,
  listRef,
}: GearSystemProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const speeds = useRef<number[]>(new Array(totalSections).fill(0.04));
  const angles = useRef<number[]>(new Array(totalSections).fill(0));

  // store gear centers in CSS pixels for overlay buttons
  const [gearCenters, setGearCenters] = useState<{ x: number; y: number }[]>(
    [],
  );

  useEffect(() => {
    // keep ref arrays in sync if totalSections changes
    if (speeds.current.length !== totalSections) {
      speeds.current = new Array(totalSections).fill(0.04);
    }
    if (angles.current.length !== totalSections) {
      angles.current = new Array(totalSections).fill(0);
    }
  }, [totalSections]);

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

    let raf = 0;
    let ro: ResizeObserver | null = null;

    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      // ✅ Match the LEFT COLUMN height (so no scroll gap, no buffer hack)
      const listEl = listRef.current;
      const listHeight = listEl
        ? listEl.getBoundingClientRect().height
        : rect.height;

      // Reset transform before scaling again (prevents cumulative scaling on resize)
      ctx.setTransform(1, 0, 0, 1, 0, 0);

      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(listHeight * dpr));

      ctx.scale(dpr, dpr);
    };

    const computePulleys = () => {
      const canvasRect = canvas.getBoundingClientRect();
      const listEl = listRef.current;
      const listRect = listEl?.getBoundingClientRect();

      const centerX = canvasRect.width / 2;
      const elements = document.querySelectorAll(".sub-section");

      return Array.from(elements).map((el) => {
        const elRect = el.getBoundingClientRect();

        // ✅ y position relative to the LEFT LIST, not the canvas' own top
        const yWithinList = listRect ? elRect.top - listRect.top : 0;

        return {
          x: centerX,
          y: yWithinList + 30, // centers in 60px header
          r: 14,
        };
      });
    };

    const updateOverlayCenters = (pulleys: { x: number; y: number }[]) => {
      // only update if changed enough to matter (avoids constant re-renders)
      setGearCenters((prev) => {
        if (prev.length !== pulleys.length) return pulleys;

        for (let i = 0; i < pulleys.length; i++) {
          if (
            Math.abs(prev[i].x - pulleys[i].x) > 0.5 ||
            Math.abs(prev[i].y - pulleys[i].y) > 0.5
          ) {
            return pulleys;
          }
        }
        return prev;
      });
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // ✅ Re-size whenever the dropdown column height changes (open/close)
    if (listRef.current) {
      ro = new ResizeObserver(() => updateCanvasSize());
      ro.observe(listRef.current);
    }

    const render = () => {
      const pulleys = computePulleys();

      // keep overlay aligned with headers
      updateOverlayCenters(pulleys.map((p) => ({ x: p.x, y: p.y })));

      // ✅ clear in CSS pixel space (since we scaled the context)
      const listHeight =
        listRef.current?.getBoundingClientRect().height ??
        canvas.getBoundingClientRect().height;
      const canvasWidth = canvas.getBoundingClientRect().width;

      ctx.clearRect(0, 0, canvasWidth, listHeight);

      // 1) belts
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

      // 2) gears + symbols
      pulleys.forEach((p, i) => {
        const isExpanded = i === activeSectionIndex;

        // Outer rotating gear
        ctx.save();
        ctx.translate(p.x, p.y);
        angles.current[i] += speeds.current[i];
        ctx.rotate(angles.current[i]);

        ctx.beginPath();
        ctx.arc(0, 0, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "#D1D3D4";
        ctx.fill();
        ctx.strokeStyle = "#808285";
        ctx.lineWidth = 1;
        ctx.stroke();

        for (let j = 0; j < 8; j++) {
          ctx.rotate(Math.PI / 4);
          ctx.beginPath();
          ctx.moveTo(p.r - 4, 0);
          ctx.lineTo(p.r, 0);
          ctx.stroke();
        }
        ctx.restore();

        // Inner hub + +/- (static)
        ctx.save();
        ctx.translate(p.x, p.y);

        ctx.beginPath();
        ctx.arc(0, 0, 8, 0, Math.PI * 2);
        ctx.fillStyle = "#8729f1";
        ctx.fill();
        ctx.strokeStyle = "#030303";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 2;
        ctx.lineCap = "round";

        ctx.beginPath();
        ctx.moveTo(-4, 0);
        ctx.lineTo(4, 0);
        ctx.stroke();

        if (!isExpanded) {
          ctx.beginPath();
          ctx.moveTo(0, -4);
          ctx.lineTo(0, 4);
          ctx.stroke();
        }

        ctx.restore();
      });

      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", updateCanvasSize);
      ro?.disconnect();
    };
  }, [totalSections, activeSectionIndex, listRef]);

  return (
    // ✅ no h-full; let it size naturally to the canvas we set
    <div className="relative w-full">
      {/* Canvas stays visual-only */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block pointer-events-none"
      />

      {/* Click targets overlayed on top of each gear */}
      <div className="absolute inset-0">
        {gearCenters.map((c, i) => {
          const isExpanded = i === activeSectionIndex;

          return (
            <button
              key={i}
              type="button"
              onClick={() => onSelect(i)}
              aria-label={
                isExpanded
                  ? `Collapse section ${i + 1}`
                  : `Expand section ${i + 1}`
              }
              className="absolute rounded-full"
              style={{
                left: c.x,
                top: c.y,
                width: 28, // matches gear diameter (r=14)
                height: 28,
                transform: "translate(-50%, -50%)",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
