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

type Phase = "idle" | "swinging" | "ringing" | "flashing" | "exit";

interface Geo { impactX: number; impactY: number; }

/* ════════════════════════════════════════════════════ */
export function IntroHero() {
  const canvasRef        = useRef<HTMLCanvasElement>(null);
  const simRef           = useRef<{ buf1: Float32Array; buf2: Float32Array; w: number; h: number; sw: number; sh: number } | null>(null);
  const animRef          = useRef<number>(0);
  const aoLogoRef        = useRef<HTMLImageElement>(null);
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
      const g = { impactX: aoCenterX, impactY: aoCenterY };
      setGeo(g);
      geoRef.current = g;
    }
    const img = aoLogoRef.current;
    if (img?.complete) setTimeout(measure, 60);
    else img?.addEventListener("load", () => setTimeout(measure, 60));
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

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
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize",resize);
      window.removeEventListener("mousemove",onM);
      window.removeEventListener("touchmove",onT);
    };
  }, [addDrop]);

  /* ── Click handler ── */
  const handleClick = useCallback(() => {
    if (phaseRef.current !== "idle") return;
    go("swinging");

    setTimeout(() => {
      go("ringing");
      triggerBurst();
    }, 120);

    setTimeout(() => go("flashing"), 520);
    setTimeout(() => go("exit"),     920);
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("introFinished"));
    }, 1500);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggerBurst]);

  const isGone = phase === "exit";

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden transition-all duration-700 ease-in-out
        ${isGone ? "opacity-0 scale-110 pointer-events-none" : "opacity-100 scale-100"}`}
      style={{ background: "#f3efe6" }}
    >
      {/* ── Swirling prism background ── */}
      <div className="absolute inset-[-60%] rounded-full" style={{
        background:`radial-gradient(circle at 18% 72%,rgba(207,93,39,0.4) 0%,transparent 46%),
          radial-gradient(circle at 82% 24%,rgba(68,88,41,0.36) 0%,transparent 38%),
          radial-gradient(circle at 50% 50%,rgba(246,196,90,0.26) 0%,transparent 62%),
          conic-gradient(from 220deg at 50% 50%,#cf5d27,#f6c45a,#445829,#d9decf,#efe7d7,#cf5d27)`,
        animation:"swirlOne 12s linear infinite",
      }}/>
      <div className="absolute inset-[-60%] rounded-full opacity-[0.88]" style={{
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
