"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { EASE } from "./Reveal";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** Vertical drift, in px, across the element's full pass through the viewport. */
  parallax?: number;
  delay?: number;
  priority?: boolean;
  /** Rendered width hint for the srcset Next generates. */
  sizes?: string;
};

/**
 * The image is uncovered by a clip-path wipe while the photo itself settles
 * back from an over-scale — the two together read as a curtain lift rather
 * than a fade.
 */
export default function RevealImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  parallax = 0,
  delay = 0,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [parallax, -parallax]);

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
      transition={{ duration: 1.3, ease: EASE, delay }}
    >
      <motion.div
        className="absolute inset-0"
        style={parallax ? { y, scale: 1.12 } : undefined}
        initial={{ scale: 1.24 }}
        whileInView={{ scale: parallax ? 1.12 : 1 }}
        viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
        transition={{ duration: 1.6, ease: EASE, delay }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          quality={82}
          priority={priority}
          className={`object-cover ${imgClassName}`}
        />
      </motion.div>
    </motion.div>
  );
}
