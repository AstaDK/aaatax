'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import CollisionMechanism from './collision-mechanism';
import { BEAMS } from '@/constants';

export const BackgroundBeamsWithCollision = ({
  children,
  className,
  backgroundImage
}: {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const parentRef = React.useRef<HTMLDivElement | null>(null);

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
              objectPosition: 'center'
            }}
            priority
          />
        </div>
      )}

      {BEAMS.map((beam, index) => (
        <CollisionMechanism
          key={`${beam.initialX}-beam-${index}`}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef as unknown as React.RefObject<HTMLDivElement>}
        />
      ))}

      {children}

      <div
        ref={containerRef}
        className="absolute bottom-0 bg-neutral-100 w-full inset-x-0 pointer-events-none"
        style={{
          boxShadow:
            '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
        }}
      ></div>
    </div>
  );
};
