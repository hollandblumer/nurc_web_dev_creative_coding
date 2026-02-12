// components/Dropdown.tsx
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
      className={`sub-section mb-4 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
      ${expanded ? "max-h-[2500px]" : "max-h-[60px]"}`}
    >
      {/* ✅ Entire header row is clickable (title + gear column area) */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex justify-between items-center cursor-pointer py-4 h-[60px] text-left"
        aria-expanded={expanded}
      >
        <h2 className="text-[0.9rem] font-black uppercase tracking-[2px] m-0 text-[#030303]">
          {title}
        </h2>

        {/* keep right side clear for the gear column */}
        <div className="w-6 h-6" />
      </button>

      {/* ✅ Prevent “looks open” issues by only mounting content when expanded */}
      {expanded && <div className="pt-4 pb-10">{children}</div>}
    </div>
  );
}
