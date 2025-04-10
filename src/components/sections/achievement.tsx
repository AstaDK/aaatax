'use client';
import AnimatedBeam from '@/components/animations/background-animated-beam';
import { ACHIEVEMENTS } from '@/constants';
import { cn } from '@/lib/utils';
import React from 'react';
import { AnimatedComponent } from '../animations/animated-image';
import Counter from '../animations/counter';

export default function Achievement() {
  const [overlayColor, setOverlayColor] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = React.useCallback(
    ({ currentTarget, clientX, clientY }: { currentTarget: HTMLElement; clientX: number; clientY: number }) => {
      const { left, top } = currentTarget.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;
      setOverlayColor({ x, y });
    },
    []
  );

  return (
    <div className="py-10 md:py-16">
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
                `
              }}
            />
            {ACHIEVEMENTS?.map((item, i) => {
              const isLineOnMobile = i === 0 || i === 2;
              const isLineOnDesktop = i < 3;

              return (
                <div
                  key={item.title}
                  className={cn(
                    'relative text-slate-400 flex-none basis-1/2 lg:basis-1/4 transition-opacity duration-400 ease'
                  )}
                >
                  <div
                    className={cn('absolute top-1/2 right-[-2px] h-24 w-0.5 bg-white transform -translate-y-1/2 z-10', {
                      block: isLineOnMobile,
                      'hidden lg:block': isLineOnDesktop && !isLineOnMobile,
                      hidden: !isLineOnMobile && !isLineOnDesktop
                    })}
                  />

                  <div className="rounded-xl text-center font-light">
                    <div className="w-18 h-18 flex items-center justify-center bg-blue-600 rounded-lg mx-auto mb-5">
                      <AnimatedComponent>
                        <item.icon className="w-10 h-10 text-white" />
                      </AnimatedComponent>
                    </div>

                    <div className="text-4xl lg:text-nowrap font-semibold leading-[1.15em] tracking-tight text-white">
                      {item.number === 50 && '$'}
                      <div className="hidden">{item.number}</div>
                      <Counter
                        direction="up"
                        targetValue={item.number}
                      />{' '}
                      {item.symbol}
                    </div>
                    <p className="text-white">{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedBeam>
      </div>
      <div className="pt-12 md:pt-16 max-w-3xl mx-auto text-center relative">
        <p className="text-4xl lg:text-5xl font-black text-slate-800 leading-tight tracking-wide italic">
          “The most expensive tax we pay is the tax of ignorance”
        </p>
        <p className="mt-4 text-xl text-slate-700 font-medium">— Probably an Accountant</p>
        <div className="mt-6 flex justify-center">
          <span className="block w-24 h-1 bg-gray-800 rounded-full transform transition-all duration-300 hover:w-32 hover:h-2"></span>
        </div>
      </div>
    </div>
  );
}
