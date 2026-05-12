import React, { useLayoutEffect, useRef, useState } from "react";

const INTRO_GOLD = "#EEC76C";
const INTRO_GOLD_RGB = "238,199,108";
const INTRO_SYMBOL_MASK = "url(/brand/andreasone-symbol.svg)";

type Phase = "idle" | "ringing" | "flashing" | "exit";

interface Geo {
  impactX: number;
  impactY: number;
}

const RAYS = [
  { angle: -90, spread: 4, color: "#445829" },
  { angle: -72, spread: 4.5, color: "#cf5d27" },
  { angle: -54, spread: 4, color: "#f6c45a" },
  { angle: -36, spread: 5, color: "#445829" },
  { angle: -18, spread: 4.5, color: "#cf5d27" },
  { angle: 0, spread: 4, color: "#f6c45a" },
  { angle: 18, spread: 5, color: "#445829" },
  { angle: 36, spread: 4.5, color: "#cf5d27" },
  { angle: 54, spread: 4, color: "#f6c45a" },
  { angle: 72, spread: 5, color: "#445829" },
  { angle: 90, spread: 4.5, color: "#cf5d27" },
  { angle: 108, spread: 4, color: "#f6c45a" },
  { angle: 126, spread: 5, color: "#445829" },
  { angle: 144, spread: 4.5, color: "#cf5d27" },
  { angle: 162, spread: 4, color: "#f6c45a" },
  { angle: 180, spread: 5, color: "#445829" },
  { angle: 198, spread: 4.5, color: "#cf5d27" },
  { angle: 216, spread: 4, color: "#f6c45a" },
  { angle: 234, spread: 5, color: "#445829" },
  { angle: 252, spread: 4.5, color: "#cf5d27" },
  { angle: 270, spread: 4, color: "#f6c45a" },
  { angle: 288, spread: 5, color: "#445829" },
  { angle: 306, spread: 4.5, color: "#cf5d27" },
  { angle: 324, spread: 4, color: "#f6c45a" },
  { angle: 342, spread: 5, color: "#445829" },
];

function rayClip(spread: number) {
  return `polygon(50% 50%, ${50 - spread}% -8%, ${50 + spread}% -8%)`;
}

export function IntroHero() {
  const aoLogoRef = useRef<HTMLButtonElement>(null);
  const phaseRef = useRef<Phase>("idle");
  const [phase, setPhase] = useState<Phase>("idle");
  const [geo, setGeo] = useState<Geo | null>(null);

  function go(nextPhase: Phase) {
    phaseRef.current = nextPhase;
    setPhase(nextPhase);
  }

  useLayoutEffect(() => {
    function measure() {
      const logo = aoLogoRef.current;
      if (!logo) return;

      const rect = logo.getBoundingClientRect();
      setGeo({
        impactX: rect.left + rect.width / 2,
        impactY: rect.top + rect.height / 2,
      });
    }

    const timer = window.setTimeout(measure, 40);
    window.addEventListener("resize", measure);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("resize", measure);
    };
  }, []);

  function handleClick() {
    if (phaseRef.current !== "idle") return;

    go("ringing");
    window.setTimeout(() => go("flashing"), 420);
    window.setTimeout(() => go("exit"), 860);
    window.setTimeout(() => {
      window.dispatchEvent(new CustomEvent("introFinished"));
    }, 1420);
  }

  const isGone = phase === "exit";

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden transition-all duration-[1800ms] ease-in-out ${
        isGone ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
      style={{ background: "#efe7d7" }}
    >
      <div className="absolute inset-0 bg-[#efe7d7]" />

      <div
        className="absolute inset-[-24%]"
        style={{
          animation: phase === "idle" ? "introCircularOrbit 26s linear infinite" : undefined,
        }}
      >
        {RAYS.map((ray, index) => (
          <div
            key={`${ray.angle}-${index}`}
            className="absolute inset-0"
            style={{
              background: ray.color,
              clipPath: rayClip(ray.spread),
              transform: `rotate(${ray.angle}deg) scale(1.7)`,
              transformOrigin: "50% 50%",
              opacity: 0.98,
            }}
          />
        ))}
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(239,231,215,0.06) 0%, rgba(239,231,215,0.06) 8%, rgba(17,17,17,0.06) 8.6%, rgba(17,17,17,0.06) 9.2%, transparent 10%)",
          mixBlendMode: "soft-light",
          opacity: 0.6,
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.2] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(17,17,17,0.06) 0 1px, transparent 1px 4px), repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 5px)",
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <div className="relative flex flex-col items-center">
          <div
            className="relative flex items-center justify-center"
            style={{
              width: "min(78vw, 760px)",
              aspectRatio: "2.4 / 1",
              clipPath: "polygon(0 50%, 10% 18%, 50% 0, 90% 18%, 100% 50%, 90% 82%, 50% 100%, 10% 82%)",
              background: "#f7f0df",
              border: "8px solid #111111",
              boxShadow: "0 16px 0 rgba(17,17,17,0.22)",
              animation: phase === "idle" ? "introEyeFloat 8s ease-in-out infinite" : undefined,
            }}
          >
            <div
              className="absolute inset-[10%] opacity-70"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.72) 0%, rgba(239,231,215,0.28) 100%)",
                clipPath: "polygon(0 50%, 10% 18%, 50% 0, 90% 18%, 100% 50%, 90% 82%, 50% 100%, 10% 82%)",
              }}
            />

            <div
              className="relative flex items-center justify-center rounded-full border-[8px] border-[#111111]"
              style={{
                width: "min(34vw, 260px)",
                height: "min(34vw, 260px)",
                background: "#cf5d27",
                boxShadow: "inset 0 0 0 14px rgba(238,199,108,0.18)",
              }}
            >
              <div
                className="absolute rounded-full border-[6px] border-[#111111]"
                style={{
                  width: "72%",
                  height: "72%",
                  background: "#f6c45a",
                  opacity: phase === "idle" ? 0.96 : 1,
                }}
              />

              <button
                ref={aoLogoRef}
                type="button"
                aria-label="Enter AndreasOne site"
                onClick={handleClick}
                className="relative z-10"
                style={{
                  width: "min(13vw, 92px)",
                  aspectRatio: "769 / 855",
                  backgroundColor: "#111111",
                  border: 0,
                  padding: 0,
                  maskImage: INTRO_SYMBOL_MASK,
                  WebkitMaskImage: INTRO_SYMBOL_MASK,
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  cursor: phase === "idle" ? "pointer" : "default",
                  filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.25))",
                  animation:
                    phase === "idle"
                      ? "pyramidLogoWobble 5s ease-in-out infinite"
                      : phase === "ringing" || phase === "flashing"
                        ? "pyramidRing 1.8s cubic-bezier(0.22,1,0.36,1) forwards"
                        : undefined,
                }}
              />
            </div>
          </div>

          <div
            className={`mt-8 text-center transition-opacity duration-300 ${
              phase !== "idle" ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          >
            <p className="font-display text-[#111111] uppercase tracking-[0.42em] text-xl sm:text-2xl">
              ANDREASONE
            </p>
            <p className="mt-2 font-sans text-[#111111]/60 uppercase tracking-[0.34em] text-xs sm:text-sm">
              CLICK TO ENTER
            </p>
          </div>
        </div>
      </div>

      {geo && (phase === "ringing" || phase === "flashing") && (
        <div className="absolute pointer-events-none" style={{ left: geo.impactX, top: geo.impactY }}>
          <div
            style={{
              position: "absolute",
              width: "86px",
              height: "86px",
              transform: "translate(-50%,-50%)",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,255,255,0.86) 0%, rgba(238,199,108,0.66) 42%, transparent 100%)",
              animation: "impactSpark 1.4s ease-out forwards",
            }}
          />
          {[0, 120].map((delay, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                width: "94px",
                height: "94px",
                transform: "translate(-50%,-50%)",
                borderRadius: "50%",
                border: `${3 - index}px solid rgba(${index === 0 ? INTRO_GOLD_RGB : "17,17,17"},${0.72 - index * 0.2})`,
                animation: `shockRing 2.2s cubic-bezier(0.2,0.6,0.4,1) ${delay}ms forwards`,
              }}
            />
          ))}
        </div>
      )}

      {(phase === "flashing" || phase === "exit") && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.82) 0%, rgba(238,199,108,0.42) 26%, rgba(239,231,215,0.22) 42%, transparent 70%)",
            animation: "bigFlash 2s ease-out forwards",
          }}
        />
      )}
    </div>
  );
}
