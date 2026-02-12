export default function WebAppIntro() {
  return (
    <div className="space-y-6 text-gray-900 max-w-3xl mx-auto p-4 leading-relaxed">
      <h3 className="text-xl font-bold border-b pb-2">
        When HTML, CSS, and JavaScript start to feel limiting
      </h3>

      <p>
        HTML and CSS are amazing for building pages, and JavaScript can add
        interactivity. But if you are trying to build something like
        Facebook.com, a traditional “page” mindset starts to break down.
      </p>

      <p>
        Example: imagine clicking Notifications, then Messages, then a friend’s
        profile, then back to the feed. If every click fully reloads a new page,
        you constantly lose context and you keep reloading the same layout and
        data over and over. That is slow, messy, and very hard to maintain at
        scale.
      </p>

      <p>
        That problem is what led to the idea of a{" "}
        <strong>Single Page App</strong>. Instead of loading a brand new page
        every time, JavaScript updates only the parts of the screen that need to
        change, while staying on a single page. The result feels fast, fluid,
        and much more like a native app.
      </p>

      {/* --- VISUAL 1: THE LAYOUT --- */}
      <div className="bg-gray-100 p-6 rounded-xl border-2 border-gray-200 my-8">
        <p className="text-sm font-bold text-gray-500 mb-4 uppercase tracking-widest text-center">
          Visualizing the "Single Page" Structure
        </p>
        <div className="border-4 border-blue-500 bg-white p-6 rounded-lg shadow-md relative">
          <span className="absolute -top-3 left-4 bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded uppercase font-bold">
            App (The Page)
          </span>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3 border-2 border-dashed border-gray-300 h-32 rounded flex items-center justify-center bg-gray-50 text-[10px] text-gray-400 font-bold uppercase">
              Sidebar
            </div>
            <div className="col-span-9 border-2 border-purple-500 bg-purple-50 p-4 rounded-lg relative">
              <span className="absolute -top-3 left-4 bg-purple-500 text-white text-[10px] px-2 py-0.5 rounded uppercase font-bold">
                Main Feed
              </span>
              <div className="border-2 border-green-500 bg-white p-3 rounded-md shadow-sm mt-2 relative">
                <span className="absolute -top-2 left-4 bg-green-500 text-white text-[8px] px-2 py-0.5 rounded uppercase font-bold">
                  Post
                </span>
                <div className="h-2 w-full bg-gray-100 rounded mb-2"></div>
                <div className="flex gap-2">
                  <div className="h-4 w-12 border border-pink-400 bg-pink-50 rounded flex items-center justify-center text-[8px] text-pink-500 font-bold uppercase">
                    Like
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p>
        Facebook helped popularize this approach and created{" "}
        <strong>React</strong> to make building these kinds of interfaces
        easier. React is a framework that handles the hard parts of updating the
        screen efficiently. You do not manually write complex “update the DOM”
        logic. Most of that complexity lives under the hood.
      </p>

      <p>
        What you do need to understand is how React organizes an app. The core
        ideas are <strong>components</strong>, plus how files connect through{" "}
        <strong>imports</strong> and <strong>exports</strong>.
      </p>

      {/* --- THE DRESSER ANALOGY (Visualized) --- */}
      <div className="flex justify-center my-8">
        <div className="w-48 border-4 border-amber-800 bg-amber-100 rounded-lg p-2 space-y-2">
          <div className="border-2 border-amber-800 bg-white p-2 text-center text-[10px] font-bold">
            Button.js (Export)
          </div>
          <div className="border-2 border-amber-800 bg-white p-2 text-center text-[10px] font-bold">
            Header.js (Export)
          </div>
          <div className="border-2 border-amber-800 bg-white p-2 text-center text-[10px] font-bold">
            Card.js (Export)
          </div>
        </div>
        <div className="flex items-center px-4 text-amber-800 font-bold">
          → Import →
        </div>
        <div className="w-32 h-32 border-4 border-blue-500 bg-blue-50 rounded-full flex items-center justify-center text-[10px] font-bold text-blue-600 text-center">
          Your Current Working File
        </div>
      </div>

      <ul className="list-disc ml-5 space-y-2">
        <li>
          <strong>React:</strong> Complex interfaces via reusable components.
        </li>
        <li>
          <strong>State:</strong> Information your app keeps track of.
        </li>
        <li>
          <strong>Backend:</strong> Where data is stored permanently.
        </li>
      </ul>

      <h3 className="text-lg font-semibold pt-4">
        Components: the building blocks of a React app
      </h3>

      {/* --- VISUAL 2: THE COMPONENT TREE --- */}
      <div className="my-8 bg-slate-50 p-6 rounded-xl border border-slate-200">
        <p className="text-sm font-bold text-slate-500 mb-6 uppercase tracking-widest text-center">
          The Component Hierarchy (Tree View)
        </p>
        <div className="flex flex-col items-center">
          <div className="border-2 border-blue-500 px-4 py-2 rounded bg-white font-mono text-xs font-bold text-blue-600">
            {"<App />"}
          </div>
          <div className="w-px h-6 bg-slate-300"></div>
          <div className="flex gap-8">
            <div className="flex flex-col items-center">
              <div className="w-px h-4 bg-slate-300"></div>
              <div className="border-2 border-slate-400 px-3 py-1 rounded bg-white font-mono text-[10px]">
                {"<Navbar />"}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-px h-4 bg-slate-300"></div>
              <div className="border-2 border-purple-500 px-3 py-1 rounded bg-purple-50 font-mono text-[10px] font-bold text-purple-600">
                {"<Feed />"}
              </div>
              <div className="w-px h-6 bg-slate-300"></div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="border-2 border-green-500 px-2 py-1 rounded bg-white font-mono text-[10px]">
                    {"<Post />"}
                  </div>
                  <div className="w-px h-4 bg-slate-300"></div>
                  <div className="border-2 border-pink-400 px-2 py-0.5 rounded bg-pink-50 font-mono text-[8px] text-pink-600 font-bold">
                    {"<LikeBtn />"}
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="border-2 border-green-500 px-2 py-1 rounded bg-white font-mono text-[10px]">
                    {"<Post />"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p>
        A <strong>component</strong> is a reusable piece of your interface. A
        button can be a component. A post can be a component. A comment box can
        be a component. Even an entire page can be a component made up of
        smaller ones.
      </p>

      <p>
        On Facebook, the feed is built from many repeated components. Each post
        is the same component reused with different data. This avoids copying
        and pasting large chunks of HTML and makes the app easier to change and
        maintain.
      </p>

      <h3 className="text-lg font-semibold pt-4 text-blue-600">
        State: how apps remember what is happening
      </h3>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs font-bold text-blue-800 uppercase">
              Current State
            </p>
            <p className="font-mono text-sm">isLiked: true</p>
          </div>
          <div className="text-2xl animate-bounce">❤️</div>
        </div>
      </div>

      <p>
        <strong>State</strong> is the information your app is holding onto at a
        given moment, and it changes as you interact with the app.
      </p>

      <h3 className="text-lg font-semibold pt-4 text-green-700">
        Backend: what it is and why you need it
      </h3>

      {/* --- VISUAL: FRONTEND vs BACKEND --- */}
      <div className="flex items-center justify-around bg-slate-900 p-6 rounded-xl my-4 text-white">
        <div className="text-center">
          <div className="text-2xl mb-1">💻</div>
          <p className="text-[10px] font-bold text-cyan-400 uppercase">
            Frontend
          </p>
          <p className="text-[8px] text-gray-400">React / UI</p>
        </div>
        <div className="text-xl animate-pulse">⇆</div>
        <div className="text-center">
          <div className="text-2xl mb-1">🗄️</div>
          <p className="text-[10px] font-bold text-green-400 uppercase">
            Backend
          </p>
          <p className="text-[8px] text-gray-400">Database / Server</p>
        </div>
      </div>

      <p>
        React only runs in the browser. That means it cannot permanently store
        data on its own. If you refresh the page, everything in memory
        disappears.
      </p>

      <p>
        The <strong>backend</strong> exists to store data permanently and
        securely. It handles things like user accounts, passwords, posts, likes,
        comments, messages, and permissions.
      </p>

      <h3 className="text-lg font-semibold pt-4">React vs Next.js</h3>

      <p>
        <strong>React</strong> focuses on building the user interface using
        components and state. It does not decide how pages are routed, how data
        is fetched, or how the app is structured as a whole.
      </p>

      <p>
        <strong>Next.js</strong> is built on top of React and provides that
        structure. It handles routing, performance optimizations, and common
        patterns for connecting to a backend so you do not have to wire
        everything up manually.
      </p>

      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex gap-4 items-center">
        <div className="text-2xl">💡</div>
        <p className="text-sm italic">
          <strong>Analogy:</strong> React is the tool for building the
          furniture. Next.js is the floor plan that tells you where everything
          goes.
        </p>
      </div>
    </div>
  );
}
