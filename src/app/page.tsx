// app/page.tsx (or wherever this Page lives)
"use client";

import { useMemo, useRef, useState } from "react";
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
  const [open, setOpen] = useState<string>("");
  const [isLocked, setIsLocked] = useState(true);

  // ✅ Reference the left column so GearSystem can size itself + compute positions correctly
  const listRef = useRef<HTMLDivElement>(null);

  const sections = useMemo(
    () => [
      {
        id: "cloud",
        title: "How the Internet Works: Is it actually in the cloud?",
        component: <TheCloud />,
      },
      {
        id: "foundations",
        title: "The Foundation: HTML & JavaScript",
        component: <WebFoundations />,
      },
      {
        id: "toolkit",
        title: "The Creative Toolkit: Libraries & Shaders",
        component: <CreativeToolkit />,
      },
      {
        id: "webapp",
        title: "Make a Webapp: React & Backend",
        component: <WebAppIntro />,
      },
      {
        id: "design",
        title: "Approaching Design & Possibility",
        component: <DesignPossibilities />,
      },
      {
        id: "freelance",
        title: " Become a Freelancer!",
        component: <Freelancing />,
      },
    ],
    [],
  );

  const activeIndex = sections.findIndex((s) => s.id === open);

  if (isLocked) {
    return <PasswordGate onUnlock={() => setIsLocked(false)} />;
  }

  return (
    <div className="min-h-screen bg-transparent selection:bg-[#8729f1] selection:text-white font-manrope">
      <div className="flex flex-col items-center py-20">
        <div className="w-full max-w-[1000px] px-6">
          {/* Manrope Styled Header */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-40">
              Welcome
            </h1>

            <div className="mt-4 flex justify-center gap-4">
              <p className="text-lg font-medium tracking-[0.2em] text-gray-400">
                Web Development and Creative Coding Workshop
              </p>
            </div>
          </div>

          {/* ✅ items-start prevents the right column from stretching the row height */}
          <div className="flex gap-12 items-start">
            <div ref={listRef} className="flex-grow min-w-0">
              {sections.map((sec, i) => (
                <Dropdown
                  key={sec.id}
                  index={i}
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

            <div className="w-[100px] relative flex-shrink-0 self-start">
              <GearSystem
                listRef={listRef}
                activeSectionIndex={activeIndex}
                totalSections={sections.length}
                onSelect={(index: number) => {
                  const id = sections[index]?.id;
                  if (!id) return;
                  setOpen((prev) => (prev === id ? "" : id));
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
