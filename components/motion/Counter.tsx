"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/** Counts up to `value` once, preserving its decimal precision. */
export default function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const target = parseFloat(value);
  const decimals = value.includes(".") ? value.split(".")[1].length : 0;
  const [display, setDisplay] = useState(target.toFixed(decimals));

  useEffect(() => {
    if (!inView || Number.isNaN(target)) return;
    setDisplay((0).toFixed(decimals));
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, target, decimals]);

  return <span ref={ref}>{Number.isNaN(target) ? value : display}</span>;
}
