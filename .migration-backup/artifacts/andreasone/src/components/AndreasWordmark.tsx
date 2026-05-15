import React from "react";
import { cn } from "@/lib/utils";

interface AndreasWordmarkProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
}

export function AndreasWordmark({ text, className, ...props }: AndreasWordmarkProps) {
  return (
    <span
      {...props}
      role="text"
      aria-label={text}
      className={cn("inline-flex items-end whitespace-nowrap leading-none uppercase", className)}
    >
      {Array.from(text.toUpperCase()).map((char, index) => {
        if (char === " ") {
          return <span key={`${char}-${index}`} className="w-[0.28em]" aria-hidden="true" />;
        }

        const emphasize = char === "A" || char === "O";

        return (
          <span
            key={`${char}-${index}`}
            aria-hidden="true"
            className={cn(
              "inline-block leading-none",
              emphasize && "text-[1.16em] -translate-y-[0.01em]"
            )}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
}
