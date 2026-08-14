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
    lines: ["Five things,", "done properly."],
    lede: "Everything we offer, what it costs and how long you'll be in the chair. Prices are starting points — length, density and parting size move them, and we'll always tell you before we begin.",
    meta: ["5 services", "Consultation included"],
  },
  gallery: {
    index: "(03)",
    eyebrow: "Gallery",
    lines: ["Work from", "the chair."],
    lede: "Every photo here is a real client at the end of a real appointment. No filters, no retouching, no stock. Filter by the style you're considering.",
    meta: ["Shot in-studio", "Updated weekly"],
  },
  contact: {
    index: "(04)",
    eyebrow: "Contact",
    lines: ["Reserve", "your chair."],
    lede: "Tell us what you're after and we'll come back within a day with two or three times that work. New clients, add a note about your last install — it saves us both a step.",
    meta: ["Reply within 24 hrs", "Tue – Sat"],
  },
};

export const hero = {
  eyebrow: "Lumi Hair & Beauty Studio",
  lines: [
    { text: "Healthy Hair." },
    { text: "Beautiful", italic: true },
    { text: "Confidence." },
  ],
  body: "Braids, twists and locs installed with tension your edges can live with — and a scalp that still feels like yours in week six.",
  meta: ["Est. 2014", "Lagos · Victoria Island"],
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
  caption: "Fig. 01 — Cornrow updo, finished",
  image: "/images/updo-cowrie-side.jpg",
  imagePos: "object-[50%_38%]",
};

export const services = {
  eyebrow: "Services",
  heading: ["A short menu,", "done properly."],
  note: "Five things, done to a standard we'd put our name on. Prices are starting points — length, density and parting size move them, and we'll always tell you before we begin.",
  items: [
    {
      index: "01",
      title: "Knotless Braids",
      duration: "4–6 hrs",
      body: "Feed-in from the root so there's no knot pulling at your scalp. Straight ends or curly, any length you can sit for.",
      price: "From ₦40,000",
      includes: [
        "Consultation and scalp check",
        "Wash and blow-dry before the install",
        "Hair provided, or bring your own",
        "Edge and tension check before you leave",
      ],
      image: "/images/braids-waist-white.jpg",
      pos: "object-[52%_42%]",
      alt: "Waist-length knotless braids with clean, even partings",
    },
    {
      index: "02",
      title: "Cornrows & Feed-ins",
      duration: "2–4 hrs",
      body: "Straight-backs, side parts and patterned feed-ins with clean, even sections that hold their shape all week.",
      price: "From ₦22,000",
      includes: [
        "Pattern drawn with you before we start",
        "Wash and blow-dry included",
        "Feed-in extensions if you want length",
        "Edge control kept light on purpose",
      ],
      image: "/images/cornrows-feedin-top.jpg",
      pos: "object-[50%_55%]",
      alt: "Neat straight-back cornrows viewed from above",
    },
    {
      index: "03",
      title: "Braided Updos",
      duration: "3–5 hrs",
      body: "Cornrowed sides gathered into a braided crown, finished with cowrie shells or cuffs if you want them.",
      price: "From ₦45,000",
      includes: [
        "Style mapped to the occasion",
        "Cowrie shells, cuffs or beads included",
        "Cornrowed base built to hold all day",
        "Take-down guidance for afterwards",
      ],
      image: "/images/updo-cowrie-back.jpg",
      pos: "object-[50%_18%]",
      alt: "Braided updo with cowrie shell detailing, seen from behind",
    },
    {
      index: "04",
      title: "Passion Twists",
      duration: "4–6 hrs",
      body: "Soft, springy twists with plenty of movement — lighter on the scalp than braids and quicker to take down.",
      price: "From ₦38,000",
      includes: [
        "Consultation and scalp check",
        "Water-wave hair provided",
        "Sealed ends so they hold their curl",
        "Night-wrapping walkthrough",
      ],
      image: "/images/twists-passion-side.jpg",
      pos: "object-[50%_45%]",
      alt: "Honey-toned passion twists gathered into a high ponytail",
    },
    {
      index: "05",
      title: "Locs & Natural Styling",
      duration: "1–3 hrs",
      body: "Starter locs, retwists and interlocking, plus wash-and-style for anyone taking a break between installs.",
      price: "From ₦18,000",
      includes: [
        "Retwist, interlock or starter install",
        "Clarifying wash and scalp treatment",
        "Honest advice on timing your next visit",
        "Wash-and-style if you're between installs",
      ],
      image: "/images/locs-starter-side.jpg",
      pos: "object-[50%_40%]",
      alt: "Starter locs on natural hair, side profile",
    },
  ],
};

export const work = {
  eyebrow: "Gallery",
  heading: "Work from the chair.",
  note: "No filters, no retouching — shot at the end of the appointment.",
  items: [
    {
      caption: "Knotless braids — curled ends",
      image: "/images/knotless-curly-top.jpg",
      pos: "object-[50%_55%]",
      alt: "A full head of knotless braids finished with curled ends",
    },
    {
      caption: "Honey twists",
      image: "/images/twists-honey-night.jpg",
      pos: "object-[50%_45%]",
      alt: "Honey-blonde twists with curled ends, photographed outdoors",
    },
    {
      caption: "Passion twists, pulled up",
      image: "/images/twists-passion-pony.jpg",
      pos: "object-[45%_45%]",
      alt: "Passion twists gathered into a high ponytail",
    },
    {
      caption: "Medium knotless — shoulder",
      image: "/images/braids-medium-side.jpg",
      pos: "object-[45%_45%]",
      alt: "Medium knotless braids falling to the shoulder, side profile",
    },
    {
      caption: "Microlocs, retwisted",
      image: "/images/locs-long-back.jpg",
      pos: "object-[50%_40%]",
      alt: "Long microlocs falling past the shoulders after a retwist",
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
  { src: "/images/braids-waist-white.jpg", caption: "Knotless braids — waist", category: "Braids", pos: "object-[52%_42%]" },
  { src: "/images/knotless-curly-top.jpg", caption: "Knotless with curled ends", category: "Braids", pos: "object-[50%_55%]" },
  { src: "/images/twists-honey-night.jpg", caption: "Honey twists", category: "Twists", pos: "object-[50%_45%]" },
  { src: "/images/updo-cowrie-back.jpg", caption: "Braided updo — cowrie", category: "Updos", pos: "object-[50%_18%]" },
  { src: "/images/braids-medium-side.jpg", caption: "Medium knotless — shoulder", category: "Braids", pos: "object-[45%_45%]" },
  { src: "/images/cornrows-feedin-top.jpg", caption: "Straight-back cornrows", category: "Cornrows", pos: "object-[50%_55%]" },
  { src: "/images/locs-long-back.jpg", caption: "Microlocs, retwisted", category: "Locs", pos: "object-[50%_40%]" },
  { src: "/images/twists-passion-pony.jpg", caption: "Passion twists, pulled up", category: "Twists", pos: "object-[45%_45%]" },
  { src: "/images/updo-cowrie-side.jpg", caption: "Cornrow updo — side", category: "Updos", pos: "object-[50%_38%]" },
  { src: "/images/braids-waist-warm.jpg", caption: "Waist-length knotless", category: "Braids", pos: "object-[50%_38%]" },
  { src: "/images/locs-starter-side.jpg", caption: "Starter locs", category: "Locs", pos: "object-[50%_40%]" },
  { src: "/images/twists-passion-side.jpg", caption: "Passion twists — side", category: "Twists", pos: "object-[50%_45%]" },
  { src: "/images/braids-knotless-back.jpg", caption: "Knotless, curled ends", category: "Braids", pos: "object-[50%_78%]" },
  { src: "/images/knotless-curly-overhead.jpg", caption: "Knotless — overhead", category: "Braids", pos: "object-[50%_55%]" },
  { src: "/images/braiding-in-progress.jpg", caption: "Mid-install", category: "Cornrows", pos: "object-[62%_50%]" },
];

export const galleryFilters = ["All", "Braids", "Cornrows", "Twists", "Locs", "Updos"];

/** Contact-page questions, asked often enough to be worth answering up front. */
export const faqs = [
  {
    q: "Do I need to bring my own hair?",
    a: "No — hair is included in every braiding and twisting price. If you'd rather use a specific brand or colour, bring it and we'll take it off the total.",
  },
  {
    q: "How should I come in?",
    a: "Freshly washed is fine but not required — a wash and blow-dry is part of the appointment. Please come with it detangled and out of any old install.",
  },
  {
    q: "How long will my style last?",
    a: "Six to eight weeks for braids and twists, four to six for cornrows. Past that you're asking a lot of your edges, and we'd rather see you back.",
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
  body: "Tell us what you're after and we'll come back within a day with two or three times that work. New clients, add a note about your last install — it saves us both a step.",
  details: [
    { label: "Studio", value: "14 Karimu Kotun St, Victoria Island" },
    { label: "Hours", value: "Tue – Sat, 9:00 – 19:00" },
    { label: "Phone", value: "+234 802 114 9077" },
    { label: "Email", value: "hello@lumi.studio" },
  ],
  options: [
    { name: "Knotless Braids", price: "From ₦40,000" },
    { name: "Cornrows & Feed-ins", price: "From ₦22,000" },
    { name: "Braided Updos", price: "From ₦45,000" },
    { name: "Passion Twists", price: "From ₦38,000" },
    { name: "Locs & Natural Styling", price: "From ₦18,000" },
  ],
};

export const reviews = {
  eyebrow: "Kind words",
  items: [
    {
      quote:
        "Braids that didn't give me a headache on night one. That alone is worth the drive across the island.",
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
      items: ["14 Karimu Kotun St", "Victoria Island, Lagos", "Nigeria"],
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
