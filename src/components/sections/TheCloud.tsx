"use client";

export default function TheCloud() {
  return (
    <div className="space-y-8 pb-4">
      {/* --- Section 1: Simple Explanation --- */}
      <div className="space-y-4">
        <p className="text-[1.1rem] font-medium leading-tight text-black">
          How the web actually travels:{" "}
          <span className="underline decoration-[#8729f1] decoration-2 text-black">
            Request & Response.
          </span>
        </p>
        <p className="text-sm text-gray-500 leading-relaxed">
          To understand creative coding, we first have to understand the
          physical reality of the internet. Every time you refresh a page, you
          are initiating a high-speed mechanical journey from your fingertips to
          a warehouse thousands of miles away.
        </p>
      </div>

      {/* --- Section 2: The Visual Journey --- */}
      <div className="relative w-full h-72 bg-white/50 rounded border border-black/5 flex flex-col justify-center items-center px-4 overflow-hidden">
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

        <div className="w-full flex justify-between items-start z-10">
          <div className="flex flex-col items-center">
            <span className="text-[9px] font-bold text-black bg-gray-100 px-2 py-0.5 rounded mb-2 uppercase tracking-widest">
              Client
            </span>
            <div className="w-14 h-14 border-2 border-black bg-white flex items-center justify-center text-xl">
              💻
            </div>
            <p className="text-[10px] font-black uppercase mt-2">Your Device</p>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[9px] font-bold text-gray-400 mb-2 uppercase tracking-widest">
              Gateway
            </span>
            <div className="w-14 h-14 border-2 border-black/20 bg-white flex items-center justify-center text-xl">
              📶
            </div>
            <p className="text-[10px] font-black uppercase mt-2">Wifi Router</p>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[9px] font-bold text-[#8729f1] bg-[#8729f1]/10 px-2 py-0.5 rounded mb-2 uppercase tracking-widest">
              Server
            </span>
            <div className="w-14 h-14 border-2 border-[#8729f1] bg-white flex items-center justify-center text-xl shadow-[0_0_15px_rgba(135,41,241,0.2)]">
              🏢
            </div>
            <p className="text-[10px] font-black uppercase text-[#8729f1]">
              Data Center
            </p>
          </div>
        </div>

        <div className="mt-12 w-full border-t border-dashed border-black/10 pt-2 flex justify-between px-2 opacity-50">
          <span className="text-[8px] uppercase font-bold text-black">
            1. Radio Waves (Air)
          </span>
          <span className="text-[8px] uppercase font-bold text-[#8729f1]">
            2. Light Pulses (Glass)
          </span>
        </div>
      </div>

      {/* --- Section 3: Core Curriculum --- */}
      <div className="space-y-4">
        <ul className="list-disc ml-5 space-y-2 text-sm text-gray-600">
          <li>
            <strong className="text-black uppercase">Physicality:</strong> 99%
            of international data travels through fiber-optic cables on the
            ocean floor.
          </li>
          <li>
            <strong className="text-black uppercase">Data Centers:</strong>{" "}
            Massive warehouses filled with servers that require immense cooling
            and power.
          </li>
          <li>
            <strong className="text-black uppercase">The Handshake:</strong> How
            your browser (Client) asks a Server for files via an IP address.
          </li>
        </ul>
      </div>

      {/* --- Section 4: The Hook with Cloud Visuals --- */}
      <div className="relative bg-[#8729f1]/5 p-6 border-l-4 border-[#8729f1] overflow-hidden">
        {/* Animated Background Clouds */}
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

        <h4 className="text-sm font-black uppercase text-black mb-2 tracking-tight z-10 relative">
          So... is it actually in the clouds?
        </h4>
        <p className="text-[12px] text-gray-600 mt-2 italic z-10 relative">
          Technically, <span className="font-bold text-[#8729f1]">Yes.</span>{" "}
          Because WiFi sends data as <strong>Radio Waves</strong>, your code
          physically travels through the sky before it ever hits a physical
          wire.
        </p>
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
