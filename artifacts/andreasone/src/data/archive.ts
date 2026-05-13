// ARCHIVE DATA FILE
// Add new art pieces here. Each entry will appear on the /archive page.
// Set `active: false` to hide an item without removing it.
// Adjust `displayOrder` (lower = first) to control ordering.
//
// TODO: Andreas — add your titles, years, and medium descriptions here.
// TODO: Replace placeholder images with final artwork files in src/assets/
// TODO: Update displayOrder to set the sequence you want on the page.

export type ArchiveItem = {
  id: string;
  title: string;
  image: string;         // import path — update as new images are added
  alt: string;
  year?: string;
  medium?: string;
  series?: string;
  description?: string;
  displayOrder: number;
  active: boolean;
};

// Import all archive images
import art01 from "@assets/IMG_0180_1776998601422.JPG";
import art02 from "@assets/IMG_0174_1776998601424.JPG";
import art03 from "@assets/IMG_0183_1776998601424.JPG";
import art04 from "@assets/IMG_0171_1776998601425.JPG";
import art05 from "@assets/IMG_0187_1776998601426.JPG";
import art06 from "@assets/IMG_0361_1776998601427.JPG";
import art07 from "@assets/IMG_0237_1776998601428.JPG";
import art08 from "@assets/IMG_0362_1776998601428.JPG";
import art09 from "@assets/IMG_0188_1776998601429.JPG";
import art10 from "@assets/Untitled_Artwork_1776998601430.jpg";
import art11 from "@assets/IMG_0364_1776998601431.JPG";
import art12 from "@assets/IMG_0227_1776998601432.JPG";
import art13 from "@assets/IMG_0177_1776998601433.JPG";
import art14 from "@assets/IMG_0363_1776998601434.JPG";
import art15 from "@assets/IMG_0184_1776998601435.JPG";
import art16 from "@assets/IMG_0175_1776998601436.JPG";
import art17 from "@assets/IMG_0360_1776998601436.JPG";

export const archiveItems: ArchiveItem[] = [
  { id: "a01", title: "MUSCLE MEMORY",    image: art01, alt: "Muscle Memory",      series: "Illustrations",      year: "2024", medium: "Digital",  displayOrder: 1,  active: true },
  { id: "a04", title: "PERFECTION",       image: art04, alt: "Perfection",         series: "Illustrations",      year: "2024", medium: "Digital",  displayOrder: 2,  active: true },
  { id: "a05", title: "AWAKE",            image: art05, alt: "Awake",              series: "Illustrations",      year: "2024", medium: "Digital",  displayOrder: 3,  active: true },
  { id: "a07", title: "VISION",           image: art07, alt: "Vision",             series: "Illustrations",      year: "2024", medium: "Digital",  displayOrder: 4,  active: true },
  { id: "a13", title: "RELAXATION",       image: art13, alt: "Relaxation",         series: "Goddess Body",       year: "2025", medium: "Digital",  displayOrder: 5,  active: true },
  { id: "a16", title: "KICK BACK",        image: art16, alt: "Kick Back",          series: "Goddess Body",       year: "2025", medium: "Digital",  displayOrder: 6,  active: true },
  { id: "a03", title: "NATURAL WINE",     image: art03, alt: "Natural Wine",       series: "Goddess Body",       year: "2025", medium: "Digital",  displayOrder: 7,  active: true },
  { id: "a09", title: "NATURAL WINE 2",   image: art09, alt: "Natural Wine 2",     series: "Goddess Body",       year: "2025", medium: "Digital",  displayOrder: 8,  active: true },
  { id: "a12", title: "SUNKISSED",        image: art12, alt: "Sunkissed",          series: "Goddess Body",       year: "2025", medium: "Digital",  displayOrder: 9,  active: true },
  { id: "a10", title: "TIME TO HEAL",     image: art10, alt: "Time to Heal",       series: "Goddess Body",       year: "2025", medium: "Mixed",    displayOrder: 10, active: true },
  { id: "a02", title: "EXPLORATION",      image: art02, alt: "Exploration",        series: "Goddess Body",       year: "2025", medium: "Digital",  displayOrder: 11, active: true },
  { id: "a15", title: "GIVER OF LIFE",    image: art15, alt: "Giver of Life",      series: "Goddess Body",       year: "2025", medium: "Digital",  displayOrder: 12, active: true },
  { id: "a06", title: "SWING-A-LING",     image: art06, alt: "Swing-A-Ling",       series: "Illustrations",      year: "2024", medium: "Digital",  displayOrder: 13, active: true },
  { id: "a08", title: "DESERT SKY",       image: art08, alt: "Desert Sky",         series: "Illustrations",      year: "2024", medium: "Digital",  displayOrder: 14, active: true },
  { id: "a11", title: "MAZUNTE",          image: art11, alt: "Mazunte",            series: "Illustrations",      year: "2025", medium: "Digital",  displayOrder: 15, active: true },
  { id: "a14", title: "OAXACA",           image: art14, alt: "Oaxaca",             series: "Illustrations",      year: "2024", medium: "Digital",  displayOrder: 16, active: true },
  { id: "a17", title: "MUSE",             image: art17, alt: "Muse",               series: "Illustrations",      year: "2025", medium: "Digital",  displayOrder: 17, active: true },
  // TODO: Add new archive items below this line
  // {
  //   id: "a18",
  //   title: "YOUR TITLE HERE",
  //   image: newArtwork, // import at top of file
  //   alt: "Description for screen readers",
  //   series: "Series Name",
  //   year: "2026",
  //   medium: "Acrylic / Digital / Mixed / etc.",
  //   description: "Optional longer description shown in lightbox.",
  //   displayOrder: 18,
  //   active: true,
  // },
];

export const activeArchive = archiveItems
  .filter(i => i.active)
  .sort((a, b) => a.displayOrder - b.displayOrder);
