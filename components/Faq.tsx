"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { faqs } from "@/lib/content";
import MaskLines from "./motion/MaskLines";
import Reveal, { EASE, RevealGroup, revealItem } from "./motion/Reveal";

/** One-open-at-a-time accordion; the answer height animates rather than snaps. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-cream px-[var(--gutter)] py-24 md:py-32">
      <Reveal className="u-rule flex items-baseline justify-between pt-6">
        <span className="u-eyebrow text-mocha">(05) — Before you come in</span>
        <span className="u-eyebrow hidden text-mocha/60 sm:inline">
          {faqs.length} questions
        </span>
      </Reveal>

      <div className="mt-14 grid grid-cols-12 gap-y-12 md:mt-20 md:gap-x-10">
        <MaskLines
          as="h2"
          lines={["Asked often", "enough."]}
          className="col-span-12 u-display text-[clamp(2rem,5vw,4rem)] text-ink md:col-span-4"
        />

        <RevealGroup className="col-span-12 md:col-span-7 md:col-start-6" stagger={0.08}>
          {faqs.map((f, i) => {
            const on = open === i;
            return (
              <motion.div key={f.q} variants={revealItem} className="u-rule">
                <button
                  onClick={() => setOpen(on ? null : i)}
                  aria-expanded={on}
                  className="flex w-full items-baseline justify-between gap-6 py-6 text-left"
                >
                  <span
                    className={`u-display text-[1.25rem] leading-snug transition-colors duration-500 ${
                      on ? "text-ink" : "text-ink/70 hover:text-ink"
                    }`}
                  >
                    {f.q}
                  </span>
                  <motion.span
                    className="mt-1 block shrink-0 text-mocha"
                    animate={{ rotate: on ? 45 : 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    aria-hidden
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div
                      className="overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: EASE }}
                    >
                      <p className="u-body max-w-[34rem] pb-7 pr-10">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
