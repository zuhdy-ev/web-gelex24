"use client";

import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [isMd, setIsMd] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMd(window.innerWidth >= 768);
    };

    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return { isMd };
};

export default useScreenSize;
