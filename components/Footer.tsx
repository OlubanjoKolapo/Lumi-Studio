"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { footer, nav } from "@/lib/content";
import Magnetic from "./motion/Magnetic";
import Reveal, { EASE, RevealGroup, revealItem } from "./motion/Reveal";
import { useLenis } from "./motion/SmoothScroll";

export default function Footer() {
  const lenis = useLenis();

  const toTop = () =>
    lenis ? lenis.scrollTo(0, { duration: 1.8 }) : window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-bone px-[var(--gutter)] pb-10 pt-24 md:pt-32">
      <div className="grid grid-cols-12 gap-y-14 md:gap-x-10">
        <div className="col-span-12 md:col-span-5">
          <Reveal className="flex items-center gap-4">
            <div className="relative h-12 w-12 shrink-0">
              <Image
                src="/logo.png"
                alt="Yenissar Beauty Center Logo"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>
            <p className="u-display text-[clamp(2.2rem,5vw,4.5rem)] leading-none tracking-[0.04em] text-ink">
              YENISSAR
            </p>
          </Reveal>
          <p className="u-body mt-5 max-w-[20rem]">{footer.tagline}</p>

          <Reveal delay={0.15} className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="u-link u-eyebrow text-mocha">
                {item.label}
              </Link>
            ))}
          </Reveal>
        </div>

        <RevealGroup
          className="col-span-12 grid gap-y-12 sm:grid-cols-3 md:col-span-6 md:col-start-7 md:gap-x-8"
          stagger={0.1}
        >
          {footer.columns.map((col) => (
            <motion.div key={col.title} variants={revealItem} className="u-rule pt-5">
              <p className="u-eyebrow text-ink">{col.title}</p>
              <ul className="mt-5 space-y-2.5">
                {col.items.map((it) => (
                  <li key={it}>
                    {col.links ? (
                      <a
                        href="#"
                        className="u-link text-sm font-light text-fog transition-colors duration-500 hover:text-ink"
                      >
                        {it}
                      </a>
                    ) : (
                      <span className="text-sm font-light text-fog">{it}</span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </RevealGroup>
      </div>

      {/* Oversized wordmark rising out of the bottom edge. */}
      <motion.div
        className="mt-20 overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-5% 0px" }}
      >
        <motion.p
          className="u-display select-none text-center text-[12vw] leading-[0.78] tracking-[0.02em] text-ink/[0.07]"
          variants={{
            hidden: { y: "26%", opacity: 0 },
            show: { y: "0%", opacity: 1, transition: { duration: 1.4, ease: EASE } },
          }}
        >
          Yenissar Beauty Center
        </motion.p>
      </motion.div>

      <div className="u-rule mt-8 flex flex-col items-start gap-5 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <span className="u-eyebrow text-mocha/60">
          © {new Date().getFullYear()} Yenissar Beauty Center — All rights reserved
        </span>
        <Magnetic strength={0.25}>
          <button
            onClick={toTop}
            className="u-btn u-eyebrow group flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-bone transition-colors duration-500 hover:text-ink"
          >
            <span className="u-btn-fill bg-tan" aria-hidden />
            Back to top
            <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1">
              ↑
            </span>
          </button>
        </Magnetic>
      </div>
    </footer>
  );
}
