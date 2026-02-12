"use client";

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";

const Globe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Dimensions set to 400 as per your previous edit
    const width = 400;
    const height = 400;
    const speed = -1e-2;
    const start = Date.now();

    const colors = {
      bg: "#FFFFFF",
      land: "#F0F0F5",
      border: "#D1D3D4",
      accent: "#8729f1",
      packet: "#7E27DF",
      nodes: "#231F20",
    };

    const links: [number, number][][] = [
      [
        [-74, 40],
        [2, 48],
      ],
      [
        [139, 35],
        [-122, 37],
      ],
      [
        [31, 30],
        [116, 39],
      ],
      [
        [-0.1, 51],
        [151, -33],
      ],
      [
        [103, 1],
        [-3, 40],
      ],
      [
        [-58, -34],
        [-74, 40],
      ],
    ];

    const context = canvasRef.current.getContext("2d");
    if (!context) return;

    const projection = d3
      .geoOrthographic()
      .scale(width / 2.2)
      .translate([width / 2, height / 2])
      .clipAngle(90)
      .precision(0.5);

    const path = d3.geoPath().projection(projection).context(context);

    d3.json(
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/95802/world-110m.json",
    ).then((topo: any) => {
      const land = topojson.feature(topo, topo.objects.land);

      const timer = d3.timer(() => {
        context.clearRect(0, 0, width, height);
        const now = Date.now() - start;
        const rotate: [number, number] = [speed * now, -15];
        projection.rotate(rotate);

        context.beginPath();
        path({ type: "Sphere" });
        context.fillStyle = "#FFFFFF";
        context.fill();

        context.beginPath();
        path(land);
        context.fillStyle = colors.land;
        context.fill();

        links.forEach((link) => {
          const source = link[0];
          const target = link[1];

          const p1_visible =
            d3.geoDistance([-rotate[0], -rotate[1]], source) < Math.PI / 2;
          const p2_visible =
            d3.geoDistance([-rotate[0], -rotate[1]], target) < Math.PI / 2;

          if (p1_visible || p2_visible) {
            const interpolate = d3.geoInterpolate(source, target);

            context.beginPath();
            context.strokeStyle = colors.accent;
            context.globalAlpha = 0.2;
            context.setLineDash([2, 4]);
            context.lineWidth = 1;

            for (let i = 0; i <= 30; i++) {
              const coords = interpolate(i / 30);
              const p = projection(coords);
              if (p) {
                if (i === 0) context.moveTo(p[0], p[1]);
                else context.lineTo(p[0], p[1]);
              }
            }
            context.stroke();
            context.setLineDash([]);
            context.globalAlpha = 1.0;

            // Updated: now / 1000 ensures a 1-second journey time
            const t = (now / 1000) % 1;
            const packetCoords = interpolate(t);
            const packetPos = projection(packetCoords);

            if (
              packetPos &&
              d3.geoDistance([-rotate[0], -rotate[1]], packetCoords) <
                Math.PI / 2
            ) {
              context.beginPath();
              context.arc(packetPos[0], packetPos[1], 3, 0, 2 * Math.PI);
              context.fillStyle = colors.packet;
              context.shadowBlur = 0;
              context.fill();
            }

            [source, target].forEach((coords) => {
              if (
                d3.geoDistance([-rotate[0], -rotate[1]], coords) <
                Math.PI / 2
              ) {
                const p = projection(coords);
                if (p) {
                  context.beginPath();
                  context.arc(p[0], p[1], 1, 0, 2 * Math.PI);
                  context.fillStyle = colors.nodes;
                  context.fill();
                }
              }
            });
          }
        });

        context.beginPath();
        path({ type: "Sphere" });
        context.lineWidth = 1;
        context.strokeStyle = colors.border;
        context.stroke();
      });

      return () => timer.stop();
    });
  }, []);

  return (
    <div className="flex justify-center items-center bg-white overflow-hidden p-0 m-0">
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        style={{ display: "block", maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
};

export default Globe;
