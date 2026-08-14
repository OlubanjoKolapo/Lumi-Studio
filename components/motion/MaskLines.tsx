"use client";

import { motion } from "framer-motion";
import { EASE } from "./Reveal";

export type Line = { text: string; italic?: boolean };

type Props = {
  lines: (Line | string)[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  /** Play immediately instead of waiting for the line to scroll into view. */
  immediate?: boolean;
  as?: "h1" | "h2" | "h3" | "p" | "div";
};

/**
 * Each line sits in its own overflow-hidden box and rises out of it, so the
 * type appears to be pulled up from behind the line above.
 */
export default function MaskLines({
  lines,
  className,
  lineClassName,
  delay = 0,
  stagger = 0.09,
  immediate = false,
  as: Tag = "div",
}: Props) {
  const motionProps = immediate
    ? { animate: "show" as const }
    : {
        whileInView: "show" as const,
        viewport: { once: true, margin: "-10% 0px -10% 0px" },
      };

  return (
    <Tag className={className}>
      <motion.span
        className="block"
        initial="hidden"
        {...motionProps}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: stagger, delayChildren: delay } },
        }}
      >
        {lines.map((raw, i) => {
          const line: Line = typeof raw === "string" ? { text: raw } : raw;
          return (
            <span
              key={i}
              className={`block overflow-hidden ${lineClassName ?? ""}`}
              // A hair of vertical padding keeps descenders from being clipped.
              style={{ paddingBottom: "0.08em", marginBottom: "-0.08em" }}
            >
              <motion.span
                className={`block ${line.italic ? "italic" : ""}`}
                variants={{
                  hidden: { y: "112%" },
                  show: { y: "0%", transition: { duration: 1.1, ease: EASE } },
                }}
              >
                {line.text}
              </motion.span>
            </span>
          );
        })}
      </motion.span>
    </Tag>
  );
}
