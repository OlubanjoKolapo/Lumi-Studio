"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from "@/lib/whatsapp";
import Magnetic from "./motion/Magnetic";
import { EASE } from "./motion/Reveal";
import { useLenis } from "./motion/SmoothScroll";

export default function Nav() {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  // Only the home hero sits behind the bar; every other page starts on cream.
  const overHero = pathname === "/";

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > window.innerHeight * 0.86);
    setHidden(y > prev && y > 420 && !open);
  });

  // Reset both when the route changes — the new page starts at the top.
  useEffect(() => {
    setOpen(false);
    setHidden(false);
    setScrolled(false);
  }, [pathname]);

  // The overlay owns the viewport while it's up.
  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
  }, [open, lenis]);

  const solid = (!overHero || scrolled) && !open;
  const tone = solid ? "text-ink" : "text-bone";

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {/* Background plate fades in independently so the text never flickers. */}
        <motion.div
          className="absolute inset-0 border-b bg-bone/85 backdrop-blur-xl"
          style={{ borderColor: "var(--hairline)" }}
          animate={{ opacity: solid ? 1 : 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        />

        <div
          className={`relative flex items-center justify-between px-[var(--gutter)] py-5 transition-colors duration-500 ${tone}`}
        >
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Yenissar Beauty Center — home"
          >
            <div className="relative h-9 w-9 shrink-0 overflow-hidden">
              <Image
                src="/logo.png"
                alt="Yenissar Beauty Center Logo"
                fill
                sizes="36px"
                className={`object-contain transition-all duration-500 ${
                  solid ? "filter-none" : "brightness-0 invert"
                }`}
                priority
              />
            </div>
            <span className="u-display text-xl md:text-2xl leading-none tracking-[0.08em]">
              YENISSAR
            </span>
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-active={pathname === item.href}
                className="u-link u-eyebrow opacity-80 transition-opacity duration-300 hover:opacity-100 data-[active=true]:opacity-100"
              >
                {item.label}
              </Link>
            ))}
            <Magnetic strength={0.22}>
              <Link
                href="/contact"
                className={`u-btn u-eyebrow block rounded-full border px-6 py-3 transition-colors duration-500 ${
                  solid ? "border-ink/25 hover:text-bone" : "border-bone/40 hover:text-ink"
                }`}
              >
                <span className={`u-btn-fill ${solid ? "bg-ink" : "bg-bone"}`} aria-hidden />
                Book now
              </Link>
            </Magnetic>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="relative z-10 flex h-6 w-8 flex-col justify-center gap-[6px] md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <motion.span
              className="block h-px w-full bg-current"
              animate={{ rotate: open ? 45 : 0, y: open ? 3.5 : 0 }}
              transition={{ duration: 0.4, ease: EASE }}
            />
            <motion.span
              className="block h-px w-full bg-current"
              animate={{ rotate: open ? -45 : 0, y: open ? -3.5 : 0 }}
              transition={{ duration: 0.4, ease: EASE }}
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-end bg-espresso px-[var(--gutter)] pb-20 pt-32 text-bone md:hidden"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <nav className="flex flex-col gap-1">
              {nav.map((item, i) => (
                <span key={item.href} className="block overflow-hidden py-1">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "110%", transition: { duration: 0.4, ease: EASE } }}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.15 + i * 0.06 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="u-display block text-left text-[13vw] leading-[1.05]"
                    >
                      {item.label}
                    </Link>
                  </motion.span>
                </span>
              ))}
            </nav>
            <motion.div
              className="u-rule-light mt-12 pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="u-eyebrow text-bone/50">nimetyyeni@gmail.com</p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="u-link u-eyebrow mt-3 block text-bone/50"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
