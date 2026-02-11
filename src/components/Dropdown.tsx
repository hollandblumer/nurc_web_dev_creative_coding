"use client";

interface DropdownProps {
  title: string;
  expanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export default function Dropdown({
  title,
  expanded,
  onToggle,
  children,
}: DropdownProps) {
  return (
    <div
      className={`sub-section border-b border-black/5 mb-4 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] 
      ${expanded ? "max-h-[2500px]" : "max-h-[60px]"}`}
    >
      {/* FIX 1: Removed opacity-0 from the parent so the title is ALWAYS visible.
          FIX 2: Increased max-height to 2500px so the long CodePen blocks never cut off.
      */}

      {/* Header Row - This must always stay visible */}
      <div
        className="flex justify-between items-center cursor-pointer py-4 h-[60px]"
        onClick={onToggle}
      >
        <h2 className="text-[0.9rem] font-black uppercase tracking-[2px] m-0 text-[#030303]">
          {title}
        </h2>

        {/* Plus Button */}
        <div
          className={`w-6 h-6 flex items-center justify-center rounded-sm transition-all duration-300 
          ${expanded ? "rotate-45 bg-[#8729f1] text-white" : "bg-[#030303] text-[#8729f1]"}`}
        >
          +
        </div>
      </div>

      {/* Content Area - Only this part should fade or hide */}
      <div
        className={`pt-4 pb-10 transition-opacity duration-500 ${expanded ? "opacity-100" : "opacity-0"}`}
      >
        {children}
      </div>
    </div>
  );
}
