import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

import olivePoster from "@assets/intro-liquid-olive.png";
import oliveVideoWebm from "@assets/intro-liquid-olive.webm";
import oliveVideoMp4 from "@assets/intro-background.mp4";

interface MotionBackdropProps {
  className?: string;
  overlayClassName?: string;
  overlayStyle?: React.CSSProperties;
  videoClassName?: string;
  posterClassName?: string;
  playbackRate?: number;
  opacity?: number;
}

export function MotionBackdrop({
  className,
  overlayClassName,
  overlayStyle,
  videoClassName,
  posterClassName,
  playbackRate = 0.65,
  opacity = 0.55,
}: MotionBackdropProps) {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;
    video.playbackRate = playbackRate;
  }, [playbackRate, reduceMotion]);

  return (
    <div aria-hidden="true" className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {reduceMotion ? (
        <img
          src={olivePoster}
          alt=""
          className={cn("absolute inset-0 w-full h-full object-cover", posterClassName)}
          style={{ opacity }}
        />
      ) : (
        <video
          ref={videoRef}
          className={cn("absolute inset-0 w-full h-full object-cover", videoClassName)}
          src={oliveVideoMp4}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={olivePoster}
          style={{ opacity }}
        >
          <source src={oliveVideoWebm} type="video/webm" />
          <source src={oliveVideoMp4} type="video/mp4" />
        </video>
      )}
      <div
        className={cn("absolute inset-0", overlayClassName)}
        style={{
          background: "linear-gradient(180deg, rgba(17,17,17,0.12), rgba(17,17,17,0.28))",
          mixBlendMode: "multiply",
          ...overlayStyle,
        }}
      />
    </div>
  );
}
