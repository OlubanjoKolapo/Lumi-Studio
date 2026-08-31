"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import { services } from "@/lib/content";
import MaskLines from "./motion/MaskLines";
import Reveal, { EASE } from "./motion/Reveal";
import RevealImage from "./motion/RevealImage";

export default function Services({ children }: { children?: ReactNode }) {
  return (
    <section id="services" className="bg-sand px-[var(--gutter)] py-24 md:py-36">
      <Reveal className="u-rule flex items-baseline justify-between pt-6">
        <span className="u-eyebrow text-mocha">(02) — {services.eyebrow}</span>
        <span className="u-eyebrow hidden text-mocha/60 sm:inline">Nine signature styles</span>
      </Reveal>

      <div className="mt-14 grid grid-cols-12 gap-y-8 md:mt-20 md:gap-x-10">
        <MaskLines
          as="h2"
          lines={services.heading}
          className="col-span-12 u-display text-[clamp(2.1rem,5.4vw,4.5rem)] text-ink md:col-span-6"
        />
        <Reveal
          delay={0.2}
          className="col-span-12 self-end md:col-span-4 md:col-start-9"
        >
          <p className="u-body">{services.note}</p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 md:mt-24 md:grid-cols-3 md:gap-y-20">
        {services.items.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -8% 0px" }}
            transition={{ duration: 0.95, ease: EASE, delay: (i % 3) * 0.09 }}
            whileHover={{ y: -8 }}
          >
            <Link href="/contact" className="group block">
            <div className="relative">
              <RevealImage
                src={item.image}
                alt={item.alt}
                className="aspect-[4/5] w-full u-zoom"
                imgClassName={item.pos}
                delay={(i % 3) * 0.06}
              />
              <span className="u-eyebrow absolute left-4 top-4 text-bone/85 mix-blend-difference">
                {item.index}
              </span>
            </div>

            <div className="u-rule mt-5 flex items-baseline justify-between pt-4">
              <h3 className="u-display text-[1.45rem] leading-none text-ink">
                {item.title}
              </h3>
              <span className="u-eyebrow text-mocha/70">{item.duration}</span>
            </div>

            <p className="u-body mt-4 max-w-[22rem]">{item.body}</p>

            <div className="mt-6 flex items-center justify-between">
              <span className="u-eyebrow text-ink">{item.price}</span>
              <span className="u-eyebrow flex items-center gap-2 text-mocha/70 transition-colors duration-500 group-hover:text-ink">
                Book
                <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
                  →
                </span>
              </span>
            </div>
            </Link>
          </motion.article>
        ))}
      </div>

      {children}
    </section>
  );
}
