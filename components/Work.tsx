"use client";

import type { ReactNode } from "react";
import { work } from "@/lib/content";
import MaskLines from "./motion/MaskLines";
import Reveal from "./motion/Reveal";
import RevealImage from "./motion/RevealImage";

/**
 * Frame geometry per tile — the tall first tile carries both rows. Row one is
 * portrait and row two square, which is what the source photography is.
 */
const FRAMES = [
  "aspect-[3/4] md:col-span-4 md:row-span-2 md:aspect-auto",
  "aspect-[4/5] md:col-span-4",
  "aspect-[4/5] md:col-span-4",
  "aspect-square md:col-span-4 md:col-start-5",
  "aspect-square md:col-span-4",
];

export default function Work({ children }: { children?: ReactNode }) {
  return (
    <section id="work" className="bg-cream px-[var(--gutter)] py-24 md:py-36">
      <Reveal className="u-rule flex items-baseline justify-between pt-6">
        <span className="u-eyebrow text-mocha">(03) — {work.eyebrow}</span>
        <span className="u-eyebrow hidden text-mocha/60 sm:inline">
          {work.items.length} of 240
        </span>
      </Reveal>

      <div className="mt-14 flex flex-col gap-6 md:mt-20 md:flex-row md:items-end md:justify-between">
        <MaskLines
          as="h2"
          lines={[work.heading]}
          className="u-display text-[clamp(2.1rem,5.4vw,4.5rem)] text-ink"
        />
        <Reveal delay={0.2}>
          <p className="u-body max-w-[22rem] md:text-right">{work.note}</p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 md:mt-20 md:grid-cols-12">
        {work.items.map((item, i) => (
          <figure key={item.caption} className={`group relative ${FRAMES[i]}`}>
            <RevealImage
              src={item.image}
              alt={item.alt}
              className="h-full w-full u-zoom"
              imgClassName={item.pos}
              delay={(i % 3) * 0.08}
            />

            {/* Caption plate rises out of the bottom edge on hover. */}
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden">
              <div className="translate-y-full bg-gradient-to-t from-espresso/85 to-transparent px-5 pb-4 pt-10 transition-transform duration-[750ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">
                <span className="u-eyebrow text-bone">{item.caption}</span>
              </div>
            </figcaption>

            <span className="u-eyebrow pointer-events-none absolute right-4 top-4 text-bone/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              0{i + 1}
            </span>
          </figure>
        ))}
      </div>

      {children}
    </section>
  );
}
