import React from "react";
import { cn } from "@/lib/utils";
import { TopoBackdrop } from "@/components/TopoBackdrop";

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
  opacity = 0.55,
}: MotionBackdropProps) {
  return (
    <TopoBackdrop
      className={className}
      opacity={opacity}
      overlayClassName={overlayClassName}
      overlayStyle={overlayStyle}
    />
  );
}
