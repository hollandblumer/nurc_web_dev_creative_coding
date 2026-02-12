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
            focus on the design part.
          </p>
        </div>
      </section>

      {/* The Tools Stack */}
      <section className="space-y-12">
        {/* Matter.js */}
        <div className="space-y-3">
          <h4 className="text-xl font-bold text-black uppercase tracking-tight font-['Manrope']">
            Matter.js: Advanced Physics Engine
          </h4>
          <p className="text-base leading-relaxed text-black max-w-2xl">
            A 2D physics engine that handles complex collisions and rigid
            bodies. Instead of manually coding gravity, you create a "world" and
            let objects tumble naturally.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            {[
              {
                label: "Interactive Blocks",
                url: "https://codepen.io/gayane-gasparyan/pen/LYJEoZM",
              },
              {
                label: "Responsive body",
                url: "https://codepen.io/natszafraniec/pen/yLmoKMw",
              },
              {
                label: "Chain Physics",
                url: "https://codepen.io/danielgivens/pen/geKrRx",
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                className="text-[10px] font-black uppercase border-b-2 border-gray-200 hover:border-black transition-colors"
              >
                {link.label} →
              </a>
            ))}
          </div>
        </div>

        {/* p5.js */}
        <div className="space-y-3">
          <h4 className="text-xl font-bold text-black uppercase tracking-tight font-['Manrope']">
            p5.js: Generative Art & Sketching
          </h4>
          <p className="text-base leading-relaxed text-black max-w-2xl">
            The powerhouse of <strong>Generative Art</strong>. p5.js allows you
            to use algorithms to "grow" visuals. By using Perlin noise for
            organic motion or recursive functions for fractals, you can create
            art that is never the same twice.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            {[
              {
                label: "Flow Fields",
                url: "https://codepen.io/tsuhre/pen/xgmEPe",
              },
              {
                label: "Recursive Trees",
                url: "https://codepen.io/hollandblumer/pen/myPzeXd",
              },
              {
                label: "Geometric Growth",
                url: "https://codepen.io/hollandblumer/pen/WbwOMYx",
              },
              {
                label: "Organic Shapes",
                url: "https://openprocessing.org/sketch/2182022",
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                className="text-[10px] font-black uppercase border-b-2 border-gray-200 hover:border-black transition-colors"
              >
                {link.label} →
              </a>
            ))}
          </div>
        </div>

        {/* Three.js */}
        <div className="space-y-3">
          <h4 className="text-xl font-bold text-black uppercase tracking-tight font-['Manrope']">
            Three.js: 3D Environments
          </h4>
          <p className="text-base leading-relaxed text-black max-w-2xl">
            The standard for 3D on the web. It manages cameras and lighting to
            build interactive worlds within the browser.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            {[
              {
                label: "Abstract Geometry",
                url: "https://openprocessing.org/sketch/2752798",
              },
              {
                label: "Particles",
                url: "https://codepen.io/sanprieto/pen/XWNjBdb",
              },
              {
                label: "Infinite Terrain",
                url: "https://codepen.io/bsehovac/pen/EMyWVv",
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                className="text-[10px] font-black uppercase border-b-2 border-gray-200 hover:border-black transition-colors"
              >
                {link.label} →
              </a>
            ))}
          </div>
        </div>

        {/* Shaders */}
        <div className="space-y-3">
          <h4 className="text-xl font-bold text-black uppercase tracking-tight font-['Manrope']">
            Shaders: GPU Magic (GLSL)
          </h4>
          <p className="text-base leading-relaxed text-black max-w-2xl">
            Mesmerizing, liquid-like distortions that run directly on the
            graphics card. This is how you achieve "dreamy" pixel effects.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            {[
              {
                label: "Liquid Metal",
                url: "https://codepen.io/ksenia-k/pen/vYwgrWv",
              },
              {
                label: "Noise Gradients",
                url: "https://openprocessing.org/sketch/2476859",
              },
              {
                label: "Pixel Sort",
                url: "https://openprocessing.org/sketch/1229865",
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                className="text-[10px] font-black uppercase border-b-2 border-gray-200 hover:border-black transition-colors"
              >
                {link.label} →
              </a>
            ))}
          </div>
        </div>

        {/* SVG Filters */}
        <div className="space-y-3">
          <h4 className="text-xl font-bold text-black uppercase tracking-tight font-['Manrope']">
            SVG Filters: Analog Texture
          </h4>
          <p className="text-base leading-relaxed text-black max-w-2xl">
            The secret to making digital work feel "real." Use these to add
            grain, grit, and organic blur to perfect web elements.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            {[
              {
                label: "Gooey Effect",
                url: "https://codepen.io/yoksel/pen/BOjmqj",
              },
              {
                label: "Grainy Texture",
                url: "https://codepen.io/Anthony-Osceola/pen/YzMmorG",
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                className="text-[10px] font-black uppercase border-b-2 border-gray-200 hover:border-black transition-colors"
              >
                {link.label} →
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer & Learning */}
      <section className="space-y-4 border-t border-gray-200 pt-8">
        <h3 className="text-xl font-bold text-black font-['Manrope']">
          How to Learn: The "Tinker" Method
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li className="text-base">
            <strong>Find a Demo:</strong> Start with someone else's code.
          </li>
          <li className="text-base">
            <strong>Break It:</strong> Change the{" "}
            <span className="text-black font-bold">random seed</span> or{" "}
            <span className="text-black font-bold">velocity</span>.
          </li>
          <li className="text-base">
            <strong>Reverse Engineer:</strong> Observe what happens when you
            change a single number.
          </li>
        </ul>
      </section>
    </div>
  );
}
