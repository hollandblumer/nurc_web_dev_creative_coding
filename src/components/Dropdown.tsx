"use client";

interface DropdownProps {
  index: number;
  title: string;
  expanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

// Roman numeral helper
const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
const toRoman = (i: number) => ROMAN[i] ?? `${i + 1}`;

export default function Dropdown({
  index,
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
      {/* Entire header row clickable */}
      <button
        type="button"
        onClick={onToggle}
        className="group w-full flex items-center py-4 h-[60px] text-left"
        aria-expanded={expanded}
      >
        {/* Roman numeral — MATCHED SIZE AND FONT */}
        <span className="w-16 text-left text-[1.1rem] md:text-[1.25rem] font-manrope font-black tracking-tight text-black/40 shrink-0 transition-colors group-hover:text-black/80">
          {toRoman(index)}
        </span>

        {/* Title — MATCHED SIZE AND FONT */}
        <h2 className="flex-1 text-[1.1rem] md:text-[1.25rem] font-manrope font-black tracking-tight leading-snug text-[#030303]">
          {title}
        </h2>

        {/* Empty breathing room before gears */}
        <div className="w-12 shrink-0" />

        {/* Gear column spacer (aligns with GearSystem) */}
        <div className="w-10 h-6 shrink-0" />
      </button>

      {/* Content */}
      {expanded && <div className="pt-4 pb-10">{children}</div>}
    </div>
  );
}
