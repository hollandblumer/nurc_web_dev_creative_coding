"use client";

import { InstagramEmbed } from "react-social-media-embed";

const InstagramPoster = ({ url }) => (
  <div className="group relative overflow-hidden rounded-sm border border-zinc-200 bg-zinc-50 aspect-[4/5]">
    <div className="w-full h-full scale-[1.15] -mt-7">
      <InstagramEmbed url={url} width="100%" captioned={false} />
    </div>
    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
  </div>
);

export default function DesignPossibilities() {
  const posterLinks = [
    "https://www.instagram.com/p/DSK4KPHiG8W/",
    "https://www.instagram.com/p/DQQ7cqcDMAK/?img_index=1",
    "https://www.instagram.com/p/DQEIYQXDAOr/?img_index=1",
    "https://www.instagram.com/p/DDmJSd_iEKi/?img_index=1",
    "https://www.instagram.com/p/DT8QLJMD7_n/",
    "https://www.instagram.com/p/DA8G8k_NTD8/?img_index=1",
    "https://www.instagram.com/p/DTpsvLKiLi9/?img_index=1",
  ];

  return (
    <div className="space-y-4 max-w-3xl mx-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-end border-b border-zinc-200 pb-2">
        <div className="space-y-1">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em]">
            Design Possibilities
          </h2>
          <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">
            Organic Motion & Creative Coding
          </p>
        </div>
        <div className="text-[10px] font-mono text-zinc-400">2_COL_LAYOUT</div>
      </div>

      {/* Forced 2-Column Grid */}
      <div className="grid grid-cols-2 gap-4">
        {posterLinks.map((link, index) => (
          <InstagramPoster key={`${link}-${index}`} url={link} />
        ))}
      </div>

      {/* Labels - 2 columns to match the grid */}
      <ul className="grid grid-cols-2 gap-1 text-[9px] font-mono uppercase tracking-[0.15em]">
        {["Contour Lines", "Stretchy", "Globby Morphing", "Tapered Lines"].map(
          (label) => (
            <li
              key={label}
              className="bg-zinc-100 p-2 border-l border-zinc-300 hover:bg-black hover:text-white transition-all cursor-crosshair"
            >
              → {label}
            </li>
          ),
        )}
      </ul>
    </div>
  );
}
