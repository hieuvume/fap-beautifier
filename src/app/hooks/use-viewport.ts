import { useEffect, useState } from 'react';

type UseViewport = [number, number];

export function useViewport(): UseViewport {
  const [dimensions, setDimensions] = useState<UseViewport>([
    window.innerHeight,
    window.innerWidth,
  ]);

  useEffect(() => {
    const handleResize = (): void => {
      setDimensions([window.innerHeight, window.innerWidth]);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return dimensions;
}
