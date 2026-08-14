"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { EASE } from "./motion/Reveal";
import { useLenis } from "./motion/SmoothScroll";

/**
 * A bone-coloured curtain that holds for a beat, then lifts to hand off to the
 * hero. Scrolling is frozen until it's gone so the handoff can't be skipped
 * halfway through.
 */
export default function Intro() {
  const pathname = usePathname();
  // Only a cold load of the home page earns the curtain — landing straight on
  // an inner page shouldn't be held up by a brand moment.
  const [done, setDone] = useState(pathname !== "/");
  const lenis = useLenis();

  useEffect(() => {
    if (done) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDone(true);
      return;
    }
    lenis?.stop();
    window.scrollTo(0, 0);
    const t = setTimeout(() => setDone(true), 1150);
    return () => clearTimeout(t);
  }, [lenis, done]);

  useEffect(() => {
    if (done) lenis?.start();
  }, [done, lenis]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bone"
          exit={{ y: "-100%" }}
          transition={{ duration: 1.05, ease: EASE }}
        >
          <motion.span
            className="u-display text-[13vw] leading-none text-ink md:text-[8vw]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14, transition: { duration: 0.5, ease: EASE } }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            Lumi
          </motion.span>
          <motion.span
            className="absolute bottom-10 left-1/2 h-px -translate-x-1/2 bg-ink/25"
            initial={{ width: 0 }}
            animate={{ width: 180 }}
            transition={{ duration: 1.05, ease: EASE }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
