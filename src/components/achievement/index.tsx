"use client";
import AchievementCard from "@/components/achievement/achievement-card";
import AnimatedBeam from "@/components/background-animation/background-animated-beam";
import { ACHIEVEMENTS } from "@/constants";
import React from "react";

export default function Achievement() {
  const [overlayColor, setOverlayColor] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = React.useCallback(
    ({
      currentTarget,
      clientX,
      clientY,
    }: {
      currentTarget: HTMLElement;
      clientX: number;
      clientY: number;
    }) => {
      let { left, top } = currentTarget.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;
      setOverlayColor({ x, y });
    },
    []
  );

  return (
    <div className="py-10 md:py-20">
      <div className="max-w-full md:max-w-2xl lg:max-w-7xl mx-auto px-5">
        <AnimatedBeam className="achievement-radius">
          <div
            onMouseMove={handleMouseMove}
            className="group relative optech-counter-wrap py-20 px-4 md:py-20 md:px-16 gap-y-10 flex flex-wrap text-center justify-between"
          >
            {/* Hover effect overlay */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 z-50 group-hover:opacity-100 transition duration-300"
              style={{
                background: `
                  radial-gradient(
                    250px circle at ${overlayColor.x}px ${overlayColor.y}px,
                    rgba(255, 255, 255, 0.137),
                    transparent 80%
                  )
                `,
              }}
            />

            {ACHIEVEMENTS?.map((item, i) => (
              <AchievementCard key={i} data={item} index={i} />
            ))}
          </div>
        </AnimatedBeam>
      </div>
    </div>
  );
}
