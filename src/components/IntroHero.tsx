import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

/* ─── Constants ─────────────────────────────────────── */
const SIM_SCALE = 4;
const DAMPING = 0.983;
const SLOW_MOTION = 2.8;
const SIM_STEP_MS = 1000 / 60;
const INTRO_GOLD = "#EEC76C";
const INTRO_GOLD_RGB = "238,199,108";
const INTRO_SYMBOL_MASK = "url(/brand/andreasone-symbol.svg)";
const ms = (value: number) => Math.round(value * SLOW_MOTION);

type Phase = "idle" | "ringing" | "flashing" | "exit";

interface Geo {
  impactX: number;
  impactY: number;
}

/* ════════════════════════════════════════════════════ */
export function IntroHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const simRef = useRef<{
    buf1: Float32Array;
    buf2: Float32Array;
    w: number;
    h: number;
    sw: number;
    sh: number;
  } | null>(null);
  const animRef = useRef<number>(0);
  const aoLogoRef = useRef<HTMLButtonElement>(null);
  const geoRef = useRef<Geo | null>(null);

  const [phase, setPhase] = useState<Phase>("idle");
  const phaseRef = useRef<Phase>("idle");
  const [geo, setGeo] = useState<Geo | null>(null);

  function go(p: Phase) {
    phaseRef.current = p;
    setPhase(p);
  }

  /* ── Geometry ── */
  useLayoutEffect(() => {
    function measure() {
      const logo = aoLogoRef.current;
      if (!logo) return;

      const r = logo.getBoundingClientRect();
      const g = {
        impactX: r.left + r.width * 0.5,
        impactY: r.top + r.height * 0.5,
      };

      setGeo(g);
      geoRef.current = g;
    }

    const measureTimer = window.setTimeout(measure, 60);

    window.addEventListener("resize", measure);
    return () => {
      window.clearTimeout(measureTimer);
      window.removeEventListener("resize", measure);
    };
  }, []);

  /* ── Ripple canvas ── */
  const addDrop = useCallback((sx: number, sy: number, r: number, str: number) => {
    const s = simRef.current;
    if (!s) return;

    const cx = Math.floor(sx / SIM_SCALE);
    const cy = Math.floor(sy / SIM_SCALE);

    for (let j = -r; j <= r; j++) {
      for (let i = -r; i <= r; i++) {
        if (i * i + j * j <= r * r) {
          const nx = cx + i;
          const ny = cy + j;
          if (nx >= 1 && nx < s.sw - 1 && ny >= 1 && ny < s.sh - 1) {
            s.buf1[ny * s.sw + nx] += str;
          }
        }
      }
    }
  }, []);

  const triggerBurst = useCallback(() => {
    const g = geoRef.current;
    if (!g) return;

    for (let r = 0; r < 18; r++) {
      const a = (r / 18) * Math.PI * 2;
      for (let d = 0; d <= 180; d += 9) {
        setTimeout(() => {
          addDrop(g.impactX + Math.cos(a) * d, g.impactY + Math.sin(a) * d, 4, 210 - d);
        }, ms(d * 1.7));
      }
    }
  }, [addDrop]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    const off = document.createElement("canvas");
    const oCtx = off.getContext("2d")!;

    function resize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas!.width = w;
      canvas!.height = h;
      const sw = Math.floor(w / SIM_SCALE);
      const sh = Math.floor(h / SIM_SCALE);
      off.width = sw;
      off.height = sh;
      simRef.current = {
        buf1: new Float32Array(sw * sh),
        buf2: new Float32Array(sw * sh),
        w,
        h,
        sw,
        sh,
      };
    }

    function update() {
      const s = simRef.current;
      if (!s) return;

      const { sw, sh } = s;
      const { buf1, buf2 } = s;
      for (let y = 1; y < sh - 1; y++) {
        for (let x = 1; x < sw - 1; x++) {
          const i = y * sw + x;
          buf2[i] = (buf1[i - 1] + buf1[i + 1] + buf1[i - sw] + buf1[i + sw]) * 0.5 - buf2[i];
          buf2[i] *= DAMPING;
        }
      }
      s.buf1 = buf2;
      s.buf2 = buf1;
    }

    function draw() {
      const s = simRef.current;
      if (!s) return;

      ctx.clearRect(0, 0, s.w, s.h);
      const img = oCtx.createImageData(s.sw, s.sh);
      const d = img.data;

      for (let i = 0; i < s.sw * s.sh; i++) {
        const t = Math.max(-1, Math.min(1, s.buf1[i] / 80));
        const idx = i * 4;
        if (t > 0.04) {
          d[idx] = 238;
          d[idx + 1] = 199;
          d[idx + 2] = 108;
          d[idx + 3] = Math.floor(t * 160);
        } else if (t < -0.04) {
          d[idx + 3] = Math.floor(-t * 110);
        }
      }

      oCtx.putImageData(img, 0, 0);
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(off, 0, 0, s.w, s.h);
    }

    let rain = 0;
    let last = 0;
    let simLag = 0;
    function loop(ts: number) {
      const dt = Math.min(ts - last, 50);
      last = ts;
      simLag += dt;
      if (simLag >= SIM_STEP_MS * SLOW_MOTION) {
        update();
        simLag = 0;
      }
      rain += dt;

      if (rain > ms(190 + Math.random() * 170)) {
        rain = 0;
        const s = simRef.current;
        if (s) addDrop(Math.random() * s.w, Math.random() * s.h, 2, 85 + Math.random() * 55);
      }

      draw();
      animRef.current = requestAnimationFrame(loop);
    }

    resize();
    window.addEventListener("resize", resize);
    animRef.current = requestAnimationFrame(loop);

    const onM = (e: MouseEvent) => addDrop(e.clientX, e.clientY, 3, 70);
    const onT = (e: TouchEvent) => {
      for (let i = 0; i < e.touches.length; i++) {
        addDrop(e.touches[i].clientX, e.touches[i].clientY, 4, 80);
      }
    };
    window.addEventListener("mousemove", onM, { passive: true });
    window.addEventListener("touchmove", onT, { passive: true });

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onM);
      window.removeEventListener("touchmove", onT);
    };
  }, [addDrop]);

  /* ── Click handler ── */
  const handleClick = useCallback(() => {
    if (phaseRef.current !== "idle") return;

    go("ringing");
    triggerBurst();

    setTimeout(() => go("flashing"), ms(520));
    setTimeout(() => go("exit"), ms(920));
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("introFinished"));
    }, ms(1500));
  }, [triggerBurst]);

  const isGone = phase === "exit";

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden transition-all duration-[1960ms] ease-in-out
        ${isGone ? "opacity-0 scale-110 pointer-events-none" : "opacity-100 scale-100"}`}
      style={{ background: "#f3efe6" }}
    >
      {/* ── Swirling prism background ── */}
      <div
        className="absolute inset-[-60%] rounded-full"
        style={{
          background: `radial-gradient(circle at 18% 72%,rgba(207,93,39,0.4) 0%,transparent 46%),
          radial-gradient(circle at 82% 24%,rgba(68,88,41,0.36) 0%,transparent 38%),
          radial-gradient(circle at 50% 50%,rgba(246,196,90,0.26) 0%,transparent 62%),
          conic-gradient(from 220deg at 50% 50%,#cf5d27,#f6c45a,#445829,#d9decf,#efe7d7,#cf5d27)`,
          animation: "swirlOne 38s linear infinite",
        }}
      />
      <div
        className="absolute inset-[-60%] rounded-full opacity-[0.88]"
        style={{
          background: `radial-gradient(circle at 65% 72%,rgba(207,93,39,0.32) 0%,transparent 42%),
          radial-gradient(circle at 38% 36%,rgba(68,88,41,0.3) 0%,transparent 42%),
          repeating-conic-gradient(from 0deg at 50% 50%,rgba(239,231,215,.65) 0deg,rgba(239,231,215,.65) 8deg,rgba(246,196,90,.4) 12deg,rgba(207,93,39,.45) 22deg,rgba(68,88,41,.44) 30deg,rgba(217,222,207,.5) 38deg)`,
          mixBlendMode: "soft-light",
          animation: "swirlTwo 32s linear infinite reverse",
        }}
      />
      <div
        className="absolute w-[62vmax] h-[62vmax] rounded-full -left-[16vmax] -bottom-[14vmax]"
        style={{
          mixBlendMode: "multiply",
          filter: "blur(72px)",
          background: "rgba(207,93,39,0.32)",
          animation: "orbitOrange 30s ease-in-out infinite alternate",
        }}
      />
      <div
        className="absolute w-[62vmax] h-[62vmax] rounded-full -right-[16vmax] -top-[14vmax]"
        style={{
          mixBlendMode: "multiply",
          filter: "blur(72px)",
          background: "rgba(68,88,41,0.3)",
          animation: "orbitOlive 34s ease-in-out infinite alternate",
        }}
      />

      {/* ── Ripple overlay ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ mixBlendMode: "overlay", opacity: 0.55 }}
      />

      {/* ── Impact effects ── */}
      {geo && (phase === "ringing" || phase === "flashing") && (
        <div className="absolute pointer-events-none" style={{ left: geo.impactX, top: geo.impactY }}>
          <div
            style={{
              position: "absolute",
              width: "90px",
              height: "90px",
              transform: "translate(-50%,-50%)",
              borderRadius: "50%",
              background: "radial-gradient(circle,rgba(255,255,255,0.85) 0%,rgba(238,199,108,0.62) 45%,transparent 100%)",
              animation: "impactSpark 1.54s ease-out forwards",
            }}
          />
          {[0, 150].map((delay, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: "100px",
                height: "100px",
                transform: "translate(-50%,-50%)",
                borderRadius: "50%",
                border: `${3 - i}px solid rgba(${i === 0 ? INTRO_GOLD_RGB : "239,231,215"},${0.75 - i * 0.18})`,
                animation: `shockRing 2.8s cubic-bezier(0.2,0.6,0.4,1) ${ms(delay)}ms forwards`,
              }}
            />
          ))}
        </div>
      )}

      {/* ── Flash ── */}
      {(phase === "flashing" || phase === "exit") && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 85% 75% at 50% 45%,rgba(255,255,255,0.78) 0%,rgba(238,199,108,0.4) 38%,transparent 72%)",
            animation: "bigFlash 2.52s ease-out forwards",
          }}
        />
      )}

      {/* ── CENTER: transparent AO logo target ── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <button
          ref={aoLogoRef}
          type="button"
          aria-label="Enter AndreasOne site"
          className="pyramid-logo-wobble"
          onClick={handleClick}
          style={{
            width: "min(42vw,240px)",
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
            filter: "drop-shadow(0 8px 28px rgba(0,0,0,0.22))",
            animation:
              phase === "idle"
                ? undefined
                : phase === "ringing" || phase === "flashing"
                  ? "pyramidRing 2.52s cubic-bezier(0.22,1,0.36,1) forwards"
                  : undefined,
          }}
        />
        <div
          className={`flex flex-col items-center gap-1 mt-5 select-none transition-opacity duration-300
            ${phase !== "idle" ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          <p className="font-display text-[#111111] uppercase tracking-[0.45em] text-lg sm:text-xl">
            ANDREASONE
          </p>
          <p className="font-sans text-[#111111]/55 uppercase tracking-[0.35em] text-[11px] sm:text-sm animate-pulse">
            CLICK TO ENTER
          </p>
        </div>
      </div>
    </div>
  );
}
