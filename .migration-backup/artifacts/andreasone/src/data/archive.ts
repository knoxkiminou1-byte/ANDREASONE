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
  { id: "a01", title: "GUITAR HANDS",     image: art01, alt: "Guitar hands",       series: "Sound Made Visible", year: "2024", medium: "Digital",  displayOrder: 1,  active: true },
  { id: "a04", title: "BLESSING",         image: art04, alt: "Blessing",           series: "Hand Studies",       year: "2024", medium: "Digital",  displayOrder: 2,  active: true },
  { id: "a05", title: "ALL-SEEING HAND",  image: art05, alt: "All-seeing hand",    series: "Hand Studies",       year: "2024", medium: "Digital",  displayOrder: 3,  active: true },
  { id: "a07", title: "EYE OF THE SUN",   image: art07, alt: "Eye of the sun",     series: "Symbology",          year: "2024", medium: "Digital",  displayOrder: 4,  active: true },
  { id: "a13", title: "AFRO REPOSE",      image: art13, alt: "Afro repose",        series: "Figures",            year: "2025", medium: "Digital",  displayOrder: 5,  active: true },
  { id: "a16", title: "WOMAN WITH FRUIT", image: art16, alt: "Woman with fruit",   series: "Figures",            year: "2025", medium: "Digital",  displayOrder: 6,  active: true },
  { id: "a03", title: "MOON SIT",         image: art03, alt: "Moon sit",           series: "Figures",            year: "2025", medium: "Digital",  displayOrder: 7,  active: true },
  { id: "a09", title: "GOLDEN HOUR",      image: art09, alt: "Golden hour",        series: "Figures",            year: "2025", medium: "Digital",  displayOrder: 8,  active: true },
  { id: "a12", title: "SUN HAT",          image: art12, alt: "Sun hat",            series: "Figures",            year: "2025", medium: "Digital",  displayOrder: 9,  active: true },
  { id: "a10", title: "BEACH SUN",        image: art10, alt: "Beach sun",          series: "Figures",            year: "2025", medium: "Mixed",    displayOrder: 10, active: true },
  { id: "a02", title: "STACKED FORMS I",  image: art02, alt: "Stacked forms I",    series: "Cubist Studies",     year: "2025", medium: "Digital",  displayOrder: 11, active: true },
  { id: "a15", title: "STACKED FORMS II", image: art15, alt: "Stacked forms II",   series: "Cubist Studies",     year: "2025", medium: "Digital",  displayOrder: 12, active: true },
  { id: "a06", title: "SWING A LING",     image: art06, alt: "Swing a ling",       series: "Soundsystems",       year: "2024", medium: "Digital",  displayOrder: 13, active: true },
  { id: "a08", title: "DESERT VISION",    image: art08, alt: "Desert vision",      series: "Landscapes",         year: "2024", medium: "Digital",  displayOrder: 14, active: true },
  { id: "a11", title: "BALI MORNING",     image: art11, alt: "Bali morning",       series: "Landscapes",         year: "2025", medium: "Digital",  displayOrder: 15, active: true },
  { id: "a14", title: "ROOFLINE",         image: art14, alt: "Roofline",           series: "Landscapes",         year: "2024", medium: "Digital",  displayOrder: 16, active: true },
  { id: "a17", title: "FAVELA SUN",       image: art17, alt: "Favela sun",         series: "Landscapes",         year: "2025", medium: "Digital",  displayOrder: 17, active: true },
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
