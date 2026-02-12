"use client";

export default function WebFoundations() {
  return (
    <div className="space-y-10 pb-10 max-w-2xl mx-auto font-['Red_Hat_Mono'] text-gray-900 leading-relaxed">
      {/* --- Section 1: Browser Input --- */}
      <h3 className="text-base font-bold uppercase tracking-[3px] text-gray-500 text-center font-['Manrope']">
        Your browser is what hosts websites on your device
      </h3>
      <div className="flex flex-col items-center justify-center space-y-4 pt-4">
        <div className="flex space-x-8">
          <div className="flex flex-col items-center group">
            <span className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-300 cursor-default">
              🌐
            </span>
            <span className="text-[10px] font-black uppercase mt-2 tracking-widest text-gray-400 group-hover:text-black font-['Manrope']">
              Chrome
            </span>
          </div>
          <div className="flex flex-col items-center group">
            <span className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-300 cursor-default">
              🧭
            </span>
            <span className="text-[10px] font-black uppercase mt-2 tracking-widest text-gray-400 group-hover:text-black font-['Manrope']">
              Safari
            </span>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[3px] text-[#8729f1] font-['Manrope']">
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
              <h4 className="text-base font-bold uppercase tracking-tighter text-black font-['Manrope']">
                HTML: The Foundation
              </h4>
              <p className="text-base text-gray-600 mt-1">
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
              <h4 className="text-base font-bold uppercase tracking-tighter text-[#8729f1] font-['Manrope']">
                CSS: The Styling
              </h4>
              <p className="text-base text-gray-600 mt-1">
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
              <h4 className="text-base font-bold uppercase tracking-tighter font-['Manrope']">
                JavaScript: The Calculator
              </h4>
              <p className="text-base opacity-90 mt-1">
                Think of this as the <strong>Brain</strong>. It handles the
                logic, math, and movement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Section 3: The Sandbox Link --- */}
      <div className="border-t border-gray-200 pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-6 rounded-sm border border-gray-100 group">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-black flex items-center justify-center rounded transition-colors group-hover:bg-[#8729f1]">
              <span className="text-white text-sm font-bold font-mono italic">
                CP
              </span>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest font-['Manrope']">
                CodePen Sandbox
              </h4>
              <p className="text-sm text-gray-500 mt-0.5">
                Step 1: Open the editor to start building.
              </p>
            </div>
          </div>
          <a
            href="https://codepen.io/pen/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 px-6 py-2 bg-black text-white text-[10px] font-black uppercase tracking-widest border-2 border-black hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_#8729f1] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none font-['Manrope']"
          >
            Open Editor ↗
          </a>
        </div>
      </div>

      {/* --- Section 4: Copy & Paste Implementation --- */}
      <div className="space-y-8 pt-4">
        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 text-center font-['Manrope']">
          Step 2: Copy your ingredients below
        </p>

        {/* HTML Block */}
        <div className="space-y-2">
          <div className="flex justify-between items-center px-1">
            <span className="text-[10px] font-black uppercase text-gray-500 font-['Manrope']">
              Paste into HTML Box
            </span>
            <span className="text-xl">😐</span>
          </div>
          <div className="relative group">
            <pre className="p-4 bg-white border-2 border-black text-base font-mono shadow-[4px_4px_0px_#000] overflow-x-auto">
              {`<h1>Hello NURC</h1>\n<div class="box"></div>`}
            </pre>
            <button className="absolute top-2 right-2 bg-black text-white text-[8px] px-2 py-1 font-black uppercase hover:bg-gray-800 transition-colors font-['Manrope']">
              Copy
            </button>
          </div>
        </div>

        {/* CSS Block */}
        <div className="space-y-2">
          <div className="flex justify-between items-center px-1">
            <span className="text-[10px] font-black uppercase text-[#8729f1] font-['Manrope']">
              Paste into CSS Box
            </span>
            <span className="text-xl">🙂</span>
          </div>
          <div className="relative group">
            <pre className="p-4 bg-white border-2 border-black text-base font-mono shadow-[4px_4px_0px_#8729f1] overflow-x-auto">
              {`h1 { color: #8729f1; font-family: sans-serif; }\n.box { width: 100px; height: 100px; background: #000; }`}
            </pre>
            <button className="absolute top-2 right-2 bg-[#8729f1] text-white text-[8px] px-2 py-1 font-black uppercase hover:opacity-90 transition-opacity font-['Manrope']">
              Copy
            </button>
          </div>
        </div>

        {/* JS Block */}
        <div className="space-y-2">
          <div className="flex justify-between items-center px-1">
            <span className="text-[10px] font-black uppercase text-gray-500 font-['Manrope']">
              Paste into JS Box
            </span>
            <span className="text-xl">🤩</span>
          </div>
          <div className="relative group">
            <pre className="p-4 bg-black text-[#8729f1] border-2 border-black text-base font-mono shadow-[4px_4px_0px_#8729f1] overflow-x-auto">
              {`// The brain makes it alive!\nconsole.log("NURC Workshop Active");`}
            </pre>
            <button className="absolute top-2 right-2 bg-white text-black text-[8px] px-2 py-1 font-black uppercase hover:bg-gray-100 transition-colors font-['Manrope']">
              Copy
            </button>
          </div>
        </div>
      </div>

      {/* --- Section 5: Leveling Up (IDE & Hosting) --- */}
      <div className="pt-10 border-t-2 border-dashed border-gray-200">
        <h3 className="text-base font-bold uppercase tracking-[3px] text-black text-center mb-8 font-['Manrope']">
          Step 3: Taking it off the sandbox
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* IDE / VS Code */}
          <div className="p-5 border-2 border-black bg-blue-50 relative overflow-hidden group">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-2 font-['Manrope']">
              The Pro Workshop (IDE)
            </h4>
            <p className="text-sm text-blue-900/70 mb-4 leading-relaxed">
              CodePen is for practice. <strong>VS Code</strong> is for building
              real software. Download the industry-standard editor.
            </p>
            <a
              href="https://visualstudio.microsoft.com/downloads/"
              target="_blank"
              className="inline-block text-[9px] font-black uppercase bg-blue-600 text-white px-3 py-1.5 rounded-sm hover:bg-blue-700 transition-colors font-['Manrope']"
            >
              Get VS Code ⤓
            </a>
          </div>

          {/* Hosting / GitHub Pages */}
          <div className="p-5 border-2 border-black bg-emerald-50 relative overflow-hidden group">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-2 font-['Manrope']">
              Going Live (Hosting)
            </h4>
            <p className="text-sm text-emerald-900/70 mb-4 leading-relaxed">
              Ready for the world to see? Use <strong>GitHub Pages</strong> to
              turn your code files into a live URL for free.
            </p>
            <a
              href="https://pages.github.com/"
              target="_blank"
              className="inline-block text-[9px] font-black uppercase bg-emerald-600 text-white px-3 py-1.5 rounded-sm hover:bg-emerald-700 transition-colors font-['Manrope']"
            >
              Learn Hosting ↗
            </a>
          </div>
        </div>
      </div>

      {/* --- Section 6: Creative Inspiration --- */}
      <div className="pt-10 mt-10 border-t-2 border-dashed border-gray-200">
        <div className="text-center mb-8">
          <h3 className="text-base font-bold uppercase tracking-[3px] text-black font-['Manrope']">
            You can do a lot with HTML & CSS
          </h3>
          <p className="max-w-md mx-auto text-base font-medium text-gray-500 leading-relaxed mt-2">
            Some CMS platforms limit or{" "}
            <span className="text-black font-black italic">upcharge</span> for
            Custom JS, but you can almost always inject CSS for free to build
            high-end effects.
          </p>{" "}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-['Manrope']">
          {[
            {
              label: "Cinema Effects",
              title: "Netflix Intro",
              color: "hover:bg-[#E50914]",
              url: "https://codepen.io/claudio_bonfati/pen/mdryxPv",
            },
            {
              label: "SVG Filters",
              title: "Gooey Menu",
              color: "hover:bg-[#8729f1]",
              url: "https://codepen.io/lbebber/pen/RNgBPP",
            },
            {
              label: "Liquid Physics",
              title: "CSS Gooey Filter",
              color: "hover:bg-yellow-400",
              url: "https://codepen.io/z-/pen/zYxdRQy",
            },
            {
              label: "Cyberpunk Style",
              title: "Glitch Text",
              color: "hover:bg-cyan-400",
              url: "https://codepen.io/lbebber/pen/nqwBKK",
            },
            {
              label: "Motion Graphics",
              title: "Text Animation",
              color: "hover:bg-pink-500",
              url: "https://codepen.io/RobinTreur/pen/QKjgPX",
            },
            {
              label: "Gooey Menu",
              title: "Gooey Menu",
              color: "hover:bg-pink-500",
              url: "https://codepen.io/hollandblumer/pen/RwzwBZj",
            },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              className={`group p-4 border-2 border-black bg-white ${item.color} transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000]`}
            >
              <span className="text-[8px] font-black uppercase text-gray-400 group-hover:text-white/60">
                {item.label}
              </span>
              <h4 className="text-sm font-black uppercase mt-1 group-hover:text-white">
                {item.title}
              </h4>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
