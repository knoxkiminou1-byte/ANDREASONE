// SIGNALS DATA FILE
// Signals is the AndreasOne dispatch / blog / feed.
// Add new entries here — each is a transmission from the world.
// Set `published: false` to draft without publishing.
// Lower `displayOrder` = appears first in the feed.
//
// Types: "thought" | "mix" | "art" | "announcement" | "field-note"
//
// TODO: Andreas — add real entries here. Sample starters below as examples.
// TODO: Add real images by importing from @assets/ and setting the image field.
// TODO: Fill in real excerpts, body copy, and audio/external links.

export type SignalType = "thought" | "mix" | "art" | "announcement" | "field-note";

export type Signal = {
  id: string;
  title: string;
  slug: string;
  type: SignalType;
  date: string;
  excerpt: string;
  body?: string;
  image?: string;
  audioEmbed?: string;      // SoundCloud/Mixcloud embed URL
  externalLink?: string;    // Link to full piece, stream, etc.
  tags: string[];
  published: boolean;
  displayOrder: number;
};

export const signals: Signal[] = [
  {
    id: "s01",
    title: "FREQUENCY ALWAYS FINDS ITS ROOM",
    slug: "frequency-finds-its-room",
    type: "thought",
    date: "MAY 2026",
    excerpt:
      "There's a moment in every good set where the room stops being a collection of people and becomes one thing. That's the transmission. That's what we're building toward.",
    body: "There's a moment in every good set where the room stops being a collection of people and becomes one thing. That's the transmission. That's what we're building toward.\n\nRegardless of geography, the frequency is the same. Lagos, Lisbon, Brooklyn, Bali — the room responds the same way when the right record drops. This is why I travel. Not to perform. To confirm.",
    tags: ["sound", "philosophy", "worldbuilding"],
    published: true,
    displayOrder: 1,
  },
  {
    id: "s02",
    title: "FMLY MXTP VOL. 12 — MARCH MEDITATIONS",
    slug: "fmly-mxtp-vol-12",
    type: "mix",
    date: "APR 2026",
    excerpt:
      "84 minutes. Afro house, amapiano, unreleased edits. Built for early mornings and late arrivals. The latest transmission from the archive.",
    audioEmbed:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/andreasone&color=%23cf5d27&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&visual=true",
    tags: ["mix", "sounds", "archive"],
    published: true,
    displayOrder: 2,
  },
  {
    id: "s03",
    title: "HAND STUDIES — NEW WORK",
    slug: "hand-studies-new-work",
    type: "art",
    date: "MAR 2026",
    excerpt:
      "New drawings from the Hand Studies series. The hand as instrument, as symbol, as portal. These images started as warmups and turned into something else.",
    tags: ["art", "archive", "visual"],
    published: true,
    displayOrder: 3,
  },
  {
    id: "s04",
    title: "THE GATHERING 2026 — TICKETS ON SALE",
    slug: "the-gathering-2026",
    type: "announcement",
    date: "FEB 2026",
    excerpt:
      "The Gathering returns — May 24, 2026, Los Angeles. Resident, Downtown. One room. All night. The culture gathers here.",
    externalLink: "/experiences",
    tags: ["announcement", "experiences", "the-gathering"],
    published: true,
    displayOrder: 4,
  },
  {
    id: "s05",
    title: "FIELD NOTES — BALI",
    slug: "field-notes-bali",
    type: "field-note",
    date: "JAN 2026",
    excerpt:
      "You land at 2am and the air is warm and thick with something. By morning it's already working on you. Sound systems here have a different relationship with bass.",
    tags: ["field-note", "travel", "sounds", "bali"],
    published: true,
    displayOrder: 5,
  },
  // TODO: Add new signals below this line
  // {
  //   id: "s06",
  //   title: "YOUR TITLE",
  //   slug: "your-slug",
  //   type: "thought",           // "thought" | "mix" | "art" | "announcement" | "field-note"
  //   date: "JUN 2026",
  //   excerpt: "Short teaser text shown in the feed.",
  //   body: "Full body text (optional). Shown on detail page if routing supports it.",
  //   image: undefined,          // import image and reference here
  //   audioEmbed: undefined,     // SoundCloud/Mixcloud embed iframe src
  //   externalLink: undefined,   // External URL or internal route
  //   tags: ["tag1", "tag2"],
  //   published: false,          // Set to true when ready to publish
  //   displayOrder: 6,
  // },
];

export const publishedSignals = signals
  .filter(s => s.published)
  .sort((a, b) => a.displayOrder - b.displayOrder);

export const signalTypeLabel: Record<SignalType, string> = {
  thought: "THOUGHT",
  mix: "MIX",
  art: "ART",
  announcement: "ANNOUNCEMENT",
  "field-note": "FIELD NOTE",
};

export const signalTypeColor: Record<SignalType, string> = {
  thought: "#445829",
  mix: "#cf5d27",
  art: "#f6c45a",
  announcement: "#111111",
  "field-note": "#d9decf",
};
