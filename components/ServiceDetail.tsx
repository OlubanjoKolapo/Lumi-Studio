"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/content";
import Magnetic from "./motion/Magnetic";
import MaskLines from "./motion/MaskLines";
import Reveal, { RevealGroup, revealItem } from "./motion/Reveal";
import RevealImage from "./motion/RevealImage";

/**
 * The full menu: one row per service, image and copy trading sides so the eye
 * zig-zags down the page instead of running down a single column.
 */
export default function ServiceDetail() {
  return (
    <section className="bg-cream px-[var(--gutter)] py-20 md:py-28">
      <div className="flex flex-col gap-24 md:gap-36">
        {services.items.map((item, i) => {
          const flipped = i % 2 === 1;
          return (
            <article
              key={item.title}
              id={item.title.toLowerCase().replace(/[^a-z]+/g, "-")}
              className="grid grid-cols-12 items-center gap-y-10 md:gap-x-12"
            >
              <div
                className={`col-span-12 md:col-span-5 ${
                  flipped ? "md:order-2 md:col-start-8" : ""
                }`}
              >
                <RevealImage
                  src={item.image}
                  alt={item.alt}
                  className="aspect-[4/5] w-full u-zoom"
                  imgClassName={item.pos}
                  sizes="(max-width: 768px) 100vw, 42vw"
                  parallax={22}
                />
              </div>

              <div
                className={`col-span-12 md:col-span-6 ${
                  flipped ? "md:order-1 md:col-start-1" : "md:col-start-7"
                }`}
              >
                <Reveal className="u-rule flex items-baseline justify-between pt-5">
                  <span className="u-eyebrow text-mocha">({item.index})</span>
                  <span className="u-eyebrow text-mocha/60">{item.duration}</span>
                </Reveal>

                <MaskLines
                  as="h2"
                  lines={[item.title]}
                  className="u-display mt-8 text-[clamp(1.9rem,3.6vw,3.1rem)] text-ink"
                />

                <Reveal delay={0.1}>
                  <p className="u-body mt-5 max-w-[30rem]">{item.body}</p>
                </Reveal>

                <RevealGroup className="mt-9 flex flex-col gap-3" stagger={0.07}>
                  {item.includes.map((inc) => (
                    <motion.div
                      key={inc}
                      variants={revealItem}
                      className="flex items-baseline gap-4"
                    >
                      <span className="mt-[0.4em] block h-1 w-1 shrink-0 rounded-full bg-tan" />
                      <span className="text-sm font-light text-fog">{inc}</span>
                    </motion.div>
                  ))}
                </RevealGroup>

                <Reveal
                  delay={0.15}
                  className="u-rule mt-10 flex flex-wrap items-center justify-between gap-6 pt-6"
                >
                  <span className="u-display text-[1.6rem] text-ink">{item.price}</span>
                  <Magnetic strength={0.2}>
                    <Link
                      href="/contact"
                      className="u-btn u-eyebrow group flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-bone transition-colors duration-500 hover:text-ink"
                    >
                      <span className="u-btn-fill bg-tan" aria-hidden />
                      Book this
                      <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
                        →
                      </span>
                    </Link>
                  </Magnetic>
                </Reveal>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
