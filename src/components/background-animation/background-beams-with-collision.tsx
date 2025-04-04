'use client';
import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';

const CollisionMechanism = dynamic(() => import('./collision-mechanism'), { ssr: false });

export const BackgroundBeamsWithCollision = ({
  children,
  className,
  backgroundImage,
}: {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const parentRef = React.useRef<HTMLDivElement>(null);

  const beams = [
    {
      initialX: 600,
      translateX: 600,
      duration: 3,
      repeatDelay: 3,
      delay: 4,
    },
    {
      initialX: 100,
      translateX: 100,
      duration: 7,
      repeatDelay: 7,
      className: 'h-6',
    },
    {
      initialX: 400,
      translateX: 400,
      duration: 5,
      repeatDelay: 14,
      delay: 4,
    },
    {
      initialX: 800,
      translateX: 800,
      duration: 11,
      repeatDelay: 2,
      className: 'h-20',
    },
    {
      initialX: 1000,
      translateX: 1000,
      duration: 4,
      repeatDelay: 2,
      className: 'h-12',
    },
    {
      initialX: 1200,
      translateX: 1200,
      duration: 6,
      repeatDelay: 4,
      delay: 2,
      className: 'h-6',
    },
    {
      initialX: 1400,
      translateX: 1400,
      duration: 5,
      repeatDelay: 3,
      delay: 1,
    },
    {
      initialX: 1500,
      translateX: 1400,
      duration: 7,
      repeatDelay: 2,
      delay: 3,
    },
    {
      initialX: 1700,
      translateX: 1700,
      duration: 4,
      repeatDelay: 2,
      className: 'h-12',
    },
    {
      initialX: 1800,
      translateX: 1800,
      duration: 5,
      repeatDelay: 2,
      className: 'h-12',
    },
  ];

  return (
    <div
      ref={parentRef}
      className={cn('relative flex items-center w-full justify-center overflow-hidden', className)}
    >
      {backgroundImage && (
        <div className="absolute inset-0 z-[-1]">
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            priority
          />
        </div>
      )}

      {beams.map((beam, index) => (
        <CollisionMechanism
          key={`${beam.initialX}-beam-${index}`}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}

      {children}

      <div
        ref={containerRef}
        className="absolute bottom-0 bg-neutral-100 w-full inset-x-0 pointer-events-none"
        style={{
          boxShadow:
            '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset',
        }}
      ></div>
    </div>
  );
};
