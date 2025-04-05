'use client';

import { LOGOS } from '@/constants';
import Image from 'next/image';
import { InfiniteMovingCards } from './infinite-moving-cards';

export default function LogoComponent() {
  return (
    <div
      id="services"
      className="flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-full md:max-w-2xl lg:max-w-7xl mx-auto px-5">
        <div className="-mx-3">
          <InfiniteMovingCards direction="right" speed="fast">
            {LOGOS.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 transition-colors duration-300 cursor-default"
              >
                <Image src={item.icon} alt="logo" width={300} height={300} />
              </div>
            ))}
          </InfiniteMovingCards>
        </div>
      </div>
    </div>
  );
}
