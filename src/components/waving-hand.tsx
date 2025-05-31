"use client";

import { cn } from "@/lib/utils";

interface WavingHandProps {
  className?: string;
}

export function WavingHand({ className }: WavingHandProps) {
  return (
    <span
      className={cn(
        "inline-block animate-wave-once leading-none",
        className
      )}
      style={{
        animationDelay: "0.5s",
        animationDuration: "1.5s",
        animationIterationCount: "1",
        animationFillMode: "both",
        transformOrigin: "50% 80%",
        display: "inline-block",
        lineHeight: "1",
      }}
    >
      👋
    </span>
  );
} 