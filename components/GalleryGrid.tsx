"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { galleryAll, galleryFilters } from "@/lib/content";
import { EASE } from "./motion/Reveal";

/**
 * Filterable grid. Each tile keeps its own aspect ratio so nothing is cropped
 * harder than it needs to be, and `layout` lets survivors glide to their new
 * positions instead of jumping when the filter changes.
 */
export default function GalleryGrid() {
  const [active, setActive] = useState("All");
  const shown =
    active === "All" ? galleryAll : galleryAll.filter((i) => i.category === active);

  return (
    <section className="bg-cream px-[var(--gutter)] pb-24 md:pb-32">
      <div className="u-rule flex flex-wrap items-center gap-x-2 gap-y-3 py-6">
        {galleryFilters.map((f) => {
          const on = f === active;
          const count =
            f === "All"
              ? galleryAll.length
              : galleryAll.filter((i) => i.category === f).length;
          return (
            <button
              key={f}
              onClick={() => setActive(f)}
              aria-pressed={on}
              className={`u-eyebrow relative isolate rounded-full px-5 py-2.5 transition-colors duration-500 ${
                on ? "text-bone" : "text-mocha hover:text-ink"
              }`}
            >
              {/* Sits behind the label but inside the button's own stacking
                  context, so it can't fall behind the section background. */}
              {on && (
                <motion.span
                  layoutId="gallery-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-ink"
                  transition={{ duration: 0.6, ease: EASE }}
                />
              )}
              <span className="relative">
                {f}
                <span className={on ? "text-bone/50" : "text-mocha/40"}> ({count})</span>
              </span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((item) => (
            <motion.figure
              key={item.src}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.65, ease: EASE }}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={80}
                className={`object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] ${item.pos}`}
              />

              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden">
                <div className="flex translate-y-full items-baseline justify-between bg-gradient-to-t from-espresso/85 to-transparent px-5 pb-4 pt-10 transition-transform duration-[750ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">
                  <span className="u-eyebrow text-bone">{item.caption}</span>
                  <span className="u-eyebrow text-bone/50">{item.category}</span>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
