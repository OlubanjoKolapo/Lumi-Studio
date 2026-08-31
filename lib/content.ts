import { WHATSAPP_DISPLAY } from "./whatsapp";

/**
 * All page copy + imagery in one place so the sections stay presentational.
 * Photography lives in `public/images/` — real client work, mostly shot on a
 * phone in portrait, so every frame in the layout is portrait or square.
 */

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

/** Banner copy for the inner pages — same shape so they render identically. */
export const pageHeaders = {
  services: {
    index: "(02)",
    eyebrow: "Services",
    lines: ["Nine signature styles,", "done properly."],
    lede: "Everything we offer, what it costs and how long you'll be in the chair. Transparent CAD pricing — length, density and parting size, discussed upfront before we begin.",
    meta: ["9 services", "Consultation included", "CAD Pricing"],
  },
  gallery: {
    index: "(03)",
    eyebrow: "Gallery",
    lines: ["Work from", "the chair."],
    lede: "Work straight from the chair, alongside reference shots for the styles we install most. Filter by what you're considering.",
    meta: ["Shot in-studio", "Updated weekly"],
  },
  contact: {
    index: "(04)",
    eyebrow: "Contact",
    lines: ["Reserve", "your chair."],
    lede: "Tell us what you're after and we'll come back within a day with two or three times that work. Specify any hair or materials you have or need provided.",
    meta: ["Reply within 24 hrs", "Tue – Sat"],
  },
};

export const hero = {
  eyebrow: "Yenissar Beauty Center",
  lines: [
    { text: "Healthy Hair." },
    { text: "Beautiful", italic: true },
    { text: "Confidence." },
  ],
  body: "Braids, twists, weaves and locs installed with tension your edges can live with — and a scalp that still feels like yours in week six.",
  meta: ["Est. 2014", "Ajax · Ontario"],
  image: "/images/braids-waist-warm.jpg",
};

export const studio = {
  eyebrow: "The studio",
  statement:
    "Beauty is personal. Every client deserves a hair experience designed around their unique style, texture and confidence.",
  columns: [
    "We keep it to one client at a time on purpose. No double-booking, no rushing an install that needs six hours to sit right, and enough room in the day to actually listen first.",
    "Every appointment opens with a look at your scalp and edges and closes with a plan — how long to keep the style in, how to wrap it at night, and when to come back.",
  ],
  stats: [
    { value: "11", suffix: "yrs", label: "Braiding professionally" },
    { value: "4.9", suffix: "/5", label: "From 380 reviews" },
    { value: "1", suffix: "at a time", label: "Never double-booked" },
  ],
  caption: "Fig. 01 — Body wave install, finished",
  image: "/images/sewin-bodywave-front.jpg",
  imagePos: "object-[50%_28%]",
};

export const services = {
  eyebrow: "Services",
  heading: ["Nine signature styles,", "done properly."],
  note: "Each service is performed to the highest studio standard. All prices are listed clearly in CAD. Length, density, and parting sizes are confirmed before we begin.",
  items: [
    {
      index: "01",
      title: "Knotless Big Long",
      duration: "3–4 hrs",
      body: "Large, weightless knotless partings with waist-length extension for maximum comfort, fast install, and scalp protection.",
      price: "CAD 100",
      includes: [
        "Scalp prep and wash included",
        "Large tension-free partings",
        "Waist-length extension hair provided",
        "Edge check before you leave",
      ],
      image: "/images/knotless-big-long.jpg",
      pos: "object-[50%_35%]",
      alt: "Waist-length big knotless braids installed in clean studio setting",
    },
    {
      index: "02",
      title: "Knotless Medium",
      duration: "4–5 hrs",
      body: "Classic medium knotless partings offering natural flow, root flexibility, and long-lasting protective wear.",
      price: "CAD 180 – 200",
      includes: [
        "Consultation and scalp check",
        "Wash and blow-dry included",
        "Feed-in extensions included",
        "Tension-free root feed-in",
      ],
      image: "/images/knotless-medium.jpg",
      pos: "object-[50%_35%]",
      alt: "Medium knotless braids in luxury studio setting",
    },
    {
      index: "03",
      title: "Knotless Small Long",
      duration: "5–7 hrs",
      body: "Intricate small knotless partings extending long, designed for maximum density, movement, and durability.",
      price: "CAD 300",
      includes: [
        "Detailed scalp & edge consultation",
        "Clarifying wash & deep condition",
        "Full waist-length small braids",
        "Night-wrap aftercare walkthrough",
      ],
      image: "/images/knotless-small-long.jpg",
      pos: "object-[50%_35%]",
      alt: "Small long knotless braids photographed in studio",
    },
    {
      index: "04",
      title: "Cornrows & Feed-ins",
      duration: "2–4 hrs",
      body: "Custom geometric feed-in cornrows with razor-clean lines and lightweight edge control.",
      price: "CAD 150",
      includes: [
        "Pattern mapped with client",
        "Wash and blow-dry included",
        "Feed-in extensions provided",
        "Edge control kept light",
      ],
      image: "/images/cornrows-feedin.jpg",
      pos: "object-[50%_35%]",
      alt: "Precision feed-in cornrows in modern salon",
    },
    {
      index: "05",
      title: "Medium Cornrows",
      duration: "1.5–3 hrs",
      body: "Clean medium-sized straight-backs or stitch cornrows built to hold their shape for weeks.",
      price: "CAD 100",
      includes: [
        "Custom sectioning & pattern",
        "Wash & blow-dry included",
        "Scalp hydration & oiled roots",
        "Edge & tension check",
      ],
      image: "/images/medium-cornrows.jpg",
      pos: "object-[50%_35%]",
      alt: "Medium straight-back stitch cornrows in luxury salon",
    },
    {
      index: "06",
      title: "Weaving / Sew-in",
      duration: "3–4 hrs",
      body: "Full or partial sew-in weave installed over a flat protective cornrow base with seamless blending.",
      price: "CAD 150",
      includes: [
        "Protective braiding base & scalp oil",
        "Net placement if desired",
        "Bundles sewn & styled seamlessly",
        "Custom blending & face-framing trim",
      ],
      image: "/images/weaving-sewin.jpg",
      pos: "object-[50%_35%]",
      alt: "Sleek body wave sew-in weave styling",
    },
    {
      index: "07",
      title: "Crochet Braids",
      duration: "2–3 hrs",
      body: "Lightweight boho curls, twists, or locs installed via cornrow loop technique for versatile fullness.",
      price: "CAD 150",
      includes: [
        "Cornrow foundation base",
        "Crochet loop installation",
        "Volume shaping & trim",
        "Quick take-down advice",
      ],
      image: "/images/crochet-studio.png",
      pos: "object-[50%_35%]",
      alt: "Boho crochet curls in clean studio backdrop",
    },
    {
      index: "08",
      title: "Dreadlocks (Locs)",
      duration: "3–5 hrs",
      body: "Starter locs installation, full palm-roll retwist, interlocking, and clarifying scalp detox treatment.",
      price: "CAD 400",
      includes: [
        "Scalp detoxification wash",
        "Precision palm-rolling / retwist",
        "Natural locking oil application",
        "Drying & style finish",
      ],
      image: "/images/dreadlocks-studio.png",
      pos: "object-[50%_35%]",
      alt: "Manicured dreadlocks locs in aesthetic studio",
    },
    {
      index: "09",
      title: "Sisterlocks",
      duration: "4–6 hrs",
      body: "Micro-loc interlocking technique tailored for natural hair texture, maximum flexibility, and longevity.",
      price: "CAD 250",
      includes: [
        "Grid sectioning & pattern mapping",
        "Micro interlocking technique",
        "Scalp soothing treatment",
        "Maintenance schedule walkthrough",
      ],
      image: "/images/sisterlocks-studio.png",
      pos: "object-[50%_35%]",
      alt: "Fine sisterlocks styling in clean studio setting",
    },
  ],
};

export const work = {
  eyebrow: "Gallery",
  heading: "Work from the chair.",
  note: "Shot in-studio at the end of the appointment.",
  items: [
    {
      caption: "Knotless Big Long",
      image: "/images/knotless-big-long.jpg",
      pos: "object-[50%_35%]",
      alt: "Knotless big long braids",
    },
    {
      caption: "Knotless Medium",
      image: "/images/knotless-medium.jpg",
      pos: "object-[50%_35%]",
      alt: "Knotless medium braids",
    },
    {
      caption: "Bodywave Sew-in Weave",
      image: "/images/weaving-sewin.jpg",
      pos: "object-[50%_35%]",
      alt: "Bodywave sew-in weave",
    },
    {
      caption: "Cornrows & Feed-ins",
      image: "/images/cornrows-feedin.jpg",
      pos: "object-[50%_35%]",
      alt: "Feed-in cornrows",
    },
    {
      caption: "Sisterlocks",
      image: "/images/sisterlocks-studio.png",
      pos: "object-[50%_35%]",
      alt: "Sisterlocks styling",
    },
  ],
};

/** How an appointment runs — shown on the services page. */
export const process = [
  {
    step: "01",
    title: "Consultation",
    body: "We look at your scalp, your edges and what you had in last, then agree on a size and length your hair can actually carry.",
  },
  {
    step: "02",
    title: "Wash & prep",
    body: "Clarifying wash, deep condition and a full blow-dry. We never install on hair that hasn't been properly prepped.",
  },
  {
    step: "03",
    title: "The install",
    body: "One client at a time, no double-booking. Say something the moment a section feels tight — we'd rather redo it now.",
  },
  {
    step: "04",
    title: "Aftercare",
    body: "How to wrap it at night, what to use on your scalp, and roughly when to come back before it starts pulling.",
  },
];

/**
 * Every photo we have, grouped for the gallery page filter. Tiles all render
 * 4:5 so the grid stays flush — `pos` is what keeps each subject in frame.
 */
export const galleryAll = [
  { src: "/images/knotless-big-long.jpg", caption: "Knotless Big Long", category: "Braids", pos: "object-[50%_35%]" },
  { src: "/images/knotless-medium.jpg", caption: "Knotless Medium", category: "Braids", pos: "object-[50%_35%]" },
  { src: "/images/knotless-small-long.jpg", caption: "Knotless Small Long", category: "Braids", pos: "object-[50%_35%]" },
  { src: "/images/weaving-sewin.jpg", caption: "Bodywave Sew-in Weave", category: "Weaving", pos: "object-[50%_35%]" },
  { src: "/images/cornrows-feedin.jpg", caption: "Feed-in Cornrows", category: "Cornrows", pos: "object-[50%_35%]" },
  { src: "/images/medium-cornrows.jpg", caption: "Medium Cornrows", category: "Cornrows", pos: "object-[50%_35%]" },
  { src: "/images/crochet-studio.png", caption: "Boho Crochet Braids", category: "Crochet", pos: "object-[50%_35%]" },
  { src: "/images/dreadlocks-studio.png", caption: "Dreadlocks (Locs)", category: "Locs", pos: "object-[50%_35%]" },
  { src: "/images/sisterlocks-studio.png", caption: "Sisterlocks Styling", category: "Locs", pos: "object-[50%_35%]" },
  { src: "/images/updo-cowrie-back.jpg", caption: "Braided updo — cowrie", category: "Updos", pos: "object-[50%_18%]" },
  { src: "/images/twists-honey-night.jpg", caption: "Honey twists", category: "Twists", pos: "object-[50%_45%]" },
  { src: "/images/twists-passion-pony.jpg", caption: "Passion twists, pulled up", category: "Twists", pos: "object-[45%_45%]" },
];

export const galleryFilters = ["All", "Braids", "Cornrows", "Weaving", "Crochet", "Twists", "Locs", "Updos"];

/** Contact-page questions, asked often enough to be worth answering up front. */
export const faqs = [
  {
    q: "Do I need to bring my own hair?",
    a: "No — hair is included in every braiding and twisting price. If you'd rather bring your own hair, weaves, or extensions, let us know in your booking request and we'll take it off the total.",
  },
  {
    q: "How should I come in?",
    a: "Freshly washed is fine but not required — a wash and blow-dry is part of the appointment. Please come with your hair detangled.",
  },
  {
    q: "How long will my style last?",
    a: "Six to eight weeks for knotless braids, weaves and locs, four to six for cornrows. Past that you're asking a lot of your edges, and we'd rather see you back.",
  },
  {
    q: "What if it feels too tight?",
    a: "Say so while you're still in the chair. We'll take the section down and redo it — that's not a favour, it's the job.",
  },
  {
    q: "Do you take children?",
    a: "Yes, from about six years old, and we keep those appointments to the shorter styles so nobody has to sit for five hours.",
  },
];

export const booking = {
  eyebrow: "Appointments",
  heading: "Reserve your chair.",
  body: "Select your desired service, pick an available day, and let us know if you're bringing materials (hair, weaves, extensions) or need them provided.",
  details: [
    { label: "Studio", value: "8 View St, Ajax, ON" },
    { label: "Hours", value: "Tue – Sat, 9:00 – 19:00" },
    { label: "WhatsApp", value: WHATSAPP_DISPLAY },
    { label: "Email", value: "nimetyyeni@gmail.com" },
  ],
  options: [
    { name: "Knotless Big Long", price: "CAD 100" },
    { name: "Knotless Medium", price: "CAD 180 – 200" },
    { name: "Knotless Small Long", price: "CAD 300" },
    { name: "Cornrows & Feed-ins", price: "CAD 150" },
    { name: "Medium Cornrows", price: "CAD 100" },
    { name: "Weaving / Sew-in", price: "CAD 150" },
    { name: "Crochet Braids", price: "CAD 150" },
    { name: "Dreadlocks (Locs)", price: "CAD 400" },
    { name: "Sisterlocks", price: "CAD 250" },
  ],
};

export const reviews = {
  eyebrow: "Kind words",
  items: [
    {
      quote:
        "Braids that didn't give me a headache on night one. That alone is worth the drive across the city.",
      name: "Simi A.",
      service: "Knotless braids",
    },
    {
      quote:
        "She checked my edges before she touched anything and talked me out of the size I asked for. She was right.",
      name: "Adaeze O.",
      service: "Cornrows & feed-ins",
    },
    {
      quote:
        "Six weeks in and the parting still looks clean. I've never had an install last like this.",
      name: "Ruth M.",
      service: "Passion twists",
    },
  ],
};

export const footer = {
  tagline: "Healthy Hair. Beautiful Confidence.",
  columns: [
    {
      title: "Visit",
      items: ["8 View St", "Ajax, ON", "Canada"],
    },
    {
      title: "Hours",
      items: [
        "Tue – Fri · 9:00 – 19:00",
        "Saturday · 8:00 – 18:00",
        "Sun & Mon · Closed",
      ],
    },
    {
      title: "Follow",
      items: ["Instagram", "TikTok", "Pinterest"],
      links: true,
    },
  ],
};
