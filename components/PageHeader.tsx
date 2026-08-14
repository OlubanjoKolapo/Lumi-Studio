"use client";

import MaskLines from "./motion/MaskLines";
import Reveal from "./motion/Reveal";

type Props = {
  index: string;
  eyebrow: string;
  lines: string[];
  lede: string;
  meta: string[];
};

/**
 * The banner every inner page opens with. Same rhythm as the home sections —
 * hairline, numbered eyebrow, masked display lines — so moving between pages
 * feels like moving down one document.
 */
export default function PageHeader({ index, eyebrow, lines, lede, meta }: Props) {
  return (
    <header className="bg-cream px-[var(--gutter)] pb-16 pt-32 md:pb-24 md:pt-40">
      <Reveal className="u-rule flex items-baseline justify-between pt-6">
        <span className="u-eyebrow text-mocha">
          {index} — {eyebrow}
        </span>
        <span className="u-eyebrow hidden text-mocha/60 sm:inline">Lumi Studio</span>
      </Reveal>

      <div className="mt-12 grid grid-cols-12 gap-y-10 md:mt-16 md:gap-x-10">
        <MaskLines
          as="h1"
          lines={lines}
          className="col-span-12 u-display text-[clamp(2.4rem,6.4vw,5.5rem)] text-ink md:col-span-7"
        />
        <Reveal delay={0.2} className="col-span-12 self-end md:col-span-4 md:col-start-9">
          <p className="u-body">{lede}</p>
          <div className="u-rule mt-8 flex flex-wrap gap-x-8 gap-y-2 pt-4">
            {meta.map((m) => (
              <span key={m} className="u-eyebrow text-mocha/60">
                {m}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </header>
  );
}
