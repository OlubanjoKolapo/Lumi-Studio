# Yenissar Beauty Center

Marketing site for a fictional two-chair hair and beauty studio, built from a Figma
comp. Next.js App Router, Tailwind v4, Framer Motion, Lenis.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Pages

| Route | What's on it |
| --- | --- |
| `/` | Hero, studio statement, service preview, gallery preview, booking, reviews |
| `/services` | Full menu as alternating detail rows, the four-step process, reviews |
| `/gallery` | All 15 photos with a category filter (Braids / Cornrows / Twists / Locs / Updos) |
| `/contact` | Booking form, studio details, FAQ accordion |

`Nav` and `Footer` live in the root layout, so every page carries the same
chrome. Inner pages all open with `PageHeader`, which reuses the home page's
rhythm — hairline, numbered eyebrow, masked display lines — so navigating feels
like moving down one document rather than between separate sites.

## Layout

| Path | What's in it |
| --- | --- |
| `app/layout.tsx` | Fonts (Cormorant Garamond + Inter), smooth scroll, nav, footer, intro curtain |
| `app/globals.css` | Palette, type primitives, and the CSS-only hover effects (`u-btn`, `u-link`, `u-zoom`) |
| `lib/content.ts` | All copy and imagery — the only file you touch to change wording or photography |
| `components/` | One file per section, plus `motion/` for the shared animation primitives |

The intro curtain only plays on a cold load of `/` — landing straight on an
inner page shouldn't be held up by a brand moment. `ScrollReset` snaps Lenis
back to the top on navigation, which it won't do on its own.

## Motion primitives (`components/motion/`)

- **`SmoothScroll`** — Lenis instance shared through context. `useScrollTo()` routes
  anchor navigation through it; both no-op under `prefers-reduced-motion`.
- **`MaskLines`** — headline type rising line-by-line out of an overflow-hidden box.
- **`RevealImage`** — clip-path curtain lift plus an over-scale that settles, with
  optional scroll-linked parallax.
- **`Reveal` / `RevealGroup`** — the baseline lift-and-fade, solo or staggered.
- **`Magnetic`** — buttons that lean toward the cursor and spring back.
- **`Counter`** — the studio stats counting up once on entry.

Everything shares one easing curve (`EASE`, a cubic out-expo) so the page reads as a
single system.

## Photography

Real client work, in `public/images/` (originals kept in `assets/`). They're phone
photos — portrait or square — so every frame in the layout is portrait or square
too. Each entry in `lib/content.ts` carries a `pos` class (`object-[50%_38%]`)
that sets where the crop sits; adjust that rather than the frame when a subject
sits high or low.

Everything renders through `next/image` with `fill`, so the 2048px originals are
resized and served as WebP — the whole page pulls ~880 KB of imagery instead of
the ~4 MB of source files.

Three of the fifteen are unused (`braids-knotless-back`, `braiding-in-progress`,
`knotless-curly-overhead`) — each has a TV or clutter in frame that no crop
removes. Swap them in via `lib/content.ts` if you'd rather have them.

## Notes

- The booking form is client-side only; submitting swaps in a confirmation. Wire
  `submit()` in `components/Booking.tsx` to a real endpoint before launch.
- Copy is placeholder: the address, phone, prices and reviews are invented. The
  service names and durations were written to match the photography.
