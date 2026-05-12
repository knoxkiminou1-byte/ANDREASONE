import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createNoise2D } from "simplex-noise";

const INTRO_GOLD = "#EEC76C";
const INTRO_GOLD_RGB = "238,199,108";
const INTRO_SYMBOL_MASK = "url(/brand/andreasone-symbol.svg)";
const NUM_LEVELS = 10;
const OLIVE_R = 90;
const OLIVE_G = 107;
const OLIVE_B = 35;

type Phase = "idle" | "ringing" | "flashing" | "exit";

interface Geo {
  impactX: number;
  impactY: number;
}

export function IntroHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const noise2D = createNoise2D();
    let frame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    const STEP = 4;
    resize();
    window.addEventListener("resize", resize);

    function draw() {
      const scale = 0.003;
      const speed = 0.006;
      const cols = Math.ceil(width / STEP) + 2;
      const rows = Math.ceil(height / STEP) + 2;
      const grid = new Float32Array(cols * rows);

      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
          const worldX = col * STEP;
          const worldY = row * STEP;
          const n1 = noise2D(worldX * scale + frame, worldY * scale);
          const n2 = noise2D(
            worldX * scale * 0.45 + frame * 0.6,
            worldY * scale * 0.45 + frame * 0.35,
          );
          grid[row * cols + col] = ((n1 + n2 * 0.55) / 1.55 + 1) / 2;
        }
      }

      const imageData = context.createImageData(width, height);
      const data = imageData.data;

      for (let pixelY = 0; pixelY < height; pixelY += 1) {
        const gridRow = pixelY / STEP;
        const row0 = Math.floor(gridRow);
        const row1 = Math.min(row0 + 1, rows - 1);
        const rowMix = gridRow - row0;

        for (let pixelX = 0; pixelX < width; pixelX += 1) {
          const gridCol = pixelX / STEP;
          const col0 = Math.floor(gridCol);
          const col1 = Math.min(col0 + 1, cols - 1);
          const colMix = gridCol - col0;

          const v00 = grid[row0 * cols + col0];
          const v10 = grid[row0 * cols + col1];
          const v01 = grid[row1 * cols + col0];
          const v11 = grid[row1 * cols + col1];
          const value =
            v00 * (1 - colMix) * (1 - rowMix) +
            v10 * colMix * (1 - rowMix) +
            v01 * (1 - colMix) * rowMix +
            v11 * colMix * rowMix;

          const band = Math.floor(value * NUM_LEVELS);
          const isOlive = band % 2 === 0;
          const offset = (pixelY * width + pixelX) * 4;

          if (isOlive) {
            data[offset] = OLIVE_R;
            data[offset + 1] = OLIVE_G;
            data[offset + 2] = OLIVE_B;
          } else {
            data[offset] = 0;
            data[offset + 1] = 0;
            data[offset + 2] = 0;
          }

          data[offset + 3] = 255;
        }
      }

      context.putImageData(imageData, 0, 0);
      context.strokeStyle = "#000000";
      context.lineWidth = Math.max(2, Math.min(width, height) * 0.009);
      context.lineJoin = "round";
      context.lineCap = "round";

      for (let level = 1; level < NUM_LEVELS; level += 1) {
        const threshold = level / NUM_LEVELS;
        context.beginPath();

        for (let row = 0; row < rows - 1; row += 1) {
          for (let col = 0; col < cols - 1; col += 1) {
            const a = grid[row * cols + col];
            const b = grid[row * cols + (col + 1)];
            const d = grid[(row + 1) * cols + col];
            const e = grid[(row + 1) * cols + (col + 1)];

            const marchingState =
              (a >= threshold ? 8 : 0) |
              (b >= threshold ? 4 : 0) |
              (e >= threshold ? 2 : 0) |
              (d >= threshold ? 1 : 0);

            if (marchingState === 0 || marchingState === 15) continue;

            const x = col * STEP;
            const y = row * STEP;
            const segmentSize = STEP;
            const lerp = (from: number, to: number) =>
              segmentSize * ((threshold - from) / (to - from));

            const top: Point = [x + lerp(a, b), y];
            const right: Point = [x + segmentSize, y + lerp(b, e)];
            const bottom: Point = [x + lerp(d, e), y + segmentSize];
            const left: Point = [x, y + lerp(a, d)];

            for (const [x0, y0, x1, y1] of getSegments(marchingState, top, right, bottom, left)) {
              context.moveTo(x0, y0);
              context.lineTo(x1, y1);
            }
          }
        }

        context.stroke();
      }

      frame += speed;
      animationFrame = window.requestAnimationFrame(draw);
    }

    let animationFrame = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
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
      style={{ background: "#445829" }}
    >
      <div className="absolute inset-0 bg-[#445829]" />

      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

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
                ? "pyramidLogoWobble 5s ease-in-out infinite"
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
