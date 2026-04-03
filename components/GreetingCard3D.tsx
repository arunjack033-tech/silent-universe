"use client";

import { useState } from "react";

type HeartConfig = {
  left: number;
  duration: number;
  delay: number;
  size: number;
};

function createHearts(count: number): HeartConfig[] {
  return Array.from({ length: count }, () => ({
    left: Math.random() * 100,
    duration: 6 + Math.random() * 4,
    delay: Math.random() * 5,
    size: 16 + Math.random() * 14,
  }));
}

export function BackgroundHearts() {
  const [hearts] = useState<HeartConfig[]>(() => createHearts(20));

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {hearts.map((heart, index) => (
        <div
          key={`${heart.left}-${index}`}
          className="rain-heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          {"\u{1F497}"}
        </div>
      ))}
    </div>
  );
}
