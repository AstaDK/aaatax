'use client';
import useSticky from '@/hooks/use-sticky';
import React from 'react';

export default function BottomToTop() {
  const progressPathRef = React.useRef<SVGPathElement | null>(null);

  const isSticky = useSticky(100);

  // bottom to top handler
  const bottomTopHandler = React.useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  // progress path
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
    <>
      <div onClick={bottomTopHandler}>
        <div
          className={`fixed right-[30px] bottom-[30px] h-[50px] w-[50px] cursor-pointer block rounded-full shadow-inner border-[1px] border-black/10 z-[10000] ${isSticky ? 'opacity-100 visible transform translate-y-0' : 'invisible opacity-0 translate-y-[15px] transition-all duration-200 ease-linear'}`}
        >
          <svg
            className="stroke-accent-color stroke-[4] box-border transition-all duration-200 ease-linear fill-none"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" ref={progressPathRef} />
          </svg>
          <div className="top-[54%] left-1/2 absolute leading-[1px] transform -translate-x-1/2 -translate-y-1/2">
            <i className="text-[36px] text-accent-color ri-arrow-up-s-line" />
          </div>
        </div>
      </div>
    </>
  );
}
