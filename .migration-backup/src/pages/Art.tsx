import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

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

type Piece = {
  src: string;
  title: string;
  series: string;
  year: string;
  medium: string;
};

const pieces: Piece[] = [
  { src: art01, title: "GUITAR HANDS",       series: "Sound Made Visible", year: "2024", medium: "Digital Print" },
  { src: art04, title: "BLESSING",           series: "Hand Studies",        year: "2024", medium: "Digital Print" },
  { src: art05, title: "ALL-SEEING HAND",    series: "Hand Studies",        year: "2024", medium: "Digital Print" },
  { src: art07, title: "EYE OF THE SUN",     series: "Symbology",           year: "2024", medium: "Digital Print" },
  { src: art13, title: "AFRO REPOSE",        series: "Figures",             year: "2025", medium: "Digital Print" },
  { src: art16, title: "WOMAN WITH FRUIT",   series: "Figures",             year: "2025", medium: "Digital Print" },
  { src: art03, title: "MOON SIT",           series: "Figures",             year: "2025", medium: "Digital Print" },
  { src: art09, title: "GOLDEN HOUR",        series: "Figures",             year: "2025", medium: "Digital Print" },
  { src: art12, title: "SUN HAT",            series: "Figures",             year: "2025", medium: "Digital Print" },
  { src: art10, title: "BEACH SUN",          series: "Figures",             year: "2025", medium: "Digital Print" },
  { src: art02, title: "STACKED FORMS I",    series: "Cubist Studies",      year: "2025", medium: "Digital Print" },
  { src: art15, title: "STACKED FORMS II",   series: "Cubist Studies",      year: "2025", medium: "Digital Print" },
  { src: art06, title: "SWING A LING",       series: "Soundsystems",        year: "2024", medium: "Digital Print" },
  { src: art08, title: "DESERT VISION",      series: "Landscapes",          year: "2024", medium: "Digital Print" },
  { src: art11, title: "BALI MORNING",       series: "Landscapes",          year: "2025", medium: "Digital Print" },
  { src: art14, title: "ROOFLINE",           series: "Landscapes",          year: "2024", medium: "Digital Print" },
  { src: art17, title: "FAVELA SUN",         series: "Landscapes",          year: "2025", medium: "Digital Print" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

export default function Art() {
  const [active, setActive] = useState<Piece | null>(null);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-20 pb-16 container mx-auto px-4 md:px-8 max-w-6xl">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <p className="font-display text-sm tracking-[0.3em] text-primary mb-6">VISUAL WORK · 2024–2025</p>
          <h1 className="font-display text-6xl md:text-8xl leading-[0.95] mb-8">
            ART<br/>PORTFOLIO
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            A living archive of digital paintings, figure studies, and visual translations of sound. 
            Made between studios, hotel rooms, and beach balconies — wherever the work happens.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-xs font-display tracking-widest text-foreground/60">
            <span className="border border-foreground/20 px-3 py-1.5">FIGURES</span>
            <span className="border border-foreground/20 px-3 py-1.5">CUBIST STUDIES</span>
            <span className="border border-foreground/20 px-3 py-1.5">HAND STUDIES</span>
            <span className="border border-foreground/20 px-3 py-1.5">SOUNDSYSTEMS</span>
            <span className="border border-foreground/20 px-3 py-1.5">LANDSCAPES</span>
            <span className="border border-foreground/20 px-3 py-1.5">SYMBOLOGY</span>
          </div>
        </motion.div>
      </section>

      {/* Masonry Gallery */}
      <section className="container mx-auto px-4 md:px-8 pb-24 max-w-7xl">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [&>*]:mb-6">
          {pieces.map((p, i) => (
            <motion.button
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: (i % 6) * 0.05 }}
              onClick={() => setActive(p)}
              className="group relative block w-full break-inside-avoid overflow-hidden bg-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-primary"
              data-testid={`art-piece-${i}`}
            >
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 text-left">
                <p className="font-display text-[10px] tracking-[0.3em] text-[#f6c45a] mb-2">{p.series.toUpperCase()} · {p.year}</p>
                <p className="font-display text-2xl tracking-wider text-white">{p.title}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#445829] text-[#efe7d7] py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl md:text-6xl mb-6 leading-tight">COMMISSION A PIECE</h2>
          <p className="text-lg opacity-80 mb-10 max-w-xl mx-auto">
            Portraits, brand artwork, event posters, album covers, and editorial illustration.
            Limited prints and originals available on request.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="rounded-none h-14 px-10 font-display tracking-widest bg-[#f6c45a] text-[#111111] hover:bg-[#cf5d27] hover:text-white border-0">
                INQUIRE
              </Button>
            </Link>
            <Link href="/shop">
              <Button size="lg" variant="outline" className="rounded-none h-14 px-10 font-display tracking-widest border-[#efe7d7] text-[#efe7d7] hover:bg-[#efe7d7] hover:text-[#445829]">
                SHOP PRINTS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/95 flex flex-col"
            onClick={() => setActive(null)}
            data-testid="art-lightbox"
          >
            <button
              onClick={(e) => { e.stopPropagation(); setActive(null); }}
              className="absolute top-6 right-6 z-10 text-white/70 hover:text-white p-2"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={active.src}
                alt={active.title}
                className="max-w-full max-h-[75vh] object-contain"
              />
              <div className="text-center text-[#efe7d7] max-w-xl">
                <p className="font-display text-xs tracking-[0.3em] text-[#f6c45a] mb-2">
                  {active.series.toUpperCase()} · {active.year}
                </p>
                <h3 className="font-display text-3xl md:text-4xl tracking-wider mb-2">{active.title}</h3>
                <p className="text-sm text-white/50">{active.medium}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
