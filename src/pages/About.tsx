import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

import portrait from "@assets/zip2/IMG_0171.JPG";
import sceneA from "@assets/IMG_0188_1776998601429.JPG";
import sceneB from "@assets/IMG_0177_1776998601433.JPG";
import sceneC from "@assets/IMG_0227_1776998601432.JPG";
import sceneD from "@assets/IMG_0184_1776998601435.JPG";
import sceneE from "@assets/IMG_0237_1776998601428.JPG";
import sceneF from "@assets/IMG_0361_1776998601427.JPG";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } }
};

const timeline = [
  { year: "2018", line: "Started DJing in Brooklyn — house parties, lofts, basement nights." },
  { year: "2019", line: "Founded FMLY BZNS as a creative studio and event series." },
  { year: "2020", line: "Mixtape series goes online — early FMLY MXTP volumes find a global audience." },
  { year: "2021", line: "First international residency — Paseo Private, Tulum." },
  { year: "2022", line: "Launches The Gathering — annual cultural festival, sold out year one." },
  { year: "2023", line: "FMLY MXTP series formalized — quarterly volumes, full lineup credits." },
  { year: "2024", line: "Begins ongoing residencies in Bali (Mari Beach Club) and Brooklyn (House of Yes)." },
  { year: "2025", line: "Touring across NYC, Lagos, Lisbon, Berlin, Mexico City, Cape Town, Marrakech." },
  { year: "2026", line: "FMLY × Fried Rice NYC capsule. The Gathering returns. Vol. 12 ships." },
];

const press = ["RESIDENT ADVISOR", "MIXMAG", "OKAYAFRICA", "HIGHSNOBIETY", "i-D", "HYPEBEAST", "BANDCAMP", "BOILER ROOM"];

const family = [
  { name: "MAYA O.",      role: "Visual Direction",     city: "BROOKLYN", img: sceneE },
  { name: "TUNDE A.",     role: "Music Direction",      city: "LAGOS",    img: sceneA },
  { name: "ISABELA R.",   role: "Event Production",     city: "MEXICO CITY", img: sceneC },
  { name: "OMAR D.",      role: "Brand Strategy",       city: "LISBON",   img: sceneB },
  { name: "KEITA M.",     role: "Photography",          city: "PARIS",    img: sceneF },
  { name: "AYAKO S.",     role: "Capsule & Apparel",    city: "TOKYO",    img: sceneD },
];

export default function About() {
  return (
    <div className="flex flex-col w-full bg-background">
      {/* Hero portrait */}
      <section className="pt-24 md:pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 aspect-[4/5] overflow-hidden bg-foreground/5"
          >
            <img src={portrait} alt="Andreas" className="w-full h-full object-cover grayscale" />
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="lg:col-span-5"
          >
            <p className="font-display text-sm tracking-[0.3em] text-primary mb-6">ABOUT · ANDREAS</p>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-6">
              ANDREAS IS A<br/>GLOBAL OPERATOR.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Artist. DJ. Designer. Curator. The work moves between continents — but the lineage is one. Sound, image, ritual, family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio + pull quote */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed">
            <p>
              Andreas grew up between two worlds — afro-diaspora roots and the global club. He learned music the way most people learn language: by being inside it. Records on Sundays, percussion at family parties, gospel on Wednesdays, dub on the radio late at night.
            </p>
            <p>
              That bilingual ear became the foundation of everything that came after. He started DJing in Brooklyn in 2018 — first lofts and house parties, then proper rooms — and within a year had founded FMLY BZNS as a way to put a name on the work he was already doing: sound curation, brand identity, event design, and cultural translation.
            </p>
          </div>

          <blockquote className="my-16 py-12 border-y-2 border-primary text-center">
            <p className="font-display text-3xl md:text-5xl leading-tight uppercase tracking-wide mb-4">
              "Music is the weapon of the future."
            </p>
            <cite className="font-display tracking-widest text-sm text-foreground/60 not-italic">— FELA KUTI</cite>
          </blockquote>

          <div className="space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed">
            <p>
              Today the work spans three lanes — music, design, consulting — but the brief is always the same: build culture that means something. The FMLY MXTP series ships quarterly. The Gathering brings the family together once a year. Residencies in Bali and Brooklyn keep the calendar honest.
            </p>
            <p>
              When he's not touring or producing, he's painting. The 17-piece visual archive collected on this site is the quiet other side of the practice — figure studies, hand studies, soundsystems, landscapes. Made between studios, hotel rooms, and beach balconies. Same lineage, different medium.
            </p>
            <p>
              FMLY BZNS works with brands, founders, and artists who already have something to say. A few partners at a time. Real depth on each.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-4 bg-[#efe7d7]">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12">
            <p className="font-display text-sm tracking-[0.3em] text-primary mb-3">THE PATH</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">TIMELINE</h2>
          </div>
          <div className="space-y-6">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="grid grid-cols-12 gap-4 items-baseline border-b border-foreground/15 pb-5"
              >
                <span className="col-span-3 md:col-span-2 font-display text-3xl md:text-4xl text-primary">{t.year}</span>
                <p className="col-span-9 md:col-span-10 text-base md:text-lg text-foreground/80 leading-relaxed">{t.line}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="py-16 px-4 bg-background border-y border-foreground/10">
        <div className="container mx-auto max-w-6xl">
          <p className="font-display text-sm tracking-[0.3em] text-primary text-center mb-8">FEATURED IN</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {press.map((p) => (
              <span key={p} className="font-display text-base md:text-xl tracking-widest text-foreground/40 hover:text-foreground transition-colors">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* The Family */}
      <section className="py-24 px-4 bg-[#111111] text-[#efe7d7] relative">
        <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
        <div className="container mx-auto max-w-7xl relative">
          <div className="mb-12">
            <p className="font-display text-sm tracking-[0.3em] text-[#f6c45a] mb-3">THE PEOPLE</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">THE FAMILY</h2>
            <p className="text-base text-[#efe7d7]/70 mt-4 max-w-xl">A few of the collaborators who make FMLY BZNS run.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {family.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group"
              >
                <div className="aspect-square overflow-hidden bg-foreground/10 mb-3">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <p className="font-display tracking-widest text-sm">{m.name}</p>
                <p className="text-xs text-[#efe7d7]/60 mt-0.5">{m.role}</p>
                <p className="font-display tracking-widest text-[10px] text-[#f6c45a] mt-1">{m.city}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl md:text-5xl leading-tight mb-10">ENTER THE WORLD</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/music">
              <Button size="lg" className="rounded-none h-14 px-10 font-display tracking-widest">LISTEN</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="rounded-none h-14 px-10 font-display tracking-widest border-2">BOOK</Button>
            </Link>
            <Link href="/join">
              <Button size="lg" variant="outline" className="rounded-none h-14 px-10 font-display tracking-widest border-2">JOIN LIST</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
