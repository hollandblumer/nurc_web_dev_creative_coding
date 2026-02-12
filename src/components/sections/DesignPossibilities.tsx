"use client";

import { InstagramEmbed } from "react-social-media-embed";

const InstagramPoster = ({ url }: { url: string }) => (
  <div className="group relative overflow-hidden rounded-sm border border-zinc-200 bg-zinc-50 aspect-[4/5]">
    <div className="w-full h-full scale-[1.15] -mt-7">
      <InstagramEmbed url={url} width="100%" captioned={false} />
    </div>
    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
  </div>
);

export default function DesignPossibilities() {
  const inspirationLinks = [
    { name: "antonin.work", url: "https://www.instagram.com/antonin.work/" },
    {
      name: "openprocessing (184331)",
      url: "https://openprocessing.org/user/184331#sketches",
    },
    { name: "holke79", url: "https://www.instagram.com/holke79/" },
    {
      name: "bureaubabaparis",
      url: "https://www.instagram.com/bureaubabaparis/",
    },
    {
      name: "openprocessing (293890)",
      url: "https://openprocessing.org/user/293890#sketches",
    },
    {
      name: "openprocessing (72194)",
      url: "https://openprocessing.org/user/72194#sketches",
    },
    {
      name: "openprocessing (65884)",
      url: "https://openprocessing.org/user/65884#sketches",
    },
    { name: "dominicnikolai", url: "https://codepen.io/DominicNikolai" },
    { name: "prisoner849", url: "https://codepen.io/prisoner849" },
    { name: "atzedent", url: "https://codepen.io/atzedent" },
    { name: "lekzd", url: "https://codepen.io/lekzd" },
  ];

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
    <div className="space-y-6 text-gray-900 max-w-3xl mx-auto p-4 leading-relaxed">
      <h3 className="text-xl font-bold border-b pb-2">
        Inspiration & Accounts to Follow
      </h3>

      <p>
        Here is a collection of creators and developers pushing the boundaries
        of creative coding and visual design:
      </p>

      {/* INSPIRATION LINKS LIST */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-6">
        {inspirationLinks.map((link) => (
          <li key={link.url}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline font-medium flex items-center gap-2"
            >
              <span className="text-gray-400">→</span> {link.name}
            </a>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-bold border-b pb-2 pt-4">
        Design Possibilities
      </h3>

      <p>
        These examples demonstrate how we can translate motion principles into
        static and interactive poster layouts.
      </p>

      {/* POSTER GRID */}
      <div className="grid grid-cols-2 gap-4 my-8">
        {posterLinks.map((link, index) => (
          <InstagramPoster key={`${link}-${index}`} url={link} />
        ))}
      </div>
    </div>
  );
}
