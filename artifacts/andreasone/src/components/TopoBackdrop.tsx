import React, { useId } from "react";
import { cn } from "@/lib/utils";

interface TopoBackdropProps {
  className?: string;
  opacity?: number;
  overlayClassName?: string;
  overlayStyle?: React.CSSProperties;
}

export function TopoBackdrop({
  className,
  opacity = 1,
  overlayClassName,
  overlayStyle,
}: TopoBackdropProps) {
  const uid = useId();
  const filterId = `topo-${uid.replace(/:/g, "")}`;

  return (
    <div
      aria-hidden="true"
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
      style={{ opacity }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        <defs>
          <filter
            id={filterId}
            x="0"
            y="0"
            width="100%"
            height="100%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.007 0.011"
              numOctaves="4"
              seed="42"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                dur="120s"
                repeatCount="indefinite"
                values="0.007 0.011;0.010 0.008;0.008 0.013;0.012 0.009;0.007 0.011"
              />
            </feTurbulence>
            <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
            <feComponentTransfer in="gray">
              <feFuncR
                type="discrete"
                tableValues="0.227 0.227 0.141 0.227 0.227 0.141 0.227 0.227 0.141 0.227 0.227 0.141"
              />
              <feFuncG
                type="discrete"
                tableValues="0.337 0.337 0.208 0.337 0.337 0.208 0.337 0.337 0.208 0.337 0.337 0.208"
              />
              <feFuncB
                type="discrete"
                tableValues="0.094 0.094 0.063 0.094 0.094 0.063 0.094 0.094 0.063 0.094 0.094 0.063"
              />
            </feComponentTransfer>
          </filter>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="#3a5618"
          filter={`url(#${filterId})`}
        />
      </svg>

      {(overlayClassName || overlayStyle) && (
        <div
          className={cn("absolute inset-0", overlayClassName)}
          style={overlayStyle}
        />
      )}
    </div>
  );
}
