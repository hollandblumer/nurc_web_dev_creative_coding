export default function CreativeToolkit() {
  return (
    <div className="space-y-10 max-w-3xl font-sans text-zinc-300">
      <header className="border-b border-zinc-800 pb-6">
        <h2 className="text-3xl font-bold uppercase tracking-tighter text-white">
          Want to make the website more interesting?
        </h2>
      </header>

      {/* The Library Concept */}
      <section className="bg-zinc-900/50 p-6 border-l-4 border-purple-500">
        <h3 className="text-xl font-bold text-white mb-3">
          Wait, what is a Library?
        </h3>
        <p className="leading-relaxed mb-4">
          Imagine you wanted to build a car. You *could* mine the iron, forge
          the steel, and engineer the engine from scratch—but you’d never
          actually get to drive. In coding, a <strong>Library</strong> is a
          pre-built engine.
        </p>
        <p className="leading-relaxed">
          Instead of writing 5,000 lines of complex math to tell the computer
          how "light" should bounce off a 3D sphere, you simply "import" a
          library like <strong>Three.js</strong>. It handles the heavy lifting
          so you can focus on the fun part:{" "}
          <strong>editing what you see.</strong>
        </p>
      </section>

      {/* The Tools */}
      <section className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <h4 className="text-lg font-bold text-purple-400">
              p5.js: The Digital Sketchbook
            </h4>
            <p className="text-sm leading-relaxed text-zinc-400">
              The entry point for artists. It turns code into a canvas. Use it
              for 2D patterns, kinetic type, and visuals that react to sound or
              your mouse.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-bold text-blue-400">
              Three.js: 3D Environments
            </h4>
            <p className="text-sm leading-relaxed text-zinc-400">
              The industry standard for 3D on the web. It handles cameras,
              lighting, and textures, allowing you to build entire interactive
              worlds in the browser.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-bold text-green-400">
              Shaders: GPU Magic
            </h4>
            <p className="text-sm leading-relaxed text-zinc-400">
              Code that runs directly on your graphics card. It’s how you get
              those mesmerizing, liquid-like distortions and "dreamy" pixel
              effects.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-bold text-orange-400">
              SVG Filters: Analog Texture
            </h4>
            <p className="text-sm leading-relaxed text-zinc-400">
              The secret to making digital work feel "real." Use these to add
              grain, grit, and organic blur to otherwise "too-perfect" web
              elements.
            </p>
          </div>
        </div>
      </section>

      {/* The Tinkerer's Method */}
      <section className="space-y-4 border-t border-zinc-800 pt-8">
        <h3 className="text-xl font-bold text-white">
          How to Learn: The "Tinker" Method
        </h3>
        <p className="leading-relaxed">
          You don't need to be a math genius to start. The best way to learn is
          to <strong>tinker with the settings</strong>.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-zinc-400">
          <li>
            <strong>Find a Demo:</strong> Start with someone else's code from a
            place like Codrops.
          </li>
          <li>
            <strong>Break It:</strong> Change the{" "}
            <span className="text-purple-300 font-mono">fill color</span>.
            Adjust the <span className="text-purple-300 font-mono">speed</span>.
            Double the{" "}
            <span className="text-purple-300 font-mono">gravity</span>.
          </li>
          <li>
            <strong>Reverse Engineer:</strong> Observe what happens when you
            change a single number. This "settings-first" approach is how the
            best creative coders actually work.
          </li>
        </ul>
      </section>

      {/* External Links */}
      <footer className="pt-6">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">
          Inspiration Galleries
        </p>
        <div className="flex gap-8">
          <a href="https://www.awwwards.com" target="_blank" className="group">
            <span className="text-white font-bold block">Awwwards</span>
            <span className="text-xs text-zinc-500 group-hover:text-purple-400 transition-colors">
              The World's Best Design
            </span>
          </a>
          <a
            href="https://tympanus.net/codrops/"
            target="_blank"
            className="group"
          >
            <span className="text-white font-bold block">Codrops</span>
            <span className="text-xs text-zinc-500 group-hover:text-blue-400 transition-colors">
              Experimental Lab
            </span>
          </a>
        </div>
      </footer>
    </div>
  );
}
