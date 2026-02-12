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
      {/* Header Row - Clicking this triggers the gear animation */}
      <div
        className="flex justify-between items-center cursor-pointer py-4 h-[60px]"
        onClick={onToggle}
      >
        <h2 className="text-[0.9rem] font-black uppercase tracking-[2px] m-0 text-[#030303]">
          {title}
        </h2>

        {/* We leave this empty space so the title doesn't span the whole width, 
            keeping the gear area clear on the right */}
        <div className="w-6 h-6" />
      </div>

      {/* Content Area */}
      <div
        className={`pt-4 pb-10 transition-opacity duration-500 ${
          expanded ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
