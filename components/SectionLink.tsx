"use client";

import Link from "next/link";
import Magnetic from "./motion/Magnetic";
import Reveal from "./motion/Reveal";

/**
 * The "keep going" control that closes a preview section. One component so the
 * affordance is identical everywhere it appears.
 */
export default function SectionLink({
  href,
  label,
  tone = "light",
  className = "",
}: {
  href: string;
  label: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <Reveal className={className}>
      <Magnetic strength={0.2}>
        <Link
          href={href}
          className={`u-btn u-eyebrow group flex items-center gap-3 rounded-full border px-8 py-4 transition-colors duration-500 ${
            dark
              ? "border-bone/30 text-bone hover:text-espresso"
              : "border-ink/20 text-ink hover:text-bone"
          }`}
        >
          <span className={`u-btn-fill ${dark ? "bg-bone" : "bg-ink"}`} aria-hidden />
          {label}
          <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
            →
          </span>
        </Link>
      </Magnetic>
    </Reveal>
  );
}
