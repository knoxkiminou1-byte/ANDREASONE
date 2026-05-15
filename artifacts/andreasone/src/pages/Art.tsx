import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

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

const pieces = [
  { src: art01, title: "MUSCLE MEMORY",     series: "Illustrations", year: "2024" },
  { src: art04, title: "PERFECTION",        series: "Illustrations", year: "2024" },
  { src: art05, title: "AWAKE",             series: "Illustrations", year: "2024" },
  { src: art07, title: "VISION",            series: "Illustrations", year: "2024" },
  { src: art13, title: "RELAXATION",        series: "Goddess Body", year: "2025" },
  { src: art16, title: "GIVER OF LIFE",     series: "Goddess Body", year: "2025" },
  { src: art03, title: "THIS LIFE",         series: "Goddess Body", year: "2025" },
  { src: art09, title: "NATURAL WINE",      series: "Goddess Body", year: "2025" },
  { src: art12, title: "SUNKISSED",         series: "Goddess Body", year: "2025" },
  { src: art10, title: "TIME TO HEAL",      series: "Goddess Body", year: "2025" },
  { src: art02, title: "EXPLORATION",       series: "Goddess Body", year: "2025" },
  { src: art15, title: "GODESS BODY",       series: "Goddess Body", year: "2025" },
  { src: art06, title: "SWING-A-LING",      series: "Illustrations", year: "2024" },
  { src: art08, title: "DESERT SKY",        series: "Illustrations", year: "2024" },
  { src: art11, title: "MAZUNTE",           series: "Illustrations", year: "2025" },
  { src: art14, title: "OAXACA",            series: "Illustrations", year: "2024" },
  { src: art17, title: "A PLACE I'VE SEEN", series: "Illustrations", year: "2025" },
];

export default function Art() {
  const [active, setActive] = useState<typeof pieces[0] | null>(null);

  useEffect(() => {
    if (active) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  return (
    <div className="w-full flex flex-col">
      <section className="bg-sage poster-panel border-b-8 border-[#111111] text-center">
        <ScrollReveal>
          <h1 className="text-[15vw] leading-none text-[#cf5d27]">VISUAL</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.07}>
          <h1 className="text-[18vw] stacked-title-word text-[#111111] mt-0 md:-mt-8">WORK</h1>
        </ScrollReveal>
      </section>

      <section className="bg-cream poster-panel">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 w-full [&>*]:mb-8">
          {pieces.map((p, i) => (
            <motion.div
              key={p.title}
              onClick={() => setActive(p)}
              className="group relative block w-full break-inside-avoid overflow-hidden border-8 border-[#111111] shadow-[8px_8px_0_#111111] cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
            >
              <img src={p.src} alt={p.title} className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]" />
              <div className="absolute inset-x-0 bottom-0 bg-[#efe7d7] border-t-4 border-[#111111] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                <p className="font-display text-xl text-[#f6c45a] mb-2">{p.series.toUpperCase()}</p>
                <p className="font-display text-4xl text-[#111111]">{p.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-orange poster-panel border-t-8 border-[#111111] text-center">
        <ScrollReveal>
          <h2 className="text-[10vw] leading-none text-[#111111] mb-12">COMMISSION</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="flex flex-col sm:flex-row gap-8 justify-center">
          <Link href="/contact">
            <Button size="lg" className="h-24 px-16 text-4xl font-display uppercase bg-[#111111] text-[#efe7d7] hover:bg-[#f6c45a] hover:text-[#111111] hover:-translate-y-1 rounded-none border-8 border-[#111111]">
              INQUIRE
            </Button>
          </Link>
          <Link href="/shop">
            <Button size="lg" className="h-24 px-16 text-4xl font-display uppercase bg-[#f6c45a] text-[#111111] hover:bg-[#111111] hover:text-[#f6c45a] hover:-translate-y-1 rounded-none border-8 border-[#111111]">
              SHOP COMING SOON
            </Button>
          </Link>
        </ScrollReveal>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#111111]/95 flex flex-col items-center justify-center p-4 md:p-12 cursor-pointer backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            <div className="relative max-w-7xl max-h-full w-full flex flex-col items-center border-8 border-[#cf5d27] bg-[#efe7d7] p-4 shadow-[16px_16px_0_#f6c45a]" onClick={e => e.stopPropagation()}>
              <button onClick={() => setActive(null)} className="absolute top-4 right-4 bg-[#111111] text-[#f6c45a] p-2 hover:bg-[#cf5d27] transition-colors">
                <X className="w-8 h-8" />
              </button>
              <img src={active.src} alt={active.title} className="max-w-full max-h-[70vh] object-contain mb-8 border-8 border-[#111111]" />
              <div className="text-center w-full bg-[#111111] p-6 text-[#efe7d7]">
                <h3 className="font-display text-5xl mb-2 text-[#f6c45a]">{active.title}</h3>
                <p className="font-sans text-xl uppercase tracking-widest">{active.series} · {active.year}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
