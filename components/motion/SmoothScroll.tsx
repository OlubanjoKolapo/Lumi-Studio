"use client";

import Lenis from "lenis";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const LenisContext = createContext<Lenis | null>(null);

/** Access the shared Lenis instance (null when reduced motion is on). */
export function useLenis() {
  return useContext(LenisContext);
}

/**
 * Scroll-to helper that routes through Lenis when it exists and falls back to
 * the native behaviour when it doesn't.
 */
export function useScrollTo() {
  const lenis = useLenis();
  return (hash: string) => {
    const el = document.querySelector(hash);
    if (!el) return;
    if (lenis) lenis.scrollTo(el as HTMLElement, { offset: 0, duration: 1.4 });
    else el.scrollIntoView({ behavior: "smooth" });
  };
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const instance = new Lenis({
      duration: 1.15,
      // Long, soft tail — the easing that makes the whole page feel weighted.
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.6,
    });

    setLenis(instance);

    const raf = (time: number) => {
      instance.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };
    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
