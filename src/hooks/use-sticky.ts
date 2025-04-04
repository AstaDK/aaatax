import { useEffect, useState } from 'react';

export default function useSticky(offset = 10) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > offset);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [offset]);

  return isSticky;
}
