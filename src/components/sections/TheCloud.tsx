"use client";
import Globe from "../Globe"; // Adjust path as needed

export default function TheCloud() {
  return (
    <div className="space-y-10 pb-10 max-w-2xl mx-auto font-['Red_Hat_Mono'] text-gray-900 leading-relaxed">
      {/* --- Section 0: Clouds + Cables --- */}
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-black tracking-tight font-['Manrope']">
          What is the internet and how does it work?
        </h3>
        <p className="text-base text-gray-600 leading-relaxed">
          The internet isn’t a place, it’s a system that moves information
          around the world. Most people think of the internet as a cloud, but
          even with cloud computing, the internet is mostly physical—made up of
          cables buried underground and stretched across oceans. Information
          moves through fiber-optic and copper cables, along with satellites and
          cellular networks, to get from one place to another.
        </p>
      </div>

      <Globe />

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-black tracking-tight font-['Manrope']">
          When you open your laptop and open Chrome browser to facebook.com,
          what actually happens?
        </h3>
        <p className="text-base text-gray-600 leading-relaxed">
          In simple terms, when you type something like facebook.com into the
          search bar and hit enter, you are making a{" "}
          <strong className="text-black">request</strong>. That request is sent
          from your laptop over Wi-Fi radio waves to a nearby access point,
          travels through physical cables, and reaches a powerful machine called
          a<strong className="text-black"> server</strong>. The server receives
          your request and sends a{" "}
          <strong className="text-black">response</strong> back through the same
          network.
        </p>
      </div>

      {/* --- Section 1: Request & Response --- */}
      <div className="space-y-4">
        <span className="text-base font-bold underline decoration-[#8729f1] decoration-2 text-black font-['Manrope']">
          Request & Response.
        </span>

        <p className="text-base text-gray-600 leading-relaxed">
          In simple terms: when you type a website into your computer and hit
          enter, your device sends a{" "}
          <strong className="text-black">request</strong> to a{" "}
          <strong className="text-black">server</strong>. The server finds the
          files for that website and sends a{" "}
          <strong className="text-black">response</strong> back to you.
        </p>
      </div>

      {/* --- Section 2: The Visual Journey --- */}
      <div className="relative w-full h-80 bg-gray-50 rounded-xl border-2 border-gray-200 flex flex-col justify-center items-center px-4 overflow-hidden my-8">
        {/* Connection Paths */}
        <div className="absolute w-[80%] h-[2px] top-[50%] z-0 flex justify-between items-center">
          {/* 1. WiFi Waves */}
          <div className="w-1/2 relative flex justify-center items-center">
            <div className="absolute flex space-x-1">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 border-r-2 border-black/10 rounded-full animate-[ping_2s_infinite]"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              ))}
            </div>
            <div className="absolute w-2 h-2 bg-black rounded-full animate-[wifiMove_2s_infinite]" />
          </div>

          {/* 2. Fiber Optic Cables */}
          <div className="w-1/2 relative flex flex-col space-y-[4px]">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-full h-[1.5px] bg-[#8729f1]/10 overflow-hidden"
              >
                <div
                  className="h-full bg-[#8729f1] animate-[fiberMove_3s_infinite]"
                  style={{ width: "30%", animationDelay: `${i * 0.5}s` }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex justify-between items-start z-10 font-['Manrope']">
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-black bg-white border border-black/10 px-2 py-0.5 rounded mb-2 uppercase tracking-widest">
              Client
            </span>
            <div className="w-16 h-16 border-2 border-black bg-white flex items-center justify-center text-2xl shadow-[4px_4px_0px_rgba(0,0,0,0.1)]">
              💻
            </div>
            <p className="text-[10px] font-black uppercase mt-3 tracking-tighter">
              Your Device
            </p>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-widest">
              Gateway
            </span>
            <div className="w-16 h-16 border-2 border-black/10 bg-white flex items-center justify-center text-2xl">
              📶
            </div>
            <p className="text-[10px] font-black uppercase mt-3 tracking-tighter text-gray-400">
              Wifi Router
            </p>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-[#8729f1] bg-[#8729f1]/10 px-2 py-0.5 rounded mb-2 uppercase tracking-widest">
              Server
            </span>
            <div className="w-16 h-16 border-2 border-[#8729f1] bg-white flex items-center justify-center text-2xl shadow-[4px_4px_0px_rgba(135,41,241,0.2)]">
              🏢
            </div>
            <p className="text-[10px] font-black uppercase mt-3 tracking-tighter text-[#8729f1]">
              Data Center
            </p>
          </div>
        </div>

        <div className="mt-14 w-full border-t border-dashed border-gray-300 pt-2 flex justify-between px-2 opacity-50 font-['Manrope']">
          <span className="text-[9px] uppercase font-black text-black tracking-widest">
            1. Wireless (Air)
          </span>
          <span className="text-[9px] uppercase font-black text-[#8729f1] tracking-widest">
            2. Fiber (Cables)
          </span>
        </div>
      </div>

      {/* --- Section 3: Servers --- */}
      <div className="space-y-4">
        <p className="text-base text-gray-600 leading-relaxed">
          A <strong className="text-black">server</strong> is just a powerful
          computer that stores website files (HTML, CSS, images, scripts) and
          sends them back when someone requests them. Most servers live inside{" "}
          <strong className="text-black">data centers</strong> (giant warehouses
          packed with machines).
        </p>

        <ul className="list-disc ml-5 space-y-3 text-base text-gray-700">
          <li>
            <strong className="text-black uppercase font-['Manrope'] text-sm">
              Physicality:
            </strong>
            Long-distance travel happens through fiber-optic cables, including
            those under the ocean.
          </li>
          <li>
            <strong className="text-black uppercase font-['Manrope'] text-sm">
              Data Centers:
            </strong>{" "}
            Warehouses filled with servers that need serious cooling and power.
          </li>
          <li>
            <strong className="text-black uppercase font-['Manrope'] text-sm">
              The Handshake:
            </strong>{" "}
            Your browser (Client) and a Server agree on how to talk before files
            start moving.
          </li>
        </ul>
      </div>

      {/* --- Section 4: The Hook --- */}
      <div className="relative bg-[#8729f1]/5 p-6 border-l-4 border-[#8729f1] overflow-hidden my-8">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <svg
            width="200"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8729f1"
            strokeWidth="1"
            className="animate-[cloudFloat_20s_linear_infinite]"
          >
            <path d="M17.5 19c2.5 0 4.5-2 4.5-4.5 0-2.3-1.7-4.2-3.9-4.5-.5-2.5-2.7-4.5-5.3-4.5-2.1 0-3.9 1.2-4.8 3C5.5 8.7 3.5 10.6 3.5 13c0 2.5 2 4.5 4.5 4.5h9.5z" />
          </svg>
        </div>

        <h4 className="text-base font-bold uppercase text-black mb-2 tracking-tight z-10 relative font-['Manrope']">
          So... is it actually in the clouds?
        </h4>
        <p className="text-base text-gray-600 italic z-10 relative">
          Technically, <span className="font-bold text-[#8729f1]">No.</span>{" "}
          Over 99% of international data is carried through undersea cables, not
          satellites or wireless connections in the air.
        </p>
      </div>

      <div className="mt-8 pt-8 border-t-2 border-dashed border-gray-200 z-10 relative">
        <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#8729f1] mb-5 font-['Manrope']">
          Internet Lore & Fun Facts
        </h5>
        <ul className="space-y-4">
          <li className="text-base text-gray-600">
            <span className="font-bold text-black font-['Manrope']">
              Birth Date:
            </span>{" "}
            The internet was born in{" "}
            <span className="text-black font-semibold underline decoration-[#8729f1]/30">
              1983
            </span>
            .
          </li>
          <li className="text-base text-gray-600">
            <span className="font-bold text-black font-['Manrope']">
              Undersea Depth:
            </span>{" "}
            Fiber-optic cables are laid as deep as{" "}
            <span className="text-black font-semibold">Everest is tall</span>.
          </li>
          <li className="text-base text-gray-600">
            <span className="font-bold text-black font-['Manrope'] font-['Manrope']">
              First Website:
            </span>{" "}
            Launched in 1991, and you can{" "}
            <a
              href="http://info.cern.ch/hypertext/WWW/TheProject.html"
              target="_blank"
              rel="noopener noreferrer"
              className="italic underline decoration-[#8729f1]/40 hover:text-[#8729f1] transition-colors"
            >
              still visit it today
            </a>
            .
          </li>
        </ul>
      </div>

      <style jsx>{`
        @keyframes wifiMove {
          0% {
            transform: translateX(-40px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(40px);
            opacity: 0;
          }
        }
        @keyframes fiberMove {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(350%);
          }
        }
        @keyframes cloudFloat {
          0% {
            transform: translateX(100px) translateY(10px);
          }
          50% {
            transform: translateX(-50px) translateY(-10px);
          }
          100% {
            transform: translateX(100px) translateY(10px);
          }
        }
      `}</style>
    </div>
  );
}
