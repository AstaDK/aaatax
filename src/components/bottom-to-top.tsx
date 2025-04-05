'use client';
import useSticky from '@/hooks/use-sticky';
import { cn } from '@/lib/utils';
import { ArrowUp } from 'lucide-react';
import React from 'react';

export default function BottomToTop() {
  const progressPathRef = React.useRef<SVGPathElement | null>(null);

  const isSticky = useSticky(100);

  const bottomTopHandler = React.useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const progressPath = progressPathRef.current;
      if (progressPath) {
        const pathLength = progressPath.getTotalLength();
        progressPath.style.strokeDasharray = pathLength.toString();
        progressPath.style.strokeDashoffset = pathLength.toString();

        const updateProgress = () => {
          const scroll = window.scrollY;
          const height = document.documentElement.scrollHeight - window.innerHeight;
          const progress = pathLength * (1 - scroll / height);
          progressPath.style.strokeDashoffset = progress.toString();
        };

        window.addEventListener('scroll', updateProgress);

        return () => {
          window.removeEventListener('scroll', updateProgress);
        };
      }
    }
  }, []);

  return (
    <div onClick={bottomTopHandler}>
      <div
        className={cn(
          'fixed right-7.5 bottom-7.5 h-12 w-12 cursor-pointer rounded-full shadow-inner border border-white z-50',
          isSticky
            ? 'opacity-100 visible transform translate-y-0'
            : 'invisible opacity-0 translate-y-3.75 transition-all duration-200 ease-linear'
        )}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ArrowUp className="text-9 text-white" />
        </div>
      </div>
    </div>
  );
}
