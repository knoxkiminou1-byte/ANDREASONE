import React, { useLayoutEffect, useRef, useState } from "react";
import introLiquidOlive from "@/assets/intro-liquid-olive.png";

const INTRO_GOLD = "#EEC76C";
const INTRO_GOLD_RGB = "238,199,108";
const INTRO_SYMBOL_MASK = "url(/brand/andreasone-symbol.svg)";

type Phase = "idle" | "ringing" | "flashing" | "exit";

interface Geo {
  impactX: number;
  impactY: number;
}

export function IntroHero() {
  const logoRef = useRef<HTMLButtonElement>(null);
  const phaseRef = useRef<Phase>("idle");
  const [phase, setPhase] = useState<Phase>("idle");
  const [geo, setGeo] = useState<Geo | null>(null);

  function go(nextPhase: Phase) {
    phaseRef.current = nextPhase;
    setPhase(nextPhase);
  }

  useLayoutEffect(() => {
    function measure() {
      const logo = logoRef.current;
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
      style={{ background: "rgb(82, 90, 41)" }}
    >
      <div
        className="absolute"
        style={{
          inset: "-4%",
          backgroundImage: `url(${introLiquidOlive})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "url(#liquid)",
          animation: "slowDrift 32s linear infinite",
          transformOrigin: "center",
        }}
      />

      <svg aria-hidden="true" className="absolute h-0 w-0">
        <filter id="liquid">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.010 0.018"
            numOctaves="2"
            seed="7"
            result="noise"
          >
            <animate
              attributeName="baseFrequency"
              dur="32s"
              repeatCount="indefinite"
              values="0.010 0.018; 0.016 0.012; 0.012 0.021; 0.018 0.015; 0.010 0.018"
            />
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="24"
            xChannelSelector="R"
            yChannelSelector="G"
          >
            <animate attributeName="scale" dur="32s" repeatCount="indefinite" values="18; 24; 20; 26; 18" />
          </feDisplacementMap>
        </filter>
      </svg>

      <div
        className="absolute inset-0 opacity-[0.09] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(17,17,17,0.05) 0 1px, transparent 1px 4px), repeating-linear-gradient(90deg, rgba(239,231,215,0.04) 0 1px, transparent 1px 5px)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(239,231,215,0.16) 0%, rgba(239,231,215,0.08) 18%, rgba(68,88,41,0) 46%)",
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <button
          ref={logoRef}
          type="button"
          aria-label="Enter AndreasOne site"
          onClick={handleClick}
          style={{
            width: "min(34vw, 220px)",
            aspectRatio: "769 / 855",
            backgroundColor: INTRO_GOLD,
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
            filter: "drop-shadow(0 10px 24px rgba(17,17,17,0.3))",
            animation:
              phase === "idle"
                ? "pyramidLogoWobble 18s ease-in-out infinite"
                : phase === "ringing" || phase === "flashing"
                  ? "pyramidRing 1.8s cubic-bezier(0.22,1,0.36,1) forwards"
                  : undefined,
          }}
        />

        <div
          className={`mt-7 text-center transition-opacity duration-300 ${
            phase !== "idle" ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          <p className="font-display text-[#efe7d7] uppercase tracking-[0.42em] text-xl sm:text-2xl">
            ANDREASONE
          </p>
          <p className="mt-2 font-sans text-[#efe7d7]/70 uppercase tracking-[0.34em] text-xs sm:text-sm">
            CLICK TO ENTER
          </p>
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
                border: `${3 - index}px solid rgba(${index === 0 ? INTRO_GOLD_RGB : "239,231,215"},${0.72 - index * 0.2})`,
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

type Segment = [number, number, number, number];
type Point = [number, number];

function getSegments(marchingState: number, top: Point, right: Point, bottom: Point, left: Point): Segment[] {
  const segment = (start: Point, end: Point): Segment => [start[0], start[1], end[0], end[1]];

  switch (marchingState) {
    case 1:
      return [segment(left, bottom)];
    case 2:
      return [segment(bottom, right)];
    case 3:
      return [segment(left, right)];
    case 4:
      return [segment(top, right)];
    case 5:
      return [segment(top, right), segment(left, bottom)];
    case 6:
      return [segment(top, bottom)];
    case 7:
      return [segment(top, left)];
    case 8:
      return [segment(top, left)];
    case 9:
      return [segment(top, bottom)];
    case 10:
      return [segment(top, left), segment(bottom, right)];
    case 11:
      return [segment(top, right)];
    case 12:
      return [segment(left, right)];
    case 13:
      return [segment(bottom, right)];
    case 14:
      return [segment(left, bottom)];
    default:
      return [];
  }
}
