export default function CreativeToolkit() {
  return (
    <div className="space-y-10 max-w-3xl mx-auto p-4 font-['Red_Hat_Mono'] text-gray-900 leading-relaxed">
      {/* Intro Section */}
      <div className="bg-gray-100 p-6 rounded-xl border-2 border-gray-200 my-8">
        <p className="text-base leading-relaxed italic text-gray-800">
          JavaScript can perform some pretty cool calculations—from simulating
          gravity to mapping 3D light. But what happens when it takes thousands
          of lines of code to write those calculations? Instead of making your
          file a mess, you can{" "}
          <span className="text-gray-950 font-bold">"import"</span> these
          complex formulas from a library, keeping your main file clean so you
          can focus on the creative results.
        </p>
      </div>

      <header className="border-b border-gray-200 pb-6">
        <h2 className="text-xl font-bold tracking-tight text-black font-['Manrope']">
          Want to make the website more interesting?
        </h2>
      </header>

      <div className="py-4">
        <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-4 font-['Manrope']">
          Curated Inspiration
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
          {[
            { name: "Paffi", url: "https://www.paffi.it/" },
            { name: "Ogaki Digital", url: "https://www.ogakidigital.com/" },
            { name: "Odd Common", url: "https://www.oddcommon.com/" },
            {
              name: "Chartogne Taillet",
              url: "https://chartogne-taillet.com/en",
            },
            { name: "Mili Wine Bar", url: "https://www.miliwinebar.com/" },
            { name: "Stefan Vitasovic", url: "https://stefanvitasovic.dev/" },
            { name: "Hungry Tiger", url: "https://www.eathungrytiger.com/" },
          ].map((site) => (
            <a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex justify-between items-center border-b border-gray-100 py-2 hover:border-black transition-colors"
            >
              <span className="text-base font-bold text-gray-800 group-hover:text-black transition-colors">
                {site.name}
              </span>
              <span className="text-lg group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* The Library Concept */}
      <section className="py-6 bg-white text-left">
        <h3 className="text-xl font-bold text-black mb-3 tracking-tight font-['Manrope']">
          How did they build these?{" "}
          <span className="text-gray-900">Creative Libraries.</span>
        </h3>

        <div className="mb-6 space-y-3">
          <p className="text-[12px] font-black uppercase tracking-wider text-gray-500 font-['Manrope']">
            What is a JavaScript Library?
          </p>
          <p className="text-base leading-relaxed text-black italic border-b border-gray-200 pb-6">
            Most of these sites are built with{" "}
            <strong>JavaScript libraries</strong> like Three.js, GSAP, and
            p5.js. Think of them as a collection of pre-written code that you
            can use to perform specific tasks without writing the logic from
            scratch. Instead of writing 5,000 lines of complex math to tell a
            computer how "light" should bounce off a wine bottle (like on{" "}
            <em>Chartogne Taillet</em>) or how physics should move a cursor, you
            "import" a tool. The library handles the heavy lifting, so you can
            focus on the fun part:{" "}
            <strong className="text-black uppercase">directing the art.</strong>
          </p>
        </div>

        <p className="text-base leading-relaxed mb-4 text-black">
          The websites above aren't just standard HTML. To get that fluid motion
          and 3D depth, developers use these pre-built creative engines. Imagine
          you wanted to build a car: you *could* forge the steel and engineer
          the pistons from scratch, but you’d never actually get to drive.
        </p>
      </section>

      {/* The Tools Stack */}
      <section className="space-y-12">
        {/* Matter.js */}
        <div className="space-y-3">
          <h4 className="text-xl font-bold text-black uppercase tracking-tight font-['Manrope']">
            Matter.js: Advanced Physics Engine
          </h4>
          <p className="text-base leading-relaxed text-black max-w-2xl">
            You’ve seen basic JS physics, but <strong>Matter.js</strong> takes
            it to the next level. It’s a 2D physics engine that handles complex
            collisions, rigid bodies, and constraints (like springs and
            elastic). Instead of manually coding gravity, you create a "world"
            and let the engine calculate how objects tumble and bounce.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://brm.io/matter-js/demo/"
              target="_blank"
              className="text-[10px] font-black uppercase border-b-2 border-gray-200 hover:border-black transition-colors"
            >
              Official Demos →
            </a>
            <a
              href="https://codepen.io/collection/nxmByV"
              target="_blank"
              className="text-[10px] font-black uppercase border-b-2 border-gray-200 hover:border-black transition-colors"
            >
              Physics Experiments →
            </a>
          </div>
        </div>

        {/* p5.js */}
        <div className="space-y-3">
          <h4 className="text-xl font-bold text-black uppercase tracking-tight font-['Manrope']">
            p5.js: The Digital Sketchbook
          </h4>
          <p className="text-base leading-relaxed text-black max-w-2xl">
            The entry point for artists. It turns code into a canvas. Use it for
            2D patterns, kinetic type, and visuals that react to sound or your
            mouse. It makes "drawing" with code intuitive.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://p5js.org/examples/"
              target="_blank"
              className="text-[10px] font-black uppercase border-b-2 border-gray-200 hover:border-black transition-colors"
            >
              Core Examples →
            </a>
            <a
              href="https://openprocessing.org/browse/#"
              target="_blank"
              className="text-[10px] font-black uppercase border-b-2 border-gray-200 hover:border-black transition-colors"
            >
              Creative Gallery →
            </a>
          </div>
        </div>

        {/* Three.js */}
        <div className="space-y-3">
          <h4 className="text-xl font-bold text-black uppercase tracking-tight font-['Manrope']">
            Three.js: 3D Environments
          </h4>
          <p className="text-base leading-relaxed text-black max-w-2xl">
            The industry standard for 3D on the web. It handles cameras,
            lighting, and textures, allowing you to build entire interactive
            worlds. This is likely what was used for those high-end 3D site
            designs.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://threejs.org/examples/"
              target="_blank"
              className="text-[10px] font-black uppercase border-b-2 border-gray-200 hover:border-black transition-colors"
            >
              Visual Showcase →
            </a>
            <a
              href="https://clara.io/"
              target="_blank"
              className="text-[10px] font-black uppercase border-b-2 border-gray-200 hover:border-black transition-colors"
            >
              3D Modeling Tool →
            </a>
          </div>
        </div>

        {/* Shaders */}
        <div className="space-y-3">
          <h4 className="text-xl font-bold text-black uppercase tracking-tight font-['Manrope']">
            Shaders: GPU Magic (GLSL)
          </h4>
          <p className="text-base leading-relaxed text-black max-w-2xl">
            Code that runs directly on your graphics card. It’s how you get
            those mesmerizing, liquid-like distortions and "dreamy" pixel
            effects. It’s math-heavy but visually unbeatable.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://thebookofshaders.com/"
              target="_blank"
              className="text-[10px] font-black uppercase border-b-2 border-gray-200 hover:border-black transition-colors"
            >
              The Book of Shaders →
            </a>
            <a
              href="https://www.shadertoy.com/"
              target="_blank"
              className="text-[10px] font-black uppercase border-b-2 border-gray-200 hover:border-black transition-colors"
            >
              ShaderToy Community →
            </a>
          </div>
        </div>

        {/* SVG Filters */}
        <div className="space-y-3">
          <h4 className="text-xl font-bold text-black uppercase tracking-tight font-['Manrope']">
            SVG Filters: Analog Texture
          </h4>
          <p className="text-base leading-relaxed text-black max-w-2xl">
            The secret to making digital work feel "real." Use these to add
            grain, grit, and organic blur to otherwise "too-perfect" web
            elements. Perfect for that tactile, print-like feel.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://yoksel.github.io/svg-filters/#/"
              target="_blank"
              className="text-[10px] font-black uppercase border-b-2 border-gray-200 hover:border-black transition-colors"
            >
              Filter Playground →
            </a>
            <a
              href="https://codepen.io/collection/XByByz"
              target="_blank"
              className="text-[10px] font-black uppercase border-b-2 border-gray-200 hover:border-black transition-colors"
            >
              Gooey & Grainy Effects →
            </a>
          </div>
        </div>
      </section>

      <section className="space-y-4 border-t border-gray-200 pt-8">
        <h3 className="text-xl font-bold text-black font-['Manrope']">
          How to Learn: The "Tinker" Method
        </h3>
        <p className="text-base leading-relaxed">
          You don't need to know all the code to start. The best way to learn is
          to <strong>tinker with the settings</strong>.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li className="text-base">
            <strong>Find a Demo:</strong> Start with someone else's code from a
            place like Codrops.
          </li>
          <li className="text-base">
            <strong>Break It:</strong> Change the{" "}
            <span className="text-black font-bold">fill color</span>. Adjust the{" "}
            <span className="text-black font-bold">speed</span>. Double the{" "}
            <span className="text-black font-bold">gravity</span>.
          </li>
          <li className="text-base">
            <strong>Reverse Engineer:</strong> Observe what happens when you
            change a single number. This "settings-first" approach is how the
            best creative coders actually work.
          </li>
        </ul>
      </section>

      {/* External Links */}
      <footer className="pt-6 border-t border-gray-100">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4 font-['Manrope']">
          Inspiration Galleries
        </p>
        <div className="flex gap-8">
          <a href="https://www.awwwards.com" target="_blank" className="group">
            <span className="text-black font-bold block font-['Manrope'] text-base">
              Awwwards
            </span>
            <span className="text-xs text-gray-500 group-hover:text-black transition-colors">
              The World's Best Design
            </span>
          </a>
          <a
            href="https://tympanus.net/codrops/"
            target="_blank"
            className="group"
          >
            <span className="text-black font-bold block font-['Manrope'] text-base">
              Codrops
            </span>
            <span className="text-xs text-gray-500 group-hover:text-black transition-colors">
              Experimental Lab
            </span>
          </a>
        </div>
      </footer>
    </div>
  );
}
