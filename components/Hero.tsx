"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { hero } from "@/lib/content";
import Magnetic from "./motion/Magnetic";
import MaskLines from "./motion/MaskLines";
import { EASE } from "./motion/Reveal";
import { useScrollTo } from "./motion/SmoothScroll";

/** Everything below the curtain waits this long before it starts. */
const OFFSET = 1.15;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const scrollTo = useScrollTo();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // The photo drifts down at roughly a third of scroll speed; the copy leaves faster.
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex h-[100svh] min-h-[680px] flex-col justify-end overflow-hidden bg-espresso text-bone"
    >
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY, scale: imageScale }}
      >
        {/* Rests slightly zoomed so the room's edges stay out of frame. */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.32, opacity: 0 }}
          animate={{ scale: 1.14, opacity: 1 }}
          transition={{ duration: 1.9, ease: EASE, delay: OFFSET - 0.35 }}
        >
          <Image
            src={hero.image}
            alt="Client holding a section of waist-length knotless braids in warm light"
            fill
            sizes="100vw"
            quality={85}
            priority
            className="object-cover object-[50%_38%]"
          />
        </motion.div>
      </motion.div>

      {/* Two overlays: a left-to-right wash for legibility, a base wash for the edges. */}
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/92 via-espresso/55 to-espresso/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-espresso/45" />

      {/* pt clears the fixed header so the headline can never ride up under it. */}
      <motion.div
        className="relative px-[var(--gutter)] pb-14 pt-28 md:pb-20 md:pt-32"
        style={{ y: copyY, opacity: copyOpacity }}
      >
        <div className="max-w-[54rem]">
          <motion.div
            className="mb-8 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: EASE, delay: OFFSET }}
          >
            <motion.span
              className="block h-px bg-bone/50"
              initial={{ width: 0 }}
              animate={{ width: 44 }}
              transition={{ duration: 1.1, ease: EASE, delay: OFFSET }}
            />
            <span className="u-eyebrow text-bone/75">{hero.eyebrow}</span>
          </motion.div>

          <MaskLines
            as="h1"
            immediate
            delay={OFFSET + 0.1}
            stagger={0.1}
            lines={hero.lines}
            /* Capped by viewport height as well as width — three lines have to
               fit above the copy on short, wide windows. */
            className="u-display text-[clamp(2.6rem,min(8.6vw,13vh),8.5rem)]"
          />

          <div className="mt-10 flex flex-col gap-9">
            <motion.p
              className="u-body max-w-[32rem] text-bone/70"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: OFFSET + 0.55 }}
            >
              {hero.body}
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-3 sm:flex-nowrap"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: OFFSET + 0.68 }}
            >
              <Magnetic strength={0.2}>
                <button
                  onClick={() => scrollTo("#contact")}
                  className="u-btn u-eyebrow rounded-full bg-bone px-8 py-4 text-ink transition-colors duration-500 hover:text-bone"
                >
                  <span className="u-btn-fill bg-tan" aria-hidden />
                  Book appointment
                </button>
              </Magnetic>
              <Magnetic strength={0.2}>
                <button
                  onClick={() => scrollTo("#services")}
                  className="u-btn u-eyebrow rounded-full border border-bone/40 px-8 py-4 text-bone transition-colors duration-500 hover:text-ink"
                >
                  <span className="u-btn-fill bg-bone" aria-hidden />
                  Explore services
                </button>
              </Magnetic>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="u-rule-light mt-14 flex items-center justify-between pt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: EASE, delay: OFFSET + 0.85 }}
        >
          <div className="flex gap-8">
            {hero.meta.map((m) => (
              <span key={m} className="u-eyebrow text-bone/45">
                {m}
              </span>
            ))}
          </div>
          <button
            onClick={() => scrollTo("#studio")}
            className="group flex items-center gap-3 text-bone/45 transition-colors duration-500 hover:text-bone"
          >
            <span className="u-eyebrow">Scroll</span>
            <span className="relative block h-8 w-px overflow-hidden bg-bone/25">
              <motion.span
                className="absolute inset-x-0 top-0 block h-3 bg-bone"
                animate={{ y: [-12, 32] }}
                transition={{ duration: 2.1, ease: "easeInOut", repeat: Infinity }}
              />
            </span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
