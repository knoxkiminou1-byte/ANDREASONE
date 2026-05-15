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
    }, 1032);

    setTimeout(() => {
      // Transition to actual home content
      setIsReady(false);
      // We can manage state in a parent or simply hide this component.
      // We dispatch a custom event to notify App.tsx that intro is done.
      window.dispatchEvent(new CustomEvent('introFinished'));
    }, 1032 + 1380);
  };

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#4b5728] transition-opacity duration-[840ms]
        ${isSwirlingOut ? "animate-[sceneWarp_1.38s_cubic-bezier(0.15,0.86,0.24,1)_forwards]" : "animate-[sceneDrift_18s_cubic-bezier(0.42,0,0.2,1)_infinite_alternate]"}`}
    >
      <div className="ao-contour-swirl ao-contour-swirl--intro" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(246,196,90,0.05),transparent_28%)]" />

      <section 
        className={`relative z-10 w-[min(54vw,390px)] max-w-[330px] sm:max-w-[390px]
          ${!isHit ? "animate-[floatLogo_5.76s_ease-in-out_infinite]" : ""}
          ${isHit && !isKnockedOut ? "animate-[floatLogo_5.76s_ease-in-out_infinite,logoImpact_0.54s_ease-out] saturate-124" : ""}
          ${isKnockedOut ? "animate-[logoKnockOut_2.16s_cubic-bezier(0.12,0.74,0.18,1)_forwards]" : ""}
        `}
      >
        <button
          onClick={triggerImpact}
          className="w-full bg-transparent border-0 p-0 cursor-pointer relative focus-visible:outline-4 focus-visible:outline-[#f6c45a] focus-visible:outline-offset-8 rounded-2xl"
          aria-label="Enter site"
        >
          <svg className="w-full h-auto block drop-shadow-[0_12px_26px_rgba(0,0,0,0.22)]" viewBox="0 0 320 360">
            <circle cx="160" cy="114" r="74" fill="none" stroke="#f2cb6b" strokeWidth="14" strokeLinejoin="round" strokeLinecap="round" />
            <polygon points="160,122 74,274 246,274" fill="none" stroke="#f2cb6b" strokeWidth="10" strokeLinejoin="round" strokeLinecap="round" />
            <line x1="70" y1="304" x2="250" y2="304" fill="none" stroke="#f2cb6b" strokeWidth="10" strokeLinecap="round" />
          </svg>

          <div 
            className={`absolute top-[-56%] left-1/2 w-[320px] h-[420px] origin-[50%_0] pointer-events-none
              ${!isHit ? "opacity-0 -translate-x-1/2 -rotate-60" : "opacity-1 animate-[pendulumHit_2.34s_cubic-bezier(0.2,0.75,0.28,1)_forwards]"}
            `}
          >
            <svg className="w-full h-full overflow-visible drop-shadow-[0_14px_24px_rgba(0,0,0,0.28)]" viewBox="0 0 180 300">
              <circle cx="90" cy="24" r="17" fill="none" stroke="#f2cb6b" strokeWidth="6.5" />
              <line x1="90" y1="42" x2="90" y2="198" fill="none" stroke="#f2cb6b" strokeWidth="6.5" strokeLinecap="round" />
              <path d="M56 66 L124 66" fill="none" stroke="#f2cb6b" strokeWidth="6.5" strokeLinecap="round" />
              <path d="M36 108 L144 108" fill="none" stroke="#f2cb6b" strokeWidth="6.5" strokeLinecap="round" />
              <path d="M52 146 L128 146" fill="none" stroke="#f2cb6b" strokeWidth="6.5" strokeLinecap="round" />
              <circle cx="90" cy="226" r="64" fill="none" stroke="#f2cb6b" strokeWidth="6.5" />
              <line x1="28" y1="226" x2="152" y2="226" fill="none" stroke="#f2cb6b" strokeWidth="6.5" strokeLinecap="round" />
              <line x1="90" y1="198" x2="90" y2="290" fill="none" stroke="#f2cb6b" strokeWidth="6.5" strokeLinecap="round" />
              <text x="58" y="242" fontFamily="Space Grotesk, sans-serif" fontSize="37" fontWeight="800" fill="#f2cb6b" textAnchor="middle">A</text>
              <text x="106" y="242" fontFamily="Space Grotesk, sans-serif" fontSize="37" fontWeight="800" fill="#f2cb6b" textAnchor="middle">O</text>
            </svg>
          </div>

          <span className="block mt-6 font-display text-2xl sm:text-4xl tracking-[0.2em] text-[#f3efe6] drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)]">
            ANDREASONE
          </span>
          <span className="block mt-3 font-display text-sm sm:text-lg tracking-[0.3em] text-[#f3efe6]/70">
            CLICK TO ENTER
          </span>
        </button>
      </section>
    </div>
  );
}
