"use client";

import { useState } from "react";
import GearSystem from "../components/GearSystem";
import Dropdown from "../components/Dropdown";
import Section from "../components/Section";

// Curriculum Sections
import TheCloud from "../components/sections/TheCloud";
import WebFoundations from "../components/sections/WebFoundations";
import CreativeToolkit from "../components/sections/CreativeToolkit";
import WebAppIntro from "../components/sections/WebAppIntro";
import DesignPossibilities from "../components/sections/DesignPossibilities";
import Freelancing from "../components/sections/Freelancing";

export default function Page() {
  const [open, setOpen] = useState<string>("cloud");

  const sections = [
    {
      id: "cloud",
      title: "1. How the Web Works: Do We Live in a Cloud?",
      component: <TheCloud />,
    },
    {
      id: "foundations",
      title: "2. The Foundation: HTML & JavaScript",
      component: <WebFoundations />,
    },
    {
      id: "toolkit",
      title: "3. The Creative Toolkit: Libraries & Shaders",
      component: <CreativeToolkit />,
    },
    {
      id: "webapp",
      title: "4. Make a Webapp: React & Backend",
      component: <WebAppIntro />,
    },
    {
      id: "design",
      title: "5. Approaching Design & Possibility",
      component: <DesignPossibilities />,
    },
    {
      id: "freelance",
      title: "6. Become a Freelancer!",
      component: <Freelancing />,
    },
  ];

  const activeIndex = sections.findIndex((s) => s.id === open);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="mega-section flex w-[900px] relative z-10 py-[50px]">
        {/* The mechanical Sidebar */}
        <div className="sidebar w-[120px]">
          <GearSystem
            activeSectionIndex={activeIndex}
            totalSections={sections.length}
          />
        </div>

        {/* The Curriculum Dropdowns */}
        <div className="content-pane flex-grow">
          {sections.map((sec) => (
            <Dropdown
              key={sec.id}
              title={sec.title}
              expanded={open === sec.id}
              onToggle={() => setOpen(open === sec.id ? "" : sec.id)}
            >
              <Section>{sec.component}</Section>
            </Dropdown>
          ))}
        </div>
      </div>
    </div>
  );
}
