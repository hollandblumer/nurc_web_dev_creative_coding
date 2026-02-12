"use client";

import { useEffect, useRef } from "react";

interface Move {
  x: number;
  y: number;
  type?: string;
}

interface JumpWire {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  h: number;
}

export default function WorkshopHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // --- High DPI Scaling Logic ---
    const dpr = window.devicePixelRatio || 1;
    const logicalW = 360;
    const logicalH = 500;

    canvas.width = logicalW * dpr;
    canvas.height = logicalH * dpr;
    canvas.style.width = `${logicalW}px`;
    canvas.style.height = `${logicalH}px`;
    ctx.scale(dpr, dpr);

    const global = { w: logicalW, h: logicalH, s: 6, fW: 0, fH: 0 };
    global.fW = Math.floor(global.w / global.s);
    global.fH = Math.floor(global.h / global.s);

    let fieldMap: number[][] = [];
    let nodes: any[] = [];
    let jumpWires: JumpWire[] = [];
    let mapFinish = 0;

    const rawPoints = [
      { x: 122, y: 316 },
      { x: 79, y: 244 },
      { x: 44, y: 183 },
      { x: 43, y: 345 },
      { x: 44, y: 418 },
      { x: 126, y: 482 },
      { x: 127, y: 558 },
      { x: 1, y: 559 },
      { x: 0, y: 558 },
      { x: 0, y: 1 },
      { x: 1, y: 0 },
      { x: 87, y: 0 },
      { x: 103, y: 26 },
      { x: 155, y: 115 },
      { x: 193, y: 179 },
      { x: 234, y: 249 },
      { x: 313, y: 382 },
      { x: 313, y: 221 },
      { x: 230, y: 78 },
      { x: 230, y: 1 },
      { x: 355, y: 1 },
      { x: 355, y: 565 },
      { x: 268, y: 565 },
      { x: 230, y: 501 },
      { x: 163, y: 387 },
      { x: 132, y: 334 },
    ];

    const isInsideN = (x: number, y: number) => {
      let px = x * global.s,
        py = y * global.s,
        inside = false;
      for (let i = 0, j = rawPoints.length - 1; i < rawPoints.length; j = i++) {
        let xi = rawPoints[i].x,
          yi = rawPoints[i].y,
          xj = rawPoints[j].x,
          yj = rawPoints[j].y;
        if (
          yi > py !== yj > py &&
          px < ((xj - xi) * (py - yi)) / (yj - yi) + xi
        )
          inside = !inside;
      }
      return inside;
    };

    const buildNewMap = () => {
      fieldMap = [];
      let validSquares = 0;
      for (let h = 0; h < global.fH; h++) {
        fieldMap[h] = [];
        for (let w = 0; w < global.fW; w++) {
          let inside = isInsideN(w, h);
          fieldMap[h][w] = inside ? 0 : 1;
          if (inside) validSquares++;
        }
      }
      mapFinish = Math.floor(validSquares * 0.05);
    };

    const dist = (x1: number, y1: number, x2: number, y2: number) =>
      Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    const buildNewNode = (x: number, y: number, type: string) => ({
      pos: { x, y },
      pre: { x, y },
      stuckFactor: 0,
      tailLength: 0,
      turns: Math.floor(Math.random() * 3) + 2,
      type,
      move() {
        const moves = this.possibleMoves();
        const curMove = moves[Math.floor(Math.random() * moves.length)];
        const nx = this.pos.x + curMove.x,
          ny = this.pos.y + curMove.y;
        this.stuckFactor -= 1;
        if (
          nx < 0 ||
          ny < 0 ||
          nx >= global.fW ||
          ny >= global.fH ||
          fieldMap[ny][nx] === 1
        )
          return null;
        fieldMap[ny][nx] = 1;
        this.stuckFactor += 2;
        this.tailLength += 1;
        this.turns += curMove.type === "t" ? -1 : 0;
        const oldPos = { ...this.pos };
        this.pos = { x: nx, y: ny };
        this.pre = oldPos;
        return this.pos;
      },
      possibleMoves(): Move[] {
        const ax = this.pos.x - this.pre.x,
          ay = this.pos.y - this.pre.y;
        const availableMoves = [
          { x: 0, y: -1 },
          { x: -1, y: -1 },
          { x: -1, y: 0 },
          { x: -1, y: 1 },
          { x: 0, y: 1 },
          { x: 1, y: 1 },
          { x: 1, y: 0 },
          { x: 1, y: -1 },
        ];
        if (ax === 0 && ay === 0)
          return [availableMoves[Math.floor(Math.random() * 8)]];
        let index = availableMoves.findIndex((m) => m.x === ax && m.y === ay);
        const result: Move[] = [availableMoves[index]];
        if (this.turns > 0) {
          const lIndex = index === 0 ? availableMoves.length - 1 : index - 1;
          const rIndex = index === availableMoves.length - 1 ? 0 : index + 1;
          result.push({ ...availableMoves[lIndex], type: "t" });
          result.push({ ...availableMoves[rIndex], type: "t" });
        }
        return result;
      },
      stuck() {
        return this.stuckFactor < -5;
      },
    });

    const animate = () => {
      let open: { x: number; y: number }[] = [];
      for (let i = 0; i < fieldMap.length; i++) {
        for (let j = 0; j < fieldMap[i].length; j++) {
          if (fieldMap[i][j] === 0) open.push({ x: j, y: i });
        }
      }

      if (open.length <= mapFinish) {
        ctx.clearRect(0, 0, global.w, global.h);
        buildNewMap();
        nodes = [];
        jumpWires = [];
      }

      if (nodes.length < 20 && open.length > 0) {
        const next = open[Math.floor(Math.random() * open.length)];
        nodes.push(
          buildNewNode(next.x, next.y, Math.random() > 0.4 ? "black" : "grey"),
        );
      }

      const correct = global.s / 2;

      nodes.forEach((node) => {
        const cur_p = { x: node.pos.x, y: node.pos.y };
        const new_p = node.move();

        if (new_p) {
          ctx.beginPath();
          ctx.lineWidth = node.type === "black" ? 1.5 : 1;
          ctx.strokeStyle = node.type === "black" ? "#52525b" : "#27272a";
          ctx.moveTo(
            cur_p.x * global.s + correct,
            cur_p.y * global.s + correct,
          );
          ctx.lineTo(
            new_p.x * global.s + correct,
            new_p.y * global.s + correct,
          );
          ctx.stroke();
        }

        if (node.tailLength <= 1 || node.stuck()) {
          const rad = node.type === "black" ? global.s / 3 : global.s / 4;
          const cx = cur_p.x * global.s + correct;
          const cy = cur_p.y * global.s + correct;

          ctx.beginPath();
          ctx.arc(cx, cy, rad, 0, Math.PI * 2);
          // Applied the Arrow Purple Color here (#B301FF)
          ctx.fillStyle = node.type === "black" ? "#B301FF" : "#3f3f46";
          ctx.fill();

          if (
            node.type === "black" &&
            node.stuck() &&
            jumpWires.length < 15 &&
            Math.random() < 0.1
          ) {
            let nearby = nodes.filter((n) => {
              let d = dist(n.pos.x, n.pos.y, node.pos.x, node.pos.y);
              return n !== node && d > 6 && d < 15;
            });
            if (nearby.length > 0) {
              let target = nearby[Math.floor(Math.random() * nearby.length)];
              jumpWires.push({
                x1: cx,
                y1: cy,
                x2: target.pos.x * global.s + correct,
                y2: target.pos.y * global.s + correct,
                h: Math.floor(Math.random() * 20) + 25,
              });
            }
          }
        }
      });

      ctx.lineCap = "round";
      jumpWires.forEach((w) => {
        ctx.beginPath();
        // Applied the Arrow Purple Color here (#B301FF)
        ctx.strokeStyle = `#B301FF`;
        ctx.lineWidth = 2;
        ctx.moveTo(w.x1, w.y1);
        ctx.bezierCurveTo(w.x1, w.y1 - w.h, w.x2, w.y2 - w.h, w.x2, w.y2);
        ctx.stroke();
      });

      nodes = nodes.filter((n) => !n.stuck());
      requestAnimationFrame(animate);
    };

    buildNewMap();
    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="relative bg-transparent">
      <canvas ref={canvasRef} className="bg-transparent pointer-events-none" />
    </div>
  );
}
