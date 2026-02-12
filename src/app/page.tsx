"use client";

import { useState, useMemo } from "react";
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
  // nothing open initially
  const [open, setOpen] = useState<string>("");
  const [isLocked, setIsLocked] = useState(true);

  const sections = useMemo(
    () => [
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
    ],
    [],
  );

  // -1 means “no section open”
  const activeIndex = sections.findIndex((s) => s.id === open);

  if (isLocked) {
    return <PasswordGate onUnlock={() => setIsLocked(false)} />;
  }

  return (
    <div className="min-h-screen bg-transparent selection:bg-[#8729f1] selection:text-white">
      <div className="flex justify-center items-start py-20">
        <div className="flex w-[1000px] gap-12 items-stretch">
          {/* GEAR SIDEBAR */}
          <div className="w-[100px] relative flex-shrink-0">
            <GearSystem
              activeSectionIndex={activeIndex}
              totalSections={sections.length}
            />
          </div>

          {/* CONTENT */}
          <div className="flex-grow min-w-0">
            {sections.map((sec) => (
              <Dropdown
                key={sec.id}
                title={sec.title}
                expanded={open === sec.id}
                onToggle={() =>
                  setOpen((prev) => (prev === sec.id ? "" : sec.id))
                }
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
