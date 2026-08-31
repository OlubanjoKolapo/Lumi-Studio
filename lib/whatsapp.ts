/**
 * Booking handoff. There's no backend — the form composes a message and hands
 * the client to WhatsApp, where the conversation actually happens.
 */

/** Digits only, country code first. wa.me rejects +, spaces and brackets. */
export const WHATSAPP_NUMBER = "14376674622";

/** Shown to humans; keep in sync with WHATSAPP_NUMBER above. */
export const WHATSAPP_DISPLAY = "+1 (437) 667-4622";

/** Days the studio is closed, as `Date.getDay()` values. */
const CLOSED_DAYS = [0, 1]; // Sunday, Monday

export type OpenDay = {
  /** Machine-readable, e.g. "2026-08-18". */
  value: string;
  /** Chip label, e.g. "Tue, Aug 18". */
  short: string;
  /** Message text, e.g. "Tuesday, August 18, 2026". */
  long: string;
};

/**
 * The next `count` days the studio is actually open, starting tomorrow.
 * Call this on the client only — it reads the local clock, so running it
 * during SSR would risk a hydration mismatch.
 */
export function buildOpenDays(count = 12): OpenDay[] {
  const days: OpenDay[] = [];
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);

  while (days.length < count) {
    cursor.setDate(cursor.getDate() + 1);
    if (CLOSED_DAYS.includes(cursor.getDay())) continue;

    days.push({
      value: `${cursor.getFullYear()}-${String(cursor.getMonth() + 1).padStart(2, "0")}-${String(
        cursor.getDate()
      ).padStart(2, "0")}`,
      short: cursor.toLocaleDateString("en-CA", {
        weekday: "short",
        day: "numeric",
        month: "short",
      }),
      long: cursor.toLocaleDateString("en-CA", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    });
  }

  return days;
}

export type BookingRequest = {
  service: string;
  price?: string;
  day?: string;
  name?: string;
  materials?: string;
  note?: string;
};

/**
 * Builds the wa.me deep link. Works on desktop web, iOS and Android — WhatsApp
 * picks up `text` as the prefilled draft, which the client still has to send.
 */
export function buildWhatsAppUrl({ service, price, day, name, materials, note }: BookingRequest) {
  const lines = [
    day
      ? `Hello Yenissar Beauty Center! I'd like to book a slot for ${day}.`
      : "Hello Yenissar Beauty Center! I'd like to book a slot.",
    "",
    `Service: ${service}${price ? ` (${price})` : ""}`,
  ];

  if (name?.trim()) lines.push(`Name: ${name.trim()}`);
  if (materials?.trim()) lines.push(`Materials (hair/weaves): ${materials.trim()}`);
  if (note?.trim()) lines.push(`Note: ${note.trim()}`);

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}
