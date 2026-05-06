import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useCallback,
} from "react";

/* ─── Constants ─────────────────────────────────────── */
const SIM_SCALE = 4;
const DAMPING   = 0.983;

const GOLD_W      = 120;
const GOLD_H      = Math.round(GOLD_W * (1448 / 1086)); // ≈ 160px
const GOLD_H_HALF = GOLD_H / 2;                          // ≈ 80px

const SWING_DUR = 940;   // ms
const START_DEG = -72;   // degrees — pendulum start angle from vertical

type Phase = "idle" | "swinging" | "ringing" | "flashing" | "exit";

interface Geo { armLength: number; impactX: number; impactY: number; }

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
  alpha: number;
  color: string;
  born: number;
  life: number;
}

/* ── Cubic-bezier evaluation (matches CSS timing function) ── */
function cbEval(t: number, x1: number, y1: number, x2: number, y2: number): number {
  // Solve for parameter u given t on x axis (Newton), then compute y
  let u = t;
  for (let i = 0; i < 8; i++) {
    const x = 3*u*(1-u)*(1-u)*x1 + 3*u*u*(1-u)*x2 + u*u*u - t;
    const dx = 3*(1-u)*(1-u)*x1 + 6*u*(1-u)*x2 + 3*u*u*(1-x1-x2);
    if (Math.abs(dx) < 1e-6) break;
    u -= x / dx;
  }
  return 3*u*(1-u)*(1-u)*y1 + 3*u*u*(1-u)*y2 + u*u*u;
}

// Matches pendulumSwing: cubic-bezier(0.5, 0, 0.95, 0.55)
function swingEase(t: number) { return cbEval(t, 0.5, 0, 0.95, 0.55); }

/* ════════════════════════════════════════════════════ */
export function IntroHero() {
  const canvasRef        = useRef<HTMLCanvasElement>(null);
  const particleCanvasRef = useRef<HTMLCanvasElement>(null);
  const simRef           = useRef<{ buf1: Float32Array; buf2: Float32Array; w: number; h: number; sw: number; sh: number } | null>(null);
  const animRef          = useRef<number>(0);
  const particleAnimRef  = useRef<number>(0);
  const particlesRef     = useRef<Particle[]>([]);
  const swingStartRef    = useRef<number>(0);
  const aoLogoRef        = useRef<HTMLImageElement>(null);
  const audioCtxRef      = useRef<AudioContext | null>(null);
  const droneRef         = useRef<{ gain: GainNode; osc1: OscillatorNode; osc2: OscillatorNode } | null>(null);
  const geoRef           = useRef<Geo | null>(null);

  const [phase, setPhase] = useState<Phase>("idle");
  const phaseRef          = useRef<Phase>("idle");
  const [geo, setGeo]     = useState<Geo | null>(null);

  function go(p: Phase) { phaseRef.current = p; setPhase(p); }

  /* ── Geometry ── */
  useLayoutEffect(() => {
    function measure() {
      const img = aoLogoRef.current; if (!img) return;
      const r         = img.getBoundingClientRect();
      const aoCenterY = r.top  + r.height * 0.5;
      const aoCenterX = r.left + r.width  * 0.5;
      const armLength = Math.max(80, aoCenterY - GOLD_H_HALF);
      const g = { armLength, impactX: aoCenterX, impactY: aoCenterY };
      setGeo(g);
      geoRef.current = g;
    }
    const img = aoLogoRef.current;
    if (img?.complete) setTimeout(measure, 60);
    else img?.addEventListener("load", () => setTimeout(measure, 60));
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  /* ── Audio ── */
  function getCtx() {
    if (!audioCtxRef.current)
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    return audioCtxRef.current;
  }

  const startDrone = useCallback(() => {
    const ctx = getCtx();
    if (ctx.state === "suspended") ctx.resume();
    const master = ctx.createGain();
    master.gain.setValueAtTime(0, ctx.currentTime);
    master.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 3);
    master.connect(ctx.destination);
    const mk = (f: number, v: number) => {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = "sine"; o.frequency.value = f; g.gain.value = v;
      o.connect(g); g.connect(master); o.start(); return o;
    };
    const osc1 = mk(55, 1), osc2 = mk(110, 0.4);
    const lfo = ctx.createOscillator(), lg = ctx.createGain();
    lg.gain.value = 0.008; lfo.frequency.value = 0.2;
    lfo.connect(lg); lg.connect(master.gain); lfo.start();
    droneRef.current = { gain: master, osc1, osc2 };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function fireImpactSound() {
    const ctx = audioCtxRef.current; if (!ctx) return;
    const now = ctx.currentTime;
    const d = droneRef.current;
    if (d) {
      d.gain.gain.cancelScheduledValues(now);
      d.gain.gain.setValueAtTime(d.gain.gain.value, now);
      d.gain.gain.linearRampToValueAtTime(0, now + 0.35);
      setTimeout(() => { try { d.osc1.stop(); d.osc2.stop(); } catch {} }, 450);
    }
    // Thud
    const n = ctx.sampleRate * 0.12;
    const buf = ctx.createBuffer(1, n, ctx.sampleRate);
    const dat = buf.getChannelData(0);
    for (let i = 0; i < n; i++) dat[i] = (Math.random()*2-1) * Math.pow(1-i/n, 2.5);
    const src = ctx.createBufferSource(); src.buffer = buf;
    const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 200;
    const tg = ctx.createGain(); tg.gain.value = 0.55;
    src.connect(lp); lp.connect(tg); tg.connect(ctx.destination); src.start(now);
    // Bell
    ([[440,0.65,3.0],[1216,0.38,2.2],[2378,0.22,1.5],[3930,0.13,0.9],[5872,0.07,0.5],[880,0.20,2.8]] as [number,number,number][])
      .forEach(([f,v,dc]) => {
        const o=ctx.createOscillator(), g=ctx.createGain();
        o.type="sine"; o.frequency.value=f;
        g.gain.setValueAtTime(v,now); g.gain.exponentialRampToValueAtTime(0.001,now+dc);
        o.connect(g); g.connect(ctx.destination); o.start(now); o.stop(now+dc+0.05);
      });
  }

  /* ── Ripple canvas ── */
  const addDrop = useCallback((sx: number, sy: number, r: number, str: number) => {
    const s = simRef.current; if (!s) return;
    const cx=Math.floor(sx/SIM_SCALE), cy=Math.floor(sy/SIM_SCALE);
    for (let j=-r;j<=r;j++) for (let i=-r;i<=r;i++) {
      if (i*i+j*j<=r*r) {
        const nx=cx+i, ny=cy+j;
        if (nx>=1&&nx<s.sw-1&&ny>=1&&ny<s.sh-1) s.buf1[ny*s.sw+nx]+=str;
      }
    }
  }, []);

  const triggerBurst = useCallback(() => {
    const g = geo; if (!g) return;
    for (let r=0;r<28;r++) {
      const a=(r/28)*Math.PI*2;
      for (let d=0;d<=240;d+=6)
        setTimeout(()=>addDrop(g.impactX+Math.cos(a)*d,g.impactY+Math.sin(a)*d,5,300-d),d*2.2);
    }
  }, [geo, addDrop]);

  useEffect(() => {
    const canvas=canvasRef.current; if (!canvas) return;
    const ctx=canvas.getContext("2d")!;
    const off=document.createElement("canvas"), oCtx=off.getContext("2d")!;

    function resize() {
      const w=window.innerWidth,h=window.innerHeight;
      canvas!.width=w; canvas!.height=h;
      const sw=Math.floor(w/SIM_SCALE),sh=Math.floor(h/SIM_SCALE);
      off.width=sw; off.height=sh;
      simRef.current={buf1:new Float32Array(sw*sh),buf2:new Float32Array(sw*sh),w,h,sw,sh};
    }

    function update() {
      const s=simRef.current; if (!s) return;
      const{sw,sh}=s; let{buf1,buf2}=s;
      for (let y=1;y<sh-1;y++) for (let x=1;x<sw-1;x++) {
        const i=y*sw+x;
        buf2[i]=(buf1[i-1]+buf1[i+1]+buf1[i-sw]+buf1[i+sw])*0.5-buf2[i];
        buf2[i]*=DAMPING;
      }
      s.buf1=buf2; s.buf2=buf1;
    }

    function draw() {
      const s=simRef.current; if (!s) return;
      ctx.clearRect(0,0,s.w,s.h);
      const img=oCtx.createImageData(s.sw,s.sh),d=img.data;
      for (let i=0;i<s.sw*s.sh;i++) {
        const t=Math.max(-1,Math.min(1,s.buf1[i]/80)),idx=i*4;
        if (t>0.04){d[idx]=255;d[idx+1]=255;d[idx+2]=220;d[idx+3]=Math.floor(t*185);}
        else if (t<-0.04){d[idx+3]=Math.floor(-t*120);}
      }
      oCtx.putImageData(img,0,0);
      ctx.imageSmoothingEnabled=true; ctx.drawImage(off,0,0,s.w,s.h);
    }

    let rain=0,last=0;
    function loop(ts: number) {
      const dt=Math.min(ts-last,50); last=ts; update();
      rain+=dt;
      if (rain>150+Math.random()*130) {
        rain=0; const s=simRef.current;
        if (s) addDrop(Math.random()*s.w,Math.random()*s.h,2,100+Math.random()*75);
      }
      draw(); animRef.current=requestAnimationFrame(loop);
    }

    resize(); window.addEventListener("resize",resize);
    animRef.current=requestAnimationFrame(loop);
    const onM=(e:MouseEvent)=>addDrop(e.clientX,e.clientY,3,80);
    const onT=(e:TouchEvent)=>{for(let i=0;i<e.touches.length;i++)addDrop(e.touches[i].clientX,e.touches[i].clientY,4,90);};
    window.addEventListener("mousemove",onM,{passive:true});
    window.addEventListener("touchmove",onT,{passive:true});
    startDrone();
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize",resize);
      window.removeEventListener("mousemove",onM);
      window.removeEventListener("touchmove",onT);
    };
  }, [addDrop, startDrone]);

  /* ── Particle trail loop ──────────────────────────────────────────
     Runs during "swinging". Replays the exact CSS easing math to
     compute pendulum world position, emits gold particles there,
     then continues until particles fade out.
  ─────────────────────────────────────────────────────────────────── */
  const startParticles = useCallback((g: Geo) => {
    cancelAnimationFrame(particleAnimRef.current);
    particlesRef.current = [];
    swingStartRef.current = performance.now();
    const DIST = g.armLength + GOLD_H_HALF; // pivot → weight center (px)
    const COLORS = ["#ffe066","#f6c45a","#ffd700","#fff3c0","#ffb347","#ffffff"];

    const canvas = particleCanvasRef.current;
    if (!canvas) return;
    const pCtx = canvas.getContext("2d")!;
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    function frame(now: number) {
      const elapsed  = now - swingStartRef.current;
      const progress = Math.min(1, elapsed / SWING_DUR);
      const eased    = swingEase(progress);
      const angleDeg = START_DEG * (1 - eased);       // -72° → 0°
      const angleRad = (angleDeg * Math.PI) / 180;

      // Weight center in screen space
      const wX = g.impactX + DIST * Math.sin(angleRad);
      const wY =              DIST * Math.cos(angleRad);

      // Emit particles during active swing only — more as it accelerates
      if (progress < 1) {
        const speed  = eased;                          // fast near impact
        const count  = 1 + Math.floor(speed * 6);
        for (let i = 0; i < count; i++) {
          const angle = Math.random() * Math.PI * 2;
          const rad   = 8 + Math.random() * 28;
          particlesRef.current.push({
            x: wX + Math.cos(angle) * rad * 0.4,
            y: wY + Math.sin(angle) * rad * 0.4,
            vx: (Math.random() - 0.5) * (2 + speed * 3),
            vy: (Math.random() - 0.5) * (2 + speed * 3) - speed * 1.5,
            r: 2 + Math.random() * (3 + speed * 5),
            alpha: 0.75 + Math.random() * 0.25,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            born: now,
            life: 250 + Math.random() * 450,
          });
        }
        // Also disturb the ripple canvas at weight position for extra drama
        addDrop(wX, wY, 1, 30);
      }

      // Update + draw particles
      pCtx.clearRect(0, 0, pCtx.canvas.width, pCtx.canvas.height);
      particlesRef.current = particlesRef.current.filter(p => {
        const age = now - p.born;
        if (age > p.life) return false;
        const t  = age / p.life;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.06;                                 // gravity
        p.vx *= 0.97;                                 // drag
        const a = p.alpha * (1 - t * t);
        const r = p.r * (1 - t * 0.4);

        // Glowing dot
        const grad = pCtx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 2.5);
        const hex = Math.round(a * 255).toString(16).padStart(2,"0");
        grad.addColorStop(0, p.color + hex);
        grad.addColorStop(0.4, p.color + Math.round(a * 180).toString(16).padStart(2,"0"));
        grad.addColorStop(1, p.color + "00");
        pCtx.beginPath();
        pCtx.arc(p.x, p.y, r * 2.5, 0, Math.PI * 2);
        pCtx.fillStyle = grad;
        pCtx.fill();
        return true;
      });

      // Keep running until all particles fade
      if (progress < 1 || particlesRef.current.length > 0) {
        particleAnimRef.current = requestAnimationFrame(frame);
      } else {
        pCtx.clearRect(0, 0, pCtx.canvas.width, pCtx.canvas.height);
      }
    }

    particleAnimRef.current = requestAnimationFrame(frame);
  }, [addDrop]);

  /* ── Click handler ── */
  const handleClick = useCallback(() => {
    if (phaseRef.current !== "idle") return;
    go("swinging");

    // Start particle trail immediately
    const g = geoRef.current;
    if (g) startParticles(g);

    setTimeout(() => {
      go("ringing");
      const g2 = geoRef.current;
      if (g2) triggerBurst();
      fireImpactSound();
    }, 940);

    setTimeout(() => go("flashing"), 1580);
    setTimeout(() => go("exit"),     1980);
    setTimeout(() => {
      cancelAnimationFrame(particleAnimRef.current);
      window.dispatchEvent(new CustomEvent("introFinished"));
    }, 2780);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startParticles, triggerBurst]);

  const isGone = phase === "exit";

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden transition-all duration-700 ease-in-out
        ${isGone ? "opacity-0 scale-110 pointer-events-none" : "opacity-100 scale-100"}`}
      style={{ background: "#f3efe6" }}
    >
      {/* ── Swirling prism background ── */}
      <div className="absolute inset-[-35%] rounded-full" style={{
        background:`radial-gradient(circle at 18% 72%,rgba(207,93,39,0.4) 0%,transparent 46%),
          radial-gradient(circle at 82% 24%,rgba(68,88,41,0.36) 0%,transparent 38%),
          radial-gradient(circle at 50% 50%,rgba(246,196,90,0.26) 0%,transparent 62%),
          conic-gradient(from 220deg at 50% 50%,#cf5d27,#f6c45a,#445829,#d9decf,#efe7d7,#cf5d27)`,
        animation:"swirlOne 12s linear infinite",
      }}/>
      <div className="absolute inset-[-35%] rounded-full opacity-[0.88]" style={{
        background:`radial-gradient(circle at 65% 72%,rgba(207,93,39,0.32) 0%,transparent 42%),
          radial-gradient(circle at 38% 36%,rgba(68,88,41,0.3) 0%,transparent 42%),
          repeating-conic-gradient(from 0deg at 50% 50%,rgba(239,231,215,.65) 0deg,rgba(239,231,215,.65) 8deg,rgba(246,196,90,.4) 12deg,rgba(207,93,39,.45) 22deg,rgba(68,88,41,.44) 30deg,rgba(217,222,207,.5) 38deg)`,
        mixBlendMode:"soft-light", animation:"swirlTwo 9s linear infinite reverse",
      }}/>
      <div className="absolute w-[50vmax] h-[50vmax] rounded-full -left-[10vmax] -bottom-[8vmax]"
        style={{mixBlendMode:"multiply",filter:"blur(72px)",background:"rgba(207,93,39,0.32)",animation:"orbitOrange 9s ease-in-out infinite alternate"}}/>
      <div className="absolute w-[50vmax] h-[50vmax] rounded-full -right-[10vmax] -top-[8vmax]"
        style={{mixBlendMode:"multiply",filter:"blur(72px)",background:"rgba(68,88,41,0.3)",animation:"orbitOlive 10s ease-in-out infinite alternate"}}/>

      {/* ── Ripple overlay ── */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none"
        style={{mixBlendMode:"overlay",opacity:0.65}}/>

      {/* ── Particle trail canvas — sits above ripples, below UI ── */}
      <canvas ref={particleCanvasRef} className="absolute inset-0 w-full h-full pointer-events-none"
        style={{mixBlendMode:"screen",opacity:0.9}}/>

      {/* ── Pendulum ── */}
      {geo && phase !== "idle" && (
        <div className="absolute pointer-events-none" style={{
          top:0, left:"50%", width:0, height:0,
          transformOrigin:"0px 0px",
          animation: phase === "swinging"
            ? "pendulumSwing 0.94s cubic-bezier(0.5,0,0.95,0.55) forwards"
            : "pendulumRebound 1.1s cubic-bezier(0.22,1,0.36,1) forwards",
        }}>
          <div style={{
            position:"absolute", top:0, left:"-1.5px",
            width:"3px", height:`${geo.armLength}px`,
            background:"linear-gradient(to bottom,rgba(30,20,10,0.65),rgba(30,20,10,0.18))",
            borderRadius:"2px",
          }}/>
          <div style={{
            position:"absolute",
            top:`${geo.armLength}px`,
            left:`-${GOLD_W/2}px`,
            width:`${GOLD_W}px`,
            height:`${GOLD_H}px`,
          }}>
            <img src="/brand/andreas-logo-gold-hd.png" alt="" style={{
              width:"100%", height:"100%", objectFit:"contain", display:"block",
              filter:"drop-shadow(0 8px 24px rgba(0,0,0,0.45)) drop-shadow(0 0 16px rgba(246,196,90,0.55))",
            }}/>
          </div>
        </div>
      )}

      {/* ── Impact effects ── */}
      {geo && (phase === "ringing" || phase === "flashing") && (
        <div className="absolute pointer-events-none" style={{left:geo.impactX,top:geo.impactY}}>
          <div style={{
            position:"absolute",width:"90px",height:"90px",
            transform:"translate(-50%,-50%)", borderRadius:"50%",
            background:"radial-gradient(circle,rgba(255,255,255,0.95) 0%,rgba(246,196,90,0.7) 45%,transparent 100%)",
            animation:"impactSpark 0.6s ease-out forwards",
          }}/>
          {[0,140,280].map((delay,i)=>(
            <div key={i} style={{
              position:"absolute",width:"100px",height:"100px",
              transform:"translate(-50%,-50%)", borderRadius:"50%",
              border:`${4-i}px solid rgba(${i===0?"207,93,39":i===1?"246,196,90":"239,231,215"},${0.9-i*0.15})`,
              animation:`shockRing 1.25s cubic-bezier(0.2,0.6,0.4,1) ${delay}ms forwards`,
            }}/>
          ))}
        </div>
      )}

      {/* ── Flash ── */}
      {(phase === "flashing" || phase === "exit") && (
        <div className="absolute inset-0 pointer-events-none" style={{
          background:"radial-gradient(ellipse 85% 75% at 50% 45%,rgba(255,255,255,0.92) 0%,rgba(246,196,90,0.5) 38%,transparent 72%)",
          animation:"bigFlash 0.9s ease-out forwards",
        }}/>
      )}

      {/* ── CENTER: AO logo target ── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <img
          ref={aoLogoRef}
          src="/brand/ao-logo.png"
          alt="AndreasOne"
          onClick={handleClick}
          style={{
            width:"min(42vw,240px)", objectFit:"contain",
            cursor:phase==="idle"?"pointer":"default",
            filter:"drop-shadow(0 8px 28px rgba(0,0,0,0.22))",
            animation:phase==="idle"
              ?"logoFloat 4.8s ease-in-out infinite"
              :(phase==="ringing"||phase==="flashing")
              ?"pyramidRing 1.35s cubic-bezier(0.22,1,0.36,1) forwards"
              :undefined,
          }}
        />
        <div
          className={`flex flex-col items-center gap-1 mt-5 select-none transition-opacity duration-300
            ${phase!=="idle"?"opacity-0 pointer-events-none":"opacity-100"}`}
          onClick={handleClick} style={{cursor:"pointer"}}
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
