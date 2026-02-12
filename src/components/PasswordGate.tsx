"use client";

import { useState, useEffect } from "react";
import WorkshopHero from "./WorkshopHero";

export default function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [input, setInput] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const ACCESS_KEY = "NURC";

  type BgEl = {
    char: string;
    top: string;
    left: string;
    opacity: number;
    size: number;
    duration: string;
    delay: string;
  };

  const [bgElements, setBgElements] = useState<BgEl[]>([]);

  useEffect(() => {
    const chars = ["0", "1", "+", "-"];
    const elements: BgEl[] = [];
    const count = 350;

    for (let i = 0; i < count; i++) {
      let left = 0;
      let top = 0;
      let isOverlappingContent = true;

      while (isOverlappingContent) {
        left = Math.random() * 100;
        top = Math.random() * 100;
        const inVerticalCorridor = left > 25 && left < 75;
        const inHeaderZone = top < 20 && inVerticalCorridor;
        const inFooterZone = top > 80 && inVerticalCorridor;

        if (!inVerticalCorridor && !inHeaderZone && !inFooterZone) {
          isOverlappingContent = false;
        }
      }

      elements.push({
        char: chars[Math.floor(Math.random() * chars.length)],
        top: `${top}%`,
        left: `${left}%`,
        opacity: Math.random() * 0.25 + 0.1,
        size: Math.random() * 6 + 10,
        duration: `${Math.random() * 10 + 10}s`,
        delay: `${Math.random() * -20}s`,
      });
    }

    setBgElements(elements);
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isSuccess) return;
    const val = e.target.value.toUpperCase();
    setInput(val);
    setIsError(false);

    if (val === ACCESS_KEY) {
      setIsSuccess(true);
      setTimeout(onUnlock, 800);
    } else if (val.length >= ACCESS_KEY.length) {
      setIsError(true);
      setTimeout(() => {
        setInput("");
        setIsError(false);
      }, 600);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#1a1a1c] font-mono flex items-center justify-center h-[100dvh] w-full overflow-hidden">
      {" "}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-15px) translateX(5px);
          }
          66% {
            transform: translateY(10px) translateX(-5px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        .floating-data {
          animation: float var(--dur) ease-in-out infinite;
          animation-delay: var(--del);
          transition:
            color 0.5s ease,
            opacity 0.5s ease;
        }
        .success-flash {
          color: #22c55e !important;
          opacity: 0.8 !important;
          text-shadow: 0 0 8px rgba(34, 197, 94, 0.5);
        }
      `}</style>
      {/* Background Matrix */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {bgElements.map((el, i) => (
          <span
            key={i}
            className={`absolute text-zinc-100 select-none floating-data ${isSuccess ? "success-flash" : ""}`}
            style={
              {
                top: el.top,
                left: el.left,
                opacity: el.opacity,
                fontSize: `${el.size}px`,
                // @ts-ignore
                "--dur": el.duration,
                "--del": el.delay,
              } as any
            }
          >
            {el.char}
          </span>
        ))}
      </div>
      <div className="flex flex-col items-center relative z-10 w-full max-w-xl px-4">
        {/* Header */}
        <div className="mb-12 text-center space-y-3 font-sans">
          <h1 className="text-white text-sm md:text-base tracking-[0.5em] uppercase font-black drop-shadow-sm">
            Web Development and Creative Coding Workshop
          </h1>
          <p className="text-[#B301FF] text-xs tracking-[0.3em] uppercase font-bold opacity-80">
            by NURC alum Holland Blumer
          </p>
        </div>

        {/* Hero Container with "Popping" Lines */}
        <div className="w-full flex items-center justify-center py-10 min-h-[400px]">
          <div className="w-full max-w-[450px] flex justify-center">
            <WorkshopHero />
          </div>
        </div>

        {/* Password Form */}
        <div className="w-full max-w-[320px] space-y-6 mt-12 relative">
          <div
            className={`flex items-center border-b-2 pb-3 transition-all duration-300 ${
              isSuccess
                ? "border-green-500 shadow-[0_10px_20px_-10px_rgba(34,197,94,0.5)]"
                : isError
                  ? "border-red-500 shadow-[0_10px_20px_-10px_rgba(239,68,68,0.5)]"
                  : "border-zinc-100/30"
            }`}
          >
            <span
              className={`text-lg font-bold mr-4 ${isSuccess ? "text-green-500" : "text-[#B301FF]"}`}
            >
              {">"}
            </span>
            <input
              autoFocus
              type="text"
              value={input}
              onChange={handleInput}
              autoComplete="off"
              disabled={isSuccess}
              className="bg-transparent text-lg outline-none tracking-[0.4em] w-full text-white placeholder:text-zinc-700 uppercase font-mono"
              placeholder="ENTER KEY"
            />
          </div>

          <div className="flex justify-center">
            <span
              className={`text-[10px] md:text-xs uppercase tracking-[0.5em] font-semibold transition-colors duration-300 ${
                isSuccess
                  ? "text-green-400"
                  : isError
                    ? "text-red-500"
                    : "text-zinc-500"
              }`}
            >
              {isSuccess
                ? "ACCESS GRANTED"
                : isError
                  ? "INVALID KEY"
                  : "© 2026 COPYRIGHT"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
