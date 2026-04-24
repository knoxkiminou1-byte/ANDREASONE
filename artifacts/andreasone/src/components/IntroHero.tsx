import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";

export function IntroHero() {
  const [location, setLocation] = useLocation();
  const [isHit, setIsHit] = useState(false);
  const [isKnockedOut, setIsKnockedOut] = useState(false);
  const [isSwirlingOut, setIsSwirlingOut] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Only show if we are on the root and haven't entered yet
    if (location === "/") {
      setIsReady(true);
    }
  }, [location]);

  if (!isReady) return null;

  const triggerImpact = () => {
    setIsHit(true);
    
    setTimeout(() => {
      setIsKnockedOut(true);
      setIsSwirlingOut(true);
    }, 860);

    setTimeout(() => {
      // Transition to actual home content
      setIsReady(false);
      // We can manage state in a parent or simply hide this component.
      // We dispatch a custom event to notify App.tsx that intro is done.
      window.dispatchEvent(new CustomEvent('introFinished'));
    }, 860 + 1150);
  };

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#f3efe6] transition-opacity duration-700
        ${isSwirlingOut ? "animate-[sceneWarp_1.15s_cubic-bezier(0.15,0.86,0.24,1)_forwards]" : "animate-[sceneVibrate_0.1s_steps(2,end)_infinite]"}`}
    >
      {/* Gradient Layers from original CSS */}
      <div 
        className="absolute inset-[-35%] rounded-full origin-center mix-blend-normal opacity-100 filter contrast-108 saturate-116 
          animate-[swirlOne_12s_linear_infinite,colorCycle_8s_linear_infinite]"
        style={{
          background: `radial-gradient(circle at 18% 72%, rgba(207, 93, 39, 0.4) 0%, transparent 46%),
                       radial-gradient(circle at 82% 24%, rgba(68, 88, 41, 0.36) 0%, transparent 38%),
                       radial-gradient(circle at 50% 50%, rgba(246, 196, 90, 0.26) 0%, transparent 62%),
                       conic-gradient(from 220deg at 50% 50%, #cf5d27, #f6c45a, #445829, #d9decf, #efe7d7, #cf5d27)`
        }}
      />
      <div 
        className="absolute inset-[-35%] rounded-full origin-center mix-blend-soft-light opacity-[0.88]
          animate-[swirlTwo_9s_linear_infinite_reverse,colorCycle_10s_linear_infinite_reverse]"
        style={{
          background: `radial-gradient(circle at 65% 72%, rgba(207, 93, 39, 0.32) 0%, transparent 42%),
                       radial-gradient(circle at 38% 36%, rgba(68, 88, 41, 0.3) 0%, transparent 42%),
                       repeating-conic-gradient(from 0deg at 50% 50%, rgba(239, 231, 215, 0.65) 0deg, rgba(239, 231, 215, 0.65) 8deg, rgba(246, 196, 90, 0.4) 12deg, rgba(207, 93, 39, 0.45) 22deg, rgba(68, 88, 41, 0.44) 30deg, rgba(217, 222, 207, 0.5) 38deg)`
        }}
      />

      <div className="absolute w-[50vmax] h-[50vmax] rounded-full mix-blend-multiply blur-[72px] bg-[rgba(207,93,39,0.32)] -left-[10vmax] -bottom-[8vmax] animate-[orbitOrange_9s_ease-in-out_infinite_alternate]" />
      <div className="absolute w-[50vmax] h-[50vmax] rounded-full mix-blend-multiply blur-[72px] bg-[rgba(68,88,41,0.3)] -right-[10vmax] -top-[8vmax] animate-[orbitOlive_10s_ease-in-out_infinite_alternate]" />

      <section 
        className={`relative z-10 w-[min(54vw,390px)] max-w-[330px] sm:max-w-[390px]
          ${!isHit ? "animate-[floatLogo_4.8s_ease-in-out_infinite]" : ""}
          ${isHit && !isKnockedOut ? "animate-[floatLogo_4.8s_ease-in-out_infinite,logoImpact_0.45s_ease-out] saturate-124" : ""}
          ${isKnockedOut ? "animate-[logoKnockOut_1.8s_cubic-bezier(0.12,0.74,0.18,1)_forwards]" : ""}
        `}
      >
        <button
          onClick={triggerImpact}
          className="w-full bg-transparent border-0 p-0 cursor-pointer relative focus-visible:outline-4 focus-visible:outline-[#f6c45a] focus-visible:outline-offset-8 rounded-2xl"
          aria-label="Enter site"
        >
          <svg className="w-full h-auto block drop-shadow-[0_12px_26px_rgba(0,0,0,0.22)]" viewBox="0 0 320 360">
            <circle cx="160" cy="114" r="74" fill="none" stroke="#111111" strokeWidth="14" strokeLinejoin="round" strokeLinecap="round" />
            <polygon points="160,122 74,274 246,274" fill="none" stroke="#111111" strokeWidth="10" strokeLinejoin="round" strokeLinecap="round" />
            <line x1="70" y1="304" x2="250" y2="304" fill="none" stroke="#111111" strokeWidth="10" strokeLinecap="round" />
          </svg>

          <div 
            className={`absolute top-[-56%] left-1/2 w-[320px] h-[420px] origin-[50%_0] pointer-events-none
              ${!isHit ? "opacity-0 -translate-x-1/2 -rotate-60" : "opacity-1 animate-[pendulumHit_1.95s_cubic-bezier(0.2,0.75,0.28,1)_forwards]"}
            `}
          >
            <svg className="w-full h-full overflow-visible drop-shadow-[0_14px_24px_rgba(0,0,0,0.28)]" viewBox="0 0 180 300">
              <circle cx="90" cy="24" r="17" fill="none" stroke="#111111" strokeWidth="6.5" />
              <line x1="90" y1="42" x2="90" y2="198" fill="none" stroke="#111111" strokeWidth="6.5" strokeLinecap="round" />
              <path d="M56 66 L124 66" fill="none" stroke="#111111" strokeWidth="6.5" strokeLinecap="round" />
              <path d="M36 108 L144 108" fill="none" stroke="#111111" strokeWidth="6.5" strokeLinecap="round" />
              <path d="M52 146 L128 146" fill="none" stroke="#111111" strokeWidth="6.5" strokeLinecap="round" />
              <circle cx="90" cy="226" r="64" fill="none" stroke="#111111" strokeWidth="6.5" />
              <line x1="28" y1="226" x2="152" y2="226" fill="none" stroke="#111111" strokeWidth="6.5" strokeLinecap="round" />
              <line x1="90" y1="198" x2="90" y2="290" fill="none" stroke="#111111" strokeWidth="6.5" strokeLinecap="round" />
              <text x="58" y="242" fontFamily="Space Grotesk, sans-serif" fontSize="37" fontWeight="800" fill="#111111" textAnchor="middle">A</text>
              <text x="106" y="242" fontFamily="Space Grotesk, sans-serif" fontSize="37" fontWeight="800" fill="#111111" textAnchor="middle">O</text>
            </svg>
          </div>
        </button>
      </section>
    </div>
  );
}
