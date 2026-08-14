"use client";

import { motion } from "framer-motion";
import { process } from "@/lib/content";
import MaskLines from "./motion/MaskLines";
import Reveal, { RevealGroup, revealItem } from "./motion/Reveal";

/** How an appointment actually runs, four steps, on the dark ground. */
export default function Process() {
  return (
    <section className="bg-espresso px-[var(--gutter)] py-24 text-bone md:py-32">
      <Reveal className="u-rule-light flex items-baseline justify-between pt-6">
        <span className="u-eyebrow text-bone/50">(03) — How it runs</span>
        <span className="u-eyebrow hidden text-bone/30 sm:inline">Four steps</span>
      </Reveal>

      <div className="mt-14 grid grid-cols-12 gap-y-8 md:mt-20 md:gap-x-10">
        <MaskLines
          as="h2"
          lines={["No surprises,", "start to finish."]}
          className="col-span-12 u-display text-[clamp(2rem,5vw,4rem)] md:col-span-6"
        />
        <Reveal delay={0.2} className="col-span-12 self-end md:col-span-4 md:col-start-9">
          <p className="u-body text-bone/60">
            The same four steps every time, whether you&apos;re in for a two-hour
            cornrow or a six-hour install.
          </p>
        </Reveal>
      </div>

      <RevealGroup
        className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 md:mt-24 md:grid-cols-4"
        stagger={0.1}
      >
        {process.map((p) => (
          <motion.div key={p.step} variants={revealItem} className="u-rule-light pt-6">
            <span className="u-display block text-[2.6rem] leading-none text-tan/70">
              {p.step}
            </span>
            <h3 className="u-display mt-6 text-[1.4rem] leading-none">{p.title}</h3>
            <p className="u-body mt-4 text-bone/55">{p.body}</p>
          </motion.div>
        ))}
      </RevealGroup>
    </section>
  );
}
