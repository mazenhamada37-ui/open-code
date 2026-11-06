'use client';

import { useEffect, useState } from 'react';

/**
 * useCountUp — animates a number from 0 to target when `start` is true.
 */
export default function useCountUp(target, start, durationMs = 1500) {
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!start || done) return;

    let raf;
    const t0 = performance.now();

    const tick = (now) => {
      const p = Math.min((now - t0) / durationMs, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDone(true);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, durationMs, done]);

  return value;
}
