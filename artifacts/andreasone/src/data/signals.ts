import { LIB_PASSES_URL } from "./siteLinks";
import lib2026Poster from "@assets/lib2026-fmly-bzns.png";

export type SignalType = "thought" | "mix" | "art" | "announcement" | "field-note" | "event" | "takeover";

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
    title: "AFRO RAVE X DISKO AFRIKA — BALI",
    slug: "afro-rave-disko-afrika-bali",
    type: "event",
    date: "NOV 2025",
    excerpt:
      "A late-night collision of Afrobeats, Dancehall, Reggae, and global club energy in Bali. FMLY BZNS joined forces with Disko Afrika and Afrobeats Oakland for a tropical transmission rooted in rhythm, movement, and Afro-diasporic sound system culture.",
    tags: ["EVENT", "GLOBAL", "AFRO-RAVE"],
    published: true,
    displayOrder: 1,
  },
  {
    id: "s02",
    title: "FMLY MXTP SERIES — WEEKLY TRANSMISSIONS BEGIN",
    slug: "fmly-mxtp-series-weekly-transmissions",
    type: "mix",
    date: "JAN 2026",
    excerpt:
      "The launch of the FMLY MXTP series. Weekly DJ mix releases featuring selectors, producers, and cultural voices across the global dance spectrum — streaming every week on YouTube and SoundCloud.",
    audioEmbed:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/andreasone&color=%23cf5d27&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&visual=true",
    externalLink: "https://www.youtube.com/@FMLYBZNS",
    tags: ["MIX", "ARCHIVE", "SOUND"],
    published: true,
    displayOrder: 2,
  },
  {
    id: "s03",
    title: "THE GATHERING 2026 — ANNOUNCED",
    slug: "the-gathering-2026-announced",
    type: "announcement",
    date: "JUL 2026",
    excerpt:
      "The Gathering returns July 31-August 2, 2026 in Hopland, California at Gateway Mendocino. A boutique gathering rooted in music, movement, healing arts, immersive environments, and global dancefloor culture.",
    externalLink: "/experiences",
    tags: ["ANNOUNCEMENT", "EXPERIENCES", "THE-GATHERING"],
    published: true,
    displayOrder: 3,
  },
  {
    id: "s04",
    title: "FMLY BZNS TAKEOVER — CROSSROADS @ LIB",
    slug: "fmly-bzns-crossroads-lib",
    type: "takeover",
    date: "MAY 2026",
    excerpt:
      "FMLY BZNS takes over Crossroads at Lightning in a Bottle on Sunday, May 24. An all-night transmission of Afro-diasporic rhythms, global club sounds, special guests, live performance, and immersive dancefloor energy until sunrise.",
    image: lib2026Poster,
    externalLink: LIB_PASSES_URL,
    tags: ["TAKEOVER", "LIB", "DANCEFLOOR"],
    published: true,
    displayOrder: 4,
  },
  {
    id: "s05",
    title: "SAME SAME BUT DIFFERENT — FMLY BZNS TAKEOVER",
    slug: "same-same-but-different-fmly-bzns-takeover",
    type: "takeover",
    date: "SEPT 2026",
    excerpt:
      "FMLY BZNS takes over Nakey Island at Same Same But Different Festival, September 25-27, 2026 at Lake Perris, California. Daytime beach vibes, tropical energy, and global dancefloor rhythms carried through the shoreline atmosphere of SSBD.",
    tags: ["SSBD", "TAKEOVER", "NAKEY-ISLAND"],
    published: true,
    displayOrder: 5,
  },
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
  event: "EVENT",
  takeover: "TAKEOVER",
};

export const signalTypeColor: Record<SignalType, string> = {
  thought: "#445829",
  mix: "#cf5d27",
  art: "#f6c45a",
  announcement: "#111111",
  "field-note": "#d9decf",
  event: "#445829",
  takeover: "#cf5d27",
};
