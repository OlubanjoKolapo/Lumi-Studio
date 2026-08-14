"use client";

import { motion } from "framer-motion";
import { reviews } from "@/lib/content";
import Reveal, { RevealGroup, revealItem } from "./motion/Reveal";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-cream px-[var(--gutter)] py-24 md:py-32">
      <Reveal className="u-rule flex items-baseline justify-between pt-6">
        <span className="u-eyebrow text-mocha">(05) — {reviews.eyebrow}</span>
        <span className="u-eyebrow hidden text-mocha/60 sm:inline">
          4.9 average · 380 reviews
        </span>
      </Reveal>

      <RevealGroup className="mt-16 grid gap-x-10 gap-y-14 md:mt-20 md:grid-cols-3" stagger={0.12}>
        {reviews.items.map((r) => (
          <motion.figure key={r.name} variants={revealItem} className="flex flex-col">
            <blockquote className="u-display text-[clamp(1.15rem,1.6vw,1.4rem)] leading-[1.55] text-ink">
              <span className="text-tan">“</span>
              {r.quote}
              <span className="text-tan">”</span>
            </blockquote>
            <figcaption className="u-rule mt-auto flex items-baseline justify-between pt-5">
              <span className="u-eyebrow text-ink">{r.name}</span>
              <span className="u-eyebrow text-mocha/60">{r.service}</span>
            </figcaption>
          </motion.figure>
        ))}
      </RevealGroup>
    </section>
  );
}
