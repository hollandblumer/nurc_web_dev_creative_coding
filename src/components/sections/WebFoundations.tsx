"use client";

export default function WebFoundations() {
  return (
    <div className="space-y-10 pb-4">
      {/* --- Section 1: Browser Input --- */}
      <div className="flex flex-col items-center justify-center space-y-4 pt-4">
        <div className="flex space-x-8">
          <div className="flex flex-col items-center group">
            <span className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-300">
              🌐
            </span>
            <span className="text-[10px] font-black uppercase mt-2 tracking-widest text-black/40 group-hover:text-black">
              Chrome
            </span>
          </div>
          <div className="flex flex-col items-center group">
            <span className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-300">
              🧭
            </span>
            <span className="text-[10px] font-black uppercase mt-2 tracking-widest text-black/40 group-hover:text-black">
              Safari
            </span>
          </div>
        </div>
        <div className="text-center">
          <p className="text-[11px] font-black uppercase tracking-[3px] text-[#8729f1]">
            What does the browser understand?
          </p>
          <div className="w-px h-10 bg-gradient-to-b from-[#8729f1] to-transparent mx-auto mt-2" />
        </div>
      </div>

      {/* --- Section 2: The Core Trio --- */}
      <div className="space-y-6 max-w-md mx-auto">
        <div className="relative border-2 border-black bg-white p-5 shadow-[4px_4px_0px_#030303] transition-transform hover:-translate-y-1">
          <div className="flex items-start space-x-4">
            <span className="text-3xl">🏗️</span>
            <div>
              <h4 className="text-xs font-black uppercase tracking-tighter text-black">
                HTML: The Foundation
              </h4>
              <p className="text-[12px] text-gray-600 mt-1 leading-relaxed">
                Think of this as the <strong>Skeleton</strong>. It is the raw
                structure that holds your text, images, and buttons.
              </p>
            </div>
          </div>
        </div>

        <div className="relative border-2 border-black bg-white p-5 shadow-[4px_4px_0px_#8729f1] transition-transform hover:-translate-y-1">
          <div className="flex items-start space-x-4">
            <span className="text-3xl">🎨</span>
            <div>
              <h4 className="text-xs font-black uppercase tracking-tighter text-[#8729f1]">
                CSS: The Styling
              </h4>
              <p className="text-[12px] text-gray-600 mt-1 leading-relaxed">
                Think of this as the <strong>Skin & Clothes</strong>. It tells
                the browser what colors and sizes to use.
              </p>
            </div>
          </div>
        </div>

        <div className="relative border-2 border-[#8729f1] bg-[#8729f1] p-5 shadow-[4px_4px_0px_#030303] transition-transform hover:-translate-y-1">
          <div className="flex items-start space-x-4">
            <span className="text-3xl">🧮</span>
            <div className="text-white">
              <h4 className="text-xs font-black uppercase tracking-tighter">
                JavaScript: The Calculator
              </h4>
              <p className="text-[12px] opacity-90 mt-1 leading-relaxed">
                Think of this as the <strong>Brain</strong>. It handles the
                logic, math, and movement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Section 3: The Sandbox Link --- */}
      <div className="border-t border-black/5 pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-6 rounded-sm border border-black/5 group">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-black flex items-center justify-center rounded transition-colors group-hover:bg-[#8729f1]">
              <span className="text-white text-sm font-bold font-mono italic">
                CP
              </span>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest">
                CodePen Sandbox
              </h4>
              <p className="text-[11px] text-gray-500 mt-0.5">
                Step 1: Open the editor to start building.
              </p>
            </div>
          </div>
          <a
            href="https://codepen.io/pen/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 px-6 py-2 bg-black text-white text-[10px] font-black uppercase tracking-widest border-2 border-black hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_#8729f1] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            Open Editor ↗
          </a>
        </div>
      </div>

      {/* --- Section 4: Copy & Paste Implementation --- */}
      <div className="space-y-8 pt-4">
        <p className="text-[11px] font-black uppercase tracking-widest text-gray-400 text-center">
          Step 2: Copy your ingredients below
        </p>

        {/* HTML Block */}
        <div className="space-y-2">
          <div className="flex justify-between items-center px-1">
            <span className="text-[10px] font-black uppercase">
              Paste into HTML Box
            </span>
            <span className="text-xl" title="Just a skeleton">
              😐
            </span>
          </div>
          <div className="relative group">
            <pre className="p-4 bg-white border-2 border-black text-[10px] font-mono shadow-[4px_4px_0px_#000]">
              {`<h1>Hello NURC</h1>\n<div class="box"></div>`}
            </pre>
            <button className="absolute top-2 right-2 bg-black text-white text-[8px] px-2 py-1 font-black uppercase">
              Copy
            </button>
          </div>
        </div>

        {/* CSS Block */}
        <div className="space-y-2">
          <div className="flex justify-between items-center px-1">
            <span className="text-[10px] font-black uppercase text-[#8729f1]">
              Paste into CSS Box
            </span>
            <span className="text-xl" title="Looking better!">
              🙂
            </span>
          </div>
          <div className="relative group">
            <pre className="p-4 bg-white border-2 border-black text-[10px] font-mono shadow-[4px_4px_0px_#8729f1]">
              {`h1 { color: #8729f1; font-family: sans-serif; }\n.box { width: 100px; height: 100px; background: #000; }`}
            </pre>
            <button className="absolute top-2 right-2 bg-[#8729f1] text-white text-[8px] px-2 py-1 font-black uppercase">
              Copy
            </button>
          </div>
        </div>

        {/* JS Block */}
        <div className="space-y-2">
          <div className="flex justify-between items-center px-1">
            <span className="text-[10px] font-black uppercase">
              Paste into JS Box
            </span>
            <span className="text-xl" title="Mind-blown!">
              🤩
            </span>
          </div>
          <div className="relative group">
            <pre className="p-4 bg-black text-[#8729f1] border-2 border-black text-[10px] font-mono shadow-[4px_4px_0px_#8729f1]">
              {`// The brain makes it alive!\nconsole.log("NURC Workshop Active");`}
            </pre>
            <button className="absolute top-2 right-2 bg-white text-black text-[8px] px-2 py-1 font-black uppercase">
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
