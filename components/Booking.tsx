"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { booking } from "@/lib/content";
import Magnetic from "./motion/Magnetic";
import MaskLines from "./motion/MaskLines";
import Reveal, { EASE, RevealGroup, revealItem } from "./motion/Reveal";

/**
 * The booking block. Home uses the comp's wording; the contact page overrides
 * the heading so the two don't read as the same section twice.
 */
export default function Booking({
  eyebrow = booking.eyebrow,
  heading = booking.heading,
  index = "(04)",
}: {
  eyebrow?: string;
  heading?: string;
  index?: string;
}) {
  const [selected, setSelected] = useState(0);
  const [sent, setSent] = useState(false);

  // No backend yet — the request is acknowledged locally.
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="bg-espresso px-[var(--gutter)] py-24 text-bone md:py-36"
    >
      <Reveal className="u-rule-light flex items-baseline justify-between pt-6">
        <span className="u-eyebrow text-bone/50">
          {index} — {eyebrow}
        </span>
        <span className="u-eyebrow hidden text-bone/30 sm:inline">Reply within 24 hrs</span>
      </Reveal>

      <div className="mt-14 grid grid-cols-12 gap-y-16 md:mt-20 md:gap-x-10">
        <div className="col-span-12 md:col-span-5">
          <MaskLines
            as="h2"
            lines={[heading]}
            className="u-display text-[clamp(2.1rem,5.4vw,4.5rem)]"
          />
          <Reveal delay={0.15}>
            <p className="u-body mt-8 max-w-[26rem] text-bone/60">{booking.body}</p>
          </Reveal>

          <RevealGroup className="mt-14 grid gap-px sm:grid-cols-2" stagger={0.08}>
            {booking.details.map((d) => (
              <motion.div key={d.label} variants={revealItem} className="u-rule-light py-4">
                <p className="u-eyebrow text-bone/35">{d.label}</p>
                <p className="mt-2 text-sm font-light text-bone/85">{d.value}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>

        <div className="col-span-12 md:col-span-6 md:col-start-7">
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="sent"
                className="u-rule-light flex min-h-[22rem] flex-col justify-center pt-10"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE }}
              >
                <span className="u-eyebrow text-tan">Request received</span>
                <p className="u-display mt-6 text-[clamp(1.6rem,3vw,2.4rem)] leading-tight">
                  Thank you — we&apos;ll come back with two or three times for your{" "}
                  <span className="italic text-tan">
                    {booking.options[selected].name.toLowerCase()}
                  </span>{" "}
                  within the day.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="u-link u-eyebrow mt-10 self-start text-bone/50"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={submit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <Reveal className="u-rule-light flex items-baseline justify-between pb-5 pt-6">
                  <span className="u-eyebrow text-bone/35">Select a service</span>
                  <span className="u-eyebrow text-bone/35">From</span>
                </Reveal>

                <RevealGroup stagger={0.07}>
                  {booking.options.map((opt, i) => {
                    const active = i === selected;
                    return (
                      <motion.div key={opt.name} variants={revealItem}>
                        <button
                          type="button"
                          onClick={() => setSelected(i)}
                          aria-pressed={active}
                          className="group relative flex w-full items-center justify-between overflow-hidden border-b border-[color:var(--hairline-light)] py-5 text-left"
                        >
                          {/* Warm wash sweeps in behind the active row. */}
                          <motion.span
                            className="absolute inset-0 -z-0 bg-tan/10"
                            initial={false}
                            animate={{ scaleX: active ? 1 : 0 }}
                            style={{ originX: 0 }}
                            transition={{ duration: 0.7, ease: EASE }}
                          />
                          <span className="relative flex items-center gap-4">
                            <span
                              className={`block h-1.5 w-1.5 rounded-full transition-all duration-500 ${
                                active ? "scale-100 bg-tan" : "scale-75 bg-bone/25"
                              }`}
                            />
                            <span
                              className={`u-display text-[1.35rem] leading-none transition-colors duration-500 ${
                                active ? "text-bone" : "text-bone/55 group-hover:text-bone/90"
                              }`}
                            >
                              {opt.name}
                            </span>
                          </span>
                          <span
                            className={`u-eyebrow relative transition-colors duration-500 ${
                              active ? "text-tan" : "text-bone/35"
                            }`}
                          >
                            {opt.price}
                          </span>
                        </button>
                      </motion.div>
                    );
                  })}
                </RevealGroup>

                <Reveal className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2" delay={0.1}>
                  <Field label="Your name" name="name" placeholder="Ada Nwosu" />
                  <Field
                    label="Phone or email"
                    name="contact"
                    placeholder="hello@lumi.studio"
                  />
                </Reveal>

                <Reveal className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end" delay={0.16}>
                  <div className="flex-1">
                    <Field
                      label="Anything we should know?"
                      name="note"
                      placeholder="Last relaxed in March, mostly wearing it up"
                    />
                  </div>
                  <Magnetic strength={0.18}>
                    <button
                      type="submit"
                      className="u-btn u-eyebrow w-full rounded-full bg-tan px-9 py-4 text-espresso transition-colors duration-500 hover:text-espresso sm:w-auto"
                    >
                      <span className="u-btn-fill bg-bone" aria-hidden />
                      Request booking
                    </button>
                  </Magnetic>
                </Reveal>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/** Hairline input whose rule fills with tan as it gains focus. */
function Field({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder: string;
}) {
  return (
    <label className="group block">
      <span className="u-eyebrow block text-bone/35">{label}</span>
      <span className="relative block">
        <input
          name={name}
          placeholder={placeholder}
          required={name !== "note"}
          className="mt-3 w-full border-b border-[color:var(--hairline-light)] bg-transparent pb-3 text-sm font-light text-bone outline-none placeholder:text-bone/25"
        />
        <span className="pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-tan transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-focus-within:scale-x-100" />
      </span>
    </label>
  );
}
