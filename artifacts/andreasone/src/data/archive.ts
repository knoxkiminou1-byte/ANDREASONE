export type ArchiveItem = {
  id: string;
  title: string;
  image: string;
  alt: string;
  year?: string;
  medium?: string;
  series: string;
};

export type ArchiveCollection = {
  slug: string;
  title: string;
  cover: string;
  alt: string;
  year?: string;
  description?: string;
  items: ArchiveItem[];
};

import sunkissed from "@assets/archive/goddess/sunkissed.jpg";
import exploration from "@assets/archive/goddess/exploration.jpg";
import giverOfLife from "@assets/archive/goddess/giver-of-life.jpg";
import godessBody from "@assets/archive/goddess/godess-body.jpg";
import kickBack from "@assets/archive/goddess/kick-back.jpg";
import muse from "@assets/archive/goddess/muse.jpg";
import naturalWine2 from "@assets/archive/goddess/natural-wine-2.jpg";
import naturalWine from "@assets/archive/goddess/natural-wine.jpg";
import relaxation from "@assets/archive/goddess/relaxation.jpg";
import thisLife from "@assets/archive/goddess/this-life.jpg";
import timeToHeal from "@assets/archive/goddess/time-to-heal.jpg";

import swingALing from "@assets/archive/illustrations/swing-a-ling.jpg";
import aPlaceIveSeen from "@assets/archive/illustrations/a-place-ive-seen.jpg";
import awakeEye from "@assets/archive/illustrations/awake-eye.jpg";
import awakeHand from "@assets/archive/illustrations/awake-hand.jpg";
import desertSky from "@assets/archive/illustrations/desert-sky.jpg";
import mazunteMorning from "@assets/archive/illustrations/mazunte-morning.jpg";
import meditation from "@assets/archive/illustrations/meditation.png";
import muscleMemory from "@assets/archive/illustrations/muscle-memory.jpg";
import oaxaca from "@assets/archive/illustrations/oaxaca.jpg";
import payam from "@assets/archive/illustrations/payam.jpg";
import perfection from "@assets/archive/illustrations/perfection.jpg";
import rootsMan from "@assets/archive/illustrations/roots-man.png";
import soules from "@assets/archive/illustrations/soules.jpg";
import source from "@assets/archive/illustrations/source-zero.jpeg";
import vision from "@assets/archive/illustrations/vision.jpg";
import zumbi from "@assets/archive/illustrations/zumbi.jpg";

import powerToThePeople from "@assets/archive/words/power-to-the-people.jpg";
import angela from "@assets/archive/words/angela.jpg";
import beTheChange from "@assets/archive/words/be-the-change.jpg";
import knowledge from "@assets/archive/words/knowledge.jpg";
import malcolm from "@assets/archive/words/malcolm.jpg";
import prince from "@assets/archive/words/prince.jpg";
import standForSomething from "@assets/archive/words/stand-for-something.jpg";
import thanksAndPraise from "@assets/archive/words/thanks-and-praise.jpg";
import theTruth from "@assets/archive/words/the-truth.jpg";

export const archiveCollections: ArchiveCollection[] = [
  {
    slug: "goddess-body",
    title: "GODDESS BODY",
    cover: sunkissed,
    alt: "Sunkissed cover artwork",
    year: "2025",
    description: "Figure studies and warm-toned compositions from the Goddess Body collection.",
    items: [
      { id: "gb-01", title: "SUNKISSED", image: sunkissed, alt: "Sunkissed", series: "Goddess Body", year: "2025", medium: "Digital" },
      { id: "gb-02", title: "EXPLORATION", image: exploration, alt: "Exploration", series: "Goddess Body", year: "2025", medium: "Digital" },
      { id: "gb-03", title: "GIVER OF LIFE", image: giverOfLife, alt: "Giver of Life", series: "Goddess Body", year: "2025", medium: "Digital" },
      { id: "gb-04", title: "GODESS BODY", image: godessBody, alt: "Godess Body", series: "Goddess Body", year: "2025", medium: "Digital" },
      { id: "gb-05", title: "KICK BACK", image: kickBack, alt: "Kick Back", series: "Goddess Body", year: "2025", medium: "Digital" },
      { id: "gb-06", title: "MUSE", image: muse, alt: "Muse", series: "Goddess Body", year: "2025", medium: "Digital" },
      { id: "gb-07", title: "NATURAL WINE 2", image: naturalWine2, alt: "Natural Wine 2", series: "Goddess Body", year: "2025", medium: "Digital" },
      { id: "gb-08", title: "NATURAL WINE", image: naturalWine, alt: "Natural Wine", series: "Goddess Body", year: "2025", medium: "Digital" },
      { id: "gb-09", title: "RELAXATION", image: relaxation, alt: "Relaxation", series: "Goddess Body", year: "2025", medium: "Digital" },
      { id: "gb-10", title: "THIS LIFE", image: thisLife, alt: "This Life", series: "Goddess Body", year: "2025", medium: "Digital" },
      { id: "gb-11", title: "TIME TO HEAL", image: timeToHeal, alt: "Time to Heal", series: "Goddess Body", year: "2025", medium: "Digital" },
    ],
  },
  {
    slug: "illustrations",
    title: "ILLUSTRATIONS",
    cover: swingALing,
    alt: "Swing-A-Ling cover artwork",
    year: "2024-2026",
    description: "Portraits, symbols, scenes, and graphic studies from the illustrations archive.",
    items: [
      { id: "ill-01", title: "SWING-A-LING", image: swingALing, alt: "Swing-A-Ling", series: "Illustrations", year: "2026", medium: "Digital" },
      { id: "ill-02", title: "A PLACE I'VE SEEN", image: aPlaceIveSeen, alt: "A Place I've Seen", series: "Illustrations", year: "2026", medium: "Digital" },
      { id: "ill-03", title: "AWAKE", image: awakeEye, alt: "Awake eye artwork", series: "Illustrations", year: "2026", medium: "Digital" },
      { id: "ill-04", title: "AWAKE 2", image: awakeHand, alt: "Awake hand artwork", series: "Illustrations", year: "2026", medium: "Digital" },
      { id: "ill-05", title: "DESERT SKY", image: desertSky, alt: "Desert Sky", series: "Illustrations", year: "2026", medium: "Digital" },
      { id: "ill-06", title: "MAZUNTE MORNING", image: mazunteMorning, alt: "Mazunte Morning", series: "Illustrations", year: "2026", medium: "Digital" },
      { id: "ill-07", title: "MEDITATION", image: meditation, alt: "Meditation", series: "Illustrations", year: "2026", medium: "Digital" },
      { id: "ill-08", title: "MUSCLE MEMORY", image: muscleMemory, alt: "Muscle Memory", series: "Illustrations", year: "2026", medium: "Digital" },
      { id: "ill-09", title: "OAXACA", image: oaxaca, alt: "Oaxaca", series: "Illustrations", year: "2026", medium: "Digital" },
      { id: "ill-10", title: "PAYAM", image: payam, alt: "Payam", series: "Illustrations", year: "2026", medium: "Digital" },
      { id: "ill-11", title: "PERFECTION", image: perfection, alt: "Perfection", series: "Illustrations", year: "2026", medium: "Digital" },
      { id: "ill-12", title: "ROOTS MAN", image: rootsMan, alt: "Roots Man", series: "Illustrations", year: "2026", medium: "Digital" },
      { id: "ill-13", title: "SOULES", image: soules, alt: "Soules", series: "Illustrations", year: "2026", medium: "Digital" },
      { id: "ill-14", title: "SOURCE", image: source, alt: "Source", series: "Illustrations", year: "2026", medium: "Digital" },
      { id: "ill-15", title: "VISION", image: vision, alt: "Vision", series: "Illustrations", year: "2026", medium: "Digital" },
      { id: "ill-16", title: "ZUMBI", image: zumbi, alt: "Zumbi", series: "Illustrations", year: "2026", medium: "Digital" },
    ],
  },
  {
    slug: "words-and-affirmations",
    title: "WORDS & AFFIRMATIONS",
    cover: powerToThePeople,
    alt: "Power to the People cover artwork",
    year: "2026",
    description: "Portraits and statement pieces built around affirmation, resistance, and cultural memory.",
    items: [
      { id: "wa-01", title: "POWER TO THE PEOPLE", image: powerToThePeople, alt: "Power to the People", series: "Words and Affirmations", year: "2026", medium: "Digital" },
      { id: "wa-02", title: "ANGELA", image: angela, alt: "Angela", series: "Words and Affirmations", year: "2026", medium: "Digital" },
      { id: "wa-03", title: "BE THE CHANGE", image: beTheChange, alt: "Be The Change", series: "Words and Affirmations", year: "2026", medium: "Digital" },
      { id: "wa-04", title: "KNOWLEDGE", image: knowledge, alt: "Knowledge", series: "Words and Affirmations", year: "2026", medium: "Digital" },
      { id: "wa-05", title: "MALCOLM", image: malcolm, alt: "Malcolm", series: "Words and Affirmations", year: "2026", medium: "Digital" },
      { id: "wa-06", title: "PRINCE", image: prince, alt: "Prince", series: "Words and Affirmations", year: "2026", medium: "Digital" },
      { id: "wa-07", title: "STAND FOR SOMETHING", image: standForSomething, alt: "Stand for Something", series: "Words and Affirmations", year: "2026", medium: "Digital" },
      { id: "wa-08", title: "THANKS AND PRAISE", image: thanksAndPraise, alt: "Thanks and Praise", series: "Words and Affirmations", year: "2026", medium: "Digital" },
      { id: "wa-09", title: "THE TRUTH", image: theTruth, alt: "The Truth", series: "Words and Affirmations", year: "2026", medium: "Digital" },
    ],
  },
];
