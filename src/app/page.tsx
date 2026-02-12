"use client";

import { useState } from "react";
import PasswordGate from "../components/PasswordGate";
import GearSystem from "../components/GearSystem";
import Dropdown from "../components/Dropdown";
import Section from "../components/Section";

// Curriculum Section Imports
import TheCloud from "../components/sections/TheCloud";
import WebFoundations from "../components/sections/WebFoundations";
import CreativeToolkit from "../components/sections/CreativeToolkit";
import WebAppIntro from "../components/sections/WebAppIntro";
import DesignPossibilities from "../components/sections/DesignPossibilities";
import Freelancing from "../components/sections/Freelancing";

export default function Page() {
  const [open, setOpen] = useState<string>("cloud");
  const [isLocked, setIsLocked] = useState(true);

  const sections = [
    {
      id: "cloud",
      title: "1. How the Internet Works: Is it actually in the cloud?",
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

  // 1. Handle Password Gate
  if (isLocked) {
    return <PasswordGate onUnlock={() => setIsLocked(false)} />;
  }

  return (
    /* 2. Background set to transparent */
    <div className="min-h-screen bg-transparent selection:bg-[#8729f1] selection:text-white">
      {/* 3. Main Center Wrapper */}
      <div className="flex justify-center items-start py-20">
        {/* 4. MEGA SECTION: 
               - w-[1000px]: Controls total width of your curriculum.
               - items-stretch: Forces sidebar height to match the content height.
               - gap-12: Creates the 48px space (gutter) between gears and text.
        */}
        <div className="mega-section flex w-[1000px] relative z-10 items-stretch gap-12">
          {/* 5. SIDEBAR: 
                 - w-[100px]: The gear's territory.
                 - flex-shrink-0: Prevents the content pane from squishing the gears.
          */}
          <div className="sidebar w-[100px] flex-shrink-0 relative">
            <GearSystem
              activeSectionIndex={activeIndex}
              totalSections={sections.length}
            />
          </div>

          {/* 6. CONTENT PANE: 
                 - flex-grow: Fills the remaining width.
                 - min-w-0: Prevents layout breaking on small screens or long text.
          */}
          <div className="content-pane flex-grow min-w-0">
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
    </div>
  );
}
