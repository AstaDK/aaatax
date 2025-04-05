import React from 'react';

export const useGridCount = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const updateCount = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) {
        return;
      }
      const width = rect.width;
      const cellSize = 40;
      setCount(Math.ceil(width / cellSize));
    };

    updateCount();

    // Can be debounced if needed
    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, []);

  return {
    count,
    containerRef
  };
};
