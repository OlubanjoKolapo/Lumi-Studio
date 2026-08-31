"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, type FormEvent } from "react";
import { booking } from "@/lib/content";
import { buildOpenDays, buildWhatsAppUrl, type OpenDay } from "@/lib/whatsapp";
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
  const [days, setDays] = useState<OpenDay[]>([]);
  const [day, setDay] = useState<OpenDay | null>(null);
  const [sent, setSent] = useState(false);
  const [waUrl, setWaUrl] = useState("");

  // Built after mount: it reads the local clock, so rendering it on the server
  // would risk a hydration mismatch when the two disagree on today's date.
  useEffect(() => {
    const open = buildOpenDays();
    setDays(open);
    setDay(open[0] ?? null);
  }, []);

  // No backend — compose the message and hand off to WhatsApp.
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const url = buildWhatsAppUrl({
      service: booking.options[selected].name,
      price: booking.options[selected].price,
      day: day?.long,
      name: String(data.get("name") ?? ""),
      materials: String(data.get("materials") ?? ""),
      note: String(data.get("note") ?? ""),
    });

    setWaUrl(url);
    setSent(true);
    // Opened from the submit gesture, so pop-up blockers let it through.
    window.open(url, "_blank", "noopener,noreferrer");
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
                <span className="u-eyebrow text-tan">WhatsApp opened</span>
                <p className="u-display mt-6 text-[clamp(1.6rem,3vw,2.4rem)] leading-tight">
                  Your message is drafted for{" "}
                  <span className="italic text-tan">
                    {booking.options[selected].name.toLowerCase()}
                  </span>
                  {day ? ` on ${day.long}` : ""} — hit send in WhatsApp and
                  we&apos;ll confirm within the day.
                </p>

                {/* Pop-up blockers and desktops without WhatsApp installed both
                    land here, so always offer the link directly. */}
                <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="u-link u-eyebrow text-tan"
                  >
                    Didn&apos;t open? Tap here
                  </a>
                  <button
                    onClick={() => setSent(false)}
                    className="u-link u-eyebrow text-bone/50"
                  >
                    Change my selection
                  </button>
                </div>
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

                <Reveal className="mt-10" delay={0.08}>
                  <div className="flex items-baseline justify-between">
                    <span className="u-eyebrow text-bone/35">Preferred day</span>
                    <span className="u-eyebrow text-bone/25">Closed Sun & Mon</span>
                  </div>

                  {/* Horizontal rail — closed days are never generated, so
                      there's nothing invalid to pick. */}
                  <div className="-mx-[var(--gutter)] mt-5 overflow-x-auto px-[var(--gutter)] pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    <div className="flex gap-2.5">
                      {days.map((d) => {
                        const on = d.value === day?.value;
                        return (
                          <button
                            key={d.value}
                            type="button"
                            onClick={() => setDay(d)}
                            aria-pressed={on}
                            /* Deliberately not a shared-layout `layoutId` pill:
                               inside AnimatePresence mode="wait", an animated
                               layout projection stalls the form's exit and the
                               confirmation never mounts. */
                            className={`u-eyebrow shrink-0 whitespace-nowrap rounded-full border px-5 py-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                              on
                                ? "border-tan bg-tan text-espresso"
                                : "border-[color:var(--hairline-light)] text-bone/50 hover:border-bone/30 hover:text-bone"
                            }`}
                          >
                            {d.short}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </Reveal>

                <Reveal className="mt-10" delay={0.12}>
                  <Field label="Your name" name="name" placeholder="Ada Nwosu" />
                </Reveal>

                <Reveal className="mt-10" delay={0.14}>
                  <Field
                    label="Materials needed or bringing (hair, weaves, etc.)"
                    name="materials"
                    placeholder="e.g. Bringing 3 packs Expression 24-inch or need hair provided"
                  />
                </Reveal>

                <Reveal className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end" delay={0.16}>
                  <div className="flex-1">
                    <Field
                      label="Anything else we should know?"
                      name="note"
                      placeholder="Last relaxed in March, sensitive scalp"
                    />
                  </div>
                  <Magnetic strength={0.18}>
                    <button
                      type="submit"
                      className="u-btn u-eyebrow flex w-full items-center justify-center gap-2.5 rounded-full bg-tan px-9 py-4 text-espresso transition-colors duration-500 hover:text-espresso sm:w-auto"
                    >
                      <span className="u-btn-fill bg-bone" aria-hidden />
                      <WhatsAppMark />
                      Send on WhatsApp
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

/** WhatsApp glyph, inheriting text colour so it works on any button state. */
export function WhatsAppMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={`h-[1.05em] w-[1.05em] ${className}`}
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.41a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.25-.85.84-.85 2.04s.87 2.37 1 2.53c.12.16 1.71 2.61 4.15 3.66.58.25 1.03.4 1.39.51.58.19 1.11.16 1.53.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
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
