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
  { angle: -92, spread: 4, color: "#111111", duration: "18s", delay: "-2s" },
  { angle: -70, spread: 5, color: "#9f8fd1", duration: "22s", delay: "-7s" },
  { angle: -48, spread: 4.5, color: "#7397b8", duration: "20s", delay: "-4s" },
  { angle: -24, spread: 6, color: "#445829", duration: "24s", delay: "-10s" },
  { angle: 0, spread: 5, color: "#EEC76C", duration: "19s", delay: "-3s" },
  { angle: 26, spread: 4.5, color: "#4d9ad6", duration: "21s", delay: "-8s" },
  { angle: 48, spread: 5.5, color: "#111111", duration: "23s", delay: "-12s" },
  { angle: 74, spread: 5, color: "#dba8b9", duration: "20s", delay: "-6s" },
  { angle: 98, spread: 6, color: "#cf5d27", duration: "22s", delay: "-9s" },
  { angle: 124, spread: 4, color: "#f6c45a", duration: "18s", delay: "-1s" },
  { angle: 150, spread: 5, color: "#6e88b9", duration: "25s", delay: "-5s" },
  { angle: 176, spread: 6, color: "#111111", duration: "24s", delay: "-11s" },
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

      <div className="absolute inset-[-18%]">
        {RAYS.map((ray, index) => (
          <div
            key={`${ray.angle}-${index}`}
            className="absolute inset-0"
            style={{
              background: ray.color,
              clipPath: rayClip(ray.spread),
              transform: `rotate(${ray.angle}deg) scale(1.42)`,
              transformOrigin: "50% 50%",
              opacity: 0.96,
              animation: `introRayDrift ${ray.duration} ease-in-out ${ray.delay} infinite alternate`,
            }}
          />
        ))}
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(239,231,215,0.05) 0%, rgba(239,231,215,0.05) 8%, rgba(17,17,17,0.05) 8.6%, rgba(17,17,17,0.05) 9.2%, transparent 10%)",
          mixBlendMode: "soft-light",
          opacity: 0.6,
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.2] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(17,17,17,0.07) 0 1px, transparent 1px 4px), repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 5px)",
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
