"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useLenis } from "./SmoothScroll";

/**
 * Lenis keeps its own scroll position, so a client-side route change would
 * otherwise land mid-page. Snap both back to the top on navigation.
 */
export default function ScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname, lenis]);

  return null;
}
