"use client";

import { studio } from "@/lib/content";
import Counter from "./motion/Counter";
import MaskLines from "./motion/MaskLines";
import Reveal, { RevealGroup, revealItem } from "./motion/Reveal";
import RevealImage from "./motion/RevealImage";
import { motion } from "framer-motion";

const STATEMENT = [
  "Beauty is personal. Every",
  "client deserves a hair",
  "experience designed around",
  "their unique style, texture",
  "and confidence.",
];

export default function Studio() {
  return (
    <section id="studio" className="bg-cream px-[var(--gutter)] py-24 md:py-36">
      <Reveal className="u-rule flex items-baseline justify-between pt-6">
        <span className="u-eyebrow text-mocha">(01) — {studio.eyebrow}</span>
        <span className="u-eyebrow hidden text-mocha/60 sm:inline">Est. 2014</span>
      </Reveal>

      <div className="mt-14 grid grid-cols-12 gap-y-16 md:mt-20 md:gap-x-10">
        <div className="col-span-12 md:col-span-7">
          <MaskLines
            as="h2"
            lines={STATEMENT}
            stagger={0.075}
            className="u-display text-[clamp(1.9rem,4.1vw,3.5rem)] leading-[1.14] text-ink"
          />

          <RevealGroup
            className="mt-14 grid gap-8 sm:grid-cols-2 md:mt-20"
            stagger={0.12}
          >
            {studio.columns.map((c) => (
              <motion.p key={c} variants={revealItem} className="u-body max-w-[24rem]">
                {c}
              </motion.p>
            ))}
          </RevealGroup>

          <RevealGroup
            className="u-rule mt-16 grid grid-cols-3 gap-6 pt-8 md:mt-24"
            stagger={0.1}
          >
            {studio.stats.map((s) => (
              <motion.div key={s.label} variants={revealItem}>
                <p className="u-display flex items-baseline gap-1 text-[clamp(2rem,4vw,3.25rem)] text-ink">
                  <Counter value={s.value} />
                  <span className="text-[0.36em] tracking-[0.14em] text-tan uppercase">
                    {s.suffix}
                  </span>
                </p>
                <p className="u-eyebrow mt-3 text-mocha">{s.label}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>

        {/* Sits a touch lower than the type block, as in the comp. */}
        <div className="col-span-12 md:col-span-4 md:col-start-9 md:pt-4">
          <Reveal className="u-rule flex justify-between pb-4 pt-4" delay={0.15}>
            <span className="u-eyebrow text-mocha/70">{studio.caption}</span>
            <span className="u-eyebrow text-mocha/40">↗</span>
          </Reveal>
          <RevealImage
            src={studio.image}
            alt="Client with a finished body wave install, photographed in the studio"
            className="aspect-[4/5] w-full u-zoom"
            imgClassName={studio.imagePos}
            parallax={26}
          />
        </div>
      </div>
    </section>
  );
}
